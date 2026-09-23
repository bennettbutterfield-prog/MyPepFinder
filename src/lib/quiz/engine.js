/**
 * Deterministic adaptive-quiz engine.
 * No runtime LLM. Hard filters sit outside any ranking weight.
 */

import { getPeptideOverview, getPeptideOverviewLead } from "../../data/peptide-overviews.js";
import { QUIZ_COMPOUNDS } from "../../data/quiz/compounds.js";
import {
  QUESTION_BY_ID,
  QUESTION_SEQUENCE,
  QUIZ_GOALS,
} from "../../data/quiz/questions.js";

const HUMAN_EVIDENCE = new Set(["human-outcome", "human-biomarker"]);
const ACTIVE_ELIGIBILITY = new Set(["supported", "exploratory", "related"]);
const BAND_ORDER = {
  "human-outcome": 0,
  "human-biomarker": 1,
  manufacturer: 2,
  animal: 3,
  cell: 4,
  none: 5,
};

export const RESULT_STATES = {
  CLOSEST: "closest",
  COMPARE: "compare",
  EARLY: "early",
  GAP: "gap",
};

function resolvedGoal(answers) {
  if (answers.goal && answers.goal !== "unsure") return answers.goal;
  if (answers["goal.unsure"]) return answers["goal.unsure"];
  return null;
}

function primaryOutcome(answers) {
  const goal = resolvedGoal(answers);
  const map = {
    "weight-loss": answers["weight.outcome"],
    muscle: answers["muscle.outcome"],
    recovery: answers["recovery.area"],
    cognition: answers["cognition.outcome"],
    sleep: answers["sleep.outcome"],
    hair: answers["hair.outcome"],
    skin: answers["skin.outcome"],
    "sexual-health": answers["sexual.outcome"],
    aging: answers["aging.outcome"],
    immune: answers["immune.outcome"],
  };
  return map[goal] || null;
}

function evidenceFromAnswers(answers) {
  if (answers["shared.evidence"]) return answers["shared.evidence"];
  if (answers["cognition.scope"] === "human-condition") return "human-only";
  if (answers["cognition.scope"] === "early") return "include-early";
  return null;
}

function formulationFromAnswers(answers) {
  const raw = answers["shared.formulation"] || answers["skin.form"] || null;
  if (raw === "none" || raw === "any" || raw === "any-separate") return "any";
  return raw;
}

function needsClinicalCare(answers) {
  return (
    answers["recovery.skin"] === "active-wound" ||
    answers["recovery.skin"] === "slow-wound" ||
    answers["skin.outcome"] === "wound" ||
    answers["cognition.memory"] === "worsening" ||
    answers["sexual.context"] === "medication" ||
    answers["sexual.context"] === "fertility-care" ||
    answers["immune.context"] === "unexplained"
  );
}

/**
 * Flatten answers into the research question the engine will match.
 */
export function normalizeAnswers(answers = {}) {
  const goal = resolvedGoal(answers);
  const outcome = primaryOutcome(answers);
  const evidence = evidenceFromAnswers(answers);
  const formulation = formulationFromAnswers(answers);

  const tags = new Set(
    [
      outcome,
      answers["weight.abdomen"],
      answers["weight.metabolic"],
      answers["muscle.bottleneck"],
      answers["muscle.endurance"],
      answers["muscle.hormone"],
      answers["recovery.tissue"],
      answers["recovery.endpoint"],
      answers["recovery.skin"],
      answers["cognition.pattern"],
      answers["cognition.memory"],
      answers["sleep.context"],
      answers["sleep.priority"],
      answers["hair.target"],
      answers["skin.priority"],
      answers["sexual.distinction"],
      answers["sexual.population"],
      answers["sexual.context"],
      answers["sexual.reproductive"],
      answers["aging.practical"],
      answers["aging.cell"],
      answers["aging.organ"],
      answers["immune.context"],
      answers["immune.location"],
      answers["immune.endpoint"],
    ].filter(Boolean)
  );

  return {
    goal,
    outcome,
    evidence,
    formulation,
    tags,
    answers,
    plateau: false,
    keepMuscle: outcome === "keep-muscle" || answers["weight.metabolic"] === "keep-muscle",
    visceralMedical: answers["weight.abdomen"] === "visceral-medical",
    generalBelly:
      outcome === "abdominal" && answers["weight.abdomen"] !== "visceral-medical",
    clinicalCare: needsClinicalCare(answers),
    humanOnly: evidence === "human-only",
    includeEarly: evidence === "include-early",
    topicalOnly: formulation === "topical",
    sexualPopulation: answers["sexual.population"] || null,
    lifespanAsk: outcome === "lifespan",
    fewerInfections:
      outcome === "fewer-infections" ||
      answers["immune.endpoint"] === "fewer-infections",
  };
}

export function getQuestionForContext(id) {
  return QUESTION_BY_ID[id] || null;
}

export function isQuestionEligible(question, ctx) {
  if (!question) return false;
  if (ctx.answers[question.id]) return false;
  return Boolean(question.when(ctx));
}

export function getEligibleQuestions(answers) {
  const ctx = normalizeAnswers(answers);
  ctx.answers = answers;
  return QUESTION_SEQUENCE.map((id) => getQuestionForContext(id, ctx)).filter(
    (question) => isQuestionEligible(question, ctx)
  );
}

function hasRequiredContext(ctx) {
  if (!ctx.goal || !ctx.outcome) return false;
  if (ctx.goal === "weight-loss" && ctx.outcome === "abdominal") {
    return Boolean(ctx.answers["weight.abdomen"]);
  }
  if (ctx.goal === "cognition" && (ctx.outcome === "focus" || ctx.outcome === "clarity")) {
    return Boolean(ctx.answers["cognition.pattern"]);
  }
  if (ctx.goal === "sexual-health") {
    return Boolean(ctx.answers["sexual.context"]);
  }
  return true;
}

export function canFinish(answers) {
  const ctx = normalizeAnswers(answers);
  ctx.answers = answers;
  if (!ctx.goal || !ctx.outcome || !ctx.evidence) return false;
  if (!hasRequiredContext(ctx)) return false;
  const remaining = getEligibleQuestions(answers).filter(
    (question) => !question.optional && question.stage !== "preferences"
  );
  return remaining.length === 0;
}

export function getNextQuestion(answers) {
  const ctx = normalizeAnswers(answers);
  ctx.answers = answers;
  const eligible = getEligibleQuestions(answers);
  if (!eligible.length) return null;
  const goals = eligible.filter((question) => question.stage === "goal");
  if (goals.length) return goals[0];
  const details = eligible.filter((question) => question.stage === "details");
  if (details.length) return details[0];
  const prefs = eligible.filter((question) => question.stage === "preferences");
  if (!ctx.evidence) {
    return prefs.find((question) => question.id === "shared.evidence") || prefs[0];
  }
  if (prefs.find((question) => question.id === "shared.formulation") && !ctx.formulation) {
    return prefs.find((question) => question.id === "shared.formulation");
  }
  return prefs[0] || null;
}

export function pruneAnswers(answers) {
  const next = { ...answers };
  let changed = true;
  while (changed) {
    changed = false;
    const ctx = normalizeAnswers(next);
    ctx.answers = next;
    for (const id of QUESTION_SEQUENCE) {
      if (!next[id]) continue;
      const question = getQuestionForContext(id, ctx);
      if (!question || question.sticky) continue;
      if (!question.when(ctx)) {
        delete next[id];
        changed = true;
      }
    }
  }
  return next;
}

function claimMatches(claim, ctx, { goalOnly = false } = {}) {
  if (!claim.goals?.includes(ctx.goal)) return false;
  if (goalOnly) return true;
  if (ctx.lifespanAsk && claim.outcomes.includes("lifespan")) return true;
  if (ctx.outcome && claim.outcomes.includes(ctx.outcome)) return true;
  for (const tag of ctx.tags) {
    if (claim.outcomes.includes(tag)) return true;
  }
  return false;
}

function allowedByEvidence(claim, ctx) {
  if (ctx.humanOnly) {
    return claim.evidence === "human-outcome";
  }
  if (ctx.evidence === "strongest") {
    return true;
  }
  return true;
}

function allowedByFormulation(claim, ctx) {
  if (!ctx.formulation || ctx.formulation === "any") return true;
  const forms = claim.forms || ["injectable"];
  return forms.includes(ctx.formulation);
}

function tesamorelinBlocked(compound, ctx) {
  if (compound.id !== "tesamorelin") return false;
  return !ctx.visceralMedical;
}

function pt141PopulationBlocked(compound, ctx) {
  if (compound.id !== "pt-141") return false;
  if (ctx.goal !== "sexual-health") return false;
  if (ctx.sexualPopulation === "men") return true;
  if (ctx.outcome === "erections" || ctx.outcome === "reproductive") return true;
  return false;
}

function melanotanBlocked(compound, ctx) {
  if (compound.id !== "melanotan-2") return false;
  if (ctx.goal === "skin" && ctx.outcome === "pigment") return true;
  if (ctx.outcome === "erections") return true;
  return false;
}

function pickClaim(claims) {
  return [...claims].sort(
    (a, b) => (BAND_ORDER[a.evidence] ?? 9) - (BAND_ORDER[b.evidence] ?? 9)
  )[0];
}

function isSafetyBlocked(compound, ctx) {
  if (compound.eligibility === "unavailable" || compound.eligibility === "excluded") {
    return true;
  }
  if (compound.kind === "blend" && compound.eligibility !== "supported") return true;
  if (compound.id === "kisspeptin-10" && ctx.answers["sexual.reproductive"] === "fertility") {
    return true;
  }
  if (tesamorelinBlocked(compound, ctx)) return true;
  if (pt141PopulationBlocked(compound, ctx)) return true;
  if (melanotanBlocked(compound, ctx)) return true;
  return false;
}

function scoreClaim(claim, ctx, compound) {
  let score = 0;
  if (claim.goals?.includes(ctx.goal)) score += 8;
  if (ctx.outcome && claim.outcomes.includes(ctx.outcome)) score += 10;
  for (const tag of ctx.tags) {
    if (claim.outcomes.includes(tag)) score += 2;
  }

  if (claim.primary) score += 5;
  if (claim.regulatory) score += 3;

  if (claim.evidence === "human-outcome") score += 6;
  else if (claim.evidence === "human-biomarker") score += 3;
  else if (claim.evidence === "manufacturer") score += 1;
  else score += 0;

  if (claim.findings === "negative") score -= 20;
  if (claim.findings === "mixed") score -= 1;
  if (compound.kind === "blend") score -= 4;
  if (compound.eligibility === "related") score -= 3;
  if (compound.eligibility === "exploratory") score -= 1;
  if (ctx.keepMuscle && compound.eligibility !== "supported") {
    if (["ipamorelin", "cjc-1295-dac", "cjc-1295-no-dac", "hexarelin", "sermorelin"].includes(compound.id)) {
      score -= 12;
    }
  }
  return score;
}

function bandFor(claim, compound) {
  if (compound.eligibility === "related" || claim.evidence === "none") return "related";
  if (claim.evidence === "human-outcome" && claim.findings !== "negative") return "human-outcome";
  if (claim.evidence === "human-outcome" && claim.findings === "mixed") return "limited-human";
  if (claim.evidence === "human-biomarker") return "limited-human";
  if (claim.evidence === "manufacturer") return "early";
  if (claim.evidence === "animal" || claim.evidence === "cell") return "early";
  return "related";
}

function whyConnections(claim, ctx, compound) {
  const why = [];
  const goalMeta = QUIZ_GOALS.find((item) => item.id === ctx.goal);
  if (goalMeta && claim.goals?.includes(ctx.goal)) {
    why.push(`You chose ${goalMeta.label.toLowerCase()} as the main research goal.`);
  }
  if (ctx.outcome && claim.outcomes.includes(ctx.outcome)) {
    why.push(`Its studies speak to the specific outcome you selected.`);
  } else if ([...ctx.tags].some((tag) => claim.outcomes.includes(tag))) {
    why.push(`A follow-up answer lined up with the endpoint this compound was studied for.`);
  }
  if (ctx.topicalOnly && (claim.forms || []).includes("topical")) {
    why.push(`You asked for applied-to-skin or scalp research.`);
  }
  if (ctx.humanOnly && claim.evidence === "human-outcome") {
    why.push(`You asked for direct studies in people.`);
  }
  if (!why.length) {
    why.push(`${compound.name} appears in the library for a related research question.`);
  }
  return why.slice(0, 2);
}

function evidenceLabel(claim) {
  if (claim.findings === "negative") return "Human research did not establish the hoped-for benefit.";
  if (claim.evidence === "human-outcome" && claim.findings === "positive") {
    return "Direct human outcome evidence for a specific use and population.";
  }
  if (claim.evidence === "human-outcome" && claim.findings === "mixed") {
    return "Limited or mixed human outcome evidence.";
  }
  if (claim.evidence === "human-biomarker") {
    return "Human studies measured a biological signal, not the everyday outcome you asked about.";
  }
  if (claim.evidence === "manufacturer") {
    return "Limited independent evidence; manufacturer or cosmetic-ingredient materials are the main source.";
  }
  if (claim.evidence === "animal") return "Animal research only for this outcome.";
  if (claim.evidence === "cell") return "Cell or laboratory-tissue research only.";
  return "No verified outcome evidence for this exact request.";
}

/**
 * Rank compounds for the normalized answers.
 */
export function evaluateCandidates(answers) {
  const ctx = normalizeAnswers(answers);
  ctx.answers = answers;
  const excludedExamples = [];
  const relatedPool = [];
  const scored = [];

  const noteExclusion = (compound, reason, { front = false } = {}) => {
    const entry = { id: compound.id, name: compound.name, reason };
    if (front) excludedExamples.unshift(entry);
    else excludedExamples.push(entry);
  };

  const relevantToQuery = (compound) =>
    (compound.claims || []).some((item) => claimMatches(item, ctx));

  for (const compound of QUIZ_COMPOUNDS) {
    if (compound.eligibility === "unavailable") {
      continue;
    }
    if (compound.eligibility === "excluded") {
      if (relevantToQuery(compound)) {
        noteExclusion(compound, compound.eligibilityReason);
      }
      continue;
    }
    if (melanotanBlocked(compound, ctx)) {
      excludedExamples.push({
        id: compound.id,
        name: compound.name,
        reason:
          "Melanotan-2 is not presented as a safe tanning method or a default erection treatment.",
      });
      continue;
    }
    if (pt141PopulationBlocked(compound, ctx)) {
      excludedExamples.push({
        id: compound.id,
        name: compound.name,
        reason:
          "The approved desire indication is population-specific and is not generalized to this answer.",
      });
      continue;
    }
    if (compound.id === "kisspeptin-10" && ctx.answers["sexual.reproductive"] === "fertility") {
      noteExclusion(
        compound,
        "Hormone-signal studies do not establish fertility outcomes.",
        { front: true }
      );
      const claim = pickClaim(compound.claims || []);
      if (claim) {
        relatedPool.push({ compound, claim, score: 0, band: "related" });
      }
      continue;
    }
    if (compound.eligibility === "related") {
      const relatedClaim = (compound.claims || []).find((item) => claimMatches(item, ctx));
      if (relatedClaim) {
        relatedPool.push({
          compound,
          claim: relatedClaim,
          score: 0,
          band: "related",
        });
        noteExclusion(
          compound,
          compound.eligibilityReason ||
            "Nearby research only. It is not a match for this exact request."
        );
      }
      continue;
    }
    if (compound.kind === "blend" && compound.eligibility !== "supported") {
      if (relevantToQuery(compound)) {
        noteExclusion(
          compound,
          "A combination does not inherit demonstrated benefit from separate ingredient studies."
        );
      }
      continue;
    }
    if (tesamorelinBlocked(compound, ctx)) {
      noteExclusion(
        compound,
        "Tesamorelin’s established evidence is not a general belly-fat or weight-loss treatment.",
        { front: true }
      );
      continue;
    }
    if (ctx.lifespanAsk && compound.eligibility !== "related") {
      // still allow exploratory cellular cards in a separate early band, never as lifespan proof
    }

    const matchedClaims = (compound.claims || []).filter((claim) => claimMatches(claim, ctx));
    if (!matchedClaims.length) continue;

    const claim = matchedClaims.sort(
      (a, b) => (BAND_ORDER[a.evidence] ?? 9) - (BAND_ORDER[b.evidence] ?? 9)
    )[0];

    if (!allowedByFormulation(claim, ctx)) {
      excludedExamples.push({
        id: compound.id,
        name: compound.name,
        reason: "Its verified research form does not match the formulation you selected.",
      });
      continue;
    }
    if (!allowedByEvidence(claim, ctx)) {
      const reason =
        ctx.humanOnly && claim.evidence !== "human-outcome"
          ? "Only animal, cell, or biomarker research is available, and you asked for direct studies in people."
          : "The available evidence does not meet the scope you selected.";
      excludedExamples.push({
        id: compound.id,
        name: compound.name,
        reason,
      });
      relatedPool.push({ compound, claim, score: 0, band: bandFor(claim, compound) });
      continue;
    }
    if (claim.findings === "negative" && ctx.humanOnly) {
      excludedExamples.push({
        id: compound.id,
        name: compound.name,
        reason: "Human studies exist, but they did not establish the hoped-for benefit.",
      });
      continue;
    }
    if (ctx.keepMuscle && ["ipamorelin", "cjc-1295-dac", "hexarelin", "sermorelin"].includes(compound.id)) {
      excludedExamples.push({
        id: compound.id,
        name: compound.name,
        reason:
          "Keeping muscle is not an automatic growth-hormone add-on. Hormone-release studies are not muscle-retention trials.",
      });
      continue;
    }
    if (ctx.fewerInfections && compound.eligibility !== "supported") {
      if (["thymosin-alpha-1", "thymalin", "thymagen", "thymulin", "ta-1-complex"].includes(compound.id)) {
        excludedExamples.push({
          id: compound.id,
          name: compound.name,
          reason:
            "Condition-specific or biomarker immune studies do not establish fewer infections in healthy people.",
        });
        relatedPool.push({
          compound,
          claim,
          score: 0,
          band: "related",
        });
        continue;
      }
    }
    if (ctx.lifespanAsk) {
      excludedExamples.push({
        id: compound.id,
        name: compound.name,
        reason: "No library entry is presented as proven to extend human lifespan.",
      });
      relatedPool.push({
        compound,
        claim,
        score: 0,
        band: "related",
      });
      continue;
    }

    scored.push({
      compound,
      claim,
      score: scoreClaim(claim, ctx, compound),
      band: bandFor(claim, compound),
    });
  }

  if (!scored.length) {
    const already = new Set(relatedPool.map((row) => row.compound.id));
    for (const compound of QUIZ_COMPOUNDS) {
      if (already.has(compound.id) || isSafetyBlocked(compound, ctx)) continue;
      const fallbackClaims = (compound.claims || []).filter((claim) =>
        claimMatches(claim, ctx, { goalOnly: true })
      );
      if (!fallbackClaims.length) continue;
      const claim = pickClaim(fallbackClaims);
      if (!allowedByFormulation(claim, ctx)) continue;
      relatedPool.push({
        compound,
        claim,
        score: scoreClaim(claim, ctx, compound),
        band: bandFor(claim, compound),
      });
    }
  }

  scored.sort(
    (a, b) =>
      (BAND_ORDER[a.claim.evidence] ?? 9) - (BAND_ORDER[b.claim.evidence] ?? 9) ||
      b.score - a.score ||
      a.compound.name.localeCompare(b.compound.name)
  );
  relatedPool.sort(
    (a, b) =>
      (BAND_ORDER[a.claim.evidence] ?? 9) - (BAND_ORDER[b.claim.evidence] ?? 9) ||
      b.score - a.score ||
      a.compound.name.localeCompare(b.compound.name)
  );

  const deduped = [];
  const seenParent = new Set();
  for (const row of scored) {
    const parent = row.compound.parentId || row.compound.id;
    if (seenParent.has(parent) && row.compound.parentId) continue;
    if (seenParent.has(parent) && row.compound.id !== parent) continue;
    seenParent.add(parent);
    deduped.push(row);
  }

  return { ctx, scored: deduped, excludedExamples, relatedPool };
}

function resultState(rows, ctx) {
  if (ctx.clinicalCare && !rows.length) return RESULT_STATES.GAP;
  if (!rows.length) return RESULT_STATES.GAP;
  const top = rows[0];
  const human = rows.filter((row) => row.band === "human-outcome");
  if (ctx.lifespanAsk) return RESULT_STATES.GAP;
  if (human.length >= 2 && Math.abs(human[0].score - human[1].score) < 6) {
    return RESULT_STATES.COMPARE;
  }
  if (top.band === "human-outcome" && top.claim.findings === "positive") {
    return RESULT_STATES.CLOSEST;
  }
  if (top.band === "early" || top.band === "related" || top.claim.evidence === "manufacturer") {
    return RESULT_STATES.EARLY;
  }
  if (top.band === "limited-human") {
    return rows.length > 1 ? RESULT_STATES.COMPARE : RESULT_STATES.CLOSEST;
  }
  return RESULT_STATES.EARLY;
}

function summarySentence(ctx) {
  const goal = QUIZ_GOALS.find((item) => item.id === ctx.goal);
  const bits = [];
  if (goal) bits.push(`You’re researching ${goal.label.toLowerCase()}`);
  if (ctx.outcome) bits.push(`with a focus on that specific outcome`);
  if (ctx.topicalOnly) bits.push(`prefer products applied to the skin or scalp`);
  if (ctx.humanOnly) {
    bits.push(`and want only direct studies in people`);
  } else if (ctx.includeEarly) {
    bits.push(`and are willing to include early laboratory research`);
  } else if (ctx.evidence === "strongest") {
    bits.push(`and want the strongest available evidence first`);
  }
  return `${bits.join(", ")}.`;
}

function chipLabels(ctx) {
  const chips = [];
  const goal = QUIZ_GOALS.find((item) => item.id === ctx.goal);
  if (goal) chips.push({ id: "goal", label: goal.label, questionId: "goal" });
  if (ctx.outcome) {
    chips.push({
      id: "outcome",
      label: "Specific outcome set",
      questionId:
        ctx.goal === "weight-loss"
          ? "weight.outcome"
          : ctx.goal === "muscle"
            ? "muscle.outcome"
            : ctx.goal === "recovery"
              ? "recovery.area"
              : ctx.goal === "cognition"
                ? "cognition.outcome"
                : ctx.goal === "sleep"
                  ? "sleep.outcome"
                  : ctx.goal === "hair"
                    ? "hair.outcome"
                    : ctx.goal === "skin"
                      ? "skin.outcome"
                      : ctx.goal === "sexual-health"
                        ? "sexual.outcome"
                        : ctx.goal === "aging"
                          ? "aging.outcome"
                          : "immune.outcome",
    });
  }
  if (ctx.evidence) {
    chips.push({
      id: "evidence",
      label:
        ctx.humanOnly
          ? "Human studies only"
          : ctx.includeEarly
            ? "Includes early research"
            : "Strongest evidence first",
      questionId: "shared.evidence",
    });
  }
  if (ctx.formulation && ctx.formulation !== "any") {
    chips.push({
      id: "form",
      label: ctx.formulation === "topical" ? "Applied to skin/scalp" : ctx.formulation,
      questionId: "shared.formulation",
    });
  }
  return chips;
}

function uniqueRows(rows) {
  const seen = new Set();
  const next = [];
  for (const row of rows) {
    if (!row?.compound?.id || seen.has(row.compound.id)) continue;
    seen.add(row.compound.id);
    next.push(row);
  }
  return next;
}

function toCard(row, ctx) {
  const { compound, claim } = row;
  const overview = getPeptideOverview(compound.pageSlug);
  return {
    id: compound.id,
    name: compound.name,
    href: `/peptides/${compound.pageSlug}`,
    pageSlug: compound.pageSlug,
    kind: compound.kind,
    eligibility: compound.eligibility,
    band: row.band,
    why: whyConnections(claim, ctx, compound),
    studied:
      claim.studied ||
      getPeptideOverviewLead(compound.pageSlug) ||
      overview?.overview ||
      `${compound.name} appears in the library for related research.`,
    evidence: evidenceLabel(claim),
    limitation:
      claim.limitation ||
      compound.eligibilityReason ||
      "This is nearby research, not a proven match for this exact request.",
    regulatory: claim.regulatory || null,
    sources: claim.sources || overview?.sources?.slice(0, 2) || [],
    findings: claim.findings,
  };
}

export function explainResults(answers) {
  const { ctx, scored, excludedExamples, relatedPool } = evaluateCandidates(answers);
  const human = scored.filter((row) => row.band === "human-outcome");
  const limited = scored.filter((row) => row.band === "limited-human");
  const early = scored.filter((row) => row.band === "early" || row.band === "related");

  let pool = ctx.humanOnly ? human : [...human, ...limited, ...early];
  const usedFallback = !pool.length;

  if (!pool.length) {
    pool = uniqueRows(relatedPool.filter((row) => row.compound.kind !== "blend")).map((row) => ({
      ...row,
      band: row.band === "human-outcome" ? "related" : row.band,
    }));
  }

  if (ctx.clinicalCare) {
    const educational = pool.filter(
      (row) => row.compound.eligibility !== "supported" || row.band !== "human-outcome"
    );
    if (educational.length) pool = educational;
  }

  const visibleRows = pool.slice(0, 3);
  const visible = visibleRows.map((row) => toCard(row, ctx));
  const state =
    ctx.lifespanAsk || usedFallback || !visible.length
      ? RESULT_STATES.GAP
      : resultState(visibleRows, ctx);

  const careMessage = ctx.clinicalCare
    ? "This answer points to a situation that needs a qualified clinician, not a peptide ranking. The reading below is general education."
    : null;

  const visibleIds = new Set(visible.map((card) => card.id));
  const relatedReading = uniqueRows(relatedPool)
    .filter((row) => row.compound.kind !== "blend" && !visibleIds.has(row.compound.id))
    .slice(0, 3)
    .map((row) => toCard(row, ctx));

  return {
    state,
    summary: summarySentence(ctx),
    chips: chipLabels(ctx),
    cards: visible,
    relatedReading,
    excluded: excludedExamples.slice(0, 6),
    careMessage,
    plateauNote: null,
    clinicalCare: ctx.clinicalCare,
    ctx,
  };
}

export function coverageAudit() {
  return QUIZ_COMPOUNDS.map((compound) => ({
    id: compound.id,
    name: compound.name,
    pageSlug: compound.pageSlug,
    eligibility: compound.eligibility,
    reason: compound.eligibilityReason,
    goals: [...new Set((compound.claims || []).flatMap((claim) => claim.goals || []))],
    claims: (compound.claims || []).map((claim) => claim.id),
  }));
}

export function walkPath(answerList) {
  const answers = {};
  const asked = [];
  for (const [questionId, optionId] of answerList) {
    answers[questionId] = optionId;
    asked.push(questionId);
  }
  return {
    answers: pruneAnswers(answers),
    asked,
    next: getNextQuestion(pruneAnswers(answers)),
    results: canFinish(pruneAnswers(answers)) ? explainResults(pruneAnswers(answers)) : null,
  };
}

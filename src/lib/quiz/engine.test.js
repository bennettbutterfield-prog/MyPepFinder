import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { peptideProducts } from "../../data/peptide-taxonomy.js";
import { QUIZ_COMPOUNDS } from "../../data/quiz/compounds.js";
import { QUIZ_GOALS } from "../../data/quiz/questions.js";
import {
  canFinish,
  coverageAudit,
  evaluateCandidates,
  explainResults,
  getNextQuestion,
  normalizeAnswers,
  pruneAnswers,
  RESULT_STATES,
} from "./engine.js";

function play(steps) {
  const answers = {};
  const asked = [];
  for (const [id, value] of steps) {
    answers[id] = value;
    asked.push(id);
  }
  const pruned = pruneAnswers(answers);
  return {
    answers: pruned,
    asked,
    next: getNextQuestion(pruned),
    ctx: normalizeAnswers(pruned),
    results: explainResults(pruned),
  };
}

const appetiteJourney = [
  ["goal", "weight-loss"],
  ["weight.outcome", "hunger"],
  ["shared.evidence", "human-only"],
];

const expressionJourney = [
  ["goal", "skin"],
  ["skin.outcome", "lines"],
  ["skin.form", "topical"],
  ["shared.evidence", "include-early"],
];

const tendonJourney = [
  ["goal", "recovery"],
  ["recovery.area", "tendon"],
  ["recovery.endpoint", "healing"],
  ["shared.evidence", "human-only"],
];

const focusStressJourney = [
  ["goal", "cognition"],
  ["cognition.outcome", "focus"],
  ["cognition.pattern", "stress"],
  ["shared.evidence", "strongest"],
];

describe("adaptive quiz engine", () => {
  it("asks different follow-ups for hunger versus abdominal fat", () => {
    const hunger = play([
      ["goal", "weight-loss"],
      ["weight.outcome", "hunger"],
    ]);
    const belly = play([
      ["goal", "weight-loss"],
      ["weight.outcome", "abdominal"],
    ]);
    assert.equal(hunger.next.id, "shared.evidence");
    assert.equal(belly.next.id, "weight.abdomen");
  });

  it("does not label tesamorelin as a general belly-fat treatment", () => {
    const result = play([
      ["goal", "weight-loss"],
      ["weight.outcome", "abdominal"],
      ["weight.abdomen", "waist"],
      ["shared.evidence", "strongest"],
    ]).results;
    assert.equal(result.cards.some((card) => card.id === "tesamorelin"), false);
    assert.match(
      result.excluded.find((item) => item.id === "tesamorelin")?.reason || "",
      /not a general belly-fat/i
    );
  });

  it("does not add growth-hormone peptides just to keep muscle", () => {
    const result = play([
      ["goal", "weight-loss"],
      ["weight.outcome", "keep-muscle"],
      ["shared.evidence", "human-only"],
    ]).results;
    const gh = ["ipamorelin", "cjc-1295-dac", "hexarelin", "sermorelin"];
    assert.ok(result.cards.length > 0);
    assert.equal(result.cards.some((card) => gh.includes(card.id)), false);
    assert.ok(result.cards.some((card) => ["glp-1-s", "glp-1-t", "retatrutide"].includes(card.id)));
  });

  it("splits muscle soreness from tendon injury", () => {
    const sore = play([
      ["goal", "muscle"],
      ["muscle.outcome", "recover"],
    ]);
    assert.equal(sore.next.id, "muscle.bottleneck");
    const injury = play([
      ["goal", "muscle"],
      ["muscle.outcome", "recover"],
      ["muscle.bottleneck", "injury"],
    ]);
    assert.equal(injury.next.id, "recovery.area");
  });

  it("does not treat hormone-response studies as muscle-gain trials", () => {
    const result = play([
      ["goal", "muscle"],
      ["muscle.outcome", "size"],
      ["muscle.bottleneck", "slow"],
      ["shared.evidence", "human-only"],
    ]).results;
    assert.ok(result.cards.length > 0);
    assert.equal(
      result.cards.some((card) => card.id === "cjc-1295-dac" && card.band === "human-outcome"),
      false
    );
    assert.equal(
      result.cards.some((card) => card.id === "ipamorelin" && card.band === "human-outcome"),
      false
    );
  });

  it("scopes focus-plus-stress differently from neurological memory research", () => {
    const focus = play(focusStressJourney).results;
    const memory = play([
      ["goal", "cognition"],
      ["cognition.outcome", "memory"],
      ["cognition.memory", "diagnosed"],
      ["shared.evidence", "strongest"],
    ]).results;
    assert.equal(focus.cards.some((card) => card.id === "semax"), false);
    assert.equal(memory.cards.some((card) => card.id === "semax"), true);
    if (focus.cards.some((card) => card.id === "selank")) {
      assert.match(focus.cards.find((card) => card.id === "selank").limitation, /concentration|anxiety/i);
    }
  });

  it("keeps DSIP mixed findings visible on a human-only sleep path", () => {
    const result = play([
      ["goal", "sleep"],
      ["sleep.outcome", "falling"],
      ["sleep.context", "no-pattern"],
      ["shared.evidence", "human-only"],
    ]).results;
    const dsip = result.cards.find((card) => card.id === "dsip");
    if (dsip) {
      assert.match(dsip.limitation, /do not establish|inconsistent|reliable/i);
    } else {
      assert.equal(result.state, RESULT_STATES.GAP);
    }
  });

  it("does not count laboratory follicles as a human scalp-regrowth trial", () => {
    const result = play([
      ["goal", "hair"],
      ["hair.outcome", "density"],
      ["hair.target", "human-scalp"],
      ["shared.evidence", "human-only"],
      ["shared.formulation", "topical"],
    ]).results;
    assert.equal(result.state, RESULT_STATES.GAP);
    assert.ok(result.cards.length > 0);
    const ahk = result.cards.find((card) => card.id === "ahk-cu");
    if (ahk) {
      assert.notEqual(ahk.band, "human-outcome");
      assert.match(ahk.limitation, /dish|laboratory|scalp/i);
    }
  });

  it("keeps SNAP-8 topical expression-line research separate from GHK repair", () => {
    const result = play(expressionJourney).results;
    assert.equal(result.cards[0]?.id, "snap-8");
    assert.equal(result.cards.some((card) => card.id === "ghk-cu"), false);
    assert.equal(result.cards.some((card) => card.kind === "blend"), false);
  });

  it("blocks injectable candidates when topical-only is selected", () => {
    const { scored } = evaluateCandidates(Object.fromEntries(expressionJourney));
    assert.equal(
      scored.some(
        (row) =>
          row.compound.id !== "snap-8" &&
          !(row.claim.forms || []).includes("topical")
      ),
      false
    );
  });

  it("does not endorse Melanotan-2 as safe cosmetic tanning", () => {
    const result = play([
      ["goal", "skin"],
      ["skin.outcome", "pigment"],
      ["skin.form", "any-separate"],
      ["shared.evidence", "include-early"],
    ]).results;
    assert.equal(result.cards.some((card) => card.id === "melanotan-2"), false);
  });

  it("separates desire, erections, and fertility", () => {
    const desire = play([
      ["goal", "sexual-health"],
      ["sexual.outcome", "desire"],
      ["sexual.distinction", "low-interest"],
      ["sexual.population", "premenopausal"],
      ["sexual.context", "general"],
      ["shared.evidence", "strongest"],
    ]).results;
    const erections = play([
      ["goal", "sexual-health"],
      ["sexual.outcome", "erections"],
      ["sexual.population", "men"],
      ["sexual.context", "general"],
      ["shared.evidence", "strongest"],
    ]).results;
    const fertility = play([
      ["goal", "sexual-health"],
      ["sexual.outcome", "reproductive"],
      ["sexual.context", "fertility-care"],
      ["sexual.reproductive", "fertility"],
      ["shared.evidence", "strongest"],
    ]).results;
    assert.equal(desire.cards.some((card) => card.id === "pt-141"), true);
    assert.equal(erections.cards.some((card) => card.id === "pt-141"), false);
    assert.equal(fertility.cards.some((card) => card.id === "pt-141"), false);
    assert.equal(
      fertility.cards.some((card) => card.id === "kisspeptin-10" && card.band === "human-outcome"),
      false
    );
  });

  it("does not generalize Vyleesi to men or unspecified erection answers", () => {
    const result = play([
      ["goal", "sexual-health"],
      ["sexual.outcome", "desire"],
      ["sexual.distinction", "low-interest"],
      ["sexual.population", "men"],
      ["sexual.context", "general"],
      ["shared.evidence", "strongest"],
    ]).results;
    assert.equal(result.cards.some((card) => card.id === "pt-141"), false);
  });

  it("never presents a human-lifespan winner", () => {
    const result = play([
      ["goal", "aging"],
      ["aging.outcome", "lifespan"],
      ["shared.evidence", "strongest"],
    ]).results;
    assert.equal(result.state, RESULT_STATES.GAP);
    assert.ok(result.cards.length > 0);
    assert.equal(
      result.cards.some((card) => card.band === "human-outcome" && card.findings === "positive"),
      false
    );
  });

  it("does not invent an immune-booster winner for fewer infections", () => {
    const result = play([
      ["goal", "immune"],
      ["immune.outcome", "fewer-infections"],
      ["immune.context", "prevention"],
      ["immune.endpoint", "fewer-infections"],
      ["shared.evidence", "human-only"],
    ]).results;
    assert.equal(result.state, RESULT_STATES.GAP);
    assert.ok(result.cards.length > 0);
    assert.equal(
      result.cards.some((card) => card.id === "thymosin-alpha-1" && card.band === "human-outcome"),
      false
    );
  });

  it("returns nearby research when human-only filters out tendon studies", () => {
    const result = play(tendonJourney).results;
    assert.equal(result.state, RESULT_STATES.GAP);
    assert.ok(result.cards.length > 0);
    assert.equal(
      result.cards.some((card) => card.id === "bpc-157") ||
        result.relatedReading.some((card) => card.id === "bpc-157"),
      true
    );
  });

  it("does not let blends inherit ingredient efficacy", () => {
    const result = play(focusStressJourney).results;
    assert.equal(result.cards.some((card) => card.id === "selank-semax"), false);
  });

  it("blocks TB-500 from active ranking", () => {
    const { scored } = evaluateCandidates(Object.fromEntries(tendonJourney));
    assert.equal(scored.some((row) => row.compound.id === "tb-500"), false);
  });

  it("does not transfer DAC evidence to No DAC", () => {
    const hormone = play([
      ["goal", "muscle"],
      ["muscle.outcome", "hormone"],
      ["muscle.hormone", "release"],
      ["shared.evidence", "strongest"],
    ]).results;
    const dac = hormone.cards.find((card) => card.id === "cjc-1295-dac");
    const noDac = hormone.cards.find((card) => card.id === "cjc-1295-no-dac");
    if (dac && noDac) {
      assert.match(noDac.limitation, /do not transfer|DAC/i);
    }
  });

  it("deduplicates GHK-Cu forms", () => {
    const result = play([
      ["goal", "skin"],
      ["skin.outcome", "texture"],
      ["skin.form", "any-separate"],
      ["shared.evidence", "include-early"],
    ]).results;
    const ghk = result.cards.filter((card) => card.id === "ghk-cu" || card.id === "ghk-cu-topical-powder");
    assert.ok(ghk.length <= 1);
  });

  it("is deterministic for the same answers", () => {
    const a = play(appetiteJourney).results.cards.map((card) => card.id);
    const b = play(appetiteJourney).results.cards.map((card) => card.id);
    assert.deepEqual(a, b);
  });

  it("clears dependent answers after a goal change", () => {
    const pruned = pruneAnswers({
      goal: "sleep",
      "weight.outcome": "hunger",
    });
    assert.equal(pruned["weight.outcome"], undefined);
    assert.equal(pruned.goal, "sleep");
  });

  it("covers every current library entry", () => {
    const audit = coverageAudit();
    const productIds = peptideProducts.map((item) => item.id || item.slug);
    for (const id of productIds) {
      assert.ok(
        audit.some((row) => row.id === id),
        `missing quiz coverage for ${id}`
      );
    }
    assert.equal(audit.find((row) => row.id === "3x-tesamorelin-mgf-ipamorelin").eligibility, "unavailable");
    assert.equal(audit.find((row) => row.id === "4x-tesamorelin-ipamorelin-mgf-ghrp-2").eligibility, "unavailable");
    assert.equal(audit.find((row) => row.id === "tb-500").eligibility, "excluded");
    assert.equal(QUIZ_COMPOUNDS.length, productIds.length);
  });

  it("compares semaglutide and tirzepatide on the appetite human-only journey", () => {
    const result = play(appetiteJourney).results;
    const ids = result.cards.map((card) => card.id);
    assert.ok(ids.includes("glp-1-s"));
    assert.ok(ids.includes("glp-1-t"));
    assert.ok(ids.includes("retatrutide"));
    assert.equal(result.state, RESULT_STATES.COMPARE);
    assert.equal(result.cards.some((card) => card.id === "aod-9604"), false);
  });

  it("does not finish after only a goal and one generic subgoal", () => {
    assert.equal(
      canFinish({ goal: "weight-loss", "weight.outcome": "hunger" }),
      false
    );
  });

  it("starts on the goal question when no answers exist", () => {
    assert.equal(getNextQuestion({}).id, "goal");
  });

  it("never returns an empty result list for a finished path", () => {
    const walk = (start, pick) => {
      let answers = { ...start };
      for (let i = 0; i < 20; i += 1) {
        const pruned = pruneAnswers(answers);
        const next = getNextQuestion(pruned);
        if (!next) return explainResults(pruned);
        answers = { ...pruned, [next.id]: pick(next).id };
      }
      return explainResults(pruneAnswers(answers));
    };

    for (const goal of QUIZ_GOALS) {
      const first = walk({ goal: goal.id }, (question) => question.options[0]);
      assert.ok(first.cards.length > 0, `empty first-option path for ${goal.id}`);
      assert.ok(
        first.cards.every((card) => card.name && card.studied && card.limitation && card.evidence),
        `null card field on first-option path for ${goal.id}`
      );
      const last = walk(
        { goal: goal.id },
        (question) => question.options[question.options.length - 1]
      );
      assert.ok(last.cards.length > 0, `empty last-option path for ${goal.id}`);
    }
  });
});

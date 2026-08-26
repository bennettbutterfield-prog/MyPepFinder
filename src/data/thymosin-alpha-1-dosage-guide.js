/**
 * Thymosin Alpha-1 (Tα1 / thymalfasin) dosage guide.
 * Core human dose: 1.6 mg SC twice weekly (~900 mcg/m²).
 * ≠ thymosin beta-4, TB-500, thymosin fraction 5, thymulin, thymopoietin.
 */

/** Free-base molecular mass — thymalfasin */
export const TA1_FREE_BASE_MASS = 3108.3;

/** FDA-cited approximate free-base solubility (mg/mL) */
export const TA1_SOLUBILITY_FREE_BASE = 2;

export function ta1AmountFromVial(vialMg, diluentMl, targetMg) {
  const vial = Number(vialMg);
  const d = Number(diluentMl);
  const target = Number(targetMg);
  if (
    !Number.isFinite(vial) ||
    !Number.isFinite(d) ||
    !Number.isFinite(target) ||
    vial <= 0 ||
    d <= 0 ||
    target <= 0
  ) {
    return null;
  }
  const concMgPerMl = vial / d;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl * 100;
  const mcgPerUnit = (concMgPerMl * 1000) / 100;
  return {
    concMgPerMl,
    volumeMl,
    units,
    mcgPerUnit,
    targetMg: target,
  };
}

/** International under-40-kg rule only — fixed 1.6 mg at ≥40 kg */
export function ta1WeightBasedDose(kg) {
  const weight = Number(kg);
  if (!Number.isFinite(weight) || weight <= 0) return null;
  if (weight >= 40) {
    return {
      doseMg: 1.6,
      rule: "fixed-adult",
      warning:
        "International chronic-hepatitis materials use a fixed 1.6 mg adult dose at 40 kg and above. Do not extend 40 mcg/kg to heavier adults — e.g., 100 kg would incorrectly yield 4 mg.",
    };
  }
  return {
    doseMg: Math.round(weight * 0.04 * 100) / 100,
    rule: "under-40kg",
    warning:
      "40 mcg/kg twice weekly appears in some international under-40-kg labels only. This is not a general pediatric or wellness calculator.",
  };
}

export const TA1_RECON_PRESETS = [
  {
    id: "1.6-1",
    vialMg: 1.6,
    diluentMl: 1,
    label: "1.6 mg · 1 mL (1.6 mg/mL · Zadaxin-style)",
    validated: true,
    note: "Traditional finished-product presentation — use immediately after reconstitution",
  },
  {
    id: "5-2",
    vialMg: 5,
    diluentMl: 2,
    label: "5 mg · 2 mL (2.5 mg/mL)",
    validated: false,
    note: "Arithmetic common online; exceeds traditional 1.6 mg/mL — concentration-specific validation required",
  },
  {
    id: "5-2.5",
    vialMg: 5,
    diluentMl: 2.5,
    label: "5 mg · 2.5 mL (2.0 mg/mL)",
    validated: "partial",
    note: "At highest clinical concentration FDA identified; formulation still differs from Zadaxin",
  },
  {
    id: "10-5",
    vialMg: 10,
    diluentMl: 5,
    label: "10 mg · 5 mL (2.0 mg/mL)",
    validated: "partial",
    note: "Multidose sterility and in-use stability required",
  },
  {
    id: "10-2",
    vialMg: 10,
    diluentMl: 2,
    label: "10 mg · 2 mL (5.0 mg/mL)",
    blocked: true,
    note: "Unsupported — exceeds ~2 mg/mL published free-base solubility; heavily promoted online but not validated",
  },
];

export const TA1_IDENTITY = [
  {
    id: "ta1",
    label: "Thymosin alpha-1 / Tα1 / thymalfasin",
    verdict: "This page's subject — confirm N-acetylated 28-aa sequence before dosing math",
    detail:
      "Authentic Tα1 is an N-terminally acetylated 28-amino-acid peptide (~3,108.3 Da free base). Sequence: Ac-Ser-Asp-Ala-Ala-Val-Asp-Thr-Ser-Ser-Glu-Ile-Thr-Thr-Lys-Asp-Leu-Lys-Glu-Lys-Lys-Glu-Val-Val-Glu-Glu-Ala-Glu-Asn-OH. Thymalfasin is the synthetic drug name; Zadaxin is a finished 1.6 mg product in some countries.",
  },
  {
    id: "zadaxin",
    label: "Zadaxin (finished thymalfasin product)",
    verdict: "Yes only when sequence, active moiety, formulation, and route match",
    detail:
      "Zadaxin is a defined finished drug — 1.6 mg vial reconstituted with 1.0 mL SWFI for immediate use. Its label applies to that product and jurisdiction, not automatically to bulk lyophilized research vials.",
  },
  {
    id: "tb500",
    label: "TB-500 / thymosin beta-4 fragment",
    verdict: "Different molecule — do NOT reuse Tα1 doses",
    detail:
      "TB-500 commonly refers to Ac-LKKTETQ, a 7-amino-acid fragment of thymosin beta-4 involved in actin biology. Different sequence, targets, clinical history, and doses. A “thymosin protocol” without identity is not reproducible.",
  },
  {
    id: "tbeta4",
    label: "Thymosin beta-4 (full-length Tβ4)",
    verdict: "Different molecule — not Tα1",
    detail:
      "Thymosin beta-4 is a 43-amino-acid peptide with actin-sequestering biology and a separate research history. It is not interchangeable with thymosin alpha-1 despite similar naming.",
  },
  {
    id: "fraction5",
    label: "Thymosin fraction 5",
    verdict: "Historical extract — not Tα1",
    detail:
      "Thymosin fraction 5 is a historical thymic extract containing multiple components. Its dose cannot be applied to synthetic Tα1.",
  },
  {
    id: "thymulin",
    label: "Thymulin / thymopoietin",
    verdict: "Different thymic peptides — not Tα1",
    detail:
      "Thymulin and thymopoietin are distinct thymic hormones with different sequences and pharmacology. Do not substitute their doses for Tα1.",
  },
  {
    id: "unsure",
    label: "Label unclear or unsure",
    verdict: "Incomplete — confirm identity before trusting protocols",
    detail:
      "Names such as thymosin, thymalfasin, or thymic peptide do not establish whether the vial contains Tα1, Tβ4, TB-500, fraction 5, or another molecule. Analytics should resolve identity first — especially before comparing with 1.6 mg protocols.",
  },
];

export const TA1_HUMAN_TRIALS = [
  {
    id: "pk",
    study: "Rost et al., 1999",
    dose: "900 mcg/m² (~1.6–2.2 mg actual)",
    frequency: "SC days 1, 3, 4, 5, 6, 7 (crossover)",
    duration: "Short PK periods",
    population: "9 healthy volunteers; 3 formulations",
    result: "Tmax 1–2 h; t½ <3 h; no accumulation; formulation affected exposure",
    evidence: "Human PK",
  },
  {
    id: "hbv-chien",
    study: "Chien et al., 1998",
    dose: "1.6 mg",
    frequency: "SC twice weekly",
    duration: "24 weeks + follow-up",
    population: "Chronic hepatitis B RCT",
    result: "Delayed virologic/biochemical signals; older assays limit transferability",
    evidence: "Human RCT",
  },
  {
    id: "hbv-iino",
    study: "Iino et al., 2005",
    dose: "0.8 or 1.6 mg",
    frequency: "SC 6×/wk × 2 wk, then BIW",
    duration: "24 weeks",
    population: "316 participants chronic HBV",
    result: "Similar outcomes between doses; 22 ALT flares, 16 treatment interruptions",
    evidence: "Human RCT",
  },
  {
    id: "hcv",
    study: "Pockros et al., 2012",
    dose: "1.6 mg",
    frequency: "SC twice weekly + pegIFN/RBV",
    duration: "48 weeks",
    population: "552 HCV prior nonresponders",
    result: "SVR 12.7% vs 10.5% placebo — not significant; obsolete DAA era",
    evidence: "Human RCT",
  },
  {
    id: "vaccine-grav",
    study: "Gravenstein et al., 1989",
    dose: "900 mcg/m²",
    frequency: "SC twice weekly after vaccine",
    duration: "4 weeks / 8 doses",
    population: "90 older men influenza vaccine",
    result: "Older antibody-response signal; small subgroups; outdated vaccine context",
    evidence: "Human RCT",
  },
  {
    id: "vaccine-carr",
    study: "Carraro et al., 2012",
    dose: "3.2 or 6.4 mg",
    frequency: "SC 7 days before + on vaccination day",
    duration: "2 doses",
    population: "99 hemodialysis participants H1N1",
    result: "Mixed assay results; small study",
    evidence: "Human pilot",
  },
  {
    id: "etass",
    study: "ETASS severe sepsis, 2013",
    dose: "1.6 mg",
    frequency: "SC BID × 5 d, then daily × 2 d",
    duration: "7 days",
    population: "361 adults severe sepsis",
    result: "28-day mortality P=0.062 conventional; marginal time-to-event only",
    evidence: "Human RCT",
  },
  {
    id: "tests",
    study: "TESTS Phase III sepsis, BMJ 2025",
    dose: "1.6 mg",
    frequency: "SC q12h",
    duration: "Up to 7 days",
    population: "1,106 adults; 22 centers",
    result: "28-day mortality 23.4% vs 24.1% placebo — no benefit (HR 0.99, P=0.93)",
    evidence: "Phase III RCT",
  },
  {
    id: "aclif",
    study: "HBV acute-on-chronic liver failure, 2022",
    dose: "1.6 mg",
    frequency: "SC daily wk 1, then BIW wks 2–12",
    duration: "12 weeks",
    population: "120 enrolled open-label RCT",
    result: "Specialized liver-failure protocol — not a general loading schedule",
    evidence: "Human RCT",
  },
  {
    id: "covid",
    study: "Registered COVID-19 pilot",
    dose: "1.6 mg in 1 mL",
    frequency: "SC once daily + standard care",
    duration: "7 days",
    population: "Hospitalized COVID-19",
    result: "Registry dose; heterogeneous evidence — not general outpatient use",
    evidence: "Registered trial",
  },
  {
    id: "melanoma",
    study: "Maio et al., 2010 melanoma Phase II",
    dose: "1.6, 3.2, or 6.4 mg",
    frequency: "SC + dacarbazine ± interferon",
    duration: "Up to 12 months",
    population: "488 metastatic melanoma",
    result: "No significant response or PFS difference for Tα1 regimens",
    evidence: "Human RCT",
  },
  {
    id: "nsclc",
    study: "Early NSCLC immune study",
    dose: "900 mcg/m²",
    frequency: "SC BIW or daily × 14 d then BIW",
    duration: "Up to 1 year",
    population: "42 unresectable locally advanced NSCLC",
    result: "Exploratory immune endpoints only — not survival efficacy",
    evidence: "Small human study",
  },
];

export const TA1_HUMAN_STATUS = [
  ["U.S. approved dosage", "None"],
  ["Core international/clinical dose", "1.6 mg SC per administration"],
  ["Core human schedule", "Twice weekly, 3–4 days apart"],
  ["BSA development equivalent", "900 mcg/m² (~1.5–1.6 mg typical adult)"],
  ["Under-40-kg international rule", "40 mcg/kg SC twice weekly (indication-specific)"],
  ["Human SC pharmacokinetics", "Tmax 1–2 h; serum t½ <3 h; no short-term accumulation"],
  ["Largest sepsis trial (TESTS)", "1.6 mg q12h × 7 d — no 28-day mortality benefit"],
  ["Established dose-response", "None — higher dose ≠ consistently better"],
  ["Community wellness dose", "Not established — HBV/sepsis doses ≠ immune support"],
];

export const TA1_WEEKLY_COMPARE = [
  {
    id: "clinical-biw",
    label: "Clinical core (1.6 mg BIW)",
    perDoseMg: 1.6,
    frequency: "Twice weekly",
    weeklyMg: 3.2,
    ratioToClinical: 1,
    evidence: "International label + extensive human trials",
  },
  {
    id: "community-biw-low",
    label: "Community BIW (1.0–1.5 mg)",
    perDoseMg: 1.25,
    frequency: "Twice weekly",
    weeklyMg: 2.5,
    ratioToClinical: 0.78,
    evidence: "Anecdotal; partially overlaps clinical amount",
  },
  {
    id: "community-tiw",
    label: "Community 3×/wk (1.0–1.6 mg)",
    perDoseMg: 1.3,
    frequency: "Three times weekly",
    weeklyMg: 3.9,
    ratioToClinical: 1.22,
    evidence: "Anecdotal; frequency not dominant clinical schedule",
  },
  {
    id: "five-on-two-off",
    label: "5-on/2-off (1.5 mg daily × 5)",
    perDoseMg: 1.5,
    frequency: "Daily × 5, then 2 days off",
    weeklyMg: 7.5,
    ratioToClinical: 2.34,
    evidence: "Anecdotal; no receptor-reset basis",
  },
  {
    id: "daily-acute",
    label: "Daily acute (1.6 mg × 7)",
    perDoseMg: 1.6,
    frequency: "Once daily",
    weeklyMg: 11.2,
    ratioToClinical: 3.5,
    evidence: "Anecdotal adaptation of hospital research",
  },
  {
    id: "sepsis-etass",
    label: "ETASS sepsis (1.6 mg BID × 5 + daily × 2)",
    perDoseMg: 1.6,
    frequency: "BID then daily",
    weeklyMg: 19.2,
    ratioToClinical: 6,
    evidence: "ICU trial exposure; Phase III efficacy negative",
  },
];

export const TA1_PROTOCOL_PHASES = [
  {
    id: "screening",
    phase: "Screening & baseline",
    days: "−28 to −1",
    amount: "None",
    frequency: "—",
    cumulative: "—",
    purpose:
      "Eligibility, product qualification, baseline labs, prespecified safety and clinical endpoints",
  },
  {
    id: "exposure",
    phase: "Fixed exposure — 1.6 mg SC BIW",
    days: "1–56 (weeks 1–8)",
    amount: "1.6 mg",
    frequency: "Twice weekly · 3–4 days apart · SC",
    cumulative: "25.6 mg (16 administrations)",
    purpose:
      "Best-documented per-dose amount and frequency with shorter community-anchored duration — no loading, titration, or escalation",
  },
  {
    id: "washout",
    phase: "Off-exposure observation",
    days: "57–84 (weeks 9–12)",
    amount: "None",
    frequency: "—",
    cumulative: "Prior 25.6 mg total",
    purpose:
      "Four weeks without exposure — durability, rebound, and delayed adverse-event assessment",
  },
];

export const TA1_COMPARE = {
  clinical: {
    title: "Human clinical core",
    status: "1.6 mg SC twice weekly — label- and trial-anchored",
    rows: [
      ["Per-injection amount", "Most often 1.6 mg (~900 mcg/m²)"],
      ["Frequency", "Twice weekly; daily/BID only in acute hospital studies"],
      ["Route", "Primarily SC; limited IM in escalation studies"],
      ["Duration", "7 days (sepsis) to 6–12 months (HBV/oncology)"],
      ["Weekly exposure", "3.2 mg in core BIW schedule"],
      ["Product", "Named clinical formulation or finished Zadaxin-type product"],
      ["Primary outcomes", "Viral markers, mortality, vaccine response, immune endpoints"],
      ["Evidence", "Extensive human exposure; efficacy indication-specific"],
    ],
  },
  anecdotal: {
    title: "Community reports",
    status: "Anecdotal — higher weekly exposure common",
    rows: [
      ["Per-injection amount", "Commonly 1.0–1.6 mg; some 0.3–0.5 mg daily titration"],
      ["Frequency", "BIW, 3×/wk, daily, or 5-on/2-off"],
      ["Route", "Mostly SC; nasal products also marketed"],
      ["Duration", "Usually 4–12 weeks as a “cycle”"],
      ["Weekly exposure", "Approximately 2.0–11.2 mg/week in common reports"],
      ["Product", "Bulk/research or compounded material — variable characterization"],
      ["Primary outcomes", "Symptoms, “immune support,” energy, illness frequency"],
      ["Evidence", "Uncontrolled practice and copied online conventions"],
    ],
  },
};

export const TA1_CLAIMS = [
  {
    id: "daily-half-life",
    claim: "Daily dosing is required because Tα1 has a short serum half-life",
    status: "Not established",
    detail:
      "After 900 mcg/m² SC, Tmax is 1–2 hours and serum half-life is under 3 hours with no short-term accumulation. The twice-weekly schedule came from clinical development and international labeling — not from simply matching elimination half-life. Daily community schedules deliver 3.5× the core weekly exposure.",
  },
  {
    id: "five-on-same",
    claim: "1.5 mg five-on/two-off is the same dose as 1.6 mg twice weekly",
    status: "False",
    detail:
      "Five consecutive 1.5 mg days equals 7.5 mg per week — about 2.34 times the 3.2 mg weekly exposure of 1.6 mg twice weekly. Calling these schedules equivalent because each injection is near 1.6 mg is mathematically incorrect.",
  },
  {
    id: "sepsis-colds",
    claim: "The sepsis ICU protocol can be used for colds or home acute infection",
    status: "Not valid",
    detail:
      "ETASS and TESTS used 1.6 mg twice daily or every 12 hours in hospitalized sepsis with standard ICU care. TESTS Phase III found no 28-day mortality benefit. Suspected sepsis requires emergency assessment — not a peptide cycle at home.",
  },
  {
    id: "tb500-interchange",
    claim: "TB-500 and thymosin alpha-1 are interchangeable thymosin products",
    status: "False",
    detail:
      "Tα1 is a 28-residue immunomodulatory peptide. TB-500 refers to thymosin-beta-4-related material with different sequence, biology, evidence base, and dose. The names cannot be substituted.",
  },
  {
    id: "weight-adults",
    claim: "40 mcg/kg should be used for all adults by body weight",
    status: "False",
    detail:
      "International materials use fixed 1.6 mg at 40 kg and above. The 40 mcg/kg rule applies under 40 kg in some chronic-hepatitis labels only. At 100 kg, literal 40 mcg/kg would yield 4 mg — not the international adult rule.",
  },
  {
    id: "10mg-2ml-ok",
    claim: "10 mg vial + 2 mL diluent (5 mg/mL, 32 U for 1.6 mg) is a validated preparation",
    status: "Contradicted",
    detail:
      "FDA cited free-base solubility around 2 mg/mL and found no human clinical formulation above 2 mg/mL. A 5 mg/mL clear solution does not exclude aggregates, subvisible particles, or potency loss. This concentration is heavily promoted online but should not be treated as validated.",
  },
  {
    id: "immune-boost",
    claim: "Tα1 provides a predictable whole-body immune boost",
    status: "Not established",
    detail:
      "Tα1 is an immunomodulator affecting dendritic cells, TLR signaling, T cells, and NK cells in context-dependent ways. The same pathway can be useful, neutral, or harmful depending on infection phase, autoimmune activity, transplant status, and concomitant drugs.",
  },
  {
    id: "loading-required",
    claim: "A loading phase is required before twice-weekly maintenance",
    status: "Not established",
    detail:
      "A Japanese HBV study used six administrations per week for two weeks before switching to twice weekly — a formal study arm, not proof that every protocol needs loading. The 12-week research protocol on this page uses no loading, titration, or escalation.",
  },
  {
    id: "higher-better",
    claim: "Higher Tα1 doses produce stronger immune effects",
    status: "Not supported",
    detail:
      "Melanoma combination trials found no clear monotonic dose-response. FDA noted no well-defined minimum pharmacologic dose and no clear dose-response relationship across the program. More cannot be assumed to mean better.",
  },
  {
    id: "28-day-bud",
    claim: "Reconstituted Tα1 is stable for 28 days refrigerated",
    status: "Not established",
    detail:
      "Traditional Zadaxin materials instruct immediate use after reconstitution. A reagent source cited 2–7 days at 4°C for reconstituted free base — not a clinical multidose beyond-use date. Use validated in-use stability for the exact product.",
  },
];

export const TA1_EVIDENCE_LADDER = [
  {
    level: "U.S.-approved dosing",
    exists: "None",
    confidence: "None",
  },
  {
    level: "International finished-product dosing (Zadaxin-type)",
    exists: "1.6 mg SC twice weekly in some countries",
    confidence: "Moderate to high for product exposure; indications vary",
  },
  {
    level: "Human clinical-trial dosing",
    exists: "Extensive — HBV, HCV, sepsis, vaccine, oncology, infection",
    confidence: "High for exposure documentation; variable for efficacy",
  },
  {
    level: "Human pharmacokinetics",
    exists: "Nine-person crossover study; formulation-dependent",
    confidence: "Moderate",
  },
  {
    level: "Acute daily/BID hospital dosing",
    exists: "Sepsis, liver failure, COVID registry — TESTS negative for mortality",
    confidence: "High for exposure; low for general transferability",
  },
  {
    level: "Community twice-weekly protocols",
    exists: "1.0–1.6 mg BIW × 4–12 weeks",
    confidence: "Low to moderate — amount overlaps trials; wellness indication anecdotal",
  },
  {
    level: "Community daily / 5-on-2-off",
    exists: "1.5–1.6 mg daily or 1.5 mg × 5 days on",
    confidence: "Low — 2.3–3.5× clinical weekly exposure",
  },
  {
    level: "Intranasal products",
    exists: "Marketed sprays — no established human nasal PK or dose",
    confidence: "Insufficient",
  },
  {
    level: "Long-term general-wellness dosing",
    exists: "Chronic trials were disease-specific, not wellness studies",
    confidence: "Insufficient",
  },
];

export const TA1_AE_SIMPLE = [
  {
    topic: "Injection-site reactions",
    status: "Most consistent trial finding",
    note: "Pain, redness, irritation — usually mild at common trial doses",
  },
  {
    topic: "Systemic flu-like symptoms",
    status: "Reported in some studies",
    note: "Fatigue, fever, nausea — causality difficult in combination/critical-illness trials",
  },
  {
    topic: "HBV ALT flares",
    status: "Documented in trials",
    note: "Transient ALT elevation occurred — not proof the peptide is “working”",
  },
  {
    topic: "Immunogenicity / aggregation",
    status: "FDA compounding concern",
    note: "Peptide length, SC route, and concentration-sensitive aggregation raise antibody risk",
  },
  {
    topic: "Condition-specific risk",
    status: "Context-dependent",
    note: "Autoimmune disease, transplant, cancer therapy, pregnancy — specialist oversight required",
  },
];

export const TA1_AE_FULL = [
  {
    topic: "Injection-site reactions",
    status: "Common in trials",
    note: "Pain, redness, irritation, bruising",
    context:
      "Across many trials the most consistent Tα1-attributed events were local injection reactions, usually mild at 1.6 mg SC. Repeated SC exposure with bulk material adds immunogenicity and product-quality variables not present in finished-product trials.",
  },
  {
    topic: "Systemic symptoms",
    status: "Inconsistent attribution",
    note: "Flu-like symptoms, fatigue, fever, nausea, rash",
    context:
      "Many systemic events occurred in combination trials with interferon, chemotherapy, critical illness, or transplantation. “Generally well tolerated in trials” should not be translated into risk-free — especially when the community product is not the studied formulation.",
  },
  {
    topic: "HBV ALT flares",
    status: "Observed",
    note: "22 flares in Iino dose-comparison; treatment interrupted in 16",
    context:
      "Transient ALT elevation and liver decompensation require specialist interpretation in chronic hepatitis. A flare is not proof of therapeutic benefit and may require stopping exposure.",
  },
  {
    topic: "Autoimmune and transplant settings",
    status: "High caution",
    note: "Immune modulation may aggravate disease or oppose immunosuppression",
    context:
      "International materials advise case-by-case assessment in autoimmune disease. Post-HSCT and solid-organ transplant literature raises GVHD, engraftment, rejection, and immune cytopenia concerns.",
  },
  {
    topic: "Immunogenicity",
    status: "Plausible",
    note: "Anti-drug antibodies from aggregation, impurities, repeated SC exposure",
    context:
      "FDA's December 2024 PCAC review (4 yes / 17 no on 503A bulks list) cited incomplete bulk characterization, concentration/solubility questions, aggregation, and potential immunogenicity among main concerns.",
  },
  {
    topic: "Acute infection / sepsis",
    status: "Never delay standard care",
    note: "Peptide must not replace antimicrobials, fluids, or ICU support",
    context:
      "The largest sepsis trial (TESTS, n=1,106) found no 28-day mortality benefit at 1.6 mg every 12 hours for up to seven days. Suspected sepsis requires emergency care.",
  },
];

export const TA1_DOSAGE_GUIDE = {
  title:
    "Thymosin Alpha-1 Dosage: Human Trials, Research Protocol, and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research status:** Thymosin alpha-1 (Tα1, thymalfasin) has an unusually large human research record for a peptide discussed in U.S. wellness settings. **1.6 mg subcutaneous twice weekly** is the most established exposure and appears in some international Zadaxin labels. That does **not** create a universal dose for immune support, Lyme disease, long COVID, or acute infection. **Tα1 ≠ thymosin beta-4 / TB-500.**",
  intro: [
    "**The central human-studied dose is 1.6 mg subcutaneously twice weekly**, generally three or four days apart. International chronic-hepatitis materials often continue for six months. The amount relates to **900 mcg/m²** (~1.5–1.6 mg in a typical adult) — not a proven receptor-saturation threshold.",
    "Human pharmacokinetics are short: after 900 mcg/m² SC, **Tmax 1–2 hours**, serum **half-life under 3 hours**, and **no accumulation** in a short repeated-dose study. The short half-life does **not** by itself prove daily dosing is better — community daily and five-on/two-off schedules deliver **2.3–3.5×** the core clinical weekly exposure.",
    "The largest sepsis confirmatory trial (**TESTS Phase III**, n=1,106) used **1.6 mg every 12 hours for up to seven days** and found **no 28-day mortality benefit**. For a clean short-course research design: **1.6 mg SC BIW × 8 weeks** (16 doses = 25.6 mg) + **4 weeks washout** — no loading, titration, or automatic repeat cycle.",
  ],
  glance: {
    title: "Thymosin alpha-1 dosage in 30 seconds",
    items: [
      "**Core human dose:** 1.6 mg SC twice weekly (~900 mcg/m²)",
      "**≠ TB-500 / thymosin beta-4** — different sequence, biology, and doses",
      "**Under 40 kg (international):** 40 mcg/kg BIW — not a general wellness calculator",
      "**Traditional Zadaxin:** 1.6 mg vial + 1.0 mL SWFI → 1.6 mg/mL, use immediately",
      "**PK:** Tmax 1–2 h, t½ <3 h, no accumulation — does not prove daily is better",
      "**TESTS sepsis Phase III:** 1.6 mg q12h × 7 d — no 28-day mortality benefit",
      "**Community:** 1.0–1.6 mg 2–3×/wk; 1.5 mg 5-on/2-off (7.5 mg/wk ≈2.34× clinical)",
      "**No U.S. approved dosage** — Dec 2024 PCAC: 4 yes / 17 no on 503A bulks list",
    ],
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**Full name**", "Thymosin alpha-1; synthetic drug name: thymalfasin"],
        ["**Brand**", "Zadaxin — finished 1.6 mg product in some countries"],
        ["**Length / mass**", "28 amino acids · ~3,108.3 Da free base"],
        ["**Core human schedule**", "1.6 mg SC twice weekly, 3–4 days apart"],
        ["**International HBV duration**", "Commonly 6 months; some materials up to 12 months"],
        ["**Human SC PK**", "Tmax 1–2 h; t½ <3 h; no short-term accumulation"],
        ["**Community range**", "1.0–1.6 mg 2–3×/wk × 4–12 wk; daily variants circulate"],
        ["**Established U.S. dose**", "None"],
        ["**Main dosing lesson**", "HBV/sepsis/oncology doses ≠ general immune-wellness protocol"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is thymosin alpha-1?",
      paragraphs: [
        "Thymosin alpha-1 is an **N-terminally acetylated 28-amino-acid peptide** first isolated from an immunologically active bovine thymus fraction. Once its sequence was established, the molecule could be synthesized chemically. **Thymalfasin** is the drug name for synthetic Tα1, and **Zadaxin** is a finished thymalfasin product marketed in parts of Asia-Pacific, Latin America, Eastern Europe, and the Middle East.",
        "Tα1 is generally described as an **immunomodulator**, not as a direct antimicrobial and not as a growth-hormone secretagogue. Proposed actions include dendritic-cell activation, Toll-like-receptor signaling, antigen presentation, T-cell differentiation, natural-killer activity, and context-dependent cytokine signaling. These effects are not equivalent to a predictable whole-body “immune boost.”",
        "The free-base chemical record lists formula **C129H215N33O55** and molecular mass **3,108.3 Da**. Tα1 acetate contains the same active peptide plus variable acetate counterion. A label stating only “10 mg thymosin alpha-1 acetate” may not reveal whether the amount is peptide free-base equivalent, total salt mass, or assay-corrected amount. ([PubChem thymalfasin](https://pubchem.ncbi.nlm.nih.gov/compound/16130571); [FDA Tα1 briefing](https://www.fda.gov/media/183820/download))",
      ],
    },
    {
      id: "identity",
      title: "Identity and naming checks",
      paragraphs: [
        "Confusing Tα1 with **thymosin beta-4** or **TB-500** is a common search and labeling error. The two molecules have different sequences, targets, clinical histories, and doses. A “thymosin protocol” without a complete identity statement is not reproducible.",
      ],
      widget: "ta1-identity-gate",
      tables: [
        {
          caption: "Names that are not interchangeable",
          headers: ["Name", "What it is", "Reusable for Tα1?"],
          rows: [
            ["Thymosin alpha-1 / Tα1", "28-residue immunomodulatory peptide", "This page's subject"],
            ["Thymalfasin / Zadaxin", "Synthetic Tα1 / finished product", "Yes only when sequence, amount, formulation match"],
            ["Thymosin beta-4", "43-aa actin-associated peptide", "No"],
            ["TB-500", "Tβ4-related fragment (commonly Ac-LKKTETQ)", "No"],
            ["Thymosin fraction 5", "Historical thymic extract", "No"],
            ["Prothymosin alpha", "Longer intracellular protein", "No"],
            ["Thymulin / thymopoietin", "Different thymic peptides/hormones", "No"],
          ],
        },
        {
          caption: "Product, salt, and assay checks",
          headers: ["Quality attribute", "Question it answers"],
          rows: [
            ["Intact-mass spectrometry", "Principal molecule matches full-length N-acetylated Tα1?"],
            ["Sequence confirmation", "All 28 residues present in correct order?"],
            ["Quantitative active-moiety assay", "How many mg of Tα1 peptide are actually present?"],
            ["Acetate/counterion testing", "Is labeled mass free-base equivalent or total salt?"],
            ["Related-substance analysis", "Truncations, epimers, oxidation, synthesis residues?"],
            ["Aggregation analysis", "Dimers or larger aggregates present?"],
            ["Sterility, endotoxin, particulate", "Lot suitable for intended parenteral route?"],
            ["Concentration-specific solubility", "Material fully dissolved at proposed concentration?"],
            ["Stability-indicating assay", "Identity, potency, purity through proposed use period?"],
          ],
        },
      ],
      paragraphsAfter: [
        "An HPLC chromatogram labeled “99% purity” cannot establish peptide quantity, counterion content, sterility, endotoxin, aggregation, or usable shelf life. FDA's 2024 review noted that public bulk-substance certificates lacked important impurity, aggregate, bioburden, and endotoxin information.",
      ],
    },
    {
      id: "regulatory",
      title: "U.S. and international status",
      paragraphs: [
        "There is **no U.S. prescribing label or FDA-approved dosage** for thymosin alpha-1. Thymalfasin has been licensed or marketed in parts of Asia-Pacific, Latin America, Eastern Europe, and the Middle East, with indications varying by country. Zadaxin is not approved in Japan or most of Europe; Italy is a notable exception for a vaccine-related indication.",
        "In December 2024, the U.S. Pharmacy Compounding Advisory Committee reviewed Tα1 free base and acetate. The committee voted **4 yes, 17 no** on adding each substance to the section 503A bulks list. The vote was an advisory compounding-policy recommendation — not a finding that no pharmacology exists. Main concerns were weak effectiveness evidence for proposed U.S. uses, incomplete bulk characterization, concentration/solubility questions, aggregation, and potential immunogenicity. ([FDA meeting page](https://www.fda.gov/advisory-committees/advisory-committee-calendar/updated-meeting-time-and-public-participation-information-december-4-2024-meeting-pharmacy); [final minutes](https://www.fda.gov/media/185642/download))",
      ],
      highlight:
        "PCAC vote ≠ revocation of foreign approvals. Dose familiarity from international labels and trials is not the same as proven indication-specific benefit in contemporary U.S. wellness settings.",
    },
    {
      id: "international-label",
      title: "International product dosage",
      tables: [
        {
          caption: "Publicly available Zadaxin-type directions (not a U.S. prescribing table)",
          headers: ["Context", "Dose", "Frequency / route", "Duration", "Important boundary"],
          rows: [
            [
              "Chronic HBV adults ≥40 kg",
              "1.6 mg",
              "SC twice weekly, 3–4 days apart",
              "6 months (52 doses); some monographs 6–12 months",
              "Diagnosed chronic HBV under specialist care",
            ],
            [
              "Chronic HBV under 40 kg",
              "40 mcg/kg",
              "SC twice weekly",
              "Product- and jurisdiction-specific",
              "Not a general pediatric or wellness formula",
            ],
            [
              "Italian influenza-vaccine adjunct",
              "1.6 mg vial",
              "SC or IM twice weekly",
              "4 weeks with first vaccination; repeated weeks 8–12",
              "Labeled immunocompromised population; national product context",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "The traditional single-use Zadaxin vial contains **1.6 mg**, is reconstituted with **1.0 mL sterile water for injection immediately before use**, and produces **1.6 mg/mL**. Product materials instruct **immediate use** after reconstitution. These facts cannot be transferred to multidose 5 mg, 10 mg, or 15 mg research vials.",
      ],
    },
    {
      id: "human-trials",
      title: "Dosage used in human clinical trials",
      paragraphs: [
        "The doses below are exposures evaluated in trials or specified by study registries. They are **not** a single treatment algorithm, and one study's dose does not establish a dose for another condition. A seven-day ICU sepsis exposure, a 24-week hepatitis schedule, and a one-year oncology program cannot be merged without losing clinical context.",
      ],
      widget: "ta1-human-status",
    },
    {
      id: "pk",
      title: "Pharmacokinetics and what they do not prove",
      paragraphs: [
        "In a randomized three-formulation crossover study, nine healthy volunteers received **900 mcg/m² SC**. Mean time to peak was **one to two hours**, maximum concentrations were about **30–80 mcg/L**, elimination half-life was **under three hours**, and exposure after repeated short-term dosing did not show accumulation. ([Rost et al., 1999](https://pubmed.ncbi.nlm.nih.gov/10027483/))",
        "This supports that Tα1 reaches circulation quickly and declines quickly, that repeated exposure over several days did not accumulate in this small study, and that formulation can change exposure even when nominal peptide dose is similar. It does **not** show that a two-hour half-life requires dosing every few hours, that morning or bedtime is superior, or that serum presence equals duration of downstream immune signaling.",
      ],
    },
    {
      id: "hbv",
      title: "Chronic hepatitis B: where 1.6 mg twice weekly became established",
      paragraphs: [
        "The clearest historical dosing program used **1.6 mg SC twice weekly for six months**, often written as **900 mcg/m²**. The Chien randomized trial and other older studies reported delayed improvements in HBV DNA, HBeAg, or ALT endpoints after treatment ended. Other trials were negative or inconclusive.",
        "One Japanese randomized dose comparison enrolled 316 participants and used an intensive first two weeks: **0.8 or 1.6 mg SC six times per week**, followed by **twice-weekly dosing for 22 weeks**. Outcomes were similar between dose groups. Twenty-two participants experienced transient ALT flares. That design was studied — not evidence that every Tα1 protocol should start with frequent dosing. ([Iino et al., 2005](https://pubmed.ncbi.nlm.nih.gov/15850471/); [Chien et al., 1998](https://pubmed.ncbi.nlm.nih.gov/9581695/))",
        "Current chronic-HBV care relies on specialist staging and potent nucleos(t)ide analogues. Tα1 should not replace antiviral therapy or hepatocellular-carcinoma surveillance.",
      ],
    },
    {
      id: "hcv",
      title: "Chronic hepatitis C: studied doses, outdated treatment backbone",
      paragraphs: [
        "Older HCV trials commonly added **1.6 mg SC twice weekly** to interferon or peginterferon, sometimes with ribavirin, for six to twelve months. In a 552-participant randomized trial of prior nonresponders, Tα1 plus peginterferon/ribavirin produced SVR of **12.7%** versus **10.5%** with placebo — not significant. ([Pockros et al.](https://pubmed.ncbi.nlm.nih.gov/22233415/)) Direct-acting antiviral combinations now cure most HCV without interferon.",
      ],
    },
    {
      id: "sepsis",
      title: "Sepsis: the large confirmatory trial matters most",
      paragraphs: [
        "The 2013 ETASS trial enrolled 361 adults with severe sepsis. The Tα1 group received **1.6 mg SC twice daily for five days, then once daily for two days**. Twenty-eight-day mortality was 26.0% with Tα1 and 35.0% with control — conventional comparison **P = 0.062**. ([ETASS](https://pubmed.ncbi.nlm.nih.gov/23327199/))",
        "The confirmatory **TESTS Phase III** trial enrolled 1,106 adults at 22 centers, double-blind, placebo-controlled. Participants received **1.6 mg SC every 12 hours for up to seven days**. Twenty-eight-day mortality was **23.4% with Tα1 and 24.1% with placebo**; hazard ratio 0.99, 95% CI 0.77–1.27, **P = 0.93**. No secondary or safety outcome differed significantly. ([Wu et al., BMJ 2025](https://pubmed.ncbi.nlm.nih.gov/39814420/))",
      ],
      highlight:
        "**1.6 mg twice daily is an ICU trial exposure, not an at-home acute-infection protocol, and the best Phase III evidence did not show a sepsis mortality benefit.** Suspected sepsis requires emergency assessment — not a peptide cycle.",
    },
    {
      id: "vaccine-oncology",
      title: "Vaccine, oncology, and other human programs",
      paragraphs: [
        "Older vaccine studies used **900 mcg/m² twice weekly for two to four weeks** or one/two high doses around vaccination. The Carraro hemodialysis pilot gave **3.2 or 6.4 mg SC** seven days before and on H1N1 vaccination day — mixed assay results. FDA concluded available studies did not establish an optimal dose or reliable benefit with contemporary U.S. vaccines.",
        "Tα1 has been evaluated as an adjunct in melanoma, hepatocellular carcinoma, NSCLC, HIV, COPD exacerbations, and post-transplant immune recovery. Doses ranged from **1 mg to 6.4 mg per day** in some melanoma studies to **900 mcg/m² twice weekly** in NSCLC. Many studies were small, open-label, or combined Tα1 with outdated therapies. Post-HSCT literature is especially unsuitable for community borrowing.",
      ],
    },
    {
      id: "escalation",
      title: "Formal dose escalation and dose-intensity studies",
      tables: [
        {
          caption: "Escalation data — not a consumer titration ladder",
          headers: ["Study design", "Doses", "Finding", "What it does not establish"],
          rows: [
            [
              "Early advanced-cancer Phase I",
              "0.6–9.6 mg/m² single IM doses",
              "One fever at 2.4 mg/m²; mild nausea at higher doses; no DLT",
              "No routine maximum or maintenance dose",
            ],
            [
              "Japanese HBV intensity comparison",
              "0.8 or 1.6 mg 6×/wk × 2 wk, then BIW",
              "Similar efficacy; ALT flares occurred",
              "No universal loading phase",
            ],
            [
              "Melanoma combination trial",
              "1.6, 3.2, or 6.4 mg SC",
              "No clear monotonic dose-response in ITT",
              "No self-directed oncology protocol",
            ],
            [
              "H1N1 vaccine pilot",
              "3.2 or 6.4 mg on two occasions",
              "Mixed immune-assay findings",
              "No general high-dose vaccine protocol",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "The highest tested single dose is not a recommended maximum. FDA noted no well-defined minimum pharmacologic dose and no clear dose-response relationship across the program.",
      ],
    },
    {
      id: "research-dosage",
      title: "Thymosin alpha-1 research dosage",
      paragraphs: [
        "The community landscape is easier to interpret when each schedule is converted to **total weekly exposure**. Repetition documents convention; it does not validate efficacy, safety, or cycle length.",
      ],
      widget: "ta1-weekly-exposure",
      tables: [
        {
          caption: "Commonly reported research protocols",
          headers: [
            "Protocol",
            "Amount",
            "Frequency",
            "Duration",
            "Weekly exposure",
            "Evidence",
          ],
          rows: [
            ["International/clinical core", "1.6 mg", "SC BIW", "24 wk HBV; up to 12 mo", "3.2 mg/wk", "Label + human trials"],
            ["Community BIW", "1.0–1.5 mg", "SC BIW", "4–8 wk", "2.0–3.0 mg/wk", "Anecdotal"],
            ["Community 3×/wk", "1.0–1.6 mg", "SC 3×/wk", "4–12 wk", "3.0–4.8 mg/wk", "Anecdotal"],
            ["5-on/2-off", "1.5 mg", "SC daily × 5", "Often 8 wk", "7.5 mg/wk", "Anecdotal"],
            ["Daily acute", "1.5–1.6 mg", "SC daily", "7–14 d", "10.5–11.2 mg/wk", "Anecdotal"],
            ["Sepsis research", "1.6 mg", "SC BID or q12h", "7 d", "19.2–22.4 mg/7 d", "ICU evidence; Phase III negative"],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Clinical research versus community reports",
      widget: "ta1-clinical-vs-anecdotal",
      paragraphsAfter: [
        "The biggest discrepancy is **frequency**, not the nominal 1.5-versus-1.6 mg amount. A 1.5 mg five-on/two-off protocol provides **7.5 mg per week** — about **2.34 times** the 3.2 mg weekly exposure of 1.6 mg twice weekly. Calling these schedules “the same dose” because each injection is near 1.6 mg is mathematically incorrect.",
      ],
    },
    {
      id: "dose-range",
      title: "Reported research dosage range",
      tables: [
        {
          caption: "Evidence-based dosage parameters",
          headers: ["Field", "Summary"],
          rows: [
            ["Most common human amount", "1.6 mg per SC administration"],
            ["Human BSA equivalent", "900 mcg/m² (~1.5–1.6 mg average adult)"],
            ["Formal human range", "0.8–6.4 mg per administration; IM escalation to 9.6 mg/m²"],
            ["Dominant chronic frequency", "Twice weekly, 3–4 days apart"],
            ["Acute human frequency", "Once or twice daily in short hospital protocols"],
            ["Human duration range", "~1 day to 12 months across unlike indications"],
            ["Community amount", "1.0–1.6 mg per injection; some 0.3–0.5 mg daily"],
            ["Community duration", "Commonly 4–12 weeks"],
            ["Weight-based info", "40 mcg/kg BIW below 40 kg in some international HBV materials"],
            ["Established maximum", "None — Phase I ceiling is not a recommended maximum"],
          ],
        },
      ],
    },
    {
      id: "weight",
      title: "Dosage by weight",
      paragraphs: [
        "The fixed **1.6 mg adult dose** dominates the literature. International materials use **40 mcg/kg** for people under 40 kg, which converges on 1.6 mg at 40 kg. The table reconstructs that foreign product rule — **not a general weight-based dosing tool**. Applying 40 mcg/kg above 40 kg would create unsupported doses (e.g., 4 mg at 100 kg).",
      ],
      tables: [
        {
          caption: "International under-40-kg rule reconstruction",
          headers: ["Body weight", "40 mcg/kg amount", "Context"],
          align: ["right", "right", "left"],
          rows: [
            ["20 kg", "0.80 mg", "Mathematical reconstruction only"],
            ["25 kg", "1.00 mg", "Mathematical reconstruction only"],
            ["30 kg", "1.20 mg", "International under-40-kg rule"],
            ["35 kg", "1.40 mg", "International under-40-kg rule"],
            ["39 kg", "1.56 mg", "International under-40-kg rule"],
            ["40 kg or more", "1.60 mg fixed", "Adult label convention — not 40 mcg/kg indefinitely"],
          ],
        },
      ],
    },
    {
      id: "12-week-protocol",
      title: "Complete community-anchored 12-week research protocol",
      paragraphs: [
        "The protocol below is a **prospective, fixed-exposure research design** studying the dominant short community schedule at the **best-documented per-dose amount and frequency**. It is not a personal treatment plan. Any human implementation requires qualified investigator oversight, ethics review, regulatory authorization where applicable, verified parenteral product, and predefined endpoints.",
      ],
      widget: "ta1-protocol-timeline",
      subsections: [
        {
          title: "Research question",
          paragraphs: [
            "In a single, predefined, clinically stable adult population, what are the tolerability profile and exploratory biologic effects of **Tα1 1.6 mg SC twice weekly, three or four days apart, for eight weeks**, compared with a prospectively specified control, followed by four weeks without exposure?",
          ],
        },
        {
          title: "Design summary",
          tables: [
            {
              caption: "Protocol specification",
              headers: ["Element", "Specification"],
              rows: [
                ["Exposure", "Tα1 1.6 mg SC"],
                ["Frequency", "Twice weekly, 3 or 4 days apart"],
                ["Exposure period", "8 weeks (16 administrations)"],
                ["Off-exposure follow-up", "4 weeks"],
                ["Nominal cumulative dose", "25.6 mg"],
                ["Escalation / loading / taper", "None"],
                ["Repeat cycle", "Not automatic"],
              ],
            },
            {
              caption: "Phase 2: fixed exposure, weeks 1–8",
              headers: ["Week", "Dose 1", "Dose 2", "Weekly total"],
              align: ["right", "right", "right", "right"],
              rows: [
                ["1–8", "1.6 mg SC", "1.6 mg SC", "3.2 mg each week"],
                ["Total", "8 administrations", "8 administrations", "25.6 mg"],
              ],
            },
            {
              caption: "Vial planning for 16 doses",
              headers: ["Vial size", "Doses/vial", "Remainder", "Min vials for 16 doses"],
              align: ["right", "right", "right", "right"],
              rows: [
                ["1.6 mg single-use", "1", "0", "16"],
                ["5 mg multidose", "3", "0.2 mg", "6 (= 30 mg labeled)"],
                ["10 mg multidose", "6", "0.4 mg", "3 (= 30 mg labeled)"],
              ],
            },
          ],
        },
        {
          title: "Predefined hold and stop rules",
          paragraphs: [
            "Stop exposure and obtain urgent medical assessment for: anaphylaxis signs; chest pain or severe dyspnea; fever with rigors or suspected sepsis; severe injection-site reaction; new neurologic deficit; suspected autoimmune flare or graft complication; pregnancy; or visible particulate, precipitation, failed sterility/endotoxin, or product-quality failure.",
          ],
        },
      ],
    },
    {
      id: "reconstitution",
      title: "Reconstitution and U-100 syringe math",
      paragraphs: [
        "Reconstitution arithmetic answers only **how much labeled peptide is present in a stated final volume**. It does not establish that the material dissolves at that concentration, stays monomeric, remains sterile, or has a validated beyond-use date.",
        "**Concentration (mg/mL) = peptide in vial (mg) ÷ final volume (mL)** · **Dose volume (mL) = target dose (mg) ÷ concentration** · **U-100 units = dose volume (mL) × 100**.",
      ],
      widget: "ta1-recon-calc",
      tables: [
        {
          caption: "Traditional 1.6 mg single-use presentation (1.6 mg/mL)",
          headers: ["Target amount", "Volume", "U-100 units"],
          align: ["right", "right", "right"],
          rows: [
            ["0.8 mg", "0.50 mL", "50 U"],
            ["1.0 mg", "0.625 mL", "62.5 U"],
            ["1.2 mg", "0.75 mL", "75 U"],
            ["1.4 mg", "0.875 mL", "87.5 U"],
            ["1.6 mg", "1.00 mL", "100 U"],
          ],
        },
        {
          caption: "5 mg vial at 2 mL final volume (2.5 mg/mL)",
          headers: ["Target amount", "Volume", "U-100 units"],
          align: ["right", "right", "right"],
          rows: [
            ["0.8 mg", "0.32 mL", "32 U"],
            ["1.0 mg", "0.40 mL", "40 U"],
            ["1.4 mg", "0.56 mL", "56 U"],
            ["1.5 mg", "0.60 mL", "60 U"],
            ["1.6 mg", "0.64 mL", "64 U"],
            ["2.0 mg", "0.80 mL", "80 U"],
          ],
        },
        {
          caption: "Cross-check for 1.6 mg amount",
          headers: ["Vial + volume", "Concentration", "1.6 mg volume", "Units", "Evidence note"],
          rows: [
            ["1.6 mg / 1 mL", "1.6 mg/mL", "1.00 mL", "100 U", "Traditional Zadaxin presentation"],
            ["5 mg / 2 mL", "2.5 mg/mL", "0.64 mL", "64 U", "Arithmetic common; validation required"],
            ["5 mg / 2.5 mL", "2.0 mg/mL", "0.80 mL", "80 U", "Highest clinical concentration FDA identified"],
            ["10 mg / 5 mL", "2.0 mg/mL", "0.80 mL", "80 U", "Multidose sterility required"],
            ["10 mg / 2 mL", "5.0 mg/mL", "0.32 mL", "32 U", "Unsupported — solubility concerns"],
          ],
        },
      ],
      paragraphsAfter: [
        "Adding 2 mL to a 10 mg vial gives **5 mg/mL** — more than twice the highest clinical strength FDA identified and above published free-base solubility (~2 mg/mL). A clear solution still does not exclude soluble aggregates or potency loss. **10 mg + 2 mL is not included as a validated preset.**",
      ],
    },
    {
      id: "why-dose",
      title: "Why 1.6 mg and twice-weekly dosing recur",
      numbered: [
        "**BSA development:** 900 mcg/m² ≈ 1.53 mg for a 1.7 m² adult, close to the 1.6 mg vial size.",
        "**Finished presentation:** the commercial single-use vial standardized one full administration at 1.6 mg.",
        "**Clinical replication:** hepatitis, oncology, vaccine, and infection programs repeatedly borrowed the established formulation.",
        "**Tolerability:** local injection reactions were usually mild at common trial doses.",
        "**Lack of clear dose-response:** higher doses did not consistently produce greater effects — escalation lacked empirical advantage.",
      ],
      widget: "ta1-claim-checker",
    },
    {
      id: "mechanism",
      title: "Mechanism and dose-response limits",
      numbered: [
        "**Dendritic-cell signaling:** nonclinical work implicates TLR9 and, in some systems, TLR2, with downstream MyD88, NF-κB, and interferon-regulatory pathways.",
        "**Antigen presentation:** Tα1 can influence dendritic-cell maturation and MHC expression in some cell models.",
        "**T-cell and NK effects:** changes in T-cell differentiation, CD4/CD8 function, Th1 cytokines, and cytotoxic responses reported in some models.",
        "**Regulatory feedback:** effects on IDO, regulatory T cells, and IL-10 suggest context-dependent damping as well as stimulation.",
        "**No reliable concentration-response curve** linking dose to validated clinical outcome in humans — “more” cannot be assumed to mean “better.”",
      ],
    },
    {
      id: "preclinical",
      title: "Animal and preclinical research dosage",
      paragraphs: [
        "**Animal / preclinical research only.** These doses are not human protocols and should not be converted into community doses.",
      ],
      tables: [
        {
          caption: "Selected preclinical exposures",
          headers: ["Model", "Tα1 dose", "Route / schedule", "Outcome"],
          rows: [
            ["Murine lung cancer", "10 mg/kg", "SC BID × 7 d", "Tumor growth suppression"],
            ["B16F10 melanoma", "0.02–6 mg/kg", "SC BID × 7 d", "Tumor effect not dose-dependent"],
            ["Mouse sepsis (CLP)", "6 mg/kg", "SC BID × 7 d", "Trends not statistically significant"],
            ["Murine CMV", "200 mcg/kg/day", "IP × 7–14 d", "Viral load, dendritic pathways"],
            ["Mouse tetanus vaccine", "0.05–0.5 mcg/kg", "IP daily × 4 d", "Antibody response — age-dependent"],
          ],
        },
      ],
      paragraphsAfter: [
        "FDA noted many pharmacology experiments used animal exposures markedly higher than the usual 1.6 mg human SC dose. Human-equivalent-dose calculations do not repair species, route, and formulation differences.",
      ],
    },
    {
      id: "results",
      title: "What results can research reasonably measure?",
      tables: [
        {
          caption: "Claim vs human evidence",
          headers: ["Claim or outcome", "What human evidence shows"],
          rows: [
            ["“Raises immunity”", "Some studies changed immune markers; no universal validated immune score"],
            ["Prevents infection", "Not established for general use; population-specific and inconsistent"],
            ["Treats chronic HBV", "Older trials and foreign approvals; modern U.S. review found evidence insufficient vs current therapy"],
            ["Reduces sepsis mortality", "TESTS Phase III (n=1,106): no 28-day mortality benefit"],
            ["Improves vaccine response", "Mixed older/small studies; optimal timing with contemporary vaccines unestablished"],
            ["Treats Lyme / ME/CFS / long COVID", "FDA 2024 review found no clinical studies for Lyme or ME/CFS; COVID literature heterogeneous"],
          ],
        },
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      paragraphs: [
        "The **1.6 mg SC amount and twice-weekly schedule are well established as human exposures** and have more clinical history than most peptides marketed by U.S. wellness clinics. What remains poorly established is how that exposure should be used for contemporary diseases, short wellness cycles, daily protocols, nasal products, or peptide stacks.",
      ],
      widget: "ta1-evidence-ladder",
    },
    {
      id: "safety",
      title: "Safety and tolerability",
      paragraphs: [
        "Across many trials, the most consistent Tα1-attributed events were injection-site pain, redness, occasional rash, and transient flu-like symptoms. Many systemic adverse events occurred in combination trials with interferon, chemotherapy, critical illness, or transplantation — causality is difficult to isolate.",
        "Seek urgent evaluation for anaphylaxis signs, chest pain, severe shortness of breath, fever with rigors or suspected sepsis, spreading injection-site reaction, suspected autoimmune flare, or pregnancy during exposure.",
      ],
      widget: "ta1-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and handling",
      tables: [
        {
          caption: "Publicly reported storage context",
          headers: ["Material / context", "Condition", "Interpretation"],
          rows: [
            ["Traditional Zadaxin finished product", "2–8°C unopened; reconstitute and use immediately", "Strongest practical anchor"],
            ["Lyophilized Tα1 free-base reference", "Room temp ~3 wk; desiccated below −18°C recommended", "Bulk/reagent info — not clinical label"],
            ["Reconstituted free-base reference", "4°C for 2–7 days cited", "Not a validated multidose human BUD"],
            ["Tα1 acetate bulk", "Sealed 2–8°C or below −20°C per supplier", "Final formulation can behave differently"],
          ],
        },
      ],
      notes: [
        "Do not repeatedly freeze-thaw. Quarantine material after temperature excursion, haze, visible particles, or precipitation. Absence of visible change does not prove stability.",
      ],
    },
    {
      id: "wada",
      title: "Anti-doping status",
      paragraphs: [
        "Thymosin alpha-1 is not a growth-hormone secretagogue and is not the same as TB-500. However, the 2026 WADA Prohibited List includes **S0 Non-Approved Substances**, which can cover pharmacologic substances without current approval by a governmental regulatory health authority for human therapeutic use. Athletes should obtain a written determination from their anti-doping organization before any use. ([2026 WADA Prohibited List](https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf))",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Thymosin alpha-1 has a real human clinical history, but its dosage evidence is more specific than marketing suggests. **1.6 mg SC twice weekly, three or four days apart, is the clearest label- and trial-anchored schedule.** Under-40-kg materials use 40 mcg/kg; daily and twice-daily regimens belong to narrow acute or hospital studies. The largest sepsis trial found no mortality benefit.",
        "For a rigorous short-course study, the cleanest design is fixed **1.6 mg twice-weekly exposure for eight weeks with four weeks off**, verified sterile product, predefined endpoints, no loading or escalation, no stacks, and no automatic repeat cycle. Reconstitution math prevents volume errors but cannot validate a concentrated bulk formulation.",
      ],
      highlight:
        "Tα1 ≠ TB-500 / thymosin beta-4. Core dose: 1.6 mg SC BIW. Short half-life ≠ daily is better. TESTS sepsis trial negative. Warn strongly against 10 mg/2 mL (5 mg/mL).",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard thymosin alpha-1 dose in human research?",
        answer:
          "The most repeated dose is 1.6 mg subcutaneously twice weekly, generally with injections separated by three or four days. It was used in chronic-hepatitis programs and appears in some international Zadaxin materials. It is not a universal dose for every immune-related condition.",
      },
      {
        question: "How often is thymosin alpha-1 used?",
        answer:
          "For chronic human research, twice weekly is the dominant schedule. Once-daily and twice-daily exposure has been used in specialized acute hospital studies. Community schedules add three-times-weekly, daily, or five-on/two-off patterns, but those frequencies are not equally supported.",
      },
      {
        question: "How long is a thymosin alpha-1 cycle?",
        answer:
          "Clinical duration depends on the question: seven days in sepsis studies, four weeks in some vaccine programs, 24 weeks in many HBV studies, and up to 12 months in older chronic-disease research. The commonly marketed 4–12-week cycle is a community convention with no universal controlled finding.",
      },
      {
        question: "Is a loading dose necessary?",
        answer:
          "No general loading dose has been established. A Japanese HBV study used six administrations per week for two weeks before switching to twice weekly — a formal study arm, not proof that other protocols need loading.",
      },
      {
        question: "Does thymosin alpha-1 need to be tapered?",
        answer:
          "Published protocols generally stop at the end of the planned course. A physiologic taper has not been established. The 12-week research protocol on this page uses a fixed dose, then a defined off-exposure observation period.",
      },
      {
        question: "What is the maximum thymosin alpha-1 dose?",
        answer:
          "There is no established universal maximum. An early Phase I study tested single IM doses up to 9.6 mg/m² without finding dose-limiting toxicity, but that ceiling is not a recommended dose or safety limit.",
      },
      {
        question: "Is thymosin alpha-1 dosed by body weight?",
        answer:
          "Usually not above 40 kg. International chronic-hepatitis materials commonly use a fixed 1.6 mg adult amount and list 40 mcg/kg for people under 40 kg. Extending 40 mcg/kg to heavier adults would create unsupported doses.",
      },
      {
        question: "How many U-100 units is 1.6 mg from a 5 mg vial mixed to 2 mL?",
        answer:
          "The nominal concentration is 2.5 mg/mL, so 1.6 mg equals 0.64 mL or 64 U. That is correct arithmetic, but 2.5 mg/mL is not the traditional 1.6 mg/mL finished-product formulation and requires concentration-specific solubility, aggregation, potency, sterility, and stability support.",
      },
      {
        question: "How many units is 1.6 mg from a 10 mg vial mixed to 2 mL?",
        answer:
          "Mathematically, 10 mg in 2 mL is 5 mg/mL and 1.6 mg equals 0.32 mL or 32 U. FDA's review cited free-base solubility around 2 mg/mL and found no human clinical formulation above 2 mg/mL. The 5 mg/mL preparation should not be treated as validated merely because the volume calculation is simple.",
      },
      {
        question: "Can a reconstituted vial be kept for 28 days?",
        answer:
          "No universal 28-day rule exists. Traditional Zadaxin materials instruct immediate use after reconstitution. A reagent source cited by FDA reported 2–7 days at 4°C for reconstituted free base, but that is not a clinical multidose beyond-use date.",
      },
      {
        question: "What is the best time of day for thymosin alpha-1?",
        answer:
          "Human trials do not establish a superior morning, evening, fasting, or bedtime window. Consistent protocol timing helps data quality, but circadian claims are not a substitute for dose and outcome evidence.",
      },
      {
        question: "Can thymosin alpha-1 be taken daily for an acute illness?",
        answer:
          "Daily exposure has been studied in hospitalized COVID-19, liver failure, COPD exacerbation, transplant, and sepsis settings with diagnosis-specific standard care. The large Phase III sepsis trial was negative, and acute illness should not be self-triaged into a peptide protocol.",
      },
      {
        question: "Does thymosin alpha-1 treat Lyme disease?",
        answer:
          "FDA's 2024 review found no clinical studies evaluating Tα1 for Lyme disease. Community marketing does not establish a dose, antimicrobial effect, or benefit.",
      },
      {
        question: "Does thymosin alpha-1 treat ME/CFS or long COVID?",
        answer:
          "FDA found no Tα1 clinical studies in ME/CFS. COVID-19 studies were heterogeneous and focused largely on acute hospitalized disease rather than long COVID. No validated long-COVID or ME/CFS dose has been established.",
      },
      {
        question: "Can thymosin alpha-1 be used with vaccines?",
        answer:
          "It has been studied with influenza vaccines and has a vaccine-adjunct indication in Italy for a specific population. The evidence does not support assuming the same timing improves every modern vaccine.",
      },
      {
        question: "Can thymosin alpha-1 be used in autoimmune disease?",
        answer:
          "That is a high-caution setting. Immune modulation could aggravate or alter autoimmune activity, and international materials advise individualized assessment.",
      },
      {
        question: "Can transplant recipients use thymosin alpha-1?",
        answer:
          "Transplant is not a routine community-use setting. Tα1 could oppose deliberate immunosuppression, and post-HSCT reports raise concerns about GVHD, engraftment, immune cytopenias, and serious immune reactions.",
      },
      {
        question: "Can thymosin alpha-1 be stacked with TB-500, BPC-157, KPV, GHK-Cu, or LL-37?",
        answer:
          "No controlled human study establishes a safe or more effective multi-peptide stack. Combining agents prevents attribution of both benefit and harm. The complete research protocol on this page intentionally prohibits stacking.",
      },
      {
        question: "What should happen after a missed dose?",
        answer:
          "In a research protocol, record the missed administration and follow the prespecified deviation plan. Do not double, compress the interval, or add a catch-up dose.",
      },
      {
        question: "Is thymosin alpha-1 the same as TB-500?",
        answer:
          "No. Tα1 is a 28-residue immunomodulatory peptide. TB-500 refers to thymosin-beta-4-related material with a different sequence, biology, evidence base, and dose. The names cannot be substituted.",
      },
      {
        question: "Does thymosin alpha-1 raise growth hormone?",
        answer:
          "It is not a GHRH analogue or ghrelin-receptor agonist. Doses used for CJC-1295, sermorelin, ipamorelin, or hexarelin do not apply.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "FDA",
        title: "Thymosin Alpha-1 Related Bulk Drug Substances Briefing Document, 2024",
        detail: "Identity, chemistry, compounding review.",
        href: "https://www.fda.gov/media/183820/download",
      },
      {
        authors: "FDA",
        title: "Pharmacy Compounding Advisory Committee Final Summary Minutes, December 2024",
        detail: "4 yes / 17 no on 503A bulks list.",
        href: "https://www.fda.gov/media/185642/download",
      },
      {
        authors: "Rost et al.",
        title: "Pharmacokinetics after SC injection of three formulations",
        detail: "Clin Pharmacokinet. 1999.",
        href: "https://pubmed.ncbi.nlm.nih.gov/10027483/",
      },
      {
        authors: "Chien et al.",
        title: "Randomized controlled chronic hepatitis B trial",
        detail: "Hepatology. 1998.",
        href: "https://pubmed.ncbi.nlm.nih.gov/9581695/",
      },
      {
        authors: "Iino et al.",
        title: "0.8 versus 1.6 mg chronic hepatitis B study",
        detail: "J Viral Hepat. 2005.",
        href: "https://pubmed.ncbi.nlm.nih.gov/15850471/",
      },
      {
        authors: "Pockros et al.",
        title: "Tα1 with peginterferon/ribavirin for HCV",
        detail: "Aliment Pharmacol Ther. 2012.",
        href: "https://pubmed.ncbi.nlm.nih.gov/22233415/",
      },
      {
        authors: "Wu et al.",
        title: "ETASS severe-sepsis randomized trial",
        detail: "Crit Care. 2013.",
        href: "https://pubmed.ncbi.nlm.nih.gov/23327199/",
      },
      {
        authors: "Wu et al.",
        title: "TESTS Phase III sepsis trial",
        detail: "BMJ. 2025.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39814420/",
      },
      {
        authors: "Gravenstein et al.",
        title: "Influenza vaccine study in older men",
        detail: "J Infect Dis. 1989.",
        href: "https://pubmed.ncbi.nlm.nih.gov/2642497/",
      },
      {
        authors: "Maio et al.",
        title: "Randomized melanoma combination study",
        detail: "Cancer Immunol Immunother. 2010.",
        href: "https://pubmed.ncbi.nlm.nih.gov/20194853/",
      },
      {
        authors: "PubChem",
        title: "Thymalfasin, CID 16130571",
        detail: "Compound record.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/16130571",
      },
      {
        authors: "World Anti-Doping Agency",
        title: "2026 Prohibited List",
        detail: "S0 Non-Approved Substances.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Thymosin alpha-1 has **no U.S. approved dosage** and **no established prescribing dose for general wellness use**. Human trial doses from hepatitis, sepsis, oncology, or vaccine research do not become a universal immune-support protocol.",
      "This page documents international label history, human trial exposures, community conventions, reconstitution arithmetic, and a fixed 12-week research design framework. It is **not** a clinical dosing or self-injection guide. Confirm Tα1 identity (**≠ TB-500 / thymosin beta-4**), active-moiety assay, sterility, and concentration-specific solubility before parenteral research.",
      "Suspected sepsis, anaphylaxis, chest pain, severe infection, or autoimmune flare require urgent medical care — not dose adjustment. Dec 2024 PCAC voted 4 yes / 17 no on adding Tα1 to the 503A bulks list citing characterization and evidence concerns.",
    ],
  },
};

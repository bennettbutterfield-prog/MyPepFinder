/**
 * Thymulin (FTS-Zn / serum thymic factor / nonathymulin) dosage guide.
 * Zinc-dependent thymic nonapeptide — ≠ thymalin, thymosin alpha-1, TB-500.
 * Historical RA signal at 5 mg/day; modern mouse protocol 1.5 mg/kg IP × 28 d.
 */

/** Free-peptide molecular mass (Da) — NIH/NCATS */
export const THYMULIN_FREE_PEPTIDE_MASS = 858.8533;

/** Thymulin acetate commercial research-reagent mass (Da) */
export const THYMULIN_ACETATE_MASS = 918.91;

/** Anhydrous ZnCl2 molecular mass (mg/mmol) */
export const ZNCL2_ANHYDROUS_MASS = 136.315;

export function thymulinAmountFromVial(vialMg, diluentMl, targetMcgOrMg, unit = "mcg") {
  const vial = Number(vialMg);
  const d = Number(diluentMl);
  const target = Number(targetMcgOrMg);
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
  const targetMcg = unit === "mg" ? target * 1000 : target;
  const concMcgPerMl = (vial * 1000) / d;
  const concMgPerMl = concMcgPerMl / 1000;
  const volumeMl = targetMcg / concMcgPerMl;
  const units = volumeMl * 100;
  const mcgPerUnit = concMcgPerMl / 100;
  return {
    concMcgPerMl,
    concMgPerMl,
    volumeMl,
    units,
    mcgPerUnit,
    targetMcg,
    targetMg: targetMcg / 1000,
  };
}

/** Equimolar ZnCl2 example for 1 mg free peptide — educational only */
export function thymulinEquimolarZnMg(peptideMg, peptideMassDa = THYMULIN_FREE_PEPTIDE_MASS) {
  const mg = Number(peptideMg);
  if (!Number.isFinite(mg) || mg <= 0) return null;
  const mmol = mg / peptideMassDa;
  return mmol * ZNCL2_ANHYDROUS_MASS;
}

export const THYMULIN_RECON_PRESETS = [
  {
    id: "5-2",
    vialMg: 5,
    diluentMl: 2,
    label: "5 mg · 2 mL (2.5 mg/mL)",
    note: "Common online arithmetic — verify active-peptide assay and zinc state",
  },
  {
    id: "10-2",
    vialMg: 10,
    diluentMl: 2,
    label: "10 mg · 2 mL (5 mg/mL)",
    note: "Higher concentration — solubility, zinc complex, and stability validation required",
  },
  {
    id: "10-1",
    vialMg: 10,
    diluentMl: 1,
    label: "10 mg · 1 mL (10 mg/mL)",
    note: "Arithmetic only — not evidence the peptide-zinc complex remains soluble or measurable",
  },
];

export const THYMULIN_IDENTITY = [
  {
    id: "fts-zn",
    label: "Thymulin / FTS-Zn (zinc-complexed active form)",
    verdict: "This page's subject when zinc state is verified — biologically active thymulin",
    detail:
      "Thymulin is the zinc-associated nonapeptide whose recognized activity depends on zinc. Classic model: one peptide molecule bound to one zinc ion (FTS-Zn). Sequence: Pyr-Ala-Lys-Ser-Gln-Gly-Gly-Ser-Asn-OH. Also called serum thymic factor, facteur thymique sérique, or nonathymulin when synthetic.",
  },
  {
    id: "fts-free",
    label: "FTS (zinc-free nonapeptide)",
    verdict: "Not interchangeable with active thymulin — little or no classic bioactivity",
    detail:
      "The zinc-free nine-residue peptide (FTS) has little or no recognized thymulin activity in the traditional bioassay. Using FTS doses as if they were FTS-Zn ignores the central zinc dependence. Product identity must establish zinc state before any protocol.",
  },
  {
    id: "nonathymulin",
    label: "Nonathymulin (INN synthetic peptide)",
    verdict: "Yes only when formulation, route, zinc state, and active moiety match the study",
    detail:
      "Nonathymulin is the international nonproprietary name for the defined synthetic nonapeptide used in historical drug research. Historical RA trials used nonathymulin at 1, 5, or 10 mg/day — but accessible abstracts omit route, zinc formulation, and duration details.",
  },
  {
    id: "thymalin",
    label: "Thymalin (thymic extract / peptide mixture)",
    verdict: "Different product — do NOT reuse thymalin 20-day schedules for thymulin",
    detail:
      "Thymalin is a thymic extract or peptide mixture used in some countries and online protocols. The most common online error is importing a 20-day thymalin regimen into a thymulin page. Similar names do not make substances, milligram amounts, pharmacology, or evidence interchangeable.",
  },
  {
    id: "ta1",
    label: "Thymosin alpha-1 / thymalfasin",
    verdict: "Different 28-aa peptide — do NOT reuse Tα1 doses",
    detail:
      "Thymosin alpha-1 is a different thymic peptide with a much larger clinical literature (core 1.6 mg SC twice weekly). Its schedule cannot be assigned to thymulin. Combining them destroys dose attribution.",
  },
  {
    id: "tb500",
    label: "TB-500 / thymosin beta-4",
    verdict: "Different actin-binding peptide system — not thymulin",
    detail:
      "Thymosin beta-4 and TB-500 fragments are unrelated to the FTS nonapeptide. Different sequence, targets, clinical history, and doses.",
  },
  {
    id: "thymopentin",
    label: "Thymopentin / thymopoietin / PAT analogue",
    verdict: "Different thymic peptides or analogues — not thymulin doses",
    detail:
      "Thymopentin is a five-amino-acid thymopoietin fragment. PAT is a synthetic thymulin analogue used in animal inflammation studies. Analogue and fragment doses are not thymulin doses.",
  },
  {
    id: "unsure",
    label: "Label unclear or unsure",
    verdict: "Incomplete — confirm identity and zinc state before trusting protocols",
    detail:
      "A label stating only “thymulin 10 mg” leaves critical questions unanswered: zinc-free vs complexed, acetate vs free peptide mass, assay-corrected active moiety, and bioactivity. Analytics should resolve identity and zinc stoichiometry first.",
  },
];

export const THYMULIN_ZINC = {
  chips: [
    {
      id: "fts-free",
      label: "Zinc-free FTS",
      status: "Inactive in classic bioassay",
      detail:
        "The zinc-free nonapeptide has little or no recognized thymulin activity. A vial labeled “thymulin” or “FTS” may contain inactive peptide unless zinc complexation is verified.",
    },
    {
      id: "fts-zn",
      label: "FTS-Zn (deliberately complexed)",
      status: "Classic active thymulin form",
      detail:
        "FTS-Zn is the biologically active form when the peptide binds zinc in approximately a 1:1 molar relationship. Early structural work showed zinc creates a biologically recognized epitope.",
    },
    {
      id: "acetate-zncl2",
      label: "Thymulin acetate + equimolar ZnCl2",
      status: "Modern animal-study preparation",
      detail:
        "The 2026 Nature Communications mouse study used thymulin acetate combined with equimolar ZnCl2. Acetate identifies a counterion, not zinc complexation — investigators still added zinc reagent.",
    },
    {
      id: "unknown",
      label: "Zinc state unknown / assumed",
      status: "Not reproducible",
      detail:
        "Community protocols often assume any “thymulin” vial is active. Without zinc content assay and bioactivity testing, dose and effect cannot be reproduced.",
    },
  ],
  stoichiometry: {
    examplePeptideMg: 1,
    examplePeptideMmol: 0.001164,
    exampleZncl2Mg: 0.159,
    peptideMassBasis: "858.8533 mg/mmol free peptide",
    zncl2Basis: "136.315 mg/mmol anhydrous ZnCl2",
    warning:
      "Laboratory stoichiometry example only — not a self-mixing instruction. Correct mass changes with hydrate form, acetate salt, assay potency, pre-existing zinc, pH, and validated formulation procedure.",
  },
};

export const THYMULIN_HUMAN_TRIALS = [
  {
    id: "ra-dose-compare",
    study: "Amor et al., 1987",
    dose: "1, 5, or 10 mg/day",
    frequency: "Daily; route not in PubMed abstract",
    duration: "Not reported in abstract",
    population: "Two RCTs, rheumatoid arthritis",
    result:
      "5 mg/day strongest signal (56% improved vs 17% placebo); non-monotonic — incomplete methods prevent modern protocol",
    evidence: "Human RCT",
  },
  {
    id: "ra-500mcg",
    study: "Faure et al., 1984",
    dose: "500 mcg once",
    frequency: "SC once; synthetic FTS + zinc",
    duration: "One dose; cells at 1 h",
    population: "5 people with rheumatoid arthritis",
    result:
      "Mechanistic T-cell-marker probe — too small and short for clinical protocol",
    evidence: "Small human study",
  },
  {
    id: "ms-trial",
    study: "Haahr et al., 1989",
    dose: "Not in abstract",
    frequency: "SC nonathymulin vs placebo",
    duration: "6 months + 6 months follow-up",
    population: "40 matched MS participants",
    result: "No significant disability or side-effect difference vs placebo",
    evidence: "Human RCT",
  },
  {
    id: "pediatric",
    study: "Bach et al., 1982",
    dose: "Not in abstract",
    frequency: "Synthetic FTS; route not in abstract",
    duration: "Not reported",
    population: "Immunodeficient children",
    result: "Historical report — insufficient dosing detail for reproduction",
    evidence: "Historical human report",
  },
  {
    id: "topical-alopecia",
    study: "Topical zinc-thymulin pilot",
    dose: "0.0005% · 1–2 mL BID",
    frequency: "Topical scalp twice daily",
    duration: "4–10 months",
    population: "18 enrolled; 11 ≥6 months (alopecia)",
    result:
      "Uncontrolled pilot; 5–10 mcg/application by arithmetic — cannot compare with systemic mg dosing",
    evidence: "Uncontrolled pilot",
  },
  {
    id: "ex-vivo",
    study: "Kanemaru et al., 2026 (ex vivo)",
    dose: "1 mcg/mL + equimolar ZnCl2",
    frequency: "24 h culture before stimulation",
    duration: "Ex vivo only",
    population: "Human PBMCs",
    result:
      "Cell-culture concentration — not a human blood target or injectable dose",
    evidence: "Ex vivo mechanistic",
  },
];

export const THYMULIN_HUMAN_STATUS = [
  ["U.S. approved dosage", "None"],
  ["NIH/NCATS status", "Nonathymulin investigational; historical development discontinued"],
  ["Strongest human dose comparison", "RA RCTs: 1, 5, 10 mg/day — 5 mg/day best reported signal"],
  ["Documented SC human amount", "500 mcg once (n=5 RA biological-response experiment)"],
  ["MS six-month SC trial", "Dose absent from abstract; no significant clinical benefit"],
  ["Topical pilot exposure", "0.0005% · 5–10 mcg per application by arithmetic"],
  ["Modern mouse dose", "1.5 mg/kg IP daily × 28 d + equimolar ZnCl2 — not a human dose"],
  ["Validated community protocol", "None"],
  ["Main dosing problem", "Identity, zinc state, assay, route, incomplete old trial reporting"],
];

export const THYMULIN_PROTOCOL_PHASES = [
  {
    id: "acclimation",
    phase: "Acclimation & baseline (animal)",
    days: "−14 to −2",
    amount: "None",
    frequency: "—",
    cumulative: "—",
    purpose:
      "SPF acclimation, health review, animal ID, tumor-cell authentication, operator training — aged C57BL/6 mice",
  },
  {
    id: "implant",
    phase: "Tumor implantation — study day 0",
    days: "0",
    amount: "5 × 10⁵ E0771 cells",
    frequency: "Single mammary-gland implant under anesthesia",
    cumulative: "—",
    purpose:
      "E0771 mammary-tumor model — prespecified surgical procedure; blinded allocation after successful implant",
  },
  {
    id: "dosing",
    phase: "Fixed thymulin exposure — days 1–28",
    days: "1–28",
    amount: "1.5 mg/kg thymulin acetate + equimolar ZnCl2",
    frequency: "IP once daily · fixed dose · no titration",
    cumulative: "28 consecutive daily doses",
    purpose:
      "Replication of Kanemaru et al., 2026 aged-mouse tumor protocol — zinc-matched vehicle control essential",
  },
  {
    id: "endpoint",
    phase: "Main endpoint — study day 29",
    days: "29",
    amount: "None (terminal collection)",
    frequency: "Final tumor measurement + prespecified tissue/blood",
    cumulative: "Full 28-d exposure complete",
    purpose:
      "Longitudinal E0771 tumor volume day 1–28 primary endpoint; myeloid cytokine panel secondary — animal protocol only",
  },
];

export const THYMULIN_COMPARE = {
  clinical: {
    title: "Historical human literature",
    status: "Old, sparse, formulation-incomplete — 5 mg/day RA signal strongest",
    rows: [
      ["Product identity", "Synthetic FTS, FTS-Zn, or nonathymulin — sometimes incompletely described"],
      ["Zinc", "Deliberately supplemented in some studies"],
      ["Dose basis", "Fixed trial arms: 1 / 5 / 10 mg/day; 500 mcg once SC"],
      ["Route", "SC documented in some trials; topical in one pilot; RA route often missing"],
      ["Duration", "One dose to months of treatment"],
      ["Monitoring", "Disease-specific clinical or immune endpoints"],
      ["Dose escalation", "Formal 1/5/10 mg comparison — non-monotonic (5 mg best)"],
      ["Evidence", "Condition-specific and mixed; MS trial negative"],
    ],
  },
  anecdotal: {
    title: "Modern community protocols",
    status: "Inconsistent — often conflates thymulin with thymalin or Tα1",
    rows: [
      ["Product identity", "Often only “thymulin” on bulk vial — zinc state unspecified"],
      ["Zinc", "Frequently unspecified or assumed automatic"],
      ["Dose basis", "Template, calculator, or practitioner convention"],
      ["Route", "Usually SC without formulation validation"],
      ["Duration", "8–20 weeks or repeated annual cycles"],
      ["Monitoring", "Symptom tracking only"],
      ["Dose escalation", "Flexible or “acute” 5 mg/day framing"],
      ["Evidence", "No matched controlled thymulin studies for most schedules"],
    ],
  },
};

export const THYMULIN_CLAIMS = [
  {
    id: "thymalin-same",
    claim: "Thymulin and thymalin are the same — 20-day cycles apply to both",
    status: "False",
    detail:
      "Thymulin is a defined zinc-dependent nonapeptide. Thymalin is a thymic extract or peptide mixture. A 20-day thymalin schedule is the most common online conflation error and is not evidence for thymulin.",
  },
  {
    id: "zinc-automatic",
    claim: "Any thymulin vial is already zinc-complexed and active",
    status: "Not established",
    detail:
      "Labels often do not specify zinc state. FTS (zinc-free) has little classic bioactivity. Modern mouse work added equimolar ZnCl2 to thymulin acetate — acetate does not mean zinc-complexed.",
  },
  {
    id: "5mg-universal",
    claim: "5 mg/day from old RA trials is a universal thymulin dose",
    status: "Not valid",
    detail:
      "5 mg/day had the strongest signal among 1, 5, and 10 mg/day in 1980s RA trials — but the response was non-monotonic, route/formulation are incomplete in the abstract, and the program did not establish benefit for immune support, aging, or infection prevention.",
  },
  {
    id: "mouse-to-human",
    claim: "1.5 mg/kg mouse IP converts to a human subcutaneous dose",
    status: "False",
    detail:
      "The page intentionally does not calculate human-equivalent doses. Route (IP vs SC), species thymic biology, zinc complexation, pharmacokinetics, and product bioactivity are unresolved. A numerical HED would look precise while ignoring controlling factors.",
  },
  {
    id: "higher-better",
    claim: "Higher thymulin doses produce stronger immune effects",
    status: "Contradicted in RA data",
    detail:
      "In the RA dose comparison, 5 mg/day performed better than 1 or 10 mg/day. The non-monotonic result argues against assuming more peptide creates more benefit.",
  },
  {
    id: "topical-equals-injectable",
    claim: "Topical 0.0005% zinc-thymulin doses transfer to injectable protocols",
    status: "Not valid",
    detail:
      "The alopecia pilot used 5–10 mcg per application (0.0005%, 1–2 mL BID) — orders of magnitude below systemic milligram dosing. Study-specific zinc oxide preparation is not interchangeable with injectable acetate.",
  },
  {
    id: "20-day-validated",
    claim: "2 mg SC daily × 20 days repeated three times yearly is validated thymulin dosing",
    status: "False",
    detail:
      "This schedule resembles thymalin cycle conventions from commercial dosing guides. No matching thymulin clinical trial supports it — likely molecule-name conflation.",
  },
  {
    id: "equal-mass-zinc",
    claim: "Equimolar zinc means equal mass of peptide and ZnCl2",
    status: "False",
    detail:
      "Equimolar means one mole of zinc reagent per mole of peptide — for 1 mg free peptide, approximately 0.159 mg anhydrous ZnCl2, not 1 mg. Hydrate form, acetate salt, and assay basis change the correct mass.",
  },
  {
    id: "ex-vivo-dose",
    claim: "1 mcg/mL ex vivo PBMC exposure is a human injectable dose",
    status: "False",
    detail:
      "The 2026 study exposed cells in culture to 1 mcg/mL thymulin plus equimolar ZnCl2 for 24 hours. This is not a blood concentration target, infusion dose, or SC amount.",
  },
  {
    id: "ta1-interchange",
    claim: "Thymosin alpha-1 and thymulin are interchangeable thymic peptides",
    status: "False",
    detail:
      "Tα1 is a 28-amino-acid peptide with 1.6 mg SC twice-weekly clinical history. Thymulin is a zinc-dependent nonapeptide with a separate, older, sparser human record. Doses cannot be substituted.",
  },
];

export const THYMULIN_EVIDENCE_LADDER = [
  {
    level: "Current approved prescribing label",
    exists: "Not identified for thymulin/nonathymulin",
    confidence: "None",
  },
  {
    level: "Large modern confirmatory human trials",
    exists: "Absent",
    confidence: "None",
  },
  {
    level: "Randomized human dose comparison",
    exists: "Historical RA trials: 1, 5, 10 mg/day",
    confidence: "Low — incomplete modern reproducibility",
  },
  {
    level: "Other controlled human administration",
    exists: "Six-month SC MS trial — dose absent; no significant benefit",
    confidence: "Low",
  },
  {
    level: "Small or uncontrolled human research",
    exists: "500 mcg SC once; pediatric report; uncontrolled topical pilot",
    confidence: "Very low",
  },
  {
    level: "Modern animal studies",
    exists: "1.5 mg/kg IP + equimolar ZnCl2 in aged mice (2026)",
    confidence: "Moderate for animal replication — not human transfer",
  },
  {
    level: "Ex vivo and in vitro studies",
    exists: "1 mcg/mL human PBMC; mouse macrophage cultures",
    confidence: "Mechanistic only",
  },
  {
    level: "Community practice",
    exists: "100 mcg BIW to multi-mg daily — inconsistent; thymalin conflation common",
    confidence: "Insufficient",
  },
];

export const THYMULIN_AE_SIMPLE = [
  {
    topic: "Overall trial tolerability",
    status: "Described as minimal in RA trials",
    note: "Old, small database — not a modern safety profile",
  },
  {
    topic: "Thrombocytopenia",
    status: "Withdrawal reported (5 mg group, month 3)",
    note: "Causality not established — relevant in autoimmune populations",
  },
  {
    topic: "Vasculitis",
    status: "Withdrawal reported (5 mg group, month 5)",
    note: "Should not be erased from safety summaries",
  },
  {
    topic: "MS trial side effects",
    status: "No significant difference vs placebo (abstract)",
    note: "Six months SC — dose not reported in abstract",
  },
  {
    topic: "Topical pilot",
    status: "One transient redness episode",
    note: "After sun exposure and scalp abrasion — attributed to non-active component",
  },
];

export const THYMULIN_AE_FULL = [
  {
    topic: "Overall trial tolerability",
    status: "Minimal in RA trials",
    note: "Authors described adverse effects as minimal overall",
    context:
      "The rheumatoid-arthritis program is nearly four decades old with incomplete accessible methods. “Minimal overall” cannot be translated into risk-free — especially with bulk research material lacking trial-grade characterization.",
  },
  {
    topic: "Thrombocytopenia",
    status: "Reported withdrawal",
    note: "5 mg group, month 3",
    context:
      "Indexed full-text material reports withdrawal after thrombocytopenia. The report does not establish thymulin caused the event, but CBC and platelet monitoring are relevant in any approved human investigation — particularly with autoimmune disease.",
  },
  {
    topic: "Vasculitis",
    status: "Reported withdrawal",
    note: "5 mg group, month 5",
    context:
      "Withdrawal after vasculitis was reported in the 5 mg/day arm. An immunoregulatory molecule is not automatically safe in immune-mediated disease. Modern background immunotherapy differs substantially from 1980s RA care.",
  },
  {
    topic: "Immune modulation risk",
    status: "Context-dependent",
    note: "Autoimmune disease, infection, malignancy, transplant, vaccination",
    context:
      "Effects may differ in autoimmune disease, infection, malignancy, immunodeficiency, vaccination, or after transplantation. Historical RA signal does not establish safety with contemporary biologics or checkpoint inhibitors.",
  },
  {
    topic: "Zinc exposure",
    status: "Formulation-dependent",
    note: "Uncontrolled excess zinc can confound or harm",
    context:
      "Zinc is part of the active-complex design. Uncontrolled or excessive zinc component can create local and systemic toxicity and confound interpretation. Casual zinc addition to injectable vials is not supported.",
  },
  {
    topic: "Product-quality risk",
    status: "Elevated for bulk material",
    note: "Sterility, endotoxin, impurities, immunogenicity",
    context:
      "Bulk “research use only” material may not meet parenteral quality standards. Peptide impurities, aggregates, and repeated parenteral exposure may trigger hypersensitivity or anti-drug antibodies.",
  },
];

export const THYMULIN_DOSAGE_GUIDE = {
  title:
    "Thymulin Dosage: Human Trials, Research Protocol, and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research status:** Thymulin is a **zinc-dependent thymic nonapeptide** (serum thymic factor, FTS-Zn, nonathymulin). Human administration was studied mainly in the 1980s. **≠ thymalin** (20-day regimens), **≠ thymosin alpha-1**, **≠ TB-500**. There is **no U.S. approved dose**. The clearest human dose comparison used **1, 5, and 10 mg/day** in RA — **5 mg/day** had the strongest signal but is not a universal dose. The most reproducible current evidence is **nonclinical: 1.5 mg/kg IP × 28 days** with equimolar ZnCl2 in aged mice — **do not convert to human HED**.",
  intro: [
    "**There is no established U.S. dosage and no verified current approved international finished-product dosage.** NIH/NCATS classifies nonathymulin as investigational; historical development was discontinued.",
    "The best-known human dose comparison is **two 1987 RA RCTs** with nonathymulin at **1, 5, or 10 mg/day**. **5 mg/day** produced the strongest reported clinical signal — but the dose-response was **non-monotonic**, and accessible abstracts omit route, zinc formulation, and duration.",
    "A separate experiment used **500 mcg SC once** (n=5 RA). An MS trial used **six months SC** with **no significant benefit** — dose absent from abstract. The complete research protocol on this page replicates the **2026 aged-mouse tumor model: 1.5 mg/kg IP daily × 28 days** with equimolar ZnCl2 — clearly labeled **animal only**.",
  ],
  glance: {
    title: "Thymulin dosage in 30 seconds",
    items: [
      "**No U.S. approved dose** — NIH/NCATS investigational; development discontinued",
      "**Historical RA RCTs:** 1, 5, 10 mg/day — **5 mg/day** strongest signal (non-monotonic)",
      "**500 mcg SC once** documented (n=5 RA biological-response experiment)",
      "**MS trial:** 6 months SC — dose not in abstract; no significant benefit",
      "**Topical pilot:** 0.0005% · 1–2 mL BID = **5–10 mcg/application** by arithmetic",
      "**FTS (zinc-free) ≠ FTS-Zn (active)** — zinc state is critical; equimolar ZnCl2 in modern animal work",
      "**≠ thymalin / Tα1 / TB-500** — 20-day thymalin cycles are not thymulin evidence",
      "**Mouse replication:** 1.5 mg/kg IP × 28 d + equimolar ZnCl2 — **not a human protocol**",
    ],
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**Molecule**", "Thymulin — zinc-dependent thymic nonapeptide (FTS-Zn when active)"],
        ["**Sequence**", "Pyr-Ala-Lys-Ser-Gln-Gly-Gly-Ser-Asn-OH"],
        ["**Free-peptide mass**", "~858.85 Da · acetate commercial ~918.91 Da"],
        ["**Historical human doses**", "500 mcg SC once; 1, 5, or 10 mg/day in RA"],
        ["**Recent mouse dose**", "1.5 mg/kg IP once daily + equimolar ZnCl2"],
        ["**Topical pilot**", "0.0005% zinc-thymulin · 1–2 mL twice daily"],
        ["**Validated community protocol**", "None"],
        ["**Main dosing problem**", "Identity, zinc state, assay, route, incomplete trial reporting"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is thymulin?",
      paragraphs: [
        "Thymulin is a **nine-amino-acid thymic peptide** with sequence **pyroglutamyl-alanyl-lysyl-seryl-glutaminyl-glycyl-glycyl-seryl-asparagine**. It was historically called **serum thymic factor** or **facteur thymique sérique**. **Nonathymulin** is the INN for the defined synthetic peptide used in historical drug research.",
        "The classic biochemical distinction is between **FTS** (zinc-free nonapeptide, little or no recognized activity in the traditional bioassay) and **FTS-Zn** (active form when peptide binds zinc in ~1:1 molar relationship). Zinc dependence is not marketing detail — it creates a biologically recognized epitope. ([PNAS zinc-epitope study](https://pmc.ncbi.nlm.nih.gov/articles/PMC391304/))",
        "NIH/NCATS lists free-peptide formula **C33H54N12O15**, mass **858.8533 Da**, CAS **63958-90-7**, UNII **9H198D04WL**. Thymulin acetate has higher gross mass (~918.91 Da commercial certificate) — **do not interchange** when calculating active peptide. ([Inxight Drugs](https://drugs.ncats.io/drug/9H198D04WL))",
      ],
    },
    {
      id: "identity",
      title: "Identity and naming checks",
      paragraphs: [
        "The most common online error is importing a **20-day thymalin regimen** into a thymulin page. **Thymalin ≠ thymulin.** Also distinct: thymosin alpha-1, TB-500/Tβ4, thymopentin, thymopoietin, PAT analogue, and homeopathic 5CH preparations.",
      ],
      widget: "thymulin-identity-gate",
      tables: [
        {
          caption: "Names that are not interchangeable",
          headers: ["Name", "What it usually means", "Reusable for thymulin?"],
          rows: [
            ["Thymulin / FTS-Zn", "Zinc-associated active nonapeptide", "This page's subject — verify zinc state"],
            ["FTS", "Often zinc-free nonapeptide", "Only after zinc state and bioactivity defined"],
            ["Nonathymulin", "INN synthetic nonapeptide", "When formulation, route, zinc match study"],
            ["Thymulin acetate", "Acetate research material", "Do not assume zinc-complexed or active-moiety = label mass"],
            ["Thymalin", "Thymic extract / peptide mixture", "No — 20-day schedules cannot transfer"],
            ["Thymosin alpha-1", "Different 28-aa peptide", "No"],
            ["TB-500 / Tβ4", "Different actin-binding system", "No"],
            ["PAT analogue", "Synthetic thymulin analogue", "No — analogue doses ≠ thymulin"],
          ],
        },
      ],
      paragraphsAfter: [
        "Before any laboratory administration, establish intact mass, sequence (including N-terminal pyroglutamate), quantitative peptide assay, counterion/water content, zinc molar ratio, bioactivity assay, sterility/endotoxin, and stability-indicating methods. An HPLC purity percentage cannot answer most of these questions.",
      ],
    },
    {
      id: "zinc",
      title: "Product, zinc, salt, and assay checks",
      paragraphs: [
        "Current animal work used **thymulin acetate plus equimolar ZnCl2**. “Equimolar” means one mole of zinc reagent for each mole of peptide — **not equal mass**. For 1 mg free peptide: ~0.001164 mmol → ~**0.159 mg anhydrous ZnCl2**. That example is laboratory stoichiometry, **not a self-mixing instruction**.",
      ],
      widget: "thymulin-zinc-gate",
      tables: [
        {
          caption: "Quality attributes before dosing math",
          headers: ["Quality attribute", "Question it answers"],
          rows: [
            ["Intact-mass spectrometry", "Principal peptide consistent with nine-residue sequence?"],
            ["Sequence confirmation", "N-terminal pyroglutamate and correct residue order?"],
            ["Quantitative peptide assay", "Milligrams of active peptide vs total lyophilized material?"],
            ["Zinc content and molar ratio", "Absent, intended ratio, or uncontrolled excess?"],
            ["Biological activity assay", "Zinc-dependent activity in qualified assay?"],
            ["Sterility / endotoxin / particulate", "Acceptable for intended route?"],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "U.S. and international status",
      paragraphs: [
        "There is **no U.S. prescribing label or FDA-established dosage** for thymulin. The [FDA UNII record](https://precision.fda.gov/uniisearch/srs/unii/9H198D04WL) identifies the substance but notes UNII does not imply regulatory review or approval.",
        "The [NIH/NCATS drug record](https://drugs.ncats.io/drug/9H198D04WL) describes nonathymulin as investigational and states historical development for ischemic heart disorders and rheumatoid arthritis was **discontinued**. No currently approved finished thymulin/nonathymulin medicine with verified national prescribing dose was identified in major accessible registries.",
      ],
      highlight:
        "Historical clinical development and publication do not equal a current national label. Absence of verified current approval is not proof no historical authorization ever existed — but there is no defensible universal dose.",
    },
    {
      id: "human-trials",
      title: "Dosage used in human clinical research",
      paragraphs: [
        "The table reports administered exposures from primary human literature. A historical dose is **not a recommendation**, and missing route, formulation, or duration should remain missing rather than filled with assumptions.",
      ],
      widget: "thymulin-human-status",
    },
    {
      id: "ra-trials",
      title: "Rheumatoid arthritis: 1, 5, and 10 mg/day",
      paragraphs: [
        "The best-known human dose comparison is a **1987 report of two randomized, double-blind, placebo-controlled RA trials**. Participants received nonathymulin at **1, 5, or 10 mg/day**. **5 mg/day** was most effective: 56% globally improved vs 17% placebo (p < 0.02). The response did **not** track with clear immunological changes. ([Amor et al., 1987](https://pubmed.ncbi.nlm.nih.gov/3310925/))",
        "Limitations: nearly four decades old; abstract omits route, zinc formulation, exact duration; **non-monotonic dose-response** (5 mg > 1 or 10 mg); did not establish benefit for healthy aging, infection, or nonspecific immune support. Withdrawals in the 5 mg group after **thrombocytopenia** (month 3) and **vasculitis** (month 5) deserve mention — causality not established.",
      ],
    },
    {
      id: "500mcg",
      title: "Single 500 mcg subcutaneous exposure",
      paragraphs: [
        "A **1984 RA experiment** administered **500 mcg synthetic zinc-supplemented FTS SC once** to five participants. Lymphocyte subsets measured before and one hour later. Same report exposed cells in vitro to 0.125, 1.25, and 12.5 ng/mL — **in vitro concentrations are not injectable doses**. ([Faure et al., 1984](https://doi.org/10.1016/0192-0561(84)90058-4))",
        "Clearest primary evidence for a **documented SC human amount** — but n=5 and one-hour window cannot establish a clinical protocol.",
      ],
    },
    {
      id: "ms-trial",
      title: "Multiple sclerosis: six months SC with no clear benefit",
      paragraphs: [
        "A randomized study of **40 matched MS participants** received nonathymulin or placebo **SC for six months** plus six months observation. No significant difference in Kurtzke disability, Ambulation Index, or Functional Scale outcomes; no significant side effects. **Exact dose absent from abstract** — must not be inferred from RA program. ([Haahr et al., 1989](https://pubmed.ncbi.nlm.nih.gov/2618585/))",
      ],
    },
    {
      id: "topical",
      title: "Topical zinc-thymulin pilot",
      paragraphs: [
        "An uncontrolled androgenetic-alopecia pilot used **0.0005% zinc-thymulin**, **1–2 mL twice daily** for **4–10 months**. Arithmetic reconstruction: 0.0005% w/v = **5 mcg/mL** → **5–10 mcg per application** → **10–20 mcg/day** on scalp. Study-specific zinc oxide preparation — not interchangeable with injectable acetate. ([Topical pilot](https://doi.org/10.4172/2167-0951.1000147))",
        "Eighteen enrolled; 11 used ≥6 months. Visual analogue score improved (p = 0.045) but no placebo, blinding, or validated hair-count endpoint.",
      ],
    },
    {
      id: "ex-vivo",
      title: "Human cells exposed outside the body",
      paragraphs: [
        "The 2026 Nature Communications study exposed human PBMCs to **1 mcg/mL thymulin plus equimolar ZnCl2 for 24 hours** before inflammatory stimulation. This was **ex vivo** — not a blood target, infusion concentration, or human dose. Untreated human blood/tumor datasets were analyzed without systemic thymulin administration. ([Kanemaru et al., 2026](https://www.nature.com/articles/s41467-026-75383-0))",
      ],
    },
    {
      id: "dose-range",
      title: "Reported human research dosage range",
      tables: [
        {
          caption: "Exposure types — not one selectable range",
          headers: ["Exposure type", "Lowest clear amount", "Highest clear amount", "What the range means"],
          rows: [
            ["Historical systemic human research", "500 mcg once SC", "10 mg/day", "Different experiments, incomplete formulations"],
            ["Historical RA comparison", "1 mg/day", "10 mg/day", "5 mg/day best signal; higher not clearly better"],
            ["Topical pilot", "5 mcg/application", "10 mcg/application", "Local 0.0005%; cannot combine with systemic mg dosing"],
            ["Human ex vivo", "1 mcg/mL", "1 mcg/mL", "Cell-culture concentration, not participant dose"],
          ],
        },
      ],
      paragraphsAfter: [
        "There is no scientifically defensible “standard thymulin dose” selectable from this table. The human record is too old, sparse, and formulation-incomplete.",
      ],
    },
    {
      id: "community",
      title: "Thymulin community protocols",
      tables: [
        {
          caption: "Reported modern schedules — provenance only, not validated",
          headers: ["Reported schedule", "Source type", "Likely provenance", "Evidence problem"],
          rows: [
            ["100 mcg SC twice weekly", "Peptide-practice toolkit", "Preset practice pattern", "No matched thymulin trial"],
            ["1 mg SC daily × 2 wk → 1 mg 3×/wk × 4 mo", "Practitioner handbook", "Induction + maintenance concept", "No primary study supports sequence"],
            ["Up to 5 mg/day “acute” phase", "Handbook / calculator", "Anchored to 5 mg RA signal", "Changes disease context; omits historical product"],
            ["2 mg SC daily × 20 d, 3×/yr", "Commercial dosing guide", "Thymalin cycle conventions", "No matching thymulin trial — name conflation"],
            ["1–5 mg/day", "Research-vendor calculator", "Echoes old RA arms", "Treats trial arms as adjustable range"],
          ],
        },
      ],
      paragraphsAfter: [
        "There is **no stable community consensus** on amount, frequency, zinc formulation, duration, or purpose. Schedules without zinc-state specification are not reproducible.",
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Clinical research versus community reports",
      widget: "thymulin-clinical-vs-anecdotal",
    },
    {
      id: "mouse-protocol",
      title: "Complete evidence-anchored research dosing protocol",
      paragraphs: [
        "**Replication of thymulin's effect on tumor progression and age-associated myeloid inflammation in aged mice** — a **nonclinical protocol**. Current primary literature provides defined molecule, zinc condition, route, dose, tumor model, duration, and endpoints in mice. It **does not convert** animal exposure into a human dose. Requires IACUC approval, veterinary oversight, and trained personnel.",
      ],
      widget: "thymulin-protocol-timeline",
      subsections: [
        {
          title: "Research question",
          paragraphs: [
            "Does four weeks of fixed-dose thymulin acetate plus equimolar ZnCl2 slow E0771 mammary-tumor growth and reduce pro-inflammatory myeloid-cell activation in aged C57BL/6 mice compared with a zinc-matched vehicle?",
          ],
        },
        {
          title: "Dose and schedule",
          tables: [
            {
              caption: "Fixed specification — animal only",
              headers: ["Element", "Specification"],
              rows: [
                ["Dose", "1.5 mg/kg thymulin active-peptide equivalent"],
                ["Route", "Intraperitoneal"],
                ["Frequency", "Once every 24 hours"],
                ["Duration", "28 consecutive days (or humane endpoint)"],
                ["Tumor implantation", "Study day 0 — 5 × 10⁵ E0771 cells"],
                ["First dose", "Study day 1 after implantation"],
                ["Final scheduled dose", "Study day 28"],
                ["Loading / titration / taper", "None"],
                ["Vehicle control", "PBS + same molar ZnCl2 as treated arm"],
              ],
            },
            {
              caption: "Example mouse arithmetic only",
              headers: ["Body weight", "Target peptide", "Volume at 0.5 mg/mL"],
              align: ["right", "right", "right"],
              rows: [
                ["20 g (0.020 kg)", "0.030 mg (30 mcg)", "0.06 mL"],
                ["25 g", "0.0375 mg (37.5 mcg)", "0.075 mL"],
                ["30 g", "0.045 mg (45 mcg)", "0.09 mL"],
              ],
            },
          ],
        },
        {
          title: "Why this is not a human protocol",
          paragraphs: [
            "Old 1/5/10 mg/day RA program lacks accessible modern-quality route, product characterization, PK, and long-term safety data. MS and pediatric abstracts omit dose. Constructing a human injection cycle from those gaps would create new instructions rather than reproduce a study. The complete protocol remains in the species and route for which a modern, source-locked regimen exists.",
          ],
        },
      ],
    },
    {
      id: "preclinical",
      title: "Animal and preclinical thymulin doses",
      paragraphs: [
        "**Animal / preclinical research only.** These doses are not human protocols. **Do not convert to human-equivalent doses** — zinc complexation, species biology, route change, and product bioactivity are unresolved.",
      ],
      tables: [
        {
          caption: "Selected preclinical exposures",
          headers: ["Model", "Dose / concentration", "Route / schedule", "Transfer boundary"],
          rows: [
            ["Aged-mouse tumor/inflammation, 2026", "1.5 mg/kg", "IP once daily × 4 wk from day 1 post-implant", "Mouse dose — do not convert"],
            ["Human PBMC ex vivo, 2026", "1 mcg/mL + equimolar ZnCl2", "24 h culture", "Ex vivo — not human administration"],
            ["BALB/c LPS model, 2018", "1.5 mg/kg", "IP days 1 and 5", "Formulation-specific mouse study"],
            ["Mouse cytokine model, 2008", "0.15 mg/kg", "Prior injection; timing unclear", "Old study; incomplete abstract"],
            ["PAT analogue rats", "1, 5, or 25 mcg", "IP", "Analogue — not thymulin"],
            ["Homeopathic 5CH mouse", "~4 pg/mouse", "Drinking water", "Not conventional peptide dosing"],
          ],
        },
      ],
    },
    {
      id: "reconstitution",
      title: "Reconstitution and U-100 syringe math",
      paragraphs: [
        "Tables show concentration and volume arithmetic for a vial whose active-peptide content and final volume are known. They **do not** establish sterility, zinc-complexed state, stability, or suitability for human use.",
        "**Concentration (mg/mL) = vial peptide (mg) ÷ final volume (mL)** · **Volume (mL) = desired amount (mg) ÷ concentration** · **U-100 units = volume (mL) × 100**.",
      ],
      widget: "thymulin-recon-calc",
      tables: [
        {
          caption: "5 mg vial at 2 mL (2.5 mg/mL = 2,500 mcg/mL)",
          headers: ["Peptide amount", "Volume", "U-100 units"],
          align: ["right", "right", "right"],
          rows: [
            ["100 mcg", "0.04 mL", "4 units"],
            ["500 mcg", "0.20 mL", "20 units"],
            ["1 mg", "0.40 mL", "40 units"],
            ["2 mg", "0.80 mL", "80 units"],
            ["5 mg", "2.00 mL", "200 units"],
          ],
        },
        {
          caption: "10 mg vial at 2 mL (5 mg/mL = 5,000 mcg/mL)",
          headers: ["Peptide amount", "Volume", "U-100 units"],
          align: ["right", "right", "right"],
          rows: [
            ["100 mcg", "0.02 mL", "2 units"],
            ["500 mcg", "0.10 mL", "10 units"],
            ["1 mg", "0.20 mL", "20 units"],
            ["5 mg", "1.00 mL", "100 units"],
            ["10 mg", "2.00 mL", "200 units"],
          ],
        },
        {
          caption: "10 mg vial at 1 mL (10 mg/mL = 10,000 mcg/mL)",
          headers: ["Peptide amount", "Volume", "U-100 units"],
          align: ["right", "right", "right"],
          rows: [
            ["100 mcg", "0.01 mL", "1 unit"],
            ["500 mcg", "0.05 mL", "5 units"],
            ["1 mg", "0.10 mL", "10 units"],
            ["5 mg", "0.50 mL", "50 units"],
          ],
        },
      ],
      paragraphsAfter: [
        "Cross-check whether labeled mass is free-peptide equivalent, acetate gross mass, assay-corrected peptide, or nominal fill. **10 mg/mL is arithmetic, not evidence** the peptide-zinc complex remains soluble, stable, or tolerable. Treating gross salt mass as active-peptide mass is a common error.",
      ],
    },
    {
      id: "routes",
      title: "Administration routes in the literature",
      tables: [
        {
          caption: "Route evidence summary",
          headers: ["Route", "Where it appears", "What is known", "What remains uncertain"],
          rows: [
            ["Subcutaneous", "RA 500 mcg experiment; MS trial", "500 mcg once documented in RA", "Broad PK, bioavailability, chronic regimen"],
            ["Unspecified systemic", "RA 1/5/10 mg/day trials", "Daily milligram arms compared", "Route not in accessible abstract"],
            ["Topical", "Alopecia pilot", "0.0005%, 1–2 mL BID", "Absorption, efficacy, long-term safety"],
            ["Intraperitoneal", "Modern mouse studies", "1.5 mg/kg reproducible in animals", "Not routine human route"],
            ["Cell culture", "PBMCs, macrophages", "1 mcg/mL + equimolar zinc", "Not in vivo target concentration"],
          ],
        },
      ],
    },
    {
      id: "storage",
      title: "Storage and handling",
      tables: [
        {
          caption: "Vendor-reported conditions — product-specific, not universal",
          headers: ["Source / form", "Storage", "Interpretation"],
          rows: [
            ["MedChemExpress serum thymic factor acetate (powder)", "−80°C 2 yr or −20°C 1 yr", "Particular research lot — not clinical label"],
            ["MedChemExpress (in solvent)", "−80°C 6 mo or −20°C 1 mo", "Not multidose BUD for user-reconstituted vials"],
            ["Cayman thymulin acetate hydrate", "−20°C", "Catalog entry — final formulation may differ"],
          ],
        },
      ],
      notes: [
        "Record reconstitution date, final volume, concentration, zinc condition, lot, and appearance. Do not assume bacteriostatic water creates a 28-day stability period.",
      ],
    },
    {
      id: "results",
      title: "What can research reasonably measure?",
      tables: [
        {
          caption: "Endpoint vs limitation",
          headers: ["Research question", "More defensible endpoint", "Important limitation"],
          rows: [
            ["Aged myeloid inflammatory capacity", "Prespecified IL-1α/β, IL-6, TNF-α flow panel", "Standardized stimulation and blinded gating required"],
            ["Topical hair growth", "Blinded photography, target-area hair count", "Separate placebo and natural-cycle effects"],
            ["Clinical rheumatoid arthritis", "Modern validated disease-activity measures", "Historical signals ≠ modern trial substitute"],
            ["Cancer immunotherapy synergy", "Prospective human trial with response/survival", "Current evidence preclinical and age/model dependent"],
          ],
        },
      ],
    },
    {
      id: "claims",
      title: "Common dosing claims vs evidence",
      widget: "thymulin-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      paragraphs: [
        "**Overall thymulin dosing evidence: low.** Human administration is real but old, small, and incompletely reported. The 5 mg/day RA signal is the strongest dose-comparison result, not a universal dose. Modern community protocols sit below human and animal literature because they lack matched controlled studies and often omit zinc state.",
      ],
      widget: "thymulin-evidence-ladder",
    },
    {
      id: "safety",
      title: "Safety and tolerability",
      paragraphs: [
        "Human safety database is small and old. RA trials described adverse effects as minimal overall, but **thrombocytopenia** and **vasculitis** withdrawals in the 5 mg group deserve attention. MS abstract reported no significant side-effect difference. Topical pilot: one transient redness episode.",
        "Plausible research risks include immune modulation in autoimmune/infection/malignancy contexts, uncontrolled zinc exposure, hypersensitivity, injection-related harms, contamination/endotoxin, hematologic changes, and unknown reproductive/cancer effects in humans.",
      ],
      widget: "thymulin-adverse-events",
    },
    {
      id: "interactions",
      title: "Drug and treatment interactions",
      tables: [
        {
          caption: "Co-interventions that may change interpretation or safety",
          headers: ["Co-intervention", "Why it matters"],
          rows: [
            ["Corticosteroids, biologics, DMARDs, chemotherapy", "Can mask, oppose, or amplify immune endpoints"],
            ["Immune-checkpoint inhibitors", "Mouse synergy ≠ human safety study"],
            ["Zinc supplements", "Change total zinc exposure and confound activity"],
            ["Other immune peptides (Tα1, thymalin, TB-500, BPC-157, KPV, GHK-Cu, LL-37)", "Prevent attribution; overlapping pathways"],
          ],
        },
      ],
    },
    {
      id: "wada",
      title: "Anti-doping status",
      paragraphs: [
        "Thymulin is not specifically named on the 2026 WADA Prohibited List. However, section **S0 Non-Approved Substances** covers pharmacological substances without current approval by a governmental regulatory health authority for human therapeutic use. Because no current approved thymulin medicine was verified, thymulin **could fall within S0 and be prohibited at all times**. ([2026 WADA Prohibited List](https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf))",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Thymulin has a genuine but limited human research history. The most informative dose comparison used **1, 5, and 10 mg/day** in RA with the strongest signal at **5 mg/day**. A separate experiment used **500 mcg SC once**; an MS trial found **no significant benefit**; a topical pilot used **0.0005% zinc-thymulin twice daily**. None establishes a modern universal regimen.",
        "The most reproducible current dosing evidence is **nonclinical: 1.5 mg/kg IP once daily with equimolar ZnCl2 in aged mice**. Any thymulin research must define peptide identity, active-content basis, zinc stoichiometry, sterility, and route. **≠ thymalin.** Community schedules remain inconsistent and frequently conflate thymulin with thymalin or thymosin alpha-1.",
      ],
      highlight:
        "FTS (zinc-free) ≠ FTS-Zn (active). 5 mg/day RA signal ≠ universal dose. 1.5 mg/kg mouse IP × 28 d — animal only, no HED. Thymalin 20-day cycles ≠ thymulin evidence.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard thymulin dose?",
        answer:
          "There is no established standard dose. Historical human studies used 500 mcg once SC and 1, 5, or 10 mg/day in different contexts. Modern animal studies use 1.5 mg/kg IP with equimolar zinc. These are separate research exposures, not a menu for personal dosing.",
      },
      {
        question: "What dose worked best in the rheumatoid-arthritis trials?",
        answer:
          "Among 1, 5, and 10 mg/day, 5 mg/day produced the strongest reported clinical signal. That old result does not establish a current rheumatoid-arthritis treatment or a dose for any other condition.",
      },
      {
        question: "Is 5 mg of thymulin better than 1 mg?",
        answer:
          "Only the historical RA program reported a stronger signal at 5 mg/day than at 1 or 10 mg/day. It does not show 5 mg is generally better — the non-monotonic result argues against assuming more peptide creates more benefit.",
      },
      {
        question: "Was thymulin given subcutaneously in humans?",
        answer:
          "Yes. A five-person RA response experiment used 500 mcg SC once, and a multiple-sclerosis trial used SC treatment for six months. The exact MS dose is not reported in the abstract.",
      },
      {
        question: "Is thymulin the same as thymalin?",
        answer:
          "No. Thymulin is a defined zinc-dependent nonapeptide. Thymalin is a thymic extract or peptide mixture. A 20-day thymalin schedule is not evidence for thymulin.",
      },
      {
        question: "Is thymulin the same as thymosin alpha-1?",
        answer:
          "No. Thymosin alpha-1 is a different 28-amino-acid peptide with its own clinical history (core 1.6 mg SC twice weekly). Its schedule cannot be assigned to thymulin.",
      },
      {
        question: "Does thymulin require zinc?",
        answer:
          "Classic thymulin bioactivity depends on zinc, and modern primary studies added equimolar ZnCl2. Whether a particular vial is zinc-free, already complexed, or inaccurately labeled must be tested. This does not justify casual addition of zinc to a vial.",
      },
      {
        question: "How much zinc should be added to thymulin?",
        answer:
          "There is no universal mass instruction. Equimolar preparation requires the peptide's active-content assay, molecular form, zinc reagent identity and hydration state, target pH, and validated formulation method. The stoichiometric example (~0.159 mg ZnCl2 per 1 mg free peptide) is for laboratory calculation only.",
      },
      {
        question: "Is thymulin acetate already active thymulin?",
        answer:
          "Not necessarily. Acetate identifies a counterion, not zinc complexation. In the 2026 mouse study, investigators used thymulin acetate and still added equimolar ZnCl2.",
      },
      {
        question: "How many U-100 units is 1 mg from a 10 mg vial mixed to 2 mL?",
        answer:
          "The concentration is 5 mg/mL. One milligram requires 0.2 mL, which is 20 U on a U-100 syringe. This is volume arithmetic only.",
      },
      {
        question: "How many U-100 units is 500 mcg from a 5 mg vial mixed to 2 mL?",
        answer:
          "The concentration is 2.5 mg/mL. Five hundred micrograms (0.5 mg) requires 0.2 mL, which is 20 U.",
      },
      {
        question: "Is the 1.5 mg/kg mouse dose a human dose after body-weight conversion?",
        answer:
          "No. It is an intraperitoneal mouse exposure with a defined zinc condition. This page intentionally does not calculate a human-equivalent dose because route, species biology, formulation, zinc, and exposure are unresolved.",
      },
      {
        question: "Can thymulin be used topically for hair loss?",
        answer:
          "An uncontrolled pilot used 0.0005% zinc-thymulin twice daily and reported subjective improvement. Without a placebo group, blinded hair counts, or replication, the study does not establish efficacy or a standard formulation.",
      },
      {
        question: "Can thymulin be stacked with thymosin alpha-1, thymalin, BPC-157, TB-500, KPV, GHK-Cu, or LL-37?",
        answer:
          "No controlled evidence establishes the safety, interaction profile, or added benefit of those stacks. Combining agents destroys dose attribution and can create overlapping immune, inflammatory, product-quality, and anti-doping risks.",
      },
      {
        question: "Is thymulin allowed in tested sport?",
        answer:
          "It is not named individually on the 2026 WADA list, but it may fall under S0 for non-approved substances and therefore be prohibited at all times. Athletes need a current case-specific anti-doping determination.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "NIH/NCATS",
        title: "Inxight Drugs: Nonathymulin",
        detail: "Investigational status; molecular identity.",
        href: "https://drugs.ncats.io/drug/9H198D04WL",
      },
      {
        authors: "Amor et al.",
        title: "Nonathymulin in rheumatoid arthritis: two double-blind trials",
        detail: "Ann Rheum Dis. 1987 — 1, 5, 10 mg/day.",
        href: "https://pubmed.ncbi.nlm.nih.gov/3310925/",
      },
      {
        authors: "Faure et al.",
        title: "Thymulin modulation of T-cell subsets — 500 mcg SC experiment",
        detail: "Clin Immunol Immunopathol. 1984.",
        href: "https://doi.org/10.1016/0192-0561(84)90058-4",
      },
      {
        authors: "Haahr et al.",
        title: "Randomized nonathymulin trial in multiple sclerosis",
        detail: "Acta Neurol Scand. 1989.",
        href: "https://pubmed.ncbi.nlm.nih.gov/2618585/",
      },
      {
        authors: "Kanemaru et al.",
        title: "Thymulin restrains age-associated myeloid inflammation and enhances cancer immunotherapy",
        detail: "Nat Commun. 2026 — 1.5 mg/kg IP mouse protocol.",
        href: "https://www.nature.com/articles/s41467-026-75383-0",
      },
      {
        authors: "PNAS",
        title: "A zinc-dependent epitope on the molecule of thymulin",
        detail: "Zinc epitope structural work.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC391304/",
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
      "Thymulin has **no U.S. approved dosage** and **no established prescribing dose** for general immune support, healthy aging, or recovery. Historical trial doses from rheumatoid arthritis, multiple sclerosis, or topical pilots do not become a universal protocol.",
      "This page documents human trial exposures, zinc-complex requirements, community conventions, reconstitution arithmetic, and a complete **nonclinical mouse replication protocol**. It is **not** a clinical dosing or self-injection guide. Confirm thymulin identity (**≠ thymalin / Tα1 / TB-500**), zinc state, active-moiety assay, and sterility before parenteral research.",
      "Thrombocytopenia and vasculitis withdrawals occurred in historical RA trials. Autoimmune disease, transplant, malignancy, pregnancy, and bleeding disorders require specialist oversight. The 1.5 mg/kg mouse dose must **not** be converted to a human amount.",
    ],
  },
};

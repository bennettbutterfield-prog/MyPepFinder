/**
 * LL-37 (human cathelicidin) dosage guide.
 * Human evidence: topical wound trials + intratumoral melanoma (n=4).
 * No published human SC dose. Community SC 100–200 mcg is anecdotal.
 */

/** Approximate molecular mass — mature 37-aa LL-37 */
export const LL37_MOLECULAR_MASS = 4493;

/** Standard trial application rate: 25 µL per cm² */
export const LL37_VOLUME_PER_CM2_ML = 0.025;

/** Trial concentration arms (mg/mL) */
export const LL37_TRIAL_CONCENTRATIONS = [
  { mgMl: 0.5, mcgPerCm2: 12.5, label: "0.5 mg/mL (12.5 mcg/cm²)" },
  { mgMl: 1.6, mcgPerCm2: 40, label: "1.6 mg/mL (40 mcg/cm²)" },
  { mgMl: 3.2, mcgPerCm2: 80, label: "3.2 mg/mL (80 mcg/cm²)" },
];

export function ll37WoundVolumeMl(areaCm2) {
  const area = Number(areaCm2);
  if (!Number.isFinite(area) || area <= 0) return null;
  return area * LL37_VOLUME_PER_CM2_ML;
}

export function ll37WoundDoseMg(areaCm2, concentrationMgMl) {
  const vol = ll37WoundVolumeMl(areaCm2);
  const conc = Number(concentrationMgMl);
  if (vol === null || !Number.isFinite(conc) || conc <= 0) return null;
  return vol * conc;
}

export function ll37WoundDoseMcg(areaCm2, concentrationMgMl) {
  const mg = ll37WoundDoseMg(areaCm2, concentrationMgMl);
  if (mg === null) return null;
  return mg * 1000;
}

export function ll37AmountFromVial(vialMg, diluentMl, targetMcg) {
  const vial = Number(vialMg);
  const d = Number(diluentMl);
  const target = Number(targetMcg);
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
  const concMcgPerMl = (vial * 1000) / d;
  const concMgPerMl = concMcgPerMl / 1000;
  const volumeMl = target / concMcgPerMl;
  const units = volumeMl * 100;
  const mcgPerUnit = concMcgPerMl / 100;
  return {
    concMcgPerMl,
    concMgPerMl,
    volumeMl,
    units,
    mcgPerUnit,
    targetMcg: target,
  };
}

export const LL37_RECON_PRESETS = [
  { id: "5-1", vialMg: 5, diluentMl: 1, label: "5 mg · 1 mL (5 mg/mL)" },
  { id: "5-2", vialMg: 5, diluentMl: 2, label: "5 mg · 2 mL (2.5 mg/mL)" },
  { id: "5-5", vialMg: 5, diluentMl: 5, label: "5 mg · 5 mL (1 mg/mL)" },
  { id: "10-2", vialMg: 10, diluentMl: 2, label: "10 mg · 2 mL (5 mg/mL)" },
];

export const LL37_IDENTITY = [
  {
    id: "ll-37",
    label: "LL-37 (mature 37-aa human cathelicidin)",
    verdict: "This page's subject — confirm full-length sequence before dosing math",
    detail:
      "Authentic LL-37 is the mature C-terminal peptide cleaved from human hCAP18/CAMP (~4,493 Da). Sequence begins with two leucines: LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES. Confirm intact mass, peptide mapping, and quantitative assay.",
  },
  {
    id: "ropocamptide",
    label: "Ropocamptide (synthetic LL-37 development name)",
    verdict: "Yes only when confirmed unmodified LL-37",
    detail:
      "Ropocamptide is the development name used in wound research for synthetic LL-37. Doses apply only when the product is confirmed to be unmodified full-length LL-37 — not a fragment or analogue.",
  },
  {
    id: "hcap18",
    label: "hCAP18 / CAMP precursor protein",
    verdict: "Different molecule — not LL-37",
    detail:
      "hCAP18 is the larger human precursor that is proteolytically processed to release LL-37. Administered precursor doses are not LL-37 doses.",
  },
  {
    id: "cramp",
    label: "CRAMP / mCRAMP (murine cathelicidin)",
    verdict: "Different species — mouse doses not transferable",
    detail:
      "CRAMP is the murine cathelicidin-related antimicrobial peptide. Mouse CRAMP studies do not establish human LL-37 dosing.",
  },
  {
    id: "kr-12",
    label: "KR-12 (LL-37 residues 18–29 fragment)",
    verdict: "Different length and activity — not LL-37",
    detail:
      "KR-12 is a short LL-37 fragment. Different length, exposure, and activity profile. Fragment doses cannot be applied to full-length LL-37.",
  },
  {
    id: "op-145",
    label: "OP-145 / P60.4Ac (LL-37-derived peptide)",
    verdict: "Derivative — not LL-37",
    detail:
      "OP-145 is an LL-37-derived peptide investigated in ear-drop research. It is a derivative with different sequence boundaries and potency.",
  },
  {
    id: "unsure",
    label: "Label unclear or unsure",
    verdict: "Incomplete — confirm identity before trusting protocols",
    detail:
      "Names such as cathelicidin, hCAP18 fragment, or antimicrobial peptide do not establish whether the vial contains full-length LL-37, a fragment, an analogue, or a salt form. Analytics should resolve identity first.",
  },
];

export const LL37_HUMAN_TRIALS = [
  {
    id: "gronberg-2014",
    study: "Grönberg et al., 2014",
    dose: "0.5, 1.6, or 3.2 mg/mL · 25 µL/cm²",
    surfaceDose: "12.5, 40, or 80 mcg/cm²",
    frequency: "Topical to ulcer, twice weekly",
    duration: "4 weeks (+ 3-week placebo run-in)",
    population: "34 adults, hard-to-heal venous leg ulcers",
    result:
      "0.5 mg/mL strongest signal; 3.2 mg/mL did not improve healing vs placebo",
    evidence: "Human RCT",
  },
  {
    id: "heal-phase-iib",
    study: "HEAL LL-37 Phase IIb, 2021",
    dose: "0.5 or 1.6 mg/mL · 25 µL/cm²",
    surfaceDose: "12.5 or 40 mcg/cm²",
    frequency: "Topical + compression, twice weekly",
    duration: "13 weeks (+ run-in and follow-up)",
    population: "148 analyzed adults, venous leg ulcers",
    result:
      "Negative overall; post-hoc signal in ulcers ≥10 cm² only",
    evidence: "Human RCT",
  },
  {
    id: "miranda-dfu",
    study: "Miranda et al., 2023",
    dose: "0.5 mg/mL LL-37 cream",
    surfaceDose: "Area-based cream application",
    frequency: "Topical to DFU, twice weekly",
    duration: "4 weeks",
    population: "25 adults, mildly infected diabetic foot ulcers",
    result:
      "Greater granulation index; no significant cytokine or bacterial reduction",
    evidence: "Small human RCT",
  },
  {
    id: "melanoma-nct",
    study: "NCT02225366 melanoma trial",
    dose: "250 mcg per tumor injection",
    surfaceDose: "Per tumor (not systemic)",
    frequency: "Intratumoral, once weekly",
    duration: "8 weeks into 2–4 tumors",
    population: "4 adults, cutaneous metastatic melanoma",
    result:
      "Too small for efficacy; lichenoid dermatologic toxicity published",
    evidence: "Phase I (n=4)",
  },
];

export const LL37_HUMAN_STATUS = [
  ["Published human topical wound dose", "0.5–3.2 mg/mL at 25 µL/cm²"],
  ["Best-characterized topical exposure", "0.5 mg/mL = 12.5 mcg/cm² per application"],
  ["Published human SC dose", "None established"],
  ["Published human SC pharmacokinetics", "None identified"],
  ["Human half-life after SC injection", "Not established"],
  ["Maximum tolerated SC dose", "Not established"],
  ["Weight-based human SC dose", "Not established"],
  ["Community SC range", "Most often 100–200 mcg daily; wider 50–400 mcg"],
];

export const LL37_PROTOCOL_PHASES = [
  {
    id: "baseline",
    phase: "Screening & baseline",
    days: "−14 to 0",
    amount: "None",
    frequency: "—",
    cumulative: "—",
    purpose:
      "Document sequence, assay, sterility, baseline labs, prespecified outcome, and exclusion criteria",
  },
  {
    id: "group-a",
    phase: "Group A — lower community exposure",
    days: "1–28",
    amount: "100 mcg",
    frequency: "Once daily · SC · 5 days on / 2 off",
    cumulative: "2 mg (20 administrations)",
    purpose:
      "Fixed lower community range — no titration, loading dose, or escalation",
  },
  {
    id: "group-b",
    phase: "Group B — upper community exposure",
    days: "1–28",
    amount: "200 mcg",
    frequency: "Once daily · SC · 5 days on / 2 off",
    cumulative: "4 mg (20 administrations)",
    purpose:
      "Fixed upper community range — parallel comparison, not dose escalation within participant",
  },
  {
    id: "washout",
    phase: "Observation / washout",
    days: "29–42",
    amount: "None",
    frequency: "—",
    cumulative: "Prior group total",
    purpose:
      "Off-exposure durability, rebound, and delayed adverse-event assessment through day 42",
  },
];

export const LL37_COMPARE = {
  clinical: {
    title: "Human wound & intratumoral research",
    status: "Topical RCTs + 4-participant melanoma study",
    rows: [
      ["Dose", "0.5–3.2 mg/mL; 12.5–80 mcg/cm² topical"],
      ["Frequency", "Twice weekly (wound); once weekly (intratumoral)"],
      ["Route", "Directly onto measured wound or into 2–4 tumors"],
      ["Duration", "4 or 13 weeks (wound); 8 weeks (melanoma)"],
      ["Formulation", "Trial PVA solution or validated cream"],
      ["Monitoring", "Wound measurement, standard care, oncology oversight"],
      ["Evidence", "RCTs with mixed efficacy; melanoma n=4"],
    ],
  },
  anecdotal: {
    title: "Community SC reports",
    status: "Anecdotal — no human SC trial",
    rows: [
      ["Dose", "Usually 100–200 mcg; wider 50–400 mcg"],
      ["Frequency", "Daily or 5 days on / 2 off"],
      ["Route", "Subcutaneous depot"],
      ["Duration", "Commonly 2–4 weeks; sometimes 8–12"],
      ["Formulation", "Reconstituted lyophilized vial in bacteriostatic water"],
      ["Monitoring", "Highly variable"],
      ["Evidence", "Uncontrolled reports; no human PK study"],
    ],
  },
};

export const LL37_CLAIMS = [
  {
    id: "sc-low-topical",
    claim: "100 mcg SC is a low version of 12.5 mcg/cm² topical dosing",
    status: "Not valid",
    detail:
      "Topical exposure is per cm² of wound surface in a specific vehicle. A 100 mcg SC injection creates a systemic depot with different geometry, absorption, and free concentration. The units are not interchangeable.",
  },
  {
    id: "higher-better",
    claim: "Higher LL-37 concentration or dose is more effective",
    status: "Contradicted by human data",
    detail:
      "The 2014 venous-ulcer trial found the clearest signal at 0.5 mg/mL while 3.2 mg/mL did not outperform placebo. LL-37 can shift from signaling to inflammatory or cytotoxic effects as local concentration rises.",
  },
  {
    id: "antibiotic-substitute",
    claim: "LL-37 replaces antibiotics or treats infection without diagnosis",
    status: "Not established",
    detail:
      "LL-37 has direct antimicrobial activity in laboratory systems but is not a substitute for cultures, source control, and susceptibility-guided antimicrobial therapy. The DFU trial did not significantly reduce bacterial colonization.",
  },
  {
    id: "biofilm-lyme-gut",
    claim: "SC LL-37 targets biofilm, Lyme disease, mold illness, or gut dysbiosis",
    status: "Not validated",
    detail:
      "No controlled human trial establishes LL-37 dosing or efficacy for those conditions. Topical trials delivered peptide directly to measured wounds — not via SC depot.",
  },
  {
    id: "cramp-transfer",
    claim: "Mouse CRAMP doses transfer to human LL-37",
    status: "False",
    detail:
      "CRAMP is the murine cathelicidin. Species differences in cathelicidin biology, route, formulation, and endpoints prevent direct dose conversion.",
  },
  {
    id: "weight-based",
    claim: "LL-37 must be dosed by body weight",
    status: "Not established",
    detail:
      "Human wound protocols used concentration and wound surface area. Community SC uses fixed microgram amounts. No human study establishes mcg/kg SC dosing.",
  },
  {
    id: "near-wound-sc",
    claim: "SC injection near a wound reproduces topical trial results",
    status: "Not validated",
    detail:
      "Wound trials used direct topical application in cleansed wounds with PVA or cream vehicles plus compression and standard care. SC depot near a wound is a different experiment.",
  },
  {
    id: "herxheimer",
    claim: "Fever or worsening symptoms prove a Herxheimer or die-off reaction",
    status: "Not validated",
    detail:
      "There is no validated LL-37-specific die-off syndrome. Fever, rash, hypotension, or worsening illness should be evaluated as possible adverse events or infection complications.",
  },
  {
    id: "bacteriostatic-28day",
    claim: "Reconstituted LL-37 in bacteriostatic water is stable for 28 days",
    status: "Not established",
    detail:
      "Published wound products used PVA solution or validated cream with formulation-specific stability. Trial stability data do not apply to aqueous multidose vials. Aggregation and adsorption can reduce recoverable concentration.",
  },
];

export const LL37_EVIDENCE_LADDER = [
  {
    level: "Established prescribing dosage",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Human randomized topical wound trials",
    exists: "Three studies using 0.5–3.2 mg/mL",
    confidence: "Moderate for feasibility; mixed for efficacy",
  },
  {
    level: "Human intratumoral trial",
    exists: "Four participants, weekly tumor injection",
    confidence: "Very low for efficacy or general safety",
  },
  {
    level: "Human SC dosing",
    exists: "No controlled dose-finding, PK, or efficacy study",
    confidence: "None established",
  },
  {
    level: "Animal wound, sepsis, infection models",
    exists: "Multiple preclinical studies",
    confidence: "Mechanistic only; route- and species-specific",
  },
  {
    level: "Community SC 100–200 mcg daily",
    exists: "Repeated anecdotal convention",
    confidence: "Very low; no validated therapeutic window",
  },
  {
    level: "Extended community SC 200–400 mcg",
    exists: "Less consistent online reports",
    confidence: "Insufficient evidence",
  },
];

export const LL37_AE_SIMPLE = [
  {
    topic: "Topical wound trial tolerability",
    status: "Generally well tolerated in trial settings",
    note: "Limited to studied concentrations, vehicles, and eligibility criteria",
  },
  {
    topic: "Intratumoral lichenoid toxicity",
    status: "Published case report",
    note: "Verrucous papules and erythematous plaques during melanoma trial",
  },
  {
    topic: "Repeated SC exposure",
    status: "Not established",
    note: "No controlled human SC safety or incidence data",
  },
  {
    topic: "Inflammatory skin disease",
    status: "Biologically plausible risk",
    note: "LL-37 participates in psoriasis and rosacea pathways — safety not established",
  },
  {
    topic: "Product-quality risk",
    status: "Elevated",
    note: "Aggregation, adsorption, impurities, and formulation instability can dominate risk",
  },
];

export const LL37_AE_FULL = [
  {
    topic: "Topical wound trial tolerability",
    status: "Generally well tolerated",
    note: "Within controlled wound-care settings",
    context:
      "Venous-ulcer trials reported studied concentrations were generally well tolerated with trial-specific PVA or cream vehicles, compression therapy, and monitoring. This does not establish safety of repeated SC exposure.",
  },
  {
    topic: "Intratumoral lichenoid toxicity",
    status: "Observed",
    note: "Published dermatologic immune-mediated event",
    context:
      "A melanoma participant developed verrucous papules and erythematous plaques with lichenoid clinicopathologic features during LL-37 therapy. With only four participants, no routine cancer dose or long-term safety profile was established.",
  },
  {
    topic: "Injection-site reactions",
    status: "Plausible; unquantified for SC",
    note: "Pain, redness, swelling, induration, ulceration",
    context:
      "Community SC use may produce local reactions. Do not inject into or adjacent to wounds, abscesses, inflamed plaques, lymph nodes, veins, or suspected tumors.",
  },
  {
    topic: "Immune-mediated skin disease",
    status: "Plausible worsening",
    note: "Psoriasis, rosacea, lupus-related pathways",
    context:
      "LL-37 can form complexes with self-DNA/RNA and amplify interferon pathways implicated in psoriasis. Processing is abnormal in rosacea. Safety in active inflammatory dermatosis is not established.",
  },
  {
    topic: "Cancer biology",
    status: "Context-dependent",
    note: "Both antitumor and protumor preclinical signals",
    context:
      "LL-37 has shown anticancer and growth-promoting effects depending on tumor type and model. Unsupervised tumor-directed use is especially inappropriate.",
  },
  {
    topic: "FDA compounding concerns",
    status: "Under regulatory review",
    note: "Immunogenicity, impurities, male reproductive signals in nonclinical work",
    context:
      "FDA identifies concerns about immunogenicity, peptide-related impurities, active-ingredient characterization, limited human safety information, and context-dependent protumor effects. PCAC discussion expected before end February 2027.",
  },
  {
    topic: "Populations without established safety",
    status: "Not established",
    note: "Pregnancy, children, active autoimmune disease, cancer",
    context:
      "Safety not established for pregnancy, breastfeeding, children, frail older adults, organ impairment, severe allergy, uncontrolled psoriasis or rosacea, current cancer, immunosuppression, or systemic infection.",
  },
];

export const LL37_DOSAGE_GUIDE = {
  title: "LL-37 Dosage: Human Trial Protocols, Research Dosing, and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research status:** LL-37 is the 37-amino-acid human cathelicidin host-defense peptide cleaved from hCAP18/CAMP. Human studies have used **topical LL-37 on chronic wounds** and **intratumoral LL-37 in a four-participant melanoma trial**. There is **no established subcutaneous dose** — commonly discussed 50–400 mcg injection schedules come from community practice.",
  intro: [
    "**The best-defined human protocol is topical, not subcutaneous.** Venous-leg-ulcer studies applied 0.5, 1.6, or 3.2 mg/mL LL-37 at **25 µL per cm²** — equal to **12.5, 40, and 80 mcg/cm²** per application, usually twice weekly.",
    "The early trial found the **strongest signal at 0.5 mg/mL**; 3.2 mg/mL did not improve healing versus placebo. The larger Phase IIb trial was **negative overall**, with a benefit only in a **post-hoc subgroup** with ulcers ≥10 cm².",
    "Community SC schedules most often report **100–200 mcg once daily**, five days on/two off, for two to four weeks — **anecdotal**, without human PK or dose-finding support. For a 5 mg vial at 2 mL, each U-100 unit contains **25 mcg** (100 mcg = 4 units; 200 mcg = 8 units).",
  ],
  glance: {
    title: "LL-37 dosage in 30 seconds",
    items: [
      "**Best-characterized human route:** topical wound application — not SC",
      "**Topical VLU dose:** 0.5 / 1.6 / 3.2 mg/mL at 25 µL/cm² = 12.5 / 40 / 80 mcg/cm², twice weekly",
      "**Strongest early signal:** 0.5 mg/mL; 3.2 mg/mL showed no benefit vs placebo in Phase I/II",
      "**Phase IIb (HEAL):** negative overall; post-hoc ≥10 cm² subgroup only",
      "**DFU trial:** 0.5 mg/mL cream twice weekly × 4 weeks — improved granulation, not bacterial clearance",
      "**Melanoma NCT02225366:** 250 mcg per tumor weekly × 8 weeks (n=4); lichenoid toxicity case",
      "**No published human SC dose** — community range most often 100–200 mcg daily",
      "**Non-linear dose-response:** higher topical concentration ≠ reliably better",
    ],
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**Full name**", "Cathelicidin antimicrobial peptide LL-37"],
        ["**Biological source**", "Mature C-terminal peptide from human hCAP18/CAMP"],
        ["**Sequence**", "LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES"],
        ["**Length / mass**", "37 amino acids · ~4,493 Da"],
        ["**Published human routes**", "Topical wound; intratumoral injection"],
        ["**Published human SC dose**", "None established"],
        ["**Best topical dose**", "0.5 mg/mL at 25 µL/cm² = 12.5 mcg/cm² per application"],
        ["**Community SC range**", "Most often 100–200 mcg once daily; wider 50–400 mcg"],
        ["**Human SC half-life**", "Not established"],
        ["**Main dosing lesson**", "Route and local concentration dominate; response can be non-linear"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is LL-37?",
      paragraphs: [
        "LL-37 is the mature, biologically active C-terminal fragment of **human cationic antimicrobial protein 18 (hCAP18)**. The human **CAMP** gene encodes the larger preproprotein; proteolytic processing releases the 37-residue peptide beginning with two leucines. It is found in neutrophils and produced by epithelial cells, macrophages, and other barrier-surface cells. ([UniProt CAMP](https://www.uniprot.org/uniprotkb/P49913/entry))",
        "In water and biological membranes, LL-37 can adopt an amphipathic alpha-helical structure. Its net positive charge and hydrophobic face allow association with negatively charged microbial membranes — helping explain antibacterial, antifungal, antiviral, and antibiofilm findings in laboratory systems. Physiological salt, serum proteins, proteases, and local lipid environment can substantially change that activity.",
        "LL-37 is also a **host-defense signaling peptide**. Depending on concentration and context, it can recruit immune cells, influence neutrophil survival, activate or dampen Toll-like-receptor signaling, promote endothelial and epithelial responses, and bind extracellular DNA or RNA. The same molecule can appear antimicrobial in one experiment, pro-healing in another, and pro-inflammatory or cytotoxic in a third.",
      ],
    },
    {
      id: "identity",
      title: "Identity and naming checks",
      paragraphs: [
        "Several related names are **not interchangeable**. Confirm the vial contains full-length unmodified LL-37 before comparing with any protocol — especially **CRAMP**, **KR-12**, and **OP-145/P60.4Ac**.",
      ],
      widget: "ll-37-identity-gate",
      tables: [
        {
          caption: "Name vs identity — can its dose be reused for LL-37?",
          headers: ["Name", "Identity", "Reusable for LL-37?"],
          rows: [
            ["LL-37", "Mature 37-residue human cathelicidin", "This page's subject"],
            ["Ropocamptide", "Development name for synthetic LL-37 in wound research", "Yes only when confirmed unmodified LL-37"],
            ["hCAP18 / CAMP precursor", "Larger precursor cleaved to release LL-37", "No"],
            ["FALL-39", "Historically proposed 39-residue form", "No — length differs"],
            ["CRAMP / mCRAMP", "Murine cathelicidin", "No — mouse molecule"],
            ["KR-12", "LL-37 fragment residues 18–29", "No — different length and activity"],
            ["OP-145 / P60.4Ac", "LL-37-derived peptide", "No — derivative, not LL-37"],
            ["SAAP-148 and analogues", "Engineered peptides inspired by LL-37", "No"],
          ],
        },
        {
          caption: "Product and assay checks",
          headers: ["Test", "What it answers"],
          rows: [
            ["Intact-mass spectrometry", "Principal molecule matches full-length LL-37?"],
            ["Peptide mapping / sequence confirmation", "All 37 residues present in correct order?"],
            ["Quantitative peptide assay", "Milligrams of LL-37 active moiety actually present?"],
            ["Counterion, water, residual-solvent testing", "Does labeled mass include acetate, TFA, or synthesis residues?"],
            ["Related-substance analysis", "Truncations, aggregates, oxidized species present?"],
            ["Endotoxin, sterility, particulate testing", "Lot suitable for proposed laboratory route?"],
            ["Vehicle-specific stability", "Material remains soluble, potent, and microbiologically controlled?"],
            ["Adsorption/recovery study", "Peptide lost to glass, plastic, filters, or tubing?"],
          ],
        },
      ],
      paragraphsAfter: [
        "An HPLC result labeled “99% pure” does not by itself establish amount, identity, sterility, aggregation state, or usable shelf life. LL-37's amphipathic, cationic character makes formulation unusually important.",
      ],
    },
    {
      id: "regulatory",
      title: "Current research and compounding status",
      paragraphs: [
        "LL-37 has no U.S. prescribing label or standardized clinical dosage. FDA's compounding safety page identifies concerns about immunogenicity, peptide-related impurities, active-ingredient characterization, limited human safety information, male reproductive findings in nonclinical research, and context-dependent protumor effects. A Pharmacy Compounding Advisory Committee discussion of LL-37 for possible inclusion on the section 503A bulks list is expected **before the end of February 2027**. ([FDA safety-risk page](https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks))",
      ],
      highlight:
        "A future PCAC recommendation would concern compounding policy — not validate an indication or dose. Human evidence remains route-specific and concentrated in topical wound studies.",
    },
    {
      id: "human-trials",
      title: "Dosage used in human clinical trials",
      paragraphs: [
        "These are experimental doses from supervised clinical programs — not interchangeable treatment instructions. Wound studies used proprietary PVA solution or cream vehicles plus standard wound care. The melanoma trial used direct tumor injection by oncology investigators. **Neither route defines an SC dose.**",
      ],
      widget: "ll-37-human-status",
      tables: [
        {
          caption: "Human trial summary",
          headers: ["Study", "Dose", "Frequency / route", "Duration", "Main result"],
          rows: [
            [
              "Grönberg et al., 2014",
              "0.5 / 1.6 / 3.2 mg/mL · 25 µL/cm²",
              "Topical, twice weekly",
              "4 weeks",
              "0.5 mg/mL strongest signal; 3.2 mg/mL no benefit vs placebo",
            ],
            [
              "HEAL Phase IIb, 2021",
              "0.5 / 1.6 mg/mL · 25 µL/cm²",
              "Topical + compression, twice weekly",
              "13 weeks",
              "Negative overall; post-hoc ≥10 cm² subgroup signal",
            ],
            [
              "Miranda et al., 2023",
              "0.5 mg/mL cream",
              "Topical DFU, twice weekly",
              "4 weeks",
              "Improved granulation; no significant bacterial or cytokine reduction",
            ],
            [
              "NCT02225366",
              "250 mcg per tumor",
              "Intratumoral, once weekly",
              "8 weeks",
              "n=4; lichenoid dermatologic toxicity case published",
            ],
          ],
        },
      ],
    },
    {
      id: "vlu-protocol",
      title: "First-in-human venous-leg-ulcer protocol",
      paragraphs: [
        "The 2014 randomized, placebo-controlled study enrolled 34 people with hard-to-heal venous leg ulcers. Everyone completed a three-week open-label placebo run-in, then received LL-37 in **10.5% polyvinyl-alcohol viscous solution** or placebo twice weekly for four weeks.",
        "Application amount was **25 µL per cm² of wound area**. The 0.5 and 1.6 mg/mL groups had mean ulcer-area reductions of 68% and 50%, respectively — 0.5 mg/mL statistically significant on healing-rate analysis. The **3.2 mg/mL arm showed no healing advantage over placebo** — an important non-linear dose-response warning. ([Grönberg et al., 2014](https://pubmed.ncbi.nlm.nih.gov/25041740/))",
      ],
      widget: "ll-37-wound-calc",
    },
    {
      id: "heal-phase-iib",
      title: "Phase IIb HEAL LL-37 protocol",
      paragraphs: [
        "The multicenter trial used three-week placebo run-in, randomization to 0.5 mg/mL, 1.6 mg/mL, or placebo, product at 25 µL/cm² twice weekly for **13 weeks** with compression therapy, and 16-week follow-up.",
        "Nominal active doses were again **12.5 or 40 mcg/cm² per application**. In the full population, neither concentration significantly improved healing versus placebo. In a **post-hoc** analysis of ulcers ≥10 cm², 28.1% of the 0.5 mg/mL group achieved confirmed complete closure vs 8.1% placebo — hypothesis-generating, not confirmation the trial succeeded overall. ([Mahlapuu et al., 2021](https://pubmed.ncbi.nlm.nih.gov/34687253/))",
      ],
    },
    {
      id: "dfu-protocol",
      title: "Diabetic-foot-ulcer cream protocol",
      paragraphs: [
        "The 2023 double-blind trial randomized 25 participants to **0.5 mg/mL LL-37 cream** or placebo, applied twice weekly for four weeks with standard DFU care. Granulation index increased at days 7, 14, 21, and 28. IL-1-alpha, TNF-alpha, and aerobic bacterial colonization did not significantly improve. ([Miranda et al., 2023](https://pubmed.ncbi.nlm.nih.gov/37480520/))",
        "This supports further study of this exact cream, population, route, and schedule — not that injected LL-37 treats diabetic foot infection.",
      ],
    },
    {
      id: "melanoma-protocol",
      title: "Intratumoral melanoma protocol",
      paragraphs: [
        "The completed Phase I study [NCT02225366](https://clinicaltrials.gov/study/NCT02225366) enrolled four participants. Registry describes direct injection into two to four cutaneous tumors once weekly for eight weeks at **250 mcg per tumor injection**.",
        "A published participant report described verrucous papules and erythematous plaques with lichenoid clinicopathologic features — confirming local administration can produce clinically important cutaneous immune toxicity. This is **not evidence** for SC injection near infection, wounds, or suspected tumors. ([Dolkar et al., 2018](https://pubmed.ncbi.nlm.nih.gov/29665030/))",
      ],
    },
    {
      id: "research-dosage",
      title: "LL-37 research dosage",
      paragraphs: [
        "The table below documents human trial exposures and commonly reported community SC protocols. Repetition documents convention; it does not identify pharmacokinetic rationale or establish safety.",
      ],
      tables: [
        {
          caption: "Commonly reported research protocols",
          headers: [
            "Research protocol",
            "Reported amount",
            "Frequency",
            "Route",
            "Duration",
            "Evidence classification",
          ],
          rows: [
            [
              "VLU clinical low concentration",
              "12.5 mcg/cm² per application",
              "Twice weekly",
              "Topical PVA solution",
              "4 or 13 weeks",
              "Human clinical evidence",
            ],
            [
              "VLU clinical intermediate",
              "40 mcg/cm² per application",
              "Twice weekly",
              "Topical PVA solution",
              "4 or 13 weeks",
              "Human clinical evidence",
            ],
            [
              "VLU clinical high concentration",
              "80 mcg/cm² per application",
              "Twice weekly",
              "Topical PVA solution",
              "4 weeks",
              "Human clinical evidence; no efficacy advantage",
            ],
            [
              "DFU clinical cream",
              "0.5 mg/mL cream",
              "Twice weekly",
              "Topical cream",
              "4 weeks",
              "Small human clinical trial",
            ],
            [
              "Melanoma trial",
              "250 mcg per tumor injection",
              "Once weekly into 2–4 tumors",
              "Intratumoral",
              "8 weeks",
              "Very small Phase I (n=4)",
            ],
            [
              "Community core SC protocol",
              "100–200 mcg",
              "Once daily, often 5 on/2 off",
              "SC",
              "Commonly 2–4 weeks",
              "Anecdotal community convention",
            ],
            [
              "Community extended SC",
              "200–400 mcg",
              "Daily or 5 on/2 off",
              "SC",
              "Often 4–8 weeks; some extend to 12",
              "Insufficient evidence",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Human evidence supports only narrow, route-specific conclusions. Claims that SC injection targets a nearby wound, gut segment, biofilm, Lyme infection, or tumor are **not validated** by these studies.",
      ],
    },
    {
      id: "6-week-protocol",
      title: "Complete community-anchored 6-week LL-37 research protocol",
      paragraphs: [
        "The most interpretable way to examine the dominant community schedule is a **prospective, fixed-exposure observational design** — not a published clinical protocol or treatment recommendation. Two fixed groups (**100 mcg or 200 mcg SC once daily, five days per week for four weeks**) avoid an unvalidated escalation ladder, followed by two weeks without exposure.",
      ],
      widget: "ll-37-protocol-timeline",
      subsections: [
        {
          title: "Research question",
          paragraphs: [
            "Can the two most repeated community exposures be observed with predefined tolerability and exploratory outcomes, followed by two weeks without exposure? Separate fixed groups avoid changing dose, frequency, diet, antimicrobials, supplements, and outcome definitions simultaneously.",
          ],
        },
        {
          title: "Phase 2: fixed exposure, weeks 1–4",
          tables: [
            {
              caption: "Fixed-exposure groups",
              headers: ["Group", "Amount", "Frequency", "Route", "Administrations", "Four-week total"],
              rows: [
                ["A: lower community", "100 mcg", "Daily · 5 on/2 off", "SC", "20", "2 mg"],
                ["B: upper community", "200 mcg", "Daily · 5 on/2 off", "SC", "20", "4 mg"],
              ],
            },
            {
              caption: "Material requirements (mass balance)",
              headers: ["Group", "Four-week LL-37", "5 mg vial need", "Nominal unused"],
              rows: [
                ["A: 100 mcg × 20", "2 mg", "1 vial", "3 mg"],
                ["B: 200 mcg × 20", "4 mg", "1 vial", "1 mg"],
              ],
            },
          ],
        },
        {
          title: "Predefined hold and stop rules",
          paragraphs: [
            "Stop exposure and obtain urgent medical assessment for: facial/lip/tongue/airway swelling; wheezing; generalized hives; syncope; chest pain; severe shortness of breath; fever with rigors or possible sepsis; spreading painful injection-site reaction; new generalized rash or lichenoid eruption; significant new lab abnormality; visible particles, precipitation, or failed identity/sterility/endotoxin result.",
          ],
        },
      ],
    },
    {
      id: "dose-range",
      title: "Reported LL-37 dosage range",
      tables: [
        {
          caption: "Dosage range summary",
          headers: ["Category", "Reported range or schedule"],
          rows: [
            ["Human topical VLU concentration", "0.5–3.2 mg/mL"],
            ["Human topical VLU surface dose", "12.5–80 mcg/cm² per application"],
            ["Human topical VLU frequency", "Twice weekly"],
            ["Human topical VLU duration", "4 weeks (Phase I/II); 13 weeks (Phase IIb)"],
            ["Human DFU cream", "0.5 mg/mL twice weekly × 4 weeks"],
            ["Human intratumoral registry dose", "250 mcg per tumor · weekly × 8 weeks"],
            ["Most repeated community SC", "100–200 mcg once daily"],
            ["Wider community SC range", "50–400 mcg per administration"],
            ["Common community pattern", "5 days on / 2 off for 2–4 weeks"],
            ["Published human SC overlap", "None"],
            ["Established weight-based human dose", "None"],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus clinically studied dosing",
      paragraphs: [
        "The discrepancy is substantial. Community schedules use a different route, more frequent exposure, and usually a different vehicle than every published human program.",
      ],
      widget: "ll-37-clinical-vs-anecdotal",
    },
    {
      id: "reconstitution",
      title: "LL-37 reconstitution and concentration math",
      paragraphs: [
        "For a U-100 syringe, 100 units equal 1 mL. The tables are arithmetic aids for laboratory planning — they do not prescribe a diluent or create evidence that a multidose injectable preparation remains sterile or chemically stable.",
        "**5 mg in 2 mL** is a commonly highlighted preset: **2.5 mg/mL = 2,500 mcg/mL = 25 mcg per U-100 unit** — so 100 mcg = 4 units and 200 mcg = 8 units.",
      ],
      widget: "ll-37-recon-calc",
      tables: [
        {
          caption: "5 mg vial at 2 mL final volume (highlighted preset)",
          headers: ["Target amount", "Volume", "U-100 units"],
          rows: [
            ["50 mcg", "0.02 mL", "2 units"],
            ["100 mcg", "0.04 mL", "4 units"],
            ["150 mcg", "0.06 mL", "6 units"],
            ["200 mcg", "0.08 mL", "8 units"],
            ["250 mcg", "0.10 mL", "10 units"],
            ["300 mcg", "0.12 mL", "12 units"],
            ["400 mcg", "0.16 mL", "16 units"],
          ],
        },
      ],
      paragraphsAfter: [
        "LL-37 can self-associate, bind to surfaces, undergo proteolysis, and lose recoverable concentration through adsorption. Published wound PVA solution and DFU cream stability **do not establish** that LL-37 in bacteriostatic water remains suitable for injection for 28 days.",
      ],
    },
    {
      id: "nonlinear",
      title: "Why LL-37 responses can be non-linear",
      paragraphs: [
        "At sufficient local concentrations, LL-37 can disrupt lipid bilayers — moving from signaling toward host-cell toxicity, hemolysis, or intense inflammation. Serum, salt, and proteins change activity; proteases shorten local persistence; and signaling can reverse with context.",
        "The 2014 wound trial's **lowest concentration outperforming the highest** is consistent with a concentration-dependent optimum rather than a monotonic dose-response.",
      ],
      widget: "ll-37-claim-checker",
    },
    {
      id: "preclinical",
      title: "Preclinical LL-37 dosage",
      tables: [
        {
          caption: "Selected preclinical exposures — not human SC doses",
          headers: ["Model", "Exposure", "Route / schedule", "Why not a human dose"],
          rows: [
            [
              "Dexamethasone-impaired mouse wounds",
              "10 mcg in 50 µL per application",
              "Topical, twice daily × 7 days",
              "Local murine wound model; no human systemic PK",
            ],
            [
              "Cecal-ligation sepsis mice",
              "2 mcg per mouse",
              "Single IV after CLP",
              "Acute lethal model; IV route; mouse biology",
            ],
            [
              "MRSA surgical-wound mice",
              "1 mg/kg LL-37",
              "Topical and/or IP; daily systemic",
              "Infected surgical model; animal routes",
            ],
            [
              "Gram-negative sepsis rats",
              "1 mg/kg",
              "IV in sepsis protocol",
              "Rat sepsis exposure not convertible to community SC",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Mouse **CRAMP** studies should be listed as related cathelicidin research, not LL-37 dosing. Encapsulated hydrogels, gene-transfected cells, and nanoparticle delivery change local retention and cannot be pooled with free peptide.",
      ],
    },
    {
      id: "mechanism",
      title: "How LL-37 may work",
      numbered: [
        "**Direct microbial membrane disruption** — cationic amphipathic structure promotes binding to negatively charged microbial surfaces. Affects some biofilms in vitro; does not replace pathogen identification and approved antimicrobial therapy.",
        "**Chemotaxis and innate immune signaling** — pathways involving FPR2/FPRL1, P2X7, EGFR transactivation, and Toll-like receptors. Influences neutrophils, monocytes, T cells, dendritic cells, keratinocytes, and endothelial cells.",
        "**Wound repair and angiogenesis** — promotes keratinocyte migration, epithelial repair, and endothelial responses. Topical development aimed to restore local exposure in chronic wounds with little recoverable endogenous LL-37 at the edge.",
        "**Nucleic-acid sensing and inflammatory skin disease** — can form complexes with self-DNA/RNA and activate plasmacytoid dendritic cells. Excess or altered LL-37 participates in psoriasis and rosacea pathology.",
        "**Context-dependent cancer biology** — anticancer and growth-promoting effects in different models. It is inaccurate to call LL-37 a general anticancer peptide.",
      ],
    },
    {
      id: "results",
      title: "What results have actually been shown?",
      subsections: [
        {
          title: "Chronic wounds",
          paragraphs: [
            "Early venous-ulcer study produced a promising signal at 0.5 mg/mL, but Phase IIb did not confirm benefit in the overall cohort. Post-hoc large-ulcer subgroup requires prospective confirmation. DFU cream improved granulation in 25 participants without significantly reducing bacterial colonization.",
          ],
        },
        {
          title: "Infection and biofilms",
          paragraphs: [
            "LL-37 kills or inhibits multiple pathogens in experimental systems. Human trials have **not** established an SC regimen for Lyme disease, mold illness, Candida overgrowth, or nonspecific chronic infection.",
          ],
        },
        {
          title: "Cancer",
          paragraphs: [
            "The four-participant melanoma study is an early safety and biological-activity experiment, not proof of cancer efficacy. Mixed preclinical literature and published dermatologic toxicity make unsupervised tumor-directed use especially inappropriate.",
          ],
        },
      ],
    },
    {
      id: "timeline",
      title: "Expected timeline in research",
      tables: [
        {
          caption: "Reasonable observation windows by endpoint",
          headers: ["Endpoint", "Earliest reasonable window", "Evidence source"],
          rows: [
            ["Immediate local reaction", "Minutes to 24 hours", "Injection or topical tolerability monitoring"],
            ["Delayed rash or immune skin reaction", "Days to weeks", "Mechanism and melanoma case report"],
            ["Wound-area or granulation change", "Weekly over 4–13 weeks", "Human wound trials"],
            ["Microbial culture change", "Defined sampling days", "Clinical microbiology protocol"],
            ["Durable wound closure", "Repeated visits and follow-up", "Human wound-trial design"],
            ["Community SC exploratory signal", "Unknown", "No controlled human SC data"],
          ],
        },
      ],
    },
    {
      id: "evidence-ladder",
      title: "LL-37 dosage evidence ladder",
      paragraphs: [
        "Topical LL-37 dosing is **partially characterized** — concentration, wound surface dose, frequency, duration, and tolerability have been studied in humans. Efficacy remains uncertain after a negative overall Phase IIb result. Subcutaneous dosing is **unestablished**.",
      ],
      widget: "ll-37-evidence-ladder",
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "Topical venous-ulcer trials reported studied concentrations were generally well tolerated in controlled wound-care settings — limited to those products, routes, eligibility criteria, and monitoring. That reassurance does **not** establish safety of repeated SC exposure.",
        "Seek urgent evaluation for fever with confusion, rapidly spreading redness, severe wound pain, chest pain, breathing difficulty, facial swelling, or suspected sepsis. LL-37 should never delay antibiotics, surgical source control, vascular assessment, cancer biopsy, or emergency treatment.",
      ],
      widget: "ll-37-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "Storage instructions must follow lot-specific analytical data. A 2021 study found 0.5 mg/mL LL-37 cream chemically stable in its specific oil-in-water emulsion — that result **cannot be generalized** to reconstituted powder, bacteriostatic water, saline, or multidose injection vials.",
      ],
      tables: [
        {
          caption: "Research handling principles",
          headers: ["Material state", "Handling principle"],
          rows: [
            ["Unopened lyophilized material", "Protect from moisture and light; use manufacturer's validated temperature and retest date"],
            ["Prepared analytical stock", "Low-binding materials when validated; minimize freeze-thaw cycles"],
            ["Injectable research preparation", "Require stability for exact diluent, concentration, container, and temperature"],
            ["Topical PVA solution", "Do not substitute for published trial concentrate-and-diluent process"],
            ["0.5 mg/mL cream", "Formulation-specific stability — does not apply to aqueous vials"],
          ],
        },
      ],
      notes: [
        "Avoid automatically assigning a 28-day refrigerated beyond-use period without validated chemical, physical, and microbiological stability evidence.",
      ],
    },
    {
      id: "wada",
      title: "Anti-doping status",
      paragraphs: [
        "LL-37 is not known for a peptide-specific named entry on the 2026 WADA list. However, WADA's **S0 Non-Approved Substances** category prohibits pharmacological substances without current approval for human therapeutic use at all times. Competitive athletes should obtain a case-specific determination before exposure. ([2026 WADA Prohibited List](https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf))",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "LL-37 has more human dose information than many research peptides, but almost all of it is **topical and wound-specific**. The most reproducible human exposure is **0.5 mg/mL at 25 µL/cm² twice weekly** (12.5 mcg/cm² per application). Even that dose has mixed efficacy evidence.",
        "Daily SC schedules of **100–200 mcg** are community conventions without human pharmacokinetic or dose-finding support. A complete research protocol should keep route, concentration, formulation, product quality, monitoring, and stop rules explicit — and should never convert topical, intratumoral, or animal exposures into a general therapeutic dose.",
      ],
      highlight:
        "Confirm full-length LL-37 identity (≠ CRAMP, KR-12, OP-145). Topical trial vehicles ≠ bacteriostatic water recon. Higher concentration ≠ reliably better.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the most commonly reported LL-37 dose?",
        answer:
          "Community SC sources most often report 100–200 mcg once daily, frequently five days per week for two to four weeks. This is an anecdotal convention, not a dose validated in human SC trials.",
      },
      {
        question: "What dose of LL-37 was used in human wound trials?",
        answer:
          "Venous-leg-ulcer trials used 0.5, 1.6, or 3.2 mg/mL at 25 microliters per cm² of wound area — equal to 12.5, 40, or 80 mcg/cm² per application, usually applied twice weekly.",
      },
      {
        question: "Which topical LL-37 dose worked best?",
        answer:
          "The 0.5 mg/mL concentration produced the strongest signal in the early venous-ulcer trial. The larger Phase IIb study found no significant benefit in the overall population; a post-hoc large-ulcer subgroup favored 0.5 mg/mL. Higher concentration was not reliably better.",
      },
      {
        question: "What was the LL-37 diabetic-foot-ulcer dose?",
        answer:
          "The small randomized trial used 0.5 mg/mL LL-37 cream twice weekly for four weeks with standard care. Granulation improved, but inflammatory cytokines and aerobic bacterial colonization did not significantly improve.",
      },
      {
        question: "Is 100 mcg of LL-37 a clinical dose?",
        answer:
          "No. A 100 mcg SC amount is commonly discussed in community protocols, but no published human SC dose-finding study has established it as effective or safe.",
      },
      {
        question: "What is a conservative LL-37 research protocol?",
        answer:
          "A conservative observational design fixes exposure at 100 mcg SC once daily, five days per week for four weeks, then observes for two weeks without exposure. It requires medical oversight, verified sterile material, baseline testing, predefined endpoints, and stop rules. It remains a community-anchored experiment, not a clinical recommendation.",
      },
      {
        question: "Does LL-37 require dose escalation?",
        answer:
          "No human SC evidence supports escalation. The human wound data warn against assuming more is better: 3.2 mg/mL did not improve healing in the early trial.",
      },
      {
        question: "Does LL-37 require a loading dose or taper?",
        answer:
          "No published human evidence establishes a loading dose or taper for topical, intratumoral, or SC LL-37.",
      },
      {
        question: "How long is LL-37 commonly used?",
        answer:
          "Community SC schedules often last two to four weeks, with some extending to eight or twelve weeks. Human topical trials used four or thirteen weeks. Duration cannot be transferred across routes.",
      },
      {
        question: "How much LL-37 is needed for four weeks?",
        answer:
          "At 100 mcg five days per week for four weeks, the theoretical total is 2 mg. At 200 mcg on the same schedule, it is 4 mg. These are inventory calculations, not recommended exposures.",
      },
      {
        question: "How many U-100 units is 100 mcg from a 5 mg vial?",
        answer:
          "It depends on final volume. At 5 mg in 1 mL, 100 mcg is 2 units. At 5 mg in 2 mL, it is 4 units. At 5 mg in 5 mL, it is 10 units.",
      },
      {
        question: "How many U-100 units is 200 mcg from a 5 mg vial?",
        answer:
          "At 5 mg in 1 mL, 200 mcg is 4 units. At 5 mg in 2 mL, it is 8 units. At 5 mg in 5 mL, it is 20 units.",
      },
      {
        question: "Is one U-100 unit a fixed LL-37 dose?",
        answer:
          "No. One unit is a volume of 0.01 mL. The LL-37 amount depends on the vial mass and final concentration.",
      },
      {
        question: "Can a 5 mg LL-37 vial be mixed to 1 mg/mL?",
        answer:
          "The arithmetic requires a 5 mL final volume. That may not fit the vial, and arithmetic alone does not establish solubility, stability, compatibility, or sterility.",
      },
      {
        question: "How long does reconstituted LL-37 last?",
        answer:
          "No universal shelf life is established for community aqueous preparations. A discard date requires stability and microbiological data for the exact formulation, container, concentration, and temperature. Published cream stability cannot be assigned to a vial in bacteriostatic water.",
      },
      {
        question: "What is LL-37's half-life?",
        answer:
          "A clinically useful human half-life after SC injection has not been established. Proteolysis, tissue binding, serum binding, aggregation, and route can all change apparent persistence.",
      },
      {
        question: "Is LL-37 an antibiotic?",
        answer:
          "LL-37 is an endogenous host-defense peptide with direct antimicrobial activity in many laboratory systems. It is not a substitute for a diagnosed-infection treatment plan, cultures, source control, or approved antimicrobial drugs.",
      },
      {
        question: "Does LL-37 kill biofilms?",
        answer:
          "LL-37 can inhibit or disrupt selected biofilms in vitro. Human trials have not established an SC dose that eradicates clinical biofilm disease.",
      },
      {
        question: "Does LL-37 treat Lyme disease, mold illness, or Candida?",
        answer:
          "No controlled human trial establishes LL-37 dosing or efficacy for those conditions. Testing and treatment should follow diagnosis-specific clinical standards.",
      },
      {
        question: "Can LL-37 be injected near a wound or infection?",
        answer:
          "Human wound evidence used direct topical application in a measured, cleansed wound with a trial-specific vehicle and standard care. It does not validate SC injection near a wound, abscess, or infection.",
      },
      {
        question: "Can LL-37 be injected into a tumor?",
        answer:
          "Direct tumor injection was studied only in a specialized four-participant melanoma trial with biopsies, imaging, oncology oversight, and published skin toxicity. It is not a general or self-directed cancer protocol.",
      },
      {
        question: "Does LL-37 cause a Herxheimer reaction?",
        answer:
          "There is no validated LL-37-specific die-off syndrome. Fever, rash, hypotension, breathing difficulty, or worsening illness should be evaluated as a possible adverse event or infection complication.",
      },
      {
        question: "Can redness after LL-37 be considered normal?",
        answer:
          "Mild transient local redness may occur, but redness is still an adverse-event observation. Spreading, painful, hot, persistent, blistering, draining, or necrotic change requires stopping exposure and medical evaluation.",
      },
      {
        question: "Can LL-37 worsen psoriasis or rosacea?",
        answer:
          "It is biologically plausible. LL-37 participates in self-nucleic-acid sensing in psoriasis and is abnormally processed in rosacea. Safety in people with active inflammatory skin disease has not been established.",
      },
      {
        question: "Is LL-37 safe for people with cancer?",
        answer:
          "That is unknown and may depend on tumor type. LL-37 has shown both antitumor and protumor effects in research. People with known or suspected cancer should not use it outside qualified oncology research.",
      },
      {
        question: "Can LL-37 be combined with KPV, BPC-157, TB-500, or GHK-Cu?",
        answer:
          "No controlled human study establishes a dose, interaction profile, or safety advantage for those combinations. A multi-peptide stack also makes it difficult to identify the cause of an adverse event or outcome.",
      },
      {
        question: "Is LL-37 safe for long-term use?",
        answer:
          "Long-term SC safety is not established. The community's repeated-cycle and maintenance schedules lack controlled human evidence.",
      },
      {
        question: "Is higher-dose LL-37 more effective?",
        answer:
          "Not predictably. The early wound trial found the clearest signal at 0.5 mg/mL, while 3.2 mg/mL did not outperform placebo. LL-37 can shift from signaling to inflammatory or cytotoxic effects as local concentration changes.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Grönberg A, et al.",
        title: "Treatment with LL-37 is safe and effective in enhancing healing of hard-to-heal venous leg ulcers",
        detail: "Wound Repair Regen. 2014.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25041740/",
      },
      {
        authors: "Mahlapuu M, et al.",
        title: "Evaluation of LL-37 in healing of hard-to-heal venous leg ulcers: Phase IIb RCT",
        detail: "Wound Repair Regen. 2021.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34687253/",
      },
      {
        authors: "Miranda E, et al.",
        title: "Efficacy of LL-37 cream in enhancing healing of diabetic foot ulcer",
        detail: "Arch Dermatol Res. 2023.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37480520/",
      },
      {
        authors: "NCT02225366",
        title: "Induction of Antitumor Response in Melanoma Patients Using LL37",
        detail: "ClinicalTrials.gov.",
        href: "https://clinicaltrials.gov/study/NCT02225366",
      },
      {
        authors: "Dolkar T, et al.",
        title: "Dermatologic toxicity from novel therapy using antimicrobial peptide LL-37 in melanoma",
        detail: "J Cutan Pathol. 2018.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29665030/",
      },
      {
        authors: "Heilborn JD, et al.",
        title: "LL-37 is involved in re-epithelialization of human skin wounds",
        detail: "J Invest Dermatol. 2003.",
        href: "https://pubmed.ncbi.nlm.nih.gov/12603854/",
      },
      {
        authors: "Ramos R, et al.",
        title: "Wound healing activity of the human antimicrobial peptide LL37",
        detail: "Peptides. 2011.",
        href: "https://doi.org/10.1016/j.peptides.2011.06.005",
      },
      {
        authors: "Hu Z, et al.",
        title: "Antimicrobial cathelicidin peptide LL-37 inhibits pyroptosis and improves survival in septic mice",
        detail: "Int Immunol. 2016.",
        href: "https://pubmed.ncbi.nlm.nih.gov/26746575/",
      },
      {
        authors: "Lande R, et al.",
        title: "Plasmacytoid dendritic cells sense self-DNA coupled with antimicrobial peptide",
        detail: "Nature. 2007.",
        href: "https://pubmed.ncbi.nlm.nih.gov/17314971/",
      },
      {
        authors: "FDA",
        title: "Certain Bulk Drug Substances for Use in Compounding that May Present Significant Safety Risks",
        detail: "FDA compounding safety page.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        authors: "World Anti-Doping Agency",
        title: "2026 Prohibited List",
        detail: "S0 Non-Approved Substances.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
};

/**
 * KPV (H-Lys-Pro-Val-OH; α-MSH 11–13) dosage guide.
 * No published human KPV administration study identified (FDA 2026 review).
 * Community SC 200–500 mcg and oral 500 mcg–1 mg are anecdotal conventions.
 */

/** Molecular mass — KPV free base */
export const KPV_FREE_BASE_MASS = 342.43;

/** Molecular mass — KPV acetate 1:1 form */
export const KPV_ACETATE_MASS = 402.5;

/** FDA-reported water solubility limits (mg/mL) */
export const KPV_SOLUBILITY = {
  freeBase: 0.7,
  acetate: 5,
};

export function kpvAmountFromVial(vialMg, diluentMl, targetMcg) {
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

export const KPV_RECON_PRESETS = [
  { id: "5-2", vialMg: 5, diluentMl: 2, label: "5 mg · 2 mL (2.5 mg/mL)" },
  { id: "10-2", vialMg: 10, diluentMl: 2, label: "10 mg · 2 mL (5 mg/mL)" },
  { id: "10-4", vialMg: 10, diluentMl: 4, label: "10 mg · 4 mL (2.5 mg/mL)" },
];

export const KPV_IDENTITY = [
  {
    id: "kpv",
    label: "KPV (L-Lys–L-Pro–L-Val; α-MSH 11–13)",
    verdict: "This page's subject — confirm sequence before dosing math",
    detail:
      "Authentic KPV is H-Lys-Pro-Val-OH, the C-terminal tripeptide of alpha-MSH (~342.43 g/mol free base). Confirm intact mass, sequence mapping (Lys-Pro-Val order), chiral amino-acid identity, and quantitative assay before comparing with community protocols.",
  },
  {
    id: "kdpt",
    label: "K(D)PT / KDPT (Lys–D-Pro–Thr)",
    verdict: "Different sequence — do NOT reuse its human UC dose",
    detail:
      "K(D)PT contains threonine instead of valine and a D-proline stereocenter. Its ulcerative-colitis trial findings do not establish a KPV human dose. The molecules are not interchangeable.",
  },
  {
    id: "alpha-msh",
    label: "Full alpha-MSH (13 amino acids)",
    verdict: "Different molecule — not KPV",
    detail:
      "Alpha-MSH has distinct melanocortin receptor pharmacology, pigmentation activity, and exposure. Parent-peptide dosing and effects are not transferable to the isolated KPV tripeptide.",
  },
  {
    id: "ckpv-dimer",
    label: "(CKPV)₂ cysteine-linked KPV dimer",
    verdict: "Different structure — separate antimicrobial program",
    detail:
      "The dimer has different mass, structure, and research focus than monomeric KPV. Doses from dimer studies cannot be applied to standalone KPV.",
  },
  {
    id: "unsure",
    label: "Label unclear or unsure",
    verdict: "Incomplete — confirm identity before trusting protocols",
    detail:
      "Names such as KPV, alpha-MSH fragment, or melanocortin tripeptide do not establish whether the vial contains KPV free base, acetate, an isomer (Lys-Val-Pro), or a modified analogue. Analytics should resolve identity first.",
  },
];

export const KPV_FORM = [
  {
    id: "free-base",
    label: "KPV free base",
    mass: "342.43 g/mol",
    formula: "C16H30N4O4",
    solubility: "~0.7 mg/mL water",
    verdict: "Recon at 2.5–5 mg/mL may exceed reported solubility",
    detail:
      "FDA's 2026 chemistry review reported much lower water solubility for free-base KPV than acetate. Nominal concentration math can be exact while the preparation remains scientifically unsuitable. Clarify whether labeled milligrams represent active free peptide or total free-base solids.",
  },
  {
    id: "acetate",
    label: "KPV acetate (reported 1:1 form)",
    mass: "~402.5 g/mol",
    formula: "C16H30N4O4·CH3COOH",
    solubility: "~5 mg/mL",
    verdict: "2.5 and 5 mg/mL calculations may be viable for acetate material",
    detail:
      "Acetate mass includes counterion. Labeled milligrams may represent total material rather than active moiety. Acetate can form Lys-Pro diketopiperazine and other degradation products under forced conditions.",
  },
  {
    id: "unsure",
    label: "Form unclear",
    verdict: "Solubility warning cannot be applied until form is confirmed",
    detail:
      "Free base and acetate differ in molecular mass, assay basis, and solubility. A concentration chart is not automatically a workable formulation without knowing which bulk substance is in the vial.",
  },
];

export const KPV_HUMAN_STATUS = [
  ["Single-dose study", "None identified"],
  ["Repeated-dose study", "None identified"],
  ["Oral bioavailability study", "None identified"],
  ["Subcutaneous pharmacokinetic study", "None identified"],
  ["Topical tolerability study", "None identified"],
  ["Maximum tolerated dose", "Not established"],
  ["Dose-limiting adverse effects", "Not established"],
  ["Long-term maintenance exposure", "Not established"],
  ["Published human KPV half-life", "Not established"],
];

export const KPV_COMPARE = {
  clinical: {
    title: "Clinical KPV research",
    status: "No human administration study identified",
    rows: [
      ["Human dose", "None"],
      ["Oral amount", "None"],
      ["Route", "No human route studied"],
      ["Duration", "None"],
      ["Product", "No human investigational product described"],
      ["PK and bioavailability", "Not established"],
      ["Objective outcomes", "None in dosed humans"],
      ["Established safety", "No"],
    ],
  },
  anecdotal: {
    title: "Community reports",
    status: "Anecdotal / vendor-derived",
    rows: [
      ["Human dose", "Commonly 200–500 mcg SC daily"],
      ["Oral amount", "Often 500 mcg–1 mg daily; broader claims exist"],
      ["Route", "SC, oral, topical, sublingual, and nasal all appear"],
      ["Duration", "Often 4–8 weeks"],
      ["Product", "Variable free base, acetate, compounded, or research-vial material"],
      ["PK and bioavailability", "Usually assumed — not measured"],
      ["Objective outcomes", "Primarily symptom reports"],
      ["Established safety", "No"],
    ],
  },
};

export const KPV_PROTOCOL_PHASES = [
  {
    id: "baseline",
    phase: "Screening & baseline",
    days: "Before day 1",
    amount: "None",
    frequency: "—",
    cumulative: "—",
    purpose:
      "Document sequence, form, assay, sterility, baseline labs, and prespecified outcome measures",
  },
  {
    id: "group-a",
    phase: "Group A — lower community exposure",
    days: "1–28",
    amount: "250 mcg",
    frequency: "Once daily · SC",
    cumulative: "7 mg",
    purpose:
      "Fixed lower community range — no titration. Subcutaneous site rotation for tolerability, not lesion-specific delivery.",
  },
  {
    id: "group-b",
    phase: "Group B — upper community exposure",
    days: "1–28",
    amount: "500 mcg",
    frequency: "Once daily · SC",
    cumulative: "14 mg",
    purpose:
      "Fixed upper community range — allows exposure-response comparison without claiming either amount is optimal.",
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

export const KPV_CLAIMS = [
  {
    id: "kdpt-kpv",
    claim: "K(D)PT and KPV are the same peptide with interchangeable doses",
    status: "False",
    detail:
      "K(D)PT is Lys–D-Pro–Thr; KPV is Lys–Pro–Val. K(D)PT has a published human ulcerative-colitis study. Those findings do not create a KPV human dose and must not be reused.",
  },
  {
    id: "half-life",
    claim: "KPV has a reliable 1–2 hour human half-life",
    status: "Not established",
    detail:
      "No human pharmacokinetic study has measured KPV half-life. Precise one- or two-hour claims online are not traceable to published human PK data. Once-daily community frequency is a convention, not a PK-derived schedule.",
  },
  {
    id: "oral-gut",
    claim: "Oral KPV is better for gut research than injection",
    status: "Not demonstrated in humans",
    detail:
      "Strongest mechanistic gut work involves PepT1 uptake and luminal delivery in models. No human comparison has tested oral versus SC KPV. A capsule, nanoparticle, and SC injection are different experiments.",
  },
  {
    id: "enteric",
    claim: "Enteric coating solves KPV oral absorption",
    status: "Not demonstrated",
    detail:
      "Enteric coating can change release location but does not establish intact peptide recovery, PepT1 exposure at the inflamed colon, or clinical effect in humans.",
  },
  {
    id: "tanning",
    claim: "KPV causes tanning or pigmentation like alpha-MSH or melanotan",
    status: "Not demonstrated",
    detail:
      "KPV lacks the central melanocortin receptor-binding sequence of alpha-MSH. Several studies suggest noncanonical anti-inflammatory activity. No human study quantifies tanning or pigmentary effects after isolated KPV exposure.",
  },
  {
    id: "antimicrobial",
    claim: "KPV treats bacterial, fungal, or systemic infection",
    status: "Not established",
    detail:
      "KPV inhibited selected bacteria and fungi in laboratory experiments. It is not a proven human antimicrobial treatment and should not replace established antimicrobial care.",
  },
  {
    id: "higher-better",
    claim: "Higher KPV doses are more effective",
    status: "Not supported",
    detail:
      "There is no human dose-response study. Online ranges from hundreds of micrograms to 10 mg/day reflect uncertainty, not a wide therapeutic window. Some related experimental responses are non-linear.",
  },
  {
    id: "klow-validates",
    claim: "KLOW blend use validates standalone KPV dosing or combinations",
    status: "Not demonstrated",
    detail:
      "An 80 mg KLOW vial contains 10 mg KPV alongside GHK-Cu, BPC-157, and TB-500. A 2 mg blend ≈ 250 mcg KPV; 4 mg ≈ 500 mcg. That overlap explains similar exposure but does not validate the fixed 5:1:1:1 ratio, interaction profile, or superiority over separate components.",
  },
  {
    id: "weight-based",
    claim: "KPV must be dosed by body weight",
    status: "Not established",
    detail:
      "Community protocols use fixed microgram amounts. Animal papers report per-mouse doses, mg/kg, or drinking-water concentrations. Direct body-weight conversion ignores route, formulation, transporter saturation, and species metabolism.",
  },
];

export const KPV_EVIDENCE_LADDER = [
  {
    level: "Established prescribing dosage",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Human clinical-trial dosing",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "200–500 mcg SC once daily",
    exists: "Anecdotal community protocol",
    confidence: "Very low",
  },
  {
    level: "500 mcg–1 mg oral once daily",
    exists: "Anecdotal community protocol; absorption uncertain",
    confidence: "Very low",
  },
  {
    level: "0.1% topical cream or gel",
    exists: "Nominated formulation strength; no validated human application dose",
    confidence: "Very low",
  },
  {
    level: "100 µM in mouse drinking water",
    exists: "Preclinical oral concentration",
    confidence: "Preclinical — not human dose",
  },
  {
    level: "10 mcg IP daily in DSS colitis mice",
    exists: "Preclinical systemic dose",
    confidence: "Preclinical — not human dose",
  },
  {
    level: "0.1 mcg IV three times weekly in transfer-colitis mice",
    exists: "Preclinical systemic dose",
    confidence: "Preclinical — not human dose",
  },
  {
    level: "Nanoparticle, hydrogel, or conjugated delivery",
    exists: "Published experimental/preclinical evidence",
    confidence: "Formulation-specific — not convertible",
  },
  {
    level: "Long-term continuous or repeat-cycle use",
    exists: "Insufficient evidence",
    confidence: "None",
  },
];

export const KPV_AE_SIMPLE = [
  {
    topic: "Human adverse-event incidence",
    status: "Unknown",
    note: "FDA 2026 review found no human KPV safety study by any route",
  },
  {
    topic: "Online side-effect lists",
    status: "Not incidence data",
    note: "Headache, nausea, fatigue, and injection-site irritation are anecdotal — frequency and causality unknown",
  },
  {
    topic: "Route-specific risks",
    status: "Unresolved",
    note: "SC, oral, topical, and device-assisted delivery each carry distinct uncertainties",
  },
  {
    topic: "Product-quality risk",
    status: "Elevated",
    note: "Identity errors, degradation, endotoxin, and solubility failures can dominate real-world risk",
  },
];

export const KPV_AE_FULL = [
  {
    topic: "Human adverse-event incidence",
    status: "Unknown",
    note: "No human KPV administration study identified",
    context:
      "FDA's 2026 review did not identify studies addressing human adverse-event incidence, pharmacokinetics, repeat-dose toxicology, genotoxicity, reproductive toxicity, carcinogenicity, immunogenicity, or drug interactions for KPV free base or acetate.",
  },
  {
    topic: "Online side-effect lists",
    status: "Not incidence data",
    note: "Anecdotal reports cannot determine frequency or causality",
    context:
      "Headache, nausea, fatigue, flushing, diarrhea, and injection-site irritation may be reported online, but their dose relationship and connection to verified KPV are unknown.",
  },
  {
    topic: "Route-specific risks",
    status: "Unresolved",
    note: "Each route has distinct failure modes",
    context:
      "SC: wrong identity, contamination, endotoxin, aggregation. Oral: degradation, uncertain absorption. Topical: poor penetration, irritation through damaged skin. Microneedle/iontophoresis: barrier injury and unpredictable systemic delivery.",
  },
  {
    topic: "Product-quality risk",
    status: "Elevated",
    note: "FDA cited inconsistent naming and incomplete characterization",
    context:
      "KPV acetate can form Lys-Pro diketopiperazine and other degradation products. A mislabeled or degraded vial creates a different exposure from literature references.",
  },
  {
    topic: "Populations without established safety",
    status: "Not established",
    note: "Pregnancy, children, immunosuppression, active IBD on biologics",
    context:
      "Safety is not established in pregnancy or breastfeeding, children, older adults with frailty, significant renal or hepatic impairment, active cancer, immunodeficiency, autoimmune disease, unstable cardiovascular disease, or concurrent immunosuppressive or biologic treatment.",
  },
];

export const KPV_DOSAGE_GUIDE = {
  title: "KPV Dosage: Research Protocol, Routes, and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research status:** KPV—lysine-proline-valine—is an alpha-MSH-derived tripeptide studied in cells, isolated human tissues, and animal models. A current literature and registry review did **not** identify a published study in which isolated KPV free base or KPV acetate was administered to people. The human-dose figures below document **community practice**, not a validated treatment schedule.",
  intro: [
    "**No human KPV dose has been established.** FDA's 2026 scientific review found no human exposure, pharmacokinetic, pharmacodynamic, effectiveness, or safety study for KPV free base or KPV acetate by any route.",
    "The most repeated community injection range is **200–500 mcg once daily** for roughly **four to eight weeks** — anecdotal, without traceable human dose-finding basis. Oral protocols commonly cluster around **500 mcg–1 mg once daily** with PepT1/mouse rationale but no human PK data.",
    "A defensible 28-day observational design uses **fixed 250 mcg or 500 mcg SC groups** — not titration. Free-base solubility (~0.7 mg/mL) means reconstitution math at 2.5–5 mg/mL may exceed workable free-base concentration; acetate (~5 mg/mL) differs materially.",
  ],
  glance: {
    title: "KPV dosage in 30 seconds",
    items: [
      "**No human KPV dose established** — FDA 2026 review found no human administration study",
      "**Most repeated community SC range:** 200–500 mcg once daily, often 4–8 weeks",
      "**Community oral range:** 500 mcg–1 mg once daily — PepT1/mouse rationale, no human PK",
      "**Preclinical gut model:** 100 µM drinking water in mouse colitis — not a human milligram dose",
      "**0.1% topical** = 1 mg/g nominated compounding strength — application dose not validated",
      "**Form matters:** free base ~342.43 g/mol, ~0.7 mg/mL solubility; acetate ~402.5 g/mol, ~5 mg/mL",
      "**28-day totals:** 7 mg at 250 mcg/day; 14 mg at 500 mcg/day — inventory math only",
    ],
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**Full name**", "Lysine-proline-valine"],
        ["**Sequence**", "H-Lys-Pro-Val-OH; one-letter code KPV"],
        ["**Biological identity**", "C-terminal residues 11–13 of alpha-MSH"],
        ["**Free-base mass**", "342.43 g/mol (C16H30N4O4)"],
        ["**Acetate mass**", "~402.5 g/mol (1:1 acetate form)"],
        ["**Published human KPV dose**", "None identified"],
        ["**Published human KPV half-life**", "Not established"],
        ["**Community SC range**", "Most often 200–500 mcg once daily"],
        ["**Community oral range**", "Commonly 500 mcg–1 mg once daily"],
        ["**Weight-based human dose**", "Not established"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is KPV?",
      paragraphs: [
        "KPV is the three-amino-acid C-terminal fragment of **alpha-melanocyte-stimulating hormone**, corresponding to alpha-MSH residues 11–13. The sequence is lysine–proline–valine, written **H-Lys-Pro-Val-OH** for the unmodified free-base peptide.",
        "The peptide's very small size is scientifically important. Di- and tripeptide transporters can recognize molecules of this scale, and KPV has been shown to enter human intestinal epithelial and T-cell models through **PepT1** (SLC15A1). In those experiments, nanomolar KPV reduced NF-kappa-B and MAP-kinase signaling and lowered inflammatory cytokine output. ([Dalmasso et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18061177/))",
        "KPV should not be described simply as a miniature melanocortin-receptor agonist. Multiple experiments found activity in MC1R-deficient mice, an inability to reproduce some receptor-linked cAMP responses, or intracellular effects consistent with noncanonical signaling. The exact molecular target remains unsettled. ([Getting et al., 2003](https://pubmed.ncbi.nlm.nih.gov/12750433/); [Land, 2012](https://pubmed.ncbi.nlm.nih.gov/22837805/))",
      ],
    },
    {
      id: "identity",
      title: "Identity and naming checks",
      paragraphs: [
        "Several nearby names describe different molecules. Confirm exact sequence before comparing with any protocol — especially **K(D)PT**, which has human ulcerative-colitis research but is **not KPV**.",
      ],
      widget: "kpv-identity-gate",
      tables: [
        {
          caption: "Name vs identity — can its dose be reused for KPV?",
          headers: ["Name", "Identity", "Reusable for KPV?"],
          rows: [
            ["KPV", "L-Lys–L-Pro–L-Val; alpha-MSH(11–13)", "This page's subject"],
            ["K(D)PT / KDPT", "Lys–D-Pro–Thr", "No — different sequence with separate human UC research"],
            ["(CKPV)₂", "Cysteine-linked KPV dimer", "No — different mass, structure, and program"],
            ["Alpha-MSH", "13-amino-acid parent peptide", "No — different receptor pharmacology"],
            ["Afamelanotide / melanotan analogues", "Longer modified melanocortin peptides", "No — pigmentation data not transferable"],
            ["Lys-Val-Pro", "Sequence isomer", "No — amino-acid order differs"],
            ["KPV amide or acetylated KPV", "Terminally modified analogues", "No unless exact molecule specified"],
          ],
        },
      ],
      paragraphsAfter: [
        "The published human trial of **K(D)PT** is especially easy to misread as KPV evidence. Its clinical findings do not create a KPV human dose. ([K(D)PT UC study](https://pubmed.ncbi.nlm.nih.gov/28092306/))",
      ],
    },
    {
      id: "form",
      title: "Free base versus acetate",
      paragraphs: [
        "FDA's 2026 chemistry review treated KPV free base and KPV acetate as distinct bulk drug substances. Molecular mass, assay basis, and solubility differ — both affect molar exposure and whether a nominal concentration is physically achievable.",
      ],
      widget: "kpv-form-gate",
      tables: [
        {
          caption: "KPV free base vs acetate (FDA 2026 review)",
          headers: ["Property", "KPV free base", "KPV acetate (1:1)"],
          rows: [
            ["Sequence", "H-Lys-Pro-Val-OH", "H-Lys-Pro-Val-OH·CH3COOH"],
            ["Molecular formula", "C16H30N4O4", "C16H30N4O4·CH3COOH"],
            ["Molecular mass", "342.43 g/mol", "About 402.5 g/mol"],
            ["Reported water solubility", "About 0.7 mg/mL", "Reported to dissolve at 5 mg/mL"],
            ["Label question", "Active free peptide vs total solids?", "Does mass include acetate and residuals?"],
          ],
        },
        {
          caption: "Research-vial quality checks",
          headers: ["Test", "What it establishes"],
          rows: [
            ["Intact-mass spectrometry", "Principal species matches KPV rather than isomer or analogue"],
            ["Sequence or peptide mapping", "Order is Lys-Pro-Val"],
            ["Chiral amino-acid analysis", "L- versus D-amino-acid identity"],
            ["Quantitative assay", "Actual KPV content — not chromatographic purity alone"],
            ["Acetate, water, residual-solvent testing", "Whether labeled mg represent active moiety or total material"],
            ["Related-substance and degradation testing", "Truncations, diketopiperazine, breakdown products"],
            ["Sterility, endotoxin, particulate testing", "Suitability for parenteral laboratory design"],
            ["Vehicle-specific stability", "Potency and microbiological quality at chosen concentration"],
          ],
        },
      ],
      notes: [
        "An HPLC report showing “99% purity” does not establish most of these properties. A clear solution does not by itself prove identity, potency, sterility, or stability. ([FDA KPV briefing document](https://www.fda.gov/media/193346/download))",
      ],
    },
    {
      id: "regulatory",
      title: "Current research and compounding status",
      paragraphs: [
        "KPV remains a preclinical research peptide rather than a medicine with prescribing information. FDA's May 2026 review found no published human administration study and evaluated nominated **0.1% topical cream and gel** products for wound healing and inflammatory conditions.",
        "On July 23, 2026, the Pharmacy Compounding Advisory Committee voted 8–6 (one abstention) to recommend adding both free-base KPV and KPV acetate to the section 503A bulks list. That advisory vote did **not** create an approved indication, validate a dose, or complete FDA rulemaking. ([FDA meeting page](https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026))",
      ],
      highlight:
        "PCAC recommendation is compounding-policy guidance — not an approved dose. All human dosing evidence remains community-derived or preclinical.",
    },
    {
      id: "human-trials",
      title: "Dosage used in human clinical trials",
      paragraphs: [
        "**No published human KPV administration dose was identified.** FDA searched PubMed, Embase, ClinicalTrials.gov, and adverse-event systems for its 2026 review. Studies using human cell lines, cadaver skin, or isolated tissue are not human dosing trials. The human K(D)PT trial cannot be reassigned to KPV.",
      ],
      widget: "kpv-human-status",
    },
    {
      id: "research-dosage",
      title: "KPV research dosage",
      paragraphs: [
        "The table below documents commonly reported community protocols. Repetition documents a convention; it does not identify pharmacokinetic rationale or establish safety.",
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
              "Community low-range protocol",
              "200–250 mcg",
              "Usually once daily",
              "SC",
              "Commonly 4–8 weeks",
              "Anecdotal community protocol",
            ],
            [
              "Community upper-range protocol",
              "400–500 mcg",
              "Once daily; some 5 days on/2 off",
              "SC",
              "Commonly 4–8 weeks",
              "Anecdotal community protocol",
            ],
            [
              "Gut-focused community protocol",
              "500 mcg–1 mg",
              "Usually once daily",
              "Oral",
              "Commonly 4–8 weeks",
              "Anecdotal; no human PK",
            ],
            [
              "Broader oral claims",
              "1–10 mg/day",
              "Once or divided",
              "Oral",
              "Variable",
              "Insufficient evidence",
            ],
            [
              "Nominated topical preparation",
              "0.1% (= 1 mg/g)",
              "Application amount not established",
              "Cream or gel",
              "Not established",
              "Compounding nomination",
            ],
            [
              "KLOW blend exposure",
              "250–500 mcg KPV within 2–4 mg blend",
              "Three times weekly to daily",
              "SC",
              "Commonly 8–12 weeks",
              "Anecdotal fixed-combination protocol",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Published research supports that KPV can alter inflammatory signaling in cell systems, that **100 micromolar drinking-water** exposure reduced endpoints in mouse colitis, and that microgram IP/IV doses affected separate models. None validates 250 mcg, 500 mcg, or 1 mg as a human dose.",
      ],
    },
    {
      id: "28-day-protocol",
      title: "Complete community-anchored 28-day KPV research protocol",
      paragraphs: [
        "The most defensible “complete protocol” is a **prospective, fixed-exposure observational design** testing the dominant community range. It is not a published human trial and should not be presented as treatment. Two fixed groups — **250 mcg or 500 mcg SC once daily** — avoid silent escalation because no published evidence supports a titration ladder.",
        "This protocol does **not** assume injection near a painful or inflamed area produces local targeting. No titration, loading dose, taper, five-on/two-off schedule, or automatic repeat cycle is built in.",
      ],
      widget: "kpv-protocol-timeline",
      subsections: [
        {
          title: "Phase 1: screening and baseline",
          bullets: [
            "Exact sequence, form, molecular mass, quantitative assay, sterility, endotoxin, and lot traceability",
            "Medical history, medicines, allergies, prior peptide exposure",
            "Vital signs, weight, CBC, renal and liver chemistry, electrolytes, urinalysis",
            "One validated symptom or disease-activity measure selected before day 1",
            "One objective endpoint (CRP, fecal calprotectin, lesion photography, TEWL, or clinician-selected measure)",
            "Stable plan for concomitant medicines, diet, and skin products",
          ],
        },
        {
          title: "Phase 2: fixed exposure",
          tables: [
            {
              caption: "28-day fixed SC protocol",
              headers: ["Group", "Days", "KPV amount", "Frequency", "Route", "Total 28-day KPV"],
              align: ["left", "right", "right", "left", "left", "right"],
              rows: [
                ["A: lower community exposure", "1–28", "250 mcg", "Once daily", "SC", "7 mg"],
                ["B: upper community exposure", "1–28", "500 mcg", "Once daily", "SC", "14 mg"],
                ["Observation", "29–42", "None", "—", "—", "Prior group total"],
              ],
            },
            {
              caption: "Material requirements (theoretical)",
              headers: ["Fixed exposure", "Daily KPV", "28-day amount", "5 mg vials", "10 mg vials"],
              align: ["left", "right", "right", "right", "right"],
              rows: [
                ["Group A", "250 mcg", "7 mg", "2 vials; ~3 mg remainder", "1 vial; ~3 mg remainder"],
                ["Group B", "500 mcg", "14 mg", "3 vials; ~1 mg remainder", "2 vials; ~6 mg remainder"],
              ],
            },
          ],
        },
        {
          title: "Phase 3: assessment schedule",
          tables: [
            {
              caption: "Minimum assessments",
              headers: ["Time point", "Minimum assessments"],
              rows: [
                ["Baseline", "Symptom score, objective endpoint, exam, CBC, chemistry, vitals, concomitant treatments"],
                ["First exposure", "Administration observation, acute reaction, injection-site response"],
                ["Day 3", "Acute AE check, injection-site review, diary completeness"],
                ["Day 7", "Symptom instrument, objective measure, adherence, adverse events"],
                ["Day 14", "CBC, chemistry, vitals, objective endpoint, AE review"],
                ["Day 21", "Symptom instrument, injection-site review, adherence"],
                ["Day 28", "Full end-of-exposure exam, baseline outcome battery, labs, product accountability"],
                ["Day 35", "Off-exposure AE and symptom review"],
                ["Day 42", "Final durability and rebound assessment"],
              ],
            },
          ],
        },
        {
          title: "Phase 4: predefined hold and stop rules",
          bullets: [
            "Generalized hives, facial or airway swelling, wheezing, syncope, or serious acute reaction",
            "Spreading, painful, hot, draining, or necrotic injection-site lesion",
            "Fever or suspected systemic infection",
            "Clinically meaningful new renal, liver, blood-count, or electrolyte abnormality",
            "Worsening GI bleeding, severe abdominal pain, or IBD complication symptoms",
            "Dosing error, failed identity or sterility result, or unvalidated storage excursion",
            "Pregnancy or protocol-defined exclusion arising during exposure",
          ],
        },
      ],
    },
    {
      id: "oral-topical-combo",
      title: "Oral, topical, and combination protocol variations",
      subsections: [
        {
          title: "Oral KPV",
          paragraphs: [
            "The biological rationale for oral KPV is stronger than the human evidence. PepT1 transports di- and tripeptides, and the foundational mouse experiment used **100 micromolar in drinking water** — not a once-daily human capsule. Later studies used colon-targeted nanoparticles and hydrogels not equivalent to ordinary oral powder. ([Dalmasso et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18061177/); [Laroui et al., 2010](https://pubmed.ncbi.nlm.nih.gov/19909746/))",
            "A community-observation cohort could document **500 mcg or 1 mg once daily for 28 days** separately from SC exposure (14 mg or 28 mg totals). There is no human evidence that empty stomach, split dosing, enteric coating, or sublingual placement improves exposure.",
          ],
        },
        {
          title: "Topical KPV",
          paragraphs: [
            "The nominated **0.1%** strength equals **1 mg KPV per gram** of finished product — a formulation concentration, not an application dose. No human study establishes grams to apply, frequency, duration, or treated surface area.",
          ],
          tables: [
            {
              caption: "KPV content at 0.1% w/w",
              headers: ["Finished-product mass", "KPV at 0.1%"],
              align: ["right", "right"],
              rows: [
                ["1 g", "1 mg"],
                ["15 g", "15 mg"],
                ["30 g", "30 mg"],
                ["50 g", "50 mg"],
              ],
            },
          ],
          notes: [
            "Passive KPV movement across intact human cadaver skin was below detection; microneedles and iontophoresis increased flux in laboratory models. Rabbit corneal eye-drop data should not be converted into skin cream or human ocular doses. ([Pawar et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28343991/); [Bonfiglio et al., 2006](https://pubmed.ncbi.nlm.nih.gov/16965771/))",
          ],
        },
        {
          title: "KPV in KLOW and other stacks",
          paragraphs: [
            "A common 80 mg KLOW vial contains **50 mg GHK-Cu plus 10 mg each of KPV, BPC-157, and TB-500**. A **2 mg** blend amount provides **250 mcg KPV**; a **4 mg** blend provides **500 mcg KPV** — overlapping standalone community SC protocols.",
            "It does **not** validate the combination. No controlled study establishes the fixed 5:1:1:1 ratio, interaction profile, or superiority over separate components. Fixed blends prevent independent adjustment and complicate adverse-event attribution.",
          ],
        },
      ],
    },
    {
      id: "reported-range",
      title: "Reported KPV dosage range",
      tables: [
        {
          caption: "Evidence-based dosage parameters",
          headers: ["Parameter", "Evidence-based summary"],
          rows: [
            ["Established human range", "None"],
            ["Most repeated community SC amount", "200–500 mcg per day"],
            ["Most repeated community oral amount", "500 mcg–1 mg per day; substantial disagreement beyond"],
            ["Community frequency", "Usually once daily; five-on/two-off and split schedules appear"],
            ["Community duration", "Commonly 4–8 weeks"],
            ["Established escalation", "None"],
            ["Established washout or repeat cycle", "None"],
            ["Established maximum dose", "None"],
            ["Human trial overlap", "None"],
            ["Evidence quality", "Anecdotal for human exposure; preclinical for biological effects"],
            ["Weight-based human dose", "Not established"],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus clinically studied dosing",
      widget: "kpv-clinical-vs-anecdotal",
      paragraphsAfter: [
        "There is no clinical/community overlap to compare. The central discrepancy is that community figures often sound precise even though no human exposure anchor exists.",
      ],
    },
    {
      id: "reconstitution",
      title: "KPV reconstitution and concentration math",
      paragraphs: [
        "These tables are **calculation references**, not formulation recipes. Diluent selection, pH, osmolality, solubility, sterility, and beyond-use dating require product-specific validation.",
        "**Concentration (mcg/mL) = vial amount (mcg) ÷ final volume (mL)** · **Draw volume (mL) = target amount (mcg) ÷ concentration (mcg/mL)** · **U-100 units = draw volume (mL) × 100**. One U-100 unit is **0.01 mL of volume** — not a universal KPV amount.",
      ],
      widget: "kpv-recon-calc",
      tables: [
        {
          caption: "5 mg vial at 2 mL (2.5 mg/mL = 25 mcg per U-100 unit)",
          headers: ["Target KPV", "Volume", "U-100 units", "Portions per vial"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["200 mcg", "0.08 mL", "8 units", "25"],
            ["250 mcg", "0.10 mL", "10 units", "20"],
            ["300 mcg", "0.12 mL", "12 units", "16.7"],
            ["400 mcg", "0.16 mL", "16 units", "12.5"],
            ["500 mcg", "0.20 mL", "20 units", "10"],
          ],
        },
        {
          caption: "10 mg vial at 2 mL (5 mg/mL = 50 mcg per U-100 unit)",
          headers: ["Target KPV", "Volume", "U-100 units", "Portions per vial"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["200 mcg", "0.04 mL", "4 units", "50"],
            ["250 mcg", "0.05 mL", "5 units", "40"],
            ["300 mcg", "0.06 mL", "6 units", "33.3"],
            ["400 mcg", "0.08 mL", "8 units", "25"],
            ["500 mcg", "0.10 mL", "10 units", "20"],
          ],
        },
        {
          caption: "10 mg vial at 4 mL (2.5 mg/mL = 25 mcg per U-100 unit)",
          headers: ["Target KPV", "Volume", "U-100 units"],
          align: ["right", "right", "right"],
          rows: [
            ["200 mcg", "0.08 mL", "8 units"],
            ["250 mcg", "0.10 mL", "10 units"],
            ["300 mcg", "0.12 mL", "12 units"],
            ["400 mcg", "0.16 mL", "16 units"],
            ["500 mcg", "0.20 mL", "20 units"],
          ],
        },
      ],
      notes: [
        "FDA reported water solubility of about **0.7 mg/mL for KPV free base** and **5 mg/mL for KPV acetate**. Therefore 2.5 mg/mL and 5 mg/mL tables may describe plausible acetate calculations but **exceed reported free-base water solubility**. Undissolved material or precipitation after refrigeration makes nominal calculations unreliable.",
      ],
    },
    {
      id: "preclinical",
      title: "Preclinical KPV dosage",
      paragraphs: [
        "**Animal / preclinical research only.** These exposures answer model-specific questions and should not be converted into human treatment doses.",
      ],
      tables: [
        {
          caption: "Selected preclinical KPV exposure",
          headers: ["Model", "KPV exposure", "Route and schedule", "Duration", "Outcome studied"],
          rows: [
            [
              "Mouse DSS colitis",
              "100 µM drinking water",
              "Oral, continuous access",
              "8 days",
              "Weight, histology, MPO, cytokines",
            ],
            [
              "Mouse TNBS colitis",
              "100 µM drinking water",
              "Oral",
              "48 hours",
              "Histology and cytokines",
            ],
            [
              "Mouse DSS colitis",
              "10 mcg per mouse",
              "IP once daily from day 0",
              "8 days",
              "Weight, histology, MPO",
            ],
            [
              "Mouse chronic CD45RB-high transfer colitis",
              "0.1 mcg per mouse",
              "IV three times weekly",
              "Chronic model course",
              "Weight, histology, inflammation",
            ],
            [
              "Mouse DSS + KPV/FK506 nanoparticles",
              "1 mg/kg",
              "Tail vein once daily",
              "7-day acute; repeated chronic cycles",
              "Disease activity, barrier proteins, cytokines",
            ],
            [
              "Rabbit corneal abrasion",
              "1, 5, or 10 mg/mL; two 30-µL drops",
              "Topical four times daily",
              "4 days",
              "Re-epithelialization",
            ],
            [
              "Human intestinal epithelial / T-cell models",
              "10 nM KPV",
              "In vitro",
              "Hours",
              "NF-κB/MAPK, IL-8, PepT1 transport",
            ],
            [
              "3T3-L1 preadipocytes",
              "Up to 100 mcg/mL",
              "In vitro",
              "Differentiation experiment",
              "Lipid staining, AKT/mTOR, PPAR-gamma",
            ],
          ],
        },
      ],
      notes: [
        "The 100 µM drinking-water study created luminal concentration under voluntary intake. Nanoparticle studies changed gastric protection and colon release. Injected mouse studies used IP or IV. No single conversion equation reconciles these delivery systems into a human SC or oral dose.",
      ],
    },
    {
      id: "why-doses",
      title: "Why these research doses are used",
      numbered: [
        "**PepT1 uptake and local intestinal exposure** — KPV is small enough for PepT1 transport. This provides mechanistic reason to investigate local intestinal delivery, but does not show an ordinary capsule reaches the inflamed colon intact. ([Dalmasso et al., 2008](https://pubmed.ncbi.nlm.nih.gov/18061177/))",
        "**Very short, undefined systemic persistence** — No human half-life has been measured. Once-daily community frequency is a convention, not a PK-derived schedule.",
        "**Formulation changes the effective experiment** — Colon-targeted nanoparticles delivered comparable efficacy at dramatically lower nominal concentrations than free peptide in mouse models — delivery location can dominate nominal milligrams. ([Laroui et al., 2010](https://pubmed.ncbi.nlm.nih.gov/19909746/))",
        "**Bell-shaped or non-linear responses are possible** — Without human dose ranging, “more KPV” should not be assumed to create larger benefit.",
      ],
    },
    {
      id: "mechanism",
      title: "How KPV may work",
      numbered: [
        "**NF-kappa-B and MAP-kinase signaling** — KPV reduced activation in stimulated intestinal epithelial and immune-cell models, lowering IL-8 and other inflammatory signals. In airway cells, KPV interfered with p65/RelA nuclear import.",
        "**PepT1-mediated cellular entry** — PepT1 (SLC15A1) handles small dietary peptides; inflammation can alter colon expression. Human disease-state PK has not been measured.",
        "**Partial independence from melanocortin receptors** — KPV retained activity in MC1R-deficient mice and did not reproduce cAMP responses of selected melanocortin agonists. Does not prove every tissue effect is receptor-independent.",
        "**Antimicrobial activity** — KPV reduced colony formation of selected bacteria and fungi in vitro — not evidence of human infection treatment. ([Cutuli et al., 2000](https://pubmed.ncbi.nlm.nih.gov/10670585/))",
      ],
      widgetAfter: "kpv-claim-checker",
    },
    {
      id: "results",
      title: "What results have actually been shown?",
      subsections: [
        {
          title: "Intestinal inflammation",
          paragraphs: [
            "Mouse DSS, TNBS, and T-cell-transfer colitis studies reported improvements in weight, histology, MPO, or cytokines. Colon-targeted delivery often outperformed free peptide on selected endpoints. These support formulation research — not remission or mucosal healing in people with IBD.",
          ],
        },
        {
          title: "Corneal and skin delivery",
          paragraphs: [
            "Rabbit corneal work reported complete re-epithelialization by 60 hours under study conditions. Human cadaver-skin passive permeation was below detection; microneedles or iontophoresis were needed to increase delivery. Neither proves a standard human skin cream heals wounds.",
          ],
        },
        {
          title: "Inflammatory signaling in human cells",
          paragraphs: [
            "Human intestinal, T-cell, airway, and keratinocyte experiments provide mechanistic relevance. They remain ex-vivo or in-vitro — not proof a person absorbs product, experiences benefit, or avoids toxicity.",
          ],
        },
        {
          title: "Metabolic research",
          paragraphs: [
            "A 2026 study reported 100 mcg/mL KPV reduced lipid staining in 3T3-L1 adipocytes and altered weight-related outcomes in high-fat-diet mice — emerging preclinical direction, not human weight-loss dosing evidence. ([An et al., 2026](https://pubmed.ncbi.nlm.nih.gov/42585803/))",
          ],
        },
      ],
    },
    {
      id: "timeline",
      title: "Expected timeline in research",
      tables: [
        {
          caption: "What can reasonably be assessed by time window",
          headers: ["Time window", "What can reasonably be assessed"],
          rows: [
            ["First exposure to day 3", "Acute tolerability, administration errors, injection or topical reactions"],
            ["Week 1", "Diary quality, early symptom trajectory, concomitant-treatment stability"],
            ["Week 2", "Laboratory safety review and prespecified intermediate endpoint"],
            ["Week 4", "End-of-exposure comparison for 28-day community-anchored design"],
            ["Weeks 5–6", "Persistence, rebound, delayed adverse events, return toward baseline"],
            ["Beyond 8 weeks", "Human evidence absent; chronic cycling cannot be characterized"],
          ],
        },
      ],
    },
    {
      id: "evidence-ladder",
      title: "KPV dosage evidence ladder",
      paragraphs: [
        "KPV human dosing is **not established**. The widely repeated **200–500 mcg daily** injection range and **500 mcg–1 mg daily** oral range are community conventions without human PK, safety, or dose-response anchor.",
      ],
      widget: "kpv-evidence-ladder",
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "KPV has shown biological activity in cell and animal models, but FDA's 2026 review did not identify human adverse-event incidence data by any route. Online lists of “common KPV side effects” are not incidence data.",
      ],
      widget: "kpv-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "There is no universal prescribing label or validated beyond-use date for KPV preparations. Generic “28 days refrigerated” advice is not KPV-specific stability evidence.",
      ],
      tables: [
        {
          caption: "Evidence-based handling principles",
          headers: ["Material", "Handling principle"],
          rows: [
            ["Lyophilized free base", "Follow lot-specific temperature, humidity, light, and container data"],
            ["KPV acetate bulk", "FDA cited sealed storage at 2–8°C for one submitted certificate — not universal for all products"],
            ["Reconstituted parenteral preparation", "Requires validated vehicle, concentration, sterility, temperature, and beyond-use period"],
            ["Topical cream or gel", "Formulation-specific chemical and microbiological stability required"],
            ["Laboratory working solution", "Control pH, oxidation, adsorption, freeze-thaw, and degradation products"],
          ],
        },
      ],
      notes: [
        "Cloudiness, precipitation, discoloration, particles, damaged stopper, unknown preparation date, or temperature excursion should invalidate controlled exposure until investigated.",
      ],
    },
    {
      id: "comparisons",
      title: "Comparisons",
      tables: [
        {
          caption: "KPV vs nearby peptides",
          headers: ["Feature", "KPV", "Alpha-MSH", "K(D)PT", "BPC-157"],
          rows: [
            ["Sequence", "Lys-Pro-Val", "13 amino acids ending in KPV", "Lys-D-Pro-Thr", "15 amino acids"],
            ["Main research theme", "Inflammatory signaling, PepT1, gut models", "Melanocortin signaling, pigmentation", "IL-1-related anti-inflammatory development", "Tissue-repair and GI models"],
            ["Human administered data", "None identified", "Molecule-specific data exist", "Phase I and UC study exist", "Very limited human reports"],
            ["Human dose transferable to KPV", "—", "No", "No", "No"],
            ["Community combinations", "KLOW, BPC-157, TB-500, GHK-Cu", "Less common in same blend", "Not interchangeable", "Commonly stacked — no controlled KPV-combination data"],
          ],
        },
      ],
      notes: [
        "Mechanistic complementarity is not combination evidence. No controlled study establishes that pairing KPV with BPC-157, TB-500, GHK-Cu, or thymosin alpha-1 improves efficacy or safety.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "KPV is a biologically active alpha-MSH-derived tripeptide with credible preclinical research in inflammatory signaling, PepT1-mediated intestinal uptake, colitis, barrier delivery, and selected wound models. Its scientific interest should not be confused with an established human regimen.",
        "The human dosing landscape is entirely community-derived. **200–500 mcg SC once daily** is the most repeated injection convention; **500 mcg–1 mg orally once daily** is a common but inconsistent gut-focused convention; and **0.1% topical** is a nominated formulation strength rather than a validated application schedule. A 28-day design with fixed 250 mcg and 500 mcg groups remains an observational test of anecdotal exposures — not a clinical dosing recommendation.",
      ],
      highlight:
        "No human KPV dose is established. Confirm identity (≠ K(D)PT), form (free base vs acetate), and solubility before trusting reconstitution math.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the most commonly reported KPV dose?",
        answer:
          "Community sources most often report 200–500 mcg once daily by subcutaneous injection. That documents practice, not a clinically validated dose.",
      },
      {
        question: "What is a conservative KPV research protocol?",
        answer:
          "For a formal observational design, fixed 250 mcg daily and separate fixed 500 mcg daily groups over 28 days transparently test the dominant community range. No published human evidence proves either exposure is conservative, safe, or effective.",
      },
      {
        question: "Does KPV require dose escalation?",
        answer:
          "No human escalation schedule has been studied. Online titrations are not traceable to clinical trials. A fixed-dose protocol is easier to interpret than changing exposure every week.",
      },
      {
        question: "How much KPV is needed for 28 days?",
        answer:
          "At 250 mcg daily, the mathematical total is 7 mg. At 500 mcg daily, it is 14 mg. This excludes transfer loss, dead space, assay correction, and discarded material.",
      },
      {
        question: "How many units is 250 mcg of KPV?",
        answer:
          "At 2.5 mg/mL, 250 mcg is 0.10 mL or 10 U-100 units. At 5 mg/mL, it is 0.05 mL or 5 units. The answer depends entirely on final concentration.",
      },
      {
        question: "How many units is 500 mcg of KPV?",
        answer:
          "At 2.5 mg/mL, 500 mcg is 0.20 mL or 20 U-100 units. At 5 mg/mL, it is 0.10 mL or 10 units.",
      },
      {
        question: "Is one U-100 unit equal to a fixed KPV dose?",
        answer:
          "No. One unit is 0.01 mL. At 2.5 mg/mL it contains 25 mcg KPV; at 5 mg/mL it contains 50 mcg.",
      },
      {
        question: "Can a 10 mg KPV vial be prepared to 5 mg/mL?",
        answer:
          "The arithmetic is 10 mg in 2 mL. FDA reported KPV acetate dissolves at 5 mg/mL but free-base water solubility is only about 0.7 mg/mL. Form, vehicle, pH, and stability determine whether the calculation represents a viable preparation.",
      },
      {
        question: "Is oral KPV supported by research?",
        answer:
          "Oral KPV has preclinical rationale and worked in mouse intestinal-inflammation models using drinking-water exposure or specialized colon-targeted formulations. No human oral PK or efficacy study establishes capsule dosing.",
      },
      {
        question: "Is oral KPV better for gut research than injection?",
        answer:
          "Strongest mechanistic gut work involves luminal delivery and PepT1 uptake, but no human comparison has tested oral versus SC KPV.",
      },
      {
        question: "Does enteric coating solve KPV oral absorption?",
        answer:
          "That has not been demonstrated in humans. Enteric coating changes release location but does not establish intact peptide recovery or clinical effect.",
      },
      {
        question: "What is the KPV topical concentration?",
        answer:
          "A 0.1% cream or gel was nominated for review, equal to 1 mg/g. No human study establishes application amount, frequency, treated surface area, or duration.",
      },
      {
        question: "What is KPV's half-life?",
        answer:
          "No reliable human half-life has been published. Precise one- or two-hour claims should not be treated as measured human pharmacokinetics.",
      },
      {
        question: "Does KPV activate melanocortin receptors or cause tanning?",
        answer:
          "KPV lacks the central melanocortin receptor-binding sequence of alpha-MSH. No human study quantifies tanning or pigmentary effects after isolated KPV exposure.",
      },
      {
        question: "Is KPV antimicrobial?",
        answer:
          "KPV inhibited selected bacteria and fungi in laboratory experiments. It is not a proven treatment for human infection and should not replace established antimicrobial care.",
      },
      {
        question: "Does KPV heal the gut?",
        answer:
          "Mouse colitis models reported improved inflammatory endpoints. There are no human data showing remission, endoscopic healing, or replacement of standard IBD therapy.",
      },
      {
        question: "Can KPV be combined with BPC-157 or KLOW?",
        answer:
          "Community stacks exist; KLOW commonly supplies 250–500 mcg KPV per administration. No controlled study establishes efficacy, safety, interaction, or optimal ratio for the combination.",
      },
      {
        question: "What side effects does KPV cause?",
        answer:
          "Human incidence data do not exist. Route-related irritation, hypersensitivity, infection, formulation error, contamination, and unrecognized systemic effects are central uncertainties.",
      },
      {
        question: "Is a higher KPV dose more effective?",
        answer:
          "There is no human dose-response study. Wider online ranges do not prove a wide therapeutic window, and some related experimental responses are non-linear.",
      },
      {
        question: "Is K(D)PT the same as KPV?",
        answer:
          "No. K(D)PT is Lys–D-Pro–Thr with human ulcerative-colitis research. KPV is Lys–Pro–Val with no identified human administration study. Doses are not interchangeable.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "U.S. Food and Drug Administration.",
        title: "KPV-related bulk drug substances: 2026 PCAC briefing document",
        detail: "Pharmacy Compounding Advisory Committee review. 2026.",
        href: "https://www.fda.gov/media/193346/download",
      },
      {
        authors: "U.S. Food and Drug Administration.",
        title: "July 23–24, 2026 Pharmacy Compounding Advisory Committee meeting",
        detail: "Advisory committee calendar.",
        href: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
      },
      {
        authors: "PubChem.",
        title: "MSH (11–13), KPV; CID 125672",
        detail: "Compound record.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Msh-_11-13",
      },
      {
        authors: "Dalmasso G, et al.",
        title: "PepT1-mediated tripeptide KPV uptake reduces intestinal inflammation",
        detail: "Gastroenterology. 2008;134(1):166–178.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18061177/",
      },
      {
        authors: "Kannengiesser K, et al.",
        title: "Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine IBD models",
        detail: "Inflamm Bowel Dis. 2008;14(3):324–331.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18092346/",
      },
      {
        authors: "Getting SJ, Schiöth HB, Perretti M.",
        title: "Dissection of the anti-inflammatory effect of the core and C-terminal KPV alpha-MSH peptides",
        detail: "J Pharmacol Exp Ther. 2003;306(2):631–637.",
        href: "https://pubmed.ncbi.nlm.nih.gov/12750433/",
      },
      {
        authors: "Land SC.",
        title: "Inhibition of inflammation cues in human bronchial epithelial cells by melanocortin-related peptides",
        detail: "Int J Physiol Pathophysiol Pharmacol. 2012;4(2):59–73.",
        href: "https://pubmed.ncbi.nlm.nih.gov/22837805/",
      },
      {
        authors: "Laroui H, et al.",
        title: "Drug-loaded nanoparticles targeted to the colon with polysaccharide hydrogel reduce colitis",
        detail: "Gastroenterology. 2010;138(3):843–853.e2.",
        href: "https://pubmed.ncbi.nlm.nih.gov/19909746/",
      },
      {
        authors: "Xiao B, et al.",
        title: "Orally targeted delivery of tripeptide KPV via hyaluronic-acid-functionalized nanoparticles",
        detail: "Mol Ther. 2017;25(7):1628–1640.",
        href: "https://pubmed.ncbi.nlm.nih.gov/28143741/",
      },
      {
        authors: "Pawar K, et al.",
        title: "Transdermal iontophoretic delivery of KPV across microporated human skin",
        detail: "J Pharm Sci. 2017;106(7):1814–1820.",
        href: "https://pubmed.ncbi.nlm.nih.gov/28343991/",
      },
      {
        authors: "Bonfiglio V, et al.",
        title: "Effects of alpha-MSH(11–13), KPV, on corneal epithelial wound healing",
        detail: "Exp Eye Res. 2006;83(6):1366–1372.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16965771/",
      },
      {
        authors: "Cutuli M, et al.",
        title: "Antimicrobial effects of alpha-MSH peptides",
        detail: "J Leukoc Biol. 2000;67(2):233–239.",
        href: "https://pubmed.ncbi.nlm.nih.gov/10670585/",
      },
      {
        authors: "Kucharzik T, et al.",
        title: "Tripeptide K(D)PT is well tolerated in mild-to-moderate ulcerative colitis",
        detail: "Inflamm Bowel Dis. 2017;23(2):261–271. Included to clarify K(D)PT ≠ KPV.",
        href: "https://pubmed.ncbi.nlm.nih.gov/28092306/",
      },
      {
        authors: "An SH, Park JY, Lee SJ.",
        title: "KPV attenuates adipogenesis and lipid metabolism through ROS-mediated AKT/mTORC1/PPAR-gamma signaling",
        detail: "Tissue Cell. 2026;104(Pt 1):103837.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42585803/",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "KPV has **no identified human administration study** and **no established prescribing dose**. FDA's 2026 review found no human exposure, PK, effectiveness, or safety data for KPV free base or acetate by any route.",
      "This page documents community conventions, preclinical doses, reconstitution arithmetic, and an observational 28-day design framework. It is **not** a clinical dosing, self-injection, or treatment guide. Confirm KPV identity (≠ K(D)PT), form (free base vs acetate), sterility, and solubility before parenteral research.",
      "Free-base solubility (~0.7 mg/mL) may invalidate nominal recon concentrations. Seek urgent care for severe allergic, infectious, gastrointestinal, or cardiovascular symptoms.",
    ],
  },
};

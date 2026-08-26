/**
 * AHK-Cu (Ala-His-Lys copper complex / Copper Tripeptide-3) dosage guide.
 * Direct evidence: Pyo 2007 ex-vivo follicles 10⁻¹²–10⁻⁹ M stimulatory; 10⁻⁸–10⁻⁷ M inhibitory.
 * Patent mouse topical: 0.1% and 0.5% w/w. No living human AHK-Cu trial dose located.
 * ≠ GHK-Cu (Copper Tripeptide-1). No validated SC/injection dose.
 */

export const AHK_CU_COMPLEX_MW = 415.93;
export const AHK_CU_COPPER_FRACTION = 0.1528;

export function ahkCuMolarToNgPerMl(molar) {
  const m = Number(molar);
  if (!Number.isFinite(m) || m <= 0) return null;
  const ngPerMl = m * AHK_CU_COMPLEX_MW;
  return {
    molar: m,
    ngPerMl,
    pgPerMl: ngPerMl * 1000,
  };
}

export function ahkCuTopicalDose({
  percentWv,
  volumeMl = 1,
} = {}) {
  const pct = Number(percentWv);
  const vol = Number(volumeMl);
  if (!Number.isFinite(pct) || pct < 0 || !Number.isFinite(vol) || vol <= 0) {
    return null;
  }
  const mgPerMl = pct * 10;
  const appliedMg = mgPerMl * vol;
  return {
    percentWv: pct,
    mgPerMl,
    volumeMl: vol,
    appliedMg,
    copperMcg: appliedMg * AHK_CU_COPPER_FRACTION * 1000,
    molarityApprox: (mgPerMl / AHK_CU_COMPLEX_MW) * 1000,
  };
}

export const AHK_CU_IDENTITY = [
  {
    id: "ahk-cu-correct",
    label: "Verified AHK-Cu (Ala-His-Lys · Copper Tripeptide-3)",
    verdict: "Matches AHK-Cu identity on this page",
    detail:
      "L-alanyl-L-histidyl-L-lysine complexed with copper(II). Confirm sequence (Ala not Gly), peptide:copper ratio, counterion, hydration, and intact-complex assay — not HPLC area alone.",
  },
  {
    id: "ghk-cu",
    label: "GHK-Cu (Copper Tripeptide-1)",
    verdict: "Different peptide — Gly-His-Lys, not Ala-His-Lys",
    detail:
      "One-residue change alters mass, coordination, and evidence base. ALAVAX and most hair studies used GHK, not AHK-Cu. Doses are not interchangeable.",
  },
  {
    id: "ghk-free",
    label: "Copper-free AHK or mislabeled “GHK”",
    verdict: "Incomplete copper complex — not equivalent",
    detail:
      "Copper-free tripeptide lacks coordinated copper. Nominal milligram labels without stoichiometry are unreliable.",
  },
  {
    id: "combo",
    label: "AHK-Cu / GHK-Cu blend without assay",
    verdict: "Combination — no isolated AHK-Cu dose evidence",
    detail:
      "1:1 blends and stack products prevent attribution of effects or adverse events to either peptide.",
  },
  {
    id: "alavax",
    label: "ALAVAX (5-ALA + GHK)",
    verdict: "Wrong product — frequently mis-cited on AHK-Cu pages",
    detail:
      "2016 trial used glycyl-histidyl-lysine with 5-aminolevulinic acid at 50–100 mg/mL — not AHK-Cu.",
  },
];

export const AHK_CU_HUMAN_STATUS = [
  ["Standardized US prescribing dose", "None"],
  ["Living human treated with AHK-Cu in controlled research", "None located"],
  ["Best direct evidence", "Ex-vivo human follicles + dermal papilla cells (2007)"],
  ["Stimulatory lab range", "10⁻¹²–10⁻⁹ M"],
  ["Inhibitory lab concentrations", "10⁻⁸ M (−14.8%) · 10⁻⁷ M (−81.5% elongation)"],
  ["Patent mouse topical", "0.1% and 0.5% w/w AHK:Cu"],
  ["Validated human SC / injection dose", "None located"],
  ["Human PK / half-life", "Not established by any route"],
];

export const AHK_CU_MOLAR_PRESETS = [
  { id: "1e-12", label: "10⁻¹² M", molar: 1e-12, note: "Lower stimulatory edge" },
  { id: "1e-9", label: "10⁻⁹ M", molar: 1e-9, note: "Upper stimulatory · mechanistic assays" },
  { id: "1e-8", label: "10⁻⁸ M", molar: 1e-8, note: "Inhibited elongation −14.8%" },
  { id: "1e-7", label: "10⁻⁷ M", molar: 1e-7, note: "Inhibited elongation −81.5%" },
];

export const AHK_CU_PROTOCOL_PHASES = [
  {
    id: "gates",
    phase: "Preclinical gates",
    days: "Before enrollment",
    exposure: "None",
    purpose:
      "Identity, formulation, Franz penetration, dermal tox, exposure margin, bioanalytical validation",
  },
  {
    id: "part-a",
    phase: "Part A lead-in",
    days: "14 days",
    exposure: "0.01% · 0.05% · 0.10% w/v or vehicle · 1 mL daily",
    purpose: "24 participants · sentinel dosing · safety/exposure characterization",
  },
  {
    id: "part-b",
    phase: "Part B dose-ranging",
    days: "24 weeks",
    exposure: "Fixed assigned concentration · 1 mL daily to ~100 cm²",
    purpose: "120 participants · primary NV hair count at week 24",
  },
  {
    id: "follow",
    phase: "Off-treatment follow-up",
    days: "Week 28",
    exposure: "None",
    purpose: "Durability photography and safety after final application",
  },
];

export const AHK_CU_TOPICAL_PRESETS = [
  { id: "0.01", label: "0.01% w/v", percentWv: 0.01 },
  { id: "0.05", label: "0.05% w/v", percentWv: 0.05 },
  { id: "0.10", label: "0.10% w/v", percentWv: 0.1 },
  { id: "0.50", label: "0.50% w/v (patent high)", percentWv: 0.5 },
  { id: "1.00", label: "1.00% w/v (commercial)", percentWv: 1.0 },
];

export const AHK_CU_COMPARE = {
  clinical: {
    title: "Direct AHK-Cu research",
    status: "Ex-vivo / in-vitro + patent animals",
    rows: [
      ["Human follicles", "10⁻¹²–10⁻⁹ M stimulatory; 10⁻⁸–10⁻⁷ M inhibitory"],
      ["Patent mouse topical", "0.1% and 0.5% w/w · BID Mon–Fri"],
      ["Patent local ID", "0.75–1.50 mg/mouse · rat pups 0.05–0.50 mg"],
      ["Living human trial", "None for AHK-Cu itself"],
      ["Route with best rationale", "Topical scalp (proposed first human program)"],
    ],
  },
  anecdotal: {
    title: "Current anecdotal / commercial",
    status: "Conventions · no human AHK-Cu validation",
    rows: [
      ["Finished topicals", "~0.05%–1% · once/twice daily"],
      ["DIY serums", "1–2 mg/mL (0.1%–0.2% w/v)"],
      ["SC injection claims", "50 µg–2 mg · daily to 3–5× weekly"],
      ["Mis-citations", "ALAVAX GHK · Copper Tripeptide-1 cocktails"],
      ["Microneedling stacks", "No AHK-Cu monotherapy trial"],
    ],
  },
};

export const AHK_CU_CLAIMS = [
  {
    id: "standard-dose",
    claim: "There is a standard AHK-Cu human dose",
    verdict: "False",
    detail:
      "No living participant has received a controlled AHK-Cu treatment dose. Product percentages are formulation conventions.",
  },
  {
    id: "ghk-same",
    claim: "AHK-Cu and GHK-Cu share doses",
    verdict: "False",
    detail:
      "Ala-His-Lys ≠ Gly-His-Lys. ALAVAX and most copper-peptide hair trials used GHK, not AHK-Cu.",
  },
  {
    id: "alavax",
    claim: "The 2016 ALAVAX trial validates AHK-Cu dosing",
    verdict: "False",
    detail:
      "ALAVAX used 5-ALA + GHK at 50–100 mg/mL — wrong peptide and a combination product.",
  },
  {
    id: "more-is-better",
    claim: "Higher topical % always works better",
    verdict: "False",
    detail:
      "Pyo 2007 showed biphasic response — 10⁻⁸ and 10⁻⁷ M inhibited follicle elongation.",
  },
  {
    id: "sc-validated",
    claim: "SC 0.5–2 mg is a studied AHK-Cu dose",
    verdict: "False",
    detail:
      "No published human AHK-Cu injection study. Schedules resemble GHK-Cu vendor conventions.",
  },
  {
    id: "culture-match",
    claim: "Match topical % to culture molarity",
    verdict: "Invalid",
    detail:
      "0.1% is ~2.4×10⁶× the upper stimulatory culture molarity before skin barrier — penetration unknown.",
  },
  {
    id: "vegf-direct",
    claim: "Pyo et al. proved AHK-Cu increases VEGF",
    verdict: "Misattributed",
    detail:
      "VEGF/TGF-β background cited GHK-Cu fibroblast work — not measured AHK-Cu outcomes in that paper.",
  },
  {
    id: "human-trial",
    claim: "AHK-Cu regrows hair in people (proven)",
    verdict: "Unproven",
    detail:
      "Ex-vivo follicle signal justifies a controlled trial — no randomized human AHK-Cu regrowth study located.",
  },
  {
    id: "1pct-proven",
    claim: "1% topical is clinically proven",
    verdict: "False",
    detail: "Commercial concentration — not a validated AHK-Cu clinical dose.",
  },
  {
    id: "wada-ok",
    claim: "Not on WADA list means allowed",
    verdict: "Unsafe assumption",
    detail:
      "S0 and product composition may still create risk for tested athletes.",
  },
];

export const AHK_CU_EVIDENCE_LADDER = [
  {
    level: "Approved medicinal dosing",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Human clinical-trial dosing",
    exists: "None for AHK-Cu in living participants",
    confidence: "None",
  },
  {
    level: "Ex-vivo / in-vitro human tissue",
    exists: "Pyo 2007 · 10⁻¹³–10⁻⁷ M",
    confidence: "Mechanistic · not a scalp dose",
  },
  {
    level: "Patent animal dosing",
    exists: "0.1%/0.5% topical · local ID in mice/rats",
    confidence: "Preclinical · not peer-reviewed trials",
  },
  {
    level: "Anecdotal topical",
    exists: "~0.05%–1% · 8–24 weeks",
    confidence: "Very low",
  },
  {
    level: "Anecdotal injection",
    exists: "~0.05–2 mg SC · conflicting schedules",
    confidence: "Insufficient",
  },
];

export const AHK_CU_AE_SIMPLE = [
  {
    category: "Laboratory signal",
    note: "10⁻⁸ and 10⁻⁷ M inhibited ex-vivo follicle elongation — higher concentration reversed effect",
  },
  {
    category: "Topical risks (plausible)",
    note: "Erythema, pruritus, contact dermatitis, folliculitis, staining; no formal AHK-Cu AE rates",
  },
  {
    category: "Systemic copper",
    note: "Absorption unknown on intact scalp; Wilson disease and liver disease are special concerns",
  },
  {
    category: "Injection unknowns",
    note: "No human AHK-Cu injectable safety program; research vial ≠ sterile/endotoxin-controlled product",
  },
];

export const AHK_CU_AE_FULL = [
  {
    domain: "Local / topical",
    items:
      "Dermatitis, burning, scaling, folliculitis, sensitization, eye/mucosal transfer from hands",
  },
  {
    domain: "Systemic copper",
    items:
      "Nausea, GI symptoms, liver injury with excess systemic copper; ceruloplasmin/copper monitoring in research",
  },
  {
    domain: "Barrier disruption",
    items:
      "Microneedling/tattooing changes exposure and infection risk — no AHK-Cu monotherapy data",
  },
  {
    domain: "Urgent red flags",
    items:
      "Severe facial swelling, dyspnea, widespread hives, jaundice, severe abdominal pain, rapidly worsening scalp infection",
  },
];

export const AHK_CU_DOSAGE_GUIDE = {
  title: "AHK-Cu Dosage: Topical Research, Follicle Evidence, and Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Direct AHK-Cu evidence is **one peer-reviewed ex-vivo human-follicle experiment** plus **patent animal work**. **No living human** has received a validated AHK-Cu dose in controlled research. **AHK-Cu ≠ GHK-Cu.** The protocol below is a proposed **topical** investigator-run study — **not** a personal injection or microneedling plan.",
  intro: [
    "**No established human dose.** The direct peer-reviewed exposure was a **culture concentration**: **10⁻¹²–10⁻⁹ M** stimulated follicle elongation and dermal papilla MTT signal; **10⁻⁸** and **10⁻⁷ M** **inhibited** elongation.",
    "A **1996 patent** reported **0.1% and 0.5% w/w** topical AHK:Cu in mice and local intradermal doses — preclinical, not human dosage. Finished products commonly use **~0.05%–1%**; DIY often **1–2 mg/mL**. Online **SC** claims (**50 µg–2 mg**) have **no human AHK-Cu study**.",
    "The **2016 ALAVAX trial** used **GHK + 5-ALA**, not AHK-Cu. A defensible first human program is **topical and staged** (**0.01%, 0.05%, 0.10% w/v** at 1 mL/day × 24 weeks) after formulation, penetration, and tox gates.",
  ],
  glance: {
    title: "AHK-Cu dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Identity**", "Ala-His-Lys · Copper Tripeptide-3 · ≈415.93 g/mol (1:1 complex)"],
        ["**≠**", "GHK-Cu (Copper Tripeptide-1) · ALAVAX GHK trial"],
        ["**Human participants on AHK-Cu**", "None in controlled research located"],
        ["**Stimulatory lab range**", "10⁻¹²–10⁻⁹ M (ex-vivo / in-vitro)"],
        ["**Patent mouse topical**", "0.1% and 0.5% w/w"],
        ["**Common commercial topical**", "~0.05%–1% (unvalidated)"],
        ["**Validated injection dose**", "None located"],
        ["**Proposed first human study**", "0.01% · 0.05% · 0.10% w/v topical × 24 wk"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is AHK-Cu?",
      paragraphs: [
        "AHK-Cu is **L-alanyl-L-histidyl-L-lysine** (**Ala-His-Lys**, **AHK**) complexed with **copper(II)**. INCI: **Copper Tripeptide-3**. It is **not** **GHK-Cu** (Copper Tripeptide-1) — alanine replaces glycine at the N-terminus.",
        "Commonly catalogued 1:1 complex: **C15H24CuN6O4**, MW **~415.93 g/mol**, copper **~15.28%** of complex mass. Stoichiometry, counterion, hydration, and assay basis differ by supplier — a label milligram is incomplete without five qualifiers.",
      ],
      widget: "ahk-cu-identity-gate",
      tables: [
        {
          caption: "AHK-Cu vs GHK-Cu",
          headers: ["Feature", "AHK-Cu", "GHK-Cu"],
          rows: [
            ["Sequence", "Ala-His-Lys", "Gly-His-Lys"],
            ["INCI", "Copper Tripeptide-3", "Copper Tripeptide-1"],
            ["Direct AHK hair evidence", "Pyo 2007 + patent", "Different literature"],
            ["Interchangeable doses?", "No", "No"],
          ],
        },
      ],
    },
    {
      id: "status",
      title: "Current research and regulatory status",
      paragraphs: [
        "No standardized US prescribing dose or approved AHK-Cu drug regimen. No registered interventional trial of AHK-Cu in **living** human participants was located on ClinicalTrials.gov searches through August 2026.",
        "AHK-Cu appears in **cosmetic** and **research-chemical** commerce. Cosmetic INCI naming does not establish a medicine dose or androgenetic alopecia treatment claim. Patent examples document IP history — not regulatory approval.",
      ],
    },
    {
      id: "human-doses",
      title: "Human research exposures",
      paragraphs: [
        "**“Studied on human hair follicles”** is accurate only with **“outside the body.”** Pyo et al., 2007 used isolated scalp follicles and dermal papilla cells — not scalp application, PK, or clinical regrowth.",
      ],
      widget: "ahk-cu-human-status",
      tables: [
        {
          caption: "Evidence sources vs AHK-Cu dose validity",
          headers: ["Source", "Exposure", "Validates AHK-Cu human dose?"],
          rows: [
            ["Pyo 2007", "10⁻¹³–10⁻⁷ M culture", "Mechanistic only — not topical/systemic dose"],
            ["ALAVAX 2016", "GHK + 5-ALA 50–100 mg/mL", "No — wrong peptide"],
            ["Copper Tripeptide-1 cocktail 2018", "Six-active intradermal mix", "No — not AHK-Cu"],
            ["Online protocols", "Variable topical/SC", "Documents convention only"],
          ],
        },
      ],
      paragraphsAfter: [
        "At **10⁻⁹ M**, Bcl-2 rose and cleaved caspase-3/PARP fell under reported conditions — but apoptotic fraction change was **not statistically significant**. The paper did **not** measure VEGF or TGF-β1 for AHK-Cu directly.",
      ],
    },
    {
      id: "molar",
      title: "Laboratory concentration-response",
      paragraphs: [
        "The Pyo study tested seven orders of magnitude to reveal a **biphasic** curve — not monotonic “more is better.” Using **415.93 g/mol**, stimulatory **10⁻¹²–10⁻⁹ M** ≈ **0.000416–0.416 ng/mL**.",
      ],
      widget: "ahk-cu-molar-calc",
    },
    {
      id: "landscape",
      title: "Reported research dosage landscape",
      paragraphs: [
        "Patent **0.1%/0.5%** topical, cosmetic **~0.05%–1%**, DIY **1–2 mg/mL**, and SC **50 µg–2 mg** are **not** one therapeutic range. Injectable claims disagree by **10× or more**.",
      ],
      widget: "ahk-cu-clinical-vs-anecdotal",
    },
    {
      id: "topical-math",
      title: "Topical concentration and application math",
      paragraphs: [
        "**mg/mL = 10 × % w/v**. Applied mass = concentration × volume. A **0.1%** label without pump volume and treated area does not specify daily dose.",
      ],
      widget: "ahk-cu-topical-calc",
      tables: [
        {
          caption: "Common concentrations (1 mL application)",
          headers: ["% w/v", "mg/mL", "Applied mass (1 mL)", "Nominal Cu (1:1 complex)"],
          rows: [
            ["0.01%", "0.1 mg/mL", "0.1 mg", "~15.3 µg"],
            ["0.05%", "0.5 mg/mL", "0.5 mg", "~76.4 µg"],
            ["0.10%", "1 mg/mL", "1 mg", "~152.8 µg"],
            ["0.50%", "5 mg/mL", "5 mg", "~764 µg"],
            ["1.00%", "10 mg/mL", "10 mg", "~1.53 mg"],
          ],
        },
      ],
      paragraphsAfter: [
        "A **0.1%** solution is ~**2.4 million×** the upper stimulatory culture molarity **before skin contact** — that ratio does not predict follicular overdose; it shows topical % cannot be justified by direct culture matching.",
      ],
    },
    {
      id: "protocol",
      title: "Complete evidence-anchored research protocol (AHK-CU-SCALP-01)",
      paragraphs: [
        "First human program should be **topical** — follicular target, ex-vivo evidence, patent topical animal data. SC/injection exposes whole body without proof useful intact complex reaches scalp dermal papilla.",
        "**Proposed arms:** vehicle, **0.01%, 0.05%, 0.10% w/v** AHK-Cu · **1 mL once daily** to ~**100 cm²** × **24 weeks** (Part B). **0.50%** omitted initially despite patent arm because human safety/penetration absent and lab inhibition at higher concentrations.",
      ],
      widget: "ahk-cu-protocol-timeline",
      paragraphsAfter: [
        "Requires preclinical gates: identity, Franz penetration, dermal tox, exposure margin, validated bioanalysis. **Microneedling, tattooing, and injection prohibited** in the proposed design.",
      ],
    },
    {
      id: "preclinical",
      title: "Patent animal and cell research",
      paragraphs: [
        "**US5538945:** C3H mice **0.1% and 0.5% w/w** topical AHK:Cu (1.1:1) in propylene glycol/ethanol/nonoxynol-9 vehicle · ~0.1 mL BID Mon–Fri. Local ID **0.75–1.50 mg/mouse**. Rat pups **0.05–0.50 mg** ID after cytarabine.",
        "Patent vehicle and synchronized mouse hair cycle ≠ modern water-based cosmetic serum. No HED presented for local topical/ID exposures.",
      ],
    },
    {
      id: "mechanisms",
      title: "Why these concentrations were used",
      paragraphs: [
        "Pyo used a wide molar series for dose-response characterization. Patent compared **0.1% vs 0.5%** in penetration-enhancing vehicle. Daily/twice-daily cadence and **8–24 week** online durations reflect convenience and hair-cycle measurement logistics — not AHK-Cu PK.",
        "Community **SC** schedules have no demonstrated half-life, bioavailability, or dose-response rationale.",
      ],
    },
    {
      id: "benefits",
      title: "Potential benefits: what has and has not been shown",
      tables: [
        {
          caption: "Claim vs evidence",
          headers: ["Claim", "Current conclusion"],
          rows: [
            ["Stimulatory signal in human follicle culture", "Yes — biphasic curve"],
            ["Clinical hair regrowth in people", "Unproven"],
            ["Validated topical optimum %", "Unknown"],
            ["Validated injectable dose", "None"],
            ["Skin/collagen benefits from GHK literature", "Indirect only for AHK-Cu"],
          ],
        },
      ],
    },
    {
      id: "safety",
      title: "AHK-Cu safety and side effects",
      paragraphs: [
        "No formal treated-human AHK-Cu safety dataset. Lab data show **loss of stimulatory effect** at **10⁻⁸–10⁻⁷ M**. Plausible topical risks: dermatitis, irritation, staining, sensitization. Systemic copper risk depends on unknown absorption — **Wilson disease** is a special concern.",
      ],
      widget: "ahk-cu-adverse-events",
    },
    {
      id: "quality",
      title: "Product quality and storage",
      paragraphs: [
        "Require sequence, stereochemistry, peptide:copper ratio, intact-complex vs free peptide/copper, related impurities, microbial limits (topical), sterility/endotoxin (injectable). **99% HPLC purity** does not confirm complexation, correct sequence (vs GHK), or preservative stability.",
        "Storage is product-specific. Blue color suggests copper complexation but does not replace analytical release testing.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "ahk-cu-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "AHK-Cu dosage evidence ladder",
      widget: "ahk-cu-evidence-ladder",
      paragraphsAfter: [
        "AHK-Cu dosing is **not clinically established**. The next step is a **staged topical dose-ranging trial** with measured follicular exposure — not selecting an online “standard dose.”",
      ],
    },
    {
      id: "anti-doping",
      title: "Sports and anti-doping considerations",
      paragraphs: [
        "AHK-Cu is **not named** on the **2026 WADA** list reviewed — not automatic clearance. **S0** may apply. Tested athletes need written product-specific guidance; contamination and undisclosed ingredients add risk.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "AHK-Cu has one useful **human-tissue concentration-response** study and **patent animal** topical/intradermal examples. **No living human AHK-Cu dose** exists. Topical **0.05%–1%** and SC **µg–mg** schedules are extrapolations; **GHK-Cu** and **ALAVAX** citations do not validate AHK-Cu.",
        "Concentration selection matters — higher lab concentrations **inhibited** follicle elongation. Proposed first human program: **0.01% / 0.05% / 0.10% w/v** topical after full CMC and penetration gates.",
      ],
      highlight:
        "Ex-vivo human follicles ≠ clinical scalp dose. AHK-Cu ≠ GHK-Cu. Higher % or SC mg without human data is convention, not evidence.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard AHK-Cu dose?",
        answer:
          "There is no standard human dose. Finished topicals often use roughly 0.05%–1%, but that reflects products and convention rather than controlled optimization.",
      },
      {
        question: "Has AHK-Cu been tested in a human clinical trial?",
        answer:
          "No controlled study administering AHK-Cu to living participants was located. Human follicles were studied ex-vivo in 2007.",
      },
      {
        question: "What concentration was active in the Pyo study?",
        answer:
          "AHK-Cu stimulated follicle elongation and dermal papilla MTT signal from 10⁻¹² to 10⁻⁹ M. Ten⁻⁸ and 10⁻⁷ M inhibited elongation.",
      },
      {
        question: "Is AHK-Cu the same as GHK-Cu?",
        answer:
          "No. AHK-Cu is Ala-His-Lys (Copper Tripeptide-3). GHK-Cu is Gly-His-Lys (Copper Tripeptide-1). Doses are not interchangeable.",
      },
      {
        question: "Did the ALAVAX study test AHK-Cu?",
        answer:
          "No. It tested 5-aminolevulinic acid plus GHK peptide at 50 or 100 mg/mL once daily for six months.",
      },
      {
        question: "What topical percentages were used in animals?",
        answer:
          "A patent mouse experiment used 0.1% and 0.5% w/w AHK:Cu in a penetration-enhancing vehicle, applied about 0.1 mL twice daily Monday–Friday.",
      },
      {
        question: "What is the injectable AHK-Cu dose?",
        answer:
          "None is established. Online claims range from tens of micrograms to 2 mg with conflicting schedules — no published human injection study.",
      },
      {
        question: "Can I match topical % to the culture molarity?",
        answer:
          "No. A 0.1% product is millions of times more concentrated in the bottle than the stimulatory culture range; skin penetration is unknown and inefficient.",
      },
      {
        question: "Does AHK-Cu regrow hair in people?",
        answer:
          "Unproven. The ex-vivo signal supports a controlled trial, but no randomized human AHK-Cu regrowth study was located.",
      },
      {
        question: "Can a 50 mg vial be reconstituted for injection?",
        answer:
          "Adding liquid yields a concentration, not injectable suitability. Research material may lack sterility, endotoxin control, and a supported human dose.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Pyo HK et al.",
        title: "The effect of tripeptide-copper complex on human hair growth",
        detail: "Ex-vivo follicles · 10⁻¹³–10⁻⁷ M · biphasic response.",
        href: "https://pubmed.ncbi.nlm.nih.gov/17166266/",
      },
      {
        authors: "US Patent 5538945",
        title: "Peptide compositions for hair growth",
        detail: "0.1%/0.5% topical and intradermal AHK:Cu animal examples.",
        href: "https://patents.google.com/patent/US5538945A/",
      },
      {
        authors: "Lee YB et al.",
        title: "ALAVAX hair-loss trial (5-ALA + GHK)",
        detail: "GHK combination — not AHK-Cu; frequent mis-citation.",
        href: "https://pubmed.ncbi.nlm.nih.gov/27433589/",
      },
      {
        authors: "PubChem",
        title: "Copper tripeptide-3 / AHK-Cu identity",
        detail: "Chemical identity reference.",
        href: "https://pubchem.ncbi.nlm.nih.gov/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "S0 considerations; AHK-Cu not named individually.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
};

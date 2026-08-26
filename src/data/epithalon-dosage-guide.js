/**
 * Epithalon / Epitalon (AEDG) dosage guide.
 * Defined synthetic tetrapeptide Ala-Glu-Asp-Gly — ≠ Epithalamin extract.
 * Human systemic: 0.5 mg/day SL × 20 days (one small biomarker study).
 * Human SC trial dose: none located. Legacy 5–10 mg cycles likely Epithalamin-derived.
 */

export const EPITHALON_FREE_BASE_MW = 390.35;
export const EPITHALON_ACETATE_MW = 450.4;

/** Translational HED range from 2026 microgram hypothesis (µg/kg) — not a human dose */
export const EPITHALON_HED_UG_PER_KG = { low: 2.7, high: 3.3 };

export function epithalonHedFromWeightKg(weightKg) {
  const w = Number(weightKg);
  if (!Number.isFinite(w) || w <= 0) return null;
  return {
    weightKg: w,
    lowUg: w * EPITHALON_HED_UG_PER_KG.low,
    highUg: w * EPITHALON_HED_UG_PER_KG.high,
  };
}

export function epithalonAmountFromVial({
  vialMg,
  diluentMl,
  targetMg,
} = {}) {
  const vial = Number(vialMg);
  const d = Number(diluentMl);
  const target = Number(targetMg);
  if (
    !Number.isFinite(vial) ||
    vial <= 0 ||
    !Number.isFinite(d) ||
    d <= 0 ||
    !Number.isFinite(target) ||
    target <= 0
  ) {
    return null;
  }
  const concMgPerMl = vial / d;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl * 100;
  const mcgPerUnit = concMgPerMl * 10;
  const exceedsSolubilityConcern = concMgPerMl > 3.001;
  return {
    vialMg: vial,
    diluentMl: d,
    targetMg: target,
    targetMcg: target * 1000,
    concMgPerMl,
    volumeMl,
    units,
    mcgPerUnit,
    exceedsSolubilityConcern,
  };
}

export const EPITHALON_IDENTITY = [
  {
    id: "aedg-correct",
    label: "Synthetic AEDG (H-Ala-Glu-Asp-Gly-OH)",
    verdict: "Matches the Epitalon / Epithalon identity on this page",
    detail:
      "Defined tetrapeptide. FDA uses “Epitalon”; Epithalon is a common alternate spelling. Always record sequence, free base vs acetate, and active-peptide assay — not the trade name alone.",
  },
  {
    id: "epithalamin",
    label: "Epithalamin (bovine pineal extract)",
    verdict: "Different material — do NOT transfer milligram extract schedules",
    detail:
      "Epithalamin is a heterogeneous pineal extract. The common 5–10 mg/day injection cycle appears inherited from extract dosing, not dose-finding with synthetic AEDG. The 266-person longevity study used Thymalin ± Epithalamin — not synthetic Epitalon.",
  },
  {
    id: "acetate-as-base",
    label: "Treating acetate and free base as identical gross mass",
    verdict: "Incorrect without assay conversion",
    detail:
      "Free-base MW ≈ 390.35 g/mol; represented 1:1 acetate ≈ 450.40 g/mol. Counterion and water change gross vial mass. Protocol math needs independently measured active free-base equivalent.",
  },
  {
    id: "unsure-label",
    label: "Vial says only “Epithalon 10 mg”",
    verdict: "Incomplete — resolve identity, salt, and active assay before unit charts",
    detail:
      "“10 mg” may mean free-base-equivalent peptide, peptide plus acetate, gross lyophilized cake, or nominal input. Wrong identity (extract vs AEDG) is a primary product risk.",
  },
];

export const EPITHALON_HUMAN_STATUS = [
  ["Established systemic dose", "None"],
  ["Best-described human systemic exposure", "0.5 mg/day SL × 20 days (small RCT biomarker study)"],
  ["Human SC trial dose", "None located (FDA 2026 review)"],
  ["Human local ophthalmic exposure", "5 µg/eye parabulbar daily × 10 days"],
  ["2026 translational hypothesis", "100–300 µg per treatment day — not clinically validated"],
  ["Common community cycle", "5–10 mg SC/IM daily × 10–20 days (likely Epithalamin-derived)"],
  ["Proven human longevity effect", "None"],
  ["Proven human in-vivo telomere lengthening", "None established"],
  ["Formal human pharmacokinetics", "Not established"],
  ["U.S. prescribing label", "None"],
];

export const EPITHALON_PROTOCOL_PHASES = [
  {
    id: "baseline",
    phase: "Baseline",
    days: "−14 to −1",
    morning: "None",
    evening: "None",
    daily: "0 mg",
    purpose:
      "Actigraphy, sleep diary, light log, two overnight 6-SMT collections, labs",
  },
  {
    id: "exposure",
    phase: "SL exposure (Protocol A)",
    days: "1–20",
    morning: "0.25 mg SL (3 sprays)",
    evening: "0.25 mg SL (3 sprays)",
    daily: "0.5 mg",
    purpose:
      "Replication of published human systemic exposure — ≈83.3 µg/spray; no escalation",
  },
  {
    id: "followup",
    phase: "Follow-up",
    days: "21–48",
    morning: "None",
    evening: "None",
    daily: "0 mg",
    purpose:
      "28 days after final exposure — biomarker persistence, delayed AEs, no automatic repeat",
  },
];

export const EPITHALON_CUMULATIVE = [
  {
    schedule: "Human SL study",
    perDay: "0.5 mg",
    duration: "20 days",
    cumulative: "10 mg",
  },
  {
    schedule: "Proposed SC microgram pilot",
    perDay: "0.2 mg",
    duration: "10 days",
    cumulative: "2 mg",
  },
  {
    schedule: "Legacy lower cycle",
    perDay: "5 mg",
    duration: "10 days",
    cumulative: "50 mg",
  },
  {
    schedule: "Legacy common cycle",
    perDay: "5 mg",
    duration: "20 days",
    cumulative: "100 mg",
  },
  {
    schedule: "Legacy higher cycle",
    perDay: "10 mg",
    duration: "10 days",
    cumulative: "100 mg",
  },
  {
    schedule: "Legacy high cumulative",
    perDay: "10 mg",
    duration: "20 days",
    cumulative: "200 mg",
  },
];

export const EPITHALON_COMPARE = {
  clinical: {
    title: "Clinically studied synthetic AEDG",
    status: "Narrow human evidence",
    rows: [
      ["Dose", "0.5 mg/day SL; 5 µg/eye locally"],
      ["Frequency", "SL divided BID; eye once daily"],
      ["Route", "Sublingual or parabulbar"],
      ["Duration", "20 days SL; 10 days ocular"],
      ["Controlled outcome", "6-SMT / clock genes; retinal measures"],
      ["Formal SC safety", "Not established"],
    ],
  },
  hypothesis: {
    title: "2026 microgram hypothesis",
    status: "Translational — not a human result",
    rows: [
      ["Dose", "100–300 µg per treatment day"],
      ["Basis", "Animal allometry + Epithalamin potency contrast"],
      ["Route / schedule", "Not validated"],
      ["70 kg HED band", "≈189–231 µg/day (math only)"],
      ["SC pilot concept", "0.2 mg SC daily × 10 days (2 mg cumulative)"],
      ["Status", "Hypothesis-generating review"],
    ],
  },
  anecdotal: {
    title: "Community injection reports",
    status: "Anecdotal · likely extract-dose carryover",
    rows: [
      ["Dose", "Commonly 5–10 mg/day (broader 1–20+ mg)"],
      ["Frequency", "Usually once daily; sometimes intermittent"],
      ["Route", "Primarily SC; sometimes IM"],
      ["Duration", "Usually 10–20 days"],
      ["Repeat", "Often every 4–6 months — unvalidated"],
      ["Controlled outcome", "None"],
    ],
  },
};

export const EPITHALON_CLAIMS = [
  {
    id: "standard-dose",
    claim: "There is a standard Epithalon dosage",
    verdict: "False",
    detail:
      "No standard systemic dose exists. The best-described human systemic exposure is 0.5 mg/day sublingually for 20 days.",
  },
  {
    id: "same-extract",
    claim: "Epitalon and Epithalamin are the same",
    verdict: "False",
    detail:
      "Epitalon is one synthetic tetrapeptide. Epithalamin is a heterogeneous bovine-pineal extract. Milligrams are not interchangeable.",
  },
  {
    id: "longevity-266",
    claim: "The 266-person study proves Epitalon longevity benefit",
    verdict: "False",
    detail:
      "That study evaluated Thymalin and Epithalamin — not synthetic AEDG. It cannot establish an Epitalon dose or longevity effect.",
  },
  {
    id: "sleep-proven",
    claim: "The SL study proves Epitalon treats insomnia",
    verdict: "False",
    detail:
      "It measured urinary 6-SMT and clock-gene expression — not validated sleep architecture or insomnia outcomes.",
  },
  {
    id: "sc-tested",
    claim: "Subcutaneous Epitalon has been tested in humans",
    verdict: "False",
    detail:
      "FDA’s 2026 literature review found no human clinical study using the proposed SC route.",
  },
  {
    id: "mg-better",
    claim: "5–10 mg SC is the evidence-based dose",
    verdict: "Unsupported",
    detail:
      "That convention is 10–20× the studied SL daily mass and likely inherited from Epithalamin extract courses. No SC trial supports it.",
  },
  {
    id: "telomere-life",
    claim: "Cell telomere lengthening means longer human life",
    verdict: "False",
    detail:
      "Cultured-cell telomere effects do not prove in-vivo lengthening, lifespan extension, or safe cancer risk.",
  },
  {
    id: "half-life",
    claim: "Epitalon has a known human plasma half-life",
    verdict: "Unsupported",
    detail:
      "No formal human PK study has established half-life, clearance, or volume of distribution for intact AEDG.",
  },
  {
    id: "double-missed",
    claim: "Missed doses should be doubled",
    verdict: "False",
    detail:
      "Record as missed. Do not double or extend the course without a protocol amendment.",
  },
  {
    id: "wada-ok",
    claim: "Not named on WADA list means allowed in tested sport",
    verdict: "Unsafe assumption",
    detail:
      "S0 (non-approved substances) is likely applicable absent governmental therapeutic approval. Athletes need a current written determination.",
  },
];

export const EPITHALON_EVIDENCE_LADDER = [
  {
    level: "FDA-approved dosing",
    exists: "None",
    confidence: "—",
  },
  {
    level: "Human systemic research dosing",
    exists: "One small 0.5 mg/day SL biomarker study (+ related publication)",
    confidence: "Low",
  },
  {
    level: "Human local research dosing",
    exists: "Older 5 µg/eye parabulbar report",
    confidence: "Low · route-specific",
  },
  {
    level: "Human SC dosing",
    exists: "None located",
    confidence: "—",
  },
  {
    level: "Published translational dosing",
    exists: "100–300 µg per treatment day",
    confidence: "Hypothesis-generating",
  },
  {
    level: "Preclinical dosing",
    exists: "Multiple animal/cell models (often one research network)",
    confidence: "Mechanistic / model-limited",
  },
  {
    level: "Anecdotal research protocols",
    exists: "Commonly 5–10 mg/day SC or IM × 10–20 days",
    confidence: "Unvalidated for synthetic AEDG",
  },
  {
    level: "Repeat-cycle / long-term human dosing",
    exists: "Insufficient / none adequate",
    confidence: "—",
  },
];

export const EPITHALON_AE_SIMPLE = [
  {
    category: "Known incidence",
    note: "Inadequate — SL study did not report safety; no formal SC safety study",
  },
  {
    category: "Sublingual spray",
    note: "Monitor oral irritation, taste change, ulceration, mucosal swelling",
  },
  {
    category: "SC injection (community / pilot)",
    note: "Local pain, erythema, swelling, nodule, infection risk — incidence unknown",
  },
  {
    category: "Telomere / cancer uncertainty",
    note: "Telomerase/ALT biology is a theoretical concern; long-term carcinogenicity data absent",
  },
  {
    category: "Product risks",
    note: "Extract mislabeling, salt/assay errors, aggregation, sterility, unsupported concentration",
  },
];

export const EPITHALON_AE_FULL = [
  {
    domain: "Local (SL)",
    items: "Irritation, altered taste, ulceration, mucosal swelling",
  },
  {
    domain: "Local (SC)",
    items: "Pain, erythema, swelling, induration, bruising, nodule, infection",
  },
  {
    domain: "Hypersensitivity",
    items: "Rash, itching, flushing, wheeze, facial swelling — stop for systemic reactions",
  },
  {
    domain: "Neurologic / sleep",
    items:
      "Headache, dizziness, fatigue, nausea, vivid dreams, sleep-timing change, mood activation, insomnia worsening",
  },
  {
    domain: "Labs / proliferative signals",
    items:
      "Unexpected endocrine, immune, hematologic, hepatic, or renal changes; new mass or cancer diagnosis — stop and evaluate",
  },
];

export const EPITHALON_DOSAGE_GUIDE = {
  title:
    "Epithalon (Epitalon) Dosage: Research Protocol, Reconstitution, and Evidence",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Epithalon—more commonly **Epitalon** in current scientific and FDA materials—is the defined synthetic tetrapeptide **Ala-Glu-Asp-Gly (AEDG)**. It is **not** the same substance as **Epithalamin**, a heterogeneous bovine-pineal extract. No human dose-finding study has established a standard systemic Epitalon dose. This page separates studied exposures, translational hypotheses, and community protocols.",
  intro: [
    "**Established systemic dose:** none. **Best-described human systemic exposure:** **0.5 mg/day sublingually for 20 days** (three sprays twice daily) in a small randomized placebo-controlled circadian-biomarker study. **Human SC trial dose:** none located.",
    "**2026 translational hypothesis:** **100–300 µg per treatment day** — indirect animal/comparative-potency estimate, not a validated clinical range. **Common community cycle:** **5–10 mg SC or IM daily for 10–20 days** appears inherited from **Epithalamin extract** milligram schedules rather than synthetic-AEDG dose-finding.",
    "**Evidence-anchored replication:** 0.25 mg SL twice daily × 20 days (0.5 mg/day; 10 mg/course). **Exploratory SC concept:** 0.2 mg once daily × 10 days (2 mg total) as a monitored microgram-range pilot — not a treatment schedule.",
  ],
  glance: {
    title: "Epithalon dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Preferred scientific name**", "Epitalon (Epithalon = common alternate)"],
        ["**Sequence**", "Ala-Glu-Asp-Gly (AEDG) · 4 aa · ≈390.35 g/mol free base"],
        ["**≠ Epithalamin**", "Defined peptide vs bovine-pineal extract"],
        ["**Best human systemic exposure**", "0.5 mg/day SL × 20 days"],
        ["**Human SC trial dose**", "None located"],
        ["**2026 hypothesis**", "100–300 µg/treatment day (not validated)"],
        ["**Common community cycle**", "5–10 mg SC/IM × 10–20 days (likely extract-derived)"],
        ["**Proven longevity / in-vivo telomere effect**", "None established"],
        ["**Tested sport**", "Not named; WADA S0 likely applicable"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Epithalon?",
      paragraphs: [
        "Epithalon and Epitalon usually refer to the same four-amino-acid peptide, **H-Ala-Glu-Asp-Gly-OH**. FDA uses “Epitalon” and recognizes “Epithalon” as an alternate name. Because neither is a formal USAN, research records should include **sequence, molecular form, counterion, and assay basis**.",
        "Free base (C14H22N4O9, ≈390.35 g/mol, CAS 307297-39-8) and acetate (represented 1:1 ≈450.40 g/mol, CAS 307297-40-1) are **not** interchangeable without assay conversion. A vial labeled only “Epithalon 10 mg” does not disclose what 10 mg means.",
      ],
      widget: "epithalon-identity-gate",
      tables: [
        {
          caption: "Free base vs acetate",
          headers: ["Property", "Free base", "Acetate (represented 1:1)"],
          rows: [
            ["Formula", "C14H22N4O9", "C14H22N4O9·C2H4O2 (FDA representation)"],
            ["MW", "≈390.35 g/mol", "≈450.40 g/mol"],
            ["CAS", "307297-39-8", "307297-40-1"],
            [
              "Same gross mass as active free base?",
              "N/A",
              "No — counterion/water change mass",
            ],
          ],
        },
      ],
    },
    {
      id: "vs-epithalamin",
      title: "Epitalon and Epithalamin are not interchangeable",
      paragraphs: [
        "Epithalamin is an animal-tissue extract containing a mixture of pineal peptides. Epitalon is one synthetic tetrapeptide developed from study of that extract. Similar names do not make milligram doses equivalent.",
        "The frequently cited **2003** study that followed **266** older adults evaluated **Thymalin and Epithalamin**, alone or together — **not** synthetic AEDG. Its mortality findings cannot establish an Epitalon dose or longevity effect.",
      ],
      tables: [
        {
          caption: "Identity comparison",
          headers: ["Question", "Epitalon / Epithalon", "Epithalamin"],
          rows: [
            ["Material", "Defined synthetic AEDG", "Heterogeneous bovine-pineal extract"],
            ["One sequence / MW?", "Yes", "No"],
            ["Molar dose calculable?", "Yes, if assay/form known", "No single molar dose"],
            [
              "Common historical mass",
              "µg-scale in animals; 0.5 mg/day in one human SL study",
              "Often 5–10 mg per treatment day",
            ],
            ["Transfer findings directly?", "No", "No"],
          ],
        },
      ],
    },
    {
      id: "human-studies",
      title: "What has actually been studied in humans?",
      paragraphs: [
        "FDA’s 2026 literature review identified three publications administering synthetic Epitalon/AEDG to humans: two sublingual circadian-biomarker publications (likely related/overlapping) and one parabulbar retinitis-pigmentosa report.",
        "There is **no FDA-approved dosage**. The exposures below are research exposures — not a prescribing protocol.",
      ],
      widget: "epithalon-human-status",
      tables: [
        {
          caption: "Human research dosage table",
          headers: [
            "Study",
            "Dose",
            "Route",
            "Duration",
            "Main limitation",
          ],
          rows: [
            [
              "Ivko et al., 2021 circadian",
              "0.5 mg/day (3 sprays BID)",
              "Sublingual spray",
              "20 days",
              "Small; no sleep outcome; safety not reported; spray volume not reported",
            ],
            [
              "Related 2021 clock-gene paper",
              "Appears linked to same 0.5 mg/day SL",
              "Sublingual",
              "20 days",
              "Likely overlapping cohort — not independent replication",
            ],
            [
              "Khavinson et al., 2002 RP report",
              "5 µg per eye daily",
              "Parabulbar / periocular",
              "10 days",
              "Specialist local route; limited modern methods reporting",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "A biomarker increase in urinary **6-SMT** is **not** proof of insomnia treatment. Parabulbar injection is an ophthalmic procedure — never a self-administered systemic route.",
      ],
    },
    {
      id: "research-range",
      title: "Epitalon research dosage range",
      paragraphs: [
        "Direct human evidence supports only two very different exposures: **0.5 mg/day SL × 20 days** and **5 µg/eye × 10 days**. It does **not** support a general 5–10 mg subcutaneous cycle.",
      ],
      tables: [
        {
          caption: "Commonly reported research protocols",
          headers: ["Protocol", "Dose", "Route", "Duration", "Evidence basis"],
          rows: [
            [
              "Human circadian-biomarker",
              "0.5 mg/day (0.25 mg BID)",
              "Sublingual",
              "20 days",
              "Human clinical evidence (small RCT)",
            ],
            [
              "Human retinal",
              "5 µg/eye daily",
              "Parabulbar",
              "10 days",
              "Older controlled clinical report; local only",
            ],
            [
              "Microgram translational hypothesis",
              "100–300 µg/treatment day",
              "Route not validated",
              "Undefined",
              "2026 hypothesis-generating review",
            ],
            [
              "Lower community cycle",
              "1–2 mg/day",
              "Usually SC",
              "20–30 days",
              "Anecdotal",
            ],
            [
              "Legacy community cycle",
              "5–10 mg/day",
              "SC or IM",
              "10–20 days",
              "Widely repeated; likely Epithalamin-derived",
            ],
            [
              "Intermittent community",
              "10 mg days 1, 5, 9, 13, 17",
              "Usually SC",
              "17 days",
              "Anecdotal; no controlled source located",
            ],
          ],
        },
      ],
      widget: "epithalon-clinical-vs-anecdotal",
      paragraphsAfter: [
        "The common **5–10 mg** amount is **10–20×** the 0.5 mg/day human SL exposure and roughly **17–100×** the 100–300 µg translational range. These are administered-mass comparisons — not exposure equivalence (bioavailability unknown).",
      ],
    },
    {
      id: "microgram-hypothesis",
      title: "The 2026 microgram-dose hypothesis",
      paragraphs: [
        "A 2026 mini-review proposed that future human dose-finding begin around **100–300 µg per treatment day**, highlighting the Epithalamin-to-Epitalon dosing error. Inputs included ≈500-fold potency contrast in one primate melatonin model, long-term mouse work at **1 µg/mouse**, and a surface-area HED of roughly **2.7–3.3 µg/kg**.",
        "This remains a **single-author hypothesis**, not a human trial. Route, frequency, and course length are undefined. Body-surface-area scaling is weak without PK. The table below is mathematical only — **not individualized dosing**.",
      ],
      widget: "epithalon-hed-calc",
    },
    {
      id: "protocol-a",
      title: "Protocol A: 20-day sublingual replication study",
      paragraphs: [
        "The most defensible fixed protocol replicates the published human sublingual exposure — preserving route and daily mass rather than converting it into an injection schedule.",
        "**Active:** 0.25 mg SL twice daily × 20 days (0.5 mg/day; **10 mg** cumulative). **Placebo-controlled**, no escalation, no catch-up, **28-day** follow-up, **no automatic repeat cycle**.",
      ],
      widget: "epithalon-protocol-timeline",
      paragraphsAfter: [
        "Primary PD endpoint: overnight urinary **6-SMT** change. Key clinical sleep endpoint should be actigraphy-derived TST/efficiency or a validated insomnia measure — do not declare “circadian restoration” from one urine sample.",
      ],
    },
    {
      id: "protocol-b",
      title: "Protocol B: exploratory 0.2 mg SC sentinel cohort",
      paragraphs: [
        "No human SC dose has been established. A **formal dose-finding pilot concept** uses **0.2 mg (200 µg) SC once daily × 10 days** (cumulative **2.0 mg**) with placebo control, PK sampling, and independent safety review — approximating the 70 kg HED band from the 2026 review.",
        "Prefer a purpose-made **0.2 mg single-dose** presentation. Do not improvise from an unidentified high-mass vial. This does **not** replace Protocol A and is **not** a treatment schedule. No evidence-based SC escalation ladder exists.",
      ],
    },
    {
      id: "recon",
      title: "Reconstitution and concentration math",
      paragraphs: [
        "Reconstitution math shows volume — not solubility, sterility, stability, or suitability for injection. FDA’s 2026 review found limited aqueous-solubility data and noted free-base injection may be difficult to prepare at **~3 mg/mL** in water.",
        "For Protocol B, cleanest math uses a **0.2 mg** single-dose vial (e.g., 0.20 mL at 1.0 mg/mL = 20 U-100 volume units). A **10 mg** community vial is poorly suited to a 0.2 mg research question.",
      ],
      widget: "epithalon-recon-calc",
      tables: [
        {
          caption: "Cumulative-exposure comparison",
          headers: ["Schedule", "Per-day", "Duration", "Cumulative"],
          rows: [
            ["Human SL study", "0.5 mg", "20 days", "10 mg"],
            ["Proposed SC microgram pilot", "0.2 mg", "10 days", "2 mg"],
            ["Legacy lower cycle", "5 mg", "10 days", "50 mg"],
            ["Legacy common cycle", "5 mg", "20 days", "100 mg"],
            ["Legacy higher cycle", "10 mg", "10 days", "100 mg"],
            ["Legacy high cumulative", "10 mg", "20 days", "200 mg"],
          ],
        },
      ],
      paragraphsAfter: [
        "The highest common legacy cycle cumulative mass is **100×** the proposed 2 mg SC pilot. No human study establishes that larger cumulative exposure is more effective or acceptably safe. U-100 “units” are volume markings only.",
      ],
      widgetAfter: "epithalon-cumulative",
    },
    {
      id: "preclinical",
      title: "Preclinical research dosages",
      paragraphs: [
        "Long-term SHR mice received **1 µg/mouse SC** on 5 consecutive days each month. Epitalon did **not** significantly change mean lifespan; maximum lifespan reportedly increased ~12%, with model-specific tumor findings. Rhesus work used ~**10 µg/animal/day IM × 10 days** for melatonin/cortisol rhythms.",
        "Animal and cell exposures are **not** human dosage instructions. Cultured-cell telomere/telomerase findings (including 2025 ALT activity in some cancer lines) do not prove human longevity benefit or cancer safety.",
      ],
    },
    {
      id: "mechanisms",
      title: "Mechanisms under investigation",
      paragraphs: [
        "**Telomerase / telomeres:** cell-culture work reports hTERT/telomerase upregulation and telomere lengthening; 2025 work also found ALT-associated extension in some breast-cancer lines — a reason for uncertainty, not a cancer-treatment claim.",
        "**Circadian / pineal:** old macaques showed melatonin/cortisol rhythm effects; human SL study increased urinary 6-SMT. Isolated rat pineal superfusion did not show direct acute melatonin release at 1–100 µM.",
        "**Gene-expression / epigenetic hypotheses** and antioxidant/retinal/immune findings remain mechanistic and often network-concentrated.",
      ],
    },
    {
      id: "timeline",
      title: "Expected results and timeline",
      tables: [
        {
          caption: "What research can measure vs what cannot be concluded",
          headers: ["Time window", "Measurable", "Cannot conclude"],
          rows: [
            [
              "First dose to day 3",
              "Acute tolerability; exploratory PK",
              "Longevity, telomere extension, sleep treatment",
            ],
            [
              "Days 7–10",
              "Early 6-SMT, cortisol, actigraphy, AEs",
              "Durable circadian “reset”",
            ],
            [
              "Day 20",
              "SL biomarker replication; prospectively measured sleep",
              "Disease prevention or biological-age reversal",
            ],
            [
              "Weeks 4–7 after",
              "Persistence/reversal; delayed AEs",
              "Multi-year benefit or safety",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Subjective vivid dreams, energy, or “recovery” need blinded comparison — expectancy and concurrent supplements confound pre/post reports.",
      ],
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "Human safety reporting is inadequate. FDA found no clinical study designed to assess Epitalon safety, particularly by the SC route. No formal MTD, human SC PK/immunogenicity, established AE incidence, or validated repeat-cycle safety.",
        "Telomerase activation is not automatically beneficial. Conservative research excludes active/recent cancer and unexplained masses unless oncology-directed.",
      ],
      widget: "epithalon-adverse-events",
    },
    {
      id: "routes",
      title: "Route of administration",
      tables: [
        {
          caption: "Route evidence",
          headers: ["Route", "Evidence", "Main caveat"],
          rows: [
            [
              "Sublingual",
              "Clearest systemic human dose (0.5 mg/day)",
              "Bioavailability / swallowed fraction not reported",
            ],
            [
              "Parabulbar",
              "Older retinal report (5 µg/eye)",
              "Specialist periocular — not self-directed systemic use",
            ],
            [
              "Subcutaneous",
              "Dominates community use; FDA nomination route",
              "No human SC efficacy/safety study located",
            ],
            [
              "Intramuscular",
              "Rhesus macaque work; Epithalamin historical IM",
              "Does not establish general human Epitalon IM protocol",
            ],
            [
              "Oral / intranasal",
              "Experimental reports outside controlled human PK",
              "No route-equivalence conversion factor",
            ],
          ],
        },
      ],
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "FDA cited lyophilized free-base stability ~3 weeks at room temperature, with longer-term storage desiccated below **−18°C**, and reconstituted free-base roughly **2–7 days at 4°C** — not a universal finished-product label. Do not infer a 28-day refrigerated period from bacteriostatic water alone.",
        "Use lot-specific stability data, prefer single-dose presentations, and discard after unsupported excursions, appearance changes, or missing identity/volume/date records.",
      ],
    },
    {
      id: "combinations",
      title: "Combining Epitalon with other peptides",
      paragraphs: [
        "No controlled study has established safety, dose, or synergy with GH secretagogues, thymic peptides, BPC-157, TB-500, GHK-Cu, NAD-related interventions, exosomes, or plasma exchange. Factorial arms are required — not a pre/post “stack” comparison.",
      ],
    },
    {
      id: "us-status",
      title: "U.S. status as of August 2026",
      paragraphs: [
        "There is no U.S. prescribing label. FDA evaluated Epitalon free base and acetate for compounded insomnia use at the July 2026 PCAC meeting. Staff recommended against 503A Bulks List inclusion; the advisory committee then voted narrowly in favor of recommending inclusion.",
        "The committee vote is **nonbinding** and is not drug approval or an efficacy finding. Final list change requires FDA action.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "epithalon-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "epithalon-evidence-ladder",
      paragraphsAfter: [
        "Epitalon dosing is **poorly established**. A small human study provides a reproducible 0.5 mg/day SL research exposure, but no study defines a systemic injection dose, dose-response curve, MTD, or repeat interval.",
      ],
    },
    {
      id: "anti-doping",
      title: "WADA and tested sport",
      paragraphs: [
        "Epitalon/Epithalon was not found by name on the **2026 WADA Prohibited List**. WADA **S0** prohibits pharmacological substances lacking current governmental therapeutic approval. Tested athletes should treat Epitalon as **likely prohibited under S0** unless their authority provides a current written determination.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Epithalon/Epitalon is a defined **AEDG** tetrapeptide with intriguing cell and animal research, but human dosing evidence is narrow. The clearest systemic human exposure is **0.5 mg/day SL × 20 days**; the other traceable human dose is local **5 µg/eye**. Neither validates community subcutaneous use.",
        "The familiar **5–10 mg** injection cycle appears to inherit **Epithalamin** extract dosing. A 2026 review proposed formal dose-finding around **100–300 µg/treatment day**, but that remains indirect. A defensible program first replicates the SL study and, if evaluating SC, uses a monitored microgram-range sentinel cohort with PK, placebo, qualified single-dose material, and no automatic repeat cycle.",
      ],
      highlight:
        "Confirm AEDG identity (≠ Epithalamin), free base vs acetate assay, and do not treat legacy milligram injection cycles as synthetic-Epitalon evidence.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Is it called Epithalon or Epitalon?",
        answer:
          "Both spellings usually refer to AEDG. Epitalon is the spelling used in FDA’s 2026 review; Epithalon is a common alternate transliteration.",
      },
      {
        question: "Is Epitalon the same as Epithalamin?",
        answer:
          "No. Epitalon is one defined synthetic tetrapeptide. Epithalamin is a heterogeneous bovine-pineal extract.",
      },
      {
        question: "What is the standard Epithalon dosage?",
        answer:
          "No standard systemic dose exists. The best-described human systemic exposure is 0.5 mg/day sublingually for 20 days.",
      },
      {
        question: "Did the SL study prove better sleep?",
        answer:
          "No. It measured urinary melatonin metabolite and clock-gene expression, not validated insomnia outcomes or sleep architecture.",
      },
      {
        question: "Has subcutaneous Epitalon been tested in humans?",
        answer:
          "FDA’s 2026 literature review found no human clinical study using the proposed SC route.",
      },
      {
        question: "What is the 100–300 microgram range?",
        answer:
          "A 2026 translational hypothesis based on animal allometry and Epithalamin comparisons. It has not been validated in human dose-finding.",
      },
      {
        question: "Where did the 5–10 mg protocol come from?",
        answer:
          "The best-supported explanation is that milligram Epithalamin extract courses were carried over to purified synthetic Epitalon without a dose bridge.",
      },
      {
        question: "Does Epitalon lengthen human telomeres in vivo?",
        answer:
          "It has lengthened telomeres in cultured human cells. That does not prove telomere lengthening in living people.",
      },
      {
        question: "Did Epitalon extend mouse lifespan?",
        answer:
          "The 2003 SHR-mouse study did not increase mean lifespan. It increased maximum lifespan and lifespan of the longest-lived 10% in that model.",
      },
      {
        question: "Can a 10 mg vial be reconstituted with 1 mL?",
        answer:
          "Arithmetic gives 10 mg/mL, but FDA reported limited free-base solubility and difficulty even around 3 mg/mL in water. Mathematical concentration is not formulation support.",
      },
      {
        question: "How much is 0.2 mg from a 2 mg/2 mL preparation?",
        answer:
          "Concentration is 1 mg/mL. A 0.2 mg amount is 0.2 mL, or 20 U-100 volume units.",
      },
      {
        question: "Should the cycle repeat every four months?",
        answer:
          "Not automatically. That interval is a community convention, not a validated synthetic-Epitalon schedule.",
      },
      {
        question: "Is Epitalon allowed in tested sport?",
        answer:
          "It is not named individually in the 2026 list, but WADA S0 is likely applicable because it lacks current governmental therapeutic approval.",
      },
      {
        question: "Should a missed dose be doubled?",
        answer:
          "No. Record it as missed rather than changing exposure.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "FDA",
        title: "Epitalon-Related Bulk Drug Substances: July 2026 PCAC evaluation",
        detail: "FDA briefing document.",
        href: "https://www.fda.gov/media/193345/download",
      },
      {
        authors: "Ivko OM et al.",
        title: "AEDG peptide regulation of human circadian rhythm genes",
        detail: "Adv Gerontol 2021 — 0.5 mg/day SL × 20 days biomarker study.",
        href: "https://link.springer.com/article/10.1134/S2079057021010380",
      },
      {
        authors: "Khavinson V et al.",
        title: "Epitalon improves eye retina condition in retinitis pigmentosa",
        detail: "Neuro Endocrinol Lett 2002 — 5 µg/eye parabulbar context.",
        href: "https://pubmed.ncbi.nlm.nih.gov/12195242/",
      },
      {
        authors: "Jung CH",
        title: "The microgram hypothesis: translational dosing error in Epitalon research",
        detail: "Aging Pathobiol Ther 2026 — 100–300 µg/day hypothesis.",
        href: "https://www.antpublisher.com/index.php/APT/article/view/1027/1356",
      },
      {
        authors: "Anisimov VN et al.",
        title: "Epitalon on biomarkers of aging and lifespan in SHR mice",
        detail: "Biogerontology 2003 — 1 µg/mouse monthly courses.",
        href: "https://pubmed.ncbi.nlm.nih.gov/14501183/",
      },
      {
        authors: "Al-Dulaimi S et al.",
        title: "Epitalon increases telomere length in human cell lines",
        detail: "Biogerontology 2025 — telomerase and ALT findings.",
        href: "https://pubmed.ncbi.nlm.nih.gov/40908429/",
      },
      {
        authors: "Khavinson VKh, Morozov VG",
        title: "Peptides of pineal gland and thymus prolong human life",
        detail: "2003 — Epithalamin ± Thymalin, not synthetic Epitalon.",
        href: "https://pubmed.ncbi.nlm.nih.gov/14523363/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "Not named individually; S0 likely relevant.",
        href: "https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list",
      },
    ],
  },
};

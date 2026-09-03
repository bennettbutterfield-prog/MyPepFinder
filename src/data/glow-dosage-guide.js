/**
 * GLOW blend dosage guide (GHK-Cu + BPC-157 + TB-500).
 * Exact-combination human trial: none identified. Protocols document community conventions.
 */

export const GLOW_COMPOSITION = [
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    mg: 50,
    pct: 71.43,
    theme: "Copper signaling, collagen, ECM, wound biology",
  },
  {
    id: "bpc-157",
    name: "BPC-157",
    mg: 10,
    pct: 14.29,
    theme: "Angiogenesis, NO signaling, tendon and GI models",
  },
  {
    id: "tb-500",
    name: "TB-500",
    mg: 10,
    pct: 14.29,
    theme: "Actin dynamics, migration, angiogenesis, wound models",
  },
];

/** Mass fractions for authentic 50/10/10 vials (70 mg) */
export const GLOW_FRACTIONS = {
  ghkCu: 50 / 70,
  bpc: 10 / 70,
  tb: 10 / 70,
};

export function glowComponentsFromTotalMg(totalMg) {
  const t = Number(totalMg);
  if (!Number.isFinite(t) || t <= 0) return null;
  return {
    totalMg: t,
    ghkCuMg: t * GLOW_FRACTIONS.ghkCu,
    bpcMcg: t * GLOW_FRACTIONS.bpc * 1000,
    tbMcg: t * GLOW_FRACTIONS.tb * 1000,
  };
}

export const GLOW_IDENTITY = [
  {
    id: "tb-fragment",
    label: "TB-500 = Ac-LKKTETQ",
    verdict: "Matches the usual GLOW fragment identity",
    detail:
      "Analytical studies of products sold as TB-500 identified Ac-LKKTETQ (residues 17–23). Full-length 43-aa thymosin beta-4 clinical doses cannot share this dosage table.",
  },
  {
    id: "tb4-full",
    label: "Label claims full-length TB4",
    verdict: "Different molecule — do not reuse fragment unit charts",
    detail:
      "Some GLOW suppliers claim full-length TB4 while still using the TB-500 name. Certificates should state exact sequence, acetylation, mass, and fragment vs full-length protein.",
  },
  {
    id: "ghk-cu",
    label: "Confirmed GHK-Cu complex",
    verdict: "Required for authentic 50 mg copper-complex allocation",
    detail:
      "Confirm peptide identity and copper complexation. Stated mass should clarify whether it refers to GHK-Cu as a complex, peptide alone, or formulation with separately added copper.",
  },
  {
    id: "unsure",
    label: "Only the trade name “GLOW”",
    verdict: "Incomplete — confirm 50/10/10 and vial total",
    detail:
      "“GLOW” is a market name. Products with 35 mg, 42 mg, and other totals also exist. A unit chart is valid only for the vial composition printed above it.",
  },
];

export const GLOW_COMBO_STATUS = [
  ["Pharmacokinetics", "None identified"],
  ["Subcutaneous bioavailability", "None identified"],
  ["Stability of all three peptides in one solution", "No published study identified"],
  ["Dose-response", "None identified"],
  ["Ratio comparison", "None identified"],
  ["Controlled efficacy trial", "None identified"],
  ["Long-term safety study", "None identified"],
  ["Maximum tolerated dose", "Not established"],
];

export const GLOW_PROTOCOL_PHASES = [
  {
    id: "lead-in",
    phase: "Optional lead-in",
    days: "1–3",
    schedule: "5 units once daily (3 mL recon)",
    totalMg: 1.17,
    purpose: "Anecdotal tolerability convention — not a proven safety requirement",
  },
  {
    id: "standard",
    phase: "Standard daily",
    days: "1–28",
    schedule: "10 units once daily (3 mL recon)",
    totalMg: 2.33,
    purpose: "Most repeated modern complete short protocol; ~65.3 mg across 28 full-dose days",
  },
  {
    id: "washout",
    phase: "Washout",
    days: "2–4 weeks",
    schedule: "None",
    totalMg: 0,
    purpose: "Determine whether measured changes persist, reverse, or continue",
  },
];

export const GLOW_TWELVE_WEEK = [
  {
    id: "activation",
    phase: "Activation",
    weeks: "1–4",
    freq: "Daily",
    totalMg: 2.8,
    phaseTotal: "78.4 mg",
  },
  {
    id: "remodeling",
    phase: "Remodeling",
    weeks: "5–8",
    freq: "5× weekly",
    totalMg: 2.8,
    phaseTotal: "56 mg",
  },
  {
    id: "maintenance",
    phase: "Maintenance",
    weeks: "9–12",
    freq: "3× weekly",
    totalMg: 2.8,
    phaseTotal: "33.6 mg",
  },
];

export const GLOW_COMPARE = {
  clinical: {
    title: "Exact GLOW clinical research",
    status: "None established",
    rows: [
      ["Total dose", "None established"],
      ["Ratio", "None established"],
      ["Frequency", "None established"],
      ["Route", "None established"],
      ["Duration", "None established"],
      ["Escalation", "None established"],
      ["Safety", "No exact-combination study"],
    ],
  },
  anecdotal: {
    title: "Community GLOW protocols",
    status: "Anecdotal conventions",
    rows: [
      ["Total dose", "Usually ≈2.33–3.5 mg per administration"],
      ["Ratio", "Usually 5:1:1 by mass"],
      ["Frequency", "Three times weekly to daily"],
      ["Route", "Subcutaneous"],
      ["Duration", "4–12 weeks"],
      ["Escalation", "Low lead-in, fixed dose, or loading/maintenance"],
      ["Safety", "Uncontrolled reports and component assumptions"],
    ],
  },
};

export const GLOW_EVIDENCE_LADDER = [
  {
    level: "Standardized clinical dosage",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Exact-combination human trial",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Exact-combination animal study",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Component human research",
    exists: "Topical GHK-Cu, full-length Tβ4, very limited BPC-157",
    confidence: "Low–moderate for narrow contexts; not transferable",
  },
  {
    level: "Component preclinical research",
    exists: "Substantial but uneven cell/animal literature",
    confidence: "Moderate for mechanisms; low for human dosing",
  },
  {
    level: "Four-week daily community protocol",
    exists: "Approximately 2.33 mg/day",
    confidence: "Low",
  },
  {
    level: "Longer 12-week protocols",
    exists: "≈1.75–3.5 mg with changing frequency",
    confidence: "Low",
  },
];

export const GLOW_AE_SIMPLE = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No blend safety trial denominator",
  },
  {
    topic: "Community mentions",
    status: "Unquantified",
    note: "Injection-site reaction, headache, fatigue, flushing",
  },
  {
    topic: "Copper exposure",
    status: "Context-dependent",
    note: "GHK-Cu >70% of blend by mass",
  },
  {
    topic: "Fixed-ratio attribution",
    status: "Limited control",
    note: "Cannot reduce one peptide without reducing all",
  },
];

export const GLOW_AE_FULL = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No blend trial",
    context:
      "Community reports mention stinging, redness, bruising, headache, fatigue, nausea, flushing, flu-like feelings — frequency/causality unknown.",
  },
  {
    topic: "Copper exposure",
    status: "Assay-dependent",
    note: "Elemental copper depends on verified form",
    context:
      "Extra caution in copper-metabolism disorders, significant liver disease, or with other copper products.",
  },
  {
    topic: "Angiogenesis / abnormal growth",
    status: "Class concern",
    note: "Repair / vascular signaling overlap",
    context:
      "Active or recent malignancy is commonly treated as an exclusion; exact GLOW risk unknown.",
  },
  {
    topic: "Immune / product quality",
    status: "Elevated for three-component vial",
    note: "Identity, potency, Cu complexation, sterility, endotoxin",
    context:
      "One overall purity percentage is inadequate; analytics should resolve every component.",
  },
  {
    topic: "Fixed-ratio limitations",
    status: "Experimental-control tradeoff",
    note: "Convenience vs attribution",
    context:
      "Reducing GHK-Cu also reduces BPC-157 and TB-500. Causal attribution after an adverse effect is difficult.",
  },
  {
    topic: "Anti-doping",
    status: "Prohibited components",
    note: "BPC-157 and Tβ4 derivatives",
    context: "GLOW is incompatible with tested sport.",
  },
];

export const GLOW_DOSAGE_GUIDE = {
  title: "GLOW Peptide Dosage: GHK-Cu + TB-500 + BPC-157 Research Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** GLOW is a **fixed-ratio commercial blend** rather than a clinically studied combination. The protocols below describe research-community conventions and calculate the amount of each component; they are **not** established clinical dosing guidelines. **No controlled human trial of the exact three-peptide blend was identified.**",
  intro: [
    "The standard GLOW vial contains **70 mg total peptide:** **50 mg GHK-Cu**, **10 mg BPC-157**, and **10 mg TB-500** (**5:1:1** by mass).",
    "The most common complete short protocol is approximately **2.33 mg once daily for four weeks**. With **3 mL** added to a 70 mg vial, that equals **10 U-100 units** and delivers about **1.67 mg GHK-Cu** plus **333 mcg** each of BPC-157 and TB-500.",
    "Most supporting research concerns the components individually—often in animals or by routes that differ from subcutaneous GLOW use. Confirm that “TB-500” means `Ac-LKKTETQ`, not full-length thymosin beta-4.",
  ],
  glance: {
    title: "GLOW dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        [
          "**Standard vial**",
          "70 mg total: GHK-Cu 50 mg + BPC-157 10 mg + TB-500 10 mg",
        ],
        ["**Fixed ratio by mass**", "5:1:1"],
        ["**Most common daily amount**", "Approximately 2.33 mg total blend"],
        [
          "**Per-component at 2.33 mg**",
          "GHK-Cu 1.67 mg; BPC-157 333 mcg; TB-500 333 mcg",
        ],
        ["**Common higher amount**", "3.5 mg total blend"],
        [
          "**Per-component at 3.5 mg**",
          "GHK-Cu 2.5 mg; BPC-157 500 mcg; TB-500 500 mcg",
        ],
        ["**Common route**", "Subcutaneous"],
        ["**Reported duration**", "4–8 weeks; some protocols extend to 12 weeks"],
        ["**Exact-combination human trial**", "None identified"],
        [
          "**Evidence quality**",
          "Anecdotal for the blend; mixed preclinical / limited human for components",
        ],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is the GLOW peptide blend?",
      paragraphs: [
        "GLOW is the informal name for a three-peptide blend: **GHK-Cu** (copper complex of glycyl-L-histidyl-L-lysine), **BPC-157** (synthetic 15-aa peptide), and **TB-500** (generally N-acetylated thymosin beta-4 17–23, `Ac-LKKTETQ`).",
        "It is promoted around a broad “repair plus appearance” concept. GLOW is **not** one new peptide—three separate compounds lyophilized in a single vial, each with its own molecular weight, mechanism, stability, pharmacokinetics, and evidence base.",
      ],
      widget: "glow-composition",
    },
    {
      id: "composition",
      title: "Standard GLOW composition",
      paragraphs: [
        "The **70 mg** formula is the dominant convention, but “GLOW” is a market name rather than a standardized formulation. Products with **35 mg**, **42 mg**, and other totals also exist, sometimes with different ratios. A unit chart is valid only for the vial composition printed above it.",
      ],
      tables: [
        {
          caption: "70 mg standard vial",
          headers: [
            "Component",
            "Amount",
            "Share of total mass",
            "Primary research theme",
          ],
          rows: [
            [
              "**GHK-Cu**",
              "50 mg",
              "71.43%",
              "Copper signaling, collagen, ECM, wound biology",
            ],
            [
              "**BPC-157**",
              "10 mg",
              "14.29%",
              "Angiogenesis, NO signaling, tendon and GI models",
            ],
            [
              "**TB-500**",
              "10 mg",
              "14.29%",
              "Actin dynamics, migration, angiogenesis, wound models",
            ],
            ["**Total**", "**70 mg**", "**100%**", "Multi-pathway repair hypothesis"],
          ],
        },
      ],
    },
    {
      id: "identity",
      title: "Identity checks before comparing GLOW protocols",
      paragraphs: [
        "**TB-500 versus full-length thymosin beta-4:** Products sold as TB-500 have been identified as `Ac-LKKTETQ`. Some GLOW suppliers instead claim full-length TB4 while still using the TB-500 name—these should not share a dosage table.",
        "**GHK versus GHK-Cu:** Confirm peptide identity and copper complexation, and whether stated mass refers to the complex, peptide alone, or separately added copper.",
        "**BPC-157 sequence and salt:** Document free base vs acetate, peptide content, and whether stated mass includes salt, water, or excipient.",
      ],
      widget: "glow-identity-gate",
    },
    {
      id: "regulatory",
      title: "Current research and compounding status",
      paragraphs: [
        "GLOW itself has not been evaluated as a fixed combination. In July 2026, an FDA advisory committee narrowly recommended that BPC-157 and TB-500-related bulk substances be considered for the 503A compounding list. The votes were **advisory** and did **not** assess the GLOW ratio, dose, stability, or outcomes. GHK-Cu was not part of that meeting.",
      ],
      highlight: "There is no US prescribing information establishing a GLOW dose.",
    },
    {
      id: "exact-combo",
      title: "Has the exact GLOW blend been studied?",
      paragraphs: [
        "No controlled human or animal dose-ranging study of the exact 50/10/10 GLOW blend was identified. The blend therefore cannot be described as synergistic in the clinical sense. Its rationale is a mechanistic hypothesis assembled from separate component studies.",
      ],
      widget: "glow-combo-status",
    },
    {
      id: "component-human",
      title: "Human research on the individual components",
      tables: [
        {
          caption: "Component human research vs relevance to GLOW",
          headers: [
            "Component or related molecule",
            "Human research",
            "Route and exposure",
            "Relevance to GLOW",
          ],
          rows: [
            [
              "GHK-Cu",
              "Randomized topical research in diabetic neuropathic ulcers; smaller topical/cosmetic studies",
              "Topical",
              "Supports skin/wound research — not systemic injection",
            ],
            [
              "BPC-157",
              "Two-person IV pilot (10 then 20 mg); small uncontrolled IA/intravesical reports",
              "IV, IA, intravesical",
              "Limited observations; no validation of daily SC microgram dosing",
            ],
            [
              "Full-length thymosin beta-4",
              "IV Phase 1 and topical wound/ocular studies",
              "IV and topical",
              "Different 43-aa molecule — not direct evidence for fragment TB-500",
            ],
            [
              "TB-500 fragment",
              "No controlled human exposure study identified by FDA",
              "Not established",
              "No human dose or safety range",
            ],
            [
              "Exact GLOW blend",
              "None identified",
              "None",
              "No direct evidence",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Topical GHK-Cu does not define systemic copper-peptide exposure. Full-length Tβ4 contains functional regions not present in the seven-residue fragment. Small BPC-157 reports used different routes, populations, and amounts. Combining those findings cannot reconstruct a trial of subcutaneous GLOW.",
      ],
    },
    {
      id: "research-dosage",
      title: "GLOW research dosage",
      paragraphs: [
        "Most modern GLOW protocols cluster around **2.3–3.5 mg of total blend per administration**—driven by convenient dilutions and placing BPC-157 and TB-500 near **300–500 mcg** each while delivering approximately **1.7–2.5 mg GHK-Cu**.",
      ],
      tables: [
        {
          caption: "Commonly reported GLOW protocols (anecdotal)",
          headers: [
            "Research protocol",
            "Total blend",
            "Frequency",
            "Route",
            "Duration",
            "Evidence basis",
          ],
          rows: [
            [
              "Low lead-in",
              "≈1.17–1.75 mg",
              "Once daily",
              "SC",
              "Often 1 week",
              "Community tolerability convention",
            ],
            [
              "Standard daily",
              "≈2.33 mg",
              "Once daily",
              "SC",
              "4 weeks or 4–6 weeks",
              "Most repeated modern protocol",
            ],
            [
              "Five-on / two-off",
              "3.5 mg",
              "Five times weekly",
              "SC",
              "4–8 weeks",
              "Higher per-administration community convention",
            ],
            [
              "Fixed-dose frequency taper",
              "2.8 mg",
              "Daily → 5× → 3× weekly",
              "SC",
              "12 weeks",
              "Longer community protocol",
            ],
            [
              "Loading and maintenance",
              "3.5 mg then 1.75–3.5 mg",
              "Phase dependent",
              "SC",
              "8–12 weeks",
              "Anecdotal loading/maintenance convention",
            ],
          ],
        },
      ],
      widgetAfter: "glow-component-breakdown",
    },
    {
      id: "complete-protocol",
      title: "Complete reported GLOW research protocol",
      paragraphs: [
        "The following **four-week** protocol is the simplest and most consistently repeated complete schedule. One standard vial supplies the nominal cycle. It assumes a **70 mg vial with 3 mL diluent** (≈23.33 mg/mL); **10 units = 0.10 mL**.",
        "The standard protocol is **fixed-dose** after an optional lead-in. Some sources escalate 5 → 10 → 15 units, but no GLOW dose-response study supports automatic escalation.",
      ],
      widget: "glow-protocol-timeline",
      tables: [
        {
          caption: "Component exposure across 28 full-dose days",
          headers: ["Component", "Daily amount", "28-day total"],
          rows: [
            ["GHK-Cu", "≈1.67 mg", "≈46.67 mg"],
            ["BPC-157", "≈333 mcg", "≈9.33 mg"],
            ["TB-500", "≈333 mcg", "≈9.33 mg"],
            ["**Total blend**", "**≈2.33 mg**", "**≈65.33 mg**"],
          ],
        },
        {
          caption: "Measurement schedule",
          headers: ["Time point", "Research measurements"],
          rows: [
            [
              "Baseline",
              "Symptoms, function, photos, vitals, contextual variables; analytics",
            ],
            ["End of week 1", "Early tolerability and injection-site assessment"],
            ["End of week 2", "Repeat predefined outcome measures"],
            ["End of week 4", "Final on-cycle assessment"],
            [
              "End of washout",
              "Determine whether changes persist, reverse, or continue",
            ],
          ],
        },
      ],
      notes: [
        "**Early-stop criteria (examples):** severe/progressive injection-site reaction; allergic symptoms; persistent nausea, dizziness, headache, fatigue, or flushing; marked BP/HR change; infection signs; neurological symptoms; unexpected worsening of the target condition. Urgent symptoms require medical evaluation—not a dilution change.",
      ],
    },
    {
      id: "twelve-week",
      title: "Alternative 12-week fixed-dose frequency-taper protocol",
      paragraphs: [
        "This longer protocol keeps the amount per administration constant at **2.8 mg** while reducing frequency. It assumes **2.5 mL** diluent (28 mg/mL); **10 units delivers 2.8 mg**. Nominal cycle totals **168 mg** (≈2.4 vials → three 70 mg vials before handling loss). No study shows superiority over a shorter daily cycle.",
      ],
      widget: "glow-twelve-week",
      tables: [
        {
          caption: "Cumulative exposure across the 12-week protocol",
          headers: [
            "Component",
            "Activation",
            "Remodeling",
            "Maintenance",
            "Full cycle",
          ],
          rows: [
            ["GHK-Cu", "56 mg", "40 mg", "24 mg", "120 mg"],
            ["BPC-157", "11.2 mg", "8 mg", "4.8 mg", "24 mg"],
            ["TB-500", "11.2 mg", "8 mg", "4.8 mg", "24 mg"],
            ["**Total blend**", "**78.4 mg**", "**56 mg**", "**33.6 mg**", "**168 mg**"],
          ],
        },
      ],
    },
    {
      id: "loading",
      title: "Alternative loading and maintenance protocol",
      paragraphs: [
        "Another community pattern mirrors the KLOW loading approach. With **2 mL** added to a 70 mg vial, **10 units = 3.5 mg** and **5 units = 1.75 mg**. Loading uses **70 mg** in four weeks; maintenance uses **42 mg** over eight weeks (**112 mg** total ≈ 1.6 vials). “Loading” is a community term—GLOW pharmacokinetics have not established a loading requirement.",
      ],
      tables: [
        {
          caption: "Loading / maintenance (2 mL recon)",
          headers: [
            "Phase",
            "Weeks",
            "Schedule",
            "Total / admin",
            "Per-component",
            "Weekly blend",
          ],
          rows: [
            [
              "Loading",
              "1–4",
              "10 U, 5× weekly",
              "3.5 mg",
              "GHK-Cu 2.5 mg; BPC/TB 500 mcg each",
              "17.5 mg",
            ],
            [
              "Lower maintenance",
              "5–12",
              "5 U, 3× weekly",
              "1.75 mg",
              "GHK-Cu 1.25 mg; BPC/TB 250 mcg each",
              "5.25 mg",
            ],
            ["Washout", "13–16 or 13–20", "None", "—", "—", "—"],
          ],
        },
      ],
    },
    {
      id: "reconstitution",
      title: "GLOW reconstitution and concentration math",
      paragraphs: [
        "“**10 units of GLOW**” is not a reproducible dose without vial mass, component ratio, and diluent volume. Depending on dilution, 10 units delivers **2.33**, **2.8**, or **3.5 mg**.",
      ],
      widget: "glow-recon-calc",
      tables: [
        {
          caption: "3 mL reconstitution (≈23.33 mg/mL total)",
          headers: [
            "U-100 units",
            "Volume",
            "Total blend",
            "GHK-Cu",
            "Each repair peptide",
          ],
          rows: [
            ["1", "0.01 mL", "233 mcg", "167 mcg", "33 mcg"],
            ["5", "0.05 mL", "1.17 mg", "833 mcg", "167 mcg"],
            ["10", "0.10 mL", "2.33 mg", "1.67 mg", "333 mcg"],
            ["15", "0.15 mL", "3.5 mg", "2.5 mg", "500 mcg"],
          ],
        },
        {
          caption: "2.5 mL reconstitution (28 mg/mL total)",
          headers: [
            "U-100 units",
            "Volume",
            "Total blend",
            "GHK-Cu",
            "Each repair peptide",
          ],
          rows: [
            ["1", "0.01 mL", "280 mcg", "200 mcg", "40 mcg"],
            ["5", "0.05 mL", "1.4 mg", "1 mg", "200 mcg"],
            ["10", "0.10 mL", "2.8 mg", "2 mg", "400 mcg"],
            ["15", "0.15 mL", "4.2 mg", "3 mg", "600 mcg"],
          ],
        },
        {
          caption: "2 mL reconstitution (35 mg/mL total)",
          headers: [
            "U-100 units",
            "Volume",
            "Total blend",
            "GHK-Cu",
            "Each repair peptide",
          ],
          rows: [
            ["1", "0.01 mL", "350 mcg", "250 mcg", "50 mcg"],
            ["5", "0.05 mL", "1.75 mg", "1.25 mg", "250 mcg"],
            ["10", "0.10 mL", "3.5 mg", "2.5 mg", "500 mcg"],
            ["15", "0.15 mL", "5.25 mg", "3.75 mg", "750 mcg"],
          ],
        },
      ],
    },
    {
      id: "reported-range",
      title: "Reported GLOW dosage range",
      tables: [
        {
          caption: "Online protocol landscape",
          headers: ["Field", "Reported information"],
          rows: [
            [
              "Total blend per administration",
              "Most consistently ≈2.33–3.5 mg; broader protocols use 1.4–4.2 mg",
            ],
            ["GHK-Cu per administration", "Usually ≈1.67–2.5 mg"],
            ["BPC-157 per administration", "Usually ≈333–500 mcg"],
            ["TB-500 per administration", "Usually ≈333–500 mcg"],
            ["Frequency", "Three times weekly to daily"],
            ["Route", "Subcutaneous"],
            ["Typical short cycle", "4–6 weeks"],
            ["Longer reported cycle", "8–12 weeks"],
            ["Reported washout", "2–8 weeks"],
            ["Exact-combination clinical overlap", "None"],
            ["Evidence quality", "Low / anecdotal for the blend"],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus clinically studied dosing",
      widget: "glow-clinical-vs-anecdotal",
    },
    {
      id: "why-combine",
      title: "Why the three peptides are combined",
      paragraphs: [
        "The marketing narrative assigns matrix remodeling, vascular support, and repair-cell migration. These pathways overlap, and all three may influence inflammation and angiogenesis. No experiment has shown that the **5:1:1** ratio optimizes the interaction.",
      ],
      tables: [
        {
          caption: "Proposed roles and evidence boundaries",
          headers: ["Component", "Proposed role", "Evidence boundary"],
          rows: [
            [
              "GHK-Cu",
              "Collagen, elastin, ECM, antioxidant, repair signaling",
              "Stronger topical/lab literature; little support for systemic injection",
            ],
            [
              "BPC-157",
              "Vascular, NO, FAK-paxillin, tendon, GI pathways",
              "Mostly rodent evidence with sparse human reports",
            ],
            [
              "TB-500",
              "Actin-associated migration, angiogenesis, wound-repair signaling",
              "Fragment evidence preclinical; full-length Tβ4 not interchangeable",
            ],
          ],
        },
      ],
    },
    {
      id: "component-detail",
      title: "Component evidence in more detail",
      numbered: [
        "**GHK-Cu** — extensive laboratory and topical research; mixed topical clinical results (diabetic ulcers vs CO₂-laser resurfacing). Supports a topical rationale, not systemic GLOW dosing.",
        "**BPC-157** — numerous rodent models; human evidence sparse and weak. A two-person IV pilot cannot define a chronic SC dose.",
        "**TB-500** — `LKKTETQ` actin-binding region promotes migration/repair in preclinical models. Full-length Tβ4 human studies evaluated a different molecule by IV or topical routes.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "glow-evidence-ladder",
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "No exact-combination adverse-event rate exists. GHK-Cu constitutes more than **70%** of GLOW by mass—the copper contribution should not be ignored. Fixed-ratio convenience means reducing GHK-Cu also reduces BPC-157 and TB-500.",
      ],
      widget: "glow-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "Community guides usually specify **2–8°C** after reconstitution, protection from light, gentle swirling, and use within approximately **28 days**. No published stability study was identified for the complete GLOW mixture under these conditions.",
        "A pale blue or blue-green appearance is expected from the copper complex. Color alone does not confirm concentration, sterility, or intact peptide. Cloudiness, unexpected particulate matter, or a marked color change is a product-quality warning.",
      ],
    },
    {
      id: "anti-doping",
      title: "Anti-doping status",
      paragraphs: [
        "BPC-157 and thymosin beta-4 derivatives are prohibited under the WADA framework. Because GLOW contains both, it is incompatible with tested sport.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "GLOW is a fixed **5:1:1** blend. The dominant **70 mg** formula contains **50 mg GHK-Cu** and **10 mg** of each repair peptide. The most repeated daily amount is approximately **2.33 mg total** (≈**1.67 mg GHK-Cu** + **333 mcg** each of BPC-157 and TB-500).",
        "The simplest complete community protocol uses 2.33 mg once daily for four weeks, then a 2–4-week washout. Longer protocols keep **2.8 mg** constant while reducing frequency across 12 weeks, or use a **3.5 mg** loading phase followed by **1.75 mg** maintenance.",
      ],
      highlight:
        "Confirm true 50/10/10 ratio, fragment TB-500 vs full-length Tβ4, component-specific potency, verified copper complexation, sterility, endotoxin, and post-reconstitution stability — before trusting any unit chart.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard GLOW dosage?",
        answer:
          "The most repeated daily protocol is approximately 2.33 mg of total blend. In a standard 50/10/10 vial, this supplies about 1.67 mg GHK-Cu and 333 mcg each of BPC-157 and TB-500.",
      },
      {
        question: "What is the complete reported GLOW protocol?",
        answer:
          "The simplest complete protocol uses approximately 2.33 mg once daily for four weeks, followed by a 2–4-week washout. With 3 mL added to a 70 mg vial, the amount is a 10-unit U-100 draw.",
      },
      {
        question: "What is the longer 12-week GLOW protocol?",
        answer:
          "A common frequency-taper protocol keeps each administration at 2.8 mg: daily in weeks 1–4, five times weekly in weeks 5–8, and three times weekly in weeks 9–12. It totals 168 mg, requiring three standard vials before handling loss.",
      },
      {
        question: "How many units is a GLOW dose?",
        answer:
          "It depends on dilution. Ten units delivers approximately 2.33 mg after a 3 mL dilution, 2.8 mg after a 2.5 mL dilution, or 3.5 mg after a 2 mL dilution.",
      },
      {
        question: "What does a 10-unit GLOW draw contain?",
        answer:
          "With 3 mL added, it contains about 1.67 mg GHK-Cu and 333 mcg each of BPC-157 and TB-500. With 2 mL added, it contains 2.5 mg GHK-Cu and 500 mcg each of the other peptides.",
      },
      {
        question: "How long does one 70 mg vial last?",
        answer:
          "With 3 mL added and 10 units used daily, one vial mathematically provides 30 administrations. At 10 units five times weekly after a 2 mL dilution, it lasts four weeks.",
      },
      {
        question: "Is GLOW the same as KLOW?",
        answer:
          "No. KLOW contains the same three core components plus KPV. The standard KLOW vial therefore totals 80 mg rather than 70 mg.",
      },
      {
        question: "Is TB-500 the same as thymosin beta-4?",
        answer:
          "Not exactly. Standard TB-500 generally refers to the acetylated seven-residue fragment Ac-LKKTETQ; thymosin beta-4 is a 43-amino-acid peptide. Some suppliers conflate them, so the sequence must be confirmed.",
      },
      {
        question: "Can the GLOW components be adjusted independently?",
        answer:
          "No. Every draw from a standard GLOW vial preserves the 5:1:1 ratio. Separate vials are required to test different component ratios.",
      },
      {
        question: "Is daily administration necessary?",
        answer:
          "No exact-combination study has established an optimal frequency. Reported schedules range from three times weekly to daily.",
      },
      {
        question: "Is 3.5 mg better than 2.33 mg?",
        answer:
          "Unknown. The 3.5 mg amount delivers 50% more of every component. No dose-comparison trial shows that it improves outcomes.",
      },
      {
        question: "Does GLOW require a washout?",
        answer:
          "No trial has established a mandatory break. Reported protocols commonly use 2–8 weeks off. In research, washout helps determine whether measured changes persist or reverse.",
      },
      {
        question: "Can topical GHK-Cu studies validate injectable GLOW?",
        answer:
          "No. Topical and systemic exposure have different pharmacokinetics and safety considerations, and the topical studies did not include BPC-157 or TB-500.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "FDA",
        title: "July 23–24, 2026 Pharmacy Compounding Advisory Committee meeting",
        detail: "Advisory votes — not a GLOW blend evaluation.",
        href: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
      },
      {
        authors: "FDA",
        title: "Bulk drug substances nominated for use in compounding",
        detail: "Updated May 2026; GHK-Cu category distinctions.",
        href: "https://www.fda.gov/media/94155/download",
      },
      {
        authors: "Pickart L, Margolina A.",
        title: "Regenerative and protective actions of GHK-Cu",
        detail: "2018 review — topical/lab context.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      },
      {
        authors: "Mulder GD et al.",
        title: "Topical GHK-Cu in diabetic neuropathic ulcers",
        detail: "1994 — not injectable GLOW dosing.",
        href: "https://pubmed.ncbi.nlm.nih.gov/17147644/",
      },
      {
        authors: "Esposito S et al.",
        title: "Identification of acetylated thymosin beta-4 17–23 in TB-500",
        detail: "2012.",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
      {
        authors: "Ho ENM et al.",
        title: "TB-500 chemistry and detection",
        detail: "2012.",
        href: "https://pubmed.ncbi.nlm.nih.gov/23084823/",
      },
      {
        authors: "Morris DC et al.",
        title: "Thymosin beta-4 active sites and biological activity",
        detail: "2010.",
        href: "https://pubmed.ncbi.nlm.nih.gov/20179146/",
      },
      {
        authors: "BPC-157 IV pilot",
        title: "Safety of IV BPC-157 in two adults",
        detail: "2025 — not SC blend validation.",
        href: "https://pubmed.ncbi.nlm.nih.gov/40131143/",
      },
      {
        authors: "Sports medicine review",
        title: "Injectable peptide therapy in orthopaedic and sports medicine",
        detail: "2025.",
        href: "https://pubmed.ncbi.nlm.nih.gov/41476424/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "BPC-157 and Tβ4 derivatives prohibited.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "GLOW is a **fixed-ratio commercial blend** with **no controlled human trial** of the exact combination identified and **no US prescribing dose**.",
      "This page documents community protocols and reconstitution arithmetic. It is **not** a clinical dosing, self-injection, or treatment guide. Always translate total blend mass into **three labeled component amounts**.",
      "BPC-157 and thymosin beta-4 derivatives are **WADA prohibited**. Seek urgent care for severe allergic, infectious, neurological, or cardiovascular symptoms.",
    ],
  },
};

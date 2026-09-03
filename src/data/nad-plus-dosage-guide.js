/**
 * NAD+ (nicotinamide adenine dinucleotide, oxidized) dosage guide.
 * Dinucleotide coenzyme — not a peptide. Direct NAD+ only; ≠ NR, NMN, niacin, NADH.
 * Strongest RCT: 10 mg IV daily × 7 days (ischemic-cardiomyopathy HF).
 */

export const NAD_PLUS_ZWITTERION_MW = 663.4;

export function nadPlusInfusionRate({
  concentrationMgPerMl,
  pumpMlPerHour,
} = {}) {
  const c = Number(concentrationMgPerMl);
  const r = Number(pumpMlPerHour);
  if (!Number.isFinite(c) || c <= 0 || !Number.isFinite(r) || r < 0) return null;
  return {
    concentrationMgPerMl: c,
    pumpMlPerHour: r,
    mgPerHour: c * r,
    mgPerMin: (c * r) / 60,
  };
}

export function nadPlusStockVolume({
  stockConcMgPerMl = 100,
  targetMg,
} = {}) {
  const stock = Number(stockConcMgPerMl);
  const target = Number(targetMg);
  if (
    !Number.isFinite(stock) ||
    stock <= 0 ||
    !Number.isFinite(target) ||
    target <= 0
  ) {
    return null;
  }
  return {
    stockConcMgPerMl: stock,
    targetMg: target,
    volumeMl: target / stock,
    umolApprox: (target / NAD_PLUS_ZWITTERION_MW) * 1000,
  };
}

export const NAD_PLUS_IDENTITY = [
  {
    id: "nad-correct",
    label: "Assay-confirmed beta-NAD+ (oxidized)",
    verdict: "Matches the subject of this page",
    detail:
      "Oxidized nicotinamide adenine dinucleotide coenzyme — not a peptide. Confirm identity, NAD+-equivalent assay, salt/hydrate basis, sterility, and endotoxin before any parenteral research use.",
  },
  {
    id: "nr-nmn",
    label: "NR or NMN “NAD booster”",
    verdict: "Different compounds — precursor doses are not NAD+ doses",
    detail:
      "Nicotinamide riboside and nicotinamide mononucleotide use precursor pathways with separate human literature. Their milligram schedules cannot be assigned to direct NAD+.",
  },
  {
    id: "nadh",
    label: "NADH (reduced form)",
    verdict: "Different redox state — not interchangeable",
    detail:
      "NADH is the reduced partner. Chemistry, stability, and pharmacology differ. Do not share dosage tables with NAD+.",
  },
  {
    id: "lnad",
    label: "Proprietary oral LNAD+ / PEG formulation",
    verdict: "Product-specific — not ordinary NAD+ powder or IV material",
    detail:
      "One short RCT used a proprietary 50%-NAD+/50%-PEG oral product. Results do not establish bioequivalence for capsules, powders, or injections.",
  },
  {
    id: "food-grade",
    label: "Food-grade or “research use only” powder for injection",
    verdict: "Not acceptable for human IV research",
    detail:
      "FDA has warned that unsuitable sterile-compounding ingredients can cause serious harm. Endotoxin contamination has been documented in warning-letter cases.",
  },
];

export const NAD_PLUS_HUMAN_STATUS = [
  ["Standardized US prescribing dose", "None"],
  ["Strongest direct clinical dataset", "10 mg IV once daily × 7 days (n=180 HF RCT)"],
  ["Second HF RCT", "50 mg IV once daily × 7 days (smaller; main LVEF/NT-proBNP NS)"],
  ["Best direct PK study", "750 mg IV over 6 hours (~2 mg/min)"],
  ["Commercial 500 mg × 4 days", "Poorly tolerated when infused faster (all 6 symptomatic)"],
  ["Proprietary oral LNAD+", "500 mg reported dose QID × 5 days (+ extras) — biomarker only"],
  ["Validated human SC / IM schedule", "Not located"],
  ["Validated anti-aging / addiction dose", "Not established"],
  ["Human weight-based formula", "Not established"],
];

export const NAD_PLUS_PROTOCOL_PHASES = [
  {
    id: "screen",
    phase: "Screening",
    days: "Protocol window",
    exposure: "None",
    purpose:
      "Ischemic cardiomyopathy confirmation, LVEF ≤45%, NYHA II–III, labs, ECG, eligibility",
  },
  {
    id: "infusion",
    phase: "Daily infusion days 1–7",
    days: "1–7",
    exposure: "10 mg in 100 mL · 100–120 → max 200 mL/h",
    purpose:
      "≈40–60 min; exact duration recorded; no within-participant dose escalation",
  },
  {
    id: "day7",
    phase: "Day 7 labs",
    days: "7",
    exposure: "Final daily dose completed",
    purpose: "CBC, chemistry, NT-proBNP, ECG, AE review; optional NAD metabolome",
  },
  {
    id: "day30",
    phase: "Primary outcome visit",
    days: "30",
    exposure: "None",
    purpose: "Blinded echo LVEF change (primary), NT-proBNP, clinical status",
  },
  {
    id: "month6",
    phase: "Clinical follow-up",
    days: "Month 6",
    exposure: "None",
    purpose: "Adjudicated CV events, HF hospitalization, serious AEs",
  },
];

export const NAD_PLUS_RATE_ROWS = [
  {
    id: "10mg",
    label: "10 mg HF RCT",
    conc: "0.1 mg/mL",
    duration: "40–60 min (100–200 mL/h)",
    rate: "≈0.17–0.33 mg/min",
    tolerability: "1 minor dizziness / 90 active",
  },
  {
    id: "50mg",
    label: "50 mg HF RCT",
    conc: "1 mg/mL",
    duration: "Not reported",
    rate: "Cannot calculate",
    tolerability: "No obvious complaints reported",
  },
  {
    id: "750mg",
    label: "750 mg PK pilot",
    conc: "Bag volume NR",
    duration: "6 hours",
    rate: "≈2.08 mg/min",
    tolerability: "No observed events / 8 active",
  },
  {
    id: "500mg",
    label: "500 mg clinic series",
    conc: "1 mg/mL",
    duration: "Mean 97 ± 56 min",
    rate: "≈5.15 mg/min (mean)",
    tolerability: "All 6 moderate–severe acute symptoms",
  },
];

export const NAD_PLUS_COMPARE = {
  clinical: {
    title: "Published direct-NAD+ research",
    status: "Route- and indication-specific",
    rows: [
      ["IV amounts studied", "10, 50, 500, or 750 mg in distinct studies"],
      ["Strongest RCT", "10 mg IV daily × 7 (n=180 HF)"],
      ["PK pilot", "750 mg over 6 hours"],
      ["Oral", "One proprietary LNAD+ 5-day QID trial"],
      ["SC / IM", "No validated direct-human schedule"],
      ["Established wellness benefit", "None"],
    ],
  },
  anecdotal: {
    title: "Current wellness / practitioner conventions",
    status: "Anecdotal — not clinical guidelines",
    rows: [
      ["IV session", "Commonly 250–1,000 mg (some claim higher)"],
      ["“Loading”", "3–5 sessions or 7–14-day series"],
      ["Infusion time claims", "Often 2–8 hours to tolerance"],
      ["SC charts", "Often 25–200 mg daily–several×/week"],
      ["IM charts", "Often 50–200 mg weekly"],
      ["Origin", "Historical addiction schedule + vial convenience"],
    ],
  },
};

export const NAD_PLUS_CLAIMS = [
  {
    id: "standard-dose",
    claim: "There is one standard NAD+ dose",
    verdict: "False",
    detail:
      "Published direct-human protocols include 10, 50, 500, and 750 mg in different contexts. They are not one therapeutic range.",
  },
  {
    id: "same-as-nr",
    claim: "NAD+ doses equal NR or NMN doses",
    verdict: "False",
    detail:
      "NR and NMN are precursors with separate pathways and evidence. Their results are not direct NAD+ dosing evidence.",
  },
  {
    id: "antiaging",
    claim: "NAD+ slows aging or extends lifespan",
    verdict: "Not established",
    detail:
      "No direct human outcome trial has shown slower aging, longer lifespan, or reduced age-related disease from administered NAD+.",
  },
  {
    id: "addiction",
    claim: "IV NAD+ is proven addiction/withdrawal therapy",
    verdict: "Not established",
    detail:
      "The frequently cited schedule comes from a 1961 uncontrolled report. It should not replace evidence-based withdrawal care.",
  },
  {
    id: "500-safe",
    claim: "500 mg IV is a well-tolerated wellness dose",
    verdict: "Unsupported",
    detail:
      "In a 2026 retrospective series, all six clients receiving 500 mg over ~97 minutes reported moderate-to-severe infusion symptoms.",
  },
  {
    id: "weight-based",
    claim: "Dose NAD+ by body weight (mg/kg)",
    verdict: "Unsupported",
    detail:
      "Direct-human studies used fixed doses. Animal mg/kg amounts should not be converted into a human formula.",
  },
  {
    id: "biomarker-benefit",
    claim: "Raising blood NAD proves clinical benefit",
    verdict: "False",
    detail:
      "Plasma, whole-blood total NAD, NAD+/NADH ratio, and tissue NAD are different endpoints. Biomarker change ≠ patient benefit.",
  },
  {
    id: "ruo-ok",
    claim: "Research-use-only powder can be injected",
    verdict: "False",
    detail:
      "RUO material does not establish injectable identity, potency, sterility, endotoxin, particulates, or clinical manufacturing quality.",
  },
  {
    id: "slow-safe",
    claim: "A slower infusion is automatically safe",
    verdict: "False",
    detail:
      "Slowing may reduce rate-related discomfort but cannot correct contamination, endotoxin, wrong dose, fluid overload, or cardiac events.",
  },
  {
    id: "wada-volume",
    claim: "Wellness IV bags are fine for tested athletes",
    verdict: "High risk",
    detail:
      "WADA prohibits IV infusions >100 mL in 12 hours outside specified exceptions — a 500 mL bag can violate methods rules.",
  },
];

export const NAD_PLUS_EVIDENCE_LADDER = [
  {
    level: "Standardized US prescribing dose",
    exists: "None",
    confidence: "None",
  },
  {
    level: "10 mg IV daily × 7",
    exists: "One 180-person randomized HF trial",
    confidence: "Moderate, disease-specific",
  },
  {
    level: "50 mg IV daily × 7",
    exists: "One small randomized HF trial",
    confidence: "Low-to-moderate",
  },
  {
    level: "750 mg IV over 6 hours",
    exists: "8 active participants (metabolome)",
    confidence: "Low, mechanistic",
  },
  {
    level: "500 mg IV daily × 4",
    exists: "6 commercial clients (retrospective)",
    confidence: "Very low",
  },
  {
    level: "Proprietary oral LNAD+ QID × 5 days",
    exists: "Randomized product-specific biomarker trial",
    confidence: "Moderate for RBC-dominant biomarker; low for benefit/transfer",
  },
  {
    level: "SC and IM schedules",
    exists: "Vendor/practitioner charts only",
    confidence: "Insufficient",
  },
  {
    level: "Long-term maintenance / wellness loading",
    exists: "Conventions and historical case series",
    confidence: "Insufficient",
  },
];

export const NAD_PLUS_AE_SIMPLE = [
  {
    category: "10 mg IV × 7 (HF RCT)",
    note: "1 minor dizziness among 90 active; no notable liver/kidney/glucose signal reported",
  },
  {
    category: "500 mg faster clinic infusion",
    note: "All 6: GI symptoms, ↑ HR, throat pain, congestion, chest pressure during infusion",
  },
  {
    category: "Product / sterile quality",
    note: "Endotoxin contamination documented in FDA warning-letter context — preventable manufacturing risk",
  },
  {
    category: "IV procedure risks",
    note: "Line infection, extravasation, fluid overload (esp. large bags), pump/calculation errors",
  },
];

export const NAD_PLUS_AE_FULL = [
  {
    domain: "Infusion hold signals",
    items:
      "Chest pressure/pain, dyspnea, throat discomfort, severe cramping/vomiting, HR ↑≥20 or >120, symptomatic hypotension, O₂ sat drop, fever/rigors, line infection signs",
  },
  {
    domain: "Urgent evaluation",
    items:
      "Anaphylaxis, ACS, acute HF deterioration, suspected endotoxin/pyrogen reaction, cluster reactions from same lot",
  },
  {
    domain: "Higher-caution populations",
    items:
      "Decompensated HF, fluid restriction, serious arrhythmia, unstable CAD, severe kidney/liver dysfunction, pregnancy, malignancy outside dedicated protocols",
  },
];

export const NAD_PLUS_DOSAGE_GUIDE = {
  title: "NAD+ Dosage: Human Trials, IV Protocol, Oral Research, and Safety",
  updated: "Updated August 2026",
  callout:
    "**Research note:** NAD+ is a **dinucleotide coenzyme, not a peptide**. This page covers **direct** administration of oxidized nicotinamide adenine dinucleotide and does **not** substitute doses from NR, NMN, niacin, nicotinamide, NADH, or NADPH. The complete protocol below is a clinical-research framework — **not** a self-treatment or home-infusion plan.",
  intro: [
    "**No single NAD+ dose is established** across routes or purposes. Direct human studies have used **10–750 mg IV** in different populations, formulations, rates, and endpoints.",
    "**Strongest direct clinical dataset:** **10 mg IV once daily for 7 days** (180 hospitalized adults with ischemic-cardiomyopathy HF; ~40–60 min infusion). A **750 mg / 6-hour** study best documents pharmacokinetics. A commercial **500 mg** series averaged ~97 minutes and was poorly tolerated in all six recipients.",
    "**Common 250–1,000 mg wellness infusions** and SC/IM charts are conventions — not a validated dose range. Route, **rate**, and sterile-product quality matter as much as milligrams.",
  ],
  glance: {
    title: "NAD+ dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Compound class**", "Pyridine dinucleotide coenzyme — not a peptide"],
        ["**≠ precursors**", "NR, NMN, niacin, NAM, NADH, NADPH"],
        ["**Strongest IV clinical anchor**", "10 mg once daily × 7 days (HF RCT)"],
        ["**Highest controlled IV exposure**", "750 mg once over 6 hours"],
        ["**500 mg commercial series**", "Poorly tolerated when infused faster"],
        ["**Validated SC / IM**", "Not located"],
        ["**Anti-aging / addiction dose**", "Not established"],
        ["**Main acute concern**", "Rate-related symptoms + sterile IV risks"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is NAD+?",
      paragraphs: [
        "NAD+ is the oxidized member of the NAD+/NADH redox pair and a substrate for sirtuins, PARPs, CD38/CD157, and SARM1. Biological importance does **not** prove that exogenous NAD+ improves energy, aging, cognition, recovery, or disease outcomes.",
        "Material sold as “NAD+” may be free acid/zwitterion, sodium salt, hydrate, lyophilized injectable, solution, capsule, or proprietary formulation. Nominal fill mass ≠ assay-corrected beta-NAD+.",
      ],
      widget: "nad-plus-identity-gate",
      tables: [
        {
          caption: "NAD+ is not interchangeable with its neighbors",
          headers: ["Name", "What it is", "Assign dose to direct NAD+?"],
          rows: [
            ["NAD+", "Oxidized dinucleotide", "This page’s subject"],
            ["NADH", "Reduced redox partner", "No"],
            ["NR / NMN", "NAD+ precursors", "No"],
            ["Niacin / NAM", "Vitamin B3 forms / salvage precursors", "No"],
            ["LNAD+", "Proprietary oral NAD+/PEG product", "Not equivalent to ordinary NAD+"],
          ],
        },
      ],
    },
    {
      id: "status",
      title: "Current research and regulatory status",
      paragraphs: [
        "There is **no standardized US prescribing label** for direct NAD+ infusion. Chinese heart-failure trials used a nationally registered injectable coenzyme I product — that history does not create a US indication or analytical equivalence for compounded US products.",
        "FDA has warned that **food-grade NAD+ is unsuitable for sterile compounding** without appropriate processing. A 2026 warning letter described patients with hypotension, shaking, and body aches after compounded NAD+; an unopened vial measured **3,360 EU/mL** endotoxin.",
      ],
    },
    {
      id: "human-doses",
      title: "NAD+ dosages used in human research",
      paragraphs: [
        "Only studies that **directly administered NAD+** are included — not precursor trials.",
      ],
      widget: "nad-plus-human-status",
      tables: [
        {
          caption: "Direct-human studies at a glance",
          headers: ["Study", "Amount", "Route / duration", "Main limit"],
          rows: [
            [
              "Yu et al., 2026",
              "10 mg in 100 mL daily",
              "IV × 7 days",
              "Single-center HF population; short exposure",
            ],
            [
              "Pei et al., 2024",
              "50 mg in 50 mL daily",
              "IV × 7 days",
              "Small; main LVEF/NT-proBNP comparisons NS",
            ],
            [
              "Grant et al., 2019",
              "750 mg",
              "IV over 6 hours once",
              "n=8 active; metabolome only",
            ],
            [
              "Reyna et al., 2026",
              "500 mg in 500 mL daily",
              "IV × 4 days (mean ~97 min)",
              "n=6; all symptomatic; retrospective",
            ],
            [
              "Kornilov et al., 2026",
              "Reported 500 mg doses QID (+ extras)",
              "Oral LNAD+ × 5 days",
              "Proprietary; RBC-dominant biomarker",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "In the **10 mg** HF trial, one-month LVEF between-group differences reached P < 0.05; NT-proBNP, MACCE, and hospitalization differences did not. This is **disease-specific** evidence — not an anti-aging or wellness dose.",
      ],
    },
    {
      id: "landscape",
      title: "Reported direct-human dosage landscape",
      paragraphs: [
        "The **10–750 mg** interval describes heterogeneous studies — **not** a validated therapeutic range. Wellness “250 starter / 500 standard / 750–1,000 intensive” ladders were not located as randomized dose-finding results.",
      ],
      widget: "nad-plus-clinical-vs-anecdotal",
    },
    {
      id: "rate",
      title: "Infusion rate may be as important as total dose",
      paragraphs: [
        "These are not randomized rate-comparison data, but the pattern is compatible with **rate-dependent tolerability**. A rate tolerated in one study should not be assumed safe for another product or participant.",
      ],
      widget: "nad-plus-rate-table",
    },
    {
      id: "protocol",
      title: "Complete evidence-anchored research protocol (10 mg HF replication)",
      paragraphs: [
        "Most defensible replication anchor: the **10 mg/day** ischemic-cardiomyopathy trial (largest direct-NAD+ RCT) with concentration, carrier volume, initial rate, titration interval, maximum rate, and follow-up preserved — plus stronger product characterization and safety monitoring.",
        "**Active exposure:** 10 mg assay-corrected beta-NAD+ in 100 mL dextrose or saline (compatibility validated) once daily × 7 days. **Start 100–120 mL/h**, stepwise increases ≤ every 15–30 min if criteria met, **max 200 mL/h**. No within-participant dose escalation. Food-grade/RUO powder is **not** acceptable.",
      ],
      widget: "nad-plus-protocol-timeline",
      paragraphsAfter: [
        "The **750 mg** Grant protocol can be a **separate** metabolism study — do not graft it onto the 10 mg efficacy trial. Hold/stop rules cover chest symptoms, hemodynamics, fever/rigors (possible endotoxin), and same-lot event clusters.",
      ],
    },
    {
      id: "recon",
      title: "Concentration and reconstitution math",
      paragraphs: [
        "Research-pharmacy arithmetic only — not a self-injection authorization. **Concentration = assay-corrected NAD+ mass ÷ final validated volume.** Delivery rate (mg/min) = concentration × pump mL/h ÷ 60.",
      ],
      widget: "nad-plus-recon-calc",
      tables: [
        {
          caption: "Published admixture arithmetic",
          headers: ["Protocol", "Amount", "Carrier", "Concentration", "Course"],
          rows: [
            ["Yu HF", "10 mg", "100 mL", "0.1 mg/mL", "70 mg / 7 days"],
            ["Pei HF", "50 mg", "50 mL", "1 mg/mL", "350 mg / 7 days"],
            ["Reyna clinic", "500 mg", "500 mL", "1 mg/mL", "2,000 mg / 4 days"],
            ["Grant PK", "750 mg", "NR", "Cannot calculate", "750 mg once"],
          ],
        },
      ],
      paragraphsAfter: [
        "Using **663.4 g/mol** for characterized free zwitterion: 10 mg ≈ 15.1 µmol; 750 mg ≈ 1.13 mmol. Do not apply automatically to salts, hydrates, or proprietary formulations.",
      ],
    },
    {
      id: "preclinical",
      title: "Preclinical NAD+ dosage",
      paragraphs: [
        "Rat myocardial I/R models used **5–20 mg/kg IV**; a rat cerebral-ischemia model used **10 mg/kg intranasal**. Animal mg/kg amounts must **not** be copied into a human schedule or casually converted by body-surface-area arithmetic.",
      ],
    },
    {
      id: "mechanisms",
      title: "How NAD+ may work",
      paragraphs: [
        "Redox cofactor cycling (NAD+/NADH), consumed-substrate pathways (sirtuins/PARPs/CD38/SARM1), and **extracellular metabolism** of infused NAD+ (rapid early disappearance; later metabolite rises) are under investigation.",
        "“Direct to the bloodstream” is **not** the same as delivery to brain, muscle, or mitochondria. Plasma NAD, whole-blood total NAD, NAD+/NADH ratio, and tissue NAD are different endpoints.",
      ],
    },
    {
      id: "benefits",
      title: "Potential benefits: what has and has not been shown",
      tables: [
        {
          caption: "Claim vs direct human evidence",
          headers: ["Claim", "Current conclusion"],
          rows: [
            [
              "Modest LVEF signal in ischemic-cardiomyopathy HF",
              "Promising disease-specific signal needing multicenter replication",
            ],
            ["HF clinical events / hospitalizations", "Not established"],
            ["Raises plasma/urine NAD metabolites (750 mg)", "PK evidence, not efficacy"],
            ["Raises whole-blood total NAD (oral LNAD+)", "Product-specific biomarker; no health outcome"],
            ["Energy, aging, cognition, athletics, addiction", "Not established"],
          ],
        },
      ],
    },
    {
      id: "safety",
      title: "NAD+ safety and side effects",
      paragraphs: [
        "Tolerability differs by protocol — dose alone does not explain differences. Rate, concentration, carrier volume, population, formulation, and product quality all matter.",
        "Urgent signs (chest pain, trouble breathing, fever/rigors, hypotension, same-lot clusters) require immediate medical evaluation — do not simply slow and continue through a potentially serious reaction.",
      ],
      widget: "nad-plus-adverse-events",
    },
    {
      id: "quality",
      title: "Quality testing and storage",
      paragraphs: [
        "Release testing should include orthogonal identity, quantitative NAD+-equivalent assay, counterion/water, degradation profile, sterility, **bacterial endotoxin**, particulates, pH/osmolality, container compatibility, and potency-indicating stability. “99% HPLC purity” alone is insufficient.",
        "Stability is formulation-specific. Do not assign a generic 14-/28-/90-day beyond-use period from a vendor blog.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "nad-plus-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "NAD+ dosage evidence ladder",
      widget: "nad-plus-evidence-ladder",
      paragraphsAfter: [
        "NAD+ dosing is **not** established as one cross-purpose protocol. High-dose wellness, “loading,” detox, SC, IM, and indefinite maintenance schedules remain largely conventions.",
      ],
    },
    {
      id: "anti-doping",
      title: "Sports and anti-doping considerations",
      paragraphs: [
        "Under the **2026 WADA** list, IV infusions totaling **more than 100 mL in 12 hours** are prohibited outside specified exceptions. A **500 mL** wellness bag can create a **methods** violation regardless of whether NAD+ is named as a prohibited substance.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Direct NAD+ has more human data than many wellness compounds, but evidence remains fragmented. A **10 mg** HF protocol, **50 mg** HF pilot, **750 mg** metabolome experiment, symptomatic **500 mg** commercial series, and proprietary oral study cannot collapse into one “optimal dose.”",
        "For research: rigorously characterized multicenter replication of the **10 mg** trial plus separate dose-and-rate studies. For readers: state identity, sterile quality, carrier volume, rate, population, and endpoint alongside milligrams — and keep community protocols clearly separate from validated evidence.",
      ],
      highlight:
        "Rate and sterile-product quality can matter as much as the milligram number. Food-grade / RUO material is not injectable research material.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Is NAD+ a peptide?",
        answer:
          "No. NAD+ is a pyridine dinucleotide coenzyme. It has no amino-acid sequence and should not be assayed or described as a peptide.",
      },
      {
        question: "What is the standard NAD+ dose?",
        answer:
          "There is no universal standard. Published direct-human IV protocols include 10 mg/day × 7, 50 mg/day × 7, 500 mg/day × 4, and one 750 mg six-hour exposure — each in a different research context.",
      },
      {
        question: "What dose has the strongest human evidence?",
        answer:
          "The largest randomized direct-NAD+ study used 10 mg IV once daily for seven days in hospitalized ischemic-cardiomyopathy heart-failure adults. That does not establish 10 mg for wellness use.",
      },
      {
        question: "Is NAD+ the same as NR or NMN?",
        answer:
          "No. NR and NMN are precursors. Their doses and results are not direct NAD+ evidence.",
      },
      {
        question: "Is there a validated subcutaneous NAD+ dose?",
        answer:
          "No direct-human SC pharmacokinetic or controlled dose-finding schedule was located. Online 25–200 mg schedules are anecdotal.",
      },
      {
        question: "Should NAD+ be dosed by weight?",
        answer:
          "Not on current human evidence. Direct-human studies used fixed doses; mg/kg amounts appear in animal research.",
      },
      {
        question: "Does NAD+ slow aging?",
        answer:
          "No direct human trial has established slower aging, longer lifespan, or reduced age-related disease from administered NAD+.",
      },
      {
        question: "Can research-use-only NAD+ be injected?",
        answer:
          "No. RUO analytical material does not establish injectable identity, potency, sterility, endotoxin, or clinical manufacturing quality.",
      },
      {
        question: "Is NAD+ allowed in tested sport?",
        answer:
          "Check both substance and method. WADA’s IV-volume rule prohibits more than 100 mL in 12 hours outside specified exceptions, so a wellness infusion can be problematic even before substance classification.",
      },
      {
        question: "Does NAD+ treat addiction or withdrawal?",
        answer:
          "Controlled evidence is inadequate. The frequently cited IV schedule comes from a 1961 uncontrolled report and should not replace evidence-based withdrawal care.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Yu X et al.",
        title: "NAD+ in heart failure due to ischemic cardiomyopathy — RCT",
        detail: "10 mg IV daily × 7 days; n=180.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12779688/",
      },
      {
        authors: "Pei Z et al.",
        title: "NAD+ in older patients with heart failure",
        detail: "50 mg IV daily × 7 days; smaller RCT.",
        href: "https://www.imrpress.com/journal/RCM/25/8/10.31083/j.rcm2508297",
      },
      {
        authors: "Grant R et al.",
        title: "Plasma and urine NAD+ metabolome during 6-hour IV infusion",
        detail: "750 mg over 6 hours; n=8 active.",
        href: "https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2019.00257/full",
      },
      {
        authors: "Reyna K et al.",
        title: "IV NAD+ versus NR — retrospective tolerability pilot",
        detail: "500 mg × 4 days; all 6 NAD+ clients symptomatic.",
        href: "https://www.frontiersin.org/journals/aging/articles/10.3389/fragi.2026.1652582/full",
      },
      {
        authors: "Kornilov SA et al.",
        title: "Oral LNAD+ RCT — whole-blood intracellular NAD",
        detail: "Proprietary oral formulation; 5-day biomarker study.",
        href: "https://pubmed.ncbi.nlm.nih.gov/42530810/",
      },
      {
        authors: "FDA",
        title: "Reminder: ingredients suitable for sterile compounding",
        detail: "Food-grade NAD+ unsuitable without appropriate processing.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/fda-reminds-compounders-use-ingredients-suitable-sterile-compounding",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "IV volume methods rule (>100 mL / 12 h).",
        href: "https://www.wada-ama.org/en/resources/world-anti-doping-program/prohibited-list",
      },
      {
        authors: "PubChem",
        title: "Nadide, CID 5892",
        detail: "Chemical identity and molecular weight.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/5892",
      },
    ],
  },
};

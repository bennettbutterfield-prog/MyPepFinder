/**
 * Pinealon (EDR / Glu-Asp-Arg) dosage guide.
 * Best-described oral: 0.1–0.2 mg per administration; TBI secondary report 0.2 mg BID × 20–30 days.
 * Patent IM: 1 µg, 10 µg, or 5 mg once daily × 10 days (severity-confounded).
 * ≠ Epitalon (AEDG). No validated human SC/intranasal dose.
 */

export const PINEALON_FREE_MW = 418.407;

export function pinealonMolesFromMg(mg) {
  const m = Number(mg);
  if (!Number.isFinite(m) || m < 0) return null;
  return {
    mg: m,
    umol: (m / PINEALON_FREE_MW) * 1000,
    nmol: (m / PINEALON_FREE_MW) * 1e6,
  };
}

export function pinealonOralCumulative({
  morningMg,
  eveningMg,
  days,
} = {}) {
  const am = Number(morningMg);
  const pm = Number(eveningMg);
  const d = Number(days);
  if (
    !Number.isFinite(am) ||
    am < 0 ||
    !Number.isFinite(pm) ||
    pm < 0 ||
    !Number.isFinite(d) ||
    d <= 0
  ) {
    return null;
  }
  const dailyMg = am + pm;
  return {
    morningMg: am,
    eveningMg: pm,
    days: d,
    dailyMg,
    cumulativeMg: dailyMg * d,
  };
}

export function pinealonAmountFromVial({
  vialMg = 10,
  diluentMl,
  targetMg,
} = {}) {
  const vial = Number(vialMg);
  const dil = Number(diluentMl);
  const target = Number(targetMg);
  if (
    !Number.isFinite(vial) ||
    vial <= 0 ||
    !Number.isFinite(dil) ||
    dil <= 0 ||
    !Number.isFinite(target) ||
    target <= 0
  ) {
    return null;
  }
  const concMgPerMl = vial / dil;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl * 100;
  return {
    vialMg: vial,
    diluentMl: dil,
    targetMg: target,
    targetUg: target * 1000,
    concMgPerMl,
    volumeMl,
    units,
  };
}

export const PINEALON_IDENTITY = [
  {
    id: "edr-correct",
    label: "Verified synthetic EDR (Glu-Asp-Arg)",
    verdict: "Matches Pinealon identity on this page",
    detail:
      "Tripeptide H-Glu-Asp-Arg-OH (~418.407 g/mol free peptide). Confirm sequence, chirality, assay-corrected active mass, counterion/water, and (for parenteral research) sterility/endotoxin.",
  },
  {
    id: "epitalon",
    label: "Epitalon / Epithalon (AEDG)",
    verdict: "Different peptide — pineal tetrapeptide, not Pinealon",
    detail:
      "Epitalon is Ala-Glu-Asp-Gly. Different sequence, literature, and dosing. Do not share milligram schedules.",
  },
  {
    id: "ac5",
    label: "AC-5 peptide complex capsule / lingual liquid",
    verdict: "Product-specific — not automatically pure EDR",
    detail:
      "Current commercial “Pinealon” products may list amino acids and excipients as a complex. Gross capsule or drop mass ≠ assay-confirmed EDR.",
  },
  {
    id: "gross-capsule",
    label: "“200 mg Pinealon” as 0.2 g capsule mass",
    verdict: "Likely label confusion — not 200 mg active EDR",
    detail:
      "Historical research used ~100 µg active per capsule. Treating gross product mass as active peptide invents a 2,000× exposure error.",
  },
  {
    id: "extract",
    label: "Cortex / pineal tissue extract",
    verdict: "Not interchangeable with synthetic EDR",
    detail:
      "Pinealon is a defined synthetic cortex-associated tripeptide bioregulator — not melatonin, a pineal hormone, or a gland extract.",
  },
];

export const PINEALON_HUMAN_STATUS = [
  ["Standardized US prescribing dose", "None"],
  ["Best-described oral amount", "0.2 mg BID × 20–30 days (secondary TBI report)"],
  ["Other repeated oral amount", "0.1 mg BID × 14 days"],
  ["Athlete oral course", "Variable 0.1–0.2 mg/day × 15 days (2.0 mg cumulative)"],
  ["Patent human IM amounts", "1 µg, 10 µg, or 5 mg once daily × 10 days"],
  ["Validated human SC / IN", "Not located"],
  ["Human PK / bioavailability", "Not established"],
  ["ClinicalTrials.gov interventional study", "None clearly registered (Aug 2026)"],
  ["Long-term safety", "Poorly characterized"],
];

export const PINEALON_PROTOCOL_PHASES = [
  {
    id: "screen",
    phase: "Screening",
    days: "−28 to −7",
    exposure: "None",
    purpose:
      "Consent, TBI verification, neurologic/psychiatric review, eligibility labs",
  },
  {
    id: "baseline",
    phase: "Baseline",
    days: "0",
    exposure: "None",
    purpose:
      "Vitals, ECG, CBC/CMP, cognitive battery, symptom scales, optional EEG",
  },
  {
    id: "treatment",
    phase: "Oral treatment",
    days: "1–28",
    exposure: "0.2 mg EDR BID (0.4 mg/day · 11.2 mg cumulative)",
    purpose:
      "Randomized vs placebo; intensive PK days 1 & 28; sentinel DSMB after day 7",
  },
  {
    id: "day56",
    phase: "Delayed follow-up",
    days: "56",
    exposure: "None",
    purpose: "Safety labs, symptom follow-up after product stop",
  },
  {
    id: "day84",
    phase: "Final visit",
    days: "84",
    exposure: "None",
    purpose: "Final safety, cognitive/symptom battery, neurologic exam",
  },
];

export const PINEALON_ORAL_SCHEDULES = [
  {
    id: "tbi",
    label: "TBI secondary report",
    morningMg: 0.2,
    eveningMg: 0.2,
    days: 28,
    note: "Best-described oral regimen (0.4 mg/day; 20–30 day course)",
  },
  {
    id: "elderly",
    label: "Elderly 14-day cohort",
    morningMg: 0.1,
    eveningMg: 0.1,
    days: 14,
    note: "0.1 mg BID · 2.8 mg cumulative",
  },
  {
    id: "athlete",
    label: "Athlete 15-day study",
    morningMg: 0.1,
    eveningMg: 0,
    days: 15,
    note: "Variable AM/PM pattern averages toward 2.0 mg total — use protocol table",
  },
  {
    id: "pine1",
    label: "Proposed PINE-1 replication",
    morningMg: 0.2,
    eveningMg: 0.2,
    days: 28,
    note: "Assay-corrected synthetic EDR capsules — research design only",
  },
];

export const PINEALON_COMPARE = {
  clinical: {
    title: "Human clinical / experimental reports",
    status: "Low evidence · incomplete methods",
    rows: [
      ["Oral amount", "0.1–0.2 mg per administration"],
      ["Oral daily", "0.1–0.4 mg/day · 14–30 days"],
      ["IM amount", "1 µg, 10 µg, or 5 mg × 10 days (patent)"],
      ["SC / IN", "No direct human schedule located"],
      ["Dose response", "Not established"],
      ["PK confirmation", "None"],
    ],
  },
  anecdotal: {
    title: "Current anecdotal / commercial",
    status: "Conventions · up to ~100× disagreement",
    rows: [
      ["Oral products", "Capsules / AC-5 complex — active EDR often unclear"],
      ["Low SC pages", "100–300 µg daily or EOD"],
      ["Mid SC pages", "1–3 mg daily × ~10 days"],
      ["High SC pages", "5–10 mg daily (often vial-size arithmetic)"],
      ["Intranasal pages", "100–400 µg — no human PK"],
      ["Primary source", "None located for modern injection schedules"],
    ],
  },
};

export const PINEALON_CLAIMS = [
  {
    id: "standard-dose",
    claim: "There is a standard Pinealon dose",
    verdict: "False",
    detail:
      "No established standard. Oral reports use 0.1–0.2 mg per dose; the patent used three severity-assigned IM amounts.",
  },
  {
    id: "epitalon-same",
    claim: "Pinealon is the same as Epitalon",
    verdict: "False",
    detail: "Pinealon is EDR (Glu-Asp-Arg). Epitalon is AEDG (Ala-Glu-Asp-Gly).",
  },
  {
    id: "sc-5-10",
    claim: "5–10 mg SC is a clinical-trial protocol",
    verdict: "False",
    detail:
      "Community convention. Some pages explicitly link amounts to 10 mg vial sizes, not dose-finding trials.",
  },
  {
    id: "sc-100-300",
    claim: "100–300 µg SC is evidence-based",
    verdict: "Unsupported for route",
    detail:
      "Closer to oral microgram magnitudes, but no direct human SC PK or dose-response study was located.",
  },
  {
    id: "intranasal",
    claim: "Intranasal Pinealon has a known human dose",
    verdict: "False",
    detail:
      "No direct human intranasal PK, safety, or dose-finding study was located.",
  },
  {
    id: "weight-based",
    claim: "Dose by the patent’s 0.01–100 µg/kg claim",
    verdict: "Invalid for personal dosing",
    detail:
      "Legal claim boundary spanning 10,000-fold. The clinical example used fixed microgram/milligram amounts.",
  },
  {
    id: "bbb",
    claim: "Pinealon is proven to cross the human BBB",
    verdict: "Not established",
    detail:
      "No direct human CSF or brain intact-EDR quantification was located.",
  },
  {
    id: "alzheimers",
    claim: "Pinealon prevents Alzheimer’s or Parkinson’s",
    verdict: "False",
    detail:
      "5xFAD mouse and gene-expression work are not human prevention or treatment evidence.",
  },
  {
    id: "antiaging",
    claim: "Pinealon is an anti-aging peptide",
    verdict: "Unsupported clinically",
    detail:
      "Studied in a gerontology program, but no controlled trial shows slower aging or longer lifespan.",
  },
  {
    id: "wada-ok",
    claim: "Not named on WADA list means allowed",
    verdict: "Unsafe assumption",
    detail:
      "S0 may cover non-approved pharmacologic substances. Athletes need written anti-doping guidance.",
  },
];

export const PINEALON_EVIDENCE_LADDER = [
  {
    level: "Established clinical use",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Modern phase 1 / dose-ranging RCT",
    exists: "None located",
    confidence: "None",
  },
  {
    level: "Human oral reports",
    exists: "Small / incompletely reported studies (0.1–0.2 mg)",
    confidence: "Low",
  },
  {
    level: "Human IM dosing",
    exists: "One patent example (1 µg / 10 µg / 5 mg)",
    confidence: "Very low",
  },
  {
    level: "Human SC / intranasal",
    exists: "No direct study located",
    confidence: "Insufficient",
  },
  {
    level: "Animal research",
    exists: "Trauma, hypoxia, diabetes, 5xFAD models",
    confidence: "Preclinical",
  },
  {
    level: "Community protocols",
    exists: "0.1–10 mg SC and IN conventions",
    confidence: "Anecdotal",
  },
];

export const PINEALON_AE_SIMPLE = [
  {
    category: "Human AE incidence",
    note: "Not adequately characterized — short reports lack modern solicited AE tables and follow-up",
  },
  {
    category: "2015 signal",
    note: "Polymorbidity report: pro-oxidant chemiluminescence and reduced circulating CD34+ markers after Pinealon or Vesugen — clinical meaning uncertain",
  },
  {
    category: "Neurologic context",
    note: "Intended populations may already have headache, sleep/mood symptoms, or seizure risk — monitor carefully in research",
  },
  {
    category: "Product / injection risks",
    note: "Identity mismatch (AC-5 vs pure EDR); sterile/endotoxin harm if injected; hypersensitivity to peptide or excipients",
  },
];

export const PINEALON_AE_FULL = [
  {
    domain: "Hypersensitivity",
    items:
      "Any peptide, excipient, or contaminant can provoke allergic reactions including anaphylaxis",
  },
  {
    domain: "Neurologic / psychiatric",
    items:
      "New seizure, syncope, acute deficit, severe headache, clinically important mental-status change — hold and evaluate in research frameworks",
  },
  {
    domain: "Hematologic",
    items:
      "2015 CD34+ signal warrants CBC, reticulocytes, and exploratory progenitor monitoring in modern protocols",
  },
  {
    domain: "Urgent red flags",
    items:
      "Trouble breathing, facial/throat swelling, seizure, fainting, acute weakness/speech change, severe headache, chest pain, persistent vomiting, high fever, injection-site infection signs",
  },
];

export const PINEALON_DOSAGE_GUIDE = {
  title: "Pinealon Dosage: Human Oral and IM Research, Protocol, and Math",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Pinealon has **no standardized US prescribing dose**. This page documents doses from patents, small human reports, secondary reviews, animal work, and research communities — it does **not** convert those reports into treatment advice. The complete protocol below is an investigator-run study framework requiring ethics approval and regulated manufacturing — **not** a self-treatment plan.",
  intro: [
    "**Most consistently reported human oral exposure:** **0.2–0.4 mg/day**. A 75-person elderly cohort reportedly used **100 µg twice daily for 14 days**; a secondary account of a 72-person post-TBI series reports **0.2 mg twice daily for 20–30 days**. A 15-day athlete study used a variable oral schedule totaling **2 mg**.",
    "**European patent IM example:** **1 µg, 10 µg, or 5 mg** once daily for 10 days assigned by injury severity — not a credible dose-finding study. Subgroup sizes were undisclosed and outcomes were pooled.",
    "**Current SC schedules** (100–300 µg, 1–3 mg, or 5–10 mg daily) disagree by ~100-fold and are community conventions. **No direct human SC or intranasal PK study** was located. Pinealon (**EDR**) is **not** Epitalon (**AEDG**).",
  ],
  glance: {
    title: "Pinealon dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        ["**Identity**", "EDR · Glu-Asp-Arg · ≈418.407 g/mol free peptide"],
        ["**≠**", "Epitalon (AEDG) · pineal extracts · AC-5 complex by default"],
        ["**Best-described oral**", "0.2 mg BID × 20–30 days (secondary TBI report)"],
        ["**Other oral**", "0.1 mg BID × 14 days; athlete 2.0 mg / 15 days"],
        ["**Patent IM**", "1 µg · 10 µg · or 5 mg once daily × 10 days"],
        ["**Validated SC / IN**", "Not located"],
        ["**Human weight-based dose**", "Not established"],
        ["**Human PK**", "Not established"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Pinealon?",
      paragraphs: [
        "Pinealon is the short synthetic peptide **L-glutamyl-L-aspartyl-L-arginine** (**EDR**). It was developed in a cortex-associated peptide-bioregulator program. It is **not** a pineal hormone, melatonin analogue, or pineal-gland extract.",
        "The name is frequently confused with **Epitalon** (Ala-Glu-Asp-Gly). Different sequences and dosing literature. Free-peptide formula **C15H26N6O8**, MW **418.407**, CAS **175175-23-2**, PubChem CID **10273502**.",
      ],
      widget: "pinealon-identity-gate",
      tables: [
        {
          caption: "Product identity is not always consistent",
          headers: ["Label", "What it may mean", "Treat as pure EDR?"],
          rows: [
            ["Synthetic EDR", "Chemically synthesized Glu-Asp-Arg", "Only if assay-verified"],
            ["Patent material", "Acetate ion pair · ~6% moisture example", "Correct for assay/water"],
            ["Historical 100 µg capsule", "0.1 mg active per capsule described", "Need batch specification"],
            ["AC-5 complex capsule/liquid", "Peptide complex + excipients", "Not automatically"],
            ["Online 5–20 mg vial", "Often lyophilized “research” EDR", "Nominal fill ≠ identity/sterility"],
          ],
        },
      ],
    },
    {
      id: "status",
      title: "Current research and regulatory status",
      paragraphs: [
        "Pinealon has **no standardized US prescribing label**. A patent protects claimed IP; it does not validate efficacy or prove modern products match tested material. Current Russian product pages often describe capsules as a dietary supplement or peptide complex.",
        "A ClinicalTrials.gov search for Pinealon / Glu-Asp-Arg did **not** locate a clearly registered interventional study as of August 2026. Existing human reports fall well short of a modern dose-development program.",
      ],
    },
    {
      id: "human-doses",
      title: "Pinealon dosages reported in human research",
      paragraphs: [
        "Only direct or secondary accounts of administered Pinealon are summarized below.",
      ],
      widget: "pinealon-human-status",
      tables: [
        {
          caption: "Human reports at a glance",
          headers: ["Source", "Amount", "Route / duration", "Main limit"],
          rows: [
            [
              "EP patent Example 8",
              "1 µg · 10 µg · or 5 mg",
              "IM once daily × 10 days",
              "Severity-confounded; pooled outcomes",
            ],
            [
              "TBI series (secondary review)",
              "0.2 mg per dose",
              "Oral BID × 20–30 days",
              "Primary full report not located",
            ],
            [
              "Balashova et al., 2008",
              "0.1 mg per dose",
              "Oral BID × 14 days",
              "Limited design/safety detail",
            ],
            [
              "Lysenko et al., 2012",
              "0.1–0.2 mg/day variable",
              "Oral × 15 days (2.0 mg total)",
              "Uncontrolled athlete before/after",
            ],
            [
              "Truck-driver study, 2012",
              "Capsule + Vesugen",
              "Oral BID × 30 days",
              "Combination; effect not isolable",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "The patent’s **5 mg** IM arm is **500×** the intermediate and **5,000×** the mild amount. Because dose followed baseline severity, the example cannot separate dose response from severity-group differences.",
      ],
    },
    {
      id: "landscape",
      title: "Reported research dosage landscape",
      paragraphs: [
        "The **1 µg–5 mg IM** and **0.1–10 mg community SC** intervals describe discordant reports — **not** a validated therapeutic range. Combining endpoints into one “standard dose” would be misleading.",
      ],
      widget: "pinealon-clinical-vs-anecdotal",
    },
    {
      id: "oral-math",
      title: "Oral exposure arithmetic",
      paragraphs: [
        "Historical capsules were often described as **100 µg active** per capsule. Course totals depend on morning/evening timing and days — use assay-corrected EDR, not gross capsule or AC-5 complex mass.",
      ],
      widget: "pinealon-oral-calc",
    },
    {
      id: "protocol",
      title: "Complete evidence-anchored research protocol (oral EDR replication)",
      paragraphs: [
        "Most defensible next human study: placebo-controlled **oral replication** of the best-described regimen using assay-confirmed synthetic EDR — **not** adoption of an online SC/IN convention.",
        "**Proposed PINE-1 exposure:** **0.2 mg** assay-corrected L-EDR orally **twice daily** for **28 days** (0.4 mg/day; **11.2 mg** cumulative) in adults with persistent cognitive symptoms after mild/moderate TBI. Primary objective: safety/tolerability; secondary: PK and feasibility.",
      ],
      widget: "pinealon-protocol-timeline",
      paragraphsAfter: [
        "No within-participant escalation, loading dose, or taper — those features are not supported by the human literature. First modern study should **not** jump to SC or intranasal without matching human PK evidence.",
      ],
    },
    {
      id: "recon",
      title: "Concentration and reconstitution math",
      paragraphs: [
        "The proposed human protocol uses manufactured oral capsules and requires **no reconstitution**. Lab/investigational-pharmacy arithmetic below does **not** validate SC use or provide a home-injection procedure.",
      ],
      widget: "pinealon-recon-calc",
      tables: [
        {
          caption: "Patent IM example reconstructed concentrations",
          headers: ["Patent amount in 1 mL", "Concentration"],
          rows: [
            ["1 µg", "0.001 mg/mL"],
            ["10 µg", "0.010 mg/mL"],
            ["5 mg", "5 mg/mL"],
          ],
        },
      ],
      paragraphsAfter: [
        "Using **418.407 g/mol**: 100 µg ≈ 0.239 µmol; 200 µg ≈ 0.478 µmol; 5 mg ≈ 11.95 µmol. Correct for salt/hydrate using the lot assay.",
      ],
    },
    {
      id: "preclinical",
      title: "Animal and laboratory research dosage",
      paragraphs: [
        "Patent toxicology used single IM mouse doses up to **5 mg/kg** and subacute/chronic IM rodent/guinea-pig regimens at **1 µg/kg–1 mg/kg**. Disease models include **10 µg/kg IM** trauma paradigms, fixed **1 µg IP** hypoxia work, **10 µg/kg IP** prenatal hyperhomocysteinemia, **50–200 ng/kg** diabetic-rat learning, and **400 µg/kg IP × 2 months** in 5xFAD mice.",
        "Animal mg/kg amounts and cell concentrations (**ng/mL** or **nM**) must **not** be copied into a human schedule.",
      ],
    },
    {
      id: "mechanisms",
      title: "How Pinealon may work",
      paragraphs: [
        "Proposed themes include reduced ROS in stressed cells, altered ERK1/2 timing, cell-cycle/apoptosis processes, NMDA-subunit expression in animals, dendritic-spine/LTP preservation in 5xFAD mice, and modeled DNA-promoter binding.",
        "Direct peptide–DNA binding, GDF11 regulation, “epigenetic rejuvenation,” and human brain target engagement have **not** been confirmed in a controlled human dosing study. No validated human bioavailability, half-life, or brain-exposure study was located.",
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
            [
              "Oral microgram courses documented in humans",
              "Yes — short, incompletely reported studies",
            ],
            ["Effective TBI / cognition dose", "Not established"],
            ["SC or intranasal clinical dose", "Not established"],
            ["Anti-aging / lifespan benefit", "Not established"],
            ["Alzheimer’s / Parkinson’s prevention", "Not established"],
            ["Athletic performance enhancement", "Uncontrolled athlete study only"],
          ],
        },
      ],
    },
    {
      id: "safety",
      title: "Pinealon safety and side effects",
      paragraphs: [
        "Short oral studies and the patent example did not describe a clear recurring adverse-event pattern — but sparse reporting is not proof of safety. Patent toxicology reports no major toxicity at tested animal doses.",
        "The **2015** polymorbidity report found **pro-oxidant** chemiluminescence and **reduced circulating CD34+** markers after Pinealon or Vesugen, with uncertain clinical meaning.",
      ],
      widget: "pinealon-adverse-events",
    },
    {
      id: "quality",
      title: "Product quality and storage",
      paragraphs: [
        "No universal beyond-use date after reconstitution is supported by a public clinical stability study. Vendor “28 days refrigerated” claims are not substitutes for stability-indicating assay and sterility programs.",
        "The patent reports acetate as an ion pair, **98.01%** HPLC area, and **6%** moisture for its example material — identify whether a milligram value is gross mass or assay-corrected EDR equivalent.",
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "pinealon-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Pinealon dosage evidence ladder",
      widget: "pinealon-evidence-ladder",
      paragraphsAfter: [
        "Pinealon dosing is **poorly established**. Oral microgram reports and a severity-confounded patent IM example do not support modern high-milligram SC schedules as clinical protocols.",
      ],
    },
    {
      id: "anti-doping",
      title: "Sports and anti-doping considerations",
      paragraphs: [
        "Pinealon is **not named individually** on the **2026 WADA** Prohibited List, but section **S0** may cover non-approved pharmacologic substances. Competitive athletes should obtain written guidance from their anti-doping organization before exposure.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "There is **no established Pinealon dose**. Human evidence mainly documents oral **0.1–0.2 mg** per administration, a secondary **0.2 mg BID × 20–30 days** account, and patent IM amounts of **1 µg / 10 µg / 5 mg** for ten days.",
        "Current SC and intranasal protocols vary by up to **100-fold** without matching human PK. The most informative next step is a regulated, placebo-controlled **oral** replication with assay-confirmed synthetic EDR, intensive PK, and modern neurologic/hematologic monitoring.",
      ],
      highlight:
        "EDR ≠ Epitalon. Gross capsule / AC-5 complex mass ≠ assay-corrected Pinealon. Community 5–10 mg SC schedules are not clinical-trial protocols.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard Pinealon dose?",
        answer:
          "There is no established standard dose. Human reports used several oral schedules and one patent used three very different fixed IM amounts.",
      },
      {
        question: "What oral Pinealon dose has been studied?",
        answer:
          "Reported schedules include 0.1 mg twice daily for 14 days, a variable 0.1–0.2 mg/day athlete course for 15 days, and 0.2 mg twice daily for 20–30 days in a secondary TBI account.",
      },
      {
        question: "What injection dose has been studied in people?",
        answer:
          "One European patent example reports 1 µg, 10 µg, or 5 mg IM once daily for ten days, assigned by injury severity. No modern direct human SC study was located.",
      },
      {
        question: "Is 5–10 mg subcutaneous Pinealon a clinical-trial protocol?",
        answer:
          "No. It is a current community convention. Some commercial pages link the amount to common 10 mg vial sizes rather than dose-finding studies.",
      },
      {
        question: "Has intranasal Pinealon been studied in humans?",
        answer:
          "No direct human intranasal PK, safety, or dose-finding study was located. Online 100–400 µg schedules are insufficiently sourced.",
      },
      {
        question: "Is Pinealon dosed by body weight?",
        answer:
          "Not in validated human research. The patent’s 0.01–100 µg/kg claim should not be treated as a personal dosing formula.",
      },
      {
        question: "Is Pinealon the same as Epitalon?",
        answer:
          "No. Pinealon is EDR (Glu-Asp-Arg); Epitalon is AEDG (Ala-Glu-Asp-Gly).",
      },
      {
        question: "Does Pinealon treat traumatic brain injury?",
        answer:
          "There are small and incompletely reported post-TBI human studies, but they do not establish clinical efficacy or replace evidence-based rehabilitation and medical care.",
      },
      {
        question: "Does Pinealon prevent Alzheimer’s or Parkinson’s disease?",
        answer:
          "No. A 5xFAD mouse study and gene-expression hypotheses are not proof of prevention or treatment in people.",
      },
      {
        question: "Can Pinealon be stacked with other peptides?",
        answer:
          "No controlled human study validates a Pinealon stack. Combining investigational products increases uncertainty and prevents attribution of benefits or harms.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "PubChem",
        title: "Glu-Asp-Arg, CID 10273502",
        detail: "Chemical identity and molecular weight.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Glu-Asp-Arg",
      },
      {
        authors: "European Patent Office",
        title: "EP 2 024 388 B1 — peptide substance stimulating CNS neuron regeneration",
        detail: "Includes human IM Example 8 and animal toxicology examples.",
        href: "https://data.epo.org/publication-server/rest/v1.2/patents/EP2024388NWB1/document.html",
      },
      {
        authors: "Khavinson VK et al.",
        title: "GDF11 Protein as a Geroprotector — review containing TBI regimen account",
        detail: "Secondary source for 0.2 mg BID oral series.",
        href: "https://khavinson.info/assets/files/skan/2016-khavinson_kuznik.pdf",
      },
      {
        authors: "Balashova SN et al.",
        title: "Peptide bioregulators in elderly psychoemotional disorders",
        detail: "0.1 mg oral BID × 14 days abstract.",
        href: "https://pubmed.ncbi.nlm.nih.gov/19432183/",
      },
      {
        authors: "Lysenko AV et al.",
        title: "Influence of Pinealon on reserve capabilities of athletes",
        detail: "15-day oral schedule totaling 2.0 mg.",
        href: "https://cyberleninka.ru/article/n/vliyanie-pinealona-na-rezervnye-vozmozhnosti-organizma-vysokokvalifitsirovannyh-sportsmenov",
      },
      {
        authors: "Meshchaninov VN et al.",
        title: "Synthetic peptides in polymorbidity",
        detail: "2015 pro-oxidant / CD34+ signal report.",
        href: "https://pubmed.ncbi.nlm.nih.gov/26390612/",
      },
      {
        authors: "Khavinson V et al.",
        title: "Neuroprotective effects of tripeptides in a mouse Alzheimer model",
        detail: "5xFAD · 400 µg/kg IP · preclinical.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8227791/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "S0 non-approved substance considerations.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
};

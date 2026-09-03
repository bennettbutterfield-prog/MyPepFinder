/**
 * Cartalax (H-Ala-Glu-Asp-OH / AED tripeptide) dosage guide.
 * Human evidence is concentrated in one patent-reported cohort (EA010574B1).
 * Modern subcutaneous protocols are community conventions — not validated clinical doses.
 */

/** Approximate molecular mass for H-Ala-Glu-Asp-OH */
export const CARTALAX_MOLECULAR_MASS = 333.3;

export function cartalaxAmountFromVial(vialMg, diluentMl, units) {
  const vial = Number(vialMg);
  const d = Number(diluentMl);
  const u = Number(units);
  if (!Number.isFinite(vial) || !Number.isFinite(d) || !Number.isFinite(u) || vial <= 0 || d <= 0 || u < 0) {
    return null;
  }
  const concMgPerMl = vial / d;
  const volumeMl = u * 0.01;
  const aedMg = concMgPerMl * volumeMl;
  const aedMcg = aedMg * 1000;
  return {
    concMgPerMl,
    volumeMl,
    aedMg,
    aedMcg,
    needsDilution: aedMcg < 50,
  };
}

export const CARTALAX_IDENTITY = [
  {
    id: "pure-aed",
    label: "Synthetic Cartalax / pure AED vial",
    verdict: "Required for injectable AED unit charts",
    detail:
      "Ideally H-Ala-Glu-Asp-OH (~333.3 g/mol), sometimes as a salt or hydrated material. Confirm sequence, intact mass, assay basis, and counterion before comparing with patent or community protocols.",
  },
  {
    id: "ac4",
    label: "Cartalax AC-4 capsules",
    verdict: "Different product category — not pure AED mass",
    detail:
      "Commercial peptide/amino-acid complex with excipients. Label directions use capsule counts (1–2 capsules one or two times daily). Total capsule mass must not be interpreted as equivalent injectable AED mass.",
  },
  {
    id: "pcc",
    label: "Cartilage polypeptide complex (PCC / PPCC)",
    verdict: "Mixture — not interchangeable with isolated AED",
    detail:
      "Tissue-derived mixture containing multiple short peptides (75–846 Da), which may include AED. Results from the mixture do not establish dosing for pure synthetic AED alone.",
  },
  {
    id: "aedl-etc",
    label: "AEDL, AEDK, AEDG, or Ala–Glu",
    verdict: "Different molecules — not Cartalax",
    detail:
      "AEDL, AEDK, and AEDG are tetra- or longer peptides. Ala–Glu is a dipeptide. An added amino acid changes molecular identity and invalidates AED-specific dosing math.",
  },
  {
    id: "unsure",
    label: "Label unclear or unsure",
    verdict: "Incomplete — confirm identity before trusting protocols",
    detail:
      "“Cartalax,” “cartilage peptide,” or “cytomedin” labels do not establish whether the material is pure AED, AC-4 complex, or a cartilage extract. Analytics should resolve identity first.",
  },
];

export const CARTALAX_PATENT_STRATA = [
  {
    id: "low",
    stratum: "Low fixed-dose stratum",
    population: "Age 52–60; pain and movement restriction during exacerbation",
    daily: "1 µg AED",
    route: "Intramuscular · 1 mL 0.9% saline",
    duration: "20 days",
    total: "20 µg",
    vialFraction: "0.1% of one 20 mg vial",
  },
  {
    id: "mid",
    stratum: "Intermediate fixed-dose stratum",
    population: "Age 60–65; moderate joint deformity",
    daily: "10 µg AED",
    route: "Intramuscular · 1 mL 0.9% saline",
    duration: "20 days",
    total: "200 µg",
    vialFraction: "1% of one 20 mg vial",
  },
  {
    id: "high",
    stratum: "High fixed-dose stratum",
    population: "Older than 65; pronounced deformity and movement restriction",
    daily: "5 mg AED",
    route: "Intramuscular · 1 mL 0.9% saline",
    duration: "20 days",
    total: "100 mg",
    vialFraction: "Five full 20 mg vials",
  },
  {
    id: "control",
    stratum: "Saline control",
    population: "12 participants — knee osteoarthritis cohort",
    daily: "No AED",
    route: "Intramuscular · 1 mL 0.9% saline",
    duration: "20 days",
    total: "None",
    vialFraction: "—",
  },
];

export const CARTALAX_COMPARE = {
  patent: {
    title: "Patent-reported human program",
    status: "EA010574B1 — not peer-reviewed RCT",
    rows: [
      ["Amount", "1 µg, 10 µg, or 5 mg (severity strata)"],
      ["Frequency", "Once daily"],
      ["Route", "Intramuscular"],
      ["Course", "20 days"],
      ["Dose selection", "Age and disease severity — not titration"],
      ["Control group", "12-person saline control"],
      ["Outcome data", "Symptoms and mobility reported; radiographs unchanged"],
      ["Pharmacokinetics", "Not reported"],
      ["Established safety", "No modern adverse-event table"],
    ],
  },
  modern: {
    title: "Modern community protocols",
    status: "Anecdotal / vendor-derived",
    rows: [
      ["Amount", "Commonly 0.1–2 mg; wider range reported"],
      ["Frequency", "Usually once daily"],
      ["Route", "Usually subcutaneous"],
      ["Course", "Usually 10–20 days"],
      ["Dose selection", "Vendor, clinic, or community convention"],
      ["Control group", "None"],
      ["Outcome data", "Primarily self-report"],
      ["Pharmacokinetics", "Not reported"],
      ["Established safety", "No"],
    ],
  },
};

export const CARTALAX_SC_PHASES = [
  {
    id: "baseline",
    phase: "Baseline",
    days: "Before day 1",
    amount: "None",
    units: "—",
    frequency: "—",
    cumulative: "—",
    purpose: "Document pain, function, range of motion, and concurrent therapy",
  },
  {
    id: "exposure",
    phase: "Exposure",
    days: "1–10",
    amount: "200 µg",
    units: "4 units (4 mL recon)",
    frequency: "Once daily",
    cumulative: "2 mg AED",
    purpose: "Representative modern community SC convention — not patent-established",
  },
  {
    id: "observation",
    phase: "Observation",
    days: "11–30",
    amount: "None",
    units: "—",
    frequency: "—",
    cumulative: "2 mg total",
    purpose: "Delayed symptom and adverse-event review without further exposure",
  },
];

export const CARTALAX_CLAIMS = [
  {
    id: "russian-10mg",
    claim: "10 mg daily for 10 days is the traditional Russian Cartalax protocol",
    status: "Insufficiently sourced",
    detail:
      "This statement is repeated online, but a primary human study of pure AED using 10 mg subcutaneously for 10 days was not identified. The patent's severe subgroup received 5 mg IM once daily for 20 days — a different route and schedule.",
  },
  {
    id: "near-joint",
    claim: "Injecting near the painful joint improves cartilage delivery",
    status: "Not demonstrated",
    detail:
      "No evidence shows that a nearby subcutaneous injection delivers more AED to articular cartilage. The patent used systemic intramuscular administration. Intra-articular injection is not supported by the Cartalax studies summarized here.",
  },
  {
    id: "oral-injectable",
    claim: "Oral AC-4 capsules are equivalent to injectable AED vials",
    status: "Not demonstrated",
    detail:
      "Capsule labels describe a commercial complex with excipients. Without a validated absolute intact-AED assay, capsule count or total capsule weight cannot be converted into injectable peptide mass. Human oral bioavailability of intact AED has not been established.",
  },
  {
    id: "rebuilds-cartilage",
    claim: "Cartalax rebuilds human articular cartilage",
    status: "Not demonstrated",
    detail:
      "Human cartilage regeneration has not been demonstrated. The patent reported no substantial radiographic improvement during its study. Growth findings come from rat chondrocytes and cartilage explants at nanogram-per-milliliter concentrations — not proven human structural repair.",
  },
  {
    id: "200ug-patent",
    claim: "200 µg daily is the patent human dose",
    status: "Misattributed",
    detail:
      "The intermediate human arm received 10 µg daily for 20 days, producing 200 µg total course exposure. A 200 µg daily subcutaneous protocol is a modern community convention — not a single daily dose from the patent cohort.",
  },
  {
    id: "weight-based",
    claim: "Cartalax dosing must be scaled by body weight",
    status: "Not established",
    detail:
      "The patent claim covers 0.01–100 µg/kg, but the human example used fixed doses (1 µg, 10 µg, 5 mg). Modern community protocols are usually fixed-dose. No controlled comparison establishes weight-based scaling.",
  },
  {
    id: "stack-bpc",
    claim: "Cartalax is safely and synergistically stacked with BPC-157 or TB-500",
    status: "Not demonstrated",
    detail:
      "No controlled study establishes the safety or added benefit of these combinations. Using multiple investigational compounds makes it difficult to attribute outcomes or adverse effects.",
  },
];

export const CARTALAX_EVIDENCE_LADDER = [
  {
    level: "US-approved dosing",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Human clinical dosing",
    exists: "Exact doses in one small patent cohort (29 adults)",
    confidence: "Low — confounded, not replicated",
  },
  {
    level: "Published experimental dosing",
    exists: "Rat chondrocytes and human MSC cultures",
    confidence: "Preclinical only",
  },
  {
    level: "Animal dosing",
    exists: "Patent-reported rodent and guinea-pig experiments",
    confidence: "Low — patent summary, limited reporting",
  },
  {
    level: "Oral product dosing",
    exists: "Commercial AC-4 label convention",
    confidence: "Low — active AED exposure uncertain",
  },
  {
    level: "Modern injectable protocols",
    exists: "100–300 µg to 1–2 mg SC · 10–20 days",
    confidence: "Very low — anecdotal / vendor-derived",
  },
  {
    level: "Long-term human dosing",
    exists: "Not established",
    confidence: "None",
  },
  {
    level: "Repeated-cycle human safety",
    exists: "Not established",
    confidence: "None",
  },
];

export const CARTALAX_AE_SIMPLE = [
  {
    topic: "Human patent cohort",
    status: "Poorly characterized",
    note: "No modern adverse-event table or withdrawal analysis reported",
  },
  {
    topic: "Animal toxicology",
    status: "Patent-reported favorable",
    note: "Useful for hypothesis generation — not human safety proof",
  },
  {
    topic: "Injection-related risk",
    status: "Elevated concern",
    note: "Product quality, concentration errors, and site reactions",
  },
  {
    topic: "Interaction profile",
    status: "Unknown",
    note: "No controlled interaction studies identified",
  },
];

export const CARTALAX_AE_FULL = [
  {
    topic: "Human patent cohort",
    status: "Poorly characterized",
    note: "Absence of reported side effects ≠ proof none occurred",
    context:
      "The patent does not provide a modern adverse-event table, laboratory-safety summary by participant, withdrawal count, or serious-adverse-event analysis for the 29-person knee study.",
  },
  {
    topic: "Animal toxicology",
    status: "Patent-reported favorable",
    note: "Incomplete by modern standards",
    context:
      "Patent reports no major toxic findings after high acute doses and repeated IM dosing in rodents and guinea pigs. Species differ from humans; immunogenicity, reproductive toxicity, and carcinogenicity are unresolved.",
  },
  {
    topic: "Injection-related risk",
    status: "Elevated for parenteral use",
    note: "1 µg vs 5 mg arms differ by three orders of magnitude",
    context:
      "Risks include incorrect sequence, endotoxin, nonsterile handling, concentration errors, injection-site pain, bruising, inflammation, abscess, and tissue injury. A decimal or unit error can move exposure into an entirely different category.",
  },
  {
    topic: "Interaction profile",
    status: "Unknown",
    note: "Stacking claims unsupported",
    context:
      "No reliable human interaction studies with NSAIDs, corticosteroids, anticoagulants, BPC-157, TB-500, growth-hormone secretagogues, or other bioregulators were identified.",
  },
  {
    topic: "Populations without safety data",
    status: "Not established",
    note: "Pregnancy, children, cancer, immunosuppression",
    context:
      "Safety has not been established for pregnancy, breastfeeding, children, active cancer, significant liver or kidney disease, autoimmune inflammatory arthritis, immunosuppression, bleeding disorders, or perioperative use.",
  },
  {
    topic: "Structural-disease risk",
    status: "Interpretation hazard",
    note: "Symptom improvement ≠ cartilage restoration",
    context:
      "Delaying evaluation of fracture, infection, ligament injury, inflammatory arthritis, nerve compression, or rapidly progressive osteoarthritis can cause harm even if the peptide produces no direct toxicity.",
  },
];

export const CARTALAX_DOSAGE_GUIDE = {
  title: "Cartalax Dosage: Research Protocols and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research note:** Cartalax is most consistently identified as the synthetic tripeptide **Ala–Glu–Asp (AED)**. Its dosing evidence is unusual: one **Eurasian patent** describes a small controlled human study, while most modern injectable protocols come from peptide clinics, vendors, and community guides rather than replicated clinical trials.",
  intro: [
    "The most traceable human schedule is the patent's **20-day intramuscular program**: **1 µg**, **10 µg**, or **5 mg** once daily assigned by age and severity — **not titration**. A **12-person saline control** was included; radiographs reportedly did **not** change substantially.",
    "Modern **subcutaneous** protocols commonly report **100–300 µg** or **0.5–2 mg** once daily for **10–20 days**. These use a **different route** and are **anecdotal** — not validated against the patent cohort.",
    "This page documents vial math only. A concentration calculator can prevent arithmetic errors, but it **cannot choose a valid dose**. The major uncertainty is biological and evidentiary — not mathematical.",
  ],
  glance: {
    title: "Cartalax dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**Molecular identity**", "H-Ala-Glu-Asp-OH; AED; T-31"],
        ["**Approximate molecular mass**", "333.30 g/mol"],
        ["**US-approved dose**", "None"],
        ["**Human dose in original patent**", "1 µg, 10 µg, or 5 mg IM once daily × 20 days"],
        ["**Patent-claimed range**", "0.01–100 µg/kg at least once daily"],
        ["**Commonly reported modern injectable amount**", "Approximately 0.1–2 mg once daily"],
        ["**Commonly reported injectable course**", "10–20 days"],
        ["**Commercial oral label convention**", "1–2 capsules, one or two times daily, 10–30 days"],
        ["**Best direct evidence**", "Rat cartilage/chondrocyte studies + one patent-reported human cohort"],
        ["**Human pharmacokinetics**", "Not established"],
        ["**Proven human cartilage regeneration**", "Not demonstrated"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Cartalax?",
      paragraphs: [
        "Cartalax is a short peptide associated with the peptide-bioregulator research program developed by Vladimir Khavinson and colleagues in Russia. The clearest primary structural source is the patent for **alanyl-glutamyl-aspartic acid**, written as **H-Ala-Glu-Asp-OH**. Chemical databases list the same tripeptide as Ala–Glu–Asp, AED, T-31, and Cartalax.",
      ],
      tables: [
        {
          caption: "Cartalax / AED properties",
          headers: ["Property", "Value"],
          rows: [
            ["Amino-acid sequence", "Alanine–glutamic acid–aspartic acid"],
            ["One-letter sequence", "AED"],
            ["Peptide length", "3 amino acids"],
            ["Molecular formula", "C₁₂H₁₉N₃O₈"],
            ["Average molecular mass", "333.297 g/mol"],
            ["PubChem CID", "87815447"],
            ["ChEBI identifier", "CHEBI:158137"],
            ["Patent sequence", "H-Ala-Glu-Asp-OH, SEQ ID NO: 1"],
          ],
        },
      ],
    },
    {
      id: "identity",
      title: "The Cartalax identity problem",
      paragraphs: [
        "The word **Cartalax** is used online for several materially different products. A study of one form does not automatically support another. Confirm sequence, intact mass, assay basis, and counterion before comparing protocols.",
      ],
      widget: "cartalax-identity-gate",
      tables: [
        {
          caption: "Name vs what it may contain",
          headers: ["Name on label or webpage", "What it may contain", "Pure AED?"],
          rows: [
            [
              "Synthetic Cartalax / AED vial",
              "Ideally H-Ala-Glu-Asp-OH, sometimes as salt or hydrate",
              "Only after sequence, mass, assay, and counterion confirmed",
            ],
            [
              "Cartalax AC-4 capsules",
              "Commercial peptide/amino-acid complex plus excipients",
              "No — label does not establish injectable AED mass",
            ],
            [
              "Cartilage polypeptide complex (PCC / PPCC)",
              "Mixture from animal cartilage with multiple short peptides",
              "No — mixture is not isolated tripeptide",
            ],
            [
              "Cartilage extract or “cytomedin”",
              "Tissue-derived peptide mixture with variable composition",
              "No",
            ],
            [
              "AEDL, AEDK, or AEDG",
              "Different tetra- or longer peptides",
              "No — added amino acid changes identity",
            ],
            ["Ala–Glu", "Two-amino-acid peptide", "No — not AED"],
          ],
        },
        {
          caption: "Quality checks for a research vial",
          headers: ["Specification", "Why it matters"],
          rows: [
            ["Sequence confirmation", "Distinguishes AED from AEDL, AEDK, AEDG, or cartilage extract"],
            ["Intact-mass analysis", "Confirms expected molecular species — not amino-acid composition alone"],
            ["Assay basis", "Clarifies whether “20 mg” means free peptide, salt, or total lyophilized solids"],
            ["Counterion and water content", "Can change mass represented by a labeled milligram"],
            ["HPLC plus mass spectrometry", "Purity percentage alone does not prove identity"],
            ["Residual solvents and synthesis impurities", "Particularly relevant for a very small synthetic peptide"],
            ["Sterility and endotoxin", "Essential for any parenteral experiment"],
            ["Stability after preparation", "Needed before assigning a beyond-use period"],
          ],
        },
      ],
      notes: [
        "A certificate showing only “99% purity” is not enough to establish sequence, absolute peptide content, sterility, endotoxin, or stability.",
      ],
    },
    {
      id: "regulatory",
      title: "Current research status",
      paragraphs: [
        "No US prescribing label or established US dosage exists for Cartalax. A search of US drug and trial registries did not identify a completed FDA development program under **Cartalax** or **Ala–Glu–Asp**. The compound is nevertheless described in a Eurasian patent, Russian-language product materials, and a small group of laboratory publications.",
        "Patent protection, dietary-supplement registration in another country, and publication of a cell experiment answer different questions. None by itself establishes an approved drug dose, clinical effectiveness, or interchangeability among injectable AED, oral AC-4, and cartilage-derived peptide complexes.",
      ],
      highlight:
        "There is no US-approved Cartalax dose. Human pharmacokinetics are not established, and cartilage regeneration in humans has not been demonstrated.",
    },
    {
      id: "patent-human",
      title: "Dosage used in human research — patent-reported knee osteoarthritis study",
      paragraphs: [
        "The most concrete human dosing information appears in [Eurasian patent EA010574B1](https://patents.google.com/patent/EA010574B1/en), **not in a peer-reviewed clinical paper**. The patent describes 29 adults aged 52–72 with knee osteoarthritis lasting 5–20 years. Participants were divided into an active group and a **12-person saline-injection control group**. The active group was then divided by **age and severity** — not randomized dose assignment.",
        "The patent reported reduced pain and increased joint mobility in 54.5–62.7% of treated cases, depending on severity. It also stated that radiographic findings did **not** change substantially during the study period.",
      ],
      widget: "cartalax-patent-strata",
      tables: [
        {
          caption: "Patent subgroup dosing (EA010574B1)",
          headers: [
            "Patent subgroup",
            "Population",
            "AED amount",
            "Frequency",
            "Route",
            "Duration",
            "Total AED",
          ],
          rows: [
            [
              "Early-stage",
              "Age 52–60; pain during exacerbation",
              "1 µg",
              "Once daily",
              "IM in 1 mL 0.9% saline",
              "20 days",
              "20 µg",
            ],
            [
              "Moderate",
              "Age 60–65; moderate joint deformity",
              "10 µg",
              "Once daily",
              "IM in 1 mL 0.9% saline",
              "20 days",
              "200 µg",
            ],
            [
              "Severe",
              "Older than 65; pronounced deformity",
              "5 mg",
              "Once daily",
              "IM in 1 mL 0.9% saline",
              "20 days",
              "100 mg",
            ],
            ["Control", "12 participants", "Saline only", "Once daily", "IM", "20 days", "None"],
          ],
        },
      ],
    },
    {
      id: "patent-evidence",
      title: "What this human evidence does and does not show",
      tables: [
        {
          caption: "Supports vs does not establish",
          headers: ["Supports", "Does not establish"],
          rows: [
            ["AED was administered to humans in the patent program", "Replicated or independently reviewed clinical benefit"],
            ["Three exact fixed doses and a 20-day IM schedule were described", "Which dose is optimal"],
            ["A saline control group was included", "Adequate blinding or allocation concealment"],
            ["Symptoms and joint mobility reportedly improved in some active participants", "Regrowth of cartilage"],
            ["Radiographs reportedly did not materially improve", "Long-term structural disease modification"],
          ],
        },
      ],
      paragraphsAfter: [
        "Critical limitations include the small sample, missing active-subgroup sizes, severity-based rather than randomized dose allocation, an unexplained **5,000-fold** dose span, incomplete adverse-event reporting, no pharmacokinetics, no validated modern outcome scale, no published statistical analysis by dose, and no independent replication.",
        "The study should therefore be described as **patent-reported controlled human evidence**, not as a conventional randomized clinical trial establishing a therapeutic dose. The patent's broader claim of **0.01–100 µg/kg** at least once daily is a **patent claim**, not a validated clinical dosage range — for a 70 kg subject that mathematical span is 0.7 µg to 7 mg per day.",
      ],
    },
    {
      id: "patent-protocol",
      title: "Complete patent-derived 20-day Cartalax research protocol",
      paragraphs: [
        "This protocol reconstructs the dosing schedule stated in the patent and adds a modern measurement framework. The measurement schedule and stop rules below are study-design additions; they were **not reported in the patent**.",
        "The patent did **not titrate** participants from one dose to the next. A research participant belonged to **one stratum for the entire course**. These strata should not be combined into an escalation schedule.",
      ],
      subsections: [
        {
          title: "Phase 1: identity and baseline documentation",
          bullets: [
            "Exact sequence and intact mass of the test article",
            "Peptide content per vial after accounting for salt, counterion, and water",
            "Sterility, endotoxin, and particulate testing for the intended route",
            "Target joint and radiographic diagnosis",
            "Pain on a fixed 0–10 numeric rating scale",
            "WOMAC or KOOS score using the same version at every visit",
            "Active and passive range of motion",
            "Timed chair stand, walking test, or another predefined functional measure",
            "Analgesic and anti-inflammatory medication use",
            "Physical-therapy and exercise exposure",
            "Any confounding acute injury, inflammatory arthritis, infection, or neurologic cause",
          ],
        },
        {
          title: "Phase 2: select one historical dose stratum",
          tables: [
            {
              caption: "Historical strata — do not combine or escalate",
              headers: ["Historical stratum", "Days 1–20", "Frequency", "Route", "Daily preparation"],
              rows: [
                ["Low fixed-dose", "1 µg AED", "Once daily", "Intramuscular", "1 mL sterile 0.9% saline"],
                ["Intermediate fixed-dose", "10 µg AED", "Once daily", "Intramuscular", "1 mL sterile 0.9% saline"],
                ["High fixed-dose", "5 mg AED", "Once daily", "Intramuscular", "1 mL sterile 0.9% saline"],
                ["Control", "No AED", "Once daily", "Intramuscular", "1 mL sterile 0.9% saline"],
              ],
            },
            {
              caption: "Material required for full 20-day course (20 mg vial basis)",
              headers: ["Stratum", "Daily amount", "20-day total", "Fraction of one 20 mg vial"],
              align: ["left", "right", "right", "right"],
              rows: [
                ["Low", "1 µg", "20 µg", "0.1%"],
                ["Intermediate", "10 µg", "200 µg", "1%"],
                ["High", "5 mg", "100 mg", "Five full vials"],
              ],
            },
          ],
        },
        {
          title: "Phase 3: measurement schedule",
          tables: [
            {
              caption: "Research measurements",
              headers: ["Time point", "Research measurements"],
              rows: [
                [
                  "Baseline",
                  "Pain, WOMAC/KOOS, range of motion, functional test, medication use, physical activity",
                ],
                ["Day 5", "Injection tolerability, pain, medication use, new symptoms"],
                ["Day 10", "Pain, function, range of motion, adverse-event review"],
                ["Day 20", "Primary end-of-exposure assessment using full baseline battery"],
                ["Day 50", "Persistence assessment 30 days after exposure"],
                ["Day 80", "Optional longer follow-up and structural imaging when scientifically justified"],
              ],
            },
          ],
          notes: [
            "MRI or radiography should not be repeated after only a few days with an expectation of visible cartilage regeneration. Structural endpoints require an appropriate time horizon and blinded image analysis.",
          ],
        },
        {
          title: "Phase 4: predefined early-stop criteria",
          bullets: [
            "Serious hypersensitivity reaction",
            "Fever, spreading redness, drainage, or other evidence of injection-related infection",
            "New severe joint swelling, warmth, redness, or inability to bear weight",
            "Neurologic deficit or rapidly progressive weakness",
            "Serious systemic adverse event",
            "Confirmed preparation, sterility, or labeling failure",
            "Dosing error outside the prespecified tolerance",
          ],
        },
      ],
    },
    {
      id: "research-dosage",
      title: "Cartalax research dosage",
      paragraphs: [
        "The table below documents commonly reported protocols from patent claims, the patent human example, and modern community conventions. Examples documenting the modern injectable landscape include community calculation guides — they document what is being repeated online; they do **not** establish clinical effectiveness.",
      ],
      tables: [
        {
          caption: "Commonly reported protocols",
          headers: [
            "Protocol source",
            "Reported amount",
            "Frequency",
            "Route",
            "Duration",
            "Evidence classification",
          ],
          rows: [
            [
              "Eurasian patent claim",
              "0.01–100 µg/kg",
              "At least once daily",
              "Parenteral; IM in claim",
              "Not defined",
              "Patent claim — not validated dose range",
            ],
            [
              "Patent human low stratum",
              "1 µg",
              "Once daily",
              "IM",
              "20 days",
              "Controlled human report in a patent",
            ],
            [
              "Patent human intermediate stratum",
              "10 µg",
              "Once daily",
              "IM",
              "20 days",
              "Controlled human report in a patent",
            ],
            [
              "Patent human high stratum",
              "5 mg",
              "Once daily",
              "IM",
              "20 days",
              "Controlled human report in a patent",
            ],
            [
              "Very-low-dose modern convention",
              "10–20 µg",
              "Once daily",
              "Usually SC",
              "10 days",
              "Anecdotal; limited traceability",
            ],
            [
              "Low community convention",
              "100–300 µg",
              "Once daily",
              "SC",
              "10 days",
              "Anecdotal / vendor protocol",
            ],
            [
              "Middle community convention",
              "0.5–1 mg",
              "Once daily",
              "SC",
              "10–20 days",
              "Anecdotal / vendor protocol",
            ],
            [
              "Upper community convention",
              "1–2 mg",
              "Once daily",
              "SC",
              "10–20 days",
              "Anecdotal / vendor protocol",
            ],
            [
              "High online convention",
              "5–10 mg",
              "Once daily",
              "SC or unstated",
              "10 days",
              "Insufficient evidence; source copying likely",
            ],
            [
              "Commercial AC-4 capsule label",
              "1–2 capsules",
              "One or two times daily with food",
              "Oral",
              "10–30 days",
              "Product-label convention; pure AED mass unclear",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "The original patent supports the historical existence of a **20-day intramuscular** program using three fixed doses. It does **not** validate the modern **subcutaneous** route, the popular **10-day** course, bedtime administration, local injection near a painful joint, or combinations with BPC-157, TB-500, GHK-Cu, growth hormone secretagogues, or other bioregulators.",
      ],
    },
    {
      id: "sc-protocol",
      title: "Complete reported 10-day subcutaneous protocol",
      paragraphs: [
        "The following is a **representative modern community protocol**, included because it is frequently encountered in Cartalax searches. It is **not** the route or dose established by the patent's human cohort.",
        "Assumes a **20 mg vial prepared to 4 mL** (5 mg/mL). One U-100 unit equals 0.01 mL and mathematically contains **50 µg** of AED. The cycle delivers **2 mg total AED** — one-fiftieth of the patent's 100 mg high-dose course and ten times the patent's 200 µg intermediate **total** course.",
      ],
      widget: "cartalax-sc-protocol",
      tables: [
        {
          caption: "10-day exposure at 200 µg daily (5 mg/mL concentration)",
          headers: ["Phase", "Days", "Amount", "U-100 volume", "Frequency", "Cumulative AED"],
          align: ["left", "right", "right", "right", "left", "right"],
          rows: [
            ["Baseline", "Before day 1", "None", "—", "—", "—"],
            ["Exposure", "1–10", "200 µg", "4 units", "Once daily", "2 mg"],
            ["Observation", "11–30", "None", "—", "—", "2 mg total"],
          ],
        },
        {
          caption: "Measurement framework",
          headers: ["Time point", "Suggested research endpoint"],
          rows: [
            [
              "Baseline",
              "Pain, function, range of motion, activity, concurrent therapy, standardized imaging when relevant",
            ],
            ["Day 5", "Tolerability and symptom log review"],
            ["Day 10", "End-of-exposure pain and functional assessment"],
            ["Day 20", "Delayed symptom and adverse-event review"],
            ["Day 30", "Final cycle assessment"],
          ],
        },
        {
          caption: "Reported fixed-dose variations (same 5 mg/mL concentration)",
          headers: ["Reported amount", "U-100 draw", "10-day total", "20-day total", "Evidence"],
          align: ["right", "right", "right", "right", "left"],
          rows: [
            ["100 µg", "2 units", "1 mg", "2 mg", "Community convention"],
            ["200 µg", "4 units", "2 mg", "4 mg", "Community convention"],
            ["250 µg", "5 units", "2.5 mg", "5 mg", "Community convention"],
            ["300 µg", "6 units", "3 mg", "6 mg", "Community convention"],
            ["500 µg", "10 units", "5 mg", "10 mg", "Community convention"],
            ["1 mg", "20 units", "10 mg", "20 mg", "Community convention"],
            ["2 mg", "40 units", "20 mg", "40 mg", "Upper community convention"],
            [
              "5 mg",
              "100 units",
              "50 mg",
              "100 mg",
              "Matches patent fixed amount in mass only; route differs",
            ],
          ],
        },
      ],
      notes: [
        "There is no evidence-based escalation step. Increasing the amount in response to persistent pain would confound the study and should not be presented as a validated titration method.",
        "“Matches in mass” does not mean “matches the study.” The patent used intramuscular administration in 1 mL saline, whereas this table describes subcutaneous volume math.",
      ],
    },
    {
      id: "oral-protocol",
      title: "Complete commercial oral Cartalax protocol",
      paragraphs: [
        "Commercial capsule directions commonly report **1–2 capsules one or two times daily with food for 10–30 days**, with repeat intervals of **4–6 months** stated on some product instructions. This is a **capsule-count protocol**, not a milligram protocol for pure AED.",
        "A capsule weighing 0.2 or 0.215 grams includes carrier and shell material and should not be described as containing 200 or 215 milligrams of Cartalax peptide. Unless the label provides a validated absolute assay of AED, oral exposure cannot be converted into an injectable dose or compared directly with the patent.",
        "Human oral bioavailability, intact AED absorption, peak concentration, half-life, and delivery to articular cartilage have **not** been established.",
      ],
      tables: [
        {
          caption: "Commercial oral-label convention (AC-4)",
          headers: ["Phase", "Amount", "Frequency", "Timing", "Duration", "Repeat interval"],
          rows: [
            [
              "Oral-label course",
              "1–2 capsules",
              "One or two times daily",
              "With food",
              "10–30 days",
              "Commonly 4–6 months",
            ],
          ],
        },
      ],
    },
    {
      id: "reconstitution",
      title: "Cartalax reconstitution and concentration math",
      paragraphs: [
        "The tables below provide concentration calculations for analytically verified AED vials. They do **not** establish sterility, compatibility with a diluent, or a valid beyond-use date.",
        "Use the vial's **assayed peptide mass** — not the nominal total powder mass: **Concentration (mg/mL) = assayed peptide (mg) ÷ final volume (mL)** · **Volume (mL) = target amount (mg) ÷ concentration (mg/mL)** · **U-100 units = volume (mL) × 100**.",
      ],
      widget: "cartalax-recon-calc",
      tables: [
        {
          caption: "Twenty-milligram vial with 2 mL (10 mg/mL · 100 µg per unit)",
          headers: ["Target AED amount", "Volume", "U-100 units"],
          align: ["right", "right", "right"],
          rows: [
            ["10 µg", "0.001 mL", "0.1 unit — not reliably measurable"],
            ["50 µg", "0.005 mL", "0.5 unit"],
            ["100 µg", "0.01 mL", "1 unit"],
            ["200 µg", "0.02 mL", "2 units"],
            ["250 µg", "0.025 mL", "2.5 units"],
            ["300 µg", "0.03 mL", "3 units"],
            ["500 µg", "0.05 mL", "5 units"],
            ["1 mg", "0.10 mL", "10 units"],
            ["2 mg", "0.20 mL", "20 units"],
            ["5 mg", "0.50 mL", "50 units"],
            ["10 mg", "1.00 mL", "100 units"],
          ],
        },
        {
          caption: "Twenty-milligram vial with 4 mL (5 mg/mL · 50 µg per unit)",
          headers: ["Target AED amount", "Volume", "U-100 units"],
          align: ["right", "right", "right"],
          rows: [
            ["10 µg", "0.002 mL", "0.2 unit — not reliably measurable"],
            ["50 µg", "0.01 mL", "1 unit"],
            ["100 µg", "0.02 mL", "2 units"],
            ["200 µg", "0.04 mL", "4 units"],
            ["250 µg", "0.05 mL", "5 units"],
            ["300 µg", "0.06 mL", "6 units"],
            ["500 µg", "0.10 mL", "10 units"],
            ["1 mg", "0.20 mL", "20 units"],
            ["2 mg", "0.40 mL", "40 units"],
            ["5 mg", "1.00 mL", "100 units"],
          ],
        },
        {
          caption: "Laboratory dilution for patent 1 µg and 10 µg arms",
          headers: ["Step / target", "Detail"],
          rows: [
            [
              "Problem",
              "Low patent doses cannot be measured accurately from 5–10 mg/mL stock with an ordinary U-100 syringe",
            ],
            [
              "Example dilution",
              "1:100 of 5 mg/mL stock → 0.1 mL stock + 9.9 mL diluent = 50 µg/mL working solution",
            ],
            ["At 50 µg/mL", "1 U-100 unit = 0.5 µg AED"],
            ["1 µg target", "0.02 mL (2 units) from 50 µg/mL working solution"],
            ["10 µg target", "0.20 mL (20 units) from 50 µg/mL working solution"],
          ],
        },
      ],
      notes: [
        "This is dilution math, not a validated patient preparation. Serial dilution magnifies contamination, adsorption, labeling, and calculation risks. It requires controlled aseptic compounding, appropriate containers, an assay confirming final concentration, and stability data.",
        "Adding 2 mL of diluent does not always produce exactly 2 mL of final solution because displacement and handling loss can matter.",
      ],
    },
    {
      id: "reported-range",
      title: "Reported Cartalax dosage range",
      tables: [
        {
          caption: "Online protocol landscape",
          headers: ["Category", "Summary"],
          rows: [
            ["Approved dosage", "None"],
            ["Human patent dose", "1 µg, 10 µg, or 5 mg once daily IM × 20 days"],
            ["Patent claim", "0.01–100 µg/kg at least once daily"],
            ["Common modern injectable amount", "Approximately 100–1,000 µg once daily"],
            ["Broader online injectable range", "Approximately 10 µg to 10 mg once daily"],
            ["Common modern route", "Subcutaneous — unlike patent IM route"],
            ["Common modern duration", "10–20 days"],
            ["Commercial oral convention", "1–2 capsules, one or two times daily, 10–30 days"],
            ["Long-term human dosing", "Not established"],
            ["Overall dose confidence", "Low"],
          ],
        },
      ],
      notes: [
        "The online range spans 1,000-fold, and the patent's fixed human doses span 5,000-fold. That is evidence of uncertainty — not a broad proven therapeutic window.",
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus formally described dosing",
      widget: "cartalax-patent-vs-modern",
    },
    {
      id: "why-doses",
      title: "Why these Cartalax protocols exist",
      subsections: [
        {
          title: "Twenty-day intramuscular dosing",
          paragraphs: [
            "This schedule comes directly from the patent's human example. It is the most traceable Cartalax regimen, although the study is not a peer-reviewed clinical trial and provides insufficient detail for a definitive dose recommendation.",
          ],
        },
        {
          title: "Ten-day cycles",
          paragraphs: [
            "The patent used a 10-day subcutaneous course in epiphysectomized rats at 0.5 µg per animal. Commercial bioregulator products also commonly use short 10–30-day courses. Modern peptide websites appear to have generalized this short-course pattern to injectable AED, often without preserving the original species, route, dose, or formulation.",
          ],
        },
        {
          title: "Four-to-six-month repeat intervals",
          paragraphs: [
            "This interval appears on commercial oral AC-4 product instructions. It has not been established by a controlled repeated-cycle study of synthetic injectable AED.",
          ],
        },
        {
          title: "Morning, evening, or “near the joint” timing",
          paragraphs: [
            "No human pharmacokinetic study establishes an optimal time of day. The patent used systemic intramuscular administration and does not support injecting beside or into a painful joint. Subcutaneous administration near the knee has not been shown to deliver more AED into cartilage.",
          ],
        },
        {
          title: "Weight-based dosing",
          paragraphs: [
            "The patent claim uses 0.01–100 µg/kg, but the clinical example uses fixed doses. Modern community protocols are usually fixed-dose. No controlled comparison establishes that Cartalax should be scaled by body weight.",
          ],
        },
      ],
    },
    {
      id: "preclinical",
      title: "Preclinical Cartalax dosage",
      paragraphs: [
        "**Animal and laboratory research — do not convert these amounts into a human protocol.** Rat chondrocyte experiments reported activity at approximately **200 ng/mL**; cartilage explants at approximately **100 ng/mL**. No study shows that an injected human dose produces those concentrations inside articular cartilage.",
      ],
      tables: [
        {
          caption: "Preclinical AED exposure (selected)",
          headers: [
            "Model",
            "AED exposure",
            "Route or system",
            "Duration",
            "Main reported finding",
            "Evidence limitation",
          ],
          rows: [
            [
              "Primary chondrocytes (young and old rats)",
              "20, 200, 2,000 ng/mL; 200 ng/mL effective",
              "Cell culture",
              "Five-day growth assessment",
              "Chondrocyte numbers increased vs control",
              "In-vitro concentration; no human exposure mapping",
            ],
            [
              "Rat femoral-head cartilage explants",
              "1, 10, 100, 200, 400 ng/mL; 100 ng/mL active",
              "Organotypic culture",
              "Three and seven days",
              "Explant area index +26% at 100 ng/mL",
              "Patent experiment; not an intact joint",
            ],
            [
              "Epiphysectomized male Wistar rats",
              "0.5 µg per rat",
              "SC in 0.5 mL saline",
              "Once daily × 10 days",
              "Changes in calcitonin-producing thyroid C-cells",
              "Indirect endpoint — not cartilage repair",
            ],
            [
              "Acute toxicity, male mice",
              "1–5 mg/kg",
              "Single IM injection",
              "One exposure",
              "Patent reported no toxic reaction",
              "Patent summary; not peer-reviewed human safety",
            ],
            [
              "Subacute toxicity, male rats",
              "1 µg/kg, 0.1 mg/kg, or 1 mg/kg",
              "IM once daily",
              "90 days",
              "Patent reported no major pathological changes",
              "Limited reporting; no human translation",
            ],
            [
              "Chronic toxicity, male guinea pigs",
              "1 µg/kg, 0.1 mg/kg, or 1 mg/kg",
              "IM once daily",
              "Six months",
              "Patent reported no major pathological changes",
              "Species, route, and reporting limitations",
            ],
            [
              "Aged human embryonic bone-marrow MSC cultures",
              "Nanomolar AED exposure",
              "Cell culture",
              "Study-specific",
              "Altered IGF1 and NFκB-related gene expression",
              "Human cells — not human dosing or cartilage outcome",
            ],
          ],
        },
      ],
    },
    {
      id: "mechanism",
      title: "How Cartalax may work",
      numbered: [
        "**Chondrocyte proliferation** — Rat chondrocytes exposed to AED at 20, 200, or 2,000 ng/mL showed greater cell numbers; 200 ng/mL was identified as effective. A separate patent experiment found a 26% increase in cartilage-explant growth-area index at 100 ng/mL. These are proliferation signals in culture — not proof of load-bearing human cartilage repair.",
        "**Mesenchymal-stem-cell signaling** — In aged human MSC cultures, AED altered expression of aging-related genes including IGF1 and NFκB. A gene-expression change does not specify the net effect in an osteoarthritic joint.",
        "**Direct DNA and chromatin interaction** — Khavinson and colleagues proposed that ultrashort peptides enter cells and interact with DNA or histones. AED reportedly recognized an **ACCT** DNA sequence in an experimental binding system. Clinically relevant receptor engagement in human cartilage has not been established.",
        "**Skin-fibroblast findings** — AED was one of four peptides studied in aging human skin-fibroblast cultures, altering Ki-67, CD98hc, and MMP-9 expression. Laboratory evidence — not a human anti-aging or wound-healing trial of Cartalax.",
        "**Oral transport hypothesis** — Di- and tripeptides can use peptide transport systems in some tissues. Modeling studies investigated POT or LAT carrier involvement. This makes oral absorption a testable hypothesis — not established human pharmacokinetics.",
      ],
      widgetAfter: "cartalax-claim-checker",
    },
    {
      id: "results",
      title: "What results have actually been shown?",
      tables: [
        {
          caption: "Claimed result vs honest interpretation",
          headers: ["Claimed result", "Best available evidence", "Honest interpretation"],
          rows: [
            ["Less joint pain", "Patent-reported small human cohort", "Preliminary — not independently replicated"],
            ["Better joint mobility", "Patent-reported small human cohort", "Preliminary; modern validated scale not reported"],
            ["Visible cartilage regeneration", "No convincing human evidence", "Not demonstrated"],
            ["Radiographic improvement", "Patent reported no substantial change", "Negative structural finding during study period"],
            ["More chondrocytes", "Rat cell-culture study", "Preclinical signal only"],
            ["Greater cartilage-explant growth", "Rat organotypic culture in patent", "Preclinical signal only"],
            ["Anti-aging gene regulation", "Human-cell culture studies", "Mechanistic — not a clinical outcome"],
            ["Benefit from oral capsules", "Commercial reports and label claims", "Product-specific evidence not sufficiently transparent"],
          ],
        },
      ],
      notes: [
        "There is no defensible evidence-based promise that pain should improve in a particular week or that cartilage thickness should increase after one cycle.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Cartalax dosage evidence ladder",
      paragraphs: [
        "Cartalax dosing is poorly established despite exact numbers in the original patent. The patent's three human doses differ by up to **5,000-fold** and were confounded with age and disease severity, while modern subcutaneous protocols use a different route and are not supported by controlled trials.",
      ],
      widget: "cartalax-evidence-ladder",
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "The patent does not provide a modern adverse-event table for the 29-person knee study. An absence of detailed reported side effects is **not** evidence that side effects did not occur. For any nonapproved parenteral product, immediate risks can come from the preparation rather than the intended peptide.",
      ],
      widget: "cartalax-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "No universally validated storage period exists for research Cartalax vials. A supplier's generic “28 days refrigerated” statement is not a substitute for formulation-specific stability and sterility data.",
      ],
      tables: [
        {
          caption: "Evidence-based handling principles",
          headers: ["Form", "Handling principle"],
          rows: [
            [
              "Lyophilized synthetic AED",
              "Follow manufacturer's validated temperature, moisture, and light specifications",
            ],
            [
              "Prepared parenteral solution",
              "Use only a formulation with defined compatibility, sterility, concentration, and beyond-use data",
            ],
            [
              "Laboratory working dilution",
              "Prepare under controlled conditions; adsorption and concentration error increasingly important at microgram levels",
            ],
            [
              "Commercial oral capsules",
              "Product instructions commonly specify dry, light-protected storage between approximately 2–25°C",
            ],
          ],
        },
      ],
      notes: [
        "Freezing, repeated temperature cycling, using a visibly changed solution, or assuming all diluents are interchangeable can invalidate an experiment.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Cartalax is the defined tripeptide **Ala–Glu–Asp**, not a generic name for every cartilage extract, AC-4 capsule, or AED-containing mixture. Its original patent provides unusually specific human dosing information: **1 µg**, **10 µg**, or **5 mg** intramuscularly once daily for **20 days**. That report is small, incompletely described, and not independently replicated.",
        "Modern 10–20-day subcutaneous protocols are easier to find online than controlled data, but their doses and routes do not match the original human program. The most defensible presentation therefore documents the exact patent schedule, the separate community landscape, transparent vial math, and direct preclinical findings — without turning any of them into a universal Cartalax recommendation.",
      ],
      highlight:
        "Confirm pure AED identity before trusting unit charts. A calculator documents vial math only — it cannot choose a valid dose.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the most evidence-based Cartalax dose?",
        answer:
          "No single dose has been validated. The most traceable human schedule is the patent's 20-day intramuscular program, but it used three fixed amounts — 1 µg, 10 µg, and 5 mg — and did not establish which was optimal.",
      },
      {
        question: "What dose was used in the human Cartalax study?",
        answer:
          "The patent describes 1 µg, 10 µg, or 5 mg once daily by intramuscular injection for 20 days. Dose assignment depended on age and disease severity — not titration.",
      },
      {
        question: "Was the human study peer reviewed?",
        answer:
          "No peer-reviewed clinical paper containing the full protocol and results was identified. The study appears as an example in a patent and should be weighted accordingly.",
      },
      {
        question: "What is the common modern Cartalax protocol?",
        answer:
          "Modern sources commonly report 100–300 µg once daily for 10 days or 0.5–1 mg once daily for 10–20 days by subcutaneous injection. These are community and vendor conventions, not established clinical doses.",
      },
      {
        question: "Is 200 µg a clinically studied dose?",
        answer:
          "Not as a single daily human dose in the patent. The intermediate human arm received 10 µg daily for 20 days, producing 200 µg total course exposure. A 200 µg daily subcutaneous protocol is a modern convention.",
      },
      {
        question: "Is 5 mg a real research dose?",
        answer:
          "Yes — the patent states that its severe subgroup received 5 mg IM once daily for 20 days. However, the subgroup was small and not independently replicated, and the dose should not be generalized to a different route or population.",
      },
      {
        question: "Is 10 mg daily a traditional Russian Cartalax protocol?",
        answer:
          "That statement is repeated online, but a primary human study of pure AED using 10 mg subcutaneously for 10 days was not identified. The claim is insufficiently sourced.",
      },
      {
        question: "Does Cartalax dosing depend on body weight?",
        answer:
          "The patent claim covers 0.01–100 µg/kg, while the human example used fixed doses. No study establishes that modern Cartalax dosing should be weight based.",
      },
      {
        question: "Is Cartalax injected subcutaneously or intramuscularly?",
        answer:
          "The patent's human protocol used intramuscular injection. Modern community protocols usually use subcutaneous injection. The routes have not been compared for pharmacokinetics, efficacy, or safety.",
      },
      {
        question: "Should Cartalax be injected near the injured joint?",
        answer:
          "No evidence shows that a nearby subcutaneous injection delivers more AED to cartilage. The patent used systemic intramuscular administration.",
      },
      {
        question: "How long is a Cartalax cycle?",
        answer:
          "The human patent course lasted 20 days. Modern injectable conventions usually last 10–20 days, and commercial oral instructions commonly state 10–30 days.",
      },
      {
        question: "How often are Cartalax cycles repeated?",
        answer:
          "Oral product instructions commonly state every 4–6 months. No controlled repeated-cycle study establishes that interval for synthetic injectable AED.",
      },
      {
        question: "Is Cartalax the same as a cartilage polypeptide complex?",
        answer:
          "No. Pure Cartalax is AED, a defined tripeptide. A cartilage polypeptide complex contains multiple components and may include AED among them.",
      },
      {
        question: "Is an AC-4 capsule equivalent to an AED vial?",
        answer:
          "No. Capsule labels describe a commercial complex with excipients. Without an absolute intact-AED assay, capsule count or total capsule weight cannot be converted into injectable peptide mass.",
      },
      {
        question: "Is Cartalax the same as AEDL or AEDG?",
        answer:
          "No. AEDL and AEDG contain four amino acids and are distinct molecules. Cartalax is most consistently identified as H-Ala-Glu-Asp-OH.",
      },
      {
        question: "Does Cartalax rebuild cartilage?",
        answer:
          "Human cartilage regeneration has not been demonstrated. The patent reported no substantial radiographic improvement during its study, while growth findings come from rat cells and tissue explants.",
      },
      {
        question: "How quickly does Cartalax work?",
        answer:
          "There is no validated onset timeline. The patent evaluated a 20-day course and reported symptom and mobility changes in some participants, but it does not support precise week-by-week promises.",
      },
      {
        question: "Does Cartalax have side effects?",
        answer:
          "Its human side-effect profile is not well characterized. The patent reports favorable animal toxicology but does not provide a complete modern human adverse-event analysis. Product-quality and injection risks may be more immediate than peptide-specific effects.",
      },
      {
        question: "Can Cartalax be stacked with BPC-157 or TB-500?",
        answer:
          "No controlled study establishes the safety or added benefit of these combinations. Using multiple investigational compounds also makes it difficult to attribute outcomes or adverse effects.",
      },
      {
        question: "Does Cartalax need a dosage calculator?",
        answer:
          "A concentration calculator can prevent arithmetic errors, but it cannot choose a valid dose. The major uncertainty is biological and evidentiary — not mathematical.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Khavinson VK, Grigoriev EI, Malinin VV, Ryzhak GA.",
        title:
          "Peptide normalizing metabolism in bone and cartilaginous tissues, pharmaceutical composition based thereon and method for use thereof",
        detail: "Eurasian Patent EA010574B1. 2008.",
        href: "https://patents.google.com/patent/EA010574B1/en",
      },
      {
        authors: "Myakisheva SN, Linkova NS, Polyakova VO, Ryzhak GA.",
        title:
          "Peptides of cartilage tissue: regulation of chondrocyte proliferation, geroprotection and prospects for use in osteoarthrosis",
        detail: "Vrach. 2023;34(10):46–49.",
        href: "https://journals.eco-vector.com/0236-3054/article/view/117604",
      },
      {
        authors: "Linkova N, Khavinson V, Diatlova A, Myakisheva S, Ryzhak G.",
        title: "Peptide Regulation of Chondrogenic Stem Cell Differentiation",
        detail: "Int J Mol Sci. 2023;24(9):8415.",
        href: "https://pubmed.ncbi.nlm.nih.gov/37176122/",
      },
      {
        authors: "Ashapkin V, Khavinson V, Shilovsky G, Linkova N, Vanyushin B.",
        title: "Gene expression in human mesenchymal stem cell aging cultures: modulation by short peptides",
        detail: "Mol Biol Rep. 2020;47(6):4323–4329.",
        href: "https://pubmed.ncbi.nlm.nih.gov/32399807/",
      },
      {
        authors: "Khavinson VK, Linkova NS, Tarnovskaya SI.",
        title: "Short Peptides Regulate Gene Expression",
        detail: "Bull Exp Biol Med. 2016;162(2):288–292.",
        href: "https://pubmed.ncbi.nlm.nih.gov/27909961/",
      },
      {
        authors: "Linkova NS, Drobintseva AO, Orlova OA, et al.",
        title: "Peptide Regulation of Skin Fibroblast Functions during Their Aging In Vitro",
        detail: "Bull Exp Biol Med. 2016;161(1):175–178.",
        href: "https://pubmed.ncbi.nlm.nih.gov/27259496/",
      },
      {
        authors: "Khavinson V, Popovich I, Linkova N, et al.",
        title: "Peptide Regulation of Gene Expression: A Systematic Review",
        detail: "Molecules. 2021;26(22):7053.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34834147/",
      },
      {
        authors: "Khavinson V, Linkova N, Diatlova A, et al.",
        title: "Transport of Biologically Active Ultrashort Peptides Using POT and LAT Carriers",
        detail: "Int J Mol Sci. 2022;23(14):7733.",
        href: "https://pubmed.ncbi.nlm.nih.gov/35887081/",
      },
      {
        authors: "European Bioinformatics Institute.",
        title: "Ala-Glu-Asp, CHEBI:158137",
        detail: "ChEBI. Updated March 20, 2025.",
        href: "https://www.ebi.ac.uk/chebi/CHEBI:158137",
      },
      {
        authors: "National Center for Biotechnology Information.",
        title: "Alanyl-glutamyl-aspartic acid, PubChem CID 87815447",
        detail: "PubChem compound record.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Alanyl-glutamyl-aspartic-acid",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Cartalax has **low-confidence human dosing evidence** concentrated in one **patent-reported cohort**. There is **no US-approved dose**, **human pharmacokinetics are not established**, and **cartilage regeneration in humans has not been demonstrated**.",
      "This page documents patent schedules, community conventions, and reconstitution arithmetic. It is **not** a clinical dosing, self-injection, or treatment guide. Confirm pure AED identity, assay basis, sterility, and endotoxin before parenteral research.",
      "The 1 µg and 5 mg patent arms differ by three orders of magnitude — concentration errors can move exposure into an entirely different category. Seek urgent care for severe allergic, infectious, neurologic, or cardiovascular symptoms.",
    ],
  },
};

/**
 * ARA-290 (cibinetide) dosage guide.
 * Human evidence is concentrated in Phase 2 small-fiber neuropathy trials.
 * The most repeated schedule: 4 mg SC once daily × 28 days (NERVARA, diabetes, DOSARA).
 */

/** Average molecular mass for pGlu-EQLERALNSS cibinetide */
export const ARA290_MOLECULAR_MASS = 1257.3;

export function ara290AmountFromVial(vialMg, diluentMl, targetMg) {
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
  return {
    concMgPerMl,
    volumeMl,
    units,
    targetMg: target,
  };
}

export const ARA290_RECON_PRESETS = [
  { id: "16-2", vialMg: 16, diluentMl: 2, label: "16 mg · 2 mL (8 mg/mL)" },
  { id: "10-1", vialMg: 10, diluentMl: 1, label: "10 mg · 1 mL (10 mg/mL)" },
  { id: "10-2", vialMg: 10, diluentMl: 2, label: "10 mg · 2 mL (5 mg/mL)" },
  { id: "20-2", vialMg: 20, diluentMl: 2, label: "20 mg · 2 mL (10 mg/mL)" },
];

export const ARA290_IDENTITY = [
  {
    id: "cibinetide",
    label: "Confirmed cibinetide (pGlu-EQLERALNSS)",
    verdict: "Required for ARA-290 / cibinetide dosing math",
    detail:
      "Authentic cibinetide is an 11-amino-acid peptide with N-terminal pyroglutamate (~1,257.3 g/mol). Confirm intact mass, sequence mapping, N-terminal pyroglutamate characterization, and assay basis before comparing with trial protocols.",
  },
  {
    id: "unmodified",
    label: "Unmodified N-terminus (QEQLERALNSS)",
    verdict: "Different molecule — not cibinetide",
    detail:
      "The first glutamine must cyclize to pyroglutamate. A label reporting QEQLERALNSS or an unmodified N-terminus does not establish cibinetide identity, even if the remaining amino-acid order matches.",
  },
  {
    id: "epo-fragment",
    label: "Generic “EPO fragment” or helix-B peptide",
    verdict: "Insufficient identity — confirm sequence",
    detail:
      "ARA-290 was designed from the aqueous-facing surface of EPO helix B but is not EPO and should not be expected to reproduce erythropoietic effects. A vague “EPO fragment” label without sequence, mass, and N-terminal data cannot validate cibinetide.",
  },
  {
    id: "unsure",
    label: "Label unclear or unsure",
    verdict: "Incomplete — confirm identity before trusting protocols",
    detail:
      "Names such as ARA-290, ARA290, PHBSP, pHBSP, or pyroglutamate helix-B surface peptide do not by themselves establish whether the vial contains authentic cibinetide. Analytics should resolve identity first.",
  },
];

export const ARA290_DOSARA = [
  {
    id: "1mg",
    dose: "1 mg daily",
    doseMg: 1,
    cnfa: 109,
    ci: "−429 to 647",
    met: false,
    p: "Did not meet endpoint",
  },
  {
    id: "4mg",
    dose: "4 mg daily",
    doseMg: 4,
    cnfa: 697,
    ci: "159 to 1,236",
    met: true,
    p: "P=0.012",
  },
  {
    id: "8mg",
    dose: "8 mg daily",
    doseMg: 8,
    cnfa: 431,
    ci: "−130 to 992",
    met: false,
    p: "Did not meet endpoint",
  },
];

export const ARA290_TRIAL_REGIMENS = [
  {
    id: "pk",
    study: "Early pharmacokinetic crossover",
    population: "Healthy males; n=10",
    dose: "2 mg IV/SC; then 4 or 6 mg SC",
    frequency: "Single doses",
    duration: "Separate visits",
    focus: "Exposure, route, half-life",
  },
  {
    id: "poc",
    study: "Early open-label proof of concept",
    population: "Sarcoidosis or T2DM with neuropathic pain; n=20",
    dose: "2 mg",
    frequency: "IV Mon/Wed/Fri",
    duration: "1 week (3 doses)",
    focus: "Initial symptom signal",
  },
  {
    id: "heij",
    study: "Heij et al., 2012",
    population: "Sarcoidosis SFN; RCT; n=22",
    dose: "2 mg",
    frequency: "IV three times weekly",
    duration: "4 weeks (12 doses)",
    focus: "Safety and neuropathic symptoms",
  },
  {
    id: "nervara",
    study: "Dahan et al., 2013 — NERVARA",
    population: "Sarcoidosis small-nerve-fiber loss; DBPC; n=38",
    dose: "4 mg",
    frequency: "SC once daily",
    duration: "28 days + follow-up",
    focus: "Symptoms, CNFA, sensory measures",
  },
  {
    id: "diabetes",
    study: "Brines et al., 2015",
    population: "T2DM painful neuropathy; DBPC; n=48 analyzed",
    dose: "4 mg",
    frequency: "SC once daily",
    duration: "28 days + 28-day observation",
    focus: "Safety, metabolic measures, neuropathy",
  },
  {
    id: "dosara",
    study: "Culver et al., 2017 — DOSARA",
    population: "Sarcoidosis SFN and pain; Phase 2b; n=64",
    dose: "1, 4, or 8 mg",
    frequency: "SC once daily",
    duration: "28 days + follow-up to week 16",
    focus: "Dose-response, nerve markers, pain",
  },
  {
    id: "dme",
    study: "Lois et al., 2020",
    population: "Diabetic macular edema; open-label; 8 completers",
    dose: "4 mg",
    frequency: "SC once daily",
    duration: "12 weeks",
    focus: "Vision, retinal thickness, safety",
  },
];

export const ARA290_COMPARE = {
  clinical: {
    title: "Formally studied human dosing",
    status: "Phase 2 trials — small populations",
    rows: [
      ["Amount", "1, 4, or 8 mg daily SC; 2 mg repeated IV"],
      ["Frequency", "Once daily SC or three times weekly IV"],
      ["Duration", "28 days most often; 12 weeks in one small study"],
      ["Titration", "Not used in pivotal dose-ranging study"],
      ["Objective outcomes", "Corneal microscopy, skin biopsy, symptom scales, walking, labs"],
      ["Product", "Manufactured, sterile investigational solution"],
      ["Evidence quality", "Small Phase 2 studies with surrogate endpoints"],
    ],
  },
  anecdotal: {
    title: "Community-reported dosing",
    status: "Anecdotal / vendor-derived",
    rows: [
      ["Amount", "Commonly 1–4 mg per exposure; broader claims exist"],
      ["Frequency", "Daily, twice weekly, or three times weekly"],
      ["Duration", "Often 4–8 weeks, sometimes repeated"],
      ["Titration", "Frequently proposed as 1–2 mg before 4 mg"],
      ["Objective outcomes", "Usually self-reported symptoms"],
      ["Product", "Variable lyophilized or compounded material"],
      ["Evidence quality", "Uncontrolled and product-dependent"],
    ],
  },
};

export const ARA290_SC_PHASES = [
  {
    id: "baseline",
    phase: "Baseline",
    days: "Before day 1",
    amount: "None",
    frequency: "—",
    cumulative: "—",
    purpose:
      "Document sequence, sterility, symptom scales, objective nerve measure if available, and baseline safety labs",
  },
  {
    id: "exposure",
    phase: "Active exposure",
    days: "1–28",
    amount: "4 mg",
    frequency: "Once daily · SC",
    cumulative: "112 mg",
    purpose:
      "Central trial-anchored schedule — NERVARA, diabetes trial, and DOSARA 4 mg arm. Thigh administration with rotating sites in diabetes trial.",
  },
  {
    id: "observation",
    phase: "Observation",
    days: "29–56",
    amount: "None",
    frequency: "—",
    cumulative: "112 mg total",
    purpose:
      "Off-treatment durability assessment mirroring diabetes and dose-ranging trial designs. Day-56 labs and symptom review.",
  },
];

export const ARA290_CLAIMS = [
  {
    id: "higher-better",
    claim: "Higher ARA-290 doses are automatically more effective",
    status: "Not supported",
    detail:
      "DOSARA tested 1, 4, and 8 mg daily for 28 days. Only the 4 mg arm met the prespecified corneal nerve-fiber-area endpoint. The 8 mg arm did not outperform 4 mg — this is not a simple “higher is better” dose-response.",
  },
  {
    id: "titration",
    claim: "ARA-290 requires titration from 1–2 mg to 4 mg",
    status: "Not established",
    detail:
      "The central 28-day trials assigned fixed 1, 4, or 8 mg daily doses without escalation. Online lead-in schedules are community protocols without matching controlled trials.",
  },
  {
    id: "multi-daily",
    claim: "Short half-life means multiple daily doses are required",
    status: "Not used in trials",
    detail:
      "Human research cited ~2 minutes IV and ~20 minutes after 4 mg SC. Later studies used once-daily SC administration. Splitting the dose would create a new pharmacokinetic protocol not studied in the pivotal trials.",
  },
  {
    id: "epo-rbc",
    claim: "ARA-290 raises hemoglobin or hematocrit like EPO",
    status: "Not observed",
    detail:
      "Meaningful erythropoietic stimulation was not observed in the human studies summarized here. ARA-290 was designed to separate tissue-protective signaling from classical EPO activity. It is not interchangeable with EPO.",
  },
  {
    id: "antidepressant",
    claim: "ARA-290 is an established antidepressant peptide",
    status: "Not established",
    detail:
      "A single 2 mg IV dose in 36 healthy volunteers altered some emotional-processing measures but did not improve mood or affective symptoms. Authors concluded effects did not unequivocally support an antidepressant-like profile.",
  },
  {
    id: "stack-bpc",
    claim: "ARA-290 is safely and synergistically stacked with BPC-157, TB-500, or GHK-Cu",
    status: "Not demonstrated",
    detail:
      "No controlled human study establishes the safety, dose, or added benefit of these combinations. Stacking makes adverse-event attribution and outcome interpretation much harder.",
  },
  {
    id: "intermittent-sc",
    claim: "Intermittent 2 mg SC equals the IV pilot or daily 4 mg trials",
    status: "Not demonstrated",
    detail:
      "Community protocols report 2 mg twice or three times weekly SC. The 2 mg IV pilot used a different route and cannot validate intermittent SC schedules. Frequency and route changes are not interchangeable.",
  },
  {
    id: "bedtime",
    claim: "Bedtime injection improves ARA-290 outcomes",
    status: "Not demonstrated",
    detail:
      "No human pharmacokinetic or outcome study establishes an optimal time of day. Published trials used fixed once-daily schedules without bedtime-specific evidence.",
  },
];

export const ARA290_EVIDENCE_LADDER = [
  {
    level: "Established prescribing dosage",
    exists: "None",
    confidence: "None",
  },
  {
    level: "4 mg SC once daily × 28 days",
    exists: "Multiple human studies including RCTs and dose-ranging trial",
    confidence: "Moderate — best-studied signal, not therapeutic dose",
  },
  {
    level: "1 or 8 mg SC once daily × 28 days",
    exists: "DOSARA dose-ranging arms",
    confidence: "Low — weaker efficacy signal than 4 mg",
  },
  {
    level: "2 mg IV three times weekly × 4 weeks",
    exists: "Small randomized human pilot",
    confidence: "Low — earlier route, symptom signal only",
  },
  {
    level: "4 mg SC daily × 12 weeks",
    exists: "Small open-label DME study; eight completers",
    confidence: "Low — negative mean ocular outcomes",
  },
  {
    level: "2–6 mg single-dose PK exposure",
    exists: "Early human pharmacokinetic work",
    confidence: "Moderate for exposure; not a treatment protocol",
  },
  {
    level: "1–2 mg titration or intermittent SC",
    exists: "Anecdotal / community protocols",
    confidence: "Very low",
  },
  {
    level: "Repeated courses or long-term maintenance",
    exists: "Insufficient evidence",
    confidence: "None",
  },
  {
    level: "Animal µg/kg or mg/kg schedules",
    exists: "Preclinical models only",
    confidence: "Preclinical — not human dose selection",
  },
];

export const ARA290_AE_SIMPLE = [
  {
    topic: "Overall human signal",
    status: "Encouraging but incomplete",
    note: "No consistent erythropoietic effect or clear lab toxicity pattern at studied doses",
  },
  {
    topic: "DOSARA adverse events",
    status: "Small numbers",
    note: "TEAEs in all groups; serious events in 1 mg and 8 mg arms — no deaths",
  },
  {
    topic: "Diabetes trial SAEs",
    status: "Causality uncertain",
    note: "Four serious events in active arm including renal change and fatal MI judged unrelated",
  },
  {
    topic: "Product and injection risk",
    status: "Elevated for research vials",
    note: "Identity, sterility, endotoxin, and concentration errors can dominate real-world risk",
  },
];

export const ARA290_AE_FULL = [
  {
    topic: "Overall human signal",
    status: "Encouraging but incomplete",
    note: "No consistent erythropoietic effect at studied doses",
    context:
      "Across small trials, investigators did not identify a consistent erythropoietic effect or clear laboratory toxicity pattern. The 28-day diabetes study reported no clinically significant active-group changes in electrolytes, liver, kidney, pancreas, or hematology as a group. The 12-week eye study found no anti-cibinetide antibodies in eight completers. The largest trial randomized only 64 participants.",
  },
  {
    topic: "DOSARA adverse events",
    status: "Small numbers prevent dose-risk curve",
    note: "TEAEs reported in all dose groups",
    context:
      "At least one TEAE: 12/16 placebo, 14/16 at 1 mg, 11/16 at 4 mg, 12/14 at 8 mg. Serious events: 0/16 placebo, 2/16 at 1 mg, 0/16 at 4 mg, 1/14 at 8 mg. Events included headache, fatigue, injection-site pain, dyspnea, syncope cluster at 1 mg, and suicidal ideation at 8 mg. No deaths.",
  },
  {
    topic: "Diabetes trial SAEs",
    status: "Causality uncertain",
    note: "Four serious events in active arm",
    context:
      "One participant with borderline renal insufficiency stopped after creatinine worsened following furosemide increase. Another developed severe cellulitis after dosing and later had a fatal myocardial infarction judged unrelated by the safety committee. These events should not be erased by “well tolerated.”",
  },
  {
    topic: "Product and injection risk",
    status: "Elevated for research vials",
    note: "Trials used sterile manufactured product",
    context:
      "Research-vial use adds risks the clinical trials controlled: incorrect identity, under- or over-filled vials, endotoxin, microbial contamination, particulates, pH or tonicity problems, aggregation, adsorption, and concentration error.",
  },
  {
    topic: "Populations without established safety",
    status: "Not established",
    note: "Pregnancy, children, severe organ impairment, cancer",
    context:
      "Safety is not established for pregnancy or breastfeeding, children, severe renal or hepatic impairment, active cancer, unstable cardiovascular disease, severe psychiatric illness, concurrent erythropoiesis-stimulating treatment, or chronic immunomodulatory combinations.",
  },
];

export const ARA290_DOSAGE_GUIDE = {
  title: "ARA-290 Dosage: Human Trials and Research Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research status:** ARA-290, also called **cibinetide**, is an investigational 11-amino-acid peptide with multiple Phase 2 studies but no established prescribing dose. The amounts below reproduce published research designs; they are not a personalized treatment recommendation.",
  intro: [
    "The most repeated human schedule was **4 mg subcutaneously once daily for 28 days** — used in NERVARA, the painful diabetic neuropathy trial, and as the signal-generating arm in the DOSARA dose-ranging study.",
    "DOSARA compared **1, 4, and 8 mg daily for 28 days**. Only **4 mg** met the primary corneal nerve-fiber endpoint. This does **not** support a simple “higher is better” assumption.",
    "A 28-day course at 4 mg/day requires **112 mg total** — seven 16 mg vials mathematically before preparation losses. Community titration and intermittent schedules are anecdotal and were not the regimens behind the strongest controlled data.",
  ],
  glance: {
    title: "ARA-290 dosage in 30 seconds",
    items: [
      "**Most repeated schedule:** 4 mg SC once daily × 28 days",
      "**Best dose-ranging signal:** 4 mg in DOSARA — 1 mg and 8 mg did not meet primary endpoint",
      "**Early IV pilot:** 2 mg IV three times weekly × 4 weeks — clinical research setting only",
      "**Longest published daily exposure:** 4 mg SC daily × 12 weeks (n=8 completers, DME study)",
      "**28-day course total:** 112 mg (= seven 16 mg vials mathematically)",
      "**Half-life:** ~2 min IV / ~20 min after 4 mg SC",
      "**≠ EPO:** No meaningful erythropoietic stimulation observed in summarized trials",
    ],
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**Preferred scientific name**", "Cibinetide"],
        ["**Common names**", "ARA-290, ARA290, PHBSP, pHBSP"],
        ["**Molecular identity**", "11-aa N-terminal pyroglutamate peptide (pGlu-EQLERALNSS)"],
        ["**Main human dose studied**", "4 mg subcutaneously once daily"],
        ["**Main course studied**", "28 consecutive days"],
        ["**Human dose range tested**", "1–8 mg/day SC; 2 mg IV three times weekly; 2–6 mg single-dose PK"],
        ["**Best dose-response signal**", "4 mg/day in 28-day DOSARA trial"],
        ["**Plasma half-life**", "~2 min IV; ~20 min after 4 mg SC"],
        ["**Established maintenance dose**", "None"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is ARA-290?",
      paragraphs: [
        "ARA-290 is the development code for **cibinetide**, a synthetic peptide designed from the aqueous-facing surface of helix B of erythropoietin (EPO). It is **not** a shortened vial of EPO and should not be expected to reproduce EPO's red-blood-cell effect.",
        "The original design paper identified a short surface sequence that retained tissue-protective activity in experimental injury models without erythropoietic activity. The proposed target is the **innate repair receptor**, commonly described as a complex involving an EPO-receptor subunit and the beta-common receptor CD131. ([Brines et al., PNAS, 2008](https://pubmed.ncbi.nlm.nih.gov/18676614/))",
      ],
      tables: [
        {
          caption: "ARA-290 / cibinetide properties",
          headers: ["Property", "Value"],
          rows: [
            ["Sequence", "pGlu–Glu–Gln–Leu–Glu–Arg–Ala–Leu–Asn–Ser–Ser"],
            ["Sequence shorthand", "pGlu-EQLERALNSS"],
            ["Length", "11 amino acids"],
            ["Molecular formula", "C51H84N16O21"],
            ["Average molecular mass", "1,257.3 g/mol"],
            ["PubChem CID", "91810664"],
            ["UNII", "9W5677JKDA"],
            ["CAS number", "1208243-50-8"],
          ],
        },
      ],
    },
    {
      id: "pyroglutamate",
      title: "Why the N-terminal pyroglutamate matters",
      paragraphs: [
        "The first glutamine cyclizes to pyroglutamate, which is why the intact sequence is written **pGlu-EQLERALNSS**, not simply QEQLERALNSS. A label that reports a different sequence, an unmodified N-terminus, or an unspecified “EPO fragment” does not by itself establish cibinetide identity.",
      ],
    },
    {
      id: "identity",
      title: "Research-vial identity and quality checks",
      paragraphs: [
        "Confirm exact cibinetide identity before comparing with trial protocols. A high HPLC purity number alone cannot prove identity, absolute content, sterility, endotoxin status, or formulation stability.",
      ],
      widget: "ara290-identity-gate",
      tables: [
        {
          caption: "Quality checks for a research vial",
          headers: ["Test", "What it establishes"],
          rows: [
            ["Intact-mass spectrometry", "Whether the vial contains the expected molecular species"],
            ["Sequence or peptide mapping", "Whether the amino-acid order matches cibinetide"],
            ["N-terminal characterization", "Whether the required pyroglutamate form is present"],
            ["Quantitative assay", "Actual peptide amount — not just chromatographic peak percentage"],
            ["Counterion, water, residual solvent", "Whether labeled milligrams represent active peptide or total solids"],
            ["Sterility, endotoxin, particulates", "Suitability for a parenteral research design"],
            ["Stability in selected vehicle", "Whether concentration and purity remain valid during intended use"],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "Current research status",
      paragraphs: [
        "Cibinetide reached Phase 2 development and received orphan-drug designations for sarcoidosis-related neuropathic indications, but designation is not marketing authorization. No Phase 3 confirmatory program or US prescribing information establishes a clinical dose.",
        "FDA's May 2026 list of bulk substances nominated for 503A compounding places cibinetide in **Category 3, nominated without adequate support**. That classification concerns the compounding-list process; it is not a judgment that the published Phase 2 papers never occurred. It does mean that a research-vial product should not be treated as equivalent to the sterile, characterized investigational product used in those trials. ([FDA 503A bulk-substance categories](https://www.fda.gov/media/94155/download))",
      ],
      highlight:
        "No established prescribing dose. Research-vial cibinetide is not equivalent to the sterile investigational product used in Phase 2 trials.",
    },
    {
      id: "human-trials",
      title: "Dosage used in human clinical trials",
      paragraphs: [
        "The human literature includes pharmacokinetic work, randomized controlled studies, dose ranging, and a 12-week exposure. It remains a small evidence base concentrated in specific disease populations.",
      ],
      tables: [
        {
          caption: "Human clinical trial regimens",
          headers: [
            "Study",
            "Population and design",
            "Dose",
            "Frequency and route",
            "Duration",
            "What the study addressed",
          ],
          rows: [
            [
              "Early PK crossover",
              "Healthy males; n=10",
              "2 mg IV/SC; 4 or 6 mg SC",
              "Single administrations",
              "Separate visits",
              "Exposure, route, half-life",
            ],
            [
              "Early open-label POC",
              "Sarcoidosis or T2DM neuropathic pain; n=20",
              "2 mg",
              "IV Mon/Wed/Fri",
              "1 week; 3 doses",
              "Initial symptom signal",
            ],
            [
              "Heij et al., 2012",
              "Sarcoidosis SFN; RCT; n=22",
              "2 mg",
              "IV three times weekly",
              "4 weeks; 12 doses",
              "Safety and neuropathic symptoms",
            ],
            [
              "Dahan et al., 2013 — NERVARA",
              "Sarcoidosis small-nerve-fiber loss; DBPC; n=38",
              "4 mg",
              "SC once daily",
              "28 days + follow-up",
              "Symptoms, CNFA, sensory measures",
            ],
            [
              "Brines et al., 2015",
              "T2DM painful neuropathy; DBPC; n=48 analyzed",
              "4 mg",
              "SC once daily",
              "28 days + 28-day observation",
              "Safety, metabolic measures, neuropathy",
            ],
            [
              "Cerit et al., 2015",
              "Healthy volunteers; DBPC; n=36",
              "2 mg",
              "Single IV dose",
              "One administration",
              "Emotional processing (not antidepressant endpoint)",
            ],
            [
              "Culver et al., 2017 — DOSARA",
              "Sarcoidosis SFN and pain; Phase 2b; n=64",
              "1, 4, or 8 mg",
              "SC once daily",
              "28 days + follow-up to week 16",
              "Dose-response, nerve markers, pain",
            ],
            [
              "Lois et al., 2020",
              "Diabetic macular edema; open-label; 8 completers",
              "4 mg",
              "SC once daily",
              "12 weeks",
              "Vision, retinal thickness, safety",
            ],
          ],
        },
        {
          caption: "Total exposure by published regimen",
          headers: ["Regimen", "Number of doses", "Total cibinetide exposure"],
          align: ["left", "right", "right"],
          rows: [
            ["2 mg IV three times in one week", "3", "6 mg"],
            ["2 mg IV three times weekly × 4 weeks", "12", "24 mg"],
            ["1 mg SC daily × 28 days", "28", "28 mg"],
            ["4 mg SC daily × 28 days", "28", "112 mg"],
            ["8 mg SC daily × 28 days", "28", "224 mg"],
            ["4 mg SC daily × 12 weeks", "84", "336 mg"],
          ],
        },
      ],
    },
    {
      id: "dosara",
      title: "What the dose-ranging trial actually showed",
      paragraphs: [
        "DOSARA is the most useful study for dose selection because it compared placebo with 1, 4, and 8 mg daily under the same 28-day design. Placebo-corrected mean change in corneal nerve-fiber area (CNFA) at day 28:",
      ],
      widget: "ara290-dosara",
      tables: [
        {
          caption: "DOSARA placebo-corrected CNFA change at day 28",
          headers: [
            "Daily dose",
            "Placebo-corrected mean CNFA change",
            "95% confidence interval",
            "Statistical result",
          ],
          align: ["right", "right", "left", "left"],
          rows: [
            ["1 mg", "109 µm²", "−429 to 647", "Did not meet endpoint"],
            ["4 mg", "697 µm²", "159 to 1,236", "P=0.012"],
            ["8 mg", "431 µm²", "−130 to 992", "Did not meet endpoint"],
          ],
        },
      ],
      paragraphsAfter: [
        "Regenerating GAP-43-positive skin fibers also increased in the 4 mg group. Pain improved in every group; the placebo-corrected pain reduction in the moderate-to-severe subgroup favored 4 mg but did not reach conventional statistical significance (P=0.157). These results support **4 mg as the best-studied signal-generating dose**, not as a universally established therapeutic dose. ([Culver et al., 2017](https://pubmed.ncbi.nlm.nih.gov/28475703/))",
      ],
    },
    {
      id: "28-day-protocol",
      title: "Complete trial-anchored 28-day ARA-290 research protocol",
      paragraphs: [
        "This protocol reproduces the central **4 mg SC once-daily for 28 days** human-research schedule and adds a prospective measurement and safety framework. The dosing schedule, thigh administration, rotating sites, and day-14/day-28 laboratory monitoring are taken from human study methods.",
        "The human trials did **not** use a 1 mg-to-2 mg-to-4 mg titration, split the daily 4 mg into multiple doses, or taper at the end. Those modifications should be described as new experimental variables rather than presented as the original protocol.",
      ],
      widget: "ara290-protocol-timeline",
      subsections: [
        {
          title: "Phase 1: screening and baseline documentation",
          bullets: [
            "Exact cibinetide sequence, intact mass, assay basis, sterility, endotoxin, and lot traceability",
            "Medical history, medicines, allergies, prior peptide or EPO exposure",
            "Vital signs, weight, CBC, renal and liver chemistry, electrolytes, urinalysis",
            "ECG and cardiovascular risk assessment when clinically appropriate",
            "Fixed validated symptom instrument (PainDetect, SFNSL, NPSI, or prespecified pain scale)",
            "Functional measure such as 6-minute walk test when relevant",
            "Objective small-fiber measure — corneal confocal microscopy, skin biopsy, or QST — when research question is regeneration",
          ],
        },
        {
          title: "Phase 2: exposure schedule",
          tables: [
            {
              caption: "28-day 4 mg SC protocol phases",
              headers: ["Phase", "Days", "Amount", "Frequency", "Route", "Cumulative"],
              align: ["left", "right", "right", "left", "left", "right"],
              rows: [
                ["Baseline", "Before day 1", "None", "—", "—", "—"],
                ["Active exposure", "1–28", "4 mg", "Once daily", "Subcutaneous", "112 mg"],
                ["Observation", "29–56", "None", "—", "—", "112 mg total"],
              ],
            },
            {
              caption: "Material requirements for 112 mg course",
              headers: ["Vial presentation", "4 mg portions per vial", "Vials for 112 mg", "Theoretical leftover"],
              align: ["left", "right", "right", "right"],
              rows: [
                ["10 mg", "2.5", "12 vials", "8 mg before losses"],
                ["16 mg", "4", "7 vials", "0 mg before losses"],
                ["20 mg", "5", "6 vials", "8 mg before losses"],
              ],
            },
          ],
        },
        {
          title: "Phase 3: assessment schedule",
          tables: [
            {
              caption: "Research assessments",
              headers: ["Time point", "Minimum research assessments"],
              rows: [
                [
                  "Baseline",
                  "Symptom scale, pain score, function, neurologic exam, objective nerve measure, CBC, chemistry, vitals",
                ],
                ["Day 1", "First-dose observation, vitals, injection tolerability, ECG when protocol-defined"],
                ["Day 7", "Adherence, injection-site review, symptom diary, adverse-event screen"],
                ["Day 14", "CBC, chemistry, renal function, vitals, symptom scale, adverse-event review"],
                [
                  "Day 28",
                  "Full end-of-exposure assessment: symptom battery, objective nerve measure, laboratory safety panel",
                ],
                ["Day 42", "Off-treatment symptom and adverse-event review"],
                ["Day 56", "Persistence assessment, laboratory safety panel, final primary analysis for 56-day design"],
                ["Week 16", "Optional extended follow-up mirroring DOSARA"],
              ],
            },
          ],
        },
        {
          title: "Phase 4: predefined hold and stop rules",
          bullets: [
            "Hypersensitivity, hives, facial swelling, breathing difficulty, syncope, or clinically significant hypotension",
            "Serious infection or rapidly spreading injection-site inflammation",
            "New suicidal thinking, severe agitation, or major acute mood change",
            "Clinically meaningful rise in creatinine or other important laboratory abnormality",
            "Serious cardiovascular or neurologic event",
            "Persistent focal neurologic deficit suggesting structural compression or stroke",
            "Dosing error, compromised sterility, failed identity test, or loss of lot traceability",
            "Pregnancy or protocol-defined exclusion arising during exposure",
          ],
        },
      ],
    },
    {
      id: "research-dosage",
      title: "ARA-290 research dosage",
      paragraphs: [
        "The table below documents commonly reported protocols from human trials and community conventions. Community links document reported practice — they do **not** establish clinical validation.",
      ],
      tables: [
        {
          caption: "Commonly reported protocols",
          headers: [
            "Protocol",
            "Reported amount",
            "Frequency",
            "Route",
            "Duration",
            "Evidence classification",
          ],
          rows: [
            [
              "Human IV pilot",
              "2 mg",
              "Three times weekly",
              "IV",
              "4 weeks",
              "Randomized human pilot",
            ],
            [
              "NERVARA / diabetes protocol",
              "4 mg",
              "Once daily",
              "SC",
              "28 days",
              "Controlled human evidence",
            ],
            [
              "DOSARA dose range",
              "1, 4, or 8 mg",
              "Once daily",
              "SC",
              "28 days",
              "Randomized dose-ranging evidence",
            ],
            [
              "Diabetic macular edema protocol",
              "4 mg",
              "Once daily",
              "SC",
              "12 weeks",
              "Small open-label human study",
            ],
            [
              "Trial-mirroring community protocol",
              "4 mg",
              "Once daily",
              "SC",
              "28 days",
              "Anecdotal use overlapping clinical schedule",
            ],
            [
              "Community “lead-in” protocol",
              "1–2 mg, then 4 mg",
              "Once daily",
              "SC",
              "Commonly 4–8 weeks",
              "Anecdotal; no matching titration trial",
            ],
            [
              "Intermittent community protocol",
              "2 mg",
              "Two or three times weekly",
              "SC",
              "Commonly 4–8 weeks",
              "Anecdotal; route differs from IV pilot",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Human research directly supports that investigators have administered **1–8 mg subcutaneously once daily for 28 days**, **4 mg daily for 12 weeks**, and **2 mg intravenously three times weekly for four weeks**. Of these, 4 mg SC daily for 28 days has the strongest combination of replication, objective outcomes, and dose-ranging support.",
        "No controlled study identified here establishes a need to titrate, split the dose, inject at bedtime, cycle five days on and two days off, repeat courses indefinitely, inject near a painful nerve, or combine ARA-290 with BPC-157, TB-500, GHK-Cu, growth hormone secretagogues, ketamine, or EPO.",
      ],
    },
    {
      id: "reported-range",
      title: "Reported ARA-290 dosage range",
      tables: [
        {
          caption: "Evidence-based dosage parameters",
          headers: ["Parameter", "Evidence-based summary"],
          rows: [
            ["Single-dose human range", "2–6 mg in early pharmacokinetic work"],
            ["Repeated SC human range", "1–8 mg once daily"],
            ["Repeated IV human amount", "2 mg three times weekly"],
            ["Most replicated SC amount", "4 mg once daily"],
            ["Most common controlled duration", "28 days"],
            ["Longest published daily duration", "12 weeks at 4 mg/day"],
            ["Best-supported route", "Subcutaneous in later human trials"],
            ["Established maintenance or repeat-cycle interval", "None"],
            ["Weight-based human protocol", "Not established — fixed milligram doses in trials"],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Clinical versus anecdotal dosing",
      widget: "ara290-clinical-vs-anecdotal",
      paragraphsAfter: [
        "The key discrepancy is not simply the milligram amount. Community protocols often change frequency, formulation, duration, monitoring, and product quality at the same time, making them poor replications of the clinical research.",
      ],
    },
    {
      id: "why-4mg",
      title: "Why 4 mg daily appears repeatedly",
      paragraphs: [
        "After a 4 mg subcutaneous dose in healthy volunteers, the published diabetes study cited a peak plasma concentration of about 3 ng/mL (2.4 nmol/L) and a terminal half-life of about 20 minutes. The early IV half-life was about two minutes. Researchers proposed that a brief receptor signal could initiate longer intracellular repair responses, so continuous blood exposure was not the experimental goal.",
        "The 4 mg dose then produced the clearest primary-endpoint signal in DOSARA, whereas 1 mg appeared insufficient and 8 mg did not improve the endpoint further. That pattern may reflect a non-linear biological response, trial variability, or both. It does not justify extrapolating beyond 8 mg.",
      ],
    },
    {
      id: "reconstitution",
      title: "ARA-290 reconstitution and concentration math",
      paragraphs: [
        "The clinical studies used manufactured sterile solutions. They did not establish that a retail lyophilized vial mixed with bacteriostatic water is chemically or microbiologically equivalent. The calculations below answer concentration questions only.",
        "**Concentration (mg/mL) = vial amount (mg) ÷ final volume (mL)** · **Draw volume (mL) = target amount (mg) ÷ concentration (mg/mL)** · **U-100 units = draw volume (mL) × 100**. One U-100 unit is a volume of 0.01 mL — not a universal peptide dose.",
      ],
      widget: "ara290-recon-calc",
      tables: [
        {
          caption: "16 mg vial prepared to 2 mL (8 mg/mL — diabetes trial injection volume for 4 mg)",
          headers: ["Target amount", "Volume", "U-100 units", "Portions per vial"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["1 mg", "0.125 mL", "12.5 units", "16"],
            ["2 mg", "0.25 mL", "25 units", "8"],
            ["4 mg", "0.50 mL", "50 units", "4"],
            ["8 mg", "1.00 mL", "100 units", "2"],
          ],
        },
        {
          caption: "10 mg vial prepared to 1 mL (10 mg/mL)",
          headers: ["Target amount", "Volume", "U-100 units", "Portions per vial"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["1 mg", "0.10 mL", "10 units", "10"],
            ["2 mg", "0.20 mL", "20 units", "5"],
            ["4 mg", "0.40 mL", "40 units", "2.5"],
            ["8 mg", "0.80 mL", "80 units", "1.25"],
          ],
        },
        {
          caption: "10 mg vial prepared to 2 mL (5 mg/mL)",
          headers: ["Target amount", "Volume", "U-100 units", "Portions per vial"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["1 mg", "0.20 mL", "20 units", "10"],
            ["2 mg", "0.40 mL", "40 units", "5"],
            ["4 mg", "0.80 mL", "80 units", "2.5"],
            ["8 mg", "1.60 mL", "160 units — exceeds 1 mL syringe", "1.25"],
          ],
        },
        {
          caption: "20 mg vial prepared to 2 mL (10 mg/mL)",
          headers: ["Target amount", "Volume", "U-100 units", "Portions per vial"],
          align: ["right", "right", "right", "right"],
          rows: [
            ["1 mg", "0.10 mL", "10 units", "20"],
            ["2 mg", "0.20 mL", "20 units", "10"],
            ["4 mg", "0.40 mL", "40 units", "5"],
            ["8 mg", "0.80 mL", "80 units", "2.5"],
          ],
        },
      ],
      notes: [
        "The diabetes paper reports a study vehicle containing 20 mmol/L sodium phosphate buffer at pH 6.5, 1% sucrose, and 4% D-mannitol. That describes the investigational formulation — not a simplified reconstitution recipe.",
      ],
    },
    {
      id: "preclinical",
      title: "Preclinical ARA-290 dosage",
      paragraphs: [
        "**Animal / preclinical research only.** These doses answer model-specific scientific questions and should not be converted directly into human protocols.",
      ],
      tables: [
        {
          caption: "Selected preclinical ARA-290 exposure",
          headers: ["Model", "Dose", "Route and schedule", "Outcome studied"],
          rows: [
            [
              "Rat and mouse peripheral-nerve injury",
              "30 µg/kg",
              "IP every two days × 5, then weekly",
              "Allodynia; CD131 dependence",
            ],
            [
              "Rat spared-nerve injury",
              "3–60 µg/kg",
              "IP on days 1, 3, 6, 8, 10",
              "Allodynia dose-response; spinal microglia",
            ],
            [
              "Rat experimental autoimmune encephalomyelitis",
              "35 µg/kg",
              "IP daily days 7–18",
              "Clinical score, T-cell function, inflammation",
            ],
            [
              "Mouse chronic-stress models",
              "0.5 mg/kg",
              "IP once daily during stress induction",
              "Depression-like behavior; neuroinflammation",
            ],
            [
              "Mouse Alzheimer-like model",
              "0.7 nmol/kg",
              "IP once weekly × 5 weeks",
              "Monocyte biology; disease-like pathology",
            ],
            [
              "Rodent metabolic model",
              "30 µg/kg",
              "SC during final 11 weeks of diet study",
              "Insulin signaling, lipids, renal markers",
            ],
          ],
        },
      ],
      notes: [
        "The broad range reflects different species, models, routes, and endpoints — not a menu of interchangeable human doses.",
      ],
    },
    {
      id: "mechanism",
      title: "How ARA-290 may work",
      numbered: [
        "**Innate repair receptor signaling** — The proposed innate repair receptor contains an EPO-receptor component and CD131, induced during injury or metabolic stress. ARA-290 was designed to favor tissue-protective pathway rather than classical erythropoietic receptor.",
        "**Anti-inflammatory and cell-survival pathways** — Preclinical studies connect receptor engagement with JAK2/STAT, PI3K/Akt, suppression of inflammatory signaling, reduced apoptosis, and tissue-repair responses. Mechanistic findings — not automatic evidence every inflammatory condition improves in humans.",
        "**Nerve-fiber repair rather than immediate analgesia** — Strongest human evidence measured corneal nerve-fiber area and GAP-43-positive regenerating skin fibers. Surrogate endpoints — not proof of complete functional nerve repair.",
      ],
      tables: [
        {
          caption: "Why ARA-290 differs from EPO",
          headers: ["Feature", "Full-length erythropoietin", "ARA-290 / cibinetide"],
          rows: [
            ["Molecule", "Glycoprotein hormone", "Synthetic 11-amino-acid peptide"],
            ["Primary receptor", "Classical EPO-receptor homodimer", "Proposed EPOR/CD131 innate repair receptor"],
            ["Red-blood-cell stimulation", "Expected pharmacologic effect", "Not observed as meaningful effect in summarized trials"],
            ["Plasma persistence", "Longer", "Very short: minutes"],
            ["Human research focus", "Anemia and selected other uses", "Tissue protection and small-fiber neuropathy research"],
            ["Interchangeable dosing", "No", "No"],
          ],
        },
      ],
      widgetAfter: "ara290-claim-checker",
    },
    {
      id: "results",
      title: "What results have actually been shown?",
      subsections: [
        {
          title: "Sarcoidosis pilot: symptom signal",
          paragraphs: [
            "The 2012 randomized pilot administered 2 mg IV three times weekly for four weeks. At week 4, the small-fiber neuropathy screening score improved more with ARA-290 than placebo (mean change −11.5 versus −2.9). Brief Pain Inventory and fatigue scores improved in both groups. ([Heij et al., 2012](https://pubmed.ncbi.nlm.nih.gov/23168581/))",
          ],
        },
        {
          title: "NERVARA: symptoms and corneal nerve fibers",
          paragraphs: [
            "After 28 days of 4 mg SC daily, the active group showed a 14.5% median increase in corneal nerve-fiber area (median absolute increase 185 µm²); placebo had a nonsignificant 5.3% median decrease. Neuropathic symptoms and walking distance also favored the active group. ([Dahan et al., 2013](https://pubmed.ncbi.nlm.nih.gov/24136731/))",
          ],
        },
        {
          title: "DOSARA: a non-linear dose response",
          paragraphs: [
            "In 64 participants, 4 mg — but not 1 or 8 mg — met the prespecified corneal nerve-fiber-area endpoint. GAP-43-positive regenerating skin fibers increased at 4 mg. Pain results remained statistically uncertain. Meaningful proof-of-concept, not definitive clinical efficacy.",
          ],
        },
        {
          title: "Painful diabetic neuropathy: mixed but promising endpoints",
          paragraphs: [
            "The 4 mg daily group improved more than placebo on PainDetect over 56 days (P=0.037). HbA1c changed by −0.21% at day 56 in the active group versus +0.21% with placebo. Corneal nerve-fiber density did not significantly separate overall. ([Brines et al., 2015](https://pubmed.ncbi.nlm.nih.gov/25387363/))",
          ],
        },
        {
          title: "Diabetic macular edema: negative mean primary outcomes",
          paragraphs: [
            "Nine participants entered and eight completed 12 weeks of 4 mg daily. Mean best-corrected visual acuity, central retinal thickness, and tear production did not improve. No serious adverse reactions or anti-cibinetide antibodies were reported. ([Lois et al., 2020](https://pubmed.ncbi.nlm.nih.gov/32674280/))",
          ],
        },
        {
          title: "Emotional processing: not an established antidepressant effect",
          paragraphs: [
            "A single 2 mg dose in 36 healthy volunteers changed some emotional-processing measures but did not improve mood or affective symptoms. ([Cerit et al., 2015](https://pubmed.ncbi.nlm.nih.gov/26431906/))",
          ],
        },
      ],
    },
    {
      id: "timeline",
      title: "Expected timeline in research",
      tables: [
        {
          caption: "What can reasonably be measured by time window",
          headers: ["Time window", "What can reasonably be measured"],
          rows: [
            ["First dose to week 1", "Acute tolerability, vital signs, injection reactions — not nerve regeneration"],
            ["Week 2", "Laboratory safety review and early symptom trend"],
            ["Week 4", "Primary endpoint window; symptom, function, and nerve-marker reassessment"],
            ["Weeks 5–8", "Off-treatment durability in the diabetes design"],
            ["Week 16", "Extended follow-up used in the sarcoidosis dose-ranging program"],
            ["Beyond 12 weeks of dosing", "Human evidence sparse; repeated or chronic cycling not established"],
          ],
        },
      ],
      notes: [
        "Online promises of guaranteed onset within days or permanent nerve repair after one course go beyond the published studies.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "ARA-290 dosage evidence ladder",
      paragraphs: [
        "ARA-290 dosing is better documented than dosing for many research peptides, but it is not clinically established. The clearest research anchor is **4 mg subcutaneously once daily for 28 days**, followed by observation.",
      ],
      widget: "ara290-evidence-ladder",
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "Across small trials, investigators did not identify a consistent erythropoietic effect or a clear laboratory toxicity pattern at the studied doses. That is reassuring, but the largest trial randomized only 64 participants and repeated long-term courses have not been adequately studied.",
      ],
      widget: "ara290-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "No US prescribing label provides a universal storage condition or beyond-use period for research ARA-290. The clinical studies used professionally manufactured sterile vials with defined vehicle and study handling.",
      ],
      tables: [
        {
          caption: "Evidence-based handling principles",
          headers: ["Form", "Handling principle"],
          rows: [
            [
              "Lyophilized analytical material",
              "Follow lot-specific temperature, moisture, and light specifications supported by stability data",
            ],
            [
              "Manufactured clinical solution",
              "Follow protocol, pharmacy manual, container system, and assigned expiry",
            ],
            [
              "Reconstituted research vial",
              "Use only a validated diluent, concentration, container, temperature, and beyond-use period",
            ],
            [
              "Laboratory working solution",
              "Account for surface adsorption, freeze-thaw cycles, pH, and concentration-dependent degradation",
            ],
          ],
        },
      ],
      notes: [
        "Generic advice that every mixed peptide lasts 28 days refrigerated is not formulation-specific stability evidence. Cloudiness, discoloration, visible particles, or temperature excursion should invalidate the material.",
      ],
    },
    {
      id: "comparisons",
      title: "Comparisons",
      tables: [
        {
          caption: "ARA-290 vs conventional neuropathic medicines vs BPC-157 / TB-500 research",
          headers: ["Question", "ARA-290", "Conventional neuropathic medicines", "BPC-157 / TB-500 research"],
          rows: [
            ["Primary research goal", "Tissue protection and possible small-fiber repair", "Symptom control", "Broad repair hypotheses"],
            ["Human neuropathy trials", "Several small Phase 2 studies", "Extensive medicine-specific evidence", "No comparable controlled human neuropathy program identified"],
            ["Objective nerve markers", "Corneal and skin markers studied", "Usually not primary target", "Mostly preclinical claims"],
            ["Established prescribing dose", "No", "Yes for approved medicines", "No"],
            ["Combination evidence with ARA-290", "—", "Not established", "Not established"],
          ],
        },
      ],
      notes: [
        "Neuropathic symptoms can reflect diabetes, autoimmune disease, vitamin deficiency, medication toxicity, nerve compression, infection, vascular disease, or central pathology — the cause changes the appropriate standard evaluation.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "ARA-290 is the defined 11-amino-acid peptide **cibinetide**, not a generic EPO fragment. Its most defensible research schedule is **4 mg subcutaneously once daily for 28 consecutive days**, followed by an observation period. That regimen was used in multiple human studies and had the strongest signal in the only 1-versus-4-versus-8 mg dose-ranging trial.",
        "The evidence is promising rather than conclusive. Objective corneal and skin nerve markers improved at 4 mg, but symptom results were less consistent, the largest study included only 64 participants, and the longest published course had eight completers.",
      ],
      highlight:
        "Human-trial protocols, reconstitution math, and adverse-event records are separate from universal treatment claims.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the most studied ARA-290 dose?",
        answer:
          "Four milligrams subcutaneously once daily for 28 days is the most repeated schedule in later human trials — NERVARA, the painful diabetic neuropathy study, and the signal-generating arm in DOSARA.",
      },
      {
        question: "What dose worked best in the dose-ranging trial?",
        answer:
          "The 4 mg daily arm met the prespecified corneal nerve-fiber-area endpoint. The 1 mg and 8 mg arms did not, so 8 mg should not be described as automatically more effective.",
      },
      {
        question: "How long was ARA-290 used in human studies?",
        answer:
          "Most neuropathy studies used 28 days. The longest published daily exposure was 12 weeks at 4 mg/day in a very small diabetic macular edema study with eight completers.",
      },
      {
        question: "Was ARA-290 given every day?",
        answer:
          "Later subcutaneous trials used once-daily dosing. An earlier intravenous pilot used 2 mg three times weekly. Route and frequency should not be mixed as though they were interchangeable.",
      },
      {
        question: "Does ARA-290 require titration?",
        answer:
          "The central 28-day trials did not titrate. Participants were assigned a fixed 1, 4, or 8 mg daily dose. Online lead-in schedules are community protocols.",
      },
      {
        question: "Does ARA-290 require tapering?",
        answer:
          "Published studies stopped after the defined course without a taper. Chronic maintenance and repeated courses were not studied.",
      },
      {
        question: "How much ARA-290 is needed for a 28-day 4 mg protocol?",
        answer:
          "The mathematical total is 112 mg. That equals seven 16 mg vials exactly before losses, or twelve 10 mg vials with 8 mg theoretically remaining.",
      },
      {
        question: "How many U-100 units is 4 mg?",
        answer:
          "It depends entirely on concentration. At 8 mg/mL, 4 mg is 0.5 mL or 50 units. At 10 mg/mL, it is 0.4 mL or 40 units. At 5 mg/mL, it is 0.8 mL or 80 units.",
      },
      {
        question: "Is a U-100 unit the same as a milligram?",
        answer:
          "No. One unit is 0.01 mL. The peptide mass in that volume depends on the solution's mg/mL concentration.",
      },
      {
        question: "What route has the best evidence?",
        answer:
          "Subcutaneous administration has the most later-stage human evidence. Intravenous dosing was studied earlier but requires clinical research infrastructure.",
      },
      {
        question: "Can ARA-290 be injected intramuscularly or orally?",
        answer:
          "The key human trials summarized here used SC or IV routes. No comparable evidence establishes intramuscular or oral dosing.",
      },
      {
        question: "Does ARA-290 have a very short half-life?",
        answer:
          "Yes. Human research cited about two minutes after IV administration and about 20 minutes after 4 mg SC. The proposed biological response lasts longer than measurable plasma exposure.",
      },
      {
        question: "Does the short half-life mean multiple daily doses are required?",
        answer:
          "Not in the published trials. Later studies used once-daily SC administration. Splitting the dose would create a new pharmacokinetic protocol.",
      },
      {
        question: "Does ARA-290 raise hemoglobin or hematocrit like EPO?",
        answer:
          "Meaningful erythropoietic stimulation was not observed in the human studies summarized here. ARA-290 was designed to separate tissue-protective signaling from classical EPO activity.",
      },
      {
        question: "Does ARA-290 regenerate nerves?",
        answer:
          "Human trials reported increases in corneal nerve-fiber area and GAP-43-positive regenerating skin fibers at 4 mg. These are objective surrogate markers — not proof of complete functional nerve repair.",
      },
      {
        question: "Does ARA-290 reduce neuropathic pain?",
        answer:
          "Some trials reported improved neuropathic symptom scores. Pain results were not uniformly clean — in DOSARA, pain improved in all groups and the placebo-corrected 4 mg result did not reach statistical significance.",
      },
      {
        question: "Is ARA-290 proven for diabetic neuropathy?",
        answer:
          "One small controlled trial reported improvements in PainDetect and exploratory metabolic measures. It is proof-of-concept, not definitive confirmation.",
      },
      {
        question: "Is ARA-290 an antidepressant peptide?",
        answer:
          "No antidepressant effect has been established. A single-dose healthy-volunteer study altered some emotional-processing measures but did not improve mood or affective symptoms.",
      },
      {
        question: "Can ARA-290 be stacked with BPC-157, TB-500, or GHK-Cu?",
        answer:
          "No controlled human study establishes the safety, dose, or added benefit of these combinations.",
      },
      {
        question: "When should outcomes be measured?",
        answer:
          "Day 28 is the central exposure endpoint. A day-56 off-treatment assessment helps distinguish transient symptom fluctuation from sustained change.",
      },
      {
        question: "How often can a 28-day course be repeated?",
        answer:
          "No controlled evidence establishes a repeat interval. Claims about repeating every few months are community conventions.",
      },
      {
        question: "Is 8 mg safer or more effective than 4 mg?",
        answer:
          "The dose-ranging study does not support that conclusion. The 8 mg arm did not meet the primary endpoint.",
      },
      {
        question: "Does ARA-290 replace evaluation for small-fiber neuropathy?",
        answer:
          "No. Burning, allodynia, temperature change, numbness, or dysautonomia can have many causes. Objective diagnosis remains essential.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Brines M, Patel NSA, Villa P, et al.",
        title:
          "Nonerythropoietic, tissue-protective peptides derived from the tertiary structure of erythropoietin",
        detail: "Proc Natl Acad Sci USA. 2008;105(31):10925–10930.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18676614/",
      },
      {
        authors: "Heij L, Niesters M, Swartjes M, et al.",
        title:
          "Safety and efficacy of ARA 290 in sarcoidosis patients with symptoms of small fiber neuropathy: a randomized, double-blind pilot study",
        detail: "Mol Med. 2012;18:1430–1436.",
        href: "https://pubmed.ncbi.nlm.nih.gov/23168581/",
      },
      {
        authors: "Dahan A, Dunne A, Swartjes M, et al.",
        title:
          "ARA 290 improves symptoms in patients with sarcoidosis-associated small nerve fiber loss and increases corneal nerve fiber density",
        detail: "Mol Med. 2013;19:334–345.",
        href: "https://pubmed.ncbi.nlm.nih.gov/24136731/",
      },
      {
        authors: "Brines M, Dunne AN, van Velzen M, et al.",
        title:
          "ARA 290, a nonerythropoietic peptide engineered from erythropoietin, improves metabolic control and neuropathic symptoms in patients with type 2 diabetes",
        detail: "Mol Med. 2015;20:658–666.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25387363/",
      },
      {
        authors: "Cerit H, Veer IM, Dahan A, et al.",
        title:
          "Testing the antidepressant properties of the peptide ARA290 in a human neuropsychological model of drug action",
        detail: "Eur Neuropsychopharmacol. 2015;25(12):2289–2299.",
        href: "https://pubmed.ncbi.nlm.nih.gov/26431906/",
      },
      {
        authors: "Culver DA, Dahan A, Bajorunas D, et al.",
        title:
          "Cibinetide improves corneal nerve fiber abundance in patients with sarcoidosis-associated small nerve fiber loss and neuropathic pain",
        detail: "Invest Ophthalmol Vis Sci. 2017;58(6):BIO52–BIO60.",
        href: "https://pubmed.ncbi.nlm.nih.gov/28475703/",
      },
      {
        authors: "Lois N, Gardner E, McFarland M, et al.",
        title:
          "A Phase 2 clinical trial on the use of cibinetide for the treatment of diabetic macular edema",
        detail: "J Clin Med. 2020;9(7):2225.",
        href: "https://pubmed.ncbi.nlm.nih.gov/32674280/",
      },
      {
        authors: "Swartjes M, Morariu A, Niesters M, et al.",
        title:
          "ARA290, a peptide derived from the tertiary structure of erythropoietin, produces long-term relief of neuropathic pain: an experimental study in rats and beta-common receptor knockout mice",
        detail: "Anesthesiology. 2011;115(5):1084–1092.",
        href: "https://pubmed.ncbi.nlm.nih.gov/21873879/",
      },
      {
        authors: "European Union Clinical Trials Register.",
        title: "EudraCT 2013-003016-45: DOSARA trial results",
        detail: "Clinical trial registry results.",
        href: "https://www.clinicaltrialsregister.eu/ctr-search/trial/2013-003016-45/results",
      },
      {
        authors: "National Center for Biotechnology Information.",
        title: "Cibinetide, PubChem CID 91810664",
        detail: "PubChem compound record.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Cibinetide",
      },
      {
        authors: "US Food and Drug Administration.",
        title: "Bulk drug substances nominated for use in compounding under section 503A",
        detail: "Updated May 14, 2026.",
        href: "https://www.fda.gov/media/94155/download",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "ARA-290 (cibinetide) has **Phase 2 human trial data** but **no established prescribing dose**. The largest trial randomized only 64 participants; repeated long-term courses have not been adequately studied.",
      "This page documents published trial schedules, community conventions, and reconstitution arithmetic. It is **not** a clinical dosing, self-injection, or treatment guide. Confirm cibinetide identity (pGlu-EQLERALNSS), sterility, and endotoxin before parenteral research.",
      "Intravenous administration belongs in a clinical research setting and should not be converted into a self-injection protocol. Seek urgent care for severe allergic, cardiovascular, neurologic, or psychiatric symptoms.",
    ],
  },
};

/**
 * CJC-1295 (No DAC) + Ipamorelin combination dosage guide.
 * Exact-combination human trial: none identified. Online pairings are anecdotal.
 */

export const CJC_IPA_DAC_GATE = [
  {
    id: "no-dac",
    label: "No DAC / Modified GRF 1-29",
    verdict: "This combination page applies",
    detail:
      "Products marketed as CJC-1295 No DAC, Modified GRF 1-29, Mod GRF (1-29), or tetrasubstituted GRF (1-29) refer to the short-acting GHRH analog. Confirm the label states No DAC / Modified GRF 1-29 and the quantity of each peptide.",
    href: null,
    cta: null,
  },
  {
    id: "dac",
    label: "With DAC (long-acting)",
    verdict: "Different molecule — do not use this protocol",
    detail:
      "CJC-1295 DAC includes an albumin-binding MPA-Lys group and was studied with multi-day half-life exposures. Weekly DAC research cannot establish dose or timing for Modified GRF 1-29 plus ipamorelin.",
    href: "/peptides/cjc-1295-dac",
    cta: "Open CJC-1295 DAC page",
  },
  {
    id: "unsure",
    label: "Label only says “CJC-1295”",
    verdict: "Confirm identity before applying any pairing",
    detail:
      "A label saying only “CJC-1295 + ipamorelin” is incomplete. It should state whether DAC is present, the quantity of each peptide, the salt/counterion, and analytical identity. A “10 mg blend” might mean 5 mg + 5 mg, not 10 mg of each.",
    href: "/peptides/cjc-1295-no-dac",
    cta: "Open No DAC identity page",
  },
];

export const CJC_IPA_EVIDENCE_BADGES = [
  {
    id: "exact",
    label: "Exact-combination evidence",
    value: "None",
    tone: "none",
  },
  {
    id: "component",
    label: "Component human evidence",
    value: "IV ipamorelin only",
    tone: "partial",
  },
  {
    id: "adjacent",
    label: "Adjacent mechanism evidence",
    value: "GHRH + GHRP class",
    tone: "partial",
  },
  {
    id: "anecdotal",
    label: "Anecdotal protocol",
    value: "100/100–100/300 mcg",
    tone: "low",
  },
];

export const CJC_IPA_COMBO_STATUS = [
  ["Human PK/PD study", "None identified"],
  ["Human dose-ranging study", "None identified"],
  ["Randomized efficacy trial", "None identified"],
  ["Chronic subcutaneous safety study", "None identified"],
  ["Optimal component ratio", "Not established"],
  ["Maximum tolerated dose", "Not established"],
  ["Interaction study", "None identified"],
];

export const CJC_IPA_IDENTITY_ROWS = [
  {
    feature: "Common alternative name",
    nodac: "Modified GRF 1-29",
    ipa: "Ipamorelin acetate (many listings)",
    dac: "Long-acting CJC-1295",
  },
  {
    feature: "Primary target",
    nodac: "GHRH receptor",
    ipa: "GHS-R1a / ghrelin receptor",
    dac: "GHRH receptor",
  },
  {
    feature: "Albumin-binding DAC",
    nodac: "No",
    ipa: "No",
    dac: "Yes",
  },
  {
    feature: "Exact human research",
    nodac: "FDA: no exact-molecule clinical/PK study",
    ipa: "IV PK/PD and short postoperative trials",
    dac: "Single/repeat SC studies — not for this pairing",
  },
];

export const CJC_IPA_RATIOS = [
  {
    id: "1-1",
    label: "1:1",
    shorthand: "100/100 mcg",
    modGrf: 100,
    ipa: 100,
    total: 200,
    note: "Equal-mass convenience; common in 5 mg/5 mg blends. Not clinically optimized.",
  },
  {
    id: "1-2",
    label: "1:2",
    shorthand: "100/200 mcg",
    modGrf: 100,
    ipa: 200,
    total: 300,
    note: "Most repeated online pairing. Higher ipamorelin is a community convention, not a demonstrated PD requirement.",
  },
  {
    id: "1-3",
    label: "1:3",
    shorthand: "100/300 mcg",
    modGrf: 100,
    ipa: 300,
    total: 400,
    note: "Higher daily ipamorelin exposure without combination safety data. No ratio trial exists.",
  },
];

export const CJC_IPA_CLINICAL_VS_ANECDOTAL = {
  clinical: {
    title: "Exact-combination clinical research",
    status: "None established",
    rows: [
      ["Dose", "None established"],
      ["Frequency", "None established"],
      ["Route", "None established"],
      ["Duration", "None established"],
      ["Ratio", "None established"],
      ["Escalation", "None established"],
      ["Evidence", "No exact-combination trial identified"],
      ["Established safety", "No"],
    ],
  },
  anecdotal: {
    title: "Anecdotal combination reports",
    status: "Community / vendor protocols",
    rows: [
      ["Dose", "Often 100 mcg Mod GRF + 100–300 mcg ipamorelin"],
      ["Frequency", "Once to three times daily"],
      ["Route", "Subcutaneous"],
      ["Duration", "Often 8–16 weeks"],
      ["Ratio", "Commonly 1:1, 1:2, or 1:3 by mass"],
      ["Escalation", "Often raises ipamorelin or frequency"],
      ["Evidence", "Uncontrolled commercial/community reporting"],
      ["Established safety", "No"],
    ],
  },
};

export const CJC_IPA_CLAIMS = [
  {
    id: "saturation",
    claim: "“100 mcg saturates the GHRH receptor”",
    status: "Unverified origin story",
    demonstrated: false,
    detail:
      "No exact-molecule human receptor-occupancy or dose-saturation study was identified. The claimed 1 mcg/kg rationale equals 100 mcg only for a 100 kg person.",
  },
  {
    id: "ratio",
    claim: "1:2 or 1:3 is better than 1:1",
    status: "Unknown — no ratio trial",
    demonstrated: false,
    detail:
      "No receptor-occupancy or clinical comparison established any fixed microgram ratio. More ipamorelin increases nominal exposure; GH response, benefit, and risk for the combination are unquantified.",
  },
  {
    id: "timing",
    claim: "Must be bedtime and/or fasted",
    status: "Physiology hypothesis, not combo data",
    demonstrated: false,
    detail:
      "Bedtime, fasted, pre-meal, and post-training schedules are common online. No exact-combination trial compared bedtime vs morning, fasted vs fed, or exercise timing.",
  },
  {
    id: "five-two",
    claim: "Five-on / two-off prevents desensitization",
    status: "Unvalidated cycling convention",
    demonstrated: false,
    detail:
      "No exact-combination trial evaluated receptor desensitization or showed that two weekly off-days improve response or safety versus uninterrupted daily use.",
  },
  {
    id: "pulses",
    claim: "Safer than GH because it preserves pulses",
    status: "Not demonstrated",
    demonstrated: false,
    detail:
      "Secretagogue-induced release may remain feedback-sensitive, but no long-term combination trial established comparative safety against recombinant GH or placebo.",
  },
  {
    id: "half-life-freq",
    claim: "IV half-lives dictate SC combo frequency",
    status: "Speculative",
    demonstrated: false,
    detail:
      "Ipamorelin’s ~2-hour terminal half-life is from a single IV study. The ~30-minute Modified GRF 1-29 figure lacks exact human PK confirmation. Combining those figures cannot validate a subcutaneous coadministration schedule.",
  },
];

export const CJC_IPA_EVIDENCE_LADDER = [
  {
    level: "FDA-approved dosage",
    exists: "Nothing",
    confidence: "None",
  },
  {
    level: "Exact-combination controlled human research",
    exists: "Nothing identified",
    confidence: "None",
  },
  {
    level: "Individual-component human research",
    exists:
      "IV ipamorelin PK/PD and short Phase 2 trials; no exact no-DAC clinical study",
    confidence: "Moderate for narrow IV findings; not transferable",
  },
  {
    level: "Adjacent human experimental evidence",
    exists: "GHRH plus GHRP-6 / hexarelin synergy",
    confidence: "Moderate for class-level acute synergy only",
  },
  {
    level: "Exact-combination preclinical research",
    exists: "No defined dose study identified in FDA reviews",
    confidence: "Insufficient",
  },
  {
    level: "Anecdotal research protocol",
    exists: "100/100, 100/200, 100/300 mcg; 1–3× daily",
    confidence: "Low",
  },
  {
    level: "Unsupported claims",
    exists:
      "Optimal ratio, 100 mcg saturation, required fasting, five-on/two-off protection",
    confidence: "Insufficient",
  },
];

export const CJC_IPA_AE_SIMPLE = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No chronic SC combo trial denominator",
  },
  {
    topic: "Ipamorelin IV trial signal",
    status: "Context only",
    note: "Postoperative IV; FDA noted cardiac/infectious imbalances",
  },
  {
    topic: "GH/IGF-1 class concerns",
    status: "Inferred",
    note: "Edema, CTS-like symptoms, glucose changes, neoplasia caution",
  },
  {
    topic: "Injectable product quality",
    status: "Elevated concern",
    note: "Two-component ID, ratio, sterility, aggregation, impurities",
  },
];

export const CJC_IPA_AE_FULL = [
  {
    topic: "Exact-combination safety",
    status: "Unknown",
    note: "No incidence rates for chronic SC combined use",
    context:
      "Greater GH response than either alone is plausible; magnitude and variability are unmeasured for these exact agents.",
  },
  {
    topic: "Ipamorelin postoperative trial",
    status: "Not transferable",
    note: "Similar overall AE rates vs placebo in published report",
    context:
      "FDA reanalysis highlighted imbalances in cardiac and infectious serious events; two deaths after severe complications without established causality. Acutely ill surgical IV population.",
  },
  {
    topic: "Fluid retention / edema",
    status: "Class concern",
    note: "Not measured combo incidence",
    context: "Inferred from sustained or excessive GH/IGF-1 signaling.",
  },
  {
    topic: "Joint pain / paresthesia / CTS-like",
    status: "Class concern",
    note: "Not measured combo incidence",
    context: "Same pathway-inference caveat.",
  },
  {
    topic: "Glucose / insulin sensitivity",
    status: "Class concern",
    note: "Monitor clinically if exposure occurs",
    context: "Describing release as “pulsatile” does not prove safe exposure.",
  },
  {
    topic: "Neoplasm / growth signaling",
    status: "Caution",
    note: "Extra caution with active malignancy",
    context: "Concern about stimulating growth in an existing neoplasm.",
  },
  {
    topic: "Product quality / immunogenicity",
    status: "FDA-flagged for both peptides",
    note: "Blend adds ratio and attribution complexity",
    context:
      "Characterization, aggregation, impurities; COA ≠ approved manufacturing program.",
  },
];

export const CJC_IPA_DOSAGE_GUIDE = {
  title:
    "CJC-1295 (No DAC) + Ipamorelin Dosage: Combination Protocols and Evidence",
  updated: "Updated August 2026",
  callout:
    "**Research status:** Neither CJC-1295 without DAC nor ipamorelin is an FDA-approved drug, and the combination has **no FDA-approved dosage**. **No controlled human trial of the exact combination was identified.** This page documents component research and commonly reported experimental protocols; it is **not** a recommendation or self-administration guide.",
  intro: [
    "**No approved combination dose exists.** There is no FDA label, indication, starting dose, titration schedule, maintenance dose, maximum dose, or approved route for either the combination or either component.",
    "**The exact pairing has not been clinically dose-tested.** Published human studies evaluated ipamorelin alone by intravenous infusion. FDA found no clinical or pharmacokinetic studies of the exact no-DAC CJC-1295 free base or acetate.",
    "Online protocols usually report approximately **100 mcg Modified GRF 1-29 plus 100–300 mcg ipamorelin** per administration (often 100/100, 100/200, or 100/300 mcg). Those pairings are **anecdotal**—not doses validated for ratio, SC bioavailability, frequency, duration, or chronic combined safety.",
  ],
  glance: {
    title: "CJC-1295 No DAC + ipamorelin dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**FDA-approved combination dosage**", "None"],
        ["**Published exact-combination human dose**", "None identified"],
        [
          "**Published exact-combination animal dose**",
          "None identified in FDA reviews",
        ],
        [
          "**Commonly reported Modified GRF 1-29**",
          "About 100 mcg per administration",
        ],
        [
          "**Commonly reported ipamorelin**",
          "About 100–300 mcg per administration",
        ],
        ["**Commonly reported frequency**", "Once daily to three times daily"],
        ["**Commonly reported route**", "Subcutaneous injection"],
        ["**Commonly reported duration**", "Often 8–16 weeks"],
        [
          "**Evidence quality for combined protocol**",
          "Low / insufficient; primarily secondary and community reporting",
        ],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "First: what exactly is in the combination?",
      paragraphs: [
        "Products marketed as **CJC-1295 No DAC**, **CJC-1295 without DAC**, **Modified GRF 1-29**, **Mod GRF (1-29)**, or **tetrasubstituted GRF (1-29)** generally refer to a 29-amino-acid GHRH analog. FDA calls the corresponding active moiety **CJC-1295 free base** (and discusses its acetate salt). It is chemically different from albumin-binding **CJC-1295 DAC**.",
        "Ipamorelin is a five-amino-acid GH secretagogue acting through GHS-R1a. The two peptides approach pituitary GH release through different signaling systems, which explains interest in combining them.",
      ],
      highlight:
        "Confirm No DAC / Modified GRF 1-29. DAC-containing CJC-1295 uses different evidence and cannot be substituted.",
      widget: "cjc-ipa-dac-gate",
      tables: [
        {
          caption: "Identity comparison",
          headers: [
            "Component",
            "Common alternative name",
            "Primary target",
            "Albumin-binding DAC",
            "Exact human research",
          ],
          rows: [
            [
              "**CJC-1295 No DAC**",
              "Modified GRF 1-29",
              "GHRH receptor",
              "No",
              "FDA found no exact-molecule clinical or PK study",
            ],
            [
              "**Ipamorelin**",
              "Ipamorelin acetate in many listings",
              "GHS-R1a / ghrelin receptor",
              "No",
              "Human IV PK/PD and short postoperative trials exist",
            ],
            [
              "**CJC-1295 DAC**",
              "Long-acting CJC-1295",
              "GHRH receptor",
              "Yes",
              "SC studies exist — do not apply to this pairing",
            ],
          ],
        },
      ],
      notes: [
        "**Product-label rule:** A label saying only “CJC-1295 + ipamorelin” is incomplete. It should state whether CJC-1295 contains the MPA-Lys/DAC group, the quantity of **each** peptide, the salt/counterion, and the analytical identity. A “10 mg blend” might mean 5 mg + 5 mg, not 10 mg of each.",
      ],
    },
    {
      id: "fda-dosage",
      title: "Is there an FDA-approved dosage?",
      paragraphs: [
        "No. Neither component has an FDA-approved product or dosage, and the fixed combination has never been approved.",
        "FDA’s 2024 evaluation found no peer-reviewed nonclinical or clinical data establishing the safety or effectiveness of CJC-1295 free base or acetate, and raised characterization, impurity, aggregation, solubility, and immunogenicity concerns for an injectable compounded peptide.",
        "FDA separately lists ipamorelin acetate among bulk substances that may present significant safety risks in compounding, citing aggregation and impurities, characterization challenges, serious events in an IV clinical study, and no identified safety information for the proposed subcutaneous route.",
      ],
      highlight:
        "There is currently no FDA-approved dosage for CJC-1295 (No DAC) plus ipamorelin. The amounts below describe formal research involving the individual components or anecdotal combination protocols—not an established prescribing regimen.",
      widget: "cjc-ipa-evidence-badges",
    },
    {
      id: "exact-combo",
      title: "Has the exact combination been studied in humans?",
      paragraphs: [
        "**No controlled human trial of the exact combination was identified.** This creates more than an efficacy gap: there is no validated combined PK profile, dose-response curve, ratio comparison, route comparison, escalation schedule, treatment duration, or adverse-event rate.",
        "Reports of seized or unapproved peptide products containing Modified GRF 1-29 and ipamorelin confirm the pairing exists in the illicit performance-enhancement market, but chemical detection is not evidence of dosing, efficacy, or safety.",
      ],
      widget: "cjc-ipa-combo-status",
    },
    {
      id: "component-research",
      title: "Human clinical research on the individual components",
      paragraphs: [
        "Ipamorelin IV clinical data are separate from any subcutaneous combination protocol table. IV weight-based acute or postoperative exposures do not validate fixed SC microgram blends.",
      ],
      tables: [
        {
          caption: "Ipamorelin-only human studies (not combination)",
          headers: [
            "Study",
            "Dose",
            "Frequency",
            "Route",
            "Duration",
            "Population",
            "Purpose",
          ],
          rows: [
            [
              "Gobburu et al., 1999",
              "≈3–100 mcg/kg (4.21–140.45 nmol/kg)",
              "Single",
              "15-min IV infusion",
              "One dose",
              "48 healthy men",
              "PK/PD and GH response",
            ],
            [
              "Beck et al., 2014 / NCT00672074",
              "0.03 mg/kg",
              "Twice daily",
              "IV infusion",
              "Up to 7 postoperative days",
              "Adults after bowel resection",
              "Postoperative ileus",
            ],
            [
              "NCT01280344",
              "0.03 mg/kg BID; 0.06 mg/kg BID or TID",
              "2–3× daily",
              "IV infusion",
              "Outcomes through 10 days",
              "320 adults after bowel resection",
              "Phase 2 dose finding; no posted registry results",
            ],
          ],
        },
        {
          caption: "Exact CJC-1295 No DAC human studies",
          headers: ["Study", "Dose", "Frequency", "Route", "Finding"],
          rows: [
            [
              "Published clinical study of CJC-1295 free base or acetate",
              "**None identified**",
              "Not established",
              "Not established",
              "FDA found no exact-molecule clinical safety, efficacy, PK, or pharmacology evidence",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "The single-dose ipamorelin study found dose-proportional PK, an approximately **two-hour** terminal half-life, and a brief GH response peaking around 0.67 hour. The postoperative trial did not meet its primary or secondary efficacy endpoints. These studies establish that IV ipamorelin can produce a GH response; they do **not** validate fixed 100–300 mcg subcutaneous doses, long cycles, or combination use.",
        "The familiar CJC-1295 trial used the **long-acting DAC** molecule at 20–250 mcg/kg in single and repeat SC studies. Those data cannot be repurposed as evidence for a short-acting no-DAC peptide or for pairing it with ipamorelin.",
      ],
    },
    {
      id: "synergy",
      title: "Why the combination is thought to be synergistic",
      paragraphs: [
        "The biological rationale is stronger than the dosage evidence. A GHRH analog activates GHRH receptors on somatotrophs; ipamorelin activates GHS-R1a. Stimulating complementary pathways can produce a larger GH pulse than either pathway alone.",
        "Human evidence supports this **class-level concept**, but with other molecules: IV GHRH + GHRP-6, and GHRH + hexarelin (including low-dose hexarelin potentiation). Those studies did **not** use Modified GRF 1-29 or ipamorelin and cannot validate a modern combination protocol.",
      ],
      tables: [
        {
          caption: "Adjacent synergy studies — what they show vs do not show",
          headers: ["What the adjacent studies show", "What they do not show"],
          rows: [
            [
              "GHRH- and GHRP-pathway stimulation can interact synergistically",
              "That Modified GRF 1-29 + ipamorelin has the same magnitude of synergy",
            ],
            [
              "Response depends on age, disease state, feedback, and molecules used",
              "That a 1:1, 1:2, or 1:3 fixed-microgram ratio is optimal",
            ],
            [
              "Acute IV coadministration can produce a large GH pulse",
              "That chronic SC combination use is effective or safe",
            ],
            [
              "Lower amounts of one secretagogue may still potentiate GHRH acutely",
              "That “more is not better” identifies a specific saturation dose",
            ],
          ],
        },
      ],
    },
    {
      id: "research-dosage",
      title: "CJC-1295 No DAC + ipamorelin research dosage",
      paragraphs: [
        "Searches for this combination most often lead to clinic, vendor, community, and protocol pages. Repeated online conventions are not independent clinical validation.",
        "**No controlled human trial of the exact combination was identified.** Component research supports only that IV ipamorelin can produce dose-related GH release and that GHRH/GHRP pathway co-stimulation can be synergistic with other agents.",
      ],
      tables: [
        {
          caption: "Commonly reported research protocols (anecdotal)",
          headers: [
            "Research protocol",
            "Reported Modified GRF 1-29",
            "Reported ipamorelin",
            "Frequency",
            "Route",
            "Reported duration",
            "Evidence basis",
          ],
          rows: [
            [
              "Equal low pairing",
              "100 mcg",
              "100 mcg",
              "Usually once daily",
              "SC",
              "Often 8–12 weeks",
              "Anecdotal combination convention",
            ],
            [
              "Common unequal pairing",
              "100 mcg",
              "200 mcg",
              "Once or twice daily",
              "SC",
              "Often 8–16 weeks",
              "Widely repeated online; no controlled validation",
            ],
            [
              "Higher-ipamorelin pairing",
              "100 mcg",
              "300 mcg",
              "Once to three times daily",
              "SC",
              "Often 8–16 weeks",
              "Anecdotal; higher exposure without combo safety data",
            ],
            [
              "Equal higher pairing",
              "200 mcg",
              "200 mcg",
              "Once or twice daily",
              "SC",
              "Often 8–12 weeks",
              "Less consistently reported; no dose-response basis",
            ],
            [
              "Five-on / two-off variation",
              "Commonly one of the above",
              "Commonly one of the above",
              "1–3× on five days weekly",
              "SC",
              "Often 8–16 weeks",
              "Unvalidated cycling convention",
            ],
          ],
        },
        {
          caption: "What “100/200 mcg” means (always label both components)",
          headers: [
            "Shorthand",
            "Modified GRF 1-29",
            "Ipamorelin",
            "Total peptide mass per administration",
          ],
          rows: [
            ["100/100 mcg", "100 mcg", "100 mcg", "200 mcg"],
            ["100/200 mcg", "100 mcg", "200 mcg", "300 mcg"],
            ["100/300 mcg", "100 mcg", "300 mcg", "400 mcg"],
          ],
        },
      ],
      notes: [
        "The total mass is **not** a pharmacologically interchangeable “combined dose.” The two peptides have different molecular weights, receptors, and unknown subcutaneous exposure.",
      ],
      widgetAfter: "cjc-ipa-ratio-visual",
    },
    {
      id: "reported-range",
      title: "Reported combination research dosage range",
      tables: [
        {
          caption: "Online protocol landscape (not an established interval)",
          headers: ["Field", "Reported information"],
          rows: [
            [
              "Modified GRF 1-29 per administration",
              "Most often ~100 mcg; broader reports commonly 50–300 mcg",
            ],
            ["Ipamorelin per administration", "Most often about 100–300 mcg"],
            [
              "Most repeated pairing",
              "≈100 mcg Modified GRF 1-29 + 200 mcg ipamorelin",
            ],
            [
              "Frequency",
              "Once daily is common; twice or three times daily also appears",
            ],
            ["Route", "Subcutaneous"],
            [
              "Typical reported duration",
              "8–16 weeks, sometimes with weekly or post-cycle breaks",
            ],
            ["Exact-combination human-trial overlap", "None"],
            [
              "Evidence quality",
              "Low / insufficient; primarily commercial and community protocols",
            ],
          ],
        },
      ],
      paragraphs: [
        "This range describes the online protocol landscape, not an established safe or effective interval. It should not be converted into weight-based instructions or a “maximum dose.” **No reconstitution or injection calculator** is provided—no validated target dose exists.",
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus clinically studied dosing",
      paragraphs: [
        "The lack of clinical overlap is complete. Published ipamorelin trials used IV, weight-based dosing in acute research or hospitalized postoperative populations. The online combination uses fixed subcutaneous amounts over months. Neither route conversion nor safety can be inferred without bioavailability and interaction data.",
      ],
      widget: "cjc-ipa-clinical-vs-anecdotal",
    },
    {
      id: "protocol-variations",
      title: "Research protocol variations",
      numbered: [
        "**1:1 versus 1:2 versus 1:3 ratios.** Equal-mass blends commonly produce 1:1 because they are convenient. Separate vials make 1:2 or 1:3 easier to report. No clinical comparison established any ratio; more ipamorelin than Modified GRF 1-29 is a community convention.",
        "**Once daily versus multiple daily administrations.** Bedtime-only vs repeated-pulse strategies have not been compared for the exact combination. A two-hour IV half-life for ipamorelin does not establish the ideal SC interval; Modified GRF 1-29 human PK is unresolved.",
        "**Daily versus five days on / two days off.** No exact-combination trial evaluated desensitization or showed that two off-days improve response or safety.",
        "**Fixed blend versus separate components.** Blends lock ratio and complicate analytics; separate vials add quality variables. No study shows either presentation is better. Blends also make adverse-effect attribution harder.",
      ],
    },
    {
      id: "timing",
      title: "Timing, fasting, and “pulse” claims",
      paragraphs: [
        "Bedtime, fasted, pre-meal, and post-training schedules are frequently promoted based on physiology hypotheses (glucose/FFA blunting GH; avoiding competition with a natural pulse). Those are **not** results from a Modified GRF 1-29 plus ipamorelin trial.",
        "The exact combination has not been compared at bedtime versus morning; fasted versus fed; once daily versus divided daily; before versus after exercise; or continuously versus cyclically. It is inappropriate to label any timing schedule “optimal.”",
      ],
      widget: "cjc-ipa-claim-checker",
    },
    {
      id: "why-repeated",
      title: "Why these research amounts are repeated",
      numbered: [
        "**The 100 mcg “saturation” story** — unverified; no exact-molecule occupancy study; 1 mcg/kg → 100 mcg only at 100 kg.",
        "**Complementary-receptor rationale** — strongest scientific rationale is acute GHRH/GHRP synergy with other molecules; mechanism does not identify a dose.",
        "**Vial arithmetic and fixed-ratio blends** — equal 5 mg/5 mg blends encourage equal-mass descriptions; commercial convenience ≠ biological optimum.",
        "**Half-life assumptions** — IV ipamorelin ~2 h plus unverified ~30 min Mod GRF figure cannot generate a validated SC coadministration frequency.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      paragraphs: [
        "No exact-combination human protocol exists. The apparent precision of 100/200 mcg shorthand does not establish a validated dose.",
      ],
      widget: "cjc-ipa-evidence-ladder",
    },
    {
      id: "escalation",
      title: "Is there a research escalation schedule?",
      paragraphs: [
        "No formal escalation schedule exists. Human ipamorelin studies assigned weight-based IV arms; they did not titrate a subcutaneous combination. FDA identified no exact clinical dosing for Modified GRF 1-29.",
        "Online sources sometimes describe beginning with 100/100 mcg and then increasing ipamorelin to 200 or 300 mcg, or increasing from once to twice daily. This is an **anecdotal pattern**, not evidence-based titration. No study shows that escalating one component is safer than increasing frequency, that response plateaus at a particular amount, or that biomarkers make such escalation safe.",
      ],
    },
    {
      id: "preclinical",
      title: "Preclinical research dosage",
      paragraphs: [
        "No reproducible animal dosing study of the exact Modified GRF 1-29 plus ipamorelin combination was identified in FDA reviews or published literature searches through September 2026. Individual-component and other GHRH/GHRP combination experiments are not exact-combination evidence.",
        "Animal doses should not be converted casually into human doses. Species differences in GH pulsatility, receptor pharmacology, metabolism, and body-surface scaling make simple mcg/kg conversion misleading.",
      ],
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "Exact-combination safety is unknown: there is no trial from which to calculate adverse-effect incidence for chronic subcutaneous combined use.",
        "Extra caution is warranted with active malignancy, pituitary disease, abnormal IGF-1, diabetes or impaired glucose control, pregnancy or breastfeeding, proliferative retinopathy, significant edema, or untreated sleep apnea. Because no approved protocol exists, decisions about endocrine testing or exposure require a licensed clinician.",
      ],
      widget: "cjc-ipa-adverse-events",
    },
    {
      id: "anti-doping",
      title: "Anti-doping status",
      paragraphs: [
        "Growth-hormone-releasing factors and growth-hormone secretagogues are prohibited under the WADA Prohibited List. Athletes subject to anti-doping rules should not assume that “research peptide,” compounded status, or an online clinic prescription makes the combination permissible. Product contamination or mislabeling adds further risk.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "CJC-1295 (No DAC) plus ipamorelin is a mechanistically plausible but clinically unvalidated pairing. Acute human research with other GHRH/GHRP combinations supports the possibility of synergistic GH release; it does not establish the marketed combination’s dose, ratio, timing, outcomes, or safety.",
        "The most repeated online convention—about **100 mcg Modified GRF 1-29 plus 100–300 mcg ipamorelin**, once to three times daily by subcutaneous injection for 8–16 weeks—is an **anecdotal research protocol**. There is no FDA-approved dose, no exact-combination human dose range, no validated titration, and no established maximum.",
      ],
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question:
          "What is the most commonly reported CJC-1295 No DAC + ipamorelin dose?",
        answer:
          "Approximately 100 mcg of Modified GRF 1-29 paired with 100–300 mcg of ipamorelin per administration is the most repeated online range. The 100/200 mcg pairing appears especially common. It is anecdotal and has not been validated in a controlled human trial.",
      },
      {
        question: "Is 100/100 mcg a clinically studied combination dose?",
        answer:
          "No. It is a community convention. No exact-combination human study established 100/100 mcg, its route, or its frequency.",
      },
      {
        question: "Is 100/200 better than 100/100?",
        answer:
          "Unknown. No ratio-comparison trial exists. A higher ipamorelin amount increases nominal exposure, but the resulting GH response, benefit, and risk have not been quantified for the combination.",
      },
      {
        question: "Was CJC-1295 plus ipamorelin studied together?",
        answer:
          "No controlled human study of the exact no-DAC CJC-1295 plus ipamorelin pairing was identified. Human synergy studies used native GHRH with GHRP-6 or hexarelin, not these two compounds.",
      },
      {
        question: "Can the CJC-1295 DAC studies support this protocol?",
        answer:
          "No. DAC adds an albumin-binding group and changes the half-life from short-acting behavior to multi-day exposure. Weekly DAC studies cannot establish the dose or timing of Modified GRF 1-29.",
      },
      {
        question:
          "Does the combination have to be taken at bedtime or while fasted?",
        answer:
          "No exact-combination trial established either requirement. These are physiology-based online conventions, not controlled findings.",
      },
      {
        question: "Is a 5 mg/5 mg blend the same as a 10 mg dose?",
        answer:
          "It contains 10 mg total peptide mass, but only 5 mg of each component. The label should state both component quantities. Total blend mass alone is inadequate for comparing protocols.",
      },
      {
        question:
          "Is the combination safer than growth hormone because it preserves pulses?",
        answer:
          "That has not been demonstrated. Secretagogue-induced release may remain feedback-sensitive, but no long-term combination trial established comparative safety against recombinant GH or placebo.",
      },
      {
        question: "Is there a maximum dose or recommended cycle length?",
        answer:
          "No. The frequently repeated 8–16-week cycles and upper per-administration amounts are anecdotal. A clinically established maximum dose and duration do not exist.",
      },
      {
        question:
          "Can the ipamorelin IV trial dose be converted to a subcutaneous blend dose?",
        answer:
          "Not reliably. Human subcutaneous bioavailability and combination pharmacokinetics are not established, so a direct route conversion would be speculative.",
      },
    ],
  },
  sources: {
    title: "Primary and regulatory references",
    items: [
      {
        authors: "FDA",
        title: "CJC-1295-related bulk drug substances: scientific review",
        detail: "2024.",
        href: "https://www.fda.gov/media/183819/download",
      },
      {
        authors: "FDA",
        title: "Ipamorelin acetate: scientific review",
        detail: "2024.",
        href: "https://www.fda.gov/media/182088/download",
      },
      {
        authors: "FDA",
        title:
          "Bulk drug substances that may present significant compounding safety risks",
        detail: "Compounding safety page.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        authors: "Gobburu JVS et al.",
        title: "Pharmacokinetic-pharmacodynamic modeling of ipamorelin",
        detail: "1999.",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
      {
        authors: "Beck DE et al.",
        title: "Ipamorelin for postoperative ileus after bowel resection",
        detail: "2014.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25331030/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT01280344",
        detail: "Phase 2 ipamorelin dose finding.",
        href: "https://clinicaltrials.gov/study/NCT01280344",
      },
      {
        authors: "Teichman SL et al.",
        title: "Prolonged GH and IGF-1 stimulation by CJC-1295 DAC",
        detail: "2006 — DAC molecule, not this pairing.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
      },
      {
        authors: "Adjacent synergy",
        title: "GHRH plus GHRP-6 in young and late adulthood",
        detail: "Class-level acute synergy only.",
        href: "https://pubmed.ncbi.nlm.nih.gov/7734029/",
      },
      {
        authors: "Adjacent synergy",
        title: "GHRH plus hexarelin in healthy controls and type 1 diabetes",
        detail: "Not Modified GRF 1-29 + ipamorelin.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8799695/",
      },
      {
        authors: "Adjacent synergy",
        title: "Low-dose hexarelin plus GHRH",
        detail: "Acute potentiation; different molecules.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8954038/",
      },
      {
        authors: "Raun K et al.",
        title: "Ipamorelin, the first selective growth hormone secretagogue",
        detail: "1998 — foundational pharmacology; not the marketed combo.",
        href: "https://pubmed.ncbi.nlm.nih.gov/9849822/",
      },
      {
        authors: "Thomas A et al.",
        title: "Detection of growth-hormone-releasing peptides in seized products",
        detail: "2019 — detection ≠ dosing evidence.",
        href: "https://pubmed.ncbi.nlm.nih.gov/30136411/",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "There is **no FDA-approved dosage** for CJC-1295 (No DAC) plus ipamorelin. **No controlled human trial of the exact combination was identified.**",
      "This page documents component research and commonly reported anecdotal protocols. It is **not** a dosing, reconstitution, cycle, stack, or self-administration guide. **No reconstitution or injection calculator** is provided.",
      "Exact-combination adverse-event rates are unknown. Class concerns from GH/IGF-1 signaling and FDA compounding-safety reviews for both peptides apply as context—not measured combination incidence rates.",
    ],
  },
};

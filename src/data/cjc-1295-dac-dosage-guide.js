/**
 * CJC-1295 DAC dosage guide — human trials vs anecdotal weekly protocols.
 * Long-acting albumin-binding GHRH analog; not interchangeable with “no DAC.”
 */

export const CJC_DAC_IDENTITY = [
  {
    id: "unsure",
    label: "I’m not sure",
    verdict: "Verify the label before applying any dose schedule",
    detail:
      "FDA identified five distinct CJC-1295-related bulk substances. Inconsistent naming creates identity, purity, and dosing problems. Check the exact chemical name, whether DAC/albumin-binding language appears, salt/counterion, and independent analytical documentation—not the short marketing name alone.",
    scheduleHint:
      "Do not assume daily 100–300 mcg schedules apply. Those usually describe Modified GRF 1-29 (“CJC-1295 no DAC”).",
  },
  {
    id: "dac",
    label: "CJC-1295 DAC (with DAC)",
    verdict: "Long-acting albumin-binding GHRH analog — this page",
    detail:
      "Also called CJC-1295 with DAC or DAC:GRF. Designed to form a covalent conjugate with albumin. Published human studies appear to concern this DAC active moiety (exact salt form not always specified).",
    scheduleHint:
      "Human research used weight-based subcutaneous doses, typically weekly or every 14 days—not daily microdosing.",
  },
  {
    id: "no-dac",
    label: "CJC-1295 no DAC / Mod GRF 1-29",
    verdict: "Different molecule — different protocol landscape",
    detail:
      "Usually a shorter-acting tetrasubstituted GHRH analog without the albumin-binding Drug Affinity Complex. Not interchangeable with CJC-1295 DAC.",
    scheduleHint:
      "Daily or multiple-daily 100–300 mcg schedules generally belong here—not to DAC. Do not apply DAC weekly mg amounts to this peptide, or vice versa.",
  },
];

export const CJC_DAC_CLINICAL_DOSES = [
  { mcgkg: 20, context: "Lowest weekly repeat-dose arm" },
  { mcgkg: 30, context: "Single and repeat-dose research" },
  { mcgkg: 60, context: "Single/repeat research; Phase 2 starting level" },
  { mcgkg: 90, context: "Pulsatility study; Phase 2 lower-arm escalation" },
  { mcgkg: 120, context: "Reported Phase 2 escalation" },
  { mcgkg: 125, context: "Higher single-dose cohort" },
  { mcgkg: 240, context: "Reported Phase 2 high arm" },
  { mcgkg: 250, context: "Highest published single-dose cohort" },
];

export const CJC_DAC_COMPARE = {
  clinical: {
    id: "clinical",
    label: "Clinical research",
    badge: "Weight-based SC · hormonal endpoints",
    summary:
      "Published human studies used 20–250 mcg/kg subcutaneously. Purpose: PK/PD, GH/IGF-1, pulsatility, biomarkers, or HIV-associated visceral obesity—not physique outcomes.",
    rows: [
      {
        name: "Teichman Study 1 (2006)",
        dose: "30, 60, 125, or 250 mcg/kg",
        frequency: "Single dose",
        duration: "28-day study",
        finding: "Dose-dependent GH/IGF-1; IGF-1 above normal only at 250 mcg/kg",
      },
      {
        name: "Teichman Study 2 (2006)",
        dose: "20–60 mcg/kg",
        frequency: "Weekly or every 14 days",
        duration: "2–3 injections; 49-day study",
        finding: "Accumulation: Cmax 29–70% higher by day 14; IGF-1 elevated through day 28",
      },
      {
        name: "Ionescu & Frohman (2006)",
        dose: "60 or 90 mcg/kg",
        frequency: "Single dose",
        duration: "Assessed at 1 week",
        finding: "Higher interpulse GH baseline; no pulse-frequency change; 60 vs 90 similar",
      },
      {
        name: "NCT00267527 Phase 2",
        dose: "60→90→120 or 60→120→240 mcg/kg",
        frequency: "Once weekly",
        duration: "Planned ~12 weeks",
        finding: "Terminated after MI/death; results unpublished",
      },
    ],
  },
  anecdotal: {
    id: "anecdotal",
    label: "Anecdotal protocols",
    badge: "Fixed weekly mg · unvalidated outcomes",
    summary:
      "Online conventions commonly report 0.5–2 mg total per week. Route and weekly cadence partially overlap clinical research; dose construction and claimed outcomes do not.",
    rows: [
      {
        name: "Lower fixed-dose",
        dose: "0.5 mg total / week",
        frequency: "Once weekly",
        duration: "Often 8–12 weeks",
        finding: "Anecdotal; not validated in controlled trials",
      },
      {
        name: "Common fixed-dose",
        dose: "1 mg total / week",
        frequency: "Once weekly",
        duration: "Often 8–12 weeks",
        finding: "Repeated convention; original basis not identified",
      },
      {
        name: "Higher fixed-dose",
        dose: "2 mg total / week",
        frequency: "Once weekly",
        duration: "Often 8–16 weeks",
        finding: "Anecdotal ceiling; below many weight-based clinical exposures",
      },
      {
        name: "Split weekly",
        dose: "1–2 mg / week (0.5–1 mg × 2)",
        frequency: "Twice weekly",
        duration: "Often 8–12 weeks",
        finding: "Not tested in formal human trials",
      },
      {
        name: "DAC + ipamorelin",
        dose: "DAC weekly; ipamorelin daily/intermittent",
        frequency: "Mixed",
        duration: "Multiweek “cycle”",
        finding: "No controlled combination dose-finding trial",
      },
    ],
  },
};

export const CJC_DAC_ACCUMULATION = {
  halfLifeDays: [5.4, 9.2],
  measurableDays: "10–13 days",
  injectionDays: [0, 7, 14],
  notes: [
    "Estimated half-life approximately 5.4–9.2 days in available human studies",
    "Cmax after day-14 dose was 29–70% higher than after the first dose",
    "AUC rose with repeat dosing; mean IGF-1 rose within 8 hours and stayed above baseline through day 28",
  ],
};

export const CJC_DAC_PHASE2 = [
  { week: 1, low: "60 mcg/kg", high: "60 mcg/kg" },
  { week: 2, low: "90 mcg/kg", high: "120 mcg/kg" },
  { week: 3, low: "120 mcg/kg", high: "240 mcg/kg" },
  { week: "4–12", low: "Final assigned regimen", high: "Final assigned regimen" },
];

export const CJC_DAC_AE_SIMPLE = [
  ["Injection-site reactions", "~70%", "—"],
  ["Transient injection-site urticaria", "~30%", "—"],
  ["Headache", "63%", "14%"],
  ["Diarrhea / loose stools", "43% (higher at 125–250 mcg/kg)", "—"],
  ["Flushing / vasodilatory reactions", "30%", "—"],
  ["Heart-rate increase", "Dose-dependent (pulsatility study)", "—"],
];

export const CJC_DAC_AE_FULL = [
  [
    "Any adverse event (Study 1)",
    "94% active",
    "29% placebo",
    "Teichman single-dose study",
  ],
  [
    "Injection-site irritation/pain/itch",
    "~70%",
    "—",
    "Every active recipient in repeat-dose study had an ISR",
  ],
  [
    "Transient injection-site urticaria",
    "~30%",
    "—",
    "FDA safety summary",
  ],
  ["Headache", "63%", "14%", "More common on active drug"],
  [
    "Loose stools / diarrhea",
    "45% @ 125; 100% @ 250 mcg/kg",
    "—",
    "Dose-related GI effects",
  ],
  [
    "Systemic vasodilatory reactions",
    "30%",
    "—",
    "Flushing, warmth, transient hypotension",
  ],
  [
    "Heart-rate increase",
    "Dose-dependent",
    "—",
    "60/90 mcg/kg pulsatility study",
  ],
  [
    "Phase 2 fatal MI",
    "1 participant (study terminated)",
    "—",
    "After 11th weekly dose; causality not established; results unpublished",
  ],
  [
    "Long-term / immunogenicity / genotoxicity",
    "Unresolved",
    "—",
    "FDA flagged aggregates, DNA-damage signals, no long-term carcinogenicity data",
  ],
];

export const CJC_DAC_DOSAGE_LADDER = [
  {
    level: "FDA-approved dosing",
    status: "none",
    detail: "No approved CJC-1295 DAC product or indication",
  },
  {
    level: "Human clinical-trial dosing",
    status: "mixed",
    detail: "Moderate for short-term PK/PD; weak for clinical benefit",
  },
  {
    level: "Published experimental dosing",
    status: "limited",
    detail: "Multiple controlled hormonal-response studies in healthy adults",
  },
  {
    level: "Preclinical dosing",
    status: "animal",
    detail: "Efficacy and toxicology models — not transferable as human dosing",
  },
  {
    level: "Anecdotal research protocols",
    status: "low",
    detail: "Widely repeated fixed weekly doses without controlled validation",
  },
  {
    level: "Long-term dosing evidence",
    status: "none",
    detail: "Phase 2 terminated and unpublished; chronic safety unresolved",
  },
];

export const CJC1295_DAC_DOSAGE_GUIDE = {
  title: "CJC-1295 DAC Dosage: Human Trials, Research Protocols, and Evidence",
  updated: "Updated August 2026",
  callout:
    "**Research status:** CJC-1295 DAC is not an FDA-approved drug and has no FDA-approved dosage. This page documents published research and commonly reported experimental protocols; it is **not** a dosing recommendation or a guide to self-administration.",
  intro: [
    "**No approved dose exists.** CJC-1295 DAC has no FDA-approved indication, label, starting dose, maintenance dose, or maximum dose.",
    "**Human studies used subcutaneous, weight-based dosing.** Published studies tested single doses of **30, 60, 90, 125, or 250 mcg/kg** and repeat doses of **20–60 mcg/kg** weekly or every two weeks. Estimated half-life was approximately **5.4–9.2 days**; repeat dosing produced progressive accumulation and sustained IGF-1 elevation.",
    "**Online protocols usually report much smaller fixed doses**—approximately **0.5–2 mg per week**. That range has **not** been validated in controlled human trials. **CJC-1295 DAC is not “CJC-1295 no DAC.”** Daily 100–300 mcg schedules generally describe Modified GRF 1-29.",
  ],
  glance: {
    title: "CJC-1295 DAC dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**Is there an FDA-approved CJC-1295 DAC dosage?**", "No"],
        ["**Published single-dose range**", "30–250 mcg/kg subcutaneously"],
        [
          "**Published repeat-dose range**",
          "20–60 mcg/kg, weekly or every 14 days, for 2–3 injections",
        ],
        [
          "**Reported Phase 2 range**",
          "60–240 mcg/kg once weekly, with escalation",
        ],
        [
          "**Commonly reported online range**",
          "Approximately 0.5–2 mg total per week",
        ],
        ["**Is the online range clinically established?**", "No"],
        [
          "**Human half-life**",
          "Approximately 5.4–9.2 days in the available studies",
        ],
        [
          "**Is daily microdosing a DAC protocol?**",
          "Usually not — daily 100–300 mcg protocols generally describe the non-DAC peptide",
        ],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "First: confirm which CJC-1295 molecule is being discussed",
      paragraphs: [
        "“CJC-1295” is used inconsistently online. **CJC-1295 DAC / with DAC / DAC:GRF** is the long-acting albumin-binding GHRH analog used in the human studies on this page. **CJC-1295 without DAC / Mod GRF 1-29** is a shorter-acting analog with an entirely different protocol landscape.",
        "FDA's scientific review identified five distinct CJC-1295-related bulk substances and warned that inconsistent naming creates identity, purity, and dosing problems. Published human studies appear to concern the DAC active moiety, although the exact salt form was not consistently specified.",
      ],
      widget: "cjc-dac-identity-gate",
      highlight:
        "Any dose of 100–300 mcg given one to three times daily should not automatically be attributed to CJC-1295 DAC. That schedule usually belongs to Modified GRF 1-29 (“CJC-1295 no DAC”).",
    },
    {
      id: "fda-approved",
      title: "Is there an FDA-approved CJC-1295 DAC dosage?",
      paragraphs: [
        "No. CJC-1295 DAC is investigational and has no FDA-approved product or indication—therefore no approved starting dose, titration schedule, maintenance dose, treatment duration, or maximum dose.",
        "In December 2024, FDA proposed that CJC-1295 DAC free base, acetate, and trifluoroacetate not be included on the Section 503A Bulks List. The Pharmacy Compounding Advisory Committee voted **0 yes and 13 no** on inclusion. FDA's compounding safety page identifies immunogenicity, peptide-impurity, API-characterization, increased-heart-rate, and systemic-vasodilatory concerns. An advisory vote is not an approval decision, but compounded availability must not be described as FDA approval.",
      ],
      highlight:
        "There is currently no FDA-approved dosage for CJC-1295 DAC. The doses below describe doses evaluated in human research rather than an established prescribing protocol.",
    },
    {
      id: "human-trials",
      title: "Dosages used in human clinical research",
      paragraphs: [
        "Formal human evidence comes from healthy-adult PK/PD studies, a GH-pulsatility study, an exploratory biomarker analysis, and a terminated Phase 2 program in HIV-associated visceral obesity.",
      ],
      widget: "cjc-dac-clinical-anecdotal",
      tables: [
        {
          caption: "Human clinical dosage summary",
          headers: ["Study", "Dose", "Frequency", "Route", "Duration", "Purpose"],
          rows: [
            [
              "Teichman Study 1 (2006)",
              "30–250 mcg/kg",
              "Single",
              "SC",
              "28-day study",
              "PK/PD, GH, IGF-1, safety",
            ],
            [
              "Teichman Study 2 (2006)",
              "20–60 mcg/kg",
              "Weekly or q14d",
              "SC",
              "2–3 doses; 49 days",
              "Accumulation, GH, IGF-1, safety",
            ],
            [
              "Ionescu & Frohman (2006)",
              "60 or 90 mcg/kg",
              "Single",
              "SC",
              "1-week assessment",
              "GH pulsatility and IGF-1",
            ],
            [
              "NCT00267527 Phase 2",
              "60–240 mcg/kg escalation",
              "Once weekly",
              "SC",
              "Planned 12 weeks",
              "HIV visceral obesity; terminated",
            ],
          ],
        },
      ],
    },
    {
      id: "single-dose",
      title: "Single-dose clinical research",
      paragraphs: [
        "Teichman and colleagues assigned participants to parallel ascending cohorts: **30, 60, 125, or 250 mcg/kg** subcutaneously. This was escalation across study groups—not a within-person titration.",
        "Single administration produced dose-dependent increases in mean GH and IGF-1. Mean GH rose approximately **2- to 10-fold** for at least six days; mean IGF-1 rose approximately **1.5- to 3-fold** for 9–11 days. IGF-1 exceeded the age- and sex-adjusted normal range only in the **250 mcg/kg** group.",
      ],
      tables: [
        {
          caption: "Single-dose cohorts — hormonal response and tolerability context",
          headers: ["Cohort", "GH finding", "IGF-1 finding", "Safety context"],
          rows: [
            [
              "30 mcg/kg",
              "Increase observed; GH AUC not significantly higher than placebo in FDA summary",
              "Increased from baseline",
              "Lower-dose exposure",
            ],
            [
              "60 mcg/kg",
              "GH AUC significantly higher than placebo",
              "IGF-1 AUC significantly increased",
              "Paper described 30–60 mcg/kg as relatively better tolerated",
            ],
            [
              "125 mcg/kg",
              "GH and IGF-1 AUC significantly increased",
              "Elevated for at least two weeks",
              "Loose stools/diarrhea and other AEs more common",
            ],
            [
              "250 mcg/kg",
              "Highest studied single exposure",
              "IGF-1 exceeded adjusted normal range",
              "Highest rate/severity of several adverse effects",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "These findings establish a **hormonal** dose response—not a dose-response curve for muscle growth, fat loss, sleep, recovery, or “anti-aging.” Those clinical outcomes were not measured.",
      ],
    },
    {
      id: "repeat-dose",
      title: "Repeat-dose clinical research",
      paragraphs: [
        "The repeat-dose study directly compared weekly and every-two-week schedules at 20–60 mcg/kg. Maximum plasma concentrations were **29–70% higher** after the day-14 dose than after the first dose, and AUC also rose. Mean IGF-1 increased within eight hours and remained above baseline through day 28—cumulative exposure after only two or three injections.",
      ],
      widget: "cjc-dac-accumulation",
      tables: [
        {
          caption: "Teichman Study 2 repeat-dose groups",
          headers: ["Group", "Per-dose amount", "Study days", "Active doses", "Frequency"],
          rows: [
            ["1", "30 mcg/kg", "0 and 14", "2", "Every 14 days"],
            ["2", "60 mcg/kg", "0 and 14", "2", "Every 14 days"],
            ["3", "30 mcg/kg", "0, 7, and 14", "3", "Weekly"],
            ["4", "20 mcg/kg", "0, 7, and 14", "3", "Weekly"],
          ],
        },
      ],
    },
    {
      id: "pulsatility",
      title: "GH pulsatility study",
      paragraphs: [
        "Twelve healthy men received a single **60 or 90 mcg/kg** subcutaneous dose. One week later, mean GH was **46%** above baseline, trough GH was **7.5-fold** higher, and mean IGF-1 was **44–45%** higher. Pulse frequency and magnitude were not significantly changed; most of the increase came from a higher GH baseline between pulses. No significant response difference was observed between 60 and 90 mcg/kg in this small study.",
      ],
    },
    {
      id: "phase2",
      title: "Phase 2 escalation in HIV-associated visceral obesity",
      paragraphs: [
        "NCT00267527 enrolled 192 people with HIV-associated visceral obesity in two once-weekly escalation arms. The study was **terminated** after a participant experienced chest discomfort two hours after an eleventh weekly dose, had an ECG-confirmed acute myocardial infarction, and died approximately one hour later. The attending physician reportedly considered asymptomatic coronary artery disease with plaque rupture most likely. Results were never published—so causal relationship and arm-level efficacy/safety cannot be established from the public record.",
      ],
      tables: [
        {
          caption: "Reported Phase 2 once-weekly escalation",
          headers: ["Week", "Lower-dose arm", "Higher-dose arm"],
          rows: [
            ["1", "60 mcg/kg", "60 mcg/kg"],
            ["2", "90 mcg/kg", "120 mcg/kg"],
            ["3", "120 mcg/kg", "240 mcg/kg"],
            ["4–12", "Final assigned regimen (reported)", "Final assigned regimen (reported)"],
          ],
        },
      ],
    },
    {
      id: "weight-reference",
      title: "Clinical dose-by-weight reference",
      paragraphs: [
        "The calculator converts published per-kilogram study exposures into total milligrams for a chosen body weight. It is **mathematical context only**—not a dosing chart for use. It does not account for individual risk, product identity, purity, or accumulation.",
      ],
      widget: "cjc-dac-exposure-calc",
    },
    {
      id: "research-dosage",
      title: "CJC-1295 DAC research dosage",
      paragraphs: [
        "People searching for a “CJC-1295 DAC research dose” usually encounter fixed weekly protocols rather than weight-based clinical dosing. These conventions are widespread enough to document, but they should not be portrayed as clinically derived.",
        "Human trials support that subcutaneous CJC-1295 DAC has a long half-life, accumulates with repeat dosing, and increases GH and IGF-1. They do **not** show that 0.5, 1, or 2 mg per week improves body composition, recovery, strength, sleep, or healthy-aging outcomes.",
        "For an 80 kg participant, even the lowest **20 mcg/kg** clinical repeat dose equals **1.6 mg**, while **30–60 mcg/kg** equals **2.4–4.8 mg**. That does not make online doses safer or ineffective—it means their effects have not been established by the original trials.",
      ],
      tables: [
        {
          caption: "Reported research dosage landscape",
          headers: ["", "Reported information"],
          rows: [
            ["**Reported research range**", "Approximately 0.5–2 mg total per week"],
            ["**Most commonly repeated amount**", "Approximately 1–2 mg per week"],
            ["**Frequency**", "Once weekly; sometimes divided into two weekly administrations"],
            ["**Route**", "Subcutaneous"],
            ["**Typical reported duration**", "8–12 weeks; some sources extend to 12–16 weeks"],
            ["**Commonly reported break**", "4–8 weeks"],
            [
              "**Human-trial overlap**",
              "Partial in route and weekly cadence; poor in dose construction and treatment purpose",
            ],
            [
              "**Evidence quality**",
              "Low/insufficient for clinical outcomes and long-term safety",
            ],
          ],
        },
      ],
    },
    {
      id: "anecdotal-vs-clinical",
      title: "Anecdotal vs clinically studied dosing",
      tables: [
        {
          caption: "Clinical research vs anecdotal reports",
          headers: ["Variable", "Clinical research", "Anecdotal research reports"],
          rows: [
            [
              "Dose",
              "20–250 mcg/kg per administration",
              "Usually 0.5–2 mg total per week as a fixed amount",
            ],
            [
              "Frequency",
              "One dose; weekly; or every 14 days",
              "Usually once weekly; sometimes twice weekly",
            ],
            ["Route", "Subcutaneous", "Subcutaneous"],
            [
              "Duration",
              "One injection; 2–3 injections; or planned 12-week Phase 2",
              "Usually 8–16 weeks plus an off-period",
            ],
            [
              "Purpose",
              "PK/PD, GH/IGF-1, pulsatility, biomarkers, visceral obesity",
              "Body composition, sleep, recovery, or “GH optimization” claims",
            ],
            [
              "Evidence",
              "Controlled published studies; terminated unpublished Phase 2",
              "Uncontrolled commercial and community protocols",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Unlike ipamorelin, route and weekly cadence **do** overlap between formal and anecdotal CJC-1295 DAC protocols. Dose basis and purpose do **not**. Clinical studies were weight-based and primarily measured hormones; online protocols use smaller fixed doses and claim outcomes the trials did not test.",
      ],
    },
    {
      id: "protocol-variations",
      title: "Research protocol variations",
      numbered: [
        "**Once weekly vs twice weekly.** Formal research used weekly or every-14-day dosing—not two injections in the same week. Twice-weekly splits are anecdotal. A ~1-week half-life means dividing a weekly amount may change peak-to-trough variation but is not proven to improve efficacy or tolerability.",
        "**Fixed vs weight-based dosing.** All clearly reported formal human doses were weight-based. Most online protocols use a fixed weekly milligram amount. Some PK parameters were weight-independent in studies—that does not validate a universal fixed chronic dose.",
        "**Continuous use vs cycling.** 8–16 weeks on / 4–8 weeks off is commonly repeated. Published PK studies did not compare cycling strategies. Phase 2 planned 12 treatment weeks and 6 weeks of follow-up as trial design—not proof of an optimal cycle.",
        "**Monotherapy vs combination.** Pairing with ipamorelin has a complementary-receptor rationale, but **no controlled human trial** established optimal dose, timing, ratio, or safety. Many “CJC-1295/Ipamorelin” vials contain Modified GRF 1-29 rather than DAC.",
        "**Bedtime or fasted timing.** Often inherited from short-acting peptide protocols. DAC produced measurable exposure for 10–13 days and elevated IGF-1 for weeks. No trial showed a particular time of day or meal interval improves DAC outcomes.",
      ],
    },
    {
      id: "animal-dosing",
      title: "Animal / preclinical research dosage",
      paragraphs: [
        "Animal doses must remain separate from human research and should not be converted casually into human protocols. Efficacy models show GH-pathway stimulation; toxicology identified injection-site hemorrhage/inflammation/necrosis, altered food intake and activity, reduced hemoglobin, altered cholesterol, and genotoxicity signals. These data cannot determine a safe or effective human dose.",
      ],
      tables: [
        {
          caption: "Selected preclinical exposures",
          headers: ["Model", "Dose", "Route", "Duration", "Outcome studied"],
          rows: [
            [
              "Adult male rats",
              "1 µmol/kg",
              "SC single",
              "Detectable ≤72 h",
              "Albumin conjugation, PK, GH",
            ],
            [
              "GHRH-knockout mice",
              "2 mcg/mouse",
              "SC then IP",
              "5 weeks (q24–72 h)",
              "Growth, composition, pituitary GH",
            ],
            [
              "Rats / dogs acute toxicity",
              "2–8 mg/kg IV; 8–40 mg/kg SC",
              "IV or SC",
              "Acute",
              "Food intake, stool, emesis, activity",
            ],
            [
              "Rats / dogs repeat toxicity",
              "0.25–4 mg/kg/day IV; 2–18 mg/kg/day SC",
              "Daily",
              "14 days",
              "Systemic and injection-site toxicology",
            ],
            [
              "Mice genotoxicity model",
              "10 mcg/kg/day SC",
              "Daily",
              "8 weeks",
              "DNA-damage signals in anterior pituitary",
            ],
          ],
        },
      ],
    },
    {
      id: "why-schedules",
      title: "Why these research doses and schedules appear",
      numbered: [
        "**Albumin binding and long half-life.** The DAC maleimide binds albumin cysteine-34. Estimated human half-life 5.4–9.2 days supports weekly or biweekly clinical-study schedules.",
        "**Cumulative exposure.** Repeat-dose research showed rising Cmax/AUC and progressively greater IGF-1 peaks. Effects or adverse reactions can persist; rapid escalation can occur before prior exposure clears.",
        "**Dose-response and tolerability.** GH/IGF-1 rose with dose; 125 and 250 mcg/kg had more adverse effects. The original paper described 30–60 mcg/kg as relatively better tolerated—that does not validate the modern 0.5–2 mg fixed-dose range.",
        "**Different research endpoints.** Healthy-adult studies were short PK/PD experiments. Phase 2 targeted HIV-associated visceral obesity. None established a dose for bodybuilding, athletic recovery, sleep, general fat loss, or longevity.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      paragraphs: [
        "CJC-1295 DAC has more human PK/PD dosing data than many research peptides, but it still has **no established treatment dose**. Published studies demonstrate long-acting hormonal effects and accumulation across 20–250 mcg/kg exposures, while smaller 0.5–2 mg weekly protocols online have not been validated. Long-term efficacy and safety evidence is particularly weak because the only larger Phase 2 program was terminated and unpublished.",
      ],
      widget: "cjc-dac-dosage-ladder",
    },
    {
      id: "dose-escalation",
      title: "Dose escalation",
      paragraphs: [
        "**Formal clinical escalation** is documented only for the terminated Phase 2 HIV visceral-obesity study (once-weekly SC escalation over three weeks to a final assigned regimen). It was not designed for general research use.",
        "**Anecdotal escalation** often starts at 0.5–1 mg weekly then moves to 1–2 mg. No original dose-finding source was identified. Because human research found roughly one-week half-life and cumulative exposure, an early increase may occur before steady exposure is apparent.",
      ],
    },
    {
      id: "safety-dosage",
      title: "Safety findings relevant to dosage",
      paragraphs: [
        "In Teichman Study 1, adverse events were reported by **94%** of active-drug participants and **29%** of placebo participants. Most adverse effects were more common at **125 or 250 mcg/kg**. FDA also highlighted potential immunogenicity, nonclinical DNA-damage signals, absence of long-term carcinogenicity studies, and theoretical pituitary hyperplasia/tumor risk from prolonged somatotroph stimulation. Because CJC-1295 DAC raises GH and IGF-1, available evidence is insufficient to rule out risks associated with other GH-axis drugs.",
      ],
      widget: "cjc-dac-adverse-events",
    },
    {
      id: "bottom-line",
      title: "Editorial bottom line",
      paragraphs: [
        "The most defensible answer to “What is the CJC-1295 DAC dosage?” is that **no approved treatment dose exists**. Human research establishes a long half-life, dose-dependent GH/IGF-1 elevation, and accumulation at weight-based subcutaneous exposures. Smaller fixed weekly protocols online are real conventions—but not validated substitutes for trial doses—and must never be mixed with the short-acting “CJC-1295 no DAC” protocol landscape.",
      ],
      highlight:
        "Confirm DAC vs no-DAC identity first. Then separate weight-based clinical exposures from anecdotal fixed weekly milligram conventions.",
    },
  ],
  faq: {
    title: "CJC-1295 DAC dosage FAQ",
    items: [
      {
        question: "What is the standard CJC-1295 DAC dosage?",
        answer:
          "There is no standard or FDA-approved dose. Human studies used 20–250 mcg/kg subcutaneously, while online protocols commonly report a much smaller fixed amount of approximately 0.5–2 mg per week. The online range is an anecdotal convention, not an established clinical dosage.",
      },
      {
        question: "What CJC-1295 DAC dose was studied in humans?",
        answer:
          "Published studies tested single doses of 30, 60, 90, 125, and 250 mcg/kg and repeat doses of 20, 30, or 60 mcg/kg given weekly or every 14 days. A terminated Phase 2 study reportedly escalated once-weekly dosing as high as 240 mcg/kg.",
      },
      {
        question: "Is CJC-1295 DAC dosage based on body weight?",
        answer:
          "Formal human studies used body-weight-based dosing. Most online protocols use fixed milligram amounts. No controlled trial established a universal 0.5, 1, or 2 mg weekly dose across body weights.",
      },
      {
        question: "How often was CJC-1295 DAC used in human studies?",
        answer:
          "Published studies used one administration, once-weekly administration, or one administration every 14 days. The Phase 2 study used once-weekly dosing. No formal trial identified here used daily DAC dosing.",
      },
      {
        question: "How long was CJC-1295 DAC used in human studies?",
        answer:
          "Most published participants received only one injection; repeat-dose participants received two or three injections. The Phase 2 trial planned 12 weeks of treatment and a six-week follow-up but was terminated, and its results were not published.",
      },
      {
        question: "Is 1 mg weekly an established CJC-1295 DAC dose?",
        answer:
          "No. One milligram weekly is frequently repeated in current clinic, vendor, and community protocols, but no controlled human trial identified here established it as effective, optimal, or safe.",
      },
      {
        question: "Is 2 mg weekly the maximum dose?",
        answer:
          "No. Two milligrams is a commonly cited anecdotal ceiling, not a clinical maximum. Published weight-based exposures were considerably higher—for example, 30 mcg/kg equals 2.4 mg in an 80 kg participant, and the single-dose study reached 250 mcg/kg.",
      },
      {
        question: "Is CJC-1295 DAC used once or twice weekly?",
        answer:
          "Once-weekly dosing has direct human research precedent. Dividing a fixed weekly amount into two administrations is common online but has not been shown to be safer or more effective in a controlled comparison.",
      },
      {
        question: "Does CJC-1295 DAC need to be taken at bedtime or while fasting?",
        answer:
          "No controlled study identified here established a best time of day or fasting interval. Because the DAC molecule remains in circulation for days, precise meal or bedtime timing is less pharmacologically compelling than it is for short-acting secretagogues.",
      },
      {
        question: "Is CJC-1295 DAC the same as CJC-1295 no DAC?",
        answer:
          "No. The DAC compound binds albumin and has a half-life measured in days. “CJC-1295 no DAC” generally refers to Modified GRF 1-29, a short-acting peptide commonly discussed in 100–300 mcg daily or multiple-daily protocols. Applying one molecule's schedule to the other is a major dosing error.",
      },
      {
        question:
          "Has CJC-1295 DAC plus ipamorelin dosing been clinically established?",
        answer:
          "No controlled human trial identified here established an optimal CJC-1295 DAC/ipamorelin dose, ratio, schedule, or long-term safety profile. Combination-vial labeling can also obscure whether the CJC component actually contains DAC.",
      },
      {
        question: "Does a vial labeled “CJC-1295” contain DAC?",
        answer:
          "Not necessarily. FDA documented substantial naming and identity confusion across CJC-1295-related substances. The exact chemical name, molecular identity, salt/counterion, and independent analytical documentation matter; the short marketing name alone cannot resolve the formulation.",
      },
      {
        question: "Can animal doses be converted into a human CJC-1295 DAC protocol?",
        answer:
          "Not reliably. Species, route, endpoint, albumin binding, pharmacokinetics, and toxicity differ. A human-equivalent-dose calculation would remain a mathematical estimate, not an established human protocol.",
      },
    ],
  },
  sources: {
    title: "Primary and authoritative sources",
    items: [
      {
        authors: "FDA",
        title: "Scientific Review of CJC-1295-Related Bulk Drug Substances",
        detail: "December 2024.",
        href: "https://www.fda.gov/media/183819/download",
      },
      {
        authors: "FDA PCAC",
        title: "December 4, 2024 Pharmacy Compounding Advisory Committee Meeting Minutes",
        detail: "0–13 vote against 503A Bulks List inclusion for DAC forms.",
        href: "https://www.fda.gov/media/185642/download",
      },
      {
        authors: "FDA",
        title:
          "Certain Bulk Drug Substances for Use in Compounding that May Present Significant Safety Risks",
        detail: "CJC-1295 compounding safety summary.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        authors: "Teichman SL et al.",
        title: "Prolonged stimulation of GH and IGF-1 secretion by CJC-1295",
        detail: "Journal of Clinical Endocrinology & Metabolism, 2006.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
      },
      {
        authors: "Ionescu M, Frohman LA",
        title: "Pulsatile GH secretion during continuous CJC-1295 stimulation",
        detail: "Journal of Clinical Endocrinology & Metabolism, 2006.",
        href: "https://pubmed.ncbi.nlm.nih.gov/17018654/",
      },
      {
        authors: "Sackmann-Sala L et al.",
        title: "GH/IGF-1-axis activation and serum protein changes",
        detail: "Growth Hormone & IGF Research, 2009.",
        href: "https://pubmed.ncbi.nlm.nih.gov/19386527/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT00267527",
        detail: "Phase 2 HIV visceral obesity; terminated; results unpublished.",
        href: "https://clinicaltrials.gov/study/NCT00267527",
      },
      {
        authors: "Jetté L et al.",
        title: "Identification of CJC-1295 as a long-lasting GRF analog",
        detail: "Endocrinology, 2005.",
        href: "https://pubmed.ncbi.nlm.nih.gov/15817669/",
      },
      {
        authors: "Alba M et al.",
        title: "CJC-1295 administration in GHRH-knockout mice",
        detail: "American Journal of Physiology—Endocrinology and Metabolism, 2006.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16822960/",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "CJC-1295 DAC is investigational and **not FDA approved**. There is **no approved dosage**.",
      "This page documents published research and commonly reported experimental protocols. It is **not** a dosing, reconstitution, cycle, or self-administration guide.",
      "Confirm molecule identity (**DAC vs no DAC**) before interpreting any schedule. Long-term safety is unresolved; the larger Phase 2 program was terminated and unpublished.",
    ],
  },
};

/**
 * Ipamorelin dosage guide — human trials vs anecdotal research protocols.
 * No FDA-approved dose; IV weight-based research ≠ fixed SC conventions.
 */

export const IPA_DOSAGE_TIERS = {
  clinical: {
    id: "clinical",
    label: "Human Clinical",
    badge: "Controlled / registered research",
    tone: "demonstrated",
    summary:
      "Weight-based intravenous infusions in healthy men (PK/PD) and postoperative adults (Phase 2). Short duration; GI recovery endpoints — not body composition.",
    rows: [
      {
        name: "Gobburu et al., 1999",
        dose: "4.21–140.45 nmol/kg (~3–100 mcg/kg)",
        frequency: "Single dose",
        route: "15-minute IV infusion",
        duration: "One administration",
        population: "48 healthy men",
        finding:
          "Dose-proportional PK; t½ ~2 h; GH peaked ~0.67 h",
      },
      {
        name: "Beck et al., 2014 / NCT00672074",
        dose: "0.03 mg/kg",
        frequency: "Twice daily",
        route: "IV infusion",
        duration: "POD 1 through day 7 or discharge",
        population: "117 adults after bowel resection",
        finding:
          "Primary efficacy not significant vs placebo (p=0.15)",
      },
      {
        name: "NCT01280344",
        dose: "0.03 mg/kg BID; 0.06 mg/kg BID; 0.06 mg/kg TID",
        frequency: "BID or TID",
        route: "IV infusion",
        duration: "Outcomes up to 10 days",
        population: "320 adults after bowel resection",
        finding:
          "Completed; results not posted / no peer-reviewed report identified",
      },
    ],
  },
  anecdotal: {
    id: "anecdotal",
    label: "Anecdotal",
    badge: "Online convention — not validated",
    tone: "absent",
    summary:
      "Fixed subcutaneous amounts repeated by clinic, vendor, and community pages. Not established by controlled human trials; original source of the 100–300 mcg convention is unclear.",
    rows: [
      {
        name: "Lower fixed-dose protocol",
        dose: "100 mcg per administration",
        frequency: "Once daily, often at night",
        route: "Subcutaneous",
        duration: "Commonly 8–12 weeks",
        population: "Online / clinic descriptions",
        finding: "Anecdotal; no controlled human validation",
      },
      {
        name: "Common fixed-dose range",
        dose: "200–300 mcg per administration",
        frequency: "Once daily",
        route: "Subcutaneous",
        duration: "Often 8–16 weeks",
        population: "Clinic / vendor / community pages",
        finding: "Repeated convention; original basis not identified",
      },
      {
        name: "Divided daily protocol",
        dose: "100–300 mcg per administration",
        frequency: "Two or three times daily",
        route: "Subcutaneous",
        duration: "Often 8–16 weeks",
        population: "Online protocols",
        finding: "Extrapolated from short half-life — not trial-tested",
      },
      {
        name: "Five days on / two off",
        dose: "100–300 mcg per administration",
        frequency: "Intermittent weekly schedule",
        route: "Subcutaneous",
        duration: "Often 8–16 weeks",
        population: "Online protocols",
        finding: "Desensitization claims not established in trials",
      },
      {
        name: "CJC-1295 / Ipamorelin combination",
        dose: "Often 100–300 mcg of each",
        frequency: "1–3× daily (source-dependent)",
        route: "Subcutaneous",
        duration: "Often 8–16 weeks",
        population: "Online / clinic stacks",
        finding: "No controlled trial for dose, ratio, or safety",
      },
    ],
  },
  animal: {
    id: "animal",
    label: "Animal",
    badge: "Preclinical — not human dosing",
    tone: "animal",
    summary:
      "Animal doses support biological activity in models. They must not be presented as human research doses or casually converted into human protocols.",
    rows: [
      {
        name: "Adult female rats (Johansen 1999)",
        dose: "18, 90, or 450 mcg/day",
        frequency: "Divided across three daily injections",
        route: "Subcutaneous",
        duration: "15 days",
        population: "Rats",
        finding: "Longitudinal bone growth, body weight, GH response",
      },
      {
        name: "Postoperative ileus rats (Venkova 2009)",
        dose: "0.01–1 mg/kg",
        frequency: "Single or four doses/day",
        route: "IV bolus",
        duration: "Up to 2 days",
        population: "Male rats",
        finding: "Colonic transit, fecal output, food intake",
      },
      {
        name: "POI rats — oral / IV emptying",
        dose: "10 or 100 mg/kg oral; 0.1–1 mg/kg IV",
        frequency: "Experimental",
        route: "Oral gavage or IV",
        duration: "Acute",
        population: "Rats",
        finding: "Gastric emptying experiments",
      },
      {
        name: "Visceral hypersensitivity model",
        dose: "0.01, 0.1, or 1 mg/kg",
        frequency: "Experimental",
        route: "IV",
        duration: "Acute",
        population: "Rats",
        finding: "Colonic hypersensitivity and somatic allodynia",
      },
    ],
  },
};

export const IPA_CLINICAL_ARMS = [
  {
    id: "beck",
    label: "Beck 2014 · 0.03 mg/kg BID",
    perInfusionMgKg: 0.03,
    timesPerDay: 2,
    note: "Published Phase 2 postoperative ileus regimen",
  },
  {
    id: "nct-low",
    label: "NCT01280344 · 0.03 mg/kg BID",
    perInfusionMgKg: 0.03,
    timesPerDay: 2,
    note: "Registered lower-dose arm · results not posted",
  },
  {
    id: "nct-mid",
    label: "NCT01280344 · 0.06 mg/kg BID",
    perInfusionMgKg: 0.06,
    timesPerDay: 2,
    note: "Registered higher-dose BID arm · results not posted",
  },
  {
    id: "nct-high",
    label: "NCT01280344 · 0.06 mg/kg TID",
    perInfusionMgKg: 0.06,
    timesPerDay: 3,
    note: "Registered higher-dose TID arm · results not posted",
  },
];

export const IPA_PK_COHORTS = [
  { nmol: 4.21, mcgkg: 3, role: "Lowest", note: "Negligible GH in model analysis" },
  { nmol: 14.02, mcgkg: 10, role: "Group 2", note: "Ipamorelin + GH concentrations" },
  { nmol: 42.13, mcgkg: 30, role: "Group 3", note: "Ipamorelin + GH concentrations" },
  { nmol: 84.27, mcgkg: 60, role: "Group 4", note: "Ipamorelin + GH concentrations" },
  { nmol: 140.45, mcgkg: 100, role: "Highest", note: "Ipamorelin + GH concentrations" },
];

export const IPA_ROUTE_CONTRAST = {
  clinical: {
    label: "Clinical research",
    route: "Intravenous infusion",
    duration: "1 administration to ~7–10 postoperative days",
    doseStyle: "Weight-based (mg/kg or nmol/kg)",
    purpose: "PK/PD, GH release, postoperative GI recovery",
  },
  anecdotal: {
    label: "Anecdotal protocols",
    route: "Subcutaneous injection",
    duration: "Usually 8–16 weeks (± breaks)",
    doseStyle: "Fixed mcg amounts (often 100–300 mcg)",
    purpose: "Sleep, recovery, body composition, “anti-aging” claims",
  },
};

export const IPA_AE_SIMPLE = [
  ["Hypokalemia", "12.5%", "3.4%"],
  ["Insomnia", "10.7%", "5.2%"],
  ["Hyperglycemia at discharge", "14.3%", "8.6%"],
  ["Discontinuations for AE", "3 participants", "—"],
];

export const IPA_AE_FULL = [
  ["Hypokalemia", "12.5%", "3.4%", "Numerically higher with ipamorelin"],
  ["Insomnia", "10.7%", "5.2%", "Numerically higher with ipamorelin"],
  ["Hyperglycemia at discharge", "14.3%", "8.6%", "Numerically higher with ipamorelin"],
  [
    "Treatment stopped for AE",
    "3 participants",
    "—",
    "Nausea, hypertension, or hypotension",
  ],
  [
    "Fatal serious adverse events",
    "2 participants",
    "0",
    "Severe postoperative complications; causality to ipamorelin unclear per FDA",
  ],
  [
    "Overall TEAEs",
    "Similar rates",
    "Similar rates",
    "Expected after bowel surgery — population confounds interpretation",
  ],
];

export const IPA_DOSAGE_LADDER = [
  {
    level: "FDA-approved dosing",
    status: "none",
    detail: "No approved ipamorelin product or indication",
  },
  {
    level: "Human clinical-trial dosing",
    status: "limited",
    detail: "IV, short-term, narrow research populations",
  },
  {
    level: "Published experimental dosing",
    status: "mixed",
    detail: "Moderate for PK/GH response; weak for clinical benefit",
  },
  {
    level: "Preclinical dosing",
    status: "animal",
    detail: "Multiple animal models — not transferable as human dosing",
  },
  {
    level: "Anecdotal research protocols",
    status: "low",
    detail: "Common online, but not validated; original source unclear",
  },
  {
    level: "Long-term dosing evidence",
    status: "none",
    detail: "No controlled long-term subcutaneous regimen identified",
  },
];

export const IPAMORELIN_DOSAGE_GUIDE = {
  title: "Ipamorelin Dosage: Human Trials, Research Protocols, and Evidence",
  updated: "Updated August 2026",
  callout:
    "**Research status:** Ipamorelin is not an FDA-approved drug and has no FDA-approved dosage. This page documents published research and commonly reported experimental protocols; it is **not** a dosing recommendation or a guide to self-administration.",
  intro: [
    "**No approved dose exists.** Ipamorelin has no FDA-approved indication, product label, starting dose, maintenance dose, or maximum dose.",
    "**Human research used intravenous, weight-based dosing.** A PK/PD study tested single 15-minute IV infusions of approximately **3–100 mcg/kg**. A published Phase 2 study used **0.03 mg/kg IV twice daily** for up to seven days. A later Phase 2 dose-finding study registered higher IV arms (**0.03 mg/kg BID**, **0.06 mg/kg BID**, **0.06 mg/kg TID**); results were not posted.",
    "**Online protocols are different.** Fixed subcutaneous doses of roughly **100–300 mcg** per administration are frequently repeated, usually once daily or up to three times daily. These schedules have **not** been validated in controlled human trials. FDA reported that it found **no PK/PD or safety data** for the commonly proposed subcutaneous route.",
  ],
  glance: {
    title: "Ipamorelin dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**Is there an FDA-approved ipamorelin dosage?**", "No"],
        [
          "**Most clearly documented human trial dose**",
          "0.03 mg/kg IV twice daily for up to 7 days",
        ],
        [
          "**Other registered human trial arms**",
          "0.03 mg/kg IV BID; 0.06 mg/kg IV BID; 0.06 mg/kg IV TID",
        ],
        [
          "**Published human PK dose range**",
          "4.21–140.45 nmol/kg IV over 15 minutes (~3–100 mcg/kg)",
        ],
        [
          "**Commonly reported online range**",
          "100–300 mcg per subcutaneous administration, usually 1–3× daily",
        ],
        ["**Is the online range clinically established?**", "No"],
        [
          "**Is subcutaneous PK established in humans?**",
          "FDA reported that it did not identify it",
        ],
        [
          "**Is a dose-by-weight chart established for SC use?**",
          "No",
        ],
      ],
    },
  },
  sections: [
    {
      id: "fda-approved",
      title: "Is there an FDA-approved ipamorelin dosage?",
      paragraphs: [
        "No. Ipamorelin is an investigational growth-hormone secretagogue with no FDA-approved product or labeled indication. It therefore has no approved starting dose, titration schedule, maintenance dose, or maximum dose.",
        "FDA's compounding safety page lists ipamorelin acetate as a substance that may present significant safety risks for compounding. The agency cites possible immunogenicity from aggregation or peptide-related impurities, difficulties characterizing a peptide with unnatural amino acids, serious events in an IV clinical study, and a lack of safety information for other injectable routes. The 503A nomination is listed as withdrawn; ipamorelin acetate appears under 503B Category 2 safety policy. Regulatory listing is **not** approval.",
      ],
      highlight:
        "There is currently no FDA-approved dosage for ipamorelin. The doses below describe doses evaluated in human research rather than an established prescribing protocol.",
    },
    {
      id: "human-trials",
      title: "Dosages used in human clinical trials",
      paragraphs: [
        "Three human programs define the formal dosage landscape: a healthy-volunteer PK/PD study, a published Phase 2 postoperative-ileus trial, and a later registered Phase 2 dose-finding study without posted results.",
      ],
      widget: "ipa-dosage-tier-switcher",
      tables: [
        {
          caption: "Human clinical dosage summary",
          headers: [
            "Study",
            "Dose",
            "Frequency",
            "Route",
            "Duration",
            "Main finding",
          ],
          rows: [
            [
              "Gobburu 1999",
              "4.21–140.45 nmol/kg",
              "Single",
              "15-min IV",
              "One dose",
              "Dose-proportional PK; GH peak ~0.67 h; t½ ~2 h",
            ],
            [
              "Beck 2014 / NCT00672074",
              "0.03 mg/kg",
              "BID",
              "IV",
              "Up to 7 days",
              "Efficacy endpoints not significant vs placebo",
            ],
            [
              "NCT01280344",
              "0.03 BID; 0.06 BID; 0.06 TID (mg/kg)",
              "BID or TID",
              "IV",
              "Up to 10 days",
              "Completed; results not posted",
            ],
          ],
        },
      ],
    },
    {
      id: "pkpd-escalation",
      title: "Human PK/PD dose-escalation study",
      paragraphs: [
        "The earliest controlled human study characterized pharmacokinetics and growth-hormone release—not a treatment dose. Participants were assigned to parallel dose groups; the study did **not** describe a within-person titration schedule.",
      ],
      tables: [
        {
          caption: "Reported IV dose groups (Gobburu 1999)",
          headers: [
            "Reported dose",
            "Approx. mass-equivalent*",
            "Administration",
            "What was measured",
          ],
          align: ["left", "right", "left", "left"],
          rows: [
            ["4.21 nmol/kg", "3 mcg/kg", "15-minute IV infusion", "Ipamorelin and GH"],
            ["14.02 nmol/kg", "10 mcg/kg", "15-minute IV infusion", "Ipamorelin and GH"],
            ["42.13 nmol/kg", "30 mcg/kg", "15-minute IV infusion", "Ipamorelin and GH"],
            ["84.27 nmol/kg", "60 mcg/kg", "15-minute IV infusion", "Ipamorelin and GH"],
            ["140.45 nmol/kg", "100 mcg/kg", "15-minute IV infusion", "Ipamorelin and GH"],
          ],
        },
      ],
      footnotes: [
        "*Approximate conversions use free-base molecular weight to make published units easier to compare. The original paper reported nmol/kg. These are not converted treatment recommendations.",
      ],
      paragraphsAfter: [
        "Ipamorelin displayed dose-proportional pharmacokinetics. Terminal half-life was about **two hours**, while the GH response was pulse-like: GH peaked around **40 minutes** and declined to negligible levels at every tested dose. The lowest dose and placebo groups produced negligible GH and were excluded from the PK/PD modeling.",
      ],
    },
    {
      id: "phase2-dose",
      title: "Phase 2 postoperative-ileus dose",
      paragraphs: [
        "In the published Phase 2 trial, participants received **0.03 mg/kg by IV infusion twice daily**, beginning on postoperative day 1 and continuing until day 7 or hospital discharge. The dose was studied for short-term recovery of gastrointestinal function after bowel resection—not for muscle gain, fat loss, recovery, sleep, anti-aging, or growth-hormone deficiency.",
        "Median time to tolerate a standardized solid meal was **25.3 hours** with ipamorelin and **32.6 hours** with placebo; the difference was not statistically significant (**p=0.15**). No significant difference was found in key or secondary efficacy analyses.",
      ],
      widget: "ipa-clinical-exposure",
    },
    {
      id: "dose-finding",
      title: "Phase 2 dose-finding arms",
      paragraphs: [
        "NCT01280344 registered three active IV regimens. These are **protocol exposures, not recommended doses**. The study completed with 320 participants, but the registry does not provide results—so dose-response, comparative efficacy, and arm-specific adverse-event rates cannot be reliably stated.",
      ],
      tables: [
        {
          caption: "Registered NCT01280344 arms",
          headers: [
            "Trial arm",
            "Per-infusion dose",
            "Daily frequency",
            "Nominal daily exposure",
          ],
          align: ["left", "right", "left", "right"],
          rows: [
            ["Lower-dose arm", "0.03 mg/kg", "Twice daily", "0.06 mg/kg/day"],
            ["Higher-dose BID arm", "0.06 mg/kg", "Twice daily", "0.12 mg/kg/day"],
            ["Higher-dose TID arm", "0.06 mg/kg", "Three times daily", "0.18 mg/kg/day"],
          ],
        },
      ],
    },
    {
      id: "research-dosage",
      title: "Ipamorelin research dosage",
      paragraphs: [
        "People searching for an “ipamorelin research dose” usually encounter fixed-dose subcutaneous protocols that look very different from the published human studies. Those protocols are widely repeated online, but they are not clinical standards.",
        "Human research supports one narrow conclusion: **IV** ipamorelin produces a measurable, dose-related GH response, and short courses of weight-based IV dosing have been tested after bowel surgery. It does **not** establish that 100–300 mcg subcutaneously produces a particular clinical outcome, that bedtime administration is superior, that fasting improves effect, or that an 8–16-week cycle is safe.",
        "FDA's 2024 scientific review reported that it did **not** identify human PK/PD information for subcutaneous ipamorelin or safety data for the proposed subcutaneous route. The route used in most online protocols is a materially different exposure with unresolved bioavailability, dose-response, and safety.",
      ],
      widget: "ipa-route-duration",
      tables: [
        {
          caption: "Reported research dosage landscape",
          headers: ["", "Reported information"],
          rows: [
            [
              "**Reported research range**",
              "100–300 mcg per SC administration most often repeated; some sources describe higher amounts",
            ],
            [
              "**Most commonly repeated amount**",
              "Approximately 200–300 mcg per administration",
            ],
            [
              "**Frequency**",
              "Once daily is common; two or three daily administrations also appear",
            ],
            ["**Route**", "Subcutaneous"],
            [
              "**Typical reported duration**",
              "8–16 weeks, sometimes followed by a 4–8-week break",
            ],
            [
              "**Human-trial overlap**",
              "Poor — trials used weight-based IV infusion, not fixed-dose SC injection",
            ],
            [
              "**Evidence quality**",
              "Low to insufficient for efficacy and safety; largely clinic/vendor/community convention",
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
              "3–100 mcg/kg single IV (PK); 0.03–0.06 mg/kg per infusion (Phase 2)",
              "Usually 100–300 mcg fixed per administration",
            ],
            [
              "Frequency",
              "Single infusion (PK); BID or TID (Phase 2)",
              "1–3× daily; sometimes 5 on / 2 off",
            ],
            ["Route", "IV infusion", "Subcutaneous injection"],
            [
              "Duration",
              "Single dose or up to 7–10 postoperative days",
              "Usually 8–16 weeks",
            ],
            [
              "Population",
              "Healthy men or hospitalized adults after bowel surgery",
              "Generally healthy or performance/longevity-focused adults online",
            ],
            [
              "Purpose",
              "PK/PD, GH release, postoperative GI recovery",
              "Sleep, recovery, body composition, “anti-aging,” GH optimization claims",
            ],
            [
              "Evidence",
              "Controlled/published or registered clinical research",
              "Uncontrolled reports and commercial protocols",
            ],
            [
              "Established safety",
              "Limited to short IV exposure in narrow populations",
              "Not established for chronic subcutaneous use",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "A fixed **200 mcg subcutaneous** dose cannot be treated as a scaled-down version of **0.03 mg/kg IV** because route-dependent bioavailability has not been established. Absence of weight adjustment in online protocols is a convention—not evidence that body weight is irrelevant.",
      ],
    },
    {
      id: "protocol-variations",
      title: "Research protocol variations",
      numbered: [
        "**Once-daily vs multiple daily dosing.** Nighttime once-daily and multi-dose schedules often cite the ~2-hour half-life and brief GH pulse. Plausible—but no controlled human trial has compared once-daily with BID/TID subcutaneous dosing for marketed outcomes.",
        "**Daily vs five-days-on/two-days-off.** Off-days are claimed to reduce receptor desensitization. No published ipamorelin trial compared these schedules. Label five-on/two-off as an anecdotal convention.",
        "**Monotherapy vs combination protocols.** Combinations with CJC-1295 / Modified GRF 1-29 / sermorelin have a complementary-receptor rationale, but **no controlled human trial** has established optimal dose, ratio, timing, efficacy, or safety. “CJC-1295” may mean DAC CJC-1295 or “no DAC” (often Modified GRF 1-29)—not interchangeable exposures.",
      ],
    },
    {
      id: "animal-dosing",
      title: "Animal / preclinical research dosage",
      paragraphs: [
        "Animal doses must **not** be presented as human research doses or casually converted into human protocols. Preclinical studies support biological activity in models; they do not establish a human dose for bone growth, recovery, body composition, pain, or gastrointestinal disease.",
      ],
      tables: [
        {
          caption: "Selected preclinical exposures",
          headers: ["Model", "Dose", "Route", "Duration", "Outcome studied"],
          rows: [
            [
              "Adult female rats",
              "18, 90, or 450 mcg/day (divided TID)",
              "SC",
              "15 days",
              "Bone growth, body weight, GH",
            ],
            [
              "Male rats (POI)",
              "0.01–1 mg/kg",
              "IV bolus",
              "Up to 2 days",
              "Colonic transit, fecal output",
            ],
            [
              "Rats (POI)",
              "10 or 100 mg/kg",
              "Oral gavage",
              "Acute",
              "Gastric emptying",
            ],
            [
              "Rats (POI)",
              "0.1, 0.25, or 1 mg/kg",
              "IV",
              "Acute",
              "Gastric emptying",
            ],
            [
              "Visceral hypersensitivity",
              "0.01, 0.1, or 1 mg/kg",
              "IV",
              "Acute",
              "Colonic hypersensitivity / allodynia",
            ],
          ],
        },
      ],
    },
    {
      id: "why-schedules",
      title: "Why these research doses and schedules appear",
      numbered: [
        "**Short pharmacokinetics and a brief GH response.** Terminal half-life ~2 hours; GH peaked ~0.67 h and was negligible by six hours. This helps explain repeated dosing—it does not prove a particular chronic SC frequency is optimal.",
        "**A dose-response signal—within the studied IV range.** Dose-proportional PK and concentration-dependent GH stimulation were observed IV. That does not identify a subcutaneous “ceiling dose” or validate claims that benefits stop increasing above 300 mcg.",
        "**Different experimental endpoints.** Phase 2 doses targeted postoperative GI recovery. Animal studies used much higher per-kilogram exposures for motility, bone growth, or pain. Endpoint, species, route, and duration explain much of the apparent variation.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      paragraphs: [
        "Ipamorelin dosing is poorly established outside short-term intravenous research. Human studies show that IV exposure can stimulate GH and document several weight-based trial regimens, but they do **not** establish a chronic subcutaneous dose for recovery, sleep, body composition, or healthy aging. Fixed-dose protocols online should be treated as **anecdotal conventions**, not clinical dosing standards.",
      ],
      widget: "ipa-dosage-ladder",
    },
    {
      id: "dose-escalation",
      title: "Dose escalation",
      paragraphs: [
        "**Formal clinical dose escalation.** The 1999 PK/PD study used parallel dose groups rather than a therapeutic titration schedule. Participants did not move week by week through levels.",
        "**Anecdotally reported research escalation.** Some online sources describe starting near 100 mcg once daily and increasing to 200–300 mcg after one or two weeks. No original controlled source was identified. “Syringe units” are **not** a dose—they describe liquid volume and change with vial strength/reconstitution. Protocols written only in units without mg/mL concentration and intended mcg mass are incomplete.",
      ],
      tables: [
        {
          caption: "PK/PD parallel cohorts (not a titration protocol)",
          headers: ["Cohort", "Dose", "Stage", "Trial context"],
          rows: [
            ["1", "4.21 nmol/kg", "Lowest", "Single 15-min IV; negligible GH in model"],
            ["2", "14.02 nmol/kg", "Group 2", "Single 15-min IV infusion"],
            ["3", "42.13 nmol/kg", "Group 3", "Single 15-min IV infusion"],
            ["4", "84.27 nmol/kg", "Group 4", "Single 15-min IV infusion"],
            ["5", "140.45 nmol/kg", "Highest", "Single 15-min IV infusion"],
          ],
        },
      ],
    },
    {
      id: "safety-dosage",
      title: "Safety findings relevant to dosage",
      paragraphs: [
        "The published 117-patient Phase 2 trial found similar overall treatment-emergent adverse-event rates with ipamorelin and placebo, but FDA's detailed review identified imbalances and unresolved concerns. Data came from medically complex postoperative patients and cannot be directly generalized to healthier users—or establish safety for chronic subcutaneous dosing.",
        "FDA separately noted potential risks associated with raising GH/IGF-1—including glucose intolerance, fluid retention, intracranial hypertension, and neoplasm-related concerns known from approved recombinant GH labeling—while emphasizing that ipamorelin-specific evidence is insufficient.",
      ],
      widget: "ipa-adverse-events",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "The most defensible answer to “What is the ipamorelin dosage?” is **not a single number**. Ipamorelin has no approved dose; formal human evidence is limited to short-term, weight-based IV research; and the fixed-dose subcutaneous schedules most people encounter online remain unvalidated.",
      ],
      highlight:
        "Clinical IV research, preclinical work, and anecdotal subcutaneous protocols are three separate evidence landscapes — they are not interchangeable.",
    },
  ],
  faq: {
    title: "Ipamorelin dosage FAQ",
    items: [
      {
        question: "What is the standard ipamorelin dosage?",
        answer:
          "There is no standard or FDA-approved ipamorelin dosage. The most clearly published treatment-trial regimen was 0.03 mg/kg by IV infusion twice daily for up to seven days after bowel surgery. The 100–300 mcg subcutaneous range repeated online is anecdotal and should not be presented as a clinical standard.",
      },
      {
        question: "What dose of ipamorelin was studied in humans?",
        answer:
          "Human research evaluated single 15-minute IV infusions of 4.21–140.45 nmol/kg, a published short-term regimen of 0.03 mg/kg IV twice daily, and registered Phase 2 arms of 0.03 mg/kg BID, 0.06 mg/kg BID, and 0.06 mg/kg TID.",
      },
      {
        question: "Is ipamorelin dosage based on body weight?",
        answer:
          "The formal human trials used weight-based IV dosing. No evidence-backed weight-based chart was identified for chronic subcutaneous use. Online fixed-dose and weight-tier charts are anecdotal only.",
      },
      {
        question: "How often was ipamorelin used in clinical trials?",
        answer:
          "The PK/PD study used one IV infusion. The published Phase 2 trial used twice-daily IV infusions. A later registered Phase 2 trial included twice- and three-times-daily IV arms.",
      },
      {
        question: "How long was ipamorelin used in clinical trials?",
        answer:
          "Published human exposure ranged from one administration to a maximum of seven postoperative days. NCT01280344 assessed outcomes for up to ten days. The 8–16-week cycles discussed online have not been validated by controlled human ipamorelin trials.",
      },
      {
        question: "Is 200 mcg an established ipamorelin dose?",
        answer:
          "No. Two hundred micrograms is one of the most frequently repeated fixed amounts in online subcutaneous protocols, but no controlled human study was identified that established 200 mcg as effective, optimal, or safe for the uses commonly promoted.",
      },
      {
        question: "Is 300 mcg the maximum ipamorelin dose?",
        answer:
          "No evidence establishes 300 mcg as a universal maximum. It is a common ceiling in anecdotal fixed-dose protocols. Human clinical studies used weight-based IV regimens that cannot be directly compared with a fixed subcutaneous amount.",
      },
      {
        question: "Is bedtime the best time to use ipamorelin?",
        answer:
          "Bedtime timing is common in anecdotal protocols because natural GH secretion is pulsatile and includes a nocturnal peak. No controlled human ipamorelin trial was identified that compared bedtime with morning or other subcutaneous timing.",
      },
      {
        question: "Does ipamorelin need to be used while fasting?",
        answer:
          "Fasted timing is frequently recommended online, but the pivotal human ipamorelin studies do not establish a specific pre- or post-meal fasting window for subcutaneous use. A rule such as “two hours after food” is a protocol convention, not proven dosing science.",
      },
      {
        question: "Should ipamorelin be cycled five days on and two days off?",
        answer:
          "The five-on/two-off schedule is anecdotal. No controlled trial was identified that compared it with daily use or showed that it prevents receptor desensitization.",
      },
      {
        question: "Has CJC-1295 plus ipamorelin dosing been studied in humans?",
        answer:
          "The combination is widely discussed, but no controlled human trial was identified that established an optimal combined dose, ratio, schedule, or long-term safety profile. Distinguish DAC CJC-1295 from the shorter-acting peptide commonly sold as “CJC-1295 no DAC.”",
      },
      {
        question: "Can animal doses be converted into a human ipamorelin protocol?",
        answer:
          "Not reliably. Animal doses differ by species, endpoint, route, pharmacokinetics, and experimental design. A human-equivalent-dose calculation would be a mathematical estimate, not an established human protocol.",
      },
    ],
  },
  sources: {
    title: "Primary and authoritative sources",
    items: [
      {
        authors: "FDA",
        title:
          "Certain Bulk Drug Substances for Use in Compounding that May Present Significant Safety Risks",
        detail: "Ipamorelin acetate compounding safety summary.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        authors: "FDA PCAC",
        title:
          "Scientific review of ipamorelin-related bulk drug substances",
        detail: "October 29, 2024.",
        href: "https://www.fda.gov/media/182088/download",
      },
      {
        authors: "Gobburu JVS et al.",
        title: "Pharmacokinetic-pharmacodynamic modeling of ipamorelin in human volunteers",
        detail: "Pharmaceutical Research, 1999.",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
      {
        authors: "Beck DE et al.",
        title: "Prospective randomized study of ipamorelin for postoperative ileus",
        detail: "International Journal of Colorectal Disease, 2014.",
        href: "https://pubmed.ncbi.nlm.nih.gov/25331030/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT00672074",
        detail: "Published Phase 2 postoperative ileus trial registry.",
        href: "https://clinicaltrials.gov/study/NCT00672074",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT01280344",
        detail: "Phase 2 dose-finding; results not posted.",
        href: "https://clinicaltrials.gov/study/NCT01280344",
      },
      {
        authors: "Johansen PB et al.",
        title: "Ipamorelin and longitudinal bone growth in rats",
        detail: "Growth Hormone & IGF Research, 1999.",
        href: "https://pubmed.ncbi.nlm.nih.gov/10373343/",
      },
      {
        authors: "Venkova K et al.",
        title: "Ipamorelin in a rodent model of postoperative ileus",
        detail: "Journal of Pharmacology and Experimental Therapeutics, 2009.",
        href: "https://pubmed.ncbi.nlm.nih.gov/19289567/",
      },
      {
        authors: "NCI",
        title: "Ipamorelin — NCI Drug Dictionary",
        detail: "Mechanism definition.",
        href: "https://www.cancer.gov/publications/dictionaries/cancer-drug/def/ipamorelin",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "Ipamorelin is investigational and **not FDA approved**. There is **no approved dosage** and **no validated subcutaneous human PK/PD** dataset identified by FDA.",
      "This page documents published research and commonly reported experimental protocols. It is **not** a dosing, reconstitution, cycle, or self-administration guide.",
      "Short-term IV safety data come from medically complex postoperative patients and cannot establish the safety of chronic outpatient subcutaneous use.",
    ],
  },
};

/**
 * AOD-9604 dosage, results, side effects, and FDA-status guide.
 */

export const AOD9604_TRIALS = [
  {
    id: "metaod001",
    name: "METAOD001",
    topic: "Obesity",
    route: "IV",
    phase: "Phase I",
    population: "Healthy men, BMI 24–30",
    participants: "15",
    activeTreated: "—",
    duration: "One day",
    dose: "25–400 µg/kg single IV; somatropin positive control",
    formulation: "Intravenous",
    endpoint: "Acute safety / GH-related markers",
    result: "No clinically meaningful acute safety, glucose, or IGF-1 signal reported",
    safety: "Generally tolerated in small male cohort",
    limitation: "Very small, male-only, single exposure; not a repeated subcutaneous trial",
    href: "https://www.jofem.org/index.php/jofem/article/view/157/194",
  },
  {
    id: "metaod002",
    name: "METAOD002",
    topic: "Obesity",
    route: "IV",
    phase: "Phase IIa",
    population: "Men with obesity, BMI ≥35",
    participants: "23",
    activeTreated: "—",
    duration: "One day",
    dose: "25, 50, or 100 µg/kg single IV",
    formulation: "Intravenous",
    endpoint: "Safety / pharmacodynamics",
    result: "Generally tolerated without meaningful glucose or IGF-1 changes",
    safety: "Acute IV tolerability only",
    limitation: "Small, male-only, acute IV study",
    href: "https://www.jofem.org/index.php/jofem/article/view/157/194",
  },
  {
    id: "metaod003",
    name: "METAOD003",
    topic: "Obesity",
    route: "Oral",
    phase: "Phase I",
    population: "Men with obesity, BMI ≥35",
    participants: "17 (15 completed)",
    activeTreated: "—",
    duration: "Crossover single doses",
    dose: "Oral 9, 27, and 54 mg single doses with washouts",
    formulation: "Oral capsule",
    endpoint: "Oral safety / pharmacodynamics",
    result: "Headache and GI events common across treatments; no consistent dose trend",
    safety: "Single-dose oral tolerability",
    limitation: "Single doses and very small sample",
    href: "https://www.jofem.org/index.php/jofem/article/view/157/194",
  },
  {
    id: "metaod004",
    name: "METAOD004",
    topic: "Obesity",
    route: "Oral",
    phase: "Phase I",
    population: "Men with obesity, BMI ≥30",
    participants: "36",
    activeTreated: "27",
    duration: "7 days",
    dose: "Oral 9, 27, or 54 mg/day or placebo",
    formulation: "Oral capsule",
    endpoint: "Multiple-dose safety",
    result: "No SAE; 54 mg associated with more headache and GI/general symptoms",
    safety: "Clearest AE excess at oral 54 mg over 7 days",
    limitation: "Only seven days and small groups",
    href: "https://www.jofem.org/index.php/jofem/article/view/157/194",
  },
  {
    id: "metaod005",
    name: "METAOD005",
    topic: "Obesity",
    route: "Oral",
    phase: "Phase IIb",
    population: "Adults with obesity, BMI ≥35",
    participants: "300 randomized (50 per arm)",
    activeTreated: "250",
    duration: "12 weeks after placebo run-in",
    dose: "Oral 1, 5, 10, 20, or 30 mg/day or placebo",
    formulation: "Oral capsule",
    endpoint: "Reduction in body weight",
    result:
      "Often-cited 1 mg result: −2.6 kg vs −0.8 kg placebo; no robust linear dose-response",
    safety:
      "Five SAEs in active arms judged unrelated by investigators; no significant IGF-1 or OGTT pattern",
    limitation:
      "Complete arm-level dataset not readily available; later larger trial failed to replicate efficacy",
    href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3584306/",
  },
  {
    id: "metaod006",
    name: "METAOD006 / OPTIONS",
    topic: "Obesity",
    route: "Oral",
    phase: "Phase IIb",
    population: "Adults with obesity",
    participants: "536 enrolled; 502 in later safety description",
    activeTreated: "377",
    duration: "24 weeks; primary endpoint at week 12",
    dose: "Oral 0.25, 0.5, or 1 mg/day or placebo",
    formulation: "Oral tablet",
    endpoint: "Weight loss at 12 weeks vs placebo",
    result: "Primary endpoint not met; obesity development discontinued in 2007",
    safety: "Included in pooled oral safety program",
    limitation:
      "Detailed arm-level efficacy results not fully published in a conventional peer-reviewed primary paper",
    href: "https://www.biospace.com/metabolic-pharmaceuticals-s-obesity-trial-update-first-100-subjects-complete-the-phase-2b-trial-of-aod9604",
  },
  {
    id: "lat-np-001",
    name: "LAT-NP-001 / NCT03865953",
    topic: "Pain",
    route: "Oral",
    phase: "Phase IIa",
    population: "Postherpetic neuralgia or diabetic peripheral neuropathy",
    participants: "Adults (crossover)",
    activeTreated: "—",
    duration: "Two 4-week periods",
    dose: "Oral LAT8881 25 mg/day",
    formulation: "Oral",
    endpoint: "Change in mean pain intensity",
    result: "Neuropathic-pain program — separate from obesity dosing",
    safety: "Different indication; does not validate obesity or injectable use",
    limitation: "Cannot establish obesity efficacy or injectable safety",
    href: "https://clinicaltrials.gov/study/NCT03865953",
  },
];

export const AOD9604_WEIGHT_SIGNAL = {
  early: {
    label: "METAOD005 · 12 weeks",
    caption: "Often-cited early oral signal at 1 mg/day",
    series: [
      { label: "AOD-9604 1 mg", kg: 2.6, color: "#7c3aed" },
      { label: "Placebo", kg: 0.8, color: "#cbd5e1" },
    ],
    note: "Placebo-adjusted difference ≈ 1.8 kg favoring AOD-9604. From the earlier development program.",
  },
  confirmatory: {
    label: "METAOD006 / OPTIONS · primary at week 12",
    caption: "Larger confirmatory oral trial",
    arms: ["0.25 mg", "0.5 mg", "1 mg"],
    result: "Primary weight-loss endpoint not met vs placebo",
    note: "Obesity development discontinued in 2007. Do not fabricate unavailable arm-level kilograms.",
  },
};

export const AOD9604_ROUTE_EVIDENCE = [
  {
    id: "oral",
    label: "Oral",
    status: "Studied",
    tone: "violet",
    items: [
      "Single 9 / 27 / 54 mg (METAOD003)",
      "7-day 9 / 27 / 54 mg (METAOD004)",
      "12-week 1 / 5 / 10 / 20 / 30 mg (METAOD005)",
      "24-week 0.25 / 0.5 / 1 mg (OPTIONS)",
      "Pain study 25 mg (LAT8881)",
    ],
    takeaway:
      "Pivotal obesity research used oral capsules/tablets. This is the route with human repeated-dose data.",
  },
  {
    id: "iv",
    label: "Intravenous",
    status: "Single-dose only",
    tone: "slate",
    items: [
      "Single 25–400 µg/kg (METAOD001)",
      "Single 25 / 50 / 100 µg/kg (METAOD002)",
    ],
    takeaway:
      "Early IV studies were acute safety/pharmacodynamic exposures — not chronic injection evidence.",
  },
  {
    id: "sc",
    label: "Subcutaneous",
    status: "Unsupported",
    tone: "amber",
    items: [
      "No pivotal repeated-dose obesity trial",
      "Commercial SC protocols are not validated by METAOD studies",
      "FDA raises route-related immunogenicity and impurity concerns for compounded products",
    ],
    takeaway:
      "Oral trial results must not be misapplied to compounded subcutaneous regimens.",
  },
];

export const AOD9604_AE_SIMPLE = [
  {
    title: "Overall conclusion",
    takeaway:
      "Early oral studies suggested modest weight loss and generally acceptable short-term tolerability, but the larger confirmatory obesity trial failed. Injectable compounded use is not supported by that evidence.",
  },
  {
    title: "Common adverse events",
    takeaway:
      "Headache and gastrointestinal symptoms were commonly reported. The clearest dose-related pattern was more headache, diarrhea, flatulence, and abdominal/general symptoms at oral 54 mg over 7 days.",
  },
  {
    title: "IGF-1 and glucose",
    takeaway:
      "Human oral trials did not find significant IGF-1 increases or statistically significant OGTT worsening versus placebo at 12 or 24 weeks — with duration and population limits.",
  },
  {
    title: "Compounded injection risk",
    takeaway:
      "FDA says compounded AOD-9604 may pose immunogenicity and peptide-impurity risks and that available safety information is insufficient for proposed routes, especially repeated subcutaneous use.",
  },
];

export const AOD9604_AE_FULL = {
  headers: ["Finding", "Evidence"],
  rows: [
    [
      "Headache",
      "Commonly reported; greater number at oral 54 mg in the 7-day study",
    ],
    [
      "Diarrhea and flatulence",
      "Seen across groups; increased at 54 mg in METAOD004",
    ],
    [
      "Nausea and other digestive symptoms",
      "Reported in oral studies without a consistent trend at lower doses",
    ],
    [
      "Increased appetite",
      "Reported in the single-oral-dose study; no consistent treatment trend",
    ],
    [
      "Abdominal pain / general body symptoms",
      "Dose-related trend at 54 mg in METAOD004 (later LAT8881 protocol)",
    ],
    [
      "Taste disturbance",
      "One event judged definitely related occurred after placebo — raw lists do not prove causation",
    ],
  ],
};

export const AOD9604_METAOD004 = {
  headers: ["METAOD004 arm", "Duration", "Main interpretation"],
  rows: [
    ["Placebo", "7 days", "Overall AE profile comparable with 9 and 27 mg"],
    ["9 mg oral daily", "7 days", "No clear excess trend"],
    ["27 mg oral daily", "7 days", "No clear excess trend"],
    [
      "54 mg oral daily",
      "7 days",
      "More headache, diarrhea, flatulence, abdominal/general symptoms",
    ],
  ],
};

export const AOD9604_DENOMINATORS = [
  {
    label: "OPTIONS enrolled",
    value: "536",
    note: "Contemporaneous study announcement",
  },
  {
    label: "Later safety population",
    value: "502",
    note: "Pooled safety publication description",
  },
  {
    label: "Active-treated (METAOD006)",
    value: "377",
    note: "LAT8881 protocol active-drug count",
  },
];

export const AOD9604_MECHANISM_NODES = [
  {
    id: "aod",
    label: "AOD-9604",
    badge: "Investigational peptide",
    level: "human-clinical",
  },
  {
    id: "b3",
    label: "β3-adrenergic signaling",
    badge: "Animal",
    level: "animal",
  },
  {
    id: "lipolysis",
    label: "↑ Lipolysis",
    badge: "Ex vivo / animal",
    level: "ex-vivo",
  },
  {
    id: "lipogenesis",
    label: "↓ Lipogenesis",
    badge: "Animal / ex vivo",
    level: "animal",
  },
  {
    id: "oxidation",
    label: "↑ Fat oxidation",
    badge: "Animal",
    level: "animal",
  },
  {
    id: "igf1",
    label: "No meaningful IGF-1 rise",
    badge: "Human biomarker",
    level: "human-biomarker",
  },
  {
    id: "outcome",
    label: "OPTIONS primary endpoint failed",
    badge: "Human clinical outcome",
    level: "human-clinical",
  },
];

export const AOD9604_CLAIM_CHECKER = [
  {
    claim: "FDA approved",
    verdict: "False",
    detail: "No FDA-approved indication, product, or dosage exists.",
  },
  {
    claim: "GRAS means approved for injection",
    verdict: "False",
    detail:
      "A food-use GRAS conclusion does not approve a drug, injectable route, or weight-loss indication.",
  },
  {
    claim: "Clinically proven fat loss",
    verdict: "Not supported",
    detail:
      "An early 1 mg oral signal was not confirmed by the larger OPTIONS trial.",
  },
  {
    claim: "Does not raise IGF-1 in studied oral trials",
    verdict: "Supported (limited)",
    detail:
      "No significant treatment–placebo IGF-1 differences at 12 or 24 weeks; duration and route limits apply.",
  },
  {
    claim: "Repairs human cartilage",
    verdict: "Unsupported",
    detail: "Supportive findings are from animal cartilage models only.",
  },
  {
    claim: "300 mcg SC is the clinical-trial dose",
    verdict: "False / misleading",
    detail:
      "Pivotal obesity research used oral doses; early IV studies were single-dose weight-based exposures.",
  },
  {
    claim: "Same as full HGH",
    verdict: "False",
    detail:
      "AOD-9604 is a short modified fragment and lacks the full receptor-binding structure of 191-amino-acid hGH.",
  },
];

export const AOD9604_DOSAGE_GUIDE = {
  title:
    "AOD-9604 Dosage, Results, Side Effects & FDA Status: Complete Human-Trial Guide",
  updated: "Updated August 2026",
  callout:
    "**Research status:** AOD-9604 is an investigational, modified 16-amino-acid fragment of human growth hormone (hGH), also called Tyr-hGH 177–191 and LAT8881. It is **not FDA approved for weight loss—or for any other indication—and has no approved human dosage**. Most repeated-dose obesity research used oral capsules or tablets, not subcutaneous injections. The largest obesity study failed its primary efficacy endpoint, and development for obesity was discontinued in 2007.",
  intro: [
    "AOD-9604 was designed to isolate the proposed fat-metabolism effects of the C-terminal region of hGH without activating the full GH/IGF-1 growth pathway. Animal studies showed increased fat oxidation and reduced fat accumulation. Human development was less convincing: a 12-week study reported a favorable signal at oral 1 mg/day, but the larger 24-week OPTIONS trial found no statistically significant weight-loss benefit at 0.25, 0.5, or 1 mg/day and ended the obesity program.",
    "Short-term oral and single-dose intravenous studies were generally well tolerated, but these data do not validate the subcutaneous regimens sold online. “Research use only,” a telehealth prescription, or a food-ingredient GRAS conclusion does not establish FDA approval, weight-loss efficacy, injectable safety, purity, or legality.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Answer"],
      rows: [
        [
          "**What is it?**",
          "A synthetic 16-amino-acid peptide: the hGH 177–191 C-terminal sequence plus an N-terminal tyrosine",
        ],
        [
          "**Main proposed mechanism**",
          "Increased lipolysis/fat oxidation and reduced lipogenesis; the exact human target and clinical relevance remain uncertain",
        ],
        [
          "**Administration studied**",
          "Primarily once-daily oral capsules/tablets; two early single-dose intravenous studies",
        ],
        ["**Approved dosage**", "None"],
        [
          "**Obesity doses studied**",
          "Oral 0.25–54 mg, depending on study; IV 25–400 µg/kg in single-dose studies",
        ],
        [
          "**Strongest human result**",
          "Early oral 1 mg/day signal: mean 2.6 kg loss vs 0.8 kg with placebo at 12 weeks",
        ],
        [
          "**Decisive obesity result**",
          "The larger 24-week trial did not meet its primary endpoint at 0.25, 0.5, or 1 mg/day",
        ],
        [
          "**Main observed adverse events**",
          "Headache and gastrointestinal symptoms; more at oral 54 mg in a 7-day study",
        ],
        [
          "**Major unresolved risk**",
          "Immunogenicity, impurities, and route-specific safety—especially for compounded injections",
        ],
        ["**FDA status**", "Not approved"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is AOD-9604?",
      paragraphs: [
        "AOD-9604 is a modified fragment based on the final 15 amino acids of human growth hormone. An additional tyrosine is attached at the N-terminus, producing the sequence **YLRIVQCRSVEGSCGF** with a disulfide bridge between the two cysteines. It is therefore related to—but not identical to—the native hGH 177–191 region, and it is not full-length growth hormone.",
        'During obesity development it was called AOD-9604. The same molecule was later renamed **LAT8881** for research in neuropathic pain. Commercial pages may call it “HGH Frag 176–191,” but that label can blur meaningful differences in sequence, formulation, quality, and evidence. A vendor’s product should not be assumed to be the clinical-trial material.',
      ],
    },
    {
      id: "fda-status",
      title: "Is AOD-9604 FDA Approved?",
      paragraphs: [
        "**No. AOD-9604 is not FDA approved for weight loss, fat loss, obesity, pain, cartilage repair, or any other indication.** No FDA-approved prescribing information, manufacturing standard for an approved product, or approved dose exists.",
        "FDA currently lists AOD-9604 among nominated compounding substances that were withdrawn and says compounded products may pose immunogenicity risks for some routes, may contain peptide-related impurities, and are difficult to characterize. FDA also notes serious adverse-event reports that may be associated with AOD-9604, while emphasizing that causality is unclear.",
      ],
      subsections: [
        {
          title: "GRAS does not mean “FDA-approved peptide drug”",
          paragraphs: [
            "A 2013 safety paper reported that a qualified expert panel had concluded AOD-9604 was generally recognized as safe under specified intended **food-use** conditions. That is not the same as FDA approving a drug. It does not establish:",
          ],
          bullets: [
            "efficacy for weight loss;",
            "safety of subcutaneous injection, nasal use, or transdermal use;",
            "safety of a compounded formulation;",
            "equivalence between a vendor’s vial and clinical-trial material; or",
            "authorization to market AOD-9604 as a treatment.",
          ],
        },
      ],
      widgetAfter: "aod-claim-checker",
    },
    {
      id: "dosage",
      title: "AOD-9604 Dosage Used in Human Clinical Trials",
      paragraphs: [
        "**There is no established or approved AOD-9604 dosage.** The table below is a record of research arms, not a dosing recommendation.",
      ],
      tables: [
        {
          caption: "Human research dose arms",
          headers: [
            "Study",
            "Population",
            "Dose",
            "Frequency",
            "Route",
            "Duration",
            "Study role",
          ],
          rows: [
            [
              "METAOD001",
              "15 healthy men, BMI 24–30",
              "25–400 µg/kg",
              "Single dose",
              "Intravenous",
              "One day",
              "Phase I dose-escalation safety; hGH positive control included",
            ],
            [
              "METAOD002",
              "23 men with obesity, BMI ≥35",
              "25, 50, or 100 µg/kg",
              "Single dose",
              "Intravenous",
              "One day",
              "Phase IIa safety/pharmacodynamic study",
            ],
            [
              "METAOD003",
              "17 men with obesity, BMI ≥35",
              "9, 27, and 54 mg",
              "Single doses separated by washouts",
              "Oral capsule",
              "Crossover periods",
              "Oral safety/tolerability and pharmacodynamics",
            ],
            [
              "METAOD004",
              "36 men with obesity, BMI ≥30",
              "9, 27, or 54 mg",
              "Once daily",
              "Oral capsule",
              "7 days",
              "Multiple-dose safety and dose escalation",
            ],
            [
              "METAOD005",
              "300 adults with obesity, BMI ≥35",
              "1, 5, 10, 20, or 30 mg; placebo",
              "Once daily",
              "Oral capsule",
              "12 weeks after placebo run-in",
              "Phase IIb efficacy and safety",
            ],
            [
              "METAOD006 / OPTIONS",
              "536 enrolled; later sources report 502 / 377 active-treated",
              "0.25, 0.5, or 1 mg; placebo",
              "Once daily",
              "Oral tablet",
              "24 weeks; primary endpoint at week 12",
              "Confirmatory Phase IIb; primary endpoint not met",
            ],
            [
              "NCT03865953 / LAT-NP-001",
              "Adults with neuropathic pain",
              "25 mg; placebo",
              "Once daily",
              "Oral",
              "Two 4-week crossover periods",
              "Phase IIa neuropathic-pain research, not obesity dosing",
            ],
          ],
        },
      ],
      subsections: [
        {
          title: "Why do participant totals differ?",
          paragraphs: [
            "Documents count different populations. The OPTIONS announcement reported **536 enrolled**, the later pooled safety article described **502 obese adults**, and the LAT8881 protocol reported **377 treated with active drug** in METAOD006. These are not interchangeable denominators. MyPepFinder preserves the label attached to each number instead of presenting a single false total.",
          ],
          widget: "aod-denominators",
        },
      ],
      widgetAfter: "aod-route-mismatch",
    },
    {
      id: "dose-escalation",
      title: "AOD-9604 Dose Escalation",
      paragraphs: [
        "There is **no validated therapeutic titration schedule** for AOD-9604. METAOD001 and METAOD004 were dose-escalation safety experiments, but they were not instructions for clinical practice. The obesity trials assigned participants to fixed oral doses; they did not establish the commonly advertised subcutaneous sequence of “start low and increase weekly.”",
        "An interactive titration calculator would therefore be misleading and is not included on this page.",
      ],
    },
    {
      id: "dose-levels",
      title: "Why the Research Protocols Used Different Doses",
      paragraphs: ["Development moved through three questions:"],
      numbered: [
        "**Can exposure be tolerated?** Early investigators used single IV doses, then single and seven-day oral doses up to 54 mg.",
        "**Is there an oral efficacy signal?** METAOD005 compared six parallel arms over 12 weeks. The 1 mg arm was the reported favorable dose; higher doses did not create a consistent monotonic dose-response.",
        "**Can the signal be replicated?** OPTIONS tested lower oral doses—0.25, 0.5, and 1 mg—over 24 weeks in a larger population. It failed the primary endpoint.",
      ],
      paragraphsAfter: [
        "This sequence matters. Selecting the positive 1 mg result while omitting the negative confirmatory trial is cherry-picking, not an accurate summary of the evidence.",
      ],
      subsections: [
        {
          title: "What happened at each studied dose or exposure level?",
          tables: [
            {
              headers: [
                "Dose or range",
                "Route and duration",
                "What the dose tested",
                "Supported conclusion",
              ],
              rows: [
                [
                  "25–400 µg/kg",
                  "Single IV dose",
                  "Acute safety and GH-related markers",
                  "Generally tolerated in small male cohorts; not evidence for chronic injection",
                ],
                [
                  "9–54 mg",
                  "Single oral dose",
                  "Oral safety/pharmacodynamics",
                  "No clear acute glucose or IGF-1 signal; small study",
                ],
                [
                  "9, 27, 54 mg",
                  "Oral daily for 7 days",
                  "Short multiple-dose safety",
                  "54 mg produced more headache and gastrointestinal/general symptoms",
                ],
                [
                  "1 mg",
                  "Oral daily for 12 weeks",
                  "Obesity efficacy",
                  "Mean 2.6 kg loss vs 0.8 kg placebo in the often-cited earlier trial result",
                ],
                [
                  "5–30 mg",
                  "Oral daily for 12 weeks",
                  "Dose-ranging obesity efficacy/safety",
                  "No reliable linear dose-response; five SAEs across 5–20 mg arms judged unrelated by investigators",
                ],
                [
                  "0.25, 0.5, 1 mg",
                  "Oral daily for 24 weeks",
                  "Confirmatory obesity efficacy",
                  "No active dose met the primary weight-loss endpoint vs placebo",
                ],
                [
                  "25 mg",
                  "Oral daily, 4-week crossover periods",
                  "Neuropathic pain",
                  "Separate indication; does not validate weight-loss use",
                ],
              ],
            },
          ],
        },
      ],
    },
    {
      id: "results",
      title: "AOD-9604 Results for Weight Loss",
      paragraphs: [
        "The totality of human evidence does **not** establish AOD-9604 as an effective obesity treatment. The strongest inference comes from the larger confirmatory failure, not the smaller positive subgroup or earlier study.",
      ],
      widget: "aod-weight-signal",
      subsections: [
        {
          title: "The early positive signal",
          paragraphs: [
            "A published obesity-pharmacotherapy review reported that participants receiving **oral AOD-9604 1 mg/day lost an average 2.6 kg at 12 weeks, compared with 0.8 kg for placebo**—a placebo-adjusted difference of about **1.8 kg**. This finding came from the earlier development program and was the basis for further study.",
          ],
          tables: [
            {
              headers: [
                "Outcome at 12 weeks",
                "AOD-9604 1 mg/day",
                "Placebo",
                "Difference",
              ],
              align: ["left", "right", "right", "right"],
              rows: [
                [
                  "Mean weight change",
                  "−2.6 kg",
                  "−0.8 kg",
                  "−1.8 kg favoring AOD-9604",
                ],
              ],
            },
          ],
        },
        {
          title: "The larger trial did not confirm efficacy",
          paragraphs: [
            "METAOD006/OPTIONS was the decisive obesity test: a randomized, double-blind, placebo-controlled, 24-week study of oral 0.25, 0.5, and 1 mg/day. Its primary endpoint was weight loss at 12 weeks. The study **did not meet the primary endpoint**, and the sponsor discontinued obesity development in 2007.",
          ],
          tables: [
            {
              headers: ["Trial", "Participants", "Arms", "Duration", "Result"],
              rows: [
                [
                  "METAOD005",
                  "300 randomized",
                  "Oral 1, 5, 10, 20, 30 mg or placebo",
                  "12 weeks",
                  "Favorable signal reported at 1 mg; no dependable dose-response established",
                ],
                [
                  "METAOD006 / OPTIONS",
                  "536 enrolled; other documents report 502 / 377",
                  "Oral 0.25, 0.5, 1 mg or placebo",
                  "24 weeks",
                  "Primary weight-loss endpoint at week 12 not met; obesity program stopped",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "There are no completed Phase III obesity trials, no FDA-approved product, and no credible evidence that an injected compounded regimen produces better fat loss than the failed oral program.",
          ],
        },
        {
          title: "Does AOD-9604 reduce belly fat or preserve muscle?",
          paragraphs: [
            'No reliable human trial has established targeted abdominal-fat reduction, “spot reduction,” or preferential preservation/building of lean mass. Claims that it “burns only fat” extrapolate from animal and laboratory findings. Human obesity trials measured overall outcomes; they did not validate a body-part-specific effect.',
          ],
        },
      ],
    },
    {
      id: "side-effects",
      title: "AOD-9604 Side Effects and Safety",
      paragraphs: [
        "The published human safety program is informative but easy to overstate. It mostly supports tolerability of the **specific oral trial formulations for up to 24 weeks** and two **single IV exposures**. It does not establish long-term safety, safety in broad clinical populations, pregnancy safety, cancer safety, or repeated subcutaneous-injection safety.",
      ],
      widget: "aod-adverse-events",
      subsections: [
        {
          title: "Serious adverse events in METAOD005",
          paragraphs: [
            "Five serious events were reported during the 12-week study: breast cancer in the 5 mg arm, malignant melanoma in the 10 mg arm, and basal-cell carcinoma, lipoma, and squamous-cell carcinoma in the 20 mg arm. Investigators judged none possibly, probably, or definitely related to study medication. The pattern did not show a dose relationship, and no event occurred in the 30 mg arm. However, a small, short trial cannot exclude uncommon or delayed risks; “judged unrelated” is not equivalent to proof of no causal risk.",
          ],
        },
        {
          title: "Laboratory, glucose, IGF-1, and antibody findings",
          tables: [
            {
              headers: ["Safety domain", "Human trial finding", "Limitation"],
              rows: [
                [
                  "IGF-1",
                  "No statistically significant treatment-placebo differences at 12 or 24 weeks",
                  "Does not establish all long-term endocrine safety",
                ],
                [
                  "Glucose tolerance",
                  "No statistically significant worsening in OGTT measures",
                  "Participants were selected trial populations",
                ],
                [
                  "Vital signs/ECG/labs",
                  "No clinically meaningful treatment pattern in the pooled report",
                  "Published aggregate data are less detailed than a modern regulatory review",
                ],
                [
                  "Anti-drug antibodies",
                  "None detected in tested subsets after oral exposure",
                  "Assays, sample sizes, and oral route do not settle repeated-injection immunogenicity",
                ],
                [
                  "Treatment-related withdrawal/SAE",
                  "None judged treatment-related by study investigators",
                  "Attribution is clinical judgment, not proof of absence",
                ],
              ],
            },
          ],
        },
        {
          title: "FDA’s current compounding concern",
          paragraphs: [
            "FDA’s current position is more cautious than commercial “no side effects” claims. The agency says compounded AOD-9604 may pose immunogenicity risk for certain routes and raises concerns about aggregation, peptide impurities, and active-ingredient characterization. It has limited safety information for proposed compounded routes and cannot determine whether such products would harm humans. These concerns are particularly relevant to repeated subcutaneous use, which was not evaluated in the pivotal obesity trials.",
          ],
        },
        {
          title: "Who was not adequately studied?",
          paragraphs: [
            "Evidence is insufficient for children, pregnant or breastfeeding people, older adults with multiple illnesses, people with active cancer, severe liver or kidney disease, uncontrolled diabetes, or those using AOD-9604 with GLP-1 drugs, GH, anabolic agents, or other research peptides.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How AOD-9604 Works",
      paragraphs: [
        "AOD-9604 was designed to reproduce a proposed fat-metabolism signal from the tail end of growth hormone without switching on the hormone’s main growth pathway. In animals and isolated fat tissue, it increased fat breakdown or oxidation and reduced fat formation. In humans, however, the biological target has not been validated well enough to translate that mechanism into proven weight loss.",
      ],
      widget: "aod-mechanism",
      subsections: [
        {
          title: "Technical explanation",
          tables: [
            {
              headers: [
                "Target or pathway",
                "Proposed/observed effect",
                "Evidence level",
              ],
              rows: [
                [
                  "Lipolysis",
                  "Increased breakdown/mobilization of stored triglyceride",
                  "Human adipose tissue ex vivo and animal studies; clinical relevance uncertain",
                ],
                [
                  "Lipogenesis",
                  "Reduced incorporation/storage of lipid",
                  "Animal and ex-vivo evidence",
                ],
                [
                  "Fat oxidation",
                  "Increased oxidation in obese mice",
                  "Animal evidence",
                ],
                [
                  "β3-adrenergic signaling",
                  "Effects attenuated/absent in β3-adrenergic-receptor knockout mice",
                  "Mechanistic animal evidence, not a validated human receptor-dose relationship",
                ],
                [
                  "hGH receptor",
                  "Lacks the full two-site structure needed for classic receptor dimerization",
                  "In-vitro plus human biomarker evidence",
                ],
                [
                  "GH/IGF-1 axis",
                  "Did not meaningfully raise serum IGF-1 in the human trials",
                  "Human biomarker evidence",
                ],
                [
                  "Appetite",
                  "Designed as a peripheral metabolic agent rather than an appetite suppressant",
                  "Development rationale; not proof of meaningful clinical efficacy",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "Mechanistic plausibility is not clinical effectiveness. A drug can alter lipolysis in a mouse or an isolated adipocyte and still fail to produce sustained weight loss in people—as the OPTIONS result illustrates.",
          ],
        },
      ],
    },
    {
      id: "other-research",
      title: "Other Research Areas",
      subsections: [
        {
          title: "Cartilage and osteoarthritis",
          paragraphs: [
            "AOD-9604 has been studied in rabbit cartilage-defect models, including work combining it with hyaluronic acid. Those studies suggested enhanced cartilage repair, but they are **animal studies**, not evidence that AOD-9604 heals human joints, reverses osteoarthritis, or improves human pain.",
          ],
        },
        {
          title: "Neuropathic pain as LAT8881",
          paragraphs: [
            "The molecule was repurposed as LAT8881. NCT03865953 evaluated oral LAT8881 25 mg/day in a randomized, double-blind, placebo-controlled crossover Phase IIa study in postherpetic neuralgia or diabetic peripheral neuropathy. This program is scientifically distinct from obesity research. A pain-study dose should not be repurposed as a weight-loss dose.",
          ],
        },
      ],
    },
    {
      id: "compare",
      title: "AOD-9604 vs Similar Compounds",
      tables: [
        {
          headers: [
            "Compound",
            "Mechanism",
            "Best-supported use",
            "Human efficacy evidence",
            "Regulatory status",
          ],
          rows: [
            [
              "AOD-9604",
              "Modified hGH C-terminal fragment; proposed lipolysis/anti-lipogenesis",
              "None established",
              "Obesity Phase II program; confirmatory trial failed",
              "Not FDA approved",
            ],
            [
              "hGH fragment 176–191 sold online",
              "Product label may refer to a related fragment, but identity and formulation vary",
              "None established",
              "Cannot assume equivalence to AOD-9604 trials",
              "Not FDA approved for fat loss",
            ],
            [
              "Somatropin (full-length hGH)",
              "Activates GH receptor and IGF-1 axis",
              "FDA-approved GH-deficiency and other specified indications",
              "Established for approved indications; not a general obesity drug",
              "FDA approved for specific indications",
            ],
            [
              "Tesamorelin",
              "GHRH analog increasing endogenous GH/IGF-1",
              "Reduction of excess abdominal fat in adults with HIV lipodystrophy",
              "Randomized human trials in its approved population",
              "FDA approved for that narrow indication",
            ],
            [
              "Semaglutide",
              "GLP-1 receptor agonist",
              "Chronic weight management; diabetes products also approved",
              "Large Phase III programs with clinically substantial weight loss",
              "FDA approved in indication-specific products",
            ],
            [
              "Tirzepatide",
              "GIP/GLP-1 receptor agonist",
              "Chronic weight management; type 2 diabetes",
              "Large Phase III programs with clinically substantial weight loss",
              "FDA approved in indication-specific products",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "These are mostly **cross-trial comparisons**, not head-to-head trials. The clearest distinction is evidentiary: semaglutide and tirzepatide have successful large Phase III programs and approved labeling; AOD-9604 does not.",
      ],
    },
    {
      id: "research",
      title: "Clinical Evidence",
      paragraphs: [
        "The human program spans six METAOD obesity studies plus a later neuropathic-pain program under the LAT8881 name. Filter by topic and route below.",
      ],
      widget: "aod-trial-explorer",
      subsections: [
        {
          title: "METAOD001",
          paragraphs: [
            "**Design:** Randomized, double-blind, placebo-controlled, single IV dose escalation · **Participants:** 15 healthy men, BMI 24–30 · **Dose:** 25–400 µg/kg IV; somatropin positive control included · **Main result:** No clinically meaningful acute safety, glucose, or IGF-1 signal reported · **Key limitation:** Very small, male-only, single exposure; not a repeated subcutaneous trial",
          ],
        },
        {
          title: "METAOD002",
          paragraphs: [
            "**Design:** Double-blind, placebo-controlled Latin-square study · **Participants:** 23 men with BMI ≥35 · **Dose:** 25, 50, or 100 µg/kg IV, single dose · **Main result:** Generally tolerated without meaningful glucose or IGF-1 changes",
          ],
        },
        {
          title: "METAOD003",
          paragraphs: [
            "**Design:** Double-blind, placebo-controlled crossover · **Participants:** 17 men with obesity; 15 completed · **Dose:** Oral 9, 27, and 54 mg single doses with two-week washouts · **Main result:** Headache and gastrointestinal events were common across treatments; no consistent dose trend",
          ],
        },
        {
          title: "METAOD004",
          paragraphs: [
            "**Design:** Randomized, double-blind, placebo-controlled multiple-dose study · **Participants:** 36 men with obesity · **Dose:** Oral 9, 27, or 54 mg/day, or placebo, for seven days · **Main result:** No serious adverse event; 54 mg was associated with more headache and gastrointestinal/general symptoms",
          ],
        },
        {
          title: "METAOD005",
          paragraphs: [
            "**Design:** Randomized, double-blind, placebo-controlled Phase IIb dose-ranging study · **Participants:** 300 adults with BMI ≥35; 50 per arm · **Duration:** Two-week placebo run-in, then 12 weeks · **Dose:** Oral 1, 5, 10, 20, or 30 mg/day, or placebo · **Main result:** The widely cited 1 mg result was −2.6 kg versus −0.8 kg with placebo; no robust linear dose-response established",
          ],
        },
        {
          title: "METAOD006 / OPTIONS",
          paragraphs: [
            "**Design:** Randomized, double-blind, placebo-controlled Phase IIb · **Participants:** 536 enrolled across 16 Australian sites; later sources use 502 for the study population and 377 for active-treated participants · **Duration:** 24 weeks; primary endpoint at week 12 · **Dose:** Oral 0.25, 0.5, or 1 mg/day, or placebo · **Main result:** Primary endpoint not met; obesity development discontinued in 2007",
          ],
        },
        {
          title: "LAT-NP-001 / NCT03865953",
          paragraphs: [
            "**Design:** Phase IIa randomized, double-blind, placebo-controlled crossover · **Participants:** Adults with postherpetic neuralgia or diabetic peripheral neuropathy · **Dose:** Oral LAT8881 25 mg/day · **Key limitation:** Different indication; it cannot establish obesity efficacy or injectable safety",
          ],
        },
      ],
    },
    {
      id: "evidence-quality",
      title: "Evidence Quality",
      tables: [
        {
          headers: ["Evidence type", "Strength", "Why"],
          rows: [
            [
              "Human randomized obesity trials",
              "Moderate for lack of meaningful efficacy",
              "A large controlled trial failed; incomplete public arm-level reporting reduces precision",
            ],
            [
              "Human short-term safety",
              "Low to moderate for oral trial formulations",
              "Roughly 900 participants across six trials, but limited duration and selected populations",
            ],
            [
              "Repeated subcutaneous safety",
              "Very low/absent",
              "Pivotal studies were oral; early IV studies were single-dose",
            ],
            [
              "Long-term safety beyond 24 weeks",
              "Very low/absent",
              "No adequate long-duration program",
            ],
            [
              "Animal metabolic studies",
              "Moderate preclinical evidence",
              "Multiple models support biological activity, but translation failed clinically",
            ],
            [
              "Human cartilage/joint repair",
              "Absent",
              "Published supportive work is preclinical",
            ],
            [
              "Human neuropathic-pain evidence",
              "Early/investigational",
              "Phase IIa program under LAT8881; no approved indication",
            ],
            ["FDA approval", "None", "No approved product or indication"],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory and Sports Status",
      bullets: [
        "**United States:** Not FDA approved. There is no approved dosage or label.",
        "**Compounding:** FDA flags potential significant safety concerns and says it lacks adequate information for proposed compounded routes. Withdrawal of a nomination does not transform the substance into an approved compounding ingredient.",
        "**Obesity development:** Discontinued in 2007 after METAOD006 failed its primary endpoint.",
        "**Other development:** Investigated as LAT8881 for neuropathic pain; still not an approved therapy.",
        "**Sport:** WADA has stated that AOD-9604 falls within the prohibited class of growth-hormone fragments and is prohibited at all times. Athletes should check the current Prohibited List and obtain formal anti-doping advice rather than relying on a clinic or vendor.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is AOD-9604?",
        answer:
          "AOD-9604 is an investigational 16-amino-acid peptide based on the C-terminal region of human growth hormone, with an added N-terminal tyrosine.",
      },
      {
        question: "What does AOD-9604 do?",
        answer:
          "It increased fat breakdown or oxidation and reduced fat formation in preclinical models, but a larger human obesity trial did not show significant weight-loss efficacy.",
      },
      {
        question: "What is the AOD-9604 dosage?",
        answer:
          "There is no approved or established AOD-9604 dosage. Human obesity trials used fixed once-daily oral doses from 0.25 to 30 mg, while early safety experiments included oral doses up to 54 mg and single IV weight-based doses.",
      },
      {
        question: "Is 300 mcg of AOD-9604 an evidence-based dose?",
        answer:
          "No validated clinical evidence establishes a 300-mcg daily subcutaneous weight-loss regimen. That popular online protocol should not be confused with the oral pivotal trials or the single-dose IV studies.",
      },
      {
        question: "How often was AOD-9604 used in trials?",
        answer:
          "Repeated-dose studies generally administered it once daily. This describes study design, not a treatment recommendation.",
      },
      {
        question: "Does AOD-9604 need dose escalation?",
        answer:
          "No therapeutic escalation schedule has been validated. Early dose-escalation experiments evaluated safety; they did not create a clinical titration protocol.",
      },
      {
        question: "Does AOD-9604 cause weight loss?",
        answer:
          "Human evidence does not establish reliable weight loss. An earlier 12-week study showed a modest positive signal, but the larger confirmatory OPTIONS trial failed its primary endpoint.",
      },
      {
        question: "How much weight did people lose on AOD-9604?",
        answer:
          "The often-cited early result was 2.6 kg with oral 1 mg/day versus 0.8 kg with placebo at 12 weeks. That result was not confirmed by the larger later trial.",
      },
      {
        question: "How long does AOD-9604 take to work?",
        answer:
          "There is no established clinical time-to-effect because efficacy was not confirmed. Marketing claims about visible fat loss in a set number of weeks are not supported by validated human evidence.",
      },
      {
        question: "Does AOD-9604 target belly fat?",
        answer:
          "No reliable human study proves targeted abdominal-fat or “spot-reduction” effects.",
      },
      {
        question: "Does AOD-9604 suppress appetite?",
        answer:
          "It was developed as a metabolic rather than appetite-suppressing agent, but that proposed distinction did not translate into proven obesity efficacy.",
      },
      {
        question: "Is AOD-9604 the same as HGH?",
        answer:
          "No. It is a short modified fragment and does not reproduce the full receptor-binding structure of 191-amino-acid hGH.",
      },
      {
        question: "Does AOD-9604 raise IGF-1?",
        answer:
          "The human trial program did not find significant IGF-1 increases versus placebo over 12 or 24 weeks.",
      },
      {
        question: "What are the side effects of AOD-9604?",
        answer:
          "Reported events included headache, diarrhea, flatulence, nausea, abdominal symptoms, and other digestive complaints; the clearest dose-related pattern occurred at oral 54 mg over seven days.",
      },
      {
        question: "Is injected AOD-9604 safe?",
        answer:
          "Safety has not been established for chronic subcutaneous injection. Early human injection research used single IV doses, and FDA specifically raises route-related immunogenicity and product-quality concerns for compounded AOD-9604.",
      },
      {
        question: "Is AOD-9604 FDA approved?",
        answer: "No. It has no FDA-approved indication, product, or dosage.",
      },
      {
        question: "Does GRAS mean AOD-9604 is FDA approved?",
        answer:
          "No. A GRAS conclusion concerns specified food uses and does not approve a peptide as a drug or validate injected, compounded, or weight-loss use.",
      },
      {
        question: "Can AOD-9604 repair cartilage or joints?",
        answer:
          "That claim is not established in humans. Supportive cartilage-regeneration findings come from animal models.",
      },
      {
        question: "Is AOD-9604 banned in sport?",
        answer:
          "Yes. WADA has treated AOD-9604 as a prohibited growth-hormone fragment; competitive athletes should consult the current list and their anti-doping organization.",
      },
      {
        question: "AOD-9604 vs semaglutide: which has better evidence?",
        answer:
          "Semaglutide has substantially stronger evidence: successful large Phase III weight-management trials and FDA-approved products for defined indications. AOD-9604’s confirmatory obesity trial failed.",
      },
      {
        question: "What is AOD-9604’s half-life?",
        answer:
          "No clinically useful, validated half-life supports the subcutaneous schedules promoted online. Pharmacokinetics depend on route and formulation, so vendor claims should not be substituted for clinical data.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Stier H, Vos E, Kenley D.",
        title: "Safety and Tolerability of the Hexadecapeptide AOD9604 in Humans.",
        detail: "Journal of Endocrinology and Metabolism. 2013;3(1-2):7–15.",
        href: "https://www.jofem.org/index.php/jofem/article/view/157/194",
      },
      {
        authors: "Heffernan MA, et al.",
        title:
          "The effects of human GH and its lipolytic fragment (AOD9604) on lipid metabolism following chronic treatment in obese mice and beta-3 adrenergic receptor knockout mice.",
        detail: "Endocrinology. 2001.",
        href: "https://pubmed.ncbi.nlm.nih.gov/11713213/",
      },
      {
        authors: "Ng FM, et al.",
        title:
          "Increase of fat oxidation and weight loss in obese mice caused by chronic treatment with human growth hormone or a modified C-terminal fragment.",
        detail: "International Journal of Obesity. 2001.",
        href: "https://pubmed.ncbi.nlm.nih.gov/11673763/",
      },
      {
        authors: "Valentino MA, Lin JE, Waldman SA.",
        title:
          "Central and peripheral molecular targets for antiobesity pharmacotherapy.",
        detail: "Clinical Pharmacology & Therapeutics. 2010.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2920657/",
      },
      {
        authors: "Patel D.",
        title: "Obesity Pharmacotherapy: Current Perspectives and Future Directions.",
        detail: "Metabolism. 2013.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3584306/",
      },
      {
        authors: "Lateral Pharma",
        title: "LAT-NP-001 protocol: oral LAT8881 in neuropathic pain",
        detail: "ClinicalTrials.gov protocol document.",
        href: "https://cdn.clinicaltrials.gov/large-docs/53/NCT03865953/Prot_000.pdf",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT03865953: Oral LAT8881 in Neuropathic Pain",
        detail: "Clinical trial registry.",
        href: "https://clinicaltrials.gov/study/NCT03865953",
      },
      {
        authors: "Metabolic Pharmaceuticals",
        title: "OPTIONS Study design announcement",
        detail: "2006 sponsor announcement; non-peer-reviewed source.",
        href: "https://www.biospace.com/metabolic-pharmaceuticals-s-obesity-trial-update-first-100-subjects-complete-the-phase-2b-trial-of-aod9604",
      },
      {
        authors: "U.S. Food and Drug Administration",
        title:
          "Certain Bulk Drug Substances for Use in Compounding That May Present Significant Safety Risks",
        detail: "Current FDA safety position on compounded AOD-9604.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        authors: "U.S. Food and Drug Administration",
        title: "GRAS Notice Inventory",
        detail: "Background on what a GRAS notice represents.",
        href: "https://www.fda.gov/food/generally-recognized-safe-gras/gras-notice-inventory",
      },
      {
        authors: "World Anti-Doping Agency",
        title: "WADA statement on substance AOD-9604",
        detail: "Prohibited growth-hormone fragment class.",
        href: "https://www.wada-ama.org/en/news/wada-statement-substance-aod-9604",
      },
      {
        authors: "Kim J, et al.",
        title:
          "Human growth hormone fragment 176–191 peptide enhances articular cartilage regeneration in a rabbit model.",
        detail: "Preclinical evidence only.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9277683/",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "AOD-9604 is a biologically interesting hGH fragment with positive preclinical metabolism findings and a generally reassuring limited oral safety program. It is **not** an evidence-based weight-loss treatment.",
      "The larger confirmatory human obesity trial failed, no approved dose exists, and chronic compounded injection remains a fundamentally different and inadequately studied exposure.",
      "This page describes research for educational purposes. It is **not individualized medical advice**, and it does not establish FDA approval, injectable safety, purity, or legality.",
    ],
  },
};

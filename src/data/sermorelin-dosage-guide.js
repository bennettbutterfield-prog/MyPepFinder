/**
 * Sermorelin (GHRH 1–29 / historical Geref) dosage guide.
 * Historically FDA approved for narrow uses; current compounded adult protocols are not approved.
 */

export const SER_FDA_HISTORY = [
  {
    id: "diagnostic",
    product: "Geref Diagnostic (NDA 19-863)",
    presentation: "0.05 mg base per ampule",
    purpose: "Provocative testing of pituitary GH secretion",
    dose: "1 mcg/kg IV single challenge",
    status: "Approved 1990; later discontinued",
  },
  {
    id: "treatment",
    product: "Geref (NDA 20-443)",
    presentation: "0.5 mg and 1 mg base per vial",
    purpose: "Idiopathic GH deficiency in prepubertal children with growth failure",
    dose: "0.03 mg/kg (30 mcg/kg) SC once daily at bedtime",
    status: "Approved 1997; later discontinued",
  },
];

export const SER_COMPARE = {
  historical: {
    id: "historical",
    label: "Historical FDA / pediatric",
    badge: "Approved products — discontinued",
    summary:
      "Geref Diagnostic and Geref treatment had narrow labeled uses. FDA later determined withdrawal was not for safety or effectiveness. That does not make today's compounded adult products FDA approved.",
    rows: [
      {
        name: "Diagnostic challenge",
        dose: "1 mcg/kg IV once",
        finding: "Assess pituitary GH reserve — not a treatment regimen",
      },
      {
        name: "Pediatric Geref label",
        dose: "30 mcg/kg SC nightly",
        finding: "Idiopathic GHD + growth failure; specialist monitoring",
      },
      {
        name: "110-child once-daily study",
        dose: "30 mcg/kg SC bedtime ≤12 mo",
        finding: "Height velocity ↑ ~4.1 → 8.0 (6 mo) / 7.2 cm/yr (12 mo)",
      },
      {
        name: "30 vs 60 mcg/kg/day RCTs",
        dose: "Divided or continuous SC",
        finding: "Doubling dose did not clearly improve growth; GH comparator stronger",
      },
    ],
  },
  experimental: {
    id: "experimental",
    label: "Adult experimental",
    badge: "Small specialized cohorts",
    summary:
      "Published adult studies generally used 0.5–2 mg per administration — higher than most current clinic fixed-mcg schedules.",
    rows: [
      {
        name: "Older men crossover",
        dose: "0.5 or 1 mg SC BID × 14 days",
        finding: "GH/IGF-1 toward younger levels; too short for clinical benefit claims",
      },
      {
        name: "Older men nightly",
        dose: "2 mg SC nightly × 6 weeks",
        finding: "↑ nocturnal GH; IGF-1 and body composition unchanged",
      },
      {
        name: "HIV lipodystrophy RCT",
        dose: "1 mg SC q12h × 12 weeks",
        finding: "↑ IGF-1, lean mass; ↓ trunk fat — disease-specific, not anti-aging",
      },
    ],
  },
  anecdotal: {
    id: "anecdotal",
    label: "Anecdotal adult / clinic",
    badge: "Not FDA-approved adult regimens",
    summary:
      "Compounding-clinic and community pages commonly report 100–500 mcg SC at bedtime. Not historical FDA adult doses and not validated in controlled dose-ranging trials.",
    rows: [
      {
        name: "Lower fixed adult",
        dose: "100–200 mcg nightly",
        finding: "Practitioner/community report",
      },
      {
        name: "Common fixed adult",
        dose: "200–300 mcg nightly or 5 nights/wk",
        finding: "Repeated clinic convention — not approved adult regimen",
      },
      {
        name: "Higher fixed adult",
        dose: "300–500 mcg nightly",
        finding: "Anecdotal; no controlled outcome comparison",
      },
      {
        name: "Five-on / two-off",
        dose: "Usually 200–500 mcg",
        finding: "No primary trial establishing weekends-off benefit",
      },
    ],
  },
};

export const SER_STUDY_DOSES = [
  { mcgkg: 0.25, route: "IV", context: "Acute GH release — significant in route study" },
  { mcgkg: 1, route: "IV", context: "Historical diagnostic challenge dose" },
  { mcgkg: 20, route: "SC/day", context: "Idiopathic short-stature research (BID administrations)" },
  { mcgkg: 30, route: "SC/day", context: "Historical pediatric Geref treatment dose" },
  { mcgkg: 60, route: "SC/day", context: "Pediatric research comparator — not clearly better than 30" },
];

export const SER_PED_VELOCITY = [
  { arm: "GHRH 30 mcg/kg/day", velocity: 9.2 },
  { arm: "GHRH 60 mcg/kg/day", velocity: 9.3 },
  { arm: "Recombinant GH", velocity: 14.6 },
];

export const SER_CLAIMS = [
  {
    id: "approved-today",
    claim: "“Clinic Sermorelin is FDA approved”",
    status: "inaccurate",
    detail:
      "Specific Geref products were historically approved. Current compounded Sermorelin preparations are not FDA-approved products.",
  },
  {
    id: "label-fixed",
    claim: "“0.2–0.3 mg came from the Geref label”",
    status: "misstated",
    detail:
      "The pediatric label was 0.03 mg/kg (30 mcg/kg) — weight-based, not a universal 0.2–0.3 mg adult amount.",
  },
  {
    id: "nightly-igf",
    claim: "“Nightly Sermorelin reliably raises IGF-1 and improves body composition”",
    status: "not supported in key adult study",
    detail:
      "2 mg SC nightly × 6 weeks in 11 older men ↑ nocturnal GH but not IGF-1 or DEXA body composition — despite a dose 4–10× common clinic amounts.",
  },
  {
    id: "weekends-off",
    claim: "“Five nights on / two off prevents tolerance”",
    status: "not established",
    detail:
      "No controlled trial compared 7 nights/week with weekends off. Nightly dosing has historical pediatric labeling support; weekends-off is a convention.",
  },
];

export const SER_AE_SIMPLE = [
  ["Injection-site reactions", "~1 in 6 (historical)", "Pain, swelling, or redness"],
  ["Hypothyroidism in studies", "6.5%", "Label advised thyroid monitoring"],
  ["Anti-GRF antibodies", "Large pediatric proportion", "Uncertain clinical importance"],
  ["Current compounded long-term adult safety", "Not established", "Not equivalent to historical Geref"],
];

export const SER_AE_FULL = [
  [
    "Injection-site reactions",
    "~1 in 6",
    "3 discontinuations / ~350 exposed",
    "Historical Geref clinical experience",
  ],
  [
    "Systemic AEs (historical)",
    "<1% each (listed)",
    "Headache, flushing, dysphagia, dizziness, urticaria, etc.",
    "Label rates",
  ],
  [
    "IV diagnostic reactions",
    "Flushing, pain, nausea, etc.",
    "Supervised challenge setting",
    "Not chronic SC profile",
  ],
  [
    "Hypothyroidism",
    "6.5% in clinical studies",
    "Supports periodic thyroid testing",
    "Pediatric treatment context",
  ],
  [
    "Antibodies",
    "Nearly all in some GHRH arms",
    "No clear growth-response correlation shown",
    "Pediatric continuous-infusion RCT",
  ],
  [
    "Compounded product quality",
    "Unknown vs Geref",
    "Potency, sterility, aggregation, BUD — pharmacy-specific",
    "Not FDA premarket approved",
  ],
  [
    "WADA status",
    "Prohibited always",
    "GHRH / releasing-factor category",
    "2026 Prohibited List",
  ],
];

export const SER_EVIDENCE_LADDER = [
  {
    level: "Historical FDA-approved pediatric dosing",
    status: "strong-historical",
    detail: "30 mcg/kg SC nightly — product discontinued",
  },
  {
    level: "Historical diagnostic dosing",
    status: "strong-historical",
    detail: "Single 1 mcg/kg IV challenge — no longer marketed US test",
  },
  {
    level: "Pediatric clinical-trial dosing",
    status: "moderate",
    detail: "Several trials at 20–60 mcg/kg/day including randomized comparisons",
  },
  {
    level: "Adult experimental dosing",
    status: "low-moderate",
    detail: "Small studies at 0.5–2 mg; one disease-specific RCT",
  },
  {
    level: "Preclinical dosing",
    status: "mechanism",
    detail: "Not a human protocol",
  },
  {
    level: "Anecdotal adult protocols",
    status: "low",
    detail: "100–500 mcg fixed schedules lack controlled dose optimization",
  },
  {
    level: "Long-term adult dosing",
    status: "poor",
    detail: "No robust long-term trial for healthy-adult wellness outcomes",
  },
];

export const SERMORELIN_DOSAGE_GUIDE = {
  title:
    "Sermorelin Dosage: Historical FDA Dosing, Human Studies, and Research Protocols",
  updated: "Updated August 2026",
  callout:
    "**Research and regulatory notice:** There is **no currently marketed FDA-approved Sermorelin product** or current FDA-approved adult “anti-aging,” weight-loss, muscle-building, sleep, or wellness dosage. Geref products were historically FDA approved for diagnostic testing and pediatric growth failure, then discontinued. Current compounded preparations are **not** FDA approved. The doses below reflect historical labeling, published research, and anecdotal protocols — not individualized treatment instructions.",
  intro: [
    "The historical pediatric Geref label recommended **0.03 mg/kg (30 mcg/kg) SC once daily at bedtime** for prepubertal children with idiopathic GH deficiency and growth failure. Diagnostic use was a **single 1 mcg/kg IV challenge**.",
    "Acute human research found measurable GH release from **0.25 mcg/kg IV**, with maximal response around **1–2 mcg/kg IV**. Adult experiments often used **0.5–2 mg** per administration — much larger than current online **100–500 mcg** bedtime schedules.",
    "Sermorelin is short acting (~**11–12 minute** half-life after IV/SC in historical product information; ~**6%** absolute SC bioavailability in a small PK study). Doubling pediatric GHRH from **30 to 60 mcg/kg/day** did not improve six-month growth velocity versus the lower dose, while recombinant GH produced greater growth.",
  ],
  glance: {
    title: "Sermorelin dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        [
          "**Current FDA-approved product / adult wellness dose?**",
          "No — historical Geref discontinued; compounded ≠ approved",
        ],
        [
          "**Historical pediatric treatment**",
          "30 mcg/kg SC once daily at bedtime",
        ],
        ["**Historical diagnostic dose**", "1 mcg/kg IV single challenge"],
        [
          "**Acute IV max response (research)**",
          "Around 1–2 mcg/kg; significant from 0.25 mcg/kg",
        ],
        [
          "**Key adult experimental doses**",
          "0.5–1 mg BID; 2 mg nightly; 1 mg q12h (HIV lipodystrophy)",
        ],
        [
          "**Common online adult range**",
          "100–500 mcg SC bedtime (anecdotal)",
        ],
        ["**Reported half-life**", "~11–12 minutes (IV or SC)"],
        ["**30 vs 60 mcg/kg/day growth**", "Doubling did not clearly help"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is Sermorelin?",
      paragraphs: [
        "Sermorelin acetate is the acetate salt of amidated synthetic **GHRH(1–29)-NH2** — the biologically active amino-terminal portion of native 44-aa GHRH. It binds the GHRH receptor on pituitary somatotrophs to stimulate synthesis and pulsatile release of endogenous GH (which can raise IGF-1). It is **not** recombinant human GH.",
        "Dosing consequences: acute response varies with pituitary reserve, age, body composition, and somatostatin tone; a larger dose does not guarantee proportionally more GH; diagnostic IV, pediatric growth, and adult experimental dosing answer different questions. Do **not** transfer results from CJC-1295 or tesamorelin to Sermorelin.",
      ],
    },
    {
      id: "fda-status",
      title: "FDA status: historically approved, not currently marketed",
      paragraphs: [
        "Sermorelin is unusual among online peptides because specific **Geref** products did have FDA approvals. FDA later determined the products were **not withdrawn for reasons of safety or effectiveness** — that does not mean an approved Geref product is currently marketed, and it does not make today's compounded Sermorelin FDA approved.",
      ],
      widget: "ser-fda-history",
      highlight:
        "Accurate: specific Geref products were historically approved for narrow diagnostic and pediatric uses. Inaccurate: “never FDA approved” or “clinic Sermorelin today is FDA approved.”",
    },
    {
      id: "historical-dose",
      title: "Historical FDA-approved dosage",
      paragraphs: [
        "Pediatric treatment: **0.03 mg/kg (30 mcg/kg) SC once daily at bedtime**. At 30 mcg/kg, a 20 kg child receives 600 mcg and a 30 kg child 900 mcg — this regimen cannot be repackaged as a modern adult “microdosing” protocol.",
        "Diagnostic use: **1 mcg/kg IV once** with serial GH measurements — ~30× smaller on a weight basis than the daily pediatric treatment dose, and a different route. Confusing these applications is a category error.",
      ],
      tables: [
        {
          caption: "Historical labeled uses",
          headers: ["Use", "Dose", "Route", "Frequency", "Purpose"],
          rows: [
            [
              "Pediatric treatment",
              "30 mcg/kg",
              "SC",
              "Once daily bedtime",
              "Idiopathic GHD + growth failure",
            ],
            [
              "Diagnostic challenge",
              "1 mcg/kg",
              "IV",
              "Single supervised dose",
              "Evaluate pituitary GH reserve",
            ],
          ],
        },
      ],
    },
    {
      id: "human-trials",
      title: "Dosage used in human clinical trials",
      paragraphs: [
        "Keep historical FDA, adult experimental, and anecdotal adult schedules in separate evidence lanes.",
      ],
      widget: "ser-clinical-anecdotal",
    },
    {
      id: "acute-response",
      title: "Acute dose-response and route differences",
      numbered: [
        "**IV response begins below the diagnostic dose.** Significant GH from 0.25 mcg/kg IV; average maximum around 1–2 mcg/kg IV — saturable acute response, not an optimal repeated SC dose.",
        "**Intranasal delivery required far more peptide.** Bioavailability ~3%–5%; ~50 mcg/kg IN ≈ 1 mcg/kg IV PD response. Pediatric IN pilot: attenuated response, antibodies, local symptoms, no 6-month height-velocity gain.",
        "**Subcutaneous PK are short.** After 2 mg SC: peak ~5–20 min; absolute bioavailability ~6%; elimination half-life ~11–12 min IV or SC. GH can remain elevated longer than measurable peptide.",
      ],
      widget: "ser-claim-checker",
    },
    {
      id: "pediatric-dose-response",
      title: "Pediatric dose-response: more was not clearly better",
      paragraphs: [
        "Two randomized pediatric studies compared **30 and 60 mcg/kg/day**. In a continuous-infusion comparison, six-month mean height velocities were essentially identical at 30 vs 60 mcg/kg/day (~9.2 vs 9.3 cm/year) while recombinant GH reached ~14.6 cm/year. Doubling Sermorelin exposure produced essentially no additional growth velocity in that experiment.",
      ],
      widget: "ser-ped-velocity",
    },
    {
      id: "once-daily-pediatric",
      title: "Once-daily pediatric treatment evidence",
      paragraphs: [
        "The largest treatment study enrolled 110 previously untreated prepubertal children with idiopathic GHD using **30 mcg/kg SC once daily at bedtime for up to one year**. Among 86 efficacy-evaluable children, mean height velocity rose from ~4.1 to 8.0 cm/year at six months and 7.2 at 12 months (~74% good responders at six months).",
        "Open label; 24/110 excluded from efficacy analysis; final adult height not established; labeling advised reconsidering treatment when growth was poor or waning.",
      ],
    },
    {
      id: "adult-research",
      title: "Adult research dosage",
      paragraphs: [
        "**0.5 or 1 mg SC BID × 14 days** in older men increased GH/IGF-1 toward younger levels — too short for durable clinical-benefit claims.",
        "**2 mg SC nightly × 6 weeks** increased nocturnal GH measures but **not** IGF-1 or body composition — important because marketing often claims nightly Sermorelin reliably raises IGF-1 despite using much smaller clinic doses.",
        "**1 mg SC every 12 hours × 12 weeks** in an HIV-lipodystrophy RCT improved IGF-1, lean mass, and trunk-fat measures — stronger adult outcome evidence, but **disease-specific**, not an anti-aging regimen for healthy adults.",
      ],
    },
    {
      id: "weight-examples",
      title: "Dose-by-body-weight examples",
      paragraphs: [
        "Mathematical study-reference tool only — **not** a dosing recommendation. Do **not** extend the historical 30 mcg/kg pediatric rule to adults.",
      ],
      widget: "ser-exposure-calc",
      highlight:
        "Published-study math only. No currently marketed FDA-approved adult dosage. Historical 30 mcg/kg is not an adult weight-based recommendation.",
    },
    {
      id: "research-dosage",
      title: "Sermorelin research dosage: commonly reported protocols",
      paragraphs: [
        "Human studies support acute dose-dependent GH release, short half-life, GH (± sometimes IGF-1) rises with repeated administration, pediatric growth at 30 mcg/kg/day in some children, and disease-specific body-composition changes at 1 mg BID in HIV lipodystrophy.",
        "Evidence does **not** establish that 200–300 mcg is optimal for adults, that five nights/week is better than nightly, that 100 mcg is a universal start, that 500 mcg is a maximum, that fixed cycles are required, or that current clinic doses improve body composition, recovery, energy, or longevity in healthy adults.",
      ],
      tables: [
        {
          caption: "Reported adult research / clinic landscape",
          headers: ["", "Summary"],
          rows: [
            [
              "**Reported online range**",
              "≈100–500 mcg fixed adult administration; experiments also used 0.5–2 mg",
            ],
            ["**Most common online**", "200–300 mcg"],
            ["**Frequency**", "Usually nightly; some 5 nights/week"],
            ["**Route**", "Subcutaneous"],
            ["**Typical duration**", "Often 8–12 weeks or 3–6 months"],
            [
              "**Evidence quality**",
              "Moderate historical pediatric/acute; low for fixed adult wellness schedules",
            ],
          ],
        },
      ],
    },
    {
      id: "origin",
      title: "Where the modern fixed-dose protocol appears to come from",
      paragraphs: [
        "The original source could not be reliably traced. Contemporary pages often repeat 0.2–0.3 mg nightly as if from historical labeling — the actual Geref pediatric label used **0.03 mg/kg**, not a universal fixed adult amount. Likely influences: simplifying weight-based pediatric dosing, preference for lower adult exposures than older studies, vial convenience, clinic-page repetition, and unproven nocturnal-pulse synchronization ideas.",
      ],
    },
    {
      id: "protocol-variations",
      title: "Research protocol variations",
      numbered: [
        "**Nightly vs five nights/week.** Pediatric label and 110-child study used daily bedtime dosing. No controlled trial showed weekends-off is superior or safer.",
        "**Bedtime timing.** Genuine research/labeling history (pediatric + 6-week older-adult study) — more evidence-linked than many peptide timing claims. Comparative superiority vs morning/daytime remains limited.",
        "**Once daily vs divided.** Both studied in different populations; too heterogeneous to declare one frequency universally superior.",
        "**Combination with Ipamorelin/GHS.** Mechanistic synergy ≠ established safety, efficacy, ratio, or frequency for wellness protocols.",
        "**Continuous vs cyclical.** Pediatric studies used continuous daily treatment for months. No controlled study established a required 8- or 12-week adult cycle.",
      ],
    },
    {
      id: "preclinical",
      title: "Animal and preclinical research dosage",
      paragraphs: [
        "Animal exposures must remain separate from human dosing. Example: in young rats, 0.5 mg/kg SC daily increased high-affinity pituitary GHRH-receptor binding, while 1 mg/kg reduced those sites and decreased circulating IGF-1 and growth rate — higher is not automatically better.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      paragraphs: [
        "Sermorelin dosing is well documented for historical diagnostic and pediatric indications, but those discontinued uses do **not** create a current approved adult regimen. Modern fixed adult doses are substantially less established.",
      ],
      widget: "ser-evidence-ladder",
    },
    {
      id: "dose-escalation",
      title: "Dose escalation",
      paragraphs: [
        "No validated week-by-week Sermorelin titration schedule was identified for current adult wellness use. Formal research compared doses as controlled experiments (acute IV ranges; pediatric 30 vs 60; older-men 0.5 vs 1 mg BID) — not lifestyle titration. Clinic pages describing 100–200 → 300–500 mcg based on symptoms/IGF-1 have no controlled trial validation.",
      ],
    },
    {
      id: "safety",
      title: "Safety and tolerability",
      paragraphs: [
        "Historical Geref experience reported injection-site reactions in ~1/6, hypothyroidism in 6.5% of clinical-study participants, and anti-GRF antibodies in a large pediatric proportion. Compounded Sermorelin is **not** a generic equivalent automatically proven to match Geref — potency, sterility, and beyond-use dating are pharmacy-specific.",
      ],
      widget: "ser-adverse-events",
    },
    {
      id: "sport",
      title: "Sporting status",
      paragraphs: [
        "Sermorelin is a growth hormone-releasing factor prohibited under WADA's GHRF/secretagogue category. Prescription, compounded status, or “research” labeling does not make use permissible for tested athletes.",
      ],
    },
    {
      id: "sourcing",
      title: "Sourcing and origin checks",
      bullets: [
        "Is the source describing Geref Diagnostic, pediatric Geref, an adult experiment, or a compounded clinic protocol?",
        "Is the dose fixed or weight based? Route IV, SC, IN, or continuous infusion?",
        "Is “GHRH(1–29)” exact Sermorelin or a modified analogue?",
        "Does a current fixed adult amount trace to a primary study — or misquote 0.03 mg/kg as 0.2–0.3 mg?",
        "Is tesamorelin/CJC-1295 efficacy being imported incorrectly?",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "Modern pages often blur four dose categories: historical diagnostic (**1 mcg/kg IV once**), historical pediatric treatment (**30 mcg/kg SC nightly**), published adult experiments (**0.5–2 mg** in small specialized cohorts), and current compounded clinic schedules (**100–500 mcg**).",
      ],
      highlight:
        "Historical pediatric FDA approval does not imply current compounded adult approval. No controlled program has established an optimal fixed adult dose, five-on/two-off schedule, cycle length, combination ratio, or wellness outcome.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard Sermorelin dosage?",
        answer:
          "There is no currently marketed FDA-approved standard. Historical pediatric Geref dosing was 30 mcg/kg SC once daily at bedtime. Current adult clinic protocols commonly report 100–500 mcg nightly, but no controlled dose-ranging trial established that range as optimal.",
      },
      {
        question: "Was Sermorelin FDA approved?",
        answer:
          "Yes, specific Geref products were historically approved for diagnostic testing and treatment of idiopathic GH deficiency in children with growth failure. They were discontinued. Current compounded Sermorelin is not FDA approved.",
      },
      {
        question: "What dose was used for the Sermorelin stimulation test?",
        answer:
          "The commonly studied historical challenge was a single 1 mcg/kg IV dose with serial GH measurements. It was a diagnostic procedure, not a repeated treatment regimen.",
      },
      {
        question: "What dose was studied in children?",
        answer:
          "The principal once-daily study and historical label used 30 mcg/kg SC at bedtime. Other studies examined 20 mcg/kg twice daily, 30–60 mcg/kg/day in divided doses or continuous infusion, and 50 mcg/kg intranasally three times daily.",
      },
      {
        question: "What dose was studied in adults?",
        answer:
          "Published adult studies used 0.5 or 1 mg SC twice daily for 14 days, 2 mg SC nightly for six weeks, and 1 mg SC every 12 hours for 12 weeks in men with HIV-associated lipodystrophy.",
      },
      {
        question: "Is 200–300 mcg an FDA-approved adult dose?",
        answer:
          "No. That fixed range is widely repeated in modern clinic and community material, but the historical FDA pediatric label was weight based and there was no approved anti-aging or wellness indication.",
      },
      {
        question: "Should Sermorelin be used every night or five nights per week?",
        answer:
          "Nightly dosing has historical study and labeling support for pediatric treatment. No controlled trial was identified that showed five nights per week is superior or safer than nightly use.",
      },
      {
        question: "Does Sermorelin have to be taken at bedtime?",
        answer:
          "Bedtime was used in historical pediatric treatment and an older-adult study, providing a legitimate research precedent. Direct evidence that bedtime produces better clinical outcomes than other timings remains limited.",
      },
      {
        question: "What is Sermorelin's half-life?",
        answer:
          "Historical product information reported approximately 11–12 minutes after IV or SC administration. The GH response can last longer than circulating peptide exposure.",
      },
      {
        question: "Does Sermorelin increase IGF-1?",
        answer:
          "It can, but not consistently. Twice-daily studies in older men and men with HIV lipodystrophy increased IGF-1, while 2 mg nightly for six weeks in 11 healthy older men did not significantly change IGF-1.",
      },
      {
        question: "Does Sermorelin improve muscle or reduce fat?",
        answer:
          "A disease-specific RCT in men with HIV lipodystrophy reported increased lean mass and improved trunk-fat measures at 1 mg twice daily. A six-week study in healthy older men found no body-composition change. Evidence does not establish routine efficacy in healthy adults at current clinic doses.",
      },
      {
        question: "Is Sermorelin the same as CJC-1295 without DAC?",
        answer:
          "No. Both relate to GHRH(1–29), but modified GRF/CJC-1295 without DAC has amino-acid substitutions. Pharmacokinetics and study evidence should not be treated as interchangeable.",
      },
      {
        question: "Is Sermorelin the same as tesamorelin?",
        answer:
          "No. Tesamorelin is a stabilized GHRH analogue with its own current FDA-approved product, indication, pharmacokinetics, and dosing.",
      },
      {
        question: "Is Sermorelin permitted in tested sport?",
        answer:
          "No. It belongs to the prohibited growth hormone-releasing factor category under WADA rules.",
      },
    ],
  },
  sources: {
    title: "Primary references",
    items: [
      {
        authors: "FDA",
        title:
          "Determination that Geref presentations were not withdrawn for reasons of safety or effectiveness",
        detail: "Federal Register, 2013.",
        href: "https://www.federalregister.gov/documents/2013/03/04/2013-04827/determination-that-geref-sermorelin-acetate-injection-05-milligrams-basevial-and-10-milligrams",
      },
      {
        authors: "Thorner MO et al.",
        title: "Once-daily subcutaneous GHRH(1–29) therapy in GH-deficient children",
        detail: "JCEM, 1996.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8772599/",
      },
      {
        authors: "Corpas E et al.",
        title: "GHRH(1–29) twice daily in healthy older men",
        detail: "JCEM, 1992.",
        href: "https://pubmed.ncbi.nlm.nih.gov/1379256/",
      },
      {
        authors: "Vittone J et al.",
        title: "Single nightly GHRH(1–29) injections in healthy elderly men",
        detail: "Metabolism, 1997.",
        href: "https://pubmed.ncbi.nlm.nih.gov/9005976/",
      },
      {
        authors: "Koutkia P et al.",
        title: "GHRH in HIV-infected men with lipodystrophy: randomized controlled trial",
        detail: "JAMA, 2004.",
        href: "https://jamanetwork.com/journals/jama/fullarticle/199086",
      },
      {
        authors: "Wilton P et al.",
        title: "Pharmacokinetics and GH response after IV or intranasal GHRH(1–29)-NH2",
        detail: "Acta Paediatrica Supplement, 1993.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8329825/",
      },
      {
        authors: "Neyzi O et al.",
        title: "Growth response to 30 versus 60 mcg/kg/day GHRH(1–29)-NH2 compared with GH",
        detail: "1993.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8329826/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "GHRH / releasing factors prohibited at all times.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "There is **no currently marketed FDA-approved Sermorelin product** and **no FDA-approved adult wellness dosage**. Historical Geref products were discontinued. Current compounded preparations are **not** FDA approved.",
      "This page documents historical labeling, published research, and commonly reported protocols. It is **not** a dosing, reconstitution, cycle, or self-administration guide.",
      "Do not convert the historical **30 mcg/kg** pediatric dose into an adult weight-based recommendation, and do not import dosing from tesamorelin or CJC-1295.",
    ],
  },
};

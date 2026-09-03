/**
 * IGF-1 LR3 (Long R3 IGF-I) dosage guide.
 * No human clinical dose identified; preclinical + anecdotal only; ≠ mecasermin.
 */

export const LR3_HUMAN_STATUS = [
  ["Healthy-volunteer dose study", "None identified"],
  ["Patient dose study", "None identified"],
  ["Human pharmacokinetic study", "None identified"],
  ["Human dose-response relationship", "None established"],
  ["Human maximum tolerated dose", "Unknown"],
  ["Human effective dose", "Unknown"],
  ["Human elimination half-life", "Unknown"],
  ["Long-term human safety", "Unknown"],
];

export const LR3_VS_MECASERMIN = [
  {
    feature: "Molecule",
    lr3: "83-aa analogue (N-terminal extension + Arg3)",
    meca: "70-aa recombinant human IGF-1",
  },
  {
    feature: "IGFBP binding",
    lr3: "Greatly reduced in multiple systems",
    meca: "Native IGF-1 binding profile",
  },
  {
    feature: "FDA status",
    lr3: "Not approved",
    meca: "Approved for specific pediatric growth-failure indications",
  },
  {
    feature: "Approved dose",
    lr3: "None",
    meca: "Starts 0.04–0.08 mg/kg SC BID; may titrate to 0.12 mg/kg BID under labeling",
  },
  {
    feature: "Human PK / safety DB",
    lr3: "No dedicated LR3 human PK or controlled safety cohort",
    meca: "Labeled PK + pediatric trials / postmarketing",
  },
];

export const LR3_COMPARE = {
  preclinical: {
    id: "preclinical",
    label: "Preclinical research",
    badge: "Animal / cell — not human dosing",
    summary:
      "Published administration studies used rats, guinea pigs, pigs, marmosets, and other models. Exposures answer mechanism questions—not a self-administration protocol.",
    rows: [
      {
        name: "Growing rats (~150 g)",
        dose: "320 mcg/day",
        schedule: "SC infusion or 1–2× daily × 7 days",
        finding: "Infusion > injections; LR3 more potent than IGF-1 on several endpoints; cleared faster",
      },
      {
        name: "Dexamethasone-catabolic rats",
        dose: "400 mcg/day",
        schedule: "Infusion or injection × 7 days",
        finding: "Endpoint-dependent anti-catabolic activity; ~equipotent vs IGF-1 for carcass muscle",
      },
      {
        name: "Guinea pigs (~350 g)",
        dose: "120 mcg/day",
        schedule: "Continuous infusion × 7 days",
        finding: "↑ organ fractional weights; body-weight/carcass composition not improved",
      },
      {
        name: "Finishing pigs",
        dose: "180 mcg/kg/day",
        schedule: "Continuous infusion × 4 days",
        finding: "↓ gain/intake; endocrine feedback changes; glucose unchanged",
      },
      {
        name: "Acute pig glucose",
        dose: "20 or 50 mcg/kg IV",
        schedule: "Single bolus",
        finding: "Greater hypoglycemic activity than native IGF-1",
      },
    ],
  },
  anecdotal: {
    id: "anecdotal",
    label: "Anecdotal online",
    badge: "Community convention — not validated",
    summary:
      "Peptide-guide and bodybuilding pages commonly report 20–100 mcg/day. These ranges are community conventions—not doses validated in human trials.",
    rows: [
      {
        name: "Lower range",
        dose: "20–40 mcg",
        schedule: "Once daily SC/IM; often “post-workout”",
        finding: "Community convention; no human validation",
      },
      {
        name: "Common middle",
        dose: "40–60 mcg",
        schedule: "Once daily; systemic or “site-specific” claims",
        finding: "Vendor/community repetition; no dose-response trial",
      },
      {
        name: "Higher range",
        dose: "80–100 mcg",
        schedule: "Once daily; often capped 4–6 weeks online",
        finding: "Higher anecdotal exposure; human risk unknown",
      },
      {
        name: "Stacks / insulin combos",
        dose: "Variable",
        schedule: "Variable",
        finding: "Untested; insulin combination especially hazardous",
      },
    ],
  },
};

export const LR3_CLAIMS = [
  {
    id: "long-acting",
    claim: "“Long means long acting / 20–30 hour half-life”",
    status: "unsupported for humans",
    detail:
      "“Long” = 13-aa N-terminal extension (83-aa molecule). No dedicated human PK study supports a 20–30 hour half-life. Rat studies report faster plasma clearance than native IGF-1 due to poor IGFBP binding.",
  },
  {
    id: "igfbp-blood",
    claim: "“Poor IGFBP binding keeps it active longer in blood”",
    status: "oversimplified",
    detail:
      "Poor binding can increase free receptor availability, but rat comparisons show LR3 is removed from plasma much more rapidly than native IGF-1. Potency ≠ plasma persistence.",
  },
  {
    id: "daily-cover",
    claim: "“One daily dose covers a full day”",
    status: "not established",
    detail:
      "No controlled human exposure study establishes once-daily coverage. Animal work found continuous infusion more effective than intermittent injection for several endpoints.",
  },
  {
    id: "site-specific",
    claim: "“IM into the trained muscle causes site-specific growth”",
    status: "not supported",
    detail:
      "No controlled human imaging/biopsy evidence. Systemic distribution and multi-organ animal responses argue against a purely local growth agent.",
  },
  {
    id: "mecasermin",
    claim: "“Use the Increlex (mecasermin) dose for LR3”",
    status: "inappropriate",
    detail:
      "Mecasermin is native rhIGF-1 for a narrow pediatric indication. Structure, IGFBP interaction, PK, product quality, and safety database differ. Label is a biological warning signal—not an LR3 dose chart.",
  },
];

export const LR3_AE_SIMPLE = [
  [
    "Human LR3 AE rates",
    "None available",
    "No controlled human safety cohort identified",
  ],
  [
    "Hypoglycemia",
    "Central foreseeable hazard",
    "Animal LR3 glucose-lowering; mecasermin documents severe hypo/seizures",
  ],
  [
    "Insulin / glucose-lowering stacks",
    "Especially hazardous",
    "No safe combination protocol established",
  ],
  [
    "Long-term / neoplasia / organ growth",
    "Unknown in humans",
    "Broad tissue growth in animals; IGF-axis caution",
  ],
];

export const LR3_AE_FULL = [
  [
    "Human LR3 AE incidence",
    "Not established",
    "—",
    "No controlled human LR3 safety denominator",
  ],
  [
    "Hypoglycemia",
    "Foreseeable pharmacologic risk",
    "Sweating, tremor, confusion, seizure, LOC",
    "Animal LR3 + mecasermin class warning — rates not transferable",
  ],
  [
    "Insulin / sulfonylurea stacks",
    "Particularly dangerous",
    "Unpredictable depth/duration of hypo",
    "No controlled human combination study",
  ],
  [
    "Organ / non-muscle growth",
    "Seen in animals",
    "Gut, kidney, spleen, adrenal, etc.",
    "Cannot assume muscle-only effects",
  ],
  [
    "Neoplasia caution",
    "Serious reason for caution",
    "Mecasermin malignancy warnings / contraindication in neoplasia",
    "Does not prove LR3 causes cancer; does not clear risk",
  ],
  [
    "Product quality / immunogenicity",
    "Unresolved for unapproved vials",
    "Identity, sterility, endotoxin, aggregation",
    "“Research use only” ≠ injectable quality standard",
  ],
  [
    "WADA status",
    "Prohibited always",
    "IGF-1 and analogues",
    "Detection methods include Long R3",
  ],
];

export const LR3_EVIDENCE_LADDER = [
  {
    level: "FDA-approved LR3 dosage",
    status: "none",
    detail: "No approved product or indication",
  },
  {
    level: "Human LR3 clinical-trial dosage",
    status: "none",
    detail: "None identified",
  },
  {
    level: "Human LR3 pharmacokinetic dosage",
    status: "none",
    detail: "None identified",
  },
  {
    level: "Animal LR3 dosing",
    status: "moderate-mechanism",
    detail: "Useful within tested species/design — not a human protocol",
  },
  {
    level: "Cell-culture concentration",
    status: "lab-only",
    detail: "Not comparable to a systemic dose",
  },
  {
    level: "Anecdotal fixed daily protocols",
    status: "very-low",
    detail: "20–100 mcg/day — no controlled validation",
  },
  {
    level: "Long-term human dosage and safety",
    status: "unknown",
    detail: "Unknown",
  },
];

export const IGF1_LR3_DOSAGE_GUIDE = {
  title: "IGF-1 LR3 Dosage: Preclinical Research, Reported Protocols, and Safety",
  updated: "Updated August 2026",
  callout:
    "**Research and regulatory notice:** There is currently **no FDA-approved dosage for IGF-1 LR3**. No dedicated human dosing trial was identified. The doses below describe preclinical experiments and separately labeled anecdotal protocols — **not** an established prescribing protocol. IGF-1 LR3 must **not** be confused with FDA-approved **mecasermin (Increlex)**, which is recombinant human IGF-1 rather than the LR3 analogue.",
  intro: [
    "**No human clinical dose has been established.** Published administration studies identified for Long R3 IGF-I were performed in rats, guinea pigs, pigs, marmosets, or other nonhuman models.",
    "Online sources commonly report **20–100 mcg per day** (often **20–50** or **50–100 mcg**). These ranges are community conventions—not doses validated in human trials. A commonly repeated **20–30 hour half-life** was not traceable to authoritative human PK research; rat studies report LR3 is cleared from plasma **more rapidly** than native IGF-1.",
    "“Long” describes a **13-amino-acid N-terminal extension**—not proof of long-acting human pharmacokinetics. Hypoglycemia is a central concern. Combining LR3 with insulin or another glucose-lowering agent is especially hazardous.",
  ],
  glance: {
    title: "IGF-1 LR3 dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**FDA-approved LR3 dosage?**", "No"],
        ["**Human dose-ranging / PK study?**", "None identified"],
        [
          "**Preclinical examples**",
          "e.g. 320–400 mcg/day rats; 120 mcg/day guinea pigs; 180 mcg/kg/day pigs",
        ],
        [
          "**Common online range**",
          "≈20–100 mcg/day (anecdotal)",
        ],
        [
          "**“20–30 hour half-life”**",
          "Not supported by identified human PK; rats: faster clearance than IGF-1",
        ],
        ["**“Long” means**", "Extended sequence — not proven long human t½"],
        ["**≠ Mecasermin**", "Different molecule; do not transfer Increlex dosing"],
        ["**WADA**", "IGF-1 and analogues prohibited at all times"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is IGF-1 LR3?",
      paragraphs: [
        "IGF-1 LR3—also written **Long R3 IGF-I**, **Long [Arg3] IGF-I**, or **LR3IGF-I**—is an engineered analogue of human IGF-1. Native IGF-1 has **70** amino acids; LR3 has **83**: a 13-aa N-terminal extension plus Arg substitution at position 3 (~9.1 kDa).",
        "Modifications substantially reduce binding to several IGFBPs while retaining IGF-1 receptor activity. Three corrections: (1) LR3 is **not** native IGF-1 / mecasermin; (2) reduced IGFBP binding ≠ slow clearance; (3) “Long” is structural, not an established 20–30 hour human half-life.",
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory status",
      paragraphs: [
        "IGF-1 LR3 is not an FDA-approved drug and has no approved indication, label, dosage, or human prescribing information. A UNII / GSRS substance record is an identity entry—not product approval. Commercial Long R3 material is typically supplied for cell-culture or research use and is not approved for human applications. “Research use only” is a sales restriction, not a clinical quality standard.",
      ],
      tables: [
        {
          caption: "Regulatory snapshot",
          headers: ["Question", "Status"],
          rows: [
            ["FDA-approved drug product?", "No"],
            ["FDA-approved human dosage?", "No"],
            ["Dedicated human dose-ranging trial?", "No"],
            ["Permitted in tested sport?", "No — IGF-1 and analogues prohibited (WADA)"],
          ],
        },
      ],
    },
    {
      id: "no-human-dose",
      title: "No human clinical dosage has been established",
      paragraphs: [
        "A search for the exact analogue and common name variants did not identify a prospective human trial in which participants received IGF-1 LR3. Simple body-weight scaling is **not** a valid way to turn animal exposures into a self-administration protocol.",
      ],
      widget: "lr3-human-status",
      highlight:
        "There is currently no FDA-approved dosage for IGF-1 LR3. No human dose calculator is provided because no human dose exists to calculate.",
    },
    {
      id: "not-mecasermin",
      title: "IGF-1 LR3 is not mecasermin",
      paragraphs: [
        "Mecasermin (Increlex) is recombinant human IGF-1 approved for narrow pediatric growth-failure indications. The mecasermin label is a **biological warning signal** (severe hypoglycemia/seizures, hypersensitivity, intracranial hypertension, tissue hypertrophy, neoplasia warnings)—but it cannot set LR3 event rates or doses. Even mecasermin’s ~5.8-hour labeled SC half-life in a small pediatric PK sample does not establish LR3’s half-life.",
      ],
      widget: "lr3-vs-mecasermin",
    },
    {
      id: "mechanism",
      title: "How IGF-1 LR3 works",
      numbered: [
        "**IGF-1 receptor activation.** Downstream PI3K–Akt–mTOR and Ras–MAPK/ERK pathways can affect glucose handling, protein synthesis, survival, proliferation, and tissue growth.",
        "**Reduced IGFBP affinity.** In rat-focused comparisons, native IGF-1 had ~1,000-fold greater affinity than LR3 for several IGFBPs; LR3 was more potent in several endpoints—but potency is endpoint-, species-, and schedule-dependent.",
        "**Insulin-like metabolic activity.** Acute pig/marmoset research found low-IGFBP-affinity analogues had more potent or prolonged hypoglycemic action than native IGF-1—making hypoglycemia a foreseeable hazard.",
      ],
    },
    {
      id: "half-life",
      title: "Half-life: why the 20–30 hour claim is unreliable",
      paragraphs: [
        "Many online pages state a 20–30 hour half-life. No dedicated human PK study supporting that number was identified. Primary rat research reports LR3 is removed from plasma **much more rapidly** than native IGF-1 because of poor IGFBP association—yet it can remain biologically potent because free receptor availability changes.",
      ],
      widget: "lr3-claim-checker",
    },
    {
      id: "preclinical",
      title: "Preclinical dosage used in published research",
      paragraphs: [
        "These are animal experiments, **not** human dosing recommendations. Continuous infusion, intermittent injection, and acute boluses answer different questions. Effects were not restricted to skeletal muscle—gut, kidney, spleen, adrenal, endocrine feedback, and glucose regulation were affected in some models.",
      ],
      widget: "lr3-preclinical-anecdotal",
    },
    {
      id: "research-dosage",
      title: "IGF-1 LR3 research dosage: commonly reported protocols",
      paragraphs: [
        "The commonly reported online range is approximately **20–100 mcg/day**, usually once daily SC or IM, often for 4–6 weeks. The original source of the convention could not be verified. Vial sizes, bodybuilding tradition, and vendor-page copying are more plausible explanations than clinical optimization.",
        "Evidence does **not** establish that 20–100 mcg is safe or effective, that post-workout timing helps, that IM creates localized growth, that 4–6 weeks is optimal, that human half-life is 20–30 hours, or that stacks with GH/insulin/secretagogues are safe.",
      ],
      tables: [
        {
          caption: "Reported online dosage landscape",
          headers: ["", "Summary"],
          rows: [
            ["**Commonly reported range**", "≈20–100 mcg/day"],
            ["**Frequently repeated subsets**", "20–50 or 50–100 mcg/day"],
            ["**Frequency**", "Usually once daily; occasionally split"],
            ["**Route**", "SC and IM described online"],
            ["**Typical duration**", "Often 4–6 weeks ± similar break"],
            ["**Human-trial overlap**", "None identified"],
            ["**Evidence quality**", "Very low"],
          ],
        },
      ],
      notes: [
        "**Insulin combination warning:** Stacking LR3 with insulin or other glucose-lowering agents can make hypoglycemia less predictable and can produce seizure, loss of consciousness, injury, or death. No controlled human study establishes a safe combination protocol.",
      ],
    },
    {
      id: "protocol-variations",
      title: "Research protocol variations",
      numbered: [
        "**SC vs IM.** Animal literature includes SC infusion/injection. Online reports describe both SC and IM. No human study compares absorption, safety, or outcomes. IM is not proven “more targeted.”",
        "**Post-workout timing.** Extrapolation from exercise physiology—not a controlled LR3 timing trial.",
        "**Once-daily vs split.** Often justified by the unsupported long half-life claim. Animal infusion vs injection shows schedule matters—not a human split protocol.",
        "**4–6 week cycles.** No human study established cycle length or required time off.",
        "**“Site-specific” protocols.** Not supported by controlled human evidence.",
        "**Combinations.** Insulin stacks are especially hazardous. GH/secretagogue stacks are unevaluated with LR3 in humans.",
      ],
    },
    {
      id: "why-online",
      title: "Why these reported doses appear online",
      numbered: [
        "**Repetition rather than dose finding** — secondary commercial/community material.",
        "**Confusion with mecasermin** — mg/kg BID pediatric label cannot convert to LR3 mcg.",
        "**Confusion about “Long”** — structural name misread as long-acting PK.",
        "**Convenience and vial size** — packaging arithmetic ≠ pharmacology.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      paragraphs: [
        "IGF-1 LR3 dosing is **not established for human use**. Preclinical literature shows biological activity and potential hazard, but not a therapeutic window in people. Online precision (“start at 20 mcg,” “never exceed 100 mcg”) should not be mistaken for evidence.",
      ],
      widget: "lr3-evidence-ladder",
    },
    {
      id: "dose-escalation",
      title: "Dose escalation",
      paragraphs: [
        "No formal human dose-escalation, MTD, or dose-ranging study was identified. Anecdotal “beginner 20 → advanced 80–100 mcg” sequences have no controlled validation. Because hypoglycemia and broad growth signaling may lack reliable subjective warning, “increase until side effects” is not an evidence-based safety strategy.",
      ],
    },
    {
      id: "safety",
      title: "Safety and tolerability",
      paragraphs: [
        "No controlled human LR3 safety cohort was identified—so claims like “usually mild” or “safe below 100 mcg” lack an adequate denominator. Hypoglycemia is the most immediate concern. Animal experiments report multi-organ weight changes. Mecasermin labeling supplies IGF-axis warning signals (including neoplasia contraindications/warnings) that are relevant caution—not LR3 incidence rates.",
      ],
      widget: "lr3-adverse-events",
    },
    {
      id: "sport",
      title: "Sporting status",
      paragraphs: [
        "WADA prohibits IGF-1 and its analogues at all times. Anti-doping laboratories have developed methods to detect Long R3 IGF-I. A “research” label does not make use permissible for tested athletes.",
      ],
    },
    {
      id: "sourcing",
      title: "Sourcing and origin checks",
      bullets: [
        "Exact LR3 vs native IGF-1 vs mecasermin vs DES?",
        "Human, animal, or in vitro—and which route?",
        "Is “half-life” measured peptide, detection window, or vendor claim?",
        "Does a “human protocol” cite a human LR3 trial—or only general IGF-1 biology?",
        "Is mecasermin dosing being silently relabeled as LR3 guidance?",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "IGF-1 LR3 has no FDA-approved dosage and no dedicated human dose-ranging or PK study identified. The familiar 20–100 mcg daily range, post-workout timing, local IM claims, 4–6 week cycles, and 20–30 hour half-life are online conventions rather than clinical conclusions.",
      ],
      highlight:
        "No human LR3 protocol has been established—the apparent precision of anecdotal numbers does not change that. Mecasermin warns about IGF-1 biology but is a different molecule.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard IGF-1 LR3 dosage?",
        answer:
          "There is no standard or FDA-approved human dosage. Online sources commonly report 20–100 mcg/day, but no dedicated human trial established that range as safe or effective.",
      },
      {
        question: "What IGF-1 LR3 dose has been studied in humans?",
        answer:
          "No prospective human administration or dose-ranging study for exact IGF-1 LR3 was identified. Human mecasermin studies are not LR3 studies.",
      },
      {
        question: "Is 20–50 mcg a research-backed dose?",
        answer:
          "It is a frequently repeated anecdotal range, not a clinically validated dose. Published LR3 administration literature uses animal models and very different experimental exposures.",
      },
      {
        question: "Is 100 mcg the maximum dose?",
        answer:
          "No human maximum tolerated dose has been established. Calling 100 mcg a maximum reflects online convention, not a formal safety boundary.",
      },
      {
        question: "What is the half-life of IGF-1 LR3?",
        answer:
          "The human half-life is unknown. The frequently quoted 20–30 hour figure was not traceable to a dedicated human PK study. Rat data report faster plasma removal than native IGF-1.",
      },
      {
        question: "Why is it called “Long R3”?",
        answer:
          "“Long” refers to the 13-amino-acid N-terminal extension, and “R3” refers to the arginine substitution at position 3. The name does not establish long-acting human pharmacokinetics.",
      },
      {
        question: "Is IGF-1 LR3 the same as Increlex?",
        answer:
          "No. Increlex is mecasermin, recombinant human IGF-1 with the native 70-amino-acid sequence. LR3 is an 83-amino-acid analogue designed to bind IGFBPs poorly.",
      },
      {
        question: "Can the Increlex dose be used for LR3?",
        answer:
          "No. The approved mecasermin dose applies to a specific drug product, pediatric indication, quality standard, monitoring framework, and molecule.",
      },
      {
        question: "Does IGF-1 LR3 build muscle?",
        answer:
          "LR3 can influence growth and protein-related endpoints in animal and cell models. No controlled human trial establishes muscle gain, strength, functional benefit, or an effective dose in healthy adults.",
      },
      {
        question: "Does local IM injection cause site-specific growth?",
        answer:
          "No controlled human evidence establishes site-specific hypertrophy. Systemic distribution and broad tissue responses make a purely local effect biologically implausible as a general rule.",
      },
      {
        question: "Should IGF-1 LR3 be taken after a workout?",
        answer:
          "No controlled human study compared post-workout timing with other schedules. The “post-workout window” is an anecdotal protocol claim.",
      },
      {
        question: "How long is an IGF-1 LR3 cycle?",
        answer:
          "Four to six weeks is commonly reported online, often followed by a similar break. No human study established that cycle length or off-period.",
      },
      {
        question: "Can IGF-1 LR3 be combined with insulin?",
        answer:
          "This is particularly dangerous because both can lower glucose. No controlled human study establishes a safe combination dose, and severe hypoglycemia can cause seizure, unconsciousness, injury, or death.",
      },
      {
        question: "Is IGF-1 LR3 legal in tested sport?",
        answer:
          "No. IGF-1 and its analogues are prohibited by WADA at all times.",
      },
    ],
  },
  sources: {
    title: "Primary references",
    items: [
      {
        authors: "Ballard FJ et al.",
        title:
          "Effects of interactions between IGFBPs and IGFs on plasma clearance and biological activity",
        detail: "Growth Regulation, 1993.",
        href: "https://pubmed.ncbi.nlm.nih.gov/7683526/",
      },
      {
        authors: "Tomas FM et al.",
        title: "Potency of infused IGF-I analogues after injection or continuous infusion in rats",
        detail: "Journal of Endocrinology, 1996.",
        href: "https://pubmed.ncbi.nlm.nih.gov/8708565/",
      },
      {
        authors: "Tomas FM et al.",
        title: "Acute hypoglycemic potency of IGF-I analogues that bind IGFBPs poorly",
        detail: "Journal of Endocrinology, 1997.",
        href: "https://pubmed.ncbi.nlm.nih.gov/9415072/",
      },
      {
        authors: "Conlon MA et al.",
        title: "Long R3 IGF-I infusion, organ growth, and circulating IGF/IGFBP changes in guinea pigs",
        detail: "1995.",
        href: "https://pubmed.ncbi.nlm.nih.gov/7561636/",
      },
      {
        authors: "Dunaiski V et al.",
        title: "Growth and endocrine responses to Long R3 IGF-I in finishing pigs",
        detail: "1997.",
        href: "https://pubmed.ncbi.nlm.nih.gov/9488001/",
      },
      {
        authors: "FDA DailyMed",
        title: "Increlex (mecasermin) prescribing information",
        detail: "Approved rhIGF-1 — not LR3 dosing.",
        href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a8b27a1b-a611-4f91-ad22-76d4b390c3ae",
      },
      {
        authors: "WADA",
        title: "Statement on IGF-1 as a prohibited substance",
        detail: "IGF-1 and analogues prohibited at all times.",
        href: "https://www.wada-ama.org/en/news/wada-statement-prohibited-substance-igf-1",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "There is **no FDA-approved dosage for IGF-1 LR3** and **no dedicated human dose-ranging or pharmacokinetic study** identified.",
      "This page documents preclinical research and commonly reported anecdotal protocols. It is **not** a dosing, reconstitution, cycle, or self-administration guide. **No human dose calculator** is provided.",
      "Hypoglycemia is a central foreseeable hazard. Combining LR3 with insulin or other glucose-lowering agents is especially dangerous. Seek urgent care for severe hypoglycemic symptoms.",
    ],
  },
};

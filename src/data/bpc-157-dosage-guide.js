/**
 * BPC-157 research dosage, results, safety, and FDA-status guide.
 */

export const BPC157_TISSUES = [
  {
    id: "muscle",
    label: "Muscle injury",
    models: "Rat quadriceps transection, crush, myotendinous injury",
    signal:
      "Improved histology, fiber diameter, force/load measures, and motor function in some studies",
    human: "none",
    humanLabel: "No published controlled efficacy result",
    confidence: "Very low",
  },
  {
    id: "tendon",
    label: "Tendon",
    models: "Rat Achilles transection/detachment; cultured tendon fibroblasts",
    signal:
      "Greater load to failure, better organization; increased fibroblast migration/outgrowth",
    human: "none",
    humanLabel: "No tendon-specific controlled human trial",
    confidence: "Very low",
  },
  {
    id: "ligament",
    label: "Ligament",
    models: "Rat medial collateral ligament transection",
    signal: "Reduced instability and improved organization/function in reported models",
    human: "none",
    humanLabel: "None",
    confidence: "Very low",
  },
  {
    id: "tendon-bone",
    label: "Tendon-to-bone",
    models: "Rat Achilles detachment/re-attachment",
    signal:
      "Improved tendon-to-bone healing, including under corticosteroid exposure",
    human: "none",
    humanLabel: "None",
    confidence: "Very low",
  },
  {
    id: "bone",
    label: "Bone",
    models: "Rodent segmental-defect/fracture models",
    signal: "More organized bone formation in limited studies",
    human: "none",
    humanLabel: "None",
    confidence: "Very low",
  },
  {
    id: "knee",
    label: "Knee pain",
    models: "Heterogeneous, unspecified human knee conditions",
    signal:
      "11/12 BPC-only recipients reported improvement; 7/12 reportedly retained relief beyond six months",
    human: "uncontrolled",
    humanLabel: "One uncontrolled retrospective report",
    confidence: "Very low",
  },
  {
    id: "gi",
    label: "Gastrointestinal",
    models: "Rodent ulcer, fistula, bowel, liver, and drug-injury models",
    signal: "Cytoprotection and improved healing reported",
    human: "none",
    humanLabel: "No convincing published randomized therapeutic trial",
    confidence: "Very low",
  },
  {
    id: "bladder",
    label: "Bladder / IC",
    models: "Human symptom report after cystoscopic injections",
    signal: "10/12 reported complete and 2/12 reported 80% symptom resolution",
    human: "uncontrolled",
    humanLabel: "One uncontrolled retrospective report",
    confidence: "Very low",
  },
  {
    id: "nerve",
    label: "Nerve / vascular",
    models: "Rodent nerve, ischemia, thrombosis, and vessel-injury models",
    signal: "Neurofunctional and vascular-modulation signals",
    human: "none",
    humanLabel: "None",
    confidence: "Very low",
  },
];

export const BPC157_HUMAN_EVIDENCE = [
  {
    id: "knee",
    label: "Knee chart review",
    status: "completed",
    controlled: false,
    n: 16,
    detail: "12 BPC-only · 4 combination",
    note: "Subjective pain improvement; no placebo or imaging endpoint",
  },
  {
    id: "ic",
    label: "Interstitial-cystitis chart review",
    status: "completed",
    controlled: false,
    n: 12,
    detail: "12 women · bladder-wall injections",
    note: "Uncontrolled; invasive co-intervention",
  },
  {
    id: "iv",
    label: "IV pilot observation",
    status: "completed",
    controlled: false,
    n: 2,
    detail: "10 mg day 1 · 20 mg day 2",
    note: "Cannot estimate event rates or long-term risk",
  },
  {
    id: "phase1",
    label: "PCO-02 / Bepecin Phase 1",
    status: "planned",
    controlled: false,
    n: 42,
    detail: "Oral safety/PK · NCT02637284",
    note: "No results posted; registry status unknown",
  },
  {
    id: "hamstring",
    label: "Hamstring Phase 2",
    status: "planned",
    controlled: true,
    n: 120,
    detail: "Grade II strain · NCT07437547",
    note: "First registered controlled MSK efficacy study; no results yet",
  },
];

export const BPC157_ROUTES = [
  {
    id: "oral",
    label: "Oral",
    human: "Phase 1 registered; no posted results",
    animal: "Used in multiple rodent GI and MSK experiments",
    unknown: "Human absorption, bioavailability, effective dose, food effects, safety",
  },
  {
    id: "sc",
    label: "Subcutaneous",
    human: "Phase 2 hamstring trial registered; no results",
    animal: "Less central than IP/oral in older animal literature",
    unknown: "Human PK, whether injection location matters, efficacy, AE rates",
  },
  {
    id: "ia",
    label: "Intra-articular",
    human: "One uncontrolled knee-pain chart review",
    animal: "Local administration in some injury models",
    unknown: "Structural healing, placebo-adjusted relief, infection risk, optimal dose",
  },
  {
    id: "iv",
    label: "IV",
    human: "Two-person, two-day laboratory observation",
    animal: "Formal rat and dog PK included IV dosing",
    unknown: "Human half-life, dose proportionality, rare reactions, longer-term safety",
  },
  {
    id: "im",
    label: "Intramuscular",
    human: "No persuasive published clinical efficacy evidence",
    animal: "Rat and beagle-dog pharmacokinetic studies",
    unknown: "Human bioavailability and safety",
  },
  {
    id: "bladder",
    label: "Bladder-wall",
    human: "One 12-person uncontrolled chart review",
    animal: "Not equivalent to musculoskeletal dosing",
    unknown: "Reproducibility, durability, procedural contribution, comparative benefit",
  },
];

export const BPC157_MECHANISM = [
  {
    id: "vegf",
    label: "VEGF–VEGFR2–Akt–eNOS",
    effect: "Endothelial migration and angiogenic signaling",
    level: "cell-animal",
  },
  {
    id: "fak",
    label: "FAK–paxillin",
    effect: "Fibroblast adhesion, spreading, migration",
    level: "cell",
  },
  {
    id: "no",
    label: "Nitric-oxide system",
    effect: "Vascular tone, endothelial function, injury response",
    level: "animal",
  },
  {
    id: "ghr",
    label: "GH receptor expression",
    effect: "Increased receptor expression in tendon fibroblasts",
    level: "cell",
  },
  {
    id: "collagen",
    label: "Collagen / reticulin",
    effect: "More organized repair tissue in injury models",
    level: "animal",
  },
  {
    id: "inflam",
    label: "Inflammatory / oxidative",
    effect: "Reduced injury-associated markers in some models",
    level: "animal",
  },
];

export const BPC157_STUDIES = [
  {
    id: "staresinic-2003",
    name: "Achilles transection healing",
    tissue: "Tendon",
    species: "Rat",
    injury: "Complete Achilles transection",
    route: "Various preclinical",
    year: 2003,
    authors: "Staresinic M et al.",
    result: "Accelerated healing of transected rat Achilles tendon",
    limitation: "Rodent model; not human tendinopathy",
    href: "https://pubmed.ncbi.nlm.nih.gov/14554208/",
  },
  {
    id: "krivic-2006",
    name: "Achilles detachment",
    tissue: "Tendon-to-bone",
    species: "Rat",
    injury: "Achilles detachment",
    route: "Various preclinical",
    year: 2006,
    authors: "Krivic A et al.",
    result: "Improved tendon-to-bone healing measures",
    limitation: "Rodent model under experimental loading",
    href: "https://pubmed.ncbi.nlm.nih.gov/16583442/",
  },
  {
    id: "chang-2011",
    name: "Tendon fibroblast migration",
    tissue: "Tendon",
    species: "Cell",
    injury: "Cultured tendon fibroblasts",
    route: "In vitro",
    year: 2011,
    authors: "Chang CH et al.",
    result: "Increased outgrowth, survival, and migration",
    limitation: "Laboratory cell work; not patient outcomes",
    href: "https://pubmed.ncbi.nlm.nih.gov/21030672/",
  },
  {
    id: "pevec-2010",
    name: "Muscle healing",
    tissue: "Muscle",
    species: "Rat",
    injury: "Muscle injury models",
    route: "Various preclinical",
    year: 2010,
    authors: "Pevec D et al.",
    result: "Improved muscle healing histology/function signals",
    limitation: "Severe experimental injury ≠ human sports recovery",
    href: "https://europepmc.org/article/MED/20190676",
  },
  {
    id: "lee-2021",
    name: "Knee-pain chart review",
    tissue: "Knee pain",
    species: "Human",
    injury: "Heterogeneous knee pain",
    route: "Intra-articular",
    year: 2021,
    authors: "Lee E, Padgett B",
    result: "11/12 BPC-only reported significant improvement",
    limitation: "Uncontrolled, subjective, no imaging endpoint",
    href: "https://pubmed.ncbi.nlm.nih.gov/34324435/",
  },
  {
    id: "lee-2024",
    name: "Interstitial cystitis chart review",
    tissue: "Bladder",
    species: "Human",
    injury: "Interstitial cystitis symptoms",
    route: "Bladder-wall",
    year: 2024,
    authors: "Lee E, Walker K, Ayadi AE",
    result: "10/12 complete and 2/12 80% symptom resolution reported",
    limitation: "Tiny uncontrolled sample; invasive co-intervention",
    href: "https://pubmed.ncbi.nlm.nih.gov/39325560/",
  },
  {
    id: "lee-2025",
    name: "IV pilot safety observation",
    tissue: "Safety",
    species: "Human",
    injury: "None (healthy adults)",
    route: "IV",
    year: 2025,
    authors: "Lee E, Burgess R",
    result: "No reported adverse effects over brief observation",
    limitation: "n=2; cannot detect uncommon or delayed risk",
    href: "https://pubmed.ncbi.nlm.nih.gov/40131143/",
  },
  {
    id: "nct07437547",
    name: "Hamstring Phase 2",
    tissue: "Muscle",
    species: "Human",
    injury: "MRI-confirmed grade II hamstring strain",
    route: "Subcutaneous",
    year: 2025,
    authors: "ClinicalTrials.gov NCT07437547",
    result: "Registered RCT; no results available",
    limitation: "Cannot support a benefit claim until results publish",
    href: "https://clinicaltrials.gov/study/NCT07437547",
  },
  {
    id: "he-2022",
    name: "Rat and dog pharmacokinetics",
    tissue: "PK",
    species: "Rat / Dog",
    injury: "PK / ADME",
    route: "IV / IM",
    year: 2022,
    authors: "He L et al.",
    result: "Unchanged peptide t½ <30 min IV/IM; IM F ≈14–19% rats, 45–51% dogs",
    limitation: "Animal PK ≠ human half-life or dosing interval",
    href: "https://pubmed.ncbi.nlm.nih.gov/36588717/",
  },
];

export const BPC157_REGULATORY = [
  {
    date: "2022",
    title: "WADA S0 listing",
    detail: "BPC-157 added to the S0 Non-Approved Substances category; prohibited at all times.",
  },
  {
    date: "Sep 2023+",
    title: "FDA compounding concerns",
    detail:
      "FDA identifies BPC-157 among bulk substances that may present significant safety risks (immunogenicity, impurities, insufficient safety information).",
  },
  {
    date: "Jul 2026",
    title: "FDA staff recommendation",
    detail:
      "FDA staff recommended against adding BPC-157 free base and acetate to the Section 503A Bulks List.",
  },
  {
    date: "Jul 23, 2026",
    title: "PCAC advisory vote",
    detail:
      "Pharmacy Compounding Advisory Committee voted 8–6 (1 abstention) to recommend inclusion. Nonbinding — not FDA approval.",
  },
  {
    date: "Pending",
    title: "Final FDA determination",
    detail:
      "Final FDA action on 503A listing should be checked before treating compounding eligibility as settled.",
  },
];

export const BPC157_AE_SIMPLE = [
  {
    title: "Overall conclusion",
    takeaway:
      "Promising preclinical biology with unproven clinical benefit and poorly characterized human risk. About 30 people across three uncontrolled reports — far too few to establish safety.",
  },
  {
    title: "“No adverse events reported” ≠ proven safe",
    takeaway:
      "The IV pilot observed two pre-exposed people for a brief period. A study of that size could miss events that occur in 1 of 100 or after months of exposure.",
  },
  {
    title: "FDA compounding concerns",
    takeaway:
      "FDA cites potential immunogenicity for some routes, peptide impurities/aggregation, and insufficient safety information for compounded or online products.",
  },
  {
    title: "Product-quality and infection risk",
    takeaway:
      "Nonsterile or mislabeled injectable material can cause local or systemic harm independent of BPC-157’s pharmacology.",
  },
];

export const BPC157_AE_FULL = {
  headers: ["Dataset", "Exposed people", "Reported AEs", "Why insufficient"],
  rows: [
    [
      "Knee chart review",
      "16 total",
      "Inadequately characterized",
      "Not designed for systematic safety detection",
    ],
    [
      "IC chart review",
      "12",
      "None reported",
      "Small sample, no control, limited follow-up",
    ],
    [
      "IV pilot",
      "2",
      "None reported briefly",
      "Cannot estimate rates or long-term risk",
    ],
    [
      "Randomized human safety DB",
      "None identified",
      "Not available",
      "No robust denominator or surveillance",
    ],
  ],
};

export const BPC157_DOSAGE_GUIDE = {
  title:
    "BPC-157 for Tendon, Ligament & Muscle Injury: Research Dosage, Results, Safety & FDA Status",
  updated: "Updated August 2026",
  callout:
    "**Research-status alert:** BPC-157 is an experimental 15-amino-acid peptide. It is **not FDA approved for any condition**, has **no approved human dosage**, and has not been shown in a randomized published human trial to heal a tendon, ligament, or muscle injury. Most positive findings come from rats or laboratory cells. BPC-157 is also prohibited at all times in tested sport under the World Anti-Doping Agency (WADA) S0 category.",
  intro: [
    "BPC-157 is better described as an **experimental injury-repair peptide** than a muscle-growth peptide. Rat studies report improved healing after experimentally created tendon, ligament, muscle, bone, and nerve injuries, with signals involving blood-vessel formation, fibroblast migration, collagen organization, nitric-oxide signaling, and cell survival. Those results have not established that BPC-157 builds muscle or accelerates sports-injury recovery in people.",
    "Published human evidence consists of three very small, uncontrolled reports—knee injections, bladder-wall injections, and a two-person intravenous safety observation—plus registered trials without published efficacy results. No reliable human half-life, routine subcutaneous protocol, treatment duration, or long-term safety profile is established. Products sold online as “research use only” are not proven to contain the labeled identity, strength, purity, or sterility.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        [
          "**What is it?**",
          "A synthetic 15-amino-acid peptide, sequence **GEPPPGKPADDAGLV**, originally described in gastric-protection research",
        ],
        [
          "**Main research area**",
          "Tissue protection and repair, especially tendon, ligament, muscle-injury, gastrointestinal, vascular, and nerve models",
        ],
        [
          "**Is it a muscle-growth peptide?**",
          "**No proven anabolic or hypertrophy effect in humans**; animal injury studies address restoration after damage, not muscle gain in healthy people",
        ],
        [
          "**Administration studied**",
          "Multiple animal routes; limited human reports used intra-articular, bladder-wall, and IV administration",
        ],
        ["**Human dosage**", "**None established or FDA approved**"],
        [
          "**Strongest evidence**",
          "Repeated positive findings in rodent injury models—not controlled human clinical evidence",
        ],
        [
          "**Known side effects**",
          "Not adequately characterized; small human reports are far too limited to establish safety",
        ],
        [
          "**FDA status**",
          "Not approved; FDA has identified compounding-related safety concerns",
        ],
        ["**Sport status**", "Prohibited at all times under WADA S0"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is BPC-157?",
      paragraphs: [
        "BPC-157—often expanded as “body protection compound 157”—is a synthetic pentadecapeptide with a molecular mass of approximately 1,419.5 Da. It is commonly described as a fragment related to a protective compound identified in gastric juice. That origin story does **not** mean commercial BPC-157 is a naturally extracted supplement or a normal replacement hormone; marketed material is synthetically manufactured.",
        "Unlike growth hormone, IGF-1, or anabolic steroids, BPC-157 has no established endocrine receptor through which it predictably increases muscle protein synthesis. Its proposed effects are pleiotropic and incompletely mapped.",
      ],
    },
    {
      id: "muscle-growth",
      title: "Does BPC-157 Build Muscle?",
      paragraphs: [
        "**BPC-157 has not been shown to increase lean mass, muscle size, strength, or hypertrophy in healthy humans.**",
        "The “muscle growth” label usually comes from rodent studies in which muscle was cut, crushed, denervated, or otherwise severely injured. Treated animals sometimes recovered muscle-fiber diameter, force, or motor function better than controls. Restoring damaged tissue toward baseline is not the same outcome as building additional muscle in an uninjured athlete.",
      ],
      tables: [
        {
          headers: ["Claim", "What was actually measured", "Appropriate conclusion"],
          rows: [
            [
              "“Builds muscle”",
              "No controlled human body-composition or hypertrophy trial",
              "Unsupported",
            ],
            [
              "“Repairs torn muscle”",
              "Improved histology and function in rat transection/crush models",
              "Preclinical signal only",
            ],
            [
              "“Increases strength”",
              "Some animal injury models showed better functional recovery",
              "Not evidence of strength gain in healthy people",
            ],
            [
              "“Speeds recovery”",
              "Animal healing outcomes; human efficacy remains unproven",
              "Plausible research question, not established treatment effect",
            ],
            [
              "“Works at the injection site”",
              "No human study has established site-specific subcutaneous targeting",
              "Unsupported pharmacologic assumption",
            ],
          ],
        },
      ],
    },
    {
      id: "dosage",
      title: "BPC-157 Dosage Used in Human Research",
      paragraphs: [
        "There is **no medically established BPC-157 dosage** for muscle injury, tendon injury, ligament injury, pain, gastrointestinal disease, or any other indication. The exposures below document what specific investigators reported; they are not recommendations and cannot be converted into a self-treatment protocol.",
      ],
      tables: [
        {
          caption: "Reported human research exposures — not dosing recommendations",
          headers: [
            "Study / registry",
            "Population",
            "Reported exposure",
            "Route and duration",
            "Study role",
          ],
          rows: [
            [
              "Lee & Padgett knee-pain chart review (2021)",
              "16 total; 12 BPC-157 alone",
              "Later review reports a single 2–4 µg dose from a 2,000 µg/mL preparation; original report poorly detailed",
              "One intra-articular injection",
              "Exploratory retrospective treatment report",
            ],
            [
              "Lee et al. interstitial-cystitis chart review (2024)",
              "12 women",
              "Ten 1 mg bladder-wall injections, 10 mg total, during one cystoscopic procedure",
              "Intramural bladder injections once",
              "Exploratory retrospective treatment report",
            ],
            [
              "Lee & Burgess IV pilot (2025)",
              "2 previously exposed healthy adults",
              "10 mg on day 1; 20 mg on day 2",
              "IV infusion in saline over one hour on each day",
              "Short laboratory/vital-sign observation—not an efficacy dose study",
            ],
            [
              "PCO-02 / bepecin Phase 1 (NCT02637284)",
              "Planned 42 healthy adults",
              "Multiple oral cohorts registered; no results posted",
              "Oral",
              "Planned safety/pharmacokinetic study; registry status unknown",
            ],
            [
              "Acute grade II hamstring-strain Phase 2 (NCT07437547)",
              "Planned 120 adults",
              "Dose not publicly reported in accessible registry summary",
              "Subcutaneous, once daily for 14 days, plus standardized rehabilitation",
              "Randomized, double-blind, placebo-controlled efficacy trial; no results yet",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "The radically different routes and amounts in these reports show why a single online “BPC-157 dose” is misleading. A bladder-wall procedure, an IV exposure study, a joint injection, an oral investigational product, and a subcutaneous trial are not interchangeable.",
      ],
      subsections: [
        {
          title: "Is there a BPC-157 dose-escalation schedule?",
          paragraphs: [
            "**No validated escalation schedule exists.** The two-day 10 mg-to-20 mg IV sequence in two people was a tiny observational exposure protocol, not a titration plan. Common online regimens such as “200–500 micrograms daily,” dose-per-body-weight calculators, cycling schedules, and reconstitution instructions are not supported by an approved label or a published dose-ranging human efficacy trial.",
            "For that reason, this page does not include a dose calculator, reconstitution calculator, injection map, or personalized schedule.",
          ],
        },
      ],
      widgetAfter: "bpc157-human-dashboard",
    },
    {
      id: "routes",
      title: "Routes Studied: Oral vs Injection vs Local Administration",
      widget: "bpc157-route-matrix",
      paragraphsAfter: [
        "Animal pharmacokinetic research found that unchanged BPC-157 had an elimination half-life below 30 minutes after IV or IM administration. Mean IM bioavailability was approximately 14%–19% in rats and 45%–51% in beagle dogs. These are **animal measurements**, not a human half-life or proof that once-daily human dosing works.",
      ],
    },
    {
      id: "results",
      title: "BPC-157 Results by Tissue Type",
      paragraphs: [
        "The evidence concerns injured tissues recovering toward baseline in experimental models — not muscle gain in healthy athletes.",
      ],
      widget: "bpc157-tissue-map",
      subsections: [
        {
          title: "Muscle-injury research",
          paragraphs: [
            "In rat quadriceps transection and gastrocnemius-crush experiments, BPC-157 was associated with better macroscopic healing, myofibril organization, muscle diameter, force-related measures, or walking/function indices. Some studies tested whether it could oppose healing impairment caused by corticosteroids.",
            "These models deliberately create severe injury and then measure recovery. They do not answer whether BPC-157 increases muscle protein synthesis, improves resistance-training adaptations, or adds lean mass in people. The newly registered Phase 2 hamstring trial is designed to address a clinically relevant injury question using MRI and return-to-sport outcomes, but results are not yet available.",
          ],
        },
        {
          title: "Tendon and ligament research",
          paragraphs: [
            "The best-known rat Achilles-tendon studies reported improved biomechanical and functional healing after complete transection or detachment. Laboratory work also found increased tendon-fibroblast outgrowth, survival, and migration. Rat medial-collateral-ligament models reported improved organization and stability.",
            "Translation is uncertain because rodent healing rates, deliberately created injuries, drug exposure, loading, and rehabilitation differ substantially from human tendinopathy or sports tears. No published randomized human trial has shown faster tendon return to play, stronger repaired tissue, or lower reinjury risk.",
          ],
        },
        {
          title: "Knee-pain result: what the 91.6% figure means",
          tables: [
            {
              headers: [
                "Arm",
                "Participants",
                "Reported improvement",
                "Critical limitations",
              ],
              rows: [
                [
                  "BPC-157 only",
                  "12",
                  "11/12 (91.6%) reported significant improvement",
                  "No placebo, randomization, blinding, standardized diagnosis, validated pain scale, imaging endpoint, or prespecified analysis",
                ],
                [
                  "BPC-157 + thymosin beta-4",
                  "4",
                  "3/4 (75%) reported significant improvement",
                  "Extremely small combination arm; cannot isolate either compound’s effect",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "The 91.6% figure is a responder fraction from a private-practice chart review, not a randomized efficacy rate. Placebo effects, natural symptom fluctuation, regression to the mean, concomitant care, and selection or recall bias could explain part or all of the observation. Pain improvement also does not prove cartilage, tendon, or ligament regeneration.",
          ],
        },
      ],
    },
    {
      id: "research",
      title: "Current Human Clinical Evidence",
      paragraphs: [
        "Human evidence remains limited to uncontrolled chart reviews, a two-person IV observation, and registered trials without published results.",
      ],
      widget: "bpc157-study-explorer",
      subsections: [
        {
          title: "Intra-articular injection for knee pain (2021)",
          paragraphs: [
            "**Authors:** Lee E, Padgett B · **Design:** Retrospective chart review, no control · **Participants:** 16; 12 BPC-157 alone and 4 plus thymosin beta-4 · **Main result:** 11/12 in the BPC-only group reported significant improvement · **Key limitation:** Very small, heterogeneous, uncontrolled and subjective; cannot demonstrate tissue healing or causality",
          ],
        },
        {
          title: "Interstitial cystitis chart review (2024)",
          paragraphs: [
            "**Authors:** Lee E, Walker K, Ayadi AE · **Dose:** Ten 1 mg bladder-wall injections, 10 mg total · **Main result:** 10/12 reported complete and 2/12 reported 80% symptom resolution · **Key limitation:** Tiny uncontrolled sample, subjective outcome, invasive co-intervention",
          ],
        },
        {
          title: "Intravenous pilot safety observation (2025)",
          paragraphs: [
            "**Authors:** Lee E, Burgess R · **Dose:** 10 mg IV day 1 and 20 mg IV day 2 · **Main result:** No reported adverse effects or material laboratory changes · **Key limitation:** Two pre-exposed people and very short follow-up cannot detect uncommon or delayed risk",
          ],
        },
        {
          title: "Hamstring Phase 2 (NCT07437547)",
          paragraphs: [
            "**Design:** Phase 2, randomized, double-blind, placebo-controlled, with standardized rehabilitation · **Planned:** 120 adults with MRI-confirmed acute grade II hamstring strain · **Co-primary endpoints:** Time to unrestricted return to sport and change in MRI injury volume at day 14 · **Current interpretation:** First registered controlled human musculoskeletal efficacy study identified; no results available, so it cannot support a benefit claim.",
          ],
        },
      ],
    },
    {
      id: "side-effects",
      title: "BPC-157 Side Effects and Safety",
      paragraphs: [
        "“No adverse events reported” does not mean “proven safe.” A study of two people, for example, could easily miss an adverse event that occurs in 1 of 100, 1 of 1,000, or after months of exposure.",
      ],
      widget: "bpc157-adverse-events",
      subsections: [
        {
          title: "Important known unknowns and potential risks",
          tables: [
            {
              headers: ["Safety issue", "Evidence status", "Practical meaning"],
              rows: [
                [
                  "Immune reactions / immunogenicity",
                  "FDA identifies a potential risk for some routes",
                  "Repeated exposure to a peptide or aggregates/impurities may trigger immune responses; incidence unknown",
                ],
                [
                  "Peptide impurities and aggregation",
                  "FDA cites API-characterization and impurity complexities",
                  "Active ingredient and degradants may not be consistently characterized in compounded or online products",
                ],
                [
                  "Sterility, endotoxin, and infection",
                  "Product- and injection-related risk",
                  "Nonsterile or mislabeled injectable material can cause local or systemic harm",
                ],
                [
                  "Angiogenesis",
                  "Seen in mechanistic/preclinical work",
                  "Pro-vascular signaling is part of the repair hypothesis but creates unresolved theoretical concern in cancer or pathologic vascular growth",
                ],
                [
                  "Drug interactions",
                  "Not adequately studied",
                  "Interactions with anticoagulants, antiplatelets, cancer therapy, immunomodulators, or other peptides cannot be reliably predicted",
                ],
                [
                  "Reproductive and developmental effects",
                  "No adequate human data",
                  "Safety in pregnancy, breastfeeding, fertility, or childhood is not established",
                ],
                [
                  "Long-term exposure",
                  "No established human dataset",
                  "Delayed immune, proliferative, metabolic, or organ effects remain uncertain",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "Seek urgent medical care for signs of a severe allergic reaction, infection, chest pain, shortness of breath, neurologic symptoms, or other serious symptoms after any injected or compounded product.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How BPC-157 May Work",
      paragraphs: [
        "In laboratory and animal experiments, BPC-157 appears to influence several parts of the injury response at once: formation and organization of small blood vessels, movement and survival of repair cells, collagen remodeling, inflammatory signaling, and communication between nitric oxide and vascular pathways. Researchers have not established one definitive human receptor or pathway that explains all claimed effects.",
      ],
      widget: "bpc157-mechanism",
      paragraphsAfter: [
        "Mechanism data can explain why a trial is worth doing; they cannot substitute for a clinical trial.",
      ],
    },
    {
      id: "compare",
      title: "BPC-157 vs Similar Recovery Options",
      tables: [
        {
          headers: [
            "Option",
            "Proposed role",
            "Human MSK evidence",
            "Regulatory status",
            "Key distinction",
          ],
          rows: [
            [
              "BPC-157",
              "Experimental tissue-repair signaling",
              "One uncontrolled knee-pain report; hamstring RCT pending",
              "Not FDA approved; WADA prohibited",
              "Most evidence is in rodents",
            ],
            [
              "TB-500 / thymosin-beta-4 fragments",
              "Cell migration and repair signaling",
              "No strong published evidence for common sports-injury use",
              "Not FDA approved; prohibited in sport",
              "“Wolverine stack” synergy is unproven",
            ],
            [
              "Platelet-rich plasma (PRP)",
              "Autologous growth-factor concentrate",
              "Condition-specific and mixed; multiple human trials exist",
              "Procedure, not a universal FDA-approved injury drug",
              "Evidence varies by tendon/joint and protocol",
            ],
            [
              "Progressive rehabilitation",
              "Restore load tolerance, strength, and function",
              "Substantial condition-specific clinical evidence",
              "Standard care",
              "Dosing is exercise/load based and diagnosis specific",
            ],
            [
              "HGH / IGF-1 axis drugs",
              "Endocrine/anabolic signaling",
              "Approved only for specific medical indications",
              "Prescription drugs for defined indications",
              "Mechanistically distinct from BPC-157",
            ],
          ],
        },
      ],
      subsections: [
        {
          title: "BPC-157 vs TB-500",
          paragraphs: [
            "BPC-157 and TB-500 are often sold together as a “Wolverine stack,” but there is no reliable human trial showing additive or synergistic healing. Combining two unapproved compounds makes attribution and safety monitoring harder. A 2026 rat Achilles study does not validate a human stack or self-injection protocol.",
          ],
        },
      ],
    },
    {
      id: "evidence-quality",
      title: "Evidence Quality",
      tables: [
        {
          headers: ["Evidence type", "Current strength", "Why"],
          rows: [
            [
              "Human randomized efficacy trials",
              "Insufficient / results pending",
              "A hamstring Phase 2 trial is registered; no result is available",
            ],
            [
              "Other human studies",
              "Very low",
              "About 30 people across three uncontrolled reports with different routes and indications",
            ],
            [
              "Animal musculoskeletal studies",
              "Moderate preclinical consistency",
              "Multiple positive injury models, but concentrated in rodents and overlapping research groups",
            ],
            [
              "Cell / mechanism studies",
              "Hypothesis-supporting",
              "Several plausible pathways; no single validated human target or surrogate",
            ],
            [
              "Human pharmacokinetics",
              "Insufficient",
              "Animal PK cannot define a human half-life or dosing interval",
            ],
            [
              "Human short-term safety",
              "Very low",
              "Tiny, poorly controlled datasets",
            ],
            [
              "Human long-term safety",
              "Unknown",
              "No adequate longitudinal study",
            ],
            [
              "FDA approval",
              "None",
              "No approved indication, formulation, route, or dose",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "The overall conclusion is **promising preclinical biology with unproven clinical benefit and poorly characterized human risk**.",
      ],
    },
    {
      id: "regulatory",
      title: "FDA, Compounding & Research Status",
      paragraphs: [
        "**Is BPC-157 FDA approved?** No. The FDA has not approved BPC-157 for injury recovery, muscle growth, pain, inflammatory bowel disease, interstitial cystitis, or any other use.",
        "FDA has listed BPC-157 among bulk substances that may present significant safety risks when used in compounding, citing potential immunogenicity with some routes, peptide-related impurities and insufficient safety information.",
        "In July 2026, FDA staff recommended against adding BPC-157 free base and acetate to the Section 503A Bulks List. The Pharmacy Compounding Advisory Committee then voted 8–6, with one abstention, to recommend inclusion. That advisory vote is **nonbinding**, does not itself change an FDA approval status, and does not mean BPC-157 was found safe or effective as a drug.",
      ],
      widget: "bpc157-regulatory-timeline",
      bullets: [
        "**Compounded BPC-157 is not FDA approved.** Inclusion on a compounding list, if finalized, would address circumstances under which eligible pharmacies may compound; it would not provide an approved indication or verify clinical benefit.",
        "**Banned in sport:** WADA added BPC-157 to S0 in 2022; it remains prohibited at all times under the 2026 Prohibited List. Athletes are responsible for prohibited substances found in their samples.",
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is BPC-157?",
        answer:
          "BPC-157 is a synthetic 15-amino-acid experimental peptide studied mainly in animal models of tissue injury and gastrointestinal protection.",
      },
      {
        question: "Is BPC-157 a muscle-growth peptide?",
        answer:
          "No. BPC-157 has not been shown to increase human muscle mass or hypertrophy; positive muscle findings come from injured rodents recovering toward baseline.",
      },
      {
        question: "What does BPC-157 do?",
        answer:
          "In preclinical models, BPC-157 influences angiogenesis, fibroblast migration, collagen organization, nitric-oxide signaling, and tissue-protection pathways, but its clinical effects in humans remain unproven.",
      },
      {
        question: "What is the BPC-157 dosage?",
        answer:
          "There is no FDA-approved or evidence-based human BPC-157 dosage for any condition.",
      },
      {
        question: "How often is BPC-157 used?",
        answer:
          "No clinically validated frequency exists. Once-daily schedules commonly advertised online should not be confused with approved dosing evidence.",
      },
      {
        question: "Does BPC-157 need dose escalation?",
        answer: "No validated titration or escalation schedule has been established.",
      },
      {
        question: "Is oral BPC-157 effective?",
        answer:
          "Human oral effectiveness has not been established; a registered oral Phase 1 study has no posted results.",
      },
      {
        question: "Is injectable BPC-157 effective?",
        answer:
          "Injectable BPC-157 has not shown efficacy in a published randomized human trial. Small uncontrolled reports cannot establish benefit.",
      },
      {
        question: "Does injecting near an injury make BPC-157 work locally?",
        answer:
          "No human evidence establishes that a subcutaneous injection near an injury selectively targets or heals that tissue.",
      },
      {
        question: "How long does BPC-157 take to work?",
        answer:
          "No reliable human onset-of-action or healing timeline has been established.",
      },
      {
        question: "What is BPC-157’s half-life?",
        answer:
          "The unchanged peptide’s elimination half-life was below 30 minutes in rats and beagle dogs after IV or IM dosing; a reliable human half-life has not been established.",
      },
      {
        question: "What are BPC-157’s side effects?",
        answer:
          "The true side-effect profile is unknown. FDA highlights potential immune reactions, peptide impurities, and insufficient safety information, while injectable products also carry contamination and infection risks.",
      },
      {
        question: "Can BPC-157 cause cancer?",
        answer:
          "There is no evidence proving that BPC-157 causes cancer in humans, but its pro-angiogenic biology creates an unresolved theoretical concern and long-term human cancer safety has not been studied adequately.",
      },
      {
        question: "Does BPC-157 heal tendons or ligaments?",
        answer:
          "It improved healing measures in several rat tendon and ligament models, but human tendon or ligament healing has not been demonstrated in a controlled trial.",
      },
      {
        question: "Does BPC-157 help knee pain?",
        answer:
          "One small uncontrolled chart review reported improvement in 11 of 12 BPC-only recipients, but the design cannot separate a drug effect from placebo, natural fluctuation, or other bias.",
      },
      {
        question: "Is BPC-157 FDA approved?",
        answer:
          "No. BPC-157 is not FDA approved for any indication, route, formulation, or dosage.",
      },
      {
        question: "Can a compounding pharmacy make BPC-157?",
        answer:
          "Federal compounding policy is under active review as of August 2026. An advisory vote does not equal final FDA action or drug approval; current FDA and state requirements must be checked.",
      },
      {
        question: "Is BPC-157 prohibited for athletes?",
        answer:
          "Yes. BPC-157 is prohibited at all times under WADA’s S0 Non-Approved Substances category.",
      },
      {
        question: "Is the BPC-157 and TB-500 “Wolverine stack” proven?",
        answer:
          "No. No reliable human trial establishes that this combination is effective or safer than either compound alone.",
      },
      {
        question: "What is the best-supported approach to a tendon or muscle injury?",
        answer:
          "Diagnosis-specific care and progressive rehabilitation have far stronger human evidence; urgent evaluation is appropriate for major weakness, deformity, inability to bear weight, neurologic symptoms, fever, or suspected complete rupture.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "FDA",
        title:
          "Certain Bulk Drug Substances for Use in Compounding That May Present Significant Safety Risks",
        detail: "Current FDA safety summary.",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        authors: "FDA",
        title: "July 23–24, 2026 Pharmacy Compounding Advisory Committee meeting",
        detail: "Meeting materials and regulatory review.",
        href: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-pharmacy-compounding-advisory-committee-meeting-announcement-07232026",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "S0 Non-Approved Substances.",
        href: "https://www.wada-ama.org/en/resources/world-anti-doping-code-and-international-standards/prohibited-list",
      },
      {
        authors: "USADA",
        title: "BPC-157: Experimental Peptide Creates Risk for Athletes",
        detail: "Athlete advisory.",
        href: "https://www.usada.org/spirit-of-sport/bpc-157-peptide-prohibited/",
      },
      {
        authors: "McGuire FP, et al.",
        title: "Regeneration or Risk? A Narrative Review of BPC-157 for Musculoskeletal Healing",
        detail: "2025.",
        href: "https://pubmed.ncbi.nlm.nih.gov/40789979/",
      },
      {
        authors: "Staresinic M, et al.",
        title: "Gastric pentadecapeptide BPC 157 accelerates healing of transected rat Achilles tendon",
        detail: "J Orthop Res. 2003.",
        href: "https://pubmed.ncbi.nlm.nih.gov/14554208/",
      },
      {
        authors: "Chang CH, et al.",
        title:
          "The promoting effect of pentadecapeptide BPC 157 on tendon healing involves tendon outgrowth, cell survival, and cell migration",
        detail: "2011.",
        href: "https://pubmed.ncbi.nlm.nih.gov/21030672/",
      },
      {
        authors: "Lee E, Padgett B.",
        title: "Intra-Articular Injection of BPC 157 for Multiple Types of Knee Pain",
        detail: "2021.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34324435/",
      },
      {
        authors: "Lee E, Walker K, Ayadi AE.",
        title: "BPC-157 for Interstitial Cystitis",
        detail: "2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39325560/",
      },
      {
        authors: "Lee E, Burgess R.",
        title: "Safety of Intravenous BPC-157 in Humans: A Pilot Study",
        detail: "2025.",
        href: "https://pubmed.ncbi.nlm.nih.gov/40131143/",
      },
      {
        authors: "He L, et al.",
        title: "Pharmacokinetics, distribution, metabolism, and excretion of BPC157 in rats and dogs",
        detail: "Front Pharmacol. 2022.",
        href: "https://pubmed.ncbi.nlm.nih.gov/36588717/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT07437547: BPC 157 for Acute Hamstring Muscle Strain Repair",
        detail: "Phase 2 registry; no results yet.",
        href: "https://clinicaltrials.gov/study/NCT07437547",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "BPC-157 is an experimental peptide with promising rodent injury-repair biology. It is **not FDA approved**, has **no established human dosage**, and has **not shown efficacy in a published randomized human trial**.",
      "Human safety is poorly characterized. FDA highlights potential immunogenicity, peptide impurities, and insufficient safety information for compounding. Injectable research products also carry sterility and infection risks.",
      "This page is an evidence reference for educational purposes. It is **not a dosing, injection, or self-treatment guide**.",
    ],
  },
};

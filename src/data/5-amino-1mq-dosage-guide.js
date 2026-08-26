/**
 * 5-Amino-1MQ dosage, results, and safety research guide.
 */

export const AMINO1MQ_TRIALS = [
  {
    id: "neelakantan-2018",
    name: "Selective NNMT inhibitors in DIO mice",
    topic: "Body composition",
    species: "Mouse",
    route: "Subcutaneous",
    year: 2018,
    authors: "Neelakantan H et al.",
    journal: "Biochemical Pharmacology, 2018",
    model: "Diet-induced obese mice; differentiated adipocytes",
    dose: "20 mg/kg SC three times daily (key experiment)",
    duration: "11 days",
    result:
      "Reduced body weight, adipose mass, adipocyte size, and cholesterol without reduced food intake",
    limitation: "Small, short mouse study; no human pharmacology or safety",
    href: "https://pubmed.ncbi.nlm.nih.gov/29155147/",
  },
  {
    id: "awosemo-2021",
    name: "Rat PK / oral bioavailability",
    topic: "Pharmacokinetics",
    species: "Rat",
    route: "Oral / IV",
    year: 2021,
    authors: "Awosemo O et al.",
    journal: "Journal of Pharmaceutical and Biomedical Analysis, 2021",
    model: "Rats — LC-MS/MS bioanalytical validation",
    dose: "Study-specific rat oral and IV doses",
    duration: "Short PK sampling period",
    result:
      "Oral bioavailability 38.4%; oral Cmax ≈ 2,252 ng/mL; oral t½ ≈ 6.9 h; IV t½ ≈ 3.8 h",
    limitation: "Rat PK cannot establish human bioavailability, dosage, or efficacy",
    href: "https://pubmed.ncbi.nlm.nih.gov/34304009/",
  },
  {
    id: "dimet-wiley-2022",
    name: "Diet-switch + microbiome",
    topic: "Microbiome",
    species: "Mouse",
    route: "Subcutaneous",
    year: 2022,
    authors: "Dimet-Wiley A et al.",
    journal: "Scientific Reports, 2022",
    model: "Diet-induced obese mice switched to lower-fat diet",
    dose: "32 mg/kg API SC once daily",
    duration: "Approximately 7 weeks",
    result:
      "Drug + lower-fat diet reduced weight/fat beyond diet switch alone; distinct microbiome pattern",
    limitation:
      "Small groups; no treated group kept on Western diet; microbiome associations ≠ causation",
    href: "https://www.nature.com/articles/s41598-021-03670-5",
  },
  {
    id: "babula-2024",
    name: "Obesity-related metabolic dysfunction",
    topic: "Metabolism",
    species: "Mouse",
    route: "Subcutaneous",
    year: 2024,
    authors: "Babula JJ et al.",
    journal: "Diabetes, Obesity and Metabolism, 2024",
    model: "Diet-induced obesity in mice",
    dose: "10 or 32 mg/kg/day SC vs vehicle",
    duration: "28 days",
    result:
      "Dose-dependent limitation of weight/fat gain; improved metabolic and liver measures",
    limitation: "Animal endpoints; no human translation established",
    href: "https://pubmed.ncbi.nlm.nih.gov/39161060/",
  },
  {
    id: "neelakantan-2019",
    name: "Aged muscle-stem-cell regeneration",
    topic: "Muscle",
    species: "Mouse",
    route: "Subcutaneous",
    year: 2019,
    authors: "Neelakantan H et al.",
    journal: "Biochemical Pharmacology, 2019",
    model: "Aged mice with experimental muscle injury",
    dose: "5 or 10 mg/kg/day SC around injury",
    duration: "2 weeks",
    result:
      "Increased muscle-stem-cell activation/proliferation and fusion into regenerating fibers",
    limitation: "Short mouse injury model; no human recovery or sarcopenia endpoint",
    href: "https://pubmed.ncbi.nlm.nih.gov/30753815/",
  },
  {
    id: "dimet-wiley-2024",
    name: "Aged-mouse muscle function + exercise",
    topic: "Muscle",
    species: "Mouse",
    route: "Subcutaneous",
    year: 2024,
    authors: "Dimet-Wiley AL et al.",
    journal: "Scientific Reports, 2024",
    model: "22-month-old female mice",
    dose: "10 mg/kg/day SC",
    duration: "8 weeks",
    result:
      "Improved grip strength and molecular muscle measures; additive effects with exercise",
    limitation: "Aged-mouse model, not a human sarcopenia or recovery trial",
    href: "https://www.nature.com/articles/s41598-024-66034-9",
  },
  {
    id: "akar-2021",
    name: "HeLa cell antiproliferative research",
    topic: "Cancer",
    species: "Cell",
    route: "In vitro",
    year: 2021,
    authors: "Akar S et al.",
    journal: "2021",
    model: "HeLa cells / preclinical tumor models",
    dose: "In-vitro concentrations",
    duration: "Cell assays",
    result:
      "Antiproliferative or pro-apoptotic signals in tumor-cell systems",
    limitation:
      "Does not establish cancer treatment, prevention, or safety in people",
    href: "https://pubmed.ncbi.nlm.nih.gov/33645410/",
  },
];

export const AMINO1MQ_PROTOCOLS = [
  {
    id: "obesity-11d",
    study: "Early DIO obesity",
    species: "Mice",
    model: "Diet-induced obesity",
    route: "Subcutaneous",
    salt: "API as reported",
    dose: "20 mg/kg",
    frequency: "Three times daily",
    duration: "11 days",
    outcome: "Weight ↓, WAT ↓, adipocyte size ↓, cholesterol ↓; food intake unchanged",
  },
  {
    id: "diet-switch",
    study: "Diet-switch + microbiome",
    species: "Mice",
    model: "Western → lower-fat diet",
    route: "Subcutaneous",
    salt: "32 mg/kg API",
    dose: "32 mg/kg",
    frequency: "Once daily",
    duration: "~7 weeks",
    outcome: "Further weight/fat reduction vs diet switch alone; distinct microbiome",
  },
  {
    id: "metabolic-2024",
    study: "2024 metabolic/liver",
    species: "Mice",
    model: "Diet-induced obesity",
    route: "Subcutaneous",
    salt: "API as reported",
    dose: "10 or 32 mg/kg",
    frequency: "Once daily",
    duration: "28 days",
    outcome: "Dose-dependent body-composition and metabolic/liver improvements",
  },
  {
    id: "rat-pk",
    study: "Rat pharmacokinetics",
    species: "Rats",
    model: "PK assay validation",
    route: "Oral and IV",
    salt: "Study-specific",
    dose: "Study-specific",
    frequency: "Single-dose PK",
    duration: "Short sampling",
    outcome: "Oral F ≈ 38.4%; oral t½ ≈ 6.9 h",
  },
  {
    id: "aged-exercise",
    study: "Aged-mouse exercise",
    species: "Mice",
    model: "22-mo female + wheel exercise",
    route: "Subcutaneous",
    salt: "API as reported",
    dose: "10 mg/kg",
    frequency: "Once daily",
    duration: "8 weeks",
    outcome: "Grip strength ↑; additive with exercise",
  },
  {
    id: "injury",
    study: "Aged injury/regeneration",
    species: "Mice",
    model: "Experimental muscle injury",
    route: "Subcutaneous",
    salt: "API as reported",
    dose: "5 or 10 mg/kg",
    frequency: "Daily around injury",
    duration: "2 weeks",
    outcome: "Muscle stem-cell activation and regenerating fiber fusion ↑",
  },
];

export const AMINO1MQ_PRECLINICAL_RESULTS = [
  {
    label: "Body weight",
    pct: 5,
    note: "~5% reduction (secondary summaries)",
    color: "#7c3aed",
  },
  {
    label: "White-fat mass",
    pct: 35,
    note: "~35% lower WAT mass",
    color: "#6d28d9",
  },
  {
    label: "Adipocyte size",
    pct: 30,
    note: ">30% smaller adipocytes",
    color: "#8b5cf6",
  },
  {
    label: "Cholesterol",
    pct: 30,
    note: "~30% lower plasma cholesterol",
    color: "#a78bfa",
  },
];

export const AMINO1MQ_EVIDENCE_LEVELS = [
  {
    id: "biochemical",
    label: "Biochemical",
    summary:
      "NNMT inhibition is well supported in experimental assays (IC50 commonly summarized around 1.2 µM).",
    items: [
      "Competitive inhibition at the nicotinamide-binding region",
      "Reduced 1-methylnicotinamide formation in assay systems",
      "IC50 is not a human dose",
    ],
  },
  {
    id: "cell",
    label: "Cell",
    summary:
      "Useful for mechanism; unable to predict whole-human effects. Includes adipocyte and cancer cell-line work.",
    items: [
      "Adipocyte metabolite and lipogenic changes",
      "HeLa / tumor-cell antiproliferative signals",
      "Do not establish cancer treatment or human weight loss",
    ],
  },
  {
    id: "rat-pk",
    label: "Rat PK",
    summary:
      "Oral exposure in rats is established; human PK remains unknown.",
    items: [
      "Oral bioavailability ≈ 38.4%",
      "Oral Cmax ≈ 2,252 ng/mL",
      "Oral t½ ≈ 6.9 h; IV t½ ≈ 3.8 h",
    ],
  },
  {
    id: "mouse-obesity",
    label: "Mouse obesity",
    summary:
      "Repeated preclinical signal for weight and fat reduction, but small and species-specific.",
    items: [
      "11-day DIO study (20 mg/kg TID SC)",
      "Diet-switch + 32 mg/kg study",
      "2024 dose-response 10 / 32 mg/kg for 28 days",
    ],
  },
  {
    id: "mouse-muscle",
    label: "Mouse muscle",
    summary:
      "Interesting aging/exercise signal without human validation.",
    items: [
      "Aged injury regeneration (5–10 mg/kg)",
      "Aged exercise combination (10 mg/kg × 8 weeks)",
      "Not proof of human recovery or sarcopenia treatment",
    ],
  },
  {
    id: "human",
    label: "Human evidence",
    summary:
      "No completed, results-reported controlled human trial establishing safety or efficacy was identified as of August 2026.",
    items: [
      "No established human dosage",
      "No published human adverse-event rates",
      "Commercial 50–150 mg/day protocols are anecdotal",
    ],
  },
];

export const AMINO1MQ_CLAIM_CHECKER = [
  {
    claim: "Orally bioavailable",
    verdict: "Rats only",
    detail:
      "Demonstrated in rats (~38.4% F). Poor oral bioavailability reported in mice in at least one study. Unknown in humans.",
  },
  {
    claim: "Burns fat without reducing appetite",
    verdict: "Mice only",
    detail:
      "Supported in obese-mouse experiments where food intake was not reduced. Not established in humans.",
  },
  {
    claim: "Preserves muscle",
    verdict: "Not tested in humans",
    detail:
      "Not tested in human weight loss. Aged-mouse muscle-function findings are a different outcome.",
  },
  {
    claim: "Boosts NAD+",
    verdict: "Preclinical / tissue-dependent",
    detail:
      "Model- and tissue-dependent preclinical evidence. No human trial shows clinically meaningful systemic NAD+ increase.",
  },
  {
    claim: "Improves exercise recovery",
    verdict: "Aged-mouse data only",
    detail:
      "Aged-mouse exercise and injury models only. Not human recovery evidence.",
  },
  {
    claim: "FDA-approved peptide",
    verdict: "False",
    detail:
      "Neither FDA approved nor a peptide. It is an experimental quinolinium small molecule.",
  },
];

export const AMINO1MQ_MECHANISM = [
  { id: "nam", label: "Nicotinamide", badge: "Substrate" },
  { id: "sam", label: "SAM", badge: "Methyl donor" },
  { id: "nnmt", label: "NNMT", badge: "Inhibition target", inhibit: true },
  { id: "mna", label: "1-MNA + SAH", badge: "Downstream products" },
  { id: "nad", label: "NAD+ salvage", badge: "Preclinical possibility" },
  { id: "methyl", label: "Methyl-donor balance", badge: "Preclinical possibility" },
];

export const AMINO1MQ_DOSAGE_GUIDE = {
  title:
    "5-Amino-1MQ Dosage, Results & Safety: Complete NNMT Inhibitor Research Guide",
  updated: "Updated August 2026",
  callout:
    "**Research status:** 5-Amino-1MQ is an experimental **small-molecule NNMT inhibitor**, not a peptide and not an FDA-approved drug. No established human dosage, published human efficacy trial, or validated human safety profile exists. Published evidence consists of biochemical experiments, cell studies, pharmacokinetic work in rats, and mouse studies. Commercial oral protocols—often advertised as 50–150 mg/day for 6–12 weeks—are not clinical-trial protocols. In January 2026, FDA specifically stated that 5-Amino-1MQ was not eligible for the section 503B compounding exemptions involved in an enforcement case because it was not on the 503B bulks list or used for a drug on the shortage list.",
  intro: [
    "5-Amino-1MQ—short for **5-amino-1-methylquinolinium**—is a laboratory compound that inhibits nicotinamide N-methyltransferase (NNMT). NNMT uses nicotinamide and the methyl donor S-adenosylmethionine (SAM) to form 1-methylnicotinamide and S-adenosylhomocysteine. Researchers are testing whether inhibiting this reaction changes NAD+ salvage, methyl-donor balance, adipose metabolism, liver metabolism, and age-related muscle function.",
    "Diet-induced obese mice lost weight and fat mass after injected 5-Amino-1MQ in early studies. Later mouse experiments reported dose-related metabolic effects, additive effects with a lower-fat diet, and improvements in muscle function in aged animals. However, **none of these outcomes has been demonstrated in people**. Rat pharmacokinetic data show that oral exposure is possible in that species, but human oral bioavailability is unknown.",
  ],
  glance: {
    title: "30-Second Summary",
    table: {
      headers: ["Question", "Answer"],
      rows: [
        [
          "**What is it?**",
          "A synthetic methylquinolinium small molecule—not a peptide",
        ],
        ["**Main target**", "Nicotinamide N-methyltransferase (NNMT)"],
        [
          "**Proposed research mechanism**",
          "Reduces nicotinamide methylation and alters NAD+ salvage and SAM-dependent metabolism",
        ],
        [
          "**Administration studied**",
          "Primarily subcutaneous injection in mice; oral and IV pharmacokinetics studied in rats",
        ],
        ["**Human dosage**", "None established"],
        [
          "**Human results**",
          "No published controlled human efficacy trials identified",
        ],
        [
          "**Main preclinical finding**",
          "Reduced body weight and adipose mass in diet-induced obese mice",
        ],
        ["**Human side effects**", "Unknown"],
        ["**FDA status**", "Not approved for any indication"],
        [
          "**503B compounding status**",
          "Not on the 503B bulks list; FDA challenged its use by an outsourcing facility in 2026",
        ],
        ["**Evidence level**", "Preclinical"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What Is 5-Amino-1MQ?",
      paragraphs: [
        "5-Amino-1MQ is a positively charged quinolinium-derived small molecule developed as an inhibitor of NNMT. It is often placed in online “peptide” catalogs because it is marketed to the same research and wellness audience, but chemically it is not an amino-acid chain.",
      ],
      tables: [
        {
          headers: ["Property", "Description"],
          rows: [
            ["Full name", "5-amino-1-methylquinolinium"],
            ["Common abbreviations", "5-Amino-1MQ, 5A-1MQ, 5-AMQ, 5MQ"],
            ["Compound class", "Quinolinium small molecule"],
            ["Free-cation formula", "C10H11N2+"],
            ["Free-cation molecular mass", "Approximately 159.21 Da"],
            ["Common research forms", "Chloride, iodide, or other salt forms"],
            ["Primary research target", "NNMT"],
          ],
        },
      ],
      paragraphsAfter: [
        "Salt form matters. The active cation is permanently charged and must be paired with a counterion. The cation, chloride salt, and iodide salt have different total molecular weights. A study reporting milligrams of active pharmaceutical ingredient is not necessarily equivalent to a vendor reporting milligrams of a complete salt.",
      ],
      subsections: [
        {
          title: "Salt forms and active-cation fraction",
          tables: [
            {
              headers: [
                "Form",
                "Approximate molecular mass",
                "Active-cation fraction by mass",
                "Why it matters",
              ],
              align: ["left", "right", "right", "left"],
              rows: [
                [
                  "5-amino-1-methylquinolinium cation",
                  "159.21 g/mol",
                  "100% reference basis",
                  "The pharmacologically relevant ion, but not an isolable neutral “free base”",
                ],
                [
                  "Chloride salt",
                  "194.67 g/mol",
                  "81.8%",
                  "100 mg of chloride salt is not 100 mg of active cation",
                ],
                [
                  "Iodide salt",
                  "286.11 g/mol",
                  "55.6%",
                  "The heavy iodide counterion creates the largest mass difference",
                ],
              ],
            },
          ],
          notes: [
            "Product labels and certificates of analysis should identify the salt and whether the stated quantity refers to total salt or active cation. This is chemistry and quality-control context—not a consumer dose-conversion tool.",
          ],
        },
      ],
      widgetAfter: "amino1mq-claim-checker",
    },
    {
      id: "dosage",
      title: "5-Amino-1MQ Dosage",
      paragraphs: [
        "**There is no established human dosage.** No FDA-approved dose, phase 1 dose-escalation study, maximum tolerated human dose, or peer-reviewed human pharmacokinetic study has established how much 5-Amino-1MQ a person can safely take.",
        "Online protocols commonly describe oral amounts and treatment “cycles,” but those numbers are not supported by controlled human trials. They should be labeled **anecdotal commercial protocols**, not recommended dosage.",
      ],
      subsections: [
        {
          title: "Doses used in published animal research",
          tables: [
            {
              caption: "Animal research exposures — not human instructions",
              headers: [
                "Study context",
                "Species",
                "Route",
                "Experimental exposure",
                "Duration",
                "What it can establish",
              ],
              rows: [
                [
                  "Early diet-induced obesity study",
                  "Mice",
                  "Subcutaneous injection",
                  "20 mg/kg, three times daily in a key experiment",
                  "11 days",
                  "Short-term efficacy in obese mice",
                ],
                [
                  "Diet-switch and microbiome study",
                  "Mice",
                  "Subcutaneous injection",
                  "32 mg/kg active pharmaceutical ingredient once daily",
                  "Approximately 7 weeks",
                  "Effects of drug plus a lower-fat diet in mice",
                ],
                [
                  "2024 metabolic/liver study",
                  "Mice",
                  "Subcutaneous injection",
                  "10 or 32 mg/kg once daily",
                  "28 days",
                  "Dose-response effects on body composition, glucose/insulin measures, and liver pathology",
                ],
                [
                  "Pharmacokinetic assay study",
                  "Rats",
                  "Oral and intravenous",
                  "Study-specific rat doses",
                  "Short PK sampling period",
                  "Rat exposure, bioavailability, and analytical measurement",
                ],
                [
                  "Aged-mouse exercise study",
                  "22-month-old female mice",
                  "Subcutaneous injection",
                  "10 mg/kg once daily",
                  "8 weeks",
                  "Muscle-function effects alone and with progressive weighted-wheel exercise",
                ],
                [
                  "Aged-mouse injury/regeneration study",
                  "Aged mice",
                  "Subcutaneous injection",
                  "5 or 10 mg/kg daily around injury",
                  "2 weeks",
                  "Muscle stem-cell activation and regeneration after experimental injury",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "These are **animal doses**, not human-equivalent instructions. Even body-surface-area conversion would only generate a starting estimate for formal toxicology and phase 1 research; it would not establish a safe consumer dose.",
          ],
        },
      ],
      widgetAfter: "amino1mq-protocol-comparison",
    },
    {
      id: "oral",
      title: "Is 5-Amino-1MQ Oral?",
      paragraphs: [
        "5-Amino-1MQ can produce measurable plasma exposure after oral administration in rats. A validated LC-MS/MS pharmacokinetic study reported an oral bioavailability of **38.4%**, a mean maximum plasma concentration of about **2,252 ng/mL**, and mean terminal half-lives of **6.90 ± 1.20 hours orally** and **3.80 ± 1.10 hours intravenously** under its rat study conditions.",
        'That finding supports the statement **“orally bioavailable in rats.”** It does not support the stronger claims “effective oral therapy in humans” or “proven oral fat-loss compound.”',
      ],
      bullets: [
        "A later mouse study explicitly selected subcutaneous injection because oral bioavailability was poor in mice.",
        "The same paper noted that this poor oral bioavailability was not observed in rats.",
        "No published human oral bioavailability, food-effect, dose-proportionality, or steady-state study was identified.",
      ],
      paragraphsAfter: [
        'Any page calling 5-Amino-1MQ “a uniquely oral peptide” without these qualifications overstates the evidence twice: it is not a peptide, and human oral performance has not been established.',
      ],
    },
    {
      id: "dose-escalation",
      title: "Why No Dose-Escalation Chart Is Provided",
      paragraphs: [
        "A titration chart would imply a human protocol that does not exist. There are no verified human starting-dose groups, escalation intervals, maintenance doses, or stopping rules. MyPepFinder does not convert vendor schedules into a clinical-looking timeline.",
        "The legitimate dose-response information belongs in the preclinical study tables, with species, route, salt form, and duration visible.",
      ],
    },
    {
      id: "results",
      title: "5-Amino-1MQ Results",
      paragraphs: [
        "Secondary summaries often quote roughly **5% body-weight reduction**, approximately **35% lower white-fat mass**, more than **30% smaller adipocytes**, and around **30% lower cholesterol** from early obese-mouse work. Those estimates describe small mouse cohorts and should not be presented as expected human results.",
      ],
      widget: "amino1mq-preclinical-chart",
      subsections: [
        {
          title: "Early diet-induced obesity study",
          paragraphs: [
            "Neelakantan and colleagues first characterized 5-Amino-1MQ as a selective, cell-permeable NNMT inhibitor and tested it in diet-induced obese mice.",
          ],
          tables: [
            {
              headers: ["Study feature", "Finding"],
              rows: [
                ["Model", "Diet-induced obese mice"],
                ["Key regimen", "20 mg/kg subcutaneously three times daily"],
                ["Duration", "11 days"],
                [
                  "Body weight",
                  "Treated mice lost weight while vehicle animals gained weight",
                ],
                [
                  "White adipose tissue",
                  "Reduced adipose mass and smaller adipocytes",
                ],
                ["Food intake", "No meaningful reduction reported"],
                [
                  "Lean mass",
                  "Not reported as the driver of weight change",
                ],
                ["Plasma cholesterol", "Reduced in the experimental model"],
              ],
            },
          ],
          paragraphsAfter: [
            'The absence of reduced food intake suggests the effect was not simply appetite suppression in that model. It does not prove that 5-Amino-1MQ “burns fat without dieting” in humans.',
          ],
        },
        {
          title: "Diet-switch and microbiome study",
          paragraphs: [
            "Dimet-Wiley and colleagues studied obese mice moved from a Western diet to a lower-fat diet. One group received vehicle; another received 32 mg/kg 5-Amino-1MQ subcutaneously each day for about seven weeks.",
          ],
          tables: [
            {
              headers: [
                "Outcome",
                "Lower-fat diet + vehicle",
                "Lower-fat diet + 5-Amino-1MQ",
              ],
              rows: [
                [
                  "Body weight",
                  "Fell relative to Western-diet control",
                  "Fell further and became statistically indistinguishable from lean controls at study completion",
                ],
                [
                  "Fat mass",
                  "Reduced",
                  "Reduced further and approached lean-control values",
                ],
                [
                  "Microbiome",
                  "Diet-associated changes",
                  "Distinct profile, including higher Lactobacillus and lower Erysipelatoclostridium than diet-switch vehicle animals",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "This study cannot isolate every drug effect because the treated group also underwent a major diet change. Microbiome findings were exploratory and do not establish a probiotic-like mechanism in people.",
          ],
        },
        {
          title: "2024 metabolic-dysfunction study",
          tables: [
            {
              headers: ["Evidence question", "Answer"],
              rows: [
                [
                  "Was there a dose response?",
                  "The study reported dose-dependent effects in mice",
                ],
                [
                  "What were the efficacy arms?",
                  "10 or 32 mg/kg/day subcutaneously versus vehicle for 28 days",
                ],
                [
                  "Was food intake the explanation?",
                  "Changes were not explained simply by reduced food intake",
                ],
                [
                  "Were metabolic measures assessed?",
                  "Yes: fed insulin, OGTT, insulin sensitivity, liver triglycerides, histology, ALT, AST, and ketone bodies",
                ],
                [
                  "What happened to liver pathology?",
                  "Less steatosis and macrophage infiltration, smaller/lighter livers, lower liver triglycerides",
                ],
                ["Does it establish human weight loss?", "No"],
                ["Does it establish long-term human liver safety?", "No"],
              ],
            },
          ],
        },
        {
          title: "Muscle function in aged mice",
          tables: [
            {
              headers: ["Group", "Preclinical finding"],
              rows: [
                ["Sedentary control", "Reference condition"],
                [
                  "5-Amino-1MQ without training",
                  "Improved grip strength and altered muscle molecular profiles",
                ],
                [
                  "Exercise alone",
                  "Improved strength and running performance",
                ],
                [
                  "Exercise + 5-Amino-1MQ",
                  "Produced additive improvements in several functional measures",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "The study used 22-month-old female mice given 10 mg/kg/day subcutaneously for eight weeks. Findings are hypothesis-generating and do not prove improved strength, recovery, sarcopenia treatment, or muscle preservation in humans.",
          ],
        },
        {
          title: "Muscle regeneration after injury in aged mice",
          paragraphs: [
            "A separate 2019 study administered 5 or 10 mg/kg/day subcutaneously around an experimental muscle injury. NNMT inhibition increased aged muscle-stem-cell proliferation and subsequent fusion into regenerating fibers. This is a controlled mouse injury model—not evidence that the compound accelerates gym recovery, heals human tendon injuries, or treats sarcopenia.",
          ],
        },
        {
          title: "Does 5-Amino-1MQ preserve muscle during weight loss?",
          paragraphs: [
            'No human study has tested whether 5-Amino-1MQ preserves lean mass during dieting or GLP-1 treatment. Connecting mouse fat-loss and aged-muscle studies into a claim that it “prevents GLP-1 muscle loss” is an unsupported extrapolation.',
            "No controlled study was identified for a 5-Amino-1MQ plus semaglutide or tirzepatide combination.",
          ],
        },
      ],
    },
    {
      id: "side-effects",
      title: "5-Amino-1MQ Side Effects",
      paragraphs: [
        "**Human side effects are unknown.** There is no reliable human adverse-event table. Headache, nausea, fatigue, insomnia, anxiety, heart-rate changes, or appetite changes sometimes listed online are anecdotal claims, not rates from a controlled 5-Amino-1MQ trial.",
      ],
      tables: [
        {
          headers: ["Safety question", "Current evidence"],
          rows: [
            ["Common human adverse events", "Unknown"],
            ["Serious human adverse events", "Unknown"],
            ["Maximum tolerated human dose", "Unknown"],
            ["Human liver safety", "Unknown"],
            ["Human kidney safety", "Unknown"],
            ["Cardiovascular safety", "Unknown"],
            ["Drug interactions", "Not systematically studied"],
            ["Pregnancy and reproductive safety", "Unknown"],
            [
              "Carcinogenicity and genotoxicity program",
              "No complete public human-development package identified",
            ],
            [
              "Neurologic/psychiatric safety",
              "Unknown; stimulation/focus/insomnia claims are anecdotal",
            ],
            ["Long-term safety", "Unknown"],
          ],
        },
      ],
      subsections: [
        {
          title: "What animal tolerability can—and cannot—tell us",
          paragraphs: [
            "Published mouse studies did not report an obvious pattern of acute toxicity at the regimens used, and body-weight effects were not driven by reduced food intake. That is weaker than a formal safety conclusion. Small efficacy experiments may miss uncommon events, organ toxicity, reproductive effects, immune effects, or harms that emerge only after long exposure.",
          ],
        },
        {
          title: "Mechanism-based uncertainties",
          paragraphs: [
            "NNMT sits at the intersection of nicotinamide handling, NAD+ salvage, and one-carbon metabolism. Inhibiting it can change nicotinamide and 1-methylnicotinamide concentrations, NAD+ availability in a tissue-dependent manner, SAM and S-adenosylhomocysteine balance, methyl-donor availability, and adipose, liver, muscle, stromal, and tumor-cell metabolism.",
            "These changes are why NNMT is scientifically interesting—and why long-term systemic inhibition should not automatically be assumed safe.",
          ],
        },
        {
          title: "Product-quality risk",
          paragraphs: [
            "Products sold online may use different salts, concentrations, excipients, or purity specifications. A certificate of analysis does not establish clinical sterility, human safety, accurate pharmacokinetics, or regulatory approval. Research-grade labeling generally means the material was not approved for human use.",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      title: "How 5-Amino-1MQ Works",
      paragraphs: [
        "NNMT normally attaches a methyl group to nicotinamide. That reaction consumes nicotinamide that could otherwise participate in the NAD+ salvage pathway and uses SAM, a major cellular methyl donor. 5-Amino-1MQ blocks NNMT in laboratory models, reducing this metabolic diversion.",
      ],
      widget: "amino1mq-mechanism",
      subsections: [
        {
          title: "Technical mechanism",
          tables: [
            {
              headers: ["Target or pathway", "Proposed preclinical effect"],
              rows: [
                [
                  "NNMT enzyme",
                  "Competitive inhibition at the nicotinamide-binding region",
                ],
                [
                  "Nicotinamide → 1-MNA reaction",
                  "Reduced formation of 1-methylnicotinamide",
                ],
                [
                  "NAD+ salvage",
                  "More nicotinamide may remain available for recycling toward NAD+",
                ],
                [
                  "SAM/SAH metabolism",
                  "Less SAM consumed by NNMT, altering methyl-donor balance",
                ],
                [
                  "Adipocyte metabolism",
                  "Reduced lipogenic activity and changes in adipose metabolites in experimental systems",
                ],
                [
                  "Muscle metabolism",
                  "Proteomic and metabolomic changes associated with better function in aged mice",
                ],
              ],
            },
          ],
          paragraphsAfter: [
            "The early biochemical paper reported an NNMT inhibitory concentration in the low-micromolar range, commonly summarized as an IC50 around **1.2 µM**. IC50 is not a human dose.",
          ],
        },
        {
          title: "A necessary correction about NAD+",
          paragraphs: [
            'It is too strong to say that 5-Amino-1MQ universally “boosts NAD+.” NNMT inhibition altered NAD+-related metabolites in adipocyte and animal models, but the direction and importance of effects can depend on tissue, baseline NNMT expression, substrate availability, and disease state. No human trial has shown that taking the compound raises whole-body NAD+ or improves a clinical outcome through that pathway.',
          ],
        },
      ],
    },
    {
      id: "compare",
      title: "5-Amino-1MQ vs Related Compounds",
      tables: [
        {
          headers: [
            "Compound",
            "Type",
            "Mechanism",
            "Human evidence",
            "Regulatory status",
          ],
          rows: [
            [
              "5-Amino-1MQ",
              "Small-molecule NNMT inhibitor",
              "Reduces nicotinamide methylation",
              "No published controlled efficacy trial identified",
              "Not FDA approved",
            ],
            [
              "Nicotinamide riboside (NR)",
              "Vitamin B3 derivative",
              "NAD+ precursor",
              "Multiple human pharmacokinetic and clinical studies",
              "Sold as a dietary supplement in the U.S.",
            ],
            [
              "Nicotinamide mononucleotide (NMN)",
              "NAD+ intermediate",
              "NAD+ precursor",
              "Early human studies; clinical benefit remains uncertain",
              "Not an approved anti-aging drug",
            ],
            [
              "Semaglutide",
              "Peptide GLP-1 agonist",
              "Appetite, gastric emptying, insulin/glucagon signaling",
              "Extensive phase 3 and outcomes evidence",
              "FDA approved for specific indications",
            ],
            [
              "Tirzepatide",
              "Peptide GIP/GLP-1 agonist",
              "Dual incretin signaling",
              "Extensive phase 3 and outcomes evidence",
              "FDA approved for specific indications",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "5-Amino-1MQ attempts to reduce a metabolic “drain,” while NR and NMN supply NAD+ precursors. Calling these approaches complementary is mechanistically plausible but clinically untested. No controlled human evidence supports stacking 5-Amino-1MQ with NAD+, NMN, NR, semaglutide, tirzepatide, or another metabolic compound.",
      ],
    },
    {
      id: "research",
      title: "Clinical Evidence",
      paragraphs: [
        "**No published human clinical efficacy study identified.** As of August 2026, searches of the peer-reviewed literature and ClinicalTrials.gov did not identify a completed, results-reported human trial establishing the safety or efficacy of 5-Amino-1MQ. The evidence summaries below are therefore preclinical.",
      ],
      widget: "amino1mq-evidence-navigator",
      widgetAfter: "amino1mq-trial-explorer",
    },
    {
      id: "evidence-quality",
      title: "Evidence Quality",
      tables: [
        {
          headers: ["Evidence type", "Strength", "Interpretation"],
          rows: [
            [
              "Biochemical target-engagement studies",
              "Moderate preclinical",
              "NNMT inhibition is well supported in experimental assays",
            ],
            [
              "Cell studies",
              "Low for clinical inference",
              "Useful for mechanism, unable to predict whole-human effects",
            ],
            [
              "Rodent pharmacokinetics",
              "Low to moderate preclinical",
              "Oral exposure in rats is established; human PK remains unknown",
            ],
            [
              "Mouse obesity studies",
              "Low for human efficacy",
              "Repeated preclinical signal, but small and species-specific",
            ],
            [
              "Mouse muscle studies",
              "Low for human efficacy",
              "Interesting aging/exercise signal without human validation",
            ],
            [
              "Human observational NNMT biology",
              "Indirect",
              "NNMT associations do not prove that this inhibitor is beneficial",
            ],
            [
              "Human randomized trials",
              "None identified",
              "No established efficacy or safety",
            ],
            [
              "Long-term safety",
              "Unknown",
              "No adequate human dataset",
            ],
            [
              "FDA approval",
              "No",
              "No approved indication or dosage",
            ],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "Regulatory and Compounding Status",
      paragraphs: [
        "5-Amino-1MQ is not FDA approved. FDA substance-database entries identify chemical substances; an entry is not approval for human use.",
        "In a January 2026 warning letter, FDA stated that drug products compounded by an outsourcing facility using 5-Amino-1MQ were not eligible for section 503B exemptions because the substance did not appear on the 503B bulks list and was not being used to compound a drug on the shortage list. This is important evidence against marketing 5-Amino-1MQ as an ordinary, FDA-sanctioned compounded medication.",
      ],
      bullets: [
        "“Not FDA approved” is accurate.",
        "“Appears in an FDA substance database” does not mean approved.",
        "A pharmacy label does not create clinical evidence.",
        "“Compounded” does not mean FDA reviewed for safety, effectiveness, or quality.",
        "“Research use only” does not authorize human administration.",
      ],
      subsections: [
        {
          title: "Sports status",
          paragraphs: [
            "5-Amino-1MQ is not necessarily named individually on WADA's list, but WADA's **S0 Non-Approved Substances** category covers pharmacological substances with no current approval by a governmental health authority for human therapeutic use when not addressed elsewhere. Competitive athletes should therefore treat 5-Amino-1MQ as prohibited and obtain guidance from their anti-doping organization rather than relying on a seller or clinic.",
          ],
        },
      ],
    },
  ],
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "What is 5-Amino-1MQ?",
        answer:
          "5-Amino-1MQ is an experimental small molecule that inhibits nicotinamide N-methyltransferase, or NNMT.",
      },
      {
        question: "Is 5-Amino-1MQ a peptide?",
        answer:
          "No. It is a methylquinolinium small molecule and contains no peptide amino-acid chain.",
      },
      {
        question: "What does 5-Amino-1MQ do?",
        answer:
          "In laboratory models, it inhibits NNMT and changes nicotinamide, NAD+-salvage, SAM/SAH, adipose, and muscle metabolism.",
      },
      {
        question: "Does 5-Amino-1MQ work for weight loss?",
        answer:
          "It reduced body weight and fat mass in obese mice, but human weight-loss efficacy has not been established.",
      },
      {
        question: "What is the human dosage of 5-Amino-1MQ?",
        answer:
          "There is no established human dosage because no adequate human dose-ranging or safety trial has been published.",
      },
      {
        question: "Is 50–150 mg per day a clinically studied dosage?",
        answer:
          "No. The commonly marketed 50–150 mg/day oral schedules are commercial or community protocols, not doses validated in published human trials.",
      },
      {
        question: "Is 5-Amino-1MQ taken orally?",
        answer:
          "It is orally bioavailable in rats, poorly orally bioavailable in mice in at least one report, and uncharacterized orally in humans.",
      },
      {
        question: "Why do clinics sell 5-Amino-1MQ capsules?",
        answer:
          "Commercial availability reflects marketplace practice, not proof of FDA approval, human bioavailability, safety, or efficacy.",
      },
      {
        question: "What are the side effects of 5-Amino-1MQ?",
        answer:
          "Human side effects and their frequencies are unknown because controlled human safety data are absent.",
      },
      {
        question: "Does 5-Amino-1MQ increase heart rate?",
        answer:
          "The published preclinical literature does not establish a consistent heart-rate signal, but the effect has not been adequately studied in humans.",
      },
      {
        question: "Does 5-Amino-1MQ suppress appetite?",
        answer:
          "Early obese-mouse experiments reported weight and fat loss without lower food intake, so appetite suppression did not appear to explain those results.",
      },
      {
        question: "Does 5-Amino-1MQ raise NAD+?",
        answer:
          "It altered NAD+-related metabolism in cells and animals, but no human trial has established a clinically meaningful systemic NAD+ increase.",
      },
      {
        question: "Does 5-Amino-1MQ preserve muscle?",
        answer:
          "No human evidence shows muscle preservation during weight loss; aged-mouse studies reported improved muscle function, which is not the same outcome.",
      },
      {
        question: "Can 5-Amino-1MQ be combined with semaglutide or tirzepatide?",
        answer:
          "No controlled evidence establishes the safety or benefit of combining 5-Amino-1MQ with a GLP-1-based medication.",
      },
      {
        question: "How quickly does 5-Amino-1MQ work?",
        answer:
          "Mouse experiments reported changes over 11 days to several weeks, but there is no established human onset time.",
      },
      {
        question: "What is the half-life of 5-Amino-1MQ?",
        answer:
          "A rat study reported an oral elimination half-life around 6.9 hours; a human half-life has not been established.",
      },
      {
        question: "Is 5-Amino-1MQ FDA approved?",
        answer:
          "No. It is not FDA approved for weight loss, longevity, muscle function, or any other indication.",
      },
      {
        question: "Is compounded 5-Amino-1MQ FDA approved?",
        answer:
          "No. Compounded drugs are not FDA-approved products, and FDA has specifically challenged 503B compounding with 5-Amino-1MQ.",
      },
      {
        question: "Is 5-Amino-1MQ safe?",
        answer:
          "Human safety is unknown; small animal efficacy studies cannot establish a safe human dose or long-term risk profile.",
      },
      {
        question: "Is 5-Amino-1MQ prohibited in sport?",
        answer:
          "It should be treated as prohibited under WADA's S0 category for non-approved pharmacological substances; athletes should verify status directly with their anti-doping organization.",
      },
      {
        question: "Is 5-Amino-1MQ an anti-aging drug?",
        answer:
          "No. Research on NAD+-related metabolism and aged mice does not establish slower aging or longer healthspan in humans.",
      },
      {
        question: "Does 5-Amino-1MQ treat cancer?",
        answer:
          "No. Cell and animal oncology findings are preclinical and do not establish cancer treatment in people.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Neelakantan H et al.",
        title:
          "Selective and membrane-permeable small molecule inhibitors of NNMT reverse high-fat-diet-induced obesity in mice.",
        detail: "Biochemical Pharmacology. 2018.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29155147/",
      },
      {
        authors: "PMC",
        title: "Full text of the foundational NNMT-inhibitor study",
        detail: "PMC5826726.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5826726/",
      },
      {
        authors: "Awosemo O et al.",
        title:
          "LC-MS/MS assay and rat pharmacokinetics of 5-amino-1-methylquinolinium.",
        detail: "Journal of Pharmaceutical and Biomedical Analysis. 2021.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34304009/",
      },
      {
        authors: "Dimet-Wiley A et al.",
        title:
          "Reduced calorie diet combined with NNMT inhibition establishes a distinct microbiome in DIO mice.",
        detail: "Scientific Reports. 2022.",
        href: "https://www.nature.com/articles/s41598-021-03670-5",
      },
      {
        authors: "Babula JJ et al.",
        title: "NNMT inhibition mitigates obesity-related metabolic dysfunction.",
        detail: "Diabetes, Obesity and Metabolism. 2024.",
        href: "https://pubmed.ncbi.nlm.nih.gov/39161060/",
      },
      {
        authors: "Dimet-Wiley AL et al.",
        title:
          "NNMT inhibition mimics and boosts exercise-mediated improvements in muscle function in aged mice.",
        detail: "Scientific Reports. 2024.",
        href: "https://www.nature.com/articles/s41598-024-66034-9",
      },
      {
        authors: "Neelakantan H et al.",
        title:
          "NNMT inhibition activates senescent muscle stem cells and improves regenerative capacity of aged skeletal muscle.",
        detail: "Biochemical Pharmacology. 2019.",
        href: "https://pubmed.ncbi.nlm.nih.gov/30753815/",
      },
      {
        authors: "Akar S et al.",
        title:
          "Small molecule inhibitor of NNMT shows antiproliferative activity in HeLa cells.",
        detail: "2021.",
        href: "https://pubmed.ncbi.nlm.nih.gov/33645410/",
      },
      {
        authors: "U.S. Food and Drug Administration",
        title: "Warning letter discussing 5-Amino-1MQ compounding",
        detail: "Genogenix LLC, January 2026.",
        href: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/genogenix-llc-718739-01202026",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "Search for 5-Amino-1MQ",
        detail: "No completed results-reported efficacy trial identified.",
        href: "https://clinicaltrials.gov/search?term=5-Amino-1MQ",
      },
      {
        authors: "World Anti-Doping Agency",
        title: "WADA 2026 Prohibited List",
        detail: "S0 Non-Approved Substances category.",
        href: "https://www.wada-ama.org/en/resources/world-anti-doping-code-and-international-standards/prohibited-list",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "5-Amino-1MQ is an experimental small-molecule NNMT inhibitor with preclinical metabolic and muscle signals in rodents. It is **not** a peptide, **not** FDA approved, and has **no established human dosage**.",
      "Commercial oral protocols and clinic capsules are marketplace practice, not clinical-trial regimens. Human side effects, bioavailability, and efficacy remain unknown.",
      "This page describes research for educational purposes. It is **not individualized medical advice**.",
    ],
  },
};

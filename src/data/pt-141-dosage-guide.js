/**
 * PT-141 (Bremelanotide / Vyleesi) dosage, results, and safety guide.
 * FDA-approved 1.75 mg SC autoinjector · premenopausal acquired generalized HSDD only.
 * Phase 3: modest desire/distress improvement · SSE not improved · nausea 40%.
 */

export const PT141_IDENTITY = [
  {
    id: "pt141",
    label: "PT-141",
    verdict: "Development/research name for bremelanotide — not a product quality label",
    detail:
      "Common marketplace shorthand. A vial, nasal spray, or product sold as “PT-141” has not automatically demonstrated equivalent concentration, absorption, stability, sterility, or clinical performance to Vyleesi.",
  },
  {
    id: "bremelanotide",
    label: "Bremelanotide",
    verdict: "International nonproprietary name for the active cyclic heptapeptide",
    detail:
      "Synthetic cyclic heptapeptide · nonselective melanocortin-receptor agonist. Label potency order: MC1R, MC4R, MC3R, MC5R, then MC2R.",
  },
  {
    id: "vyleesi",
    label: "Vyleesi",
    verdict: "FDA-approved drug-device product — 1.75 mg/0.3 mL SC autoinjector",
    detail:
      "Sterile, fixed-dose, FDA-reviewed product for acquired, generalized HSDD in premenopausal women. Contains 1.75 mg bremelanotide (~1.89 mg bremelanotide acetate) in 0.3 mL.",
  },
  {
    id: "compounded",
    label: "Compounded “PT-141” vial or nasal spray",
    verdict: "Not FDA-approved · not established equivalent to Vyleesi",
    detail:
      "May differ in free-base vs acetate mass, assay, impurities, concentration, sterility, stability, excipients, pH, device delivery, and bioavailability. Approval of Vyleesi does not transfer.",
  },
];

export const PT141_APPROVAL_BOUNDARIES = [
  {
    id: "approved",
    label: "FDA-reviewed evidence",
    status: "approved",
    population: "Premenopausal women with acquired, generalized HSDD causing marked distress",
    detail:
      "Must meet Vyleesi label criteria — not explained by another condition, relationship problem, medication, or drug. Two 24-week phase 3 RECONNECT trials (n=1,267 randomized).",
  },
  {
    id: "postmenopausal",
    label: "Postmenopausal women with HSDD",
    status: "gray",
    population: "Not an approved Vyleesi population",
    detail:
      "Adequate confirmatory evidence for this use has not been established. Flibanserin (Addyi) label now covers qualifying women under 65, including some postmenopausal women — different product.",
  },
  {
    id: "men",
    label: "Men",
    status: "gray",
    population: "No FDA-approved male indication or established contemporary dose",
    detail:
      "Small early subcutaneous and intranasal studies showed objective erectile-response signals — preliminary only. Online 1–2 mg SC protocols are not validated male regimens.",
  },
  {
    id: "ed",
    label: "Isolated erectile dysfunction",
    status: "gray",
    population: "Not approved for ED in men or women",
    detail:
      "Bremelanotide acts centrally through melanocortin receptors — not as a PDE5 inhibitor. Early male RigiScan studies do not establish ED treatment.",
  },
  {
    id: "enhancement",
    label: "General libido or performance enhancement",
    status: "gray",
    population: "Not established in controlled trials for general enhancement",
    detail:
      "Phase 3 evidence supports modest desire and distress improvement in a defined disorder — not a universal aphrodisiac effect.",
  },
  {
    id: "situational",
    label: "Situational or relationship-specific low desire",
    status: "gray",
    population: "Trial population required generalized HSDD for ≥6 months",
    detail:
      "Results cannot automatically be assigned to situational low desire, medication-induced dysfunction, or untreated psychiatric/endocrine conditions.",
  },
];

export const PT141_PHASE3_OUTCOMES = [
  {
    id: "desire-s1",
    outcome: "FSFI desire score, mean change",
    study: "Study 1",
    active: "+0.5",
    placebo: "+0.2",
    scale: "1.2–6.0 scale",
    significant: true,
    interpretation: "Statistically significant; placebo-adjusted advantage ~0.3 points",
  },
  {
    id: "desire-s2",
    outcome: "FSFI desire score, mean change",
    study: "Study 2",
    active: "+0.6",
    placebo: "+0.2",
    scale: "1.2–6.0 scale",
    significant: true,
    interpretation: "Statistically significant; placebo-adjusted advantage ~0.4 points",
  },
  {
    id: "distress-s1",
    outcome: "Distress about low desire (FSDS-DAO item 13), mean change",
    study: "Study 1",
    active: "−0.7",
    placebo: "−0.4",
    scale: "0–4 scale",
    significant: true,
    interpretation: "Statistically significant reduction; ~0.3-point placebo-adjusted advantage",
  },
  {
    id: "distress-s2",
    outcome: "Distress about low desire (FSDS-DAO item 13), mean change",
    study: "Study 2",
    active: "−0.7",
    placebo: "−0.4",
    scale: "0–4 scale",
    significant: true,
    interpretation: "Statistically significant reduction; ~0.3-point placebo-adjusted advantage",
  },
  {
    id: "sse-s1",
    outcome: "Satisfying sexual events, mean change",
    study: "Study 1",
    active: "0.0",
    placebo: "−0.1",
    scale: "Event count",
    significant: false,
    pValue: "p=0.76",
    interpretation: "No significant difference — keep visible alongside positive endpoints",
  },
  {
    id: "sse-s2",
    outcome: "Satisfying sexual events, mean change",
    study: "Study 2",
    active: "0.0",
    placebo: "0.0",
    scale: "Event count",
    significant: false,
    pValue: "p=0.70",
    interpretation: "No significant difference — keep visible alongside positive endpoints",
  },
];

export const PT141_BENEFITS_TABLE = [
  {
    effect: "Sexual desire in labeled HSDD population",
    evidence: "Two phase 3 trials found statistically significant improvements in FSFI desire scores",
    level: "High direct human evidence for a modest average effect",
  },
  {
    effect: "Distress related to low desire",
    evidence: "Two phase 3 trials found statistically significant reductions in FSDS-DAO item 13",
    level: "High direct human evidence for a modest average effect",
  },
  {
    effect: "Satisfying sexual events",
    evidence: "No significant improvement over placebo in either phase 3 trial",
    level: "Direct human evidence of no demonstrated benefit on this endpoint",
  },
  {
    effect: "Female arousal or orgasm",
    evidence: "Some phase 2 and secondary analyses reported improvements — not the core approved claim",
    level: "Limited/supportive human evidence",
  },
  {
    effect: "Erectile response in men",
    evidence: "Small early studies showed increased objective erectile response after experimental SC or intranasal dosing",
    level: "Preliminary human evidence",
  },
  {
    effect: "Male erectile-dysfunction treatment",
    evidence: "No phase 3 program or FDA approval; early studies used different doses and formulations",
    level: "Not established",
  },
  {
    effect: "Male or female “libido enhancement” without HSDD",
    evidence: "Not established in controlled outcome trials designed for general enhancement",
    level: "Unproven",
  },
  {
    effect: "Postmenopausal HSDD",
    evidence: "Not an approved Vyleesi population; adequate confirmatory evidence not established",
    level: "Insufficient for approval",
  },
  {
    effect: "Combination with sildenafil",
    evidence: "One 19-person crossover study found greater objective erectile response than sildenafil alone",
    level: "Very low-certainty preliminary evidence",
  },
  {
    effect: "Faster onset than 45 minutes",
    evidence: "Label specifies at least 45 minutes; optimal window and duration of efficacy not fully characterized",
    level: "Unknown",
  },
  {
    effect: "Tanning or pigmentation",
    evidence: "MC1R engagement can increase pigmentation — Vyleesi is not approved as a tanning drug",
    level: "Known pharmacologic effect, not an approved benefit",
  },
];

export const PT141_AE_SIMPLE = [
  { effect: "Nausea", active: "40.0%", placebo: "1.3%", note: "Most important tolerability issue; often begins within one hour" },
  { effect: "Flushing", active: "20.3%", placebo: "0.3%", note: "Usually transient" },
  { effect: "Injection-site reactions", active: "13.2%", placebo: "8.4%", note: "Pain, redness, bruising, itching, altered sensation" },
  { effect: "Headache", active: "11.3%", placebo: "1.9%", note: "Caused discontinuation in ~1%" },
  { effect: "Vomiting", active: "4.8%", placebo: "0.2%", note: "Can accompany nausea" },
  { effect: "Cough", active: "3.3%", placebo: "1.3%", note: "Less common" },
  { effect: "Fatigue", active: "3.2%", placebo: "0.5%", note: "Less common" },
  { effect: "Hot flush", active: "2.7%", placebo: "0.2%", note: "Separate reported term from flushing" },
  { effect: "Paresthesia", active: "2.6%", placebo: "0.0%", note: "Tingling or altered sensation" },
  { effect: "Dizziness", active: "2.2%", placebo: "0.5%", note: "Relevant when blood pressure is changing" },
  { effect: "Nasal congestion", active: "2.1%", placebo: "0.5%", note: "Less common" },
];

export const PT141_AE_FULL = [
  { outcome: "Any adverse event (integrated phase 3)", active: "76.6%", placebo: "58.2%", context: "Most were mild or moderate" },
  { outcome: "Serious adverse reactions", active: "1.1%", placebo: "0.5%", context: "Small absolute difference" },
  { outcome: "Discontinued because of adverse reactions", active: "18%", placebo: "2%", context: "Nausea was the leading cause" },
  { outcome: "Discontinued because of nausea", active: "8%", placebo: "0%", context: "Nausea often improved after the first dose" },
  { outcome: "Antiemetic treatment used", active: "13%", placebo: "N/A", context: "Treating nausea added another medication burden" },
  { outcome: "Focal hyperpigmentation (intermittent phase 3 use)", active: "1%", placebo: "0%", context: "Face, gums, breasts; may not fully resolve" },
];

export const PT141_DOSE_STUDIES = [
  {
    lane: "approved-female-hsdd",
    population: "Female phase 3 HSDD trials",
    dose: "1.75 mg",
    route: "Subcutaneous autoinjector",
    schedule: "On demand over 24 weeks",
    role: "Pivotal efficacy and safety evidence",
    n: "1,267 randomized",
  },
  {
    lane: "female-dose-finding",
    population: "Female phase 2b dose finding",
    dose: "0.75, 1.25, or 1.75 mg",
    route: "Subcutaneous",
    schedule: "As desired over 12 weeks",
    role: "Compared dose-response and tolerability; 1.25 and 1.75 mg clearer than 0.75 mg",
    n: "397 randomized",
  },
  {
    lane: "female-extension",
    population: "Long-term open-label extension",
    dose: "1.75 mg",
    route: "Subcutaneous",
    schedule: "On demand, up to 52 additional weeks",
    role: "Longer-term open-label safety/effect persistence — weaker than blinded phase 3",
    n: "684 entered; 272 completed (~40%)",
  },
  {
    lane: "early-male-sc",
    population: "Healthy men, early pharmacology (Rosen 2004)",
    dose: "0.3–10 mg",
    route: "Subcutaneous",
    schedule: "Single experimental doses",
    role: "PK, safety, and erectile response above 1 mg",
    n: "48 healthy men",
  },
  {
    lane: "early-male-sc-ed",
    population: "Men with ED, early crossover (Rosen 2004)",
    dose: "4 or 6 mg",
    route: "Subcutaneous",
    schedule: "Experimental single-dose conditions",
    role: "Objective erectile response — doses differ from approved product",
    n: "25 men with ED",
  },
  {
    lane: "early-male-intranasal",
    population: "Early male intranasal studies (Diamond 2004)",
    dose: "Approximately 7–20 mg",
    route: "Intranasal",
    schedule: "Single experimental conditions",
    role: "Erectile response and PK — route abandoned; milligrams not SC-equivalent",
    n: "Healthy men and mild-to-moderate ED",
  },
  {
    lane: "male-intranasal-combo",
    population: "PT-141 plus sildenafil (Diamond 2005)",
    dose: "7.5 mg intranasal + 25 mg sildenafil",
    route: "Intranasal + oral",
    schedule: "Crossover experiment",
    role: "Mechanistic signal only — not a clinical treatment trial",
    n: "19 men with ED",
  },
  {
    lane: "pharmacology",
    population: "Alcohol/QTc pharmacology",
    dose: "20 mg",
    route: "Intranasal",
    schedule: "Single dose",
    role: "Interaction and cardiac electrophysiology — not treatment efficacy",
    n: "Pharmacology study",
  },
];

export const PT141_COMPARISONS = [
  {
    id: "vyleesi",
    label: "Bremelanotide / Vyleesi",
    mechanism: "Melanocortin-receptor agonist",
    population: "Premenopausal women with acquired, generalized HSDD",
    route: "On-demand subcutaneous autoinjector",
    dose: "1.75 mg as needed",
    limitation: "Nausea, BP effects, hyperpigmentation; not approved for men",
    evidence: "Two phase 3 RCTs — modest desire/distress improvement",
  },
  {
    id: "addyi",
    label: "Flibanserin / Addyi",
    mechanism: "Serotonergic modulation; exact HSDD mechanism unknown",
    population: "Women under 65 with acquired, generalized HSDD (current label)",
    route: "Daily oral bedtime dose",
    dose: "100 mg daily",
    limitation: "Hypotension/syncope interactions, CNS depression, daily exposure",
    evidence: "Separate trial program — no reliable head-to-head vs Vyleesi",
  },
  {
    id: "pde5",
    label: "Sildenafil or tadalafil",
    mechanism: "PDE5 inhibition and peripheral cGMP signaling",
    population: "Erectile dysfunction in men",
    route: "Oral on demand or daily",
    dose: "Product dependent",
    limitation: "Improves erectile physiology, not necessarily sexual desire",
    evidence: "Established ED approval — different mechanism and endpoints",
  },
  {
    id: "mt2",
    label: "Melanotan II",
    mechanism: "Related melanocortin peptide",
    population: "No FDA-approved product",
    route: "No approved regimen",
    dose: "None established",
    limitation: "Different molecule; tanning/pigmentation and safety concerns",
    evidence: "No conversion to PT-141; C-terminal amide vs free acid",
  },
  {
    id: "compounded",
    label: "Compounded “PT-141”",
    mechanism: "Intended bremelanotide activity",
    population: "No FDA approval of the compounded product itself",
    route: "Varies (SC vial, nasal spray)",
    dose: "Often 1–2 mg SC — anecdotal",
    limitation: "Product equivalence, concentration, stability, and route may be uncertain",
    evidence: "Not established equivalent to Vyleesi autoinjector",
  },
];

export const PT141_CLAIMS = [
  {
    id: "hsdd-desire",
    claim: "Improves sexual desire in women with HSDD",
    verdict: "Approved and demonstrated",
    detail:
      "Two phase 3 RECONNECT trials: statistically significant FSFI desire improvements vs placebo — modest average effect (~0.3–0.4 points placebo-adjusted).",
  },
  {
    id: "general-libido",
    claim: "Universal female libido booster",
    verdict: "Not demonstrated",
    detail: "Evidence is for acquired, generalized HSDD with distress in premenopausal women — not general enhancement.",
  },
  {
    id: "male-erections",
    claim: "Treats erectile dysfunction in men",
    verdict: "Preliminary",
    detail:
      "Small early SC and intranasal studies showed RigiScan signals. No phase 3 program, no FDA approval, no established male dose.",
  },
  {
    id: "male-libido",
    claim: "Boosts libido in men",
    verdict: "Not demonstrated",
    detail: "No controlled outcome trials designed for male low desire. Early erection studies ≠ libido treatment.",
  },
  {
    id: "orgasm",
    claim: "Improves orgasm",
    verdict: "Supportive",
    detail: "Some phase 2 and secondary measures suggest broader sexual-function changes — not the primary established claim.",
  },
  {
    id: "sse",
    claim: "Increases satisfying sexual events",
    verdict: "Not demonstrated",
    detail: "Pivotal phase 3 trials: no significant improvement over placebo (p=0.76 and p=0.70). Keep visible — prevents cherry-picking.",
  },
  {
    id: "sildenafil-combo",
    claim: "Safe and effective combined with sildenafil/tadalafil",
    verdict: "Preliminary",
    detail: "19-person crossover with intranasal PT-141 + 25 mg sildenafil — mechanistic signal only. Routine combination not established.",
  },
  {
    id: "tanning",
    claim: "Tanning or skin-darkening benefit",
    verdict: "Not an approved purpose",
    detail: "MC1R activation can increase pigmentation — known pharmacologic effect and safety concern, not an approved benefit.",
  },
  {
    id: "45-min-guarantee",
    claim: "Works in exactly 45 minutes",
    verdict: "Not demonstrated",
    detail: "Label says at least 45 minutes before activity. Optimal window and duration of efficacy not fully characterized.",
  },
  {
    id: "compounded-same",
    claim: "Compounded PT-141 equals Vyleesi",
    verdict: "Not established",
    detail: "Identity, assay, sterility, stability, delivery, and bioavailability may differ. FDA review of Vyleesi does not transfer.",
  },
  {
    id: "nasal-equiv",
    claim: "Nasal PT-141 equivalent to injectable",
    verdict: "Not established",
    detail: "Route, formulation, deposition, and bioavailability differ. Older intranasal milligrams cannot convert to SC milligrams.",
  },
  {
    id: "aphrodisiac",
    claim: "PT-141 is an aphrodisiac",
    verdict: "Not demonstrated",
    detail: "Evidence-based prescription option for qualifying HSDD — not a proven universal enhancer of libido or performance.",
  },
];

export const PT141_MECHANISM = [
  {
    target: "MC4R",
    action: "Agonist",
    consequence: "Alters central pathways involved in sexual motivation and response",
    status: "Mechanistically plausible; exact therapeutic chain remains unresolved",
  },
  {
    target: "MC1R",
    action: "Agonist",
    consequence: "Stimulates melanin expression in melanocytes",
    status: "Established explanation for focal hyperpigmentation",
  },
  {
    target: "MC3R and MC5R",
    action: "Agonist at lower potency",
    consequence: "Broader melanocortin signaling",
    status: "Pharmacologic binding; clinical contribution uncertain",
  },
  {
    target: "MC2R",
    action: "Weakest activity in label potency order",
    consequence: "ACTH-receptor pathway theoretically less relevant",
    status: "Limited relevance at therapeutic exposure",
  },
  {
    target: "Nitric oxide/cGMP erectile pathway",
    action: "Not a PDE5 inhibitor",
    consequence: "Does not directly reproduce sildenafil/tadalafil mechanism",
    status: "Important mechanistic distinction — not “injectable Viagra”",
  },
  {
    target: "Gastric motility",
    action: "Slows gastric emptying",
    consequence: "May delay or reduce absorption of oral drugs",
    status: "Demonstrated clinical-pharmacology interaction — oral naltrexone warning",
  },
];

export const PT141_PK = [
  { measure: "Median time to peak concentration", value: "About 1.0 hour (range 0.5–1.0 hour)" },
  { measure: "Absolute bioavailability", value: "About 100% after subcutaneous Vyleesi" },
  { measure: "Mean peak concentration (Cmax)", value: "72.8 ng/mL" },
  { measure: "Mean AUC", value: "276 hour·ng/mL" },
  { measure: "Protein binding", value: "21%" },
  { measure: "Mean volume of distribution", value: "25.0 L" },
  { measure: "Mean terminal half-life", value: "Approximately 2.7 hours (range 1.9–4.0 hours)" },
  { measure: "Mean apparent clearance", value: "6.5 L/hour" },
  { measure: "Metabolism", value: "Peptide-bond hydrolysis" },
  { measure: "Recovery of radiolabeled material", value: "64.8% in urine and 22.8% in feces" },
];

export const PT141_MALE_STUDIES = [
  {
    study: "Rosen et al., 2004",
    population: "48 healthy men + 25 men with ED in dose-ranging/crossover cohorts",
    regimen: "0.3–10 mg SC; 4 and 6 mg in ED cohort",
    finding: "Objective erectile response above 1 mg; improved at 4 and 6 mg in ED group",
    limitation: "Small, early study; doses differ from approved product",
  },
  {
    study: "Diamond et al., 2004",
    population: "Healthy men and men with ED responsive to sildenafil",
    regimen: "Approximately 7–20 mg intranasal",
    finding: "Higher intranasal doses increased RigiScan-measured rigidity duration",
    limitation: "Abandoned route/formulation; no direct conversion to injection",
  },
  {
    study: "Diamond et al., 2005",
    population: "19 men with ED in crossover conditions",
    regimen: "7.5 mg intranasal PT-141 plus 25 mg sildenafil",
    finding: "Combination increased objective erectile response vs either alone",
    limitation: "Very small mechanistic study — not a clinical treatment trial",
  },
  {
    study: "Safarinejad & Hosseini, 2008",
    population: "342 reported sildenafil nonresponders",
    regimen: "10 mg intranasal",
    finding: "Publication reported improved at-home outcomes",
    limitation: "2023 Expression of Concern materially weakens confidence — treat as unreliable",
  },
];

export const PT141_EVIDENCE_LADDER = [
  { level: "Labeled dose for premenopausal HSDD", exists: "1.75 mg SC autoinjector · Vyleesi label", confidence: "Strongest" },
  { level: "Short-term efficacy (desire + distress)", exists: "Two identical 24-week phase 3 RCTs", confidence: "Strong — modest effect size" },
  { level: "Short-term safety profile", exists: "Pooled phase 3 + integrated analysis", confidence: "Strong — nausea dominant" },
  { level: "Pharmacokinetics (approved SC product)", exists: "Label PK section", confidence: "Strong" },
  { level: "Satisfying sexual events", exists: "Phase 3 co-primary endpoint — negative", confidence: "Strong negative finding" },
  { level: "Longer-term open-label follow-up", exists: "52-week extension · substantial attrition", confidence: "Moderate" },
  { level: "Erectile response in men", exists: "Small early SC/intranasal studies", confidence: "Preliminary" },
  { level: "Combination with PDE5 inhibitors", exists: "19-person crossover only", confidence: "Preliminary" },
  { level: "Postmenopausal use", exists: "Not approved; insufficient confirmatory evidence", confidence: "Insufficient" },
  { level: "General libido enhancement", exists: "No adequate controlled trial", confidence: "Insufficient" },
  { level: "Male treatment regimens", exists: "No contemporary phase 3 dataset", confidence: "Insufficient" },
  { level: "Compounded product equivalence", exists: "Not established", confidence: "Insufficient" },
  { level: "Intranasal-to-SC dose conversion", exists: "Not valid", confidence: "Invalid extrapolation" },
];

export const PT141_PHASE2B_RESPONDERS = [
  { endpoint: "Satisfying-sexual-event responder", placebo: "37%", mg075: "38%", mg125: "48%", mg175: "55%" },
  { endpoint: "FSFI responder", placebo: "46%", mg075: "45%", mg125: "61%", mg175: "69%" },
  { endpoint: "FSDS-DAO responder", placebo: "45%", mg075: "49%", mg125: "60%", mg175: "69%" },
];

export const PT141_REGULATION = [
  { question: "Is bremelanotide FDA approved?", answer: "Yes, as Vyleesi; initial U.S. approval June 21, 2019" },
  { question: "What is approved?", answer: "1.75 mg/0.3 mL single-dose subcutaneous autoinjector" },
  { question: "Who is it approved for?", answer: "Premenopausal women with acquired, generalized HSDD meeting specific label criteria" },
  { question: "Is PT-141 approved for men?", answer: "No" },
  { question: "Postmenopausal women?", answer: "No under the current Vyleesi label" },
  { question: "Erectile dysfunction?", answer: "No" },
  { question: "Performance enhancement or tanning?", answer: "No" },
  { question: "Compounded PT-141 products?", answer: "No FDA approval; Vyleesi approval does not transfer" },
  { question: "Research products equivalent to Vyleesi?", answer: "Not established — identity, assay, sterility, stability, and delivery may differ" },
];

export const PT141_DOSAGE_GUIDE = {
  title:
    "PT-141 (Bremelanotide) Benefits, Dosage & Side Effects: What Human Studies Actually Show",
  updated: "Updated September 2026",
  callout:
    "**Approval status: FDA approved—but only in a specific product and population.** Bremelanotide is approved as the prescription autoinjector **Vyleesi** for premenopausal women with acquired, generalized hypoactive sexual desire disorder (HSDD) that causes marked distress or interpersonal difficulty. The approval does **not** extend to men, postmenopausal women, general libido enhancement, isolated erectile dysfunction, or unapproved compounded products. **“PT-141,” “bremelanotide,” and “Vyleesi”** are related terms, but they do **not** establish the same product quality or approved use.",
  intro: [
    "PT-141 is the development name for **bremelanotide**, a synthetic cyclic peptide that activates melanocortin receptors in the central nervous system. Its FDA-approved form, Vyleesi, is used on demand for acquired, generalized HSDD in premenopausal women.",
    "The labeled dose is **1.75 mg injected subcutaneously at least 45 minutes before anticipated sexual activity**, with no more than one dose in 24 hours and no more than eight doses per month. The label says to stop after eight weeks if symptoms have not improved.",
    "In two 24-week phase 3 trials, bremelanotide produced statistically significant but **modest** average improvements in sexual-desire scores and distress related to low desire. It did **not** significantly increase the number of satisfying sexual events. **Nausea occurred in 40.0%** of treated participants versus 1.3% with placebo.",
  ],
  glance: {
    title: "PT-141 at a Glance",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**What is it?**", "A synthetic cyclic heptapeptide and nonselective melanocortin-receptor agonist"],
        ["**Other names**", "Bremelanotide; PT-141 is the development/research name"],
        ["**FDA-approved product**", "Vyleesi, a single-dose 1.75 mg/0.3 mL subcutaneous autoinjector"],
        ["**Approved use**", "Acquired, generalized HSDD in premenopausal women meeting the label criteria"],
        ["**Not approved for**", "Men, postmenopausal women, isolated erectile dysfunction, or sexual-performance enhancement"],
        ["**How it works**", "Activates melanocortin receptors; MC1R and MC4R most relevant at therapeutic exposure"],
        ["**Strongest human result**", "Modest improvements in validated desire and distress scores in two phase 3 trials"],
        ["**Outcome not improved**", "Number of satisfying sexual events did not differ significantly from placebo"],
        ["**FDA-approved dose**", "1.75 mg subcutaneously as needed, at least 45 minutes before anticipated sexual activity"],
        ["**Dose limits**", "No more than once per 24 hours; more than eight doses per month is not recommended"],
        ["**Titration**", "None in the label; Vyleesi is a fixed-dose autoinjector"],
        ["**Most common side effect**", "Nausea: 40.0% with bremelanotide vs 1.3% with placebo"],
        ["**Key contraindications**", "Uncontrolled hypertension or known cardiovascular disease"],
        ["**Half-life**", "Approximately 2.7 hours after the approved subcutaneous product"],
        ["**Evidence in men**", "Small early studies show an erectile-response signal; no approved male indication or established contemporary dose"],
      ],
    },
  },
  sections: [
    {
      id: "approval-boundary",
      title: "Who is Vyleesi actually approved for?",
      widget: "pt-141-identity-gate",
      paragraphs: [
        "The RECONNECT trial population was selective: acquired, generalized HSDD for at least six months, with major alternative causes screened out. This tool explains study applicability — it does **not** diagnose HSDD or determine candidacy.",
      ],
      widgetAfter: "pt-141-approval-boundary",
    },
    {
      id: "outcomes",
      title: "Desire and distress improved modestly; satisfying sexual events did not",
      widget: "pt-141-outcome-explorer",
      paragraphs: [
        "The two pivotal RECONNECT trials compared **1.75 mg subcutaneous bremelanotide** with placebo in premenopausal women with acquired, generalized HSDD. Both studies met their co-primary endpoints for desire and distress — but **not** for satisfying sexual events.",
        "The between-group advantage was about **0.3–0.4 points for desire** and **0.3 points for distress** on the reported scales. These are real randomized-trial signals, but they are smaller than within-group changes often used in promotional summaries. Placebo participants also improved.",
      ],
      paragraphsAfter: [
        "Bremelanotide should not be described as a guaranteed “libido switch.” In the population actually studied, it improved how participants rated desire and how bothered they felt by low desire, on average.",
      ],
    },
    {
      id: "benefits",
      title: "PT-141 benefits: what the evidence really supports",
      paragraphs: [
        "The evidence is strongest for a narrow clinical question: **Does 1.75 mg on-demand subcutaneous bremelanotide improve desire and related distress in premenopausal women who meet acquired, generalized HSDD criteria?** The answer is yes, by a modest average amount. Changing the population, route, product, or outcome weakens the certainty.",
      ],
      tables: [
        {
          headers: ["Researched effect or marketed claim", "What the evidence shows", "Evidence level"],
          rows: PT141_BENEFITS_TABLE.map((row) => [row.effect, row.evidence, `**${row.level}**`]),
        },
      ],
    },
    {
      id: "female-results",
      title: "Phase 3 and dose-finding results in premenopausal women",
      paragraphs: [
        "The RECONNECT program consisted of two nearly identical randomized, double-blind, placebo-controlled trials. A total of **1,267 participants were randomized**; the pooled safety population included **1,247**, and the published efficacy population included **1,202**. Treatment lasted 24 weeks.",
        "Participants were instructed to use the assigned autoinjector about 45 minutes before anticipated sexual activity. Although phase 3 protocols permitted up to 12 doses per month, most participants used the drug only two or three times per month, and the current label recommends no more than eight monthly doses.",
      ],
      tables: [
        {
          title: "Phase 3 trial features",
          headers: ["Trial feature", "What happened"],
          rows: [
            ["Desire endpoint", "Improved significantly versus placebo in both trials"],
            ["Distress endpoint", "Improved significantly versus placebo in both trials"],
            ["Satisfying sexual events", "Did not improve significantly versus placebo"],
            ["Median injections", "About 10 across the entire 24-week blinded period"],
            ["Discontinuation imbalance", "18% vs 2% discontinued because of adverse reactions (label)"],
            ["Common tolerability issue", "Nausea, especially after the first dose"],
          ],
        },
        {
          title: "Phase 2b responder analysis (Clayton 2016 · Althof 2019)",
          headers: ["Published responder analysis", "Placebo", "0.75 mg", "1.25 mg", "1.75 mg"],
          rows: PT141_PHASE2B_RESPONDERS.map((row) => [
            row.endpoint,
            row.placebo,
            row.mg075,
            row.mg125,
            row.mg175,
          ]),
        },
      ],
      paragraphsAfter: [
        "These responder definitions came from the phase 2 program and should not be mistaken for the absolute probability that any individual user will benefit. The 1.25 and 1.75 mg groups showed clearer efficacy signals than 0.75 mg and helped select 1.75 mg for phase 3.",
      ],
    },
    {
      id: "male-evidence",
      title: "Results in men: preliminary only",
      paragraphs: [
        "**Bremelanotide is not FDA approved for men or erectile dysfunction.** PT-141 has been studied experimentally in men, but this evidence is early and does not support a standard male protocol.",
        "Early objective erection data show biological activity in men. They do **not** establish that current online 1–2 mg subcutaneous protocols are effective, that PT-141 treats low desire in men, or that combining it with PDE5 inhibitors is broadly safe and effective.",
      ],
      tables: [
        {
          headers: ["Study", "Population and design", "Experimental regimen", "Main finding", "Main limitation"],
          rows: PT141_MALE_STUDIES.map((row) => [
            row.study,
            row.population,
            row.regimen,
            row.finding,
            row.limitation,
          ]),
        },
      ],
    },
    {
      id: "approved-dose",
      title: "FDA-approved Vyleesi dosage",
      widget: "pt-141-dose-route-map",
      paragraphs: [
        "**Vyleesi does not use dose escalation.** It is a fixed 1.75 mg autoinjector. The phase 2b trial compared separate randomized dose groups — participants were not titrated through 0.75, 1.25, and 1.75 mg as a standard clinical sequence.",
        "The autoinjector contains **1.75 mg bremelanotide equivalent** (~**1.89 mg bremelanotide acetate**) in 0.3 mL. This base-versus-salt distinction is one reason unapproved vial labels can be misleading.",
      ],
      tables: [
        {
          headers: ["Dose element", "Current label"],
          rows: [
            ["Amount", "**1.75 mg bremelanotide**"],
            ["Form", "1.75 mg/0.3 mL single-dose autoinjector"],
            ["Route", "Subcutaneous injection in abdomen or thigh"],
            ["Timing", "As needed, at least 45 minutes before anticipated sexual activity"],
            ["Maximum frequency", "No more than one dose within 24 hours"],
            ["Monthly limit", "More than eight doses per month is not recommended"],
            ["Titration", "None"],
            ["Reassessment", "Discontinue after eight weeks if symptoms have not improved"],
          ],
        },
      ],
      paragraphsAfter: [
        "Compounding clinics and peptide sellers commonly describe fixed subcutaneous doses near 1–2 mg. Only one part overlaps established evidence: the approved Vyleesi product contains 1.75 mg bremelanotide SC. That overlap does **not** prove compounded vials or nasal sprays are equivalent to the autoinjector.",
      ],
    },
    {
      id: "timing",
      title: "How long does PT-141 take to work?",
      paragraphs: [
        "The label says to inject Vyleesi **at least 45 minutes before anticipated sexual activity**, but also states that the optimal administration window and duration of efficacy have not been fully characterized.",
        "Plasma concentration peaks at about **one hour**, but plasma peak and subjective benefit are not necessarily identical. A precise claim such as “works in exactly 45 minutes and lasts 24–36 hours” exceeds the evidence.",
      ],
      tables: [
        {
          title: "Timing and pharmacodynamic windows (approved SC product)",
          headers: ["Event", "Timing", "Note"],
          rows: [
            ["Label administration", "At least 45 minutes before anticipated activity", "Not proof of exact onset"],
            ["Plasma peak (Cmax)", "About 1.0 hour (range 0.5–1.0 h)", "Clinical effect ≠ plasma concentration"],
            ["Nausea median onset", "Within 1 hour", "21% after first dose; ~3% after later doses"],
            ["Nausea median duration", "About 2 hours", "Most common tolerability issue"],
            ["Peak BP effect", "2–4 hours after dosing", "Max ~+6/+3 mmHg systolic/diastolic"],
            ["Return toward baseline", "Usually within 12 hours", "Heart rate reduction up to ~5 bpm"],
            ["Terminal half-life", "Approximately 2.7 hours", "Plasma levels decline substantially over following hours"],
          ],
        },
      ],
    },
    {
      id: "side-effects",
      title: "PT-141 side effects",
      widget: "pt-141-safety-toggle",
      paragraphs: [
        "The main tradeoff is unusually concrete: the average efficacy advantage over placebo was modest, while **four in ten treated participants reported nausea**. Individual benefit may still be meaningful, but the tolerability burden cannot be reduced to a footnote.",
        "These rates come from pooled randomized phase 3 trials using the approved subcutaneous product in premenopausal women with HSDD. They should not be presented as precise rates for men, intranasal use, compounded products, or repeated off-label dosing.",
      ],
    },
    {
      id: "warnings",
      title: "Other PT-141 safety questions",
      widget: "pt-141-adverse-events",
      paragraphs: [
        "Each dose can temporarily raise blood pressure and reduce heart rate. Vyleesi is **contraindicated** in people with **uncontrolled hypertension or known cardiovascular disease**.",
      ],
      tables: [
        {
          title: "Blood pressure and heart rate",
          headers: ["Parameter", "Clinical study finding"],
          rows: [
            ["Systolic BP increase", "Maximum average ~6 mmHg, peaking 2–4 hours after dosing"],
            ["Diastolic BP increase", "Maximum average ~3 mmHg"],
            ["Heart rate reduction", "Up to ~5 beats per minute"],
            ["Return to baseline", "Usually within 12 hours"],
            ["Daily dosing study (8 days)", "Mean daytime BP ↑ ~1.9/1.7 mmHg — averages do not exclude larger individual responses"],
          ],
        },
        {
          title: "Focal hyperpigmentation exposure frequency",
          headers: ["Dosing pattern", "Hyperpigmentation rate"],
          rows: [
            ["Intermittent phase 3 use", "1% (face, gingiva, breasts; may not fully resolve)"],
            ["Daily dosing × 8 days", "38% developed focal hyperpigmentation"],
            ["8 more consecutive daily doses", "Additional 14% developed new changes"],
          ],
        },
        {
          title: "Other labeled warnings",
          headers: ["Concern", "Label guidance"],
          rows: [
            ["Gastric emptying / oral drugs", "May delay or reduce absorption — warn about antibiotics and pain medicines needing rapid threshold concentration"],
            ["Oral naltrexone", "Avoid with Vyleesi — substantially lower systemic exposure; treatment failure risk"],
            ["Pregnancy", "Not recommended; effective contraception advised; animal developmental harm at higher exposures"],
            ["Kidney/liver impairment", "Exposure increases; caution in severe impairment — nausea/vomiting may increase"],
            ["Liver injury", "One case of acute hepatitis in open-label extension — rare unresolved signal"],
            ["Product quality", "Unapproved vials add identity, sterility, and degradation risks unrelated to receptor pharmacology"],
          ],
        },
      ],
      paragraphsAfter: [
        "In a phase 4 study, **8 mg oral ondansetron 30 minutes before bremelanotide did not reduce nausea incidence** — routine pretreatment is not recommended in the current label.",
      ],
    },
    {
      id: "mechanism",
      title: "How PT-141 works",
      widget: "pt-141-mechanism-visual",
      paragraphs: [
        "**Bremelanotide → melanocortin-receptor activation in the brain → altered sexual motivation/response signaling → possible improvement in desire and distress**",
        "A separate branch explains a major side effect: **Bremelanotide → MC1R on melanocytes → increased melanin production → possible focal darkening of skin or gums**",
        "Unlike sildenafil or tadalafil, bremelanotide does not principally work by inhibiting PDE5 and increasing cGMP in genital tissue. FDA states that the exact mechanism by which Vyleesi improves HSDD remains unknown.",
      ],
      tables: [
        {
          headers: ["Target or pathway", "Bremelanotide action", "Potential consequence", "Evidence status"],
          rows: PT141_MECHANISM.map((row) => [row.target, row.action, row.consequence, row.status]),
        },
      ],
    },
    {
      id: "pk",
      title: "PT-141 pharmacokinetics",
      paragraphs: [
        "Exposure increased less than proportionally across 0.3–10 mg subcutaneous doses, and mean peak concentrations plateaued near 7.5 mg. That is **not** evidence that 7.5 mg is an effective or safe target — it is a pharmacokinetic observation from higher-dose development work.",
        "The concentration peak near one hour is consistent with on-demand dosing, while a 2.7-hour half-life means plasma levels decline substantially over the following hours. It does not justify a precise consumer claim about onset or duration of desire.",
      ],
      tables: [
        {
          headers: ["Measure", "Approved subcutaneous product"],
          rows: PT141_PK.map((row) => [row.measure, row.value]),
        },
      ],
    },
    {
      id: "comparisons",
      title: "PT-141 vs similar sexual-health treatments",
      widget: "pt-141-comparison",
      paragraphs: [
        "These are **not head-to-head efficacy rankings**. Population, endpoint, dosing pattern, and trial program differ. Every cross-drug efficacy comparison should be marked **no direct head-to-head evidence**.",
      ],
      paragraphsAfter: [
        "**PT-141 vs sildenafil/tadalafil:** PDE5 inhibitors facilitate blood-flow signaling during sexual stimulation. Bremelanotide acts centrally through melanocortin receptors.",
        "**PT-141 vs flibanserin:** Both have HSDD indications, but labels differ — Vyleesi is premenopausal on-demand injection; Addyi is daily oral for women under 65.",
        "**PT-141 vs Melanotan II:** Related melanocortin lineage but different structures (C-terminal free acid vs amide) — no dose or product equivalence.",
      ],
    },
    {
      id: "studies",
      title: "Clinical evidence deep dive",
      paragraphs: [
        "> Study details describe published trial designs — **not treatment recommendations.** Industry sponsorship of RECONNECT does not invalidate randomized results but is relevant when interpreting framing.",
      ],
      tables: [
        {
          title: "Study 1 & 2: Two phase 3 RECONNECT trials (Kingsberg 2019)",
          headers: ["Field", "Details"],
          rows: [
            ["Design", "Two identical randomized, double-blind, placebo-controlled, multicenter trials"],
            ["Registries", "NCT02333071 and NCT02338960"],
            ["Population", "Premenopausal women with acquired, generalized HSDD ≥6 months"],
            ["Randomized", "1,267"],
            ["Treatment", "1.75 mg SC bremelanotide or placebo, on demand, 24 weeks"],
            ["Co-primary endpoints", "FSFI desire-domain change and FSDS-DAO item 13 change"],
            ["Main outcome", "Both endpoints favored bremelanotide in both trials"],
            ["Negative outcome", "No significant difference in satisfying sexual events"],
            ["Main limitation", "Modest effect size, high discontinuation, selected population, industry sponsorship"],
          ],
        },
        {
          title: "Study 3: Phase 2b dose-ranging trial (Clayton 2016)",
          headers: ["Field", "Details"],
          rows: [
            ["Registry", "NCT01382719"],
            ["Participants", "397 randomized; 327 in primary efficacy analysis"],
            ["Doses", "Placebo, 0.75, 1.25, or 1.75 mg SC, as desired"],
            ["Duration", "12 weeks after placebo baseline period"],
            ["Main dose finding", "1.25 and 1.75 mg showed clearer efficacy signals than 0.75 mg"],
            ["Main limitation", "Phase 2 responder definitions should not be generalized as individual success probabilities"],
          ],
        },
        {
          title: "Study 4: Open-label long-term extension (Simon 2019)",
          headers: ["Field", "Details"],
          rows: [
            ["Eligible completers", "856 from core phase; 684 entered extension"],
            ["Completed full period", "272 (~40%)"],
            ["Finding", "Improvements appeared to persist among continuing participants"],
            ["Limitation", "Open-label design, self-selection, substantial attrition — weaker than blinded phase 3"],
          ],
        },
      ],
      widget: "pt-141-evidence-ladder",
    },
    {
      id: "regulation",
      title: "Regulatory and research status",
      tables: [
        {
          headers: ["Question", "Status"],
          rows: PT141_REGULATION.map((row) => [row.question, row.answer]),
        },
        {
          title: "Evidence quality summary",
          headers: ["Question", "Evidence assessment"],
          rows: [
            ["Does bremelanotide have a demonstrated human effect?", "**Yes** — desire and distress in two phase 3 RCTs"],
            ["Is the average benefit large?", "**No** — placebo-adjusted mean changes were modest"],
            ["Did all relevant outcomes improve?", "**No** — satisfying sexual events did not significantly improve"],
            ["Is the approved dose established?", "**Yes**, for Vyleesi and labeled premenopausal HSDD population"],
            ["Is a dose established for men?", "**No** — only small early experimental studies"],
            ["Is compounded product equivalence established?", "**Not established**"],
            ["Is long-term safety fully characterized?", "**Partially** — extension data exist but open-label attrition limits certainty"],
            ["Is the mechanism fully known?", "**No** — melanocortin pharmacology known; precise therapeutic mechanism not"],
          ],
        },
      ],
    },
    {
      id: "claims",
      title: "Claims versus evidence",
      widget: "pt-141-claim-checker",
      paragraphs: [
        "Clickable claims help separate approved HSDD outcomes from preliminary male data, negative endpoints, and unrelated tanning or enhancement marketing.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "The most defensible claim is that **on-demand subcutaneous bremelanotide can modestly improve validated desire and distress outcomes in some premenopausal women with acquired, generalized HSDD**. It is not a universal aphrodisiac, not established for men, and not interchangeable with compounded vials or nasal products.",
        "The approved regimen is a **fixed 1.75 mg autoinjector** used **at least 45 minutes before anticipated activity**, no more than **once per 24 hours** and **eight times per month**, with discontinuation after **eight weeks** without improvement. Nausea in **40%** and cardiovascular contraindications define the main practical tradeoffs.",
      ],
      highlight:
        "Desire + distress improved modestly · SSE did not · 1.75 mg SC fixed dose · Nausea 40% · Not approved for men · Compounded ≠ Vyleesi.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is PT-141?",
        answer:
          "**PT-141 is the development name for bremelanotide**, a synthetic cyclic heptapeptide that activates melanocortin receptors. Its FDA-approved product is Vyleesi.",
      },
      {
        question: "Is PT-141 the same as bremelanotide?",
        answer:
          "**They identify the same active peptide**, but the label “PT-141” does not prove that a product is equivalent to FDA-approved Vyleesi in purity, concentration, sterility, formulation, or delivery.",
      },
      {
        question: "What is Vyleesi?",
        answer:
          "**Vyleesi is the FDA-approved 1.75 mg/0.3 mL bremelanotide autoinjector.** It is approved for a specific form of HSDD in premenopausal women.",
      },
      {
        question: "What does PT-141 do?",
        answer:
          "**It activates melanocortin receptors in the central nervous system.** In phase 3 trials, it modestly improved sexual-desire scores and reduced distress about low desire in the approved population.",
      },
      {
        question: "Does PT-141 actually work?",
        answer:
          "**It works for some of the outcomes and population studied.** Desire and distress scores improved versus placebo, but satisfying sexual-event counts did not.",
      },
      {
        question: "What is the approved PT-141 dosage?",
        answer:
          "**The Vyleesi dose is 1.75 mg subcutaneously as needed, at least 45 minutes before anticipated sexual activity.** The label limits use to one dose per 24 hours and recommends no more than eight doses per month.",
      },
      {
        question: "Does Vyleesi require titration?",
        answer:
          "**No.** The approved product has one fixed dose. The phase 2 study compared dose groups; it did not establish a clinical titration sequence.",
      },
      {
        question: "How long does PT-141 take to work?",
        answer:
          "**The label says to use Vyleesi at least 45 minutes before anticipated activity.** Peak plasma concentration occurs near one hour, but the optimal window and duration of efficacy are not fully characterized.",
      },
      {
        question: "What are the most common PT-141 side effects?",
        answer:
          "**Nausea, flushing, injection-site reactions, headache, and vomiting are the most common.** Nausea occurred in 40% of treated phase 3 participants.",
      },
      {
        question: "Does PT-141 raise blood pressure?",
        answer:
          "**Yes, temporarily.** Maximum average clinical-study increases were about 6 mmHg systolic and 3 mmHg diastolic, with a simultaneous heart-rate reduction; values usually returned to baseline within 12 hours.",
      },
      {
        question: "Who should not use Vyleesi?",
        answer:
          "**It is contraindicated in uncontrolled hypertension and known cardiovascular disease.** Pregnancy, medication interactions, and kidney or liver impairment also require clinician review.",
      },
      {
        question: "Should ondansetron be taken before PT-141?",
        answer:
          "**Routine pretreatment is not supported.** A phase 4 study found that 8 mg ondansetron taken 30 minutes beforehand did not reduce Vyleesi-associated nausea.",
      },
      {
        question: "Does PT-141 work for men?",
        answer:
          "**Small early studies found an objective erectile-response signal in men, but male effectiveness is not established to the standard of an approved treatment.** There is no FDA-approved male dose or indication.",
      },
      {
        question: "Is compounded PT-141 the same as Vyleesi?",
        answer:
          "**Not necessarily.** The active peptide may be intended to match bremelanotide, but the compounded product has not undergone the same FDA review for concentration, delivery, stability, sterility, and clinical performance.",
      },
      {
        question: "Does PT-141 increase satisfying sexual events?",
        answer:
          "**Not in the pivotal phase 3 trials.** The change in satisfying sexual events did not significantly differ from placebo in either study.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "U.S. National Library of Medicine",
        title: "Vyleesi (bremelanotide injection) Prescribing Information",
        detail: "Revised March 2024 · current on DailyMed.",
        href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=f1d0c1b5-2f39-4bad-a6a4-0066e3ad5dcf",
      },
      {
        authors: "U.S. Food and Drug Administration",
        title: "NDA 210557 Approval Letter",
        detail: "June 21, 2019 · Vyleesi initial U.S. approval.",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/appletter/2019/210557Orig1s000ltr.pdf",
      },
      {
        authors: "Kingsberg SA et al.",
        title: "Bremelanotide for HSDD: Two Randomized Phase 3 Trials",
        detail: "Obstet Gynecol 2019 · RECONNECT co-primary endpoints.",
        href: "https://pubmed.ncbi.nlm.nih.gov/31599840/",
      },
      {
        authors: "Simon JA et al.",
        title: "Long-Term Safety and Efficacy of Bremelanotide for HSDD",
        detail: "Obstet Gynecol 2019 · 52-week open-label extension.",
        href: "https://pubmed.ncbi.nlm.nih.gov/31599847/",
      },
      {
        authors: "Clayton AH et al.",
        title: "Bremelanotide Dose-Finding Trial in Premenopausal Women",
        detail: "Women's Health 2016 · phase 2b 0.75/1.25/1.75 mg arms.",
        href: "https://pubmed.ncbi.nlm.nih.gov/27181790/",
      },
      {
        authors: "Althof S et al.",
        title: "Responder Analyses From Phase 2b Bremelanotide Study",
        detail: "J Sex Med 2019 · dose-response responder definitions.",
        href: "https://pubmed.ncbi.nlm.nih.gov/31277966/",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT02333071 · RECONNECT Study 301",
        detail: "Phase 3 bremelanotide HSDD trial registry.",
        href: "https://clinicaltrials.gov/study/NCT02333071",
      },
      {
        authors: "ClinicalTrials.gov",
        title: "NCT02338960 · RECONNECT Study 302",
        detail: "Phase 3 bremelanotide HSDD trial registry.",
        href: "https://clinicaltrials.gov/study/NCT02338960",
      },
      {
        authors: "Rosen RC et al.",
        title: "Subcutaneous PT-141 in Healthy Men and Viagra Nonresponders",
        detail: "Int J Impot Res 2004 · 0.3–10 mg SC dose-ranging.",
        href: "https://pubmed.ncbi.nlm.nih.gov/14999221/",
      },
      {
        authors: "Diamond LE et al.",
        title: "Intranasal PT-141 Pharmacodynamics 2004",
        detail: "Int J Impot Res 2004 · ~7–20 mg intranasal.",
        href: "https://pubmed.ncbi.nlm.nih.gov/14963471/",
      },
      {
        authors: "Diamond LE et al.",
        title: "Intranasal PT-141 Plus Sildenafil 2005",
        detail: "Urology 2005 · 19-man crossover mechanistic study.",
        href: "https://pubmed.ncbi.nlm.nih.gov/15833522/",
      },
      {
        authors: "Clayton AH et al.",
        title: "Safety Profile Across Bremelanotide Clinical Program",
        detail: "J Womens Health 2022 · integrated adverse-event analysis.",
        href: "https://pubmed.ncbi.nlm.nih.gov/35147466/",
      },
      {
        authors: "U.S. National Library of Medicine",
        title: "Addyi (flibanserin) Prescribing Information",
        detail: "Current label with December 2025 indication update.",
        href: "https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=3819daf3-e935-2c53-c527-e1d57922f394",
      },
    ],
  },
};

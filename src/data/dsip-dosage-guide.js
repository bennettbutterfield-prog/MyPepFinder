/**
 * DSIP (emideltide) dosage guide.
 * Historical human sleep: 25–30 nmol/kg IV (~21–25 mcg/kg). ~8 min IV half-life (limited data).
 * Community SC 100–400 mcg unvalidated. No controlled human SC sleep trial identified.
 * Mechanism unresolved — no confirmed receptor/gene. PCAC 7–6 vote July 2026.
 */

export const DSIP_MW = 848.8;
export const DSIP_NMOL_TO_MCG_KG = 0.8488;

export function dsipNmolKgToMcgKg(nmolKg) {
  const n = Number(nmolKg);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n * DSIP_NMOL_TO_MCG_KG;
}

export function dsipDoseForWeight({ nmolKg, weightKg }) {
  const nmol = Number(nmolKg);
  const kg = Number(weightKg);
  if (!Number.isFinite(nmol) || nmol <= 0 || !Number.isFinite(kg) || kg <= 0) {
    return null;
  }
  const mcgKg = dsipNmolKgToMcgKg(nmol);
  const totalMcg = mcgKg * kg;
  return {
    nmolKg: nmol,
    mcgKg,
    weightKg: kg,
    totalMcg,
    totalMg: totalMcg / 1000,
  };
}

export function dsipScRecon({ vialMg, diluentMl, targetMcg }) {
  const vial = Number(vialMg);
  const ml = Number(diluentMl);
  const mcg = Number(targetMcg);
  if (!Number.isFinite(vial) || vial <= 0 || !Number.isFinite(ml) || ml <= 0) {
    return null;
  }
  const mcgPerMl = (vial * 1000) / ml;
  const volumeMl = Number.isFinite(mcg) && mcg > 0 ? mcg / mcgPerMl : null;
  const units = volumeMl != null ? volumeMl * 100 : null;
  return { vialMg: vial, diluentMl: ml, mcgPerMl, targetMcg: mcg, volumeMl, units };
}

export const DSIP_IDENTITY = [
  {
    id: "dsip",
    label: "DSIP / emideltide (WAGGDASGE nonapeptide)",
    verdict: "Confirm free base vs acetate and peptide-content assay",
    detail:
      "Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu · MW ~848.8 g/mol · CAS 62568-57-4. Free-base and acetate differ in counterion mass, solubility, and assay basis.",
  },
  {
    id: "acetate",
    label: "Emideltide acetate / DSIP acetate",
    verdict: "Same sequence — mass basis may differ from free form",
    detail:
      "FDA compounding materials refer to emideltide acetate. Certificate must state peptide-content basis, not nominal vial mass alone.",
  },
  {
    id: "unspecified",
    label: "Unspecified “DSIP peptide” vial",
    verdict: "Incomplete — HPLC % ≠ validated SC injectable",
    detail:
      "Require MS identity, stereochemistry, impurities, aggregates, endotoxin, sterility, and stability for parenteral research.",
  },
];

export const DSIP_EVIDENCE_ISSUES = [
  ["Confirmed receptor", "None"],
  ["Confirmed gene/precursor", "None identified"],
  ["Historical trial size", "Mostly 6–18 participants"],
  ["Sleep outcome consistency", "Mixed — weak independent replication"],
  ["Route of human evidence", "Predominantly IV — not SC/nasal"],
  ["SC human PK", "Not characterized"],
  ["Controlled SC sleep trial", "None identified"],
];

export const DSIP_NMOL_PRESETS = [
  { id: "25", label: "25 nmol/kg", nmolKg: 25, note: "Most repeated sleep studies" },
  { id: "30", label: "30 nmol/kg", nmolKg: 30, note: "Schneider-Helmert 1986/1987" },
  { id: "35", label: "35 nmol/kg", nmolKg: 35, note: "Withdrawal literature" },
  { id: "50", label: "50 nmol/kg", nmolKg: 50, note: "Anesthesia adjunct range" },
];

export const DSIP_HUMAN_SLEEP_STUDIES = [
  {
    study: "Schneider-Helmert 1981",
    n: 6,
    dose: "25 nmol/kg IV",
    finding: "↑ sleep time in observation period",
    limit: "Tiny pilot",
  },
  {
    study: "Schneider-Helmert 1986",
    n: 18,
    dose: "30 nmol/kg IV",
    finding: "Improved latency, TST, efficiency",
    limit: "No adequate concurrent control",
  },
  {
    study: "Monti 1987",
    n: 6,
    dose: "25 nmol/kg IV",
    finding: "Small stage-2 changes; weak clinical benefit",
    limit: "Baseline differences",
  },
  {
    study: "Bes 1992",
    n: 16,
    dose: "25 nmol/kg IV",
    finding: "No significant overall sleep improvement",
    limit: "Independent negative-leaning result",
  },
  {
    study: "Hruz 2001",
    n: "Small",
    dose: "5 mcg/kg IN",
    finding: "↑ P300 amplitude",
    limit: "Not insomnia trial",
  },
];

export const DSIP_ANECDOTAL_PROTOCOLS = [
  {
    id: "low-sc",
    label: "Low bedtime SC",
    dose: "100 mcg",
    frequency: "Once before bed",
    route: "SC",
    duration: "2–4 weeks",
    basis: "Anecdotal / community",
  },
  {
    id: "common-sc",
    label: "Common SC range",
    dose: "150–300 mcg",
    frequency: "Once before bed",
    route: "SC",
    duration: "2–4 weeks",
    basis: "Repeated online/clinic convention",
  },
  {
    id: "upper-sc",
    label: "Upper community SC",
    dose: "300–400 mcg",
    frequency: "Once before bed",
    route: "SC",
    duration: "2–8 weeks",
    basis: "Unvalidated",
  },
  {
    id: "intermittent",
    label: "3× weekly",
    dose: "100–200 mcg",
    frequency: "3 nights/week",
    route: "SC",
    duration: "4–8 weeks",
    basis: "Convention — no tolerance trial",
  },
  {
    id: "historical-iv",
    label: "Historical research",
    dose: "25–30 nmol/kg",
    frequency: "Single or short course",
    route: "IV",
    duration: "1–7 days typical",
    basis: "Human experimental evidence",
  },
];

export const DSIP_COMPARE = {
  clinical: {
    title: "Historical human research (mostly IV)",
    status: "25–30 nmol/kg · small trials · mixed results",
    rows: [
      ["Typical dose", "25–30 nmol/kg (~21–25 mcg/kg)"],
      ["Route", "Intravenous infusion/bolus"],
      ["70 kg total", "~1.5–1.8 mg IV"],
      ["Duration", "Often 1–7 treatment days"],
      ["Monitoring", "Sleep lab / PSG in some studies"],
      ["SC sleep trial", "None identified"],
    ],
  },
  anecdotal: {
    title: "Contemporary community protocols",
    status: "100–400 mcg SC — route/PK unvalidated",
    rows: [
      ["Typical dose", "100–300 mcg fixed SC"],
      ["Route", "Subcutaneous; sometimes intranasal"],
      ["Timing", "30–60 min before bed"],
      ["Frequency", "Nightly, 3× weekly, or 5 on/2 off"],
      ["Duration", "2–8 weeks"],
      ["Evidence", "Uncontrolled reports"],
    ],
  },
};

export const DSIP_FIH_SAD = [
  { cohort: "A1", mcg: 50, note: "Below community range" },
  { cohort: "A2", mcg: 150, note: "Lower community center" },
  { cohort: "A3", mcg: 300, note: "Upper-middle community amount" },
  { cohort: "A4", mcg: 600, note: "Conditional exposure cohort" },
];

export const DSIP_FIH_MAD = [
  { arm: "B1", mcg: 0, label: "Placebo" },
  { arm: "B2", mcg: 150, label: "150 mcg nightly × 14" },
  { arm: "B3", mcg: 300, label: "300 mcg nightly × 14" },
];

export const DSIP_CLAIMS = [
  {
    id: "deep-sleep",
    claim: "DSIP reliably increases deep delta sleep",
    verdict: "Unproven",
    detail:
      "Stage N3/delta effects are inconsistent across studies. Name ≠ proven biology.",
  },
  {
    id: "natural-hormone",
    claim: "DSIP is a natural sleep hormone",
    verdict: "Unresolved",
    detail:
      "No confirmed gene, precursor, or dedicated receptor. Kovalzon 2006: “still unresolved riddle.”",
  },
  {
    id: "sc-clinical",
    claim: "100–300 mcg SC is the clinical dose",
    verdict: "False",
    detail:
      "Community/practitioner convention — not validated in controlled human SC sleep trials.",
  },
  {
    id: "cortisol",
    claim: "DSIP lowers cortisol",
    verdict: "Overstated",
    detail:
      "Mixed ACTH/cortisol human data — one study ↓ ACTH; another no CRH/meal effect.",
  },
  {
    id: "half-life-schedule",
    claim: "8-minute half-life proves daily SC dosing is wrong/right",
    verdict: "Invalid inference",
    detail:
      "Short IV t½ does not automatically define SC interval. Delayed effects also reported.",
  },
  {
    id: "iv-to-sc",
    claim: "200 mcg SC equals lower version of 25 nmol/kg IV",
    verdict: "False",
    detail:
      "For 70 kg, 25 nmol/kg ≈ 1.49 mg IV. 200 mcg SC is ~1/7 mass with unknown bioavailability.",
  },
  {
    id: "nasal-proven",
    claim: "Nasal DSIP is proven for sleep",
    verdict: "Unproven",
    detail:
      "One small P300 report (5 mcg/kg IN) — not insomnia efficacy. Nasal PK unestablished.",
  },
  {
    id: "withdrawal",
    claim: "DSIP treats opioid withdrawal at home",
    verdict: "Unsafe extrapolation",
    detail:
      "Open IV inpatient studies with hypotension cases — not unsupervised detox protocol.",
  },
  {
    id: "10million",
    claim: "Endogenous status makes SC use safe",
    verdict: "False",
    detail:
      "Endogenous role unresolved; product quality, aggregates, and route risks remain.",
  },
];

export const DSIP_EVIDENCE_LADDER = [
  { level: "FDA-approved dose", exists: "None", confidence: "None" },
  { level: "Human clinical sleep dosing", exists: "25–30 nmol/kg IV most common", confidence: "Weak · mixed efficacy" },
  { level: "Broader human IV exposure", exists: "25–150 nmol/kg · ~209 people · 1–15 days", confidence: "Exposure only" },
  { level: "Human intranasal", exists: "5 mcg/kg P300 study only", confidence: "Not sleep efficacy" },
  { level: "Anecdotal SC", exists: "100–400 mcg before bed", confidence: "Insufficient" },
  { level: "Long-term human SC safety", exists: "None established", confidence: "None" },
];

export const DSIP_AE_SIMPLE = [
  {
    category: "IV withdrawal studies (FDA review)",
    note: "Perspiration, headache, nausea, vertigo; hypotension in several cases — confounded by withdrawal state",
  },
  {
    category: "Anesthesia study",
    note: "↑ heart rate, ↓ HRV under isoflurane — not bedtime incidence data",
  },
  {
    category: "SC community use",
    note: "No controlled human SC adverse-event incidence table",
  },
  {
    category: "Product quality",
    note: "Aggregation, endotoxin, impurities — FDA flagged emideltide characterization gaps",
  },
];

export const DSIP_AE_FULL = [
  {
    domain: "Cardiovascular",
    items: "Hypotension (IV withdrawal), tachycardia/HRV changes (anesthesia), orthostatic monitoring warranted in trials",
  },
  {
    domain: "Neurologic / sleep",
    items: "Paradoxical sleep disruption possible; next-day impairment inadequately studied for SC",
  },
  {
    domain: "Local / immune",
    items: "Injection-site reactions; immunogenicity theoretical with repeated peptide SC",
  },
  {
    domain: "Interactions",
    items: "No controlled data with hypnotics, alcohol, opioids, melatonin, or peptide stacks",
  },
];

export const DSIP_DOSAGE_GUIDE = {
  title: "DSIP Dosage: Research Protocols, Human Studies, and Safety",
  updated: "Updated August 2026",
  callout:
    "**Research note:** DSIP **has been given to humans**, but mostly as **25–30 nmol/kg IV** in small 1980s–90s sleep studies with **mixed results**. Contemporary **100–400 mcg SC** bedtime protocols are **community conventions** — **no controlled human SC sleep trial** identified. Plasma **~8 min IV half-life** (limited data) does **not** define SC dosing interval. **No confirmed receptor or gene.**",
  intro: [
    "DSIP (**emideltide**) is a nine-amino-acid peptide (**WAGGDASGE**, MW **~848.8 g/mol**) named for early delta-sleep association. The **name is more certain than the biology** — no dedicated receptor, gene, or precursor confirmed.",
    "Historical insomnia research used **25–30 nmol/kg IV** (~**21–25 mcg/kg**, ~**1.5–1.8 mg** for 70 kg). Some studies reported better sleep efficiency or latency; **Bes 1992** and **Monti 1987** found weak or limited benefit. Online protocols use **100–400 mcg SC** — different route, unknown bioavailability.",
    "FDA July 2026 PCAC voted **7–6 against** recommending emideltide for 503A compounding. Proposed next study: **SC sentinel escalation** 50 → 150 → 300 → 600 mcg with PSG, PK, and cardiovascular monitoring.",
  ],
  glance: {
    title: "DSIP dosage in 30 seconds",
    table: {
      headers: ["Question", "Current answer"],
      rows: [
        ["**Sequence**", "WAGGDASGE · emideltide · MW ~848.8 g/mol"],
        ["**Human sleep anchor**", "25–30 nmol/kg IV (~21–25 mcg/kg)"],
        ["**70 kg IV total**", "~1.5–1.8 mg"],
        ["**Community SC range**", "100–400 mcg · anecdotal"],
        ["**Human SC sleep trial**", "None identified"],
        ["**IV half-life (limited)**", "~8 minutes"],
        ["**Receptor / gene**", "None confirmed"],
        ["**Proposed SC study**", "50–600 mcg SAD · 150/300 mcg × 14 nights MAD"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is DSIP?",
      paragraphs: [
        "Delta sleep-inducing peptide was isolated from cerebral venous blood of sleeping rabbits and later synthesized as a **nonapeptide**. **Emideltide** is the recognized nonproprietary name.",
        "DSIP-like immunoreactivity appears in tissues, but a **gene encoding DSIP**, clear precursor, and **dedicated receptor** have not been identified. Defensible description: defined synthetic peptide with historical sleep, neuroendocrine, stress, pain, and withdrawal research — **endogenous identity and primary mechanism unresolved**.",
      ],
      widget: "dsip-identity-gate",
    },
    {
      id: "controversy",
      title: "Why DSIP is scientifically controversial",
      widget: "dsip-evidence-issues",
      paragraphsAfter: [
        "The name “delta sleep-inducing peptide” should not be treated as proof of reliable **stage N3** increase in humans.",
      ],
    },
    {
      id: "regulatory",
      title: "Research and compounding status",
      paragraphs: [
        "No FDA-approved indication or prescribing dosage. July 2026 **PCAC** voted narrowly against 503A inclusion for emideltide free base and acetate. FDA emphasized **IV-dominated human data**, **no SC PK/safety/efficacy**, chronic-use uncertainty, and injectable peptide quality concerns.",
      ],
    },
    {
      id: "conversion",
      title: "Converting the historical dose",
      paragraphs: [
        "**mcg/kg = nmol/kg × 0.8488** (MW 848.8 g/mol). Calculations compare quantities only — **IV, SC, and intranasal are not interchangeable** without measured exposure.",
      ],
      widget: "dsip-nmol-converter",
      tables: [
        {
          caption: "Molar to mass dose",
          headers: ["nmol/kg", "mcg/kg", "~70 kg total", "~80 kg total"],
          rows: [
            ["25", "21.2", "1.49 mg", "1.70 mg"],
            ["30", "25.5", "1.78 mg", "2.04 mg"],
            ["35", "29.7", "2.08 mg", "2.38 mg"],
            ["50", "42.4", "2.97 mg", "3.40 mg"],
          ],
        },
      ],
    },
    {
      id: "human-sleep",
      title: "Human sleep studies",
      paragraphs: [
        "Most replicated amount: **25–30 nmol/kg IV** — not fixed **100–400 mcg SC**. Better-controlled independent work (**Bes 1992**, **Monti 1987**) was less persuasive than early network studies.",
        "Outcomes varied among stage 2, slow-wave sleep, REM, total sleep time, awakenings, and next-day function — **not uniform “deep sleep increase.”**",
      ],
      widget: "dsip-human-sleep-studies",
    },
    {
      id: "other-human",
      title: "Other human research",
      paragraphs: [
        "**Withdrawal (Dick, Backmund):** 25–35 nmol/kg IV intensive regimens — open-label, hypotension cases, not home protocols. **ACTH/cortisol:** mixed — Bjartell ↓ ACTH; Späth-Schwalbe no CRH/meal effect. **Anesthesia (Pomfrett 2009):** 25–100 nmol/kg IV — ↑ HR, ↓ HRV under isoflurane.",
        "FDA identified **25–150 nmol/kg IV** in **~209 people** over **1–15 days** — exposure total, not efficacy proof.",
      ],
    },
    {
      id: "landscape",
      title: "Commonly reported research protocols",
      widget: "dsip-anecdotal-protocols",
    },
    {
      id: "compare",
      title: "Anecdotal versus clinically studied dosing",
      widget: "dsip-clinical-vs-anecdotal",
      paragraphsAfter: [
        "For 70 kg, **25 nmol/kg IV ≈ 1.49 mg** vs **200 mcg SC ≈ one-seventh** nominal mass with **unknown bioavailability**. Neither direction proves the other route safe or effective.",
      ],
    },
    {
      id: "weight",
      title: "Body weight and escalation",
      paragraphs: [
        "Historical IV used weight-based dosing; contemporary SC uses **fixed mcg**. No validated weight-adjustment model for SC. Online **100 → 300 mcg** weekly escalation schedules are **community conventions**, not clinical titration.",
      ],
    },
    {
      id: "preclinical",
      title: "Animal and preclinical dosage",
      paragraphs: [
        "Rabbit ICV/IV, rat IV/IP, cat SC, rat intranasal stroke model — **inconsistent** across species, circadian phase, and route. No animal-to-human conversion establishes contemporary SC protocol when human IV data already exist.",
      ],
    },
    {
      id: "recon",
      title: "Powder, vial, and subcutaneous math",
      paragraphs: [
        "Community SC amounts require a **validated peptide-content assay** and sterile/endotoxin-controlled product. Calculator below is **arithmetic only** — does not validate research-vial injection.",
      ],
      widget: "dsip-recon-calc",
    },
    {
      id: "routes",
      title: "Route problems",
      paragraphs: [
        "**Oral:** not established. **SC:** no human sleep PK. **Intranasal:** one P300 report — not insomnia dose. **IV at home:** infusion-rate sensitivity in early work — not DIY. **Bacteriostatic water** reconstitution without validated cosolvent is questionable for poorly soluble material.",
      ],
    },
    {
      id: "protocol",
      title: "Complete proposed SC research protocol",
      paragraphs: [
        "**Phase 1b:** randomized, double-blind, placebo-controlled **SC emideltide** in insomnia disorder. **Part A SAD:** 50, 150, 300, 600 mcg SC **90 min before bed** with dense PK (5–480 min). **Part B:** 14-night MAD — placebo, **150 mcg**, **300 mcg** nightly with PSG nights 1/7/14.",
      ],
      widget: "dsip-protocol-timeline",
      paragraphsAfter: [
        "Prerequisites: GMP formulation, GLP tox by intended route, validated LC-MS/MS, aggregate/endotoxin control, IRB/regulatory approval.",
      ],
    },
    {
      id: "safety",
      title: "Safety and side effects",
      widget: "dsip-adverse-events",
    },
    {
      id: "mechanism",
      title: "How DSIP may work",
      paragraphs: [
        "No single confirmed receptor. Hypotheses: indirect **opioid-system** signaling (not direct receptor agonist), **GABA/glutamate** modulation, neuroendocrine effects, **circadian-state dependence**. “Facilitates sleep when conditions allow” ≠ proven circadian reset.",
      ],
    },
    {
      id: "claims",
      title: "Claims versus evidence",
      widget: "dsip-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "dsip-evidence-ladder",
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "DSIP has a **fragmented human history** — mostly **IV 25–30 nmol/kg** in small trials with **mixed sleep findings**. Mechanism remains **unusually uncertain**.",
        "The **100–400 mcg SC** range answers a real search question but is **community convention**, not historical trial dose or validated clinical protocol. The useful next step is **route-specific SC study** with measured exposure, PSG, next-day function, and cardiovascular monitoring.",
      ],
      highlight:
        "IV nmol/kg ≠ SC mcg. Short IV half-life ≠ SC schedule. Name ≠ deep-sleep proof.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the usual DSIP research dose?",
        answer:
          "Historical sleep studies used 25–30 nmol/kg IV. Community protocols report 100–400 mcg SC. Only the former has direct human experimental support; neither is an established clinical dosage.",
      },
      {
        question: "How much is 25 nmol/kg in micrograms?",
        answer:
          "About 21.2 mcg/kg, or roughly 1.49 mg total for a 70 kg participant.",
      },
      {
        question: "Is 300 mcg a standard dose?",
        answer:
          "It is a commonly repeated community amount, not a dose established by a controlled human SC sleep trial.",
      },
      {
        question: "What is DSIP's half-life?",
        answer:
          "FDA cited approximately eight minutes after IV exposure. SC and intranasal human half-lives are not established.",
      },
      {
        question: "Has subcutaneous DSIP been tested in humans for sleep?",
        answer:
          "FDA's 2026 evaluation did not identify clinical SC sleep information. Established literature is predominantly IV.",
      },
      {
        question: "Does DSIP increase deep sleep?",
        answer:
          "Human literature is inconsistent. Some studies reported sleep changes; stage N3/delta effects are not uniform or reliably replicated.",
      },
      {
        question: "Can DSIP lower cortisol?",
        answer:
          "Human neuroendocrine findings are mixed. Broad cortisol-lowering claims are overstated.",
      },
      {
        question: "Is DSIP the same as emideltide acetate?",
        answer:
          "Same active sequence possible, but acetate and free-base materials can differ in mass basis, counterion, and solubility. Assay basis must be specified.",
      },
      {
        question: "Does DSIP need to be cycled?",
        answer:
          "No study establishes a required cycle. Five-on/two-off and two-to-four-week patterns are community conventions.",
      },
      {
        question: "What would establish a real DSIP dose?",
        answer:
          "GMP product, validated SC PK, randomized dose-ranging with polysomnography, next-day performance testing, cardiovascular monitoring, and longer follow-up.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "FDA",
        title: "Emideltide PCAC briefing document",
        detail: "July 2026 · IV-dominated evidence · no SC PK.",
        href: "https://www.fda.gov/media/193344/download",
      },
      {
        authors: "Kovalzon VM, Strekalova TV",
        title: "DSIP: a still unresolved riddle",
        detail: "Mechanism and endogenous status review.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16539679/",
      },
      {
        authors: "Schneider-Helmert D et al.",
        title: "DSIP human sleep studies",
        detail: "25–30 nmol/kg IV historical series.",
        href: "https://pubmed.ncbi.nlm.nih.gov/6895513/",
      },
      {
        authors: "Bes F et al.",
        title: "DSIP in chronic insomniacs — double-blind",
        detail: "25 nmol/kg IV · limited benefit.",
        href: "https://pubmed.ncbi.nlm.nih.gov/1299794/",
      },
      {
        authors: "Hruz P et al.",
        title: "Intranasal DSIP and P300",
        detail: "5 mcg/kg · not insomnia trial.",
        href: "https://pubmed.ncbi.nlm.nih.gov/11763019/",
      },
      {
        authors: "PubChem",
        title: "Delta sleep-inducing peptide",
        detail: "Identity reference.",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Delta-Sleep-Inducing-Peptide",
      },
    ],
  },
};

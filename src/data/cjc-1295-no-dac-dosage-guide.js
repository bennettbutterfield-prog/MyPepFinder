/**
 * CJC-1295 No DAC (Modified GRF 1-29) dosage guide.
 * Exact-molecule human dose-finding: none identified; online 100–300 mcg protocols are anecdotal.
 */

export const CJC_NODAC_IDENTITY = [
  {
    id: "unsure",
    label: "I’m not sure",
    verdict: "Confirm sequence and whether MPA-Lys / DAC is present",
    detail:
      "A vial labeled only “CJC-1295” does not reveal which molecule it contains. Check the exact chemical sequence, presence or absence of an MPA-Lys/DAC group, and the stated salt or counterion before applying any dose or frequency.",
    scheduleHint:
      "Weekly milligram schedules usually imply DAC. Daily 100–300 mcg schedules usually imply no-DAC / Modified GRF 1-29—but labeling alone is unreliable.",
  },
  {
    id: "no-dac",
    label: "No DAC / Modified GRF 1-29",
    verdict: "Short-acting tetrasubstituted GRF(1-29) — this page",
    detail:
      "Also called CJC-1295 without DAC, Mod GRF (1-29), or tetrasubstituted GRF (1-29). FDA uses CJC-1295 free base / acetate for this active moiety. Exact-molecule human dose-finding trials were not identified.",
    scheduleHint:
      "Online conventions: ~100–300 mcg SC, 1–3× daily. These are anecdotal—not clinically established doses.",
  },
  {
    id: "dac",
    label: "With DAC",
    verdict: "Different long-acting molecule — see CJC-1295 DAC page",
    detail:
      "Same tetrasubstituted core plus C-terminal MPA-Lys albumin-binding extension. Human PK/PD used weight-based weekly or every-14-day subcutaneous dosing. Those exposures do not transfer here.",
    scheduleHint:
      "Do not convert DAC mcg/kg weekly trial doses into a no-DAC daily microgram protocol.",
  },
];

export const CJC_NODAC_EVIDENCE_SPLIT = {
  clinical: {
    title: "Exact-molecule human trials",
    status: "None identified",
    points: [
      "No published clinical dose for CJC-1295 free base / acetate",
      "FDA found no peer-reviewed clinical safety or effectiveness data",
      "No established frequency, route, duration, or maximum exposure",
    ],
  },
  online: {
    title: "Common online protocol",
    status: "100–300 mcg · 1–3× daily",
    points: [
      "Most frequently repeated: 100 mcg per administration",
      "Usually subcutaneous; often 8–16 weeks (± break)",
      "Community / vendor / clinic convention — not dose-finding research",
    ],
  },
};

export const CJC_NODAC_MOLECULE = {
  core:
    "Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Gln-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2",
  substitutions: [
    { pos: 2, native: "L-Ala", mod: "D-Ala" },
    { pos: 8, native: "Asn", mod: "Gln" },
    { pos: 15, native: "Gly", mod: "Ala" },
    { pos: 27, native: "Met", mod: "Leu" },
  ],
  rows: [
    {
      feature: "Peptide core",
      nodac: "Tetrasubstituted GRF(1-29)",
      dac: "Same core + C-terminal MPA-Lys",
      sermorelin: "Native GRF(1-29)-NH2",
    },
    {
      feature: "Albumin-binding DAC",
      nodac: "No",
      dac: "Yes",
      sermorelin: "No",
    },
    {
      feature: "Exact human PK (FDA)",
      nodac: "None identified",
      dac: "Yes (long-acting)",
      sermorelin: "Yes — different molecule",
    },
    {
      feature: "Typical online schedule",
      nodac: "1–3× daily (anecdotal)",
      dac: "Weekly / split weekly",
      sermorelin: "Often once daily (historical)",
    },
  ],
};

export const CJC_NODAC_CLAIMS = [
  {
    id: "half-life",
    claim: "“30-minute half-life”",
    status: "widely reported",
    demonstrated: false,
    detail:
      "Repeated in secondary literature, but FDA found no PK studies of CJC-1295 free base or acetate. Closest human data: D-Ala2 GHRH(1-29) IV disappearance half-time 6.7 ± 0.5 min — one substitution, different route.",
  },
  {
    id: "saturation",
    claim: "“100 mcg saturation dose”",
    status: "widely reported",
    demonstrated: false,
    detail:
      "Community shorthand since at least ~2011. No exact-molecule receptor-occupancy or dose-response study identified. Fixed 100 mcg equals 1 mcg/kg only at 100 kg body weight.",
  },
  {
    id: "fasted",
    claim: "Fasted / bedtime dosing required",
    status: "widely reported",
    demonstrated: false,
    detail:
      "Common protocol convention aligned with nocturnal GH physiology and meal-related GH claims. No exact-molecule study compared bedtime vs morning or fasted vs fed timing.",
  },
  {
    id: "cycle",
    claim: "8–16 week cycles (± 4-week break)",
    status: "widely reported",
    demonstrated: false,
    detail:
      "Frequently repeated online duration. No clinical trial established these cycle lengths or showed that a break prevents tolerance or long-term harm.",
  },
];

export const CJC_NODAC_EVIDENCE_FAMILIES = [
  {
    id: "exact",
    label: "Exact no-DAC molecule",
    tone: "none",
    detail:
      "CJC-1295 free base / acetate — no peer-reviewed clinical or nonclinical pharmacology identified by FDA.",
  },
  {
    id: "one-sub",
    label: "One-substitution analogs",
    tone: "indirect",
    detail:
      "D-Ala2 or Nle27 GHRH(1-29) human studies — mechanism/structure–activity context only; not the four-substitution product.",
  },
  {
    id: "sermorelin",
    label: "Sermorelin",
    tone: "indirect",
    detail:
      "Native-sequence GRF(1-29). Historical clinical schedules exist but cannot be transferred to Modified GRF 1-29.",
  },
  {
    id: "dac",
    label: "CJC-1295 DAC",
    tone: "not-transferable",
    detail:
      "Albumin-binding 30-aa molecule; weekly/q14d weight-based SC PK/PD. Chemically and pharmacokinetically distinct.",
  },
];

export const CJC_NODAC_ORIGIN_TIMELINE = [
  {
    year: "≈2010",
    title: "No-DAC identification in seized material",
    detail:
      "Modified GRF / no-DAC peptide appears in analytical and seized-material contexts around this period.",
  },
  {
    year: "2011",
    title: "Early bodybuilding-community dosing talk",
    detail:
      "≈100 mcg Modified GRF 1-29 amounts already circulating in forums, often paired with a GHRP.",
  },
  {
    year: "2010s–2020s",
    title: "Modern protocol-page repetition",
    detail:
      "Clinic, vendor, and protocol sites repeat 100–300 mcg, 1–3× daily schedules—cultural transmission, not clinical development.",
  },
];

export const CJC_NODAC_PROTOCOLS = [
  {
    name: "Lower single-daily",
    dose: "50–100 mcg",
    frequency: "Once daily (often before sleep)",
    duration: "Often 6–12 weeks",
    basis: "Anecdotal",
  },
  {
    name: "Common standalone",
    dose: "100–200 mcg",
    frequency: "Once or twice daily",
    duration: "Often 8–12 weeks",
    basis: "Widely repeated; original clinical basis not identified",
  },
  {
    name: "Frequent-pulse",
    dose: "100 mcg",
    frequency: "2–3× daily",
    duration: "Often 8–16 weeks",
    basis: "Early community convention",
  },
  {
    name: "Higher per-administration",
    dose: "200–300 mcg",
    frequency: "1–3× daily",
    duration: "Often 8–16 weeks",
    basis: "Anecdotal higher exposure",
  },
  {
    name: "Plus ipamorelin",
    dose: "~100 mcg Mod GRF + 100–300 mcg ipamorelin",
    frequency: "1–3× daily",
    duration: "Often 8–16 weeks",
    basis: "Common combination; no controlled dose-finding",
  },
];

export const CJC_NODAC_AE_SIMPLE = [
  [
    "Direct human safety dataset for free base / acetate",
    "None adequate",
    "No reliable incidence table for ISRs, flushing, headache, edema, glucose, or HR",
  ],
];

export const CJC_NODAC_AE_FULL = [
  [
    "Exact-molecule human AEs",
    "Not established",
    "—",
    "No adequate direct safety dataset",
  ],
  [
    "Related D-Ala2 IV bolus (n=5)",
    "Transient flushing at highest dose",
    "Different molecule/route",
    "Cannot establish repeated SC Mod GRF safety",
  ],
  [
    "Class GH/IGF-1 concerns",
    "Theoretical if axis stimulated",
    "—",
    "Fluid retention, glucose intolerance, IH, neoplasm-related concerns",
  ],
  [
    "Formulation / immunogenicity",
    "FDA concerns",
    "—",
    "Aggregation, impurities, endotoxin; limited free-base solubility",
  ],
  [
    "WADA status",
    "Prohibited always",
    "—",
    "GHRH analogs including CJC-1295 (2026 list)",
  ],
];

export const CJC_NODAC_DOSAGE_LADDER = [
  {
    level: "FDA-approved dosing",
    status: "none",
    detail: "No approved product or indication",
  },
  {
    level: "Exact-molecule human clinical-trial dosing",
    status: "none",
    detail: "None identified",
  },
  {
    level: "Related human GHRH-analog dosing",
    status: "indirect",
    detail: "Supports mechanism — not a Modified GRF 1-29 protocol",
  },
  {
    level: "Exact-molecule preclinical dosing",
    status: "none",
    detail: "None identified by FDA",
  },
  {
    level: "DAC-form clinical/preclinical dosing",
    status: "not-transferable",
    detail: "Chemically and pharmacokinetically distinct",
  },
  {
    level: "Anecdotal research protocols",
    status: "low",
    detail: "Widely repeated 100–300 mcg schedules — not clinically validated",
  },
  {
    level: "Long-term dosing evidence",
    status: "none",
    detail: "None for the exact molecule",
  },
];

export const CJC1295_NODAC_DOSAGE_GUIDE = {
  title:
    "CJC-1295 No DAC Dosage: Modified GRF 1-29 Research Protocols and Evidence",
  updated: "Updated August 2026",
  callout:
    "**Research status:** CJC-1295 without DAC is not an FDA-approved drug and has no FDA-approved dosage. The exact no-DAC molecule has **not** been evaluated in published clinical dose-finding trials identified by FDA. This page documents the research landscape and commonly reported experimental protocols; it is **not** a recommendation or self-administration guide.",
  intro: [
    "**No approved or clinically established dose exists.** FDA found no peer-reviewed nonclinical or clinical data assessing the safety or effectiveness of CJC-1295 free base or acetate—the substances corresponding most closely to “CJC-1295 No DAC.”",
    "**The familiar clinical CJC-1295 studies do not apply.** The 20–250 mcg/kg human trial exposures and weekly schedules involved the long-acting **DAC** active moiety, not the no-DAC molecule.",
    "**Online protocols** usually describe **100–300 mcg** per administration, once to three times daily subcutaneously (most often **100 mcg**). That convention is anecdotal. The “30-minute half-life” and “100 mcg saturation dose” are secondary-source claims—not dedicated exact-molecule human pharmacology results.",
  ],
  glance: {
    title: "CJC-1295 No DAC dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**Is there an FDA-approved CJC-1295 No DAC dosage?**", "No"],
        [
          "**Published human dose range for the exact molecule**",
          "None identified",
        ],
        [
          "**Commonly reported online amount**",
          "Approximately 100–300 mcg per administration",
        ],
        ["**Most commonly repeated amount**", "100 mcg per administration"],
        ["**Commonly reported frequency**", "Once to three times daily"],
        ["**Commonly reported route**", "Subcutaneous injection"],
        [
          "**Commonly reported duration**",
          "Often 8–16 weeks, sometimes followed by a 4-week break",
        ],
        ["**Is a “saturation dose” clinically established?**", "No"],
        [
          "**Is the exact human half-life established?**",
          "No; ~30 minutes is a secondary-source convention",
        ],
      ],
    },
  },
  sections: [
    {
      id: "identity",
      title: "First: what does “CJC-1295 No DAC” mean?",
      paragraphs: [
        "The name is a marketing convention. In current catalogs, **CJC-1295 No DAC**, **without DAC**, **Modified GRF 1-29**, **Mod GRF (1-29)**, and **tetrasubstituted GRF (1-29)** usually refer to the same 29-amino-acid GHRH analog. FDA uses **CJC-1295 free base** / **acetate** for this moiety and separately recognizes DAC free base, acetate, and trifluoroacetate as distinct substances.",
      ],
      widget: "cjc-nodac-identity-gate",
      paragraphsAfter: [
        "Compared with sermorelin (native GHRH(1-29)-NH2), Modified GRF 1-29 substitutes positions **2 (D-Ala)**, **8 (Gln)**, **15 (Ala)**, and **27 (Leu)**. Substitutions are intended to improve enzymatic resistance—but evidence that one substitution improves stability is not PK proof for the completed four-substitution molecule.",
      ],
      widgetAfter: "cjc-nodac-molecule-compare",
      highlight:
        "A vial labeled only “CJC-1295” does not reveal which molecule it contains. Confirm sequence and whether an MPA-Lys/DAC group is present before any dose or frequency information.",
    },
    {
      id: "fda-approved",
      title: "Is there an FDA-approved CJC-1295 No DAC dosage?",
      paragraphs: [
        "No. CJC-1295 free base and acetate are not FDA-approved products and have no approved indication, starting dose, maintenance dose, maximum dose, titration schedule, route, or treatment duration.",
        "In December 2024, FDA proposed that the substances not be placed on the Section 503A Bulks List. PCAC voted **0–13** against listing free base and **1–12** against acetate. FDA also concluded the substances were not well characterized—inconsistent naming, incomplete impurity/aggregate characterization, possible injectable immunogenicity, and limited free-base water solubility at the proposed compounding concentration.",
      ],
      highlight:
        "There is currently no FDA-approved dosage for CJC-1295 No DAC. Amounts below document experimental or anecdotal research discussions—not an established prescribing protocol.",
    },
    {
      id: "human-trials",
      title: "Dosage used in human clinical trials",
      paragraphs: [
        "**Exact-molecule evidence:** No published human trial dosing was identified for CJC-1295 free base or acetate. FDA's 2024 evaluation states that published CJC-1295 human papers appear to involve the **DAC** free-base active moiety and did not identify PK data or studies establishing pharmacologic activity for the no-DAC free base or acetate.",
        "**Why DAC trials cannot be reused:** DAC studies tested single 30–250 mcg/kg and repeat 20–60 mcg/kg weekly/q14d doses with ~5.4–9.2-day half-life because the MPA-Lys extension forms an albumin conjugate. Removing that extension changes disposition so fundamentally that neither dose nor schedule transfers to Modified GRF 1-29.",
      ],
      widget: "cjc-nodac-evidence-split",
    },
    {
      id: "related-studies",
      title: "Related human GHRH-analog studies: useful but not direct evidence",
      paragraphs: [
        "Older human research helps explain why the no-DAC peptide was designed, but none evaluated the exact four-substitution product now marketed as CJC-1295 No DAC.",
      ],
      widget: "cjc-nodac-evidence-families",
      tables: [
        {
          caption: "Related compounds — not direct Modified GRF 1-29 evidence",
          headers: [
            "Related compound",
            "Human dose",
            "Finding",
            "Why not direct evidence",
          ],
          rows: [
            [
              "GHRH(1-29) & D-Ala2 GHRH(1-29)",
              "0.015–0.5 mcg/kg IV boluses",
              "Both ↑ GH; D-Ala2 ~2× potency; flushing at highest dose",
              "Only position-2 substitution; IV not typical SC",
            ],
            [
              "D-Ala2 GHRH(1-29)",
              "25 ng/kg/min × 90 min IV",
              "Disappearance t½ 6.7 ± 0.5 min vs 4.3 for unmodified",
              "One substitution; continuous IV — not tetrasubstituted SC PK",
            ],
            [
              "Nle27 GHRH(1-29)",
              "IV / SC / IN dose-response",
              "Dose-responsive GH; SC ~10× IV for comparable GH",
              "Only position 27; norleucine ≠ leucine in Mod GRF",
            ],
            [
              "CJC-1295 DAC",
              "20–250 mcg/kg SC",
              "Long half-life; sustained GH/IGF-1",
              "Different albumin-binding molecule",
            ],
          ],
        },
      ],
      numbered: [
        "Short GHRH fragments can stimulate GH release in humans.",
        "A D-Ala2 substitution can reduce clearance and increase activity vs unmodified GHRH(1-29).",
        "Route and dose materially affect the GH response.",
      ],
      paragraphsAfter: [
        "They do **not** establish that a fixed 100, 200, or 300 mcg SC dose of the four-substitution molecule is effective, safe, or receptor-saturating.",
      ],
    },
    {
      id: "research-dosage",
      title: "CJC-1295 No DAC research dosage",
      paragraphs: [
        "Searches overwhelmingly return community, vendor, clinic, and protocol pages rather than formal dose-finding research. Protocols are consistent enough to document as a research-culture phenomenon—but repetition is not independent scientific validation.",
        "For the exact no-DAC molecule, available evidence does **not** establish a human dose, frequency, half-life, therapeutic window, maximum exposure, treatment duration, or optimal combination.",
      ],
      tables: [
        {
          caption: "Commonly reported research protocols (anecdotal)",
          headers: [
            "Protocol",
            "Reported dose",
            "Frequency",
            "Duration",
            "Evidence basis",
          ],
          rows: [
            [
              "Lower single-daily",
              "50–100 mcg",
              "Once daily (often bedtime)",
              "Often 6–12 weeks",
              "Anecdotal",
            ],
            [
              "Common standalone",
              "100–200 mcg",
              "1–2× daily",
              "Often 8–12 weeks",
              "Widely repeated; clinical basis not identified",
            ],
            [
              "Frequent-pulse",
              "100 mcg",
              "2–3× daily",
              "Often 8–16 weeks",
              "Early community convention",
            ],
            [
              "Higher per-administration",
              "200–300 mcg",
              "1–3× daily",
              "Often 8–16 weeks",
              "Anecdotal higher exposure",
            ],
            [
              "Plus ipamorelin",
              "~100 mcg + 100–300 mcg ipamorelin",
              "1–3× daily",
              "Often 8–16 weeks",
              "Common combo; no controlled dose-finding",
            ],
          ],
        },
        {
          caption: "Reported research dosage landscape",
          headers: ["", "Reported information"],
          rows: [
            [
              "**Reported research range**",
              "≈50–300 mcg per administration; 100–200 mcg most consistent band",
            ],
            ["**Most commonly reported amount**", "100 mcg per administration"],
            ["**Frequency**", "Once to three times daily"],
            ["**Route**", "Subcutaneous injection"],
            [
              "**Typical reported duration**",
              "≈8–16 weeks, sometimes + 4-week break",
            ],
            [
              "**Common combination**",
              "Ipamorelin 100–300 mcg alongside ~100 mcg Mod GRF",
            ],
            ["**Exact-molecule human trial overlap**", "None"],
            [
              "**Evidence quality**",
              "Low / insufficient — community and secondary protocol reporting",
            ],
          ],
        },
      ],
    },
    {
      id: "100-mcg-origin",
      title: "Where did the 100 mcg protocol come from?",
      paragraphs: [
        "The original source could not be reliably established. A 100 mcg Modified GRF 1-29 amount was circulating in bodybuilding forums by **2011**, commonly paired with a GHRP. Later sources repeated it as a “saturation dose,” often adding that it approximates **1 mcg/kg**.",
      ],
      widget: "cjc-nodac-origin-timeline",
      bullets: [
        "A fixed 100 mcg dose equals 1 mcg/kg **only at 100 kg** body weight.",
        "Published D-Ala2 dose-response used **0.015–0.5 mcg/kg IV**, not 1 mcg/kg SC.",
        "The exact tetrasubstituted molecule has no identified human receptor-occupancy or dose-saturation study.",
        "Modern pages frequently cite DAC studies or general GHRH literature that cannot validate a no-DAC saturation threshold.",
      ],
      paragraphsAfter: [
        "The claim that “100 mcg saturates the GHRH receptor” should be treated as an **unverified community rationale**, not a human pharmacology result.",
      ],
      widgetAfter: "cjc-nodac-claim-checker",
    },
    {
      id: "anecdotal-vs-clinical",
      title: "Anecdotal versus clinically studied dosing",
      tables: [
        {
          caption: "Exact-molecule clinical research vs anecdotal reports",
          headers: ["Feature", "Exact-molecule clinical research", "Anecdotal reports"],
          rows: [
            ["Dose", "None established", "Usually 100–300 mcg per administration"],
            ["Frequency", "None established", "1–3× daily"],
            ["Route", "None established", "Usually subcutaneous"],
            ["Duration", "None established", "Commonly 8–16 weeks"],
            ["Dose escalation", "None established", "Some pages ↑ 100 → 150–300 mcg"],
            ["Combination", "None established", "Often + ipamorelin / other GHRP"],
            [
              "Evidence",
              "No exact-molecule human trials identified",
              "Uncontrolled online protocols",
            ],
            ["Established safety", "No", "No"],
          ],
        },
      ],
      paragraphsAfter: [
        "There is **no direct overlap** to compare because the clinically studied dose column is empty. The responsible interpretation is not that the online dose is “conservative”—it is that the relationship between the reported amount and actual human exposure, response, or risk has **not been defined**.",
      ],
    },
    {
      id: "protocol-variations",
      title: "Research protocol variations",
      numbered: [
        "**Once daily vs multiple daily.** Bedtime once-daily vs 2–3× daily (fasted morning / post-exercise) assumes a short exposure window. Plausible for a short-acting GHRH analog—but untested for the exact compound without human PK.",
        "**Continuous vs cyclical.** Uninterrupted 8–16 weeks or 5-on/2-off plus ~4-week breaks appear online. No exact-molecule study established that interruptions prevent desensitization or improve safety.",
        "**Standalone vs combination.** Pairing with ipamorelin/GHRP-2/GHRP-6 has pathway-level synergy rationale, but no controlled human study tested the modern fixed-dose Mod GRF/ipamorelin combination. Combination vials may not specify DAC vs no-DAC.",
        "**Bedtime and fasted timing.** Common conventions—not demonstrated requirements for the exact no-DAC molecule.",
      ],
    },
    {
      id: "half-life",
      title: "Half-life and dose frequency: what is actually known?",
      paragraphs: [
        "The approximately **30-minute** half-life attributed to Modified GRF 1-29 is repeated throughout secondary literature. FDA explicitly found **no** pharmacokinetic studies of CJC-1295 free base or acetate.",
        "Closest direct human evidence: **D-Ala2 GHRH(1-29)-NH2** during a 90-minute IV infusion had disappearance half-time **6.7 ± 0.5 minutes** vs **4.3 ± 1.4 minutes** for unmodified GHRH(1-29). Subcutaneous absorption and the other three substitutions could change the time course—so 6.7 minutes is not the final product's half-life either.",
      ],
      highlight:
        "Modified GRF 1-29 is expected to be much shorter acting than CJC-1295 DAC, but its exact human subcutaneous half-life has not been established in a dedicated published study.",
    },
    {
      id: "body-weight",
      title: "Dosage by body weight",
      paragraphs: [
        "No validated CJC-1295 No DAC dosage-by-weight chart exists. Community protocols usually present **100 mcg as a fixed dose** regardless of weight. The occasional “≈1 mcg/kg” explanation is inconsistent and not a legitimate dosing model.",
      ],
      tables: [
        {
          caption: "What 100 mcg equals mathematically (not a dose chart)",
          headers: ["Body weight", "100 mcg equals", "Clinical meaning"],
          align: ["right", "left", "left"],
          rows: [
            ["60 kg", "1.67 mcg/kg", "None established"],
            ["70 kg", "1.43 mcg/kg", "None established"],
            ["80 kg", "1.25 mcg/kg", "None established"],
            ["90 kg", "1.11 mcg/kg", "None established"],
            ["100 kg", "1.00 mcg/kg", "None established"],
          ],
        },
      ],
    },
    {
      id: "animal-dosing",
      title: "Animal / preclinical research dosage",
      paragraphs: [
        "FDA did **not** identify pharmacological or toxicology studies of CJC-1295 free base or acetate—so there is no defensible exact-molecule animal-dose table.",
        "Adjacent 2005 discovery work tested **maleimido/DAC derivatives** of GRF(1-29), including the albumin-binding compound selected as CJC-1295 DAC. FDA animal-toxicity concerns likewise came from DAC of unspecified form. Those data may flag class-level issues worth investigating but should **not** be inserted into a Modified GRF 1-29 animal-dose table.",
      ],
    },
    {
      id: "why-doses",
      title: "Why these reported research doses are used",
      numbered: [
        "**Short-acting design assumption.** Lacking the albumin-binding extension explains daily/multi-daily vs weekly schedules—but exact frequency remains anecdotal without human SC PK.",
        "**Extrapolation from GHRH analog studies.** Older GHRH(1-29), D-Ala2, sermorelin, and related papers support plausibility—not a validated protocol.",
        "**The “saturation dose” story.** Inherited community shorthand without exact-molecule receptor-occupancy proof.",
        "**Combination synergy.** Explains ipamorelin popularity—not specific 1:1 ratios, frequency, or 8–16-week duration.",
        "**Convenience and vial arithmetic.** Fixed 100 mcg increments are easy from common 2/5/10 mg vials—easy math is not optimal pharmacology.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      paragraphs: [
        "CJC-1295 No DAC dosing is **poorly established**. Familiar 100–300 mcg, 1–3× daily protocols come from community and secondary sources rather than exact-molecule human trials. Even the commonly quoted half-life and 100 mcg “saturation dose” lack dedicated published validation for free base or acetate.",
      ],
      widget: "cjc-nodac-dosage-ladder",
    },
    {
      id: "dose-escalation",
      title: "Dose escalation",
      paragraphs: [
        "**Formal clinical escalation:** none exists for the exact no-DAC molecule.",
        "**Anecdotal escalation** on modern pages often moves 50–100 → 150–200 → 200–300 mcg per administration, or adds extra daily administrations instead. Neither approach has been compared clinically. This documents a pattern—not a recommended titration.",
      ],
      tables: [
        {
          caption: "Anecdotally reported research escalation",
          headers: ["Reported period", "Reported amount", "Frequency", "Evidence status"],
          rows: [
            [
              "Initial 1–2 weeks",
              "50–100 mcg",
              "Usually once daily",
              "Anecdotal; no starting-dose study",
            ],
            [
              "Following 1–2 weeks",
              "150–200 mcg",
              "1–2× daily",
              "Anecdotal; no validated interval",
            ],
            [
              "Later protocol",
              "200–300 mcg",
              "1–3× daily",
              "Anecdotal higher exposure; no controlled safety data",
            ],
          ],
        },
      ],
    },
    {
      id: "safety-dosage",
      title: "Safety findings relevant to dosage",
      paragraphs: [
        "There is **no adequate human safety dataset** for CJC-1295 free base or acetate—hence no reliable incidence table for injection-site reactions, flushing, headache, edema, glucose effects, heart-rate changes, or other AEs attributable to the exact molecule.",
        "As a proposed GHRH analog, class GH/IGF-1 risks could be relevant if the axis is stimulated. FDA highlighted injectable-peptide aggregation, impurity, endotoxin, and immunogenicity concerns, plus free-base solubility/characterization gaps. WADA prohibits GHRH analogs including CJC-1295 at all times (2026 list).",
      ],
      widget: "cjc-nodac-adverse-events",
    },
    {
      id: "bottom-line",
      title: "Editorial bottom line",
      paragraphs: [
        "The most accurate answer to “What is the CJC-1295 No DAC dosage?” is that **no clinically established dose exists**. The 100–300 mcg per-administration range and 1–3× daily schedule are genuine online conventions worth documenting—but they are not human trial protocols.",
      ],
      highlight:
        "Keep DAC studies, sermorelin studies, and one-substitution GHRH analog studies clearly separated so the no-DAC evidence is not made to look stronger than it is.",
    },
  ],
  faq: {
    title: "CJC-1295 No DAC dosage FAQ",
    items: [
      {
        question: "What is the standard CJC-1295 No DAC dosage?",
        answer:
          "There is no standard or FDA-approved dose. Online protocols most often report 100–200 mcg per administration, with a broader repeated range of approximately 50–300 mcg, but these amounts have not been validated in exact-molecule human trials.",
      },
      {
        question: "What CJC-1295 No DAC dose was studied in humans?",
        answer:
          "No published human dose was identified for the exact CJC-1295 free-base or acetate molecule. Human trials commonly cited for CJC-1295 used the long-acting DAC active moiety instead.",
      },
      {
        question: "Is 100 mcg a clinically established saturation dose?",
        answer:
          "No. The 100 mcg “saturation dose” is a widely repeated community claim. No human receptor-occupancy or dose-response study of the exact tetrasubstituted no-DAC molecule was identified to establish that threshold.",
      },
      {
        question: "Is CJC-1295 No DAC dosed by body weight?",
        answer:
          "Community protocols generally use fixed microgram amounts. Some sources explain 100 mcg as approximately 1 mcg/kg, but that equivalence applies only at 100 kg and is not a validated weight-based regimen.",
      },
      {
        question: "How often is CJC-1295 No DAC used in reported protocols?",
        answer:
          "Once to three times daily is commonly reported online. No controlled exact-molecule study established the optimal frequency.",
      },
      {
        question: "How long is CJC-1295 No DAC used in reported protocols?",
        answer:
          "Eight to sixteen weeks is frequently repeated, sometimes followed by a four-week break. No clinical trial established these cycle lengths.",
      },
      {
        question: "Does CJC-1295 No DAC have a 30-minute half-life?",
        answer:
          "Approximately 30 minutes is the most commonly quoted estimate, but it is not supported by a dedicated published human PK study of the exact molecule. FDA found no PK studies of CJC-1295 free base or acetate.",
      },
      {
        question: "Is CJC-1295 No DAC the same as Modified GRF 1-29?",
        answer:
          "In current peptide-market terminology, usually yes. Because labeling is inconsistent, the chemical sequence and presence or absence of the MPA-Lys group remain more reliable than the short product name.",
      },
      {
        question: "Is Modified GRF 1-29 the same as sermorelin?",
        answer:
          "No. Both are 29-amino-acid GHRH analogs, but Modified GRF 1-29 substitutes amino acids at positions 2, 8, 15, and 27. Sermorelin has the native GRF(1-29) sequence.",
      },
      {
        question: "Is CJC-1295 No DAC the same as CJC-1295 DAC?",
        answer:
          "No. The DAC molecule contains an additional MPA-Lys group that binds albumin and produces a multi-day half-life. Confusing the two can create a major exposure and scheduling error.",
      },
      {
        question: "Is CJC-1295 No DAC commonly combined with ipamorelin?",
        answer:
          "Yes, online protocols frequently pair approximately 100 mcg Modified GRF 1-29 with 100–300 mcg ipamorelin. No controlled human trial identified here established the dose, ratio, frequency, clinical benefit, or long-term safety of that combination.",
      },
      {
        question: "Does CJC-1295 No DAC need to be taken while fasted or before bed?",
        answer:
          "Those timing rules are common online conventions. No exact-molecule study compared fasted and fed conditions or established an optimal time of day.",
      },
      {
        question: "Is daily use safer than weekly CJC-1295 DAC?",
        answer:
          "That comparison has not been tested. A shorter-acting molecule may produce a different exposure pattern, but no direct trial has compared safety, efficacy, GH pulsatility, or IGF-1 exposure.",
      },
      {
        question: "Can CJC-1295 DAC trial doses be converted to a no-DAC dose?",
        answer:
          "No reliable conversion exists. Albumin binding changes half-life, clearance, accumulation, and duration of hormone elevation.",
      },
      {
        question: "Are reported side effects dose dependent?",
        answer:
          "No exact-molecule human study established a dose–adverse-event relationship. Flushing occurred at the highest dose in a small IV study of a related D-Ala2 analog, but that is insufficient to construct a Modified GRF 1-29 safety curve.",
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
        detail: "Votes against 503A listing for free base and acetate.",
        href: "https://www.fda.gov/media/185642/download",
      },
      {
        authors: "FDA PCAC",
        title: "December 4, 2024 Pharmacy Compounding Advisory Committee Transcript",
        detail: "Characterization and effectiveness discussion.",
        href: "https://www.fda.gov/media/185641/download",
      },
      {
        authors: "Barron JL et al.",
        title:
          "GH responses to GHRH(1-29)-NH2 and a D-Ala2 analog in normal men",
        detail: "Peptides, 1985.",
        href: "https://pubmed.ncbi.nlm.nih.gov/2866496/",
      },
      {
        authors: "Soule S et al.",
        title:
          "D-Ala2 substitution increases half-life and decreases metabolic clearance in normal men",
        detail: "JCEM, 1994.",
        href: "https://pubmed.ncbi.nlm.nih.gov/7962295/",
      },
      {
        authors: "Vance ML et al.",
        title:
          "IV, SC, and intranasal Nle27 GHRH(1-29)-NH2 dose response in normal men",
        detail: "Clinical Pharmacology & Therapeutics, 1986.",
        href: "https://pubmed.ncbi.nlm.nih.gov/3096623/",
      },
      {
        authors: "Jetté L et al.",
        title: "Identification of albumin-binding CJC-1295 as a long-lasting GRF analog",
        detail: "Endocrinology, 2005.",
        href: "https://pubmed.ncbi.nlm.nih.gov/15817669/",
      },
      {
        authors: "Teichman SL et al.",
        title: "Human study of long-acting CJC-1295 DAC",
        detail: "JCEM, 2006 — DAC molecule, not no-DAC.",
        href: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "GHRH analogs including CJC-1295 prohibited at all times.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "CJC-1295 No DAC (Modified GRF 1-29 / free base / acetate) is investigational and **not FDA approved**. There is **no approved dosage** and **no exact-molecule human dose-finding trial** identified by FDA.",
      "This page documents research landscape and commonly reported experimental protocols. It is **not** a dosing, reconstitution, cycle, or self-administration guide.",
      "Do not transfer CJC-1295 DAC trial doses or schedules to the no-DAC molecule. Confirm identity before interpreting any online protocol.",
    ],
  },
};

/**
 * KLOW blend dosage guide (GHK-Cu + KPV + BPC-157 + TB-500).
 * Exact-combination human trial: none identified. Protocols document community conventions.
 */

export const KLOW_COMPOSITION = [
  {
    id: "ghk-cu",
    name: "GHK-Cu",
    mg: 50,
    pct: 62.5,
    theme: "Copper signaling, ECM, collagen, wound biology",
  },
  {
    id: "kpv",
    name: "KPV",
    mg: 10,
    pct: 12.5,
    theme: "Inflammatory signaling and epithelial barrier models",
  },
  {
    id: "bpc-157",
    name: "BPC-157",
    mg: 10,
    pct: 12.5,
    theme: "Angiogenesis, NO signaling, tendon and GI models",
  },
  {
    id: "tb-500",
    name: "TB-500",
    mg: 10,
    pct: 12.5,
    theme: "Actin dynamics, migration, angiogenesis, wound models",
  },
];

/** Mass fractions for authentic 50/10/10/10 vials */
export const KLOW_FRACTIONS = {
  ghkCu: 0.625,
  kpv: 0.125,
  bpc: 0.125,
  tb: 0.125,
};

export function klowComponentsFromTotalMg(totalMg) {
  const t = Number(totalMg);
  if (!Number.isFinite(t) || t <= 0) return null;
  return {
    totalMg: t,
    ghkCuMg: t * KLOW_FRACTIONS.ghkCu,
    kpvMcg: t * KLOW_FRACTIONS.kpv * 1000,
    bpcMcg: t * KLOW_FRACTIONS.bpc * 1000,
    tbMcg: t * KLOW_FRACTIONS.tb * 1000,
  };
}

export const KLOW_IDENTITY = [
  {
    id: "tb-fragment",
    label: "TB-500 = Ac-LKKTETQ",
    verdict: "Matches the usual KLOW fragment identity",
    detail:
      "Analytical studies of products sold as TB-500 identified the acetylated seven-amino-acid fragment Ac-LKKTETQ (residues 17–23). Full-length 43-aa thymosin beta-4 clinical doses cannot be reused for this fragment.",
  },
  {
    id: "tb4-full",
    label: "Label says full-length Tβ4",
    verdict: "Different molecule — not interchangeable with TB-500 fragment data",
    detail:
      "Full-length thymosin beta-4 contains functional regions beyond the actin-binding sequence. Route, clearance, immunogenicity, and activity can differ substantially from Ac-LKKTETQ.",
  },
  {
    id: "ghk-cu",
    label: "Confirmed GHK-Cu complex",
    verdict: "Required for authentic 50 mg copper-complex allocation",
    detail:
      "GHK is the tripeptide ligand; GHK-Cu is its copper complex. “50 mg GHK-Cu” may not equal 50 mg unconjugated GHK plus an unspecified copper salt. Confirm copper content and assay basis.",
  },
  {
    id: "unsure",
    label: "Only the trade name “KLOW”",
    verdict: "Incomplete — confirm 50/10/10/10 and each sequence",
    detail:
      "Some pages reverse prose order and incorrectly assign 50 mg to BPC-157. The label must state which component receives 50 mg (standard: GHK-Cu) and resolve all four identities.",
  },
];

export const KLOW_COMBO_STATUS = [
  ["Pharmacokinetics", "None identified"],
  ["Subcutaneous bioavailability", "None identified"],
  ["Dose-response", "None identified"],
  ["Ratio comparison", "None identified"],
  ["Interaction study", "None identified"],
  ["Controlled efficacy trial", "None identified"],
  ["Long-term safety study", "None identified"],
  ["Maximum tolerated dose", "Not established"],
];

export const KLOW_PROTOCOL_PHASES = [
  {
    id: "loading",
    phase: "Loading",
    weeks: "1–4",
    schedule: "10 units (2 mL recon), five days weekly",
    totalMg: 4,
    weeklyMg: 20,
    purpose: "Higher reported exposure; one vial nominally lasts four weeks",
  },
  {
    id: "maintenance",
    phase: "Maintenance",
    weeks: "5–12",
    schedule: "5 units (2 mL recon), three nonconsecutive days weekly",
    totalMg: 2,
    weeklyMg: 6,
    purpose: "Step-down frequency and amount — not PK-guided",
  },
  {
    id: "washout",
    phase: "Washout",
    weeks: "13–16 or 13–20",
    schedule: "None",
    totalMg: 0,
    weeklyMg: 0,
    purpose: "Observe persistence or reversal of measured changes",
  },
];

export const KLOW_CUMULATIVE = [
  { component: "GHK-Cu", loading: "50 mg", maintenance: "30 mg", cycle: "80 mg" },
  { component: "KPV", loading: "10 mg", maintenance: "6 mg", cycle: "16 mg" },
  { component: "BPC-157", loading: "10 mg", maintenance: "6 mg", cycle: "16 mg" },
  { component: "TB-500", loading: "10 mg", maintenance: "6 mg", cycle: "16 mg" },
  {
    component: "Total blend",
    loading: "80 mg",
    maintenance: "48 mg",
    cycle: "128 mg (≈1.6 vials)",
  },
];

export const KLOW_COMPARE = {
  clinical: {
    title: "Exact KLOW clinical research",
    status: "None established",
    rows: [
      ["Total dose", "None established"],
      ["Ratio", "None established"],
      ["Frequency", "None established"],
      ["Route", "None established"],
      ["Duration", "None established"],
      ["Escalation", "None established"],
      ["Safety", "No exact-combination study"],
    ],
  },
  anecdotal: {
    title: "Community KLOW protocols",
    status: "Anecdotal conventions",
    rows: [
      ["Total dose", "Usually 2–4 mg per administration"],
      ["Ratio", "5:1:1:1 by mass"],
      ["Frequency", "Three times weekly to daily"],
      ["Route", "Subcutaneous"],
      ["Duration", "8–12 weeks"],
      ["Escalation", "Loading/maintenance or 2 → 4 → 6 mg daily"],
      ["Safety", "Uncontrolled reports + component assumptions"],
    ],
  },
};

export const KLOW_EVIDENCE_LADDER = [
  {
    level: "Standardized clinical dose",
    exists: "None",
    confidence: "None",
  },
  {
    level: "Exact-combination human trial",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Exact-combination animal study",
    exists: "None identified",
    confidence: "None",
  },
  {
    level: "Component human research",
    exists: "Topical GHK-Cu, full-length Tβ4, very limited BPC-157",
    confidence: "Low–moderate for narrow contexts; not transferable",
  },
  {
    level: "Component preclinical research",
    exists: "Substantial but uneven cell/animal literature",
    confidence: "Moderate for mechanisms; low for human dosing",
  },
  {
    level: "Community blend protocol",
    exists: "2–4 mg per administration; 8–12 weeks",
    confidence: "Low",
  },
  {
    level: "Higher daily titration",
    exists: "Up to 6 mg/day",
    confidence: "Very low",
  },
];

export const KLOW_AE_SIMPLE = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No blend safety trial denominator",
  },
  {
    topic: "Community mentions",
    status: "Unquantified",
    note: "Injection-site reaction, headache, fatigue, nausea",
  },
  {
    topic: "Copper exposure",
    status: "Context-dependent",
    note: "GHK-Cu complex; copper metabolism disorders",
  },
  {
    topic: "Fixed-ratio attribution",
    status: "Limited control",
    note: "Cannot reduce one peptide without reducing all",
  },
];

export const KLOW_AE_FULL = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No blend trial",
    context:
      "Community reports mention redness, stinging, bruising, headache, fatigue, nausea, flu-like feelings — frequency/causality unknown.",
  },
  {
    topic: "Copper exposure",
    status: "Assay-dependent",
    note: "Elemental copper depends on verified form",
    context:
      "Extra caution in copper-metabolism disorders, significant liver disease, or with other copper products.",
  },
  {
    topic: "Angiogenesis / abnormal growth",
    status: "Class concern",
    note: "Context-dependent vascular signaling",
    context:
      "People with active or recent cancer are commonly excluded from experimental repair-peptide protocols; exact KLOW risk unquantified.",
  },
  {
    topic: "Immune / product quality",
    status: "Elevated for four-component vial",
    note: "Identity, potency, sterility, endotoxin, stability",
    context:
      "One aggregate purity percentage is inadequate; analytics should resolve every component.",
  },
  {
    topic: "Fixed-ratio limitations",
    status: "Experimental-control tradeoff",
    note: "Convenience vs attribution",
    context:
      "If an adverse effect occurs, the blend makes cause identification difficult. Ratio cannot be altered within the vial.",
  },
  {
    topic: "Anti-doping",
    status: "Prohibited components",
    note: "BPC-157 and Tβ4 derivatives",
    context:
      "KLOW is incompatible with tested sport regardless of “recovery blend” marketing.",
  },
];

export const KLOW_DOSAGE_GUIDE = {
  title:
    "KLOW Peptide Dosage: KPV + GHK-Cu + TB-500 + BPC-157 Research Protocol",
  updated: "Updated August 2026",
  callout:
    "**Research note:** KLOW is a **fixed-ratio commercial blend** rather than a clinically studied combination. The protocols below document research-community conventions and calculate the amount of each component; they are **not** established clinical dosing guidelines. **No controlled human trial of the exact four-peptide blend was identified.**",
  intro: [
    "The standard KLOW vial contains **80 mg total peptide:** **50 mg GHK-Cu** plus **10 mg each** of KPV, BPC-157, and TB-500 (**5:1:1:1** by mass).",
    "Every draw preserves that ratio. **2 mg** total = **1.25 mg GHK-Cu** + **250 mcg** each of the other three; **4 mg** total = **2.5 mg GHK-Cu** + **500 mcg** each. The most coherent complete community protocol is front-loaded: **4 mg five times weekly (weeks 1–4)**, then **2 mg three times weekly (weeks 5–12)**, then a **4–8-week** break.",
    "Human findings for topical GHK-Cu, full-length thymosin beta-4, or isolated BPC-157 **cannot** establish the safety or effectiveness of injectable KLOW. Confirm that “TB-500” means `Ac-LKKTETQ`, not full-length Tβ4.",
  ],
  glance: {
    title: "KLOW dosage in 30 seconds",
    table: {
      headers: ["Question", "Research summary"],
      rows: [
        [
          "**Standard vial**",
          "80 mg total: GHK-Cu 50 mg + KPV 10 mg + BPC-157 10 mg + TB-500 10 mg",
        ],
        ["**Fixed ratio by mass**", "5:1:1:1"],
        ["**Common amount per administration**", "2–4 mg total blend"],
        [
          "**Per-component at 2 mg total**",
          "GHK-Cu 1.25 mg; other three 250 mcg each",
        ],
        [
          "**Per-component at 4 mg total**",
          "GHK-Cu 2.5 mg; other three 500 mcg each",
        ],
        ["**Common route**", "Subcutaneous"],
        ["**Reported cycle**", "8–12 weeks, then 4–8 weeks off"],
        ["**Exact-combination human trial**", "None identified"],
        [
          "**Evidence quality**",
          "Anecdotal for the blend; mixed preclinical / limited human for components",
        ],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is KLOW?",
      paragraphs: [
        "KLOW is the informal name for a four-peptide blend: **KPV** (lysine-proline-valine, the C-terminal tripeptide of α-MSH), **GHK-Cu** (copper complex of glycyl-L-histidyl-L-lysine), **BPC-157** (synthetic 15-aa peptide), and **TB-500** (generally N-acetylated thymosin beta-4 17–23, `Ac-LKKTETQ`).",
        "The name is a variation of **GLOW** (GHK-Cu + BPC-157 + TB-500). KLOW adds KPV. It is **not** a single new molecule—four chemically distinct peptides lyophilized into one vial, each with its own identity, mechanism, evidence base, and analytical requirements.",
      ],
      widget: "klow-composition",
    },
    {
      id: "composition",
      title: "Standard KLOW composition",
      paragraphs: [
        "The **50/10/10/10** label must list which component receives the 50 mg allocation. In the standard formulation, **GHK-Cu is the 50 mg component**. Some online pages reverse the order in prose and incorrectly assign 50 mg to BPC-157.",
      ],
      tables: [
        {
          caption: "80 mg standard vial",
          headers: [
            "Component",
            "Amount",
            "Share of total mass",
            "Primary research theme",
          ],
          rows: [
            [
              "**GHK-Cu**",
              "50 mg",
              "62.5%",
              "Copper signaling, ECM, collagen, wound biology",
            ],
            [
              "**KPV**",
              "10 mg",
              "12.5%",
              "Inflammatory signaling and epithelial barrier models",
            ],
            [
              "**BPC-157**",
              "10 mg",
              "12.5%",
              "Angiogenesis, NO signaling, tendon and GI models",
            ],
            [
              "**TB-500**",
              "10 mg",
              "12.5%",
              "Actin dynamics, migration, angiogenesis, wound models",
            ],
            ["**Total**", "**80 mg**", "**100%**", "Multi-pathway repair hypothesis"],
          ],
        },
      ],
    },
    {
      id: "identity",
      title: "Identity checks before interpreting a KLOW label",
      paragraphs: [
        "**TB-500 versus thymosin beta-4:** Full-length Tβ4 has 43 amino acids. Products sold as TB-500 have been identified as `Ac-LKKTETQ`. Full-length Tβ4 clinical research is not a TB-500 fragment dosing study.",
        "**GHK versus GHK-Cu:** Confirm the intended copper complex, copper content, peptide identity, and the basis of the stated milligram quantity.",
        "**Free base versus acetate:** Labels should identify salt form and whether stated mass includes counterions and water—important for analytical potency and cross-supplier comparison.",
      ],
      widget: "klow-identity-gate",
    },
    {
      id: "regulatory",
      title: "Current research and compounding status",
      paragraphs: [
        "KLOW itself has not undergone a regulatory review as a fixed combination. In July 2026, an FDA advisory committee narrowly recommended that BPC-157, KPV, and TB-500-related bulk substances be eligible for the 503A compounding list. The votes were **advisory** and did **not** evaluate the KLOW blend, its 50/10/10/10 ratio, or its dosing schedule. GHK-Cu was not part of that vote; FDA treats non-injectable and injectable GHK-Cu nominations differently.",
      ],
      highlight:
        "No US prescribing information establishes a KLOW dose.",
    },
    {
      id: "exact-combo",
      title: "Has the exact KLOW combination been studied?",
      paragraphs: [
        "No controlled human or animal dose-ranging study of the exact 50/10/10/10 KLOW blend was identified. The four components cannot be assumed to remain equally stable in one vial, share a common ideal frequency, or produce additive benefits. Fixed-ratio convenience is not pharmacological optimization.",
      ],
      widget: "klow-combo-status",
    },
    {
      id: "component-human",
      title: "Human research on the individual components",
      tables: [
        {
          caption: "Component human research vs relevance to KLOW",
          headers: [
            "Component or related molecule",
            "Human research",
            "Route and exposure",
            "Relevance to KLOW",
          ],
          rows: [
            [
              "GHK-Cu",
              "Topical gel in diabetic neuropathic ulcers; other topical/cosmetic studies",
              "Topical",
              "Supports local skin/wound research — not systemic injection or KLOW dosing",
            ],
            [
              "BPC-157",
              "Very small IV pilot (2 adults, 10 then 20 mg); small uncontrolled IA/intravesical reports",
              "IV, IA, intravesical",
              "Limited safety observations; no validation of daily SC microgram protocols",
            ],
            [
              "Full-length thymosin beta-4",
              "IV Phase 1 and topical wound/eye studies",
              "IV or topical",
              "Different 43-aa molecule — not the 7-aa TB-500 fragment",
            ],
            [
              "KPV",
              "FDA identified no human exposure study",
              "None established",
              "No human dose or safety range",
            ],
            [
              "Exact KLOW blend",
              "None identified",
              "None",
              "No direct evidence",
            ],
          ],
        },
      ],
      paragraphsAfter: [
        "Human studies of full-length thymosin beta-4 tested a molecule many times larger than `Ac-LKKTETQ`. Route, clearance, tissue distribution, immunogenicity, and biological activity can therefore differ substantially.",
      ],
    },
    {
      id: "research-dosage",
      title: "KLOW research dosage",
      paragraphs: [
        "Modern protocol pages most consistently report **2–4 mg of total KLOW blend per administration**. Because GHK-Cu is 62.5% of the vial and each other component is 12.5%, the total blend number must always be translated into **four component amounts**.",
      ],
      tables: [
        {
          caption: "Commonly reported KLOW protocols (anecdotal)",
          headers: [
            "Research protocol",
            "Total blend",
            "Frequency",
            "Route",
            "Duration",
            "Evidence basis",
          ],
          rows: [
            [
              "Low fixed-dose",
              "2 mg",
              "3× weekly to daily",
              "SC",
              "8–12 weeks",
              "Community convention",
            ],
            [
              "Common fixed-dose",
              "4 mg",
              "5× weekly or daily",
              "SC",
              "4–8 weeks",
              "Widely repeated protocol-page convention",
            ],
            [
              "Front-loaded taper",
              "4 mg then 2 mg",
              "Phase dependent",
              "SC",
              "12 weeks",
              "Complete community protocol with consistent vial math",
            ],
            [
              "Daily step-up",
              "2 → 4 → 6 mg/day",
              "Daily",
              "SC",
              "8–12 weeks",
              "Higher-exposure anecdotal titration",
            ],
            [
              "Every-other-day",
              "2–4 mg",
              "EOD",
              "SC",
              "8–12 weeks",
              "Anecdotal frequency variation",
            ],
          ],
        },
      ],
      widgetAfter: "klow-component-breakdown",
    },
    {
      id: "complete-protocol",
      title: "Complete reported KLOW research protocol",
      paragraphs: [
        "The following **12-week front-loaded** protocol is the most internally coherent recurring schedule: phases are explicit, per-component exposures are transparent, and approximately **two 80 mg vials** cover the cycle (128 mg total blend ≈ 1.6 vials before handling loss).",
        "This chart assumes an **80 mg vial reconstituted to 2 mL** (40 mg/mL). On a U-100 syringe, **10 units = 0.10 mL** and **5 units = 0.05 mL**. The front-loaded protocol does **not** escalate—it begins higher and steps down. That structure is a “loading then maintenance” story, **not** KLOW pharmacokinetics.",
      ],
      widget: "klow-protocol-timeline",
      tables: [
        {
          caption: "Cumulative exposure across the 12-week protocol",
          headers: [
            "Component",
            "Loading phase total",
            "Maintenance phase total",
            "Full cycle total",
          ],
          rows: [
            ["GHK-Cu", "50 mg", "30 mg", "80 mg"],
            ["KPV", "10 mg", "6 mg", "16 mg"],
            ["BPC-157", "10 mg", "6 mg", "16 mg"],
            ["TB-500", "10 mg", "6 mg", "16 mg"],
            ["**Total blend**", "**80 mg**", "**48 mg**", "**128 mg**"],
          ],
        },
        {
          caption: "Measurement schedule (research design)",
          headers: ["Time point", "Measurements"],
          rows: [
            [
              "Baseline",
              "Symptoms, function, photos, vitals, training/wound variables; batch analytics",
            ],
            ["End of week 2", "Early tolerability and predefined outcomes"],
            [
              "End of week 4",
              "Loading-phase response before dose/frequency decrease",
            ],
            ["End of week 8", "Maintenance-phase response"],
            ["End of week 12", "Final on-cycle assessment"],
            ["End of washout", "Persistence or reversal of measured changes"],
          ],
        },
      ],
      notes: [
        "**Early-stop criteria (examples):** severe/progressive injection-site reaction; allergic symptoms (rash, facial swelling, breathing difficulty); persistent dizziness, headache, nausea, or fatigue; marked BP/HR change; new neurological symptoms; infection signs; unexpected worsening of the target condition. Urgent symptoms require medical evaluation—not a dose adjustment.",
      ],
    },
    {
      id: "step-up",
      title: "Alternative daily step-up research protocol",
      paragraphs: [
        "Some protocol pages use gradual daily titration (often assuming **3 mL** diluent ≈ 26.67 mg/mL). Weeks 1–8 use **252 mg** total blend (≈3.15 vials); adding weeks 9–12 raises the total to **364 mg** (≈4.55 vials).",
        "No comparative study shows that this additional exposure improves outcomes. The **6 mg daily** phase should be labeled a **higher-exposure community protocol**, not a standard clinical target.",
      ],
      tables: [
        {
          caption: "Daily step-up (reported; 3 mL recon assumption)",
          headers: [
            "Phase",
            "Weeks",
            "U-100 draw",
            "Total/day",
            "GHK-Cu/day",
            "Each other/day",
          ],
          rows: [
            ["Introduction", "1–2", "7.5 U", "2 mg", "1.25 mg", "250 mcg"],
            ["Build", "3–4", "15 U", "4 mg", "2.5 mg", "500 mcg"],
            ["Peak", "5–8", "22.5 U", "6 mg", "3.75 mg", "750 mcg"],
            [
              "Optional maintenance",
              "9–12",
              "15 U",
              "4 mg",
              "2.5 mg",
              "500 mcg",
            ],
          ],
        },
      ],
    },
    {
      id: "reconstitution",
      title: "KLOW reconstitution and concentration math",
      paragraphs: [
        "Diluent volume changes the **draw volume**, not the amount of each peptide in a given total-mass dose. The syringe unit number is **not** a dose by itself: “10 units of KLOW” delivers **4 mg** after a 2 mL dilution but only **≈2.67 mg** after a 3 mL dilution.",
      ],
      widget: "klow-recon-calc",
      tables: [
        {
          caption: "2 mL reconstitution (40 mg/mL total)",
          headers: [
            "U-100 units",
            "Volume",
            "Total blend",
            "GHK-Cu",
            "Each other peptide",
          ],
          rows: [
            ["1", "0.01 mL", "400 mcg", "250 mcg", "50 mcg"],
            ["2.5", "0.025 mL", "1 mg", "625 mcg", "125 mcg"],
            ["5", "0.05 mL", "2 mg", "1.25 mg", "250 mcg"],
            ["7.5", "0.075 mL", "3 mg", "1.875 mg", "375 mcg"],
            ["10", "0.10 mL", "4 mg", "2.5 mg", "500 mcg"],
          ],
        },
        {
          caption: "3 mL reconstitution (≈26.67 mg/mL total)",
          headers: [
            "U-100 units",
            "Volume",
            "Total blend",
            "GHK-Cu",
            "Each other peptide",
          ],
          rows: [
            ["1", "0.01 mL", "267 mcg", "167 mcg", "33 mcg"],
            ["7.5", "0.075 mL", "2 mg", "1.25 mg", "250 mcg"],
            ["10", "0.10 mL", "2.67 mg", "1.67 mg", "333 mcg"],
            ["15", "0.15 mL", "4 mg", "2.5 mg", "500 mcg"],
            ["22.5", "0.225 mL", "6 mg", "3.75 mg", "750 mcg"],
          ],
        },
      ],
    },
    {
      id: "reported-range",
      title: "Reported KLOW dosage range",
      tables: [
        {
          caption: "Online protocol landscape",
          headers: ["Field", "Reported information"],
          rows: [
            [
              "Total blend per administration",
              "Most consistently 2–4 mg; some daily protocols reach 6 mg",
            ],
            [
              "GHK-Cu per administration",
              "Usually 1.25–2.5 mg; up to 3.75 mg in higher protocols",
            ],
            [
              "KPV / BPC-157 / TB-500 each",
              "Usually 250–500 mcg; up to 750 mcg in higher protocols",
            ],
            ["Frequency", "Three times weekly to daily"],
            ["Route", "Subcutaneous"],
            ["Reported cycle", "8–12 weeks"],
            ["Reported break", "4–8 weeks"],
            ["Exact-combination clinical overlap", "None"],
            ["Evidence quality", "Low / anecdotal for the blend"],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Anecdotal versus clinically studied dosing",
      widget: "klow-clinical-vs-anecdotal",
    },
    {
      id: "why-combine",
      title: "Why the four peptides are combined",
      paragraphs: [
        "The combination covers several stages of a generalized repair narrative: inflammation control, cell migration, vascular signaling, and matrix remodeling. Biological pathways are not isolated job assignments—all four may affect overlapping inflammatory and angiogenic processes, and coadministration could produce interactions not predicted from monotherapy studies.",
      ],
      tables: [
        {
          caption: "Proposed roles and evidence boundaries",
          headers: ["Component", "Proposed role", "Evidence boundary"],
          rows: [
            [
              "KPV",
              "Reduce inflammatory signaling; epithelial-barrier models",
              "Primarily cell/animal; no human KPV exposure study identified",
            ],
            [
              "GHK-Cu",
              "Collagen, ECM, antioxidant, repair signaling",
              "Stronger topical/lab literature; little support for systemic injection",
            ],
            [
              "BPC-157",
              "Vascular, NO, FAK-paxillin, tendon, gut-repair pathways",
              "Mostly rodent; sparse/weak human reports",
            ],
            [
              "TB-500",
              "Actin-associated migration and wound-repair signaling",
              "Fragment evidence preclinical; full-length Tβ4 data not interchangeable",
            ],
          ],
        },
      ],
    },
    {
      id: "component-detail",
      title: "Component evidence in more detail",
      numbered: [
        "**KPV** — reduced inflammatory activity in mouse colitis; PepT1 transport in epithelial models. Oral/colon-targeted findings do not establish systemic SC dosing.",
        "**GHK-Cu** — extensive in-vitro and topical research; mixed topical clinical results (diabetic ulcers vs CO₂-laser resurfacing). More relevant to skin than injectable KLOW claims.",
        "**BPC-157** — numerous rodent models; human evidence mainly small uncontrolled reports plus a two-person IV safety pilot. Soft-tissue findings remain largely unvalidated in humans.",
        "**TB-500** — `LKKTETQ` region participates in actin binding in preclinical models. Full-length Tβ4 IV/topical human studies do not establish a dose for the shorter acetylated fragment.",
      ],
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "klow-evidence-ladder",
    },
    {
      id: "safety",
      title: "Safety and adverse effects",
      paragraphs: [
        "No exact-combination adverse-event rate exists. Fixed-ratio convenience means you cannot reduce GHK-Cu without simultaneously reducing KPV, BPC-157, and TB-500—the central experimental-control tradeoff of KLOW.",
      ],
      widget: "klow-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "Community protocols usually specify refrigerated storage at **2–8°C** after reconstitution, protection from light, gentle swirling rather than shaking, and use within approximately **28 days**. No published stability study was identified for the complete four-component mixture under these conditions.",
        "A clear blue solution does not prove that all four peptides remain intact. The front-loaded loading phase consumes one vial within four weeks (aligning with the common 28-day convention); the maintenance phase spans longer than one vial-use window, so a second vial’s opening date must be tracked independently.",
      ],
    },
    {
      id: "anti-doping",
      title: "Anti-doping status",
      paragraphs: [
        "BPC-157 and thymosin beta-4 derivatives are prohibited under the WADA framework. Because KLOW contains both BPC-157 and TB-500, it is incompatible with tested sport regardless of “recovery blend” marketing.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "KLOW is a fixed **5:1:1:1** blend. The standard 80 mg vial contains **50 mg GHK-Cu** and **10 mg** of each remaining peptide. The most commonly reported per-administration range is **2–4 mg total blend** (≈**1.25–2.5 mg GHK-Cu** plus **250–500 mcg** each of KPV, BPC-157, and TB-500).",
        "The most coherent complete community protocol uses **4 mg five times weekly for four weeks**, then **2 mg three times weekly for eight weeks**, then a **4–8-week** washout. A daily **2 → 4 → 6 mg** titration also circulates with substantially greater exposure and no stronger evidence.",
      ],
      highlight:
        "Confirm true 50/10/10/10 composition, TB-500 as Ac-LKKTETQ, component-specific potency, copper-complex identity, and stability of all four peptides after mixing — before trusting any unit chart.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard KLOW dosage?",
        answer:
          "The most consistently reported amount is 2–4 mg of total blend per administration. In a standard 50/10/10/10 vial, 2 mg delivers 1.25 mg GHK-Cu and 250 mcg each of KPV, BPC-157, and TB-500. Four milligrams delivers 2.5 mg GHK-Cu and 500 mcg of each remaining peptide.",
      },
      {
        question: "What is the complete reported KLOW protocol?",
        answer:
          "A coherent 12-week community protocol uses 4 mg five times weekly for weeks 1–4, followed by 2 mg three times weekly for weeks 5–12, then a 4–8-week washout. This totals 128 mg of blend, or about 1.6 standard 80 mg vials.",
      },
      {
        question: "How many units is a KLOW dose?",
        answer:
          "It depends on the dilution. With 2 mL added to an 80 mg vial, 5 U-100 units delivers 2 mg and 10 units delivers 4 mg. With 3 mL added, 7.5 units delivers 2 mg and 15 units delivers 4 mg.",
      },
      {
        question: "What does a 10-unit KLOW draw contain?",
        answer:
          "After a 2 mL dilution, 10 units contains 4 mg total: 2.5 mg GHK-Cu and 500 mcg each of KPV, BPC-157, and TB-500. After a 3 mL dilution, the same 10 units contains only about 2.67 mg total.",
      },
      {
        question: "How long does one 80 mg KLOW vial last?",
        answer:
          "At 4 mg five times weekly, one vial lasts four weeks. At 2 mg three times weekly, one vial nominally lasts about 13 weeks, although stability and beyond-use limitations may be shorter than the mathematical duration.",
      },
      {
        question: "Is KLOW the same as GLOW?",
        answer:
          "No. Standard GLOW contains GHK-Cu, BPC-157, and TB-500. KLOW adds 10 mg of KPV, bringing the common vial total from 70 mg to 80 mg.",
      },
      {
        question: "Is TB-500 the same as thymosin beta-4?",
        answer:
          "Not exactly. Standard TB-500 is generally the acetylated 17–23 fragment Ac-LKKTETQ. Thymosin beta-4 is the full 43-amino-acid peptide. Some vendors conflate the names, so the sequence must be confirmed.",
      },
      {
        question: "Can the four KLOW components be dosed independently?",
        answer:
          "Not once they are lyophilized together. Every draw preserves the 5:1:1:1 mass ratio. Independent adjustment requires separate component vials.",
      },
      {
        question: "Is daily dosing necessary?",
        answer:
          "No exact-combination study has established a necessary frequency. Community schedules range from three times weekly to daily. The front-loaded protocol uses five weekly administrations first and three weekly administrations later.",
      },
      {
        question: "Is 6 mg daily better than 4 mg?",
        answer:
          "Unknown. The 6 mg daily step-up phase increases each component by 50% and creates much higher cumulative exposure. No comparative evidence shows that it produces better outcomes.",
      },
      {
        question: "Does KLOW need a washout?",
        answer:
          "No trial has established a mandatory break. A 4–8-week washout is commonly reported and is useful in research because it shows whether measured changes persist, reverse, or continue after exposure stops.",
      },
      {
        question: "Can topical GHK-Cu studies validate injectable KLOW?",
        answer:
          "No. Topical exposure, systemic injection, and a four-peptide blend have different pharmacokinetics and safety considerations.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "FDA",
        title: "July 23–24, 2026 Pharmacy Compounding Advisory Committee meeting",
        detail: "Advisory votes — not a KLOW blend evaluation.",
        href: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
      },
      {
        authors: "FDA",
        title: "Bulk drug substances nominated for use in compounding",
        detail: "Updated May 2026; GHK-Cu category distinctions.",
        href: "https://www.fda.gov/media/94155/download",
      },
      {
        authors: "Pickart L, Margolina A.",
        title: "Regenerative and protective actions of GHK-Cu",
        detail: "2018 review — topical/lab context.",
        href: "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      },
      {
        authors: "Mulder GD et al.",
        title: "Topical GHK-Cu in diabetic neuropathic ulcers",
        detail: "1994 — not injectable KLOW dosing.",
        href: "https://pubmed.ncbi.nlm.nih.gov/17147644/",
      },
      {
        authors: "Dalmasso G et al.",
        title: "PepT1-mediated KPV uptake and intestinal inflammation",
        detail: "2008.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18061177/",
      },
      {
        authors: "Brzoska T et al.",
        title: "KPV in murine colitis models",
        detail: "2008.",
        href: "https://pubmed.ncbi.nlm.nih.gov/18092346/",
      },
      {
        authors: "Esposito S et al.",
        title: "Identification of acetylated thymosin beta-4 17–23 in TB-500",
        detail: "2012.",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
      {
        authors: "Ho ENM et al.",
        title: "TB-500 chemistry and detection",
        detail: "2012.",
        href: "https://pubmed.ncbi.nlm.nih.gov/23084823/",
      },
      {
        authors: "Morris DC et al.",
        title: "Thymosin beta-4 active sites and biological activity",
        detail: "2010.",
        href: "https://pubmed.ncbi.nlm.nih.gov/20179146/",
      },
      {
        authors: "BPC-157 IV pilot",
        title: "Safety of IV BPC-157 in two adults",
        detail: "2025 — not SC blend validation.",
        href: "https://pubmed.ncbi.nlm.nih.gov/40131143/",
      },
      {
        authors: "Sports medicine review",
        title: "Injectable peptide therapy in orthopaedic and sports medicine",
        detail: "2025.",
        href: "https://pubmed.ncbi.nlm.nih.gov/41476424/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "BPC-157 and Tβ4 derivatives prohibited.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "KLOW is a **fixed-ratio commercial blend** with **no controlled human trial** of the exact combination identified and **no US prescribing dose**.",
      "This page documents community protocols and reconstitution arithmetic. It is **not** a clinical dosing, self-injection, or treatment guide. Always translate total blend mass into **four labeled component amounts**.",
      "BPC-157 and thymosin beta-4 derivatives are **WADA prohibited**. Seek urgent care for severe allergic, infectious, neurological, or cardiovascular symptoms.",
    ],
  },
};

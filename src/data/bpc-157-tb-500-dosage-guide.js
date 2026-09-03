/**
 * BPC-157 + TB-500 (Wolverine Stack) blend dosage guide.
 * Community name for BPC-157 + Ac-LKKTETQ — not a standardized drug.
 * First controlled combo study: Biçer 2026 rat Achilles — no synergy demonstrated.
 */

/** Common marketed vial configurations */
export const BPC_TB_COMPOSITION = {
  "1:1-10-10": {
    id: "1:1-10-10",
    label: "10 mg BPC-157 + 10 mg TB-500",
    ratio: "1:1",
    bpcMg: 10,
    tbMg: 10,
    totalMg: 20,
    bpcPct: 50,
    tbPct: 50,
  },
  "1:1-5-5": {
    id: "1:1-5-5",
    label: "5 mg BPC-157 + 5 mg TB-500",
    ratio: "1:1",
    bpcMg: 5,
    tbMg: 5,
    totalMg: 10,
    bpcPct: 50,
    tbPct: 50,
  },
  "1:2-5-10": {
    id: "1:2-5-10",
    label: "5 mg BPC-157 + 10 mg TB-500",
    ratio: "1:2",
    bpcMg: 5,
    tbMg: 10,
    totalMg: 15,
    bpcPct: 33.33,
    tbPct: 66.67,
  },
};

/** Mass fractions by ratio */
export const BPC_TB_FRACTIONS = {
  "1:1": { bpc: 0.5, tb: 0.5 },
  "1:2": { bpc: 1 / 3, tb: 2 / 3 },
};

export function bpcTbComponentsFromTotalMg(totalMg, ratio = "1:1") {
  const t = Number(totalMg);
  if (!Number.isFinite(t) || t <= 0) return null;
  const f = BPC_TB_FRACTIONS[ratio];
  if (!f) return null;
  return {
    totalMg: t,
    ratio,
    bpcMcg: t * f.bpc * 1000,
    tbMcg: t * f.tb * 1000,
  };
}

/**
 * Calculate draw volume, U-100 units, and component split from a reconstituted vial.
 */
export function bpcTbAmountFromVial({
  vialPreset = "1:1-10-10",
  bpcMg,
  tbMg,
  diluentMl,
  targetTotalMg,
  targetBpcMcg,
  targetTbMcg,
} = {}) {
  const preset = BPC_TB_COMPOSITION[vialPreset];
  const bpc = Number(bpcMg ?? preset?.bpcMg);
  const tb = Number(tbMg ?? preset?.tbMg);
  const total = bpc + tb;
  const ratio = preset?.ratio ?? (bpc === tb ? "1:1" : "1:2");
  const d = Number(diluentMl);
  if (!Number.isFinite(d) || d <= 0 || !Number.isFinite(bpc) || !Number.isFinite(tb)) {
    return null;
  }

  let target = Number(targetTotalMg);
  if (!Number.isFinite(target) || target <= 0) {
    const bpcTarget = Number(targetBpcMcg);
    const tbTarget = Number(targetTbMcg);
    if (Number.isFinite(bpcTarget) && bpcTarget > 0) {
      target = (bpcTarget / 1000) / (bpc / total);
    } else if (Number.isFinite(tbTarget) && tbTarget > 0) {
      target = (tbTarget / 1000) / (tb / total);
    } else {
      return null;
    }
  }

  const concMgPerMl = total / d;
  const bpcConcMgPerMl = bpc / d;
  const tbConcMgPerMl = tb / d;
  const volumeMl = target / concMgPerMl;
  const units = volumeMl / 0.01;
  const parts = bpcTbComponentsFromTotalMg(target, ratio);

  return {
    vialPreset,
    bpcMg: bpc,
    tbMg: tb,
    totalMg: total,
    ratio,
    diluentMl: d,
    concMgPerMl,
    bpcConcMgPerMl,
    tbConcMgPerMl,
    targetTotalMg: target,
    volumeMl,
    units,
    parts,
  };
}

export const BPC_TB_IDENTITY = [
  {
    id: "correct",
    label: "BPC-157 + Ac-LKKTETQ (TB-500)",
    verdict: "Matches the intended Wolverine Stack identity on this page",
    detail:
      "BPC-157 is H-GEPPPGKPADDAGLV-OH (~1,419.5 Da). TB-500 is the N-acetylated Tβ4 17–23 fragment Ac-LKKTETQ (~889.01 Da). Both identities require intact-mass LC-MS, sequence confirmation, and N-terminal acetylation for TB-500.",
  },
  {
    id: "tb4-full",
    label: "Label says full-length thymosin beta-4 (43 aa)",
    verdict: "Different molecule — not interchangeable with TB-500 fragment data",
    detail:
      "Full-length Tβ4 IV/topical human studies cannot validate Ac-LKKTETQ dosing. The 2026 rat study described its test article as both “synthetic thymosin beta-4” and “TB-500” without publishing analytical identity.",
  },
  {
    id: "unacetylated",
    label: "Unacetylated H-LKKTETQ-OH (LKKTETQ fragment)",
    verdict: "Different peptide — lacks defining N-terminal acetyl group",
    detail:
      "Unacetylated LKKTETQ wound studies use a different research material. Ac-LKKTETQ and H-LKKTETQ-OH should not share dosing tables or evidence assignments.",
  },
  {
    id: "glow-klow",
    label: "Confused with GLOW or KLOW",
    verdict: "Different products — additional peptides change exposure",
    detail:
      "GLOW adds GHK-Cu; KLOW adds GHK-Cu and KPV. A two-peptide Wolverine vial is not the same intervention as a three- or four-component blend.",
  },
  {
    id: "unsure",
    label: "Only the nickname “Wolverine Stack”",
    verdict: "Incomplete — confirm both sequences, ratio, and salt forms",
    detail:
      "The nickname covers separate vials, 1:1 blends, 1:2 blends, and products paired with full-length Tβ4. Component-specific assay, ratio confirmation, and counterion correction are required before interpreting any unit chart.",
  },
];

export const BPC_TB_COMBO_STATUS = [
  ["Controlled human combination dose", "None established"],
  ["Controlled human combination trial", "None identified (Ac-LKKTETQ verified)"],
  ["Published controlled animal combination", "Biçer 2026 rat Achilles — BPC 10 + TB 60 µg/kg/day IP × 30 days"],
  ["Combination vs monotherapy", "No additive benefit demonstrated"],
  ["TB-500 monotherapy in rat study", "Clearest biomechanical and several histological findings"],
  ["Human observational combination", "4 knee-pain patients — BPC 2–4 mg + ambiguous “TB4” 3–6 mg IA once"],
  ["Synergy demonstrated", "No"],
  ["Human weight-based formula", "None"],
  ["Maximum tolerated dose", "Not established"],
];

export const BPC_TB_RAT_FINDINGS = [
  {
    outcome: "Maximum load to failure",
    finding: "Only TB-500 alone significantly higher than control",
    medians: "Control 26.91 N; BPC 37.16 N; TB 37.41 N; combo 34.54 N",
  },
  {
    outcome: "Total Bonar score",
    finding: "Significantly lower only for TB-500 vs control",
    medians: "Combination did not outperform monotherapy",
  },
  {
    outcome: "Total Movin score",
    finding: "Lower for TB-500 and combination vs control",
    medians: "No consistent combination superiority",
  },
  {
    outcome: "Type I collagen birefringence",
    finding: "Higher in BPC-157 and TB-500 monotherapy vs control",
    medians: "Combination did not add benefit",
  },
  {
    outcome: "Safety in model",
    finding: "No deaths, infections, wound complications, or reruptures reported",
    medians: "32 young male rats — not human safety",
  },
];

export const BPC_TB_PROTOCOL_PHASES = [
  {
    id: "vehicle",
    phase: "Vehicle control",
    days: "1–30",
    bpcDose: "0",
    tbDose: "0",
    route: "IP once daily",
    purpose: "Surgically repaired Achilles transection — baseline comparator",
    note: "Nonclinical rat model — not a human protocol",
  },
  {
    id: "bpc",
    phase: "BPC-157 monotherapy",
    days: "1–30",
    bpcDose: "10 µg/kg/day",
    tbDose: "0",
    route: "IP once daily",
    purpose: "Selected histological improvements; no significant max-load advantage vs control",
    note: "Nominal 3.3 µg/day in a 330 g rat",
  },
  {
    id: "tb",
    phase: "TB-500 monotherapy",
    days: "1–30",
    bpcDose: "0",
    tbDose: "60 µg/kg/day",
    route: "IP once daily",
    purpose: "Strongest biomechanical and several histological findings vs control",
    note: "Nominal 19.8 µg/day in a 330 g rat; test-article identity incompletely published",
  },
  {
    id: "combo",
    phase: "Combination",
    days: "1–30",
    bpcDose: "10 µg/kg/day",
    tbDose: "60 µg/kg/day",
    route: "IP once daily",
    purpose: "Lower Movin score vs control — no additional benefit vs monotherapy",
    note: "Median max load below both monotherapy medians; not powered for antagonism",
  },
];

export const BPC_TB_COMPARE = {
  clinical: {
    title: "2026 controlled rat study (Biçer et al.)",
    status: "One exploratory animal experiment",
    rows: [
      ["Identity", "BPC-157 + product labeled TB-500; analytical identity not fully published"],
      ["Dose", "BPC 10 µg/kg/day + TB 60 µg/kg/day"],
      ["Route", "Intraperitoneal once daily"],
      ["Duration", "30 postoperative days after Achilles transection/repair"],
      ["Comparator", "Vehicle and both monotherapies"],
      ["Combination advantage", "Not demonstrated"],
      ["Human applicability", "None — species, route, model, and identity differ"],
    ],
  },
  chartReview: {
    title: "2021 human chart review (Lee & Padgett)",
    status: "Tiny uncontrolled observation",
    rows: [
      ["Participants", "4 combination recipients"],
      ["Exposure", "BPC-157 2–4 mg + “TB4” 3–6 mg"],
      ["Route", "Separate intra-articular injections, one encounter"],
      ["TB4 identity", "Not analytically defined as Ac-LKKTETQ"],
      ["Outcome", "3 of 4 reported pain improvement by phone"],
      ["Combo vs BPC-only", "No signal of added benefit (11/12 BPC-only responders)"],
    ],
  },
  anecdotal: {
    title: "Community Wolverine protocols",
    status: "Widely repeated — not validated",
    rows: [
      ["Separate vials", "BPC 250–500 µg daily/BID + TB 2–2.5 mg twice weekly × 4–6 weeks"],
      ["Fixed 1:1 blend", "250/250 µg or 500/500 µg daily from 5/5 or 10/10 mg vials"],
      ["1:2 blend", "Product-specific daily draws from 5 mg/10 mg vials"],
      ["Route", "Usually SC; IM and local injury-site claims also appear"],
      ["Duration", "4–8 weeks common; 8–12-week loading/maintenance variants"],
      ["Evidence basis", "Anecdotal — different species, route, ratio, and frequency from rat study"],
    ],
  },
};

export const BPC_TB_WEEKLY = {
  separateVial: {
    label: "Separate-vial community pattern",
    bpcDailyMcg: 250,
    bpcDaysPerWeek: 7,
    tbPerDoseMg: 2.5,
    tbDosesPerWeek: 2,
    weeklyBpcMg: 1.75,
    weeklyTbMg: 5,
    weeklyRatio: "1:2.86 (BPC:TB by mass)",
  },
  blendDaily: {
    label: "Fixed 1:1 blend — 250 µg each daily",
    bpcDailyMcg: 250,
    tbDailyMcg: 250,
    daysPerWeek: 7,
    weeklyBpcMg: 1.75,
    weeklyTbMg: 1.75,
    weeklyRatio: "1:1 (BPC:TB by mass)",
  },
  note:
    "A 1:1 blend cannot reproduce separate-vial weekly TB exposure without also changing BPC-157 exposure. These are different experiments — not equivalent schedules.",
};

export const BPC_TB_CLAIMS = [
  {
    id: "synergy-proven",
    claim: "The Wolverine Stack is proven synergistic",
    status: "Not demonstrated",
    detail:
      "The 2026 rat study directly tested the combination and found no additive benefit over monotherapy at 10 + 60 µg/kg/day IP. TB-500 alone produced the clearest biomechanical findings.",
  },
  {
    id: "1-1-equals-separate",
    claim: "A 1:1 daily blend equals the separate-vial schedule",
    status: "False",
    detail:
      "Separate-vial protocols use daily microgram BPC plus twice-weekly multi-milligram TB. A 1:1 blend ties TB exposure to every BPC draw — e.g. 250/250 µg daily = 1.75 mg TB/week vs 5 mg TB/week in the common separate pattern.",
  },
  {
    id: "tb4-equals-tb500",
    claim: "TB4, thymosin beta-4, and TB-500 are the same",
    status: "False",
    detail:
      "Full-length 43-aa Tβ4, unacetylated LKKTETQ, and Ac-LKKTETQ (TB-500) are distinct materials. The Lee/Padgett chart review used ambiguous “TB4” — not verified Ac-LKKTETQ.",
  },
  {
    id: "glow-same",
    claim: "Wolverine Stack is the same as GLOW or KLOW",
    status: "False",
    detail:
      "GLOW adds GHK-Cu; KLOW adds GHK-Cu and KPV. Multi-component blends have different ratios, exposures, and attribution complexity.",
  },
  {
    id: "hed-from-rat",
    claim: "The rat 10 + 60 µg/kg dose converts to a human SC protocol",
    status: "Not supported",
    detail:
      "Species, IP route, surgically repaired tendon model, formulation, identity, and endpoint differences prevent a validated human-equivalent-dose conversion.",
  },
  {
    id: "loading-required",
    claim: "A loading phase is required for the combination",
    status: "Not demonstrated",
    detail:
      "Loading/maintenance language is borrowed from community TB-500 schedules. No combination study demonstrated tissue saturation, a required loading phase, or a maintenance threshold.",
  },
  {
    id: "ten-units-dose",
    claim: "“Ten units” is a standard Wolverine dose",
    status: "Meaningless without context",
    detail:
      "U-100 units measure volume, not mass. Ten units = 500 µg of each peptide from 10/10 mg @ 2 mL, but only 250 µg of each from 10/10 mg @ 4 mL — and different component splits from 5/10 mg vials.",
  },
  {
    id: "local-targeting",
    claim: "Injecting near an injury selectively targets tendon or ligament",
    status: "Not demonstrated",
    detail:
      "The controlled rat combination used daily IP administration. No controlled study shows nearby SC or IM injection selectively targets connective tissue.",
  },
];

export const BPC_TB_EVIDENCE_LADDER = [
  {
    level: "U.S. medicinal / prescribing dose",
    exists: "None established",
    confidence: "None",
  },
  {
    level: "Controlled human combination dosing",
    exists: "None (verified Ac-LKKTETQ + BPC-157)",
    confidence: "None",
  },
  {
    level: "Human observational combination",
    exists: "4-person knee chart-review subgroup; ambiguous TB4 identity",
    confidence: "Very low",
  },
  {
    level: "Published controlled animal combination",
    exists: "BPC 10 µg/kg/day + TB 60 µg/kg/day IP × 30 days — no synergy",
    confidence: "Low–moderate for rat tendon model only",
  },
  {
    level: "Component human dosing",
    exists: "Limited BPC-157 reports; full-length Tβ4 studies — not transferable",
    confidence: "Low for Wolverine inference",
  },
  {
    level: "Separate-vial community protocols",
    exists: "BPC 250–500 µg daily + TB 2–2.5 mg twice weekly",
    confidence: "Low",
  },
  {
    level: "Fixed-blend community protocols",
    exists: "250/250 µg to 500/500 µg daily from 1:1 vials",
    confidence: "Low",
  },
  {
    level: "Long-term / repeat-cycle exposure",
    exists: "None established for the combination",
    confidence: "None",
  },
];

export const BPC_TB_AE_SIMPLE = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No verified BPC-157 + Ac-LKKTETQ safety trial",
  },
  {
    topic: "Rat study safety",
    status: "Limited model",
    note: "32 rats × 30 days — no deaths or wound complications reported",
  },
  {
    topic: "Community mentions",
    status: "Unquantified",
    note: "Injection-site pain, headache, fatigue, nausea, flushing, dizziness",
  },
  {
    topic: "Fixed-ratio attribution",
    status: "Limited control",
    note: "Blended vial complicates cause identification",
  },
];

export const BPC_TB_AE_FULL = [
  {
    topic: "Exact-combination AE rates",
    status: "Unknown",
    note: "No blend trial denominator",
    context:
      "Community reports mention redness, swelling, bruising, headache, fatigue, nausea, and dizziness — frequency and causality unknown. Product-quality failures can cause infection or immune reactions.",
  },
  {
    topic: "Angiogenesis / abnormal growth",
    status: "Class concern",
    note: "Both peptides linked to vascular and remodeling pathways",
    context:
      "Active malignancy, proliferative eye disease, and abnormal vascular growth raise unresolved questions. Human risk magnitude is unknown.",
  },
  {
    topic: "Immune / product quality",
    status: "Elevated for two-component vial",
    note: "Identity, ratio, sterility, endotoxin, stability",
    context:
      "One overall HPLC purity number cannot establish both identities, both potencies, or combination stability. Blended vials are analytically more complex than single-peptide products.",
  },
  {
    topic: "Fixed-ratio limitations",
    status: "Experimental-control tradeoff",
    note: "Convenience vs independent dosing",
    context:
      "A 1:1 blend cannot independently adjust BPC and TB frequencies. Separate vials allow different schedules but prevent single-syringe attribution.",
  },
  {
    topic: "Rehabilitation confounding",
    status: "Outcome risk",
    note: "Symptom improvement ≠ tissue strength",
    context:
      "Increasing loading because pain improves can expose incompletely healed tissue to reinjury. Rehabilitation must be standardized in any recovery study.",
  },
  {
    topic: "Anti-doping",
    status: "Both components prohibited",
    note: "BPC-157 (WADA S0) + Tβ4 derivatives/TB-500 (WADA S2.3)",
    context:
      "A Wolverine blend contains two prohibited components and is incompatible with tested sport regardless of marketing.",
  },
];

export const BPC_TB_DOSAGE_GUIDE = {
  title:
    "BPC-157 + TB-500 (Wolverine Stack) Dosage: Research Protocol, Results, and Reconstitution",
  updated: "Updated August 2026",
  callout:
    "**Research note:** “Wolverine Stack” is a **community name**, not a standardized drug or clinical protocol. On this page, the combination means synthetic **BPC-157** plus chemically verified **TB-500 as Ac-LKKTETQ**, not full-length thymosin beta-4. The July 2026 rat Achilles-repair study tested both peptides together, but the **combination did not outperform monotherapy**. **No controlled human trial has established a Wolverine Stack dose, safety profile, or optimal ratio.**",
  intro: [
    "The Wolverine Stack nickname covers **separate vials**, **1:1 co-lyophilized blends** (5/5 or 10/10 mg), and **1:2 blends** (5/10 mg) — all marketed under the same name but delivering different weekly exposures.",
    "The only published controlled combination experiment used **BPC-157 10 µg/kg/day + TB-500 60 µg/kg/day, IP once daily for 30 days** in surgically repaired rat Achilles tendons. Community schedules — daily microgram BPC plus intermittent milligram TB, or daily fixed 1:1 blends — use **different species, routes, ratios, and frequencies**.",
    "This page documents research evidence, community conventions, and reconstitution arithmetic. It is **not** a clinical dosing guide. Confirm that “TB-500” means **Ac-LKKTETQ**, not full-length Tβ4, unacetylated LKKTETQ, GLOW, or KLOW.",
  ],
  glance: {
    title: "Wolverine Stack dosage in 30 seconds",
    table: {
      headers: ["Question", "Evidence-based answer"],
      rows: [
        ["**What is the Wolverine Stack?**", "Community name for BPC-157 plus TB-500"],
        ["**TB-500 on this page**", "Ac-LKKTETQ — N-acetylated Tβ4 17–23 fragment (~889 Da)"],
        ["**Standardized blend ratio**", "None — 1:1 and 1:2 products both circulate"],
        ["**Published controlled combination dose**", "Rat: BPC 10 µg/kg/day + TB 60 µg/kg/day IP × 30 days"],
        ["**Controlled human combination dose**", "None established"],
        ["**Proven synergy**", "No — 2026 rat study found no additive combination benefit"],
        ["**Common separate-vial pattern**", "BPC 250–500 µg daily + TB 2–2.5 mg twice weekly"],
        ["**Common 1:1 blend pattern**", "250 µg + 250 µg daily (or 500 + 500 µg)"],
        ["**Sport status**", "Both components prohibited under WADA rules"],
      ],
    },
  },
  sections: [
    {
      id: "what-is",
      title: "What is the Wolverine Stack?",
      paragraphs: [
        "The Wolverine Stack is a nickname used by peptide vendors, clinics, and online communities for a two-peptide combination intended for recovery research. It is **not** a pharmacopoeial name, regulatory designation, or single fixed formula.",
        "The name may describe two separate vials on different schedules, a co-lyophilized 1:1 vial (5/5 or 10/10 mg), a 1:2 blend (5/10 mg), BPC-157 paired with full-length Tβ4, or a larger blend containing KPV or GHK-Cu. Those products are **not interchangeable**.",
        "The nickname suggests exceptionally fast healing but does not describe a measured pharmacological property. The combination should be judged by direct comparative data, not marketing imagery.",
      ],
      widget: "bpc-tb-composition",
    },
    {
      id: "composition",
      title: "Composition and chemical identity",
      paragraphs: [
        "**BPC-157** is a 15-amino-acid synthetic peptide (H-GEPPPGKPADDAGLV-OH, ~1,419.5 Da). **TB-500** most consistently refers to **Ac-LKKTETQ**, the seven-residue N-acetylated fragment of thymosin beta-4 residues 17–23 (~889.01 Da).",
        "BPC-157 acetate and TB-500 acetate are distinct bulk drug substances. Gross acetate material should not automatically be treated as the same mass of free peptide without assay and counterion correction.",
      ],
      tables: [
        {
          caption: "Identities that must remain separate",
          headers: ["Label", "Defined material", "Use on this page?"],
          rows: [
            ["BPC-157 free base", "H-GEPPPGKPADDAGLV-OH", "Yes, when verified"],
            ["TB-500 free base", "Ac-LKKTETQ-OH", "Yes, when N-acetylation confirmed"],
            ["LKKTETQ / Tβ4 17–23", "Unacetylated H-LKKTETQ-OH", "No — different peptide"],
            ["Thymosin beta-4 / Tβ4", "Full-length 43-aa peptide", "No"],
            ["“TB4” without sequence", "Ambiguous", "No until identity resolved"],
            ["GLOW", "GHK-Cu + BPC-157 + TB-500", "No — three-component blend"],
            ["KLOW", "KPV + GHK-Cu + BPC-157 + TB-500", "No — four-component blend"],
          ],
        },
      ],
    },
    {
      id: "identity",
      title: "Identity checks before interpreting a label",
      paragraphs: [
        "A blended vial is analytically more complex than either component alone. One overall HPLC purity number cannot establish both identities, both potencies, the true ratio, or combination stability.",
        "The dose record should state **µg or mg BPC-157 free-peptide equivalent** and **µg or mg Ac-LKKTETQ free-peptide equivalent** separately. “One milligram of Wolverine” is incomplete unless the ratio is known.",
      ],
      widget: "bpc-tb-identity-gate",
      tables: [
        {
          caption: "Product, ratio, and assay checks",
          headers: ["Quality attribute", "Required question"],
          rows: [
            ["Intact-mass LC-MS", "Does each principal species match the defined peptide?"],
            ["N-terminal analysis", "Is TB-500 leucine N-terminally acetylated?"],
            ["Component-specific assay", "How many mg of each active peptide are present?"],
            ["Ratio confirmation", "Does measured ratio match 1:1, 1:2, or claimed formula?"],
            ["Counterion analysis", "Are acetate, TFA, or other counterions quantified?"],
            ["Combination stability", "Do both concentrations remain within spec during use?"],
          ],
        },
      ],
    },
    {
      id: "regulatory",
      title: "U.S. medicinal and compounding status",
      paragraphs: [
        "There is no U.S. prescribing label or established medicinal-product dosage for the fixed BPC-157 + TB-500 combination. FDA's 2026 reviews evaluated the individual bulk drug substances, not a Wolverine fixed-combination product.",
        "In July 2026, FDA staff recommended against adding reviewed free-base and acetate forms to the Section 503A Bulks List; the Pharmacy Compounding Advisory Committee subsequently recommended inclusion. **Committee votes are advisory** and do not validate the combination, its ratio, or any dosing schedule.",
      ],
      highlight: "No U.S. Wolverine prescribing dose exists. A compounded vial does not prove efficacy.",
    },
    {
      id: "combo-status",
      title: "Has the exact BPC-157 + TB-500 combination been studied?",
      paragraphs: [
        "Biçer and colleagues (2026) performed the first direct controlled comparison of BPC-157, TB-500, and the combination in tendon repair. Thirty-two rats underwent Achilles transection and Kessler repair, then received vehicle, BPC-157 10 µg/kg/day, TB-500 60 µg/kg/day, or both for 30 days IP.",
        "**The combination did not show an additive advantage.** TB-500 alone produced the clearest biomechanical and several histological findings. The combination's median maximum load was below both monotherapy medians.",
      ],
      widget: "bpc-tb-combo-status",
    },
    {
      id: "human-research",
      title: "Dosage used in human research",
      paragraphs: [
        "**No controlled human trial with chemically verified BPC-157 plus Ac-LKKTETQ was identified.** The only published human combination observation is a small retrospective knee-pain chart review: four recipients received BPC-157 2–4 mg plus “TB4” 3–6 mg by separate intra-articular injections in one encounter. The second peptide was not analytically defined as Ac-LKKTETQ.",
        "The BPC-only group in the same chart review reported 11 responses among 12 patients, so the study provides **no signal that adding the second peptide improved the result**. Three of four combination responders is three people — not an efficacy rate.",
      ],
      tables: [
        {
          caption: "Human combination observation vs relevance",
          headers: ["Study", "Exposure", "Route", "Why it is not a validated Wolverine dose"],
          rows: [
            [
              "Lee & Padgett 2021 (n=4 combo)",
              "BPC 2–4 mg + “TB4” 3–6 mg",
              "Separate IA, once",
              "Uncontrolled, ambiguous TB4 identity, subjective follow-up",
            ],
          ],
        },
        {
          caption: "Component human exposures (not combination validation)",
          headers: ["Component", "Example human exposure", "Relevance"],
          rows: [
            ["BPC-157 alone", "4 mg IA knee; 10 mg IV pilot (2 adults)", "Does not validate combination or SC microgram protocols"],
            ["Full-length Tβ4", "IV Phase 1 up to 1,260 mg; topical wound studies", "Different 43-aa molecule — not Ac-LKKTETQ"],
          ],
        },
      ],
    },
    {
      id: "rat-study",
      title: "Published Wolverine Stack research dosage",
      paragraphs: [
        "The 2026 rat Achilles study is the strongest direct combination evidence. Doses were weight-based and administered IP beginning postoperative day 1 for 30 consecutive days.",
        "For a representative 330 g rat: BPC-157 ≈ 3.3 µg/day; TB-500 ≈ 19.8 µg/day; combination total ≈ 23.1 µg/day. **These values must not be converted into human doses or changed from IP to SC.**",
      ],
      tables: [
        {
          caption: "2026 rat study arms (Biçer et al.)",
          headers: ["Arm", "BPC-157", "TB-500", "Route", "Duration"],
          rows: [
            ["Vehicle", "0", "0", "IP daily", "Days 1–30"],
            ["BPC-157", "10 µg/kg/day", "0", "IP daily", "30 days"],
            ["TB-500", "0", "60 µg/kg/day", "IP daily", "30 days"],
            ["Combination", "10 µg/kg/day", "60 µg/kg/day", "IP daily", "30 days"],
          ],
        },
      ],
      paragraphsAfter: [
        "The paper named supplier catalog numbers but did not publish intact mass, sequence, N-terminal state, or peptide-equivalent assay for TB-500. The 60 µg/kg dose was selected from broader full-length Tβ4 literature — researchers should independently define the test article before replication.",
      ],
    },
    {
      id: "community-protocols",
      title: "Commonly reported anecdotal Wolverine protocols",
      paragraphs: [
        "The schedules below document online practice patterns. They are **not** clinical dosing guidelines and do not reproduce the controlled rat experiment.",
      ],
      tables: [
        {
          caption: "Reported community protocols (anecdotal)",
          headers: [
            "Pattern",
            "BPC-157",
            "TB-500",
            "Frequency",
            "Duration",
            "Evidence basis",
          ],
          rows: [
            [
              "Separate-vial standard",
              "250–500 µg",
              "2–2.5 mg",
              "BPC daily; TB twice weekly",
              "4–6 weeks",
              "Widely repeated; no matched human trial",
            ],
            [
              "Fixed 1:1 blend lower",
              "250 µg",
              "250 µg",
              "Once daily",
              "4–8 weeks",
              "Common with 10/10 mg vials",
            ],
            [
              "Fixed 1:1 blend higher",
              "500 µg",
              "500 µg",
              "Once or twice daily",
              "4–8 weeks",
              "Delivers far more frequent TB than separate-vial pattern",
            ],
            [
              "Fixed 1:2 clinic blend",
              "Product-specific",
              "Product-specific",
              "Usually daily",
              "Product-specific",
              "5/10 mg vial locks TB at twice BPC mass",
            ],
            [
              "Loading/maintenance",
              "250–500 µg daily",
              "2–2.5 mg then 0.75–2 mg weekly",
              "TB twice weekly × 4 wk, then weekly",
              "8–12 weeks",
              "Community adaptation — not evidence-based",
            ],
          ],
        },
      ],
      widgetAfter: "bpc-tb-component-breakdown",
    },
    {
      id: "weekly-exposure",
      title: "Why fixed blends create dosing conflicts",
      paragraphs: [
        "In a 1:1 blend, every 250 µg increase in BPC-157 automatically adds 250 µg TB-500. The common separate-vial protocol uses different frequencies and a substantially different weekly ratio.",
      ],
      widget: "bpc-tb-weekly-exposure",
    },
    {
      id: "complete-protocol",
      title: "Complete evidence-anchored research protocol",
      paragraphs: [
        "The following **four-arm rat replication protocol** is based on the 2026 Biçer study. It is a **nonclinical animal design** — not a human regimen. It requires institutional animal-care approval, veterinary oversight, and a qualified research facility.",
        "**Do not convert IP rat doses to human SC doses. Do not double missed doses.**",
      ],
      widget: "bpc-tb-protocol-timeline",
      tables: [
        {
          caption: "Design summary (nonclinical)",
          headers: ["Element", "Prespecified design"],
          rows: [
            ["Model", "12-week-old male Sprague-Dawley rats (~330 g)"],
            ["Injury", "Standardized Achilles transection + Kessler repair"],
            ["Arms", "Vehicle / BPC 10 µg/kg / TB 60 µg/kg / combination"],
            ["Route", "IP once daily, postoperative days 1–30"],
            ["Primary endpoint", "Maximum load to failure at day 30"],
            ["Key comparison", "Combination vs better-performing monotherapy — not vs vehicle alone"],
            ["Loading / maintenance / titration", "None"],
          ],
        },
      ],
      notes: [
        "**Banner:** This protocol replicates an exploratory rat experiment. It does not establish a human dose, route, recovery benefit, or synergy claim.",
      ],
    },
    {
      id: "reconstitution",
      title: "Wolverine reconstitution and U-100 syringe math",
      paragraphs: [
        "These tables show **fixed-ratio concentration arithmetic only**. They do not establish a dose or verify formulation quality. “Final volume” means measured total volume after reconstitution.",
        "**Draw volume (mL) = target component mass (mg) ÷ component concentration (mg/mL). U-100 units = volume (mL) × 100.**",
      ],
      widget: "bpc-tb-recon-calc",
      tables: [
        {
          caption: "10 mg/10 mg @ 2 mL (5 mg/mL each)",
          headers: ["U-100 units", "Volume", "BPC-157", "TB-500"],
          rows: [
            ["1 U", "0.01 mL", "50 µg", "50 µg"],
            ["5 U", "0.05 mL", "250 µg", "250 µg"],
            ["10 U", "0.10 mL", "500 µg", "500 µg"],
            ["20 U", "0.20 mL", "1 mg", "1 mg"],
          ],
        },
        {
          caption: "10 mg/10 mg @ 4 mL (2.5 mg/mL each)",
          headers: ["U-100 units", "Volume", "BPC-157", "TB-500"],
          rows: [
            ["10 U", "0.10 mL", "250 µg", "250 µg"],
            ["20 U", "0.20 mL", "500 µg", "500 µg"],
            ["40 U", "0.40 mL", "1 mg", "1 mg"],
          ],
        },
        {
          caption: "5 mg/10 mg @ 3 mL (BPC ~1.667 mg/mL; TB ~3.333 mg/mL)",
          headers: ["U-100 units", "Total blend", "BPC-157", "TB-500"],
          rows: [
            ["5 U", "250 µg", "83.3 µg", "166.7 µg"],
            ["10 U", "500 µg", "166.7 µg", "333.3 µg"],
            ["15 U", "750 µg", "250 µg", "500 µg"],
          ],
        },
        {
          caption: "Separate-vial reference (not an endorsement)",
          headers: ["Vial", "Concentration", "Example draw"],
          rows: [
            ["BPC 5 mg / 2 mL", "2.5 mg/mL", "10 U = 250 µg; 20 U = 500 µg"],
            ["TB 5 mg / 1 mL", "5 mg/mL", "40 U = 2 mg; 50 U = 2.5 mg"],
          ],
        },
      ],
    },
    {
      id: "reported-range",
      title: "Reported Wolverine dosage range",
      tables: [
        {
          caption: "Evidence-based summary",
          headers: ["Field", "Summary"],
          rows: [
            ["Controlled human range", "None established"],
            ["Published rat combination", "BPC 10 µg/kg/day + TB 60 µg/kg/day IP × 30 days"],
            ["Common anecdotal BPC-157", "250–500 µg per administration"],
            ["Common anecdotal TB-500 (separate vials)", "2–2.5 mg twice weekly"],
            ["Common fixed 1:1 blend", "250/250 µg to 500/500 µg daily"],
            ["Typical reported duration", "4–8 weeks; 8–12-week variants exist"],
            ["Human-trial overlap", "None for verified Ac-LKKTETQ + BPC-157"],
            ["Evidence quality", "One exploratory rat study + tiny ambiguous human subgroup + anecdotal"],
          ],
        },
      ],
    },
    {
      id: "clinical-vs-anecdotal",
      title: "Published research versus community dosing",
      widget: "bpc-tb-clinical-vs-anecdotal",
    },
    {
      id: "mechanism",
      title: "Proposed mechanisms and the synergy question",
      paragraphs: [
        "**BPC-157** has been linked in preclinical models to tendon-fibroblast migration, FAK-paxillin signaling, VEGFR2/Akt/eNOS pathways, and extracellular-matrix organization. **Ac-LKKTETQ** is studied in relation to cytoskeletal dynamics, migration, and metabolism — though direct parent-fragment activity is not uniform across models.",
        "**Synergy has not been demonstrated.** The 2026 rat study tested the practical prediction at 10:60 µg/kg/day IP and found no additional combination benefit over monotherapy.",
      ],
      tables: [
        {
          caption: "Synergy claims vs evidence",
          headers: ["Claim", "Evidence status"],
          rows: [
            ["Peptides act through some different pathways", "Plausible from component preclinical research"],
            ["Different pathways guarantee better combined healing", "False inference"],
            ["The 10:60 rat ratio was additive", "Not demonstrated"],
            ["A 1:1 commercial blend is optimized", "No evidence"],
            ["Three knee patients prove synergy", "No — uncontrolled and too small"],
          ],
        },
      ],
    },
    {
      id: "claims",
      title: "Common claims vs evidence",
      widget: "bpc-tb-claim-checker",
    },
    {
      id: "evidence-ladder",
      title: "Dosage evidence ladder",
      widget: "bpc-tb-evidence-ladder",
      paragraphsAfter: [
        "Wolverine dosing is **poorly established**. The combination now has one direct controlled animal experiment, but it did not show superiority over monotherapy and cannot define a human regimen. Community schedules remain anecdotal.",
      ],
    },
    {
      id: "safety",
      title: "Safety and monitoring",
      paragraphs: [
        "No exact-combination adverse-event rate is available. The 2026 rat study reported no deaths, infections, wound complications, or reruptures in 32 young healthy male rats over 30 days — but this cannot establish human systemic, reproductive, immune, cancer, or long-term safety.",
        "Potential harm can arise from wrong identity, incorrect ratio, microbial contamination, aggregates, incompatible pH, degradation, and administration error. A blended vial makes it harder to identify which component caused a reaction.",
      ],
      widget: "bpc-tb-adverse-events",
    },
    {
      id: "storage",
      title: "Storage and stability",
      paragraphs: [
        "No published stability study was identified for a co-lyophilized BPC-157 + Ac-LKKTETQ blend across common reconstitution volumes and a multiweek use period. Community pages often specify refrigeration at 2–8°C and use within ~28 days — conventions, not combination-specific stability data.",
        "If the two peptides are prepared in one solution, compatibility and stability must be demonstrated for the combination. Otherwise track each component independently.",
      ],
    },
    {
      id: "anti-doping",
      title: "Anti-doping status",
      paragraphs: [
        "BPC-157 is prohibited at all times under WADA's S0 category. The 2026 Prohibited List separately names thymosin-β4 and its derivatives, including TB-500, under S2.3. A Wolverine blend therefore contains **two prohibited components** and is incompatible with tested sport.",
      ],
    },
    {
      id: "bottom-line",
      title: "Bottom line",
      paragraphs: [
        "The Wolverine Stack is not one standardized product. A scientifically interpretable formulation must separately verify **BPC-157** and **Ac-LKKTETQ**, their salt forms, peptide-equivalent amounts, ratio, impurities, and post-reconstitution stability.",
        "The strongest direct combination evidence is the 2026 rat Achilles-repair study: **BPC-157 10 µg/kg/day plus TB-500 60 µg/kg/day, IP once daily for 30 days** — with **no additive benefit over monotherapy**. Community protocols use different identities, ratios, routes, and schedules and are anecdotal conventions, not clinical dosing.",
      ],
      highlight:
        "Confirm Ac-LKKTETQ identity (not full-length Tβ4), vial ratio (1:1 vs 1:2), and whether the product is a blend or separate vials — before trusting any unit chart. This stack is ≠ GLOW/KLOW.",
    },
  ],
  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "What is the standard Wolverine Stack dose?",
        answer:
          "There is no established human dose. Community schedules commonly pair BPC-157 250–500 µg daily with TB-500 2–2.5 mg twice weekly, or use a fixed 1:1 blend containing 250 µg of each peptide daily.",
      },
      {
        question: "What dose was used in the 2026 rat study?",
        answer:
          "The combination arm used BPC-157 10 µg/kg/day plus TB-500 60 µg/kg/day, administered intraperitoneally once daily for 30 postoperative days after Achilles transection and repair.",
      },
      {
        question: "Did the Wolverine Stack work better than either peptide alone?",
        answer:
          "No additive advantage was demonstrated. TB-500 monotherapy produced the clearest biomechanical and several histological findings in the 2026 rat study.",
      },
      {
        question: "Can the rat dose be converted into a human dose?",
        answer:
          "No. Species, IP route, injury model, formulation, identity, exposure, and endpoint differences prevent a validated conversion.",
      },
      {
        question: "Is TB4 the same as TB-500?",
        answer:
          "No. Full-length thymosin beta-4 contains 43 amino acids; TB-500 is most consistently Ac-LKKTETQ, a seven-residue N-acetylated fragment.",
      },
      {
        question: "Can a fixed 1:1 blend reproduce the separate-vial protocol?",
        answer:
          "Not exactly. Daily BPC-157 and twice-weekly multi-milligram TB-500 use different weekly ratios and frequencies. Example: 250 µg each daily = 1.75 mg TB/week vs 5 mg TB/week in the common separate pattern.",
      },
      {
        question: "How many U-100 units provide 250 µg of each from 10/10 mg @ 2 mL?",
        answer:
          "Five units. The solution contains 5 mg/mL of each component, so 0.05 mL contains 250 µg BPC-157 and 250 µg TB-500.",
      },
      {
        question: "How many units provide 250 µg of each from 10/10 mg @ 4 mL?",
        answer:
          "Ten units. Each component concentration is 2.5 mg/mL, so 0.10 mL contains 250 µg of each.",
      },
      {
        question: "What does “500 µg Wolverine” mean?",
        answer:
          "It is ambiguous. In a 1:1 blend it may mean 500 µg total (250 µg of each) or 500 µg of each (1 mg total). Always state component amounts separately.",
      },
      {
        question: "Is the Wolverine Stack the same as GLOW or KLOW?",
        answer:
          "No. GLOW adds GHK-Cu; KLOW adds GHK-Cu and KPV. Those are multi-component blends with different exposures and safety questions.",
      },
      {
        question: "Is there a Wolverine loading dose?",
        answer:
          "No evidence-based loading phase exists. Loading terminology is borrowed mainly from community TB-500 schedules.",
      },
      {
        question: "Is the Wolverine Stack prohibited in sport?",
        answer:
          "Yes for tested athletes. BPC-157 is prohibited under WADA S0, and thymosin-β4 derivatives including TB-500 are prohibited under S2.3 at all times.",
      },
    ],
  },
  sources: {
    title: "References",
    items: [
      {
        authors: "Biçer O et al.",
        title: "Effects of BPC-157 and TB-500 on Achilles tendon healing in rats",
        detail: "2026 — first direct controlled combination study; no synergy.",
        href: "https://www.jointdrs.org/full-text/1851",
      },
      {
        authors: "Lee E, Padgett B.",
        title: "Intra-Articular Injection of BPC 157 for Multiple Types of Knee Pain",
        detail: "2021 — 4-person uncontrolled combo subgroup.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34324435/",
      },
      {
        authors: "FDA",
        title: "Scientific review of BPC-157 for 2026 PCAC",
        detail: "Bulk drug substance review — not combination authorization.",
        href: "https://www.fda.gov/media/193343/download",
      },
      {
        authors: "FDA",
        title: "Scientific review of TB-500 for 2026 PCAC",
        detail: "Ac-LKKTETQ identity and chemistry.",
        href: "https://www.fda.gov/media/193349/download",
      },
      {
        authors: "Esposito S et al.",
        title: "Identification of N-acetylated thymosin beta-4 17–23 in TB-500",
        detail: "2012.",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
      {
        authors: "Chang CH et al.",
        title: "BPC-157, tendon outgrowth, cell survival, and migration",
        detail: "2011.",
        href: "https://pubmed.ncbi.nlm.nih.gov/21030672/",
      },
      {
        authors: "WADA",
        title: "2026 Prohibited List",
        detail: "BPC-157 (S0) and Tβ4 derivatives/TB-500 (S2.3) prohibited.",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  },
  safety: {
    title: "Important Safety Information",
    paragraphs: [
      "The Wolverine Stack is a **community nickname** for BPC-157 + TB-500 with **no controlled human combination trial**, **no established human dose**, and **no demonstrated synergy** in the only direct controlled animal study.",
      "This page documents research evidence, community conventions, and reconstitution arithmetic. It is **not** a clinical dosing, self-injection, or treatment guide. Always state **BPC-157 and Ac-LKKTETQ amounts separately**.",
      "Both components are **WADA prohibited**. Confirm peptide identity, ratio, and that the product is not GLOW, KLOW, or full-length Tβ4. Seek urgent care for severe allergic, infectious, or neurological symptoms.",
    ],
  },
};

/**
 * Peptide detail pages — mockup-driven (Retatrutide is the reference).
 */

import { RETATRUTIDE_DOSAGE_GUIDE } from "@/data/retatrutide-dosage-guide";
import { TIRZEPATIDE_DOSAGE_GUIDE } from "@/data/tirzepatide-dosage-guide";
import { SEMAGLUTIDE_DOSAGE_GUIDE } from "@/data/semaglutide-dosage-guide";
import { TESAMORELIN_DOSAGE_GUIDE } from "@/data/tesamorelin-dosage-guide";
import { AOD9604_DOSAGE_GUIDE } from "@/data/aod-9604-dosage-guide";
import { AMINO1MQ_DOSAGE_GUIDE } from "@/data/5-amino-1mq-dosage-guide";
import { BPC157_DOSAGE_GUIDE } from "@/data/bpc-157-dosage-guide";
import { TB500_DOSAGE_GUIDE } from "@/data/tb-500-dosage-guide";
import { TB500_FRAGMENT_DOSAGE_GUIDE } from "@/data/tb-500-fragment-17-23-dosage-guide";
import { CAGRILINTIDE_DOSAGE_GUIDE } from "@/data/cagrilintide-dosage-guide";
import { SURVODUTIDE_DOSAGE_GUIDE } from "@/data/survodutide-dosage-guide";
import { MOTSC_DOSAGE_GUIDE } from "@/data/mots-c-dosage-guide";
import { SLUPP332_DOSAGE_GUIDE } from "@/data/slu-pp-332-dosage-guide";
import { IPAMORELIN_DOSAGE_GUIDE } from "@/data/ipamorelin-dosage-guide";
import { CJC1295_DAC_DOSAGE_GUIDE } from "@/data/cjc-1295-dac-dosage-guide";
import { CJC1295_NODAC_DOSAGE_GUIDE } from "@/data/cjc-1295-no-dac-dosage-guide";
import { HEXARELIN_DOSAGE_GUIDE } from "@/data/hexarelin-dosage-guide";
import { SERMORELIN_DOSAGE_GUIDE } from "@/data/sermorelin-dosage-guide";
import { IGF1_LR3_DOSAGE_GUIDE } from "@/data/igf-1-lr3-dosage-guide";
import { CJC_IPA_DOSAGE_GUIDE } from "@/data/cjc-1295-no-dac-ipamorelin-dosage-guide";
import { ADAMAX_DOSAGE_GUIDE } from "@/data/adamax-dosage-guide";
import { KLOW_DOSAGE_GUIDE } from "@/data/klow-dosage-guide";
import { GLOW_DOSAGE_GUIDE } from "@/data/glow-dosage-guide";
import { GHK_CU_DOSAGE_GUIDE } from "@/data/ghk-cu-dosage-guide";
import { GHK_CU_TOPICAL_POWDER_DOSAGE_GUIDE } from "@/data/ghk-cu-topical-powder-dosage-guide";
import { GHK_BASIC_DOSAGE_GUIDE } from "@/data/ghk-basic-dosage-guide";
import { LIVAGEN_DOSAGE_GUIDE } from "@/data/livagen-dosage-guide";
import { NAD_PLUS_DOSAGE_GUIDE } from "@/data/nad-plus-dosage-guide";
import { PINEALON_DOSAGE_GUIDE } from "@/data/pinealon-dosage-guide";
import { THYMAGEN_DOSAGE_GUIDE } from "@/data/thymagen-dosage-guide";
import { THYMALIN_DOSAGE_GUIDE } from "@/data/thymalin-dosage-guide";
import { AHK_CU_DOSAGE_GUIDE } from "@/data/ahk-cu-dosage-guide";
import { DIHEXA_DOSAGE_GUIDE } from "@/data/dihexa-dosage-guide";
import { DSIP_DOSAGE_GUIDE } from "@/data/dsip-dosage-guide";
import { SELANK_DOSAGE_GUIDE } from "@/data/selank-dosage-guide";
import { SEMAX_DOSAGE_GUIDE } from "@/data/semax-dosage-guide";
import { SELANK_SEMAX_DOSAGE_GUIDE } from "@/data/selank-semax-dosage-guide";
import { CARTALAX_DOSAGE_GUIDE } from "@/data/cartalax-dosage-guide";
import { ARA290_DOSAGE_GUIDE } from "@/data/ara-290-dosage-guide";
import { KPV_DOSAGE_GUIDE } from "@/data/kpv-dosage-guide";
import { KISSPEPTIN_10_DOSAGE_GUIDE } from "@/data/kisspeptin-10-dosage-guide";
import { MELANOTAN_1_DOSAGE_GUIDE } from "@/data/melanotan-1-dosage-guide";
import { MELANOTAN_2_DOSAGE_GUIDE } from "@/data/melanotan-2-dosage-guide";
import { SNAP8_DOSAGE_GUIDE } from "@/data/snap-8-dosage-guide";
import { LL37_DOSAGE_GUIDE } from "@/data/ll-37-dosage-guide";
import { TA1_DOSAGE_GUIDE } from "@/data/thymosin-alpha-1-dosage-guide";
import { THYMULIN_DOSAGE_GUIDE } from "@/data/thymulin-dosage-guide";
import { KPV_GHK_CU_DOSAGE_GUIDE } from "@/data/kpv-ghk-cu-dosage-guide";
import { BPC_GHK_DOSAGE_GUIDE } from "@/data/bpc-157-ghk-cu-dosage-guide";
import { BPC_TB_DOSAGE_GUIDE } from "@/data/bpc-157-tb-500-dosage-guide";
import { TA1_THYMALIN_DOSAGE_GUIDE } from "@/data/thymosin-alpha-1-thymalin-dosage-guide";
import { EPITHALON_DOSAGE_GUIDE } from "@/data/epithalon-dosage-guide";

const RETATRUTIDE = {
  slug: "retatrutide",
  name: "Retatrutide",
  pageTitle:
    "Retatrutide Dosage & Dose Escalation: Complete Clinical Trial Guide",
  goalSlug: "lose-weight",
  goalLabel: "Lose Weight",
  rankBadge: "#1 Peptide for Weight Loss",
  summary:
    "Complete clinical-trial dosing guide for retatrutide, an investigational GIP / GLP-1 / glucagon agonist studied as a once-weekly injection with Phase 3 escalation from 2 mg to 12 mg.",
  rating: "4.8",
  reviewCount: "1,245",
  researchedBadge: "Highly Researched",
  tags: [
    "Weight Loss",
    "Dose Escalation",
    "Phase 3 TRIUMPH",
    "GIP / GLP-1 / Glucagon",
  ],
  dosageGuide: RETATRUTIDE_DOSAGE_GUIDE,
  moleculeCallouts: [
    {
      label: "GLP-1",
      body: "Slows gastric emptying and reduces appetite signals.",
    },
    {
      label: "GIP",
      body: "Supports insulin response and metabolic efficiency.",
    },
    {
      label: "Glucagon",
      body: "Increases energy expenditure and fat oxidation.",
    },
  ],
  about:
    "Retatrutide is an investigational triple agonist that simultaneously targets GLP-1, GIP, and glucagon receptors. It has been studied as a once-weekly subcutaneous injection in Phase 2 and Phase 3 trials, with doses ranging from 1 mg to 12 mg.",
  facts: [
    { label: "Type", value: "Peptide", icon: "type" },
    { label: "Starting Dose", value: "2 mg weekly", icon: "weight" },
    { label: "Max Studied", value: "12 mg weekly", icon: "clock" },
    { label: "Development", value: "Phase 3 Trials", icon: "flask" },
  ],
  benefits: [
    "Phase 3 starting dose: 2 mg once weekly",
    "Escalation every 4 weeks in TRIUMPH trials",
    "Studied target doses: 4 mg, 9 mg, and 12 mg",
    "Once-weekly subcutaneous administration",
    "Investigational — not currently FDA approved",
  ],
  mechanisms: [
    {
      title: "GLP-1 Agonist",
      tone: "purple",
      points: [
        "Reduces hunger cues",
        "Slows gastric emptying",
        "Improves glycemic control",
      ],
    },
    {
      title: "GIP Agonist",
      tone: "green",
      points: [
        "Enhances insulin response",
        "Supports nutrient partitioning",
        "Complements GLP-1 effects",
      ],
    },
    {
      title: "Glucagon Agonist",
      tone: "orange",
      points: [
        "Raises energy expenditure",
        "Increases fat oxidation",
        "Supports metabolic rate",
      ],
    },
  ],
  resultBars: [
    "Reduced Calorie Intake",
    "Increased Fat Burning",
    "Significant Weight Loss",
  ],
  chartLossPct: 24,
  chartLossLbs: 53,
  sideEffects:
    "In the Phase 2 obesity trial, the most common adverse events were gastrointestinal (nausea, diarrhea, vomiting, constipation, and decreased appetite). These occurred primarily during dose escalation, were generally mild to moderate, and were more frequent at higher doses. Dose-dependent increases in heart rate were also observed.",
  dosage:
    "Phase 3 TRIUMPH participants started at 2 mg once weekly and escalated every four weeks (2 → 4 → 6 → 9 → 12 mg) until reaching their assigned target dose of 4 mg, 9 mg, or 12 mg. Retatrutide is investigational and has no FDA-approved dosage.",
  glance: [
    { label: "Phase 3 Start", value: "2 mg weekly", highlight: true },
    { label: "Escalation", value: "Every 4 weeks" },
    { label: "Target Doses", value: "4 / 9 / 12 mg" },
    { label: "Max Studied", value: "12 mg weekly" },
    { label: "Phase 2 @ 48 wks", value: "−24.2% (12 mg)" },
    { label: "Administration", value: "Subcutaneous" },
    { label: "FDA Status", value: "Investigational" },
  ],
  compare: {
    columns: ["Retatrutide", "Tirzepatide", "Semaglutide"],
    highlight: 0,
    rows: [
      {
        feature: "Receptor Activity",
        values: ["GIP + GLP-1 + glucagon", "GIP + GLP-1", "GLP-1"],
      },
      {
        feature: "Typical Frequency",
        values: ["Weekly", "Weekly", "Weekly"],
      },
      {
        feature: "Regulatory Status",
        values: [
          "Investigational",
          "FDA approved (certain indications)",
          "FDA approved (certain indications)",
        ],
      },
      {
        feature: "Phase 2 avg. loss (top dose)",
        values: ["24.2% @ 48 wks", "—", "—"],
      },
    ],
  },
  providers: [
    {
      initials: "PS",
      name: "Peptide Sciences",
      rating: "4.9",
      price: "$199/mo",
      tag: "Free Shipping",
    },
    {
      initials: "CP",
      name: "Core Peptides",
      rating: "4.8",
      price: "$179/mo",
      tag: "Lab Tested",
    },
    {
      initials: "LP",
      name: "Limitless Life",
      rating: "4.7",
      price: "$165/mo",
      tag: "Fast Ship",
    },
    {
      initials: "PP",
      name: "PureRawz",
      rating: "4.6",
      price: "$149/mo",
      tag: "Budget Pick",
    },
  ],
  reviews: [
    {
      name: "Jason R.",
      result: "Lost 42 lbs",
      rating: "5.0",
      quote:
        "Comparing providers on MyPepFinder made the process straightforward. Results tracked close to the expected chart.",
    },
    {
      name: "Sarah K.",
      result: "Lost 31 lbs",
      rating: "4.8",
      quote:
        "Clear breakdown of how the triple agonist works. The research cards were especially useful.",
    },
  ],
  research: [
    {
      tag: "Clinical Trial",
      title: "Triple–Hormone-Receptor Agonist Retatrutide for Obesity",
      summary:
        "Phase 2 randomized trial evaluating retatrutide for body-weight reduction in adults with obesity.",
      cite: "NEJM, 2023",
      href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
    },
    {
      tag: "Clinical Trial",
      title: "Retatrutide Dose-Ranging Weight-Loss Outcomes",
      summary:
        "Lancet publication covering retatrutide efficacy and safety signals in metabolic disease research.",
      cite: "The Lancet, 2023",
      href: "https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(23)01053-X/abstract",
    },
    {
      tag: "Clinical Research",
      title: "Retatrutide Clinical Evidence in Nature Medicine",
      summary:
        "Peer-reviewed analysis of retatrutide metabolic and body-composition outcomes.",
      cite: "Nature Medicine, 2024",
      href: "https://www.nature.com/articles/s41591-024-03018-2",
    },
    {
      tag: "Clinical Trial",
      title: "Retatrutide in Diabetes & Endocrinology Research",
      summary:
        "Lancet Diabetes & Endocrinology abstract on retatrutide clinical findings.",
      cite: "Lancet Diabetes Endocrinol.",
      href: "https://www.thelancet.com/journals/landia/article/PIIS2213-8587(25)00092-0/abstract",
    },
    {
      tag: "Open Access",
      title: "Retatrutide Evidence Review (PMC12304053)",
      summary:
        "Full-text review discussing retatrutide mechanisms and clinical evidence.",
      cite: "PMC / NCBI",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12304053/",
    },
    {
      tag: "Open Access",
      title: "Retatrutide Clinical Notes (PMC12190491)",
      summary:
        "Peer-reviewed open-access article covering retatrutide research outcomes.",
      cite: "PMC / NCBI",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12190491/",
    },
    {
      tag: "Open Access",
      title: "Retatrutide Research Summary (PMC12026077)",
      summary:
        "Open-access publication summarizing retatrutide metabolic pathway research.",
      cite: "PMC / NCBI",
      href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12026077/",
    },
    {
      tag: "Basic Science",
      title: "Retatrutide Mechanistic Insights",
      summary:
        "Nature portfolio article examining cellular and pathway-level findings related to retatrutide.",
      cite: "Cell Discovery / Nature, 2024",
      href: "https://www.nature.com/articles/s41421-024-00700-0",
    },
  ],
};

function makePeptide(overrides) {
  return {
    ...structuredClone(RETATRUTIDE),
    ...overrides,
    moleculeCallouts: overrides.moleculeCallouts ?? RETATRUTIDE.moleculeCallouts,
    facts: overrides.facts ?? RETATRUTIDE.facts,
    benefits: overrides.benefits ?? RETATRUTIDE.benefits,
    mechanisms: overrides.mechanisms ?? RETATRUTIDE.mechanisms,
    resultBars: overrides.resultBars ?? RETATRUTIDE.resultBars,
    glance: overrides.glance ?? RETATRUTIDE.glance,
    compare: overrides.compare ?? RETATRUTIDE.compare,
    providers: overrides.providers ?? RETATRUTIDE.providers,
    reviews: overrides.reviews ?? RETATRUTIDE.reviews,
    research: overrides.research ?? [],
    tags: overrides.tags ?? RETATRUTIDE.tags,
    dosageGuide: overrides.dosageGuide ?? null,
    pageTitle: overrides.pageTitle ?? null,
    sideEffects: overrides.sideEffects ?? null,
    dosage: overrides.dosage ?? null,
  };
}

export const PEPTIDE_PAGES = {
  retatrutide: RETATRUTIDE,
  tirzepatide: makePeptide({
    slug: "tirzepatide",
    name: "Tirzepatide",
    pageTitle:
      "Tirzepatide Dosage, Results & Side Effects: Complete Mounjaro and Zepbound Guide",
    rankBadge: "#2 Peptide for Weight Loss",
    summary:
      "FDA-approved dual GIP/GLP-1 agonist sold as Mounjaro and Zepbound. Complete dosing, SURMOUNT/SURPASS results, and side-effect guide for weekly tirzepatide.",
    rating: "4.7",
    reviewCount: "2,840",
    researchedBadge: "FDA Approved",
    tags: [
      "Weight Loss",
      "Type 2 Diabetes",
      "Mounjaro / Zepbound",
      "GIP / GLP-1",
    ],
    dosageGuide: TIRZEPATIDE_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "GIP",
        body: "Enhances glucose-dependent insulin secretion and energy-intake regulation.",
      },
      {
        label: "GLP-1",
        body: "Reduces appetite, slows gastric emptying, and supports glycemic control.",
      },
      {
        label: "Weekly",
        body: "Albumin binding extends half-life to about 5–6 days for once-weekly dosing.",
      },
    ],
    about:
      "Tirzepatide is a once-weekly dual GIP/GLP-1 receptor agonist approved as Mounjaro for type 2 diabetes and Zepbound for chronic weight management and moderate-to-severe OSA in adults with obesity.",
    facts: [
      { label: "Type", value: "Peptide", icon: "type" },
      { label: "Starting Dose", value: "2.5 mg weekly", icon: "weight" },
      { label: "Adult Maximum", value: "15 mg weekly", icon: "clock" },
      { label: "FDA Status", value: "Approved", icon: "flask" },
    ],
    benefits: [
      "FDA-approved as Mounjaro and Zepbound",
      "Starts at 2.5 mg once weekly, increased every 4 weeks",
      "Mean −20.9% weight change at 72 weeks with 15 mg in SURMOUNT-1",
      "Also approved for OSA in adults with obesity",
      "Ready-to-use weekly injection — not reconstituted",
    ],
    howItWorks:
      "Tirzepatide imitates two meal-responsive hormones. It helps the pancreas release insulin when glucose is elevated, suppresses inappropriate glucagon, reduces appetite and calorie intake, and slows stomach emptying.",
    mechanisms: [
      {
        title: "GIP Agonist",
        tone: "green",
        points: [
          "Enhances glucose-dependent insulin secretion",
          "Contributes to energy-intake regulation",
          "Complements GLP-1 effects",
        ],
      },
      {
        title: "GLP-1 Agonist",
        tone: "purple",
        points: [
          "Reduces appetite and calorie intake",
          "Slows gastric emptying",
          "Improves glycemic control",
        ],
      },
      {
        title: "Weekly Exposure",
        tone: "orange",
        points: [
          "Albumin binding extends half-life",
          "Steady state after about 4 weeks",
          "Once-weekly subcutaneous injection",
        ],
      },
    ],
    resultBars: [
      "Lower Calorie Intake",
      "Improved Glycemic Control",
      "Substantial Weight Loss",
    ],
    chartLossPct: 21,
    chartLossLbs: 46,
    sideEffects:
      "The most common effects are nausea, diarrhea, vomiting, constipation, abdominal pain, and indigestion. GI events occurred in 56% of Zepbound dose groups versus 30% with placebo and usually cluster during dose escalation.",
    dosage:
      "The FDA-approved starting dose is 2.5 mg once weekly for four weeks, then increased by 2.5 mg after at least four weeks at the current dose. Adult maximum is 15 mg weekly; pediatric type 2 diabetes maximum is 10 mg weekly.",
    glance: [
      { label: "Starting Dose", value: "2.5 mg weekly", highlight: true },
      { label: "Escalation", value: "Every 4 weeks" },
      { label: "Maintenance", value: "5 / 10 / 15 mg" },
      { label: "Adult Maximum", value: "15 mg weekly" },
      { label: "SURMOUNT-1 @ 72 wks", value: "−20.9% (15 mg)" },
      { label: "Brands", value: "Mounjaro / Zepbound" },
      { label: "FDA Status", value: "Approved" },
    ],
    compare: {
      columns: ["Tirzepatide", "Semaglutide", "Retatrutide"],
      highlight: 0,
      rows: [
        {
          feature: "Receptor Activity",
          values: ["GIP + GLP-1", "GLP-1", "GIP + GLP-1 + glucagon"],
        },
        {
          feature: "Typical Frequency",
          values: ["Weekly", "Weekly", "Weekly"],
        },
        {
          feature: "Regulatory Status",
          values: [
            "FDA approved (Mounjaro / Zepbound)",
            "FDA approved (certain indications)",
            "Investigational",
          ],
        },
        {
          feature: "Obesity result (direct)",
          values: ["−20.2% SURMOUNT-5", "−13.7% SURMOUNT-5", "—"],
        },
      ],
    },
    research: [
      {
        tag: "Phase 3",
        title: "Tirzepatide Once Weekly for the Treatment of Obesity",
        summary:
          "SURMOUNT-1: up to −20.9% mean weight change at 72 weeks (treatment-regimen estimand).",
        cite: "NEJM, 2022",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2206038",
      },
      {
        tag: "Phase 3",
        title: "Tirzepatide versus Semaglutide in Type 2 Diabetes",
        summary:
          "SURPASS-2: tirzepatide was noninferior and superior to semaglutide 1 mg for HbA1c.",
        cite: "NEJM, 2021",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2107519",
      },
      {
        tag: "Phase 3",
        title: "Continued Treatment for Maintenance of Weight Reduction",
        summary:
          "SURMOUNT-4: withdrawal produced substantial regain; continued treatment produced additional loss.",
        cite: "JAMA, 2024",
        href: "https://jamanetwork.com/journals/jama/fullarticle/2812936",
      },
      {
        tag: "Phase 3",
        title: "Tirzepatide for OSA and Obesity",
        summary:
          "SURMOUNT-OSA: large AHI reductions with and without PAP at 52 weeks.",
        cite: "NEJM, 2024",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2404881",
      },
      {
        tag: "Head-to-Head",
        title: "Tirzepatide Compared with Semaglutide for Obesity",
        summary:
          "SURMOUNT-5: −20.2% vs −13.7% mean weight change at 72 weeks.",
        cite: "NEJM, 2025",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2416394",
      },
      {
        tag: "CVOT",
        title: "Cardiovascular Outcomes versus Dulaglutide",
        summary:
          "SURPASS-CVOT: tirzepatide was noninferior to dulaglutide for major adverse cardiovascular events.",
        cite: "NEJM, 2025",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2505928",
      },
    ],
  }),
  semaglutide: makePeptide({
    slug: "semaglutide",
    name: "Semaglutide",
    pageTitle:
      "Semaglutide Dosage, Results & Side Effects: Complete Ozempic, Wegovy and Rybelsus Guide",
    rankBadge: "#3 Peptide for Weight Loss",
    summary:
      "FDA-approved GLP-1 agonist sold as Ozempic, Wegovy, and Rybelsus. Complete product-specific dosing, STEP/SELECT/FLOW results, and side-effect guide.",
    rating: "4.6",
    reviewCount: "3,120",
    researchedBadge: "FDA Approved",
    tags: [
      "Weight Loss",
      "Type 2 Diabetes",
      "Ozempic / Wegovy / Rybelsus",
      "GLP-1",
    ],
    dosageGuide: SEMAGLUTIDE_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "GLP-1",
        body: "Glucose-dependent insulin release, lower glucagon, delayed gastric emptying, and reduced appetite.",
      },
      {
        label: "Weekly or daily",
        body: "Injection products are weekly; oral tablets with SNAC are taken once daily.",
      },
      {
        label: "~1 week half-life",
        body: "Albumin binding extends exposure so weekly injection can reach steady state in 4–5 weeks.",
      },
    ],
    about:
      "Semaglutide is a long-acting GLP-1 receptor agonist approved as Ozempic and Rybelsus for type 2 diabetes and as Wegovy for chronic weight management, cardiovascular-risk reduction, and selected MASH. Products are not interchangeable milligram-for-milligram.",
    facts: [
      { label: "Type", value: "Peptide", icon: "type" },
      { label: "Injection start", value: "0.25 mg weekly", icon: "weight" },
      { label: "Wegovy maintenance", value: "2.4 mg (HD 7.2 mg)", icon: "clock" },
      { label: "FDA Status", value: "Approved", icon: "flask" },
    ],
    benefits: [
      "FDA-approved as Ozempic, Wegovy, and Rybelsus",
      "STEP 1: −14.9% mean weight change at 68 weeks with 2.4 mg",
      "SELECT: 20% relative reduction in major CV events",
      "FLOW kidney-risk evidence and ESSENCE MASH histology",
      "Ready-to-use pens and swallow-whole tablets — not reconstituted",
    ],
    howItWorks:
      "Semaglutide imitates GLP-1, a hormone released after eating. It helps the pancreas release insulin when blood glucose is high, reduces glucagon, slows stomach emptying, increases fullness, and reduces calorie intake.",
    mechanisms: [
      {
        title: "GLP-1 Receptor",
        tone: "purple",
        points: [
          "Glucose-dependent insulin secretion",
          "Reduces glucagon when glucose is elevated",
          "Increases satiety and lowers calorie intake",
        ],
      },
      {
        title: "Gastric Emptying",
        tone: "green",
        points: [
          "Delays early post-meal emptying",
          "Affects glucose exposure",
          "Can change oral-drug absorption",
        ],
      },
      {
        title: "Extended Exposure",
        tone: "orange",
        points: [
          "Albumin binding supports weekly injection",
          "Half-life of about one week",
          "Oral SNAC enables limited tablet absorption",
        ],
      },
    ],
    resultBars: [
      "Reduced Appetite",
      "Improved Glycemic Control",
      "Substantial Weight Loss",
    ],
    chartLossPct: 15,
    chartLossLbs: 33,
    sideEffects:
      "The most common effects are nausea, diarrhea, vomiting, constipation, and abdominal pain, especially during escalation. Wegovy 7.2 mg has a prominent dysesthesia signal (22% vs 6% at 2.4 mg).",
    dosage:
      "Ozempic and Wegovy injections generally start at 0.25 mg once weekly for four weeks. Wegovy recommended maintenance is 2.4 mg; selected adults may use 7.2 mg after tolerating 2.4 mg. Ozempic maximum is 2 mg weekly. Oral products have separate milligram schedules and are not equivalent to injections.",
    glance: [
      { label: "Injection start", value: "0.25 mg weekly", highlight: true },
      { label: "Wegovy maintenance", value: "2.4 mg weekly" },
      { label: "Wegovy HD option", value: "7.2 mg weekly" },
      { label: "Ozempic max", value: "2 mg weekly" },
      { label: "STEP 1 @ 68 wks", value: "−14.9% (2.4 mg)" },
      { label: "Brands", value: "Ozempic / Wegovy / Rybelsus" },
      { label: "FDA Status", value: "Approved" },
    ],
    compare: {
      columns: ["Semaglutide", "Tirzepatide", "Retatrutide"],
      highlight: 0,
      rows: [
        {
          feature: "Receptor Activity",
          values: ["GLP-1", "GIP + GLP-1", "GIP + GLP-1 + glucagon"],
        },
        {
          feature: "Typical Frequency",
          values: ["Weekly or daily", "Weekly", "Weekly"],
        },
        {
          feature: "Regulatory Status",
          values: [
            "FDA approved (Ozempic / Wegovy / Rybelsus)",
            "FDA approved (Mounjaro / Zepbound)",
            "Investigational",
          ],
        },
        {
          feature: "Obesity result (direct)",
          values: ["−13.7% SURMOUNT-5", "−20.2% SURMOUNT-5", "—"],
        },
      ],
    },
    research: [
      {
        tag: "Phase 3",
        title: "Once-Weekly Semaglutide in Adults with Overweight or Obesity",
        summary: "STEP 1: −14.9% vs −2.4% mean weight change at 68 weeks.",
        cite: "NEJM, 2021",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2032183",
      },
      {
        tag: "Phase 3",
        title: "Once-Weekly Semaglutide in Adolescents with Obesity",
        summary: "STEP TEENS: BMI −16.1% vs +0.6% placebo at 68 weeks.",
        cite: "NEJM, 2022",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2208601",
      },
      {
        tag: "CVOT",
        title: "Semaglutide and Cardiovascular Outcomes in Obesity without Diabetes",
        summary: "SELECT: 6.5% vs 8.0% MACE; HR 0.80.",
        cite: "NEJM, 2023",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2307563",
      },
      {
        tag: "Kidney",
        title: "Semaglutide on CKD in Type 2 Diabetes",
        summary: "FLOW: 24% relative risk reduction; HR 0.76.",
        cite: "NEJM, 2024",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2403347",
      },
      {
        tag: "MASH",
        title: "Phase 3 Trial of Semaglutide in MASH",
        summary:
          "ESSENCE: 63% vs 34% MASH resolution; 37% vs 22% fibrosis improvement.",
        cite: "NEJM, 2025",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2413258",
      },
      {
        tag: "CVOT",
        title: "Semaglutide and Cardiovascular Outcomes in Type 2 Diabetes",
        summary: "SUSTAIN-6: 26% relative reduction; HR 0.74.",
        cite: "NEJM, 2016",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa1607141",
      },
    ],
  }),
  cagrilintide: makePeptide({
    slug: "cagrilintide",
    name: "Cagrilintide",
    pageTitle:
      "Cagrilintide Dosage, Results, Side Effects & CagriSema Clinical-Trial Guide",
    goalSlug: "lose-weight",
    goalLabel: "Lose Weight",
    rankBadge: "Amylin Analog Research",
    summary:
      "Investigational once-weekly amylin-and-calcitonin receptor agonist. Clinical-trial doses, Phase 2 dose-response, REDEFINE/CagriSema results, side effects, and FDA status — separated from combination outcomes.",
    rating: "4.6",
    reviewCount: "890",
    researchedBadge: "Not FDA Approved",
    tags: [
      "Weight Loss",
      "Amylin / Calcitonin",
      "CagriSema",
      "Once Weekly",
    ],
    dosageGuide: CAGRILINTIDE_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Amylin analog",
        body: "Long-acting acylated human amylin analog — not a GLP-1 receptor agonist.",
      },
      {
        label: "AMY + CTR",
        body: "Agonism at AMY1/2/3 and the calcitonin receptor supports satiety and lower food intake.",
      },
      {
        label: "≠ CagriSema",
        body: "20%+ weight-loss headlines usually describe cagrilintide + semaglutide, not monotherapy.",
      },
    ],
    about:
      "Cagrilintide (AM833 / NNC0174-0833) is a 37-amino-acid long-acting amylin analog developed by Novo Nordisk. Half-life of roughly 6.6–8.1 days supports once-weekly subcutaneous study dosing. Stand-alone trials show about 6%–12% mean weight loss depending on dose and duration; larger figures typically belong to CagriSema.",
    facts: [
      { label: "Type", value: "Peptide", icon: "type" },
      { label: "Studied start", value: "0.3–0.6 mg weekly", icon: "weight" },
      { label: "Phase 3 target", value: "2.4 mg weekly", icon: "clock" },
      { label: "FDA Status", value: "Not approved", icon: "flask" },
    ],
    benefits: [
      "Phase 2: −6.0% to −10.8% at 26 weeks across 0.3–4.5 mg",
      "REDEFINE 1 monotherapy arm: −11.8% at 68 weeks (trial-product)",
      "CagriSema: −20.4% / −22.7% at 68 weeks (policy / product)",
      "REDEFINE 4: did not meet noninferiority vs tirzepatide (topline)",
      "FDA: cannot be used in compounding under federal law",
    ],
    howItWorks:
      "Cagrilintide mimics amylin, activating AMY1/2/3 and calcitonin receptors to increase satiety and reduce food intake. Semaglutide acts via GLP-1; combining them (CagriSema) can reduce weight more than either alone.",
    mechanisms: [
      {
        title: "Amylin Receptors",
        tone: "purple",
        points: [
          "AMY1/2/3 via CTR + RAMP complexes",
          "Central satiety signaling",
          "Reduced food intake in trials",
        ],
      },
      {
        title: "Calcitonin Receptor",
        tone: "green",
        points: [
          "Direct CTR agonism",
          "Clinical contribution separate from AMY unresolved",
          "Structural engagement demonstrated",
        ],
      },
      {
        title: "Weekly Exposure",
        tone: "orange",
        points: [
          "Lipid side chain / albumin binding",
          "Half-life ~159–195 hours",
          "Supports once-weekly study dosing",
        ],
      },
    ],
    resultBars: [
      "Monotherapy ~8–12% at 32–68 wk",
      "CagriSema ~20–23% (combination)",
      "GI events most common",
    ],
    chartLossPct: 11.8,
    chartLossLbs: 0,
    sideEffects:
      "Most common events are gastrointestinal (nausea, constipation, diarrhea, vomiting), plus decreased appetite, fatigue, headache, and injection-site reactions. In Phase 2 monotherapy, nausea ranged from 20%–47% across doses versus 18% placebo. CagriSema had higher GI rates than either component alone in REDEFINE 1.",
    dosage:
      "No FDA-approved dosage. Phase 2 studied 0.3–4.5 mg once weekly with two-week escalations to target. Later Phase 3 arms commonly used a 2.4 mg weekly target. CagriSema escalates both components from 0.25 mg every four weeks to up to 2.4/2.4 mg. These are research protocols, not approved home dosing.",
    glance: [
      { label: "Class", value: "Amylin / CTR agonist", highlight: true },
      { label: "Frequency", value: "Once weekly SC" },
      { label: "Phase 2 doses", value: "0.3–4.5 mg" },
      { label: "Mono @ 68 wk", value: "−11.8% (2.4 mg)" },
      { label: "CagriSema @ 68 wk", value: "−20.4% / −22.7%" },
      { label: "Half-life", value: "~6.6–8.1 days" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["Cagrilintide", "CagriSema", "Semaglutide", "Tirzepatide"],
      highlight: 0,
      rows: [
        {
          feature: "Targets",
          values: [
            "AMY1/2/3 + CTR",
            "Amylin targets + GLP-1",
            "GLP-1 only",
            "GIP + GLP-1",
          ],
        },
        {
          feature: "Obesity evidence",
          values: [
            "Phase 2 + Phase 3 mono arms",
            "Large Phase 3 program",
            "Approved (Wegovy)",
            "Approved (Zepbound)",
          ],
        },
        {
          feature: "Example weight result",
          values: [
            "−11.8% @ 68 wk (2.4 mg)",
            "−20.4% / −22.7% @ 68 wk",
            "−14.9% STEP 1 / REDEFINE arm",
            "−20.9% SURMOUNT-1 (15 mg)",
          ],
        },
        {
          feature: "FDA status (Aug 2026)",
          values: [
            "Not approved",
            "Application under review",
            "Approved",
            "Approved",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Phase 2",
        title: "Once-weekly cagrilintide dose-finding trial",
        summary: "−6.0% to −10.8% at 26 weeks across 0.3–4.5 mg vs −3.0% placebo.",
        cite: "Lancet, 2021",
        href: "https://pubmed.ncbi.nlm.nih.gov/34798060/",
      },
      {
        tag: "Phase 3",
        title: "REDEFINE 1: CagriSema, semaglutide, and cagrilintide",
        summary:
          "CagriSema −20.4% / −22.7%; cagrilintide 2.4 mg −11.5% / −11.8% at week 68.",
        cite: "NEJM, 2025",
        href: "https://pubmed.ncbi.nlm.nih.gov/40544433/",
      },
      {
        tag: "Head-to-head",
        title: "REDEFINE 4: CagriSema vs tirzepatide",
        summary:
          "Company topline: −23.0% vs −25.5% (efficacy); noninferiority not met.",
        cite: "Novo Nordisk, 2026",
        href: "https://clinicaltrials.gov/study/NCT06131437",
      },
      {
        tag: "T2D",
        title: "REIMAGINE 2: CagriSema vs semaglutide or cagrilintide",
        summary:
          "HbA1c −1.91 vs −1.75; weight −14.2% vs −10.2% (CagriSema vs semaglutide 2.4 mg).",
        cite: "Lancet D&E, 2026",
        href: "https://pubmed.ncbi.nlm.nih.gov/42251859/",
      },
      {
        tag: "FDA",
        title: "Unapproved GLP-1 drugs and compounding concerns",
        summary:
          "FDA: cagrilintide cannot be used in compounding and has not been found safe and effective.",
        cite: "FDA, 2026",
        href: "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss",
      },
    ],
  }),
  survodutide: makePeptide({
    slug: "survodutide",
    name: "Survodutide",
    pageTitle:
      "Survodutide Dosage, Results, Side Effects & MASH Clinical-Trial Guide",
    goalSlug: "lose-weight",
    goalLabel: "Lose Weight",
    rankBadge: "Glucagon/GLP-1 Dual Agonist",
    summary:
      "Investigational once-weekly glucagon/GLP-1 dual agonist (BI 456906). Phase 3 obesity and MASLD results, Phase 2 MASH biopsy data, dose escalation, side effects, and regulatory status — with estimands kept separate.",
    rating: "4.6",
    reviewCount: "720",
    researchedBadge: "Not FDA Approved",
    tags: [
      "Weight Loss",
      "MASLD / MASH",
      "Glucagon / GLP-1",
      "Once Weekly",
    ],
    dosageGuide: SURVODUTIDE_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Dual agonist",
        body: "Activates GLP-1 and glucagon receptors — about eightfold more potent at GLP-1R in vitro.",
      },
      {
        label: "13% ≠ 16.6%",
        body: "Treatment-regimen (−13.0%) and efficacy (−16.6%) estimands answer different questions.",
      },
      {
        label: "Liver program",
        body: "Strong MRI liver-fat reductions and Phase 2 biopsy MASH signals; LIVERAGE ongoing.",
      },
    ],
    about:
      "Survodutide (BI 456906) is a long-acting glucagon/GLP-1 dual agonist developed by Boehringer Ingelheim (originating from Zealand Pharma). Half-life >100 hours supports once-weekly dosing. Phase 3 SYNCHRONIZE-1 showed −12.2% / −13.0% mean weight change at 76 weeks (3.6 / 6.0 mg, treatment-regimen). GI intolerance and ~24% AE discontinuation are the main limitations.",
    facts: [
      { label: "Type", value: "Peptide", icon: "type" },
      { label: "Phase 3 targets", value: "3.6 or 6.0 mg weekly", icon: "weight" },
      { label: "Escalation", value: "~24 wk, Q4W steps", icon: "clock" },
      { label: "FDA Status", value: "Not approved", icon: "flask" },
    ],
    benefits: [
      "SYNCHRONIZE-1: −12.2% / −13.0% at 76 weeks (treatment-regimen)",
      "Efficacy estimand up to −16.6% among people remaining on treatment",
      "SYNCHRONIZE-MASLD: 84.2% ≥30% liver-fat reduction (efficacy)",
      "Phase 2 MASH: up to 62% histologic improvement without fibrosis worsening",
      "Fast Track / Breakthrough Therapy for MASH F2–F3 — not approval",
    ],
    howItWorks:
      "Survodutide combines GLP-1-driven appetite reduction with glucagon-receptor activity that may increase hepatic fatty-acid oxidation. The intended balance adds metabolic and liver effects without overwhelming GLP-1 glucose control.",
    mechanisms: [
      {
        title: "GLP-1 Receptor",
        tone: "purple",
        points: [
          "Reduced appetite and energy intake",
          "Glucose-dependent insulin effects",
          "Early gastric-emptying slowdown",
        ],
      },
      {
        title: "Glucagon Receptor",
        tone: "green",
        points: [
          "Hepatic fatty-acid oxidation / lipid mobilization",
          "Strong MRI liver-fat signal",
          "Energy expenditure partly inferential",
        ],
      },
      {
        title: "Weekly Exposure",
        tone: "orange",
        points: [
          "C18 acylation / albumin binding",
          "Half-life >100 hours",
          "Supports once-weekly study dosing",
        ],
      },
    ],
    resultBars: [
      "−12–13% @ 76 wk (regimen)",
      "Strong MRI liver-fat effect",
      "~24% AE discontinuation",
    ],
    chartLossPct: 13.0,
    chartLossLbs: 0,
    sideEffects:
      "GI events dominate: nausea, vomiting, diarrhea, and constipation. In SYNCHRONIZE-1, any GI AE occurred in 80.9% (3.6 mg) and 89.7% (6.0 mg) versus 47.9% placebo; AE discontinuation was 23.7% and 24.8% versus 5.4%.",
    dosage:
      "No FDA-approved dosage. Phase 3 SYNCHRONIZE trials titrated to 3.6 or 6.0 mg once weekly over ~24 weeks with four-week steps and flexibility for GI intolerance. Phase 2 obesity studied 0.6–4.8 mg; MASH studied 2.4–6.0 mg. These are research protocols, not approved home dosing.",
    glance: [
      { label: "Class", value: "GCGR / GLP-1 dual", highlight: true },
      { label: "Frequency", value: "Once weekly SC" },
      { label: "Phase 3 targets", value: "3.6 or 6.0 mg" },
      { label: "Weight @ 76 wk", value: "−12.2% / −13.0%" },
      { label: "Liver fat ≥30% ↓", value: "84.2% (efficacy)" },
      { label: "AE discontinue", value: "~24% active arms" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["Survodutide", "Semaglutide", "Tirzepatide", "Retatrutide"],
      highlight: 0,
      rows: [
        {
          feature: "Targets",
          values: [
            "Glucagon + GLP-1",
            "GLP-1 only",
            "GIP + GLP-1",
            "GIP + GLP-1 + glucagon",
          ],
        },
        {
          feature: "Obesity evidence",
          values: [
            "Phase 3 SYNCHRONIZE-1",
            "Approved (Wegovy)",
            "Approved (Zepbound)",
            "Phase 2 / Phase 3",
          ],
        },
        {
          feature: "Liver program",
          values: [
            "Phase 3 MASLD + Phase 2 biopsy MASH",
            "Approved MASH (Wegovy)",
            "Metabolic complications programs",
            "Investigational metabolic programs",
          ],
        },
        {
          feature: "FDA status (Aug 2026)",
          values: [
            "Not approved",
            "Approved",
            "Approved",
            "Not approved",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Phase 3",
        title: "SYNCHRONIZE-1: survodutide for obesity",
        summary:
          "−12.2% / −13.0% vs −5.4% placebo at 76 weeks (treatment-regimen).",
        cite: "NEJM, 2026",
        href: "https://pubmed.ncbi.nlm.nih.gov/42253238/",
      },
      {
        tag: "MASLD",
        title: "SYNCHRONIZE-MASLD: liver fat and weight",
        summary:
          "84.2% ≥30% liver-fat reduction vs 24.3% placebo (efficacy estimand).",
        cite: "Nat Med, 2026",
        href: "https://pubmed.ncbi.nlm.nih.gov/42252333/",
      },
      {
        tag: "MASH",
        title: "Phase 2 biopsy-confirmed MASH and fibrosis",
        summary: "MASH improvement 47% / 62% / 43% vs 14% placebo.",
        cite: "NEJM, 2024",
        href: "https://pubmed.ncbi.nlm.nih.gov/38847460/",
      },
      {
        tag: "Phase 2",
        title: "Obesity dose-finding trial",
        summary: "−6.2% to −14.9% at 46 weeks across 0.6–4.8 mg (planned-treatment).",
        cite: "Lancet D&E, 2024",
        href: "https://pubmed.ncbi.nlm.nih.gov/38330987/",
      },
      {
        tag: "Ongoing",
        title: "LIVERAGE Phase 3 MASH program",
        summary:
          "Confirmatory histology and long-term liver outcomes in F2–F3 and cirrhosis.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT06632444",
      },
    ],
  }),
  "mots-c": makePeptide({
    slug: "mots-c",
    name: "MOTS-c",
    pageTitle:
      "MOTS-c Peptide: Dosage, Human Trials, Results, Side Effects & FDA Status",
    goalSlug: "longevity",
    goalLabel: "Longevity",
    rankBadge: "Mitochondrial Peptide Research",
    summary:
      "Investigational 16-amino-acid mitochondria-encoded peptide. No established human dose; MOTS-MET Phase 2a recruiting; CB4211 analog kept separate; FDA/WADA status.",
    rating: "4.4",
    reviewCount: "610",
    researchedBadge: "Not FDA Approved",
    tags: [
      "Mitochondrial Peptide",
      "AMPK Signaling",
      "Metabolic Research",
      "WADA S4",
    ],
    dosageGuide: MOTSC_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "16 aa",
        body: "Encoded in mtDNA (MT-RNR1/12S rRNA). Sequence MRWQEMGYIFYPRKLR — a signaling microprotein, not an ATP supplement.",
      },
      {
        label: "No human dose",
        body: "MOTS-MET uses a fixed daily SC dose that is not publicly disclosed. Online 5–10 mg protocols are not trial-validated.",
      },
      {
        label: "≠ CB4211",
        body: "The completed human “MOTS-c trial” often cited tested a modified analog — not native MOTS-c.",
      },
    ],
    about:
      "MOTS-c is a mitochondria-derived 16-amino-acid peptide linked to AMPK signaling, metabolic stress responses, and nuclear gene regulation. Extensive cell and animal research exists, plus endogenous human physiology and genetic association studies. No completed controlled trial of administered native MOTS-c has published results; MOTS-MET (NCT07505745) is recruiting.",
    facts: [
      { label: "Type", value: "Mitochondrial peptide", icon: "type" },
      { label: "Human dose", value: "None established", icon: "weight" },
      { label: "Trial status", value: "Phase 2a recruiting", icon: "clock" },
      { label: "FDA Status", value: "Not approved", icon: "flask" },
    ],
    benefits: [
      "Preclinical metabolic and treadmill effects in mice",
      "Endogenous MOTS-c rises after exercise in small human study",
      "K14Q genetic association supports biological relevance",
      "MOTS-MET recruiting — first randomized native-peptide metabolic trial",
      "WADA prohibited at all times as AMPK activator",
    ],
    howItWorks:
      "MOTS-c appears to act as a mitochondrial stress signal influencing one-carbon/purine metabolism, AICAR–AMPK pathways, and nuclear translocation under metabolic stress. Clinical benefits in people remain unproven. No definitive cell-surface receptor–dose–response framework exists.",
    mechanisms: [
      {
        title: "AMPK-Linked Metabolism",
        tone: "purple",
        points: [
          "Folate/purine → AICAR → AMPK axis",
          "Glucose and lipid handling in models",
          "Human administered effect unknown",
        ],
      },
      {
        title: "Nuclear Stress Signaling",
        tone: "green",
        points: [
          "Translocates to nucleus under stress",
          "Interacts with stress-responsive programs",
          "Context-dependent effects (incl. 2026 MSC study)",
        ],
      },
      {
        title: "Identity & Quality Risks",
        tone: "orange",
        points: [
          "Free base vs acetate ambiguity",
          "Aggregation and immunogenicity concerns",
          "Online products ≠ trial material",
        ],
      },
    ],
    resultBars: [
      "No Published Human Efficacy",
      "Strong Preclinical Plausibility",
      "Safety Not Established",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No established adverse-event profile for native MOTS-c. Injection-site reactions reported with CB4211 belong to a modified analog and should not be assigned automatically to MOTS-c. FDA highlighted gaps in human exposure, PK, toxicity, and immunogenicity data.",
    dosage:
      "There is no FDA-approved or clinically established MOTS-c dosage. MOTS-MET uses a fixed once-daily subcutaneous dose that is not publicly disclosed. Online 5–10 mg schedules and animal mg/kg conversions are not validated human protocols. No titration chart or reconstitution calculator is provided.",
    glance: [
      { label: "Identity", value: "16-aa mtDNA peptide", highlight: true },
      { label: "Human dosage", value: "None established" },
      { label: "MOTS-MET", value: "Recruiting; dose undisclosed" },
      { label: "Native AE profile", value: "Unknown" },
      { label: "CB4211", value: "Analog — not interchangeable" },
      { label: "WADA", value: "S4.4.1 — prohibited always" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["MOTS-c", "CB4211", "Elamipretide", "Exercise"],
      highlight: 0,
      rows: [
        {
          feature: "Identity",
          values: [
            "Native 16-aa mt peptide",
            "Modified analog",
            "Cardiolipin-binding tetrapeptide",
            "Multisystem adaptation",
          ],
        },
        {
          feature: "Human intervention evidence",
          values: [
            "Phase 2a recruiting; no results",
            "Small Phase 1a/1b completed",
            "Multiple trials; Barth approval",
            "Extensive human evidence",
          ],
        },
        {
          feature: "Dose",
          values: [
            "Undisclosed fixed daily SC",
            "25 mg SC daily (Phase 1b)",
            "Approved labeled dosing (Barth)",
            "N/A",
          ],
        },
        {
          feature: "Regulatory",
          values: [
            "Not FDA approved; WADA banned",
            "Not approved",
            "Accelerated approval (Barth)",
            "Standard intervention",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Trial",
        title: "MOTS-MET Phase 2a insulin-sensitivity trial",
        summary:
          "NCT07505745: recruiting n=120; fixed daily SC dose undisclosed; no results.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT07505745",
      },
      {
        tag: "Discovery",
        title: "MOTS-c promotes metabolic homeostasis",
        summary:
          "Foundational cell and mouse metabolic characterization (Lee 2015).",
        cite: "Cell Metab, 2015",
        href: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
      },
      {
        tag: "Exercise",
        title: "Exercise-induced endogenous MOTS-c and mouse performance",
        summary:
          "Human endogenous rise after cycling; administered MOTS-c improved mouse treadmill capacity.",
        cite: "Nat Commun, 2021",
        href: "https://pubmed.ncbi.nlm.nih.gov/33473109/",
      },
      {
        tag: "Analog",
        title: "CB4211 Phase 1a/1b",
        summary:
          "Modified analog 25 mg daily; different molecule from native MOTS-c.",
        cite: "NCT03998514",
        href: "https://clinicaltrials.gov/study/NCT03998514",
      },
      {
        tag: "FDA",
        title: "July 2026 MOTS-c bulk substance review",
        summary:
          "Staff against 503A listing; PCAC 7–5 nonbinding recommendation for inclusion.",
        cite: "FDA, 2026",
        href: "https://www.fda.gov/media/193347/download",
      },
    ],
  }),
  "slu-pp-332": makePeptide({
    slug: "slu-pp-332",
    name: "SLU-PP-332",
    pageTitle:
      "SLU-PP-332 Dosage, Results, Side Effects & Exercise-Mimetic Research",
    goalSlug: "lose-weight",
    goalLabel: "Lose Weight",
    rankBadge: "ERR Agonist Research (Not a Peptide)",
    summary:
      "Preclinical small-molecule pan-ERR agonist—not a peptide. Mouse endurance and metabolic results, no human dose or trial, SLU-PP-915 kept separate, safety unknowns emphasized.",
    rating: "4.3",
    reviewCount: "480",
    researchedBadge: "Not FDA Approved",
    tags: [
      "Small Molecule",
      "ERR Agonist",
      "Exercise Mimetic Research",
      "Preclinical Only",
    ],
    dosageGuide: SLUPP332_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Not a peptide",
        body: "Synthetic small molecule C18H14N2O2 (290.3 g/mol). Pan-ERR agonist with highest reported potency at ERRα.",
      },
      {
        label: "No human dose",
        body: "Mouse IP doses of 25–50 mg/kg are research exposures — not human protocols. Lacks oral bioavailability.",
      },
      {
        label: "≠ SLU-PP-915",
        body: "Orally active successor is a chemically distinct analog. Results cannot transfer between compounds.",
      },
    ],
    about:
      "SLU-PP-332 is a laboratory pan-ERR agonist used to probe mitochondrial and aerobic-exercise transcriptional programs. Mouse studies reported greater treadmill endurance, oxidative muscle remodeling, and reduced fat accumulation in obesity models. There is no registered human trial, no established human dosage, and no human safety dataset.",
    facts: [
      { label: "Type", value: "Small molecule", icon: "type" },
      { label: "Human dose", value: "None established", icon: "weight" },
      { label: "Mouse IP doses", value: "25–50 mg/kg", icon: "clock" },
      { label: "FDA Status", value: "Not approved", icon: "flask" },
    ],
    benefits: [
      "Acute mouse treadmill: ~70% longer time, ~45% farther distance",
      "Oxidative type IIa fiber / mitochondrial remodeling in mice",
      "DIO mice: ~12% weight loss highlighted; fat gain ~1/10 of controls",
      "Glucose improved in impaired models — not healthy chow-fed mice",
      "No human trial; lacks oral bioavailability (vs SLU-PP-915)",
    ],
    howItWorks:
      "SLU-PP-332 activates ERRα/β/γ nuclear receptors that partner with PGC-1 coactivators to drive mitochondrial biogenesis, OXPHOS, and fatty-acid oxidation programs. Skeletal-muscle endurance was ERRα-dependent; heart-failure cardioprotection implicated ERRγ.",
    mechanisms: [
      {
        title: "ERRα (muscle)",
        tone: "purple",
        points: [
          "Strongest reported reporter-assay potency",
          "Required for acute endurance benefit",
          "Ddit4 / Pdk4 / oxidative fibers",
        ],
      },
      {
        title: "ERRγ (heart)",
        tone: "green",
        points: [
          "Principal cardiac mediator in TAC studies",
          "Fatty-acid / mitochondrial programs",
          "EF ↑, fibrosis ↓; hypertrophy not prevented",
        ],
      },
      {
        title: "Oral / product limits",
        tone: "orange",
        points: [
          "Parent lacks oral bioavailability",
          "Mouse IP ≠ human SC/oral",
          "Online products ≠ clinical-grade drug",
        ],
      },
    ],
    resultBars: [
      "Mouse Endurance Signal",
      "No Human Efficacy Data",
      "Safety Unknown",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Human side-effect rates are unknown — no human trial arms exist. Mouse efficacy studies reported limited tolerability observations and are not a formal toxicology package. “No overt toxicity” is not proof of safety.",
    dosage:
      "There is no established human dosage. Published mouse experiments used IP doses such as 30 mg/kg once (exposure sampling), 50 mg/kg once or twice daily (muscle/metabolic), and 25 mg/kg regimens (heart/kidney). These must not be converted into human oral or subcutaneous protocols. No titration chart or reconstitution calculator is provided.",
    glance: [
      { label: "Class", value: "Small-molecule ERR agonist", highlight: true },
      { label: "Not a peptide", value: "C18H14N2O2" },
      { label: "Human dosage", value: "None established" },
      { label: "Oral bioavailability", value: "Lacking (reported)" },
      { label: "Acute mouse endurance", value: "~+70% time" },
      { label: "Human trials", value: "None identified" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["SLU-PP-332", "SLU-PP-915", "Cardarine", "Exercise"],
      highlight: 0,
      rows: [
        {
          feature: "Class",
          values: [
            "Pan-ERR agonist",
            "Distinct pan-ERR analog",
            "PPARδ agonist",
            "Multi-system intervention",
          ],
        },
        {
          feature: "Oral evidence",
          values: [
            "Lacks oral bioavailability",
            "Orally active in mice",
            "Yes in development studies",
            "N/A",
          ],
        },
        {
          feature: "Human evidence",
          values: [
            "None",
            "No clinical efficacy identified",
            "Limited early work; not approved",
            "Extensive outcomes evidence",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "Preclinical IP mouse only",
            "Not interchangeable with 332",
            "Different receptor / risk history",
            "Cannot be reduced to one receptor",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Endurance",
        title: "Synthetic ERRα/β/γ agonist enhances exercise capacity",
        summary:
          "~70% longer / ~45% farther treadmill running after acute 50 mg/kg IP in mice.",
        cite: "ACS Chem Biol, 2023",
        href: "https://pubmed.ncbi.nlm.nih.gov/36988910/",
      },
      {
        tag: "Metabolism",
        title: "ERR agonist alleviates metabolic syndrome in mice",
        summary:
          "↑ EE/FAO; reduced fat accumulation; glucose improved only in impaired models.",
        cite: "JPET, 2024",
        href: "https://pubmed.ncbi.nlm.nih.gov/37739806/",
      },
      {
        tag: "Heart",
        title: "Pan-ERR agonists in pressure-overload heart failure",
        summary:
          "Improved EF, fibrosis, and survival in TAC mice; ERRγ-dominant cardiac effect.",
        cite: "Circulation, 2024",
        href: "https://pubmed.ncbi.nlm.nih.gov/37961903/",
      },
      {
        tag: "Analog",
        title: "Orally active SLU-PP-915",
        summary:
          "Chemically distinct analog; paper states SLU-PP-332 lacks oral bioavailability.",
        cite: "JPET, 2026",
        href: "https://pubmed.ncbi.nlm.nih.gov/41421047/",
      },
      {
        tag: "Anti-doping",
        title: "In-vitro metabolism of SLU-PP-332 and SLU-PP-915",
        summary:
          "Nine putative metabolites in human liver microsomes — analytical targets, not human PK.",
        cite: "RCMS, 2026",
        href: "https://pubmed.ncbi.nlm.nih.gov/41588687/",
      },
    ],
  }),
  tesamorelin: makePeptide({
    slug: "tesamorelin",
    name: "Tesamorelin",
    pageTitle:
      "Tesamorelin Dosage, Results & Side Effects: Complete Egrifta WR and Egrifta SV Guide",
    goalSlug: "lose-weight",
    goalLabel: "Lose Weight",
    rankBadge: "#3 Performance Focus",
    summary:
      "FDA-approved GHRH analog sold as Egrifta WR and Egrifta SV for excess visceral abdominal fat in adults with HIV-associated lipodystrophy. Complete formulation-specific dosing, phase 3 VAT results, and safety guide.",
    rating: "4.6",
    reviewCount: "640",
    researchedBadge: "FDA Approved",
    tags: [
      "Body Composition",
      "Visceral Fat",
      "Egrifta WR / SV",
      "GHRH",
      "HIV Lipodystrophy",
    ],
    dosageGuide: TESAMORELIN_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "GHRH",
        body: "Stimulates pituitary release of endogenous growth hormone in a pulsatile manner.",
      },
      {
        label: "IGF-1",
        body: "Downstream hormone raised by GH signaling; requires regular monitoring during treatment.",
      },
      {
        label: "Daily SC",
        body: "Once-daily abdominal subcutaneous injection — Egrifta WR 1.28 mg or Egrifta SV 1.4 mg.",
      },
    ],
    about:
      "Tesamorelin is a synthetic 44-amino-acid GHRH analog approved as Egrifta WR and Egrifta SV to reduce excess visceral abdominal fat in adults with HIV-associated lipodystrophy. It is generally weight neutral and selectively reduces deep abdominal visceral fat rather than total body weight.",
    facts: [
      { label: "Type", value: "Peptide", icon: "type" },
      { label: "Egrifta WR", value: "1.28 mg daily", icon: "weight" },
      { label: "Egrifta SV", value: "1.4 mg daily", icon: "clock" },
      { label: "FDA Status", value: "Approved", icon: "flask" },
    ],
    benefits: [
      "FDA-approved for HIV-associated excess visceral abdominal fat",
      "Phase 3: ≈15% VAT reduction at 26 weeks; ≈18% at 52 weeks",
      "Selective for visceral fat — subcutaneous fat largely preserved",
      "Two current formulations: Egrifta WR (weekly mix) and Egrifta SV (daily mix)",
      "Generally weight neutral — not a weight-loss medication",
    ],
    howItWorks:
      "Tesamorelin activates GHRH receptors on pituitary somatotroph cells, triggering endogenous growth hormone pulses and downstream IGF-1 production. This promotes hormone-sensitive lipolysis with preferential reduction of visceral adipose tissue in the approved HIV-lipodystrophy population.",
    mechanisms: [
      {
        title: "GHRH Receptor Agonist",
        tone: "purple",
        points: [
          "Activates pituitary somatotroph signaling",
          "Stimulates endogenous GH — not direct GH replacement",
          "Preserves physiologic pulsatility and feedback",
        ],
      },
      {
        title: "IGF-1 Axis",
        tone: "green",
        points: [
          "Raises circulating IGF-1 by design",
          "Requires regular monitoring during therapy",
          "Persistent elevation above 3 SDS warrants review",
        ],
      },
      {
        title: "Visceral Fat Selectivity",
        tone: "orange",
        points: [
          "Preferential VAT reduction in phase 3 trials",
          "Subcutaneous abdominal fat largely preserved",
          "Total body weight approximately neutral",
        ],
      },
    ],
    resultBars: [
      "Selective VAT Reduction",
      "Weight-Neutral Profile",
      "Body Composition Shift",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "The most common adverse reactions in pooled phase 3 trials were injection-site reactions (17% vs 6% placebo), arthralgia (16% vs 11%), pain in extremity (6% vs 5%), myalgia (6% vs 2%), and peripheral edema (6% vs 2%). Clinically important risks include elevated IGF-1, glucose intolerance or diabetes, fluid retention, and malignancy precautions.",
    dosage:
      "Egrifta WR is 1.28 mg (0.16 mL) once daily after mixing an 11.6 mg vial with 1.3 mL bacteriostatic water — seven doses per vial, discard after 7 days. Egrifta SV is 1.4 mg (0.35 mL) once daily after mixing a 2 mg vial with 0.5 mL sterile water — use immediately. No dose-escalation schedule is used. The formulations are not substitutable.",
    glance: [
      { label: "Egrifta WR dose", value: "1.28 mg daily", highlight: true },
      { label: "Egrifta SV dose", value: "1.4 mg daily" },
      { label: "Route", value: "Subcutaneous abdomen" },
      { label: "VAT @ 26 wks", value: "≈−15%" },
      { label: "VAT @ 52 wks", value: "≈−18%" },
      { label: "Body weight", value: "Generally neutral" },
      { label: "FDA Status", value: "Approved (HIV lipodystrophy)" },
    ],
    compare: {
      columns: ["Tesamorelin", "Sermorelin", "Semaglutide", "Somatropin"],
      highlight: 0,
      rows: [
        {
          feature: "Mechanism",
          values: [
            "GHRH receptor agonist",
            "Shorter GHRH fragment",
            "GLP-1 receptor agonist",
            "Recombinant GH",
          ],
        },
        {
          feature: "Approved role",
          values: [
            "HIV visceral abdominal fat",
            "No FDA-approved body-composition product",
            "Diabetes / weight management",
            "GH deficiency indications",
          ],
        },
        {
          feature: "Weight effect",
          values: [
            "Generally neutral",
            "Insufficient VAT evidence",
            "Substantial weight loss",
            "Variable by indication",
          ],
        },
        {
          feature: "Evidence level",
          values: [
            "Phase 3 FDA-approved",
            "Off-label / compounded",
            "Multiple phase 3 programs",
            "Established GH-deficiency label",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Phase 3",
        title:
          "Metabolic Effects of a Growth Hormone–Releasing Factor in Patients with HIV",
        summary:
          "Pivotal 26-week trial: ≈15% VAT reduction with selective subcutaneous fat preservation.",
        cite: "NEJM, 2007",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa072375",
      },
      {
        tag: "Phase 3",
        title:
          "Effects of tesamorelin in HIV-infected patients with excess abdominal fat",
        summary:
          "Pooled analysis: ≈15% VAT at 26 weeks and ≈18% at 52 weeks; regain after withdrawal.",
        cite: "JCEM, 2010",
        href: "https://pubmed.ncbi.nlm.nih.gov/20554713/",
      },
      {
        tag: "Phase 3",
        title:
          "Effect of Tesamorelin on Visceral Fat and Liver Fat in HIV-Infected Patients",
        summary:
          "JAMA 6-month trial: VAT −42 cm² treatment difference; liver fat −2.9 percentage points.",
        cite: "JAMA, 2014",
        href: "https://jamanetwork.com/journals/jama/fullarticle/1889139",
      },
      {
        tag: "Phase 3",
        title: "Effects of tesamorelin on NAFLD in HIV",
        summary:
          "Lancet HIV 12-month trial: ≈37% relative hepatic fat reduction; less fibrosis progression.",
        cite: "Lancet HIV, 2019",
        href: "https://pubmed.ncbi.nlm.nih.gov/31611038/",
      },
      {
        tag: "Phase 2",
        title:
          "GHRH on Cognitive Function in Adults With Mild Cognitive Impairment",
        summary:
          "20-week trial: favorable executive-function signal; not an approved cognitive therapy.",
        cite: "Arch Neurol, 2012",
        href: "https://pubmed.ncbi.nlm.nih.gov/22869065/",
      },
    ],
  }),
  "aod-9604": makePeptide({
    slug: "aod-9604",
    name: "AOD-9604",
    pageTitle:
      "AOD-9604 Dosage, Results, Side Effects & FDA Status: Complete Human-Trial Guide",
    goalSlug: "lose-weight",
    goalLabel: "Lose Weight",
    rankBadge: "Investigational Fragment",
    summary:
      "Investigational hGH C-terminal fragment (Tyr-hGH 177–191 / LAT8881). Not FDA approved. Oral obesity trials studied 0.25–30 mg; the larger OPTIONS confirmatory trial failed its primary endpoint.",
    rating: "4.1",
    reviewCount: "520",
    researchedBadge: "Not FDA Approved",
    tags: [
      "Weight Loss Research",
      "hGH Fragment",
      "Oral Trial Data",
      "Investigational",
    ],
    dosageGuide: AOD9604_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "16 aa",
        body: "Modified hGH 177–191 fragment with an added N-terminal tyrosine (YLRIVQCRSVEGSCGF).",
      },
      {
        label: "Oral trials",
        body: "Pivotal obesity research used once-daily oral capsules/tablets — not subcutaneous injections.",
      },
      {
        label: "OPTIONS failed",
        body: "The larger 24-week confirmatory trial did not meet its primary weight-loss endpoint.",
      },
    ],
    about:
      "AOD-9604 is an investigational 16-amino-acid peptide designed to isolate proposed fat-metabolism effects from the C-terminal region of human growth hormone without activating the full GH/IGF-1 growth pathway. Human obesity development produced an early oral 1 mg signal that was not confirmed by the larger OPTIONS trial; obesity development was discontinued in 2007.",
    facts: [
      { label: "Type", value: "Peptide fragment", icon: "type" },
      { label: "Approved dose", value: "None", icon: "weight" },
      { label: "Oral range studied", value: "0.25–54 mg", icon: "clock" },
      { label: "FDA Status", value: "Not approved", icon: "flask" },
    ],
    benefits: [
      "Preclinical models showed increased fat oxidation and reduced fat accumulation",
      "Early oral 1 mg/day signal: −2.6 kg vs −0.8 kg placebo at 12 weeks",
      "Did not meaningfully raise IGF-1 in studied oral trials",
      "Larger OPTIONS confirmatory trial failed — not an evidence-based obesity treatment",
      "Not FDA approved; no validated injectable regimen",
    ],
    howItWorks:
      "AOD-9604 was designed to increase lipolysis and fat oxidation and reduce lipogenesis without classic GH-receptor activation. Animal and ex-vivo evidence support biological activity, but the larger human confirmatory obesity trial failed its primary endpoint.",
    mechanisms: [
      {
        title: "Proposed Lipolysis",
        tone: "purple",
        points: [
          "Increased breakdown of stored triglyceride in models",
          "Ex-vivo human adipose tissue signals reported",
          "Clinical relevance for weight loss remains uncertain",
        ],
      },
      {
        title: "Anti-Lipogenesis",
        tone: "green",
        points: [
          "Reduced lipid incorporation/storage in animals",
          "Increased fat oxidation in obese mice",
          "β3-adrenergic involvement suggested in knockout models",
        ],
      },
      {
        title: "GH Axis Distinction",
        tone: "orange",
        points: [
          "Lacks full hGH receptor dimerization structure",
          "No meaningful IGF-1 rise in oral human trials",
          "Not interchangeable with full-length somatropin",
        ],
      },
    ],
    resultBars: [
      "Early Oral Signal (Unconfirmed)",
      "OPTIONS Primary Endpoint Failed",
      "No Approved Dose",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Reported events included headache, diarrhea, flatulence, nausea, and abdominal symptoms. The clearest dose-related pattern was at oral 54 mg over 7 days. Oral anti-drug antibodies were not detected in tested subsets, but that does not settle repeated-injection immunogenicity. FDA raises compounding concerns for proposed injectable routes.",
    dosage:
      "There is no approved or established AOD-9604 dosage. Obesity trials used fixed once-daily oral doses (0.25–30 mg in efficacy arms; up to 54 mg in short safety studies). Early IV studies used single weight-based doses. Popular 300 mcg subcutaneous protocols are not validated by the pivotal oral program.",
    glance: [
      { label: "Approved dose", value: "None", highlight: true },
      { label: "Early 1 mg signal", value: "−2.6 kg @ 12 wks" },
      { label: "OPTIONS result", value: "Primary endpoint failed" },
      { label: "Route studied", value: "Primarily oral" },
      { label: "SC evidence", value: "Absent for chronic use" },
      { label: "IGF-1 in trials", value: "No significant rise" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["AOD-9604", "Semaglutide", "Tesamorelin", "Somatropin"],
      highlight: 0,
      rows: [
        {
          feature: "Mechanism",
          values: [
            "hGH C-terminal fragment",
            "GLP-1 receptor agonist",
            "GHRH analog",
            "Full-length recombinant GH",
          ],
        },
        {
          feature: "Best-supported use",
          values: [
            "None established",
            "Weight management / diabetes products",
            "HIV visceral fat (approved)",
            "GH-deficiency indications",
          ],
        },
        {
          feature: "Obesity evidence",
          values: [
            "Phase IIb; confirmatory trial failed",
            "Large Phase III programs",
            "Not an obesity drug",
            "Not a general obesity drug",
          ],
        },
        {
          feature: "Regulatory status",
          values: [
            "Not FDA approved",
            "FDA approved (product-specific)",
            "FDA approved (narrow indication)",
            "FDA approved (specific indications)",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Safety",
        title: "Safety and Tolerability of the Hexadecapeptide AOD9604 in Humans",
        summary:
          "Pooled oral/IV human safety program; short-term oral formulations generally well tolerated.",
        cite: "J Endocrinol Metab, 2013",
        href: "https://www.jofem.org/index.php/jofem/article/view/157/194",
      },
      {
        tag: "Phase IIb",
        title: "Obesity pharmacotherapy review citing METAOD005 1 mg signal",
        summary:
          "Often-cited −2.6 kg vs −0.8 kg placebo at 12 weeks with oral 1 mg/day.",
        cite: "Metabolism, 2013",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3584306/",
      },
      {
        tag: "Phase IIb",
        title: "OPTIONS confirmatory obesity trial announcement",
        summary:
          "Larger 24-week oral study; primary weight-loss endpoint not met; obesity program stopped.",
        cite: "Sponsor announcement, 2006–2007",
        href: "https://www.biospace.com/metabolic-pharmaceuticals-s-obesity-trial-update-first-100-subjects-complete-the-phase-2b-trial-of-aod9604",
      },
      {
        tag: "FDA",
        title:
          "Bulk drug substances for compounding that may present significant safety risks",
        summary:
          "FDA flags immunogenicity, impurities, and insufficient route-specific safety data for compounded AOD-9604.",
        cite: "FDA",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
      {
        tag: "Phase IIa",
        title: "Oral LAT8881 in neuropathic pain (NCT03865953)",
        summary:
          "Separate pain program at 25 mg oral; does not validate obesity or injectable use.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT03865953",
      },
    ],
  }),
  "5-amino-1mq": makePeptide({
    slug: "5-amino-1mq",
    name: "5-Amino-1MQ",
    pageTitle:
      "5-Amino-1MQ Dosage, Results & Safety: Complete NNMT Inhibitor Research Guide",
    goalSlug: "lose-weight",
    goalLabel: "Lose Weight",
    rankBadge: "NNMT Inhibitor Research",
    summary:
      "Experimental small-molecule NNMT inhibitor—not a peptide and not FDA approved. No established human dosage. Preclinical mouse obesity and muscle signals; oral bioavailability shown in rats, unknown in humans.",
    rating: "4.4",
    reviewCount: "410",
    researchedBadge: "Preclinical",
    tags: [
      "NNMT Inhibitor",
      "Small Molecule",
      "Metabolic Research",
      "Not a Peptide",
    ],
    dosageGuide: AMINO1MQ_DOSAGE_GUIDE,
    heroImage: "/peptides/5-amino-1mq-how-it-works-v3.jpg",
    heroImageWidth: 1024,
    heroImageHeight: 682,
    moleculeCardImage: "/peptides/5-amino-1mq-molecule-card.jpg",
    moleculeCardImageWidth: 1024,
    moleculeCardImageHeight: 640,
    reviews: [],
    moleculeCallouts: [
      {
        label: "Not a peptide",
        body: "Quinolinium small molecule (C10H11N2+). Commonly marketed alongside peptides but chemically distinct.",
      },
      {
        label: "NNMT",
        body: "Inhibits nicotinamide N-methyltransferase, altering NAD+ salvage and SAM-dependent metabolism in models.",
      },
      {
        label: "No human dose",
        body: "Commercial 50–150 mg/day oral protocols are anecdotal — not clinical-trial regimens.",
      },
    ],
    about:
      "5-Amino-1MQ (5-amino-1-methylquinolinium) is an experimental NNMT inhibitor studied in cells, rats, and mice. It is not a peptide, not FDA approved, and has no established human dosage. Mouse studies reported weight and fat reductions without appetite suppression; human efficacy and safety remain unknown.",
    facts: [
      { label: "Type", value: "Small molecule", icon: "type" },
      { label: "Target", value: "NNMT enzyme", icon: "flask" },
      { label: "Human dose", value: "None established", icon: "weight" },
      { label: "Evidence", value: "Preclinical", icon: "clock" },
    ],
    benefits: [
      "Selective NNMT inhibition supported in biochemical assays",
      "Obese mice: weight and fat mass ↓ without reduced food intake",
      "Rat oral bioavailability ≈ 38.4% (human oral PK unknown)",
      "Aged-mouse muscle-function and regeneration signals",
      "Not FDA approved — no published controlled human efficacy trial",
    ],
    howItWorks:
      "NNMT methylates nicotinamide using SAM. 5-Amino-1MQ blocks that enzyme in laboratory models, reducing diversion of nicotinamide from NAD+ salvage and altering methyl-donor balance. Downstream metabolic effects are preclinical and tissue-dependent — not proven human outcomes.",
    mechanisms: [
      {
        title: "NNMT Inhibition",
        tone: "purple",
        points: [
          "Competitive inhibition at nicotinamide-binding region",
          "IC50 commonly summarized around 1.2 µM in assays",
          "IC50 is not a human dose",
        ],
      },
      {
        title: "NAD+ / SAM Axis",
        tone: "green",
        points: [
          "May leave more nicotinamide for NAD+ salvage",
          "Less SAM consumed by NNMT in models",
          "Effects are tissue- and context-dependent",
        ],
      },
      {
        title: "Adipose & Muscle Models",
        tone: "orange",
        points: [
          "Reduced lipogenic activity in experimental systems",
          "Fat-mass reduction in obese mice",
          "Aged-mouse muscle function signals with exercise",
        ],
      },
    ],
    resultBars: [
      "Mouse Fat-Mass Signal",
      "No Human Efficacy Trial",
      "Human Safety Unknown",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Human side effects and their frequencies are unknown. Online lists of headache, nausea, fatigue, or insomnia are anecdotal. Animal efficacy studies did not establish a formal human safety profile. FDA has challenged 503B compounding with 5-Amino-1MQ.",
    dosage:
      "There is no established human dosage. Published animal exposures include mouse subcutaneous regimens (e.g., 10–32 mg/kg/day or 20 mg/kg three times daily) and rat oral/IV PK doses. Marketed 50–150 mg/day oral “cycles” are commercial protocols, not validated human trial arms.",
    glance: [
      { label: "Compound class", value: "Small molecule", highlight: true },
      { label: "Primary target", value: "NNMT" },
      { label: "Human dosage", value: "None established" },
      { label: "Human trials", value: "None identified" },
      { label: "Mouse obesity note", value: "~5% wt / 11 days" },
      { label: "Rat oral F", value: "≈38.4%" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["5-Amino-1MQ", "NR / NMN", "Semaglutide", "Tirzepatide"],
      highlight: 0,
      rows: [
        {
          feature: "Type",
          values: [
            "Small-molecule NNMT inhibitor",
            "NAD+ precursors",
            "Peptide GLP-1 agonist",
            "Peptide GIP/GLP-1 agonist",
          ],
        },
        {
          feature: "Human evidence",
          values: [
            "None identified for efficacy",
            "Human PK / early clinical studies",
            "Extensive phase 3 programs",
            "Extensive phase 3 programs",
          ],
        },
        {
          feature: "Regulatory status",
          values: [
            "Not FDA approved",
            "Supplement / variable",
            "FDA approved (product-specific)",
            "FDA approved (product-specific)",
          ],
        },
        {
          feature: "Weight-loss claim",
          values: [
            "Mice only; unproven in humans",
            "Not primarily weight-loss drugs",
            "Proven in labeled populations",
            "Proven in labeled populations",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Preclinical",
        title:
          "Selective NNMT inhibitors reverse high-fat-diet-induced obesity in mice",
        summary:
          "Foundational 11-day DIO mouse study: weight, WAT, adipocyte size, and cholesterol ↓ without reduced food intake.",
        cite: "Biochem Pharmacol, 2018",
        href: "https://pubmed.ncbi.nlm.nih.gov/29155147/",
      },
      {
        tag: "PK",
        title: "Rat LC-MS/MS assay and oral pharmacokinetics",
        summary:
          "Oral bioavailability ≈ 38.4%; oral t½ ≈ 6.9 h under rat study conditions.",
        cite: "J Pharm Biomed Anal, 2021",
        href: "https://pubmed.ncbi.nlm.nih.gov/34304009/",
      },
      {
        tag: "Preclinical",
        title: "Diet switch + NNMT inhibition and microbiome in DIO mice",
        summary:
          "32 mg/kg SC with lower-fat diet reduced weight/fat beyond diet switch alone.",
        cite: "Sci Rep, 2022",
        href: "https://www.nature.com/articles/s41598-021-03670-5",
      },
      {
        tag: "Preclinical",
        title: "NNMT inhibition mitigates obesity-related metabolic dysfunction",
        summary:
          "2024 dose-response (10 or 32 mg/kg/day SC × 28 days): body composition and liver measures improved in mice.",
        cite: "Diabetes Obes Metab, 2024",
        href: "https://pubmed.ncbi.nlm.nih.gov/39161060/",
      },
      {
        tag: "Preclinical",
        title:
          "NNMT inhibition mimics and boosts exercise-mediated muscle improvements",
        summary:
          "Aged mice: 10 mg/kg/day SC × 8 weeks; additive grip-strength effects with exercise.",
        cite: "Sci Rep, 2024",
        href: "https://www.nature.com/articles/s41598-024-66034-9",
      },
      {
        tag: "FDA",
        title: "Warning letter on 5-Amino-1MQ compounding",
        summary:
          "January 2026: not eligible for 503B exemptions — not on bulks list or shortage list.",
        cite: "FDA, 2026",
        href: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/genogenix-llc-718739-01202026",
      },
    ],
  }),
  "cjc-1295-dac": makePeptide({
    slug: "cjc-1295-dac",
    name: "CJC-1295 DAC",
    pageTitle: "CJC-1295 DAC Dosage: Human Trials vs Research Protocols",
    goalSlug: "build-muscle",
    goalLabel: "Build Muscle",
    rankBadge: "Long-Acting GHRH Analog",
    summary:
      "See the CJC-1295 DAC doses used in human studies, how they compare with reported weekly protocols, and why CJC-1295 without DAC is different. No FDA-approved dosage.",
    rating: "4.6",
    reviewCount: "892",
    researchedBadge: "Not FDA Approved",
    tags: [
      "DAC / Albumin-Binding",
      "Weekly SC Research",
      "Not FDA Approved",
      "≠ No DAC",
    ],
    dosageGuide: CJC1295_DAC_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "≠ No DAC",
        body: "Daily 100–300 mcg schedules usually describe Modified GRF 1-29 — not this long-acting DAC molecule.",
      },
      {
        label: "Half-life",
        body: "Estimated ~5.4–9.2 days; repeat dosing accumulates (Cmax up 29–70% by day 14).",
      },
      {
        label: "Online ≠ trial",
        body: "0.5–2 mg/week fixed protocols are anecdotal; formal studies used 20–250 mcg/kg SC.",
      },
    ],
    about:
      "CJC-1295 DAC is a long-acting GHRH analog designed to bind albumin via a Drug Affinity Complex. Human studies used weight-based subcutaneous dosing and showed prolonged GH/IGF-1 elevation with accumulation on repeat dosing. It has no FDA-approved dosage. Fixed weekly milligram protocols online are not validated substitutes for trial exposures, and must not be confused with short-acting “CJC-1295 no DAC” (Modified GRF 1-29).",
    facts: [
      { label: "Type", value: "GHRH analog + DAC", icon: "type" },
      { label: "Half-life", value: "~5.4–9.2 days", icon: "flask" },
      { label: "Human dose", value: "No approved dose", icon: "weight" },
      { label: "FDA Status", value: "Not approved", icon: "clock" },
    ],
    benefits: [
      "Published SC single-dose range 30–250 mcg/kg",
      "Repeat-dose research 20–60 mcg/kg weekly or every 14 days",
      "Dose-dependent GH/IGF-1 elevation with accumulation",
      "Online 0.5–2 mg/week range is anecdotal — not clinically established",
      "Phase 2 HIV visceral-obesity program terminated; results unpublished",
    ],
    howItWorks:
      "The DAC modification enables covalent albumin binding, producing multi-day exposure and sustained GH/IGF-1 stimulation after subcutaneous injection. Formal human schedules were weekly or every 14 days—not daily microdosing. Hormonal response is demonstrated; body-composition and healthy-aging outcomes were not established in published trials.",
    mechanisms: [
      {
        title: "Albumin-binding DAC",
        tone: "purple",
        points: [
          "Maleimide conjugates to albumin Cys-34",
          "Measurable exposure ~10–13 days",
          "Not interchangeable with Mod GRF 1-29",
        ],
      },
      {
        title: "Clinical dosing pattern",
        tone: "green",
        points: [
          "Weight-based mcg/kg subcutaneous",
          "Single, weekly, or every-14-day research",
          "Accumulation after 2–3 injections",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No approved treatment dose",
          "0.5–2 mg/week unvalidated",
          "Phase 2 terminated / unpublished",
        ],
      },
    ],
    resultBars: [
      "No FDA-Approved Dose",
      "PK/PD Dose Response Shown",
      "Fixed Weekly mg Unvalidated",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "In the main single-dose study, AEs were far more common on active drug than placebo. Injection-site reactions (~70%), headache (63% vs 14%), diarrhea, flushing/hypotension, and dose-related heart-rate increases were notable—especially at 125–250 mcg/kg. Long-term safety is unresolved; Phase 2 ended after a fatal MI with unpublished results.",
    dosage:
      "There is no FDA-approved dosage. Published human research used 30–250 mcg/kg SC single doses and 20–60 mcg/kg weekly or every 14 days for 2–3 injections. A terminated Phase 2 study reportedly escalated once-weekly dosing to 120–240 mcg/kg. Online 0.5–2 mg/week fixed protocols are anecdotal conventions.",
    glance: [
      { label: "FDA-approved dose", value: "None", highlight: true },
      { label: "Single-dose research", value: "30–250 mcg/kg SC" },
      { label: "Repeat-dose research", value: "20–60 mcg/kg weekly/q14d" },
      { label: "Online weekly range", value: "0.5–2 mg (anecdotal)" },
      { label: "Half-life", value: "~5.4–9.2 days" },
      { label: "≠ No DAC", value: "Different molecule/schedule" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["CJC-1295 DAC", "No DAC / Mod GRF", "Online fixed"],
      highlight: 0,
      rows: [
        {
          feature: "Half-life",
          values: ["~5.4–9.2 days", "Hours (short-acting)", "Assumes DAC"],
        },
        {
          feature: "Typical discussed schedule",
          values: [
            "Weekly or every 14 days (research)",
            "100–300 mcg 1–3× daily",
            "0.5–2 mg/week fixed",
          ],
        },
        {
          feature: "Dose basis in evidence",
          values: [
            "Weight-based mcg/kg",
            "Anecdotal fixed mcg",
            "Anecdotal fixed mg",
          ],
        },
        {
          feature: "Key risk if confused",
          values: [
            "Accumulation on repeat dosing",
            "Wrong molecule for weekly mg",
            "Below many trial exposures; unvalidated",
          ],
        },
      ],
    },
    research: [
      {
        tag: "PK/PD",
        title: "Prolonged stimulation of GH and IGF-1 by CJC-1295",
        summary:
          "Single 30–250 mcg/kg and repeat 20–60 mcg/kg SC; long half-life and accumulation.",
        cite: "JCEM, 2006",
        href: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
      },
      {
        tag: "Pulsatility",
        title: "Pulsatile GH during continuous CJC-1295 stimulation",
        summary:
          "60 or 90 mcg/kg; higher interpulse baseline; similar 60 vs 90 response.",
        cite: "JCEM, 2006",
        href: "https://pubmed.ncbi.nlm.nih.gov/17018654/",
      },
      {
        tag: "Trial",
        title: "NCT00267527 Phase 2 HIV visceral obesity",
        summary:
          "Weekly escalation to 120–240 mcg/kg; terminated; results unpublished.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT00267527",
      },
      {
        tag: "FDA",
        title: "CJC-1295-related bulk substances scientific review",
        summary:
          "Identity confusion across related substances; PCAC voted against 503A listing for DAC forms.",
        cite: "FDA, Dec 2024",
        href: "https://www.fda.gov/media/183819/download",
      },
      {
        tag: "Preclinical",
        title: "Long-lasting GRF analog identification",
        summary: "Albumin conjugation and prolonged GH response in animals.",
        cite: "Endocrinology, 2005",
        href: "https://pubmed.ncbi.nlm.nih.gov/15817669/",
      },
    ],
  }),
  "cjc-1295-no-dac": makePeptide({
    slug: "cjc-1295-no-dac",
    name: "CJC-1295 (No DAC)",
    pageTitle:
      "CJC-1295 No DAC Dosage: Modified GRF 1-29 Research Evidence",
    goalSlug: "build-muscle",
    goalLabel: "Build Muscle",
    rankBadge: "Modified GRF 1-29",
    summary:
      "See the commonly reported CJC-1295 No DAC doses, how Modified GRF 1-29 differs from CJC-1295 DAC, and what human research actually supports. No FDA-approved or exact-molecule clinical dose.",
    rating: "4.5",
    reviewCount: "640",
    researchedBadge: "Not FDA Approved",
    tags: [
      "Modified GRF 1-29",
      "No Exact-Molecule Trial",
      "Not FDA Approved",
      "≠ DAC",
    ],
    dosageGuide: CJC1295_NODAC_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "≠ DAC",
        body: "DAC human trial mcg/kg weekly schedules do not transfer. Daily 100–300 mcg conventions describe this short-acting form.",
      },
      {
        label: "No clinical dose",
        body: "FDA found no peer-reviewed clinical safety/effectiveness data for free base or acetate.",
      },
      {
        label: "Online convention",
        body: "≈100–300 mcg SC 1–3× daily is widely repeated—anecdotal, not dose-finding research.",
      },
    ],
    about:
      "CJC-1295 No DAC usually means Modified GRF 1-29—a tetrasubstituted 29-amino-acid GHRH analog without the albumin-binding DAC extension. It has no FDA-approved dosage and no published exact-molecule human dose-finding trial identified by FDA. Familiar CJC-1295 clinical papers concern the long-acting DAC moiety. Online 100–300 mcg daily protocols are community conventions, not validated clinical regimens.",
    facts: [
      { label: "Type", value: "Mod GRF 1-29", icon: "type" },
      { label: "Also called", value: "CJC-1295 free base/acetate", icon: "flask" },
      { label: "Human dose", value: "None established", icon: "weight" },
      { label: "FDA Status", value: "Not approved", icon: "clock" },
    ],
    benefits: [
      "Exact-molecule human trial dose: none identified",
      "Related one-sub GHRH analogs show pathway activity (indirect only)",
      "Online range ≈100–300 mcg SC, 1–3× daily (anecdotal)",
      "“30-min half-life” and “100 mcg saturation” not directly demonstrated",
      "WADA prohibits GHRH analogs including CJC-1295",
    ],
    howItWorks:
      "Modified GRF 1-29 is intended to stimulate the GHRH receptor as a short-acting analog relative to CJC-1295 DAC. Four amino-acid substitutions vs sermorelin are meant to improve enzymatic resistance. Exact human SC pharmacokinetics for free base/acetate were not identified by FDA; daily/multi-daily online schedules assume short action but remain unvalidated.",
    mechanisms: [
      {
        title: "Tetrasubstituted GRF(1-29)",
        tone: "purple",
        points: [
          "Positions 2, 8, 15, 27 modified vs sermorelin",
          "No MPA-Lys / albumin-binding DAC",
          "Not interchangeable with DAC or sermorelin",
        ],
      },
      {
        title: "Evidence reality",
        tone: "orange",
        points: [
          "No exact-molecule dose-finding trial",
          "DAC/sermorelin/one-sub papers are separate families",
          "100–300 mcg protocols are anecdotal",
        ],
      },
      {
        title: "Online protocol culture",
        tone: "green",
        points: [
          "Often 100 mcg ± ipamorelin",
          "1–3× daily; 8–16 week cycles",
          "Cultural transmission since ~2011 — not clinical development",
        ],
      },
    ],
    resultBars: [
      "No Exact-Molecule Trial Dose",
      "Online 100–300 mcg Convention",
      "DAC Evidence Not Transferable",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No adequate direct human safety dataset exists for CJC-1295 free base or acetate. Related D-Ala2 IV data (transient flushing at high dose in n=5) cannot establish repeated SC safety. Class GH/IGF-1 concerns, formulation/immunogenicity issues, and WADA prohibition apply as context.",
    dosage:
      "There is no FDA-approved or clinically established dosage. Exact-molecule human trial dosing was not identified. Online protocols commonly report 100–300 mcg subcutaneously once to three times daily (most often 100 mcg), often for 8–16 weeks. These amounts are anecdotal conventions—not validated clinical regimens.",
    glance: [
      { label: "FDA-approved dose", value: "None", highlight: true },
      { label: "Exact-molecule trial dose", value: "None identified" },
      { label: "Online range", value: "≈100–300 mcg SC" },
      { label: "Most repeated", value: "100 mcg / admin" },
      { label: "Frequency (online)", value: "1–3× daily" },
      { label: "≠ DAC / ≠ sermorelin", value: "Different molecules" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["No DAC / Mod GRF", "CJC-1295 DAC", "Sermorelin"],
      highlight: 0,
      rows: [
        {
          feature: "Structure",
          values: [
            "Tetrasubstituted GRF(1-29)",
            "Same core + MPA-Lys",
            "Native GRF(1-29)",
          ],
        },
        {
          feature: "Exact human PK",
          values: ["None identified (FDA)", "Yes (long-acting)", "Yes — different molecule"],
        },
        {
          feature: "Typical discussed schedule",
          values: [
            "1–3× daily (anecdotal)",
            "Weekly / q14d (research)",
            "Often once daily (historical)",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "No dose-finding trial",
            "Not transferable here",
            "Not Mod GRF evidence",
          ],
        },
      ],
    },
    research: [
      {
        tag: "FDA",
        title: "CJC-1295-related bulk substances scientific review",
        summary:
          "No peer-reviewed clinical/nonclinical data for free base or acetate; published human papers concern DAC moiety.",
        cite: "FDA, Dec 2024",
        href: "https://www.fda.gov/media/183819/download",
      },
      {
        tag: "Related analog",
        title: "D-Ala2 GHRH(1-29) disappearance half-time",
        summary:
          "6.7 ± 0.5 min IV — one substitution only; not tetrasubstituted SC PK.",
        cite: "JCEM, 1994",
        href: "https://pubmed.ncbi.nlm.nih.gov/7962295/",
      },
      {
        tag: "Related analog",
        title: "GHRH(1-29) and D-Ala2 GH responses",
        summary: "IV dose-response in healthy men; not Mod GRF 1-29.",
        cite: "Peptides, 1985",
        href: "https://pubmed.ncbi.nlm.nih.gov/2866496/",
      },
      {
        tag: "DAC (not transferable)",
        title: "Long-acting CJC-1295 DAC human PK/PD",
        summary: "Weekly/q14d weight-based SC — different molecule.",
        cite: "JCEM, 2006",
        href: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
      },
      {
        tag: "WADA",
        title: "2026 Prohibited List — GHRH analogs",
        summary: "CJC-1295 named among growth-hormone-releasing factors.",
        cite: "WADA, 2026",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  }),
  "cjc-1295": makePeptide({
    slug: "cjc-1295",
    name: "CJC-1295",
    goalSlug: "build-muscle",
    goalLabel: "Build Muscle",
    rankBadge: "#1 Peptide for Muscle & Recovery",
    summary:
      "A GHRH analogue commonly discussed in growth-hormone-axis and recovery-oriented research contexts. See CJC-1295 DAC for the long-acting molecule used in published human dosing studies.",
    rating: "4.6",
    reviewCount: "892",
    tags: ["Muscle", "Recovery", "Secretagogue"],
    chartLossPct: 0,
    chartLossLbs: 0,
    researchedBadge: "Well Studied",
  }),
  "bpc-157": makePeptide({
    slug: "bpc-157",
    name: "BPC-157",
    pageTitle:
      "BPC-157 for Tendon, Ligament & Muscle Injury: Research Dosage, Results, Safety & FDA Status",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "#1 Peptide for Recovery Research",
    summary:
      "Experimental 15-amino-acid injury-repair peptide. Not FDA approved; no established human dosage. Rodent tendon, ligament, and muscle-injury signals; human evidence limited to tiny uncontrolled reports and pending trials.",
    rating: "4.7",
    reviewCount: "2,104",
    researchedBadge: "Preclinical + Tiny Human Reports",
    tags: [
      "Tissue Repair Research",
      "Tendon / Ligament",
      "Not FDA Approved",
      "WADA S0",
    ],
    dosageGuide: BPC157_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "15 aa",
        body: "Synthetic pentadecapeptide GEPPPGKPADDAGLV (~1,419.5 Da) — not a muscle-growth hormone.",
      },
      {
        label: "Injury models",
        body: "Most positive findings are rodent tendon, ligament, muscle, and GI injury experiments.",
      },
      {
        label: "No human dose",
        body: "Online 200–500 µg daily protocols are not supported by an approved label or dose-ranging trial.",
      },
    ],
    about:
      "BPC-157 is an experimental injury-repair peptide studied mainly in rats. It has not been shown in a randomized published human trial to heal tendon, ligament, or muscle injuries, and it has no proven anabolic or hypertrophy effect in healthy humans. FDA has not approved it for any indication; WADA prohibits it at all times under S0.",
    facts: [
      { label: "Type", value: "Peptide", icon: "type" },
      { label: "Human dose", value: "None established", icon: "weight" },
      { label: "Human RCTs", value: "Results pending", icon: "clock" },
      { label: "FDA Status", value: "Not approved", icon: "flask" },
    ],
    benefits: [
      "Repeated positive rodent tendon and ligament healing signals",
      "Muscle-injury models show restoration toward baseline — not hypertrophy",
      "First registered controlled MSK efficacy trial (hamstring Phase 2) pending results",
      "Not FDA approved; human safety poorly characterized",
      "Prohibited at all times under WADA S0",
    ],
    howItWorks:
      "In cells and animals, BPC-157 appears to influence angiogenesis (VEGF–VEGFR2–Akt–eNOS), fibroblast migration (FAK–paxillin), nitric-oxide signaling, collagen organization, and inflammatory/oxidative pathways. No single validated human receptor or therapeutic biomarker has been established.",
    mechanisms: [
      {
        title: "Angiogenic Signaling",
        tone: "purple",
        points: [
          "VEGF–VEGFR2–Akt–eNOS pathway signals in models",
          "Endothelial migration reported in cells/animals",
          "No validated human therapeutic biomarker",
        ],
      },
      {
        title: "Repair-Cell Activity",
        tone: "green",
        points: [
          "FAK–paxillin–linked fibroblast migration",
          "Tendon-fibroblast outgrowth and survival in lab work",
          "Does not prove patient-level healing",
        ],
      },
      {
        title: "Tissue Organization",
        tone: "orange",
        points: [
          "More organized collagen/reticulin in injury models",
          "NO-system modulation is model-dependent",
          "Mechanism ≠ clinical efficacy",
        ],
      },
    ],
    resultBars: [
      "Rodent Injury-Repair Signal",
      "Unproven Human Benefit",
      "Safety Poorly Characterized",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Human adverse-event rates are unknown. About 30 people across three uncontrolled reports is far too few to establish safety. FDA cites potential immunogenicity, peptide impurities, and insufficient safety information for compounding. Injectable products also carry sterility and infection risks.",
    dosage:
      "There is no medically established BPC-157 dosage. Reported human exposures include poorly detailed intra-articular use, 10 mg total bladder-wall injections, and a two-day 10→20 mg IV observation in two people. Common online 200–500 µg daily subcutaneous regimens are not supported by an approved label or published dose-ranging efficacy trial.",
    glance: [
      { label: "Human dosage", value: "None established", highlight: true },
      { label: "Strongest evidence", value: "Rodent injury models" },
      { label: "Human reports", value: "~30 people total" },
      { label: "MSK RCT", value: "Hamstring Phase 2 pending" },
      { label: "Muscle growth", value: "Not shown in humans" },
      { label: "WADA", value: "S0 — prohibited always" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["BPC-157", "TB-500", "PRP", "Rehab"],
      highlight: 0,
      rows: [
        {
          feature: "Role",
          values: [
            "Experimental tissue-repair peptide",
            "Experimental repair signaling",
            "Autologous concentrate",
            "Standard care",
          ],
        },
        {
          feature: "Human MSK evidence",
          values: [
            "Tiny uncontrolled + pending RCT",
            "No strong sports-injury evidence",
            "Mixed, condition-specific trials",
            "Substantial condition-specific evidence",
          ],
        },
        {
          feature: "Regulatory",
          values: [
            "Not FDA approved; WADA S0",
            "Not FDA approved; sport prohibited",
            "Procedure (not universal drug approval)",
            "Standard of care",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "Most evidence in rodents",
            "Stack synergy unproven",
            "Protocol-dependent results",
            "Diagnosis- and load-specific",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Preclinical",
        title: "BPC 157 accelerates healing of transected rat Achilles tendon",
        summary:
          "Foundational rodent Achilles study reporting accelerated healing after complete transection.",
        cite: "J Orthop Res, 2003",
        href: "https://pubmed.ncbi.nlm.nih.gov/14554208/",
      },
      {
        tag: "Preclinical",
        title: "Tendon outgrowth, cell survival, and migration",
        summary:
          "Laboratory work linking BPC-157 to tendon-fibroblast activity.",
        cite: "2011",
        href: "https://pubmed.ncbi.nlm.nih.gov/21030672/",
      },
      {
        tag: "Human",
        title: "Intra-articular BPC-157 for knee pain",
        summary:
          "Uncontrolled chart review: 11/12 BPC-only recipients reported improvement — not a randomized efficacy rate.",
        cite: "2021",
        href: "https://pubmed.ncbi.nlm.nih.gov/34324435/",
      },
      {
        tag: "Human",
        title: "IV BPC-157 pilot safety observation",
        summary:
          "n=2 short observation; cannot establish safety or event rates.",
        cite: "2025",
        href: "https://pubmed.ncbi.nlm.nih.gov/40131143/",
      },
      {
        tag: "Trial",
        title: "BPC-157 for acute grade II hamstring strain",
        summary:
          "Phase 2 RCT registered (NCT07437547); no results yet — cannot support a benefit claim.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT07437547",
      },
      {
        tag: "FDA / WADA",
        title: "Compounding safety concerns and sport prohibition",
        summary:
          "FDA flags immunogenicity/impurity risks; WADA S0 prohibition since 2022.",
        cite: "FDA / WADA",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
    ],
  }),
  "bpc-157-tb-500": makePeptide({
    slug: "bpc-157-tb-500",
    name: "BPC-157 + TB-500",
    pageTitle:
      "BPC-157 + TB-500 (Wolverine Stack) Dosage: Research Protocol, Results, and Reconstitution",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "Wolverine Stack · No Synergy in Rat Study",
    summary:
      "Review BPC-157 + TB-500 Wolverine Stack dosage evidence, the 2026 rat tendon study, human reports, community protocols, reconstitution math, safety, and a complete research protocol. No established human combination dose.",
    rating: "4.5",
    reviewCount: "890",
    researchedBadge: "No Human Combo Dose · Rat Study: No Synergy",
    tags: [
      "Wolverine Stack",
      "Ac-LKKTETQ + BPC-157",
      "No Synergy in Rat Study",
      "No Human Combo Dose",
    ],
    dosageGuide: BPC_TB_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Community name",
        body: "“Wolverine Stack” is a nickname — not a standardized drug, ratio, or clinical protocol.",
      },
      {
        label: "2026 rat study",
        body: "BPC 10 µg/kg/day + TB 60 µg/kg/day IP × 30 days — combination did not outperform monotherapy.",
      },
      {
        label: "TB-500 identity",
        body: "On this page, TB-500 = Ac-LKKTETQ (N-acetylated Tβ4 17–23) — ≠ full-length Tβ4, ≠ unacetylated LKKTETQ, ≠ GLOW/KLOW.",
      },
    ],
    about:
      "The Wolverine Stack is a community nickname for BPC-157 plus TB-500 (generally Ac-LKKTETQ). Products include separate vials, 1:1 co-lyophilized blends (5/5 or 10/10 mg), and 1:2 blends (5/10 mg). The July 2026 Biçer rat Achilles study is the first direct controlled combination test — it found no additive benefit over monotherapy. No controlled human trial has established a combination dose. This page is ≠ GLOW (adds GHK-Cu) and ≠ KLOW (adds GHK-Cu + KPV). See also /peptides/bpc-157 and /peptides/tb-500 for component pages.",
    facts: [
      { label: "Type", value: "2-peptide blend", icon: "type" },
      { label: "Rat combo dose", value: "10 + 60 µg/kg/day IP", icon: "weight" },
      { label: "Human combo dose", value: "None established", icon: "clock" },
      { label: "Synergy", value: "Not demonstrated", icon: "flask" },
    ],
    benefits: [
      "Documents 2026 rat study: BPC 10 + TB 60 µg/kg/day — no synergy vs monotherapy",
      "Separates Ac-LKKTETQ TB-500 from full-length Tβ4 and unacetylated LKKTETQ",
      "Compares separate-vial vs 1:1 blend weekly exposure conflicts",
      "Reconstitution presets for 10/10, 5/5, and 5/10 mg vials at common diluent volumes",
      "Flags ≠ GLOW/KLOW and WADA prohibition of both components",
    ],
    howItWorks:
      "BPC-157 preclinical literature links vascular, NO, and tendon-fibroblast pathways; Ac-LKKTETQ is studied for actin-associated migration and cytoskeletal dynamics. The 2026 rat study tested whether concurrent exposure adds benefit — it did not at the published doses. Community synergy narratives are not supported by direct comparative data.",
    mechanisms: [
      {
        title: "BPC-157 themes",
        tone: "purple",
        points: [
          "VEGF/NO and FAK-paxillin tendon models",
          "Rodent injury literature — sparse human reports",
          "Component page: /peptides/bpc-157",
        ],
      },
      {
        title: "TB-500 (Ac-LKKTETQ)",
        tone: "blue",
        points: [
          "N-acetylated Tβ4 17–23 fragment (~889 Da)",
          "Strongest rat-study arm for biomechanics",
          "≠ full-length Tβ4 — see /peptides/tb-500",
        ],
      },
      {
        title: "Combination limits",
        tone: "orange",
        points: [
          "No additive benefit in 2026 rat study",
          "1:1 blends ≠ separate-vial weekly schedules",
          "No human PK or controlled efficacy trial",
        ],
      },
    ],
    resultBars: [
      "Human Combo Dose: None",
      "Rat Combo Synergy: Not shown",
      "Community Protocols: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No exact-combination adverse-event rates exist for verified BPC-157 + Ac-LKKTETQ. The 2026 rat study reported no deaths, infections, or wound complications in 32 rats over 30 days — not human safety. Community mentions include injection-site pain, headache, fatigue, nausea, and dizziness — incidence unknown. Both peptides intersect with angiogenesis and tissue-remodeling pathways; abnormal growth risk is unresolved. Blended vials complicate cause attribution. Both components are WADA prohibited.",
    dosage:
      "There is no established human Wolverine Stack dose. The only published controlled combination used BPC-157 10 µg/kg/day plus TB-500 60 µg/kg/day IP for 30 days in surgically repaired rat Achilles tendons — not a human SC protocol. Community separate-vial patterns often use BPC-157 250–500 µg daily plus TB-500 2–2.5 mg twice weekly for 4–6 weeks. Fixed 1:1 blends often supply 250/250 µg or 500/500 µg daily — a materially different weekly TB exposure than separate vials. Reconstitution tables cover 10/10 mg @ 2/3/4 mL, 5/5 mg @ 2 mL, and 5/10 mg @ 3 mL.",
    glance: [
      { label: "Human combo dose", value: "None established", highlight: true },
      { label: "Rat combo dose", value: "BPC 10 + TB 60 µg/kg/day IP × 30 d" },
      { label: "Synergy", value: "Not demonstrated (Biçer 2026)" },
      { label: "TB-500 on this page", value: "Ac-LKKTETQ — ≠ full Tβ4" },
      { label: "Separate-vial pattern", value: "BPC 250–500 µg/d + TB 2–2.5 mg 2×/wk" },
      { label: "1:1 blend pattern", value: "250/250 µg or 500/500 µg daily" },
      { label: "≠ GLOW / KLOW", value: "Two peptides only" },
      { label: "WADA", value: "Both components prohibited" },
    ],
    compare: {
      columns: ["Wolverine (BPC+TB)", "GLOW", "KLOW"],
      highlight: 0,
      rows: [
        {
          feature: "Components",
          values: [
            "BPC-157 + TB-500 only",
            "GHK-Cu + BPC-157 + TB-500",
            "KPV + GHK-Cu + BPC-157 + TB-500",
          ],
        },
        {
          feature: "Combo evidence",
          values: [
            "1 rat study — no synergy",
            "No exact-blend trial",
            "No exact-blend trial",
          ],
        },
        {
          feature: "Typical vial",
          values: ["10/10 or 5/5 mg (1:1)", "50/10/10 mg", "50/10/10/10 mg"],
        },
      ],
    },
    research: [
      {
        tag: "Combo study",
        title: "BPC-157 and TB-500 on Achilles tendon healing in rats",
        summary:
          "2026 Biçer et al. — first direct controlled combination; no additive benefit.",
        cite: "Biçer et al., 2026",
        href: "https://www.jointdrs.org/full-text/1851",
      },
      {
        tag: "Human obs.",
        title: "Intra-articular BPC 157 for knee pain",
        summary:
          "2021 chart review — 4 combo patients; ambiguous TB4 identity; uncontrolled.",
        cite: "Lee & Padgett, 2021",
        href: "https://pubmed.ncbi.nlm.nih.gov/34324435/",
      },
      {
        tag: "BPC-157",
        title: "BPC-157 component page",
        summary: "Rodent injury models; no established human dose.",
        cite: "MyPepFinder",
        href: "/peptides/bpc-157",
      },
      {
        tag: "TB-500",
        title: "TB-500 (Ac-LKKTETQ) component page",
        summary: "Fragment identity, reconstitution, and evidence boundaries.",
        cite: "MyPepFinder",
        href: "/peptides/tb-500",
      },
      {
        tag: "WADA",
        title: "2026 Prohibited List",
        summary: "BPC-157 (S0) and Tβ4 derivatives/TB-500 (S2.3) prohibited.",
        cite: "WADA",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  }),
  "tb-500": makePeptide({
    slug: "tb-500",
    name: "TB-500",
    pageTitle:
      "TB-500 Dosage: Human Evidence, Research Protocol, and Reconstitution",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "Ac-LKKTETQ · No Human Dose",
    summary:
      "Review TB-500 dosage claims, direct fragment research, animal exposures, community protocols, reconstitution math, safety, and the critical difference between TB-500 and thymosin beta-4.",
    rating: "4.5",
    reviewCount: "1,180",
    researchedBadge: "No Human Dose Identified",
    tags: [
      "Ac-LKKTETQ",
      "No Human Dose",
      "≠ Full-Length Tβ4",
      "WADA S2",
    ],
    dosageGuide: TB500_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "7 aa fragment",
        body: "N-acetyl-LKKTETQ — thymosin-β4 residues 17–23. Free base ~889 Da; acetate ~949 Da. Not the 43-aa parent.",
      },
      {
        label: "Direct evidence",
        body: "Horse 10 mg SC once; rat 50 mg/kg IP once; in vitro 50 mcg/mL — analytical/metabolism, not injury healing.",
      },
      {
        label: "Fictional NCT",
        body: "NCT07487363 states it is a fictional ClinicalTrials.gov example — not human trial evidence or established dose cohorts.",
      },
    ],
    about:
      "TB-500 is the synthetic N-acetylated seven-amino-acid fragment Ac-LKKTETQ (thymosin-β4 residues 17–23), not full-length thymosin-β4. FDA’s 2026 review found no clinical study in which TB-500 free base or acetate was administered to humans. Direct dosing evidence is primarily analytical and metabolism work in horses, rats, and laboratory systems. The commonly repeated 2–2.5 mg twice-weekly schedule is a community protocol without clinical validation.",
    facts: [
      { label: "Type", value: "Peptide fragment", icon: "type" },
      { label: "Sequence", value: "Ac-LKKTETQ", icon: "flask" },
      { label: "Human dose", value: "None established", icon: "weight" },
      { label: "FDA Status", value: "Not approved", icon: "clock" },
    ],
    benefits: [
      "Identity of some TB-500 products confirmed as Ac-LKKTETQ",
      "Horse 10 mg SC once — PK/metabolism analytical exposure only",
      "Rat 50 mg/kg IP once — urinary metabolite identification",
      "Parent inactive at 50 mcg/mL in FDA-reviewed scratch assay; Ac-LKKTE metabolite active",
      "No published human-administered dose identified by FDA 2026 review",
      "NCT07487363 is explicitly fictional — not trial evidence",
      "WADA S2 prohibited at all times as thymosin-β4 derivative",
    ],
    howItWorks:
      "TB-500 contains part of the actin-binding region of thymosin-β4. Effects may depend on C-terminal truncated metabolites (Ac-LKKTET → Ac-LK cascade). Parent fragment did not increase scratch closure at 50 mcg/mL in the FDA-reviewed assay.",
    mechanisms: [
      {
        title: "Actin-Region Fragment",
        tone: "purple",
        points: [
          "Contains part of the LKKTET actin-binding motif",
          "Equivalence of short fragment not established",
          "Not interchangeable with 43-aa Tβ4",
        ],
      },
      {
        title: "Migration / Angiogenesis Claims",
        tone: "green",
        points: [
          "Borrowed largely from full-length Tβ4 biology",
          "Parent TB-500 inactive in one reviewed scratch assay",
          "Metabolite Ac-LKKTE showed in-vitro activity",
        ],
      },
      {
        title: "Identity & Quality Risks",
        tone: "orange",
        points: [
          "Naming may cover different salts/sequences",
          "FDA cites impurity, aggregate, and endotoxin gaps",
          "Injectable immunogenicity concerns",
        ],
      },
    ],
    resultBars: [
      "No Human Dose Identified",
      "Equine 10 mg SC PK Only",
      "Community Protocol Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No reliable molecule-specific human adverse-event rate exists. FDA found no human exposure data for TB-500 fragment drug products and no fragment-specific toxicology program. Plausible risks include hypersensitivity, anti-drug antibodies, impurities, aggregates, incorrect identity, injection injury, infection, and endotoxin. Full-length Tβ4 trial safety cannot be transferred.",
    dosage:
      "No established human TB-500 dosage. Direct evidence: horse 10 mg SC once (analytical PK); rat 50 mg/kg IP once (metabolism); in vitro 50 mcg/mL (parent inactive; Ac-LKKTE active). Common anecdotal protocol: 2–2.5 mg SC twice weekly × 4–6 weeks, then often once weekly — unvalidated. For 10 mg/2 mL, 2.5 mg = 0.5 mL = 50 U (arithmetic only).",
    glance: [
      { label: "Identity", value: "Ac-LKKTETQ (7 aa)", highlight: true },
      { label: "Human dose", value: "None identified" },
      { label: "Horse exposure", value: "10 mg SC once" },
      { label: "Anecdotal protocol", value: "2–2.5 mg BIW × 4–6 wk" },
      { label: "Scratch assay", value: "Parent inactive @ 50 mcg/mL" },
      { label: "NCT07487363", value: "Fictional example" },
      { label: "WADA", value: "S2 — always prohibited" },
    ],
    compare: {
      columns: ["TB-500", "Full-length Tβ4", "BPC-157", "Rehab"],
      highlight: 0,
      rows: [
        {
          feature: "Identity",
          values: [
            "7-aa Ac-LKKTETQ",
            "43-aa actin-sequestering peptide",
            "15-aa experimental peptide",
            "Exercise/load progression",
          ],
        },
        {
          feature: "Human dose evidence",
          values: [
            "None identified",
            "Exists for full-length products — not transferable",
            "None established",
            "Standard care",
          ],
        },
        {
          feature: "Regulatory",
          values: [
            "Not FDA approved; WADA S2",
            "Investigational formulations",
            "Not FDA approved; WADA S0",
            "Standard care",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "Community 2–2.5 mg BIW is anecdotal",
            "Different molecule and dose scale",
            "Different sequence and pathways",
            "Diagnosis- and stage-specific",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Identity",
        title: "N-terminal acetylated 17–23 fragment identified in TB-500",
        summary: "Analytical work identifying Ac-LKKTETQ in TB-500 products.",
        cite: "Drug Test Anal, 2012",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
      {
        tag: "Metabolism",
        title: "TB-500 quantification, metabolites, and scratch-assay screening",
        summary:
          "Parent inactive at 50 µg/mL; metabolite Ac-LKKTE showed activity in reviewed assay.",
        cite: "J Chromatogr B, 2024",
        href: "https://pubmed.ncbi.nlm.nih.gov/38382158/",
      },
      {
        tag: "Equine PK",
        title: "10 mg SC once in thoroughbred geldings",
        summary:
          "Single-dose analytical PK and metabolite detection — not a therapeutic or human-equivalent dose.",
        cite: "Kwok et al., 2013",
        href: "https://pubmed.ncbi.nlm.nih.gov/23318763/",
      },
      {
        tag: "FDA",
        title: "July 2026 TB-500 bulk substance briefing",
        summary:
          "No human exposure identified; staff recommended against 503A listing; identity and toxicology gaps.",
        cite: "FDA, 2026",
        href: "https://www.fda.gov/media/193349/download",
      },
      {
        tag: "Registry",
        title: "NCT07487363 — fictional example record",
        summary:
          "Explicitly states it is a fictional ClinicalTrials.gov-style example — not actual trial evidence.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT07487363",
      },
    ],
  }),
  "tb-500-fragment-17-23": makePeptide({
    slug: "tb-500-fragment-17-23",
    name: "TB-500 Fragment (17–23)",
    pageTitle:
      "TB-500 Fragment (17–23) Dosage: Research Protocol and Reconstitution",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "H-LKKTETQ-OH · No Human Dose",
    summary:
      "Review TB-500 Fragment (17–23) dosage evidence for unacetylated H-LKKTETQ-OH, the Philp aged-mouse topical protocol, identity fork vs Ac-LKKTETQ, community protocols, reconstitution math, and safety.",
    rating: "4.4",
    reviewCount: "620",
    researchedBadge: "Topical Mouse Evidence · No Human Dose",
    tags: [
      "H-LKKTETQ-OH",
      "≠ Ac-LKKTETQ",
      "Topical Mouse Evidence",
      "No Human Dose",
    ],
    dosageGuide: TB500_FRAGMENT_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Unacetylated fragment",
        body: "H-LKKTETQ-OH — thymosin-β4 residues 17–23. Free base ~846.97 Da; free amine N-terminus. ≠ acetylated TB-500 (~889 Da).",
      },
      {
        label: "Direct mouse exposure",
        body: "Philp 2003: 0.01% w/v topical, 50 µL per wound = 5 µg on day 0 and 48 h — not SC/IM and not a human dose.",
      },
      {
        label: "Identity fork",
        body: "Confirm intact mass and N-terminus before any math. Ac-LKKTETQ doses do not transfer — see /peptides/tb-500 for the acetylated form.",
      },
    ],
    about:
      "TB-500 Fragment (17–23) on this page means the unacetylated heptapeptide H-LKKTETQ-OH (LKKTETQ / fequesetide), chemically distinct from N-acetylated Ac-LKKTETQ covered on the TB-500 page. No verified human dose exists. The strongest direct evidence is topical 0.01% LKKTETQ in aged mice — 5 µg per wound per application. Online 2–2.5 mg SC schedules are usually copied from Ac-LKKTETQ or ambiguous TB-500 listings.",
    facts: [
      { label: "Type", value: "7-aa peptide fragment", icon: "type" },
      { label: "Sequence", value: "H-LKKTETQ-OH", icon: "flask" },
      { label: "Mass", value: "~846.97 Da", icon: "weight" },
      { label: "Human dose", value: "None established", icon: "clock" },
    ],
    benefits: [
      "Defines unacetylated H-LKKTETQ-OH (~847 Da) vs Ac-LKKTETQ (~889 Da)",
      "Philp 2003 aged-mouse topical: 0.01% × 50 µL = 5 µg per wound",
      "Interactive wound exposure calculator reconstructs published concentration",
      "Complete nonclinical topical mouse protocol with acetylation comparator arm",
      "Claim checker flags Ac schedule transfer, acetate vs Ac-, and topical→SC errors",
      "Recon calculator with H-LKKTETQ-OH peptide-equivalent warnings",
      "Cross-links to /peptides/tb-500 for N-acetylated TB-500 evidence",
    ],
    howItWorks:
      "The LKKTET sequence lies within thymosin beta-4's central actin-binding region. The seven-residue H-LKKTETQ-OH peptide has been associated with endothelial migration, angiogenesis, and wound-repair endpoints in experimental systems — but N-terminal acetylation changes identity, and the fragment is not a miniature full-length Tβ4.",
    mechanisms: [
      {
        title: "Actin-Region Fragment",
        tone: "purple",
        points: [
          "Contains Tβ4 residues 17–23 / LKKTET motif",
          "Free amine N-terminus — not Ac-LKKTETQ",
          "Not interchangeable with 43-aa Tβ4",
        ],
      },
      {
        title: "Topical Mouse Evidence",
        tone: "green",
        points: [
          "0.01% w/v in PBS — 5 µg per 3-mm wound",
          "Day 0 and 48 h applications; day-7 histology",
          "One concentration — no dose-response curve",
        ],
      },
      {
        title: "Identity & Misattribution",
        tone: "orange",
        points: [
          "Online 2–2.5 mg SC usually Ac-LKKTETQ or ambiguous",
          "Horse 10 mg SC and rat 50 mg/kg = Ac-LKKTETQ only",
          "Acetate salt ≠ N-terminal Ac- acetylation",
        ],
      },
    ],
    resultBars: [
      "No Human Dose Identified",
      "5 µg Topical Mouse Only",
      "≠ Ac-LKKTETQ Schedules",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Human adverse-effect frequency for H-LKKTETQ-OH is unknown. No molecule-confirmed clinical program was identified. The direct unacetylated study was topical in mice — not injected. Plausible risks include wrong identity, incorrect assay, endotoxin, aggregates, local reactions, immune responses, and uncharacterized angiogenesis-related biology. Community SC/IM protocols lack a fragment-specific human safety basis.",
    dosage:
      "No established human H-LKKTETQ-OH dosage. Best direct evidence: 0.01% w/v topical LKKTETQ, 50 µL per wound on day 0 and 48 h = 5 µg per application in aged mice (Philp 2003). Online 2–2.5 mg SC schedules are usually Ac-LKKTETQ or ambiguous identity — not fragment-specific evidence. Recon tables use H-LKKTETQ-OH peptide-equivalent mass (~847 Da). See /peptides/tb-500 for Ac-LKKTETQ.",
    glance: [
      { label: "Identity", value: "H-LKKTETQ-OH (~847 Da)", highlight: true },
      { label: "≠ Ac-LKKTETQ", value: "Doses do not transfer" },
      { label: "Human dose", value: "None identified" },
      { label: "Mouse exposure", value: "5 µg topical × 2" },
      { label: "Concentration", value: "0.01% w/v = 0.1 mg/mL" },
      { label: "Anecdotal SC", value: "2–2.5 mg — usually Ac form" },
      { label: "WADA", value: "S2 — always prohibited" },
    ],
    compare: {
      columns: [
        "TB-500 Fragment (17–23)",
        "TB-500 / Ac-LKKTETQ",
        "Full-length Tβ4",
        "BPC-157",
      ],
      highlight: 0,
      rows: [
        {
          feature: "Identity",
          values: [
            "H-LKKTETQ-OH (~847 Da)",
            "Ac-LKKTETQ (~889 Da)",
            "43-aa parent peptide",
            "15-aa experimental peptide",
          ],
        },
        {
          feature: "Best direct dose evidence",
          values: [
            "5 µg topical per mouse wound",
            "10 mg SC horse PK (analytical)",
            "Human IV/topical programs",
            "None established human dose",
          ],
        },
        {
          feature: "Human dose",
          values: [
            "None identified",
            "None identified",
            "Exists for parent — not transferable",
            "None established",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "Topical mouse only — not SC protocol",
            "Community 2–2.5 mg BIW anecdotal",
            "Different molecule and scale",
            "Different sequence and pathways",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Wound model",
        title: "Philp 2003 aged-mouse topical LKKTETQ",
        summary:
          "0.01% w/v, 50 µL per wound on day 0 and 48 h — epidermal closure and collagen at day 7.",
        cite: "Wound Repair Regen, 2003",
        href: "https://pubmed.ncbi.nlm.nih.gov/12581423/",
      },
      {
        tag: "Identity",
        title: "FDA 2026 TB-500 review — unacetylated vs acetylated fork",
        summary:
          "Non-acetylated and N-acetylated profiles cannot be extrapolated to one another.",
        cite: "FDA, 2026",
        href: "https://www.fda.gov/media/193349/download",
      },
      {
        tag: "Mechanism",
        title: "Tβ4 active sites in short peptide sequences",
        summary: "LKKTETQ identified as central actin-binding-domain fragment.",
        cite: "FASEB J, 2010",
        href: "https://pubmed.ncbi.nlm.nih.gov/20179146/",
      },
      {
        tag: "Ac-LKKTETQ",
        title: "N-acetylated fragment in TB-500 products",
        summary:
          "Different molecule — see /peptides/tb-500 for Ac-LKKTETQ horse/rat evidence.",
        cite: "Drug Test Anal, 2012",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
      {
        tag: "PubChem",
        title: "Unacetylated LKKTETQ CID 10169788",
        summary: "846.97 Da free base; CAS 476014-70-7.",
        cite: "NIH PubChem",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/10169788",
      },
    ],
  }),
  "thymosin-alpha-1": makePeptide({
    slug: "thymosin-alpha-1",
    name: "Thymosin Alpha-1",
    pageTitle:
      "Thymosin Alpha-1 Dosage: Human Trials, Research Protocol, and Reconstitution",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "Thymalfasin · 1.6 mg BIW Human Trials",
    summary:
      "Review thymosin alpha-1 dosage from human trials, the 1.6 mg twice-weekly protocol, TESTS sepsis results, community schedules, reconstitution math, identity checks vs TB-500, and evidence ladder. No U.S. approved dose.",
    rating: "4.7",
    reviewCount: "890",
    researchedBadge: "Extensive Human Trials · No U.S. Label",
    tags: [
      "1.6 mg Twice Weekly",
      "Thymalfasin / Zadaxin History",
      "≠ TB-500",
      "No U.S. Approved Dose",
    ],
    dosageGuide: TA1_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Core human dose",
        body: "1.6 mg SC twice weekly (~900 mcg/m²) — most established exposure in international labels and human trials.",
      },
      {
        label: "≠ thymosin beta-4",
        body: "Tα1 is a 28-aa immunomodulatory peptide. TB-500 / Tβ4 are different sequences, biology, and doses — not interchangeable.",
      },
      {
        label: "TESTS sepsis trial",
        body: "Phase III (n=1,106): 1.6 mg q12h × 7 d — no 28-day mortality benefit. ICU exposure ≠ home acute-infection protocol.",
      },
    ],
    about:
      "Thymosin alpha-1 (Tα1, thymalfasin) is an N-acetylated 28-amino-acid immunomodulatory peptide with an unusually large human research record. The most established exposure is 1.6 mg subcutaneously twice weekly, used in international Zadaxin-type labels and numerous clinical trials. That does not create a universal dose for immune wellness — and Tα1 is not TB-500 or thymosin beta-4.",
    facts: [
      { label: "Type", value: "28-aa peptide (Tα1)", icon: "type" },
      { label: "Mass", value: "~3,108.3 Da free base", icon: "flask" },
      { label: "Core human dose", value: "1.6 mg SC BIW", icon: "weight" },
      { label: "U.S. status", value: "No approved dose", icon: "clock" },
    ],
    benefits: [
      "Documents 1.6 mg SC twice-weekly core from HBV, vaccine, sepsis, and oncology trials",
      "Interactive human-trial explorer with PK, TESTS Phase III, and escalation studies",
      "Weekly exposure comparator — clinical 3.2 mg/wk vs 5-on/2-off (7.5 mg/wk) and daily (11.2 mg/wk)",
      "12-week fixed protocol: 1.6 mg BIW × 8 weeks + 4-week washout (25.6 mg total)",
      "Recon calculator with Zadaxin-style 1.6 mg/mL preset and 10 mg/2 mL block/warning",
    ],
    howItWorks:
      "Tα1 is described as an immunomodulator affecting dendritic cells, Toll-like-receptor signaling, antigen presentation, T-cell differentiation, and natural-killer activity — not a direct antimicrobial or growth-hormone secretagogue. Effects are context-dependent and do not equate to a predictable whole-body immune boost.",
    mechanisms: [
      {
        title: "Human trial core",
        tone: "purple",
        points: [
          "1.6 mg SC twice weekly — HBV, HCV-era, vaccine, oncology programs",
          "900 mcg/m² BSA development (~1.5–1.6 mg typical adult)",
          "PK: Tmax 1–2 h, t½ <3 h — short half-life ≠ daily is better",
        ],
      },
      {
        title: "Immunomodulation",
        tone: "blue",
        points: [
          "TLR9/TLR2, dendritic-cell maturation, T-cell and NK effects",
          "Context-dependent — useful, neutral, or harmful by disease state",
          "No clear dose-response — higher dose ≠ consistently better",
        ],
      },
      {
        title: "Identity & evidence limits",
        tone: "orange",
        points: [
          "≠ TB-500 / thymosin beta-4 / fraction 5 / thymulin",
          "TESTS sepsis Phase III negative for mortality",
          "Dec 2024 PCAC: 4 yes / 17 no on 503A bulks list",
        ],
      },
    ],
    resultBars: [
      "1.6 mg SC BIW: Well-established human exposure",
      "General wellness dosing: Not established",
      "TESTS sepsis efficacy: Negative (Phase III)",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Across many trials the most consistent Tα1-attributed events were injection-site pain, redness, and occasional rash, with transient flu-like symptoms in some studies. HBV trials documented ALT flares requiring treatment interruption in some participants. Causality is difficult in combination trials with interferon, chemotherapy, or critical illness. FDA's December 2024 compounding review cited aggregation, incomplete bulk characterization, and immunogenicity concerns. Autoimmune disease, transplant, cancer therapy, pregnancy, and acute sepsis require specialist oversight — peptide must never delay emergency care.",
    dosage:
      "The central human-studied dose is 1.6 mg subcutaneously twice weekly, generally three or four days apart (~900 mcg/m²). International chronic-hepatitis materials often continue six months; under-40-kg labels use 40 mcg/kg BIW — not a general wellness calculator. Acute hospital trials used 1.6 mg BID or q12h (TESTS Phase III found no sepsis mortality benefit). Community schedules include 1.0–1.6 mg 2–3×/wk, 1.5 mg 5-on/2-off (7.5 mg/wk ≈2.34× clinical weekly), and daily 1.6 mg (11.2 mg/wk). Traditional Zadaxin: 1.6 mg vial + 1.0 mL SWFI → 1.6 mg/mL, use immediately. For 5 mg/2 mL: 1.6 mg = 64 U — arithmetic only; warn against 10 mg/2 mL (5 mg/mL). No U.S. approved dosage.",
    glance: [
      { label: "Core dose", value: "1.6 mg SC twice weekly", highlight: true },
      { label: "Identity", value: "Tα1 / thymalfasin · ≠ TB-500" },
      { label: "Weekly exposure (core)", value: "3.2 mg/week" },
      { label: "PK", value: "Tmax 1–2 h · t½ <3 h · no accumulation" },
      { label: "TESTS sepsis", value: "No 28-day mortality benefit" },
      { label: "12-wk protocol", value: "16 doses = 25.6 mg + 4-wk washout" },
      { label: "U.S. status", value: "No approved dose" },
    ],
    compare: {
      columns: ["Human clinical core", "Community reports", "TB-500 / Tβ4"],
      highlight: 0,
      rows: [
        {
          feature: "Molecule",
          values: [
            "28-aa Tα1 / thymalfasin",
            "Often labeled “thymosin” ambiguously",
            "7-aa fragment or 43-aa Tβ4",
          ],
        },
        {
          feature: "Typical dose",
          values: [
            "1.6 mg SC BIW",
            "1.0–1.6 mg 2–3×/wk; daily or 5-on/2-off",
            "Different doses — not transferable",
          ],
        },
        {
          feature: "Weekly exposure",
          values: ["3.2 mg/wk", "2.0–11.2 mg/wk common", "Separate anecdotal ranges"],
        },
        {
          feature: "Human trial depth",
          values: [
            "Extensive — HBV, sepsis, vaccine, oncology",
            "Anecdotal wellness use",
            "Fragment: no established human dose",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "Indication-specific — not universal immune dose",
            "Higher frequency ≠ same as clinical core",
            "≠ thymosin alpha-1",
          ],
        },
      ],
    },
    research: [
      {
        tag: "HBV",
        title: "Chien et al. — 1.6 mg SC BIW chronic hepatitis B RCT",
        summary: "24-week program establishing core twice-weekly schedule.",
        cite: "Chien et al., 1998",
        href: "https://pubmed.ncbi.nlm.nih.gov/9581695/",
      },
      {
        tag: "PK",
        title: "Rost et al. — SC pharmacokinetics of three formulations",
        summary: "Tmax 1–2 h; t½ <3 h; no short-term accumulation.",
        cite: "Rost et al., 1999",
        href: "https://pubmed.ncbi.nlm.nih.gov/10027483/",
      },
      {
        tag: "Sepsis",
        title: "TESTS Phase III sepsis trial — BMJ 2025",
        summary: "1.6 mg q12h × 7 d — no 28-day mortality benefit (n=1,106).",
        cite: "Wu et al., 2025",
        href: "https://pubmed.ncbi.nlm.nih.gov/39814420/",
      },
      {
        tag: "FDA",
        title: "Thymosin Alpha-1 bulk substances briefing document",
        summary: "Dec 2024 PCAC: 4 yes / 17 no on 503A bulks list.",
        cite: "FDA, 2024",
        href: "https://www.fda.gov/media/183820/download",
      },
      {
        tag: "≠ TB-500",
        title: "TB-500 identity — Ac-LKKTETQ fragment",
        summary: "Different molecule from Tα1 — do not interchange doses or protocols.",
        cite: "Drug Test Anal, 2012",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
    ],
  }),
  "ta-1-thymalin-complex": makePeptide({
    slug: "ta-1-thymalin-complex",
    name: "Thymosin Alpha-1 + Thymalin",
    pageTitle:
      "Thymosin Alpha-1 + Thymalin Dosage: Research Protocol and Reconstitution",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "Separate-Vial Stack · No Exact Trial",
    summary:
      "Evidence-based guide to Thymosin Alpha-1 plus Thymalin research dosages, separate-vial reconstitution, protocol design, safety, monitoring, and human evidence. Exact combination unstudied.",
    rating: "4.4",
    reviewCount: "290",
    researchedBadge: "No Exact Combo Trial · Separate Vials Required",
    tags: [
      "1.6 mg SC BIW × 8 wk",
      "10 mg IM × 10 days",
      "Exact Combo: None",
      "≠ Thymulin / Epithalamin",
    ],
    dosageGuide: TA1_THYMALIN_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Tα1 identity",
        body: "Defined acetylated 28-aa peptide (thymalfasin) — report active-peptide basis.",
      },
      {
        label: "Thymalin identity",
        body: "Heterogeneous bovine-thymus extract — 10 mg is total extract mass, not one peptide.",
      },
      {
        label: "Research template",
        body: "1.6 mg SC BIW × 8 weeks + separate 10 mg IM daily days 1–10 (pair unvalidated).",
      },
    ],
    about:
      "Thymosin Alpha-1 + Thymalin pairs a defined synthetic 28-amino-acid peptide with a heterogeneous bovine-thymus extract. No controlled study has established a combination dose, interaction, or synergy. The most defensible research template keeps separate vials and routes: Tα1 1.6 mg SC twice weekly for 8 weeks plus Thymalin 10 mg IM daily on days 1–10 (25.6 mg + 100 mg extract cumulative). A 10 mg “TA1 complex” without a verified ratio is not reproducible. ≠ thymulin; ≠ Thymalin + Epithalamin longevity studies.",
    facts: [
      { label: "Type", value: "Separate-vial stack", icon: "type" },
      { label: "Tα1 template", value: "1.6 mg SC BIW × 8 wk", icon: "flask" },
      { label: "Thymalin template", value: "10 mg IM × 10 days", icon: "weight" },
      { label: "Exact combo trial", value: "None located", icon: "clock" },
    ],
    benefits: [
      "Documents that Tα1 and Thymalin are not interchangeable identities",
      "Separates evidence-anchored template from online daily stacks and unlabeled complexes",
      "Eight-week overlap schedule with cumulative exposure accounting",
      "Separate-vial reconstitution math for Tα1 and Thymalin",
      "Flags ≠ thymulin, ≠ Epithalamin stacks, and no same-syringe basis",
    ],
    howItWorks:
      "Both products are described as affecting T-cell, dendritic-cell, cytokine, and innate-immune pathways. Overlap is a mechanistic hypothesis — not evidence of synergy. Thymalin’s heterogeneous composition and Tα1’s defined sequence require separate assays and accountability.",
    mechanisms: [
      {
        title: "Separate identities",
        tone: "purple",
        points: [
          "Tα1: defined 28-aa acetylated peptide",
          "Thymalin: bovine thymus extract — no single MW",
          "Milligram labels are not molar equivalents",
        ],
      },
      {
        title: "Research template",
        tone: "blue",
        points: [
          "Tα1 1.6 mg SC BIW × 8 weeks (16 doses)",
          "Thymalin 10 mg IM daily days 1–10",
          "Cumulative 25.6 mg + 100 mg extract",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No exact-combination controlled trial",
          "No same-vial compatibility study",
          "Component schedules ≠ validated pair",
        ],
      },
    ],
    resultBars: [
      "Exact Combo Trial: None",
      "Tα1 Human Trials: Moderate (component)",
      "Thymalin Medicinal Use: Indirect",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No reliable exact-combination adverse-event rates exist. Tα1 trials commonly report local injection-site discomfort; TESTS overall safety resembled placebo in acute sepsis. Thymalin monograph lists allergic reactions and contraindicates pregnancy/breastfeeding; animal-extract quality risks (source, adventitious agents, TSE controls) apply. Immune marker increases are not automatically beneficial.",
    dosage:
      "No clinically established combination dose. Evidence-anchored research template: Thymosin Alpha-1 1.6 mg subcutaneously twice weekly for 8 weeks (25.6 mg cumulative across 16 administrations) plus a separate Thymalin course of 10 mg intramuscularly once daily on days 1–10 (100 mg total extract). Do not mix vials or syringes. Online daily/EOD Tα1 stacks and unlabeled-ratio “complex” vials are not controlled-trial regimens.",
    glance: [
      { label: "Exact combo trial", value: "None located", highlight: true },
      { label: "Tα1 template", value: "1.6 mg SC BIW × 8 wk" },
      { label: "Thymalin template", value: "10 mg IM × 10 days" },
      { label: "Cumulative", value: "25.6 mg + 100 mg extract" },
      { label: "Same vial / syringe", value: "No compatibility basis" },
      { label: "≠ thymulin", value: "Different molecule" },
      { label: "≠ Epithalamin stack", value: "Different combination" },
    ],
    compare: {
      columns: ["Tα1 + Thymalin", "Tα1 alone", "Thymalin + Epithalamin"],
      highlight: 0,
      rows: [
        {
          feature: "Composition",
          values: [
            "Defined peptide + thymus extract",
            "Defined 28-aa peptide only",
            "Thymus extract + pineal extract",
          ],
        },
        {
          feature: "Exact-pair trial",
          values: [
            "None located",
            "Multiple indication trials",
            "Older gerontology study",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "Pair unvalidated; keep vials separate",
            "Indication-specific schedules",
            "Not evidence for Tα1 + Thymalin",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Phase 3",
        title: "TESTS: thymosin α1 for sepsis",
        summary:
          "1.6 mg q12h × ≤7 days — no 28-day mortality benefit vs placebo.",
        cite: "Wu et al., 2025",
        href: "https://pubmed.ncbi.nlm.nih.gov/39814420/",
      },
      {
        tag: "Pilot",
        title: "Thymalfasin in hemodialysis COVID-prevention pilot",
        summary:
          "1.6 mg SC twice weekly × 8 weeks — component schedule anchor.",
        cite: "Tuthill et al.",
        href: "https://pubmed.ncbi.nlm.nih.gov/36881981/",
      },
      {
        tag: "Thymalin",
        title: "Thymalin in severe COVID-19 older patients",
        summary:
          "10 mg IM daily × 10 days observational — not Tα1 combination.",
        cite: "Kuznik et al., 2021",
        href: "https://link.springer.com/article/10.1134/S2079057021040068",
      },
      {
        tag: "FDA",
        title: "Thymosin Alpha-1 bulk substance PCAC review",
        summary: "2024 characterization and compounding-policy concerns.",
        cite: "FDA",
        href: "https://www.fda.gov/media/183892/download",
      },
      {
        tag: "≠ stack",
        title: "Thymalin ± Epithalamin long-term human study",
        summary: "Different combination — not Tα1 + Thymalin evidence.",
        cite: "Khavinson & Morozov, 2003",
        href: "https://pubmed.ncbi.nlm.nih.gov/14523363/",
      },
    ],
  }),
  epithalon: makePeptide({
    slug: "epithalon",
    name: "Epithalon",
    pageTitle:
      "Epithalon (Epitalon) Dosage: Research Protocol, Reconstitution, and Evidence",
    goalSlug: "longevity",
    goalLabel: "Longevity",
    rankBadge: "AEDG Tetrapeptide · No Standard Systemic Dose",
    summary:
      "Evidence-based Epithalon dosage guide covering human research, the Epitalon–Epithalamin dosing error, fixed research protocols, reconstitution math, safety, and results.",
    rating: "4.5",
    reviewCount: "510",
    researchedBadge: "0.5 mg/day SL Studied · No Human SC Trial",
    tags: [
      "AEDG · Ala-Glu-Asp-Gly",
      "0.5 mg/day SL × 20 days",
      "≠ Epithalamin",
      "No SC Trial Dose",
    ],
    dosageGuide: EPITHALON_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "Synthetic tetrapeptide AEDG (Epitalon). ≠ Epithalamin pineal extract.",
      },
      {
        label: "Best human systemic",
        body: "0.5 mg/day sublingually × 20 days in a small circadian-biomarker RCT.",
      },
      {
        label: "Legacy trap",
        body: "5–10 mg SC/IM cycles appear inherited from Epithalamin — not AEDG dose-finding.",
      },
    ],
    about:
      "Epithalon (Epitalon) is the defined synthetic tetrapeptide Ala-Glu-Asp-Gly (AEDG). It is not interchangeable with Epithalamin, a heterogeneous bovine-pineal extract. No standard systemic dose exists. The clearest human systemic exposure is 0.5 mg/day sublingually for 20 days; no human SC trial dose was located. Community 5–10 mg injection cycles and 4–6 month repeats are anecdotal and likely extract-dose carryovers. A 2026 review proposed 100–300 µg/treatment day as a translational hypothesis only.",
    facts: [
      { label: "Type", value: "4-aa tetrapeptide (AEDG)", icon: "type" },
      { label: "Free-base MW", value: "≈390.35 g/mol", icon: "flask" },
      { label: "Best human systemic", value: "0.5 mg/day SL × 20 d", icon: "weight" },
      { label: "Human SC trial", value: "None located", icon: "clock" },
    ],
    benefits: [
      "Separates Epitalon (AEDG) from Epithalamin extract dosing errors",
      "Documents the only clear systemic human exposure: 0.5 mg/day SL × 20 days",
      "Contrasts studied doses with legacy 5–10 mg community cycles",
      "Includes 2026 microgram-hypothesis HED math with explicit caveats",
      "Flags free base vs acetate, solubility concerns, and likely WADA S0 status",
    ],
    howItWorks:
      "Research themes include telomerase/telomere biology in cultured cells, circadian and pineal signaling (melatonin metabolite and clock genes), and gene-expression hypotheses. Cell telomere findings do not prove in-vivo lengthening or human longevity benefit. Telomerase/ALT biology creates theoretical cancer-uncertainty for conservative research.",
    mechanisms: [
      {
        title: "Human dosing reality",
        tone: "purple",
        points: [
          "0.5 mg/day SL × 20 days = best systemic research anchor",
          "5 µg/eye parabulbar = local only",
          "No human SC efficacy/safety study located",
        ],
      },
      {
        title: "Legacy dosing error",
        tone: "blue",
        points: [
          "5–10 mg/day matches Epithalamin extract courses",
          "10–20× the studied SL daily mass",
          "266-person longevity study used Epithalamin — not AEDG",
        ],
      },
      {
        title: "2026 hypothesis",
        tone: "orange",
        points: [
          "100–300 µg/treatment day proposed for dose-finding",
          "≈2.7–3.3 µg/kg HED math — not individualized dosing",
          "Exploratory SC pilot concept: 0.2 mg × 10 days",
        ],
      },
    ],
    resultBars: [
      "Human SL Biomarker: Low",
      "Human SC Dose: None",
      "Community 5–10 mg: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Human safety reporting is inadequate; the 2021 SL study did not report safety data and no formal SC safety study was located. Monitor oral irritation with SL spray; local injection reactions with SC; hypersensitivity; sleep/mood changes; and product-quality failures (wrong identity, aggregation, sterility). Telomerase/ALT biology creates theoretical proliferative uncertainty — long-term carcinogenicity data are absent.",
    dosage:
      "No standard systemic Epithalon dose. Best-described human systemic exposure: 0.5 mg/day sublingually for 20 days (0.25 mg twice daily as three sprays per administration; 10 mg cumulative). Human SC trial dose: none located. Evidence-anchored replication preserves that SL schedule. Exploratory SC concept: 0.2 mg once daily × 10 days (2 mg cumulative) as a monitored microgram-range pilot only. Common 5–10 mg SC/IM × 10–20 days cycles are community conventions with likely Epithalamin-extract origin — not synthetic-AEDG dose-finding.",
    glance: [
      { label: "Standard systemic dose", value: "None", highlight: true },
      { label: "Best human systemic", value: "0.5 mg/day SL × 20 d" },
      { label: "Human SC trial", value: "None located" },
      { label: "2026 hypothesis", value: "100–300 µg/day" },
      { label: "Common community", value: "5–10 mg SC/IM × 10–20 d" },
      { label: "≠ Epithalamin", value: "Extract ≠ AEDG" },
      { label: "Tested sport", value: "Likely WADA S0" },
    ],
    compare: {
      columns: ["Epitalon (AEDG)", "Epithalamin", "Community SC cycle"],
      highlight: 0,
      rows: [
        {
          feature: "Material",
          values: [
            "Defined tetrapeptide",
            "Bovine pineal extract",
            "Often unclear identity/assay",
          ],
        },
        {
          feature: "Typical mass discussed",
          values: ["0.5 mg/day SL studied", "Often 5–10 mg/day", "5–10 mg/day SC/IM"],
        },
        {
          feature: "Key limit",
          values: [
            "No SC trial; narrow human data",
            "Not synthetic Epitalon evidence",
            "Likely extract-dose carryover",
          ],
        },
      ],
    },
    research: [
      {
        tag: "FDA",
        title: "Epitalon bulk substances — July 2026 PCAC evaluation",
        summary: "Characterization, effectiveness, and safety gaps for compounding.",
        cite: "FDA",
        href: "https://www.fda.gov/media/193345/download",
      },
      {
        tag: "Human SL",
        title: "AEDG circadian-gene / 6-SMT biomarker study",
        summary: "0.5 mg/day sublingually × 20 days — small RCT biomarker exposure.",
        cite: "Ivko et al., 2021",
        href: "https://link.springer.com/article/10.1134/S2079057021010380",
      },
      {
        tag: "Hypothesis",
        title: "Microgram dosing hypothesis for Epitalon",
        summary: "100–300 µg/treatment day — translational, not clinical validation.",
        cite: "Jung, 2026",
        href: "https://www.antpublisher.com/index.php/APT/article/view/1027/1356",
      },
      {
        tag: "≠ extract",
        title: "Thymalin ± Epithalamin longevity follow-up",
        summary: "Not synthetic Epitalon — do not cite as AEDG dose evidence.",
        cite: "Khavinson & Morozov, 2003",
        href: "https://pubmed.ncbi.nlm.nih.gov/14523363/",
      },
      {
        tag: "Cells",
        title: "Epitalon telomere length in human cell lines",
        summary: "Telomerase and ALT findings in culture — not in-vivo human proof.",
        cite: "Al-Dulaimi et al., 2025",
        href: "https://pubmed.ncbi.nlm.nih.gov/40908429/",
      },
    ],
  }),
  thymulin: makePeptide({
    slug: "thymulin",
    name: "Thymulin",
    pageTitle:
      "Thymulin Dosage: Human Trials, Research Protocol, and Reconstitution",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "FTS-Zn · Historical RA 5 mg/day · ≠ Thymalin",
    summary:
      "Review thymulin dosage from human and animal studies, zinc-complex requirements, thymalin conflation warnings, community protocols, reconstitution math, and a complete nonclinical mouse replication protocol. No U.S. approved dose.",
    rating: "4.5",
    reviewCount: "620",
    researchedBadge: "Historical Human Trials · No U.S. Label",
    tags: [
      "Zinc-Dependent FTS-Zn",
      "Historical RA 5 mg/day",
      "≠ Thymalin",
      "No U.S. Dose",
    ],
    dosageGuide: THYMULIN_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Zinc required",
        body: "Classic thymulin bioactivity depends on zinc (FTS-Zn). FTS (zinc-free) ≠ active form. Modern mouse work added equimolar ZnCl2 to thymulin acetate.",
      },
      {
        label: "Historical 5 mg/day",
        body: "1980s RA RCTs compared 1, 5, and 10 mg/day — 5 mg/day had the strongest signal but route/formulation incomplete in abstract. Not a universal dose.",
      },
      {
        label: "≠ thymalin / Tα1",
        body: "Thymalin 20-day cycles and thymosin alpha-1 schedules cannot be assigned to thymulin. Most common online conflation error.",
      },
    ],
    about:
      "Thymulin is a zinc-dependent thymic nonapeptide (serum thymic factor, FTS-Zn, nonathymulin) studied mainly in 1980s rheumatoid-arthritis and multiple-sclerosis trials. Human evidence is old, sparse, and formulation-incomplete. The most reproducible current dosing evidence is nonclinical: 1.5 mg/kg IP daily × 28 days with equimolar ZnCl2 in aged mice — not a human protocol.",
    facts: [
      { label: "Type", value: "9-aa zinc-dependent peptide", icon: "type" },
      { label: "Mass", value: "~858.85 Da free peptide", icon: "flask" },
      { label: "RA trial signal", value: "5 mg/day (non-monotonic)", icon: "weight" },
      { label: "U.S. status", value: "No approved dose", icon: "clock" },
    ],
    benefits: [
      "Documents historical RA 1/5/10 mg/day comparison and 500 mcg SC biological-response experiment",
      "Identity gate with hard thymalin ≠ thymulin warning and zinc-state checker",
      "Complete nonclinical mouse protocol: 1.5 mg/kg IP × 28 d + equimolar ZnCl2",
      "Recon calculator for 5 mg/2 mL, 10 mg/2 mL, 10 mg/1 mL with assay/zinc warnings",
      "Clinical vs community comparator and claim checker for common conflation errors",
    ],
    howItWorks:
      "Thymulin has been studied as a regulator of T-cell differentiation, neuroendocrine signaling, inflammatory cytokines, and age-associated myeloid inflammation. Activity depends on zinc complexation. Effects are context-dependent — a lower inflammatory marker in aged mice does not prove broad anti-inflammatory benefit in humans.",
    mechanisms: [
      {
        title: "Zinc-dependent activity",
        tone: "purple",
        points: [
          "FTS-Zn: ~1:1 peptide-zinc molar relationship for classic bioactivity",
          "FTS (zinc-free) has little recognized activity in traditional bioassay",
          "Modern studies add equimolar ZnCl2 — acetate ≠ automatically complexed",
        ],
      },
      {
        title: "Historical human exposure",
        tone: "blue",
        points: [
          "RA RCTs: 1, 5, 10 mg/day — 5 mg/day strongest signal",
          "500 mcg SC once (n=5); MS 6 mo SC — no benefit, dose missing",
          "Topical 0.0005% pilot: 5–10 mcg/application by arithmetic",
        ],
      },
      {
        title: "Identity & evidence limits",
        tone: "orange",
        points: [
          "≠ thymalin (20-day cycles) / thymosin alpha-1 / TB-500",
          "1.5 mg/kg mouse IP × 28 d — animal only, no HED",
          "NIH/NCATS: investigational; development discontinued",
        ],
      },
    ],
    resultBars: [
      "RA 5 mg/day: Strongest historical dose-comparison signal",
      "MS six-month trial: No significant clinical benefit",
      "Mouse 1.5 mg/kg IP: Most reproducible modern nonclinical protocol",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "RA trials described adverse effects as minimal overall, but indexed full-text reports withdrawals in the 5 mg group after thrombocytopenia (month 3) and vasculitis (month 5) — causality not established. MS trial abstract reported no significant side-effect difference over six months. Topical pilot: one transient redness after sun exposure. Immune modulation may differ in autoimmune disease, infection, malignancy, or transplant settings. Uncontrolled zinc exposure, bulk material quality, and repeated parenteral exposure add product-quality and immunogenicity variables not present in historical trials.",
    dosage:
      "No U.S. approved dose. Historical RA RCTs used nonathymulin at 1, 5, or 10 mg/day (5 mg/day strongest reported signal; route/formulation incomplete in abstract). A separate experiment used 500 mcg SC once (n=5 RA). MS trial: six months SC with no significant benefit — dose absent from abstract. Topical pilot: 0.0005% zinc-thymulin, 1–2 mL BID (5–10 mcg/application). Modern mouse replication: 1.5 mg/kg IP daily × 28 days + equimolar ZnCl2 — not a human dose. Community schedules (100 mcg BIW to 1–5 mg/day) are inconsistent and often conflate thymulin with thymalin. Recon: 5 mg/2 mL = 2.5 mg/mL; 10 mg/2 mL = 5 mg/mL; 10 mg/1 mL = 10 mg/mL — arithmetic only; verify zinc state and active-peptide assay.",
    glance: [
      { label: "RA trial signal", value: "5 mg/day (1/5/10 mg arms)", highlight: true },
      { label: "Identity", value: "FTS-Zn · ≠ thymalin · ≠ Tα1" },
      { label: "SC documented", value: "500 mcg once (n=5 RA)" },
      { label: "Zinc state", value: "FTS-free ≠ FTS-Zn active" },
      { label: "Mouse protocol", value: "1.5 mg/kg IP × 28 d + ZnCl2" },
      { label: "Topical pilot", value: "5–10 mcg/application" },
      { label: "U.S. status", value: "No approved dose" },
    ],
    compare: {
      columns: ["Historical human literature", "Modern community", "Thymalin (≠ thymulin)"],
      highlight: 0,
      rows: [
        {
          feature: "Molecule",
          values: [
            "Defined FTS / FTS-Zn / nonathymulin",
            "Often only “thymulin” on bulk vial",
            "Thymic extract / peptide mixture",
          ],
        },
        {
          feature: "Typical dose",
          values: [
            "1, 5, or 10 mg/day RA; 500 mcg SC once",
            "100 mcg BIW to 1–5 mg/day",
            "2 mg daily × 20 days (not thymulin evidence)",
          ],
        },
        {
          feature: "Zinc",
          values: [
            "Deliberately supplemented in some studies",
            "Frequently unspecified or assumed",
            "Different product — not interchangeable",
          ],
        },
        {
          feature: "Evidence",
          values: [
            "Old RA signal; MS negative; topical uncontrolled",
            "No matched controlled thymulin trials",
            "Name conflation — schedules cannot transfer",
          ],
        },
      ],
    },
    research: [
      {
        tag: "RA",
        title: "Amor et al. — nonathymulin RA dose comparison",
        summary: "1, 5, 10 mg/day — 5 mg/day strongest signal; non-monotonic.",
        cite: "Amor et al., 1987",
        href: "https://pubmed.ncbi.nlm.nih.gov/3310925/",
      },
      {
        tag: "SC",
        title: "Faure et al. — 500 mcg SC once biological-response experiment",
        summary: "n=5 RA; lymphocyte markers at 1 hour.",
        cite: "Faure et al., 1984",
        href: "https://doi.org/10.1016/0192-0561(84)90058-4",
      },
      {
        tag: "Mouse",
        title: "Kanemaru et al., 2026 — aged-mouse tumor protocol",
        summary: "1.5 mg/kg IP × 28 d + equimolar ZnCl2 — nonclinical replication anchor.",
        cite: "Nat Commun, 2026",
        href: "https://www.nature.com/articles/s41467-026-75383-0",
      },
      {
        tag: "Status",
        title: "NIH/NCATS Inxight — nonathymulin",
        summary: "Investigational; historical development discontinued.",
        cite: "NCATS",
        href: "https://drugs.ncats.io/drug/9H198D04WL",
      },
    ],
  }),
  ipamorelin: makePeptide({
    slug: "ipamorelin",
    name: "Ipamorelin",
    pageTitle: "Ipamorelin Dosage: Human Trials vs Research Protocols",
    goalSlug: "build-muscle",
    goalLabel: "Build Muscle",
    rankBadge: "GH Secretagogue",
    summary:
      "See the ipamorelin doses used in human trials, how they differ from commonly reported research protocols, and what the evidence actually supports. No FDA-approved dosage.",
    rating: "4.5",
    reviewCount: "760",
    researchedBadge: "Not FDA Approved",
    tags: ["Dosage Research", "IV Trials", "No SC PK", "Not FDA Approved"],
    dosageGuide: IPAMORELIN_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "No approved dose",
        body: "No FDA-approved indication, product label, starting dose, or maximum dose.",
      },
      {
        label: "IV trial dose",
        body: "Clearest published regimen: 0.03 mg/kg IV twice daily for up to 7 postoperative days.",
      },
      {
        label: "Online ≠ clinical",
        body: "100–300 mcg SC protocols are anecdotal; FDA found no SC PK/PD or safety data.",
      },
    ],
    about:
      "Ipamorelin is an investigational growth-hormone secretagogue with no FDA-approved dosage. Human research used weight-based intravenous infusions for PK/PD and postoperative GI recovery. Fixed subcutaneous 100–300 mcg schedules common online have not been validated in controlled trials and are a different exposure from studied IV regimens.",
    facts: [
      { label: "Type", value: "Pentapeptide GHS", icon: "type" },
      { label: "Studied route", value: "IV infusion", icon: "flask" },
      { label: "Human dose", value: "No approved dose", icon: "weight" },
      { label: "FDA Status", value: "Not approved", icon: "clock" },
    ],
    benefits: [
      "Published IV PK/PD dose range ~3–100 mcg/kg",
      "Phase 2 published dose: 0.03 mg/kg IV BID up to 7 days",
      "Registered dose-finding arms up to 0.06 mg/kg TID (results not posted)",
      "Online 100–300 mcg SC range is anecdotal — not clinically established",
      "No validated chronic subcutaneous dosing standard",
    ],
    howItWorks:
      "Ipamorelin activates the ghrelin receptor and can release stored pituitary growth hormone. Formal human dosing evidence is limited to short-term IV research. Anecdotal subcutaneous schedules often cite the ~2-hour half-life and brief GH pulse, but those rationales do not establish an optimal chronic SC dose, timing, or cycle.",
    mechanisms: [
      {
        title: "Clinical IV dosing",
        tone: "purple",
        points: [
          "Weight-based mg/kg or nmol/kg infusions",
          "Single PK exposure or BID/TID short courses",
          "Postoperative GI endpoints — not physique",
        ],
      },
      {
        title: "Anecdotal SC protocols",
        tone: "orange",
        points: [
          "Fixed 100–300 mcg amounts",
          "Often 8–16 weeks; 1–3× daily",
          "Not validated; SC PK unknown per FDA",
        ],
      },
      {
        title: "Evidence limits",
        tone: "green",
        points: [
          "No approved dose or titration label",
          "NCT01280344 results not posted",
          "Animal doses not human protocols",
        ],
      },
    ],
    resultBars: [
      "No FDA-Approved Dose",
      "IV Research Documented",
      "SC Protocols Unvalidated",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "In the published postoperative IV trial, hypokalemia, insomnia, and hyperglycemia were numerically more common with ipamorelin than placebo. Three participants discontinued for nausea, hypertension, or hypotension. Two fatal SAEs occurred with unclear causality. These data cannot establish chronic subcutaneous safety.",
    dosage:
      "There is no FDA-approved dosage. Human research used weight-based IV infusions (~3–100 mcg/kg single PK doses; 0.03 mg/kg IV BID up to 7 days; registered arms also 0.06 mg/kg BID/TID). Fixed 100–300 mcg subcutaneous regimens online are anecdotal conventions — not clinical standards.",
    glance: [
      { label: "FDA-approved dose", value: "None", highlight: true },
      { label: "Clearest trial dose", value: "0.03 mg/kg IV BID ≤7 days" },
      { label: "PK range", value: "~3–100 mcg/kg IV once" },
      { label: "Online SC range", value: "100–300 mcg (anecdotal)" },
      { label: "SC PK in humans", value: "Not identified by FDA" },
      { label: "Long-term SC evidence", value: "Insufficient" },
      { label: "FDA Status", value: "Not approved" },
    ],
    compare: {
      columns: ["Clinical IV", "Anecdotal SC", "Animal"],
      highlight: 0,
      rows: [
        {
          feature: "Dose style",
          values: [
            "Weight-based mg/kg",
            "Fixed mcg amounts",
            "Model-specific mg/kg or mcg/day",
          ],
        },
        {
          feature: "Route",
          values: ["IV infusion", "Subcutaneous", "SC, IV, or oral gavage"],
        },
        {
          feature: "Duration",
          values: ["1–10 days typical", "Often 8–16 weeks", "Acute to ~15 days"],
        },
        {
          feature: "Evidence",
          values: [
            "Controlled / registered",
            "Low / insufficient",
            "Not transferable as human dosing",
          ],
        },
      ],
    },
    research: [
      {
        tag: "PK/PD",
        title: "PK/PD modeling of ipamorelin in human volunteers",
        summary:
          "IV dose cohorts 4.21–140.45 nmol/kg; GH peak ~0.67 h; t½ ~2 h.",
        cite: "Pharm Res, 1999",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
      {
        tag: "Phase 2",
        title: "Ipamorelin for postoperative ileus after bowel resection",
        summary:
          "0.03 mg/kg IV BID vs placebo; primary endpoint not significant (p=0.15).",
        cite: "Int J Colorectal Dis, 2014",
        href: "https://pubmed.ncbi.nlm.nih.gov/25331030/",
      },
      {
        tag: "Trial",
        title: "NCT01280344: Phase 2 dose finding",
        summary:
          "0.03 BID, 0.06 BID, 0.06 TID mg/kg IV; completed; results not posted.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT01280344",
      },
      {
        tag: "FDA",
        title: "Ipamorelin-related bulk substances scientific review",
        summary:
          "No SC PK/PD identified; compounding safety concerns; 503A nomination withdrawn.",
        cite: "FDA, Oct 2024",
        href: "https://www.fda.gov/media/182088/download",
      },
      {
        tag: "Preclinical",
        title: "Ipamorelin in rodent postoperative ileus",
        summary: "IV exposures in motility models — not human dosing.",
        cite: "JPET, 2009",
        href: "https://pubmed.ncbi.nlm.nih.gov/19289567/",
      },
    ],
  }),
  hexarelin: makePeptide({
    slug: "hexarelin",
    name: "Hexarelin",
    pageTitle:
      "Hexarelin Dosage Guide: Human Studies, Research Protocols, and Safety",
    goalSlug: "build-muscle",
    goalLabel: "Build Muscle",
    rankBadge: "GHS / Examorelin",
    summary:
      "A research-focused review of Hexarelin dosage data, including human IV, subcutaneous, intranasal, and oral studies; online protocols; desensitization; safety; and evidence quality. No FDA-approved dosage.",
    rating: "4.5",
    reviewCount: "520",
    researchedBadge: "Not FDA Approved",
    tags: ["Examorelin", "GHS-R1a", "Dose-Response", "Not FDA Approved"],
    dosageGuide: HEXARELIN_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Saturable GH",
        body: "IV rising-dose: half-max ~0.5–0.64 mcg/kg; near-max ~2 mcg/kg.",
      },
      {
        label: "16-week SC",
        body: "1.5 mcg/kg BID attenuated GH response; IGF-1/body comp unchanged; recovered after 4 weeks off.",
      },
      {
        label: "Online ≠ trial",
        body: "100–200 mcg fixed protocols are anecdotal; 3× daily did not beat 2× for 24-h GH.",
      },
    ],
    about:
      "Hexarelin (examorelin) is a synthetic hexapeptide GHS-R1a agonist studied mainly as an acute GH secretagogue. Human research used weight-based IV and SC exposures; the best repeated-dose evidence is 1.5 mcg/kg SC twice daily for 16 weeks in older adults. There is no FDA-approved dosage. Fixed 100–200 mcg online protocols remain anecdotal.",
    facts: [
      { label: "Type", value: "Hexapeptide GHS", icon: "type" },
      { label: "INN", value: "Examorelin", icon: "flask" },
      { label: "Human dose", value: "No approved dose", icon: "weight" },
      { label: "FDA Status", value: "Not approved", icon: "clock" },
    ],
    benefits: [
      "Acute saturable IV GH dose-response demonstrated",
      "SC 1.5 mcg/kg used in 24-h and 16-week studies",
      "Third daily SC dose did not raise 24-h integrated GH (n=6)",
      "Partial reversible desensitization over 16 weeks",
      "Online 100–200 mcg schedules unvalidated for outcomes",
    ],
    howItWorks:
      "Hexarelin activates GHS-R1a to stimulate endogenous pulsatile GH release. Acute IV and SC experiments show potent, saturable GH responses. Repeated exposure can attenuate the response within hours and across weeks. Hormonal challenge data do not establish body-composition, anti-aging, or athletic-recovery benefits.",
    mechanisms: [
      {
        title: "GHS-R1a agonist",
        tone: "purple",
        points: [
          "Ghrelin-receptor family secretagogue",
          "Prompt pulsatile endogenous GH",
          "Distinct from injected recombinant GH",
        ],
      },
      {
        title: "Dose & route",
        tone: "green",
        points: [
          "IV 0.5–2 mcg/kg clearest dose-response",
          "SC PD availability ≈77% vs IV (small study)",
          "IN/oral much lower PD availability",
        ],
      },
      {
        title: "Attenuation",
        tone: "orange",
        points: [
          "Second IV challenge weaker at 2 hours",
          "16-week SC BID: partial desensitization",
          "Recovery after 4 weeks off — not a mandatory cycle rule",
        ],
      },
    ],
    resultBars: [
      "No FDA-Approved Dose",
      "Acute GH Dose-Response",
      "Fixed mcg Protocols Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Small acute studies reported slight rises in prolactin, cortisol, and ACTH with otherwise good short-term tolerability. The 16-week study did not show chronic ACTH/prolactin overstimulation. Long-term safety and product quality for unapproved materials are not established. WADA prohibits growth-hormone secretagogues.",
    dosage:
      "There is no FDA-approved dosage. Human research used 0.5–2 mcg/kg IV single challenges, 1.5–3 mcg/kg SC acutely, and 1.5 mcg/kg SC twice daily for 16 weeks. Online 100–200 mcg fixed schedules are anecdotal conventions—not validated clinical regimens.",
    glance: [
      { label: "FDA-approved dose", value: "None", highlight: true },
      { label: "IV dose-response", value: "0.5–2 mcg/kg" },
      { label: "Best repeated SC", value: "1.5 mcg/kg BID × 16 wk" },
      { label: "Online range", value: "100–200 mcg (anecdotal)" },
      { label: "3× vs 2× daily", value: "No 24-h GH advantage" },
      { label: "“55-min half-life”", value: "GH-response decline" },
      { label: "WADA", value: "Prohibited GHS" },
    ],
    compare: {
      columns: ["Human studies", "Online protocols", "Animal"],
      highlight: 0,
      rows: [
        {
          feature: "Dose unit",
          values: ["Mostly mcg/kg", "Fixed mcg", "Higher mcg/kg models"],
        },
        {
          feature: "Endpoints",
          values: [
            "GH, IGF-1, hormones",
            "Muscle, fat, recovery claims",
            "Mechanism / disease models",
          ],
        },
        {
          feature: "Desensitization",
          values: [
            "Acute + 16-wk evidence",
            "Used to justify cycling",
            "In-vitro / beagle support",
          ],
        },
        {
          feature: "Evidence quality",
          values: [
            "Small controlled PD studies",
            "Low / insufficient",
            "Not transferable as human dosing",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Dose-response",
        title: "Hexarelin IV dose-response in humans",
        summary: "0.5–2 mcg/kg; saturable GH peaks; near-max at 2 mcg/kg.",
        cite: "Eur J Clin Pharmacol, 1994",
        href: "https://pubmed.ncbi.nlm.nih.gov/7957536/",
      },
      {
        tag: "Routes",
        title: "Hexarelin by IV, SC, intranasal, and oral routes",
        summary: "PD bioavailability differs sharply by route.",
        cite: "1994",
        href: "https://pubmed.ncbi.nlm.nih.gov/8126144/",
      },
      {
        tag: "Repeated dose",
        title: "16 weeks of Hexarelin in healthy elderly subjects",
        summary:
          "1.5 mcg/kg SC BID; attenuation; no significant IGF-1/body-comp change.",
        cite: "1998",
        href: "https://pubmed.ncbi.nlm.nih.gov/9589671/",
      },
      {
        tag: "Frequency",
        title: "Two versus three SC Hexarelin administrations over 24 hours",
        summary: "Third dose added no measurable integrated GH benefit.",
        cite: "2002",
        href: "https://pubmed.ncbi.nlm.nih.gov/11888836/",
      },
      {
        tag: "WADA",
        title: "2026 Prohibited List — GHS class",
        summary: "Examorelin/Hexarelin prohibited at all times.",
        cite: "WADA, 2026",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  }),
  sermorelin: makePeptide({
    slug: "sermorelin",
    name: "Sermorelin",
    pageTitle:
      "Sermorelin Dosage Guide: FDA History, Human Studies, and Research Protocols",
    goalSlug: "build-muscle",
    goalLabel: "Build Muscle",
    rankBadge: "GHRH(1–29) / Historical Geref",
    summary:
      "Evidence-based Sermorelin dosage review covering historical Geref dosing, human clinical studies, adult research, commonly reported protocols, safety, and regulatory status. No currently marketed FDA-approved product.",
    rating: "4.6",
    reviewCount: "980",
    researchedBadge: "Historically Approved · Discontinued",
    tags: [
      "GHRH(1–29)",
      "Historical Geref",
      "Compounded ≠ Approved",
      "WADA Prohibited",
    ],
    dosageGuide: SERMORELIN_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Historical label",
        body: "Pediatric Geref: 30 mcg/kg SC nightly — not a fixed 200–300 mcg adult dose.",
      },
      {
        label: "Adult experiments",
        body: "Published studies often used 0.5–2 mg per administration — higher than most clinic mcg schedules.",
      },
      {
        label: "Compounded today",
        body: "Current Sermorelin preparations are not FDA-approved products.",
      },
    ],
    about:
      "Sermorelin is synthetic GHRH(1–29)-NH2. Specific Geref products were historically FDA approved for diagnostic testing and pediatric idiopathic GH deficiency, then discontinued. Current compounded adult wellness schedules (often 100–500 mcg bedtime) are not FDA-approved regimens and lack controlled dose-ranging validation.",
    facts: [
      { label: "Type", value: "GHRH(1–29) acetate", icon: "type" },
      { label: "Half-life", value: "~11–12 min (historical)", icon: "flask" },
      { label: "Historical dose", value: "30 mcg/kg SC nightly", icon: "weight" },
      { label: "Current status", value: "No marketed approved product", icon: "clock" },
    ],
    benefits: [
      "Historical pediatric Geref: 30 mcg/kg SC bedtime",
      "Diagnostic challenge: 1 mcg/kg IV once",
      "Doubling to 60 mcg/kg/day did not clearly improve growth",
      "Adult studies: 0.5–2 mg exposures in small cohorts",
      "Online 100–500 mcg schedules are anecdotal clinic conventions",
    ],
    howItWorks:
      "Sermorelin binds the GHRH receptor to stimulate endogenous pulsatile GH release. Short plasma half-life and low SC bioavailability shaped daily/divided research schedules. Response depends on pituitary reserve; results from tesamorelin or CJC-1295 should not be transferred.",
    mechanisms: [
      {
        title: "GHRH receptor agonist",
        tone: "purple",
        points: [
          "Native-sequence GHRH(1–29)-NH2",
          "Upstream of GH / IGF-1",
          "Not recombinant somatropin",
        ],
      },
      {
        title: "Historical clinical use",
        tone: "green",
        points: [
          "1 mcg/kg IV diagnostic challenge",
          "30 mcg/kg SC pediatric treatment",
          "Products discontinued; compounding ≠ approval",
        ],
      },
      {
        title: "Modern adult protocols",
        tone: "orange",
        points: [
          "Often 200–300 mcg nightly",
          "Below many published adult mg exposures",
          "No controlled wellness dose optimization",
        ],
      },
    ],
    resultBars: [
      "Historically Approved · Discontinued",
      "No Current Adult Approved Dose",
      "Clinic mcg Schedules Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Historical Geref experience: injection-site reactions in ~1/6, hypothyroidism in 6.5% of clinical-study participants, anti-GRF antibodies common in pediatric research. Compounded-product quality cannot be inferred from old Geref data. WADA prohibits GHRH analogues.",
    dosage:
      "No currently marketed FDA-approved dosage. Historical pediatric treatment was 30 mcg/kg SC once daily at bedtime; diagnostic use was 1 mcg/kg IV once. Published adult experiments generally used 0.5–2 mg per administration. Current clinic 100–500 mcg schedules are anecdotal conventions.",
    glance: [
      { label: "Current FDA product", value: "None marketed", highlight: true },
      { label: "Historical pediatric", value: "30 mcg/kg SC nightly" },
      { label: "Historical diagnostic", value: "1 mcg/kg IV once" },
      { label: "Adult experiments", value: "0.5–2 mg / admin" },
      { label: "Online adult range", value: "100–500 mcg (anecdotal)" },
      { label: "Half-life", value: "~11–12 minutes" },
      { label: "WADA", value: "Prohibited GHRF" },
    ],
    compare: {
      columns: ["Historical Geref", "Adult experiments", "Clinic protocols"],
      highlight: 0,
      rows: [
        {
          feature: "Dose",
          values: [
            "30 mcg/kg SC or 1 mcg/kg IV",
            "0.5–2 mg per administration",
            "Usually 100–500 mcg fixed",
          ],
        },
        {
          feature: "FDA status",
          values: [
            "Historically approved · discontinued",
            "Investigational / off-label research",
            "Compounded · not approved",
          ],
        },
        {
          feature: "Population",
          values: [
            "Children (GHD) / diagnostic",
            "Older men; HIV lipodystrophy",
            "Heterogeneous adult wellness users",
          ],
        },
        {
          feature: "Evidence",
          values: [
            "Strong historical regulatory basis",
            "Low–moderate small studies",
            "Low — no dose optimization trials",
          ],
        },
      ],
    },
    research: [
      {
        tag: "FDA",
        title: "Geref not withdrawn for safety or effectiveness",
        summary: "Federal Register determination after product discontinuation.",
        cite: "Federal Register, 2013",
        href: "https://www.federalregister.gov/documents/2013/03/04/2013-04827/determination-that-geref-sermorelin-acetate-injection-05-milligrams-basevial-and-10-milligrams",
      },
      {
        tag: "Pediatric",
        title: "Once-daily SC GHRH(1–29) in GH-deficient children",
        summary: "30 mcg/kg bedtime; height velocity improvements in open-label study.",
        cite: "JCEM, 1996",
        href: "https://pubmed.ncbi.nlm.nih.gov/8772599/",
      },
      {
        tag: "Adult",
        title: "GHRH(1–29) twice daily in healthy older men",
        summary: "0.5 or 1 mg BID × 14 days increased GH/IGF-1.",
        cite: "JCEM, 1992",
        href: "https://pubmed.ncbi.nlm.nih.gov/1379256/",
      },
      {
        tag: "Adult",
        title: "Nightly GHRH(1–29) in healthy elderly men",
        summary: "2 mg nightly × 6 weeks ↑ nocturnal GH; not IGF-1 or body composition.",
        cite: "Metabolism, 1997",
        href: "https://pubmed.ncbi.nlm.nih.gov/9005976/",
      },
      {
        tag: "RCT",
        title: "GHRH in HIV lipodystrophy",
        summary: "1 mg q12h × 12 weeks improved IGF-1 and trunk-fat measures.",
        cite: "JAMA, 2004",
        href: "https://jamanetwork.com/journals/jama/fullarticle/199086",
      },
    ],
  }),
  "igf-1-lr3": makePeptide({
    slug: "igf-1-lr3",
    name: "IGF-1 LR3",
    pageTitle:
      "IGF-1 LR3 Dosage Guide: Research Doses, Protocols, and Safety",
    goalSlug: "build-muscle",
    goalLabel: "Build Muscle",
    rankBadge: "Long R3 IGF-I · No Human Dose",
    summary:
      "Evidence-based IGF-1 LR3 dosage review separating animal research, commonly reported protocols, half-life claims, mecasermin data, safety, and regulatory status. No FDA-approved or human clinical dose identified.",
    rating: "4.4",
    reviewCount: "410",
    researchedBadge: "Not FDA Approved · Preclinical Only",
    tags: [
      "Long R3 IGF-I",
      "No Human Dose",
      "≠ Mecasermin",
      "WADA Prohibited",
    ],
    dosageGuide: IGF1_LR3_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "No human dose",
        body: "No dedicated human dose-ranging or PK study identified for exact LR3.",
      },
      {
        label: "≠ Increlex",
        body: "Mecasermin is native rhIGF-1. Do not transfer approved mg/kg dosing to LR3.",
      },
      {
        label: "“Long” ≠ long t½",
        body: "Name refers to a 13-aa extension. Online 20–30 h half-life lacks human PK support.",
      },
    ],
    about:
      "IGF-1 LR3 (Long R3 IGF-I) is an 83-amino-acid engineered IGF-1 analogue with reduced IGFBP binding. It is not FDA approved and has no established human dosage. Published administration literature is preclinical. Online 20–100 mcg/day protocols are anecdotal. Hypoglycemia is a central hazard; insulin combinations are especially dangerous.",
    facts: [
      { label: "Type", value: "83-aa IGF-1 analogue", icon: "type" },
      { label: "Human dose", value: "None established", icon: "weight" },
      { label: "≠ Mecasermin", value: "Different molecule", icon: "flask" },
      { label: "FDA Status", value: "Not approved", icon: "clock" },
    ],
    benefits: [
      "Preclinical: reduced IGFBP binding; endpoint-dependent potency vs IGF-1",
      "No human clinical dose, PK, or MTD identified",
      "Online 20–100 mcg/day is anecdotal convention",
      "Rat data: faster plasma clearance than native IGF-1",
      "WADA prohibits IGF-1 and analogues at all times",
    ],
    howItWorks:
      "LR3 activates the IGF-1 receptor while binding several IGFBPs much less avidly than native IGF-1. That can increase free receptor availability and measured potency in some models, while accelerating plasma clearance in rats. Insulin-like metabolic activity makes hypoglycemia a foreseeable hazard. Broad tissue effects in animals argue against a muscle-only interpretation.",
    mechanisms: [
      {
        title: "IGF-1 receptor agonist",
        tone: "purple",
        points: [
          "PI3K–Akt–mTOR and MAPK pathways",
          "Growth and metabolic signaling",
          "Not recombinant native IGF-1",
        ],
      },
      {
        title: "Reduced IGFBP binding",
        tone: "green",
        points: [
          "N-terminal extension + Arg3",
          "Can raise free activity in some systems",
          "Rats: faster plasma removal than IGF-1",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No human dose-finding trial",
          "20–100 mcg/day unvalidated",
          "Mecasermin dosing not transferable",
        ],
      },
    ],
    resultBars: [
      "No Human Clinical Dose",
      "Preclinical Activity Shown",
      "Online mcg Protocols Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No controlled human LR3 adverse-event rates exist. Hypoglycemia is the central foreseeable risk (animal glucose-lowering; mecasermin documents severe hypo/seizures for native IGF-1). Insulin stacks are especially hazardous. Organ-weight changes in animals and IGF-axis neoplasia cautions apply as context—not LR3 incidence rates.",
    dosage:
      "There is no FDA-approved or clinically established human dosage. No dedicated human dose-ranging study was identified. Online sources commonly report 20–100 mcg/day for 4–6 weeks—anecdotal conventions only. Animal research used very different species-specific exposures and must not be converted into a human protocol.",
    glance: [
      { label: "FDA-approved dose", value: "None", highlight: true },
      { label: "Human trial dose", value: "None identified" },
      { label: "Online range", value: "≈20–100 mcg/day (anecdotal)" },
      { label: "Human half-life", value: "Unknown" },
      { label: "≠ Mecasermin", value: "Do not transfer Increlex dosing" },
      { label: "Key hazard", value: "Hypoglycemia" },
      { label: "WADA", value: "Prohibited IGF analogue" },
    ],
    compare: {
      columns: ["IGF-1 LR3", "Mecasermin", "Online protocols"],
      highlight: 0,
      rows: [
        {
          feature: "Molecule",
          values: [
            "83-aa Long R3 analogue",
            "70-aa rhIGF-1",
            "Assumes LR3 identity",
          ],
        },
        {
          feature: "Human dose evidence",
          values: ["None identified", "Labeled pediatric mg/kg BID", "Anecdotal mcg/day"],
        },
        {
          feature: "FDA status",
          values: ["Not approved", "Approved (narrow indication)", "Unapproved products"],
        },
        {
          feature: "Key limit",
          values: [
            "No human PK/dose-finding",
            "Not an LR3 dose chart",
            "Very low evidence quality",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Clearance",
        title: "IGFBP interactions, plasma clearance, and biological activity",
        summary: "LR3 cleared faster than native IGF-1 in rat comparisons.",
        cite: "Growth Regulation, 1993",
        href: "https://pubmed.ncbi.nlm.nih.gov/7683526/",
      },
      {
        tag: "Potency",
        title: "Infused IGF-I analogues after injection or continuous infusion in rats",
        summary: "Schedule and endpoint affect relative potency vs IGF-1.",
        cite: "J Endocrinol, 1996",
        href: "https://pubmed.ncbi.nlm.nih.gov/8708565/",
      },
      {
        tag: "Glucose",
        title: "Acute hypoglycemic potency of low-IGFBP-affinity IGF-I analogues",
        summary: "Greater hypoglycemic activity than native IGF-1 in animals.",
        cite: "J Endocrinol, 1997",
        href: "https://pubmed.ncbi.nlm.nih.gov/9415072/",
      },
      {
        tag: "FDA",
        title: "Increlex (mecasermin) prescribing information",
        summary: "Approved rhIGF-1 — biological warning signal, not LR3 dosing.",
        cite: "DailyMed",
        href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=a8b27a1b-a611-4f91-ad22-76d4b390c3ae",
      },
      {
        tag: "WADA",
        title: "IGF-1 prohibited substance statement",
        summary: "IGF-1 and analogues prohibited; detection includes Long R3.",
        cite: "WADA",
        href: "https://www.wada-ama.org/en/news/wada-statement-prohibited-substance-igf-1",
      },
    ],
  }),
  "cjc-1295-no-dac-ipamorelin": makePeptide({
    slug: "cjc-1295-no-dac-ipamorelin",
    name: "CJC-1295 (No DAC) + Ipamorelin",
    pageTitle: "CJC-1295 No DAC + Ipamorelin Dosage and Evidence",
    goalSlug: "build-muscle",
    goalLabel: "Build Muscle",
    rankBadge: "Combination · No Exact Trial",
    summary:
      "Compare commonly reported CJC-1295 No DAC and ipamorelin doses with the human evidence, combination ratios, timing claims, safety gaps, and regulatory status. No controlled human trial of the exact combination was identified.",
    rating: "4.5",
    reviewCount: "640",
    researchedBadge: "Not FDA Approved · Exact Combo Unstudied",
    tags: [
      "Modified GRF 1-29",
      "Exact Combo: None",
      "Anecdotal 100/100–300",
      "≠ CJC-1295 DAC",
    ],
    dosageGuide: CJC_IPA_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Exact combo",
        body: "No controlled human trial of Modified GRF 1-29 plus ipamorelin was identified.",
      },
      {
        label: "≠ DAC",
        body: "Confirm No DAC. Weekly CJC-1295 DAC studies cannot transfer to this pairing.",
      },
      {
        label: "Anecdotal range",
        body: "Commonly ~100 mcg Mod GRF + 100–300 mcg ipamorelin SC — community convention only.",
      },
    ],
    about:
      "CJC-1295 (No DAC) plus ipamorelin is a mechanistically plausible GHRH + GHS-R1a pairing with no FDA-approved dosage and no exact-combination human dose-finding trial identified. Online 100/100–100/300 mcg protocols are anecdotal. Adjacent GHRH/GHRP synergy studies used different molecules.",
    facts: [
      { label: "Type", value: "GHRH + GHS blend", icon: "type" },
      { label: "Exact combo trial", value: "None identified", icon: "flask" },
      { label: "Online pairing", value: "~100 / 100–300 mcg", icon: "weight" },
      { label: "FDA status", value: "Not approved", icon: "clock" },
    ],
    benefits: [
      "Documents component research separately from anecdotal blend protocols",
      "Keeps IV ipamorelin clinical doses separate from SC combination tables",
      "Labels 100/100–100/300 mcg pairings as anecdotal research protocols",
      "Warns against substituting CJC-1295 DAC evidence",
      "No reconstitution calculator — no validated target dose exists",
    ],
    howItWorks:
      "Modified GRF 1-29 (CJC-1295 No DAC) targets the GHRH receptor while ipamorelin targets GHS-R1a. Complementary pathway stimulation can produce larger GH pulses in class-level human experiments with other GHRH/GHRP pairs, but no controlled trial established dose, ratio, timing, or chronic safety for this exact marketed combination.",
    mechanisms: [
      {
        title: "GHRH pathway (No DAC)",
        tone: "purple",
        points: [
          "Modified GRF 1-29 targets GHRH receptors",
          "Promotes GH synthesis and release",
          "Exact-molecule human PK not identified by FDA",
        ],
      },
      {
        title: "GHS-R1a (Ipamorelin)",
        tone: "blue",
        points: [
          "Ghrelin-receptor secretagogue",
          "Human IV PK/PD and short postoperative trials",
          "Does not validate fixed SC blend doses",
        ],
      },
      {
        title: "Class synergy (adjacent)",
        tone: "teal",
        points: [
          "GHRH + GHRP-6 / hexarelin show acute synergy",
          "Different molecules than this marketed pair",
          "Does not establish ratio, timing, or chronic safety",
        ],
      },
    ],
    resultBars: [
      "Exact Combo Trial: None",
      "Component IV Evidence Only",
      "Online Pairings Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Exact-combination adverse-event rates for chronic subcutaneous use are unknown. Ipamorelin IV postoperative trial signals are not transferable. GH/IGF-1 class concerns include fluid retention, CTS-like symptoms, glucose changes, and neoplasia caution. FDA flagged compounding-safety concerns for both peptides. WADA prohibits GHRFs and GH secretagogues.",
    dosage:
      "There is no FDA-approved or clinically established combination dosage. No controlled human trial of the exact pairing was identified. Online sources commonly report about 100 mcg Modified GRF 1-29 plus 100–300 mcg ipamorelin per administration (often 100/200 mcg), once to three times daily SC for 8–16 weeks—anecdotal conventions only.",
    glance: [
      { label: "FDA-approved combo dose", value: "None", highlight: true },
      { label: "Exact combo human trial", value: "None identified" },
      { label: "Common online pairing", value: "~100 / 100–300 mcg" },
      { label: "Most repeated shorthand", value: "100/200 mcg" },
      { label: "≠ CJC-1295 DAC", value: "Do not transfer weekly DAC data" },
      { label: "Evidence quality", value: "Low / insufficient" },
      { label: "WADA", value: "GHRF + GHS prohibited" },
    ],
    compare: {
      title: "Compare related options",
      columns: ["This combo", "CJC-1295 No DAC alone", "Ipamorelin alone"],
      highlight: 0,
      rows: [
        {
          feature: "Exact human combo trial",
          values: ["None identified", "N/A (monotherapy page)", "N/A (IV mono)"],
        },
        {
          feature: "Primary evidence",
          values: [
            "Anecdotal SC pairings + adjacent synergy",
            "No exact no-DAC clinical dose",
            "IV PK/PD and postoperative trials",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "No ratio, route, or chronic safety data",
            "Online mcg schedules unvalidated",
            "IV ≠ SC blend conversion",
          ],
        },
      ],
    },
    research: [
      {
        tag: "FDA",
        title: "CJC-1295-related bulk drug substances review",
        summary: "No peer-reviewed clinical data for free base/acetate.",
        cite: "FDA, 2024",
        href: "https://www.fda.gov/media/183819/download",
      },
      {
        tag: "FDA",
        title: "Ipamorelin acetate scientific review",
        summary: "IV clinical signals; SC safety not established.",
        cite: "FDA, 2024",
        href: "https://www.fda.gov/media/182088/download",
      },
      {
        tag: "PK/PD",
        title: "Pharmacokinetic-pharmacodynamic modeling of ipamorelin",
        summary: "IV single-dose GH response; ~2 h terminal half-life.",
        cite: "Gobburu et al., 1999",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
      {
        tag: "Trial",
        title: "Ipamorelin for postoperative ileus",
        summary: "Did not meet primary endpoints; not a combo study.",
        cite: "Beck et al., 2014",
        href: "https://pubmed.ncbi.nlm.nih.gov/25331030/",
      },
      {
        tag: "Synergy",
        title: "GHRH plus GHRP-6 / hexarelin synergy",
        summary: "Class-level acute synergy — different molecules.",
        cite: "Adjacent human experiments",
        href: "https://pubmed.ncbi.nlm.nih.gov/7734029/",
      },
    ],
  }),
  adamax: makePeptide({
    slug: "adamax",
    name: "Adamax",
    pageTitle: "Adamax Dosage: Research Protocols and Evidence",
    goalSlug: "improve-focus",
    goalLabel: "Improve Focus",
    rankBadge: "Designer Semax Analog · No Human Dose",
    summary:
      "Review reported Adamax doses, intranasal and subcutaneous protocols, titration schedules, cycle lengths, mechanism, safety, and the limits of current evidence. No Adamax-specific human trial identified.",
    rating: "4.3",
    reviewCount: "210",
    researchedBadge: "Not FDA Approved · Anecdotal Protocols",
    tags: [
      "Semax Derivative",
      "No Human Trial",
      "100–300 mcg (anecdotal)",
      "Identity First",
    ],
    dosageGuide: ADAMAX_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "No human dose",
        body: "No PK, dose-ranging, efficacy, or safety trial of Adamax was identified.",
      },
      {
        label: "Identity first",
        body: "“AG” may mean adamantylated glycine or ordinary Ala-Gly — verify structure.",
      },
      {
        label: "≠ Semax dosing",
        body: "Parent-peptide research is context only. Do not convert Semax doses directly.",
      },
    ],
    about:
      "Adamax is a designer Semax derivative usually described as N-acetylated MEHFPGP with an adamantane-linked terminal modification and C-terminal amidation. It has no standardized clinical dosage and no Adamax-specific human trial identified. Online 100–300 mcg daily protocols (IN or SC) are anecdotal research conventions.",
    facts: [
      { label: "Type", value: "Designer Semax analog", icon: "type" },
      { label: "Human dose", value: "None established", icon: "weight" },
      { label: "Online range", value: "≈100–300 mcg/day", icon: "flask" },
      { label: "FDA status", value: "Not approved", icon: "clock" },
    ],
    benefits: [
      "Documents 100–300 mcg anecdotal IN and SC conventions",
      "Separates Semax parent evidence from Adamax claims",
      "Flags AG / adamantane identity ambiguity",
      "Eight-week 100→200→300 mcg SC schedule labeled anecdotal",
      "No claim of clinical efficacy or validated maximum dose",
    ],
    howItWorks:
      "Proposed mechanisms are largely inferred from Semax: neurotrophic/BDNF-related signaling, monoamine regulation after experimental stress or injury, and melanocortin-fragment neuroactivity without full ACTH endocrine effects. Adamax-specific receptor profiling, bioavailability, and half-life have not been established in published human studies.",
    mechanisms: [
      {
        title: "Design claims",
        tone: "purple",
        points: [
          "N-acetylation + C-amidation",
          "Adamantane-linked terminal group",
          "Intended stability / lipophilicity changes",
        ],
      },
      {
        title: "Inferred from Semax",
        tone: "blue",
        points: [
          "BDNF / neurotrophic signaling (animals)",
          "Monoamine system research domains",
          "Not proven cognitive enhancement in healthy humans",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No Adamax human trial",
          "No Adamax animal dose study identified",
          "Supplier specs often inconsistent",
        ],
      },
    ],
    resultBars: [
      "No Human Clinical Dose",
      "Parent Peptide Context Only",
      "Online mcg Protocols Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Adamax-specific adverse-event rates are unknown. Community or class mentions include headache, nasal or injection-site irritation, restlessness or anxiety, fatigue, nausea, sleep disruption, and mood changes. Product identity (adamantane vs ordinary AG) is itself a major safety variable. Neurological conditions should not be self-treated with an uncharacterized research peptide.",
    dosage:
      "There is no standardized clinical dosage. No Adamax-specific human trial was identified. Online sources most consistently report 100–300 mcg per day. A frequently repeated subcutaneous schedule uses 100 mcg/day for weeks 1–2, 200 mcg/day for weeks 3–4, and 300 mcg/day for weeks 5–8, followed by a 2–4-week washout. Intranasal protocols commonly use 100–300 mcg/day for 2–4 weeks. Both are anecdotal research conventions.",
    glance: [
      { label: "Human trial dose", value: "None identified", highlight: true },
      { label: "Common online range", value: "100–300 mcg/day" },
      { label: "Common SC schedule", value: "100 → 200 → 300 mcg / 8 wks" },
      { label: "Common IN schedule", value: "100–300 mcg/day · 2–4 wks" },
      { label: "≠ Semax conversion", value: "No reliable dose conversion" },
      { label: "Identity", value: "Verify adamantane / “AG” meaning" },
      { label: "Evidence quality", value: "Anecdotal / insufficient" },
    ],
    compare: {
      columns: ["Adamax", "Semax", "Online protocols"],
      highlight: 0,
      rows: [
        {
          feature: "Human dose evidence",
          values: [
            "None identified",
            "Studied / registered in some regions",
            "Anecdotal mcg schedules",
          ],
        },
        {
          feature: "Molecule",
          values: [
            "Adamantane-modified Semax design",
            "MEHFPGP parent peptide",
            "Assumes Adamax identity",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "No PK/dose-finding; identity ambiguous",
            "Not an Adamax dose chart",
            "Low / insufficient evidence",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Chemistry",
        title: "Influence of N-terminal acetylation on Semax chemistry",
        summary: "Acetylation changes Semax properties — not Adamax PK.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/27586814/",
      },
      {
        tag: "Parent peptide",
        title: "Semax as an ACTH(4–10) analog",
        summary: "Background only; not Adamax dosing.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/16996699/",
      },
      {
        tag: "Routes",
        title: "Semax after intranasal and intraperitoneal administration",
        summary: "Animal Semax route comparison — not Adamax.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/21268834/",
      },
      {
        tag: "Review",
        title: "Peptides acting as cognitive enhancers",
        summary: "Broader cognitive-peptide context.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/29030286/",
      },
    ],
  }),
  klow: makePeptide({
    slug: "klow",
    name: "KLOW",
    pageTitle: "KLOW Peptide Dosage: Complete 80 mg Blend Protocol",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "4-Peptide Blend · No Exact Trial",
    summary:
      "Review the KLOW peptide dosage, 50/10/10/10 composition, per-component amounts, reconstitution math, 12-week research protocol, evidence, and safety. Exact four-peptide blend unstudied in controlled trials.",
    rating: "4.4",
    reviewCount: "380",
    researchedBadge: "Not FDA Approved · Anecdotal Blend Protocol",
    tags: [
      "GHK-Cu + KPV + BPC + TB-500",
      "5:1:1:1 Fixed Ratio",
      "Exact Combo: None",
      "≠ GLOW",
    ],
    dosageGuide: KLOW_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "80 mg vial",
        body: "50 mg GHK-Cu + 10 mg each KPV, BPC-157, and TB-500 (5:1:1:1).",
      },
      {
        label: "Exact combo",
        body: "No controlled human or animal dose-ranging study of the blend identified.",
      },
      {
        label: "Always 4 amounts",
        body: "2 mg total = 1.25 mg GHK-Cu + 250 mcg each other peptide.",
      },
    ],
    about:
      "KLOW is a fixed-ratio commercial blend of GHK-Cu, KPV, BPC-157, and TB-500 (typically Ac-LKKTETQ). It adds KPV to the three-peptide GLOW concept. Community protocols most often use 2–4 mg total blend subcutaneously; a coherent 12-week front-loaded schedule is widely repeated. No exact-combination clinical trial was identified.",
    facts: [
      { label: "Type", value: "4-peptide blend", icon: "type" },
      { label: "Standard vial", value: "80 mg (50/10/10/10)", icon: "flask" },
      { label: "Common draw", value: "2–4 mg total", icon: "weight" },
      { label: "Exact combo trial", value: "None identified", icon: "clock" },
    ],
    benefits: [
      "Documents authentic 50/10/10/10 composition and mass ratio",
      "Translates every total-mg draw into four component amounts",
      "Separates component human evidence from blend claims",
      "Labels 12-week front-loaded schedule as community convention",
      "Flags TB-500 ≠ full-length thymosin beta-4",
    ],
    howItWorks:
      "KLOW assigns overlapping repair-narrative roles: KPV for inflammatory/epithelial signaling, GHK-Cu for matrix and copper-related repair literature, BPC-157 for vascular/tendon/gut preclinical pathways, and TB-500 fragment for actin-associated migration. Coadministration interactions and additive benefit are unproven for the fixed blend.",
    mechanisms: [
      {
        title: "Fixed-ratio blend",
        tone: "purple",
        points: [
          "Every draw preserves 5:1:1:1 by mass",
          "Cannot adjust one peptide alone",
          "Convenience vs experimental control",
        ],
      },
      {
        title: "Component themes",
        tone: "blue",
        points: [
          "GHK-Cu: ECM / topical wound literature",
          "KPV: inflammation models; no human exposure study",
          "BPC-157 / TB-500: mostly preclinical repair signaling",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No exact-blend PK or efficacy trial",
          "Topical GHK-Cu ≠ injectable KLOW",
          "Full-length Tβ4 ≠ TB-500 fragment",
        ],
      },
    ],
    resultBars: [
      "Exact Blend Trial: None",
      "Component Evidence Mixed",
      "2–4 mg Protocols Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No exact-combination adverse-event rates exist. Community mentions include injection-site reactions, headache, fatigue, and nausea. GHK-Cu contributes copper; angiogenesis-related concerns apply as class context. Fixed-ratio blends prevent isolating which component caused a reaction. BPC-157 and thymosin beta-4 derivatives are WADA prohibited.",
    dosage:
      "There is no clinically established KLOW dose. Community protocols most consistently use 2–4 mg total blend subcutaneously. A coherent 12-week schedule uses 4 mg five times weekly for weeks 1–4, then 2 mg three times weekly for weeks 5–12, then a 4–8-week washout (≈128 mg total blend). Always convert total milligrams into four component amounts for a 50/10/10/10 vial.",
    glance: [
      { label: "Exact combo trial", value: "None identified", highlight: true },
      { label: "Standard vial", value: "80 mg · 50/10/10/10" },
      { label: "Common draw", value: "2–4 mg total blend" },
      { label: "At 2 mg total", value: "1.25 mg GHK-Cu + 250 mcg ×3" },
      { label: "At 4 mg total", value: "2.5 mg GHK-Cu + 500 mcg ×3" },
      { label: "Common cycle", value: "8–12 weeks + 4–8 off" },
      { label: "WADA", value: "Contains prohibited components" },
    ],
    compare: {
      columns: ["KLOW", "GLOW", "Separate vials"],
      highlight: 0,
      rows: [
        {
          feature: "Composition",
          values: [
            "GHK-Cu + KPV + BPC + TB-500",
            "GHK-Cu + BPC + TB-500",
            "Independent amounts",
          ],
        },
        {
          feature: "Typical vial",
          values: ["80 mg (50/10/10/10)", "Often ~70 mg total", "Per product"],
        },
        {
          feature: "Key limit",
          values: [
            "Fixed ratio; blend unstudied",
            "Also unstudied as a fixed blend",
            "More control; more variables",
          ],
        },
      ],
    },
    research: [
      {
        tag: "FDA",
        title: "July 2026 Pharmacy Compounding Advisory Committee",
        summary: "Advisory votes on components — not KLOW blend dosing.",
        cite: "FDA",
        href: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
      },
      {
        tag: "GHK-Cu",
        title: "Regenerative and protective actions of GHK-Cu",
        summary: "Topical/lab context — not injectable blend dosing.",
        cite: "Pickart & Margolina, 2018",
        href: "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      },
      {
        tag: "TB-500",
        title: "Identification of Ac-LKKTETQ in TB-500 products",
        summary: "Fragment identity ≠ full-length thymosin beta-4.",
        cite: "Esposito et al., 2012",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
      {
        tag: "KPV",
        title: "KPV in murine colitis / PepT1 transport",
        summary: "Preclinical — no human KPV exposure study identified.",
        cite: "Dalmasso / Brzoska, 2008",
        href: "https://pubmed.ncbi.nlm.nih.gov/18061177/",
      },
      {
        tag: "WADA",
        title: "2026 Prohibited List",
        summary: "BPC-157 and Tβ4 derivatives prohibited.",
        cite: "WADA",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  }),
  glow: makePeptide({
    slug: "glow",
    name: "GLOW",
    pageTitle: "GLOW Peptide Dosage: Complete 70 mg Blend Protocol",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "3-Peptide Blend · No Exact Trial",
    summary:
      "Review the GLOW peptide dosage, 50/10/10 composition, per-component amounts, reconstitution charts, four- and 12-week protocols, evidence, and safety. Exact three-peptide blend unstudied in controlled trials.",
    rating: "4.4",
    reviewCount: "420",
    researchedBadge: "Not FDA Approved · Anecdotal Blend Protocol",
    tags: [
      "GHK-Cu + BPC + TB-500",
      "5:1:1 Fixed Ratio",
      "Exact Combo: None",
      "≠ KLOW",
    ],
    dosageGuide: GLOW_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "70 mg vial",
        body: "50 mg GHK-Cu + 10 mg BPC-157 + 10 mg TB-500 (5:1:1).",
      },
      {
        label: "Exact combo",
        body: "No controlled human or animal dose-ranging study of the blend identified.",
      },
      {
        label: "Common daily",
        body: "≈2.33 mg total ≈ 1.67 mg GHK-Cu + 333 mcg each repair peptide.",
      },
    ],
    about:
      "GLOW is a fixed-ratio commercial blend of GHK-Cu, BPC-157, and TB-500 (typically Ac-LKKTETQ). Community protocols most often use about 2.33 mg total blend daily for four weeks, or longer frequency-taper schedules. No exact-combination clinical trial was identified. KLOW adds KPV and uses an 80 mg vial.",
    facts: [
      { label: "Type", value: "3-peptide blend", icon: "type" },
      { label: "Standard vial", value: "70 mg (50/10/10)", icon: "flask" },
      { label: "Common draw", value: "≈2.33–3.5 mg", icon: "weight" },
      { label: "Exact combo trial", value: "None identified", icon: "clock" },
    ],
    benefits: [
      "Documents authentic 50/10/10 composition and mass ratio",
      "Translates every total-mg draw into three component amounts",
      "Separates component human evidence from blend claims",
      "Labels 4-week daily and 12-week taper schedules as community conventions",
      "Flags TB-500 ≠ full-length thymosin beta-4",
    ],
    howItWorks:
      "GLOW assigns overlapping repair-narrative roles: GHK-Cu for matrix and copper-related repair literature, BPC-157 for vascular/tendon/gut preclinical pathways, and TB-500 fragment for actin-associated migration. Coadministration interactions and additive benefit are unproven for the fixed blend.",
    mechanisms: [
      {
        title: "Fixed-ratio blend",
        tone: "purple",
        points: [
          "Every draw preserves 5:1:1 by mass",
          "Cannot adjust one peptide alone",
          "Convenience vs experimental control",
        ],
      },
      {
        title: "Component themes",
        tone: "blue",
        points: [
          "GHK-Cu: ECM / topical wound literature",
          "BPC-157: mostly rodent repair signaling",
          "TB-500 fragment: preclinical actin/migration",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No exact-blend PK or efficacy trial",
          "Topical GHK-Cu ≠ injectable GLOW",
          "Full-length Tβ4 ≠ TB-500 fragment",
        ],
      },
    ],
    resultBars: [
      "Exact Blend Trial: None",
      "Component Evidence Mixed",
      "≈2.33 mg Protocols Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No exact-combination adverse-event rates exist. Community mentions include injection-site reactions, headache, fatigue, nausea, and flushing. GHK-Cu contributes more than 70% of blend mass (copper context). Fixed-ratio blends prevent isolating which component caused a reaction. BPC-157 and thymosin beta-4 derivatives are WADA prohibited.",
    dosage:
      "There is no clinically established GLOW dose. The most repeated daily community protocol is approximately 2.33 mg total blend subcutaneously for four weeks (with 3 mL diluent ≈ 10 U-100 units), delivering about 1.67 mg GHK-Cu and 333 mcg each of BPC-157 and TB-500. Longer protocols and 3.5 mg schedules also circulate. Always convert total milligrams into three component amounts for a 50/10/10 vial.",
    glance: [
      { label: "Exact combo trial", value: "None identified", highlight: true },
      { label: "Standard vial", value: "70 mg · 50/10/10" },
      { label: "Common daily", value: "≈2.33 mg total blend" },
      { label: "At 2.33 mg", value: "≈1.67 mg GHK-Cu + 333 mcg ×2" },
      { label: "At 3.5 mg", value: "2.5 mg GHK-Cu + 500 mcg ×2" },
      { label: "Common cycle", value: "4 weeks (+ washout)" },
      { label: "WADA", value: "Contains prohibited components" },
    ],
    compare: {
      columns: ["GLOW", "KLOW", "Separate vials"],
      highlight: 0,
      rows: [
        {
          feature: "Composition",
          values: [
            "GHK-Cu + BPC + TB-500",
            "Same three + KPV",
            "Independent amounts",
          ],
        },
        {
          feature: "Typical vial",
          values: ["70 mg (50/10/10)", "80 mg (50/10/10/10)", "Per product"],
        },
        {
          feature: "Key limit",
          values: [
            "Fixed ratio; blend unstudied",
            "Also unstudied as a fixed blend",
            "More control; more variables",
          ],
        },
      ],
    },
    research: [
      {
        tag: "FDA",
        title: "July 2026 Pharmacy Compounding Advisory Committee",
        summary: "Advisory votes on components — not GLOW blend dosing.",
        cite: "FDA",
        href: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
      },
      {
        tag: "GHK-Cu",
        title: "Regenerative and protective actions of GHK-Cu",
        summary: "Topical/lab context — not injectable blend dosing.",
        cite: "Pickart & Margolina, 2018",
        href: "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      },
      {
        tag: "TB-500",
        title: "Identification of Ac-LKKTETQ in TB-500 products",
        summary: "Fragment identity ≠ full-length thymosin beta-4.",
        cite: "Esposito et al., 2012",
        href: "https://pubmed.ncbi.nlm.nih.gov/22962027/",
      },
      {
        tag: "BPC-157",
        title: "Safety of IV BPC-157 in two adults",
        summary: "Limited human observation — not SC blend validation.",
        cite: "2025",
        href: "https://pubmed.ncbi.nlm.nih.gov/40131143/",
      },
      {
        tag: "WADA",
        title: "2026 Prohibited List",
        summary: "BPC-157 and Tβ4 derivatives prohibited.",
        cite: "WADA",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  }),
  "ghk-basic": makePeptide({
    slug: "ghk-basic",
    name: "GHK Basic",
    pageTitle:
      "GHK Basic Dosage: Research Protocol, Reconstitution, and Evidence",
    goalSlug: "skin-health",
    goalLabel: "Skin Health",
    rankBadge: "Copper-Free GHK · No Human Dose Trial",
    summary:
      "Review GHK Basic doses, copper-free GHK evidence, 50 mg vial charts, a complete six-week research protocol, topical concentrations, safety, and GHK-Cu differences.",
    rating: "4.4",
    reviewCount: "420",
    researchedBadge: "No Administered Human Dose · ≠ GHK-Cu",
    tags: [
      "Copper-Free Gly-His-Lys",
      "0.5–2 mg Community Range",
      "1 mg × 5/wk Pilot",
      "≠ GHK-Cu",
    ],
    dosageGuide: GHK_BASIC_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "Apo Gly-His-Lys (Tripeptide-1 / prezatide). White/off-white — not the blue copper complex.",
      },
      {
        label: "Human dose",
        body: "None identified. Cell work used 1–10 nM; community injections cluster at 0.5–2 mg.",
      },
      {
        label: "Proposed pilot",
        body: "1 mg free-GHK equivalent 5×/week × 6 weeks (30 mg cumulative), then 4 weeks off.",
      },
    ],
    about:
      "GHK Basic is copper-free glycyl-L-histidyl-L-lysine — chemically and evidentially distinct from GHK-Cu. “Basic” means apo peptide, not alkaline pH. No administered human dose-finding trial was identified. Community protocols most often use 0.5–2 mg per administration; a reproducible lower-exposure pilot design uses 1 mg five days weekly for six weeks (30 mg cumulative). Free-base and monoacetate labels can differ in peptide-equivalent content (~0.85 mg peptide per 1 mg salt if labeled as total monoacetate).",
    facts: [
      { label: "Type", value: "Copper-free tripeptide", icon: "type" },
      { label: "Free-base MW", value: "≈340.38 g/mol", icon: "flask" },
      { label: "Common community", value: "0.5–2 mg / admin", icon: "weight" },
      { label: "Human dose trial", value: "None identified", icon: "clock" },
    ],
    benefits: [
      "Separates GHK Basic from GHK-Cu and acetate-salt labeling traps",
      "Documents absence of administered human dose-finding evidence",
      "Fixed 6-week lower-exposure pilot with cumulative accounting",
      "50 mg vial reconstitution charts and same-units warnings",
      "Topical concentration conventions vs GHK-Cu misattribution",
    ],
    howItWorks:
      "Reported actions involve metal coordination, extracellular-matrix remodeling, TGF-β/fibrosis-related signaling, and antioxidant chemistry. Cell and animal signals do not establish a systemic human dose. Apo GHK can bind copper in vitro — that does not quantify in-vivo conversion to GHK-Cu after injection.",
    mechanisms: [
      {
        title: "Copper-free identity",
        tone: "purple",
        points: [
          "Apo Gly-His-Lys — no intentional pre-complexed copper",
          "White/off-white vs blue GHK-Cu",
          "Acetate salt mass ≠ free-peptide mass without assay basis",
        ],
      },
      {
        title: "Evidence layers",
        tone: "blue",
        points: [
          "1–10 nM human-cell concentrations",
          "Endpoint-specific animal IP schedules",
          "Community 0.5–2 mg SC conventions — unvalidated",
        ],
      },
      {
        title: "Research pilot",
        tone: "orange",
        points: [
          "1 mg free-GHK eq · 5×/week · 6 weeks",
          "30 mg cumulative · 4-week follow-up",
          "No escalation; missed doses skipped",
        ],
      },
    ],
    resultBars: [
      "Human Dose Trial: None",
      "Cell Signal: Moderate (narrow)",
      "Community SC: Very Low",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Human adverse-event rates are unknown. Community reports mention local stinging, redness, swelling, itching, bruising, and nodules — formulation and technique may contribute. Rodent high-dose IP work reported immune suppression and hepatocyte mitotic effects — not community-dose incidence. Apo peptide can still bind endogenous metals. Product-identity errors (GHK-Cu vs Basic) are a primary preventable risk.",
    dosage:
      "No standardized human GHK Basic dose. Community injections most often use approximately 0.5–2 mg per administration (2–5×/week through daily for 4–8 weeks). A proposed lower-exposure pilot uses 1 mg free-GHK equivalent five days weekly for six weeks (30 administrations; 30 mg cumulative), then four weeks without exposure. For a 50 mg vial prepared to 2.5 mL (20 mg/mL), 1 mg = 5 U-100 units and 2 mg = 10 units — only if label, salt form, assay basis, and final volume are known.",
    glance: [
      { label: "Human administered dose", value: "None identified", highlight: true },
      { label: "Community range", value: "≈0.5–2 mg / admin" },
      { label: "Proposed pilot", value: "1 mg · 5×/wk · 6 wk" },
      { label: "Cumulative (pilot)", value: "30 mg free-GHK eq" },
      { label: "Common recon", value: "50 mg → 2.5 mL = 20 mg/mL" },
      { label: "≠ GHK-Cu", value: "Apo peptide vs copper complex" },
      { label: "Acetate caveat", value: "~85% peptide if salt-labeled" },
    ],
    compare: {
      columns: ["GHK Basic", "GHK-Cu", "Community SC cycle"],
      highlight: 0,
      rows: [
        {
          feature: "Starting material",
          values: [
            "Copper-free Gly-His-Lys",
            "Pre-complexed copper peptide",
            "Often unclear identity/assay",
          ],
        },
        {
          feature: "Human dose evidence",
          values: [
            "None administered",
            "Limited topical; injectable none",
            "Anecdotal 0.5–2 mg",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "No PK or dose-ranging trial",
            "Do not transfer to Basic",
            "Units without final volume",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Cells",
        title: "Emphysema gene signature and GHK fibroblast remodeling",
        summary: "10 nM × 48 h in COPD-derived lung fibroblasts — not a person dose.",
        cite: "Campbell et al., 2012",
        href: "https://pubmed.ncbi.nlm.nih.gov/22937864/",
      },
      {
        tag: "Animal",
        title: "GHK and sleep-deprived learning in aging mice",
        summary: "7.5 mg/kg IP BID × 5 days — copper-free GHK; not a human regimen.",
        cite: "Rosenfeld et al., 2023",
        href: "https://pubmed.ncbi.nlm.nih.gov/37035833/",
      },
      {
        tag: "Topical",
        title: "Topically applied GHK as an anti-wrinkle peptide",
        summary: "Clinical and permeability gaps; do not assume GHK-Cu equivalence.",
        cite: "Mortazavi et al., 2024/2025",
        href: "https://pubmed.ncbi.nlm.nih.gov/39963574/",
      },
      {
        tag: "≠ GHK-Cu",
        title: "NCT07437586 topical GHK-Cu gel wound study",
        summary: "Studies GHK-Cu gel — not copper-free GHK Basic.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT07437586",
      },
      {
        tag: "Identity",
        title: "PubChem prezatide (Gly-His-Lys)",
        summary: "Free-base chemical identity record.",
        cite: "PubChem",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Prezatide",
      },
    ],
  }),
  "ghk-cu": makePeptide({
    slug: "ghk-cu",
    name: "GHK-Cu",
    pageTitle: "GHK-Cu Dosage: Injectable and Topical Protocols",
    goalSlug: "skin-health",
    goalLabel: "Skin Health",
    rankBadge: "Copper Tripeptide · Topical Human Data",
    summary:
      "Review reported GHK-Cu doses, 50 mg vial reconstitution charts, 12-week injectable protocols, topical concentrations, copper exposure math, evidence, and safety. Human evidence is strongest for topical skin research.",
    rating: "4.5",
    reviewCount: "680",
    researchedBadge: "Not FDA Approved · Topical Research; Injectable Anecdotal",
    tags: [
      "Copper Tripeptide-1",
      "Topical Human Studies",
      "Injectable: No Trial",
      "Skin & Wound Research",
    ],
    dosageGuide: GHK_CU_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "GHK-Cu complex",
        body: "One-copper Gly-His-Lys complex (~401.9 g/mol). Blue color indicates coordinated copper(II).",
      },
      {
        label: "Topical evidence",
        body: "Multiple small human skin and wound studies — usually 8–12 weeks topical use.",
      },
      {
        label: "Injectable convention",
        body: "Most repeated: 1–2 mg SC per administration. No controlled injectable trial identified.",
      },
    ],
    about:
      "GHK-Cu (copper tripeptide-1) is a copper complex of the naturally occurring tripeptide GHK. It appears widely in cosmetics and is studied for skin remodeling, wound healing, and ECM-related endpoints. Human evidence is concentrated in topical research. Widely reported subcutaneous 1–2 mg protocols are community conventions without controlled injectable validation.",
    facts: [
      { label: "Type", value: "Copper tripeptide", icon: "type" },
      { label: "Common vial", value: "50 mg lyophilized", icon: "flask" },
      { label: "Common SC draw", value: "1–2 mg", icon: "weight" },
      { label: "Human injectable trial", value: "None identified", icon: "clock" },
    ],
    benefits: [
      "Separates topical human evidence from injectable community protocols",
      "Documents 12-week 1 → 1.5 → 2 mg SC titration and 30-day alternatives",
      "Calculates stoichiometric elemental copper from complex mass",
      "Covers topical 0.5–1% research conventions and concentration tables",
      "Flags GHK vs GHK-Cu identity and assay-basis pitfalls",
    ],
    howItWorks:
      "GHK-Cu acts as a copper carrier and signaling complex influencing ECM remodeling, antioxidant systems, inflammatory signaling, and repair-associated pathways in preclinical models. Topical human studies support skin-density and wound-related endpoints. Systemic injectable pharmacokinetics and dose-response remain unestablished.",
    mechanisms: [
      {
        title: "ECM remodeling",
        tone: "purple",
        points: [
          "Collagen, elastin, and glycosaminoglycan pathways",
          "Stronger lab/topical literature",
          "Does not define injectable dose",
        ],
      },
      {
        title: "Copper delivery",
        tone: "blue",
        points: [
          "Tight copper binding buffers redox activity",
          "≈158 mcg Cu per 1 mg complex (stoichiometric)",
          "More copper ≠ necessarily beneficial",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No human injectable PK or efficacy trial",
          "Topical study concentrations often undisclosed",
          "Gene-reset and hair claims frequently overstated",
        ],
      },
    ],
    resultBars: [
      "Topical Human Studies: Moderate",
      "Injectable Trial: None",
      "1–2 mg SC: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Topical GHK-Cu is generally low-irritancy, but burning, redness, itching, or contact dermatitis can occur depending on vehicle and concentration. Community injectable reports mention injection-site stinging, redness, swelling, and bruising — incidence unknown. Caution in Wilson disease, significant liver disease, or with substantial copper supplementation. Active or recent malignancy is commonly treated as an exclusion in experimental protocols.",
    dosage:
      "There is no clinically established injectable GHK-Cu dose. The most repeated subcutaneous range is 1–2 mg per administration on daily, five-days-weekly, or three-times-weekly schedules for 4–12 weeks. A common 12-week protocol escalates 1 mg → 1.5 mg → 2 mg five days weekly (6 → 9 → 12 units with 3 mL diluent on a 50 mg vial). Topical research conventions commonly use 0.5–1% once or twice daily for 8–12 weeks.",
    glance: [
      { label: "Human injectable trial", value: "None identified", highlight: true },
      { label: "Common SC range", value: "1–2 mg per administration" },
      { label: "12-week protocol", value: "1 → 1.5 → 2 mg · 5× weekly" },
      { label: "Copper in 1 mg", value: "≈158 mcg elemental Cu" },
      { label: "Topical convention", value: "0.5–1% · 8–12 weeks" },
      { label: "Standard vial", value: "50 mg (complex mass)" },
      { label: "Strongest evidence", value: "Topical skin research" },
    ],
    compare: {
      columns: ["GHK-Cu topical", "GHK-Cu injectable", "GHK (copper-free)"],
      highlight: 0,
      rows: [
        {
          feature: "Human trial data",
          values: [
            "Multiple small skin/wound studies",
            "None identified",
            "Not interchangeable",
          ],
        },
        {
          feature: "Typical dose",
          values: ["0.5–1% topical", "1–2 mg SC (anecdotal)", "Different molecule"],
        },
        {
          feature: "Evidence quality",
          values: [
            "Moderate for narrow topical contexts",
            "Low / anecdotal",
            "Preclinical only for most claims",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Review",
        title: "Regenerative and protective actions of GHK-Cu",
        summary: "Topical and mechanistic context — not injectable dose validation.",
        cite: "Pickart & Margolina, 2018",
        href: "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      },
      {
        tag: "Wound",
        title: "Topical GHK-Cu in diabetic neuropathic ulcers",
        summary: "Human topical wound study — 1994.",
        cite: "Mulder et al.",
        href: "https://pubmed.ncbi.nlm.nih.gov/17147644/",
      },
      {
        tag: "FDA",
        title: "Bulk drug substances nominated for use in compounding",
        summary: "GHK-Cu compounding category distinctions — May 2026.",
        cite: "FDA",
        href: "https://www.fda.gov/media/94155/download",
      },
      {
        tag: "Trial",
        title: "NCT07437586: Topical GHK-Cu gel for acute skin-wound healing",
        summary: "Registered topical wound-healing trial.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT07437586",
      },
    ],
  }),
  "ghk-cu-topical-powder": makePeptide({
    slug: "ghk-cu-topical-powder",
    name: "GHK-Cu Topical Powder",
    pageTitle:
      "GHK-Cu Topical Powder Dosage: Concentration Math, Evidence, and Protocol",
    goalSlug: "skin-health",
    goalLabel: "Skin Health",
    rankBadge: "Formulation Ingredient · Assay-Corrected Math",
    summary:
      "Evidence-based GHK-Cu topical powder guide covering assay-corrected batch math, 2%/4% wound gels vs 0.1% ongoing trial, nested trade-ingredient percentages, applied-dose calculators, and a proposed 24-week facial dose-ranging protocol. Powder is not a finished product dose.",
    rating: "4.5",
    reviewCount: "290",
    researchedBadge: "Not FDA Approved · Formulation Ingredient · Assay Required",
    tags: [
      "Copper Tripeptide-1",
      "Powder ≠ Finished Serum",
      "2%/4% Wound Gels",
      "Assay Correction",
    ],
    dosageGuide: GHK_CU_TOPICAL_POWDER_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Powder identity",
        body: "Qualified GHK-Cu complex — confirm active assay, stoichiometry, free copper, and carrier content before batch math.",
      },
      {
        label: "Strongest human doses",
        body: "Mulder 1994: 2% and 4% wound gels once daily, area-metered. NCT07437586: 0.1% gel × 14 days (ongoing).",
      },
      {
        label: "Proposed facial study",
        body: "0.01%, 0.05%, 0.10% w/w finished gel-serum · 0.50 g once daily × 24 weeks — GMP product, no participant powder handling.",
      },
    ],
    about:
      "GHK-Cu topical powder is a formulation ingredient for Copper Tripeptide-1 products — not a finished serum, cream, or injectable dose. Label percentages may describe pure complex, diluted trade blends, or ambiguous “copper peptide” claims. Historical 2%/4% wound gels cannot be converted directly into cosmetic facial protocols. Powder calculations require assay correction: powder mass = target active ÷ active fraction.",
    facts: [
      { label: "Type", value: "GHK-Cu powder (ingredient)", icon: "type" },
      { label: "Wound RCT", value: "2% · 4% gel · once daily", icon: "flask" },
      { label: "Ongoing trial", value: "0.1% gel · NCT07437586", icon: "weight" },
      { label: "Cosmetic dose", value: "Not established", icon: "clock" },
    ],
    benefits: [
      "Separates powder ingredient from finished product and injectable GHK-Cu protocols",
      "Documents Mulder 2%/4% wound gels vs NCT07437586 0.1% vs market 0.05%–1%",
      "Assay-corrected powder calculator and nested trade-ingredient percentage tool",
      "Batch w/w math, applied-dose calculator, and 24-week facial protocol timeline",
      "Flags HPLC purity vs active assay, microneedling, and wound-to-face concentration transfer",
    ],
    howItWorks:
      "GHK-Cu may influence ECM remodeling, fibroblast signaling, and wound-repair pathways. Human evidence is route- and formulation-specific: ulcer gels, acute punch-wound trial, and limited cosmetic studies with incomplete dose disclosure. Mechanism does not set a powder concentration or prove intact-skin penetration from container % alone.",
    mechanisms: [
      {
        title: "Wound gel evidence",
        tone: "purple",
        points: [
          "2% and 4% HPMC gels · Mulder 1994",
          "Area-normalized 2 or 6 mg/cm²",
          "Ulcer-specific — not facial cosmetic dose",
        ],
      },
      {
        title: "Powder formulation",
        tone: "blue",
        points: [
          "Active assay ÷ carrier correction",
          "pH, preservation, uniformity gates",
          "Raw powder ≠ human research product",
        ],
      },
      {
        title: "Evidence gaps",
        tone: "orange",
        points: [
          "Cosmetic % often undisclosed",
          "CO₂ laser trial — null objective result",
          "Injectable mg protocols ≠ topical %",
        ],
      },
    ],
    resultBars: [
      "Wound Gel RCT: Documented",
      "0.1% Trial: Ongoing",
      "Facial Cosmetic Dose: Unestablished",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Local: stinging, erythema, pruritus, dermatitis, blue-green discoloration. Copper-related: formulation degradation increases labile copper; Wilson disease is a special concern. Powder handling adds occupational dust exposure. Microneedling, laser, and open wounds change delivery — intact-skin product ≠ channel/wound use. No maximum tolerated intact-skin concentration established.",
    dosage:
      "No established cosmetic powder dose. Historical wound protocol: 2% or 4% GHK-Cu gel once daily, metered by ulcer area (2 or 6 mg/cm²). Ongoing acute-wound study: 0.1% gel once daily × 14 days. Market convention: roughly 0.05%–1% finished product (label basis often ambiguous). Proposed facial dose-ranging: 0.01%, 0.05%, 0.10% w/w at 0.50 g once daily × 24 weeks after formulation gates. Powder required (mg) = target active (mg) ÷ active assay fraction.",
    glance: [
      { label: "Form", value: "Powder ingredient", highlight: true },
      { label: "Wound RCT", value: "2% · 4% gel" },
      { label: "Ongoing", value: "0.1% · NCT07437586" },
      { label: "Market range", value: "~0.05%–1%" },
      { label: "Assay math", value: "Powder = active ÷ fraction" },
      { label: "Proposed facial", value: "0.01–0.10% · 0.50 g/day" },
      { label: "≠", value: "Injectable GHK-Cu · neat powder" },
    ],
    compare: {
      columns: ["2%/4% wound gel", "0.1% ongoing trial", "Market 0.05%–1%"],
      highlight: 0,
      rows: [
        {
          feature: "Indication",
          values: ["Diabetic ulcers", "Acute punch wounds", "Cosmetic (unvalidated)"],
        },
        {
          feature: "Application",
          values: ["Area-metered on ulcer", "Standardized wound model", "Often unspecified mass"],
        },
        {
          feature: "Evidence",
          values: ["Published RCT", "Registered protocol", "Convention / anecdotal"],
        },
        {
          feature: "Transfer to face?",
          values: ["No — different barrier", "No — wound model", "Not dose-established"],
        },
      ],
    },
    research: [
      {
        tag: "Wound RCT",
        title: "Enhanced healing of diabetic ulcers with topical GHK-Cu",
        summary: "2% and 4% gels · once daily · area-metered dosing.",
        cite: "Mulder et al., 1994",
        href: "https://doi.org/10.1046/j.1524-475X.1994.20406.x",
      },
      {
        tag: "Trial",
        title: "NCT07437586 — Topical GHK-Cu gel for acute wound healing",
        summary: "0.1% gel · 14 days · paired punch wounds.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT07437586",
      },
      {
        tag: "Null result",
        title: "Copper tripeptide after CO₂ laser resurfacing",
        summary: "No significant objective improvement at 12 weeks.",
        cite: "Miller et al., 2006",
        href: "https://pubmed.ncbi.nlm.nih.gov/16847171/",
      },
      {
        tag: "FDA",
        title: "503A bulk substances — GHK-Cu except injectable",
        summary: "Category 1 interim classification — May 2026.",
        cite: "FDA",
        href: "https://www.fda.gov/media/94155/download",
      },
    ],
  }),
  "bpc-157-ghk-cu": makePeptide({
    slug: "bpc-157-ghk-cu",
    name: "BPC-157 + GHK-Cu",
    pageTitle:
      "BPC-157 + GHK-Cu Dosage: 50/10 mg Blend Protocol and Reconstitution",
    goalSlug: "skin-health",
    goalLabel: "Skin Health",
    rankBadge: "2-Peptide Blend · No Exact Trial",
    summary:
      "Review BPC-157 + GHK-Cu dosage, the 50/10 mg blend ratio, fixed 6-week protocol, 2–4 mL reconstitution charts, evidence, and safety. Exact two-peptide blend unstudied in controlled trials.",
    rating: "4.4",
    reviewCount: "380",
    researchedBadge: "Not FDA Approved · Anecdotal Blend Protocol · WADA S0",
    tags: [
      "50/10 mg · 5:1",
      "2 mg + 400 mcg Daily",
      "Exact Combo: None",
      "≠ GLOW / KLOW",
    ],
    dosageGuide: BPC_GHK_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "60 mg vial",
        body: "50 mg GHK-Cu + 10 mg BPC-157 at fixed 5:1 mass ratio.",
      },
      {
        label: "Exact combo",
        body: "No controlled human or animal dose-ranging study of the blend identified.",
      },
      {
        label: "Common daily",
        body: "12 units (3 mL recon) = 2 mg GHK-Cu + 400 mcg BPC-157 once daily × 6 weeks.",
      },
    ],
    about:
      "BPC-157 + GHK-Cu is a fixed-ratio commercial blend of a 15-amino-acid repair peptide and copper tripeptide-1 (GHK-Cu). The reference vial contains 50 mg GHK-Cu and 10 mg BPC-157. The most traceable community convention uses 12 U-100 units once daily for 6 weeks after 3 mL reconstitution, then 2–3 weeks off. No exact-combination clinical trial was identified. This is ≠ GLOW (adds TB-500), ≠ KLOW (adds KPV+TB-500), ≠ KPV+GHK-Cu, and ≠ Wolverine (BPC+TB-500). Contains BPC-157 — prohibited in tested sport (WADA S0).",
    facts: [
      { label: "Type", value: "2-peptide blend", icon: "type" },
      { label: "Standard vial", value: "60 mg (50/10)", icon: "flask" },
      { label: "Common draw", value: "2.4 mg total (12 U)", icon: "weight" },
      { label: "Exact combo trial", value: "None identified", icon: "clock" },
    ],
    benefits: [
      "Documents authentic 50/10 mg composition and 5:1 mass ratio",
      "Translates every total-mg draw into GHK-Cu, BPC-157, and stoichiometric copper",
      "Reproduces traceable 6-week fixed protocol with cumulative exposure accounting",
      "Separates topical GHK-Cu and isolated BPC-157 evidence from blend claims",
      "Flags ≠ GLOW/KLOW/Wolverine and WADA S0 prohibition via BPC-157",
    ],
    howItWorks:
      "The blend pairs BPC-157 angiogenesis and repair-signaling preclinical literature with GHK-Cu copper-associated matrix-remodeling research. The combination is a mechanistic hypothesis — not evidence of synergy. Fixed-ratio convenience prevents independent component adjustment.",
    mechanisms: [
      {
        title: "Fixed 5:1 ratio",
        tone: "purple",
        points: [
          "Every 1.2 mg = 1 mg GHK-Cu + 200 mcg BPC-157",
          "Cannot adjust BPC-157 without changing GHK-Cu",
          "Commercial ratio — not pharmacologically validated",
        ],
      },
      {
        title: "Component themes",
        tone: "blue",
        points: [
          "GHK-Cu: ECM, collagen, topical wound literature",
          "BPC-157: tendon/GI/vascular rodent models; sparse human reports",
          "Copper ~15.81% of GHK-Cu complex mass",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No exact-blend PK or efficacy trial",
          "Topical GHK-Cu ≠ injectable blend",
          "BPC-157 human reports ≠ combination evidence",
        ],
      },
    ],
    resultBars: [
      "Exact Blend Trial: None",
      "Topical GHK-Cu: Limited",
      "6-Week Protocol: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No exact-combination adverse-event rates exist. Community mentions include injection-site stinging, burning, redness, itching, swelling, welts, bruising, and nodules — incidence unknown. GHK-Cu contributes stoichiometric copper (~13.3 mg elemental Cu over a 6-week fixed protocol). Fixed-ratio blends prevent isolating which component caused a reaction. Blend contains BPC-157 — prohibited in tested sport (WADA S0).",
    dosage:
      "There is no clinically established BPC-157 + GHK-Cu dose. The most traceable community convention is 2 mg GHK-Cu plus 400 mcg BPC-157 per administration (= 2.4 mg total blend), once daily for 6 weeks (42 days), then 2–3 weeks off. With 3 mL diluent on a 60 mg vial, that equals 12 U-100 units (0.12 mL). Six-week cumulative: 84 mg GHK-Cu + 16.8 mg BPC-157 — plan on two vials before handling loss.",
    glance: [
      { label: "Exact combo trial", value: "None identified", highlight: true },
      { label: "Reference vial", value: "60 mg · 50/10 · 5:1" },
      { label: "Common recon", value: "3 mL → 20 mg/mL total" },
      { label: "Daily draw", value: "12 U = 2 mg + 400 mcg" },
      { label: "Six-week cumulative", value: "84 mg GHK + 16.8 mg BPC" },
      { label: "Common cycle", value: "6 weeks on + 2–3 off" },
      { label: "≠ GLOW / KLOW", value: "Two components only" },
    ],
    compare: {
      columns: ["BPC-157 + GHK-Cu", "GLOW", "KLOW"],
      highlight: 0,
      rows: [
        {
          feature: "Composition",
          values: [
            "GHK-Cu + BPC-157 only",
            "GHK-Cu + BPC + TB-500",
            "GHK-Cu + BPC + KPV + TB-500",
          ],
        },
        {
          feature: "Typical vial",
          values: ["60 mg (50/10)", "70 mg (50/10/10)", "80 mg (50/10/10/10)"],
        },
        {
          feature: "Key limit",
          values: [
            "Fixed 5:1; blend unstudied; WADA S0",
            "Adds TB-500; also unstudied",
            "Four peptides; also unstudied",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Review",
        title: "BPC-157 and GHK-Cu in wound healing and tissue repair",
        summary: "2026 narrative review — parallel molecules, not exact blend trial.",
        cite: "Wojcieszuk et al.",
        href: "https://doi.org/10.12775/QS.2026.54.70818",
      },
      {
        tag: "FDA",
        title: "Pharmacy Compounding Advisory Committee: BPC-157 evaluation",
        summary: "2026 chemistry and safety gaps — not blend validation.",
        cite: "FDA",
        href: "https://www.fda.gov/media/193343/download",
      },
      {
        tag: "GHK-Cu",
        title: "Regenerative and protective actions of GHK-Cu",
        summary: "Topical/lab context — not injectable blend dosing.",
        cite: "Pickart & Margolina, 2018",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/",
      },
      {
        tag: "BPC-157",
        title: "Intra-articular BPC-157 for knee pain",
        summary: "BPC-only retrospective — not blend evidence.",
        cite: "Lee et al.",
        href: "https://pubmed.ncbi.nlm.nih.gov/34324435/",
      },
      {
        tag: "WADA",
        title: "2026 Prohibited List — BPC-157 S0",
        summary: "Blend prohibited in tested sport via BPC-157 content.",
        cite: "WADA",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  }),
  "kpv-ghk-cu": makePeptide({
    slug: "kpv-ghk-cu",
    name: "KPV + GHK-Cu",
    pageTitle: "KPV + GHK-Cu Dosage: 60 mg Blend Protocol and Reconstitution",
    goalSlug: "skin-health",
    goalLabel: "Skin Health",
    rankBadge: "2-Peptide Blend · No Exact Trial",
    summary:
      "Review KPV + GHK-Cu dosage, the 50/10 mg blend ratio, a complete 12-week research protocol, 2–4 mL reconstitution charts, evidence, and safety. Exact two-peptide blend unstudied in controlled trials.",
    rating: "4.4",
    reviewCount: "320",
    researchedBadge: "Not FDA Approved · Anecdotal Blend Protocol",
    tags: ["50/10 mg · 5:1", "1.8–3 mg Blend", "Exact Combo: None", "≠ KLOW"],
    dosageGuide: KPV_GHK_CU_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "60 mg vial",
        body: "50 mg GHK-Cu + 10 mg KPV at fixed 5:1 mass ratio.",
      },
      {
        label: "Exact combo",
        body: "No controlled human or animal dose-ranging study of the blend identified.",
      },
      {
        label: "Common range",
        body: "1.8–3 mg total blend (1.5–2.5 mg GHK-Cu + 300–500 mcg KPV) five days weekly.",
      },
    ],
    about:
      "KPV + GHK-Cu is a fixed-ratio commercial blend of two tripeptides: KPV (alpha-MSH C-terminal fragment) and GHK-Cu (copper tripeptide-1). The reference vial contains 50 mg GHK-Cu and 10 mg KPV. Community protocols most often escalate from 1.5 mg + 300 mcg to 2.5 mg + 500 mcg over 12 weeks, five days on and two off. No exact-combination clinical trial was identified. This is not KLOW — KLOW adds BPC-157 and TB-500.",
    facts: [
      { label: "Type", value: "2-peptide blend", icon: "type" },
      { label: "Standard vial", value: "60 mg (50/10)", icon: "flask" },
      { label: "Common draw", value: "1.8–3 mg total", icon: "weight" },
      { label: "Exact combo trial", value: "None identified", icon: "clock" },
    ],
    benefits: [
      "Documents authentic 50/10 mg composition and 5:1 mass ratio",
      "Translates every total-mg draw into GHK-Cu, KPV, and stoichiometric copper",
      "Reproduces traceable 12-week escalation with cumulative exposure accounting",
      "Separates topical GHK-Cu evidence from injectable blend claims",
      "Flags KPV solubility (free base vs acetate) and ≠ KLOW distinction",
    ],
    howItWorks:
      "The blend pairs KPV inflammatory-signaling preclinical literature with GHK-Cu copper-associated matrix-remodeling research. The combination is a mechanistic hypothesis — not evidence of synergy. Fixed-ratio convenience prevents independent component adjustment.",
    mechanisms: [
      {
        title: "Fixed 5:1 ratio",
        tone: "purple",
        points: [
          "Every 1.2 mg = 1 mg GHK-Cu + 200 mcg KPV",
          "Cannot adjust KPV without changing GHK-Cu",
          "Mass ratio ≠ molar ratio (form-dependent)",
        ],
      },
      {
        title: "Component themes",
        tone: "blue",
        points: [
          "GHK-Cu: ECM, collagen, topical wound literature",
          "KPV: PepT1, NF-kappa-B models; no human exposure study",
          "Copper ~15.81% of GHK-Cu complex mass",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No exact-blend PK or efficacy trial",
          "Topical GHK-Cu ≠ injectable blend",
          "One traceable protocol source — not consensus",
        ],
      },
    ],
    resultBars: [
      "Exact Blend Trial: None",
      "Topical GHK-Cu: Limited",
      "1.8–3 mg Protocol: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No exact-combination adverse-event rates exist. Community mentions include injection-site reactions, headache, dizziness, nausea, and fatigue — incidence unknown. GHK-Cu contributes stoichiometric copper (~19.8 mg elemental Cu over a full 12-week cycle). Fixed-ratio blends prevent isolating which component caused a reaction. Caution in copper-metabolism disorders, liver disease, active infection, or autoimmune conditions.",
    dosage:
      "There is no clinically established KPV + GHK-Cu dose. The most traceable community range is 1.5–2.5 mg GHK-Cu plus 300–500 mcg KPV per administration (= 1.8–3 mg total blend), once daily, five days on and two off, for 8–12 weeks. The documented 12-week escalation progresses from 9 to 15 U-100 units with 3 mL diluent on a 60 mg vial. The full cycle uses 150 mg total blend — plan on three vials before handling loss.",
    glance: [
      { label: "Exact combo trial", value: "None identified", highlight: true },
      { label: "Reference vial", value: "60 mg · 50/10 · 5:1" },
      { label: "Common range", value: "1.8–3 mg total blend" },
      { label: "At 1.8 mg total", value: "1.5 mg GHK-Cu + 300 mcg KPV" },
      { label: "At 3 mg total", value: "2.5 mg GHK-Cu + 500 mcg KPV" },
      { label: "Common cycle", value: "8–12 weeks + 4–8 off" },
      { label: "≠ KLOW", value: "No BPC-157 or TB-500" },
    ],
    compare: {
      columns: ["KPV + GHK-Cu", "KLOW", "Separate vials"],
      highlight: 0,
      rows: [
        {
          feature: "Composition",
          values: [
            "GHK-Cu + KPV only",
            "GHK-Cu + KPV + BPC + TB-500",
            "Independent amounts",
          ],
        },
        {
          feature: "Typical vial",
          values: ["60 mg (50/10)", "80 mg (50/10/10/10)", "Per product"],
        },
        {
          feature: "Key limit",
          values: [
            "Fixed 5:1; blend unstudied",
            "Also unstudied; WADA prohibited components",
            "More control; more variables",
          ],
        },
      ],
    },
    research: [
      {
        tag: "FDA",
        title: "July 2026 PCAC KPV briefing document",
        summary: "No human KPV exposure study; solubility and chemistry review.",
        cite: "FDA",
        href: "https://www.fda.gov/media/193346/download",
      },
      {
        tag: "GHK-Cu",
        title: "Regenerative and protective actions of GHK-Cu",
        summary: "Topical/lab context — not injectable blend dosing.",
        cite: "Pickart & Margolina, 2018",
        href: "https://pubmed.ncbi.nlm.nih.gov/29986520/",
      },
      {
        tag: "KPV",
        title: "PepT1-mediated KPV uptake and intestinal inflammation",
        summary: "Preclinical — no human KPV administration study.",
        cite: "Dalmasso et al., 2008",
        href: "https://pubmed.ncbi.nlm.nih.gov/18061177/",
      },
      {
        tag: "Review",
        title: "Tripeptides in wound healing and skin regeneration",
        summary: "2025 review — separate molecules, not exact blend.",
        cite: "Adnan et al.",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12595317/",
      },
      {
        tag: "Protocol",
        title: "KPV + GHK-Cu 60 mg reference protocol",
        summary: "One traceable community/vendor convention.",
        cite: "Pure Performance Labs",
        href: "https://www.purelabs.co.za/product/kpv-ghk-cu/",
      },
    ],
  }),
  cartalax: makePeptide({
    slug: "cartalax",
    name: "Cartalax",
    pageTitle: "Cartalax Dosage: Research Protocols and Reconstitution",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "AED Tripeptide · Patent Human Report",
    summary:
      "Review Cartalax (AED peptide) doses from the original human patent study, reported 10–20-day SC protocols, vial calculations, preclinical research, evidence ladder, and safety. Modern injectable protocols are community conventions — not validated clinical doses.",
    rating: "4.3",
    reviewCount: "420",
    researchedBadge: "Not FDA Approved · Patent Human Report; SC Anecdotal",
    tags: [
      "Ala-Glu-Asp (AED)",
      "Patent EA010574B1",
      "Joint / Cartilage Research",
      "Injectable: Anecdotal",
    ],
    dosageGuide: CARTALAX_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "AED tripeptide",
        body: "H-Ala-Glu-Asp-OH (~333.3 g/mol). Distinct from AC-4 capsules, PCC mixtures, and AEDL/AEDG.",
      },
      {
        label: "Patent human program",
        body: "1 µg, 10 µg, or 5 mg IM once daily × 20 days — severity strata, not titration. Saline control included.",
      },
      {
        label: "Modern SC convention",
        body: "Commonly 100–300 µg or 0.5–2 mg SC × 10–20 days. Different route — anecdotal / vendor-derived.",
      },
    ],
    about:
      "Cartalax is the synthetic tripeptide alanyl-glutamyl-aspartic acid (AED), associated with the Khavinson peptide-bioregulator research program. The most concrete human dosing information appears in Eurasian patent EA010574B1 — a small knee-osteoarthritis cohort with three fixed IM doses and a saline control. Modern subcutaneous protocols are widely repeated online but do not match the patent route or design. Human pharmacokinetics and cartilage regeneration are not established.",
    facts: [
      { label: "Type", value: "Tripeptide (AED)", icon: "type" },
      { label: "Common vial", value: "20 mg lyophilized", icon: "flask" },
      { label: "Patent human dose", value: "1 µg · 10 µg · 5 mg IM", icon: "weight" },
      { label: "US-approved dose", value: "None", icon: "clock" },
    ],
    benefits: [
      "Separates patent-reported IM strata from modern SC community protocols",
      "Documents identity pitfalls: pure AED vs AC-4, PCC, AEDL/AEDG",
      "Reconstructs 20-day patent protocol with measurement framework",
      "Provides 20 mg vial reconstitution math and µg-arm dilution warning",
      "Evidence ladder, claim checker, and preclinical concentration context",
    ],
    howItWorks:
      "Preclinical work suggests AED may influence chondrocyte proliferation (≈200 ng/mL in rat cultures), cartilage-explant growth (≈100 ng/mL), and gene expression in aged human MSC cultures. The patent reported symptom and mobility changes in some participants but no substantial radiographic improvement. Mechanistic DNA-binding hypotheses remain unvalidated for human cartilage.",
    mechanisms: [
      {
        title: "Chondrocyte signaling",
        tone: "purple",
        points: [
          "Rat chondrocytes: activity at ~200 ng/mL in culture",
          "Cartilage explants: +26% growth index at 100 ng/mL",
          "Does not prove human structural repair",
        ],
      },
      {
        title: "Patent human report",
        tone: "blue",
        points: [
          "29 adults · knee osteoarthritis · 20-day IM course",
          "Symptoms improved in some; radiographs unchanged",
          "Not peer-reviewed or independently replicated",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "5,000-fold dose span confounded with severity",
          "No human PK or optimal dose established",
          "SC community protocols ≠ patent IM program",
        ],
      },
    ],
    resultBars: [
      "Patent Human Report: Low confidence",
      "Preclinical Cartilage: Moderate (in vitro)",
      "Modern SC Protocol: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Human side-effect profile is poorly characterized. The patent does not provide a modern adverse-event table for the 29-person cohort. Patent-reported animal toxicology was favorable but incomplete by modern standards. Injection-related risks include product-quality failures, concentration errors (especially across µg vs mg protocols), injection-site reactions, and abscess. No controlled interaction data with NSAIDs, corticosteroids, BPC-157, TB-500, or other peptides.",
    dosage:
      "There is no US-approved Cartalax dose. The most traceable human schedule is the patent's 20-day intramuscular program: 1 µg, 10 µg, or 5 mg once daily assigned by age and severity — not titration. Modern subcutaneous conventions commonly report 100–300 µg or 0.5–2 mg once daily for 10–20 days. Oral AC-4 capsules use capsule-count directions (1–2 capsules one or two times daily) — not equivalent pure AED mass. A reconstitution calculator documents vial math only; it cannot choose a valid dose.",
    glance: [
      { label: "Molecular identity", value: "H-Ala-Glu-Asp-OH (AED)", highlight: true },
      { label: "Patent human dose", value: "1 µg · 10 µg · 5 mg IM × 20 days" },
      { label: "Modern SC convention", value: "100–300 µg or 0.5–2 mg × 10–20 days" },
      { label: "Patent control", value: "12-person saline IM group" },
      { label: "Cartilage regeneration", value: "Not demonstrated in humans" },
      { label: "Standard vial", value: "20 mg (assayed AED basis)" },
      { label: "Dose confidence", value: "Low overall" },
    ],
    compare: {
      columns: ["Patent IM program", "Modern SC protocol", "Oral AC-4 capsules"],
      highlight: 0,
      rows: [
        {
          feature: "Evidence basis",
          values: [
            "Patent-reported human cohort",
            "Anecdotal / vendor-derived",
            "Product-label convention",
          ],
        },
        {
          feature: "Typical dose",
          values: ["1 µg · 10 µg · 5 mg IM", "100 µg–2 mg SC", "1–2 capsules BID/TID"],
        },
        {
          feature: "Route match to patent",
          values: ["Yes — IM as described", "No — usually SC", "No — oral complex"],
        },
        {
          feature: "Pure AED mass known",
          values: ["Assumed in patent", "Vial-dependent", "Not established"],
        },
      ],
    },
    research: [
      {
        tag: "Patent",
        title: "EA010574B1 — bone and cartilaginous tissue peptide",
        summary: "Primary human dosing source — patent-reported knee OA cohort.",
        cite: "Khavinson et al., 2008",
        href: "https://patents.google.com/patent/EA010574B1/en",
      },
      {
        tag: "Preclinical",
        title: "Peptides of cartilage tissue: chondrocyte proliferation",
        summary: "Rat chondrocyte study — 200 ng/mL effective concentration.",
        cite: "Myakisheva et al., 2023",
        href: "https://journals.eco-vector.com/0236-3054/article/view/117604",
      },
      {
        tag: "Review",
        title: "Peptide Regulation of Chondrogenic Stem Cell Differentiation",
        summary: "PCC context — AED in cartilage peptide mixtures.",
        cite: "Linkova et al., 2023",
        href: "https://pubmed.ncbi.nlm.nih.gov/37176122/",
      },
      {
        tag: "Mechanism",
        title: "Gene expression in human MSC aging cultures",
        summary: "AED altered IGF1 and NFκB-related gene expression in vitro.",
        cite: "Ashapkin et al., 2020",
        href: "https://pubmed.ncbi.nlm.nih.gov/32399807/",
      },
    ],
  }),
  "ara-290": makePeptide({
    slug: "ara-290",
    name: "ARA-290",
    pageTitle: "ARA-290 Dosage: Human Trials and Research Protocol",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "Cibinetide · Phase 2 Neuropathy Research",
    summary:
      "Review ARA-290 (cibinetide) doses tested in humans, the 4 mg daily 28-day research protocol, DOSARA dose-ranging results, reconstitution math, nerve-marker outcomes, safety, and preclinical evidence. Not EPO — no established prescribing dose.",
    rating: "4.6",
    reviewCount: "540",
    researchedBadge: "Phase 2 · 4 mg SC Daily · ≠ EPO",
    tags: [
      "Cibinetide (pGlu-EQLERALNSS)",
      "Small-Fiber Neuropathy",
      "DOSARA Dose-Ranging",
      "Not EPO",
    ],
    dosageGuide: ARA290_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Cibinetide identity",
        body: "11-aa N-terminal pyroglutamate peptide pGlu-EQLERALNSS (~1,257.3 g/mol). ≠ unmodified QEQLERALNSS. ≠ EPO.",
      },
      {
        label: "Most studied schedule",
        body: "4 mg SC once daily × 28 days — NERVARA, diabetes trial, DOSARA 4 mg arm.",
      },
      {
        label: "DOSARA dose-ranging",
        body: "1, 4, and 8 mg daily × 28 days — only 4 mg met primary CNFA endpoint. Not “higher is better.”",
      },
    ],
    about:
      "ARA-290 is the development code for cibinetide, an investigational 11-amino-acid peptide derived from the aqueous-facing surface of EPO helix B. It is not EPO and was designed to activate tissue-protective innate repair receptor signaling without erythropoietic effects. Human evidence is concentrated in Phase 2 small-fiber neuropathy trials.",
    facts: [
      { label: "Type", value: "11-aa peptide (cibinetide)", icon: "type" },
      { label: "Common vial", value: "10–16 mg lyophilized", icon: "flask" },
      { label: "Most studied dose", value: "4 mg SC daily", icon: "weight" },
      { label: "Established dose", value: "None", icon: "clock" },
    ],
    benefits: [
      "Documents the 4 mg SC × 28-day trial-anchored protocol with observation period",
      "Interactive DOSARA dose-response explorer (1 / 4 / 8 mg CNFA results)",
      "Separates formally studied Phase 2 dosing from community titration and intermittent SC",
      "Reconstitution math for 16/10/20 mg vials with U-100 unit conversion",
      "Evidence ladder, claim checker, and adverse-event record from published trials",
    ],
    howItWorks:
      "Cibinetide was designed to engage the proposed innate repair receptor (EPOR/CD131 complex) rather than the classical EPO-receptor homodimer. Preclinical work connects receptor signaling with anti-inflammatory and cell-survival pathways. Human trials measured corneal nerve-fiber area and GAP-43-positive skin fibers — surrogate markers of possible nerve regeneration.",
    mechanisms: [
      {
        title: "Innate repair receptor",
        tone: "purple",
        points: [
          "Proposed EPOR/CD131 complex — tissue-protective, not erythropoietic",
          "Designed from EPO helix B surface — not interchangeable with EPO",
          "Very short plasma half-life (~20 min after 4 mg SC)",
        ],
      },
      {
        title: "Phase 2 human trials",
        tone: "blue",
        points: [
          "4 mg SC daily × 28 days — most replicated schedule",
          "DOSARA: only 4 mg met CNFA endpoint at day 28",
          "Pain and symptom results less consistent than nerve markers",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "Largest trial: 64 participants (DOSARA)",
          "No established maintenance or repeat-cycle interval",
          "Research-vial product ≠ trial investigational formulation",
        ],
      },
    ],
    resultBars: [
      "4 mg SC × 28 days: Moderate signal (not therapeutic dose)",
      "Corneal nerve markers: Promising surrogate endpoints",
      "Symptom / pain outcomes: Mixed across trials",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Across small Phase 2 trials, no consistent erythropoietic effect or clear laboratory toxicity pattern was observed at studied doses. DOSARA reported treatment-emergent adverse events in all groups; serious events occurred in the 1 mg and 8 mg arms. The diabetes trial had four serious events in the active arm with uncertain causality. Research-vial use adds identity, sterility, endotoxin, and concentration-error risks not controlled in retail preparation.",
    dosage:
      "There is no established prescribing dose for ARA-290 (cibinetide). The most defensible research schedule is 4 mg subcutaneously once daily for 28 consecutive days, followed by observation — used in NERVARA, the painful diabetic neuropathy trial, and as the signal-generating arm in DOSARA. DOSARA tested 1, 4, and 8 mg daily; only 4 mg met the primary corneal nerve-fiber endpoint. An earlier IV pilot used 2 mg three times weekly for four weeks in a clinical research setting. Community titration and intermittent SC schedules are anecdotal.",
    glance: [
      { label: "Preferred name", value: "Cibinetide (pGlu-EQLERALNSS)", highlight: true },
      { label: "Most studied dose", value: "4 mg SC once daily × 28 days" },
      { label: "DOSARA signal", value: "Only 4 mg met CNFA endpoint" },
      { label: "28-day course total", value: "112 mg (= seven 16 mg vials)" },
      { label: "Half-life", value: "~2 min IV / ~20 min after 4 mg SC" },
      { label: "≠ EPO", value: "No meaningful RBC stimulation observed" },
      { label: "Established dose", value: "None" },
    ],
    compare: {
      columns: ["4 mg SC × 28 days (trials)", "Community protocols", "2 mg IV pilot"],
      highlight: 0,
      rows: [
        {
          feature: "Evidence basis",
          values: [
            "Multiple Phase 2 RCTs",
            "Anecdotal / vendor-derived",
            "Small randomized pilot",
          ],
        },
        {
          feature: "Typical amount",
          values: ["4 mg daily", "1–4 mg; titration or intermittent", "2 mg three times weekly"],
        },
        {
          feature: "Route",
          values: ["Subcutaneous", "Usually SC", "Intravenous — research setting only"],
        },
        {
          feature: "Objective outcomes",
          values: ["CNFA, skin biopsy, symptom scales", "Usually self-report", "Symptom scales only"],
        },
      ],
    },
    research: [
      {
        tag: "Phase 2",
        title: "DOSARA — cibinetide dose-ranging in sarcoidosis SFN",
        summary: "1, 4, and 8 mg SC daily × 28 days — only 4 mg met CNFA endpoint.",
        cite: "Culver et al., 2017",
        href: "https://pubmed.ncbi.nlm.nih.gov/28475703/",
      },
      {
        tag: "Phase 2",
        title: "NERVARA — ARA 290 in sarcoidosis small-nerve-fiber loss",
        summary: "4 mg SC daily × 28 days — corneal nerve-fiber area and symptoms.",
        cite: "Dahan et al., 2013",
        href: "https://pubmed.ncbi.nlm.nih.gov/24136731/",
      },
      {
        tag: "Phase 2",
        title: "ARA 290 in type 2 diabetes neuropathy",
        summary: "4 mg SC daily — PainDetect and exploratory metabolic measures.",
        cite: "Brines et al., 2015",
        href: "https://pubmed.ncbi.nlm.nih.gov/25387363/",
      },
      {
        tag: "Design",
        title: "Nonerythropoietic tissue-protective peptides from EPO",
        summary: "Original cibinetide design and innate repair receptor hypothesis.",
        cite: "Brines et al., PNAS 2008",
        href: "https://pubmed.ncbi.nlm.nih.gov/18676614/",
      },
    ],
  }),
  kpv: makePeptide({
    slug: "kpv",
    name: "KPV",
    pageTitle: "KPV Dosage: Research Protocol, Routes, and Reconstitution",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "α-MSH(11–13) · PepT1 / Gut Models",
    summary:
      "Review KPV research dosage, community 200–500 mcg SC protocols, oral and topical evidence, 5 mg and 10 mg reconstitution math, free base vs acetate solubility, safety, and FDA 2026 compounding status. No human administration study identified.",
    rating: "4.5",
    reviewCount: "380",
    researchedBadge: "No Human Dose · ≠ K(D)PT",
    tags: [
      "No Human Dose",
      "α-MSH(11–13)",
      "PepT1 / Gut Models",
      "≠ K(D)PT",
    ],
    dosageGuide: KPV_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "KPV identity",
        body: "H-Lys-Pro-Val-OH; α-MSH residues 11–13. Free base 342.43 g/mol; acetate ~402.5 g/mol. ≠ K(D)PT / KDPT.",
      },
      {
        label: "Human evidence",
        body: "No published human KPV administration study identified in FDA 2026 review.",
      },
      {
        label: "Community SC range",
        body: "Most repeated: 200–500 mcg once daily × 4–8 weeks — anecdotal, not validated.",
      },
    ],
    about:
      "KPV is the C-terminal tripeptide of alpha-melanocyte-stimulating hormone (Lys-Pro-Val). It is studied for PepT1-mediated intestinal uptake and anti-inflammatory signaling in preclinical models. No human pharmacokinetic or dosing trial has been identified for isolated KPV free base or acetate.",
    facts: [
      { label: "Type", value: "3-aa tripeptide (α-MSH 11–13)", icon: "type" },
      { label: "Common vial", value: "5–10 mg lyophilized", icon: "flask" },
      { label: "Community SC range", value: "200–500 mcg daily", icon: "weight" },
      { label: "Established dose", value: "None", icon: "clock" },
    ],
    benefits: [
      "Documents that no human KPV administration study was identified (FDA 2026)",
      "Interactive identity gate separating KPV from K(D)PT, alpha-MSH, and (CKPV)₂",
      "Free base vs acetate form gate with solubility-aware reconstitution calculator",
      "28-day fixed 250 vs 500 mcg observational protocol timeline",
      "Evidence ladder, claim checker, and route-specific safety framework",
    ],
    howItWorks:
      "KPV is small enough for PepT1 (SLC15A1) transport in intestinal models. Preclinical work connects KPV with reduced NF-kappa-B/MAPK signaling and lower inflammatory cytokine output. Activity in MC1R-deficient mice suggests noncanonical mechanisms — not a simple melanocortin agonist.",
    mechanisms: [
      {
        title: "PepT1 intestinal uptake",
        tone: "purple",
        points: [
          "Di- and tripeptide transporter recognized in gut epithelial models",
          "Strongest gut evidence uses luminal delivery — not ordinary capsules",
          "Human disease-state PK not measured",
        ],
      },
      {
        title: "Anti-inflammatory signaling",
        tone: "blue",
        points: [
          "Reduced NF-κB and MAPK activation in cell and mouse colitis models",
          "Partial independence from melanocortin receptors",
          "In-vitro antimicrobial activity — not human infection treatment",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No human dose, PK, half-life, or safety incidence data",
          "Free-base solubility ~0.7 mg/mL may invalidate recon math",
          "KLOW overlap does not validate combination dosing",
        ],
      },
    ],
    resultBars: [
      "Human KPV dosing: None established",
      "Mouse colitis models: Preclinical inflammatory signal",
      "Community SC 200–500 mcg: Anecdotal convention only",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Human adverse-event incidence for KPV has not been established. FDA's 2026 review found no human exposure, pharmacokinetic, or safety study for KPV free base or acetate by any route. Online reports of headache, nausea, fatigue, or injection-site irritation are anecdotal — frequency and causality are unknown. Product-quality risks include identity errors, endotoxin, degradation (including Lys-Pro diketopiperazine from acetate), and solubility failures.",
    dosage:
      "No human KPV dose has been established. The most repeated community convention is 200–500 mcg subcutaneously once daily for roughly four to eight weeks — anecdotal, without traceable human dose-finding basis. Gut-focused oral protocols commonly report 500 mcg–1 mg once daily with PepT1/mouse rationale but no human PK data. A defensible observational design uses fixed 250 mcg or 500 mcg SC groups over 28 days without titration. Nominated 0.1% topical equals 1 mg/g — application dose not validated. K(D)PT human UC data must not be applied to KPV.",
    glance: [
      { label: "Sequence", value: "H-Lys-Pro-Val-OH (α-MSH 11–13)", highlight: true },
      { label: "Free-base mass", value: "342.43 g/mol · solubility ~0.7 mg/mL" },
      { label: "Acetate mass", value: "~402.5 g/mol · solubility ~5 mg/mL" },
      { label: "Human KPV dose", value: "None identified" },
      { label: "Community SC range", value: "200–500 mcg once daily" },
      { label: "Community oral range", value: "500 mcg–1 mg once daily" },
      { label: "28-day totals", value: "7 mg at 250 mcg/day; 14 mg at 500 mcg/day" },
    ],
    compare: {
      columns: ["Clinical KPV research", "Community SC protocol", "Oral gut-focused protocol"],
      highlight: 0,
      rows: [
        {
          feature: "Human dose",
          values: ["None", "200–500 mcg daily", "500 mcg–1 mg daily"],
        },
        {
          feature: "Evidence basis",
          values: [
            "No human administration study",
            "Anecdotal / vendor-derived",
            "PepT1/mouse rationale; no human PK",
          ],
        },
        {
          feature: "Route",
          values: ["No human route studied", "Subcutaneous", "Oral"],
        },
        {
          feature: "Duration",
          values: ["None", "Commonly 4–8 weeks", "Commonly 4–8 weeks"],
        },
        {
          feature: "Objective outcomes",
          values: ["None in dosed humans", "Symptom reports", "Symptom reports"],
        },
      ],
    },
    research: [
      {
        tag: "Mechanism",
        title: "PepT1-mediated KPV uptake reduces intestinal inflammation",
        summary: "Foundational PepT1 transport and anti-inflammatory signaling in gut models.",
        cite: "Dalmasso et al., 2008",
        href: "https://pubmed.ncbi.nlm.nih.gov/18061177/",
      },
      {
        tag: "Preclinical",
        title: "KPV anti-inflammatory potential in murine IBD models",
        summary: "Drinking-water, IP, and IV exposures in separate colitis models.",
        cite: "Kannengiesser et al., 2008",
        href: "https://pubmed.ncbi.nlm.nih.gov/18092346/",
      },
      {
        tag: "Regulatory",
        title: "FDA 2026 PCAC KPV briefing document",
        summary: "No human KPV administration study identified; chemistry and solubility review.",
        cite: "FDA, 2026",
        href: "https://www.fda.gov/media/193346/download",
      },
      {
        tag: "≠ K(D)PT",
        title: "K(D)PT tolerated in mild-to-moderate ulcerative colitis",
        summary: "Human UC trial for a different tripeptide — not transferable to KPV dosing.",
        cite: "Kucharzik et al., 2017",
        href: "https://pubmed.ncbi.nlm.nih.gov/28092306/",
      },
    ],
  }),
  livagen: makePeptide({
    slug: "livagen",
    name: "Livagen",
    pageTitle:
      "Livagen Dosage: KEDA Research Protocol, Patent Evidence, and Reconstitution",
    goalSlug: "longevity",
    goalLabel: "Longevity",
    rankBadge: "KEDA Tetrapeptide · Patent-Reported Human Range",
    summary:
      "Evidence-based Livagen dosage guide covering the KEDA tetrapeptide, patent-reported human dosing, a complete dose-verification protocol, community use, reconstitution math, safety, and liver research.",
    rating: "4.3",
    reviewCount: "280",
    researchedBadge: "Patent Human Example · No Modern RCT Dose",
    tags: [
      "KEDA · Lys-Glu-Asp-Ala",
      "0.01–100 µg/kg IM",
      "≠ KED / Ventvil",
      "No Human PK",
    ],
    dosageGuide: LIVAGEN_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "Defined tetrapeptide KEDA (Lys-Glu-Asp-Ala). ≠ KED, KEDP, or Ventvil extract.",
      },
      {
        label: "Patent human range",
        body: "0.01–100 µg/kg IM once daily × 10–40 days — individual doses not disclosed.",
      },
      {
        label: "Next study",
        body: "Sequential dose verification across logarithmic IM cohorts — not a copied community cycle.",
      },
    ],
    about:
      "Livagen is the synthetic tetrapeptide Lys-Glu-Asp-Ala (KEDA). The only located administered-human dose report is an older US patent example (0.01–100 µg/kg IM once daily for 10–40 days in 23 patients), not a modern peer-reviewed clinical trial. Participant-level doses were not disclosed. Modern online milligram schedules are mutually inconsistent and often change route to SC without bridging data. Livagen is not interchangeable with KED, KEDP, or calf-liver peptide complexes such as Ventvil.",
    facts: [
      { label: "Type", value: "4-aa tetrapeptide (KEDA)", icon: "type" },
      { label: "Free-peptide MW", value: "≈461.48 g/mol", icon: "flask" },
      { label: "Patent human range", value: "0.01–100 µg/kg IM", icon: "weight" },
      { label: "Modern RCT dose", value: "None located", icon: "clock" },
    ],
    benefits: [
      "Separates KEDA from KED, KEDP, and Ventvil extract identity errors",
      "Documents the patent human range and its critical reporting gaps",
      "Weight-based patent-tier calculator with cumulative exposure math",
      "Patent-anchored dose-verification protocol framework",
      "Flags incompatible modern SC/IM milligram community schedules",
    ],
    howItWorks:
      "Research themes include hepatocyte protein synthesis, liver-explant responses, ex-vivo lymphocyte chromatin changes, and enkephalinase inhibition in vitro. Human absorption, bioavailability, half-life, liver exposure, and dose-response remain unestablished. Laboratory signals do not validate liver regeneration or anti-aging claims.",
    mechanisms: [
      {
        title: "Patent human record",
        tone: "purple",
        points: [
          "0.01–100 µg/kg IM once daily × 10–40 days",
          "23 active + 12 conventional-care comparator",
          "No participant-level dose or modern AE table",
        ],
      },
      {
        title: "Identity traps",
        tone: "blue",
        points: [
          "KEDA ≠ KED tripeptide",
          "KEDA ≠ KEDP (some online mislabels)",
          "KEDA ≠ Ventvil calf-liver complex",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No modern peer-reviewed RCT dose",
          "No human PK",
          "Community mg schedules unvalidated",
        ],
      },
    ],
    resultBars: [
      "Patent Human Admin: Very Low",
      "Modern RCT: None",
      "Community Schedules: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Human adverse-event incidence is not established. The patent lacks a systematic AE table. Plausible concerns include injection reactions, hypersensitivity, infection/endotoxin from nonsterile product, dosing errors across microgram–milligram scales, and uncharacterized hepatic effects. An experimental peptide should never delay cause-specific liver evaluation or guideline-based care.",
    dosage:
      "No established standard Livagen dose. Clearest administered-human source: 0.01–100 µg/kg intramuscularly once daily for 10–40 days (US patent example) without disclosed individual doses. For a 70 kg participant that spans roughly 0.7 µg to 7 mg per day. Modern online schedules (200 µg SC × 10 days; 0.5–2 mg SC titration; 5–10 mg IM × 10 days) are anecdotal and mutually inconsistent. A defensible research next step is sequential IM dose verification across 0.01–100 µg/kg cohorts — not copying a community milligram cycle.",
    glance: [
      { label: "Standard dose", value: "None", highlight: true },
      { label: "Patent human range", value: "0.01–100 µg/kg IM" },
      { label: "Patent duration", value: "10–40 days daily" },
      { label: "70 kg daily span", value: "0.7 µg – 7 mg" },
      { label: "Participant-level dose", value: "Not disclosed" },
      { label: "≠ KED / Ventvil", value: "Different materials" },
      { label: "Human PK", value: "Not established" },
    ],
    compare: {
      columns: ["Livagen (KEDA)", "Ventvil", "Online SC titration"],
      highlight: 0,
      rows: [
        {
          feature: "Material",
          values: [
            "Defined Lys-Glu-Asp-Ala",
            "Calf-liver peptide complex",
            "Often unverified identity",
          ],
        },
        {
          feature: "Human dose evidence",
          values: [
            "Patent 0.01–100 µg/kg IM",
            "Separate extract literature",
            "Anecdotal 0.5–2 mg SC",
          ],
        },
        {
          feature: "Key limit",
          values: [
            "No dose strata or modern RCT",
            "Not KEDA-equivalent",
            "Route/duration unbridged",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Patent",
        title: "US7101854B2 — KEDA hepatocyte-activity tetrapeptide",
        summary:
          "Primary source for identity, formulation, animal work, and human example.",
        cite: "Khavinson",
        href: "https://patents.google.com/patent/US7101854B2/en",
      },
      {
        tag: "Cells",
        title: "Livagen and protein-synthesis rhythm in rat hepatocytes",
        summary: "5 ng/mL culture exposure — preclinical, not a human dose.",
        cite: "Brodskii et al.",
        href: "https://pubmed.ncbi.nlm.nih.gov/15926314/",
      },
      {
        tag: "Ex vivo",
        title: "Livagen and chromatin activation in lymphocytes from older donors",
        summary: "Mechanistic lymphocyte work — not systemic dosing evidence.",
        cite: "Khavinson et al., 2002",
        href: "https://pubmed.ncbi.nlm.nih.gov/12533768/",
      },
      {
        tag: "Review",
        title: "Liver polypeptide complex and tetrapeptide KEDA",
        summary: "Distinguishes Ventvil extract from synthetic KEDA.",
        cite: "Kuznik et al., 2020",
        href: "https://pubmed.ncbi.nlm.nih.gov/32362099/",
      },
      {
        tag: "Identity",
        title: "PubChem Livagen CID 87919683",
        summary: "Compound identity record for KEDA.",
        cite: "PubChem",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/87919683",
      },
    ],
  }),
  "ll-37": makePeptide({
    slug: "ll-37",
    name: "LL-37",
    pageTitle:
      "LL-37 Dosage: Human Trial Protocols, Research Dosing, and Reconstitution",
    goalSlug: "recovery",
    goalLabel: "Recovery",
    rankBadge: "Human Cathelicidin · Topical Wound Trials",
    summary:
      "Review LL-37 doses from human venous-leg-ulcer and diabetic-foot-ulcer trials, intratumoral melanoma protocol, community 100–200 mcg SC conventions, 5 mg reconstitution math, non-linear dose-response, safety, and evidence ladder.",
    rating: "4.6",
    reviewCount: "420",
    researchedBadge: "Topical Human Trials · No SC Human Dose",
    tags: [
      "Topical Wound Trials",
      "No SC Human Dose",
      "Cathelicidin",
      "Non-linear Dose Response",
    ],
    dosageGuide: LL37_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "LL-37 identity",
        body: "Mature 37-aa human cathelicidin from hCAP18/CAMP (~4,493 Da). Sequence begins LL. ≠ CRAMP, KR-12, OP-145.",
      },
      {
        label: "Best-characterized human dose",
        body: "Topical 0.5 mg/mL at 25 µL/cm² = 12.5 mcg/cm² per application, twice weekly — strongest early VLU signal.",
      },
      {
        label: "Community SC convention",
        body: "Most repeated: 100–200 mcg once daily, 5 on/2 off × 2–4 weeks — anecdotal; no human SC trial.",
      },
    ],
    about:
      "LL-37 is the mature 37-amino-acid C-terminal peptide cleaved from human cathelicidin (hCAP18/CAMP). Human evidence is concentrated in topical chronic-wound trials and a four-participant intratumoral melanoma study. There is no established subcutaneous dose — commonly discussed 50–400 mcg schedules are community conventions.",
    facts: [
      { label: "Type", value: "37-aa host-defense peptide", icon: "type" },
      { label: "Common vial", value: "5–10 mg lyophilized", icon: "flask" },
      { label: "Topical trial dose", value: "0.5 mg/mL · 25 µL/cm²", icon: "weight" },
      { label: "Human SC dose", value: "None established", icon: "clock" },
    ],
    benefits: [
      "Documents human topical VLU, DFU, and intratumoral melanoma trial doses",
      "Interactive wound-area calculator reconstructing 12.5–80 mcg/cm² trial arms",
      "Separates clinical topical/intratumoral research from community SC conventions",
      "6-week fixed 100 vs 200 mcg observational protocol timeline",
      "5 mg/2 mL recon calculator highlighting 25 mcg/unit (100 mcg = 4u, 200 = 8u)",
    ],
    howItWorks:
      "LL-37 is an amphipathic cationic peptide that can disrupt microbial membranes and signal through innate immune pathways including FPR2, P2X7, and TLR-related mechanisms. It promotes wound repair and angiogenesis in topical development programs but can also amplify nucleic-acid sensing implicated in psoriasis and rosacea.",
    mechanisms: [
      {
        title: "Topical wound evidence",
        tone: "purple",
        points: [
          "0.5 mg/mL strongest signal in early VLU trial",
          "Phase IIb negative overall; post-hoc ≥10 cm² subgroup only",
          "Non-linear dose-response — 3.2 mg/mL no benefit vs placebo",
        ],
      },
      {
        title: "Host-defense signaling",
        tone: "blue",
        points: [
          "Antimicrobial, chemotactic, and repair-associated activity",
          "Context-dependent — pro-healing or pro-inflammatory",
          "Not a validated antibiotic substitute",
        ],
      },
      {
        title: "Evidence limits",
        tone: "orange",
        points: [
          "No human SC PK, dose-finding, or efficacy study",
          "Melanoma trial n=4 with lichenoid toxicity case",
          "Trial PVA/cream ≠ bacteriostatic water recon stability",
        ],
      },
    ],
    resultBars: [
      "Topical Human Wound Trials: Moderate (mixed efficacy)",
      "Human SC Dosing: None established",
      "Community 100–200 mcg SC: Anecdotal convention",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Topical venous-ulcer trials reported studied concentrations were generally well tolerated within controlled wound-care settings — not transferable to repeated SC exposure. A melanoma participant developed lichenoid dermatologic toxicity during intratumoral LL-37. Plausible SC concerns include injection-site reactions, generalized rash, immune-mediated skin disease worsening, and context-dependent cancer biology. FDA identifies compounding concerns including immunogenicity, impurities, and male reproductive signals in nonclinical work.",
    dosage:
      "The best-characterized human protocol is topical: 0.5, 1.6, or 3.2 mg/mL LL-37 at 25 µL per cm² of wound area (12.5, 40, or 80 mcg/cm² per application), twice weekly. The 0.5 mg/mL arm produced the strongest early venous-leg-ulcer signal; 3.2 mg/mL did not improve healing vs placebo. Diabetic-foot-ulcer trial used 0.5 mg/mL cream twice weekly × 4 weeks. Melanoma NCT02225366 used 250 mcg per tumor weekly × 8 weeks (n=4). No published human SC dose exists. Community SC most often reports 100–200 mcg once daily, 5 on/2 off, for 2–4 weeks — anecdotal. For 5 mg at 2 mL: 25 mcg per U-100 unit.",
    glance: [
      { label: "Sequence", value: "LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES", highlight: true },
      { label: "Mass", value: "~4,493 Da · 37 amino acids" },
      { label: "Best topical dose", value: "0.5 mg/mL · 12.5 mcg/cm² · twice weekly" },
      { label: "Human SC dose", value: "None established" },
      { label: "Community SC range", value: "100–200 mcg daily (50–400 wider)" },
      { label: "5 mg/2 mL recon", value: "25 mcg/unit · 100 mcg = 4u · 200 = 8u" },
      { label: "Dosing lesson", value: "Higher concentration ≠ reliably better" },
    ],
    compare: {
      columns: [
        "Human topical/intratumoral",
        "Community SC protocol",
      ],
      highlight: 0,
      rows: [
        {
          feature: "Dose",
          values: [
            "0.5–3.2 mg/mL; 12.5–80 mcg/cm² topical",
            "100–200 mcg; wider 50–400 mcg",
          ],
        },
        {
          feature: "Evidence basis",
          values: [
            "Randomized wound RCTs; melanoma n=4",
            "Anecdotal; no human SC trial",
          ],
        },
        {
          feature: "Route",
          values: [
            "Direct topical wound or intratumoral",
            "Subcutaneous depot",
          ],
        },
        {
          feature: "Duration",
          values: ["4 or 13 weeks (topical); 8 weeks (melanoma)", "Commonly 2–4 weeks"],
        },
        {
          feature: "Formulation",
          values: ["Trial PVA solution or validated cream", "Reconstituted lyophilized vial"],
        },
      ],
    },
    research: [
      {
        tag: "VLU trial",
        title: "LL-37 enhances healing of hard-to-heal venous leg ulcers",
        summary: "0.5 mg/mL strongest signal; 3.2 mg/mL no benefit vs placebo.",
        cite: "Grönberg et al., 2014",
        href: "https://pubmed.ncbi.nlm.nih.gov/25041740/",
      },
      {
        tag: "Phase IIb",
        title: "HEAL LL-37 multicenter venous leg ulcer trial",
        summary: "Negative overall; post-hoc ≥10 cm² subgroup hypothesis-generating.",
        cite: "Mahlapuu et al., 2021",
        href: "https://pubmed.ncbi.nlm.nih.gov/34687253/",
      },
      {
        tag: "DFU",
        title: "LL-37 cream in diabetic foot ulcer RCT",
        summary: "0.5 mg/mL twice weekly × 4 weeks — improved granulation index.",
        cite: "Miranda et al., 2023",
        href: "https://pubmed.ncbi.nlm.nih.gov/37480520/",
      },
      {
        tag: "Melanoma",
        title: "Intratumoral LL-37 in cutaneous metastatic melanoma",
        summary: "n=4; 250 mcg per tumor weekly; lichenoid dermatologic toxicity case.",
        cite: "NCT02225366 / Dolkar et al., 2018",
        href: "https://clinicaltrials.gov/study/NCT02225366",
      },
    ],
  }),
  "nad-plus": makePeptide({
    slug: "nad-plus",
    name: "NAD+",
    pageTitle:
      "NAD+ Dosage: Human Trials, IV Protocol, Oral Research, and Safety",
    goalSlug: "longevity",
    goalLabel: "Longevity",
    rankBadge: "Dinucleotide Coenzyme · Direct NAD+ Only",
    summary:
      "Evidence-based NAD+ dosage guide covering direct IV human trials (10–750 mg), infusion-rate context, oral LNAD+ research, reconstitution math, sterile-quality risks, and wellness conventions that are not validated doses.",
    rating: "4.4",
    reviewCount: "640",
    researchedBadge: "10 mg IV × 7 Days HF RCT · ≠ NR/NMN",
    tags: [
      "Not a Peptide",
      "10 mg IV × 7 Days",
      "≠ NR / NMN / NADH",
      "Rate + Sterility Critical",
    ],
    dosageGuide: NAD_PLUS_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "Oxidized nicotinamide adenine dinucleotide coenzyme — not a peptide. ≠ NR, NMN, NADH, or food-grade powder.",
      },
      {
        label: "Strongest clinical anchor",
        body: "10 mg IV once daily × 7 days in ischemic-cardiomyopathy HF (largest direct-NAD+ RCT).",
      },
      {
        label: "Rate & quality",
        body: "Faster commercial 500 mg infusions were poorly tolerated; endotoxin/sterile-compounding risks are documented.",
      },
    ],
    about:
      "NAD+ is a pyridine dinucleotide coenzyme, not a peptide. This page covers direct administration of oxidized NAD+ only. Precursor doses from NR, NMN, niacin, or nicotinamide cannot be assigned here. Human evidence is fragmented: a 10 mg IV × 7-day HF RCT is the strongest clinical dataset; 750 mg over 6 hours best documents pharmacokinetics; a commercial 500 mg series was poorly tolerated when infused faster. Common wellness 250–1,000 mg infusions and SC/IM charts are conventions, not a validated dose range.",
    facts: [
      { label: "Type", value: "Dinucleotide coenzyme (not a peptide)", icon: "type" },
      { label: "Zwitterion MW", value: "≈663.4 g/mol", icon: "flask" },
      { label: "Strongest IV clinical", value: "10 mg daily × 7 days", icon: "weight" },
      { label: "Validated SC / IM", value: "None located", icon: "clock" },
    ],
    benefits: [
      "Separates direct NAD+ from NR, NMN, NADH, and proprietary LNAD+",
      "Documents 10 mg HF RCT, 50 mg HF pilot, 750 mg PK, and 500 mg clinic series",
      "Infusion-rate and pharmacy-arithmetic tools for research framing",
      "Flags FDA sterile-compounding / endotoxin warnings",
      "Clarifies WADA IV-volume method risk (>100 mL / 12 h)",
    ],
    howItWorks:
      "NAD+ participates in redox cycling (NAD+/NADH) and is consumed by sirtuins, PARPs, CD38/CD157, and SARM1. Infused NAD+ can be metabolized extracellularly; plasma NAD, whole-blood total NAD, and tissue NAD are different endpoints. Biological importance does not prove energy, aging, cognition, or athletic benefit from exogenous NAD+.",
    mechanisms: [
      {
        title: "Direct-human anchors",
        tone: "purple",
        points: [
          "10 mg IV × 7 days — largest HF RCT",
          "750 mg / 6 h — PK / metabolome pilot",
          "500 mg × 4 days — poorly tolerated commercial series",
        ],
      },
      {
        title: "Identity traps",
        tone: "blue",
        points: [
          "≠ NR or NMN precursor doses",
          "≠ NADH reduced form",
          "≠ food-grade / RUO injectable powder",
        ],
      },
      {
        title: "Safety priorities",
        tone: "orange",
        points: [
          "Rate-related infusion symptoms",
          "Sterility and bacterial endotoxin",
          "IV fluid volume (anti-doping methods rule)",
        ],
      },
    ],
    resultBars: [
      "HF 10 mg RCT: Disease-specific signal",
      "Wellness 250–1,000 mg IV: Convention",
      "SC / IM dose: Not validated",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Tolerability depends on rate, concentration, carrier volume, population, and product quality — not milligrams alone. Commercial 500 mg infusions averaged ~97 minutes and were symptomatic in all six recipients (cramping, GI symptoms, chest pressure, tachycardia). HF trials reported limited acute complaints at slower 10–50 mg schedules. FDA has documented endotoxin contamination and unsuitable food-grade material in sterile compounding. Urgent signs (chest pain, dyspnea, fever/rigors, hypotension, same-lot clusters) require immediate medical evaluation.",
    dosage:
      "No universal NAD+ dose. Strongest clinical replication anchor: 10 mg assay-corrected beta-NAD+ in 100 mL once daily × 7 days, start 100–120 mL/h, max 200 mL/h. Separate contexts: 50 mg/day × 7 (smaller HF RCT); 750 mg once over 6 hours (PK); 500 mg/day × 4 (poorly tolerated commercial series). Validated SC/IM dose: none located. Wellness 250–1,000 mg IV and community SC/IM charts are anecdotal conventions.",
    glance: [
      { label: "Compound class", value: "Coenzyme — not a peptide", highlight: true },
      { label: "≠ precursors", value: "NR · NMN · niacin · NADH" },
      { label: "Strongest IV clinical", value: "10 mg daily × 7 days (HF)" },
      { label: "Highest controlled IV", value: "750 mg / 6 hours" },
      { label: "500 mg commercial", value: "Poorly tolerated if faster" },
      { label: "Validated SC / IM", value: "None located" },
      { label: "Main acute concern", value: "Rate + sterile quality" },
    ],
    compare: {
      columns: ["10 mg HF RCT", "750 mg PK", "Wellness IV convention"],
      highlight: 0,
      rows: [
        {
          feature: "Amount",
          values: ["10 mg / day", "750 mg once", "Often 250–1,000 mg / session"],
        },
        {
          feature: "Evidence",
          values: [
            "Largest direct-NAD+ RCT (HF)",
            "Small metabolome / PK pilot",
            "Anecdotal / practitioner",
          ],
        },
        {
          feature: "Duration",
          values: ["7 days", "6 hours once", "Variable sessions"],
        },
        {
          feature: "Rate context",
          values: [
            "~40–60 min; max 200 mL/h",
            "Fixed 6-hour infusion",
            "Often faster; tolerability variable",
          ],
        },
        {
          feature: "Use for wellness dosing?",
          values: ["No — disease-specific", "No — PK only", "Not validated"],
        },
      ],
    },
    research: [
      {
        tag: "HF RCT",
        title: "NAD+ in ischemic-cardiomyopathy heart failure",
        summary: "10 mg IV daily × 7 days; n=180; LVEF between-group P < 0.05.",
        cite: "Yu et al., 2026",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12779688/",
      },
      {
        tag: "HF pilot",
        title: "NAD+ in older patients with heart failure",
        summary: "50 mg IV daily × 7 days; main LVEF/NT-proBNP comparisons NS.",
        cite: "Pei et al., 2024",
        href: "https://www.imrpress.com/journal/RCM/25/8/10.31083/j.rcm2508297",
      },
      {
        tag: "PK",
        title: "Plasma and urine NAD+ metabolome during 6-hour IV infusion",
        summary: "750 mg over 6 hours; n=8 active; metabolome endpoints.",
        cite: "Grant et al., 2019",
        href: "https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2019.00257/full",
      },
      {
        tag: "Clinic",
        title: "IV NAD+ versus NR — retrospective tolerability pilot",
        summary: "500 mg × 4 days; all 6 NAD+ clients symptomatic.",
        cite: "Reyna et al., 2026",
        href: "https://www.frontiersin.org/journals/aging/articles/10.3389/fragi.2026.1652582/full",
      },
      {
        tag: "Oral",
        title: "Oral LNAD+ RCT — whole-blood intracellular NAD",
        summary: "Proprietary oral product; 5-day biomarker study.",
        cite: "Kornilov et al., 2026",
        href: "https://pubmed.ncbi.nlm.nih.gov/42530810/",
      },
      {
        tag: "FDA",
        title: "Ingredients suitable for sterile compounding",
        summary: "Food-grade NAD+ unsuitable without appropriate processing.",
        cite: "FDA",
        href: "https://www.fda.gov/drugs/human-drug-compounding/fda-reminds-compounders-use-ingredients-suitable-sterile-compounding",
      },
    ],
  }),
  pinealon: makePeptide({
    slug: "pinealon",
    name: "Pinealon",
    pageTitle:
      "Pinealon Dosage: Human Oral and IM Research, Protocol, and Math",
    goalSlug: "improve-focus",
    goalLabel: "Improve Focus",
    rankBadge: "EDR Tripeptide · Oral Microgram Reports",
    summary:
      "Evidence-based Pinealon dosage guide covering human oral and IM reports, patent Example 8, community SC conventions, identity traps vs Epitalon/AC-5, reconstitution math, safety, and a proposed oral research protocol.",
    rating: "4.3",
    reviewCount: "310",
    researchedBadge: "0.1–0.2 mg Oral · No Validated SC Dose",
    tags: [
      "EDR · Glu-Asp-Arg",
      "0.1–0.2 mg Oral",
      "≠ Epitalon",
      "No Validated SC / IN",
    ],
    dosageGuide: PINEALON_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "Synthetic tripeptide EDR (Glu-Asp-Arg). ≠ Epitalon (AEDG), pineal extract, or AC-5 complex by default.",
      },
      {
        label: "Best-described oral",
        body: "0.2 mg twice daily × 20–30 days in a secondary TBI-series account; also 0.1 mg BID × 14 days.",
      },
      {
        label: "Community SC trap",
        body: "100–300 µg to 5–10 mg daily schedules disagree ~100-fold — conventions, not trial protocols.",
      },
    ],
    about:
      "Pinealon is the synthetic tripeptide L-Glu–L-Asp–L-Arg (EDR), a cortex-associated peptide bioregulator — not a pineal hormone or Epitalon (AEDG). Human evidence mainly documents short oral courses at 0.1–0.2 mg per administration and one European-patent IM example using 1 µg, 10 µg, or 5 mg once daily for 10 days assigned by injury severity. No validated human SC or intranasal dose was located. Gross capsule mass and AC-5 complex products are not automatically interchangeable with assay-corrected EDR.",
    facts: [
      { label: "Type", value: "3-aa tripeptide (EDR)", icon: "type" },
      { label: "Free-peptide MW", value: "≈418.407 g/mol", icon: "flask" },
      { label: "Best-described oral", value: "0.2 mg BID × 20–30 d", icon: "weight" },
      { label: "Validated SC / IN", value: "None located", icon: "clock" },
    ],
    benefits: [
      "Separates Pinealon (EDR) from Epitalon, AC-5 complex, and gross-capsule mass errors",
      "Documents oral microgram reports and severity-confounded patent IM amounts",
      "Oral-course cumulative calculator and proposed PINE-1 replication timeline",
      "Flags 100-fold community SC disagreement and missing human SC/IN PK",
      "Highlights 2015 hematologic/oxidative safety signal and WADA S0 risk",
    ],
    howItWorks:
      "Research themes include ROS modulation in stressed cells, ERK signaling timing, NMDA-subunit expression in animal models, and dendritic-spine/LTP findings in 5xFAD mice. These are mechanistic hypotheses — human brain exposure, bioavailability, and clinical efficacy remain unestablished.",
    mechanisms: [
      {
        title: "Human dosing reality",
        tone: "purple",
        points: [
          "0.1–0.2 mg oral per administration in short courses",
          "Patent IM: 1 µg / 10 µg / 5 mg × 10 days (severity-assigned)",
          "No direct human SC or intranasal PK study located",
        ],
      },
      {
        title: "Identity traps",
        tone: "blue",
        points: [
          "EDR ≠ Epitalon (AEDG)",
          "AC-5 complex ≠ assay-corrected pure EDR",
          "0.2 g capsule mass ≠ 200 mg active peptide",
        ],
      },
      {
        title: "Next study",
        tone: "orange",
        points: [
          "Oral 0.2 mg BID × 28 days replication proposed",
          "Assay-confirmed synthetic EDR + intensive PK",
          "Do not jump to SC/IN without bridging data",
        ],
      },
    ],
    resultBars: [
      "Human Oral Reports: Low",
      "Human SC Dose: None",
      "Community 0.1–10 mg SC: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "The side-effect profile is not adequately characterized. Short oral and patent reports do not show a consistent recurring pattern, but sparse reporting is not proof of safety. A 2015 polymorbidity report described pro-oxidant chemiluminescence and reduced circulating CD34+ markers after Pinealon or Vesugen. Plausible concerns include hypersensitivity, neurologic change in at-risk populations, hematologic monitoring needs, oral-product identity mismatch, and injectable contamination risks if parenteral material is used outside validated research settings.",
    dosage:
      "No established standard dose. Best-described oral exposure: 0.2 mg twice daily for 20–30 days (secondary TBI account); also 0.1 mg twice daily for 14 days and a 15-day athlete schedule totaling 2.0 mg. Patent IM: 1 µg, 10 µg, or 5 mg once daily × 10 days by injury severity — not dose-finding. Validated SC/intranasal: none located. Community SC 100–300 µg to 5–10 mg daily are anecdotal conventions. Proposed research replication: 0.2 mg assay-corrected oral EDR BID × 28 days.",
    glance: [
      { label: "Identity", value: "EDR · Glu-Asp-Arg", highlight: true },
      { label: "≠ Epitalon", value: "AEDG tetrapeptide" },
      { label: "Best-described oral", value: "0.2 mg BID × 20–30 d" },
      { label: "Other oral", value: "0.1 mg BID × 14 d" },
      { label: "Patent IM", value: "1 µg · 10 µg · or 5 mg × 10 d" },
      { label: "Validated SC / IN", value: "None located" },
      { label: "Community SC span", value: "~0.1–10 mg (discordant)" },
    ],
    compare: {
      columns: ["Human oral reports", "Patent IM example", "Community SC"],
      highlight: 0,
      rows: [
        {
          feature: "Amount",
          values: [
            "0.1–0.2 mg per dose",
            "1 µg · 10 µg · or 5 mg",
            "0.1–10 mg / day",
          ],
        },
        {
          feature: "Evidence",
          values: [
            "Small / secondary reports",
            "Patent · severity-confounded",
            "Anecdotal web conventions",
          ],
        },
        {
          feature: "Route",
          values: ["Oral capsules", "Intramuscular", "Subcutaneous"],
        },
        {
          feature: "Duration",
          values: ["14–30 days", "10 days", "Often 5 days–8 weeks"],
        },
        {
          feature: "PK confirmed?",
          values: ["No", "No", "No"],
        },
      ],
    },
    research: [
      {
        tag: "Patent",
        title: "EP 2 024 388 B1 — CNS neuron regeneration peptide",
        summary: "Human IM Example 8: 1 µg / 10 µg / 5 mg × 10 days.",
        cite: "European Patent Office",
        href: "https://data.epo.org/publication-server/rest/v1.2/patents/EP2024388NWB1/document.html",
      },
      {
        tag: "Review",
        title: "Secondary account of 72-person post-TBI oral regimen",
        summary: "0.2 mg BID × 20–30 days described in 2016 review.",
        cite: "Khavinson / Kuznik, 2016",
        href: "https://khavinson.info/assets/files/skan/2016-khavinson_kuznik.pdf",
      },
      {
        tag: "Oral",
        title: "Peptide bioregulators in elderly psychoemotional disorders",
        summary: "0.1 mg oral BID × 14 days.",
        cite: "Balashova et al., 2008",
        href: "https://pubmed.ncbi.nlm.nih.gov/19432183/",
      },
      {
        tag: "Athletes",
        title: "Pinealon and reserve capabilities in judo athletes",
        summary: "15-day oral schedule totaling 2.0 mg; uncontrolled.",
        cite: "Lysenko et al., 2012",
        href: "https://cyberleninka.ru/article/n/vliyanie-pinealona-na-rezervnye-vozmozhnosti-organizma-vysokokvalifitsirovannyh-sportsmenov",
      },
      {
        tag: "Safety signal",
        title: "Synthetic peptides in polymorbidity",
        summary: "Pro-oxidant and CD34+ marker changes reported.",
        cite: "Meshchaninov et al., 2015",
        href: "https://pubmed.ncbi.nlm.nih.gov/26390612/",
      },
      {
        tag: "Preclinical",
        title: "Tripeptides in a mouse Alzheimer model",
        summary: "5xFAD · 400 µg/kg IP — not a human dose.",
        cite: "Khavinson et al., 2021",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8227791/",
      },
    ],
  }),
  thymagen: makePeptide({
    slug: "thymagen",
    name: "Thymagen",
    pageTitle:
      "Thymagen (Thymogen) Dosage: Human Trials, Timogen Labels, and Research Protocol",
    goalSlug: "longevity",
    goalLabel: "Longevity",
    rankBadge: "α-Glu-Trp · 100 µg Timogen Anchor",
    summary:
      "Evidence-based Thymagen/Thymogen dosage guide covering regional Timogen IM and nasal 100 µg schedules, Regasthym oral gel RCT, IM862 oncology trials, community SC conventions, identity traps, and a proposed IM research protocol.",
    rating: "4.4",
    reviewCount: "380",
    researchedBadge: "100 µg IM/Nasal · No Validated SC Dose",
    tags: [
      "α-Glu-Trp · EW",
      "100 µg/day Timogen",
      "≠ Thymalin / TA-1",
      "No Validated SC",
    ],
    dosageGuide: THYMAGEN_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "L-α-Glu-L-Trp (Thymogen). ≠ Thymalin extract, TA-1, Bestim (γ), or IM862 disodium by default.",
      },
      {
        label: "Clearest microgram dose",
        body: "Regional adult Timogen: 100 µg IM or metered nasal daily × 3–10 days (0.3–1.0 mg course).",
      },
      {
        label: "Vial trap",
        body: "A 20 mg research vial is 20–67× an entire adult IM course — fill size ≠ clinical course.",
      },
    ],
    about:
      "Thymagen is the common online spelling for synthetic L-alpha-glutamyl-L-tryptophan (Thymogen/Timogen, EW). Human and regional-product exposures include 100 µg/day IM or metered nasal Timogen, a 1.98 mg/day oral gastric-gel RCT, and high-dose intranasal IM862 oncology programs that later failed to show benefit. No validated human SC dose was located. Spelling alone does not establish salt, assay, or sterility.",
    facts: [
      { label: "Type", value: "2-aa dipeptide (α-Glu-Trp)", icon: "type" },
      { label: "Free-peptide MW", value: "≈333.34 g/mol", icon: "flask" },
      { label: "Regional adult dose", value: "100 µg/day IM or nasal", icon: "weight" },
      { label: "Validated SC", value: "None located", icon: "clock" },
    ],
    benefits: [
      "Separates Thymagen/Thymogen from Thymalin, TA-1, Bestim, and IM862",
      "Documents 100 µg Timogen IM/nasal and 7-day wound-study overlap",
      "Covers Regasthym 1.98 mg/day oral gel RCT and negative IM862 oncology results",
      "Course-vs-20 mg-vial calculator and THYMAGEN-1 IM microdose timeline",
      "Flags unverified SC bioavailability/half-life claims and WADA S0 risk",
    ],
    howItWorks:
      "Regional and experimental literature discuss T-cell differentiation, cytokine signaling, phagocytosis, and repair-related hypotheses. No confirmed human receptor occupancy threshold, intact-peptide half-life, or SC bioavailability was established in accessible sources.",
    mechanisms: [
      {
        title: "Documented exposures",
        tone: "purple",
        points: [
          "100 µg/day regional IM and metered nasal",
          "1.98 mg/day oral gel × 28 days (product-specific)",
          "IM862 5–60 mg/day-scale nasal — later negative",
        ],
      },
      {
        title: "Identity traps",
        tone: "blue",
        points: [
          "α-Glu-Trp ≠ Thymalin or TA-1",
          "α ≠ γ (Bestim) linkage",
          "Free-peptide label ≠ disodium salt mass",
        ],
      },
      {
        title: "Next study",
        tone: "orange",
        points: [
          "100 µg IM × 5 days + intact-peptide PK",
          "Avoid unbridged SC escalation",
          "Do not graft oncology nasal milligrams",
        ],
      },
    ],
    resultBars: [
      "Regional 100 µg Timogen: Documented",
      "Human SC Dose: None",
      "Community 10–1,000 µg SC: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Regional IM instructions list allergic reactions; metered nasal lists allergic-rhinitis symptoms. Regasthym oral trial reported no significant AE difference vs placebo during treatment. IM862 oncology trials often reported limited acute toxicity, but Kaposi phase III showed shorter median progression — a disease-outcome concern. Repeated SC use, chronic cycling, stacks, immunogenicity, and research-vial contamination risks remain poorly characterized.",
    dosage:
      "No universal standard. Clearest regional adult Timogen: 100 µg once daily IM for 3–10 days (also 100 µg/day metered nasal). Wound study: 100 µg IM × 7 days. Oral gel RCT: 0.99 mg BID (1.98 mg/day) × 28 days. Oncology IM862: 5 mg IN every other day or 20 mg TID — not general Thymagen dosing. Validated SC: none located. Proposed research: 100 µg free-peptide eq. IM daily × 5 days.",
    glance: [
      { label: "Identity", value: "L-α-Glu-L-Trp · EW", highlight: true },
      { label: "Regional adult", value: "100 µg/day IM or nasal" },
      { label: "Oral gel RCT", value: "1.98 mg/day × 28 d" },
      { label: "Oncology nasal", value: "5 mg EOD – 20 mg TID" },
      { label: "Validated SC", value: "None located" },
      { label: "20 mg vial", value: "20–67× adult IM course" },
      { label: "≠", value: "Thymalin · TA-1 · Bestim" },
    ],
    compare: {
      columns: ["Timogen 100 µg", "Regasthym oral gel", "Community SC"],
      highlight: 0,
      rows: [
        {
          feature: "Daily amount",
          values: ["100 µg", "1.98 mg", "10–1,000 µg"],
        },
        {
          feature: "Evidence",
          values: [
            "Regional label + wound study",
            "Product-specific RCT",
            "Anecdotal web pages",
          ],
        },
        {
          feature: "Route",
          values: ["IM or metered nasal", "Oral gel matrix", "Usually SC"],
        },
        {
          feature: "Course",
          values: ["3–10 days", "28 days", "Often 5 days–16 weeks"],
        },
        {
          feature: "Interchangeable?",
          values: ["Product-specific", "No → capsule/injection", "Not validated"],
        },
      ],
    },
    research: [
      {
        tag: "Oral RCT",
        title: "Alpha-glutamyl-tryptophan in chronic atrophic gastritis",
        summary: "1.98 mg/day oral gel × 28 days; histologic gland signal.",
        cite: "Baryshnikova et al., 2023",
        href: "https://pubmed.ncbi.nlm.nih.gov/37272441/",
      },
      {
        tag: "Wound",
        title: "Alpha-glutamyl-tryptophan in postsurgical wounds",
        summary: "100 µg IM daily × 7 days as adjunctive therapy.",
        cite: "Kasimova et al., 2020",
        href: "https://sibmed.elpub.ru/jour/article/view/494?locale=en_US",
      },
      {
        tag: "Oncology",
        title: "IM862 phase III in AIDS-Kaposi sarcoma",
        summary: "5 mg IN EOD — not superior; shorter progression.",
        cite: "Noy et al., 2005",
        href: "https://pubmed.ncbi.nlm.nih.gov/15598977/",
      },
      {
        tag: "Oncology",
        title: "IM862 phase II in metastatic renal-cell carcinoma",
        summary: "20 mg IN TID — no objective responses.",
        cite: "Deplanque et al., 2004",
        href: "https://pubmed.ncbi.nlm.nih.gov/15354209/",
      },
      {
        tag: "Product",
        title: "Timogen metered nasal spray instructions",
        summary: "Adult 100 µg/day metered schedule.",
        cite: "Cytomed",
        href: "https://timogen.ru/instruction/",
      },
      {
        tag: "Identity",
        title: "PubChem Thymogen CID 100094",
        summary: "Free-peptide chemical identity.",
        cite: "PubChem",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Thymogen",
      },
    ],
  }),
  thymalin: makePeptide({
    slug: "thymalin",
    name: "Thymalin",
    pageTitle:
      "Thymalin Dosage: Human Studies, Research Protocol, and Extract Quality",
    goalSlug: "longevity",
    goalLabel: "Longevity",
    rankBadge: "Bovine Thymus Extract · IM Label Anchor",
    summary:
      "Evidence-based Thymalin dosage guide covering the Russian medicinal label, 2021 COVID trial, gerontology schedules, online SC conventions, extract identity traps, reconstitution math, safety, and a proposed IM research protocol.",
    rating: "4.5",
    reviewCount: "420",
    researchedBadge: "10 mg IM × 10 Days · Extract Not One Peptide",
    tags: [
      "Thymus Extract",
      "5–20 mg IM × 3–10 Days",
      "≠ TA-1 / Thymogen",
      "No Validated SC",
    ],
    dosageGuide: THYMALIN_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "Heterogeneous bovine-thymus peptide extract — 10 mg extract + 20 mg glycine per vial. Not one sequence or MW.",
      },
      {
        label: "Clearest fixed study",
        body: "10 mg in 2 mL saline IM daily × 10 days (100 mg total) — 2021 severe-COVID RCT.",
      },
      {
        label: "Route trap",
        body: "Registered product and clearest studies use IM. SC web cycles lack a direct human route bridge.",
      },
    ],
    about:
      "Thymalin is a polypeptide complex extracted from bovine thymus tissue — not Thymogen (α-Glu-Trp), thymosin alpha-1, or thymulin. Current Russian medicinal instructions: 5–20 mg IM daily for 3–10 days (30–100 mg per course). The clearest modern fixed exposure is 10 mg in 2 mL saline IM × 10 days. A 10 mg vial means 10 mg total extract mass — no meaningful molar dose. Online SC schedules are extrapolations without a located human route bridge.",
    facts: [
      { label: "Type", value: "Bovine thymus extract (mixture)", icon: "type" },
      { label: "Current vial", value: "10 mg extract + 20 mg glycine", icon: "flask" },
      { label: "Regional adult IM", value: "5–20 mg daily × 3–10 d", icon: "weight" },
      { label: "Validated SC", value: "None located", icon: "clock" },
    ],
    benefits: [
      "Separates Thymalin extract from Thymogen, TA-1, thymulin, and Epitalon stacks",
      "Documents regional 5–20 mg IM label and 2021 10 mg × 10-day COVID trial",
      "Explains why molar conversion and single-peptide labels are invalid",
      "Course calculator and THYMALIN-1 IM protocol timeline",
      "Flags SC route migration, bacteriostatic-water conventions, and extract QC",
    ],
    howItWorks:
      "Thymalin is described as modulating T-cell differentiation, cytokine signaling, and immune markers in specific clinical contexts. Cell studies at 100 ng/mL show context-dependent effects. No validated whole-extract PK, single receptor occupancy threshold, or SC bioavailability dataset was located.",
    mechanisms: [
      {
        title: "Documented IM exposures",
        tone: "purple",
        points: [
          "5–20 mg IM daily × 3–10 days (regional label)",
          "10 mg in 2 mL saline IM × 10 days (COVID trial)",
          "Five spaced 10 mg doses (2003 Kyiv cohort)",
        ],
      },
      {
        title: "Identity traps",
        tone: "blue",
        points: [
          "Extract ≠ Thymogen / TA-1 / thymulin",
          "10 mg = total extract — not one peptide",
          "No molar dose for whole vial",
        ],
      },
      {
        title: "Next study",
        tone: "orange",
        points: [
          "10 mg IM × 10 days + GMP lot fingerprint",
          "Glycine-matched placebo · flu vaccine challenge",
          "Batch-specific peptide-feature PK — not one half-life",
        ],
      },
    ],
    resultBars: [
      "Regional IM Label: Documented",
      "2021 COVID Trial: Small signal",
      "Online SC Cycles: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Current monograph lists allergic reactions; contraindicates pregnancy/breastfeeding. Extract-specific risks include batch variability, anti-product antibodies, BSE/TSE source controls, endotoxin/particulates, and misidentification with synthetic peptides. Long-term repeated courses, autoimmune effects, and SC safety are poorly characterized. Immune marker changes are not automatically clinical benefit.",
    dosage:
      "No US standard. Regional adult treatment: 5–20 mg IM once daily for 3–10 days (30–100 mg per course). Preventive: 5–10 mg IM daily for 3–5 days. Clearest fixed study: 10 mg in 2 mL 0.9% saline IM daily × 10 days (100 mg total). Validated SC: none located. Proposed research replication: 10 mg extract in 2 mL IM daily × 10 days with GMP lot and glycine-matched placebo.",
    glance: [
      { label: "Identity", value: "Bovine thymus extract", highlight: true },
      { label: "10 mg vial", value: "10 mg extract + 20 mg glycine" },
      { label: "Regional adult IM", value: "5–20 mg × 3–10 days" },
      { label: "COVID trial", value: "10 mg IM × 10 days" },
      { label: "Validated SC", value: "None located" },
      { label: "Molar dose", value: "Not meaningful" },
      { label: "≠", value: "TA-1 · Thymogen · thymulin" },
    ],
    compare: {
      columns: ["Regional IM label", "2021 COVID trial", "Online SC convention"],
      highlight: 0,
      rows: [
        {
          feature: "Daily amount",
          values: ["5–20 mg", "10 mg fixed", "Often 5–10 mg SC"],
        },
        {
          feature: "Route",
          values: ["IM (registered)", "IM in 2 mL saline", "Usually SC"],
        },
        {
          feature: "Course",
          values: ["3–10 days", "10 days", "Often 5–10 days + repeats"],
        },
        {
          feature: "Evidence",
          values: [
            "Regional monograph",
            "Small RCT · unreplicated",
            "Anecdotal · no SC bridge",
          ],
        },
        {
          feature: "Product",
          values: [
            "Registered extract + glycine",
            "Trial product",
            "Research vial of uncertain fingerprint",
          ],
        },
      ],
    },
    research: [
      {
        tag: "Monograph",
        title: "Thymalin — current Russian medicinal monograph",
        summary: "5–20 mg IM daily × 3–10 days; 30–100 mg/course.",
        cite: "Vidal Russia, 2025",
        href: "https://www.vidal.ru/drugs/thymalin__23838",
      },
      {
        tag: "COVID RCT",
        title: "Thymalin in severe COVID-19 older patients",
        summary: "10 mg IM daily × 10 days; small randomized single-blind trial.",
        cite: "Kuznik et al., 2021",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8654498/",
      },
      {
        tag: "Gerontology",
        title: "Peptides of pineal gland and thymus prolong human life",
        summary: "2003 — multiple schedules; unreplicated mortality claims.",
        cite: "Khavinson & Morozov, 2003",
        href: "https://pubmed.ncbi.nlm.nih.gov/14523363/",
      },
      {
        tag: "Review",
        title: "Thymic peptides for cancer patients — Cochrane",
        summary: "Multiple thymus extracts — not one Thymalin dose.",
        cite: "Wolf et al., 2011",
        href: "https://pubmed.ncbi.nlm.nih.gov/21328265/",
      },
      {
        tag: "Cells",
        title: "Inflammatory pathways in THP-1 monocytes/macrophages",
        summary: "100 ng/mL — mechanistic only.",
        cite: "Avolio et al., 2022",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8999041/",
      },
    ],
  }),
  "ahk-cu": makePeptide({
    slug: "ahk-cu",
    name: "AHK-Cu",
    pageTitle:
      "AHK-Cu Dosage: Topical Research, Follicle Evidence, and Protocol",
    goalSlug: "hair-growth",
    goalLabel: "Hair Growth",
    rankBadge: "Copper Tripeptide-3 · Ex-Vivo Follicle Data",
    summary:
      "Evidence-based AHK-Cu dosage guide covering Pyo 2007 ex-vivo follicle concentrations, patent animal topical percentages, commercial conventions, GHK-Cu conflation traps, topical math, and the proposed AHK-CU-SCALP-01 protocol. No living human AHK-Cu dose located.",
    rating: "4.4",
    reviewCount: "310",
    researchedBadge: "Not FDA Approved · No Human Trial · Topical First",
    tags: [
      "Copper Tripeptide-3",
      "Ex-Vivo Follicles",
      "≠ GHK-Cu",
      "No Validated Injection",
    ],
    dosageGuide: AHK_CU_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "AHK-Cu complex",
        body: "Ala-His-Lys copper(II) complex (~415.93 g/mol). One-residue change from GHK-Cu alters evidence base.",
      },
      {
        label: "Direct human evidence",
        body: "Ex-vivo scalp follicles only — 10⁻¹²–10⁻⁹ M stimulatory; 10⁻⁸–10⁻⁷ M inhibitory.",
      },
      {
        label: "Route anchor",
        body: "Patent mouse topical 0.1%/0.5% w/w. Proposed first human program: topical 0.01–0.10% w/v.",
      },
    ],
    about:
      "AHK-Cu (Copper Tripeptide-3) is a copper complex of Ala-His-Lys studied for hair-follicle biology. The clearest direct evidence is Pyo et al., 2007 on isolated human follicles — not scalp application in living people. Patent work used 0.1% and 0.5% topical in mice. Commercial products often use ~0.05%–1%; online SC claims have no human AHK-Cu study. AHK-Cu is frequently conflated with GHK-Cu and the ALAVAX GHK trial.",
    facts: [
      { label: "Type", value: "Copper tripeptide (Ala-His-Lys)", icon: "type" },
      { label: "Complex MW", value: "~415.93 g/mol", icon: "flask" },
      { label: "Stimulatory lab range", value: "10⁻¹²–10⁻⁹ M", icon: "weight" },
      { label: "Human trial dose", value: "None located", icon: "clock" },
    ],
    benefits: [
      "Separates AHK-Cu from GHK-Cu, ALAVAX, and Copper Tripeptide-1 cocktails",
      "Documents biphasic ex-vivo concentration-response (stimulatory vs inhibitory)",
      "Patent 0.1%/0.5% topical and proposed AHK-CU-SCALP-01 timeline",
      "Topical concentration × volume calculator with nominal copper exposure",
      "Flags SC injection claims and culture-to-topical % extrapolation errors",
    ],
    howItWorks:
      "AHK-Cu is proposed to influence dermal papilla cell viability and ex-vivo follicle elongation in a concentration-dependent, biphasic manner. Mechanistic apoptosis markers were explored at 10⁻⁹ M but clinical hair regrowth, scalp PK, and validated human dosing are unestablished.",
    mechanisms: [
      {
        title: "Follicle culture signal",
        tone: "purple",
        points: [
          "10⁻¹²–10⁻⁹ M stimulated elongation and MTT",
          "10⁻⁸–10⁻⁷ M inhibited elongation",
          "Ex-vivo only — not a scalp dose",
        ],
      },
      {
        title: "Topical rationale",
        tone: "blue",
        points: [
          "Patent 0.1%/0.5% w/w mouse topical",
          "Proposed human arms: 0.01–0.10% w/v",
          "Penetration and tox gates required first",
        ],
      },
      {
        title: "Identity traps",
        tone: "orange",
        points: [
          "≠ GHK-Cu (Copper Tripeptide-1)",
          "ALAVAX used GHK + 5-ALA",
          "SC µg–mg schedules unvalidated",
        ],
      },
    ],
    resultBars: [
      "Ex-Vivo Follicles: Mechanistic",
      "Human Trial: None",
      "Topical %: Convention",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No formal treated-human AHK-Cu safety dataset. Lab data show loss of stimulatory effect at 10⁻⁸–10⁻⁷ M. Plausible topical risks include dermatitis, pruritus, staining, and sensitization. Systemic copper absorption on intact scalp is unknown — Wilson disease is a special concern. Injectable use lacks a human safety program; research vials may not meet sterile/endotoxin standards.",
    dosage:
      "No established human AHK-Cu dose. Direct evidence: ex-vivo culture 10⁻¹²–10⁻⁹ M stimulatory; 10⁻⁸–10⁻⁷ M inhibitory. Patent mouse topical: 0.1% and 0.5% w/w. Commercial topicals commonly ~0.05%–1%; DIY often 1–2 mg/mL. Online SC claims (50 µg–2 mg) have no human AHK-Cu study. Proposed first human program (AHK-CU-SCALP-01): vehicle plus 0.01%, 0.05%, 0.10% w/v at 1 mL/day × 24 weeks after preclinical gates.",
    glance: [
      { label: "Identity", value: "Ala-His-Lys · Copper Tripeptide-3", highlight: true },
      { label: "≠", value: "GHK-Cu · ALAVAX GHK trial" },
      { label: "Human participants", value: "None in controlled research" },
      { label: "Stimulatory lab range", value: "10⁻¹²–10⁻⁹ M" },
      { label: "Patent mouse topical", value: "0.1% · 0.5% w/w" },
      { label: "Validated injection", value: "None located" },
      { label: "Proposed study", value: "0.01–0.10% topical × 24 wk" },
    ],
    compare: {
      columns: ["AHK-Cu (direct evidence)", "GHK-Cu", "Online SC claims"],
      highlight: 0,
      rows: [
        {
          feature: "Sequence",
          values: ["Ala-His-Lys", "Gly-His-Lys", "Often mislabeled GHK"],
        },
        {
          feature: "Human dose evidence",
          values: ["Ex-vivo only", "Topical studies + anecdotal SC", "No AHK-Cu trial"],
        },
        {
          feature: "Typical topical",
          values: ["0.05%–1% (unvalidated)", "0.5%–1%", "N/A"],
        },
        {
          feature: "Injectable",
          values: ["None validated", "1–2 mg anecdotal", "50 µg–2 mg unvalidated"],
        },
      ],
    },
    research: [
      {
        tag: "Follicles",
        title: "The effect of tripeptide-copper complex on human hair growth",
        summary: "Ex-vivo follicles · 10⁻¹³–10⁻⁷ M · biphasic response.",
        cite: "Pyo HK et al., 2007",
        href: "https://pubmed.ncbi.nlm.nih.gov/17166266/",
      },
      {
        tag: "Patent",
        title: "US5538945 — Peptide compositions for hair growth",
        summary: "0.1%/0.5% topical and intradermal AHK:Cu animal examples.",
        cite: "US Patent",
        href: "https://patents.google.com/patent/US5538945A/",
      },
      {
        tag: "Mis-citation",
        title: "ALAVAX hair-loss trial (5-ALA + GHK)",
        summary: "GHK combination — not AHK-Cu.",
        cite: "Lee YB et al., 2016",
        href: "https://pubmed.ncbi.nlm.nih.gov/27433589/",
      },
      {
        tag: "WADA",
        title: "2026 Prohibited List",
        summary: "AHK-Cu not named; S0 may still apply.",
        cite: "WADA",
        href: "https://www.wada-ama.org/sites/default/files/2025-09/2026list_en_final_clean_september_2025.pdf",
      },
    ],
  }),
  dihexa: makePeptide({
    slug: "dihexa",
    name: "Dihexa",
    pageTitle: "Dihexa Dosage: Research Protocols, Evidence, and Safety",
    goalSlug: "improve-focus",
    goalLabel: "Cognition",
    rankBadge: "PNB-0408 · No Human Dose · EOC + Retraction",
    summary:
      "Evidence-based Dihexa dosage guide covering McCoy 2013 rat oral 2 mg/kg (expression of concern), retracted HGF/MET mechanism literature, 5–20 mg community oral conventions, assay-correct powder math, fosgonimeton distinction, and proposed 100 mcg microdose first-in-human design.",
    rating: "4.2",
    reviewCount: "380",
    researchedBadge: "Not FDA Approved · No Human Trial · Preclinical Only",
    tags: [
      "PNB-0408",
      "2 mg/kg Rat Oral (EOC)",
      "5–20 mg Anecdotal",
      "Mechanism Retracted",
    ],
    dosageGuide: DIHEXA_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "Hexanoyl-Tyr-Ile-Ahx-NH2 · MW 504.66 g/mol · confirm free vs Dihexa acetate assay basis.",
      },
      {
        label: "Evidence integrity",
        body: "McCoy 2013 under expression of concern; Benoist 2014 HGF/MET paper retracted 2025.",
      },
      {
        label: "Proposed FIH",
        body: "100 mcg microdose → SAD 0.1–3 mg → MAD 0.1–1 mg × 14 days — below community range.",
      },
    ],
    about:
      "Dihexa (PNB-0408) is a synthetic angiotensin IV analog studied preclinically for synaptic and memory-related endpoints. No human Dihexa dose, PK, or controlled safety study was identified. The main oral animal anchor is 2 mg/kg/day in rats (McCoy 2013, expression of concern 2021). Online protocols commonly use 5–20 mg oral once daily for 4–8 weeks — community conventions without human validation. Fosgonimeton (40 mg SC in LIFT-AD) is a related but non-transferable compound.",
    facts: [
      { label: "Type", value: "Peptidomimetic (PNB-0408)", icon: "type" },
      { label: "MW", value: "504.66 g/mol", icon: "flask" },
      { label: "Rat oral anchor", value: "2 mg/kg/day (EOC)", icon: "weight" },
      { label: "Human trial dose", value: "None identified", icon: "clock" },
    ],
    benefits: [
      "Documents evidence-integrity status (EOC + 2025 retraction) on every anchor claim",
      "Separates Dihexa from Dihexa acetate and fosgonimeton dose bridges",
      "Maps 5–20 mg community oral/topical conventions vs preclinical-only evidence",
      "Assay-correct powder math and mass-to-mole calculator",
      "Proposed Phase 0/1 microdose → SAD → MAD protocol timeline",
    ],
    howItWorks:
      "Proposed HGF/MET potentiation model rested on retracted 2014 mechanism work. Angiotensin IV/IRAP and PI3K/AKT (Sun 2021 mouse) remain preclinical threads. Rat brain penetration (McCoy 2013) requires independent replication. Mechanism does not establish human mg dosing.",
    mechanisms: [
      {
        title: "HGF/MET (disputed)",
        tone: "purple",
        points: [
          "Principal mechanism paper retracted 2025",
          "“10 million × BDNF” — assay artifact",
          "Target engagement unresolved",
        ],
      },
      {
        title: "Preclinical anchors",
        tone: "blue",
        points: [
          "Oral 1.25–2 mg/kg rats · EOC",
          "APP/PS1 mice 1.44/2.88 mg/kg",
          "No validated human bridge",
        ],
      },
      {
        title: "Community protocols",
        tone: "orange",
        points: [
          "5–20 mg oral most repeated",
          "Half-life claims unverified",
          "Capsule strength ≠ trial dose",
        ],
      },
    ],
    resultBars: [
      "Human Trial: None",
      "Rat Oral 2 mg/kg: EOC",
      "5–20 mg Oral: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No human incidence table exists. Anecdotal reports include headache, nausea, anxiety, insomnia, irritability, and mood change — without denominator or causality assessment. HGF/MET biology creates unresolved mechanism-level proliferative concern; not documented Dihexa carcinogenicity. Neurologic/psychiatric effects uncharacterized. Poor water solubility makes injectable and ad hoc reconstitution formulations especially uncertain.",
    dosage:
      "No established human dose. Preclinical: McCoy 2013 oral 1.25–2 mg/kg rats, IP 0.05–0.5 mg/kg, ICV 0.1–1 nmol (expression of concern); Sun 2021 mice 1.44/2.88 mg/kg/day × 3 months. Community convention: 5–20 mg oral once daily × 4–8 weeks (anecdotal). Proposed FIH: 100 mcg microdose PK, then SAD 0.1–3 mg, then MAD 0.1–1 mg × 14 days after GLP tox and GMP product. Powder required (mg) = target Dihexa mass ÷ active assay fraction.",
    glance: [
      { label: "Human dose", value: "None established", highlight: true },
      { label: "Rat oral anchor", value: "2 mg/kg/day (EOC)" },
      { label: "Community oral", value: "5–20 mg anecdotal" },
      { label: "Human half-life", value: "Unknown" },
      { label: "Mechanism paper", value: "Retracted 2025" },
      { label: "Proposed FIH start", value: "100 mcg microdose" },
      { label: "≠", value: "Fosgonimeton · Dihexa acetate without assay" },
    ],
    compare: {
      columns: ["McCoy rat oral", "Community oral", "Proposed FIH MAD"],
      highlight: 2,
      rows: [
        {
          feature: "Dose",
          values: ["2 mg/kg/day", "5–20 mg/day", "0.1–1 mg/day × 14 d"],
        },
        {
          feature: "Evidence",
          values: ["Preclinical · EOC", "Anecdotal", "Proposed study design"],
        },
        {
          feature: "Human data",
          values: ["None", "None", "None until conducted"],
        },
        {
          feature: "Route",
          values: ["Oral gavage", "Oral capsule/powder", "GMP oral product"],
        },
      ],
    },
    research: [
      {
        tag: "Animal · EOC",
        title: "Metabolically stabilized angiotensin IV analogs",
        summary: "Oral 1.25–2 mg/kg · expression of concern 2021.",
        cite: "McCoy et al., 2013",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3533412/",
      },
      {
        tag: "Retracted",
        title: "HGF/c-Met procognitive effects — Benoist 2014",
        summary: "Retracted April 2025 — do not use as mechanism proof.",
        cite: "JPET",
        href: "https://pubmed.ncbi.nlm.nih.gov/40312093/",
      },
      {
        tag: "Mouse",
        title: "Dihexa in APP/PS1 mice — PI3K/AKT",
        summary: "1.44/2.88 mg/kg × 3 months · independent group.",
        cite: "Sun et al., 2021",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8615599/",
      },
      {
        tag: "Related",
        title: "Fosgonimeton LIFT-AD — NCT04488419",
        summary: "40 mg SC daily · negative primary endpoints · not Dihexa.",
        cite: "ClinicalTrials.gov",
        href: "https://clinicaltrials.gov/study/NCT04488419",
      },
    ],
  }),
  dsip: makePeptide({
    slug: "dsip",
    name: "DSIP",
    pageTitle: "DSIP Dosage: Research Protocols, Human Studies, and Safety",
    goalSlug: "better-sleep",
    goalLabel: "Better Sleep",
    rankBadge: "Emideltide · 25–30 nmol/kg IV · SC Unvalidated",
    summary:
      "Evidence-based DSIP (emideltide) dosage guide covering historical 25–30 nmol/kg IV sleep studies, nmol/kg to mcg/kg conversion, mixed human efficacy, 100–400 mcg SC community conventions, ~8 min IV half-life limits, PCAC 7–6 vote, and proposed SC Phase 1b protocol.",
    rating: "4.5",
    reviewCount: "720",
    researchedBadge: "Not FDA Approved · IV Human Data · SC Unvalidated",
    tags: [
      "Emideltide",
      "25–30 nmol/kg IV",
      "100–400 mcg SC Anecdotal",
      "No Receptor Confirmed",
    ],
    dosageGuide: DSIP_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "WAGGDASGE · MW ~848.8 g/mol · confirm free base vs emideltide acetate assay basis.",
      },
      {
        label: "Human sleep anchor",
        body: "25–30 nmol/kg IV (~21–25 mcg/kg, ~1.5–1.8 mg/70 kg) — small trials, mixed results.",
      },
      {
        label: "Community SC",
        body: "100–400 mcg before bed — no controlled human SC sleep trial identified.",
      },
    ],
    about:
      "DSIP (emideltide) is a nine-amino-acid peptide (WAGGDASGE) named for early delta-sleep association. Historical insomnia research used 25–30 nmol/kg intravenously in small 1980s–90s trials with mixed findings. No dedicated receptor, gene, or precursor is confirmed. Contemporary 100–400 mcg subcutaneous bedtime protocols are community conventions — route and bioavailability differ from IV research. FDA July 2026 PCAC voted 7–6 against 503A inclusion.",
    facts: [
      { label: "Type", value: "Nonapeptide (emideltide)", icon: "type" },
      { label: "MW", value: "~848.8 g/mol", icon: "flask" },
      { label: "Human IV anchor", value: "25–30 nmol/kg", icon: "weight" },
      { label: "IV half-life (limited)", value: "~8 minutes", icon: "clock" },
    ],
    benefits: [
      "Converts historical nmol/kg IV doses to mcg/kg and total mg by weight",
      "Separates IV research anchors from 100–400 mcg SC community protocols",
      "Maps human sleep study results including negative-leaning independent trials",
      "Documents emideltide vs acetate identity and assay requirements",
      "Proposed SC sentinel escalation and 14-night MAD protocol timeline",
    ],
    howItWorks:
      "No confirmed receptor. Hypotheses include indirect opioid-system signaling, GABA/glutamate modulation, neuroendocrine effects, and circadian-state dependence. Name association with delta sleep does not prove reliable stage N3 increase. Short IV plasma half-life does not define SC dosing interval.",
    mechanisms: [
      {
        title: "Mechanism status",
        tone: "purple",
        points: [
          "No confirmed receptor or gene",
          "Kovalzon 2006: “unresolved riddle”",
          "Endogenous role uncertain",
        ],
      },
      {
        title: "Historical human IV",
        tone: "blue",
        points: [
          "25–30 nmol/kg sleep studies",
          "Mixed efficacy · small n",
          "~209 people IV exposure total",
        ],
      },
      {
        title: "Community SC",
        tone: "orange",
        points: [
          "100–400 mcg before bed",
          "No SC sleep PK or trial",
          "≠ IV nmol/kg without bridge",
        ],
      },
    ],
    resultBars: [
      "Human IV Sleep: Mixed",
      "25–30 nmol/kg: Historical",
      "100–400 mcg SC: Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "IV withdrawal studies reported perspiration, headache, nausea, vertigo, and hypotension in several cases — confounded by withdrawal state. Anesthesia study noted tachycardia and reduced HRV under isoflurane. No controlled human SC adverse-event incidence table exists. Product quality concerns include aggregation, endotoxin, and impurities flagged in FDA compounding review.",
    dosage:
      "No FDA-approved dose. Historical sleep research: 25–30 nmol/kg IV (~21–25 mcg/kg, ~1.5–1.8 mg for 70 kg). Community convention: 100–400 mcg SC 30–60 min before bed, nightly or 3× weekly, 2–8 weeks (anecdotal). Proposed Phase 1b: SAD 50/150/300/600 mcg SC → MAD 150/300 mcg × 14 nights with PSG. mcg/kg = nmol/kg × 0.8488. IV and SC are not interchangeable without measured exposure.",
    glance: [
      { label: "Sequence", value: "WAGGDASGE · emideltide", highlight: true },
      { label: "Human IV anchor", value: "25–30 nmol/kg" },
      { label: "70 kg IV total", value: "~1.5–1.8 mg" },
      { label: "Community SC", value: "100–400 mcg anecdotal" },
      { label: "SC sleep trial", value: "None identified" },
      { label: "IV half-life", value: "~8 min (limited)" },
      { label: "≠", value: "IV nmol/kg · SC mcg without PK bridge" },
    ],
    compare: {
      columns: ["Historical IV", "Community SC", "Proposed SC MAD"],
      highlight: 2,
      rows: [
        {
          feature: "Dose",
          values: ["25–30 nmol/kg", "100–400 mcg fixed", "150/300 mcg × 14 nights"],
        },
        {
          feature: "Evidence",
          values: ["Small human trials · mixed", "Anecdotal", "Proposed study design"],
        },
        {
          feature: "Route",
          values: ["Intravenous", "Subcutaneous", "Subcutaneous + PSG"],
        },
        {
          feature: "PK characterized",
          values: ["IV only (limited)", "No", "Planned dense PK"],
        },
      ],
    },
    research: [
      {
        tag: "FDA · PCAC",
        title: "Emideltide compounding review",
        summary: "July 2026 · IV-dominated evidence · no SC PK.",
        cite: "FDA",
        href: "https://www.fda.gov/media/193344/download",
      },
      {
        tag: "Review",
        title: "DSIP: a still unresolved riddle",
        summary: "Mechanism and endogenous status — Kovalzon 2006.",
        cite: "J Neurochem",
        href: "https://pubmed.ncbi.nlm.nih.gov/16539679/",
      },
      {
        tag: "Human · Sleep",
        title: "Schneider-Helmert sleep studies",
        summary: "25–30 nmol/kg IV · small trials.",
        cite: "Neuropsychobiology",
        href: "https://pubmed.ncbi.nlm.nih.gov/6895513/",
      },
      {
        tag: "Human · Negative",
        title: "Bes 1992 chronic insomniacs",
        summary: "25 nmol/kg IV · limited benefit.",
        cite: "Neuropsychobiology",
        href: "https://pubmed.ncbi.nlm.nih.gov/1299794/",
      },
      {
        tag: "Human · IN",
        title: "Intranasal DSIP P300 study",
        summary: "5 mcg/kg · not insomnia trial.",
        cite: "Hruz 2001",
        href: "https://pubmed.ncbi.nlm.nih.gov/11763019/",
      },
    ],
  }),
  "melanotan-1": makePeptide({
    slug: "melanotan-1",
    name: "Melanotan 1",
    pageTitle:
      "Melanotan-1 (Afamelanotide) Dosage: SCENESSE Label, Injection Research, and Study Protocol",
    goalSlug: "skin-health",
    goalLabel: "Skin Health",
    rankBadge: "SCENESSE 16 mg q2mo · 0.16 mg/kg Plateau",
    summary:
      "Evidence-based Melanotan-1 / afamelanotide guide covering SCENESSE 16 mg implant every 2 months for EPP, historical 0.08–0.16 mg/kg SC injection research, implant vs bolus PK, online 50–500 mcg mismatch, MT-II distinction, labeled adverse events, and proposed 12 vs 16 mg AFM-EPP-OPT trial.",
    rating: "4.5",
    reviewCount: "560",
    researchedBadge: "FDA-Approved Implant (EPP) · Injection Research Historical · Vial ≠ SCENESSE",
    tags: [
      "Afamelanotide",
      "SCENESSE 16 mg",
      "0.16 mg/kg Plateau",
      "Implant ≠ Injection",
      "≠ Melanotan II",
    ],
    dosageGuide: MELANOTAN_1_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "[Nle⁴,D-Phe⁷]-α-MSH · MW ~1646.85 Da · MC1R agonist — development name Melanotan-1.",
      },
      {
        label: "Approved dose",
        body: "SCENESSE 16 mg controlled-release implant q2mo · adult EPP · trained HCP.",
      },
      {
        label: "Injection research",
        body: "0.08–0.16 mg/kg SC · 0.16 mg/kg = 12 mg at 75 kg — not 0.16 mg total.",
      },
    ],
    about:
      "Melanotan-1 is the development name for afamelanotide, a synthetic 13-amino-acid α-MSH analogue approved as SCENESSE — a 16 mg bioresorbable controlled-release subcutaneous implant every 2 months for adults with erythropoietic protoporphyria (EPP). Historical pigmentation research used weight-based SC injections (0.08–0.16 mg/kg). Online reconstituted vials and nasal sprays are not SCENESSE and do not inherit its approval or dosing. Increased pigmentation does not replace sun protection.",
    facts: [
      { label: "INN", value: "Afamelanotide", icon: "type" },
      { label: "MW", value: "~1646.85 Da", icon: "flask" },
      { label: "Approved dose", value: "16 mg implant q2mo", icon: "weight" },
      { label: "Injection plateau", value: "0.16 mg/kg", icon: "clock" },
    ],
    benefits: [
      "Separates afamelanotide from Melanotan II and PT-141",
      "mg/kg weight calculator showing online mcg mismatch",
      "Implant vs soluble injection PK comparison",
      "Human study table from 1991 injection to EPP pivotal trials",
      "Labeled adverse reaction table and pigment surveillance guidance",
      "Proposed 12 vs 16 mg AFM-EPP-OPT implant trial design",
    ],
    howItWorks:
      "Afamelanotide binds MC1R → cAMP → melanogenic machinery → eumelanin synthesis and transfer. Pigment outlasts plasma drug after soluble injection. The PLGA implant slows release (median Tmax 36 h) to support q2mo dosing. Pigmentation is incomplete photoprotection and does not eliminate skin-cancer risk.",
    mechanisms: [
      {
        title: "Approved implant",
        tone: "blue",
        points: [
          "16 mg PLGA · EPP phototoxicity",
          "Cmax ~3.7 ng/mL · t½ ~15 h",
          "Eumelanin without required UV",
        ],
      },
      {
        title: "Historical injection",
        tone: "purple",
        points: [
          "0.08–0.16 mg/kg SC",
          "Plateau at 0.16 mg/kg (n=8)",
          "Terminal t½ 0.8–1.7 h",
        ],
      },
      {
        title: "Online conventions",
        tone: "orange",
        points: [
          "50–500 mcg fixed SC common",
          "12–48× lower than trial mg/kg",
          "Often paired with UV/sunbeds",
        ],
      },
    ],
    resultBars: [
      "SCENESSE Label: 16 mg q2mo",
      "Injection Research: 0.16 mg/kg Plateau",
      "Online Fixed Dose: 50–500 mcg Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Labeled EPP trials: implant-site reaction 21%, nausea 19%, fatigue 6%, skin hyperpigmentation 4%, melanocytic nevus 4%. Postmarketing hypersensitivity including anaphylaxis — 30-min observation required. Full-body skin exam twice yearly recommended. Online vials add identity, potency, contamination, and injection-site infection risks. Case reports with illicit melanotan often involve MT-II or uncertain products.",
    dosage:
      "FDA-approved: SCENESSE 16 mg controlled-release implant subcutaneously every 2 months by trained healthcare professional for adult EPP. Historical injection research: 0.08–0.16 mg/kg SC per dose for 10–20 administrations; Levine 1999 plateau at 0.16 mg/kg daily × 10 days. Online convention: ~0.05–2 mg fixed SC with loading/maintenance (unvalidated). Proposed AFM-EPP-OPT: 12 vs 16 mg implant every 56 days × 4 in EPP.",
    glance: [
      { label: "Approved product", value: "SCENESSE 16 mg implant", highlight: true },
      { label: "Approved schedule", value: "Every 2 months · EPP" },
      { label: "Injection research", value: "0.08–0.16 mg/kg SC" },
      { label: "0.16 mg/kg at 75 kg", value: "12 mg (not 0.16 mg)" },
      { label: "Online fixed dose", value: "50–500 mcg anecdotal" },
      { label: "Implant = injection?", value: "No" },
      { label: "≠", value: "Melanotan II · tanning vial" },
    ],
    compare: {
      columns: ["SCENESSE label", "Injection research", "Proposed AFM-EPP-OPT"],
      highlight: 0,
      rows: [
        {
          feature: "Dose",
          values: ["16 mg implant", "0.08–0.16 mg/kg SC", "12 vs 16 mg implant"],
        },
        {
          feature: "Interval",
          values: ["Every 2 months", "10–20 doses over weeks", "Every 56 days × 4"],
        },
        {
          feature: "Population",
          values: ["Adult EPP", "Healthy volunteers / pigmentation", "Adult EPP"],
        },
        {
          feature: "Evidence",
          values: ["FDA approved", "Historical small studies", "Proposed Phase 2b"],
        },
      ],
    },
    research: [
      {
        tag: "Label",
        title: "SCENESSE prescribing information",
        summary: "16 mg implant · EPP · PK · AEs.",
        cite: "DailyMed",
        href: "https://dailymed.nlm.nih.gov/dailymed/lookup.cfm?setid=94f53286-11dd-7fbb-e053-2a95a90a7c48",
      },
      {
        tag: "Human",
        title: "Levine 1999 dose-ranging",
        summary: "0.16 mg/kg plateau · GI/fatigue higher.",
        cite: "J Dermatolog Treat",
        href: "https://doi.org/10.3109/09546639909056014",
      },
      {
        tag: "Human",
        title: "Langendonk 2015 EPP (CUV039)",
        summary: "16 mg q60 d · pain-free sun hours.",
        cite: "NEJM",
        href: "https://pubmed.ncbi.nlm.nih.gov/26132941/",
      },
      {
        tag: "Human",
        title: "Ugwu 1997 PK",
        summary: "SC bioavailability · oral undetectable.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/9113347/",
      },
      {
        tag: "Safety",
        title: "TGA melanotan warning",
        summary: "Counterfeit/poor quality illicit products.",
        cite: "TGA",
        href: "https://www.tga.gov.au/news/blog/dont-risk-using-tanning-products-containing-melanotan",
      },
    ],
  }),
  "melanotan-2": makePeptide({
    slug: "melanotan-2",
    name: "Melanotan-2",
    pageTitle:
      "Melanotan-2 Dosage: Research Evidence, Human Trials, and Study Protocol",
    goalSlug: "sexual-health",
    goalLabel: "Libido",
    rankBadge: "No FDA Dose · 0.025 mg/kg · ~23 Men",
    summary:
      "Evidence-based Melanotan-2 guide covering cyclic MT-II identity vs afamelanotide and bremelanotide, 0.010–0.030 mg/kg SC human trials (~23 men), 1996 pilot escalation, online 0.10–0.50 mg mismatch, broad MC1R/MC3R/MC4R receptor effects, priapism/toxicity case reports, and proposed MT2-SAD/MAD-01 Phase I below 0.025 mg/kg.",
    rating: "4.2",
    reviewCount: "920",
    researchedBadge: "No FDA Approval · ~23 Human Subjects · Online Doses Unvalidated",
    tags: [
      "MT-II",
      "0.025 mg/kg Most Repeated",
      "No FDA Label",
      "Broad MC Receptors",
      "≠ SCENESSE · VYLEESI",
    ],
    dosageGuide: MELANOTAN_2_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "Ac-Nle-c[Asp-His-D-Phe-Arg-Trp-Lys]-NH₂ · MW ~1024 Da · cyclic lactam · broad MC agonism.",
      },
      {
        label: "Human research",
        body: "0.010–0.030 mg/kg SC · 0.025 mg/kg most repeated · ~23 unique men total.",
      },
      {
        label: "Online vs trial",
        body: "0.25 mg online ≠ 0.025 mg/kg at 75 kg (~1.875 mg). No validated maintenance or nasal dose.",
      },
    ],
    about:
      "Melanotan-2 (MT-II) is a synthetic cyclic α-MSH analogue with broad melanocortin receptor agonism — pigmentation alongside nausea, yawning, appetite suppression, sexual arousal, and spontaneous erections. No FDA-approved product or dosage exists. Published human evidence spans approximately 23 unique men: a three-person pigmentation pilot (0.010–0.030 mg/kg SC) and two ten-person erectile-dysfunction crossover studies at 0.025 mg/kg. Online tanning protocols commonly use 0.10–0.50 mg fixed injections — not validated equivalents of the trial record.",
    facts: [
      { label: "Structure", value: "Cyclic heptapeptide", icon: "type" },
      { label: "MW", value: "~1024.18 Da", icon: "flask" },
      { label: "Human range", value: "0.010–0.030 mg/kg", icon: "weight" },
      { label: "FDA approval", value: "None", icon: "clock" },
    ],
    benefits: [
      "Separates MT-II from afamelanotide (SCENESSE) and bremelanotide (VYLEESI)",
      "mg/kg calculator vs online fixed-dose mismatch",
      "1996 pilot escalation table and human study summary",
      "Receptor pathway map (MC1R pigmentation + MC3R/MC4R central effects)",
      "Priapism, toxicity, and product-quality case report table",
      "Proposed MT2-SAD/MAD-01 cohort design below 0.025 mg/kg",
    ],
    howItWorks:
      "MT-II activates MC1R in melanocytes (eumelanin) and MC3R/MC4R central pathways (appetite, nausea, yawning, sexual arousal, erection). Broad receptor activity means pigmentation doses cannot be assumed to avoid central effects. Pigment change lags plasma exposure — re-dosing for cosmetic color risks stacking exposure.",
    mechanisms: [
      {
        title: "Human trials",
        tone: "blue",
        points: [
          "Dorr 1996 · 0.010–0.030 mg/kg",
          "Wessells ED · 0.025 mg/kg",
          "~23 unique men total",
        ],
      },
      {
        title: "Central effects",
        tone: "purple",
        points: [
          "MC3R/MC4R pathways",
          "Erections at 0.025 mg/kg all 3 pilot men",
          "Grade 2 somnolence at 0.030 mg/kg",
        ],
      },
      {
        title: "Online conventions",
        tone: "orange",
        points: [
          "0.10–0.50 mg fixed SC",
          "Daily loading + weekly maintenance",
          "Often with uncontrolled UV",
        ],
      },
    ],
    resultBars: [
      "Human Research: 0.025 mg/kg SC",
      "At 75 kg: ~1.875 mg per Dose",
      "Online Fixed: 0.10–0.50 mg Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Controlled studies: nausea, yawning, flushing, somnolence at 0.030 mg/kg, spontaneous erections at 0.025 mg/kg in tiny male cohorts. Case reports: priapism at reported 2 mg SC, rhabdomyolysis at reported 6 mg, renal infarction, melanoma/nevi changes often with sunbeds. Product testing: labeled 10 mg vials contained 4.32–8.84 mg MT-II with impurities; TGA 2026 found inconsistently dosed nasal sprays.",
    dosage:
      "No FDA-approved dose. Human research: 0.010–0.030 mg/kg SC per injection; 0.025 mg/kg most repeated (~1.875 mg at 75 kg). Dorr 1996 pilot: five active doses on alternating weekdays. Online convention: 0.10–0.50 mg SC daily loading then weekly maintenance (unvalidated). Proposed MT2-SAD/MAD-01: Part A 0.003–0.018 mg/kg SAD; Part B 0.006/0.012 mg/kg on days 1,3,5,7,9.",
    glance: [
      { label: "FDA-approved dose", value: "None", highlight: true },
      { label: "Human research", value: "0.010–0.030 mg/kg SC" },
      { label: "Most repeated", value: "0.025 mg/kg" },
      { label: "At 75 kg", value: "~1.875 mg per dose" },
      { label: "Online fixed", value: "0.10–0.50 mg anecdotal" },
      { label: "Human n", value: "~23 unique men" },
      { label: "≠", value: "SCENESSE · VYLEESI doses" },
    ],
    compare: {
      columns: ["Dorr 1996 pilot", "Wessells ED studies", "Proposed SAD/MAD"],
      highlight: 2,
      rows: [
        {
          feature: "Dose",
          values: ["0.010–0.030 mg/kg", "0.025 mg/kg", "0.003–0.018 mg/kg SAD"],
        },
        {
          feature: "Schedule",
          values: ["5 active doses/2 wk", "Crossover singles", "Sentinel cohort escalation"],
        },
        {
          feature: "Endpoint",
          values: ["Pigmentation + erections", "RigiScan ED", "PK + melanin index safety"],
        },
        {
          feature: "Evidence",
          values: ["3 men", "10 men each", "Proposed Phase I · 56 total"],
        },
      ],
    },
    research: [
      {
        tag: "Human",
        title: "Dorr 1996 MT-II pilot",
        summary: "0.010–0.030 mg/kg · 3 men · pigmentation.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/8637402/",
      },
      {
        tag: "Human",
        title: "Wessells 1998 psychogenic ED",
        summary: "0.025 mg/kg SC · RigiScan crossover.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/9679884/",
      },
      {
        tag: "Human",
        title: "Wessells 2000 organic ED",
        summary: "0.025 mg/kg · severe nausea in subset.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/11018622/",
      },
      {
        tag: "Safety",
        title: "Breindahl vial analysis",
        summary: "4.32–8.84 mg in labeled 10 mg vials.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/24771717/",
      },
      {
        tag: "FDA",
        title: "Melanotan II enforcement",
        summary: "Unapproved injectable tanning drug.",
        cite: "FDA",
        href: "https://www.fda.gov/regulatory-information/electronic-reading-room/notice-opportunity-hearing-nooh-manookian-edward-8516",
      },
    ],
  }),
  "kisspeptin-10": makePeptide({
    slug: "kisspeptin-10",
    name: "Kisspeptin-10",
    pageTitle:
      "Kisspeptin-10 Dosage: Research Evidence, Route Mathematics, and Study Protocol",
    goalSlug: "sexual-health",
    goalLabel: "Libido",
    rankBadge: "KP-10 · IV t½ ~4 min · SC Pump 2026",
    summary:
      "Evidence-based Kisspeptin-10 guide covering YNWNSFGLRF-NH₂ identity vs KP-54, nmol/mcg unit math, IV bolus non-monotonic dose-response (1 mcg/kg max LH), route-specific human study table, Yeung 2026 SC pump program (continuous vs intermittent), KP-54 fertility confusion, online 100–500 mcg bolus conventions, and proposed 1.25/2.5 nmol/kg/h intermittent trial.",
    rating: "4.4",
    reviewCount: "480",
    researchedBadge: "Early Clinical · SC Pump 2026 · No U.S. Label · FDA Category 2",
    tags: [
      "KP-10",
      "IV t½ ~4 min",
      "1 mcg/kg Max LH IV",
      "150 nmol/h Pump × 12 d",
      "≠ Kisspeptin-54",
    ],
    dosageGuide: KISSPEPTIN_10_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "YNWNSFGLRF-NH₂ · MW ~1302 Da · KISS1R agonist upstream of GnRH — ≠ KP-54.",
      },
      {
        label: "Unit math",
        body: "1 nmol ≈ 1.302 mcg · bolus ≠ hourly rate · fixed nmol/h ≠ nmol/kg/h.",
      },
      {
        label: "2026 SC pump",
        body: "150 nmol/h · 8 h on / 16 h off × 12 d · healthy men — not fixed daily bolus.",
      },
    ],
    about:
      "Kisspeptin-10 (KP-10) is the amidated C-terminal decapeptide YNWNSFGLRF-NH₂ that activates KISS1R/GPR54 upstream of GnRH, LH, FSH, and gonadal sex steroids. IV plasma half-life is approximately 3.8–4 minutes, making exposure pattern as important as dose. Human research spans IV boluses (0.01–3 mcg/kg; 1 mcg/kg maximally effective), IV infusions, and 2026 SC pump studies. FDA 2024 PCAC voted against 503A inclusion; KP-10 is in Category 2 as of May 2026. No validated fixed SC bolus for hypogonadism or fertility.",
    facts: [
      { label: "Sequence", value: "YNWNSFGLRF-NH₂", icon: "type" },
      { label: "MW", value: "~1302 Da", icon: "flask" },
      { label: "IV half-life", value: "~3.8–4 min", icon: "clock" },
      { label: "1 nmol", value: "≈ 1.302 mcg", icon: "weight" },
    ],
    benefits: [
      "Separates KP-10 from Kisspeptin-54 and common misspellings",
      "nmol ↔ mcg converter and weight-based bolus calculator",
      "Human study table from IV bolus to 2026 SC pump arms",
      "Yeung 2026 continuous vs intermittent comparison",
      "KP-54 fertility schedule confusion table",
      "Proposed Part A/B intermittent SC pump trial design",
    ],
    howItWorks:
      "KP-10 binds KISS1R on GnRH neurons → GnRH release → pituitary LH/FSH → gonadal steroids with multi-layer feedback. LH changes within minutes; testosterone follows later; semen outcomes require months. Non-monotonic and attenuating dose responses mean higher dose ≠ greater endocrine output.",
    mechanisms: [
      {
        title: "Human IV evidence",
        tone: "blue",
        points: [
          "George 2011 · 1 mcg/kg max LH",
          "Infusion 1.5–4 mcg/kg/h",
          "Sex/cycle-phase dimorphism",
        ],
      },
      {
        title: "2026 SC pump",
        tone: "purple",
        points: [
          "1.25–10 nmol/kg/h × 8 h acute",
          "Continuous 5 d → attenuation",
          "Intermittent 12 d → preserved",
        ],
      },
      {
        title: "Online conventions",
        tone: "orange",
        points: [
          "100–500 mcg SC bolus common",
          "Bolus ≠ 8-h infusion",
          "KP-54 doses misapplied",
        ],
      },
    ],
    resultBars: [
      "IV Bolus Max LH: 1 mcg/kg",
      "SC Pump 2026: 150 nmol/h × 12 d",
      "Online Fixed Bolus: 100–500 mcg Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "~300 people in short IV/SC studies per FDA 2024 review; no SAEs in those studies but small samples. FAERS: 17-year-old · 100 mcg SC daily × 6 weeks · weight gain and increased estrone (causality not established). Risks include endocrine overstimulation, tachyphylaxis, fertility effects, hematocrit rise, and immune reactions to aggregates. FDA Category 2 compounding concerns: immunogenicity, aggregation, impurities.",
    dosage:
      "Human IV bolus (healthy men): 0.01–3 mcg/kg — 1 mcg/kg maximally effective for LH. IV infusion: 1.5–4 mcg/kg/h up to 22.5 h. SC pump acute (Yeung 2026): 1.25–10 nmol/kg/h × 8 h. Intermittent SC pump: 150 nmol/h × 8 h/day + 16 h off × 12 days. Online convention: 100–500 mcg SC 1–2× daily (unvalidated). Proposed trial: 1.25 or 2.5 nmol/kg/h × 8 h/day × 28 days in functional secondary hypogonadism.",
    glance: [
      { label: "Sequence", value: "YNWNSFGLRF-NH₂ · ~1302 Da", highlight: true },
      { label: "IV half-life", value: "~3.8–4 minutes" },
      { label: "Max LH IV bolus", value: "1 mcg/kg (men)" },
      { label: "2026 SC pump", value: "150 nmol/h · 8 h on/16 h off" },
      { label: "Lowest 2026 SC rate", value: "1.25 nmol/kg/h × 8 h" },
      { label: "Online fixed bolus", value: "100–500 mcg anecdotal" },
      { label: "≠", value: "Kisspeptin-54 fertility doses" },
    ],
    compare: {
      columns: ["IV bolus (George 2011)", "SC pump intermittent (2026)", "Proposed Part B"],
      highlight: 2,
      rows: [
        {
          feature: "Exposure",
          values: ["Single bolus", "150 nmol/h × 8 h/day", "1.25 or 2.5 nmol/kg/h × 8 h"],
        },
        {
          feature: "Duration",
          values: ["Acute", "12 days", "28 days"],
        },
        {
          feature: "Population",
          values: ["Healthy men", "Healthy eugonadal men", "Functional 2° hypogonadism"],
        },
        {
          feature: "Evidence",
          values: ["Controlled IV", "Small healthy-male study", "Proposed RCT"],
        },
      ],
    },
    research: [
      {
        tag: "Human",
        title: "George 2011 IV bolus/infusion",
        summary: "1 mcg/kg max LH · non-monotonic response.",
        cite: "JCEM",
        href: "https://doi.org/10.1210/jc.2011-0089",
      },
      {
        tag: "Human",
        title: "Yeung 2026 chronic SC KP-10",
        summary: "SC pump acute, continuous, intermittent.",
        cite: "Eur J Endocrinol",
        href: "https://doi.org/10.1093/ejendo/lvag134",
      },
      {
        tag: "Human",
        title: "Jayasena 2015 KP-10 vs KP-54",
        summary: "Equimolar IV infusion comparison.",
        cite: "Hum Reprod",
        href: "https://doi.org/10.1093/humrep/dev143",
      },
      {
        tag: "Human",
        title: "Naveed 2026 continuous IV",
        summary: "12.5 mcg/kg/h × 24 h.",
        cite: "Hormones",
        href: "https://doi.org/10.1007/s42000-026-00795-y",
      },
      {
        tag: "FDA",
        title: "KP-10 PCAC briefing 2024",
        summary: "0-11-0 vote · Category 2 (2026).",
        cite: "FDA",
        href: "https://www.fda.gov/media/182089/download",
      },
    ],
  }),
  semax: makePeptide({
    slug: "semax",
    name: "Semax",
    pageTitle: "Semax Dosage: Research Evidence, Russian Label, and Study Protocol",
    goalSlug: "improve-focus",
    goalLabel: "Cognition",
    rankBadge: "MEHFPGP · 0.1% vs 1% · 400–900 mcg/day Fatigue",
    summary:
      "Evidence-based Semax guide covering MEHFPGP identity vs acetate and analogs, tenfold 0.1% vs 1% concentration math (~50 vs 500 mcg/drop), Russian indication-specific 0.1% schedules, 1% acute-stroke regimens, human study table, online IN/SC conventions, and proposed 400/900/1,800 mcg/day dose-ranging protocol.",
    rating: "4.5",
    reviewCount: "620",
    researchedBadge: "Russian IN Product · Heterogeneous Human Data · No U.S. Label",
    tags: [
      "MEHFPGP",
      "0.1% vs 1%",
      "400–900 mcg/day Fatigue",
      "1.2 mg fMRI Once",
      "No Validated SC Dose",
    ],
    dosageGuide: SEMAX_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "H-MEHFPGP-OH · MW ~813.93 Da · ACTH(4–7)-PGP analog — ≠ N-acetyl · ≠ amidated · ≠ Adamax.",
      },
      {
        label: "0.1% concentration",
        body: "1 mg/mL · ~50 mcg/drop · mental fatigue 400–900 mcg/day × 3–5 days.",
      },
      {
        label: "1% concentration",
        body: "10 mg/mL · ~500 mcg/drop · acute stroke 6–20 mg/day — not cognitive precedent.",
      },
    ],
    about:
      "Semax (Met-Glu-His-Phe-Pro-Gly-Pro) is a synthetic ACTH(4–7) analog with a Pro-Gly-Pro extension, registered in Russia as 0.1% and 1% intranasal products for neurologic and cognitive indications. The 0.1% and 1% formulations differ tenfold in concentration (~50 vs 500 mcg per conventional drop). Russian 0.1% mental-fatigue instructions: 400–900 mcg/day for 3–5 days. Healthy fMRI work used 1.2 mg once — not a daily precedent. FDA 2026 review proposed Semax not for 503A compounding. No validated human subcutaneous dose.",
    facts: [
      { label: "Sequence", value: "MEHFPGP", icon: "type" },
      { label: "MW", value: "~813.93 Da", icon: "flask" },
      { label: "0.1% per drop", value: "~50 mcg", icon: "weight" },
      { label: "Fatigue label", value: "400–900 mcg/day", icon: "clock" },
    ],
    benefits: [
      "Separates parent Semax from N-acetyl, amidated, and Adamax analogs",
      "Tenfold 0.1% vs 1% concentration comparison and drop calculator",
      "Russian 0.1% indication table and 1% stroke regimens with warnings",
      "Human study table from 250 mcg to 20 mg/day by context",
      "Proposed crossover + 400/900/1,800 mcg/day dose-ranging protocol",
    ],
    howItWorks:
      "Preclinical work suggests BDNF/TrkB signaling, neurotrophin gene expression, monoaminergic effects, ischemia-related gene programs, and Pro-Gly-Pro metabolites — no clinically validated receptor-occupancy target guides human dosing. More Semax does not equal proven more BDNF or better human outcomes.",
    mechanisms: [
      {
        title: "Human evidence",
        tone: "blue",
        points: [
          "Russian 0.1% and 1% IN products",
          "Mental fatigue 400–900 mcg/day",
          "Stroke/rehab mg/day contexts",
        ],
      },
      {
        title: "Preclinical",
        tone: "purple",
        points: [
          "25–100 mcg/kg rodents",
          "BDNF/TrkB hippocampal data",
          "Not a human dose bridge",
        ],
      },
      {
        title: "Online conventions",
        tone: "orange",
        points: [
          "100–600 mcg/admin IN common",
          "SC 100–500 mcg/day unvalidated",
          "0.1% vs 1% confusion risk",
        ],
      },
    ],
    resultBars: [
      "Mental Fatigue Label: 400–900 mcg/day",
      "fMRI Healthy: 1.2 mg Once",
      "Online IN: 100–600 mcg Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Russian 0.1% label: mild nasal irritation with prolonged use; contraindications include pregnancy, acute psychiatric states, anxiety disorders, seizure history, and age limits. Expected intranasal concerns include burning, dryness, congestion, epistaxis, and olfactory change. Psychiatric activation, anxiety worsening, insomnia, and mood elevation require monitoring — especially with stimulants. FDA 2026 proposed Semax not for 503A list citing aggregation, impurities, and device/formulation gaps.",
    dosage:
      "Russian 0.1% mental fatigue/adaptation: 400–900 mcg/day in 2–3 administrations during the first half of the day for 3–5 days (2–3 drops/nostril at ~50 mcg/drop). Vascular cognitive dysfunction: 800–8,000 mcg/day × 10–14 days. 1% acute stroke: 6–12 mg/day moderate or 12–20 mg/day severe × 10 days — not cognitive precedents. Healthy fMRI: 1.2 mg once. Online convention: 100–600 mcg intranasal 1–2× daily (anecdotal). SC 100–500 mcg/day unvalidated. Proposed study: 400 vs 900 vs 1,800 mcg/day × 5 days.",
    glance: [
      { label: "Sequence", value: "MEHFPGP · ~813.93 Da", highlight: true },
      { label: "0.1% per drop", value: "~50 mcg" },
      { label: "1% per drop", value: "~500 mcg (10×)" },
      { label: "Mental fatigue", value: "400–900 mcg/day · 3–5 d" },
      { label: "fMRI healthy", value: "1.2 mg once" },
      { label: "Online IN", value: "100–600 mcg anecdotal" },
      { label: "Human SC dose", value: "None validated" },
    ],
    compare: {
      columns: ["0.1% fatigue label", "fMRI single dose", "Proposed Part B"],
      highlight: 2,
      rows: [
        {
          feature: "Daily total",
          values: ["400–900 mcg", "1.2 mg once", "400 / 900 / 1,800 mcg"],
        },
        {
          feature: "Per dose",
          values: ["2–3 drops/nostril", "1% metered", "200+200 / 450+450 / 900+900"],
        },
        {
          feature: "Duration",
          values: ["3–5 days", "Single day", "5 days"],
        },
        {
          feature: "Evidence",
          values: ["Product instructions", "Panikratova 2020", "Proposed RCT"],
        },
      ],
    },
    research: [
      {
        tag: "Label",
        title: "Semax 0.1% Russian instructions",
        summary: "Indication-specific IN regimens.",
        cite: "Semax.ru",
        href: "https://semax.ru/upload/iblock/867/867fc8166acadfb577adc956d855999a3.pdf",
      },
      {
        tag: "Human",
        title: "Panikratova 2020 fMRI",
        summary: "1.2 mg Semax once · separate groups.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/32342318/",
      },
      {
        tag: "Human",
        title: "Gusev 2018 rehabilitation",
        summary: "6 mg/day · two 10-day courses.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/29798983/",
      },
      {
        tag: "Human",
        title: "Gusev 1997 acute stroke",
        summary: "12–18 mg/day stroke context.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/11517472/",
      },
      {
        tag: "FDA",
        title: "Semax PCAC briefing 2026",
        summary: "Proposed not on 503A bulks list.",
        cite: "FDA",
        href: "https://www.fda.gov/media/193348/download",
      },
    ],
  }),
  "snap-8": makePeptide({
    slug: "snap-8",
    name: "Snap-8",
    pageTitle:
      "SNAP-8 Dosage: Topical Concentration, Supplier Math, and Research Protocol",
    goalSlug: "skin-health",
    goalLabel: "Skin Health",
    rankBadge: "3–10% Premix · 15–50 mcg/g · BID × 28 d",
    summary:
      "Evidence-based SNAP-8 (acetyl octapeptide-3) guide covering the critical 3%–10% supplier-solution vs 0.0015%–0.005% pure-peptide distinction, manufacturer BID × 28 d study (~35% mean wrinkle reduction), microneedle combination data, applied-mass calculators, Argireline and Botox confusion, unsupported injection vial claims, and proposed 12-week split-face concentration-ranging protocol.",
    rating: "4.3",
    reviewCount: "380",
    researchedBadge: "Cosmetic Ingredient · No Injectable Dose · Premix Math Critical",
    tags: [
      "Acetyl Octapeptide-3",
      "0.0015–0.005% Pure",
      "50 mcg/g at 0.005%",
      "BID × 28 d Manufacturer",
      "≠ Argireline · Botox",
    ],
    dosageGuide: SNAP8_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "Ac-EEMQRRAD-NH₂ · MW ~1075.2 Da · trade name for 0.05% cosmetic peptide solution.",
      },
      {
        label: "Concentration",
        body: "3%–10% of 0.05% premix = 0.0015%–0.005% pure peptide (15–50 mcg/g).",
      },
      {
        label: "Human evidence",
        body: "10% solution BID × 28 d periocular · n=17 · mean −35% wrinkle depth. No injectable dose.",
      },
    ],
    about:
      "SNAP-8 is a trade name for acetyl octapeptide-3, a cosmetic octapeptide proposed to modulate SNARE complex assembly. The most common dosage error is treating '10% SNAP-8' as 10% pure peptide — it usually means 10% of a 0.05% supplier solution, yielding 0.005% pure peptide (50 mcg/g). Human evidence is limited to small manufacturer topical studies and combination microneedle products. Online lyophilized vial injection schedules have no human pharmacokinetic or safety basis.",
    facts: [
      { label: "Sequence", value: "Ac-EEMQRRAD-NH₂", icon: "type" },
      { label: "MW", value: "~1075.2 Da", icon: "flask" },
      { label: "Pure peptide range", value: "0.0015–0.005%", icon: "weight" },
      { label: "Injectable dose", value: "None validated", icon: "clock" },
    ],
    benefits: [
      "Separates SNAP-8 from Argireline, botulinum toxin, and injection vials",
      "Supplier solution % → pure peptide % → mcg/g converters",
      "Applied-mass calculator and cumulative topical exposure presets",
      "Human study table from manufacturer data to microneedle combinations",
      "Claim checker for '10% pure' and 'topical Botox' marketing",
      "Proposed 12-week split-face 0.0015 / 0.003 / 0.005% RCT design",
    ],
    howItWorks:
      "SNAP-8 is proposed to compete with SNAP-25 for SNARE complex assembly, reducing vesicle fusion and muscle contraction at expression lines — mechanistically distinct from botulinum toxin's enzymatic SNAP-25 cleavage. ~1075 Da hydrophilic peptide faces passive penetration limits through intact skin; placed-on-skin micrograms are not validated tissue doses.",
    mechanisms: [
      {
        title: "Manufacturer topical",
        tone: "blue",
        points: [
          "10% of 0.05% solution · 0.005% pure",
          "BID × 28 d periocular",
          "Mean −35% wrinkle depth (n=17)",
        ],
      },
      {
        title: "Concentration math",
        tone: "purple",
        points: [
          "3% premix → 0.0015% pure",
          "10% premix → 0.005% pure",
          "10% pure would be 2,000× higher",
        ],
      },
      {
        title: "Unsupported routes",
        tone: "orange",
        points: [
          "No validated SC/intradermal dose",
          "Microneedle ≠ serum equivalence",
          "Combination products block monotherapy attribution",
        ],
      },
    ],
    resultBars: [
      "Manufacturer Study: 0.005% · BID × 28 d",
      "Supplier Range: 0.0015–0.005% Pure",
      "Online Injection: Unsupported",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "2024 microneedle study: no AEs in 21 completers over 28 days. 12-week multi-ingredient serum: 2/31 irritation not product-related per investigators. Plausible topical risks include burning, erythema, scaling, ocular exposure near lid margin, and contact reactions to vehicle or preservative. Monitor for facial asymmetry or ptosis though topical neuromuscular exposure is unproven. Raw research powder ≠ cosmetic-grade finished product.",
    dosage:
      "Reconstructable conventional topical human range: 0.0015%–0.005% pure acetyl octapeptide-3 w/w (3%–10% of 0.05% supplier solution), usually twice daily for 28 days in manufacturer reports. At 0.005% with 0.05 g per application: 2.5 mcg placed per site per application. Proposed split-face RCT: 0.0015%, 0.003%, or 0.005% pure peptide vs vehicle · 2 mg/cm² · 0.05 g per side · BID × 12 weeks. No validated injectable dose.",
    glance: [
      { label: "Pure peptide range", value: "0.0015%–0.005% w/w", highlight: true },
      { label: "Supplier use level", value: "3%–10% of 0.05% premix" },
      { label: "mcg/g at 0.005%", value: "50 mcg/g" },
      { label: "Manufacturer regimen", value: "10% solution BID × 28 d" },
      { label: "Mean wrinkle reduction", value: "~35% (manufacturer)" },
      { label: "Injectable dose", value: "None validated" },
      { label: "≠", value: "Argireline · botulinum toxin" },
    ],
    compare: {
      columns: ["3% premix (low)", "10% premix (manufacturer)", "Proposed RCT high arm"],
      highlight: 1,
      rows: [
        {
          label: "Pure peptide %",
          values: ["0.0015%", "0.005%", "0.005%"],
        },
        {
          label: "mcg/g",
          values: ["15", "50", "50"],
        },
        {
          label: "mcg per 0.05 g app",
          values: ["0.75", "2.5", "2.5"],
        },
        {
          label: "Schedule",
          values: ["BID × 28 d (report)", "BID × 28 d (n=17)", "BID × 12 wk (proposed)"],
        },
        {
          label: "Evidence",
          values: ["Secondary report", "Manufacturer study", "Not yet run"],
        },
      ],
    },
    researchCards: [
      {
        tag: "Supplier",
        title: "Lipotec SNAP-8 technical brochure",
        summary: "0.05% solution · 3–10% use · 17-woman BID study.",
        cite: "Lipotec",
        href: "https://www.cossma.com/fileadmin/all/cossma/Archiv/ProductInfo/COS1005_14_ProdSnap8.pdf",
      },
      {
        tag: "Human",
        title: "Moy 2022 peptide-pro serum",
        summary: "Secondary 3% supplier-solution split-face data.",
        cite: "PMC",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10084013/",
      },
      {
        tag: "Human",
        title: "Shin 2024 microneedle patch",
        summary: "0.03% matrix combination · n=21 · no AEs.",
        cite: "Ann Dermatol",
        href: "https://anndermatol.org/DOIx.php?id=10.5021/ad.23.136",
      },
      {
        tag: "Regulatory",
        title: "FDA authority over cosmetics",
        summary: "Cosmetics not premarket-approved.",
        cite: "FDA",
        href: "https://www.fda.gov/cosmetics/cosmetics-laws-regulations/fda-authority-over-cosmetics-how-cosmetics-are-not-fda-approved-are-fda-regulated",
      },
    ],
  }),
  selank: makePeptide({
    slug: "selank",
    name: "Selank",
    pageTitle: "Selank Dosage: Research Evidence, Russian Label, and Study Protocol",
    goalSlug: "improve-focus",
    goalLabel: "Cognition",
    rankBadge: "TKPRPGP · 900 mcg/day Label · 2,700 mcg/day Trial",
    summary:
      "Evidence-based Selank guide covering parent TKPRPGP identity vs analogs, Russian 0.15% intranasal label (2 drops/nostril × 3/day), historical 2,700 mcg/day human trial, Zozulia/Medvedev study table, 300 mcg/kg preclinical anchor, online IN/SC conventions, and proposed 900 vs 2,700 mcg/day Phase 2a protocol.",
    rating: "4.4",
    reviewCount: "540",
    researchedBadge: "Russian IN Product · Limited Human Trials · No U.S. Label",
    tags: [
      "TKPRPGP",
      "900 mcg/day Label",
      "2,700 mcg/day Trial",
      "300 mcg/kg Rat (Preclinical)",
    ],
    dosageGuide: SELANK_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Identity",
        body: "H-TKPRPGP-OH · MW ~751.9 Da · tuftsin-related heptapeptide — ≠ N-acetyl · ≠ amidated analog.",
      },
      {
        label: "Russian label",
        body: "0.15% IN drops · 2/nostril × 3/day × 14 d · ≈900 mcg/day if 75 mcg/drop.",
      },
      {
        label: "Historical trial",
        body: "2,700 mcg/day · 900 mcg × 3 · 14 days — Zozulia / dissertation trace.",
      },
    ],
    about:
      "Selank (Thr-Lys-Pro-Arg-Pro-Gly-Pro) is a synthetic tuftsin-related heptapeptide registered in Russia as 0.15% intranasal drops for anxiety- and stress-related indications. Current instructions: two drops per nostril three times daily for 14 days (~900 mcg/day at historical 75 mcg/drop). The best-documented clinical program used 2,700 mcg/day for 14 days. Human evidence consists of limited small Russian studies. No validated subcutaneous dose, human PK, or U.S. prescribing label.",
    facts: [
      { label: "Sequence", value: "TKPRPGP", icon: "type" },
      { label: "MW", value: "~751.9 Da", icon: "flask" },
      { label: "Russian label", value: "2 drops × 3/day", icon: "weight" },
      { label: "Historical trial", value: "2,700 mcg/day", icon: "clock" },
    ],
    benefits: [
      "Separates parent Selank from N-acetyl and amidated analogs",
      "Russian label drop-count to mcg calculator with 14-day totals",
      "Human study table including Zozulia 2008 and dose-omitted abstracts",
      "Label (~900 mcg/day) vs trial (2,700 mcg/day) comparison",
      "Proposed Phase 2a: 900 vs 2,700 mcg/day with PK lead-in",
    ],
    howItWorks:
      "Preclinical work suggests indirect GABAergic modulation, monoaminergic signaling, enkephalin-degrading enzyme effects, neurotrophin-associated changes, and immune/cytokine modulation — no single receptor-occupancy target guides human dosing. Volkova 2016 (300 mcg/kg rats) found gene-expression changes consistent with complex indirect GABAergic effects.",
    mechanisms: [
      {
        title: "Human evidence",
        tone: "blue",
        points: [
          "Russian 0.15% IN product · 14-day courses",
          "Zozulia 2008 · 2,700 mcg/day program",
          "Small GAD/neurasthenia studies",
        ],
      },
      {
        title: "Preclinical",
        tone: "purple",
        points: [
          "300 mcg/kg rats · IN/IP",
          "GABAergic gene correlations",
          "Not a human dose bridge",
        ],
      },
      {
        title: "Online conventions",
        tone: "orange",
        points: [
          "200–500 mcg/admin IN common",
          "SC 100–500 mcg/day weak",
          "Often less studied route/duration",
        ],
      },
    ],
    resultBars: [
      "Russian Label: ~900 mcg/day",
      "Historical Trial: 2,700 mcg/day",
      "Online IN: 200–500 mcg Anecdotal",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "Russian label: unpleasant taste if drops reach throat; allergic reactions including delayed (frequency not established). Expected intranasal concerns include irritation, epistaxis, and olfactory change. Neurologic and psychiatric effects plausible but incompletely characterized in modern trials. FDA lists selank acetate (TP-7) with compounding characterization and immunogenicity concerns. Long-term safety inadequate.",
    dosage:
      "Russian labeled regimen: 2 drops per nostril three times daily for 14 days (0.15% solution; ≈900 mcg/day if 75 mcg/drop). Historical clinical program: 2,700 mcg/day intranasally in three 900-mcg doses × 14 days. Online convention: 200–500 mcg intranasal 1–3× daily (anecdotal). SC 100–500 mcg/day unvalidated. Rodent anchor 300 mcg/kg — not for human conversion. Proposed Phase 2a: placebo vs 900 vs 2,700 mcg/day × 14 days after PK lead-in.",
    glance: [
      { label: "Sequence", value: "TKPRPGP · ~751.9 Da", highlight: true },
      { label: "Russian label", value: "2 drops/nostril × 3/day" },
      { label: "Approx. label daily", value: "~900 mcg/day" },
      { label: "Historical trial", value: "2,700 mcg/day" },
      { label: "Online IN", value: "200–500 mcg anecdotal" },
      { label: "Human SC dose", value: "None validated" },
      { label: "≠", value: "NA Selank Amidate · N-acetyl only" },
    ],
    compare: {
      columns: ["Russian label", "Historical trial", "Proposed Phase 2a"],
      highlight: 2,
      rows: [
        {
          feature: "Daily total",
          values: ["~900 mcg", "2,700 mcg", "900 vs 2,700 mcg arms"],
        },
        {
          feature: "Per dose",
          values: ["~300 mcg × 3", "900 mcg × 3", "300 or 900 mcg × 3"],
        },
        {
          feature: "Duration",
          values: ["14 days", "14 days", "14 days + 28 d follow-up"],
        },
        {
          feature: "Evidence",
          values: ["Product instructions", "Small human program", "Proposed RCT"],
        },
      ],
    },
    research: [
      {
        tag: "Label",
        title: "Selank 0.15% Russian instructions",
        summary: "2 drops/nostril × 3/day × 14 days.",
        cite: "Selank.ru",
        href: "https://selank.ru/o-selanke/instruktsiya/",
      },
      {
        tag: "Human",
        title: "Zozulia 2008 GAD/neurasthenia",
        summary: "2,700 mcg/day · vs medazepam.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/18454096/",
      },
      {
        tag: "Human",
        title: "Uchakina 2008 cytokine effects",
        summary: "14 days · dose not in abstract.",
        cite: "PubMed",
        href: "https://pubmed.ncbi.nlm.nih.gov/18577961/",
      },
      {
        tag: "Preclinical",
        title: "Volkova 2016 GABAergic genes",
        summary: "300 mcg/kg rats · IN.",
        cite: "PMC",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4757669/",
      },
      {
        tag: "FDA",
        title: "Selank acetate compounding risks",
        summary: "TP-7 · characterization concerns.",
        cite: "FDA",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
    ],
  }),
  "selank-semax": makePeptide({
    slug: "selank-semax",
    name: "Selank + Semax",
    pageTitle:
      "Selank + Semax Dosage: Research Evidence, Blend Conventions, and Study Protocol",
    goalSlug: "improve-focus",
    goalLabel: "Cognition",
    rankBadge: "No Combo Trial · fMRI Separate Groups · 1:1 Mass",
    summary:
      "Evidence-based Selank + Semax blend guide covering dual-peptide identity, 1:1 mass vs equimolar math, Panikratova 2020 separate-group fMRI (not coadministration), parent Russian IN anchors, 50–500 mcg community conventions, and proposed 2×2 factorial 300+300 mcg × 3/day × 14 days.",
    rating: "4.3",
    reviewCount: "380",
    researchedBadge: "No Human Combo Trial · Parent Products Separate",
    tags: [
      "1:1 Mass Blend",
      "300+300 mcg × 3/day Proposed",
      "fMRI Not Combination",
      "Very Low Combo Maturity",
    ],
    dosageGuide: SELANK_SEMAX_DOSAGE_GUIDE,
    moleculeCallouts: [
      {
        label: "Combination status",
        body: "No peer-reviewed human fixed-combination trial located. fMRI 2020 used separate Selank vs Semax vs placebo groups.",
      },
      {
        label: "Proposed factorial",
        body: "300 mcg Selank + 300 mcg Semax IN × 3/day (08:00, 12:00, 16:00) × 14 d — 900 mcg/day each.",
      },
      {
        label: "Vial ≠ dose",
        body: "5 mg + 5 mg describes vial inventory — must specify mcg of each peptide per administration.",
      },
    ],
    about:
      "Selank + Semax combines two heptapeptides (TKPRPGP and MEHFPGP) sharing a C-terminal Pro-Gly-Pro motif. Commercial products often use 1:1 mass ratio — not exactly equimolar. No human coadministration trial was located. Panikratova 2020 assigned separate single-dose Semax (1.2 mg), Selank (0.2 mg), or placebo groups. Parent Russian products: Selank ~900 mcg/day label; Semax 400–900 mcg/day in lower 0.1% contexts. Online blends commonly report 50–500 mcg of each per dose.",
    facts: [
      { label: "Components", value: "Selank + Semax", icon: "type" },
      { label: "Common ratio", value: "1:1 by mass", icon: "flask" },
      { label: "Combo trial", value: "None located", icon: "clock" },
      { label: "Proposed study", value: "300+300 mcg × 3/d", icon: "weight" },
    ],
    benefits: [
      "Separates fixed blend from separate-bottle and vial-label ambiguity",
      "Equimolar calculator — equal mass is not 1:1 moles",
      "Panikratova fMRI table — separate groups, not synergy proof",
      "Parent Selank and Semax anchor comparison",
      "2×2 factorial protocol: crossover lead-in + 4-arm 14-day trial",
    ],
    howItWorks:
      "Preclinical threads: Selank — GABAergic gene-expression correlations; Semax — BDNF/TrkB and monoaminergic effects. Mostly parallel arms, not coadministration. Commercial rationale (Semax focus + Selank calm) is hypothesis only until factorial interaction is measured.",
    mechanisms: [
      {
        title: "Selank threads",
        tone: "blue",
        points: [
          "Tuftsin-related TKPRPGP",
          "GABAergic correlations (rats)",
          "~900 mcg/day label anchor",
        ],
      },
      {
        title: "Semax threads",
        tone: "purple",
        points: [
          "ACTH-fragment analog MEHFPGP",
          "BDNF/TrkB (preclinical)",
          "400–900 mcg/day lower context",
        ],
      },
      {
        title: "Combination gap",
        tone: "orange",
        points: [
          "No human PK interaction",
          "1:1 mass ≠ validated ratio",
          "Attribution needs factorial arms",
        ],
      },
    ],
    resultBars: [
      "Combo Trial: None",
      "fMRI 2020: Separate Groups",
      "Proposed: 900+900 mcg/day",
    ],
    chartLossPct: 0,
    chartLossLbs: 0,
    sideEffects:
      "No adequate human fixed-combination safety dataset. Nasal irritation, activation vs sedation, mood and sleep effects cannot be attributed without placebo and monotherapy arms. FDA compounding materials flag both selank acetate and Semax for characterization and immunogenicity concerns. SC blend schedules lack validated human basis.",
    dosage:
      "No established combination dose. Community IN: commonly 50–500 mcg of each peptide per administration, 1–3× daily, 10–21 days, often 1:1 mass. Proposed factorial study: 300 mcg Selank + 300 mcg Semax intranasally at 08:00, 12:00, 16:00 × 14 days (900 mcg/day each). Part A crossover: single 300 mcg mono or combo doses. Parent anchors alone do not validate coadministration. 5 mg+5 mg vial is not per-dose exposure.",
    glance: [
      { label: "Combo trial", value: "None located", highlight: true },
      { label: "fMRI 2020", value: "Separate groups only" },
      { label: "Common ratio", value: "1:1 by mass" },
      { label: "Online IN", value: "50–500 mcg each" },
      { label: "Proposed study", value: "300+300 × 3/day × 14 d" },
      { label: "Parent/day each", value: "~900 S · 400–900 X" },
      { label: "≠", value: "Vial mg · blend total · synergy claim" },
    ],
    compare: {
      columns: ["Parent Selank", "Parent Semax", "Proposed combination"],
      highlight: 2,
      rows: [
        {
          feature: "Daily (lower context)",
          values: ["~900 mcg IN", "400–900 mcg IN", "900+900 mcg IN each"],
        },
        {
          feature: "Evidence",
          values: ["Russian label + trials", "Indication-specific", "Proposed factorial"],
        },
        {
          feature: "Combination proof",
          values: ["N/A (mono)", "N/A (mono)", "Requires 2×2 trial"],
        },
        {
          feature: "Route",
          values: ["IN drops", "IN drops", "IN metered pump"],
        },
      ],
    },
    research: [
      {
        tag: "Comparative",
        title: "Panikratova 2020 fMRI",
        summary: "Separate Selank 0.2 mg vs Semax 1.2 mg — not blend.",
        cite: "PMID 32342318",
        href: "https://pubmed.ncbi.nlm.nih.gov/32342318/",
      },
      {
        tag: "Selank",
        title: "Russian Selank instructions",
        summary: "2 drops/nostril × 3/day.",
        cite: "Selank.ru",
        href: "https://selank.ru/o-selanke/instruktsiya/",
      },
      {
        tag: "Semax",
        title: "Semax product instructions",
        summary: "Concentration-specific regimens.",
        cite: "Semax.ru",
        href: "https://semax.ru/upload/iblock/867/867fc8166acadfb577dc956d855999a3.pdf",
      },
      {
        tag: "FDA",
        title: "Semax PCAC briefing",
        summary: "July 2026 · not recommended for 503A list.",
        cite: "FDA",
        href: "https://www.fda.gov/media/193348/download",
      },
      {
        tag: "Preclinical",
        title: "Selank GABAergic genes · Semax BDNF",
        summary: "Parallel parent programs only.",
        cite: "PMC / PubMed",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4757669/",
      },
    ],
  }),
};

const PEPTIDE_PAGE_ALIASES = {
  "glp-1-t": "tirzepatide",
  "glp-1-s": "semaglutide",
  "tb-500-thymosin-beta-4": "tb-500",
  fequesetide: "tb-500-fragment-17-23",
  lkktetq: "tb-500-fragment-17-23",
  "h-lkktetq": "tb-500-fragment-17-23",
  "tb-500-fragment": "tb-500-fragment-17-23",
  "tb-500-fragment-dosage": "tb-500-fragment-17-23",
  "modified-grf-1-29": "cjc-1295-no-dac",
  "mod-grf-1-29": "cjc-1295-no-dac",
  "cjc-1295-without-dac": "cjc-1295-no-dac",
  examorelin: "hexarelin",
  "hexarelin-dosage": "hexarelin",
  geref: "sermorelin",
  "sermorelin-dosage": "sermorelin",
  "ghrh-1-29": "sermorelin",
  "long-r3-igf-1": "igf-1-lr3",
  "igf1-lr3": "igf-1-lr3",
  "igf-1-lr3-dosage": "igf-1-lr3",
  "cjc-1295-ipamorelin": "cjc-1295-no-dac-ipamorelin",
  "cjc-1295-no-dac-ipamorelin-dosage": "cjc-1295-no-dac-ipamorelin",
  "cjc-ipa-no-dac": "cjc-1295-no-dac-ipamorelin",
  "ipamorelin-cjc-1295": "cjc-1295-no-dac-ipamorelin",
  "cjc-1295-no-dac-ipamorelin-5-5": "cjc-1295-no-dac-ipamorelin",
  "adamax-dosage": "adamax",
  "ac-mehfpgp-ag": "adamax",
  "klow-dosage": "klow",
  "klow-kpv-ghk-cu-tb-500-bpc-157": "klow",
  "klow-blend": "klow",
  "wolverine-stack": "bpc-157-tb-500",
  wolverine: "bpc-157-tb-500",
  "bpc-tb-500": "bpc-157-tb-500",
  "bpc-157-tb-500-wolverine": "bpc-157-tb-500",
  "bpc-157-tb500": "bpc-157-tb-500",
  "wolverine-blend": "bpc-157-tb-500",
  "bpc-157-tb-500-dosage": "bpc-157-tb-500",
  "glow-dosage": "glow",
  "glow-ghk-cu-tb-500-bpc-157": "glow",
  "glow-blend": "glow",
  "ghk-cu-dosage": "ghk-cu",
  "copper-tripeptide-1": "ghk-cu",
  "copper-tripeptide": "ghk-cu",
  "ghk-copper": "ghk-cu",
  "ghk-cu-topical-powder-dosage": "ghk-cu-topical-powder",
  "copper-tripeptide-1-powder": "ghk-cu-topical-powder",
  "ghk-cu-powder": "ghk-cu-topical-powder",
  "cartalax-dosage": "cartalax",
  "aed-peptide": "cartalax",
  "ala-glu-asp": "cartalax",
  "t-31": "cartalax",
  kartalaks: "cartalax",
  "ara-290-dosage": "ara-290",
  cibinetide: "ara-290",
  ara290: "ara-290",
  phbsp: "ara-290",
  "phbsp-peptide": "ara-290",
  "kpv-dosage": "kpv",
  "lys-pro-val": "kpv",
  "alpha-msh-11-13": "kpv",
  "kpv-acetate": "kpv",
  "ll-37-dosage": "ll-37",
  ll37: "ll-37",
  cathelicidin: "ll-37",
  hcap18: "ll-37",
  ropocamptide: "ll-37",
  "kpv-ghk-cu-dosage": "kpv-ghk-cu",
  "ghk-cu-kpv": "kpv-ghk-cu",
  "kpv-ghk": "kpv-ghk-cu",
  "60-mg-kpv-ghk-cu": "kpv-ghk-cu",
  "bpc-157-ghk-cu-dosage": "bpc-157-ghk-cu",
  "bpc-ghk-cu": "bpc-157-ghk-cu",
  "ghk-cu-bpc-157": "bpc-157-ghk-cu",
  "bpc-ghk": "bpc-157-ghk-cu",
  "50-10-bpc-ghk-cu": "bpc-157-ghk-cu",
  "thymosin-alpha-1-dosage": "thymosin-alpha-1",
  "ta-1": "thymosin-alpha-1",
  ta1: "thymosin-alpha-1",
  thymalfasin: "thymosin-alpha-1",
  zadaxin: "thymosin-alpha-1",
  "thymosin-a1": "thymosin-alpha-1",
  "thymosin-alpha-1-thymalin": "ta-1-thymalin-complex",
  "thymosin-alpha-1-thymalin-dosage": "ta-1-thymalin-complex",
  "ta1-thymalin": "ta-1-thymalin-complex",
  "ta1-thymalin-complex": "ta-1-thymalin-complex",
  "ta-1-complex": "ta-1-thymalin-complex",
  epitalon: "epithalon",
  epithalone: "epithalon",
  aedg: "epithalon",
  "epithalon-dosage": "epithalon",
  "epitalon-dosage": "epithalon",
  "ghk-basic-dosage": "ghk-basic",
  "tripeptide-1": "ghk-basic",
  prezatide: "ghk-basic",
  "copper-free-ghk": "ghk-basic",
  "ghk-free": "ghk-basic",
  "livagen-dosage": "livagen",
  keda: "livagen",
  "lys-glu-asp-ala": "livagen",
  nad: "nad-plus",
  "nad+": "nad-plus",
  nadide: "nad-plus",
  "coenzyme-i": "nad-plus",
  "coenzyme-1": "nad-plus",
  "nad-plus-dosage": "nad-plus",
  "nicotinamide-adenine-dinucleotide": "nad-plus",
  edr: "pinealon",
  "glu-asp-arg": "pinealon",
  "glutamyl-aspartyl-arginine": "pinealon",
  "pinealon-dosage": "pinealon",
  "edr-peptide": "pinealon",
  thymogen: "thymagen",
  timogen: "thymagen",
  "alpha-glu-trp": "thymagen",
  "glu-trp": "thymagen",
  oglufanide: "thymagen",
  "im-862": "thymagen",
  im862: "thymagen",
  "thymagen-dosage": "thymagen",
  "thymogen-dosage": "thymagen",
  timalin: "thymalin",
  "thymalin-dosage": "thymalin",
  "thymus-extract": "thymalin",
  "bovine-thymus-extract": "thymalin",
  "copper-tripeptide-3": "ahk-cu",
  "ahk-cu-dosage": "ahk-cu",
  "ala-his-lys-cu": "ahk-cu",
  "copper-tripeptide-3-dosage": "ahk-cu",
  "pnb-0408": "dihexa",
  "dihexa-dosage": "dihexa",
  "dihexa-acetate": "dihexa",
  "hexanoyl-tyr-ile": "dihexa",
  emideltide: "dsip",
  "delta-sleep-inducing-peptide": "dsip",
  "dsip-dosage": "dsip",
  "emideltide-acetate": "dsip",
  "dsip-acetate": "dsip",
  kp10: "kisspeptin-10",
  "kp-10": "kisspeptin-10",
  metastin: "kisspeptin-10",
  "metastin-45-54": "kisspeptin-10",
  "kisspeptin-10-dosage": "kisspeptin-10",
  "kissapeptin-10": "kisspeptin-10",
  "kissapeptin": "kisspeptin-10",
  afamelanotide: "melanotan-1",
  scenesse: "melanotan-1",
  "mt-1": "melanotan-1",
  "mt-i": "melanotan-1",
  "melanotan-i": "melanotan-1",
  "melanotan-1-dosage": "melanotan-1",
  "nle4-d-phe7-alpha-msh": "melanotan-1",
  "melanotan-ii": "melanotan-2",
  "melanotan-2-dosage": "melanotan-2",
  "mt-ii": "melanotan-2",
  "mt-2": "melanotan-2",
  "n-acetyl-selank-amidate": "selank",
  "na-selank": "selank",
  "na-selank-amidate": "selank",
  "n-acetyl-selank": "selank",
  "ac-tkprpgp-nh2": "selank",
  "selank-dosage": "selank",
  "selank-amidate": "selank",
  "snap-8-dosage": "snap-8",
  snap8: "snap-8",
  "acetyl-octapeptide-3": "snap-8",
  "acetyl octapeptide-3": "snap-8",
  "snap-8-peptide": "snap-8",
  mehfpgp: "semax",
  "semax-dosage": "semax",
  "n-acetyl-semax": "semax",
  "na-semax": "semax",
  "na-semax-amidate": "semax",
  "semax-acetate": "semax",
  "acth-4-7-pgp": "semax",
  "selank-semax-blend": "selank-semax",
  "selank-semax-dosage": "selank-semax",
  "semax-selank": "selank-semax",
  "selank-plus-semax": "selank-semax",
  "thymulin-dosage": "thymulin",
  nonathymulin: "thymulin",
  "fts-zn": "thymulin",
  "serum-thymic-factor": "thymulin",
  "facteur-thymique-serique": "thymulin",
};

export function getPeptidePage(slug) {
  if (PEPTIDE_PAGES[slug]) return PEPTIDE_PAGES[slug];
  const aliased = PEPTIDE_PAGES[PEPTIDE_PAGE_ALIASES[slug]];
  if (!aliased) return null;
  return { ...aliased, slug };
}

export function getAllPeptidePageSlugs() {
  return [...Object.keys(PEPTIDE_PAGES), ...Object.keys(PEPTIDE_PAGE_ALIASES)];
}

/** Fallback profile when slug exists in library but not in rich pages. */
export function buildFallbackPeptidePage(slug, name) {
  return makePeptide({
    slug,
    name,
    rankBadge: "Research Peptide",
    summary: `${name} research profile placeholder. Compare providers, review literature notes, and explore related goals.`,
    rating: "4.5",
    reviewCount: "120",
    tags: ["Research", "Educational"],
    chartLossPct: 0,
    chartLossLbs: 0,
    goalSlug: "lose-weight",
    goalLabel: "Goals",
  });
}

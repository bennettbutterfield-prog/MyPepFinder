/**
 * Research-effects taxonomy for every library peptide.
 * Used by the peptide quiz: optimize goal → refine effect → ranked match.
 */

import { getPeptideOverview, getPeptideOverviewLead } from "@/data/peptide-overviews";
import { getProductBySlug } from "@/data/peptide-taxonomy";

/** @typedef {"clinical"|"early-clinical"|"preclinical"|"limited"|"mixed"} EvidenceLevel */

/**
 * @typedef {object} QuizGoal
 * @property {string} id
 * @property {string} label
 * @property {string} prompt
 * @property {string} tone
 */

/**
 * @typedef {object} ResearchEffect
 * @property {string} id
 * @property {string} goalId
 * @property {string} label
 * @property {string} detail
 */

/**
 * @typedef {object} PeptideEffectTag
 * @property {string} id
 * @property {number} weight
 * @property {EvidenceLevel} evidence
 * @property {boolean} [primary]
 */

/**
 * @typedef {object} PeptideEffectProfile
 * @property {string} slug
 * @property {string} pageSlug
 * @property {string} name
 * @property {"compound"|"blend"} productType
 * @property {string[]} goals
 * @property {PeptideEffectTag[]} effects
 * @property {boolean} [excludeFromQuiz]
 */

/** @type {QuizGoal[]} */
export const QUIZ_GOALS = [
  {
    id: "weight-loss",
    label: "Lose weight",
    prompt: "Appetite, body fat, or metabolic research",
    tone: "orange",
  },
  {
    id: "muscle",
    label: "Build muscle",
    prompt: "Growth-hormone signals, lean mass, or training recovery",
    tone: "teal",
  },
  {
    id: "recovery",
    label: "Repair and recovery",
    prompt: "Tendons, wounds, nerves, or irritated tissue",
    tone: "green",
  },
  {
    id: "cognition",
    label: "Focus and mood",
    prompt: "Anxiety, attention, memory, or brain recovery",
    tone: "indigo",
  },
  {
    id: "sleep",
    label: "Sleep better",
    prompt: "Falling asleep and staying asleep",
    tone: "violet",
  },
  {
    id: "hair",
    label: "Hair growth",
    prompt: "Follicles and scalp research",
    tone: "rose",
  },
  {
    id: "skin",
    label: "Skin and appearance",
    prompt: "Collagen, lines, pigment, or irritated skin",
    tone: "pink",
  },
  {
    id: "sexual-health",
    label: "Sexual health",
    prompt: "Desire, arousal, or reproductive signaling",
    tone: "rose",
  },
  {
    id: "longevity",
    label: "Longevity",
    prompt: "Cellular aging, energy, or mitochondrial research",
    tone: "indigo",
  },
  {
    id: "immune",
    label: "Immune balance",
    prompt: "Immune signaling or inflammation research",
    tone: "emerald",
  },
];

/** @type {ResearchEffect[]} */
export const RESEARCH_EFFECTS = [
  {
    id: "appetite-control",
    goalId: "weight-loss",
    label: "Feel fuller and eat less",
    detail: "Appetite and meal-satisfaction research, including approved GLP-1 medicines.",
  },
  {
    id: "substantial-weight-loss",
    goalId: "weight-loss",
    label: "Largest studied weight-loss signal",
    detail: "Investigational triple-agonist research reporting substantial weight change.",
  },
  {
    id: "dual-pathway-weight",
    goalId: "weight-loss",
    label: "Approved dual-hormone option",
    detail: "GIP and GLP-1 medicines studied for weight and blood sugar.",
  },
  {
    id: "visceral-fat",
    goalId: "weight-loss",
    label: "Deep abdominal fat",
    detail: "Visceral fat around organs, not just weight on the scale.",
  },
  {
    id: "liver-and-weight",
    goalId: "weight-loss",
    label: "Weight plus fatty-liver research",
    detail: "Investigational work on body weight and inflammatory fatty liver disease.",
  },
  {
    id: "fat-breakdown",
    goalId: "weight-loss",
    label: "Fat metabolism without appetite drugs",
    detail: "Compounds studied for stored-fat use rather than hunger hormones.",
  },
  {
    id: "short-gh-stack",
    goalId: "muscle",
    label: "Two-signal growth-hormone release",
    detail: "Shorter-acting GHRH plus ghrelin-pathway pairing discussed for body composition.",
  },
  {
    id: "long-gh-signal",
    goalId: "muscle",
    label: "Longer-acting growth-hormone signal",
    detail: "DAC-extended compounds studied for multi-day hormone changes.",
  },
  {
    id: "igf-muscle-growth",
    goalId: "muscle",
    label: "Muscle-cell growth research",
    detail: "Modified IGF-1 used in laboratory muscle-protein studies.",
  },
  {
    id: "muscle-repair-mgf",
    goalId: "muscle",
    label: "Muscle strain and repair signal",
    detail: "MGF-related research on how muscle cells respond to stress.",
  },
  {
    id: "gh-pulse",
    goalId: "muscle",
    label: "A single GH-release pulse",
    detail: "Secretagogues studied for hormone response more than proven muscle gain.",
  },
  {
    id: "tendon-ligament",
    goalId: "recovery",
    label: "Tendons, ligaments, or gut lining",
    detail: "Tissue-healing research, mostly in cells and animals.",
  },
  {
    id: "combined-injury",
    goalId: "recovery",
    label: "Combined injury-recovery blend",
    detail: "BPC-157 plus TB-500-style pairings proposed for muscles and connective tissue.",
  },
  {
    id: "wound-cell-migration",
    goalId: "recovery",
    label: "Wound-cell movement",
    detail: "Thymosin beta-4 research on repair cells reaching damaged tissue.",
  },
  {
    id: "small-nerve-repair",
    goalId: "recovery",
    label: "Small-nerve pain or numbness",
    detail: "Early human work on tiny nerve fibers rather than general pain relief.",
  },
  {
    id: "gut-skin-inflammation",
    goalId: "recovery",
    label: "Irritated gut or skin",
    detail: "Peptides studied for turning down excessive inflammatory signals.",
  },
  {
    id: "anxiety-stress",
    goalId: "cognition",
    label: "Anxiety and stress",
    detail: "Small human studies of calmer tension without heavy sedation.",
  },
  {
    id: "brain-injury-recovery",
    goalId: "cognition",
    label: "Brain recovery after injury",
    detail: "Stroke and neuroprotection research, not everyday focus for healthy people.",
  },
  {
    id: "calm-and-focus",
    goalId: "cognition",
    label: "Calmer mood plus attention",
    detail: "A pairing of anxiety and brain-recovery research interests.",
  },
  {
    id: "memory-connections",
    goalId: "cognition",
    label: "Memory connections",
    detail: "Experimental work on brain-cell communication; human benefits unestablished.",
  },
  {
    id: "depression-research",
    goalId: "cognition",
    label: "Depression-related research",
    detail: "Early laboratory work on mood-related brain signaling.",
  },
  {
    id: "sleep-onset",
    goalId: "sleep",
    label: "Falling and staying asleep",
    detail: "Small, mixed human sleep studies — not an established insomnia treatment.",
  },
  {
    id: "follicle-growth",
    goalId: "hair",
    label: "Hair-follicle research",
    detail: "Laboratory follicle growth, which is not the same as proven scalp regrowth.",
  },
  {
    id: "scalp-topical",
    goalId: "hair",
    label: "Topical scalp copper peptide",
    detail: "A powder form intended for skin or scalp formulas, not a proven hair treatment.",
  },
  {
    id: "collagen-repair",
    goalId: "skin",
    label: "Collagen and skin repair",
    detail: "Copper-peptide research on skin structure and wound repair.",
  },
  {
    id: "expression-lines",
    goalId: "skin",
    label: "Expression lines",
    detail: "Cosmetic peptides discussed for smile or frown lines — not equivalent to Botox.",
  },
  {
    id: "medical-pigment",
    goalId: "skin",
    label: "Medical pigment / light sensitivity",
    detail: "An approved implant for a rare light-pain disorder, not a tanning vial.",
  },
  {
    id: "cosmetic-tan",
    goalId: "skin",
    label: "Cosmetic tanning research",
    detail: "Pigment-increasing research that is not a safe routine tan.",
  },
  {
    id: "irritated-skin-repair",
    goalId: "skin",
    label: "Irritated skin plus repair",
    detail: "A blend proposed for less irritation and more structural support.",
  },
  {
    id: "sexual-desire",
    goalId: "sexual-health",
    label: "Sexual desire and arousal",
    detail: "Strongest evidence is a specific prescription use in some premenopausal women.",
  },
  {
    id: "reproductive-hormones",
    goalId: "sexual-health",
    label: "Reproductive hormone signaling",
    detail: "Kisspeptin research on the brain-to-gonad message chain.",
  },
  {
    id: "pigment-and-arousal",
    goalId: "sexual-health",
    label: "Pigment plus sexual response",
    detail: "A compound studied for both tanning and arousal — not a routine treatment.",
  },
  {
    id: "telomere-aging",
    goalId: "longevity",
    label: "Cellular aging and telomeres",
    detail: "Cell-division research that does not prove longer human life.",
  },
  {
    id: "senescent-cells",
    goalId: "longevity",
    label: "Worn-out senescent cells",
    detail: "Early mouse and cell work on clearing damaged cells.",
  },
  {
    id: "mitochondrial-fuel",
    goalId: "longevity",
    label: "Muscle fuel and metabolism",
    detail: "Mitochondrial-signal research from animals more than proven human results.",
  },
  {
    id: "cellular-energy-nad",
    goalId: "longevity",
    label: "Cellular energy (NAD+)",
    detail: "A natural energy molecule — infusions have not been shown to reverse aging.",
  },
  {
    id: "exercise-mimetic",
    goalId: "longevity",
    label: "Exercise-mimetic research",
    detail: "A non-peptide chemical studied for some endurance-like cell changes in mice.",
  },
  {
    id: "immune-illness",
    goalId: "immune",
    label: "Immune response in serious illness",
    detail: "Human trials exist, but benefits depend on the condition.",
  },
  {
    id: "thymus-extract",
    goalId: "immune",
    label: "Thymus extract mixture",
    detail: "A mixed extract studied for immune-cell changes, not a general anti-aging drug.",
  },
  {
    id: "thymogen-immune",
    goalId: "immune",
    label: "Thymogen-type immune signaling",
    detail: "Short peptides studied under related drug names and formulations.",
  },
  {
    id: "thymulin-signaling",
    goalId: "immune",
    label: "Zinc-dependent thymus hormone",
    detail: "Biology of thymulin and zinc — extra hormone is not a proven infection shield.",
  },
];

/**
 * @param {string} slug
 * @param {string} pageSlug
 * @param {string[]} goals
 * @param {PeptideEffectTag[]} effects
 * @param {object} [extra]
 * @returns {PeptideEffectProfile}
 */
function profile(slug, pageSlug, goals, effects, extra = {}) {
  const product = getProductBySlug(slug);
  return {
    slug,
    pageSlug,
    name: product?.name || extra.name || slug,
    productType: extra.productType || product?.productType || "compound",
    goals,
    effects,
    excludeFromQuiz: Boolean(extra.excludeFromQuiz || product?.researchComingSoon),
  };
}

/** @type {PeptideEffectProfile[]} */
export const PEPTIDE_EFFECT_PROFILES = [
  profile("5-amino-1mq", "5-amino-1mq", ["weight-loss"], [
    { id: "fat-breakdown", weight: 3, evidence: "preclinical" },
    { id: "exercise-mimetic", weight: 2, evidence: "preclinical" },
  ]),
  profile("adamax", "adamax", ["cognition"], [
    { id: "memory-connections", weight: 2, evidence: "limited" },
    { id: "brain-injury-recovery", weight: 1, evidence: "limited" },
  ]),
  profile("ahk-cu", "ahk-cu", ["hair"], [
    { id: "follicle-growth", weight: 5, evidence: "preclinical", primary: true },
  ]),
  profile("aod-9604", "aod-9604", ["weight-loss"], [
    { id: "fat-breakdown", weight: 5, evidence: "early-clinical", primary: true },
  ]),
  profile("ara-290", "ara-290", ["recovery"], [
    { id: "small-nerve-repair", weight: 5, evidence: "early-clinical", primary: true },
  ]),
  profile("bpc-157", "bpc-157", ["recovery"], [
    { id: "tendon-ligament", weight: 5, evidence: "preclinical", primary: true },
    { id: "combined-injury", weight: 3, evidence: "preclinical" },
    { id: "gut-skin-inflammation", weight: 2, evidence: "preclinical" },
  ]),
  profile("cagrilintide", "cagrilintide", ["weight-loss"], [
    { id: "appetite-control", weight: 4, evidence: "clinical" },
    { id: "substantial-weight-loss", weight: 3, evidence: "clinical" },
  ]),
  profile("cartalax", "cartalax", ["recovery"], [
    { id: "tendon-ligament", weight: 2, evidence: "limited" },
  ]),
  profile("cjc-1295-dac", "cjc-1295-dac", ["muscle"], [
    { id: "long-gh-signal", weight: 5, evidence: "early-clinical", primary: true },
    { id: "gh-pulse", weight: 3, evidence: "early-clinical" },
  ]),
  profile("cjc-1295-no-dac", "cjc-1295-no-dac", ["muscle"], [
    { id: "short-gh-stack", weight: 3, evidence: "limited" },
    { id: "gh-pulse", weight: 3, evidence: "limited" },
  ]),
  profile("dihexa", "dihexa", ["cognition"], [
    { id: "memory-connections", weight: 5, evidence: "preclinical", primary: true },
  ]),
  profile("dsip", "dsip", ["sleep", "cognition"], [
    { id: "sleep-onset", weight: 5, evidence: "early-clinical", primary: true },
    { id: "anxiety-stress", weight: 2, evidence: "limited" },
  ]),
  profile("epithalon", "epithalon", ["longevity"], [
    { id: "telomere-aging", weight: 5, evidence: "preclinical", primary: true },
  ]),
  profile("foxo4-dri", "foxo4-dri", ["longevity"], [
    { id: "senescent-cells", weight: 5, evidence: "preclinical", primary: true },
  ]),
  profile("ghk-basic", "ghk-basic", ["skin"], [
    { id: "collagen-repair", weight: 3, evidence: "preclinical" },
  ]),
  profile("ghk-cu", "ghk-cu", ["skin", "hair", "recovery"], [
    { id: "collagen-repair", weight: 5, evidence: "preclinical", primary: true },
    { id: "scalp-topical", weight: 2, evidence: "limited" },
    { id: "irritated-skin-repair", weight: 2, evidence: "preclinical" },
  ]),
  profile("glp-1-s", "semaglutide", ["weight-loss"], [
    { id: "appetite-control", weight: 5, evidence: "clinical", primary: true },
    { id: "dual-pathway-weight", weight: 2, evidence: "clinical" },
    { id: "substantial-weight-loss", weight: 4, evidence: "clinical" },
  ]),
  profile("glp-1-t", "tirzepatide", ["weight-loss"], [
    { id: "dual-pathway-weight", weight: 5, evidence: "clinical", primary: true },
    { id: "appetite-control", weight: 4, evidence: "clinical" },
    { id: "substantial-weight-loss", weight: 4, evidence: "clinical" },
  ]),
  profile("hexarelin", "hexarelin", ["muscle"], [
    { id: "gh-pulse", weight: 4, evidence: "early-clinical" },
    { id: "long-gh-signal", weight: 2, evidence: "early-clinical" },
  ]),
  profile("igf-1-lr3", "igf-1-lr3", ["muscle"], [
    { id: "igf-muscle-growth", weight: 5, evidence: "preclinical", primary: true },
  ]),
  profile("ipamorelin", "ipamorelin", ["muscle"], [
    { id: "gh-pulse", weight: 5, evidence: "early-clinical", primary: true },
    { id: "short-gh-stack", weight: 3, evidence: "limited" },
  ]),
  profile("kisspeptin-10", "kisspeptin-10", ["sexual-health"], [
    { id: "reproductive-hormones", weight: 5, evidence: "early-clinical", primary: true },
  ]),
  profile("kpv", "kpv", ["recovery", "immune", "skin"], [
    { id: "gut-skin-inflammation", weight: 5, evidence: "preclinical", primary: true },
    { id: "irritated-skin-repair", weight: 3, evidence: "preclinical" },
  ]),
  profile("livagen", "livagen", ["recovery"], [
    { id: "tendon-ligament", weight: 1, evidence: "limited" },
  ]),
  profile("ll-37", "ll-37", ["recovery", "immune"], [
    { id: "gut-skin-inflammation", weight: 3, evidence: "early-clinical" },
    { id: "wound-cell-migration", weight: 3, evidence: "early-clinical" },
  ]),
  profile("melanotan-1", "melanotan-1", ["skin"], [
    { id: "medical-pigment", weight: 5, evidence: "clinical", primary: true },
    { id: "cosmetic-tan", weight: 2, evidence: "clinical" },
  ]),
  profile("melanotan-2", "melanotan-2", ["skin", "sexual-health"], [
    { id: "cosmetic-tan", weight: 5, evidence: "early-clinical", primary: true },
    { id: "pigment-and-arousal", weight: 5, evidence: "early-clinical", primary: true },
    { id: "sexual-desire", weight: 3, evidence: "early-clinical" },
  ]),
  profile("mots-c", "mots-c", ["longevity", "weight-loss", "muscle"], [
    { id: "mitochondrial-fuel", weight: 5, evidence: "preclinical", primary: true },
    { id: "fat-breakdown", weight: 2, evidence: "preclinical" },
    { id: "exercise-mimetic", weight: 3, evidence: "preclinical" },
  ]),
  profile("nad-plus", "nad-plus", ["longevity"], [
    { id: "cellular-energy-nad", weight: 5, evidence: "mixed", primary: true },
  ]),
  profile("pe-22-28", "pe-22-28", ["cognition"], [
    { id: "depression-research", weight: 5, evidence: "preclinical", primary: true },
  ]),
  profile("peg-mgf", "peg-mgf", ["muscle", "recovery"], [
    { id: "muscle-repair-mgf", weight: 5, evidence: "preclinical", primary: true },
    { id: "igf-muscle-growth", weight: 2, evidence: "preclinical" },
  ]),
  profile("pinealon", "pinealon", ["cognition", "longevity"], [
    { id: "memory-connections", weight: 3, evidence: "preclinical" },
    { id: "brain-injury-recovery", weight: 2, evidence: "preclinical" },
    { id: "telomere-aging", weight: 2, evidence: "preclinical" },
  ]),
  profile("pt-141", "pt-141", ["sexual-health"], [
    { id: "sexual-desire", weight: 5, evidence: "clinical", primary: true },
  ]),
  profile("retatrutide", "retatrutide", ["weight-loss"], [
    { id: "substantial-weight-loss", weight: 5, evidence: "clinical", primary: true },
    { id: "appetite-control", weight: 4, evidence: "clinical" },
    { id: "dual-pathway-weight", weight: 3, evidence: "clinical" },
  ]),
  profile("selank", "selank", ["cognition"], [
    { id: "anxiety-stress", weight: 5, evidence: "early-clinical", primary: true },
    { id: "calm-and-focus", weight: 3, evidence: "limited" },
  ]),
  profile("semax", "semax", ["cognition"], [
    { id: "brain-injury-recovery", weight: 5, evidence: "early-clinical", primary: true },
    { id: "calm-and-focus", weight: 2, evidence: "limited" },
    { id: "memory-connections", weight: 2, evidence: "limited" },
  ]),
  profile("sermorelin", "sermorelin", ["muscle"], [
    { id: "gh-pulse", weight: 4, evidence: "clinical" },
    { id: "short-gh-stack", weight: 2, evidence: "limited" },
  ]),
  profile("slu-pp-332", "slu-pp-332", ["longevity", "weight-loss"], [
    { id: "exercise-mimetic", weight: 5, evidence: "preclinical", primary: true },
    { id: "fat-breakdown", weight: 3, evidence: "preclinical" },
  ]),
  profile("snap-8", "snap-8", ["skin"], [
    { id: "expression-lines", weight: 5, evidence: "limited", primary: true },
  ]),
  profile("survodutide", "survodutide", ["weight-loss"], [
    { id: "liver-and-weight", weight: 5, evidence: "clinical", primary: true },
    { id: "appetite-control", weight: 3, evidence: "clinical" },
    { id: "substantial-weight-loss", weight: 3, evidence: "clinical" },
  ]),
  profile("tb-500-fragment-17-23", "tb-500-fragment-17-23", ["recovery"], [
    { id: "wound-cell-migration", weight: 3, evidence: "limited" },
    { id: "combined-injury", weight: 2, evidence: "limited" },
  ]),
  profile("tb-500-thymosin-beta-4", "tb-500", ["recovery"], [
    { id: "wound-cell-migration", weight: 5, evidence: "early-clinical", primary: true },
    { id: "combined-injury", weight: 3, evidence: "preclinical" },
  ]),
  profile("tesamorelin", "tesamorelin", ["weight-loss", "muscle"], [
    { id: "visceral-fat", weight: 5, evidence: "clinical", primary: true },
    { id: "gh-pulse", weight: 3, evidence: "clinical" },
  ]),
  profile("thymagen", "thymagen", ["immune", "longevity"], [
    { id: "thymogen-immune", weight: 5, evidence: "limited", primary: true },
  ]),
  profile("thymosin-alpha-1", "thymosin-alpha-1", ["immune"], [
    { id: "immune-illness", weight: 5, evidence: "clinical", primary: true },
  ]),
  profile("thymulin", "thymulin", ["immune"], [
    { id: "thymulin-signaling", weight: 5, evidence: "limited", primary: true },
  ]),
  profile(
    "bpc-157-ghk-cu",
    "bpc-157-ghk-cu",
    ["recovery", "skin"],
    [
      { id: "tendon-ligament", weight: 2, evidence: "preclinical" },
      { id: "collagen-repair", weight: 2, evidence: "preclinical" },
    ]
  ),
  profile(
    "bpc-157-tb-500",
    "bpc-157-tb-500",
    ["recovery"],
    [
      { id: "combined-injury", weight: 5, evidence: "preclinical", primary: true },
      { id: "tendon-ligament", weight: 3, evidence: "preclinical" },
      { id: "wound-cell-migration", weight: 3, evidence: "preclinical" },
    ]
  ),
  profile(
    "cjc-1295-ipamorelin",
    "cjc-1295-no-dac-ipamorelin",
    ["muscle"],
    [
      { id: "short-gh-stack", weight: 5, evidence: "limited", primary: true },
      { id: "gh-pulse", weight: 3, evidence: "limited" },
    ]
  ),
  profile(
    "glow-ghk-cu-tb-500-bpc-157",
    "glow",
    ["skin", "recovery"],
    [
      { id: "collagen-repair", weight: 3, evidence: "preclinical" },
      { id: "combined-injury", weight: 2, evidence: "preclinical" },
    ]
  ),
  profile(
    "klow-kpv-ghk-cu-tb-500-bpc-157",
    "klow",
    ["recovery", "skin"],
    [
      { id: "gut-skin-inflammation", weight: 3, evidence: "preclinical" },
      { id: "irritated-skin-repair", weight: 3, evidence: "preclinical" },
    ]
  ),
  profile(
    "kpv-ghk-cu",
    "kpv-ghk-cu",
    ["skin", "recovery"],
    [
      { id: "irritated-skin-repair", weight: 5, evidence: "preclinical", primary: true },
      { id: "gut-skin-inflammation", weight: 3, evidence: "preclinical" },
      { id: "collagen-repair", weight: 2, evidence: "preclinical" },
    ]
  ),
  profile(
    "selank-semax",
    "selank-semax",
    ["cognition"],
    [
      { id: "calm-and-focus", weight: 5, evidence: "limited", primary: true },
      { id: "anxiety-stress", weight: 3, evidence: "limited" },
      { id: "brain-injury-recovery", weight: 2, evidence: "limited" },
    ]
  ),
  profile(
    "ta-1-thymalin-complex",
    "ta-1-thymalin-complex",
    ["immune"],
    [
      { id: "immune-illness", weight: 2, evidence: "limited" },
      { id: "thymus-extract", weight: 3, evidence: "limited" },
    ]
  ),
  profile(
    "2x-tesamorelin-ipamorelin",
    "2x-tesamorelin-ipamorelin",
    ["muscle", "weight-loss"],
    [
      { id: "visceral-fat", weight: 3, evidence: "limited" },
      { id: "short-gh-stack", weight: 3, evidence: "limited" },
    ]
  ),
  profile(
    "3x-tesamorelin-mgf-ipamorelin",
    "3x-tesamorelin-mgf-ipamorelin",
    ["muscle"],
    [
      { id: "muscle-repair-mgf", weight: 2, evidence: "preclinical" },
      { id: "short-gh-stack", weight: 2, evidence: "preclinical" },
    ],
    { excludeFromQuiz: true }
  ),
  profile(
    "4x-tesamorelin-ipamorelin-mgf-ghrp-2",
    "4x-tesamorelin-ipamorelin-mgf-ghrp-2",
    ["muscle"],
    [
      { id: "muscle-repair-mgf", weight: 2, evidence: "preclinical" },
      { id: "short-gh-stack", weight: 2, evidence: "preclinical" },
    ],
    { excludeFromQuiz: true }
  ),
  profile(
    "ghk-cu-topical-powder",
    "ghk-cu-topical-powder",
    ["hair", "skin"],
    [
      { id: "scalp-topical", weight: 5, evidence: "limited", primary: true },
      { id: "collagen-repair", weight: 2, evidence: "limited" },
    ]
  ),
  profile("thymalin", "thymalin", ["immune", "longevity"], [
    { id: "thymus-extract", weight: 5, evidence: "limited", primary: true },
    { id: "immune-illness", weight: 2, evidence: "limited" },
  ]),
];

const EVIDENCE_SCORE = {
  clinical: 5,
  "early-clinical": 3.5,
  mixed: 2.5,
  preclinical: 1.5,
  limited: 1,
};

/** @param {string} goalId */
export function getEffectsForGoal(goalId) {
  return RESEARCH_EFFECTS.filter((effect) => effect.goalId === goalId);
}

/** @param {string} goalId */
export function getQuizGoal(goalId) {
  return QUIZ_GOALS.find((goal) => goal.id === goalId) || null;
}

/** @param {string} effectId */
export function getResearchEffect(effectId) {
  return RESEARCH_EFFECTS.find((effect) => effect.id === effectId) || null;
}

/**
 * Rank peptides for a refined research effect.
 * @param {string} goalId
 * @param {string} effectId
 */
export function recommendPeptides(goalId, effectId) {
  const scored = PEPTIDE_EFFECT_PROFILES.filter((peptide) => !peptide.excludeFromQuiz)
    .map((peptide) => {
      const exact = peptide.effects.find((effect) => effect.id === effectId);
      const inGoal = peptide.goals.includes(goalId);
      if (!exact && !inGoal) return null;

      const evidence = exact?.evidence || "limited";
      const weight = exact ? exact.weight : 1;
      const exactBonus = exact ? 12 : 0;
      const primaryBonus = exact?.primary ? 6 : 0;
      const blendPenalty =
        peptide.productType === "blend" && !exact?.primary ? 2 : 0;
      const score =
        weight * (EVIDENCE_SCORE[evidence] || 1) +
        exactBonus +
        primaryBonus -
        blendPenalty;

      return {
        slug: peptide.slug,
        pageSlug: peptide.pageSlug,
        name: peptide.name,
        href: `/peptides/${peptide.pageSlug}`,
        score,
        evidence,
        matchedEffect: exact || null,
        lead: getPeptideOverviewLead(peptide.pageSlug),
        overview: getPeptideOverview(peptide.pageSlug),
      };
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score || a.name.localeCompare(b.name));

  return {
    winner: scored[0] || null,
    alternatives: scored.slice(1, 4),
  };
}

/** @param {string} slug */
export function getPeptideEffectProfile(slug) {
  return (
    PEPTIDE_EFFECT_PROFILES.find(
      (peptide) => peptide.slug === slug || peptide.pageSlug === slug
    ) || null
  );
}

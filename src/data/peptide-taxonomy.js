/**
 * Peptide taxonomy: categories, products, SEO metadata, aliases,
 * cross-category relationships, and helpers for category pages / filters.
 *
 * Data-only module — does not affect site layout or aesthetics.
 */

/** @typedef {"cognition"|"hair"|"longevity"|"muscle"|"weight-loss"|"recovery"|"sexual-health"|"skin-beauty"|"immune-inflammation"} CategorySlug */

/** @typedef {"clinical"|"early-clinical"|"preclinical"|"limited"|"mixed"} EvidenceLevel */

/**
 * @typedef {object} PeptideCategory
 * @property {string} name
 * @property {CategorySlug} slug
 * @property {string} title
 * @property {string} description
 * @property {string} seoTitle
 * @property {string} seoDescription
 * @property {string[]} keywords
 * @property {string} disclaimer
 */

/**
 * @typedef {object} PeptideProduct
 * @property {string} id
 * @property {string} name
 * @property {string} slug
 * @property {string[]} [aliases]
 * @property {"compound"|"blend"|"bundle"} productType
 * @property {CategorySlug|null} primaryCategory
 * @property {CategorySlug[]} secondaryCategories
 * @property {string[]} researchUses
 * @property {EvidenceLevel} evidenceLevel
 * @property {boolean} investigational
 * @property {string[]} [ingredients]
 * @property {string} [notes]
 */

/** @type {PeptideCategory[]} */
export const peptideCategories = [
  {
    name: "Cognition",
    slug: "cognition",
    title: "Cognition and Nootropic Peptides",
    description:
      "Explore compounds studied for memory, focus, learning, neuroprotection, stress response and sleep.",
    seoTitle: "Cognition Peptides: Research, Comparisons and Evidence",
    seoDescription:
      "Compare cognition peptides and research compounds studied for memory, focus, learning, neuroprotection, stress response and sleep.",
    keywords: [
      "cognition peptides",
      "nootropic peptides",
      "memory peptides",
      "focus peptides",
      "neuroprotective peptides",
      "Selank",
      "Semax",
      "Dihexa",
    ],
    disclaimer:
      "Many cognition compounds are investigational and lack sufficient clinical evidence to establish safety or efficacy.",
  },
  {
    name: "Hair",
    slug: "hair",
    title: "Hair Growth and Follicle Research Peptides",
    description:
      "Explore copper peptides and regenerative compounds studied for follicle activity, scalp health and hair growth.",
    seoTitle: "Hair Growth Peptides: GHK-Cu, AHK-Cu and Research",
    seoDescription:
      "Compare hair-focused peptides including AHK-Cu and GHK-Cu, with research summaries, mechanisms and related products.",
    keywords: [
      "hair growth peptides",
      "copper peptides for hair",
      "GHK-Cu hair",
      "AHK-Cu hair",
      "hair follicle research",
    ],
    disclaimer:
      "Research findings do not establish that these products safely or effectively treat hair loss.",
  },
  {
    name: "Longevity",
    slug: "longevity",
    title: "Longevity and Healthy-Aging Research Compounds",
    description:
      "Explore peptides and related compounds studied for cellular aging, mitochondrial function, senescence and tissue maintenance.",
    seoTitle: "Longevity Peptides and Healthy-Aging Research",
    seoDescription:
      "Compare longevity research compounds including Epithalon, MOTS-c, FOXO4-DRI, NAD+ and GHK-Cu.",
    keywords: [
      "longevity peptides",
      "anti-aging peptides",
      "healthy aging research",
      "senolytic peptides",
      "mitochondrial peptides",
      "Epithalon",
      "MOTS-c",
    ],
    disclaimer:
      "No research peptide has been proven to stop or reverse human aging. Evidence varies substantially by compound.",
  },
  {
    name: "Muscle",
    slug: "muscle",
    title: "Muscle Growth and Performance Research Peptides",
    description:
      "Explore compounds studied for growth-hormone signaling, muscle growth, body composition, performance and exercise adaptation.",
    seoTitle: "Muscle Growth Peptides: Research and Comparisons",
    seoDescription:
      "Compare muscle-focused research compounds including CJC-1295, Ipamorelin, IGF-1 LR3, PEG-MGF and Tesamorelin.",
    keywords: [
      "muscle growth peptides",
      "performance peptides",
      "growth hormone peptides",
      "CJC-1295",
      "Ipamorelin",
      "IGF-1 LR3",
      "PEG-MGF",
    ],
    disclaimer:
      "These products should not be represented as approved bodybuilding or performance-enhancing treatments.",
  },
  {
    name: "Weight Loss",
    slug: "weight-loss",
    title: "Weight-Loss and Metabolic Research Compounds",
    description:
      "Explore peptides and metabolic compounds studied for appetite, body weight, glucose regulation, energy expenditure and body composition.",
    seoTitle: "Weight-Loss Peptides: GLP-1 and Metabolic Research",
    seoDescription:
      "Compare weight-loss research compounds including Retatrutide, GLP-1 Semaglutide, Tirzepatide, Cagrilintide, Survodutide and AOD-9604.",
    keywords: [
      "weight loss peptides",
      "GLP-1 peptides",
      "metabolic peptides",
      "Retatrutide",
      "Semaglutide",
      "GLP-1 Semaglutide",
      "Cagrilintide",
      "Survodutide",
      "AOD-9604",
    ],
    disclaimer:
      "Some listed compounds remain investigational and are not approved for weight management or human use.",
  },
  {
    name: "Recovery",
    slug: "recovery",
    title: "Recovery and Tissue-Repair Research Peptides",
    description:
      "Explore peptides studied for connective tissue, inflammation, wound healing, nerve function and exercise recovery.",
    seoTitle: "Recovery Peptides: BPC-157, TB-500, KPV and More",
    seoDescription:
      "Compare recovery peptides including BPC-157, TB-500, KPV, GHK-Cu and ARA-290 by mechanism and research evidence.",
    keywords: [
      "recovery peptides",
      "tissue repair peptides",
      "BPC-157",
      "TB-500",
      "KPV",
      "GHK-Cu",
      "ARA-290",
    ],
    disclaimer:
      "Preclinical repair findings should not be presented as proof of injury treatment or improved recovery in humans.",
  },
  {
    name: "Libido",
    slug: "sexual-health",
    title: "Libido and Reproductive Health Research Peptides",
    description:
      "Explore compounds studied for sexual response, reproductive signaling and related physiological pathways.",
    seoTitle: "Libido Peptides: PT-141, Kisspeptin and Research",
    seoDescription:
      "Explore research involving PT-141, Kisspeptin-10 and related libido and reproductive health compounds.",
    keywords: [
      "libido peptides",
      "sexual health peptides",
      "PT-141",
      "Kisspeptin-10",
      "reproductive peptides",
    ],
    disclaimer:
      "Research classifications are informational and are not treatment recommendations.",
  },
  {
    name: "Skin & Beauty",
    slug: "skin-beauty",
    title: "Skin, Collagen and Cosmetic Research Peptides",
    description:
      "Explore peptides studied for collagen, skin appearance, tissue remodeling, pigmentation and cosmetic applications.",
    seoTitle: "Skin Peptides: GHK-Cu, Snap-8, Melanotan and Cosmetic Research",
    seoDescription:
      "Compare skin-focused peptides including GHK-Cu, AHK-Cu, Snap-8, Melanotan 1 and Melanotan-2 by mechanism, application and evidence.",
    keywords: [
      "skin peptides",
      "copper peptides",
      "GHK-Cu skin",
      "Snap-8",
      "Melanotan 1",
      "Melanotan-2",
      "collagen peptides",
      "cosmetic peptides",
    ],
    disclaimer:
      "Cosmetic research does not establish that a product is approved to treat dermatologic conditions.",
  },
  {
    name: "Immune & Inflammation",
    slug: "immune-inflammation",
    title: "Immune and Inflammation Research Peptides",
    description:
      "Explore peptides studied for immune signaling, inflammatory pathways, antimicrobial activity and tissue protection.",
    seoTitle: "Immune and Inflammation Peptides: Research Guide",
    seoDescription:
      "Compare KPV, LL-37, Thymosin Alpha-1, Thymulin and other immune-related research peptides.",
    keywords: [
      "immune peptides",
      "inflammation peptides",
      "KPV",
      "LL-37",
      "Thymosin Alpha-1",
      "Thymulin",
    ],
    disclaimer:
      "These compounds should not be represented as proven treatments for infections, immune disorders or inflammatory diseases.",
  },
];

/** @type {PeptideProduct[]} */
export const peptideProducts = [
  {
    id: '5-amino-1mq',
    name: '5-Amino-1MQ',
    slug: '5-amino-1mq',
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [
      'muscle'
    ],
    researchUses: [
      'metabolism',
      'body composition',
      'NNMT inhibition'
    ],
    evidenceLevel: 'preclinical',
    investigational: true,
    notes: 'Small molecule rather than a conventional peptide.'
  },
  {
    id: 'adamax',
    name: 'Adamax',
    slug: 'adamax',
    productType: 'compound',
    primaryCategory: 'cognition',
    secondaryCategories: [],
    researchUses: [
      'cognition',
      'focus',
      'neuroprotection'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'ahk-cu',
    name: 'AHK-Cu',
    slug: 'ahk-cu',
    aliases: [
      'Copper Tripeptide-3',
      'copper-tripeptide-3',
      'ahk-cu-dosage',
      'ala-his-lys-cu',
      'copper-tripeptide-3-dosage'
    ],
    productType: 'compound',
    primaryCategory: 'hair',
    secondaryCategories: [
      'skin-beauty'
    ],
    researchUses: [
      'hair follicles',
      'scalp research',
      'skin remodeling'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'aod-9604',
    name: 'AOD-9604',
    slug: 'aod-9604',
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [],
    researchUses: [
      'fat metabolism',
      'body composition'
    ],
    evidenceLevel: 'mixed',
    investigational: true
  },
  {
    id: 'ara-290',
    name: 'ARA-290',
    slug: 'ara-290',
    aliases: [
      'Cibinetide'
    ],
    productType: 'compound',
    primaryCategory: 'recovery',
    secondaryCategories: [],
    researchUses: [
      'nerve function',
      'tissue protection',
      'inflammation'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'bpc-157',
    name: 'BPC-157',
    slug: 'bpc-157',
    productType: 'compound',
    primaryCategory: 'recovery',
    secondaryCategories: [],
    researchUses: [
      'tissue repair',
      'connective tissue',
      'inflammation'
    ],
    evidenceLevel: 'preclinical',
    investigational: true
  },
  {
    id: 'cagrilintide',
    name: 'Cagrilintide',
    slug: 'cagrilintide',
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [],
    researchUses: [
      'appetite regulation',
      'body weight',
      'amylin signaling'
    ],
    evidenceLevel: 'clinical',
    investigational: true
  },
  {
    id: 'cartalax',
    name: 'Cartalax',
    slug: 'cartalax',
    productType: 'compound',
    primaryCategory: 'recovery',
    secondaryCategories: [
      'longevity'
    ],
    researchUses: [
      'cartilage',
      'joint tissue',
      'tissue maintenance'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'cjc-1295-dac',
    name: 'CJC-1295 DAC',
    slug: 'cjc-1295-dac',
    productType: 'compound',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'growth-hormone signaling',
      'body composition'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'cjc-1295-no-dac',
    name: 'CJC-1295 (No DAC)',
    slug: 'cjc-1295-no-dac',
    aliases: [
      'Modified GRF 1-29',
      'Mod GRF 1-29'
    ],
    productType: 'compound',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'growth-hormone signaling',
      'body composition'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'dihexa',
    name: 'Dihexa',
    slug: 'dihexa',
    aliases: [
      'PNB-0408',
      'dihexa-dosage',
      'dihexa-acetate',
      'Hexanoyl-Tyr-Ile-Ahx-NH2'
    ],
    productType: 'compound',
    primaryCategory: 'cognition',
    secondaryCategories: [],
    researchUses: [
      'synaptic function',
      'memory',
      'neuroprotection'
    ],
    evidenceLevel: 'preclinical',
    investigational: true
  },
  {
    id: 'dsip',
    name: 'DSIP',
    slug: 'dsip',
    aliases: [
      'Delta Sleep-Inducing Peptide',
      'emideltide',
      'delta-sleep-inducing-peptide',
      'emideltide acetate',
      'DSIP acetate',
    ],
    productType: 'compound',
    primaryCategory: 'cognition',
    secondaryCategories: [],
    researchUses: [
      'sleep',
      'stress response',
      'recovery'
    ],
    evidenceLevel: 'mixed',
    investigational: true
  },
  {
    id: 'epithalon',
    name: 'Epithalon',
    slug: 'epithalon',
    aliases: [
      'Epitalon',
      'Epithalone',
      'AEDG',
      'Ala-Glu-Asp-Gly'
    ],
    productType: 'compound',
    primaryCategory: 'longevity',
    secondaryCategories: [],
    researchUses: [
      'cellular aging',
      'telomere research',
      'circadian function'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'foxo4-dri',
    name: 'FOXO4-DRI',
    slug: 'foxo4-dri',
    productType: 'compound',
    primaryCategory: 'longevity',
    secondaryCategories: [],
    researchUses: [
      'cellular senescence',
      'senolytic research'
    ],
    evidenceLevel: 'preclinical',
    investigational: true
  },
  {
    id: 'ghk-basic',
    name: 'GHK Basic',
    slug: 'ghk-basic',
    aliases: [
      'Tripeptide-1',
      'Prezatide',
      'Copper-free GHK',
      'GHK free',
      'GHK acetate'
    ],
    productType: 'compound',
    primaryCategory: 'hair',
    secondaryCategories: [
      'longevity'
    ],
    researchUses: [
      'skin remodeling',
      'tissue signaling',
      'collagen'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'ghk-cu',
    name: 'GHK-Cu',
    slug: 'ghk-cu',
    aliases: [
      'Copper Peptide',
      'Copper Tripeptide-1'
    ],
    productType: 'compound',
    primaryCategory: 'hair',
    secondaryCategories: [
      'longevity',
      'recovery',
      'skin-beauty'
    ],
    researchUses: [
      'collagen',
      'skin remodeling',
      'wound healing',
      'hair'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'glp-1-s',
    name: 'GLP-1 Semaglutide',
    slug: 'glp-1-s',
    aliases: [
      'Semaglutide',
      'GLP-1 S',
      'GLP-1 Semaglutide'
    ],
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [],
    researchUses: [
      'appetite',
      'body weight',
      'glucose regulation'
    ],
    evidenceLevel: 'clinical',
    investigational: false,
    notes: 'Also known as Semaglutide / GLP-1 S.'
  },
  {
    id: 'glp-1-t',
    name: 'GLP-2 Tirzepatide',
    slug: 'glp-1-t',
    aliases: [
      'Tirzepatide',
      'GLP-2',
      'GLP-1 T'
    ],
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [],
    researchUses: [
      'appetite',
      'body weight',
      'GLP-1/GIP signaling'
    ],
    evidenceLevel: 'clinical',
    investigational: false,
    notes: "Verify that the vendor's GLP-1 T product is tirzepatide."
  },
  {
    id: 'hexarelin',
    name: 'Hexarelin',
    slug: 'hexarelin',
    productType: 'compound',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'growth-hormone release',
      'body composition'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'igf-1-lr3',
    name: 'IGF-1 LR3',
    slug: 'igf-1-lr3',
    productType: 'compound',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'muscle growth',
      'cell proliferation',
      'recovery'
    ],
    evidenceLevel: 'preclinical',
    investigational: true
  },
  {
    id: 'ipamorelin',
    name: 'Ipamorelin',
    slug: 'ipamorelin',
    productType: 'compound',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'growth-hormone release',
      'body composition',
      'recovery'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'kisspeptin-10',
    name: 'Kisspeptin-10',
    slug: 'kisspeptin-10',
    aliases: [
      'KP-10',
      'KP10',
      'Metastin(45–54)',
      'metastin 45-54',
      'kisspeptin(112–121)',
      'Kissapeptin-10',
      'kissapeptin',
      'kisspeptin-10-dosage'
    ],
    productType: 'compound',
    primaryCategory: 'sexual-health',
    secondaryCategories: [],
    researchUses: [
      'reproductive signaling',
      'hormone regulation'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'kpv',
    name: 'KPV',
    slug: 'kpv',
    productType: 'compound',
    primaryCategory: 'recovery',
    secondaryCategories: [],
    researchUses: [
      'inflammatory signaling',
      'gut research',
      'skin'
    ],
    evidenceLevel: 'preclinical',
    investigational: true
  },
  {
    id: 'livagen',
    name: 'Livagen',
    slug: 'livagen',
    aliases: [
      'KEDA',
      'Lys-Glu-Asp-Ala',
      'Lysyl-glutamyl-aspartyl-alanine'
    ],
    productType: 'compound',
    primaryCategory: 'longevity',
    secondaryCategories: [],
    researchUses: [
      'liver tissue',
      'organ-specific bioregulation'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'll-37',
    name: 'LL-37',
    slug: 'll-37',
    productType: 'compound',
    primaryCategory: 'recovery',
    secondaryCategories: [],
    researchUses: [
      'innate immunity',
      'antimicrobial activity',
      'wound healing'
    ],
    evidenceLevel: 'preclinical',
    investigational: true
  },
  {
    id: 'melanotan-1',
    name: 'Melanotan 1',
    slug: 'melanotan-1',
    aliases: [
      'Melanotan I',
      'Melanotan-1',
      'Afamelanotide',
      'Afamelanotide analogue',
      'MT-1',
      'MT-I',
      'SCENESSE',
      'melanotan-1-dosage'
    ],
    productType: 'compound',
    primaryCategory: 'skin-beauty',
    secondaryCategories: [],
    researchUses: [
      'pigmentation',
      'melanocortin signaling'
    ],
    evidenceLevel: 'clinical',
    investigational: true
  },
  {
    id: 'melanotan-2',
    name: 'Melanotan-2',
    slug: 'melanotan-2',
    aliases: [
      'Melanotan 2',
      'Melanotan II',
      'MT-2',
      'MT-II',
      'melanotan-ii',
      'melanotan-2-dosage'
    ],
    productType: 'compound',
    primaryCategory: 'skin-beauty',
    secondaryCategories: [
      'sexual-health'
    ],
    researchUses: [
      'pigmentation',
      'melanocortin signaling',
      'sexual response'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'mots-c',
    name: 'MOTS-c',
    slug: 'mots-c',
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [
      'longevity',
      'muscle'
    ],
    researchUses: [
      'mitochondrial function',
      'metabolism',
      'exercise adaptation'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'nad-plus',
    name: 'NAD+',
    slug: 'nad-plus',
    aliases: [
      'NAD',
      'NAD+',
      'Nadide',
      'Coenzyme I',
      'Coenzyme 1',
      'Nicotinamide adenine dinucleotide'
    ],
    productType: 'compound',
    primaryCategory: 'longevity',
    secondaryCategories: [],
    researchUses: [
      'cellular energy',
      'metabolism',
      'aging biology'
    ],
    evidenceLevel: 'mixed',
    investigational: true,
    notes: 'Coenzyme rather than a peptide.'
  },
  {
    id: 'pe-22-28',
    name: 'PE 22-28',
    slug: 'pe-22-28',
    productType: 'compound',
    primaryCategory: 'cognition',
    secondaryCategories: [],
    researchUses: [
      'mood',
      'cognition',
      'neuroplasticity'
    ],
    evidenceLevel: 'preclinical',
    investigational: true
  },
  {
    id: 'peg-mgf',
    name: 'PEG-MGF',
    slug: 'peg-mgf',
    aliases: [
      'PEGylated Mechano Growth Factor'
    ],
    productType: 'compound',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'muscle growth',
      'exercise response',
      'tissue repair'
    ],
    evidenceLevel: 'preclinical',
    investigational: true
  },
  {
    id: 'pinealon',
    name: 'Pinealon',
    slug: 'pinealon',
    aliases: [
      'EDR',
      'Glu-Asp-Arg',
      'Glutamyl-aspartyl-arginine',
      'EDR peptide'
    ],
    productType: 'compound',
    primaryCategory: 'cognition',
    secondaryCategories: [
      'longevity'
    ],
    researchUses: [
      'neuroprotection',
      'cognition',
      'aging research'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'pt-141',
    name: 'PT-141 (Bremelanotide)',
    slug: 'pt-141',
    aliases: [
      'PT-141',
      'Bremelanotide',
      'PT-141 10 mg',
      'pt-141-10-mg'
    ],
    productType: 'compound',
    primaryCategory: 'sexual-health',
    secondaryCategories: [],
    researchUses: [
      'sexual response',
      'melanocortin signaling'
    ],
    evidenceLevel: 'clinical',
    investigational: false,
    researchComingSoon: true
  },
  {
    id: 'retatrutide',
    name: 'GLP-3 Retatrutide',
    slug: 'retatrutide',
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [],
    researchUses: [
      'body weight',
      'appetite',
      'GLP-1 signaling',
      'GIP signaling',
      'glucagon signaling'
    ],
    evidenceLevel: 'clinical',
    investigational: true,
    aliases: [
      'Retatrutide',
      'GLP-3',
      'GLP-3 (RT)'
    ]
  },
  {
    id: 'selank',
    name: 'Selank',
    slug: 'selank',
    aliases: [
      'N-Acetyl Selank Amidate',
      'NA-Selank',
      'N-Acetyl Selank',
      'n-acetyl-selank-amidate',
      'Ac-TKPRPGP-NH2',
      'NA-Selank Amidate',
      'selank amidate',
    ],
    productType: 'compound',
    primaryCategory: 'cognition',
    secondaryCategories: [],
    researchUses: [
      'stress response',
      'anxiety research',
      'cognition'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'semax',
    name: 'Semax',
    slug: 'semax',
    aliases: [
      'MEHFPGP',
      'Semax acetate',
      'N-Acetyl Semax Amidate',
      'NA-Semax',
      'N-Acetyl Semax',
      'n-acetyl-semax-amidate',
      'ACTH(4-7)-PGP',
      'semax-dosage'
    ],
    productType: 'compound',
    primaryCategory: 'cognition',
    secondaryCategories: [],
    researchUses: [
      'cognition',
      'neuroprotection',
      'focus'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'sermorelin',
    name: 'Sermorelin',
    slug: 'sermorelin',
    productType: 'compound',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'growth-hormone release',
      'body composition'
    ],
    evidenceLevel: 'clinical',
    investigational: true
  },
  {
    id: 'slu-pp-332',
    name: 'SLU-PP-332',
    slug: 'slu-pp-332',
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [
      'longevity',
      'muscle'
    ],
    researchUses: [
      'energy expenditure',
      'exercise mimetic research',
      'metabolism'
    ],
    evidenceLevel: 'preclinical',
    investigational: true,
    notes: 'Small molecule rather than a peptide.'
  },
  {
    id: 'snap-8',
    name: 'Snap-8',
    slug: 'snap-8',
    aliases: [
      'Acetyl Octapeptide-3',
      'Acetyl Octapeptide 3',
      'SNAP8',
      'SNAP-8 Peptide',
      'Ac-EEMQRRAD-NH2',
      'Ac-EEMQRRAD-NH₂'
    ],
    productType: 'compound',
    primaryCategory: 'skin-beauty',
    secondaryCategories: [],
    researchUses: [
      'cosmetic appearance',
      'expression lines',
      'skin aging'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'survodutide',
    name: 'Survodutide',
    slug: 'survodutide',
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [],
    researchUses: [
      'body weight',
      'appetite',
      'GLP-1/glucagon signaling'
    ],
    evidenceLevel: 'clinical',
    investigational: true
  },
  {
    id: 'tb-500-fragment',
    name: 'TB-500 Fragment (17–23)',
    slug: 'tb-500-fragment-17-23',
    aliases: [
      'LKKTETQ',
      'Fequesetide',
      'H-LKKTETQ-OH',
      'Thymosin beta-4 fragment 17-23'
    ],
    productType: 'compound',
    primaryCategory: 'recovery',
    secondaryCategories: [],
    researchUses: [
      'tissue repair',
      'cell migration',
      'recovery'
    ],
    evidenceLevel: 'preclinical',
    investigational: true
  },
  {
    id: 'tb-500',
    name: 'TB-500 / Thymosin Beta-4',
    slug: 'tb-500-thymosin-beta-4',
    aliases: [
      'Thymosin Beta-4',
      'TB4'
    ],
    productType: 'compound',
    primaryCategory: 'recovery',
    secondaryCategories: [],
    researchUses: [
      'tissue repair',
      'wound healing',
      'cell migration'
    ],
    evidenceLevel: 'early-clinical',
    investigational: true
  },
  {
    id: 'tesamorelin',
    name: 'Tesamorelin',
    slug: 'tesamorelin',
    productType: 'compound',
    primaryCategory: 'weight-loss',
    secondaryCategories: [
      'muscle'
    ],
    researchUses: [
      'growth-hormone signaling',
      'visceral fat',
      'body composition'
    ],
    evidenceLevel: 'clinical',
    investigational: false
  },
  {
    id: 'thymagen',
    name: 'Thymagen',
    slug: 'thymagen',
    aliases: [
      'Thymogen',
      'Timogen',
      'Alpha-Glu-Trp',
      'Glu-Trp',
      'Oglufanide',
      'IM862',
      'IM-862'
    ],
    productType: 'compound',
    primaryCategory: 'longevity',
    secondaryCategories: [],
    researchUses: [
      'thymic function',
      'immune regulation',
      'aging research'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'thymosin-alpha-1',
    name: 'Thymosin Alpha-1',
    slug: 'thymosin-alpha-1',
    aliases: [
      'TA-1',
      'Thymalfasin'
    ],
    productType: 'compound',
    primaryCategory: 'recovery',
    secondaryCategories: [
      'longevity'
    ],
    researchUses: [
      'immune signaling',
      'inflammation',
      'thymic function'
    ],
    evidenceLevel: 'clinical',
    investigational: true
  },
  {
    id: 'thymulin',
    name: 'Thymulin',
    slug: 'thymulin',
    productType: 'compound',
    primaryCategory: 'recovery',
    secondaryCategories: [
      'longevity'
    ],
    researchUses: [
      'immune regulation',
      'thymic signaling'
    ],
    evidenceLevel: 'limited',
    investigational: true
  },
  {
    id: 'bpc-157-ghk-cu',
    name: 'BPC-157 + GHK-Cu',
    slug: 'bpc-157-ghk-cu',
    productType: 'blend',
    primaryCategory: 'hair',
    secondaryCategories: [
      'recovery'
    ],
    researchUses: [
      'tissue repair',
      'collagen',
      'skin remodeling'
    ],
    evidenceLevel: 'preclinical',
    investigational: true,
    ingredients: [
      'BPC-157',
      'GHK-Cu'
    ],
    aliases: [
      'BPC GHK-Cu',
      '50/10 BPC GHK',
      '≠ Wolverine',
      '≠ GLOW',
      '≠ KLOW'
    ]
  },
  {
    id: 'bpc-157-tb-500',
    name: 'BPC-157 + TB-500 (Wolverine)',
    slug: 'bpc-157-tb-500',
    aliases: ['Wolverine Stack', 'Wolverine', 'Wolverine Blend', 'BPC-TB-500'],
    productType: 'blend',
    primaryCategory: 'recovery',
    secondaryCategories: [],
    researchUses: [
      'tissue repair',
      'connective tissue',
      'recovery'
    ],
    evidenceLevel: 'preclinical',
    investigational: true,
    ingredients: [
      'BPC-157',
      'TB-500'
    ]
  },
  {
    id: 'cjc-1295-ipamorelin',
    name: 'CJC-1295 (No DAC) + Ipamorelin',
    slug: 'cjc-1295-ipamorelin',
    productType: 'blend',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'growth-hormone signaling',
      'body composition'
    ],
    evidenceLevel: 'limited',
    investigational: true,
    ingredients: [
      'CJC-1295 (No DAC)',
      'Ipamorelin'
    ]
  },
  {
    id: 'glow-blend',
    name: 'GLOW: GHK-Cu + TB-500 + BPC-157',
    slug: 'glow-ghk-cu-tb-500-bpc-157',
    productType: 'blend',
    primaryCategory: 'hair',
    secondaryCategories: [
      'recovery',
      'skin-beauty'
    ],
    researchUses: [
      'skin remodeling',
      'collagen',
      'tissue repair'
    ],
    evidenceLevel: 'preclinical',
    investigational: true,
    ingredients: [
      'GHK-Cu',
      'TB-500',
      'BPC-157'
    ],
    aliases: [
      'GLOW'
    ]
  },
  {
    id: 'klow-blend',
    name: 'KLOW: KPV + GHK-Cu + TB-500 + BPC-157',
    slug: 'klow-kpv-ghk-cu-tb-500-bpc-157',
    productType: 'blend',
    primaryCategory: 'hair',
    secondaryCategories: [
      'recovery',
      'skin-beauty'
    ],
    researchUses: [
      'inflammation',
      'skin remodeling',
      'tissue repair'
    ],
    evidenceLevel: 'preclinical',
    investigational: true,
    ingredients: [
      'KPV',
      'GHK-Cu',
      'TB-500',
      'BPC-157'
    ],
    aliases: [
      'KLOW'
    ]
  },
  {
    id: 'kpv-ghk-cu',
    name: 'KPV + GHK-Cu',
    slug: 'kpv-ghk-cu',
    productType: 'blend',
    primaryCategory: 'hair',
    secondaryCategories: [
      'recovery'
    ],
    researchUses: [
      'skin',
      'inflammation',
      'tissue remodeling'
    ],
    evidenceLevel: 'preclinical',
    investigational: true,
    ingredients: [
      'KPV',
      'GHK-Cu'
    ]
  },
  {
    id: 'selank-semax',
    name: 'Selank + Semax',
    slug: 'selank-semax',
    aliases: [
      'Selank Semax',
      'Selank-Semax blend',
      'selank-semax-blend',
      'semax-selank',
      'NA Selank Semax',
    ],
    productType: 'blend',
    primaryCategory: 'cognition',
    secondaryCategories: [],
    researchUses: [
      'cognition',
      'focus',
      'stress response'
    ],
    evidenceLevel: 'limited',
    investigational: true,
    ingredients: [
      'Selank',
      'Semax'
    ]
  },
  {
    id: 'ta-1-complex',
    name: 'TA-1 Complex: Thymosin Alpha-1 + Thymalin',
    slug: 'ta-1-thymalin-complex',
    aliases: [
      'TA-1 Complex',
      'Thymosin Alpha-1 + Thymalin',
      'Thymosin Alpha-1 Thymalin',
      'TA1 + Thymalin',
      'TA1 Thymalin',
      'thymosin-alpha-1-thymalin',
      'ta1-thymalin'
    ],
    productType: 'blend',
    primaryCategory: 'recovery',
    secondaryCategories: [
      'longevity'
    ],
    researchUses: [
      'immune regulation',
      'thymic signaling'
    ],
    evidenceLevel: 'limited',
    investigational: true,
    ingredients: [
      'Thymosin Alpha-1',
      'Thymalin'
    ]
  },
  {
    id: '2x-tesamorelin-ipamorelin',
    name: '2X: Tesamorelin + Ipamorelin',
    slug: '2x-tesamorelin-ipamorelin',
    productType: 'blend',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'growth-hormone signaling',
      'body composition'
    ],
    evidenceLevel: 'limited',
    investigational: true,
    researchComingSoon: true,
    ingredients: [
      'Tesamorelin',
      'Ipamorelin'
    ]
  },
  {
    id: '3x-tesamorelin-mgf-ipamorelin',
    name: '3X: Tesamorelin + MGF + Ipamorelin',
    slug: '3x-tesamorelin-mgf-ipamorelin',
    productType: 'blend',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'muscle growth',
      'growth-hormone signaling',
      'recovery'
    ],
    evidenceLevel: 'preclinical',
    investigational: true,
    researchComingSoon: true,
    ingredients: [
      'Tesamorelin',
      'MGF',
      'Ipamorelin'
    ]
  },
  {
    id: '4x-tesamorelin-ipamorelin-mgf-ghrp-2',
    name: '4X: Tesamorelin + Ipamorelin + MGF + GHRP-2',
    slug: '4x-tesamorelin-ipamorelin-mgf-ghrp-2',
    productType: 'blend',
    primaryCategory: 'muscle',
    secondaryCategories: [],
    researchUses: [
      'muscle growth',
      'growth-hormone signaling',
      'recovery'
    ],
    evidenceLevel: 'preclinical',
    investigational: true,
    researchComingSoon: true,
    ingredients: [
      'Tesamorelin',
      'Ipamorelin',
      'MGF',
      'GHRP-2'
    ]
  },
  {
    id: 'ghk-cu-topical-powder',
    name: 'GHK-Cu Topical Powder',
    slug: 'ghk-cu-topical-powder',
    aliases: [
      'GHK-Cu topical powder',
      'ghk-cu-topical-powder-dosage',
      'copper-tripeptide-1-powder',
      'ghk-cu-powder'
    ],
    productType: 'compound',
    researchUses: [
      'hair',
      'scalp',
      'topical copper peptide'
    ],
    evidenceLevel: 'limited',
    investigational: true,
    notes: 'Topical powder format of GHK-Cu.',
    primaryCategory: 'hair',
    secondaryCategories: []
  },
  {
    id: 'thymalin',
    name: 'Thymalin',
    slug: 'thymalin',
    aliases: [
      'Timalin',
      'Thymus extract',
      'Bovine thymus extract'
    ],
    productType: 'compound',
    researchUses: [
      'thymic signaling',
      'immune regulation',
      'aging research'
    ],
    evidenceLevel: 'limited',
    investigational: true,
    primaryCategory: 'longevity',
    secondaryCategories: []
  }
];


/** Evidence ranking used for default product sort on category pages. */
export const EVIDENCE_RANK = {
  clinical: 5,
  "early-clinical": 4,
  mixed: 3,
  preclinical: 2,
  limited: 1,
};

/**
 * Rules for generating category pages and filters.
 * Consume these when wiring routes/filters — not applied to UI yet.
 */
export const CATEGORY_PAGE_RULES = {
  /** Prefer primary-category products first, then secondary matches. */
  primaryFirst: true,
  /** Exclude uncategorized bundles until contents assign categories. */
  excludeUncategorizedBundles: true,
  /** Default include secondary-category matches on category pages. */
  includeSecondaryByDefault: true,
  /** Default sort: evidence (desc), then name (asc). */
  defaultSort: "evidence-desc",
  /** Allowed filter facets for category / library UIs. */
  filterFacets: [
    "productType",
    "evidenceLevel",
    "investigational",
    "researchUses",
    "primaryOnly",
  ],
  /** Suggested path pattern for future category routes. */
  routePattern: "/categories/[slug]",
};

/** @param {CategorySlug} category */
export const getProductsByCategory = (category, includeSecondary = true) =>
  peptideProducts.filter(
    (product) =>
      product.primaryCategory === category ||
      (includeSecondary &&
        (product.secondaryCategories || []).includes(category))
  );

/** @param {CategorySlug} category */
export const getPrimaryProductsByCategory = (category) =>
  peptideProducts.filter((product) => product.primaryCategory === category);

/** @param {string} slug */
export const getCategoryBySlug = (slug) =>
  peptideCategories.find((category) => category.slug === slug);

/** @param {string} slug */
export const getProductBySlug = (slug) =>
  peptideProducts.find((product) => product.slug === slug);

/**
 * Whether a product (or alias) is flagged as research-coming-soon.
 * @param {string} slugOrAlias
 */
export function isResearchComingSoon(slugOrAlias) {
  const product =
    getProductBySlug(slugOrAlias) ||
    resolveProductByAliasOrSlug(slugOrAlias);
  return Boolean(product?.researchComingSoon);
}

/**
 * Resolve a product by canonical slug or any alias (case-insensitive).
 * @param {string} query
 */
export function resolveProductByAliasOrSlug(query) {
  const q = String(query || "")
    .trim()
    .toLowerCase()
    .replace(/^["']|["']$/g, "");
  if (!q) return null;

  const bySlug = peptideProducts.find((p) => p.slug.toLowerCase() === q);
  if (bySlug) return bySlug;

  const byAlias = peptideProducts.find((p) =>
    (p.aliases || []).some((alias) => alias.toLowerCase() === q)
  );
  if (byAlias) return byAlias;

  const byName = peptideProducts.find((p) => {
    const name = p.name.toLowerCase();
    return (
      name === q ||
      name.startsWith(`${q}:`) ||
      name.startsWith(`${q} `) ||
      name.includes(`(${q})`)
    );
  });
  if (byName) return byName;

  return null;
}

/**
 * Categories a product belongs to (primary + secondary).
 * @param {PeptideProduct} product
 * @returns {CategorySlug[]}
 */
export function getProductCategories(product) {
  /** @type {CategorySlug[]} */
  const cats = [];
  if (product.primaryCategory) cats.push(product.primaryCategory);
  for (const c of product.secondaryCategories || []) {
    if (!cats.includes(c)) cats.push(c);
  }
  return cats;
}

/**
 * Related categories for a category page (other categories that share products).
 * @param {CategorySlug} category
 * @returns {{ slug: CategorySlug; sharedCount: number }[]}
 */
export function getRelatedCategories(category) {
  const products = getProductsByCategory(category, true);
  /** @type {Record<string, number>} */
  const counts = {};

  for (const product of products) {
    for (const c of getProductCategories(product)) {
      if (c === category) continue;
      counts[c] = (counts[c] || 0) + 1;
    }
  }

  return Object.entries(counts)
    .map(([slug, sharedCount]) => ({
      /** @type {CategorySlug} */ slug: /** @type {CategorySlug} */ (slug),
      sharedCount,
    }))
    .sort((a, b) => b.sharedCount - a.sharedCount || a.slug.localeCompare(b.slug));
}

/**
 * @typedef {object} TaxonomyFilters
 * @property {CategorySlug} [category]
 * @property {boolean} [primaryOnly]
 * @property {"compound"|"blend"|"bundle"|Array<"compound"|"blend"|"bundle">} [productType]
 * @property {EvidenceLevel|EvidenceLevel[]} [evidenceLevel]
 * @property {boolean} [investigational]
 * @property {string|string[]} [researchUses]
 * @property {string} [query]
 * @property {"evidence-desc"|"evidence-asc"|"name-asc"|"name-desc"} [sort]
 * @property {boolean} [excludeUncategorizedBundles]
 */

/**
 * Filter + sort products for category pages and library filters.
 * @param {TaxonomyFilters} [filters]
 * @returns {PeptideProduct[]}
 */
export function filterTaxonomyProducts(filters = {}) {
  const {
    category,
    primaryOnly = false,
    productType,
    evidenceLevel,
    investigational,
    researchUses,
    query,
    sort = CATEGORY_PAGE_RULES.defaultSort,
    excludeUncategorizedBundles =
      CATEGORY_PAGE_RULES.excludeUncategorizedBundles,
  } = filters;

  const types = productType
    ? Array.isArray(productType)
      ? productType
      : [productType]
    : null;
  const evidence = evidenceLevel
    ? Array.isArray(evidenceLevel)
      ? evidenceLevel
      : [evidenceLevel]
    : null;
  const uses = researchUses
    ? Array.isArray(researchUses)
      ? researchUses.map((u) => u.toLowerCase())
      : [String(researchUses).toLowerCase()]
    : null;
  const q = query ? String(query).trim().toLowerCase() : "";

  let list = peptideProducts.filter((product) => {
    if (
      excludeUncategorizedBundles &&
      product.productType === "bundle" &&
      product.primaryCategory == null &&
      (product.secondaryCategories || []).length === 0
    ) {
      return false;
    }

    if (category) {
      if (primaryOnly) {
        if (product.primaryCategory !== category) return false;
      } else if (
        product.primaryCategory !== category &&
        !(product.secondaryCategories || []).includes(category)
      ) {
        return false;
      }
    }

    if (types && !types.includes(product.productType)) return false;
    if (evidence && !evidence.includes(product.evidenceLevel)) return false;
    if (
      typeof investigational === "boolean" &&
      product.investigational !== investigational
    ) {
      return false;
    }
    if (
      uses &&
      !uses.some((u) =>
        product.researchUses.some((ru) => ru.toLowerCase().includes(u))
      )
    ) {
      return false;
    }
    if (q) {
      const hay = [
        product.name,
        product.slug,
        ...(product.aliases || []),
        ...(product.ingredients || []),
        ...product.researchUses,
      ]
        .join(" ")
        .toLowerCase();
      if (!hay.includes(q)) return false;
    }

    return true;
  });

  list = [...list].sort((a, b) => {
    if (sort === "name-asc") return a.name.localeCompare(b.name);
    if (sort === "name-desc") return b.name.localeCompare(a.name);
    const ra = EVIDENCE_RANK[a.evidenceLevel] || 0;
    const rb = EVIDENCE_RANK[b.evidenceLevel] || 0;
    if (sort === "evidence-asc") {
      return ra - rb || a.name.localeCompare(b.name);
    }
    // evidence-desc (default)
    if (category && CATEGORY_PAGE_RULES.primaryFirst) {
      const ap = a.primaryCategory === category ? 1 : 0;
      const bp = b.primaryCategory === category ? 1 : 0;
      if (ap !== bp) return bp - ap;
    }
    return rb - ra || a.name.localeCompare(b.name);
  });

  return list;
}

/**
 * Payload for generating a category page (SEO + product list + facets).
 * @param {CategorySlug} slug
 * @param {Omit<TaxonomyFilters, "category">} [filters]
 */
export function buildCategoryPageData(slug, filters = {}) {
  const category = getCategoryBySlug(slug);
  if (!category) return null;

  const products = filterTaxonomyProducts({
    ...filters,
    category: slug,
    primaryOnly: filters.primaryOnly ?? false,
  });

  const evidenceLevels = [
    ...new Set(products.map((p) => p.evidenceLevel)),
  ].sort(
    (a, b) => (EVIDENCE_RANK[b] || 0) - (EVIDENCE_RANK[a] || 0)
  );
  const productTypes = [...new Set(products.map((p) => p.productType))];
  const researchUses = [
    ...new Set(products.flatMap((p) => p.researchUses)),
  ].sort((a, b) => a.localeCompare(b));

  return {
    category,
    products,
    relatedCategories: getRelatedCategories(slug),
    facets: {
      evidenceLevels,
      productTypes,
      researchUses,
      investigational: {
        true: products.filter((p) => p.investigational).length,
        false: products.filter((p) => !p.investigational).length,
      },
      primaryCount: products.filter((p) => p.primaryCategory === slug).length,
      secondaryCount: products.filter(
        (p) =>
          p.primaryCategory !== slug &&
          (p.secondaryCategories || []).includes(slug)
      ).length,
    },
    seo: {
      title: category.seoTitle,
      description: category.seoDescription,
      keywords: category.keywords,
    },
    disclaimer: category.disclaimer,
  };
}

/** All category slugs (for static params / sitemaps). */
export const CATEGORY_SLUGS = peptideCategories.map((c) => c.slug);

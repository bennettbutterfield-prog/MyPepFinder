/** @type {{ id: string; title: string; description?: string; items: { question: string; answer: string }[] }[]} */
export const SITE_FAQ_SECTIONS = [
  {
    id: "platform",
    title: "About MyPepFinder",
    description:
      "What this site is, how it works, and what you can expect from our research tools.",
    items: [
      {
        question: "What is MyPepFinder?",
        answer:
          "MyPepFinder is an educational platform for exploring peptide research. We organize compound profiles, link to published studies, compare providers, and offer free calculators to help you review information with clearer context.",
      },
      {
        question: "Does MyPepFinder provide medical advice?",
        answer:
          "No. MyPepFinder provides educational content and research tools only. Nothing on this site is medical advice, a diagnosis, a treatment recommendation, or a prescription. Always consult a qualified healthcare professional before making health-related decisions.",
      },
      {
        question: "Do you sell peptides?",
        answer:
          "No. MyPepFinder does not sell peptides, compounds, or medical products. We link to third-party providers for informational comparison only and do not control their products, pricing, or fulfillment.",
      },
      {
        question: "Is MyPepFinder free to use?",
        answer:
          "Core research pages, the Research Library, goal guides, and calculators are free to browse. Some features may expand over time, but our focus is open access to educational peptide research tools.",
      },
      {
        question: "Where does your research information come from?",
        answer:
          "Peptide profiles summarize published literature, trial registries, regulatory notices, and other referenced sources linked on each page. We aim to distinguish established evidence from preclinical findings, community protocols, and open questions.",
      },
      {
        question: "How often is content updated?",
        answer:
          "Peptide research evolves quickly. We update profiles, dosage guides, and calculators as new trials, labels, and literature become relevant. Always verify current regulatory status and evidence before relying on any summary.",
      },
    ],
  },
  {
    id: "using-the-site",
    title: "Using the site",
    description:
      "How to browse peptides, goals, calculators, and provider comparisons.",
    items: [
      {
        question: "How do I find peptides for my goal?",
        answer:
          "Start from the home page goal cards — such as weight loss, recovery, cognition, or sleep — or open the Research Library to browse by category. Each peptide page includes mechanisms, research links, and related goals where applicable.",
      },
      {
        question: "What is the Research Library?",
        answer:
          "The Research Library is an index of peptide compounds in our database. You can search by name or alias, filter by category, and open detailed profiles with literature summaries and comparison placeholders.",
      },
      {
        question: "What are goal pages?",
        answer:
          "Goal pages group peptides and educational content around a specific outcome — for example, losing weight or improving recovery. They help you compare compounds studied in that area without reading every profile individually.",
      },
      {
        question: "How do provider comparisons work?",
        answer:
          "Provider pages list vendors with transparency notes, product focus, and reference links. They are designed to help you evaluate options side by side. Listings are informational and do not guarantee product quality, purity, or legality.",
      },
      {
        question: "Are provider listings endorsements?",
        answer:
          "No. A provider appearing on MyPepFinder is not an endorsement, ranking guarantee, or recommendation to purchase. You are responsible for evaluating vendors, product quality, and compliance with applicable laws.",
      },
      {
        question: "Do you use affiliate links?",
        answer:
          "Some outbound provider links may be affiliate or sponsored links, meaning we may receive compensation if you click through or make a purchase. Compensation does not change our educational positioning or your obligation to evaluate providers independently.",
      },
    ],
  },
  {
    id: "calculators",
    title: "Calculators & tools",
    description:
      "Questions about the dosage calculator, calorie deficit calculator, and how to interpret results.",
    items: [
      {
        question: "What does the peptide dosage calculator do?",
        answer:
          "It converts vial size, bacteriostatic water volume, and desired dose into concentration, draw volume, and insulin-syringe units. It is a math aid — not a prescription or validated clinical protocol.",
      },
      {
        question: "What does the calorie deficit calculator do?",
        answer:
          "It estimates daily calorie intake, projected weight-loss timeline, and macro targets using inputs such as age, sex, height, weight, activity level, and goal weight. It models metabolic adaptation rather than assuming a fixed pounds-per-week rate.",
      },
      {
        question: "Can I trust calculator outputs?",
        answer:
          "Calculators show transparent math based on the values you enter. They are helpful for checking reconstitution arithmetic or planning intake, but they cannot account for every individual factor. Verify results independently and consult a professional for personal health decisions.",
      },
      {
        question: "Why are calculator fields empty by default?",
        answer:
          "We leave inputs blank so you enter your own numbers rather than assuming a specific protocol. Pre-filled examples can be mistaken for recommendations, so we prefer you supply values that match your situation.",
      },
    ],
  },
  {
    id: "safety",
    title: "Safety & legality",
    description:
          "Important limits on what this site covers and what you should verify independently.",
    items: [
      {
        question: "Are peptides legal?",
        answer:
          "Legality depends on the compound, country, intended use, and whether a product is approved, investigational, or restricted. Many peptides discussed on MyPepFinder are not FDA-approved for the uses people research online. You are responsible for understanding laws that apply to you.",
      },
      {
        question: "Are peptides safe?",
        answer:
          "Safety varies widely by compound, dose, route, product quality, and individual health status. Investigational peptides may have limited human data. Discuss risks and benefits with a qualified healthcare professional before use.",
      },
      {
        question: "Can I use MyPepFinder to choose a dose?",
        answer:
          "No. Dosage guides and calculators explain how doses appear in research or community contexts and help you understand calculations. They are not instructions to use any peptide or a substitute for medical supervision.",
      },
      {
        question: "How should I evaluate peptide product quality?",
        answer:
          "Look for third-party testing, clear labeling, batch documentation, and reputable sourcing. MyPepFinder does not test products and cannot verify vendor claims. Purity, sterility, and identity should be confirmed independently.",
      },
    ],
  },
];

export function buildSiteFaqJsonLd(extraItems = []) {
  const allItems = [
    ...SITE_FAQ_SECTIONS.flatMap((section) => section.items),
    ...extraItems,
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

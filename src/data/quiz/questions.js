/**
 * Adaptive quiz question bank.
 * Rows are conditional nodes — not a checklist every visitor completes.
 */

export const QUIZ_GOALS = [
  {
    id: "weight-loss",
    label: "Lose weight",
    prompt: "Appetite, body fat, and metabolic health.",
  },
  {
    id: "muscle",
    label: "Build muscle and performance",
    prompt: "Muscle, strength, and training progress.",
  },
  {
    id: "recovery",
    label: "Repair and recovery",
    prompt: "Injured tissue, joints, nerves, and gut research.",
  },
  {
    id: "cognition",
    label: "Focus and mood",
    prompt: "Attention, memory, stress, and mental clarity.",
  },
  {
    id: "sleep",
    label: "Sleep better",
    prompt: "Falling asleep, staying asleep, and feeling rested.",
  },
  {
    id: "hair",
    label: "Hair growth",
    prompt: "Thinning hair, follicles, and scalp research.",
  },
  {
    id: "skin",
    label: "Skin and appearance",
    prompt: "Texture, firmness, lines, and pigmentation.",
  },
  {
    id: "sexual-health",
    label: "Sexual health",
    prompt: "Desire, arousal, and reproductive research.",
  },
  {
    id: "aging",
    label: "Healthy aging",
    prompt: "Energy, cellular aging, and maintaining function.",
  },
  {
    id: "immune",
    label: "Immune health",
    prompt: "Immune responses and inflammation research.",
  },
];

const GOAL_OPTIONS = QUIZ_GOALS.map((goal) => ({
  id: goal.id,
  label: goal.label,
  detail: goal.prompt,
}));

function q(def) {
  return def;
}

function goalIs(id) {
  return (ctx) => ctx.goal === id;
}

function answerIs(questionId, ...optionIds) {
  return (ctx) => optionIds.includes(ctx.answers[questionId]);
}

function and(...preds) {
  return (ctx) => preds.every((pred) => pred(ctx));
}

/**
 * @typedef {object} QuizOption
 * @property {string} id
 * @property {string} label
 * @property {string} [detail]
 */

/**
 * @typedef {object} QuizQuestion
 * @property {string} id
 * @property {"goal"|"details"|"preferences"} stage
 * @property {string} text
 * @property {string} [helper]
 * @property {QuizOption[]} options
 * @property {(ctx: object) => boolean} when
 * @property {string} whyItMatters
 * @property {boolean} [optional]
 */

/** @type {QuizQuestion[]} */
export const QUIZ_QUESTIONS = [
  q({
    id: "goal",
    stage: "goal",
    text: "What would you like to improve?",
    helper:
      "Choose your main goal. We’ll ask a few focused questions to find the most relevant research.",
    options: GOAL_OPTIONS,
    when: () => true,
    whyItMatters: "The primary goal selects which research questions we ask next.",
  }),

  // A. Weight
  q({
    id: "weight.outcome",
    stage: "details",
    text: "What would make the biggest difference?",
    options: [
      { id: "hunger", label: "Feel less hungry" },
      { id: "overall-weight", label: "Lose overall body weight" },
      { id: "keep-muscle", label: "Lose fat while keeping muscle" },
      { id: "abdominal", label: "Reduce abdominal fat" },
      {
        id: "metabolic",
        label: "Explore blood-sugar or fatty-liver research",
      },
      { id: "unsure", label: "Not sure" },
    ],
    when: goalIs("weight-loss"),
    whyItMatters:
      "Hunger, scale weight, composition, abdominal fat, and metabolic research are different questions.",
  }),
  q({
    id: "weight.abdomen",
    stage: "details",
    text: "Which question are you trying to answer?",
    helper:
      "Appearance or a pinch test cannot establish visceral fat — fat around the organs — or identify the cause.",
    options: [
      { id: "waist", label: "Overall waist reduction" },
      { id: "subcutaneous", label: "Fat just under the skin" },
      {
        id: "visceral-medical",
        label: "Fat around the organs in a medically identified condition",
      },
      { id: "unknown", label: "I don’t know the difference" },
    ],
    when: and(goalIs("weight-loss"), answerIs("weight.outcome", "abdominal")),
    whyItMatters:
      "Tesamorelin’s established use is population-specific and is not general belly-fat research.",
  }),
  q({
    id: "weight.metabolic",
    stage: "details",
    text: "Which research outcome matters most?",
    options: [
      { id: "body-weight", label: "Body weight" },
      { id: "blood-sugar", label: "Blood-sugar control" },
      { id: "fatty-liver", label: "Fatty-liver changes" },
      { id: "keep-muscle", label: "Maintaining muscle during weight loss" },
      { id: "unsure", label: "Not sure" },
    ],
    when: and(goalIs("weight-loss"), answerIs("weight.outcome", "metabolic")),
    whyItMatters:
      "Weight, glucose, liver fat, and muscle retention are separate study endpoints.",
  }),

  // B. Muscle
  q({
    id: "muscle.outcome",
    stage: "details",
    text: "What part of training progress matters most?",
    options: [
      { id: "size", label: "More muscle size" },
      { id: "strength", label: "More strength" },
      { id: "keep-muscle", label: "Keep muscle while losing weight" },
      { id: "recover", label: "Recover between workouts" },
      { id: "endurance", label: "Better endurance" },
      { id: "hormone", label: "Understand growth-hormone research" },
    ],
    when: goalIs("muscle"),
    whyItMatters:
      "Size, strength, recovery, endurance, and hormone-release studies are not interchangeable.",
  }),
  q({
    id: "muscle.bottleneck",
    stage: "details",
    text: "What is getting in the way most?",
    options: [
      { id: "soreness", label: "Ordinary muscle soreness" },
      { id: "injury", label: "A specific painful or injured area" },
      { id: "dieting", label: "Losing muscle while dieting" },
      { id: "fatigue", label: "Fatigue or limited stamina" },
      { id: "slow", label: "Slow progress despite consistent training" },
      { id: "unsure", label: "Not sure" },
    ],
    when: and(
      goalIs("muscle"),
      answerIs("muscle.outcome", "size", "strength", "keep-muscle", "recover")
    ),
    whyItMatters: "Soreness and a known injury need different research paths.",
  }),
  q({
    id: "muscle.endurance",
    stage: "details",
    text: "What would you like the research to measure?",
    options: [
      { id: "performance", label: "Exercise performance" },
      { id: "lab-energy", label: "Muscle energy use in the laboratory" },
      { id: "function-age", label: "Maintaining physical function with age" },
      { id: "unsure", label: "Not sure" },
    ],
    when: and(goalIs("muscle"), answerIs("muscle.outcome", "endurance")),
    whyItMatters:
      "Human performance trials and laboratory energy measurements must stay separate.",
  }),
  q({
    id: "muscle.hormone",
    stage: "details",
    text: "What do you want to understand?",
    options: [
      {
        id: "release",
        label: "The body’s release of growth hormone",
        detail: "Signals that tell a gland beneath the brain to send out growth hormone.",
      },
      {
        id: "muscle-cells",
        label: "Signals acting on muscle cells",
      },
      {
        id: "outcomes",
        label: "Whether measured hormone changes improve strength or muscle",
      },
      { id: "compare", label: "Compare the approaches" },
    ],
    when: and(goalIs("muscle"), answerIs("muscle.outcome", "hormone")),
    whyItMatters:
      "A hormone increase is not proof of larger muscles, faster recovery, or better sleep.",
  }),

  // C. Recovery
  q({
    id: "recovery.area",
    stage: "details",
    text: "What kind of recovery are you researching?",
    options: [
      { id: "tendon", label: "Tendon or ligament" },
      { id: "muscle-injury", label: "Muscle injury" },
      { id: "joint", label: "Joint or cartilage" },
      { id: "skin-wound", label: "Skin or wound healing" },
      { id: "nerve", label: "Nerve-related research" },
      { id: "gut", label: "Gut or digestive lining" },
      { id: "unsure", label: "Not sure — help me clarify" },
    ],
    when: (ctx) =>
      ctx.goal === "recovery" || ctx.answers["muscle.bottleneck"] === "injury",
    whyItMatters: "Tissue type determines which repair literature is even relevant.",
  }),
  q({
    id: "recovery.tissue",
    stage: "details",
    text: "Which area has been identified?",
    options: [
      { id: "tendon", label: "Tendon or ligament around the joint" },
      { id: "cartilage", label: "Cartilage inside the joint" },
      { id: "muscle", label: "Muscle" },
      { id: "unknown", label: "The cause has not been identified" },
    ],
    when: answerIs("recovery.area", "joint", "unsure"),
    whyItMatters: "Body location alone does not identify the tissue being studied.",
  }),
  q({
    id: "recovery.endpoint",
    stage: "details",
    text: "What would you want a study to demonstrate?",
    helper:
      "Less inflammation is not automatically demonstrated healing. These are different outcomes.",
    options: [
      { id: "healing", label: "Tissue healing" },
      { id: "inflammation", label: "Less inflammation" },
      { id: "pain", label: "Less pain or discomfort" },
      { id: "function", label: "Return of function" },
    ],
    when: (ctx) =>
      Boolean(ctx.answers["recovery.area"]) &&
      ctx.answers["recovery.area"] !== "skin-wound" &&
      ctx.answers["recovery.area"] !== "gut",
    whyItMatters: "Healing, inflammation, pain, and function are separate endpoints.",
  }),
  q({
    id: "recovery.skin",
    stage: "details",
    text: "Which research topic fits?",
    options: [
      { id: "healed-marks", label: "Already-healed marks or skin texture" },
      { id: "active-wound", label: "Healing an active wound" },
      { id: "slow-wound", label: "A wound that is slow to heal" },
      { id: "general", label: "General skin repair" },
    ],
    when: answerIs("recovery.area", "skin-wound"),
    whyItMatters:
      "Active or nonhealing wounds get a care-oriented explanation, not a self-treatment match.",
  }),

  // D. Cognition
  q({
    id: "cognition.outcome",
    stage: "details",
    text: "What would you most like to improve?",
    options: [
      { id: "focus", label: "Stay focused" },
      { id: "memory", label: "Remember information" },
      { id: "overwhelmed", label: "Feel less mentally overwhelmed" },
      { id: "clarity", label: "Mental clarity or fatigue" },
      { id: "mood", label: "Low-mood research" },
      { id: "brain-injury", label: "Brain-injury or neurological-condition research" },
    ],
    when: goalIs("cognition"),
    whyItMatters:
      "Attention, stress, memory, mood, and injury research are different interests.",
  }),
  q({
    id: "cognition.pattern",
    stage: "details",
    text: "When is this most noticeable?",
    helper: "Treat these as reported context, not proven causes.",
    options: [
      { id: "stress", label: "When worried or stressed" },
      { id: "sleep", label: "After poor sleep" },
      { id: "demanding", label: "During mentally demanding work" },
      { id: "all-day", label: "Throughout the day without a clear pattern" },
      { id: "unsure", label: "Not sure" },
    ],
    when: and(goalIs("cognition"), answerIs("cognition.outcome", "focus", "clarity")),
    whyItMatters: "Stress-linked focus and everyday productivity studies are not the same.",
  }),
  q({
    id: "cognition.memory",
    stage: "details",
    text: "Which research question fits?",
    options: [
      { id: "everyday", label: "Everyday recall in otherwise healthy adults" },
      { id: "aging", label: "Maintaining cognition with age" },
      { id: "diagnosed", label: "A diagnosed neurological condition" },
      { id: "worsening", label: "New or worsening memory difficulties" },
    ],
    when: and(goalIs("cognition"), answerIs("cognition.outcome", "memory")),
    whyItMatters:
      "Worsening memory gets a medical-evaluation prompt, not a peptide recommendation.",
  }),
  q({
    id: "cognition.scope",
    stage: "details",
    text: "Which evidence would you like to understand?",
    options: [
      { id: "human-condition", label: "Studies in people with the condition" },
      { id: "early", label: "Early work on brain cells or animals" },
      { id: "difference", label: "Differences between the two" },
      { id: "unsure", label: "Not sure" },
    ],
    when: and(
      goalIs("cognition"),
      answerIs("cognition.outcome", "mood", "brain-injury")
    ),
    whyItMatters: "This can set evidence scope so we do not ask the same question twice.",
  }),

  // E. Sleep
  q({
    id: "sleep.outcome",
    stage: "details",
    text: "What is the main sleep problem you’re researching?",
    options: [
      { id: "falling", label: "Falling asleep" },
      { id: "staying", label: "Staying asleep" },
      { id: "early-wake", label: "Waking too early" },
      { id: "unrefreshed", label: "Feeling unrefreshed" },
      { id: "irregular", label: "An irregular sleep schedule" },
    ],
    when: (ctx) =>
      ctx.goal === "sleep" || ctx.answers["cognition.pattern"] === "sleep",
    whyItMatters: "Onset, maintenance, and schedule problems are different sleep questions.",
  }),
  q({
    id: "sleep.context",
    stage: "details",
    text: "What seems connected to it?",
    options: [
      { id: "racing", label: "A racing mind" },
      { id: "shift", label: "Shift work or changing bedtimes" },
      { id: "no-pattern", label: "No obvious pattern" },
      { id: "diagnosed", label: "I’m researching a diagnosed sleep condition" },
      { id: "unsure", label: "Not sure" },
    ],
    when: (ctx) => Boolean(ctx.answers["sleep.outcome"]),
    whyItMatters: "A racing mind does not convert an anxiety study into sleep evidence.",
  }),
  q({
    id: "sleep.priority",
    stage: "details",
    text: "Which outcome matters more?",
    options: [
      { id: "sleep", label: "Sleep itself" },
      { id: "calmer", label: "Feeling calmer before bed" },
      { id: "both-sleep-first", label: "Both, with sleep first" },
    ],
    when: answerIs("sleep.context", "racing"),
    whyItMatters: "Keeps anxiety literature from being treated as insomnia treatment.",
  }),

  // F. Hair
  q({
    id: "hair.outcome",
    stage: "details",
    text: "What are you mainly trying to improve?",
    options: [
      { id: "density", label: "Scalp hair density" },
      { id: "thinning", label: "Hairline or crown thinning" },
      { id: "shedding", label: "Increased shedding" },
      { id: "appearance", label: "Hair appearance or breakage" },
      { id: "scalp", label: "Scalp condition" },
      { id: "unsure", label: "Not sure" },
    ],
    when: goalIs("hair"),
    whyItMatters: "Hair-shaft appearance is not the same as hair regrowth.",
  }),
  q({
    id: "hair.target",
    stage: "details",
    text: "What would you want a study to show?",
    helper:
      "Follicles are the small pockets in the skin where hairs grow. Growing them in a dish is not a scalp trial.",
    options: [
      { id: "human-scalp", label: "More hair growing on a person’s scalp" },
      { id: "lab-follicle", label: "Effects on hair follicles in a laboratory" },
      { id: "scalp-skin", label: "Better scalp or skin condition" },
      { id: "unsure", label: "Not sure" },
    ],
    when: goalIs("hair"),
    whyItMatters: "Human-tissue experiments outside the body stay laboratory evidence.",
  }),

  // G. Skin
  q({
    id: "skin.outcome",
    stage: "details",
    text: "What would you most like to change?",
    options: [
      { id: "texture", label: "Texture or firmness" },
      { id: "lines", label: "Fine lines" },
      { id: "irritation", label: "Irritation or redness" },
      { id: "marks", label: "Healed marks or scars" },
      { id: "pigment", label: "Pigmentation or tanning research" },
      { id: "wound", label: "Wound healing" },
    ],
    when: goalIs("skin"),
    whyItMatters:
      "Expression lines, structure, irritation, marks, pigment, and wounds are different paths.",
  }),
  q({
    id: "skin.priority",
    stage: "details",
    text: "Which matters most?",
    options: [
      { id: "calm", label: "Calming irritation" },
      { id: "texture", label: "Improving texture after healing" },
      { id: "both", label: "Understanding both" },
    ],
    when: and(goalIs("skin"), answerIs("skin.outcome", "irritation")),
    whyItMatters: "A blend has not demonstrated both effects together.",
  }),
  q({
    id: "skin.form",
    stage: "details",
    text: "Which forms should we include?",
    helper: "Raw topical powder is not equivalent to a tested finished cosmetic.",
    options: [
      { id: "topical", label: "Applied-to-skin research only" },
      { id: "any-separate", label: "Any verified form, with separate evidence" },
      { id: "none", label: "No preference" },
    ],
    when: goalIs("skin"),
    whyItMatters: "Formulation is a hard filter when you restrict it.",
  }),

  // H. Sexual health
  q({
    id: "sexual.outcome",
    stage: "details",
    text: "Which area are you researching?",
    options: [
      { id: "desire", label: "Sexual desire" },
      { id: "arousal", label: "Arousal or sexual response" },
      { id: "erections", label: "Erections" },
      { id: "reproductive", label: "Reproductive hormones or fertility" },
      { id: "unsure", label: "Not sure" },
    ],
    when: goalIs("sexual-health"),
    whyItMatters: "Desire, arousal, erections, and fertility are different interests.",
  }),
  q({
    id: "sexual.distinction",
    stage: "details",
    text: "Which is closer to your question?",
    options: [
      { id: "low-interest", label: "Less interest in sex" },
      { id: "response", label: "Interest is present but physical response is difficult" },
      { id: "both", label: "Both" },
      { id: "learning", label: "Just learning the difference" },
    ],
    when: and(goalIs("sexual-health"), answerIs("sexual.outcome", "desire", "arousal", "unsure")),
    whyItMatters: "Desire is not the same as erection quality.",
  }),
  q({
    id: "sexual.population",
    stage: "details",
    text: "Which research population would you like covered?",
    helper:
      "This scopes published studies. It does not determine treatment eligibility.",
    options: [
      { id: "men", label: "Men" },
      { id: "premenopausal", label: "Women before menopause" },
      { id: "postmenopausal", label: "Women after menopause" },
      { id: "all", label: "All populations / prefer not to specify" },
    ],
    when: and(
      goalIs("sexual-health"),
      answerIs("sexual.outcome", "desire", "arousal", "erections", "unsure")
    ),
    whyItMatters:
      "Vyleesi’s approved indication is population-specific and is not generalized to everyone.",
  }),
  q({
    id: "sexual.context",
    stage: "details",
    text: "What context should the explanation cover?",
    options: [
      { id: "general", label: "General research" },
      { id: "persistent", label: "A persistent change" },
      { id: "medication", label: "A change after medication or illness" },
      { id: "fertility-care", label: "Reproductive-hormone testing or fertility care" },
      { id: "prefer-not", label: "Prefer not to say" },
    ],
    when: goalIs("sexual-health"),
    whyItMatters:
      "Medication or illness changes need clinical context, not an automatic alternative substance.",
  }),
  q({
    id: "sexual.reproductive",
    stage: "details",
    text: "What do you want the research to demonstrate?",
    options: [
      { id: "signals", label: "Changes in hormone signals" },
      { id: "fertility", label: "Fertility outcomes" },
      { id: "libido", label: "Libido changes" },
      { id: "difference", label: "Understand the difference" },
    ],
    when: and(
      goalIs("sexual-health"),
      (ctx) =>
        ctx.answers["sexual.outcome"] === "reproductive" ||
        ctx.answers["sexual.context"] === "fertility-care"
    ),
    whyItMatters: "A hormone response cannot stand in for fertility or libido outcomes.",
  }),

  // I. Aging
  q({
    id: "aging.outcome",
    stage: "details",
    text: "What does healthy aging mean most to you?",
    options: [
      { id: "energy", label: "Maintain physical energy or function" },
      { id: "memory", label: "Maintain memory or thinking" },
      { id: "skin", label: "Skin aging" },
      { id: "immune", label: "Immune function" },
      { id: "cellular", label: "Understand cellular-aging research" },
      { id: "lifespan", label: "Longer life itself" },
    ],
    when: goalIs("aging"),
    whyItMatters: "None of these automatically becomes a demonstrated lifespan intervention.",
  }),
  q({
    id: "aging.practical",
    stage: "details",
    text: "Which change would matter most?",
    options: [
      { id: "exercise", label: "Exercise performance" },
      { id: "fatigue", label: "Everyday fatigue" },
      { id: "memory", label: "Memory" },
      { id: "attention", label: "Attention" },
      { id: "texture", label: "Skin texture" },
      { id: "lines", label: "Expression lines" },
    ],
    when: and(
      goalIs("aging"),
      answerIs("aging.outcome", "energy", "memory", "skin")
    ),
    whyItMatters: "Hands the path to the matching detailed branch instead of duplicating it.",
  }),
  q({
    id: "aging.cell",
    stage: "details",
    text: "Which question interests you?",
    options: [
      {
        id: "energy",
        label: "How cells make energy",
        detail: "The small structures inside cells that turn food into usable fuel.",
      },
      {
        id: "telomeres",
        label: "How DNA’s protective ends change",
        detail: "Telomeres are caps on chromosomes that shorten as cells divide.",
      },
      {
        id: "senescent",
        label: "How damaged aging cells behave",
        detail: "Senescent cells have stopped dividing but can still affect nearby tissue.",
      },
      { id: "organs", label: "How organs respond to aging" },
      { id: "unsure", label: "Not sure" },
    ],
    when: and(goalIs("aging"), answerIs("aging.outcome", "cellular")),
    whyItMatters: "Cell-energy, telomere, and senescent-cell papers are different topics.",
  }),
  q({
    id: "aging.organ",
    stage: "details",
    text: "Which area?",
    options: [
      { id: "brain", label: "Brain" },
      { id: "muscle", label: "Muscle or metabolic health" },
      { id: "immune", label: "Immune system" },
      { id: "liver", label: "Liver" },
      { id: "general", label: "General comparison" },
    ],
    when: answerIs("aging.cell", "organs"),
    whyItMatters: "Liver research may include Livagen only with its evidence limitation.",
  }),

  // J. Immune
  q({
    id: "immune.outcome",
    stage: "details",
    text: "What are you trying to understand?",
    options: [
      { id: "fewer-infections", label: "Getting sick less often" },
      { id: "diagnosed", label: "Research in a diagnosed immune or inflammatory condition" },
      { id: "inflammation", label: "Skin or gut inflammation" },
      { id: "wound-infection", label: "Wound or infection-defense research" },
      { id: "aging", label: "Immune changes with age" },
    ],
    when: (ctx) =>
      ctx.goal === "immune" || ctx.answers["aging.outcome"] === "immune",
    whyItMatters: "“Immune support” is not a confident winner by itself.",
  }),
  q({
    id: "immune.context",
    stage: "details",
    text: "Which context fits?",
    options: [
      { id: "prevention", label: "General prevention in otherwise healthy people" },
      { id: "illness", label: "Studies during a specific illness" },
      { id: "chronic", label: "A chronic diagnosed condition" },
      { id: "unexplained", label: "Persistent unexplained symptoms" },
      { id: "learning", label: "General learning" },
    ],
    when: (ctx) => Boolean(ctx.answers["immune.outcome"]),
    whyItMatters: "Condition-specific studies do not prove general prevention.",
  }),
  q({
    id: "immune.location",
    stage: "details",
    text: "Which area?",
    options: [
      { id: "skin", label: "Skin" },
      { id: "gut", label: "Gut" },
      { id: "systemic", label: "A diagnosed systemic condition" },
      { id: "unsure", label: "Not sure" },
    ],
    when: answerIs("immune.outcome", "inflammation"),
    whyItMatters: "Reuses skin or gut refinement when that is the actual question.",
  }),
  q({
    id: "immune.endpoint",
    stage: "details",
    text: "What would you want a study to show?",
    options: [
      { id: "fewer-infections", label: "Fewer infections" },
      { id: "recovery", label: "Better recovery from a specific illness" },
      { id: "symptoms", label: "Less inflammation or symptoms" },
      { id: "biomarkers", label: "Changes in immune-cell measurements" },
    ],
    when: (ctx) => Boolean(ctx.answers["immune.outcome"]),
    whyItMatters:
      "Biomarker changes do not establish fewer infections or longer life.",
  }),

  // Shared
  q({
    id: "shared.evidence",
    stage: "preferences",
    sticky: true,
    text: "How would you like us to handle the evidence?",
    options: [
      {
        id: "strongest",
        label: "Start with the strongest evidence available",
        detail:
          "Direct human outcome studies first. If they are absent, we say so and keep early work separate.",
      },
      {
        id: "human-only",
        label: "Only include direct studies in people",
        detail:
          "Animal and cell-only work leave the shortlist. Hormone changes do not count as muscle-gain trials.",
      },
      {
        id: "include-early",
        label: "Include early animal and laboratory research",
        detail:
          "Curiosity about research — not consent to risk, and not a claim that a treatment works.",
      },
    ],
    when: (ctx) => !ctx.evidence,
    whyItMatters: "This is a hard filter, not a ranking preference we silently relax.",
  }),
  q({
    id: "shared.formulation",
    stage: "preferences",
    sticky: true,
    text: "Which forms of research would you like to compare?",
    helper: "This is not an instruction to administer anything.",
    options: [
      { id: "topical", label: "Applied to skin or scalp" },
      { id: "oral", label: "Oral" },
      { id: "injectable", label: "Injectable" },
      { id: "none", label: "No preference" },
    ],
    when: (ctx) =>
      !ctx.formulation &&
      (ctx.goal === "skin" || ctx.goal === "hair" || ctx.answers["skin.form"]),
    whyItMatters:
      "If a constraint produces no match, we explain that instead of inventing a formulation.",
  }),
];

export const QUESTION_BY_ID = Object.fromEntries(
  QUIZ_QUESTIONS.map((question) => [question.id, question])
);

export const QUESTION_SEQUENCE = QUIZ_QUESTIONS.map((question) => question.id);

export function getQuestion(id) {
  return QUESTION_BY_ID[id] || null;
}

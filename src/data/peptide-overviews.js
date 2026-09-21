/**
 * Plain-English research overviews for peptide detail pages.
 * Source: MyPepFinder library review, September 21, 2026.
 */

/** @typedef {"research-compound"|"mixture"|"product-form"} CompoundKind */

/**
 * @typedef {object} PeptideOverviewSource
 * @property {string} label
 * @property {string} href
 */

/**
 * @typedef {object} PeptideOverview
 * @property {string} overview
 * @property {string} evidence
 * @property {PeptideOverviewSource[]} [sources]
 * @property {string} [sourceNote]
 * @property {CompoundKind} [compoundKind]
 * @property {string} [displayName]
 */

/** @type {Record<string, string>} */
const OVERVIEW_ALIASES = {
  "glp-1-s": "semaglutide",
  "glp-1-t": "tirzepatide",
  "glow-ghk-cu-tb-500-bpc-157": "glow",
  "glow-blend": "glow",
  "klow-kpv-ghk-cu-tb-500-bpc-157": "klow",
  "klow-blend": "klow",
  "cjc-1295-ipamorelin": "cjc-1295-no-dac-ipamorelin",
  "tesamorelin-ipamorelin": "2x-tesamorelin-ipamorelin",
  "tb-500-thymosin-beta-4": "tb-500",
  "thymosin-alpha-1-thymalin": "ta-1-thymalin-complex",
  "modified-grf-1-29": "cjc-1295-no-dac",
  "mod-grf-1-29": "cjc-1295-no-dac",
};

/** @type {Record<string, PeptideOverview>} */
export const PEPTIDE_OVERVIEWS = {
  "3x-tesamorelin-mgf-ipamorelin": {
    overview:
      "This three-peptide blend is proposed for muscle growth and recovery. Tesamorelin and ipamorelin encourage the body to release growth hormone, one of the signals involved in growth and tissue maintenance. MGF is connected to research on how muscle cells respond to strain and damage. The idea behind the blend is to combine a growth signal with a muscle-repair signal.",
    evidence:
      "Studies of the separate ingredients do not establish that this combination builds muscle or speeds recovery in people.",
    sources: [
      {
        label: "Tesamorelin prescribing information",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf",
      },
      {
        label: "Ipamorelin hormone-response study",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
      {
        label: "MGF study in human muscle cells",
        href: "https://pubmed.ncbi.nlm.nih.gov/21354439/",
      },
    ],
    sourceNote: "These are ingredient sources, not a trial of 3X.",
  },
  "4x-tesamorelin-ipamorelin-mgf-ghrp-2": {
    overview:
      "This blend combines four peptides around the idea of supporting muscle growth and repair. Tesamorelin, ipamorelin and GHRP-2 stimulate signals that release growth hormone. MGF comes from research into how muscles respond to physical stress. Adding GHRP-2 introduces another growth-hormone signal; it can also increase hunger, which matters when considering claims about fat loss.",
    evidence:
      "More ingredients do not establish a stronger result. Human studies have not established the muscle-building benefits or safety of this exact four-part blend.",
    sources: [
      {
        label: "Tesamorelin prescribing information",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf",
      },
      {
        label: "Ipamorelin hormone-response study",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
      {
        label: "MGF muscle-cell study",
        href: "https://pubmed.ncbi.nlm.nih.gov/21354439/",
      },
      {
        label: "GHRP-2 study in healthy men",
        href: "https://pubmed.ncbi.nlm.nih.gov/15699539/",
      },
    ],
    sourceNote: "Ingredient evidence only.",
  },
  "5-amino-1mq": {
    compoundKind: "research-compound",
    overview:
      "5-Amino-1MQ is studied for whether it can change how the body stores fat and uses energy. It blocks NNMT, a protein involved in how cells process nutrients. Researchers are investigating whether blocking that protein makes it harder for excess fat to build up. Although it often appears in peptide catalogs, 5-Amino-1MQ is a different type of chemical, not a peptide.",
    evidence:
      "Fat-loss findings come mainly from experiments in cells and mice. A meaningful weight-loss benefit in people has not been established.",
    sources: [
      {
        label: "Original NNMT-inhibitor study, including 5-Amino-1MQ in obese mice",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5826726/",
      },
    ],
  },
  adamax: {
    overview:
      "Adamax is promoted as an experimental compound for focus, memory and protecting brain cells. It is usually described as a modified version of Semax, with changes intended to alter how long it lasts or how it reaches the brain. Those design goals explain the interest in it, but they are not demonstrated benefits. Published research on Semax cannot tell us whether Adamax produces the same effects.",
    evidence:
      "Direct, reliable studies of Adamax are too limited to establish what it does in people or whether it improves concentration.",
    sources: [
      {
        label: "Semax research",
        href: "https://pubmed.ncbi.nlm.nih.gov/29798983/",
      },
    ],
    sourceNote:
      "No direct primary efficacy study of Adamax was located. Semax research provides background on the related compound only; it does not validate Adamax. The name also needs a consistent chemical definition before products or studies can be compared.",
  },
  "ahk-cu": {
    overview:
      "AHK-Cu is a copper-containing peptide studied mainly for hair growth. Researchers are looking at whether it supports the cells at the base of a hair follicle—the small pocket in the skin where a hair grows. These cells help control the hair's growth cycle. In laboratory experiments, AHK-Cu encouraged growth in isolated human hair follicles, which explains the interest in scalp and hair-loss research.",
    evidence:
      "Growing hair follicles in a laboratory is different from regrowing hair on someone's scalp. Strong clinical evidence for treating hair loss is still lacking.",
    sources: [
      {
        label: "Study of AHK-Cu in isolated human hair follicles and supporting cells",
        href: "https://pubmed.ncbi.nlm.nih.gov/17703734/",
      },
    ],
  },
  "aod-9604": {
    overview:
      "AOD-9604 was developed to investigate whether a small, modified piece of growth hormone could help the body break down stored fat without reproducing all of growth hormone's other effects. That makes fat metabolism—how the body stores and uses fat—its main research focus. Its purpose is different from appetite-focused drugs such as semaglutide.",
    evidence:
      "Early animal findings generated interest, but a larger human weight-loss study did not show the hoped-for benefit. It should not be described as a proven fat burner.",
    sources: [
      {
        label:
          "Developer-associated research report describing the rationale and human trial history",
        href: "https://jofem.org/index.php/jofem/article/view/213/278",
      },
    ],
  },
  "ara-290": {
    overview:
      "ARA-290, also called cibinetide, is studied for protecting and repairing very small nerves. Damage to these nerves can cause burning pain, tingling or numbness. Researchers are investigating whether it can reduce harmful immune activity around injured nerves and help them recover, rather than simply dulling the feeling of pain. Small studies have examined it in people with conditions that damage these nerves.",
    evidence:
      "Early human trials have reported encouraging findings, but larger studies are needed to establish a dependable treatment benefit.",
    sources: [
      {
        label: "Randomized pilot study of nerve symptoms",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3563705/",
      },
      {
        label: "Cibinetide study of small nerve fibers",
        href: "https://iovs.arvojournals.org/article.aspx?articleid=2625918",
      },
    ],
  },
  "bpc-157": {
    overview:
      "BPC-157 is studied for how injured tissues heal, especially tendons, ligaments and the digestive tract. Tendons connect muscles to bones; ligaments help hold joints together. Researchers are examining whether BPC-157 helps repair cells survive, move into damaged areas and rebuild those tissues. This is why it often comes up in discussions of injuries and recovery.",
    evidence:
      "Most of the supporting work comes from cells and animals. Reliable human trials have not established that it heals sports injuries or digestive conditions.",
    sources: [
      {
        label: "Rat Achilles-tendon study",
        href: "https://pubmed.ncbi.nlm.nih.gov/16583442/",
      },
      {
        label: "Rat ligament-healing study",
        href: "https://pubmed.ncbi.nlm.nih.gov/20225319/",
      },
      {
        label: "Original study of stomach and intestinal injury in rats",
        href: "https://pubmed.ncbi.nlm.nih.gov/7904712/",
      },
    ],
  },
  "bpc-157-ghk-cu": {
    overview:
      "This blend combines two different lines of repair research. BPC-157 is studied mainly for healing damaged tissues, while GHK-Cu is studied for skin repair and collagen—the strong, flexible material that helps hold skin and other tissues together. The proposed goal is to support both the repair process and the rebuilding of the material around cells.",
    evidence:
      "Research on each ingredient provides a reason to investigate the combination. It does not establish that the blend heals injuries, improves scars or works better than either ingredient alone.",
    sources: [
      {
        label: "BPC-157 tendon-cell study",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6271067/",
      },
      {
        label: "GHK-Cu connective-tissue study",
        href: "https://pubmed.ncbi.nlm.nih.gov/8227353/",
      },
    ],
    sourceNote: "Ingredient evidence only.",
  },
  "bpc-157-tb-500": {
    overview:
      "Often nicknamed “Wolverine,” this blend is proposed for injury recovery. BPC-157 is studied for tissue healing, while thymosin beta-4-related compounds are investigated for helping repair cells move into damaged areas. The idea is to combine different parts of the healing process, particularly for muscles, tendons and ligaments. The nickname is a marketing label, not a description of a proven effect.",
    evidence:
      "Strong human evidence for the blend is lacking. Products called TB-500 also need to be distinguished from the specific thymosin beta-4 compounds used in studies.",
    sources: [
      {
        label: "BPC-157 ligament study",
        href: "https://pubmed.ncbi.nlm.nih.gov/20225319/",
      },
      {
        label: "Human wound study of full-length thymosin beta-4",
        href: "https://pubmed.ncbi.nlm.nih.gov/20536470/",
      },
      {
        label: "Analysis identifying a TB-500 fragment",
        href: "https://pubmed.ncbi.nlm.nih.gov/23084823/",
      },
    ],
    sourceNote: "These do not establish the blend's effectiveness.",
  },
  cagrilintide: {
    overview:
      "Cagrilintide is studied for helping people feel satisfied with less food and lose weight. It copies the action of amylin, a hormone released after eating that helps tell the brain a meal has been enough. The goal is to reduce the urge to keep eating. Researchers have tested cagrilintide both on its own and alongside semaglutide, which affects appetite through a different hormone signal.",
    evidence:
      "Human trials have demonstrated weight loss. Results for the combination should be distinguished from results for cagrilintide alone.",
    sources: [
      {
        label: "Cagrilintide weight-management trial",
        href: "https://pubmed.ncbi.nlm.nih.gov/34798060/",
      },
      {
        label: "Cagrilintide–semaglutide trial",
        href: "https://mediacenteratypon.nejmgroup-production.org/NEJMoa2502082.pdf",
      },
    ],
  },
  cartalax: {
    overview:
      "Cartalax is studied for maintaining cartilage, the smooth cushioning material that helps the ends of bones move against each other inside a joint. Researchers are investigating whether it encourages cartilage cells to keep growing and functioning as they age. The longer-term question is whether this could help worn or damaged joints, but a change in cells is only an early step toward answering that question.",
    evidence:
      "Laboratory work and an older patent report do not establish that Cartalax rebuilds cartilage or reliably relieves arthritis in people.",
    sources: [
      {
        label: "Original study in cartilage cells from rats",
        href: "https://journals.eco-vector.com/0236-3054/article/view/117604",
      },
      {
        label: "Original patent, including a small human report",
        href: "https://patents.google.com/patent/EA010574B1/en",
      },
    ],
    sourceNote:
      "A patent report is not equivalent to an independently reviewed clinical trial.",
  },
  "cjc-1295-no-dac": {
    displayName: "CJC-1295 (No DAC / Modified GRF 1–29)",
    overview:
      "CJC-1295 without DAC is discussed in research on stimulating the body's own growth-hormone release. It is designed to copy a signal sent to the pituitary gland, a small hormone-producing gland beneath the brain. Growth hormone helps regulate growth, tissue maintenance and the use of fat for energy. The “No DAC” version lacks the attachment designed to keep the longer-acting version in the bloodstream.",
    evidence:
      "Human findings for long-acting CJC-1295 cannot automatically be applied to this shorter-acting compound. Muscle gain, fat loss and anti-aging benefits remain unestablished.",
    sources: [
      {
        label: "FDA scientific evaluation distinguishing CJC-1295 compounds and their evidence",
        href: "https://www.fda.gov/media/183819/download",
      },
    ],
  },
  "cjc-1295-no-dac-ipamorelin": {
    overview:
      "This blend is proposed for stimulating growth-hormone release using two different signals. CJC-1295 without DAC copies the body's message to release growth hormone. Ipamorelin acts through another hormone-sensing system that can also trigger its release. Think of the idea as sending two messages to the same hormone-producing gland. Researchers and clinics discuss the combination in connection with body fat, muscle and recovery.",
    evidence:
      "An increase in hormone levels does not by itself prove better recovery or muscle growth. Strong human evidence for those outcomes with this exact blend is lacking.",
    sources: [
      {
        label: "FDA assessment of CJC-1295 compounds",
        href: "https://www.fda.gov/media/183819/download",
      },
      {
        label: "Human ipamorelin hormone-response study",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
    ],
    sourceNote: "Ingredient evidence only.",
  },
  "cjc-1295-dac": {
    overview:
      "CJC-1295 DAC is studied for keeping the body's growth-hormone signal active for longer. It prompts the pituitary gland—the small gland beneath the brain—to release growth hormone. The “DAC” attachment lets it bind to a protein in the blood, helping it stay around for days. Researchers have measured how this changes growth hormone and related growth signals over time.",
    evidence:
      "Small human studies show that it raises hormone levels. They do not establish the muscle-building, fat-loss or anti-aging results often attributed to it.",
    sources: [
      {
        label: "Controlled studies of long-acting CJC-1295 in healthy adults",
        href: "https://pubmed.ncbi.nlm.nih.gov/16352683/",
      },
    ],
  },
  dihexa: {
    overview:
      "Dihexa is an experimental compound studied for memory problems and damage to brain cells. Researchers are interested in whether it can help brain cells survive and communicate through their connections. Animal experiments have explored whether that might improve learning and memory when the brain is impaired. That is different from showing that it makes a healthy person sharper or more productive.",
    evidence:
      "Human benefits have not been established, and a key early paper about how it works was withdrawn, weakening that part of the evidence.",
    sources: [
      {
        label: "Animal study of Dihexa and memory impairment",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8615599/",
      },
      {
        label: "Retraction notice for the earlier mechanism paper",
        href: "https://pubmed.ncbi.nlm.nih.gov/40312093/",
      },
    ],
    sourceNote: "The retracted paper is not used as support for effectiveness.",
  },
  dsip: {
    overview:
      "DSIP stands for delta sleep-inducing peptide. It is studied for whether it can affect sleep, including how easily someone falls asleep and how well they stay asleep. The name refers to deep sleep, but it should not be read as a promise that DSIP reliably produces it. Researchers have also explored its relationship with the body's response to stress.",
    evidence:
      "Human sleep studies have been small and results have been inconsistent. DSIP is not an established treatment for insomnia.",
    sources: [
      {
        label: "Controlled study in people with chronic insomnia",
        href: "https://pubmed.ncbi.nlm.nih.gov/1299794/",
      },
      {
        label: "Small study of sleep and daytime function",
        href: "https://pubmed.ncbi.nlm.nih.gov/3622582/",
      },
    ],
  },
  epithalon: {
    overview:
      "Epithalon, also spelled Epitalon, is studied for changes that happen as cells age. One focus is telomeres: protective tips on the ends of DNA, the instructions inside cells. These tips often shorten as cells divide. Researchers have investigated whether Epithalon affects the system that maintains them. This explains the interest in longevity, but keeping a cell dividing in a laboratory is not the same as keeping a person healthier for longer.",
    evidence:
      "Cell findings do not establish that Epithalon reverses aging or extends human life.",
    sources: [
      {
        label: "Telomere-maintenance experiment in human cells",
        href: "https://pubmed.ncbi.nlm.nih.gov/12937682/",
      },
      {
        label: "Follow-up study of cell division",
        href: "https://pubmed.ncbi.nlm.nih.gov/15455129/",
      },
    ],
  },
  "foxo4-dri": {
    overview:
      "FOXO4-DRI is studied for removing certain damaged or worn-out cells that stop dividing but remain in the body. Some of these cells release signals that irritate nearby tissue. The research idea is to help selected cells shut themselves down so they stop causing problems. Scientists have explored whether this can improve tissue function in aging mice and other laboratory models.",
    evidence:
      "This is early research in cells and animals. It has not established a safe, effective way to slow aging in people.",
    sources: [
      {
        label: "Original FOXO4-DRI study in cells and mice",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5556182/",
      },
    ],
  },
  "ghk-basic": {
    overview:
      "GHK Basic is the GHK peptide without copper already attached. It is studied for how skin cells maintain and repair themselves. Researchers have examined whether it supports the cells involved in rebuilding skin and its underlying structure. The body can naturally bind GHK to copper, but copper-free GHK and prepared GHK-Cu are still different starting materials for a study or a product.",
    evidence:
      "Much of the direct evidence comes from laboratory skin models. Findings for GHK-Cu should not automatically be presented as results for GHK Basic.",
    sources: [
      {
        label: "Original study of copper-free GHK in skin cells",
        href: "https://pubmed.ncbi.nlm.nih.gov/23019153/",
      },
    ],
  },
  "ghk-cu": {
    overview:
      "GHK-Cu is a copper-containing peptide studied for skin repair and wound healing. Researchers are interested in how it affects collagen, the material that gives skin strength and support, and how damaged tissue is broken down and replaced. The basic question is whether it can help skin rebuild itself more effectively. This explains its use in research on aging skin, skin texture and healing.",
    evidence:
      "Laboratory and animal findings support further investigation. Benefits from a particular skin formula cannot automatically be extended to injected GHK-Cu or claims about whole-body rejuvenation.",
    sources: [
      {
        label: "Original study of connective-tissue formation",
        href: "https://pubmed.ncbi.nlm.nih.gov/8227353/",
      },
      {
        label: "Wound-repair experiment",
        href: "https://www.sciencedirect.com/science/article/pii/S0022202X1541067X",
      },
    ],
  },
  "ghk-cu-topical-powder": {
    compoundKind: "product-form",
    overview:
      "GHK-Cu Topical Powder is an ingredient intended for research into products applied to the skin or scalp. The underlying interest is skin repair: whether this copper peptide can influence the cells and structural materials that keep skin healthy. “Topical” simply means used on the surface of the skin. The finished formula matters because the ingredient must remain stable and reach the relevant skin layers.",
    evidence:
      "Research on skin cells or a finished formula does not prove that any raw powder will improve skin or regrow scalp hair.",
    sources: [
      {
        label: "GHK-Cu formulation research in skin cells and skin samples",
        href: "https://pubmed.ncbi.nlm.nih.gov/37062921/",
      },
    ],
    sourceNote:
      "This study included hyaluronic acid and does not establish the performance of raw GHK-Cu powder or a hair-loss treatment.",
  },
  glow: {
    overview:
      "GLOW combines three ingredients around the idea of skin and tissue repair. GHK-Cu is studied for rebuilding skin's supporting material, including collagen. BPC-157 is studied for injured-tissue healing, and thymosin beta-4-related compounds are investigated for the movement of cells involved in repair. The blend's proposed purpose is to bring those activities together, especially in discussions of skin quality and recovery.",
    evidence:
      "Ingredient research does not establish that GLOW improves skin, heals injuries or produces a greater effect than its individual components.",
    sources: [
      {
        label: "GHK-Cu wound-repair research",
        href: "https://www.sciencedirect.com/science/article/pii/S0022202X1541067X",
      },
      {
        label: "BPC-157 tendon-cell research",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6271067/",
      },
      {
        label: "Full-length thymosin beta-4 wound trial",
        href: "https://pubmed.ncbi.nlm.nih.gov/20536470/",
      },
    ],
    sourceNote:
      "Ingredient evidence only; TB-500 identity must also be distinguished.",
  },
  semaglutide: {
    displayName: "Semaglutide",
    overview:
      "Semaglutide helps regulate appetite and blood sugar. It copies GLP-1, a hormone involved in the body's response to eating. This can reduce hunger, make smaller meals feel more satisfying and help the body release insulin when blood sugar is high. Insulin is the hormone that moves sugar from the blood into cells. Semaglutide has been extensively studied for weight management and type 2 diabetes.",
    evidence:
      "Approved prescription forms have strong human evidence for these uses in eligible patients. That evidence concerns tested medicines, not every product sold under the same ingredient name.",
    sources: [
      {
        label: "Wegovy prescribing information",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/215256s033lbl.pdf",
      },
      {
        label: "Ozempic prescribing information",
        href: "https://www.novo-pi.com/ozempic.pdf",
      },
    ],
  },
  tirzepatide: {
    displayName: "Tirzepatide",
    overview:
      "Tirzepatide is used and studied for weight management and type 2 diabetes. It copies two hormones, called GIP and GLP-1, that help coordinate the body's response to food. Together, these actions can reduce appetite and improve blood-sugar control. In everyday terms, people may feel less hungry, eat less and lose weight while their bodies handle sugar more effectively.",
    evidence:
      "Large human trials support approved prescription uses. Tirzepatide acts on GIP and GLP-1; it is not a “GLP-2” drug.",
    sources: [
      {
        label: "Mounjaro prescribing information",
        href: "https://pi.lilly.com/us/mounjaro-uspi.pdf",
      },
      {
        label: "Zepbound prescribing information",
        href: "https://pi.lilly.com/us/zepbound-uspi.pdf",
      },
    ],
  },
  retatrutide: {
    displayName: "Retatrutide",
    overview:
      "Retatrutide is an experimental medicine studied for substantial weight loss and better blood-sugar control. It copies three hormones involved in appetite, blood sugar and the use of stored energy: GLP-1, GIP and glucagon. The goal is to affect both how much someone wants to eat and how the body handles fuel. Researchers are also examining effects on health problems linked to excess weight.",
    evidence:
      "Human trials have reported substantial weight loss. It remains investigational; “GLP-3” is a marketing shorthand, not its scientific classification.",
    sources: [
      {
        label: "Published randomized phase 2 trial",
        href: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
      },
      {
        label: "Lilly's report of the TRIUMPH-1 trial",
        href: "https://investor.lilly.com/news-releases/news-release-details/lillys-triple-agonist-retatrutide-delivered-powerful-weight-loss",
      },
    ],
    sourceNote:
      "The latter is a sponsor report and should be identified as such if trial results are quoted elsewhere.",
  },
  hexarelin: {
    overview:
      "Hexarelin is studied for stimulating the release of growth hormone, which helps regulate growth, tissue maintenance and the use of stored energy. It sends a signal to the pituitary gland, the small hormone-producing gland beneath the brain. Researchers have measured how strongly the gland responds and whether that response changes with repeated exposure. This is the basis for interest in body composition—how much of the body is fat versus muscle and other tissue.",
    evidence:
      "Human studies show a hormone response, but that does not establish improved strength, recovery or long-term body composition.",
    sources: [
      {
        label: "Controlled human hormone-release study",
        href: "https://pubmed.ncbi.nlm.nih.gov/7957536/",
      },
      {
        label: "Study of the response during longer-term exposure",
        href: "https://pubmed.ncbi.nlm.nih.gov/9589671/",
      },
    ],
  },
  "igf-1-lr3": {
    overview:
      "IGF-1 LR3 is a modified version of IGF-1, a natural signal that helps cells grow and maintain themselves. Scientists use it to study growth in muscle and other tissues, including how muscle cells build more protein and increase in size. It has been changed so that proteins that normally hold onto IGF-1 grab it less easily, potentially leaving more available to act on cells.",
    evidence:
      "Laboratory findings do not establish a safe, effective muscle-building or recovery treatment for people. IGF-1 LR3 is also different from prescription medicines containing other forms of IGF-1.",
    sources: [
      {
        label: "Original muscle-cell experiment using Long R3 IGF-I",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3725543/",
      },
    ],
  },
  ipamorelin: {
    overview:
      "Ipamorelin is studied for prompting the body to release growth hormone. It activates a hormone-sensing system that tells the pituitary gland, beneath the brain, to send out that growth signal. This explains the interest in muscle, body fat and recovery. Researchers have also tested ipamorelin for helping the digestive tract start moving again after surgery, because the same broader hormone system affects the gut.",
    evidence:
      "Human studies have examined hormone release and bowel recovery. They do not establish the fitness or anti-aging benefits commonly advertised for ipamorelin.",
    sources: [
      {
        label: "Human hormone-response study",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
      {
        label: "Randomized postoperative bowel-recovery trial",
        href: "https://pubmed.ncbi.nlm.nih.gov/25331030/",
      },
    ],
  },
  "kisspeptin-10": {
    overview:
      "Kisspeptin-10 is studied for helping control the chain of messages that runs from the brain to the reproductive organs. Those messages help regulate the release of hormones involved in testosterone production, egg development and ovulation—the release of an egg. Researchers use it to understand how that system switches on and responds when stimulated. It acts earlier in the chain than directly supplying testosterone or another sex hormone.",
    evidence:
      "Small human studies show reproductive-hormone responses. They do not establish it as a general treatment for low testosterone or infertility.",
    sources: [
      {
        label: "Kisspeptin-10 study in men",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3380939/",
      },
      {
        label: "Study of reproductive-hormone responses in women and men",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3232613/",
      },
    ],
  },
  klow: {
    overview:
      "KLOW combines a proposed calming effect on irritated tissue with several approaches to repair. KPV is studied for reducing excessive immune activity. GHK-Cu is studied for rebuilding skin's supporting structure, while BPC-157 and thymosin beta-4-related compounds appear in wound and injury research. The idea is to address both the irritation around damage and the work of rebuilding afterward.",
    evidence:
      "These are research interests for the ingredients. The four-part blend has not been shown in strong human studies to heal injuries, improve skin or outperform simpler approaches.",
    sources: [
      {
        label: "KPV intestinal-inflammation experiment",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2431115/",
      },
      {
        label: "GHK-Cu wound-repair research",
        href: "https://www.sciencedirect.com/science/article/pii/S0022202X1541067X",
      },
      {
        label: "BPC-157 tendon study",
        href: "https://pubmed.ncbi.nlm.nih.gov/16583442/",
      },
      {
        label: "Thymosin beta-4 wound trial",
        href: "https://pubmed.ncbi.nlm.nih.gov/20536470/",
      },
    ],
    sourceNote: "Ingredient evidence only.",
  },
  kpv: {
    overview:
      "KPV is studied for calming excessive inflammation, particularly in the gut and skin. Inflammation is the body's response to damage or threats, but too much of it can keep tissue irritated and injured. Researchers are testing whether KPV can turn down some of those signals without simply shutting down every immune response. Gut studies have examined whether this helps protect the lining of the intestine.",
    evidence:
      "Most supporting evidence comes from cells and animal experiments. Human benefits for inflammatory bowel disease or skin conditions have not been established.",
    sources: [
      {
        label: "Original KPV intestinal-inflammation study",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2431115/",
      },
      {
        label: "Targeted KPV delivery experiment in mice",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5498804/",
      },
    ],
  },
  "kpv-ghk-cu": {
    overview:
      "This blend is proposed for skin that needs both less irritation and better repair. KPV is studied for reducing excessive immune signals, while GHK-Cu is studied for rebuilding collagen and other materials that give skin support. The idea is that calming the response to damage and supporting repair might complement each other. That makes the combination of interest in discussions of irritated or damaged skin.",
    evidence:
      "Studies of the separate ingredients do not establish that this blend treats a particular skin condition or works better than either ingredient alone.",
    sources: [
      {
        label: "KPV research on inflammatory signals",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2431115/",
      },
      {
        label: "GHK-Cu skin-cell and skin-sample research",
        href: "https://pubmed.ncbi.nlm.nih.gov/37062921/",
      },
    ],
    sourceNote:
      "Ingredient evidence only; neither is a clinical trial of this blend.",
  },
  livagen: {
    overview:
      "Livagen is studied for how liver cells function and respond to damage. The liver processes nutrients, makes essential proteins and helps the body handle waste and chemicals. Researchers have investigated whether Livagen affects the activity of liver cells and the instructions those cells use to maintain themselves. This explains its association with liver-repair research, rather than demonstrating a general “detox” effect.",
    evidence:
      "Laboratory findings and an older patent report involving patients do not establish a reliable treatment for liver disease or prove that it regenerates the human liver.",
    sources: [
      {
        label: "Original study in liver tissue cultures",
        href: "https://pubmed.ncbi.nlm.nih.gov/12577697/",
      },
      {
        label: "Livagen patent, including a small patient report",
        href: "https://patents.google.com/patent/US7101854B2/en",
      },
    ],
  },
  "ll-37": {
    overview:
      "LL-37 is part of the body's natural defenses and is studied for fighting certain microbes and helping wounds heal. It can damage some bacteria and influence how immune and repair cells respond around an injury. Researchers have investigated whether applying it to wounds could help wounds that are slow to close, such as persistent leg ulcers.",
    evidence:
      "Human wound studies have produced mixed results; a larger trial did not improve healing overall. LL-37 has not been established as a general infection treatment or an all-purpose immune booster.",
    sources: [
      {
        label: "Early human wound study",
        href: "https://pubmed.ncbi.nlm.nih.gov/25041740/",
      },
      {
        label: "Larger randomized trial with no significant overall healing benefit",
        href: "https://pubmed.ncbi.nlm.nih.gov/34687253/",
      },
    ],
  },
  "melanotan-1": {
    overview:
      "Melanotan 1, also called afamelanotide, is studied for increasing melanin, the pigment that gives skin its color. It copies a natural signal that tells pigment-producing cells to make more of it. This research led to a prescription implant that helps certain adults with a rare condition in which light exposure causes severe pain. Its medical purpose is more specific than simply producing a tan.",
    evidence:
      "The approved implant has evidence for that particular light-sensitivity disorder. Research vials and cosmetic tanning uses are not equivalent to that tested treatment.",
    sources: [
      {
        label: "FDA prescribing information for the afamelanotide implant, Scenesse",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210797s000lbl.pdf",
      },
    ],
  },
  "melanotan-2": {
    overview:
      "Melanotan-2 is studied for increasing skin pigment and affecting sexual arousal. It acts on several related hormone sensors, including ones involved in skin color and sexual response. That broader activity helps explain why early studies observed both tanning and erections. Researchers have investigated these effects separately; a compound that changes skin color can have effects elsewhere in the body as well.",
    evidence:
      "Small human studies documented these effects, but they do not establish a safe routine tanning or sexual-health treatment. Darker skin is not proof of protection from sun damage.",
    sources: [
      {
        label: "Early human pigmentation study",
        href: "https://pubmed.ncbi.nlm.nih.gov/8637402/",
      },
      {
        label: "Controlled study of sexual response",
        href: "https://pubmed.ncbi.nlm.nih.gov/11018622/",
      },
    ],
  },
  "mots-c": {
    overview:
      "MOTS-c is studied for how muscles and other tissues use fuel, especially during exercise, aging or stress. It is a small signal linked to the energy-producing structures inside cells. Researchers are investigating whether it helps the body use sugar more effectively and respond better to insulin, the hormone that moves sugar from the blood into cells. This is why it appears in research on weight, blood-sugar control and physical performance.",
    evidence:
      "Much of the benefit evidence comes from animals. Giving MOTS-c to people has not been shown to reliably reproduce those results.",
    sources: [
      {
        label: "Original MOTS-c study of metabolism and obesity",
        href: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
      },
      {
        label: "Study of its response to cellular stress",
        href: "https://pubmed.ncbi.nlm.nih.gov/29983246/",
      },
    ],
  },
  "nad-plus": {
    compoundKind: "research-compound",
    overview:
      "NAD+ is a molecule that cells already use to turn food into usable energy and maintain their repair systems. It is not a peptide. Researchers are studying how changes in NAD+ levels relate to aging and illness, and whether increasing those levels can improve cell function. Its role in energy production explains the interest in fatigue and healthy aging, but supplying more does not automatically mean a person will feel more energetic.",
    evidence:
      "Its normal role is well established. Benefits from NAD+ infusions for energy, anti-aging or lifespan remain unproven.",
    sources: [
      {
        label: "Human pilot study tracking infused NAD+ and its breakdown products",
        href: "https://www.frontiersin.org/journals/aging-neuroscience/articles/10.3389/fnagi.2019.00257/full",
      },
    ],
    sourceNote:
      "This measured what happened to NAD+ in the body, not whether it reversed aging or improved long-term health.",
  },
  "pe-22-28": {
    overview:
      "PE 22-28 is an experimental peptide studied mainly for depression-related effects and communication between brain cells. It blocks TREK-1, a tiny channel that helps control a brain cell's electrical activity. Researchers are testing whether changing that activity can affect mood-related behavior and the growth of connections between cells. Its early research is about a possible new approach to depression, rather than a proven everyday focus aid.",
    evidence:
      "Findings come from laboratory and mouse studies. An antidepressant benefit in people has not been established.",
    sources: [
      {
        label: "Original PE 22-28 study",
        href: "https://pubmed.ncbi.nlm.nih.gov/28955242/",
      },
    ],
  },
  "peg-mgf": {
    overview:
      "PEG-MGF is a modified form of an MGF-related peptide, associated with research on how muscle cells respond to strain and injury. The proposed goal is to influence cells involved in muscle growth and repair. “PEG” refers to an added chemical attachment intended to make the peptide last longer. That modification creates a different research material; it does not automatically make it more effective.",
    evidence:
      "Much of the commonly cited research tested MGF-related material without this attachment. It does not establish that PEG-MGF builds muscle or improves recovery in people.",
    sources: [
      {
        label: "Original study of an MGF-related peptide in human muscle cells",
        href: "https://pubmed.ncbi.nlm.nih.gov/21354439/",
      },
      {
        label:
          "FDA assessment noting the absence of identified human exposure data for PEG-MGF",
        href: "https://www.fda.gov/drugs/human-drug-compounding/certain-bulk-drug-substances-use-compounding-may-present-significant-safety-risks",
      },
    ],
    sourceNote:
      "The muscle-cell paper is background evidence, not a clinical study of PEG-MGF.",
  },
  pinealon: {
    overview:
      "Pinealon is studied for protecting brain cells from damage and changes associated with aging. Researchers have examined whether it helps cells withstand harmful chemical byproducts that can build up during stress. The wider question is whether protecting those cells could help preserve memory and thinking. Keeping cells alive in a laboratory, however, is only an early step toward showing a benefit someone could notice.",
    evidence:
      "Evidence is mainly from cells and animals. Reliable improvements in memory, focus or thinking problems associated with aging have not been established in large human studies.",
    sources: [
      {
        label: "Pinealon cell-survival experiment",
        href: "https://pubmed.ncbi.nlm.nih.gov/21978084/",
      },
      {
        label: "Original study in a laboratory model of aging human nerve cells",
        href: "https://pubmed.ncbi.nlm.nih.gov/39518916/",
      },
    ],
  },
  "pt-141": {
    overview:
      "PT-141, also called bremelanotide, is studied for sexual desire and arousal. It acts on hormone sensors involved in the brain's sexual-response system. The aim is to influence the feeling of desire and the response to sexual stimulation. A prescription version, Vyleesi, is approved for certain cases of persistent low sexual desire that causes distress in women who have not gone through menopause.",
    evidence:
      "The strongest evidence supports that specific prescription use. It does not establish PT-141 as a general sexual-performance enhancer or an approved treatment for men.",
    sources: [
      {
        label: "FDA prescribing information for Vyleesi",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2019/210557s000lbl.pdf",
      },
    ],
  },
  selank: {
    overview:
      "Selank is studied mainly for anxiety and the body's response to stress. Researchers are investigating whether it can reduce excessive feelings of tension and worry by changing how nerve cells communicate. One question is whether it could help someone feel calmer while remaining alert, rather than simply making them sleepy. Its appearance in focus-related discussions comes partly from the idea that less anxiety may make concentration easier.",
    evidence:
      "Small human studies have reported anxiety improvements, but larger, independently replicated trials are needed to establish how useful it is.",
    sources: [
      {
        label: "Small comparative human anxiety study",
        href: "https://pubmed.ncbi.nlm.nih.gov/18454096/",
      },
      {
        label: "Laboratory study of nerve-signaling effects",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4757669/",
      },
    ],
  },
  "selank-semax": {
    overview:
      "This combination is proposed for bringing together two different research interests: feeling less anxious and supporting brain function. Selank is studied mainly for anxiety and stress, while Semax has been investigated for brain-cell protection and recovery after injury. The idea behind pairing them is to combine a calmer mental state with support for thinking and attention.",
    evidence:
      "Studies of Selank or Semax on their own do not show that the combination improves focus, memory or mood, or that the two work better together.",
    sources: [
      {
        label: "Selank human anxiety study",
        href: "https://pubmed.ncbi.nlm.nih.gov/18454096/",
      },
      {
        label: "Semax study during stroke rehabilitation",
        href: "https://pubmed.ncbi.nlm.nih.gov/29798983/",
      },
    ],
    sourceNote: "Ingredient evidence only.",
  },
  semax: {
    overview:
      "Semax is studied for protecting brain cells and helping the brain recover after damage, particularly when a stroke interrupts its blood supply. Researchers are examining whether it changes the signals that help nerve cells survive and recover. That work has also led to interest in memory and attention, although protecting an injured brain is a different question from improving a healthy person's concentration.",
    evidence:
      "Human research includes relatively small stroke studies. It does not establish Semax as a reliable focus or memory enhancer for healthy people.",
    sources: [
      {
        label: "Early human stroke study",
        href: "https://pubmed.ncbi.nlm.nih.gov/11517472/",
      },
      {
        label: "Study during stroke rehabilitation",
        href: "https://pubmed.ncbi.nlm.nih.gov/29798983/",
      },
    ],
  },
  sermorelin: {
    overview:
      "Sermorelin copies part of the body's natural message to release growth hormone. It acts on the pituitary gland, the small hormone-producing gland beneath the brain. It has been used to investigate whether that gland can produce growth hormone and studied in children with growth problems. Interest in adult body fat, muscle and recovery comes from growth hormone's wider role in maintaining tissues and regulating fuel use.",
    evidence:
      "Research on childhood growth problems does not establish that sermorelin reverses normal aging or meaningfully improves fitness in healthy adults.",
    sources: [
      {
        label: "Clinical study in children with growth-hormone deficiency",
        href: "https://pubmed.ncbi.nlm.nih.gov/8772599/",
      },
      {
        label: "Comparison of growth-hormone-releasing treatment with growth hormone",
        href: "https://pubmed.ncbi.nlm.nih.gov/8329826/",
      },
    ],
  },
  "slu-pp-332": {
    compoundKind: "research-compound",
    overview:
      "SLU-PP-332 is an experimental chemical studied for switching on some of the changes that happen in muscles during endurance exercise. Researchers have examined whether it makes cells use more energy and burn more fat as fuel. That is why it is sometimes described as an “exercise mimetic”—something intended to copy selected effects of exercise. Despite appearing in peptide catalogs, it is not a peptide.",
    evidence:
      "Findings come from animal research. They do not establish weight-loss benefits in people or show that it can replace exercise.",
    sources: [
      {
        label: "Original study of energy use and fat metabolism in mice",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10801787/",
      },
    ],
  },
  "snap-8": {
    overview:
      "Snap-8 is a cosmetic peptide developed for reducing the appearance of expression lines, such as lines associated with smiling or frowning. The proposed idea is to interfere with some of the signals involved in repeated facial-muscle contractions, which contribute to those lines over time. It is generally discussed as an ingredient in products applied to the skin, so the finished formula and delivery into the skin matter.",
    evidence:
      "Independent clinical evidence is limited. It should not be presented as equivalent to Botox or as an established injectable treatment.",
    sources: [
      {
        label: "Original ingredient manufacturer's SNAP-8 product information",
        href: "https://www.lubrizol.com/solutions/products/beauty/detail-pages/snap-8-peptide-solution-c",
      },
      {
        label: "Archived Lipotec technical brochure",
        href: "https://www.cossma.com/fileadmin/all/cossma/Archiv/ProductInfo/COS1005_14_ProdSnap8.pdf",
      },
    ],
    sourceNote: "These are manufacturer materials, not independent clinical trials.",
  },
  survodutide: {
    overview:
      "Survodutide is an experimental medicine studied for weight loss and liver problems linked to excess fat. It copies two hormones: GLP-1, which helps regulate appetite and blood sugar, and glucagon, which helps control the release and use of stored fuel. Researchers are investigating whether these combined actions can reduce body weight and improve a form of fatty liver disease in which the liver becomes inflamed and damaged.",
    evidence:
      "Human trials have reported weight loss and improvements in liver-disease measures. It remains an investigational medicine.",
    sources: [
      {
        label: "Phase 3 obesity trial",
        href: "https://www.nejm.org/doi/abs/10.1056/NEJMoa2600751",
      },
      {
        label: "Randomized trial in inflammatory fatty liver disease",
        href: "https://www.nejm.org/doi/10.1056/NEJMoa2401755",
      },
    ],
  },
  "ta-1-thymalin-complex": {
    overview:
      "This blend combines two substances associated with the thymus, a gland involved in developing immune cells. Thymosin alpha-1 is studied for influencing how immune cells respond to threats. Thymalin is a mixture of substances originally extracted from thymus tissue and studied for changes in immune function. The proposed purpose of combining them is to support immune responses when those responses are disrupted.",
    evidence:
      "Studies of the ingredients do not establish that combining them prevents illness, reverses immune aging or produces a stronger benefit.",
    sources: [
      {
        label: "Thymosin alpha-1 randomized sepsis trial",
        href: "https://www.bmj.com/content/388/bmj-2024-082583",
      },
      {
        label: "Thymalin clinical research report",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8654498/",
      },
    ],
    sourceNote:
      "Ingredient evidence only; the large alpha-1 trial did not show an overall survival benefit.",
  },
  "tb-500": {
    overview:
      "Thymosin beta-4 is a naturally occurring peptide studied for wound healing and tissue repair. One research focus is how it helps cells change shape and move into an injured area, an important step in rebuilding damaged tissue. The name TB-500 is used inconsistently for products related to thymosin beta-4, including shorter pieces of it. Those products should not automatically be treated as the same compound.",
    evidence:
      "Some human wound studies tested full-length thymosin beta-4. They do not establish that every TB-500 product speeds muscle or tendon recovery.",
    sources: [
      {
        label: "Human wound trial of full-length thymosin beta-4",
        href: "https://pubmed.ncbi.nlm.nih.gov/17495250/",
      },
      {
        label: "Primary analysis identifying TB-500 as a modified fragment",
        href: "https://pubmed.ncbi.nlm.nih.gov/23084823/",
      },
    ],
  },
  "tb-500-fragment-17-23": {
    overview:
      "This fragment is a short piece of thymosin beta-4, taken from a region involved in how cells organize their internal structure and move. Researchers are interested in that movement because repair cells need to reach damaged areas before they can help rebuild them. The numbers “17–23” identify which part of the larger peptide the fragment contains.",
    evidence:
      "A fragment is not automatically a smaller dose of the full peptide. Its effects, stability and results in people need their own evidence, including for chemically modified versions sold as TB-500.",
    sources: [
      {
        label: "Identification of the TB-500 fragment",
        href: "https://pubmed.ncbi.nlm.nih.gov/23084823/",
      },
      {
        label: "Later study distinguishing the modified fragment from its related forms",
        href: "https://pubmed.ncbi.nlm.nih.gov/38382158/",
      },
    ],
  },
  tesamorelin: {
    overview:
      "Tesamorelin encourages the body to release growth hormone and is studied for reducing fat stored deep inside the belly, around the organs. This is called visceral fat, and it is different from the fat just beneath the skin. Its established prescription use is for excess abdominal fat in adults with HIV who have a condition that changes how body fat is distributed.",
    evidence:
      "Tesamorelin has human evidence for that specific use. It is not established as a general weight-loss treatment or a way to selectively remove ordinary belly fat.",
    sources: [
      {
        label: "FDA prescribing information for Egrifta WR",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf",
      },
    ],
  },
  "2x-tesamorelin-ipamorelin": {
    overview:
      "This combination is proposed for influencing body fat and muscle through the body's own growth-hormone release. Tesamorelin and ipamorelin send different signals that can stimulate the pituitary gland, the hormone-producing gland beneath the brain. The idea is that combining those signals might produce a different response from either alone. Tesamorelin's separate research on deep abdominal fat is a major reason for interest in the pairing.",
    evidence:
      "Tesamorelin's established prescription use does not validate this blend. Its effects on fat loss, muscle, recovery and safety need direct human testing.",
    sources: [
      {
        label: "Tesamorelin prescribing information",
        href: "https://www.accessdata.fda.gov/drugsatfda_docs/label/2025/022505s020lbl.pdf",
      },
      {
        label: "Human ipamorelin hormone-response study",
        href: "https://pubmed.ncbi.nlm.nih.gov/10496658/",
      },
    ],
    sourceNote: "Ingredient evidence only.",
  },
  thymagen: {
    displayName: "Thymagen (Thymogen)",
    overview:
      "Thymagen usually refers to Thymogen, a short peptide studied for influencing immune-cell activity. It comes from research on signals associated with the thymus, the gland where certain infection-fighting cells develop. Researchers have investigated whether it can help regulate immune responses when those responses are weakened or disrupted. This is different from assuming that turning immune activity up is always beneficial.",
    evidence:
      "Some human studies exist under related drug names and specific formulations. They do not establish that every product labeled Thymagen prevents infections or slows aging.",
    sources: [
      {
        label: "Thymogen chemical identity record",
        href: "https://pubchem.ncbi.nlm.nih.gov/compound/Thymogen",
      },
      {
        label: "Small human study examining immune changes",
        href: "https://pubmed.ncbi.nlm.nih.gov/9026934/",
      },
    ],
    sourceNote:
      "The spelling “Thymagen” alone does not guarantee the same chemical identity or formulation.",
  },
  thymalin: {
    compoundKind: "mixture",
    overview:
      "Thymalin is a mixture of small substances extracted from thymus tissue, rather than one single, precisely defined peptide. It is studied for how it affects immune-cell numbers and activity, especially when illness or aging has disrupted them. The thymus is the gland that helps certain infection-fighting cells develop. Researchers are asking whether signals associated with that gland can help restore a more useful immune response.",
    evidence:
      "Human reports exist, but the limited evidence does not establish Thymalin as a general way to prevent illness or reverse immune aging.",
    sources: [
      {
        label: "Original clinical report of Thymalin and immune changes during severe illness",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8654498/",
      },
    ],
  },
  "thymosin-alpha-1": {
    overview:
      "Thymosin alpha-1 is studied for helping regulate the immune system's response to infections and other serious illnesses. Researchers are interested in how it affects the cells that recognize threats and coordinate a response. The goal is a more useful immune response, which may involve improving weak responses or changing excessive ones. It has been investigated in settings including chronic infections and severe infection-related illness.",
    evidence:
      "It has human clinical research, but benefits depend on the condition. A large sepsis trial did not show an overall improvement in survival.",
    sources: [
      {
        label: "Large randomized human sepsis trial",
        href: "https://www.bmj.com/content/388/bmj-2024-082583",
      },
      {
        label: "Placebo-controlled chronic hepatitis B trial",
        href: "https://pubmed.ncbi.nlm.nih.gov/10607256/",
      },
    ],
    sourceNote: "Research in one illness does not establish a benefit in another.",
  },
  thymulin: {
    overview:
      "Thymulin is a hormone made by the thymus, a gland that helps certain immune cells develop. It needs zinc to function properly. Researchers study it to understand how those cells mature, how immune activity is controlled and how this changes with aging or illness. The basic question is whether influencing this natural signal could help when immune function is disrupted.",
    evidence:
      "Its role in immune biology has experimental support, but giving extra thymulin has not been established as a general infection-prevention or anti-aging treatment.",
    sources: [
      {
        label: "Original human study of zinc and thymulin activity",
        href: "https://pmc.ncbi.nlm.nih.gov/articles/PMC442670/",
      },
      {
        label: "Study of thymulin secretion by human thymus cells",
        href: "https://pubmed.ncbi.nlm.nih.gov/1502195/",
      },
    ],
  },
};

/**
 * @param {string} slug
 * @returns {PeptideOverview | null}
 */
export function getPeptideOverview(slug) {
  if (!slug) return null;
  const key = OVERVIEW_ALIASES[slug] || slug;
  return PEPTIDE_OVERVIEWS[key] || null;
}

/**
 * First sentence of the overview, for hero copy and metadata.
 * @param {string} slug
 * @returns {string | null}
 */
export function getPeptideOverviewLead(slug) {
  const data = getPeptideOverview(slug);
  if (!data?.overview) return null;
  const match = data.overview.match(/^.+?[.!?](?:\s|$)/);
  return match ? match[0].trim() : data.overview;
}

/**
 * @param {CompoundKind | undefined} kind
 * @returns {string | null}
 */
export function getCompoundKindLabel(kind) {
  if (kind === "research-compound") return "Research compound — not a peptide";
  if (kind === "mixture") return "Thymus extract mixture";
  if (kind === "product-form") return "Product form of GHK-Cu";
  return null;
}

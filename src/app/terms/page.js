import { LegalDocumentPage } from "@/components/LegalDocumentPage";

export const metadata = {
  title: "Terms of Service | MyPepFinder",
  description:
    "Terms governing your use of MyPepFinder peptide research tools, calculators, provider comparisons, and educational content.",
};

const LAST_UPDATED = "August 31, 2026";

const SECTIONS = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    paragraphs: [
      'These Terms of Service ("Terms") govern your access to and use of MyPepFinder and related websites, tools, and content (collectively, the "Service"), operated by MyPepFinder ("we," "us," or "our"). By accessing or using the Service, you agree to these Terms and our Privacy Policy. If you do not agree, do not use the Service.',
    ],
  },
  {
    id: "eligibility",
    title: "Eligibility",
    paragraphs: [
      "You must be at least 18 years old, or the age of majority in your jurisdiction, to use the Service. By using the Service, you represent that you meet this requirement and have the legal capacity to enter into these Terms.",
    ],
  },
  {
    id: "educational-purpose",
    title: "Educational Purpose Only",
    paragraphs: [
      "MyPepFinder is an educational and informational platform. Content on the Service — including peptide profiles, dosage guides, calculators, research summaries, provider listings, and comparison tools — is provided for general research and educational purposes only.",
      "Nothing on the Service constitutes medical advice, diagnosis, treatment, prescribing, or a recommendation to use any peptide, supplement, drug, or therapy. Always consult a qualified healthcare professional before making health-related decisions.",
      "Many peptides discussed on the Service are investigational, not approved for human use in all jurisdictions, or subject to regulatory restrictions. You are solely responsible for understanding and complying with applicable laws and regulations.",
    ],
  },
  {
    id: "no-provider-relationship",
    title: "No Provider Endorsement",
    paragraphs: [
      "Provider listings, comparisons, rankings, and links on the Service are provided for informational convenience. They do not constitute an endorsement, guarantee, or recommendation of any vendor, product, purity, legality, or safety.",
      "We do not control third-party providers and are not responsible for their products, services, pricing, shipping, labeling, quality, or business practices. Any transaction you enter into with a third party is solely between you and that party.",
      "Some links may be affiliate or sponsored links. Where applicable, we may receive compensation if you click through or make a purchase. Compensation arrangements do not change our educational positioning or your obligation to evaluate providers independently.",
    ],
  },
  {
    id: "accuracy",
    title: "Accuracy and Updates",
    paragraphs: [
      "We strive to present research-backed, clearly sourced information, but we do not warrant that any content on the Service is complete, current, accurate, or error-free. Research, regulatory status, product availability, and clinical evidence change over time.",
      "Calculator outputs and dosage examples are mathematical estimates based on the inputs you provide. They are not prescriptions, validated clinical protocols, or instructions for use. You are responsible for verifying all calculations and information before relying on them.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    paragraphs: [
      "You agree not to misuse the Service. Prohibited conduct includes attempting to gain unauthorized access to systems or data; scraping or harvesting content in violation of these Terms or applicable law; interfering with the operation or security of the Service; using the Service for unlawful, harmful, fraudulent, or abusive purposes; and misrepresenting your affiliation with MyPepFinder.",
      "We may suspend or terminate access to the Service if we reasonably believe you have violated these Terms or pose a risk to the Service or other users.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    paragraphs: [
      "The Service, including its design, text, graphics, logos, software, and compilation of content, is owned by MyPepFinder or its licensors and is protected by intellectual property laws. You may view and use the Service for personal, non-commercial purposes in accordance with these Terms.",
      "You may not copy, modify, distribute, sell, lease, reverse engineer, or create derivative works from the Service or its content except as permitted by law or with our prior written consent.",
    ],
  },
  {
    id: "user-submissions",
    title: "Submissions and Communications",
    paragraphs: [
      "If you submit information to us — such as an email address, feedback, or form responses — you represent that the information is accurate to the best of your knowledge and that you have the right to provide it.",
      "You grant us a non-exclusive, worldwide, royalty-free license to use submissions for operating, improving, and promoting the Service, subject to our Privacy Policy.",
    ],
  },
  {
    id: "third-party-links",
    title: "Third-Party Links and Research Sources",
    paragraphs: [
      "The Service links to external research articles, regulatory resources, and third-party websites for reference. We do not control and are not responsible for third-party content, availability, or policies. Accessing third-party sites is at your own risk.",
    ],
  },
  {
    id: "disclaimer",
    title: "Disclaimer of Warranties",
    paragraphs: [
      'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.',
      "We do not warrant that the Service will be uninterrupted, secure, or free of errors, or that any information or results obtained through the Service will meet your requirements.",
    ],
  },
  {
    id: "limitation",
    title: "Limitation of Liability",
    paragraphs: [
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, MYPEPFINDER AND ITS OWNERS, OPERATORS, AFFILIATES, AND SUPPLIERS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR RELATED TO YOUR USE OF OR INABILITY TO USE THE SERVICE.",
      "TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR TOTAL LIABILITY FOR ANY CLAIM ARISING OUT OF OR RELATING TO THE SERVICE OR THESE TERMS WILL NOT EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID US, IF ANY, TO USE THE SERVICE IN THE TWELVE MONTHS BEFORE THE CLAIM OR (B) ONE HUNDRED U.S. DOLLARS (US $100).",
      "Some jurisdictions do not allow certain limitations of liability, so some of the above limitations may not apply to you.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    paragraphs: [
      "You agree to defend, indemnify, and hold harmless MyPepFinder and its owners, operators, affiliates, and suppliers from and against any claims, liabilities, damages, losses, and expenses (including reasonable attorneys' fees) arising out of or related to your use of the Service, your violation of these Terms, or your violation of any rights of another person or entity.",
    ],
  },
  {
    id: "changes",
    title: "Changes to the Service and Terms",
    paragraphs: [
      "We may modify, suspend, or discontinue any part of the Service at any time. We may also update these Terms from time to time. When we do, we will revise the \"Last updated\" date at the top of this page. Material changes may also be noted on the Service. Your continued use after changes become effective constitutes acceptance of the revised Terms.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    paragraphs: [
      "These Terms are governed by the laws of the United States and the State of Delaware, without regard to conflict-of-law principles, except where mandatory local law provides otherwise.",
      "Any dispute arising out of or relating to these Terms or the Service will be brought exclusively in the state or federal courts located in Delaware, and you consent to personal jurisdiction in those courts.",
    ],
  },
  {
    id: "general",
    title: "General",
    paragraphs: [
      "These Terms, together with the Privacy Policy, constitute the entire agreement between you and MyPepFinder regarding the Service. If any provision is found unenforceable, the remaining provisions will remain in full force and effect. Our failure to enforce any provision is not a waiver of that provision.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    paragraphs: [
      "If you have questions about these Terms, please contact us through the Contact link in the site footer.",
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <LegalDocumentPage
      title="Terms of Service"
      description="Please read these terms carefully before using MyPepFinder. They explain the rules, disclaimers, and limitations that apply to our research tools and educational content."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    />
  );
}

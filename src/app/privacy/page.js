import { LegalDocumentPage } from "@/components/LegalDocumentPage";

export const metadata = {
  title: "Privacy Policy | MyPepFinder",
  description:
    "How MyPepFinder collects, uses, and protects information when you use our peptide research and comparison tools.",
};

const LAST_UPDATED = "August 31, 2026";

const SECTIONS = [
  {
    id: "introduction",
    title: "Introduction",
    paragraphs: [
      'MyPepFinder ("we," "us," or "our") operates an educational website that helps users explore peptide research, compare providers, and use calculators and reference tools. This Privacy Policy explains what information we collect, how we use it, and the choices you have when you visit mypepfinder.com and related pages (collectively, the "Service").',
      "By using the Service, you agree to the collection and use of information as described in this policy. If you do not agree, please do not use the Service.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect",
    paragraphs: [
      "Information you provide voluntarily. If you submit your email address or other details through a form on the Service — for example, to request a research report, sign up for updates, or contact us — we collect the information you choose to provide, such as your email address, selected goal, optional notes, and the page where you submitted the form.",
      "Usage and technical information. When you use the Service, we and our analytics providers may automatically collect information such as your browser type, device type, operating system, referring pages, pages viewed, approximate location derived from IP address, and the date and time of your visit.",
      "Interaction data. We may log events related to how you use the Service, such as calculator submissions, affiliate link clicks, peptide page views, and similar interactions, to understand usage patterns and improve the Service.",
      "Cookies and similar technologies. We use cookies and similar technologies to operate the Service, remember preferences, and support analytics. See the Cookies section below for more detail.",
    ],
  },
  {
    id: "how-we-use-information",
    title: "How We Use Information",
    paragraphs: [
      "We use the information we collect to operate, maintain, and improve the Service; deliver requested emails or reports; respond to inquiries; analyze traffic and feature usage; measure interest in providers and content; prevent abuse and protect the security of the Service; and comply with applicable law.",
      "If you opt in to updates, we may use your email address to send research highlights, product updates, or related educational content. You can stop receiving promotional messages by following the unsubscribe instructions in any email we send, where applicable.",
    ],
  },
  {
    id: "legal-bases",
    title: "Legal Bases for Processing",
    paragraphs: [
      "Where required by applicable law, we process personal information based on one or more of the following grounds: your consent; our legitimate interests in operating and improving an educational research platform; performance of a request you make of us; and compliance with legal obligations.",
    ],
  },
  {
    id: "sharing",
    title: "How We Share Information",
    paragraphs: [
      "We do not sell your personal information.",
      "We may share information with service providers that help us run the Service, such as hosting, analytics, email delivery, and database providers. These providers are permitted to use your information only to perform services on our behalf and subject to appropriate confidentiality and security obligations.",
      "We may disclose information if we believe it is reasonably necessary to comply with law, regulation, legal process, or governmental request; to enforce our Terms of Service; to protect the rights, property, or safety of MyPepFinder, our users, or others; or in connection with a merger, acquisition, or sale of assets.",
      "The Service contains links to third-party websites, research publications, and provider sites. Those third parties have their own privacy policies, and we are not responsible for their practices.",
    ],
  },
  {
    id: "cookies",
    title: "Cookies",
    paragraphs: [
      "We use essential cookies and similar technologies needed for basic site functionality. We may also use analytics cookies to understand how visitors use the Service. For example, we use Vercel Analytics to collect aggregated usage metrics.",
      "We may set a functional cookie when you unlock premium or beta features during testing. You can control cookies through your browser settings. Disabling cookies may affect certain features of the Service.",
    ],
  },
  {
    id: "retention",
    title: "Data Retention",
    paragraphs: [
      "We retain personal information for as long as needed to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law. Lead and interaction records may be retained to maintain service history, improve the platform, and comply with legal obligations.",
      "Aggregated or de-identified information that cannot reasonably be used to identify you may be retained indefinitely for analytics and product improvement.",
    ],
  },
  {
    id: "security",
    title: "Security",
    paragraphs: [
      "We use reasonable administrative, technical, and organizational measures designed to protect personal information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Choices and Rights",
    paragraphs: [
      "Depending on where you live, you may have rights to access, correct, delete, or restrict certain processing of your personal information, or to object to processing based on legitimate interests. You may also have the right to data portability and to withdraw consent where processing is based on consent.",
      "To exercise these rights, contact us using the Contact link in the site footer. We may need to verify your identity before responding. You may also lodge a complaint with a supervisory authority in your jurisdiction, where applicable.",
    ],
  },
  {
    id: "children",
    title: "Children's Privacy",
    paragraphs: [
      "The Service is intended for adults interested in peptide research and education. We do not knowingly collect personal information from children under 13. If you believe a child has provided us personal information, please contact us so we can delete it.",
    ],
  },
  {
    id: "international",
    title: "International Users",
    paragraphs: [
      "If you access the Service from outside the United States, you understand that your information may be processed and stored in the United States or other countries where we or our service providers operate. Those countries may have different data protection laws than your country of residence.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the \"Last updated\" date at the top of this page. Material changes may also be highlighted on the Service. Your continued use of the Service after an update means you accept the revised policy.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    paragraphs: [
      "If you have questions about this Privacy Policy or our privacy practices, please contact us through the Contact link in the site footer.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      title="Privacy Policy"
      description="This policy describes how MyPepFinder handles information when you browse peptide profiles, use calculators, request reports, or interact with other features on our site."
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
    />
  );
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Taxation" | "Corporate" | "Engagement";
}

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Where is the office of Pahuja & Co. located in New Delhi, and how can I schedule a consultation?",
    answer: "Our office is located at C-2/271, Ground Floor, Janakpuri, New Delhi – 110058. In-person consultations can be scheduled by phone (+91 11 4562 6500 / +91 98710 12900), by email (puneet@pahujaandco.com), or by submitting the consultation enquiry form on this website. For clients located outside West Delhi or across India, virtual consultations via phone or video conferencing are also readily accommodated.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "What basic documents are required for initial income tax or GST consultation?",
    answer: "For initial tax consultations, having your previous year's filed ITR, current Form 26AS/AIS summary, bank statements, and basic profit/loss records is helpful. For GST matters, your GSTIN registration certificate, recent 3 months of GSTR-3B/1 summaries, and purchase registers enable us to assess the situation immediately. We do not require or solicit sensitive passwords or bank credentials through the public web form.",
    category: "Taxation"
  },
  {
    id: "faq-3",
    question: "Can Pahuja & Co. manage complete annual statutory compliances for private limited companies?",
    answer: "Yes. We support companies from early-stage incorporation through ongoing statutory lifecycle management. This includes bookkeeping supervision, preparation of statutory financial statements (AS/Ind AS), statutory audit coordination, tax audit under Section 44AB, and filing mandatory annual ROC returns (AOC-4, MGT-7/7A, DIR-3 KYC, DPT-3, MSME-1) with the Ministry of Corporate Affairs.",
    category: "Corporate"
  },
  {
    id: "faq-4",
    question: "How does the firm handle client data confidentiality and security?",
    answer: "Chartered accountants are bound by stringent professional confidentiality guidelines issued by the Institute of Chartered Accountants of India (ICAI). Client records, financial figures, tax documents, and communications are handled strictly on a need-to-know basis and never disclosed to third parties without explicit authorization or statutory directive.",
    category: "General"
  },
  {
    id: "faq-5",
    question: "What is the procedure if my business has received an income tax or GST department notice?",
    answer: "When a notice is received (e.g., under Section 143(1), 148, or GST ASMT-10/DRC-01), time is critical. Do not panic or ignore statutory time limits. Contact us with a digital copy of the notice and DIN (Document Identification Number). We will analyze the specific discrepancy, formulate the legal and accounting response, and prepare point-by-point factual submissions for the department.",
    category: "Engagement"
  },
  {
    id: "faq-6",
    question: "Does Pahuja & Co. provide monthly bookkeeping and payroll support?",
    answer: "Yes. We offer recurring monthly accounting, reconciliation, and payroll management for growing businesses. This covers end-to-end ledger maintenance, monthly GST returns, PF and ESI compliance, and salary slip generation, ensuring business owners can focus on core growth without compliance anxieties.",
    category: "Corporate"
  }
];

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortSummary: string;
  fullDescription: string;
  targetAudience: string;
  clientChallenges: string[];
  clientProblems: string[];
  solutions: string[];
  tangibleBenefits: string[];
  deliverables: string[];
  statutoryPoints: string[];
  serviceFaqs: ServiceFaq[];
  relatedInsightSlugs: string[];
  ctaLabel: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "corporate-services",
    slug: "corporate-services",
    number: "01",
    title: "Corporate Services",
    shortSummary: "Company incorporation, MCA filings, ROC annual compliances, and corporate governance for growing enterprises.",
    fullDescription: "Corporate compliance in India requires rigorous adherence to the Companies Act, 2013 and regular filings with the Registrar of Companies (ROC). Pahuja & Co. assists founders, private limited companies, and LLPs throughout their lifecycle—from initial entity structure selection and digital signature issuance to routine statutory maintenance, secretarial audit support, and event-based ROC filings.",
    targetAudience: "Startups, Private Limited Companies, LLPs, One Person Companies (OPCs), and Directors.",
    clientChallenges: [
      "Navigating complex company incorporation procedures and fast-track approvals under SPICe+.",
      "Strict penalty provisions for delayed MCA annual returns (Form AOC-4, MGT-7).",
      "Drafting board resolutions, maintenance of statutory registers, and minutes of meetings.",
      "Handling capital structure alterations, allotment of shares, and appointment/resignation of directors."
    ],
    clientProblems: [
      "Compounding daily late fees (₹100/day) on overdue MCA Forms AOC-4 and MGT-7.",
      "Risk of Director Identification Number (DIN) deactivation due to non-filing of DIR-3 KYC.",
      "Improper secretarial documentation jeopardizing bank funding, equity investment, or business sale.",
      "Dormant companies incurring accumulated liabilities due to incomplete strike-off procedures."
    ],
    solutions: [
      "End-to-End Incorporation: Fast-track name approval (RUN), SPICe+ preparation, MoA/AoA drafting, and PAN/TAN generation.",
      "Statutory Calendar Monitoring: Systematic tracking of board meeting windows, AGM schedules, and ROC due dates.",
      "Secretarial Vetting: Maintenance of statutory registers (MGT-1), drafting structured board and general meeting minutes.",
      "Event-Based Filing Support: Swift processing of capital increases, registered office shifting, and director appointments."
    ],
    tangibleBenefits: [
      "Zero MCA Late Filing Penalties through proactive deadline reminders.",
      "Continuous Active Status for Directors and Company on the MCA V3 master data.",
      "Investor-Ready Corporate Records with compliant statutory registers and board resolutions.",
      "Clean Entity Restructuring or orderly strike-off (STK-2) minimizing director exposure."
    ],
    deliverables: [
      "Company & LLP Incorporation (SPICe+, RUN, LLP Form 1 & 2)",
      "Annual ROC Compliance (Forms AOC-4, MGT-7/7A, MSME-1, DPT-3)",
      "Director KYC (DIR-3 KYC) and DIN reactivation",
      "Secretarial Documentation & Maintenance of Statutory Registers",
      "Registered Office Change, Name Change & Object Clause Alterations",
      "Company Strike-Off (FTE / STK-2) and Formal Winding-Up Advisory"
    ],
    statutoryPoints: [
      "Companies Act, 2013 compliances",
      "Ministry of Corporate Affairs (MCA) V3 Portal processes",
      "FDI and RBI compliances for foreign direct investment reporting"
    ],
    serviceFaqs: [
      {
        question: "What is the penalty for filing ROC annual returns (AOC-4 and MGT-7) after the due date?",
        answer: "Under the Companies Act, delayed filing of Form AOC-4 and MGT-7 incurs an additional fee of ₹100 per day of default, with no upper cap. In addition, company directors may face statutory penalties under Section 454. Pahuja & Co. ensures advance preparation of balance sheets to submit returns well before deadlines."
      },
      {
        question: "Can a dormant private limited company be struck off without heavy fines?",
        answer: "Yes, companies that have not commenced business within one year of incorporation or have not conducted operations for two consecutive financial years can apply for voluntary strike-off under Section 248(2) using Form STK-2, provided pending statutory obligations are properly settled."
      },
      {
        question: "Is DIR-3 KYC mandatory for all directors every year?",
        answer: "Yes. Every individual holding a DIN must submit DIR-3 KYC by September 30 each year. If missed, the DIN is marked 'Deactivated due to non-filing of DIR-3 KYC' and requires a ₹5,000 late fee to reactivate."
      }
    ],
    relatedInsightSlugs: [
      "statutory-company-compliance-calendar",
      "section-43b-h-msme-payment-rule"
    ],
    ctaLabel: "Consult on Corporate Compliance"
  },
  {
    id: "audit-assurance",
    slug: "audit-assurance",
    number: "02",
    title: "Audit & Assurance",
    shortSummary: "Statutory audits, tax audits under section 44AB, internal controls review, and special certifications.",
    fullDescription: "An independent audit should provide more than formal regulatory clearance; it provides assurance to stakeholders, management, lenders, and taxation authorities. We examine financial statements against applicable Accounting Standards (AS / Ind AS), verify internal financial controls, and prepare rigorous audit reports that withstand statutory scrutiny.",
    targetAudience: "Enterprises crossing statutory audit thresholds, corporate entities, partnership firms, and non-profit trusts.",
    clientChallenges: [
      "Ensuring financial statements represent a true and fair view in compliance with ICAI standards.",
      "Fulfilling Tax Audit requirements under Section 44AB within mandatory deadlines.",
      "Strengthening internal financial controls (IFC) to prevent misstatements and revenue leakage.",
      "Satisfying bank audit requirements for working capital facilities and term loans."
    ],
    clientProblems: [
      "Risk of a 0.5% turnover penalty (up to ₹1,50,000) under Section 271B for missing the Section 44AB Tax Audit deadline.",
      "Discrepancies between audited figures, GSTR-9C reconciliation, and income tax disclosures leading to department scrutiny.",
      "Internal financial control gaps exposing the business to inventory pilferage or unrecorded cash transactions.",
      "Bank loan sanctions withheld due to uncertified provisional or audited financial statements."
    ],
    solutions: [
      "Statutory Audit Execution: Methodical verification of ledgers, trial balance, and compliance with Schedule III of the Companies Act.",
      "Section 44AB Tax Audit: Meticulous compilation and verification of Form 3CD clauses, TDS deductions, and depreciation schedules.",
      "Internal Controls Evaluation: Review of authorization matrices, voucher controls, and bank reconciliation hygiene.",
      "Special Certifications: Issuance of net worth certificates, turnover certificates, and utilization statements for tenders."
    ],
    tangibleBenefits: [
      "Airtight Financial Statements that earn credibility with commercial banks, investors, and regulators.",
      "Elimination of Section 271B Penalties through scheduled pre-September audit sign-offs.",
      "Detection of Inefficiencies and cost-leakages before they impact fiscal year profitability.",
      "Harmonized Disclosures between accounting books, income tax returns, and GST filings."
    ],
    deliverables: [
      "Statutory Audits under the Companies Act, 2013",
      "Tax Audits under Section 44AB (Forms 3CA/3CB and Form 3CD)",
      "Internal Audits, System Reviews, and Risk Assessments",
      "Special Purpose Certifications & Net Worth Certificates",
      "Turnover Audits and Bank Stock / Credit Audits",
      "Trust & Society Audits under Section 12A/10(23C)"
    ],
    statutoryPoints: [
      "Auditing Standards issued by ICAI",
      "Section 44AB of the Income Tax Act, 1961",
      "Internal Financial Controls (IFC) reporting under Section 143(3)"
    ],
    serviceFaqs: [
      {
        question: "When is a Tax Audit under Section 44AB mandatory for businesses and professionals?",
        answer: "A tax audit is mandatory for businesses whose turnover exceeds ₹1 crore (or ₹10 crore if cash transactions are less than 5% of total receipts and payments). For professionals, the threshold is gross receipts exceeding ₹50 lakhs. If presumptive taxation (Section 44AD/44ADA) is opted out of, specific lower thresholds apply."
      },
      {
        question: "What is the deadline for submitting the Tax Audit Report?",
        answer: "The Tax Audit Report in Form 3CA/3CB and 3CD must be submitted by September 30 of the assessment year (or October 31 for transfer pricing cases), one month prior to the corporate income tax return filing due date."
      },
      {
        question: "How does an internal audit benefit an SME or growing startup?",
        answer: "An internal audit systematically examines purchase workflows, stock records, debtor collections, and payroll accuracy to prevent fraud, ensure operational discipline, and improve bottom-line efficiency."
      }
    ],
    relatedInsightSlugs: [
      "new-vs-old-tax-regime-guide",
      "gst-itc-reconciliation-gstr-2b"
    ],
    ctaLabel: "Schedule an Audit Review"
  },
  {
    id: "income-tax",
    slug: "income-tax",
    number: "03",
    title: "Income Tax",
    shortSummary: "Strategic direct tax advisory, annual ITR filing for corporates & individuals, TDS/TCS management, and assessment support.",
    fullDescription: "Direct tax regulations undergo constant amendments through annual Finance Acts and CBDT notifications. Pahuja & Co. offers end-to-end direct tax advisory—combining prudent tax computation, accurate return preparation, advance tax forecasting, and professional representation in response to notices and scrutiny proceedings.",
    targetAudience: "Corporate entities, partnership firms, HNIs, professionals, salaried individuals, and NRIs.",
    clientChallenges: [
      "Selecting the optimal tax regime (New Tax Regime Section 115BAC vs. Old Regime deductions).",
      "Managing quarterly Advance Tax calculations to minimize interest under Sections 234B and 234C.",
      "Reconciling Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) with Books.",
      "Responding promptly to income tax notices under Sections 143(1), 143(2), 148, or 139(9)."
    ],
    clientProblems: [
      "Heavy interest outgo under Sections 234A, 234B, and 234C due to miscalculated or delayed advance tax installments.",
      "Defective return notices under Section 139(9) or demand notices under Section 143(1)(a) caused by AIS/TIS mismatches.",
      "Unoptimized tax structures resulting in higher effective tax rates across multiple business entities.",
      "TDS default notices with demanding interest and late fees under Section 234E (₹200/day)."
    ],
    solutions: [
      "Regime Optimization Modeling: Comparative calculation of tax liability under Old vs. New Tax Regimes with full Chapter VI-A evaluation.",
      "AIS / TIS / 26AS Pre-Filing Reconciliation: Line-by-line verification of high-value transactions, dividends, and interest.",
      "Advance Tax Calendaring: Quarterly estimation of business profits to ensure timely tax challan deposits (June, Sept, Dec, March).",
      "Notice & Scrutiny Advisory: Factual, well-researched replies with documentary evidence submitted through the faceless e-filing portal."
    ],
    tangibleBenefits: [
      "Substantial Interest Savings under Sections 234B and 234C through accurate advance tax calculations.",
      "Zero Defective Return Notices with verified reconciliation against AIS and Form 26AS records.",
      "Lawful Tax Minimization utilizing all applicable deductions, depreciation, and capital gains exemptions.",
      "Stress-Free Notice Resolution with direct Chartered Accountant representation."
    ],
    deliverables: [
      "Corporate Income Tax Returns (ITR-6) & Firm Returns (ITR-5)",
      "Individual, Professional & Proprietorship Returns (ITR-1, 2, 3, 4)",
      "TDS & TCS Quarterly Returns (Forms 24Q, 26Q, 27Q, 27EQ) and Form 16/16A generation",
      "Advance Tax Projections and Quarterly Challan Verification",
      "Scrutiny, Faceless Assessment, and Appeal Documentation Support",
      "Capital Gains Computations and Exemption Structuring (Sections 54, 54EC, 54F)"
    ],
    statutoryPoints: [
      "Income Tax Act, 1961 & Income Tax Rules, 1962",
      "CBDT circulars and Annual Finance Act updates",
      "AIS / TIS verification and Faceless Assessment e-proceedings"
    ],
    serviceFaqs: [
      {
        question: "Can I choose between the Old and New Tax Regimes every year?",
        answer: "Salaried individuals without business income can select their preferred regime annually when filing their ITR. However, taxpayers with business or professional income (filing ITR-3 or ITR-4) who opt out of the default New Regime using Form 10-IEA are allowed to switch back only once in their lifetime."
      },
      {
        question: "What should I do if I receive a notice under Section 143(1) with a tax demand?",
        answer: "First, compare the intimation with your filed return to identify whether the demand arose from an AIS mismatch, an uncredited TDS entry, or an adjustment under Section 143(1)(a). We assist in filing an online rectification request under Section 154 or submitting an agreement/disagreement response within the statutory 30-day window."
      },
      {
        question: "What is the penalty for filing an Income Tax Return after the July 31 due date?",
        answer: "Late filing under Section 139(4) attracts a late fee under Section 234F of up to ₹5,000 (₹1,000 if total income is below ₹5 lakhs), along with 1% per month interest under Section 234A on any unpaid tax balance, and forfeiture of the ability to carry forward certain business losses."
      }
    ],
    relatedInsightSlugs: [
      "new-vs-old-tax-regime-guide",
      "section-43b-h-msme-payment-rule"
    ],
    ctaLabel: "Plan Your Income Tax Strategy"
  },
  {
    id: "gst-services",
    slug: "gst",
    number: "04",
    title: "GST Services",
    shortSummary: "GST registration, periodic return filings (GSTR-1, 3B), input tax credit reconciliation, annual returns, and notice advisory.",
    fullDescription: "The Goods and Services Tax framework demands tight monthly discipline, data hygiene between accounting systems and the GST Portal, and meticulous tracking of vendor filings. We handle ongoing GST compliance to ensure full Input Tax Credit (ITC) realization, zero penalty exposure, and seamless support during department verifications.",
    targetAudience: "Manufacturers, service providers, traders, e-commerce sellers, and exporters.",
    clientChallenges: [
      "Mismatch between books of accounts and auto-populated GSTR-2B leading to blocked or reversed ITC.",
      "Complying with e-Invoicing thresholds and real-time e-Way Bill generation rules.",
      "Accurate HSN/SAC code classification and tax rate determination.",
      "Handling GST notices for ITC discrepancies under ASMT-10 or DRC-01."
    ],
    clientProblems: [
      "Loss of working capital due to unclaimed or blocked Input Tax Credit under Section 16(2)(aa).",
      "18% per annum interest liability on irregular ITC claims under Section 50(3).",
      "GSTIN cancellation proceedings triggered by continuous non-filing of returns.",
      "GST demand notices (Form DRC-01/ASMT-10) stemming from turnover differences between GSTR-1 and GSTR-3B."
    ],
    solutions: [
      "Automated Monthly GSTR-2B Matching: Continuous reconciliation between your purchase register and supplier filings to identify missing invoices.",
      "Accurate Return Preparation: Detailed preparation of outward supply details in GSTR-1 and tax liability computation in GSTR-3B.",
      "Annual Reconciliation: Thorough preparation of GSTR-9 annual return and GSTR-9C reconciliation statements.",
      "Department Notice Representation: Drafting point-wise factual replies to scrutiny notices (ASMT-10) and show cause notices."
    ],
    tangibleBenefits: [
      "100% Eligible Input Tax Credit Realized without inadvertent leakages or missed filing cutoffs.",
      "Zero GST Registration Suspension Risks through scheduled monthly/quarterly filings.",
      "Discrepancy-Free Records aligned across ERP ledgers, GSTR-1, GSTR-3B, and Income Tax ITRs.",
      "Smooth Export Refunds and Letter of Undertaking (LUT) renewals for international service providers."
    ],
    deliverables: [
      "New GST Registration, Amendments, and Revocation of Cancelled GSTINs",
      "Monthly & Quarterly GST Returns (GSTR-1, GSTR-3B, QRMP Scheme)",
      "Continuous GSTR-2B vs. Purchase Register ITC Reconciliation",
      "Annual Returns (GSTR-9) and Reconciliation Statements (GSTR-9C)",
      "Export Documentation, LUT (Letter of Undertaking) Filing & GST Refund processing",
      "Drafting replies to GST Department Notices & Summons"
    ],
    statutoryPoints: [
      "Central Goods and Services Tax (CGST) & SGST Acts, 2017",
      "Rule 36(4) and Rule 37A Input Tax Credit conditions",
      "GST Council rate circulars and e-invoicing standards"
    ],
    serviceFaqs: [
      {
        question: "Can I claim Input Tax Credit if my vendor has not filed their GSTR-1?",
        answer: "No. Under Section 16(2)(aa) of the CGST Act, ITC can only be availed if the details of the invoice or debit note have been furnished by the supplier in GSTR-1/IFF and appear in the recipient's auto-generated GSTR-2B statement."
      },
      {
        question: "What is Rule 37A reversal regarding vendor non-filing of GSTR-3B?",
        answer: "Under Rule 37A, if you have claimed ITC on an invoice and the supplier fails to furnish their GSTR-3B return by the statutory deadline, you are required to reverse the availed ITC. However, you can reclaim it once the supplier completes their filing."
      },
      {
        question: "Who is required to file the GST Annual Return (GSTR-9)?",
        answer: "GSTR-9 filing is mandatory for registered regular taxpayers with an aggregate annual turnover exceeding ₹2 crores. Taxpayers with turnover exceeding ₹5 crores must also submit a self-certified reconciliation statement in Form GSTR-9C."
      }
    ],
    relatedInsightSlugs: [
      "gst-itc-reconciliation-gstr-2b",
      "section-43b-h-msme-payment-rule"
    ],
    ctaLabel: "Review Your GST Compliance"
  },
  {
    id: "accounting",
    slug: "accounting",
    number: "05",
    title: "Accounting & Bookkeeping",
    shortSummary: "Accurate double-entry bookkeeping, ledger maintenance, MIS reporting, and preparation of financial statements.",
    fullDescription: "Reliable books of accounts are the bedrock of compliant operations and sound managerial decisions. Whether operating through modern cloud platforms like Zoho Books, TallyPrime, or QuickBooks, we maintain clean records, perform bank and ledger reconciliations, and generate monthly management information reports that give business owners clarity.",
    targetAudience: "Proprietorships, partnerships, growing startups, and established SMEs needing structured accounting.",
    clientChallenges: [
      "Backlogged bookkeeping leading to last-minute compliance scrambles and penalties.",
      "Inaccurate expense classification distorting taxable profits and cash flow views.",
      "Lack of monthly financial visibility (Profit & Loss, Balance Sheet, Debtor Aging).",
      "Transitioning from disorganized manual records to structured accounting software."
    ],
    clientProblems: [
      "Unreconciled bank balances hiding unrecorded bank charges, duplicate vendor payments, or bounced cheques.",
      "Non-compliance with the MCA mandatory audit trail (edit log) requirement in accounting software.",
      "Inaccurate cost center accounting leading to faulty pricing and unexpected cash crunches.",
      "Delayed year-end finalization postponing tax return filings and annual audits."
    ],
    solutions: [
      "Systematic Double-Entry Bookkeeping: Posting of all sales, purchases, bank transactions, and journal vouchers with correct account codes.",
      "Periodic Bank & Ledger Reconciliations: Bi-weekly or monthly reconciliation of bank accounts, credit cards, and key vendor/customer balances.",
      "Management Information Reports: Monthly delivery of P&L statements, Balance Sheets, and Debtor Aging analyses for decision makers.",
      "Statutory Schedule Preparation: Compiling fixed asset registers, depreciation schedules, and tax deduction summaries."
    ],
    tangibleBenefits: [
      "Real-Time Financial Visibility to make informed investment, expense, and hiring decisions.",
      "Effortless Audit Readiness with well-indexed digital vouchers and reconciliations.",
      "Accelerated Year-End Finalization allowing early ITR and ROC submissions without stress.",
      "Full Audit Trail (Edit Log) Compliance satisfying Section 128 statutory mandates."
    ],
    deliverables: [
      "Regular Ledger Posting, Journal Entries & Expense Tracking",
      "Bank Account, Credit Card & Payment Gateway Reconciliations",
      "Accounts Receivable (Debtors) & Payable (Creditors) Aging Analysis",
      "Monthly Management Information System (MIS) Reports",
      "Year-End Balance Sheet and Statement of Profit & Loss Preparation",
      "Fixed Asset Register and Depreciation Calculations (Company & Tax Act)"
    ],
    statutoryPoints: [
      "ICAI Accounting Standards (AS) and Ind AS guidelines",
      "Section 128 of the Companies Act, 2013 (Books of Account)",
      "Audit trail (edit log) compliance requirement in accounting software"
    ],
    serviceFaqs: [
      {
        question: "Which accounting platforms do Pahuja & Co. support?",
        answer: "We support industry standard software including TallyPrime, Zoho Books, QuickBooks, Busy, and enterprise ERP integrations. We can work remotely via secure cloud access or on-premise backups based on client preferences."
      },
      {
        question: "What is the mandatory Audit Trail (edit log) rule for Indian companies?",
        answer: "The Ministry of Corporate Affairs mandates that all companies using accounting software must use software with an edit log feature that records an audit trail of each transaction, creates an edit log of every change, and cannot be disabled."
      },
      {
        question: "How frequently should management receive MIS reports?",
        answer: "We typically deliver monthly MIS packages by the 10th of every month, including the Profit & Loss statement, balance sheet snapshot, cash flow analysis, and 30/60/90-day debtor aging reports."
      }
    ],
    relatedInsightSlugs: [
      "section-43b-h-msme-payment-rule",
      "statutory-company-compliance-calendar"
    ],
    ctaLabel: "Organise Your Accounting"
  },
  {
    id: "payroll",
    slug: "payroll",
    number: "06",
    title: "Payroll Compliance",
    shortSummary: "Monthly payroll computations, PF/ESI statutory returns, professional tax, Form 16, and compensation structuring.",
    fullDescription: "Managing human resources payroll requires balancing employee satisfaction with rigorous adherence to labour and taxation statutes. Pahuja & Co. administers confidential payroll processing, monthly statutory remittances for PF, ESI, and Professional Tax, and transparent salary slip generation.",
    targetAudience: "Organizations with 5 to 200+ employees, service firms, IT agencies, and commercial offices.",
    clientChallenges: [
      "Accurate TDS on salary calculation under changing income tax regimes.",
      "Mandatory monthly EPF and ESI challan deposit deadlines (15th of each month).",
      "Managing employee tax declarations, investment proofs, and annual Form 16 issuance.",
      "Designing tax-efficient salary structures within statutory bounds."
    ],
    clientProblems: [
      "Penal damages and interest under Section 14B/7Q of the EPF Act for delayed monthly remittances.",
      "Employee friction due to incorrect TDS deductions or delays in generating annual Form 16 Part A & B.",
      "Exposure to labour department notices due to non-maintenance of statutory muster rolls and wage registers.",
      "Confidentiality leaks of executive compensation within internal administrative departments."
    ],
    solutions: [
      "Confidential Payroll Processing: Independent calculation of gross pay, deductions, net salary, and generation of password-protected payslips.",
      "EPF & ESIC ECR Preparation: Monthly computation of employee/employer contributions and generation of Electronic Challan cum Return (ECR).",
      "Quarterly TDS Filing: Timely filing of Form 24Q and generation of digitally signed Form 16 via TRACES.",
      "Compensation Structuring: Designing lawful, tax-efficient salary components balancing basic, HRA, allowances, and retirement benefits."
    ],
    tangibleBenefits: [
      "Zero Labour Law Penalties with guaranteed EPF/ESI challan generation prior to the 15th of every month.",
      "Enhanced Employee Trust through error-free payslips and timely Form 16 distribution.",
      "Absolute Salary Confidentiality managed outside the internal administrative department.",
      "Optimized Take-Home Pay within statutory direct tax framework."
    ],
    deliverables: [
      "Monthly Salary Computation, Overtime & Leave Attendance Register sync",
      "Provident Fund (EPF / ECR) and ESIC Monthly Challan Processing",
      "Delhi / State-specific Professional Tax Returns and Annual Filings",
      "Form 16 Part A & B generation for employees at fiscal year-end",
      "Quarterly Form 24Q filing and timely tax deposit with CBDT",
      "Full & Final Settlement (F&F) Calculations and Gratuity records"
    ],
    statutoryPoints: [
      "Employees' Provident Funds and Miscellaneous Provisions Act, 1952",
      "Employees' State Insurance (ESI) Act, 1948",
      "Section 192 of the Income Tax Act (TDS on Salaries)"
    ],
    serviceFaqs: [
      {
        question: "When is EPF registration mandatory for a business in India?",
        answer: "EPF registration is mandatory for any commercial establishment employing 20 or more persons. Establishments with fewer than 20 employees can also register voluntarily to offer provident fund benefits to their staff."
      },
      {
        question: "What is the monthly deadline for depositing EPF and ESIC contributions?",
        answer: "EPF and ESIC contributions for a particular month must be deposited on or before the 15th of the following calendar month. Delays attract interest and penal damages under the respective labour statutes."
      },
      {
        question: "How does the choice of Income Tax regime affect TDS on employee salaries?",
        answer: "Employees must declare their intended regime (New or Old) at the start of the financial year. The employer is required to compute monthly TDS under Section 192 accordingly. Form 16 issued at year-end reflects this declared regime."
      }
    ],
    relatedInsightSlugs: [
      "new-vs-old-tax-regime-guide",
      "statutory-company-compliance-calendar"
    ],
    ctaLabel: "Streamline Your Payroll"
  }
];

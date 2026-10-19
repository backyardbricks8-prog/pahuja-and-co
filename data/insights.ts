export interface InsightArticle {
  slug: string;
  title: string;
  category: "Income Tax" | "GST" | "Corporate Law" | "Accounting Standards";
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  summary: string;
  source: string;
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string[];
    }[];
    takeaways: string[];
  };
}

export const INSIGHTS_DATA: InsightArticle[] = [
  {
    slug: "new-vs-old-tax-regime-guide",
    title: "Income Tax Regime Selection: Critical Assessment for Individuals and Salaried Professionals",
    category: "Income Tax",
    publishedDate: "October 14, 2026",
    updatedDate: "October 18, 2026",
    readTime: "5 min read",
    summary: "A practical breakdown of Section 115BAC versus the Old Tax Regime with standard deduction benefits, threshold calculations, and election rules for business and salaried taxpayers.",
    source: "Income Tax Act, 1961 & Annual Finance Acts",
    content: {
      intro: "Under current Indian direct tax provisions, the New Tax Regime under Section 115BAC serves as the default regime. Taxpayers must evaluate whether foregoing Chapter VI-A deductions (Section 80C, 80D, HRA, home loan interest) under the new regime produces lower total tax liability compared to the old regime.",
      sections: [
        {
          heading: "1. The Default Regime and Revised Slabs",
          body: [
            "The New Tax Regime provides streamlined tax brackets and an enhanced rebate under Section 87A for incomes up to the prescribed statutory threshold.",
            "Salaried individuals benefit from a standard deduction under the new regime, making it attractive for individuals who do not possess substantial tax-deductible investments or housing loans."
          ]
        },
        {
          heading: "2. When Does the Old Regime Outperform?",
          body: [
            "Taxpayers claiming substantial housing loan interest under Section 24(b) (up to ₹2,00,000 for self-occupied property), significant HRA exemption under Section 10(13A), and family medical insurance under Section 80D often still find the Old Regime financially advantageous.",
            "A precise comparative calculation before filing returns is strongly advised, especially when capital gains or multiple income sources are involved."
          ]
        },
        {
          heading: "3. Exercising the Option (Form 10-IEA Rules)",
          body: [
            "Individual taxpayers with business or professional income (ITR-3 or ITR-4) who wish to opt out of the new regime must submit Form 10-IEA on or before the due date specified under Section 139(1).",
            "Unlike salaried employees who can select the preferred regime annually at the time of filing, taxpayers with business income have limited flexibility to switch back once opted out."
          ]
        }
      ],
      takeaways: [
        "Calculate tax liability side-by-side prior to final return submission.",
        "Ensure Form 10-IEA is filed before the due date if opting out with business income.",
        "Reconcile AIS, TIS, and Form 26AS to avoid interest under Sections 234B/234C."
      ]
    }
  },
  {
    slug: "gst-itc-reconciliation-gstr-2b",
    title: "GSTR-2B Input Tax Credit Reconciliation: Practical Strategies to Avoid Notice ASMT-10",
    category: "GST",
    publishedDate: "September 28, 2026",
    updatedDate: "October 10, 2026",
    readTime: "6 min read",
    summary: "Actionable procedures for periodic matching between purchase registers and auto-populated GSTR-2B, handling vendor payment terms under Rule 37, and preventing credit blockage.",
    source: "CGST Rules (Rule 36(4), Rule 37 & 37A)",
    content: {
      intro: "Input Tax Credit (ITC) realization is one of the highest financial stakes in monthly business operations. Under Section 16(2)(aa) of the CGST Act, taxpayers cannot claim ITC unless the tax invoice or debit note has been communicated to them in the auto-generated GSTR-2B statement.",
      sections: [
        {
          heading: "1. The Strict Mandate of GSTR-2B Matching",
          body: [
            "Provisional or approximate credit claims have been entirely superseded by law. Every rupee of ITC reported in Table 4 of GSTR-3B must be verifiable against GSTR-2B.",
            "Unmatched entries must be parked in a temporary ledger rather than claimed immediately to eliminate interest exposure under Section 50(3)."
          ]
        },
        {
          heading: "2. Vendor Non-Filing & Rule 37A Reversal",
          body: [
            "Rule 37A mandates that if a recipient has availed ITC on an invoice and the supplier fails to furnish GSTR-3B by the statutory deadline, the recipient must reverse the said credit.",
            "Establishing a periodic vendor vendor-compliance scorecard helps identify non-compliant vendors early, preventing sudden working capital shocks."
          ]
        },
        {
          heading: "3. 180-Day Payment Rule (Rule 37)",
          body: [
            "Where a recipient fails to pay the supplier the invoice value along with tax within 180 days from the invoice date, the proportionate ITC must be reversed with interest.",
            "Clean accounts payable aging reports are indispensable to monitor aging vendor balances before the 180-day milestone is breached."
          ]
        }
      ],
      takeaways: [
        "Perform monthly pre-filing reconciliation between internal ERP/Tally and portal GSTR-2B.",
        "Communicate discrepancies to suppliers well before the 11th/13th of each filing month.",
        "Maintain documented audit trails for all reversals and re-availments."
      ]
    }
  },
  {
    slug: "section-43b-h-msme-payment-rule",
    title: "Section 43B(h) and MSME 45-Day Payment Rule: Compliance Safeguards for Businesses",
    category: "Corporate Law",
    publishedDate: "September 15, 2026",
    updatedDate: "October 05, 2026",
    readTime: "5 min read",
    summary: "Understanding the statutory disallowance under Section 43B(h) for delayed payments to Micro and Small enterprises, written agreements, and financial year-end precautions.",
    source: "Income Tax Act (Sec 43B(h)) & MSMED Act, 2006",
    content: {
      intro: "Section 43B(h) was introduced to safeguard the liquidity of micro and small enterprises by disallowing business expenses if payment to verified MSME suppliers is delayed beyond the time limit specified in Section 15 of the MSMED Act, 2006.",
      sections: [
        {
          heading: "1. Time Limits Under the Law",
          body: [
            "In the absence of a written agreement, payment must be released within 15 days of invoice or acceptance.",
            "Where a written agreement exists, the agreed period cannot exceed 45 days from the date of acceptance. Any agreement specifying more than 45 days is legally deemed void for Section 43B(h) purposes."
          ]
        },
        {
          heading: "2. Entities Covered vs. Excluded",
          body: [
            "The provision applies strictly to Micro and Small enterprises possessing valid Udyam Registration in Manufacturing or Service activities.",
            "Traders (wholesale and retail) are registered under Udyam solely for priority sector lending and are currently exempt from the strict payment timeframes under Section 43B(h)."
          ]
        },
        {
          heading: "3. Year-End Expense Disallowance",
          body: [
            "Unlike other provisions of Section 43B which permit deduction if paid before the return filing due date (Section 139(1)), Section 43B(h) requires payment within the fiscal year or within 15/45 days. Delayed payments cannot be claimed until the actual year of discharge.",
            "This can result in significant unexpected tax liabilities for businesses carrying overdue creditor balances."
          ]
        }
      ],
      takeaways: [
        "Collect and verify Udyam certificates from all active vendors.",
        "Flag micro and small suppliers separately in the chart of accounts.",
        "Execute formal written vendor purchase orders specifying clear 45-day payment terms."
      ]
    }
  },
  {
    slug: "statutory-company-compliance-calendar",
    title: "Private Limited Company Statutory Calendar: Annual ROC, DIR-3 KYC, and Board Governance",
    category: "Corporate Law",
    publishedDate: "August 20, 2026",
    updatedDate: "October 01, 2026",
    readTime: "7 min read",
    summary: "A practical compliance roadmap for directors of private limited companies covering Annual General Meetings, AOC-4 financial statement filing, and director disqualification prevention.",
    source: "Companies Act, 2013 & MCA Regulatory Guidelines",
    content: {
      intro: "Operating a private limited company in India requires ongoing administrative discipline. Even dormant or early-stage businesses must fulfill mandatory statutory filings to avoid hefty additional daily penalties under the Companies Act, 2013.",
      sections: [
        {
          heading: "1. Mandatory Annual ROC Filings",
          body: [
            "Form AOC-4 (Financial Statements, Balance Sheet, Profit & Loss, Board Report) must be filed within 30 days of the Annual General Meeting.",
            "Form MGT-7/7A (Annual Return) must be filed within 60 days of the AGM, detailing shareholding patterns and director details."
          ]
        },
        {
          heading: "2. Director Identity and KYC (DIR-3 KYC)",
          body: [
            "Every individual holding a Director Identification Number (DIN) must complete annual DIR-3 KYC by the 30th of September every year.",
            "Failure to complete KYC deactivates the DIN and renders directors incapable of signing any MCA forms or participating in statutory filings."
          ]
        },
        {
          heading: "3. Additional Regulatory Disclosures",
          body: [
            "Form DPT-3: Annual return of deposits and particulars of transactions not considered as deposits, due by June 30th.",
            "Form MSME-1: Half-yearly return detailing outstanding payments to micro and small enterprises exceeding 45 days."
          ]
        }
      ],
      takeaways: [
        "Hold minimum four board meetings per fiscal year with permissible gap intervals.",
        "Conduct AGM within 6 months of financial year closure (by September 30).",
        "Monitor MCA V3 portal status and keep DSCs active before statutory deadlines."
      ]
    }
  }
];

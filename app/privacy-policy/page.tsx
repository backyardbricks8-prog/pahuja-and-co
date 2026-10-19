import React from "react";
import Link from "next/link";
import { FIRM_DETAILS } from "@/data/firm";
import { ShieldCheck, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "Privacy Policy and data protection commitments of Pahuja & Co. Chartered Accountants, Janakpuri, New Delhi. Data minimisation and client confidentiality principles.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      <section className="border-b border-[#E7E3D9] bg-[#F5F2EB]/60 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-slate-900">Privacy Policy</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88E3E] mb-3">
            <ShieldCheck className="h-4 w-4" />
            <span>Data Protection &amp; Confidentiality</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0C1524]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs text-slate-500">
            Last Updated: October 2026 · Pahuja &amp; Co. Chartered Accountants
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-[#E7E3D9]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8 text-sm text-slate-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0C1524]">
              1. Commitment to Data Minimisation
            </h2>
            <p>
              Pahuja &amp; Co. Chartered Accountants operates with strict data minimisation discipline. Through our public website and consultation enquiry form, we collect only the information necessary to evaluate and respond to professional queries: namely your name, telephone number, optional email address, requested service category, and brief description of your inquiry.
            </p>
            <p>
              We specifically advise website visitors <strong>not</strong> to transmit sensitive financial credentials, NetBanking passwords, credit card numbers, or PAN/Aadhaar copies through the general public enquiry form.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-[#0C1524]">
              2. Professional Chartered Accountant Privilege &amp; ICAI Code of Ethics
            </h2>
            <p>
              Under the Chartered Accountants Act, 1949 and ethical standards issued by the Institute of Chartered Accountants of India (ICAI), all information entrusted to our firm in the course of professional engagements is treated as strictly confidential.
            </p>
            <p>
              We do not sell, rent, monetize, or disclose your personal or commercial contact information to any marketing agencies or third parties.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-[#0C1524]">
              3. Purpose and Use of Collected Information
            </h2>
            <p>Information submitted through our website is used solely to:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Directly contact you to clarify your requirement and provide advisory engagement details.</li>
              <li>Schedule telephone conferences or in-person meetings at our Janakpuri office.</li>
              <li>Fulfill statutory record-keeping and audit trail obligations required under Indian law.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-[#0C1524]">
              4. Data Retention &amp; Security Measures
            </h2>
            <p>
              Enquiries are retained only as long as necessary for legitimate business evaluation or as mandated by applicable statutory compliance guidelines. We implement technical and administrative controls including HTTPS transport encryption, restricted server access, and rate-limiting abuse protection.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-[#0C1524]">
              5. Contact for Privacy Matters
            </h2>
            <p>
              If you have any questions or requests regarding your contact records, please contact our administrative desk:
            </p>
            <div className="p-4 bg-white border border-[#E7E3D9] text-xs text-slate-700 space-y-1">
              <div className="font-semibold text-slate-900">{FIRM_DETAILS.name}</div>
              <div>Attn: Privacy &amp; Client Communications</div>
              <div>{FIRM_DETAILS.address.full}</div>
              <div>Email: {FIRM_DETAILS.email}</div>
              <div>Office Phone: {FIRM_DETAILS.phones.officeDisplay}</div>
            </div>
          </div>

          <div className="pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#0C1524]"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Homepage</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

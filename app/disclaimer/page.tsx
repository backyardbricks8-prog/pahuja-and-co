import React from "react";
import Link from "next/link";
import { FIRM_DETAILS } from "@/data/firm";
import { ShieldAlert, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Legal & Regulatory Disclaimer | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "Statutory disclaimer under Institute of Chartered Accountants of India (ICAI) guidelines. Informational notice regarding website content.",
};

export default function DisclaimerPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      <section className="border-b border-[#E7E3D9] bg-[#F5F2EB]/60 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-slate-900">Legal Disclaimer</span>
          </nav>

          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88E3E] mb-3">
            <ShieldAlert className="h-4 w-4" />
            <span>Statutory Compliance Notice</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0C1524]">
            Legal &amp; Professional Disclaimer
          </h1>
          <p className="mt-3 text-xs text-slate-500">
            Applicable to all visitors of pahujaandco.com · Pahuja &amp; Co. Chartered Accountants
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 border-b border-[#E7E3D9]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 space-y-8 text-sm text-slate-700 leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-[#0C1524]">
              1. ICAI Prohibition of Solicitation and Advertisement
            </h2>
            <p>
              As per the guidelines and Code of Ethics prescribed by the <strong>Institute of Chartered Accountants of India (ICAI)</strong>, Chartered Accountants and Chartered Accountancy firms are strictly prohibited from soliciting clients or advertising their professional services.
            </p>
            <p>
              By accessing this website, the user acknowledges and confirms that:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li>The user is seeking information regarding Pahuja &amp; Co. of their own volition and accord.</li>
              <li>There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from Pahuja &amp; Co. or any of its partners to solicit work through this website.</li>
              <li>The information provided on this website is made available to the user solely for informational purposes and to facilitate general awareness.</li>
            </ul>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-[#0C1524]">
              2. No Professional-Client Relationship Formed by Website Visit
            </h2>
            <p>
              Browsing this website, downloading information, or submitting an initial enquiry through the online form does not automatically establish a formal Chartered Accountant–client relationship. A formal professional relationship is established solely upon mutual execution of a formal Letter of Engagement outlining scope, terms, and agreed statutory responsibilities.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-[#0C1524]">
              3. Informational Nature of Tax and Compliance Articles
            </h2>
            <p>
              Content, guides, deadline reminders, and commentaries published in our Knowledge Centre or across this website reflect general statutory overviews under Indian direct and indirect tax laws, the Companies Act 2013, and related regulations at the time of publication.
            </p>
            <p>
              Such information must not be treated as tailored legal, financial, accounting, or tax advice. Readers are strongly cautioned not to act upon any matter without consulting a qualified Chartered Accountant regarding their specific factual scenario.
            </p>
          </div>

          <div className="space-y-3 border-t border-slate-100 pt-6">
            <h2 className="text-lg font-bold text-[#0C1524]">
              4. External Portals &amp; Government Links
            </h2>
            <p>
              References to government portals (e.g. Income Tax e-Filing, GST Portal, MCA V3, CBIC, EPFO) or external mapping services are provided solely for user reference and convenience. Pahuja &amp; Co. holds no control over external third-party servers, availability, or policies.
            </p>
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

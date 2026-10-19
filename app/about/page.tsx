import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FIRM_DETAILS } from "@/data/firm";
import {
  ShieldCheck,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Scale,
  Clock,
  Info
} from "lucide-react";

export const metadata = {
  title: "About Us | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "Learn about Pahuja & Co., an independent Chartered Accountancy firm in Janakpuri, New Delhi. Firm background, approach, ethical values, and verified credentials.",
};

export default function AboutPage() {
  const practiceValues = [
    {
      title: "Statutory Diligence",
      description: "Every balance sheet, tax calculation, and audit certificate adheres strictly to ICAI standards and applicable Indian statutes."
    },
    {
      title: "Ethical Confidentiality",
      description: "Governed by the Chartered Accountants Act, 1949. Client books, financial positions, and operational trade details remain strictly privileged."
    },
    {
      title: "Senior Partner Involvement",
      description: "Direct, personal chartered accountant oversight on all filing workflows rather than delegating complex matters to unmonitored staff."
    },
    {
      title: "Transparent & Direct Communication",
      description: "No ambiguous jargon or unexpected cost additions. Clear recommendations explained in practical business terms."
    }
  ];

  const credentialsAndVerification = [
    {
      label: "Firm Name",
      value: "Pahuja & Co. Chartered Accountants",
      status: "Verified",
    },
    {
      label: "Hindi Name",
      value: "पाहुजा & को. चार्टर्ड अकाउंटेंट्स",
      status: "Verified",
    },
    {
      label: "Office Address",
      value: "C-2/271, Ground Floor, Janakpuri, New Delhi, Delhi – 110058",
      status: "Verified",
    },
    {
      label: "Telephones",
      value: "+91 11 4562 6500 (Office) · +91 98710 12900 (Mobile)",
      status: "Verified",
    },
    {
      label: "Official Email",
      value: "puneet@pahujaandco.com",
      status: "Verified",
    },
    {
      label: "Google Client Rating",
      value: "4.0 / 5.0 (6 Verified Reviews)",
      status: "Verified",
    },
    {
      label: "ICAI Firm Registration Number (FRN)",
      value: "Available upon formal engagement verification",
      status: "Marked for Firm Confirmation",
    },
    {
      label: "Partner Biographies & Credentials",
      value: "Individual partner profiles to be published upon formal sign-off",
      status: "Marked for Firm Confirmation",
    }
  ];

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Header & Breadcrumb */}
      <section className="border-b border-[#E7E3D9] bg-[#F5F2EB]/60 py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-slate-900">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
              <span>Firm Background &amp; Values</span>
              <span aria-hidden="true">·</span>
              <span>Janakpuri, New Delhi</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1524] mt-3">
              About Pahuja &amp; Co.
            </h1>
            <p className="mt-2 text-base text-slate-500 font-medium">
              {FIRM_DETAILS.hindiName}
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              An independent Chartered Accountancy practice dedicated to regulatory clarity, statutory integrity, and practical business growth across Delhi NCR and India.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-16 lg:py-24 border-b border-[#E7E3D9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Story & Approach (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
                  Firm Approach
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0C1524]">
                  Clarity in Compliance. Confidence in Every Decision.
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  Headquartered in Janakpuri, New Delhi, Pahuja &amp; Co. serves as an essential compliance and advisory partner for private limited enterprises, partnership firms, family businesses, startups, and individual taxpayers.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  In today&apos;s fast-changing regulatory landscape—characterized by computerized faceless assessments, automated GST reconciliations, and stringent MCA disclosure mandates—even minor oversights can lead to financial penalties or operational friction. Our practice focuses on building robust systems that prevent compliance lapses before they materialize.
                </p>
              </div>

              {/* Core Values */}
              <div className="border-t border-[#E7E3D9] pt-8 space-y-6">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0C1524]">
                  <Scale className="h-4 w-4 text-[#B88E3E]" />
                  <span>Our Guiding Values</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {practiceValues.map((val, idx) => (
                    <div key={idx} className="border border-[#E7E3D9] bg-white p-5 space-y-1.5">
                      <div className="font-bold text-[#0C1524] text-sm">
                        {val.title}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Credentials Table */}
              <div className="border-t border-[#E7E3D9] pt-8 space-y-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0C1524]">
                  <FileCheck className="h-4 w-4 text-emerald-600" />
                  <span>Verified Firm Credentials &amp; Registry Details</span>
                </div>
                <p className="text-xs text-slate-600">
                  In compliance with professional transparency and our commitment to truthful representation, the following details reflect independently verified public records:
                </p>
                <div className="border border-[#E7E3D9] bg-white overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-[#FAF8F5] border-b border-[#E7E3D9] text-[#0C1524] font-semibold">
                      <tr>
                        <th className="px-4 py-3">Credential / Detail</th>
                        <th className="px-4 py-3">Record Value</th>
                        <th className="px-4 py-3 text-right">Verification Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E7E3D9] text-slate-700">
                      {credentialsAndVerification.map((item, idx) => (
                        <tr key={idx} className="hover:bg-[#FAF8F5]/50">
                          <td className="px-4 py-3 font-semibold text-slate-900">{item.label}</td>
                          <td className="px-4 py-3">{item.value}</td>
                          <td className="px-4 py-3 text-right">
                            {item.status === "Verified" ? (
                              <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                <span>Verified</span>
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-amber-700 font-medium">
                                <Info className="h-3.5 w-3.5 text-amber-600" />
                                <span>Firm Sign-off Pending</span>
                              </span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column: Office Photography & Action (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border border-[#E7E3D9] bg-white p-3 shadow-xs">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                  <Image
                    src="/images/delhi_office_building.jpg"
                    alt="Pahuja & Co. Chartered Accountants building in Janakpuri, New Delhi"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3 text-xs text-slate-600 space-y-1">
                  <div className="font-semibold text-slate-900">{FIRM_DETAILS.name}</div>
                  <div>{FIRM_DETAILS.address.full}</div>
                </div>
              </div>

              {/* Consultation Card */}
              <div className="border border-[#E7E3D9] bg-[#F5F2EB] p-6 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#0C1524]">
                  Arrange an In-Person Meeting
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our ground-floor Janakpuri office is open Monday through Saturday for document drop-off and structured advisory consultations.
                </p>
                <div className="space-y-2 text-xs text-slate-800 pt-1">
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-[#B88E3E]" />
                    <span>Office: {FIRM_DETAILS.phones.officeDisplay}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-emerald-600" />
                    <span>Mobile: {FIRM_DETAILS.phones.mobileDisplay}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-[#B88E3E]" />
                    <span>{FIRM_DETAILS.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-slate-400" />
                    <span>{FIRM_DETAILS.hours.weekdays}</span>
                  </div>
                </div>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="block text-center border border-[#0C1524] bg-[#0C1524] py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#1E293B]"
                  >
                    Book a Consultation
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Link to Practice Areas */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            Ready to explore how we support your statutory compliance and growth?
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-semibold uppercase tracking-wider text-[#0C1524] hover:text-[#B88E3E]"
          >
            <span>Explore All 6 Practice Areas</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { ArrowRight, CheckCircle2, ShieldAlert, ArrowUpRight } from "lucide-react";

export const metadata = {
  title: "Professional Services | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "Explore our complete range of Chartered Accountancy services: Corporate Services, Audit & Assurance, Income Tax, GST Services, Accounting, and Payroll in New Delhi.",
};

export default function ServicesPage() {
  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Header Banner */}
      <section className="border-b border-[#E7E3D9] bg-[#F5F2EB]/60 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-slate-900">Services</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
              Pahuja &amp; Co. Chartered Accountants
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1524] mt-3">
              Practice Areas &amp; Advisory Scope
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We provide end-to-end statutory accounting, tax advisory, and audit services for private limited companies, LLPs, partnerships, startups, and individual taxpayers.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 border-b border-[#E7E3D9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={service.slug}
              className="border border-[#E7E3D9] bg-white p-8 lg:p-12 transition-all hover:border-slate-400"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left (5 cols): Number, Title, Description, CTA */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-base font-bold text-[#B88E3E]">
                      {service.number}.
                    </span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Practice Category
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0C1524]">
                    {service.title}
                  </h2>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="pt-2 text-xs text-slate-500">
                    <strong className="text-slate-700">Target Audience:</strong> {service.targetAudience}
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 border border-[#0C1524] bg-[#0C1524] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#1E293B]"
                    >
                      <span>Explore In Depth</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="inline-flex items-center gap-2 border border-[#E7E3D9] bg-[#FAF8F5] px-5 py-2.5 text-xs font-medium uppercase tracking-wider text-slate-800 hover:border-slate-400"
                    >
                      <span>Enquire</span>
                    </Link>
                  </div>
                </div>

                {/* Right (7 cols): Client Challenges & Deliverables Grid */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 bg-[#FAF8F5] p-6 border border-[#E7E3D9]">
                  {/* Common Client Challenges */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 mb-3">
                      <ShieldAlert className="h-4 w-4 text-[#B88E3E]" />
                      <span>Challenges We Resolve</span>
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-700">
                      {service.clientChallenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="flex items-start gap-2">
                          <span className="text-[#B88E3E] font-bold">•</span>
                          <span className="leading-relaxed">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Core Deliverables */}
                  <div>
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                      <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                      <span>Deliverables &amp; Scope</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {service.deliverables.map((item, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Consultation Prompt */}
      <section className="py-16 bg-[#F5F2EB]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-[#0C1524]">
            Uncertain which service tier applies to your business?
          </h3>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            We provide an initial structural compliance review to clarify statutory obligations, turnover thresholds, and filing schedules.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#0C1524] bg-[#0C1524] px-7 py-3 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#1E293B]"
            >
              <span>Schedule a Preliminary Assessment</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

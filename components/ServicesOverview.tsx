import React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

export default function ServicesOverview() {
  return (
    <section className="w-full border-b border-[#E7E3D9] bg-[#FAF8F5] py-16 lg:py-24" id="services">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#E7E3D9] pb-8">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
              Core Practice Areas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0C1524] mt-2">
              Structured Professional Services for Businesses &amp; Directors
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 leading-relaxed">
            Every service is executed with statutory precision, personal oversight, and transparent timelines.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between border border-[#E7E3D9] bg-white p-7 transition-all duration-300 hover:border-slate-400 hover:shadow-md"
            >
              <div>
                {/* Number & Category */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5">
                  <span className="font-mono text-sm font-semibold tracking-wider text-[#B88E3E]">
                    {service.number}.
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-slate-500 font-medium">
                    New Delhi Practice
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-[#0C1524] group-hover:text-[#B88E3E] transition-colors">
                  {service.title}
                </h3>

                {/* Summary */}
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {service.shortSummary}
                </p>

                {/* Scope highlights */}
                <div className="mt-5 space-y-2 pt-4 border-t border-slate-100">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                    Key Deliverables:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.deliverables.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 text-[#B88E3E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-6 mt-6 border-t border-slate-100">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0C1524] group-hover:text-[#B88E3E] transition-colors"
                >
                  <span>Detailed Scope &amp; Next Steps</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 border border-[#E7E3D9] bg-[#F5F2EB] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-bold text-[#0C1524]">
              Have a multi-faceted requirement or department notice?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              We frequently handle combined corporate, GST, and direct tax compliance audits for growing companies.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border border-[#0C1524] bg-[#0C1524] px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-[#1E293B] shrink-0"
          >
            <span>Request Assessment</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

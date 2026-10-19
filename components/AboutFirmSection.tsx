import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firm";

export default function AboutFirmSection() {
  const commitments = [
    {
      title: "Direct Senior-Level Attention",
      description: "Your matters are reviewed directly by senior chartered accountancy professionals, not delegated to junior interns."
    },
    {
      title: "Statutory Precision & Zero Shortcuts",
      description: "Rigorous alignment with ICAI auditing standards, the Companies Act 2013, GST rules, and CBDT regulations."
    },
    {
      title: "Transparent & Accessible Communication",
      description: "Clear explanations in plain business terms without unnecessary legal jargon or unexpected billing surprises."
    },
    {
      title: "Proactive Filing & Deadline Vigilance",
      description: "Systematic monitoring of statutory deadlines to eliminate late fees, interest, and director disqualification risks."
    }
  ];

  return (
    <section className="w-full border-b border-[#E7E3D9] bg-[#FAF8F5] py-16 lg:py-24" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with architectural detail (5 cols) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="border border-[#E7E3D9] bg-white p-3 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-100">
                <Image
                  src="/images/consultation_workspace.jpg"
                  alt="Pahuja & Co. private conference and advisory desk"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-3 p-2 bg-[#FAF8F5] border border-stone-100 text-xs text-slate-600">
                <div className="font-semibold text-[#0C1524]">{FIRM_DETAILS.name}</div>
                <div>{FIRM_DETAILS.address.full}</div>
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative (7 cols) */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
              About The Firm
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0C1524] leading-tight">
              A Trusted Partner for Indian Compliance and Financial Governance
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              Pahuja &amp; Co. is an independent Chartered Accountancy practice established in Janakpuri, New Delhi. We assist entrepreneurs, established enterprises, startups, and individual taxpayers with comprehensive accounting, audit, tax, and corporate governance solutions.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              In an era of rapid regulatory changes—from evolving GST reconciliation mandates and e-invoicing thresholds to MCA portal updates and direct tax faceless proceedings—our objective is simple: provide clarity so clients can make informed financial decisions with total confidence.
            </p>

            {/* Commitments List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commitments.map((item, idx) => (
                <div key={idx} className="border border-[#E7E3D9] bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0C1524]">
                    <CheckCircle2 className="h-4 w-4 text-[#B88E3E] shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 border border-[#0C1524] bg-[#0C1524] px-6 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-[#1E293B]"
              >
                <span>Read Full Practice Profile</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-[#E7E3D9] bg-white px-6 py-3 text-xs font-medium uppercase tracking-wider text-slate-800 transition-all hover:border-slate-400"
              >
                <span>Visit Our Office</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

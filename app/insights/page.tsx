import React from "react";
import Link from "next/link";
import { INSIGHTS_DATA } from "@/data/insights";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";

export const metadata = {
  title: "Knowledge Centre & Regulatory Updates | Pahuja & Co. Chartered Accountants",
  description:
    "Practical tax guides, GST compliance rules, ROC filing deadlines, and corporate law insights prepared by Chartered Accountants in New Delhi.",
};

export default function InsightsPage() {
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
            <span className="font-semibold text-slate-900">Insights</span>
          </nav>

          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#B88E3E]">
              Pahuja &amp; Co. Knowledge Base
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#0C1524] mt-3">
              Tax, GST &amp; Compliance Insights
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Curated regulatory analysis, statutory deadline summaries, and practical advisory for business owners, finance heads, and individual taxpayers.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Listing */}
      <section className="py-16 lg:py-24 border-b border-[#E7E3D9]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {INSIGHTS_DATA.map((article) => (
              <article
                key={article.slug}
                className="flex flex-col justify-between border border-[#E7E3D9] bg-white p-8 transition-all hover:border-slate-400 hover:shadow-sm"
              >
                <div>
                  {/* Clean unboxed metadata (zero pill discipline) */}
                  <div className="flex items-center gap-2 text-xs text-[#B88E3E] font-medium mb-3">
                    <span>{article.category}</span>
                    <span aria-hidden="true" className="text-slate-300">·</span>
                    <span className="flex items-center gap-1 text-slate-500 font-normal">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0C1524] leading-snug hover:text-[#B88E3E] transition-colors">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>

                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {article.summary}
                  </p>

                  <div className="mt-4 text-xs text-slate-500">
                    <span className="font-semibold text-slate-700">Source Basis:</span> {article.source}
                  </div>
                </div>

                <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-3.5 w-3.5 text-slate-400" />
                    <span>Published: {article.publishedDate}</span>
                  </div>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#0C1524] hover:text-[#B88E3E] transition-colors"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Legal / Editorial Note */}
      <section className="py-12 bg-[#FAF8F5]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center text-xs text-slate-500 leading-relaxed">
          <p>
            Disclaimer: Articles published in our Knowledge Centre provide general educational commentary on tax and corporate statutes in India. Because tax provisions depend upon specific factual circumstances, readers should seek professional consultation before acting upon any statutory interpretation.
          </p>
        </div>
      </section>
    </div>
  );
}

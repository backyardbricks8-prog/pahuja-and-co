import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { INSIGHTS_DATA } from "@/data/insights";
import { ArrowLeft, Calendar, Clock, BookOpen, CheckCircle, ArrowRight } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHTS_DATA.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Pahuja & Co. Knowledge Centre`,
    description: article.summary,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = INSIGHTS_DATA.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full bg-[#FAF8F5]">
      {/* Header & Breadcrumb */}
      <section className="border-b border-[#E7E3D9] bg-[#F5F2EB]/60 py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 mb-6">
            <Link href="/" className="hover:text-slate-900 transition-colors">
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/insights" className="hover:text-slate-900 transition-colors">
              Knowledge Centre
            </Link>
            <span aria-hidden="true">/</span>
            <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
              {article.category}
            </span>
          </nav>

          <div className="flex items-center gap-2 text-xs text-[#B88E3E] font-medium mb-3">
            <span>{article.category}</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="flex items-center gap-1 text-slate-500 font-normal">
              <Clock className="h-3 w-3" />
              <span>{article.readTime}</span>
            </span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span className="text-slate-500">Updated: {article.updatedDate}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0C1524] leading-tight">
            {article.title}
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {article.summary}
          </p>

          <div className="mt-6 pt-6 border-t border-[#E7E3D9] flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              <span className="font-semibold text-slate-700">Author &amp; Review:</span> Pahuja &amp; Co. Editorial Desk
            </div>
            <div>
              <span className="font-semibold text-slate-700">Statutory Source:</span> {article.source}
            </div>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 lg:py-20 border-b border-[#E7E3D9]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-10">
            {/* Intro Lead */}
            <div className="border-l-2 border-[#B88E3E] pl-4 sm:pl-6 py-1">
              <p className="text-base sm:text-lg text-slate-800 font-medium leading-relaxed">
                {article.content.intro}
              </p>
            </div>

            {/* Sections */}
            {article.content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-4 pt-4 border-t border-slate-100">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0C1524]">
                  {sec.heading}
                </h2>
                <div className="space-y-3">
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {/* Key Practical Takeaways */}
            <div className="mt-12 border border-[#E7E3D9] bg-white p-6 sm:p-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0C1524]">
                <CheckCircle className="h-4 w-4 text-emerald-600" />
                <span>Executive Summary &amp; Compliance Takeaways</span>
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                {article.content.takeaways.map((item, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5">
                    <span className="text-[#B88E3E] font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related Practice Area Link */}
            <div className="border border-[#E7E3D9] bg-white p-5 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B88E3E]">
                  Related Professional Service
                </span>
                <div className="text-sm font-bold text-[#0C1524] mt-0.5">
                  {article.category === "Income Tax" && "Direct Tax Planning & Return Filing"}
                  {article.category === "GST" && "GST Registration, Return Filing & ITC Reconciliation"}
                  {article.category === "Corporate Law" && "Corporate Services & Annual ROC Compliances"}
                  {article.category === "Accounting Standards" && "Structured Accounting & Financial Statement Preparation"}
                </div>
              </div>
              <Link
                href={
                  article.category === "Income Tax"
                    ? "/services/income-tax"
                    : article.category === "GST"
                    ? "/services/gst"
                    : article.category === "Corporate Law"
                    ? "/services/corporate-services"
                    : "/services/accounting"
                }
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0C1524] hover:text-[#B88E3E] transition-colors whitespace-nowrap"
              >
                <span>View Practice Area</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Consultation Callout */}
            <div className="border border-[#E7E3D9] bg-[#F5F2EB] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-[#0C1524]">
                  Need professional advice on your company&apos;s filing?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Connect with Pahuja &amp; Co. at our Janakpuri office for a tailored review.
                </p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-[#0C1524] bg-[#0C1524] px-6 py-3 text-xs font-medium uppercase tracking-wider text-white hover:bg-[#1E293B] shrink-0"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Back link */}
            <div className="pt-6">
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-600 hover:text-[#0C1524] transition-colors"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                <span>Back to Knowledge Centre</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React from "react";
import { SERVICES_DATA } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Income Tax Services & Advisory | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "Direct tax planning, corporate and individual ITR filing, Advance Tax forecasting, TDS returns, and notice response advisory by Pahuja & Co., Janakpuri, New Delhi.",
};

export default function IncomeTaxPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "income-tax");
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}

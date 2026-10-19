import React from "react";
import { SERVICES_DATA } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Payroll Compliance & PF/ESI Services | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "Confidential payroll processing, EPF & ESIC monthly returns, Professional Tax, Form 16, and labour compliance advisory by Pahuja & Co., New Delhi.",
};

export default function PayrollPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "payroll");
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}

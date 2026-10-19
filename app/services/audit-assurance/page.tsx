import React from "react";
import { SERVICES_DATA } from "@/data/services";
import ServiceDetailTemplate from "@/components/ServiceDetailTemplate";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Audit & Assurance Services | Pahuja & Co. Chartered Accountants New Delhi",
  description:
    "Statutory audits under Companies Act 2013, Tax Audits under Section 44AB, internal audit controls, and certification services by Pahuja & Co., New Delhi.",
};

export default function AuditAssurancePage() {
  const service = SERVICES_DATA.find((s) => s.slug === "audit-assurance");
  if (!service) notFound();

  return <ServiceDetailTemplate service={service} />;
}

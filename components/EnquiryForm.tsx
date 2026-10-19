"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, PhoneCall } from "lucide-react";
import { FIRM_DETAILS } from "@/data/firm";

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  consent: boolean;
  website_hp: string; // Honeypot
}

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "Corporate Services",
  message: "",
  consent: true,
  website_hp: ""
};

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  consent?: string;
}

export default function EnquiryForm({ initialService }: { initialService?: string }) {
  const [formData, setFormData] = useState<FormState>({
    ...INITIAL_STATE,
    service: initialService || "Corporate Services"
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successData, setSuccessData] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Full name is required (at least 2 characters).";
    }

    const phoneClean = formData.phone.trim();
    if (!phoneClean || phoneClean.length < 8) {
      newErrors.phone = "Valid contact number is required (e.g. 98710 12900).";
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email address.";
      }
    }

    if (!formData.service) {
      newErrors.service = "Please select a service category.";
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please describe your query briefly (minimum 10 characters).";
    }

    if (!formData.consent) {
      newErrors.consent = "You must confirm consent for our office to contact you.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Unable to submit enquiry at this time.");
      }

      setSuccessData({
        referenceId: data.referenceId,
        message: data.message
      });
      setFormData(INITIAL_STATE);
      setErrors({});
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission failed. Please call our office directly.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border border-[#E7E3D9] bg-white p-6 sm:p-8 lg:p-10 shadow-xs">
      <div className="mb-6">
        <span className="text-[11px] font-semibold uppercase tracking-wider text-[#B88E3E]">
          Consultation Request
        </span>
        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0C1524] mt-1">
          Initiate a Professional Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          Direct, partner-reviewed consultation on taxation, audit, GST, or corporate advisory matters.
        </p>
      </div>

      {successData ? (
        <div className="border border-[#E7E3D9] bg-[#FAF8F5] p-6 space-y-4">
          <div className="flex items-center gap-3 text-emerald-800">
            <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0" />
            <div>
              <h4 className="font-bold text-sm sm:text-base">Enquiry Successfully Registered</h4>
              <p className="text-xs text-slate-600">Reference: <span className="font-mono font-bold text-slate-900">{successData.referenceId}</span></p>
            </div>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            {successData.message}
          </p>
          <div className="pt-3 border-t border-[#E7E3D9] text-xs text-slate-600 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-slate-800">
              <PhoneCall className="h-4 w-4 text-[#B88E3E]" />
              <span>For immediate priority matters: {FIRM_DETAILS.phones.officeDisplay}</span>
            </div>
            <button
              type="button"
              onClick={() => setSuccessData(null)}
              className="text-xs font-semibold text-[#0C1524] underline hover:text-[#B88E3E] text-left"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
          {/* Honeypot field (hidden from legitimate users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_hp">Leave this empty</label>
            <input
              type="text"
              id="website_hp"
              name="website_hp"
              value={formData.website_hp}
              onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {submitError && (
            <div className="flex items-start gap-2.5 border border-red-200 bg-red-50/70 p-3.5 text-xs text-red-800">
              <AlertCircle className="h-4 w-4 shrink-0 text-red-600 mt-0.5" />
              <div>
                <strong className="font-semibold block">Submission Error</strong>
                <span>{submitError}</span>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Rajesh Kumar"
                className={`w-full border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
                  errors.name
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                    : "border-[#E7E3D9] focus:border-[#0C1524] focus:ring-[#0C1524]"
                }`}
              />
              {errors.name && <p className="text-[11px] text-red-600 mt-1">{errors.name}</p>}
            </div>

            {/* Contact Phone */}
            <div>
              <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+91 98710 12900"
                className={`w-full border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
                  errors.phone
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                    : "border-[#E7E3D9] focus:border-[#0C1524] focus:ring-[#0C1524]"
                }`}
              />
              {errors.phone && <p className="text-[11px] text-red-600 mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="rajesh@example.com"
                className={`w-full border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                    : "border-[#E7E3D9] focus:border-[#0C1524] focus:ring-[#0C1524]"
                }`}
              />
              {errors.email && <p className="text-[11px] text-red-600 mt-1">{errors.email}</p>}
            </div>

            {/* Service Category */}
            <div>
              <label htmlFor="service" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
                Service Required <span className="text-red-500">*</span>
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full border border-[#E7E3D9] bg-white px-3.5 py-2.5 text-sm text-slate-900 focus:border-[#0C1524] focus:outline-none focus:ring-1 focus:ring-[#0C1524]"
              >
                <option value="Corporate Services">Corporate Services &amp; ROC</option>
                <option value="Audit & Assurance">Audit &amp; Assurance (Statutory / Tax Audit)</option>
                <option value="Income Tax">Income Tax Advisory &amp; Return Filing</option>
                <option value="GST Services">GST Registration, Filings &amp; ITC</option>
                <option value="Accounting">Accounting &amp; Bookkeeping</option>
                <option value="Payroll">Payroll Compliance &amp; Labour Filings</option>
                <option value="Notice & Scrutiny Advisory">Department Notice / Scrutiny Assistance</option>
                <option value="General Professional Consultation">General Professional Consultation</option>
              </select>
              {errors.service && <p className="text-[11px] text-red-600 mt-1">{errors.service}</p>}
            </div>
          </div>

          {/* Query Details */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-1.5">
              Enquiry Summary <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Please provide brief context regarding your requirement, entity type, or timeline..."
              className={`w-full border px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-1 ${
                errors.message
                  ? "border-red-400 focus:border-red-500 focus:ring-red-500"
                  : "border-[#E7E3D9] focus:border-[#0C1524] focus:ring-[#0C1524]"
              }`}
            />
            {errors.message && <p className="text-[11px] text-red-600 mt-1">{errors.message}</p>}
          </div>

          {/* Consent Checkbox */}
          <div>
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.consent}
                onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                className="mt-0.5 h-4 w-4 rounded-none border-[#E7E3D9] text-[#0C1524] focus:ring-[#0C1524]"
              />
              <span className="text-xs text-slate-600 leading-normal">
                I authorize Pahuja &amp; Co. Chartered Accountants to contact me via phone or email regarding this specific enquiry.
              </span>
            </label>
            {errors.consent && <p className="text-[11px] text-red-600 mt-1">{errors.consent}</p>}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-[#0C1524] bg-[#0C1524] px-7 py-3 text-xs font-medium uppercase tracking-wider text-white transition-all hover:bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B88E3E] disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Submitting Enquiry...</span>
                </>
              ) : (
                <>
                  <span>Submit Consultation Request</span>
                  <Send className="h-3.5 w-3.5" />
                </>
              )}
            </button>
          </div>

          <div className="pt-2 border-t border-[#E7E3D9] text-[11px] text-slate-500">
            Privacy notice: We respect your privacy. No confidential passwords, account credentials, or government IDs should be transmitted through this contact form.
          </div>
        </form>
      )}
    </div>
  );
}

import { NextRequest, NextResponse } from "next/server";

interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  service: string;
  message: string;
  consent: boolean;
  website_hp?: string; // Honeypot field for bot mitigation
}

// In-memory submissions log for developer audit / verified records
// In production, this can seamlessly route to firm email / authenticated CRM
interface LoggedEnquiry {
  referenceId: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  messageSnippet: string;
  timestamp: string;
  status: "received" | "pending_review";
}

const recentEnquiries: LoggedEnquiry[] = [];

// Rate limiting in-memory store (sliding window per IP/client)
const ipRequestLog: Map<string, number[]> = new Map();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute window
  const maxRequests = 5;

  const timestamps = ipRequestLog.get(ip) || [];
  const validTimestamps = timestamps.filter(t => now - t < windowMs);

  if (validTimestamps.length >= maxRequests) {
    return true;
  }

  validTimestamps.push(now);
  ipRequestLog.set(ip, validTimestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown-client";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many enquiries submitted in a short period. Please call our Janakpuri office directly at +91 11 4562 6500." },
        { status: 429 }
      );
    }

    const body = (await req.json()) as Partial<EnquiryPayload>;

    // 1. Honeypot check: If the hidden honeypot field is filled, silently reject or flag
    if (body.website_hp && body.website_hp.trim() !== "") {
      return NextResponse.json(
        { success: true, referenceId: "PC-REF-VALIDATED" },
        { status: 200 }
      );
    }

    // 2. Server-side validation
    const name = body.name?.trim();
    const phone = body.phone?.trim();
    const email = body.email?.trim() || "";
    const service = body.service?.trim();
    const message = body.message?.trim();
    const consent = body.consent;

    if (!name || name.length < 2 || name.length > 80) {
      return NextResponse.json(
        { error: "Please provide a valid full name (2–80 characters)." },
        { status: 400 }
      );
    }

    if (!phone || phone.length < 8 || phone.length > 18) {
      return NextResponse.json(
        { error: "Please provide a valid contact phone number (e.g. 98710 12900 or with country code)." },
        { status: 400 }
      );
    }

    // Basic phone pattern check (allows digits, +, spaces, hyphens)
    const phoneRegex = /^[+]?[\d\s-]{8,18}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: "Phone number format is invalid. Please include valid digits." },
        { status: 400 }
      );
    }

    if (email && email.length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email) || email.length > 120) {
        return NextResponse.json(
          { error: "Please enter a valid email address, or leave blank if contacting by phone only." },
          { status: 400 }
        );
      }
    }

    if (!service || service.length < 2) {
      return NextResponse.json(
        { error: "Please select a service category for your enquiry." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10 || message.length > 1500) {
      return NextResponse.json(
        { error: "Please describe your query briefly (between 10 and 1,500 characters)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Please confirm your consent for Pahuja & Co. to respond to your enquiry." },
        { status: 400 }
      );
    }

    // Generate authentic transaction reference code
    const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const referenceId = `PC-${dateStr}-${randomSuffix}`;

    const record: LoggedEnquiry = {
      referenceId,
      name,
      phone,
      email: email || "Not provided",
      service,
      messageSnippet: message.slice(0, 100),
      timestamp: new Date().toISOString(),
      status: "received"
    };

    recentEnquiries.unshift(record);
    if (recentEnquiries.length > 100) recentEnquiries.pop();

    // Log operational metadata (no sensitive credentials logged)
    console.log(`[Pahuja & Co. Enquiry] Ref: ${referenceId} | Service: ${service} | Client: ${name}`);

    return NextResponse.json(
      {
        success: true,
        referenceId,
        message: "Your consultation request has been received. Our team will review your requirement and reach out within 1 business day.",
        contact: {
          office: "+91 11 4562 6500",
          mobile: "+91 98710 12900",
          email: "puneet@pahujaandco.com"
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[Enquiry Handler Error]", error);
    return NextResponse.json(
      { error: "An unexpected server error occurred while processing your enquiry. Please contact us directly by phone at +91 11 4562 6500 or email puneet@pahujaandco.com." },
      { status: 500 }
    );
  }
}

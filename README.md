# Pahuja & Co. Chartered Accountants — Website

Official web presence for **Pahuja & Co. Chartered Accountants** (पाहुजा & को. चार्टर्ड अकाउंटेंट्स), an independent Chartered Accountancy practice located in Janakpuri, New Delhi.

Built with **Next.js 15 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**, designed in a Swiss-inspired editorial aesthetic with ivory/off-white background, deep navy typography, and muted-gold accents.

---

## 🏛️ Firm Overview
- **Firm Name**: Pahuja & Co. Chartered Accountants
- **Hindi Name**: पाहुजा & को. चार्टर्ड अकाउंटेंट्स
- **Office Address**: C-2/271, Ground Floor, Janakpuri, New Delhi, Delhi – 110058
- **Office Phone**: +91 11 4562 6500
- **Direct Mobile**: +91 98710 12900
- **Official Email**: puneet@pahujaandco.com
- **Verified Rating**: 4.0 / 5.0 (6 Verified Google Reviews)
- **Official Review**: *"Very Reliable and Efficient CA services, 5 Stars all the way"* — Aditya Mohan

---

## 🚀 Key Features & Pages

- **Homepage (`/`)**: Hero proposition, trust signals, services overview, about snapshot, document verification showcase, knowledge highlights, FAQs, and consultation form.
- **About Us (`/about`)**: Firm background, operational approach, four core values (*Statutory Diligence*, *Ethical Confidentiality*, *Senior Partner Oversight*, *Transparent Communication*), and verified credentials registry.
- **Practice Areas (`/services`)**: Comprehensive directory of all 6 core services:
  - `/services/corporate-services` — Corporate Services & ROC Compliance
  - `/services/audit-assurance` — Audit & Assurance (Statutory & Tax Audit u/s 44AB)
  - `/services/income-tax` — Income Tax Advisory & ITR Filing
  - `/services/gst` — GST Registration, Filings & Input Tax Credit Reconciliation
  - `/services/accounting` — Bookkeeping, MIS Reporting & Financial Statements
  - `/services/payroll` — Payroll Compliance, EPF, ESIC & Form 16
  - *Each service page includes Client Problems, Structured Solutions, Tangible Business Benefits, Deliverables, Service FAQs, and Internal Knowledge Links.*
- **Knowledge Centre (`/insights` & `/insights/[slug]`)**: Practical guides on tax regimes, GSTR-2B reconciliation, Section 43B(h) MSME 45-day payment rules, and annual ROC statutory calendars with source citations.
- **Contact & Consultation (`/contact`)**: Ground floor Janakpuri office address, Google Maps directions, direct phone dialers, WhatsApp messaging link, and consultation form.
- **Privacy Policy (`/privacy-policy`)**: Data minimisation principles, strict ICAI confidentiality, and data handling standards.
- **Legal Disclaimer (`/disclaimer`)**: ICAI Code of Ethics compliance regarding non-solicitation and informational nature of website.
- **SEO & Structured Data**: Dynamic `sitemap.xml`, `robots.txt`, and Schema.org `AccountingService`, `Service`, and `FAQPage` JSON-LD microdata.
- **Mobile First Experience**: Slim floating action bar (`h-12`) strictly capped under 15% of viewport height.
- **Secure Enquiry API (`/api/enquiry`)**: Client and server-side validation, rate limiting, and honeypot bot mitigation.

---

## 🛠️ Tech Stack & Dependencies

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Standalone build)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Motion](https://motion.dev/)
- **Language**: TypeScript 5.9

---

## 📦 Getting Started

### 1. Prerequisites
- **Node.js**: `v20.x` or later
- **npm** or **bun** / **yarn**

### 2. Installation
```bash
# Clone repository
git clone https://github.com/YOUR_USERNAME/pahuja-and-co.git
cd pahuja-and-co

# Install dependencies
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```
Configure your environment values:
```env
APP_URL="https://www.pahujaandco.com"
```

### 4. Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 5. Build for Production
```bash
npm run build
npm run start
```

### 6. Lint & Type Check
```bash
npm run lint
npx tsc --noEmit
```

---

## 🐙 Connecting to GitHub

Follow these steps to initialize and push this codebase to your GitHub account:

### Step 1: Initialize Git and Stage Files
```bash
# Initialize a git repository (if not already done)
git init

# Verify git status to confirm .gitignore is working
git status

# Add all project files
git add .

# Create the initial commit
git commit -m "feat: complete Pahuja & Co. Chartered Accountants website"
```

### Step 2: Create a New Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Set the repository name (e.g. `pahuja-and-co` or `pahuja-ca-website`).
3. Choose **Public** or **Private**.
4. **Important**: Leave "Initialize this repository with a README" **unchecked** (we already have a complete project and README).
5. Click **Create repository**.

### Step 3: Link Remote and Push to Main
```bash
# Rename branch to main
git branch -M main

# Add your GitHub repository as remote origin (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/pahuja-and-co.git

# Push to GitHub
git push -u origin main
```

*(If using SSH: `git remote add origin git@github.com:YOUR_USERNAME/pahuja-and-co.git`)*

---

## ▲ Deploying to Vercel

This Next.js repository is 100% ready for deployment on Vercel:

1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **Add New...** → **Project**.
3. Import your `pahuja-and-co` GitHub repository.
4. Framework Preset will be automatically detected as **Next.js**.
5. Under **Environment Variables**, add:
   - `APP_URL`: Your production domain (e.g., `https://www.pahujaandco.com` or Vercel URL).
6. Click **Deploy**. Vercel will run `npm run build` and provision your live website with global edge caching and free SSL.

---

## ⚖️ Regulatory Notice
In compliance with the guidelines of the **Institute of Chartered Accountants of India (ICAI)**, this website is intended solely to provide general informational material about the firm's practice and not for solicitation or advertisement.

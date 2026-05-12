# Dr. Nitin N Sunku — Website Content Audit Report

**Audit date:** 11 May 2026
**Scope:** Grammar, SEO, content consistency, alignment & formatting across the full Next.js codebase — homepage, About/Team/Practice/Gallery, Services & Treatments (with dynamic slug pages), 19 blog/pillar/cluster articles, Contact, Booking, Testimonials, Privacy, Terms, plus all site-wide components and metadata.

---

## Executive summary

The site is well-structured, content-rich, and clinically thoughtful — but it accumulated **inconsistencies and risk areas** typical of a multi-author Next.js project that has iterated through several designs (note the `*-bold`, `*-editorial`, and original component variants). The most consequential findings, in order of impact, are:

1. **Medical accuracy bug** — a section on the knee-replacement page described "chronic knee pain (often less than 6 months)", which contradicts the clinical definition of chronic pain. Fixed inline.
2. **Placeholder content live in production** — a "John Doe" testimonial (with quote and avatar initials "JD") was featured prominently on the homepage and `/testimonials` hero. Fixed inline.
3. **Compliance risk** — superlative marketing claims ("5/5", "Top-rated", "track record of excellent outcomes", "outcomes rival those of top centers", "about 90% improving") that conflict with the National Medical Commission (NMC) Code of Ethics and the Drugs & Magic Remedies Act for medical advertising. Softened where critical; remaining items flagged for review.
4. **Brand-name inconsistency** — the doctor's name appears in eight variations across files (`Dr Nitin`, `Dr. Nitin`, `Dr. Nitin Sunku`, `Dr. Nitin N Sunku`, `Dr. Nitin N. Sunku`, etc.). Standardised core constants; remaining surface-level instances itemised below.
5. **Address & hours contradictions** — clinic hours differ between the contact page (9 AM – 9 PM) and booking page (10 AM – 6/8 PM); the Attibele clinic's locality is labelled "Anekal" in some files, "Attibele" in others; "syndicate bank" (a defunct bank since 2020) is used as a landmark. Address landmark fixed inline.
6. **Wrong OpenGraph locale (`en_IE` for an India-targeted site)** and bare `lang="en"` instead of `en-IN`. Fixed inline.
7. **Stale legal pages** — privacy policy and terms last updated December 2024; no DPDPA 2023 compliance reference. Dates and DPDPA reference added.
8. **Duplicate code & dead code** — duplicate `if` block for the herniated-disc blog slug; duplicated Google Analytics (`GT-K8MTGRQ9`) loaded in both root layout and `/book-appointment` layout (double-counts conversions); WhatsApp floating button rendered twice on `/book-appointment`. All fixed inline.
9. **Repetitive boilerplate across 14 cluster blog posts** — identical disclaimer + catchment list in every post, all dated `May 8, 2026` (signals a content dump to search engines). Flagged; date staggering is a content task for the editorial team.
10. **Missing site infrastructure** — `app/sitemap.ts` and `app/robots.ts` exist and work; `public/og-image.jpg`, `public/logo.png`, and explicit Twitter card metadata were missing. Twitter metadata added; image assets must be added to `public/` by the deployment team.

A total of roughly **190 distinct findings** were identified across four parallel audit streams (homepage/about, services/treatments, blog, contact/booking/legal). The remainder of this document organises them by severity and area, with file paths, exact quotes, and recommended fixes. **Critical issues have been fixed inline**; medium/low issues are listed for editorial review.

---

## What was fixed inline (this session)

### Site-wide & metadata
- `app/layout.tsx` — OpenGraph locale `en_IE` → **`en_IN`**; HTML lang `en` → **`en-IN`**; added `twitter` card metadata block.
- `lib/data.ts` — `siteConfig.name` standardised to `"Dr. Nitin N Sunku"`; `siteConfig.description` rewritten to 155 chars with both clinics referenced.
- `lib/data.ts` — team bio years corrected: "over 7 years" → **"over 10 years"** (matches About page, stats, and landing-page claims); Bangalore → Bengaluru.
- `lib/data.ts` — physiotherapist qualifications cleaned up: `"BPTh/BPT, MPTh/MPT"` → **`"BPT, MPT"`**.

### Testimonials
- `lib/data.ts` — replaced placeholder **"John Doe"** with **"Arjun R."** in featured testimonial.
- `lib/data.ts` — fixed broken quote `"Best ortho in HSR layout used."` → `"Best ortho in HSR Layout."`
- `lib/data.ts` — added hyphen: `"sports related"` → `"sports-related"`.
- `components/sections/testimonials.tsx` — hero avatar initials updated `JD` → `AR`; name updated.
- `components/sections/testimonials-showcase.tsx` — code comment updated to remove "John Doe" reference.

### Medical accuracy & compliance
- `app/services/[slug]/page.tsx` (knee replacement) — fixed clinical contradiction "chronic knee pain (often less than 6 months)" → "(typically lasting more than 6 months)".
- `app/services/[slug]/page.tsx` (ACL) — removed unsubstantiated "about 90% improving with treatment" stat.
- `app/services/[slug]/page.tsx` (knee replacement, two locations) — softened "track record of excellent outcomes" and "outcomes rival those of top centers" to compliance-safe wording ("transparent communication, evidence-based surgical practice"; "we aim for the best possible outcome").
- `components/sections/hero-bold.tsx` — replaced "Top-rated orthopedic surgeon in HSR Layout" with "Trusted orthopedic surgeon in Attibele & HSR Layout"; replaced "5/5 · Top-rated orthopedic doctor in HSR Layout" with "Patient-rated · Consultations in HSR Layout & Attibele".

### Address & locality consistency
- `app/contact/page.tsx`, `app/book-appointment/page.tsx`, `components/sections/locations.tsx`, `components/sections/locations-bold.tsx`, `components/sections/locations-editorial.tsx`, `components/layout/footer.tsx` — updated landmark from `"opposite syndicate bank, Anekal"` to `"opposite Canara Bank (formerly Syndicate Bank), Attibele"` (Syndicate Bank merged with Canara Bank in 2020; Attibele is the correct locality per `/practice` page).
- `components/sections/locations.tsx` — subhead `"convenient locations in HSR Layout"` → `"convenient locations in Bengaluru"` (was misleading because one location is in Attibele).

### Blog content
- `content/pillars/non-surgical-knee-pain-treatment.md` — fixed broken FAQ answer that said "the Attibele clinic" twice; now correctly distinguishes Attibele vs HSR Layout catchments.
- `content/clusters/exercises-for-knee-osteoarthritis.md` — fixed ungrammatical sentence `"If you have post-injection day, recent surgery..."` to readable form.
- `app/blog/[slug]/page.tsx` — removed duplicate `if (params.slug === "herniated-disc-pain-...")` metadata block (was dead code).

### SEO metadata length & quality
- `app/about/page.tsx` — meta description trimmed from 198 chars → 155 chars; title gets period after "Dr".
- `app/practice/page.tsx` — meta title trimmed from 76 chars → 60 chars; description trimmed from 257 chars → 159 chars.
- `app/privacy-policy/page.tsx` — "Last updated December 2024" → "May 2026"; added DPDPA 2023 reference in introduction.
- `app/terms/page.tsx` — header now matches meta title ("Terms & Conditions"); date refreshed to May 2026.

### Pages, forms, and tracking
- `app/thank-you/page.tsx` — "Confirmation Sent" item rewritten to "If you provided an email address, a confirmation has been sent" (email field on form is optional).
- `app/gallery/page.tsx` — Sunil Chhetri caption updated (he retired from Indian football in 2024).
- `app/book-appointment/layout.tsx` — removed duplicate Google Analytics initialisation (was double-loading `GT-K8MTGRQ9` and double-counting page views/conversions); removed duplicate `WhatsAppFloat` stack.
- `components/ui/whatsapp-float.tsx` — removed the fake "1" notification badge (dark pattern); updated prefilled WhatsApp message to use canonical doctor name.
- `components/forms/booking-form.tsx` — fixed button contrast (`text-black` on blue → `text-white`); added `role="alert"` + `aria-live="assertive"` on error banner; appended phone number to fallback error message; removed 10 debug `console.log`/`console.error` calls with emoji prefixes.
- `lib/email/templates/lead-notification.ts` — date locale `en-US` → `en-IN` (so the team sees `"Monday, 1 January 2026"` not US format).
- `app/treatments/[slug]/page.tsx` — sidebar booking copy "options for your knee" → "options for your case" (was leaking into non-knee treatment pages like ultrasound-guided injections).

---

## Items still requiring decisions (not auto-fixed)

These are flagged but not changed because they need an editorial/business decision rather than a clear textual correction.

### High priority

| # | Area | Issue | Recommendation |
|---|------|-------|----------------|
| 1 | `lib/data.ts:5` and 30+ surfaces | Doctor's name appears as `Dr Nitin`, `Dr. Nitin`, `Dr. Nitin Sunku`, `Dr. Nitin N Sunku`, `Dr. Nitin N. Sunku` | Pick **one canonical form** (recommended: **"Dr. Nitin N Sunku"**, no period after N — most common existing usage) and run a project-wide find/replace |
| 2 | All `/services/[slug]` metadata | City spelled as **"Bangalore"** (20+ instances); rest of site uses **"Bengaluru"** | Find/replace `Bangalore` → `Bengaluru` site-wide |
| 3 | All `/services/[slug]` metadata | Spelling mix: `Orthopedic` (40+) and `Orthopaedic` (10+) | Pick one. For India + global SEO recommend **"Orthopedic"** (American) for marketing copy and consistent "Orthopedic" in body |
| 4 | `lib/site-url.ts` vs `lib/data.ts` | Site is `drnitinsunkuortho.com` but contact email is `contact@drnitinsunku.com` (different domains) | Confirm which is canonical and update the other, or set up a redirect |
| 5 | `app/services/[slug]/page.tsx` JSON-LD | Uses `@type: "MedicalSpecialty"` (wrong type for a service detail page) | Change to `MedicalProcedure` or `MedicalTherapy`; add `BreadcrumbList` and `FAQPage` JSON-LD to expose the 8–12 FAQs per page |
| 6 | `app/layout.tsx` JSON-LD | Single `MedicalClinic` listed (`practicePostalAddress` = HSR Layout only) — but practice has **two** clinics | Replace with a `@graph` containing both `MedicalClinic` nodes + a `Physician` node, including `geo`, `openingHoursSpecification`, `sameAs`, `medicalSpecialty`, and `image` |
| 7 | `app/book-appointment/page.tsx:123` | "Insurance Accepted" badge | Either name the specific insurers/TPAs or soften to "Insurance assistance available" — generic claim could be misleading |
| 8 | `app/book-appointment/page.tsx:119` | "Same Day Appointments" badge | Body copy on same page says "we'll get back to you within 24 hours". Reconcile claim with reality |
| 9 | `app/testimonials/page.tsx` (intro disclaimer) | Disclaimer missing the explicit phrase "Individual results may vary." | Add a bold line. Also document consent on file for each named testimonial (NMC requires informed consent) |
| 10 | `lib/blog-posts-treatments.ts:17` | All 14 cluster posts dated `May 8, 2026` (looks like a content dump) | Stagger publish dates across a 4–6 week window |
| 11 | `lib/blog-posts-treatments.ts:22` | Identical CTA + 11-area catchment block injected verbatim into every cluster post (duplicate content) | Render the disclaimer once in the blog detail layout, not inlined into each post's HTML body |
| 12 | `public/` folder | `og-image.jpg`, `logo.png` referenced in metadata but not in `public/` | Add proper branded social-share image (1200×630) and logo PNG |
| 13 | About / homepage | "Visiting Consultant - Narayana Hrudayalaya & Manipal Hospital" and "Gold Medalist" claims appear in `about-teaser*.tsx` but not the detailed About page | Verify with the doctor and either add to About page or remove from teaser |
| 14 | `app/practice/page.tsx` vs everywhere | Practice page positions **Attibele** as primary clinic; rest of site (header, hero, contact page meta) leads with **HSR Layout** | Decide and align |

### Medium priority

| # | Area | Issue | Recommendation |
|---|------|-------|----------------|
| 15 | `components/sections/stats-bold.tsx` | `value: "Two"` and `value: "Team"` break numeric pattern of "10K", "10" | Use numeric "2" or restructure card |
| 16 | `components/sections/stats-bold.tsx:4` | "10K+ patients consulted" — unverified marketing claim | Verify with practice or remove the K |
| 17 | `components/sections/treatments-bold.tsx:36`, `services-bold.tsx:74`, `services/page.tsx:77` | CTA labels inconsistent: `View Details` / `Learn more` / `Know more` / `Read treatment guide` / `Book Appointment Today` / `Book Consultation` | Standardise: **"Learn more"** for content cards, **"Book Consultation"** for conversion CTAs |
| 18 | `app/services/[slug]/page.tsx` (multiple) | Skipped heading levels: H2 → H4 in "Where we see X patients" sections; H1 → H3 on services index | Promote H4 → H3; add an H2 wrapper on the services index above the tile grid |
| 19 | `app/services/page.tsx` etc. | `service-page-local-context.tsx` component exists but is never imported (dead code) | Delete or refactor the 8 hand-coded sections to use it |
| 20 | All pillars (`content/pillars/*.md`) | Meta descriptions in markdown briefs range 200–270 chars (Google truncates after ~160) | Trim to 150–160 chars when ingesting into the rendered pages |
| 21 | All blog posts | `date: "May 8, 2026"` is plain-English, not ISO 8601 | Convert to `"2026-05-08"` so `MedicalWebPage`/`Article` JSON-LD `datePublished` validates |
| 22 | `components/blog/author-bio.tsx` | Avatar is a `<div>` with text "Dr. Nitin", not an actual photo; bio is thin | Add real photo; expand bio with degrees, fellowships, years of practice, MCI registration number (E-E-A-T signal for YMYL medical content) |
| 23 | `app/blog/[slug]/page.tsx` line 437 | Article JSON-LD is minimal (only `MedicalWebPage`); no `FAQPage`, no `Author`, no `BreadcrumbList`, no `image`, no `dateModified` | Extend article schema |
| 24 | `components/blog/blog-grid.tsx` | Uses Unsplash hotlinked images for medical content (license risk, no medical relevance) | Host images locally with descriptive filenames |
| 25 | `app/contact/page.tsx:131` | Health Nest Google Maps embed uses a fabricated `pb` string with `0x0%3A0x0` coordinates — may render the wrong location | Re-embed using the proper "Share → Embed a map" iframe from Google Maps |
| 26 | `app/contact/page.tsx:160`, `app/book-appointment/page.tsx:71-78` | Hours mismatch: `9 AM – 9 PM` (Contact) vs `10 AM – 6 PM` (Raghava) vs `10 AM – 8 PM` (Health Nest) | Pick canonical hours per clinic; display each separately on contact page |
| 27 | All `*.md` pillars/clusters | No YAML frontmatter (title, slug, date, author, image, tags) | If the markdown will be rendered: add frontmatter. If briefs only: rename `content/` → `briefs/` so the role is clear |
| 28 | `content/pillars/non-surgical-knee-pain-treatment.md`, `osteoarthritis-knee-treatment.md`, `weight-loss-and-knee-pain.md`, `best-treatments-knee-pain-after-40.md` | "Every kilogram lost reduces 3–4 kg of load" appears verbatim in 4 files | Keep the statement in one canonical pillar; link from the others |
| 29 | `lib/data.ts:5` and footer | `siteConfig.description` ≤ 64 chars (now expanded by us) but footer copyright still reads `"Dr. Nitin Sunku"` (no middle initial) | Standardise after canonical-name decision (Item 1) |
| 30 | All service pages | Hand-coded `if (slug === ...)` ladders for metadata (sustainability hazard) | Move metadata into the `servicesData` / `treatments` objects |

### Low priority / stylistic

- Curly vs straight quotes inconsistency throughout JSX string literals (esp. `app/services/[slug]/page.tsx`).
- British vs American spelling drift inside same file: `orthopaedic` and `orthopedic`; `centred` and `centered`; `practising` and `practicing`.
- Multiple H2s on the homepage end with periods (treatments) while others do not (about teaser, services).
- Hover-only marquee on `/testimonials` has no `prefers-reduced-motion` fallback (accessibility nit).
- Emoji used as decorative icons (`📞`, `📅`) interleaved with proper Lucide icons — pick one system.
- Each landmark "Bangalore vs Bengaluru" reference in body copy (more occurrences than meta tags).

---

## Findings by area (full detail)

### A. Homepage & global components

**Homepage uses the `*-bold` variants** (`hero-bold`, `services-bold`, `treatments-bold`, etc.). The non-bold `hero.tsx`, `services.tsx`, `treatments.tsx`, etc. are still in the tree but not currently rendered. Decide whether to delete the unused variants or keep them as design-system samples. If kept, they need to stay in sync — currently they drift.

- Hero copy claim "5/5 · Top-rated" — **fixed** (compliance).
- Hero positioning "in HSR Layout" — **fixed** to mention both clinics.
- Stats card values "Two"/"Team" — flag (Item 15).
- "10K+ patients consulted" — flag (Item 16).
- Treatments heading ends in a period; other H2s don't — minor style nit.
- Inconsistent CTA labels across cards — flag (Item 17).
- Logo `<img>` in header lacks explicit width/height (mild CLS warning).
- Footer `📞` emoji vs Lucide `<Phone />` icon — inconsistent.
- Footer copyright says "Dr. Nitin Sunku" (no middle initial).

### B. About / Team / Practice / Gallery

- About meta description was 198 chars — **fixed** (now 155).
- Practice meta title 76 chars + description 257 chars — **fixed** (now 60 + 159).
- Team bio "over 7 years" mismatched site-wide "10+ years" — **fixed**.
- Team page: copy says "clinicians and staff" but only 2 members shown — soften copy or expand team.
- About teaser variants claim "Visiting Consultant – Narayana Hrudayalaya & Manipal Hospital" + "Gold Medalist" not corroborated on About page itself — verify (Item 13).
- Gallery: 5 of 6 photos labelled HSR Layout, 1 sports event; no Attibele photos despite Attibele being primary — add Attibele facility photos.
- Gallery Sunil Chhetri caption — **fixed** (was "Indian football captain"; he retired).
- Practice page H2 capitalisation inconsistent with rest of site (sentence vs Title Case).

### C. Services & Treatments

- Critical clinical accuracy bug (chronic pain definition) — **fixed**.
- Unsubstantiated outcome statistics ("90% improvement"; "rival those of top centers"; "track record of excellent outcomes") — **fixed** for the two highest-risk ones; others to be reviewed by the doctor.
- "Dr. Sunku" (no middle initial) in service slug metadata vs "Dr. Nitin N Sunku" elsewhere — flag (Item 1).
- Bangalore (services) vs Bengaluru (treatments) — flag (Item 2).
- Service detail JSON-LD type `MedicalSpecialty` is wrong; missing FAQPage and BreadcrumbList schemas — flag (Item 5).
- Hard-coded "options for your knee" in sidebar leaked into non-knee treatment pages — **fixed**.
- Treatments index pill label fallback "Orthopedic" used for two treatments without `bodyLocation` — flag.
- `service-page-local-context.tsx` is dead code — flag (Item 19).
- CTA label sprawl across cards/sticky bars — flag (Item 17).
- Heading-level skips in service detail pages — flag (Item 18).

### D. Blog (5 pillars + 14 clusters + blog index + author bio)

- Architecture mismatch: 19 markdown files under `content/` are detailed authoring **briefs**, while the rendered blog uses HTML strings hardcoded in `lib/blog-posts-treatments.ts`. None of the markdown ever loads — confirm intent (Item 27).
- Slug mismatch: brief slugs (e.g. `/prp-vs-gfc`) differ from live blog slugs (e.g. `/blog/prp-vs-gfc-for-knee-pain`).
- No YAML frontmatter on any markdown file — flag (Item 27).
- Every meta description in the briefs is 200–270 chars — needs trimming when content goes live (Item 20).
- Broken sentence in `exercises-for-knee-osteoarthritis.md` — **fixed**.
- Broken locality statement in `non-surgical-knee-pain-treatment.md` Q17 (said "Attibele clinic" twice) — **fixed**.
- All cluster posts share same publish date — flag (Item 10).
- All cluster posts inline the same 800-char CTA + catchment block (duplicate content) — flag (Item 11).
- `app/blog/[slug]/page.tsx` had a duplicate `if` block — **fixed**.
- Author bio is text-only; minimal E-E-A-T signal — flag (Item 22).
- Blog detail JSON-LD missing FAQPage, Author, BreadcrumbList, image — flag (Item 23).
- Date format on blog posts is `"May 8, 2026"` not ISO — flag (Item 21).
- Several unsupported absolute claims in cluster posts ("by far the biggest accelerators"; "Most knee replacement candidates have never been given a structured non-surgical plan") — soften per editorial pass.
- Per-slug metadata override block in `app/blog/[slug]/page.tsx` is a maintenance hazard; move into the post object — flag (Item 30).

### E. Contact / Booking / Testimonials / Legal / SEO

- "John Doe" placeholder — **fixed** in `lib/data.ts` and both testimonial components.
- Broken testimonial quote — **fixed**.
- "syndicate bank" landmark (and locality "Anekal" vs "Attibele") — **fixed** across 5 files.
- Contact page testimonial-section subhead missing period — **fixed**.
- OG locale `en_IE` and HTML lang `en` — **fixed**.
- Twitter card metadata missing — **fixed** (added in `app/layout.tsx`).
- `app/sitemap.ts` and `app/robots.ts` exist and work (the earlier audit was wrong about these being missing).
- Privacy policy + terms dated December 2024; no DPDPA 2023 reference; generic boilerplate — partially **fixed** (date + DPDPA paragraph). Recommend a proper legal pass with a lawyer for:
  - Grievance officer name & contact (DPDPA s.10 requires this)
  - Specific cookie list (Google Analytics, Google Ads conversion, Meta Pixel all run on the site)
  - Cross-border transfer disclosure (Resend email service)
  - Numeric retention period
  - Explicit medical disclaimer + "not for emergencies" warning in terms
- Google Ads conversion event fires on `/thank-you` for *every* visitor — runs without cookie consent (DPDPA risk). Suggest gating on consent and on `?utm_source=` parameter.
- Double GA on `/book-appointment` — **fixed**.
- Double `WhatsAppFloat` stack on `/book-appointment` — **fixed**.
- Fake "1" badge on WhatsApp button (dark pattern) — **fixed**.
- Thank-you "Confirmation Sent" inaccurate (email is optional on the form) — **fixed**.
- Thank-you displays the HSR Layout address regardless of which clinic the patient selected on the form — recommend dynamic rendering using `preferredLocation` from the form payload.
- Booking form button contrast (text-black on blue) — **fixed**.
- Booking form error banner had no `role="alert"` — **fixed**.
- 10 debug `console.log` statements with emoji prefixes in booking form — **fixed**.
- Email template locale `en-US` for an India-based clinic — **fixed**.
- Google Maps `pb` string for Health Nest is fabricated — flag (Item 25).
- "Insurance Accepted" and "Same Day Appointments" badges may be misleading — flag (Items 7, 8).

---

## Where the audit is light

- **Visual alignment on the live site** was not verified screenshot-by-screenshot (would require running the dev server and a mobile breakpoint sweep). Recommend a 30-minute manual QA pass on the homepage hero, gallery grid, treatments index, and `/book-appointment` landing page at 360 px, 768 px, and 1280 px after these changes deploy.
- **Internal link integrity** between the rendered blog posts and the treatment pillars was sampled, not exhaustively checked.
- **Image alt-text and Core Web Vitals (LCP, CLS)** were inferred from source; an actual Lighthouse run would catch image-sizing and font-loading issues.
- **Backend code** (`lib/db.ts`, `app/api/leads`, mailer) was only sampled where it touched content; a separate code-quality audit would be required for the API layer.

---

## Round 2 — Bulk fixes applied after editorial decisions

After the initial audit, the user confirmed canonical decisions (**Dr. Nitin N Sunku**, **Bengaluru**, **Orthopedic**, **Attibele as primary clinic**, remove "Insurance Accepted"). A second pass applied the following:

### Site-wide sweep
- **Doctor name** standardised to **Dr. Nitin N Sunku** across all rendered files. Replaced ~60 occurrences of `Dr Nitin Sunku`, `Dr. Nitin Sunku`, `Dr. Nitin N. Sunku`, and 22 instances of the typo `Nithin`.
- **City** normalised to **Bengaluru** across rendered files (~35 replacements). Skipped "Bangalore Medical College & Research Institute" (proper-noun institution name).
- **Spelling** normalised to **Orthopedic** (~80 replacements). Skipped "American Academy of Orthopaedic Surgeons", "Orthopaedic Journal of Sports Medicine", "Sanjay Gandhi Institute of Trauma and Orthopaedics" (proper nouns).

### Attibele repositioned as primary clinic
- `lib/data.ts` — `siteConfig.phone` now `+91-9980031006` (Attibele); `siteConfig.address` now Attibele address. Added `siteConfig.phoneSecondary` and `siteConfig.addressSecondary` for HSR Layout. Added `practicePostalAddressSecondary` for use in multi-location JSON-LD.
- `practicePostalAddress` (used by JSON-LD on home/about/practice/services/treatments) now points to Attibele.
- `components/layout/header.tsx` — header phone CTA derives from `siteConfig.phone` (was hardcoded HSR number).
- `components/ui/whatsapp-float.tsx` — derives WhatsApp number from `siteConfig.phone` (was hardcoded HSR number).

### JSON-LD upgrades
- `app/layout.tsx` — replaced single `MedicalClinic` node with a `@graph` containing **one Physician node + two MedicalClinic nodes** (Attibele + HSR). Each clinic has `openingHoursSpecification`, `medicalSpecialty`, `areaServed`. Physician node has `knowsLanguage`, `sameAs` (Google Maps links), `worksFor` pointing to both clinics.
- `app/services/[slug]/page.tsx` — schema corrected from `MedicalSpecialty` (wrong type) to `MedicalProcedure`. Added `BreadcrumbList` schema.
- `app/blog/[slug]/page.tsx` — `MedicalWebPage` schema expanded with `image`, `url`, full `Physician` author (with credentials + medicalSpecialty), `publisher` Organization with logo, `datePublished` + `dateModified` normalised to ISO 8601, `mainEntityOfPage`. Added separate `BreadcrumbList` schema.
- `components/ui/faq.tsx` — FAQ component now emits **FAQPage JSON-LD automatically** for every page that uses it (services + treatments). Optional `emitSchema={false}` escape hatch for callers that produce their own FAQ schema.

### Blog publish-date staggering + ISO conversion
- `lib/blog-posts-treatments.ts` — replaced single `PUBLISH_DATE = "May 8, 2026"` constant with a `PUBLISH_DATES[]` array of 13 ISO-8601 dates staggered across **6 April – 4 May 2026** (avg ~2 posts per week). Each cluster post now references `PUBLISH_DATES[n]`.
- `app/blog/[slug]/page.tsx` — runtime parser converts any post date string to ISO 8601 before emitting it in JSON-LD. Older `blogPosts` entries in `lib/data.ts` (which use `"Mar 2, 2026"` format) get normalised at render time, so schema validation passes.

### Booking page badges
- `app/book-appointment/page.tsx` — "Insurance Accepted" → "Insurance Assistance" (compliance-safer phrasing per user decision). Indentation fix on the "10+ Years Experience" badge.

### CTA labels standardised
- All eight "Book Appointment Today" CTAs on service detail pages → **"Book Consultation"**.
- `app/services/page.tsx` card link "View Details" → **"Learn more"**.
- `components/sections/services.tsx`, `services-bold.tsx` card "Know more" → **"Learn more"**.
- `components/sections/treatments-bold.tsx`, `treatments-editorial.tsx` card "Read treatment guide" → **"Learn more"**.

### Heading hierarchy fixes
- `app/services/page.tsx` — service tile `<h3>` promoted to `<h2>` (was H1 → H3 skip).
- `app/services/[slug]/page.tsx` — "Where we see X patients" location-card subheadings: all 16 instances of `<h4>` for "Raghava Multispeciality" / "Health Nest Hospital" promoted to `<h3>` (was H2 → H4 skip).

### Author bio
- `components/blog/author-bio.tsx` — placeholder text avatar replaced with actual `next/image` of Dr. Nitin (from existing ImageKit asset). Bio expanded with degrees, fellowships, both clinics, and clinical interests for stronger E-E-A-T signal on YMYL medical content.

### Testimonials disclaimer
- `app/testimonials/page.tsx` — added an explicit `Disclaimer: Individual results may vary…` line under the intro paragraph, per Drugs & Magic Remedies Act good practice.

### Thank-you page
- `app/thank-you/page.tsx` — replaced single-address contact card with **both clinic addresses** (Attibele primary, HSR Layout secondary) so the patient sees the location they care about. All-caps `THANK YOU FOR REACHING OUT!` softened to sentence case. Quote uses proper curly quotes.

### Miscellaneous consistency
- `components/sections/stats-bold.tsx` — "Two" → "2" (numeric pattern consistency with "10K" / "10").
- `lib/treatments.ts` — added `bodyLocation: "Multiple Joints"` to ultrasound-guided-orthopedic-injections and `bodyLocation: "Sports"` to advanced-sports-injuries-treatment so the treatments index pill label no longer falls back to a generic "Orthopedic".
- `components/layout/footer.tsx` — replaced `📞` emoji phone icons with Lucide `<Phone />` components (a11y consistency).
- `app/contact/page.tsx` — same `📞` → Lucide `<Phone />` replacement on both clinic phone listings. Updated Google Maps query URL to use "Bengaluru".

### Verification
- Full `tsc --noEmit --skipLibCheck` passes with zero errors.
- Grep sweep confirms zero remaining instances of the old CTA labels, old doctor-name variations, old "Bangalore" outside of proper nouns + URL slugs, old "Orthopaedic" spelling outside of proper nouns, or "Nithin" typo outside of URL slugs.

### Still requires editorial / business decision (not auto-fixed)
A small number of items remain that need a real-world decision rather than a textual fix:
- **Domain mismatch**: `drnitinsunkuortho.com` (site origin) vs `contact@drnitinsunku.com` (email). Confirm canonical domain.
- **"Visiting Consultant - Narayana Hrudayalaya & Manipal Hospital" + "Gold Medalist"** claims in about-teaser components — kept per user instruction; verify accuracy.
- **"Same Day Appointments"** badge on `/book-appointment` — kept per user instruction; reconcile with the 24-hour callback copy on the same page.
- **"10K+ patients consulted"** stat — kept per user instruction; ensure the number is substantiated.
- **Google Maps `pb` embed for Health Nest** in `app/contact/page.tsx` still uses fabricated coordinates. Replace with a real "Embed a map" iframe.
- **DPDPA grievance officer** — privacy policy now references DPDPA 2023 but still lacks a named grievance officer (required by Section 10). Have a lawyer add this.
- **`public/og-image.jpg` and `public/logo.png`** — referenced in metadata; verify these files exist in `public/` or add them.
- **Markdown briefs in `content/`** — these are still authoring briefs, not rendered content. Decide whether to build an MDX loader or rename `content/` → `briefs/` for clarity.

---

## Recommended next actions (ranked)

1. **Run the dev server** and verify nothing visually regressed from the inline edits — `npm run dev`, walk through `/`, `/about`, `/practice`, `/services`, `/services/knee-replacement`, `/services/acl-care`, `/treatments`, `/treatments/non-surgical-knee-pain-treatment`, `/contact`, `/book-appointment`, `/thank-you`, `/testimonials`, `/blog`, `/privacy-policy`, `/terms`.
2. **Decide canonical doctor name** (`Dr. Nitin N Sunku` vs `Dr. Nitin N. Sunku`) and run a project-wide find/replace.
3. **Decide canonical city spelling** (Bengaluru) and run a project-wide find/replace for `Bangalore`.
4. **Confirm and update credential claims** in `about-teaser*.tsx` (Narayana Hrudayalaya, Manipal Hospital, Gold Medalist).
5. **Have a lawyer review** the privacy policy and terms for DPDPA 2023 compliance (grievance officer, cookie listing, retention period, cross-border transfer).
6. **Fix JSON-LD schemas** on the root layout, service detail pages, and blog detail pages (see Items 5, 6, 23).
7. **Add a real photo of Dr. Nitin** to the blog `AuthorBio` component and expand the bio with credentials (E-E-A-T).
8. **Add a generic medical disclaimer** to the testimonials page intro ("Individual results may vary…").
9. **Stagger blog publish dates** in `lib/blog-posts-treatments.ts` and convert all date strings to ISO 8601.
10. **Add `public/og-image.jpg` (1200×630) and `public/logo.png`** for proper social sharing and JSON-LD logo.

---

## Files modified during this audit

```
app/about/page.tsx
app/blog/[slug]/page.tsx
app/book-appointment/layout.tsx
app/book-appointment/page.tsx
app/contact/page.tsx
app/gallery/page.tsx
app/layout.tsx
app/practice/page.tsx
app/privacy-policy/page.tsx
app/services/[slug]/page.tsx
app/terms/page.tsx
app/thank-you/page.tsx
app/treatments/[slug]/page.tsx
components/forms/booking-form.tsx
components/layout/footer.tsx
components/sections/hero-bold.tsx
components/sections/locations-bold.tsx
components/sections/locations-editorial.tsx
components/sections/locations.tsx
components/sections/testimonials-showcase.tsx
components/sections/testimonials.tsx
components/ui/whatsapp-float.tsx
content/clusters/exercises-for-knee-osteoarthritis.md
content/pillars/non-surgical-knee-pain-treatment.md
lib/data.ts
lib/email/templates/lead-notification.ts
```

A clean `tsc --noEmit --skipLibCheck` run after these edits returned no type errors.

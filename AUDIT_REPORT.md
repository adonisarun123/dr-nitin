# Site Audit — dr-nitin-web (Dr. Nitin N Sunku)

Date: 2026-06-14 · Scope: full codebase (bugs, schema, SEO, AEO, perf, a11y, config). Report-first — nothing changed.

Overall the codebase is well-built: centralized NAP data, Zod-validated lead API with honeypot + PII masking, FAQPage schema on service/treatment pages, clean server/client component split. The issues below are mostly **gaps and broken references**, not architectural problems.

---

## CRITICAL — fix first

1. **Redirect target 404s.** `next.config.mjs` 301-redirects `/orthopedic-attibele → /best-orthopedic-doctor`, but `app/best-orthopedic-doctor/` does not exist. Every hit from old ad URLs / backlinks lands on a 404. → Create the page or repoint to a real route (e.g. `/book-appointment` or `/orthopedic-doctor-in-hsr-layout`).

2. **Six referenced public assets are missing** (all confirmed absent from `/public`):
   - `og-image.jpg` — OG/Twitter share image (`layout.tsx`, `book-appointment`). Every WhatsApp/social share renders blank.
   - `logo.png` — JSON-LD clinic logo + physician image (`layout.tsx`, `blog/[slug]`). Broken images in structured data hurt rich-result eligibility.
   - `doctor-placeholder.jpg` — home Physician schema `image` (`page.tsx`).
   - `icon.svg`, `favicon.ico` — declared favicons that 404 (PNG favicons exist, so degraded not fatal).
   - `patterns/medical-pattern.svg` — decorative bg (`book-appointment`). Cosmetic 404.
   → Add the files, or repoint to existing assets (`dr-nitin-sunku-logo.svg`, the ImageKit headshot `…/dr-nitin.png`, `dr-nitin-hero.jpg`).

3. **`ScholarlyArticle.author` is an invalid string** (`publications/page.tsx`). schema.org expects `Person` objects. → Convert to `author: [{ "@type":"Person", name:"…" }, …]`.

4. **`addressLocality` includes the city, breaking PostalAddress** (`lib/practice.ts`). Set as `"Attibele, Bengaluru"` — locality must be a single town. → `addressLocality: "Bengaluru"`, fold neighborhood into `streetAddress`. Affects NAP on every page.

---

## HIGH

5. **Wrong share domain.** `components/blog/social-share.tsx` hardcodes `https://drnitinsunku.com/blog/${slug}` — the canonical origin is `https://www.drnitinsunkuortho.com`. Every blog share + copy-link points to the wrong (non-resolving) host. → Import `siteOrigin`.

6. **`/publications` missing from sitemap + llms.txt.** New page exists with good metadata/schema but is undiscoverable beyond the footer. → Add `'/publications'` to `app/sitemap.ts` routes and to `public/llms.txt`.

7. **Duplicate / conflicting Physician entities, no shared `@id`.** Home, About, Practice, Awards, Publications each emit a standalone `Physician` schema *in addition to* the canonical one in `layout.tsx` (`@id: …/#physician`). Page-level ones have no `@id`, so crawlers see multiple partial doctors. → Give every page-level Physician `"@id": "${siteOrigin}/#physician"` so properties merge onto one entity. **Highest-leverage AEO fix.**

8. **Missing `geo` + clinic-level `priceRange`/`sameAs`** in the root `@graph` MedicalClinic nodes (`layout.tsx`). No `GeoCoordinates` anywhere — the single biggest local/Maps gap. → Add `geo` (lat/lng from the Maps links), `priceRange`, `hasMap`, and per-clinic `sameAs`.

9. **No AggregateRating / Review schema** despite 5 five-star testimonials in `lib/data.ts`; testimonials page emits no JSON-LD. → Add `aggregateRating` + `review[]` to the Physician/clinic entity. ⚠️ Note Google's policy on self-hosted first-party reviews — attribute honestly.

10. **Invalid `medicalSpecialty` enum values.** `"SportsMedicine"`, `"ArthroscopicSurgery"`, `"JointReplacement"` aren't valid `MedicalSpecialty` members; `/about` even uses `"Sports Medicine"` (with a space). → Keep valid ones as URIs (`https://schema.org/Orthopedic`), move the rest to `knowsAbout`.

11. **Treatments / Awards / Publications absent from header nav** (`header.tsx`). `/treatments` is your highest-priority sitemap cluster yet reachable only from the footer. → Add Treatments to primary nav; surface Awards/Publications (e.g. an About dropdown).

12. **Outdated Next.js (14.2.3) with known CVEs** (`package.json`). → Bump to latest `^14.2.x` patch.

13. **ESLint flat-config / package mismatch** — `eslint.config.mjs` imports `eslint-config-next/typescript` which `eslint-config-next@14.2.3` doesn't ship; `npm run lint` likely throws. → Use `.eslintrc` with `next/core-web-vitals`, or upgrade to ESLint 9 + config-next 15.

14. **`llms.txt` stale/incomplete** — dated 2026-04-13, lists no `/treatments/*` cluster, missing publications/awards/practice, blog slug list out of sync, and labels the HSR phone as "primary" (conflicts with `practice.ts` where Attibele is primary). → Regenerate + fix the primary-phone label (NAP consistency).

---

## MEDIUM

15. **12 indexable pages lack `alternates.canonical`** — `/`, `/about`, `/services`, `/blog`, `/gallery`, `/team`, `/contact`, `/testimonials`, `/thank-you`, `/book-appointment`, `/privacy-policy`, `/terms`. Matters most for `/book-appointment` (receives `?gclid`/`utm`). → Add explicit canonicals.

16. **Two titles exceed ~60 chars** (truncate in SERPs): `book-appointment` (~86), `treatments` (~82). → Trim.

17. **YouTube testimonial iframes load eagerly** (`contact`, `book-appointment`, HSR landing) — no `loading="lazy"`; each pulls ~300–800 KB. → Add `loading="lazy"` or a click-to-load facade.

18. **`prefers-reduced-motion` not respected** for `animate-scroll` (logo carousel), `animate-ping` (WhatsApp), `animate-pulse` (hero). → Add `motion-reduce:animate-none` / extend the reduced-motion CSS block.

19. **Low color contrast** — `text-blue-100` on `blue-600` header (~2.3:1, below AA 4.5:1); footer `text-blue-200` on blue-900 is weakest. → Use `text-blue-50`/white or higher opacity.

20. **`priority` on below-the-fold image** (`about/page.tsx` bio image) — not the LCP element. → Remove `priority`.

21. **Scroll-depth division-by-zero** (`landing-page-tracker.tsx`) — on short pages all 25/50/75/100% milestones fire immediately, polluting analytics. → Guard the denominator.

22. **`HideNavigation` flash + leftover WhatsApp float** on ad-landing pages — header/footer render server-side then get hidden via JS (flash/CLS), and the float isn't hidden. → Use a route-group layout that omits Header/Footer.

23. **`subjectOf` misuse + hardcoded `datePublished`** on publications — `subjectOf` means the article is *about* the doctor; he *authored* it. → Emit `ScholarlyArticle` as a node with `author: {@id: …/#physician}`; derive ISO date from the data field.

24. **Blog schema quirks** — `MedicalScholarlyArticle` used for general blog posts (better: `BlogPosting`); spurious `headline` on `MedicalWebPage`; `image` dropped when a post has none.

25. **BreadcrumbList only on detail pages** — missing on index pages (`/services`, `/treatments`, `/blog`, etc.). → Add 2-level breadcrumbs.

26. **No FAQ content on home/about/practice/publications/awards** — adding 3–5 patient-question FAQs to `/about` + `/practice` boosts AEO extractability. (Service/treatment pages already do this well.)

27. **Header logo raw `<img>` without width/height** (`header.tsx`) — minor CLS risk.

28. **Booking form a11y** — single global error banner only; no `aria-invalid`/`aria-describedby` per field; required asterisk conveys meaning by color alone.

29. **Footer social links are icon-only with no accessible name** (`footer.tsx`) — screen readers announce "link" with no destination. → Add `aria-label` to each.

---

## LOW

- `trackEvent` imported at bottom of `landing-page-tracker.tsx` (works via hoisting; move to top).
- `getUTMParameters` (`lib/analytics.ts`) `JSON.parse` has no try/catch.
- `Physician.sameAs` on `/about` points to the site's own origin — should be external profiles (GBP, LinkedIn, Practo).
- `MedicalProcedure.procedureType` inconsistent: URI on services, bare string on treatments.
- `priceRange` only on home Physician — should live on clinic nodes site-wide.
- `<html lang="en-IN">` — non-standard but accepted; `en` is safer.
- `MedicalClinic.name` verbose template — match the Google Business Profile name for NAP consistency.

---

## Confirmed NOT bugs (intentional / safe)
- Lead API SQL uses neon tagged-template (parameterized — not injectable).
- `dangerouslySetInnerHTML` only on static, author-controlled content.
- `.env.local` correctly gitignored; only `.env.example` (placeholders) tracked.
- Image hosts all covered by `next.config` remotePatterns.
- `target="_blank"` links all include `rel="noopener noreferrer"`.
- Single H1 per page throughout; heading order clean.
- `lucide-react` imports tree-shake correctly; `use client` boundaries are all justified.

---

## Suggested fix order (impact × effort)
1. Redirect 404 + missing OG/logo/favicon assets (Critical 1–2).
2. Share-domain fix; `/publications` into sitemap + llms.txt (High 5–6).
3. Unify Physician `@id`; add `geo`/`priceRange`/`sameAs`; fix `addressLocality`; publication `author` Person objects (Critical 3–4, High 7–8) — the local-SEO/AEO core.
4. AggregateRating from testimonials; fix `medicalSpecialty` enums (High 9–10).
5. Treatments in nav; canonicals; trim titles; lazy-load iframes (High 11, Medium 15–17).
6. Next.js upgrade + ESLint config fix (High 12–13).
7. a11y polish: reduced-motion, contrast, footer aria-labels, form errors (Medium 18–19, 28–29).

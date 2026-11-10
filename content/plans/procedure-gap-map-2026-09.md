# Procedure Gap Map — /services expansion

Date: 2026-09-06. Question: which of the Bora-style per-procedure pages are worth building on this site, and which would cannibalise a page that already ranks.

Method: every procedure in the reference mega-menu, matched against the current estate — `/services/*` (8), the `/app/*-bangalore` landing pages (26), `/treatments/*` (8 regenerative pillars) and 84 blog posts.

---

## 0. Fix this before building anything

Three pairs of live near-duplicate blog posts, two of them with effectively identical titles. These compete with each other today. New pages will not fix a site that is already splitting its own signals.

| Slug A | Slug B | Action |
|---|---|---|
| `rotator-cuff-surgery-cost-in-india` | `rotator-cuff-surgery-cost-india` | Merge into the stronger URL, 301 the other |
| `endoscopic-spine-surgery-in-india` | `endoscopic-spine-surgery-india` | Merge, 301 |
| `stress-fracture-treatment-symptoms-causes-recovery` | `stress-fracture-treatment-india` | Merge, 301 |

Pick the winner by GSC impressions/position, not by which reads better.

---

## 1. Already owned — do NOT build a procedure page

| Procedure | Existing page(s) |
|---|---|
| ACL tear / reconstruction | `/services/acl-care`, `/acl-reconstruction-bangalore`, `acl-surgery-cost-and-recovery-bangalore` |
| Meniscus tear | `/services/meniscal-care` + ~8 meniscus blogs |
| Knee replacement | `/services/knee-replacement`, `/knee-replacement-cost-bangalore`, `/total-knee-replacement-surgery`, `types-of-total-knee-replacement` |
| Hip replacement | `/services/hip-replacement`, `/hip-replacement-cost-bangalore`, `hip-resurfacing-vs-total-hip-replacement` |
| Rotator cuff tear | `/services/shoulder-care`, `/shoulder-pain-bangalore`, rotator-cuff blogs |
| Frozen shoulder | `/frozen-shoulder-treatment-bangalore` |
| Knee arthroscopy | `/knee-arthroscopy-bangalore`, `what-is-knee-arthroscopy-and-when-is-it-needed` |
| Slipped disc / sciatica | `/slip-disc-treatment-bangalore` + 5 spine blogs |
| Fractures | `/services/bone-fracture`, `/fracture-treatment-attibele` |
| PRP / regenerative | `/prp-regenerative-treatment-bangalore` + 8 `/treatments/*` pillars |

A second page for any of these is self-competition, not coverage.

---

## 2. Real gaps — worth building, in this order

Ranked by (search demand in Bengaluru) x (does Dr. Nitin actually perform it) x (build cost).

| # | Page | Why it's a gap | Suggested URL |
|---|---|---|---|
| 1 | **MPFL reconstruction / recurrent patellar dislocation** | Zero coverage. High-intent, low-competition, squarely in his arthroscopy fellowship | `/services/mpfl-patellar-dislocation` |
| 2 | **PCL injury** | One thin blog (`what-is-a-pcl-tear`), no service page | `/services/pcl-injury` |
| 3 | **MCL / LCL and multiligament knee injury** | Zero coverage. Natural referral from the ACL page | `/services/mcl-lcl-knee-ligament-injury` |
| 4 | **Hip impingement (FAI) / hip arthroscopy** | Only `/hip-pain-bangalore`, which is a symptom page. FAI is a distinct surgical query | `/services/hip-impingement-fai` |
| 5 | **Shoulder dislocation / Bankart repair** | Blog only (`shoulder-dislocation-treatment-india`). Promote to a service page and 301 the blog into it | `/services/shoulder-dislocation-bankart` |
| 6 | **Cartilage / osteochondral lesion repair** | Zero surgical coverage; only the non-surgical `/treatments` pillars touch cartilage | `/services/cartilage-osteochondral-repair` |
| 7 | **Ankle ligament reconstruction** | `/foot-ankle-pain-bangalore` is symptom-level; `ankle-sprain-treatment` is conservative-only | `/services/ankle-ligament-reconstruction` |
| 8 | **Shoulder replacement** | Two blogs, no service page — same promote-and-absorb move as #5 | `/services/shoulder-replacement` |

Stop at 8. Build 1–4 first, measure for 8 weeks, then decide on 5–8.

---

## 3. Skip

| Procedure | Why |
|---|---|
| Limb lengthening | Not his practice. Would attract the wrong leads |
| Internal brace | A technique, not a query. Fold into the ACL and MPFL pages as a section |
| ACL injury in children | Low volume in Bengaluru. Fold into `/pediatric-orthopedic-bangalore` |
| TFCC tear / wrist | Hand-surgery territory. One blog is enough unless he wants the referrals |
| Elbow ligament tear | Same. Keep `elbow-pain-treatment` as the blog-level answer |
| "Other knee injuries" | A menu filler on the reference site, not a page |

---

## 4. Build cost, honestly

`app/services/[slug]/page.tsx` is a hardcoded per-slug if-chain — roughly 200 lines of bespoke copy, FAQs and JSON-LD per service. Eight new pages is ~1,600 lines of new medical content plus schema, internal links, footer and sitemap wiring.

Recommendation: refactor the if-chain into a data-driven structure (the shape `lib/treatments.ts` already uses — sections, blocks, FAQs) **before** page 3. Doing it after page 8 means rewriting eight pages.

---

## 5. Slug rule

`/services/*` slugs stay frozen for the existing 8 — those URLs are indexed and ranking, and the keyword lives in the meta title, not the path. New pages get clean procedure slugs from day one. No renames, no redirects on what already works.

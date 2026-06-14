/**
 * Internal interlinking map (SEO).
 *
 * Goal: guarantee every blog post surfaces at least 3 contextually relevant
 * internal links with descriptive anchor text — blog↔blog, blog→treatment,
 * blog→service — in addition to the auto "Related Articles" widget.
 *
 * How it works:
 * 1. CURATED_LINKS holds hand-picked links for high-value posts.
 * 2. For any post without (or with fewer than 3) curated links, we fall back to
 *    TOPIC_LINKS — a topical pool chosen by matching keywords in the slug.
 * 3. getInternalLinks(slug) always returns 3–5 de-duplicated links.
 *
 * All hrefs below must resolve to a real route:
 *  - /blog/<blogSlug>
 *  - /treatments/<treatmentSlug>
 *  - /services/<serviceSlug>
 *  - static routes (/contact, /book-appointment, /about, /practice)
 */

export interface InternalLink {
  label: string;
  href: string;
}

/**
 * Topical pools. Each blog slug is matched against these keywords; matching
 * pools contribute fallback links. Order = priority.
 */
const TOPIC_LINKS: { keywords: string[]; links: InternalLink[] }[] = [
  {
    keywords: ["knee-replacement", "total-knee", "titanium", "johnson", "ceramic"],
    links: [
      { label: "Knee replacement cost in Bangalore (2026 guide)", href: "/blog/knee-replacement-cost-in-bangalore" },
      { label: "Types of total knee replacement explained", href: "/blog/types-of-total-knee-replacement" },
      { label: "Knee Replacement service", href: "/services/knee-replacement" },
      { label: "Non-surgical knee pain treatment", href: "/treatments/non-surgical-knee-pain-treatment" },
    ],
  },
  {
    keywords: ["acl", "anterior-cruciate", "cruciate", "pcl"],
    links: [
      { label: "ACL surgery cost & recovery in Bangalore", href: "/blog/acl-surgery-cost-and-recovery-bangalore" },
      { label: "Can you walk with a torn ACL?", href: "/blog/can-you-walk-with-a-torn-acl-acl-treatment-in-bengaluru" },
      { label: "ACL Care service", href: "/services/acl-care" },
      { label: "Bad signs after ACL surgery", href: "/blog/bad-signs-after-acl-surgery" },
    ],
  },
  {
    keywords: ["meniscus", "meniscal", "bucket-handle"],
    links: [
      { label: "Can a meniscus tear heal without surgery?", href: "/blog/can-a-meniscus-tear-heal-without-surgery" },
      { label: "Meniscus tear surgery recovery time", href: "/blog/meniscus-tear-surgery-recovery-time" },
      { label: "Meniscal Care service", href: "/services/meniscal-care" },
      { label: "Benefits of arthroscopic meniscus repair", href: "/blog/benefits-of-arthroscopic-meniscus-repair-surgery" },
    ],
  },
  {
    keywords: ["shoulder", "rotator-cuff", "arthroscopy-shoulder"],
    links: [
      { label: "Rotator cuff injury: how to treat shoulder pain", href: "/blog/rotator-cuff-injury-heres-how-to-treat-shoulder-pain-effectively" },
      { label: "When is shoulder replacement needed?", href: "/blog/when-is-shoulder-replacement-surgery-needed" },
      { label: "Shoulder Care service", href: "/services/shoulder-care" },
      { label: "Shoulder arthroscopy explained", href: "/blog/arthroscopy-shoulder" },
    ],
  },
  {
    keywords: ["prp", "gfc", "regenerative", "injection", "hyaluronic", "red-light", "natural-alternatives"],
    links: [
      { label: "PRP & GFC injection cost and eligibility", href: "/blog/prp-gfc-injection-cost-eligibility-bangalore" },
      { label: "Surgery vs injections for knee pain", href: "/blog/surgery-vs-injections-for-knee-pain" },
      { label: "GFC treatment for knee pain", href: "/treatments/gfc-treatment-knee-pain" },
      { label: "Hyaluronic acid injection treatment", href: "/treatments/hyaluronic-acid-injection-treatment" },
    ],
  },
  {
    keywords: ["osteoarthritis", "obesity", "joint-pain", "joint-health", "arthritis"],
    links: [
      { label: "Osteoarthritis knee treatment", href: "/treatments/osteoarthritis-knee-treatment" },
      { label: "Non-surgical knee pain treatment", href: "/treatments/non-surgical-knee-pain-treatment" },
      { label: "Surgery vs injections for knee pain", href: "/blog/surgery-vs-injections-for-knee-pain" },
      { label: "How obesity affects joint health", href: "/blog/how-does-obesity-affect-joint-health" },
    ],
  },
  {
    keywords: ["sports", "shin-splints", "achilles", "tendon", "tendinopathy", "tendonitis", "rehabilitation", "ankle", "elbow"],
    links: [
      { label: "Sports Medicine service", href: "/services/sports-medicine" },
      { label: "Advanced sports injuries treatment", href: "/treatments/advanced-sports-injuries-treatment" },
      { label: "Why rehabilitation is essential after a sports injury", href: "/blog/why-rehabilitation-is-essential-after-a-sports-injury" },
      { label: "ACL surgery cost & recovery in Bangalore", href: "/blog/acl-surgery-cost-and-recovery-bangalore" },
    ],
  },
  {
    keywords: ["spine", "posture", "herniated-disc", "back"],
    links: [
      { label: "Spine Care service", href: "/services/spine-care" },
      { label: "How posture affects spine and joint health", href: "/blog/how-posture-affects-spine-and-joint-health" },
      { label: "Herniated disc pain: expert relief in Bangalore", href: "/blog/herniated-disc-pain-find-expert-relief-in-bangalore-with-dr-nithin-n" },
      { label: "When to see an orthopedic surgeon for joint pain", href: "/blog/when-to-see-orthopedic-surgeon-for-joint-pain" },
    ],
  },
  {
    keywords: ["hip"],
    links: [
      { label: "Hip Replacement service", href: "/services/hip-replacement" },
      { label: "Natural alternatives to hip replacement", href: "/blog/natural-alternatives-to-hip-replacement" },
      { label: "When to see an orthopedic surgeon for joint pain", href: "/blog/when-to-see-orthopedic-surgeon-for-joint-pain" },
      { label: "Non-surgical knee pain treatment", href: "/treatments/non-surgical-knee-pain-treatment" },
    ],
  },
];

/** Always-relevant links used to top up any post to >= 3. */
const GENERIC_LINKS: InternalLink[] = [
  { label: "Best orthopedic surgeon in Attibele", href: "/blog/best-orthopedic-surgeon-in-attibele" },
  { label: "When to see an orthopedic surgeon for joint pain", href: "/blog/when-to-see-orthopedic-surgeon-for-joint-pain" },
  { label: "Explore all treatments", href: "/treatments" },
  { label: "Book an appointment", href: "/contact" },
];

/**
 * Hand-curated links for high-value posts. These take priority and are shown
 * first; topical fallbacks fill any remaining slots up to 3–5 total.
 */
const CURATED_LINKS: Record<string, InternalLink[]> = {
  "best-orthopedic-surgeon-in-attibele": [
    { label: "Knee replacement cost in Bangalore", href: "/blog/knee-replacement-cost-in-bangalore" },
    { label: "When to see an orthopedic surgeon for joint pain", href: "/blog/when-to-see-orthopedic-surgeon-for-joint-pain" },
    { label: "Surgery vs injections for knee pain", href: "/blog/surgery-vs-injections-for-knee-pain" },
    { label: "Explore all treatments", href: "/treatments" },
  ],
  "knee-replacement-cost-in-bangalore": [
    { label: "Types of total knee replacement", href: "/blog/types-of-total-knee-replacement" },
    { label: "Surgery vs injections for knee pain", href: "/blog/surgery-vs-injections-for-knee-pain" },
    { label: "Non-surgical knee pain treatment", href: "/treatments/non-surgical-knee-pain-treatment" },
    { label: "Knee Replacement service", href: "/services/knee-replacement" },
  ],
  "surgery-vs-injections-for-knee-pain": [
    { label: "PRP & GFC injection cost and eligibility", href: "/blog/prp-gfc-injection-cost-eligibility-bangalore" },
    { label: "Knee replacement cost in Bangalore", href: "/blog/knee-replacement-cost-in-bangalore" },
    { label: "Non-surgical knee pain treatment", href: "/treatments/non-surgical-knee-pain-treatment" },
    { label: "Osteoarthritis knee treatment", href: "/treatments/osteoarthritis-knee-treatment" },
  ],
  "prp-gfc-injection-cost-eligibility-bangalore": [
    { label: "GFC treatment for knee pain", href: "/treatments/gfc-treatment-knee-pain" },
    { label: "Surgery vs injections for knee pain", href: "/blog/surgery-vs-injections-for-knee-pain" },
    { label: "Can PRP injections help with chronic joint pain?", href: "/blog/can-prp-injections-help-with-chronic-joint-pain" },
    { label: "Hyaluronic acid injection treatment", href: "/treatments/hyaluronic-acid-injection-treatment" },
  ],
  "when-to-see-orthopedic-surgeon-for-joint-pain": [
    { label: "Best orthopedic surgeon in Attibele", href: "/blog/best-orthopedic-surgeon-in-attibele" },
    { label: "Surgery vs injections for knee pain", href: "/blog/surgery-vs-injections-for-knee-pain" },
    { label: "Are you struggling with joint pain in Bangalore?", href: "/blog/are-you-struggling-with-joint-pain-in-bangalore" },
    { label: "Explore all treatments", href: "/treatments" },
  ],
  "acl-surgery-cost-and-recovery-bangalore": [
    { label: "Can you walk with a torn ACL?", href: "/blog/can-you-walk-with-a-torn-acl-acl-treatment-in-bengaluru" },
    { label: "Bad signs after ACL surgery", href: "/blog/bad-signs-after-acl-surgery" },
    { label: "ACL Care service", href: "/services/acl-care" },
    { label: "Advanced sports injuries treatment", href: "/treatments/advanced-sports-injuries-treatment" },
  ],
};

/**
 * Per-service interlinks. Each service detail page gets >=3 contextual links to
 * related treatments, blog guides, and sibling services. Never self-links
 * (the service index card already covers siblings; here we add cross-topic
 * depth).
 */
const SERVICE_LINKS: Record<string, InternalLink[]> = {
  "acl-care": [
    { label: "ACL surgery cost & recovery in Bangalore", href: "/blog/acl-surgery-cost-and-recovery-bangalore" },
    { label: "Can you walk with a torn ACL?", href: "/blog/can-you-walk-with-a-torn-acl-acl-treatment-in-bengaluru" },
    { label: "Advanced sports injuries treatment", href: "/treatments/advanced-sports-injuries-treatment" },
    { label: "Sports Medicine service", href: "/services/sports-medicine" },
  ],
  "meniscal-care": [
    { label: "Can a meniscus tear heal without surgery?", href: "/blog/can-a-meniscus-tear-heal-without-surgery" },
    { label: "Meniscus tear surgery recovery time", href: "/blog/meniscus-tear-surgery-recovery-time" },
    { label: "Benefits of arthroscopic meniscus repair", href: "/blog/benefits-of-arthroscopic-meniscus-repair-surgery" },
    { label: "ACL Care service", href: "/services/acl-care" },
  ],
  "sports-medicine": [
    { label: "Advanced sports injuries treatment", href: "/treatments/advanced-sports-injuries-treatment" },
    { label: "Why rehabilitation is essential after a sports injury", href: "/blog/why-rehabilitation-is-essential-after-a-sports-injury" },
    { label: "ACL surgery cost & recovery in Bangalore", href: "/blog/acl-surgery-cost-and-recovery-bangalore" },
    { label: "Shoulder Care service", href: "/services/shoulder-care" },
  ],
  "knee-replacement": [
    { label: "Knee replacement cost in Bangalore (2026)", href: "/blog/knee-replacement-cost-in-bangalore" },
    { label: "Types of total knee replacement", href: "/blog/types-of-total-knee-replacement" },
    { label: "Non-surgical knee pain treatment", href: "/treatments/non-surgical-knee-pain-treatment" },
    { label: "Surgery vs injections for knee pain", href: "/blog/surgery-vs-injections-for-knee-pain" },
  ],
  "hip-replacement": [
    { label: "Natural alternatives to hip replacement", href: "/blog/natural-alternatives-to-hip-replacement" },
    { label: "When to see an orthopedic surgeon for joint pain", href: "/blog/when-to-see-orthopedic-surgeon-for-joint-pain" },
    { label: "Osteoarthritis knee treatment", href: "/treatments/osteoarthritis-knee-treatment" },
    { label: "Knee Replacement service", href: "/services/knee-replacement" },
  ],
  "shoulder-care": [
    { label: "Rotator cuff injury: how to treat shoulder pain", href: "/blog/rotator-cuff-injury-heres-how-to-treat-shoulder-pain-effectively" },
    { label: "When is shoulder replacement needed?", href: "/blog/when-is-shoulder-replacement-surgery-needed" },
    { label: "Shoulder arthroscopy explained", href: "/blog/arthroscopy-shoulder" },
    { label: "Sports Medicine service", href: "/services/sports-medicine" },
  ],
  "bone-fracture": [
    { label: "When to see an orthopedic surgeon for joint pain", href: "/blog/when-to-see-orthopedic-surgeon-for-joint-pain" },
    { label: "Why rehabilitation is essential after a sports injury", href: "/blog/why-rehabilitation-is-essential-after-a-sports-injury" },
    { label: "Best orthopedic surgeon in Attibele", href: "/blog/best-orthopedic-surgeon-in-attibele" },
    { label: "Sports Medicine service", href: "/services/sports-medicine" },
  ],
  "spine-care": [
    { label: "Herniated disc pain: expert relief in Bangalore", href: "/blog/herniated-disc-pain-find-expert-relief-in-bangalore-with-dr-nithin-n" },
    { label: "How posture affects spine and joint health", href: "/blog/how-posture-affects-spine-and-joint-health" },
    { label: "When to see an orthopedic surgeon for joint pain", href: "/blog/when-to-see-orthopedic-surgeon-for-joint-pain" },
    { label: "Explore all treatments", href: "/treatments" },
  ],
};

/** Return >=3 internal links for a service detail page (never self-links). */
export function getServiceLinks(slug: string): InternalLink[] {
  const self = `/services/${slug}`;
  const base = (SERVICE_LINKS[slug] ?? []).filter((l) => l.href !== self);
  if (base.length >= 3) return base.slice(0, 5);
  // top up with generic links
  const seen = new Set(base.map((l) => l.href));
  for (const l of GENERIC_LINKS) {
    if (base.length >= 3) break;
    if (l.href !== self && !seen.has(l.href)) {
      base.push(l);
      seen.add(l.href);
    }
  }
  return base.slice(0, 5);
}

/**
 * Return 3–5 de-duplicated internal links for a blog post, never linking to
 * itself.
 */
export function getInternalLinks(slug: string): InternalLink[] {
  const selfBlog = `/blog/${slug}`;
  const seen = new Set<string>();
  const out: InternalLink[] = [];

  const push = (l: InternalLink) => {
    if (l.href === selfBlog) return; // never self-link
    if (seen.has(l.href)) return;
    seen.add(l.href);
    out.push(l);
  };

  // 1. Curated first.
  (CURATED_LINKS[slug] ?? []).forEach(push);

  // 2. Topical fallbacks by slug keyword match.
  for (const pool of TOPIC_LINKS) {
    if (pool.keywords.some((k) => slug.includes(k))) {
      pool.links.forEach(push);
    }
    if (out.length >= 5) break;
  }

  // 3. Generic top-up to guarantee >= 3.
  for (const l of GENERIC_LINKS) {
    if (out.length >= 3) break;
    push(l);
  }

  return out.slice(0, 5);
}

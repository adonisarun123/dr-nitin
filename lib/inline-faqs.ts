import type { BlogFaq } from "./blog-faqs";

/**
 * Extracts Q&A pairs from an FAQ section that is written inline in a blog
 * post's HTML (an <h2>/<h3> containing "FAQ" or "Frequently Asked", followed
 * by <strong>Question?</strong> + answer text, up to the next <h2>).
 *
 * Why: ~55 posts carry a visible FAQ section in their body but emitted no
 * FAQPage JSON-LD, because schema was only generated from lib/blog-faqs.ts.
 * Deriving the schema from the rendered HTML guarantees the structured data
 * matches on-page text (a Google requirement) without duplicating content.
 *
 * Used only when a post has no curated entry in blogFaqs.
 */

const decode = (s: string) =>
    s
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&rsquo;|&lsquo;/g, "'")
        .replace(/&ldquo;|&rdquo;/g, '"')
        .replace(/&ndash;/g, "–")
        .replace(/&mdash;/g, "—")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));

const text = (html: string) =>
    decode(html.replace(/<[^>]+>/g, " "))
        .replace(/\s+/g, " ")
        .trim();

export function extractInlineFaqs(content: string): BlogFaq[] {
    const heading =
        /<h([23])[^>]*>((?:(?!<\/h[23]>)[\s\S])*?(?:FAQ|Frequently Asked)(?:(?!<\/h[23]>)[\s\S])*?)<\/h\1>/i.exec(
            content,
        );
    if (!heading) return [];

    const rest = content.slice(heading.index + heading[0].length);
    const nextH2 = rest.search(/<h2[\s>]/i);
    const block = nextH2 >= 0 ? rest.slice(0, nextH2) : rest;

    const candidates: { start: number; end: number; q: string }[] = [];
    const tagRe = /<(strong|b|h3|h4)[^>]*>([\s\S]*?)<\/\1>/gi;
    let m: RegExpExecArray | null;
    while ((m = tagRe.exec(block))) {
        const q = text(m[2]);
        if (q.endsWith("?")) {
            candidates.push({
                start: m.index,
                end: m.index + m[0].length,
                q: q.replace(/^(Q\s*\d*\s*[:.)-]|\d+[.)])\s*/i, ""),
            });
        }
    }

    const faqs: BlogFaq[] = [];
    candidates.forEach((c, i) => {
        let seg = block.slice(c.end, i + 1 < candidates.length ? candidates[i + 1].start : block.length);
        // The answer ends at the first closing block element; anything after
        // it (CTA lines, sign-offs) is not part of the answer.
        const close = /<\/(p|ul|ol)>/i.exec(seg);
        if (close) seg = seg.slice(0, close.index);
        const a = text(seg).replace(/^A\s*\d*\s*[:.)-]\s*/i, "");
        if (c.q && a.length > 20) faqs.push({ q: c.q, a });
    });

    return faqs.length >= 2 ? faqs : [];
}

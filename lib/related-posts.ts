import { blogPosts } from "./data";

/**
 * "Related Articles" selection for blog posts.
 *
 * WHY: until Nov 2026 the widget took the first 3 posts of the same category in
 * array order. Every post therefore linked to the same handful of early posts,
 * and anything added later (or in a fragmented category like "Knee Pain" vs
 * "Knee Care") received zero links from it. 22 posts had no contextual inbound
 * link at all.
 *
 * NOW: candidates are scored on topical overlap (category, category group,
 * shared slug terms), and ties are broken towards posts that have been picked
 * least so far. The whole map is computed once, deterministically, so link
 * equity is spread across the archive instead of piling onto the oldest posts.
 */

type Post = (typeof blogPosts)[number];

/** Fragmented categories that cover the same body region / topic. */
const CATEGORY_GROUPS: string[][] = [
    ["Knee Care", "Knee Pain", "Knee Surgery", "Meniscal Care", "Osteoarthritis"],
    ["Joint Replacement", "Knee Replacement", "Hip & Joint"],
    ["Spine Health", "Spine Care"],
    ["Sports Medicine", "Sports Injury", "Tendon Care"],
    ["Bone Fracture", "Bone Health"],
    ["Regenerative Medicine", "Osteoarthritis"],
];

const STOP = new Set([
    "a", "an", "and", "are", "can", "do", "does", "for", "how", "in", "is", "it",
    "of", "on", "or", "the", "to", "vs", "what", "when", "why", "with", "you",
    "your", "after", "without", "india", "bangalore", "bengaluru", "dr", "nithin",
    "n", "best", "guide", "treatment", "surgery", "pain", "here", "s", "need",
    "explained", "effectively", "expert", "find", "relief", "common", "signs",
]);

const tokens = (slug: string) =>
    new Set(slug.split("-").filter((t) => t.length > 2 && !STOP.has(t)));

const groupOf = (category: string) =>
    CATEGORY_GROUPS.findIndex((g) => g.includes(category));

function buildMap(posts: readonly Post[], perPost = 3): Map<string, Post[]> {
    const tok = new Map(posts.map((p) => [p.slug, tokens(p.slug)]));
    const picked = new Map<string, number>(posts.map((p) => [p.slug, 0]));
    const out = new Map<string, Post[]>();

    for (const p of posts) {
        const pt = tok.get(p.slug)!;
        const pg = groupOf(p.category);
        const scored = posts
            .filter((q) => q.slug !== p.slug)
            .map((q) => {
                let score = 0;
                if (q.category === p.category) score += 4;
                else if (pg !== -1 && groupOf(q.category) === pg) score += 2;
                for (const t of tok.get(q.slug)!) if (pt.has(t)) score += 1.5;
                return { q, score };
            })
            .filter((x) => x.score > 0)
            .sort(
                (a, b) =>
                    b.score - a.score ||
                    picked.get(a.q.slug)! - picked.get(b.q.slug)!,
            );

        // Take from the top band, preferring under-linked posts within it.
        const band = scored.filter((x) => x.score >= (scored[0]?.score ?? 0) - 2);
        const pool = (band.length >= perPost ? band : scored)
            .slice()
            .sort(
                (a, b) =>
                    picked.get(a.q.slug)! - picked.get(b.q.slug)! ||
                    b.score - a.score,
            );

        const chosen = pool.slice(0, perPost).map((x) => x.q);
        // Fallback for posts with no topical neighbours.
        for (const q of posts) {
            if (chosen.length >= perPost) break;
            if (q.slug !== p.slug && !chosen.includes(q)) chosen.push(q);
        }
        chosen.forEach((q) => picked.set(q.slug, picked.get(q.slug)! + 1));
        out.set(p.slug, chosen);
    }
    return out;
}

const RELATED = buildMap(blogPosts);

export function getRelatedPosts(slug: string): Post[] {
    return RELATED.get(slug) ?? [];
}

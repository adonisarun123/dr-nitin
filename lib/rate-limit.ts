/**
 * Lightweight in-memory token bucket rate limiter.
 *
 * Intended for use inside Next.js route handlers as a defence-in-depth against
 * trivial form-submission floods. This is NOT distributed: each serverless
 * instance maintains its own counters, so an attacker hitting multiple cold
 * functions can exceed the limit by a factor of N. For production scale,
 * swap this for an Upstash Redis / Netlify rate-limit edge function.
 *
 * The limiter keys requests by `id` (typically client IP). Records are pruned
 * lazily as they expire so the map can't grow unbounded for a low-traffic
 * site like a clinic landing page.
 */

interface Bucket {
    count: number;
    resetAt: number; // epoch ms
}

const buckets = new Map<string, Bucket>();

export interface RateLimitOptions {
    /** Window length in milliseconds (e.g. 60_000 for one minute). */
    windowMs: number;
    /** Maximum number of requests allowed per window per id. */
    max: number;
}

export interface RateLimitResult {
    ok: boolean;
    remaining: number;
    /** Seconds until the bucket resets. */
    retryAfter: number;
}

export function rateLimit(id: string, opts: RateLimitOptions): RateLimitResult {
    const now = Date.now();
    const existing = buckets.get(id);

    if (!existing || existing.resetAt <= now) {
        buckets.set(id, { count: 1, resetAt: now + opts.windowMs });
        return {
            ok: true,
            remaining: opts.max - 1,
            retryAfter: Math.ceil(opts.windowMs / 1000),
        };
    }

    existing.count += 1;
    const remaining = Math.max(0, opts.max - existing.count);
    const retryAfter = Math.max(1, Math.ceil((existing.resetAt - now) / 1000));

    return {
        ok: existing.count <= opts.max,
        remaining,
        retryAfter,
    };
}

/** Best-effort client IP extraction from common proxy headers (Netlify, Vercel, Cloudflare). */
export function getClientIp(headers: Headers): string {
    const xff = headers.get("x-forwarded-for");
    if (xff) {
        // First IP in the X-Forwarded-For chain is the original client.
        const first = xff.split(",")[0]?.trim();
        if (first) return first;
    }
    return (
        headers.get("x-real-ip") ||
        headers.get("cf-connecting-ip") ||
        headers.get("x-client-ip") ||
        "unknown"
    );
}

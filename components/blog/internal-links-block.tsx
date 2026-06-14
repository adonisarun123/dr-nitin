import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getInternalLinks } from "@/lib/internal-links";

/**
 * Contextual interlinking block rendered on each blog post.
 *
 * Surfaces 3–5 hand-curated / topically-matched internal links with
 * descriptive anchor text (good for SEO and for the reader), separate from the
 * image-based "Related Articles" widget.
 */
export function InternalLinksBlock({ slug }: { slug: string }) {
  const links = getInternalLinks(slug);
  if (links.length === 0) return null;

  return (
    <nav
      aria-label="Related guides and treatments"
      className="mt-12 rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8"
    >
      <h2 className="mb-4 text-xl font-bold text-gray-900">
        Explore related guides &amp; treatments
      </h2>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group inline-flex items-start gap-2 font-medium text-primary hover:text-blue-700 hover:underline"
            >
              <ArrowUpRight className="mt-0.5 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              <span>{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

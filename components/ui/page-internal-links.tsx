import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface PageLink {
  label: string;
  href: string;
}

/**
 * Reusable contextual interlink block for otherwise link-thin static pages
 * (gallery, team, about, testimonials, etc.). Renders >=3 descriptive internal
 * links so every page meets the site-wide interlinking baseline.
 */
export function PageInternalLinks({
  heading = "Explore more",
  links,
}: {
  heading?: string;
  links: PageLink[];
}) {
  if (!links?.length) return null;
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl my-16">
      <div className="rounded-2xl border border-blue-100 bg-blue-50/60 p-6 sm:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-900">{heading}</h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group inline-flex items-start gap-2 font-medium text-primary hover:text-blue-700 hover:underline"
              >
                <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

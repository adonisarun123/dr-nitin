import { cn } from "@/lib/utils";

interface PageHeaderEditorialProps {
    /** Small uppercase eyebrow above the H1. Optional. */
    eyebrow?: string;
    /** The H1. */
    title: string;
    /** Lead paragraph below the H1. */
    description?: string;
    /** Optional breadcrumb-style trail rendered above the eyebrow. */
    trail?: { label: string; href?: string }[];
    /** Center the content (default true). Set false for left-aligned heads. */
    centered?: boolean;
    className?: string;
}

/**
 * Editorial-clinical page header — direction A.
 *
 * Drop-in replacement for `<PageHeader />` (`components/ui/page-header.tsx`).
 * Adds an optional eyebrow + breadcrumb trail. Uses the editorial serif H1 and
 * a thin rule below the content rather than a coloured background block.
 */
export function PageHeaderEditorial({
    eyebrow,
    title,
    description,
    trail,
    centered = true,
    className,
}: PageHeaderEditorialProps) {
    return (
        <header
            className={cn(
                "bg-white border-b border-gray-200 pt-16 lg:pt-20 pb-12 lg:pb-16",
                className
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className={cn(
                        "max-w-3xl",
                        centered && "mx-auto text-center"
                    )}
                >
                    {trail && trail.length > 0 && (
                        <nav
                            aria-label="Breadcrumb"
                            className={cn(
                                "text-xs text-gray-500 mb-4",
                                centered ? "justify-center" : ""
                            )}
                        >
                            <ol
                                className={cn(
                                    "flex flex-wrap gap-2 items-center",
                                    centered && "justify-center"
                                )}
                            >
                                {trail.map((crumb, i) => (
                                    <li key={i} className="flex items-center gap-2">
                                        {i > 0 && (
                                            <span aria-hidden className="text-gray-300">
                                                /
                                            </span>
                                        )}
                                        {crumb.href ? (
                                            <a
                                                href={crumb.href}
                                                className="hover:text-blue-900"
                                            >
                                                {crumb.label}
                                            </a>
                                        ) : (
                                            <span className="text-gray-700 font-medium">
                                                {crumb.label}
                                            </span>
                                        )}
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    )}

                    {eyebrow && (
                        <div
                            className={cn(
                                "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-blue-800 mb-4",
                                centered ? "justify-center" : ""
                            )}
                        >
                            {!centered && (
                                <span aria-hidden className="h-px w-8 bg-blue-800/60" />
                            )}
                            {eyebrow}
                            {centered && (
                                <span
                                    aria-hidden
                                    className="h-px w-8 bg-blue-800/60 hidden sm:block"
                                />
                            )}
                        </div>
                    )}

                    <h1 className="font-editorial text-[2.25rem] sm:text-5xl lg:text-[3.5rem] leading-[1.1] tracking-[-0.015em] text-gray-900">
                        {title}
                    </h1>

                    {description && (
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mt-6 max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </header>
    );
}

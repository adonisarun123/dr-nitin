import { cn } from "@/lib/utils";

interface PageHeaderBoldProps {
    eyebrow?: string;
    title: string;
    titleAccent?: string;
    description?: string;
    trail?: { label: string; href?: string }[];
    centered?: boolean;
    className?: string;
}

/**
 * Bold modern page header — direction B.
 *
 * Drop-in replacement for `<PageHeader />`. Dark slate hero strip with subtle
 * glow accents. The optional `titleAccent` is the part of the H1 rendered
 * with a cyan/blue gradient.
 */
export function PageHeaderBold({
    eyebrow,
    title,
    titleAccent,
    description,
    trail,
    centered = true,
    className,
}: PageHeaderBoldProps) {
    return (
        <header
            className={cn(
                "relative bg-slate-950 text-white py-16 lg:py-24 overflow-hidden",
                className
            )}
        >
            <div
                aria-hidden
                className="absolute -top-32 right-1/4 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[100px] pointer-events-none"
            />
            <div
                aria-hidden
                className="absolute -bottom-32 left-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[100px] pointer-events-none"
            />
            <div
                aria-hidden
                className="absolute inset-0 opacity-[0.05] pointer-events-none"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                    backgroundSize: "56px 56px",
                    maskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 30%, transparent 75%)",
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
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
                                "text-xs text-blue-100/60 mb-4",
                                centered && "flex justify-center"
                            )}
                        >
                            <ol
                                className={cn(
                                    "flex flex-wrap gap-2 items-center",
                                    centered && "justify-center"
                                )}
                            >
                                {trail.map((crumb, i) => (
                                    <li
                                        key={i}
                                        className="flex items-center gap-2"
                                    >
                                        {i > 0 && (
                                            <span aria-hidden className="text-blue-100/30">
                                                /
                                            </span>
                                        )}
                                        {crumb.href ? (
                                            <a
                                                href={crumb.href}
                                                className="hover:text-white"
                                            >
                                                {crumb.label}
                                            </a>
                                        ) : (
                                            <span className="text-blue-100 font-medium">
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
                                "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-3.5 py-1.5 text-xs font-medium text-blue-100 mb-5",
                                centered && "mx-auto"
                            )}
                        >
                            {eyebrow}
                        </div>
                    )}

                    <h1 className="font-heading font-bold text-[2.5rem] sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-[-0.03em] text-white">
                        {title}{" "}
                        {titleAccent && (
                            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                                {titleAccent}
                            </span>
                        )}
                    </h1>

                    {description && (
                        <p className="text-lg lg:text-xl text-blue-100/80 leading-relaxed mt-6 max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </header>
    );
}

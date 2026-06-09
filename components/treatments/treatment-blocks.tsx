import Link from "next/link";
import { ArrowRight, Info, AlertTriangle, ShieldCheck } from "lucide-react";
import type { TreatmentBlock } from "@/lib/treatments";

/**
 * Renders the structured `TreatmentBlock` array used by treatment pages.
 * Keeps each pillar's content data-driven and consistent.
 */
export function TreatmentBlocks({ blocks }: { blocks: TreatmentBlock[] }) {
    return (
        <>
            {blocks.map((block, idx) => {
                switch (block.type) {
                    case "paragraph":
                        return (
                            <p
                                key={idx}
                                className="text-gray-700 leading-relaxed text-base lg:text-lg mb-4"
                            >
                                {block.text}
                            </p>
                        );

                    case "heading":
                        return (
                            <h3
                                key={idx}
                                className="text-xl lg:text-2xl font-heading font-semibold text-gray-900 mt-6 mb-3"
                            >
                                {block.text}
                            </h3>
                        );

                    case "list":
                        return (
                            <ul key={idx} className="space-y-2 mb-5 pl-1">
                                {block.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-3 text-gray-700 text-base lg:text-lg leading-relaxed"
                                    >
                                        <span
                                            aria-hidden
                                            className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary"
                                        />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );

                    case "ordered":
                        return (
                            <ol
                                key={idx}
                                className="space-y-3 mb-5 list-none counter-reset-treatment"
                            >
                                {block.items.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex gap-4 text-gray-700 text-base lg:text-lg leading-relaxed"
                                    >
                                        <span className="shrink-0 inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary font-semibold text-sm">
                                            {i + 1}
                                        </span>
                                        <span className="pt-0.5">{item}</span>
                                    </li>
                                ))}
                            </ol>
                        );

                    case "table":
                        return (
                            <div
                                key={idx}
                                className="my-6 overflow-x-auto rounded-2xl border border-gray-200"
                            >
                                <table className="w-full text-left text-sm lg:text-base">
                                    <thead className="bg-gray-50 text-gray-900">
                                        <tr>
                                            {block.headers.map((h, i) => (
                                                <th
                                                    key={i}
                                                    className="px-4 py-3 font-semibold border-b border-gray-200"
                                                >
                                                    {h}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        {block.rows.map((row, ri) => (
                                            <tr
                                                key={ri}
                                                className="border-b border-gray-100 last:border-0"
                                            >
                                                {row.map((cell, ci) => (
                                                    <td
                                                        key={ci}
                                                        className="px-4 py-3 text-gray-700 align-top"
                                                    >
                                                        {cell}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        );

                    case "callout": {
                        const tone =
                            block.tone === "warning"
                                ? {
                                    box: "bg-amber-50 border-amber-200 text-amber-900",
                                    Icon: AlertTriangle,
                                }
                                : block.tone === "honest"
                                    ? {
                                        box: "bg-slate-50 border-slate-200 text-slate-800",
                                        Icon: ShieldCheck,
                                    }
                                    : {
                                        box: "bg-blue-50 border-blue-200 text-blue-900",
                                        Icon: Info,
                                    };
                        const { Icon } = tone;
                        return (
                            <div
                                key={idx}
                                className={`my-5 flex gap-3 rounded-2xl border p-4 lg:p-5 ${tone.box}`}
                            >
                                <Icon className="h-5 w-5 shrink-0 mt-0.5" aria-hidden />
                                <p className="text-sm lg:text-base leading-relaxed">
                                    {block.text}
                                </p>
                            </div>
                        );
                    }

                    case "linkCard":
                        return (
                            <Link
                                key={idx}
                                href={block.href}
                                className="group my-3 flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md hover:border-primary/40 transition-all"
                            >
                                <div className="flex-grow">
                                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                        {block.title}
                                    </h4>
                                    <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                                        {block.description}
                                    </p>
                                </div>
                                <ArrowRight className="h-5 w-5 shrink-0 text-primary mt-1 transition-transform group-hover:translate-x-1" />
                            </Link>
                        );

                    default:
                        return null;
                }
            })}
        </>
    );
}

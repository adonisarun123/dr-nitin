import { cn } from "@/lib/utils";

interface PageHeaderProps {
    title: string;
    description?: string;
    className?: string;
    centered?: boolean;
}

export function PageHeader({ title, description, className, centered = true }: PageHeaderProps) {
    return (
        <div className={cn("bg-secondary/30 py-16 lg:py-24", className)}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className={cn("max-w-3xl", centered && "mx-auto text-center")}>
                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">{title}</h1>
                    {description && (
                        <p className="text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

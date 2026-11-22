import React from "react";

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "highlight" | "subtle";
  hoverEffect?: boolean;
}

export function BentoCard({
  children,
  className = "",
  variant = "default",
  hoverEffect = true,
  ...props
}: BentoCardProps) {
  const variantStyles = {
    default: "bg-white/90 backdrop-blur-xl border-slate-200/90 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04)]",
    highlight: "bg-white/95 backdrop-blur-xl border-slate-200 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] bento-highlight",
    subtle: "bg-slate-50/80 backdrop-blur-md border-slate-200/80 shadow-[0_1px_4px_rgba(15,23,42,0.02)]",
  };

  const hoverStyles = hoverEffect
    ? "hover:border-slate-300 hover:shadow-[0_16px_36px_-6px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300"
    : "";

  return (
    <div
      className={`rounded-3xl border p-7 sm:p-8 flex flex-col justify-between ${variantStyles[variant]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoSubCard({
  children,
  className = "",
  hoverEffect = true,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { hoverEffect?: boolean }) {
  return (
    <div
      className={`rounded-2xl bg-white/95 border border-slate-200/80 p-5 shadow-xs ${
        hoverEffect ? "hover:border-slate-300 hover:shadow-sm transition-all duration-200" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoSectionHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
      <div className="flex flex-col gap-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200/90 shadow-xs w-fit text-[11px] font-mono tracking-widest text-blue-700 font-semibold uppercase">
          <span>{eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-wide text-slate-900 font-hero">
          {title}
        </h2>
        {description && (
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl font-sans leading-relaxed">
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function BentoTag({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`px-2.5 py-1 text-[11px] font-mono font-medium rounded-lg bg-slate-100/90 text-slate-700 border border-slate-200/80 ${className}`}
    >
      {children}
    </span>
  );
}

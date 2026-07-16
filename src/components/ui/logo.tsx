import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group inline-flex items-center gap-3" aria-label="MSCI Showcase">
      <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl border border-blue-300/25 bg-blue-500/10 shadow-[inset_0_0_20px_rgba(55,182,255,0.1)]">
        <span className="absolute inset-1 rotate-45 rounded-[7px] border border-cyan-300/25 transition-transform duration-500 group-hover:rotate-90" />
        <span className="font-mono text-[10px] font-bold tracking-[-0.08em] text-blue-100">MS</span>
      </span>
      {!compact ? (
        <span className="leading-none">
          <span className="block font-display text-sm font-semibold tracking-[0.08em] text-white">MSCI</span>
          <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.22em] text-slate-400">Showcase</span>
        </span>
      ) : null}
    </Link>
  );
}

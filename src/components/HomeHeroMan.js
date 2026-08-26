import Image from "next/image";
import Link from "next/link";

const CALLOUTS = [
  {
    id: "cognition",
    label: "Cognition",
    sub: "Focus & Mental Clarity",
    href: "/goals/improve-focus",
    style: { top: "8%", left: "0%" },
  },
  {
    id: "hair",
    label: "Hair",
    sub: "Stronger, Healthier Hair",
    href: "/goals/hair-growth",
    style: { top: "6%", right: "0%" },
  },
  {
    id: "muscle",
    label: "Muscle",
    sub: "Build & Recover Faster",
    href: "/goals/build-muscle",
    style: { top: "34%", right: "0%" },
  },
  {
    id: "longevity",
    label: "Longevity",
    sub: "Live Longer, Better",
    href: "/goals/longevity",
    style: { bottom: "11%", left: "8%" },
  },
  {
    id: "weight",
    label: "Weight Loss",
    sub: "Burn Fat & Feel Great",
    href: "/goals/lose-weight",
    style: { top: "40%", left: "0%" },
  },
  {
    id: "recovery",
    label: "Recovery",
    sub: "Heal & Rebuild",
    href: "/goals/recovery",
    style: { bottom: "14%", right: "6%" },
  },
];

/**
 * Hero visual: exact man image + floating goal callout cards.
 */
export function HomeHeroMan() {
  return (
    <div className="relative mx-auto aspect-[3/4] w-full max-w-[560px] sm:max-w-[620px] lg:max-w-none lg:min-h-[36rem]">
      {/* Soft purple wash — oversized + soft elliptical fade, no rectangular edges */}
      <div
        className="pointer-events-none absolute -inset-[25%]"
        style={{
          background:
            "radial-gradient(ellipse 42% 48% at 50% 46%, rgba(67,56,202,0.4) 0%, rgba(79,70,229,0.22) 35%, rgba(99,102,241,0.1) 58%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 48% 55% at 50% 46%, #000 0%, #000 35%, transparent 72%)",
          maskImage:
            "radial-gradient(ellipse 48% 55% at 50% 46%, #000 0%, #000 35%, transparent 72%)",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 overflow-visible">
        <Image
          src="/hero-man.jpg"
          alt="Athletic figure highlighting peptide research goals"
          fill
          priority
          className="object-contain object-top"
          style={{
            mixBlendMode: "screen",
            // Soft fade on all sides so the photo frame never shows a hard edge
            WebkitMaskImage:
              "radial-gradient(ellipse 72% 78% at 50% 42%, #000 38%, #000 58%, transparent 82%)",
            maskImage:
              "radial-gradient(ellipse 72% 78% at 50% 42%, #000 38%, #000 58%, transparent 82%)",
          }}
          sizes="(max-width: 1024px) 95vw, 620px"
        />
      </div>

      {CALLOUTS.map((c) => (
        <Link
          key={c.id}
          href={c.href}
          className="absolute z-10 max-w-[9.5rem] rounded-xl border border-slate-200/90 bg-white px-2.5 py-1.5 shadow-[0_8px_24px_rgba(15,23,42,0.14)] transition hover:-translate-y-0.5 hover:border-indigo-300 hover:shadow-[0_12px_28px_rgba(79,70,229,0.18)]"
          style={c.style}
        >
          <span className="block text-[11px] font-bold leading-tight text-indigo-700 sm:text-xs">
            {c.label}
          </span>
          <span className="mt-0.5 block text-[9px] leading-snug text-slate-500 sm:text-[10px]">
            {c.sub}
          </span>
        </Link>
      ))}
    </div>
  );
}

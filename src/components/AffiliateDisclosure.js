import {
  AFFILIATE_PAGE_DISCLOSURE,
  AFFILIATE_PROVIDER_DISCLOSURE,
} from "@/data/affiliate-links";

/**
 * @param {{ variant?: "page" | "provider"; className?: string }} props
 */
export function AffiliateDisclosure({ variant = "page", className = "" }) {
  if (variant === "provider") {
    return (
      <p
        className={`leading-relaxed text-slate-600 ${className}`.trim()}
        role="note"
      >
        <span className="font-semibold text-slate-800">Affiliate link:</span>{" "}
        {AFFILIATE_PROVIDER_DISCLOSURE.replace(/^Affiliate link: /, "")}
      </p>
    );
  }

  return (
    <p
      className={`text-sm leading-relaxed text-slate-600 ${className}`.trim()}
      role="note"
    >
      <span className="font-semibold text-slate-800">Affiliate disclosure:</span>{" "}
      {AFFILIATE_PAGE_DISCLOSURE}
    </p>
  );
}

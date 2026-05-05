"use client";

import { useRouter } from "next/navigation";

/** Scrolls to the peptide finder on the home page (same-page navigation). */
export function NavigateToFinderTab({ className, children }) {
  const router = useRouter();
  return (
    <button
      type="button"
      className={className}
      onClick={() => router.replace("/#peptide-finder")}
    >
      {children}
    </button>
  );
}

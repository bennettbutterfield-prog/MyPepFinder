"use client";

import { useState } from "react";
import { NewsletterSignupForm } from "@/components/NewsletterSignupForm";

const SOCIAL_LABELS = ["X", "IG", "YT", "DC"];

export function FooterStayConnected() {
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-900">
        Stay Connected
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {SOCIAL_LABELS.map((label) => (
          <span
            key={label}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-[10px] font-semibold text-slate-400"
            aria-label={label}
          >
            {label}
          </span>
        ))}

        <button
          type="button"
          onClick={() => setShowEmailCapture((open) => !open)}
          aria-expanded={showEmailCapture}
          aria-controls="footer-email-capture"
          className={`flex h-9 w-9 items-center justify-center rounded-full border text-[10px] font-semibold transition ${
            showEmailCapture
              ? "border-indigo-300 bg-indigo-50 text-indigo-700"
              : "border-slate-200 text-slate-500 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700"
          }`}
          aria-label="Subscribe by email"
          title="Subscribe by email"
        >
          Mail
        </button>
      </div>

      {showEmailCapture ? (
        <div id="footer-email-capture" className="mt-4">
          <p className="text-xs leading-relaxed text-slate-500">
            Get research highlights and new tools in your inbox.
          </p>
          <NewsletterSignupForm
            sourcePage="/"
            variant="calculator"
            layout="stacked"
            className="mt-3"
          />
        </div>
      ) : null}
    </div>
  );
}

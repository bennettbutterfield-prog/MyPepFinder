"use client";

import { useState } from "react";

const BUTTON_STYLES = {
  violet:
    "rounded-lg bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-70",
  indigo:
    "rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70",
  calculator:
    "rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70",
};

const INPUT_STYLES = {
  violet:
    "min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20",
  indigo:
    "min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
  calculator:
    "min-w-0 flex-1 rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20",
};

/**
 * @param {{ sourcePage: string; sourcePeptideId?: string; selectedGoal?: string; variant?: "violet" | "indigo" | "calculator"; layout?: "inline" | "stacked"; className?: string }} props
 */
export function NewsletterSignupForm({
  sourcePage,
  sourcePeptideId,
  selectedGoal,
  variant = "violet",
  layout = "inline",
  className = "",
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "newsletter",
          email,
          sourcePage,
          sourcePeptideId: sourcePeptideId ?? null,
          selectedGoal: selectedGoal ?? null,
          wantsUpdates: true,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Unable to subscribe right now.");
      }

      setEmail("");
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to subscribe right now.",
      );
    }
  }

  const formClassName =
    layout === "stacked"
      ? `flex flex-col gap-2 sm:flex-row ${className}`
      : `flex w-full max-w-md gap-2 ${className}`;

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className={formClassName}>
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (status !== "idle") {
              setStatus("idle");
              setError("");
            }
          }}
          placeholder="Enter your email"
          className={INPUT_STYLES[variant]}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className={BUTTON_STYLES[variant]}
        >
          {status === "submitting" ? "Saving..." : "Subscribe"}
        </button>
      </form>

      {status === "success" ? (
        <p className="mt-2 text-xs font-medium text-emerald-700" role="status">
          Thanks — you are on the list.
        </p>
      ) : null}

      {status === "error" && error ? (
        <p className="mt-2 text-xs font-medium text-red-700" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

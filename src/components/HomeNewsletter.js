"use client";

import { useState } from "react";
import { EmailCaptureDisclaimer } from "@/components/EducationalDisclaimer";

export function HomeNewsletter() {
  const [email, setEmail] = useState("");
  const [wantsUpdates, setWantsUpdates] = useState(true);
  const [status, setStatus] = useState("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    setMsg("");
    setStatus("loading");
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        kind: "newsletter",
        selectedGoal: "Homepage — peptide research report interest",
        sourcePage: "/",
        wantsUpdates,
      }),
    });
    setStatus("idle");
    if (!res.ok) {
      setMsg("Could not subscribe right now.");
      return;
    }
    setMsg("Thanks — we will follow up with comparison-focused updates.");
    setEmail("");
  }

  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-8 md:p-10">
      <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        Get a peptide research report sent to your inbox
      </h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 max-w-xl">
        Occasional emails highlight new provider documentation patterns,
        pricing transparency changes, and educational comparison guides.
      </p>
      <form onSubmit={onSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-lg">
        <input
          required
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-950 px-3 py-2.5 text-sm"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-2.5 rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 text-sm font-medium disabled:opacity-50"
        >
          {status === "loading" ? "…" : "Notify me"}
        </button>
      </form>
      <label className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-400 mt-3 max-w-lg">
        <input
          type="checkbox"
          checked={wantsUpdates}
          onChange={(e) => setWantsUpdates(e.target.checked)}
          className="mt-0.5"
        />
        <span>
          Send updates if new providers or pricing changes appear in our
          comparison dataset.
        </span>
      </label>
      {msg ? <p className="text-sm text-emerald-800 dark:text-emerald-300 mt-3">{msg}</p> : null}
      <EmailCaptureDisclaimer />
    </div>
  );
}

"use client";

import { useState } from "react";
import { RETATRUTIDE_ESCALATION_STEPS } from "@/data/retatrutide-dosage-guide";

export function RetatrutideEscalationTimeline() {
  const [active, setActive] = useState(0);
  const step = RETATRUTIDE_ESCALATION_STEPS[active];
  const progress =
    (active / (RETATRUTIDE_ESCALATION_STEPS.length - 1)) * 100;

  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-slate-50 px-4 py-3">
        <p className="text-xs font-bold uppercase tracking-wide text-slate-500">
          Interactive Phase 3 escalation
        </p>
        <p className="mt-0.5 text-sm font-semibold text-slate-900">
          2 mg → 4 mg → 6 mg → 9 mg → 12 mg
        </p>
      </div>

      <div className="px-3 py-5 sm:px-6">
        <div className="relative">
          <div
            className="absolute left-[10%] right-[10%] top-4 h-0.5 bg-slate-200 sm:top-[1.125rem]"
            aria-hidden
          >
            <div
              className="h-0.5 bg-violet-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <ol className="relative z-10 flex items-start justify-between">
            {RETATRUTIDE_ESCALATION_STEPS.map((s, i) => {
              const selected = i === active;
              const complete = i < active;
              return (
                <li key={s.dose} className="flex w-14 flex-col items-center sm:w-20">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-pressed={selected}
                    className={`flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold ring-4 ring-white transition sm:h-9 sm:w-9 sm:text-xs ${
                      selected
                        ? "bg-violet-600 text-white"
                        : complete
                          ? "bg-violet-200 text-violet-800"
                          : "bg-slate-100 text-slate-500 hover:bg-violet-50 hover:text-violet-700"
                    }`}
                  >
                    {s.dose.replace(" mg", "")}
                  </button>
                  <span
                    className={`mt-2 text-center text-[10px] font-semibold sm:text-[11px] ${
                      selected ? "text-violet-700" : "text-slate-500"
                    }`}
                  >
                    {s.dose}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="border-t border-slate-100 bg-violet-50/60 px-4 py-4 sm:px-5">
        <p className="text-sm font-bold text-violet-800">{step.dose} once weekly</p>
        <dl className="mt-2 grid gap-2 sm:grid-cols-3">
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Period
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {step.period}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Stage
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {step.stage}
            </dd>
          </div>
          <div>
            <dt className="text-[10px] font-semibold uppercase tracking-wide text-slate-400">
              Role
            </dt>
            <dd className="mt-0.5 text-xs font-semibold text-slate-800">
              {step.role}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

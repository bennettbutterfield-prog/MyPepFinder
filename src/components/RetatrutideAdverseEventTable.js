"use client";

import { useState } from "react";
import { RETATRUTIDE_ADVERSE_EVENTS } from "@/data/retatrutide-dosage-guide";

export function RetatrutideAdverseEventTable() {
  const [full, setFull] = useState(false);
  const { fullHeaders, simpleHeaders, simpleColumnIndexes, rows, highlightCells } =
    RETATRUTIDE_ADVERSE_EVENTS;

  const visibleIndexes = full
    ? fullHeaders.map((_, i) => i)
    : simpleColumnIndexes;
  const headers = full ? fullHeaders : simpleHeaders;

  return (
    <div className="mt-5">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-base font-bold text-slate-900">
          Phase 2 Adverse Events by Treatment Arm
        </h3>
        <div
          className="inline-flex rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm"
          role="group"
          aria-label="Adverse-event table view"
        >
          <button
            type="button"
            onClick={() => setFull(false)}
            aria-pressed={!full}
            className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
              !full
                ? "bg-violet-600 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Simple view
          </button>
          <button
            type="button"
            onClick={() => setFull(true)}
            aria-pressed={full}
            className={`rounded-md px-3 py-1.5 text-[11px] font-semibold transition ${
              full
                ? "bg-violet-600 text-white"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            Full clinical-trial arms
          </button>
        </div>
      </div>
      {!full ? (
        <p className="mb-3 text-xs text-slate-500">
          Simple view shows 2 mg-start arms for 4 mg, 8 mg and 12 mg — matching
          later Phase 3 escalation. Switch to full view for starting-dose splits.
        </p>
      ) : (
        <p className="mb-3 text-xs text-slate-500">
          Full view preserves every Phase 2 treatment arm, including groups that
          started at 4 mg.
        </p>
      )}

      <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50 text-[10px] uppercase tracking-wide text-slate-500 sm:text-xs">
              {headers.map((h, i) => (
                <th
                  key={`${h}-${i}`}
                  className={`px-2 py-3 font-semibold sm:px-3 ${
                    i === 0 ? "text-left" : "text-right"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-slate-50 last:border-0">
                {visibleIndexes.map((srcIndex, displayIndex) => {
                  const cell = row[srcIndex];
                  const highlight = Boolean(
                    highlightCells[`${row[0]}-${srcIndex}`]
                  );
                  return (
                    <td
                      key={`${row[0]}-${srcIndex}`}
                      className={`px-2 py-3 text-xs sm:px-3 ${
                        displayIndex === 0
                          ? "font-medium text-slate-600"
                          : "text-right tabular-nums text-slate-700"
                      } ${highlight ? "font-bold text-violet-800" : ""}`}
                    >
                      {displayIndex === 0 ? <strong>{cell}</strong> : cell}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Full table always in the document for crawlers / AI parsers */}
      <table className="sr-only">
        <caption>Phase 2 Adverse Events by Treatment Arm</caption>
        <thead>
          <tr>
            {fullHeaders.map((h) => (
              <th key={h}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={`seo-${row[0]}`}>
              {row.map((cell, i) => (
                <td key={`${row[0]}-seo-${i}`}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";

const KIND_LABELS = {
  contact: "Contact",
  newsletter: "Newsletter",
  email_report: "Email report",
  specialist: "Specialist",
};

const KIND_STYLES = {
  contact: "bg-violet-100 text-violet-700",
  newsletter: "bg-indigo-100 text-indigo-700",
  email_report: "bg-teal-100 text-teal-700",
  specialist: "bg-amber-100 text-amber-800",
};

function parseMetadata(metadata) {
  if (!metadata) return null;
  try {
    return JSON.parse(metadata);
  } catch {
    return null;
  }
}

function formatDate(value) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

/**
 * @param {{ leads: Array<{ id: string; email: string; kind: string; selectedGoal: string | null; notes: string | null; sourcePage: string | null; sourcePeptideId: string | null; wantsUpdates: boolean; metadata: string | null; createdAt: Date | string }> }} props
 */
export function LeadsTable({ leads }) {
  const router = useRouter();

  async function handleSignOut() {
    await fetch("/api/admin/session", { method: "DELETE" });
    router.refresh();
  }

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Form submissions</h1>
          <p className="mt-1 text-sm text-slate-500">
            Contact messages, newsletter signups, and other captured emails.
          </p>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Sign out
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="px-4 py-3 font-semibold">When</th>
                <th className="px-4 py-3 font-semibold">Type</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Details</th>
                <th className="px-4 py-3 font-semibold">Source</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-4 py-10 text-center text-slate-500">
                    No submissions yet.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => {
                  const metadata = parseMetadata(lead.metadata);
                  const name =
                    metadata && typeof metadata.name === "string"
                      ? metadata.name
                      : null;

                  return (
                    <tr key={lead.id} className="align-top">
                      <td className="whitespace-nowrap px-4 py-4 text-slate-600">
                        {formatDate(lead.createdAt)}
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ${KIND_STYLES[lead.kind] ?? "bg-slate-100 text-slate-700"}`}
                        >
                          {KIND_LABELS[lead.kind] ?? lead.kind}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <p className="font-medium text-slate-900">{lead.email}</p>
                        {name ? (
                          <p className="mt-0.5 text-xs text-slate-500">{name}</p>
                        ) : null}
                      </td>
                      <td className="max-w-md px-4 py-4 text-slate-600">
                        {lead.selectedGoal ? (
                          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                            {lead.selectedGoal}
                          </p>
                        ) : null}
                        {lead.notes ? (
                          <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed">
                            {lead.notes}
                          </p>
                        ) : (
                          <p className="text-xs text-slate-400">
                            {lead.wantsUpdates ? "Wants updates" : "—"}
                          </p>
                        )}
                      </td>
                      <td className="px-4 py-4 text-xs text-slate-500">
                        {lead.sourcePage ? (
                          <p>{lead.sourcePage}</p>
                        ) : null}
                        {lead.sourcePeptideId ? (
                          <p className="mt-1">{lead.sourcePeptideId}</p>
                        ) : null}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

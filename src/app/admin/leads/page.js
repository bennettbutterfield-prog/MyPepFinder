import { AdminLoginForm } from "@/components/AdminLoginForm";
import { LeadsTable } from "@/components/LeadsTable";
import { getAdminSecret, isAdminAuthenticated } from "@/lib/admin-auth";
import { prisma } from "@/lib/prisma";

export const metadata = {
  title: "Leads | MyPepFinder Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminLeadsPage() {
  const secret = getAdminSecret();

  if (!secret) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
          <h1 className="text-xl font-bold text-slate-900">Admin not configured</h1>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Add <code className="rounded bg-white px-1.5 py-0.5">ADMIN_SECRET</code>{" "}
            to your environment, then restart the app. Submissions are still saved to
            the database when forms are submitted.
          </p>
        </div>
      </div>
    );
  }

  const authed = await isAdminAuthenticated();
  if (!authed) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-16 sm:px-6">
        <AdminLoginForm />
      </div>
    );
  }

  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: "desc" },
    take: 500,
  });

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <LeadsTable leads={leads} />
      </div>
    </div>
  );
}

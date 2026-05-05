"use client";

import { GoalFinderFlow } from "@/components/GoalFinderFlow";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function FindPage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <SiteHeader variant="light" />

      <main className="flex flex-1 flex-col px-4 py-10 sm:px-6 sm:py-14">
        <GoalFinderFlow variant="page" />
      </main>

      <SiteFooter />
    </div>
  );
}

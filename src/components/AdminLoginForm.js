"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    try {
      const response = await fetch("/api/admin/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Invalid password.");
      }

      setPassword("");
      setStatus("success");
      router.refresh();
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Unable to sign in.",
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <h1 className="text-xl font-bold text-slate-900">Admin sign in</h1>
      <p className="mt-2 text-sm text-slate-500">
        Enter your admin password to view form submissions.
      </p>

      <label htmlFor="admin-password" className="mt-5 block text-sm font-semibold text-slate-900">
        Password
      </label>
      <input
        id="admin-password"
        type="password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
          if (status !== "idle") {
            setStatus("idle");
            setError("");
          }
        }}
        className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        autoComplete="current-password"
      />

      {error ? (
        <p className="mt-3 text-sm text-red-700" role="alert">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-indigo-600 px-4 text-sm font-semibold text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";

const TOPICS = [
  { value: "general", label: "General inquiry" },
  { value: "feedback", label: "Website feedback" },
  { value: "research", label: "Research correction or suggestion" },
  { value: "provider", label: "Provider listing question" },
  { value: "privacy", label: "Privacy request" },
  { value: "other", label: "Other" },
];

const initialForm = {
  name: "",
  email: "",
  topic: "general",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);
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
          kind: "contact",
          email: form.email,
          selectedGoal: form.topic,
          notes: form.message,
          sourcePage: "/contact",
          metadata: {
            name: form.name.trim(),
            topic: form.topic,
          },
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setForm(initialForm);
      setStatus("success");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    if (status !== "idle") {
      setStatus("idle");
      setError("");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-sm font-semibold text-slate-900"
          >
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            placeholder="Your name"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-sm font-semibold text-slate-900"
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-topic"
          className="block text-sm font-semibold text-slate-900"
        >
          Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          value={form.topic}
          onChange={(event) => updateField("topic", event.target.value)}
          className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
        >
          {TOPICS.map((topic) => (
            <option key={topic.value} value={topic.value}>
              {topic.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-sm font-semibold text-slate-900"
        >
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-2 w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          placeholder="How can we help?"
        />
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        By submitting this form, you agree that we may use your information to
        respond to your message. See our{" "}
        <a href="/privacy" className="font-semibold text-indigo-600 hover:text-indigo-700">
          Privacy Policy
        </a>
        .
      </p>

      {status === "success" ? (
        <div
          className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800"
          role="status"
        >
          Thanks for reaching out. We received your message and will get back to
          you as soon as we can.
        </div>
      ) : null}

      {status === "error" && error ? (
        <div
          className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
          role="alert"
        >
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-indigo-600 px-5 text-sm font-semibold text-white shadow-sm shadow-indigo-600/25 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

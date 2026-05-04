/**
 * Resend-ready subject + HTML for the emailed research report (placeholder send).
 * Copy avoids dosing or prescriptive language.
 */

/**
 * @param {{
 *   goalLabel: string;
 *   peptideSummaries: { name: string; summary: string }[];
 *   topProviders: {
 *     name: string;
 *     tagline?: string | null;
 *     description: string;
 *     transparencyScore: number;
 *     pricingTransparency?: string | null;
 *     ctaUrl: string;
 *   }[];
 * }} input
 */
export function buildResearchReportEmail(input) {
  const subject = "Your MyPepFinder Research Report";

  const providerBlocks = input.topProviders
    .map(
      (p) => `
      <section style="margin-bottom:24px;padding:16px;border:1px solid #e5e7eb;border-radius:8px;">
        <h3 style="margin:0 0 8px;font-size:18px;">${escapeHtml(p.name)}</h3>
        ${p.tagline ? `<p style="margin:0 0 8px;color:#4b5563;">${escapeHtml(p.tagline)}</p>` : ""}
        <p style="margin:0 0 8px;line-height:1.5;">${escapeHtml(p.description)}</p>
        <p style="margin:0 0 8px;"><strong>Transparency score (stated criteria):</strong> ${p.transparencyScore}</p>
        ${p.pricingTransparency ? `<p style="margin:0 0 8px;line-height:1.5;">${escapeHtml(p.pricingTransparency)}</p>` : ""}
        <a href="${escapeAttr(p.ctaUrl)}" style="display:inline-block;margin-top:8px;color:#2563eb;">View provider site</a>
      </section>`,
    )
    .join("");

  const peptideBlocks = input.peptideSummaries
    .map(
      (pep) => `
      <li style="margin-bottom:12px;">
        <strong>${escapeHtml(pep.name)}</strong> — ${escapeHtml(pep.summary)}
      </li>`,
    )
    .join("");

  const html = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family:system-ui,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#111;">
  <h1 style="font-size:22px;">MyPepFinder research summary</h1>
  <p style="line-height:1.6;">This message is for <strong>informational and comparison purposes</strong> only. It is not medical advice.</p>

  <h2 style="font-size:18px;margin-top:28px;">Selected research focus</h2>
  <p style="line-height:1.6;">${escapeHtml(input.goalLabel)}</p>

  <h2 style="font-size:18px;margin-top:28px;">Peptides commonly associated with this exploration</h2>
  <ul style="padding-left:18px;line-height:1.5;">${peptideBlocks}</ul>

  <h2 style="font-size:18px;margin-top:28px;">Provider comparison (top matches)</h2>
  ${providerBlocks}

  <h2 style="font-size:18px;margin-top:28px;">What to look for in a provider</h2>
  <ul style="line-height:1.6;padding-left:18px;">
    <li>Independent testing documentation and batch-level transparency where available</li>
    <li>Clear product descriptions without prescriptive use claims</li>
    <li>Pricing and shipping policies that are easy to compare</li>
    <li>Responsive support for product questions framed as research</li>
  </ul>

  <p style="margin-top:32px;font-size:13px;color:#6b7280;line-height:1.6;">
    Some links may be affiliate links. Rankings in MyPepFinder remain based on stated comparison criteria, not sponsorship.
    Educational only. Not medical advice. Report is for informational purposes only.
  </p>
</body>
</html>`;

  return { subject, html };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeAttr(s) {
  return escapeHtml(s).replace(/'/g, "&#39;");
}

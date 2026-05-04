/**
 * Lightweight analytics — swap implementation for Segment, PostHog, etc.
 * @param {string} event
 * @param {Record<string, unknown>} [payload]
 */
export function trackEvent(event, payload = {}) {
  const row = {
    ts: new Date().toISOString(),
    event,
    ...payload,
  };
  if (process.env.NODE_ENV === "development") {
    console.info("[analytics]", row);
  }
}

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "MyPepFinder — Optimize You. Research peptides. Compare providers.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const heroBytes = await readFile(
    join(process.cwd(), "public", "hero-man-og.png")
  );
  const heroSrc = `data:image/png;base64,${heroBytes.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #eef2ff 48%, #e0e7ff 100%)",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "54%",
            padding: "64px 28px 64px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 36,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 42,
                height: 42,
                borderRadius: 10,
                background: "rgba(79,70,229,0.12)",
                color: "#4f46e5",
                fontSize: 22,
                fontWeight: 700,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              M
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 28,
                fontWeight: 700,
                color: "#0f172a",
                letterSpacing: "-0.02em",
              }}
            >
              My
              <span style={{ color: "#4f46e5" }}>Pep</span>
              Finder
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 72,
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#0f172a",
              }}
            >
              Optimize{" "}
              <span style={{ color: "#4f46e5", marginLeft: 14 }}>You.</span>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 30,
                fontWeight: 500,
                lineHeight: 1.35,
                color: "#64748b",
                maxWidth: 520,
              }}
            >
              Research peptides. Compare providers.
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "46%",
            height: "100%",
            alignItems: "flex-end",
            justifyContent: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 420,
              height: 420,
              borderRadius: 999,
              background:
                "radial-gradient(circle, rgba(79,70,229,0.35) 0%, rgba(79,70,229,0.08) 55%, transparent 75%)",
              top: "12%",
            }}
          />
          <img
            src={heroSrc}
            width={480}
            height={630}
            alt=""
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              width: 480,
              height: 630,
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}

import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

export function createCalculatorOgImage({ title, description, badge = "Free Tool" }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #f8fafc 0%, #eef2ff 42%, #c7d2fe 78%, #a5b4fc 100%)",
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(79,70,229,0.38) 0%, rgba(99,102,241,0.16) 45%, transparent 72%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "64px",
            textAlign: "center",
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
                background: "rgba(79,70,229,0.14)",
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
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#6366f1",
              marginBottom: 18,
            }}
          >
            {badge}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.04em",
              color: "#0f172a",
              marginBottom: 22,
              maxWidth: 980,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {title}
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 500,
              lineHeight: 1.4,
              color: "#475569",
              maxWidth: 820,
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {description}
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
    }
  );
}

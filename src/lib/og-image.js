import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

const FONT =
  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";

const ACCENTS = {
  indigo: {
    gradient:
      "linear-gradient(135deg, #f8fafc 0%, #eef2ff 42%, #e0e7ff 78%, #c7d2fe 100%)",
    glow: "radial-gradient(circle, rgba(79,70,229,0.34) 0%, rgba(99,102,241,0.12) 45%, transparent 72%)",
    badge: "#6366f1",
    titleAccent: "#4f46e5",
    button: "#4f46e5",
  },
  violet: {
    gradient:
      "linear-gradient(135deg, #faf5ff 0%, #f5f3ff 42%, #ede9fe 78%, #ddd6fe 100%)",
    glow: "radial-gradient(circle, rgba(124,58,237,0.32) 0%, rgba(139,92,246,0.12) 45%, transparent 72%)",
    badge: "#7c3aed",
    titleAccent: "#6d28d9",
    button: "#7c3aed",
  },
  emerald: {
    gradient:
      "linear-gradient(135deg, #f8fafc 0%, #ecfdf5 42%, #d1fae5 78%, #a7f3d0 100%)",
    glow: "radial-gradient(circle, rgba(16,185,129,0.28) 0%, rgba(52,211,153,0.1) 45%, transparent 72%)",
    badge: "#059669",
    titleAccent: "#047857",
    button: "#059669",
  },
};

export async function loadPublicAsset(relativePath) {
  if (!relativePath) return null;
  try {
    const { readFile } = await import("node:fs/promises");
    const { join } = await import("node:path");
    const filePath = join(
      process.cwd(),
      "public",
      relativePath.replace(/^\//, "")
    );
    const data = await readFile(filePath);
    const ext = relativePath.split(".").pop()?.toLowerCase();
    const mime =
      ext === "png"
        ? "image/png"
        : ext === "webp"
          ? "image/webp"
          : "image/jpeg";
    return `data:${mime};base64,${data.toString("base64")}`;
  } catch {
    return null;
  }
}

function truncate(text, max = 140) {
  const value = String(text || "").trim();
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trim()}…`;
}

function OgBrand() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginBottom: 28,
      }}
    >
      <div
        style={{
          display: "flex",
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "rgba(79,70,229,0.14)",
          color: "#4f46e5",
          fontSize: 20,
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
          fontSize: 24,
          fontWeight: 700,
          color: "#0f172a",
          letterSpacing: "-0.02em",
        }}
      >
        My<span style={{ color: "#4f46e5" }}>Pep</span>Finder
      </div>
    </div>
  );
}

function PreviewShell({ children }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        padding: 28,
      }}
    >
      {children}
    </div>
  );
}

function PeptideCalculatorPreview({ accent }) {
  const colors = ACCENTS[accent] || ACCENTS.indigo;
  return (
    <div
      style={{
        display: "flex",
        width: 500,
        height: 420,
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        background: "white",
        boxShadow: "0 18px 50px rgba(15,23,42,0.12)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: 22,
          borderRight: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 28,
              height: 28,
              borderRadius: 999,
              background: colors.button,
              color: "white",
              fontSize: 14,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            1
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Enter Your Information
          </div>
        </div>
        {[88, 88, 88, 88].map((width, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              height: 34,
              width,
              maxWidth: "100%",
              borderRadius: 8,
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
              marginBottom: 10,
            }}
          />
        ))}
        <div
          style={{
            display: "flex",
            height: 40,
            borderRadius: 8,
            background: colors.button,
            marginTop: 8,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: 22,
          background: "#f8fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 28,
              height: 28,
              borderRadius: 999,
              background: colors.button,
              color: "white",
              fontSize: 14,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            2
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Your Results
          </div>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 34,
            fontWeight: 800,
            color: colors.titleAccent,
            marginBottom: 8,
          }}
        >
          0.25 mg
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 14,
            color: "#64748b",
            marginBottom: 18,
          }}
        >
          Draw volume: 10 units
        </div>
        <div
          style={{
            display: "flex",
            height: 12,
            borderRadius: 999,
            background: "#e2e8f0",
            overflow: "hidden",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "62%",
              height: "100%",
              background: colors.button,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 13,
            color: "#475569",
          }}
        >
          Concentration: 2.5 mg/mL
        </div>
      </div>
    </div>
  );
}

function CalorieCalculatorPreview({ accent }) {
  const colors = ACCENTS[accent] || ACCENTS.indigo;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: 500,
        height: 420,
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        background: "white",
        boxShadow: "0 18px 50px rgba(15,23,42,0.12)",
        padding: 22,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 16,
          fontWeight: 700,
          color: "#0f172a",
          marginBottom: 14,
        }}
      >
        Your Calorie Plan
      </div>
      <div
        style={{
          display: "flex",
          gap: 10,
          marginBottom: 16,
        }}
      >
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              flex: 1,
              height: 34,
              borderRadius: 8,
              background: "#f1f5f9",
              border: "1px solid #e2e8f0",
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 10,
          marginBottom: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontWeight: 800,
            color: colors.titleAccent,
          }}
        >
          1,850
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 16,
            color: "#64748b",
          }}
        >
          kcal / day
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 8,
          height: 180,
          padding: "0 8px",
          borderRadius: 12,
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
        }}
      >
        {[72, 96, 118, 132, 148, 156, 164].map((height, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flex: 1,
              height,
              borderRadius: "8px 8px 0 0",
              background:
                index === 6 ? colors.button : "rgba(79,70,229,0.18)",
            }}
          />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 12,
          fontSize: 13,
          color: "#64748b",
        }}
      >
        <span>Projected timeline</span>
        <span style={{ color: colors.titleAccent, fontWeight: 700 }}>
          18 weeks
        </span>
      </div>
    </div>
  );
}

function ProviderCardsPreview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        width: 460,
      }}
    >
      {[
        { initials: "AC", name: "Amino Club", score: "9.4" },
        { initials: "KP", name: "Koi Peptides", score: "9.6" },
        { initials: "PP", name: "Prime Peptides", score: "9.1" },
      ].map((provider) => (
        <div
          key={provider.name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "16px 18px",
            borderRadius: 14,
            background: "white",
            border: "1px solid #e2e8f0",
            boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#4f46e5",
              color: "white",
              fontSize: 14,
              fontWeight: 700,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {provider.initials}
          </div>
          <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
            <div
              style={{
                display: "flex",
                fontSize: 18,
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              {provider.name}
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 13,
                color: "#64748b",
              }}
            >
              Editorial trust score
            </div>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              fontWeight: 700,
              color: "#059669",
            }}
          >
            {provider.score}
          </div>
        </div>
      ))}
    </div>
  );
}

function LibraryPreview() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 12,
        width: 460,
      }}
    >
      {["Retatrutide", "BPC-157", "TB-500", "GHK-Cu", "Semaglutide", "Ipamorelin"].map(
        (name) => (
          <div
            key={name}
            style={{
              display: "flex",
              width: 224,
              padding: "14px 16px",
              borderRadius: 12,
              background: "white",
              border: "1px solid #e2e8f0",
              boxShadow: "0 8px 20px rgba(15,23,42,0.05)",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 15,
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                {name}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 12,
                  color: "#64748b",
                  marginTop: 4,
                }}
              >
                Research profile
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

function ImagePreview({ src, alt }) {
  if (!src) return null;
  return (
    <div
      style={{
        display: "flex",
        width: 460,
        height: 420,
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        background: "white",
        boxShadow: "0 18px 50px rgba(15,23,42,0.12)",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
}

function renderPreview({ preview, previewImage, accent }) {
  if (preview === "calculator-peptide") {
    return (
      <PreviewShell>
        <PeptideCalculatorPreview accent={accent} />
      </PreviewShell>
    );
  }
  if (preview === "calculator-calorie") {
    return (
      <PreviewShell>
        <CalorieCalculatorPreview accent={accent} />
      </PreviewShell>
    );
  }
  if (preview === "providers") {
    return (
      <PreviewShell>
        <ProviderCardsPreview />
      </PreviewShell>
    );
  }
  if (preview === "library") {
    return (
      <PreviewShell>
        <LibraryPreview />
      </PreviewShell>
    );
  }
  if (previewImage) {
    return (
      <PreviewShell>
        <ImagePreview src={previewImage} alt="" />
      </PreviewShell>
    );
  }
  return (
    <PreviewShell>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          width: 420,
          padding: 28,
          borderRadius: 18,
          background: "white",
          border: "1px solid #e2e8f0",
          boxShadow: "0 18px 50px rgba(15,23,42,0.12)",
        }}
      >
        {[1, 2, 3].map((row) => (
          <div
            key={row}
            style={{
              display: "flex",
              height: 18,
              borderRadius: 999,
              background: "#e2e8f0",
              width: row === 1 ? "88%" : row === 2 ? "72%" : "56%",
            }}
          />
        ))}
      </div>
    </PreviewShell>
  );
}

/**
 * @param {{
 *   title: string;
 *   description?: string;
 *   badge?: string;
 *   preview?: "calculator-peptide" | "calculator-calorie" | "providers" | "library" | "default";
 *   previewImage?: string | null;
 *   accent?: keyof typeof ACCENTS;
 * }} options
 */
export async function createPageOgImage({
  title,
  description = "",
  badge,
  preview = "default",
  previewImage = null,
  accent = "indigo",
}) {
  const colors = ACCENTS[accent] || ACCENTS.indigo;
  const imageSrc =
    previewImage && preview === "default"
      ? previewImage
      : preview === "default"
        ? previewImage
        : null;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: colors.gradient,
          fontFamily: FONT,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: 999,
            background: colors.glow,
            top: "50%",
            left: "28%",
            transform: "translate(-50%, -50%)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "52%",
            padding: "56px 48px 56px 64px",
            position: "relative",
          }}
        >
          <OgBrand />
          {badge ? (
            <div
              style={{
                display: "flex",
                fontSize: 18,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: colors.badge,
                marginBottom: 16,
              }}
            >
              {badge}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: title.length > 42 ? 46 : 54,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              color: "#0f172a",
              marginBottom: 18,
            }}
          >
            {title}
          </div>
          {description ? (
            <div
              style={{
                display: "flex",
                fontSize: 24,
                fontWeight: 500,
                lineHeight: 1.4,
                color: "#475569",
              }}
            >
              {truncate(description, 120)}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            width: "48%",
            position: "relative",
          }}
        >
          {renderPreview({
            preview,
            previewImage: imageSrc,
            accent,
          })}
        </div>
      </div>
    ),
    {
      ...ogSize,
    }
  );
}

export function createOgAlt(title, suffix = "MyPepFinder") {
  return `${title} | ${suffix}`;
}

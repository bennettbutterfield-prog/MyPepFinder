import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

const FONT =
  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";

const NAV = [
  "Peptides",
  "Goals",
  "Quiz",
  "Providers",
  "Research",
  "Calculator",
];

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

function truncate(text, max = 160) {
  const value = String(text || "").trim();
  if (value.length <= max) return value;
  return `${value.slice(0, max - 1).trim()}…`;
}

function SiteHeader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 56,
        padding: "0 36px",
        background: "rgba(255,255,255,0.96)",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            display: "flex",
            width: 28,
            height: 28,
            borderRadius: 8,
            background: "rgba(79,70,229,0.12)",
            color: "#4f46e5",
            fontSize: 15,
            fontWeight: 800,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          M
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.02em",
          }}
        >
          My<span style={{ color: "#4f46e5" }}>Pep</span>Finder
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          justifyContent: "center",
          gap: 22,
          marginLeft: 28,
        }}
      >
        {NAV.map((item) => (
          <div
            key={item}
            style={{
              display: "flex",
              fontSize: 14,
              fontWeight: 500,
              color: "#475569",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function Crumbs({ items }) {
  if (!items?.length) return null;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        fontSize: 13,
        color: "#94a3b8",
        marginBottom: 16,
      }}
    >
      {items.map((item, index) => (
        <div key={`${item}-${index}`} style={{ display: "flex", gap: 8 }}>
          {index > 0 ? <div style={{ display: "flex" }}>›</div> : null}
          <div
            style={{
              display: "flex",
              color: index === items.length - 1 ? "#475569" : "#94a3b8",
              fontWeight: index === items.length - 1 ? 600 : 400,
            }}
          >
            {item}
          </div>
        </div>
      ))}
    </div>
  );
}

function PageChrome({ children, background = "#ffffff" }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background,
        fontFamily: FONT,
        overflow: "hidden",
      }}
    >
      <SiteHeader />
      <div
        style={{
          display: "flex",
          flex: 1,
          overflow: "hidden",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function HomePagePreview({ title, description, previewImage }) {
  return (
    <PageChrome background="#ffffff">
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "36px 48px 0",
          background:
            "radial-gradient(ellipse 55% 50% at 12% 30%, rgba(99,102,241,0.12), transparent), radial-gradient(ellipse 45% 40% at 88% 20%, rgba(139,92,246,0.10), transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 520,
            paddingTop: 12,
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              alignItems: "center",
              borderRadius: 999,
              background: "#eef2ff",
              color: "#4338ca",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              padding: "8px 16px",
              marginBottom: 22,
            }}
          >
            Peptide Education & Comparison Platform
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "-0.05em",
              lineHeight: 1.02,
              color: "#0f172a",
            }}
          >
            {title.includes("You") ? (
              <div style={{ display: "flex" }}>
                Optimize <span style={{ color: "#4f46e5", marginLeft: 14 }}>You.</span>
              </div>
            ) : (
              title
            )}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 18,
              fontSize: 22,
              lineHeight: 1.4,
              color: "#64748b",
              maxWidth: 480,
            }}
          >
            {description}
          </div>
          <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 22px",
                borderRadius: 12,
                background: "#4f46e5",
                color: "white",
                fontSize: 16,
                fontWeight: 700,
              }}
            >
              Take the Peptide Quiz
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 48,
                padding: "0 22px",
                borderRadius: 12,
                background: "white",
                color: "#4338ca",
                fontSize: 16,
                fontWeight: 700,
                border: "2px solid #c7d2fe",
              }}
            >
              Explore Peptides
            </div>
          </div>
        </div>
        {previewImage ? (
          <div
            style={{
              display: "flex",
              flex: 1,
              alignItems: "flex-end",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={previewImage}
              alt=""
              style={{
                width: 520,
                height: 520,
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>
        ) : null}
      </div>
    </PageChrome>
  );
}

function PeptideCalculatorPreview() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: 320,
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        background: "white",
        boxShadow: "0 10px 28px rgba(15,23,42,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: 24,
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
              width: 26,
              height: 26,
              borderRadius: 999,
              background: "#4f46e5",
              color: "white",
              fontSize: 13,
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
              fontSize: 18,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            Enter Your Information
          </div>
        </div>
        {["Peptide amount", "Bacteriostatic water", "Desired dose", "Frequency"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                height: 40,
                borderRadius: 10,
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                marginBottom: 10,
                padding: "0 12px",
                color: "#94a3b8",
                fontSize: 14,
              }}
            >
              {label}
            </div>
          )
        )}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 42,
            borderRadius: 10,
            background: "#4f46e5",
            color: "white",
            fontSize: 15,
            fontWeight: 700,
            marginTop: 4,
          }}
        >
          Calculate Dosage
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: 360,
          padding: 24,
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
              width: 26,
              height: 26,
              borderRadius: 999,
              background: "#4f46e5",
              color: "white",
              fontSize: 13,
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
              fontSize: 18,
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
            fontSize: 42,
            fontWeight: 800,
            color: "#4f46e5",
            letterSpacing: "-0.04em",
          }}
        >
          0.25 mg
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 15,
            color: "#64748b",
            marginTop: 6,
            marginBottom: 22,
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
              background: "#4f46e5",
            }}
          />
        </div>
        <div style={{ display: "flex", fontSize: 14, color: "#475569" }}>
          Concentration: 2.5 mg/mL
        </div>
      </div>
    </div>
  );
}

function CalorieCalculatorPreview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: 300,
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        background: "white",
        boxShadow: "0 10px 28px rgba(15,23,42,0.08)",
        padding: 24,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 18,
          fontWeight: 700,
          color: "#0f172a",
          marginBottom: 12,
        }}
      >
        Your Calorie Plan
      </div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 800,
            color: "#4f46e5",
            letterSpacing: "-0.04em",
          }}
        >
          1,850
        </div>
        <div style={{ display: "flex", fontSize: 18, color: "#64748b" }}>
          kcal / day
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 8,
          height: 150,
          marginTop: 20,
          padding: "0 6px",
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
              background: index === 6 ? "#4f46e5" : "rgba(79,70,229,0.18)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ToolPagePreview({
  crumbs,
  title,
  description,
  children,
}) {
  return (
    <PageChrome background="#f8fafc">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "28px 48px 0",
          background:
            "linear-gradient(115deg, #eceef8 0%, #eef2ff 22%, #f5f7fb 48%, #ffffff 78%)",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#0f172a",
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 22,
            fontSize: 18,
            lineHeight: 1.4,
            color: "#64748b",
            maxWidth: 760,
          }}
        >
          {description}
        </div>
        {children}
      </div>
    </PageChrome>
  );
}

function QuizPagePreview({ title, description, crumbs }) {
  const goals = [
    { label: "Lose weight", detail: "Appetite, body fat, and metabolic health." },
    { label: "Build muscle and performance", detail: "Muscle, strength, and training progress." },
    { label: "Repair and recovery", detail: "Injured tissue, joints, nerves, and gut." },
    { label: "Focus and mood", detail: "Attention, memory, stress, and clarity." },
    { label: "Sleep better", detail: "Falling asleep, staying asleep, feeling rested." },
    { label: "Hair growth", detail: "Thinning hair, follicles, and scalp research." },
  ];

  return (
    <PageChrome background="#f8fafc">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "24px 48px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            marginBottom: 16,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#94a3b8",
            }}
          >
            Research-effects match
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              fontSize: 34,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
              color: "#0f172a",
              marginTop: 6,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              width: "100%",
              marginTop: 8,
              fontSize: 16,
              lineHeight: 1.4,
              color: "#64748b",
            }}
          >
            {truncate(description, 140)}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 24,
            border: "1px solid #e2e8f0",
            background: "white",
            padding: 22,
            boxShadow: "0 8px 24px rgba(15,23,42,0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 8,
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#94a3b8",
            }}
          >
            <div style={{ display: "flex" }}>Your goal</div>
            <div style={{ display: "flex" }}>0%</div>
          </div>
          <div
            style={{
              display: "flex",
              height: 6,
              borderRadius: 999,
              background: "#e2e8f0",
              marginBottom: 16,
            }}
          />
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
            }}
          >
            {goals.map((goal) => (
              <div
                key={goal.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: 508,
                  padding: "12px 14px",
                  borderRadius: 16,
                  background: "white",
                  border: "1px solid #e2e8f0",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  {goal.label}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 13,
                    color: "#64748b",
                    marginTop: 3,
                  }}
                >
                  {goal.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageChrome>
  );
}

function ProvidersPagePreview({ title, description, crumbs }) {
  const providers = [
    { initials: "AC", name: "Amino Club", score: "4.6/5", tag: "Best Value" },
    { initials: "RV", name: "RIVN Research", score: "4.9/5", tag: "Top Reviews" },
    { initials: "MH", name: "Mile High Compounds", score: "4.8/5", tag: "Strong Testing" },
    { initials: "PT", name: "Peptora", score: "Batch detail", tag: "Premium" },
  ];

  return (
    <PageChrome background="#ffffff">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "28px 48px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#0f172a",
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 22,
            fontSize: 17,
            color: "#64748b",
            maxWidth: 820,
          }}
        >
          {description}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {providers.map((provider, index) => (
            <div
              key={provider.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                padding: "14px 18px",
                borderRadius: 16,
                background: "white",
                border: "1px solid #e2e8f0",
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
                  #{index + 1} {provider.name}
                </div>
                <div style={{ display: "flex", fontSize: 13, color: "#64748b" }}>
                  {provider.tag}
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
      </div>
    </PageChrome>
  );
}

function LibraryPagePreview({ title, description, crumbs }) {
  const names = [
    "Retatrutide",
    "Semaglutide",
    "Tirzepatide",
    "BPC-157",
    "TB-500",
    "GHK-Cu",
  ];
  return (
    <PageChrome background="#f8fafc">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "28px 48px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#94a3b8",
          }}
        >
          Reference Index
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#0f172a",
            marginTop: 6,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 22,
            fontSize: 17,
            color: "#64748b",
            maxWidth: 760,
          }}
        >
          {description}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            padding: 18,
            borderRadius: 20,
            background: "white",
            border: "1px solid #e2e8f0",
          }}
        >
          {names.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                width: 346,
                padding: "16px 18px",
                borderRadius: 14,
                background: "white",
                border: "1px solid #e2e8f0",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div
                  style={{
                    display: "flex",
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0f172a",
                  }}
                >
                  {name}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 13,
                    color: "#64748b",
                    marginTop: 4,
                  }}
                >
                  Research profile
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageChrome>
  );
}

function PeptidePagePreview({
  title,
  description,
  badge,
  crumbs,
  tags,
  previewImage,
  callouts,
}) {
  return (
    <PageChrome background="#f8fafc">
      <div style={{ display: "flex", width: "100%", height: "100%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 188,
            padding: "22px 16px",
            background: "white",
            borderRight: "1px solid #e2e8f0",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#94a3b8",
              marginBottom: 10,
              paddingLeft: 8,
            }}
          >
            Goals
          </div>
          {["Lose Weight", "Build Muscle", "Improve Focus", "Better Sleep", "Hair Growth", "Skin Health"].map(
            (goal, index) => (
              <div
                key={goal}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 10px",
                  borderRadius: 8,
                  background: index === 0 ? "#f5f3ff" : "transparent",
                  color: index === 0 ? "#6d28d9" : "#475569",
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                {goal}
              </div>
            )
          )}
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            padding: "24px 32px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 520,
              paddingRight: 24,
            }}
          >
            <Crumbs items={crumbs} />
            {badge ? (
              <div
                style={{
                  display: "flex",
                  alignSelf: "flex-start",
                  borderRadius: 999,
                  background: "#ede9fe",
                  color: "#6d28d9",
                  fontSize: 12,
                  fontWeight: 700,
                  padding: "5px 10px",
                  marginBottom: 10,
                }}
              >
                {badge}
              </div>
            ) : null}
            <div
              style={{
                display: "flex",
                fontSize: title.length > 22 ? 36 : 44,
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                color: "#0f172a",
              }}
            >
              {title}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 12,
                fontSize: 17,
                lineHeight: 1.45,
                color: "#64748b",
              }}
            >
              {truncate(description, 180)}
            </div>
            {tags?.length ? (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {tags.slice(0, 4).map((tag) => (
                  <div
                    key={tag}
                    style={{
                      display: "flex",
                      borderRadius: 999,
                      background: "#f5f3ff",
                      color: "#6d28d9",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "5px 10px",
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            ) : null}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 180,
                height: 42,
                marginTop: 20,
                borderRadius: 10,
                background: "#7c3aed",
                color: "white",
                fontSize: 15,
                fontWeight: 700,
              }}
            >
              Compare Providers
            </div>
          </div>
          {previewImage ? (
            <div
              style={{
                display: "flex",
                width: 380,
                height: 500,
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid #e2e8f0",
                background: "white",
              }}
            >
              <img
                src={previewImage}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: 360,
                borderRadius: 20,
                border: "1px solid #e2e8f0",
                background: "white",
                padding: 16,
              }}
            >
              {(callouts || [
                { label: "Mechanism", body: "How researchers describe the pathway." },
                { label: "Evidence", body: "Human and laboratory findings, kept separate." },
                { label: "Limitation", body: "What the studies do not establish." },
              ]).slice(0, 3).map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "12px 14px",
                    borderRadius: 14,
                    border: "1px solid #e2e8f0",
                    background: "#fafafa",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 14,
                      fontWeight: 700,
                      color: "#6d28d9",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 13,
                      lineHeight: 1.35,
                      color: "#64748b",
                      marginTop: 4,
                    }}
                  >
                    {truncate(item.body, 90)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </PageChrome>
  );
}

function GoalPagePreview({
  title,
  description,
  crumbs,
  previewImage,
  stats,
}) {
  return (
    <PageChrome background="#ffffff">
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "28px 48px 0",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: previewImage ? 560 : "100%",
            paddingRight: 28,
          }}
        >
          <Crumbs items={crumbs} />
          <div
            style={{
              display: "flex",
              fontSize: 42,
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#0f172a",
              lineHeight: 1.05,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 14,
              fontSize: 18,
              lineHeight: 1.45,
              color: "#64748b",
            }}
          >
            {truncate(description, 170)}
          </div>
          {stats?.length ? (
            <div style={{ display: "flex", gap: 12, marginTop: 22 }}>
              {stats.slice(0, 3).map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 150,
                    padding: "12px 14px",
                    borderRadius: 14,
                    background: "#f8fafc",
                    border: "1px solid #f1f5f9",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 22,
                      fontWeight: 800,
                      color: "#0f172a",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 12,
                      color: "#64748b",
                      marginTop: 2,
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
        {previewImage ? (
          <div
            style={{
              display: "flex",
              width: 480,
              height: 420,
              borderRadius: 20,
              overflow: "hidden",
            }}
          >
            <img
              src={previewImage}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        ) : null}
      </div>
    </PageChrome>
  );
}

function GoalsIndexPreview({ title, description, crumbs }) {
  const goals = [
    "Lose Weight",
    "Cognition",
    "Build Muscle",
    "Better Sleep",
    "Hair Growth",
    "Skin Health",
    "Sexual Health",
    "Longevity",
  ];
  return (
    <PageChrome background="#f8fafc">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "28px 48px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#94a3b8",
          }}
        >
          Browse by Goal
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 36,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#0f172a",
            marginTop: 6,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 10,
            marginBottom: 22,
            fontSize: 17,
            color: "#64748b",
            maxWidth: 720,
          }}
        >
          {description}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {goals.map((goal) => (
            <div
              key={goal}
              style={{
                display: "flex",
                width: 258,
                height: 88,
                alignItems: "flex-end",
                padding: 14,
                borderRadius: 16,
                background: "white",
                border: "1px solid #e2e8f0",
                fontSize: 16,
                fontWeight: 700,
                color: "#0f172a",
              }}
            >
              {goal}
            </div>
          ))}
        </div>
      </div>
    </PageChrome>
  );
}

function DefaultPagePreview({ title, description, badge, crumbs }) {
  return (
    <PageChrome background="#ffffff">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "40px 56px 0",
          background:
            "radial-gradient(ellipse 55% 50% at 12% 30%, rgba(99,102,241,0.08), transparent)",
        }}
      >
        <Crumbs items={crumbs} />
        {badge ? (
          <div
            style={{
              display: "flex",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#94a3b8",
              marginBottom: 10,
            }}
          >
            {badge}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 36 ? 40 : 48,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.08,
            color: "#0f172a",
            maxWidth: 900,
          }}
        >
          {title}
        </div>
        {description ? (
          <div
            style={{
              display: "flex",
              marginTop: 16,
              fontSize: 22,
              lineHeight: 1.45,
              color: "#64748b",
              maxWidth: 820,
            }}
          >
            {truncate(description, 200)}
          </div>
        ) : null}
      </div>
    </PageChrome>
  );
}

/**
 * @param {{
 *   title: string;
 *   description?: string;
 *   badge?: string;
 *   preview?: "home" | "calculator-peptide" | "calculator-calorie" | "providers" | "library" | "quiz" | "peptide" | "goal" | "goals" | "default";
 *   previewImage?: string | null;
 *   crumbs?: string[];
 *   tags?: string[];
 *   stats?: Array<{ value: string; label: string }>;
 *   callouts?: Array<{ label: string; body: string }>;
 * }} options
 */
export async function createPageOgImage({
  title,
  description = "",
  badge,
  preview = "default",
  previewImage = null,
  crumbs,
  tags,
  stats,
  callouts,
}) {
  const trail = crumbs?.length ? crumbs : ["Home", title];

  let element;
  if (preview === "home") {
    element = (
      <HomePagePreview
        title={title}
        description={description}
        previewImage={previewImage}
      />
    );
  } else if (preview === "calculator-peptide") {
    element = (
      <ToolPagePreview title={title} description={description} crumbs={trail}>
        <PeptideCalculatorPreview />
      </ToolPagePreview>
    );
  } else if (preview === "calculator-calorie") {
    element = (
      <ToolPagePreview title={title} description={description} crumbs={trail}>
        <CalorieCalculatorPreview />
      </ToolPagePreview>
    );
  } else if (preview === "quiz") {
    element = (
      <QuizPagePreview
        title={title}
        description={description}
        crumbs={trail}
      />
    );
  } else if (preview === "providers") {
    element = (
      <ProvidersPagePreview
        title={title}
        description={description}
        crumbs={trail}
      />
    );
  } else if (preview === "library") {
    element = (
      <LibraryPagePreview
        title={title}
        description={description}
        crumbs={trail}
      />
    );
  } else if (preview === "peptide") {
    element = (
      <PeptidePagePreview
        title={title}
        description={description}
        badge={badge}
        crumbs={trail}
        tags={tags}
        previewImage={previewImage}
        callouts={callouts}
      />
    );
  } else if (preview === "goal") {
    element = (
      <GoalPagePreview
        title={title}
        description={description}
        crumbs={trail}
        previewImage={previewImage}
        stats={stats}
      />
    );
  } else if (preview === "goals") {
    element = (
      <GoalsIndexPreview
        title={title}
        description={description}
        crumbs={trail}
      />
    );
  } else {
    element = (
      <DefaultPagePreview
        title={title}
        description={description}
        badge={badge}
        crumbs={trail}
      />
    );
  }

  return new ImageResponse(element, {
    ...ogSize,
  });
}

export function createOgAlt(title, suffix = "MyPepFinder") {
  return `${title} | ${suffix}`;
}

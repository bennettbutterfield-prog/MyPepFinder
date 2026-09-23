import { ImageResponse } from "next/og";

export const ogSize = {
  width: 1200,
  height: 630,
};

export const ogContentType = "image/png";

const FONT =
  "ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif";

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

function CoverImage({ src, width, height, radius = 0, position = "center top" }) {
  if (!src) return null;
  return (
    <div
      style={{
        display: "flex",
        width,
        height,
        overflow: "hidden",
        borderRadius: radius,
        flexShrink: 0,
        background: "#f8fafc",
      }}
    >
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        style={{
          width,
          height,
          objectFit: "cover",
          objectPosition: position,
        }}
      />
    </div>
  );
}

function SiteHeader() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: 88,
        padding: "0 36px",
        background: "rgba(255,255,255,0.96)",
        borderBottom: "1px solid #f1f5f9",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            display: "flex",
            width: 36,
            height: 36,
            borderRadius: 10,
            background: "rgba(79,70,229,0.12)",
            color: "#4f46e5",
            fontSize: 18,
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
            fontSize: 26,
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.02em",
          }}
        >
          My<span style={{ color: "#4f46e5" }}>Pep</span>Finder
        </div>
      </div>
      <div style={{ display: "flex", gap: 18, color: "#64748b", fontSize: 28 }}>
        <div style={{ display: "flex" }}>⌕</div>
        <div style={{ display: "flex" }}>☰</div>
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
        flexWrap: "wrap",
        gap: 8,
        fontSize: 20,
        color: "#94a3b8",
        marginBottom: 20,
      }}
    >
      {items.slice(0, 3).map((item, index) => (
        <div key={`${item}-${index}`} style={{ display: "flex", gap: 8 }}>
          {index > 0 ? <div style={{ display: "flex" }}>›</div> : null}
          <div
            style={{
              display: "flex",
              color: index === Math.min(items.length, 3) - 1 ? "#475569" : "#94a3b8",
              fontWeight: index === Math.min(items.length, 3) - 1 ? 600 : 400,
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
          flexDirection: "column",
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
          flexDirection: "column",
          width: "100%",
          height: "100%",
          padding: "40px 40px 0",
          background:
            "radial-gradient(ellipse 80% 40% at 20% 10%, rgba(99,102,241,0.12), transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            borderRadius: 999,
            background: "#eef2ff",
            color: "#4338ca",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "10px 18px",
            marginBottom: 24,
          }}
        >
          Peptide Education
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 800,
            letterSpacing: "-0.05em",
            lineHeight: 1.05,
            color: "#0f172a",
          }}
        >
          {title.includes("You") ? (
            <div style={{ display: "flex" }}>
              Optimize <span style={{ color: "#4f46e5", marginLeft: 16 }}>You.</span>
            </div>
          ) : (
            title
          )}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 28,
            lineHeight: 1.35,
            color: "#64748b",
          }}
        >
          {description}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 14,
            marginTop: 28,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: 64,
              borderRadius: 16,
              background: "#4f46e5",
              color: "white",
              fontSize: 24,
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
              height: 64,
              borderRadius: 16,
              background: "white",
              color: "#4338ca",
              fontSize: 24,
              fontWeight: 700,
              border: "2px solid #c7d2fe",
            }}
          >
            Explore Peptides
          </div>
        </div>
        {previewImage ? (
          <CoverImage
            src={previewImage}
            width={1000}
            height={1100}
            radius={24}
            position="center top"
          />
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
        flexDirection: "column",
        width: "100%",
        borderRadius: 24,
        overflow: "hidden",
        border: "1px solid #e2e8f0",
        background: "white",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", padding: 28 }}>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: 18,
          }}
        >
          1. Enter Your Information
        </div>
        {["Peptide amount", "Bacteriostatic water", "Desired dose", "Frequency"].map(
          (label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                height: 56,
                borderRadius: 14,
                background: "#f8fafc",
                border: "1px solid #e2e8f0",
                marginBottom: 12,
                padding: "0 16px",
                color: "#94a3b8",
                fontSize: 22,
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
            height: 60,
            borderRadius: 14,
            background: "#4f46e5",
            color: "white",
            fontSize: 22,
            fontWeight: 700,
            marginTop: 6,
          }}
        >
          Calculate Dosage
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 28,
          background: "#f8fafc",
          borderTop: "1px solid #e2e8f0",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            fontWeight: 700,
            color: "#0f172a",
            marginBottom: 12,
          }}
        >
          2. Your Results
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 56,
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
            fontSize: 22,
            color: "#64748b",
            marginTop: 8,
          }}
        >
          Draw volume: 10 units
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
        borderRadius: 24,
        border: "1px solid #e2e8f0",
        background: "white",
        padding: 28,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 26,
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
            fontSize: 64,
            fontWeight: 800,
            color: "#4f46e5",
          }}
        >
          1,850
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#64748b" }}>
          kcal / day
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: 10,
          height: 280,
          marginTop: 24,
          padding: "0 8px",
          borderRadius: 16,
          background: "#f8fafc",
          border: "1px solid #e2e8f0",
        }}
      >
        {[90, 120, 150, 170, 190, 205, 220].map((height, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              flex: 1,
              height,
              borderRadius: "10px 10px 0 0",
              background: index === 6 ? "#4f46e5" : "rgba(79,70,229,0.18)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

function ToolPagePreview({ crumbs, title, description, children }) {
  return (
    <PageChrome background="#f8fafc">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "36px 40px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 48,
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
            marginTop: 14,
            marginBottom: 28,
            fontSize: 24,
            lineHeight: 1.4,
            color: "#64748b",
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
    { label: "Build muscle and performance", detail: "Muscle, strength, and training." },
    { label: "Repair and recovery", detail: "Tissue, joints, nerves, and gut." },
    { label: "Focus and mood", detail: "Attention, memory, and clarity." },
    { label: "Sleep better", detail: "Falling and staying asleep." },
    { label: "Hair growth", detail: "Follicles and scalp research." },
  ];

  return (
    <PageChrome background="#f8fafc">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "32px 36px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#94a3b8",
          }}
        >
          Research-effects match
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#0f172a",
            marginTop: 8,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            marginBottom: 24,
            fontSize: 22,
            lineHeight: 1.4,
            color: "#64748b",
          }}
        >
          {truncate(description, 120)}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: 28,
            border: "1px solid #e2e8f0",
            background: "white",
            padding: 24,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10,
              fontSize: 16,
              fontWeight: 700,
              letterSpacing: "0.12em",
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
              height: 8,
              borderRadius: 999,
              background: "#e2e8f0",
              marginBottom: 18,
            }}
          />
          {goals.map((goal) => (
            <div
              key={goal.label}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "16px 18px",
                borderRadius: 18,
                background: "white",
                border: "1px solid #e2e8f0",
                marginBottom: 12,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                {goal.label}
              </div>
              <div
                style={{
                  display: "flex",
                  fontSize: 18,
                  color: "#64748b",
                  marginTop: 4,
                }}
              >
                {goal.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageChrome>
  );
}

function ProvidersPagePreview({ title, description, crumbs }) {
  const providers = [
    { initials: "AC", name: "Amino Club", score: "4.6/5" },
    { initials: "RV", name: "RIVN Research", score: "4.9/5" },
    { initials: "MH", name: "Mile High Compounds", score: "4.8/5" },
    { initials: "PT", name: "Peptora", score: "Batch detail" },
  ];

  return (
    <PageChrome background="#ffffff">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "36px 40px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 44,
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
            marginTop: 14,
            marginBottom: 28,
            fontSize: 22,
            lineHeight: 1.4,
            color: "#64748b",
          }}
        >
          {truncate(description, 140)}
        </div>
        {providers.map((provider, index) => (
          <div
            key={provider.name}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "20px 18px",
              borderRadius: 20,
              background: "white",
              border: "1px solid #e2e8f0",
              marginBottom: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                width: 56,
                height: 56,
                borderRadius: 16,
                background: "#4f46e5",
                color: "white",
                fontSize: 18,
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
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#0f172a",
                }}
              >
                #{index + 1} {provider.name}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: 20,
                fontWeight: 700,
                color: "#059669",
              }}
            >
              {provider.score}
            </div>
          </div>
        ))}
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
          padding: "36px 40px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#94a3b8",
          }}
        >
          Reference Index
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 48,
            fontWeight: 800,
            color: "#0f172a",
            marginTop: 8,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            marginBottom: 24,
            fontSize: 22,
            color: "#64748b",
          }}
        >
          {truncate(description, 120)}
        </div>
        {names.map((name) => (
          <div
            key={name}
            style={{
              display: "flex",
              padding: "22px 20px",
              borderRadius: 18,
              background: "white",
              border: "1px solid #e2e8f0",
              marginBottom: 12,
              fontSize: 26,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            {name}
          </div>
        ))}
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "32px 36px 0",
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
              fontSize: 18,
              fontWeight: 700,
              padding: "8px 14px",
              marginBottom: 14,
            }}
          >
            {badge}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 18 ? 48 : 56,
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
            marginTop: 14,
            fontSize: 24,
            lineHeight: 1.4,
            color: "#64748b",
          }}
        >
          {truncate(description, 150)}
        </div>
        {tags?.length ? (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
            {tags.slice(0, 3).map((tag) => (
              <div
                key={tag}
                style={{
                  display: "flex",
                  borderRadius: 999,
                  background: "#f5f3ff",
                  color: "#6d28d9",
                  fontSize: 18,
                  fontWeight: 600,
                  padding: "7px 12px",
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
            height: 56,
            marginTop: 20,
            marginBottom: 24,
            borderRadius: 14,
            background: "#7c3aed",
            color: "white",
            fontSize: 22,
            fontWeight: 700,
          }}
        >
          Compare Providers
        </div>
        {previewImage ? (
          <CoverImage
            src={previewImage}
            width={1008}
            height={720}
            radius={24}
            position="center top"
          />
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: 24,
              border: "1px solid #e2e8f0",
              background: "white",
              padding: 18,
            }}
          >
            {(callouts || [
              { label: "Mechanism", body: "How researchers describe the pathway." },
              { label: "Evidence", body: "Human and laboratory findings, kept separate." },
              { label: "Limitation", body: "What the studies do not establish." },
            ])
              .slice(0, 3)
              .map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "16px 16px",
                    borderRadius: 16,
                    border: "1px solid #e2e8f0",
                    background: "#fafafa",
                    marginBottom: 10,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      fontSize: 20,
                      fontWeight: 700,
                      color: "#6d28d9",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      fontSize: 18,
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
    </PageChrome>
  );
}

function GoalPagePreview({ title, description, crumbs, previewImage, stats }) {
  return (
    <PageChrome background="#ffffff">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "36px 40px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 56,
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
            marginTop: 16,
            fontSize: 24,
            lineHeight: 1.4,
            color: "#64748b",
          }}
        >
          {truncate(description, 150)}
        </div>
        {stats?.length ? (
          <div style={{ display: "flex", gap: 12, marginTop: 22, marginBottom: 24 }}>
            {stats.slice(0, 2).map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                  padding: "16px 18px",
                  borderRadius: 18,
                  background: "#f8fafc",
                  border: "1px solid #f1f5f9",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    fontSize: 32,
                    fontWeight: 800,
                    color: "#0f172a",
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    display: "flex",
                    fontSize: 18,
                    color: "#64748b",
                    marginTop: 4,
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        ) : null}
        {previewImage ? (
          <CoverImage
            src={previewImage}
            width={1000}
            height={900}
            radius={24}
            position="center top"
          />
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
          padding: "36px 40px 0",
        }}
      >
        <Crumbs items={crumbs} />
        <div
          style={{
            display: "flex",
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#94a3b8",
          }}
        >
          Browse by Goal
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 44,
            fontWeight: 800,
            color: "#0f172a",
            marginTop: 8,
            lineHeight: 1.1,
          }}
        >
          {title}
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            marginBottom: 24,
            fontSize: 22,
            color: "#64748b",
          }}
        >
          {truncate(description, 120)}
        </div>
        {goals.map((goal) => (
          <div
            key={goal}
            style={{
              display: "flex",
              alignItems: "center",
              height: 88,
              padding: "0 22px",
              borderRadius: 20,
              background: "white",
              border: "1px solid #e2e8f0",
              marginBottom: 12,
              fontSize: 24,
              fontWeight: 700,
              color: "#0f172a",
            }}
          >
            {goal}
          </div>
        ))}
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
          padding: "48px 44px 0",
          background:
            "radial-gradient(ellipse 80% 40% at 20% 10%, rgba(99,102,241,0.08), transparent)",
        }}
      >
        <Crumbs items={crumbs} />
        {badge ? (
          <div
            style={{
              display: "flex",
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#94a3b8",
              marginBottom: 14,
            }}
          >
            {badge}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            fontSize: title.length > 28 ? 48 : 56,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            color: "#0f172a",
          }}
        >
          {title}
        </div>
        {description ? (
          <div
            style={{
              display: "flex",
              marginTop: 20,
              fontSize: 26,
              lineHeight: 1.45,
              color: "#64748b",
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

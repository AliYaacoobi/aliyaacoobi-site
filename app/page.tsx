export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
        fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
      }}
    >
      <div style={{ maxWidth: 720, width: "100%" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 10px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 999,
            fontSize: 12,
            letterSpacing: 0.6,
            textTransform: "uppercase",
          }}
        >
          Website under construction
        </div>

        <h1 style={{ marginTop: 18, fontSize: 48, lineHeight: 1.1 }}>
          Ali Yaacoobi
        </h1>

        <p style={{ marginTop: 10, fontSize: 18, opacity: 0.85 }}>
          Product Manager
        </p>

        <div
          style={{
            marginTop: 28,
            padding: 18,
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.6, opacity: 0.9 }}>
            <strong>ABOUT ME:</strong> Product Manager focused on building and scaling digital products that connect customers, agents, and businesses. I lead end-to-end product work across consumer purchase funnels, internal platforms, and third-party integrations, driving measurable gains in conversion, retention, and operational efficiency. From 0-to-1 launches to optimizing mature systems, I partner closely with engineering and data to ship solutions that move real business metrics..
          </p>
        </div>

        <div style={{ marginTop: 28 }}>
          <p style={{ margin: 0, fontSize: 14, opacity: 0.7 }}>Contact</p>
          <div style={{ marginTop: 10, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="mailto:ali.yaacoobi@gmail.com"
              style={{
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              ali.yaacoobi@gmail.com
            </a>

            <a
              href="https://www.linkedin.com/in/aliyaacoobi"
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p style={{ marginTop: 28, fontSize: 12, opacity: 0.55 }}>
          © {new Date().getFullYear()} Ali Yaacoobi
        </p>
      </div>
    </main>
  );
}
// app/page.tsx

export default function Home() {
  const email = "ali.yaacoobi@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/aliyaacoobi/"; // 

  return (
    <main style={styles.page}>
      {/* Background glow */}
      <div style={styles.bgGlow} />

      {/* Top nav */}
      <header style={styles.header}>
        <div style={styles.brand}>
          <div style={styles.brandName}>Ali Yaacoobi</div>
          <div style={styles.brandRole}>Product Manager</div>
        </div>

        <nav style={styles.nav}>
          <a href="#" style={styles.navLink}>Home</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section style={styles.heroWrap}>
        <div style={styles.hero}>
          <div style={styles.badge}>Website under construction</div>

          <h1 style={styles.h1}>Ali Yaacoobi</h1>
          <p style={styles.subhead}>Product Manager</p>

          {/* Keep your description as-is (edit inside this box only if you want) */}
          <div style={styles.aboutCard}>
            <div style={styles.aboutTitle}>ABOUT ME:</div>
            <p style={styles.aboutText}>
              Product Manager focused on building and scaling digital products that connect customers,
              agents, and businesses. I lead end-to-end product work across consumer purchase funnels,
              internal platforms, and third-party integrations, driving measurable gains in conversion,
              retention, and operational efficiency. From 0-to-1 launches to optimizing mature systems,
              I partner closely with engineering and data to ship solutions that move real business metrics.
            </p>
          </div>

          {/* CTAs */}
          <div id="contact" style={styles.ctaRow}>
            <a href={`mailto:${email}`} style={styles.ctaPrimary}>
              Contact
            </a>

            <a
              href={linkedinUrl}
              target="_blank"
              rel="noreferrer"
              style={styles.ctaIcon}
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>

          <div style={styles.contactLine}>
            <span style={{ opacity: 0.7 }}>Email:</span>&nbsp;
            <a href={`mailto:${email}`} style={styles.inlineLink}>
              {email}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0.5 23.5h4V7.5h-4v16zM8.5 7.5h3.8v2.2h.05c.53-1 1.83-2.2 3.77-2.2 4.03 0 4.78 2.65 4.78 6.1v9.9h-4v-8.8c0-2.1-.04-4.8-2.92-4.8-2.93 0-3.38 2.29-3.38 4.65v8.95h-4v-16z" />
    </svg>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    color: "rgba(255,255,255,0.92)",
    background: "linear-gradient(180deg, #050509 0%, #090912 45%, #050509 100%)",
    position: "relative",
    overflow: "hidden",
    padding: "28px 22px 60px",
    fontFamily:
      "system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif",
  },
  bgGlow: {
    position: "absolute",
    inset: "-40%",
    background:
      "radial-gradient(closest-side at 30% 20%, rgba(120,120,255,0.20), rgba(0,0,0,0) 60%)",
    filter: "blur(10px)",
    pointerEvents: "none",
  },
  header: {
    position: "relative",
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px 4px 18px",
  },
  brand: { display: "flex", flexDirection: "column", gap: 2 },
  brandName: { fontSize: 16, fontWeight: 650, letterSpacing: 0.2 },
  brandRole: { fontSize: 12, opacity: 0.7 },
  nav: { display: "flex", gap: 18, fontSize: 13 },
  navLink: {
    color: "rgba(255,255,255,0.75)",
    textDecoration: "none",
    borderBottom: "1px solid rgba(255,255,255,0.12)",
    paddingBottom: 2,
  },
  heroWrap: {
    position: "relative",
    maxWidth: 1100,
    margin: "0 auto",
    paddingTop: 28,
    display: "flex",
    justifyContent: "center",
  },
  hero: {
    width: "100%",
    maxWidth: 820,
    borderRadius: 20,
    padding: "34px 28px",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.03) 100%)",
    border: "1px solid rgba(255,255,255,0.10)",
    boxShadow: "0 20px 70px rgba(0,0,0,0.55)",
    backdropFilter: "blur(10px)",
  },
  badge: {
    display: "inline-block",
    fontSize: 12,
    letterSpacing: 1.1,
    textTransform: "uppercase",
    padding: "7px 12px",
    borderRadius: 999,
    border: "1px solid rgba(255,255,255,0.14)",
    background: "rgba(0,0,0,0.22)",
    marginBottom: 14,
  },
  h1: { fontSize: 52, lineHeight: 1.05, margin: 0, fontWeight: 750 },
  subhead: { marginTop: 10, marginBottom: 18, fontSize: 18, opacity: 0.78 },
  aboutCard: {
    marginTop: 18,
    borderRadius: 16,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(0,0,0,0.22)",
    padding: "16px 16px",
  },
  aboutTitle: { fontSize: 13, fontWeight: 700, opacity: 0.95, marginBottom: 8 },
  aboutText: { margin: 0, fontSize: 15, lineHeight: 1.6, opacity: 0.85 },
  ctaRow: { display: "flex", gap: 12, alignItems: "center", marginTop: 18 },
  ctaPrimary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 14px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.16)",
    color: "rgba(255,255,255,0.92)",
    textDecoration: "none",
    fontSize: 14,
    fontWeight: 600,
  },
  ctaIcon: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 42,
    height: 42,
    borderRadius: 12,
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.14)",
    color: "rgba(255,255,255,0.90)",
    textDecoration: "none",
  },
  contactLine: { marginTop: 14, fontSize: 13, opacity: 0.85 },
  inlineLink: { color: "rgba(255,255,255,0.92)", textDecoration: "underline" },
};
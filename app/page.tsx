 "use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const profile = {
  name: "Ali Yaacoobi",
  title: "Product Manager & Digital Builder",
  location: "San Francisco Bay Area",
  email: "ali.yaacoobi@gmail.com",
  linkedin: "https://www.linkedin.com/in/aliyaacoobi/",
};

const featuredProjects = [
  {
    title: "Connected Buying Journey",
    summary:
      "Led end-to-end product strategy for a multi-step digital funnel that improved conversion and handoff quality between customer and agent touchpoints.",
    impact: "Increased qualified conversion and reduced drop-off through key journey stages.",
  },
  {
    title: "Internal Operations Platform",
    summary:
      "Built prioritization framework and roadmap for internal tools that reduced friction for support and operations teams.",
    impact: "Improved cycle time and enabled faster decision-making across teams.",
  },
  {
    title: "Third-Party Integrations",
    summary:
      "Owned integration product work with external partners, aligning APIs, requirements, and release sequencing.",
    impact: "Delivered stable launches with measurable retention and efficiency gains.",
  },
];

const testimonials = [
  {
    quote:
      "From a Product Team perspective, Ali is an absolute machine, tackling complex projects that require persistence and tenacity. Soon after he started, he took ownership of several mission-critical projects for Amplify. Over 3.5 years, he helped integrate major strategic partners and supported first-to-market delivery on a disruptive insurance product. From a Designer's perspective, Ali is the product manager every designer hopes to work with: requirements are thorough and actionable, feedback loops are strong, communication is clear, and he consistently pays attention to detail.",
    author: "Devon Latzen, Senoior Product Designer - Amplify",
  },
  {
    quote:
      "Over several years working together, I never experienced friction collaborating with Ali. He consistently delivered clear, well-thought-out requirements, led productive brainstorming sessions, and drove exceptionally strong PRDs. His ability to juggle multiple product domains across B2B, B2C, and internal tools is rare. Beyond the work itself, Ali is genuine, thoughtful, hard-working, and creates a collaboration environment that feels natural and authentic.",
    author: "Dallas Miller, Senior Product Designer - Amplify",
  },
  {
    quote:
      "I had the pleasure of working with Ali for nearly three years at Amplify and was consistently impressed by his capabilities. He led a mission-critical end-to-end project and delivered the world's first fully digital cash value life insurance purchasing experience. The project required deep detail management across scope, stakeholders, and timelines, and Ali remained professional, poised, and focused throughout.",
    author: "Chris Sherman, Senior Product Manager - Amplify",
  },
];

export default function Home() {
  const sectionRefs = useRef<{
    about: HTMLElement | null;
    work: HTMLElement | null;
    testimonials: HTMLElement | null;
  }>({
    about: null,
    work: null,
    testimonials: null,
  });

  useEffect(() => {
    const sections = Object.values(sectionRefs.current).filter(Boolean) as HTMLElement[];

    const updateSectionMotion = () => {
      const viewportHeight = window.innerHeight;
      const viewportCenter = viewportHeight / 2;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const distance = Math.abs(viewportCenter - sectionCenter);
        const normalized = Math.min(distance / (viewportHeight * 0.72), 1);

        const scale = 1 - normalized * 0.14;
        const opacity = 1 - normalized * 0.64;
        const blur = normalized * 4;

        section.style.setProperty("--section-scale", scale.toFixed(3));
        section.style.setProperty("--section-opacity", opacity.toFixed(3));
        section.style.setProperty("--section-blur", `${blur.toFixed(2)}px`);
      });
    };

    let rafId = 0;
    const onScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        updateSectionMotion();
        rafId = 0;
      });
    };

    updateSectionMotion();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main>
      <header className="hero" id="top">
        <nav className="top-nav container">
          <div className="nav-left">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="brand-mark">AY</div>
          <a className="nav-right" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>

        <div className="hero-content container">
          <p className="eyebrow">Portfolio</p>
          <h1>
            Hello, I&apos;m {profile.name},
            <br />
            a product manager &amp; digital builder.
          </h1>
          <p className="hero-meta">{profile.location}</p>
        </div>

        <div className="mountain-art" aria-hidden="true">
          <div className="mountain-back" />
          <div className="mountain-mid" />
          <div className="mountain-front" />
          <svg className="peak-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polyline points="18,46 29,68 47,18 63,72 79,28" />
            <polyline points="13,55 23,74 40,20 52,62 68,34 84,76" />
            <polyline points="9,68 20,82 38,30 55,65 73,42 88,83" />
          </svg>
          <div className="forest" />
        </div>
      </header>

      <section className="section" id="about">
        <div
          ref={(el) => {
            sectionRefs.current.about = el;
          }}
          className="container scroll-section"
        >
          <div className="section-intro">
          <p className="eyebrow">About Me</p>
          <h2>Building products that connect customer value to business results.</h2>
          </div>

          <div className="about-layout">
            <Image
              className="profile-photo"
              src="/images/LI_PHOTO.jpeg"
              alt="Ali Yaacoobi profile"
              width={210}
              height={210}
              priority
            />
            <div className="about-copy">
              <p>
                I&apos;m a product manager focused on digital experiences across customer funnels,
                internal platforms, and partner integrations. I lead 0-to-1 launches and scale
                existing systems with measurable impact on conversion, retention, and operational
                efficiency.
              </p>
              <p>
                I work closely with engineering, design, and data teams to define clear product
                direction and deliver practical solutions that move real metrics.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt" id="work">
        <div
          ref={(el) => {
            sectionRefs.current.work = el;
          }}
          className="container scroll-section"
        >
          <div className="section-intro centered">
            <p className="eyebrow">My Work</p>
            <h2>Selected product work and outcomes.</h2>
          </div>

          <div className="project-grid">
            {featuredProjects.map((project) => (
              <article key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <p className="impact">{project.impact}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="testimonials">
        <div
          ref={(el) => {
            sectionRefs.current.testimonials = el;
          }}
          className="container scroll-section"
        >
          <div className="section-intro centered">
            <p className="eyebrow">What People Are Saying</p>
            <h2>Feedback from people I&apos;ve worked with.</h2>
          </div>

          <div className="testimonial-list">
            {testimonials.map((item) => (
              <blockquote key={item.author} className="testimonial-card">
                <p>{item.quote}</p>
                <cite>{item.author}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" id="contact">
        <div className="container footer-content">
          <h2>Let&apos;s Connect</h2>
          <p>
            Reach me at <a href={`mailto:${profile.email}`}>{profile.email}</a> or on{" "}
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </footer>
    </main>
  );
}

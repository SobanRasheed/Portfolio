import { useEffect, useRef, useState, type FormEvent } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowDownRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Cloud,
  Code2,
  Copy,
  Database,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  Server,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const heroImage = "/manus-storage/soban-hero-grid_e05eec9b.png";
const projectImage = "/manus-storage/soban-project-surface_347cadb5.png";

const projects = [
  {
    number: "01",
    title: "Looma",
    category: "Workflow orchestration",
    description:
      "An opinionated control plane for stitching together automations without losing the human thread.",
    stack: ["Next.js", "Postgres", "Redis"],
    href: "https://github.com/",
    demo: "https://vercel.com/",
    className: "project-card project-card--feature",
    visual: "project-visual--image",
  },
  {
    number: "02",
    title: "Patchbay",
    category: "Developer tooling",
    description:
      "A local-first API playground that turns complex service maps into one clear command surface.",
    stack: ["TypeScript", "Node", "Docker"],
    href: "https://github.com/",
    demo: "https://github.com/",
    className: "project-card project-card--wide",
    visual: "project-visual--lime",
  },
  {
    number: "03",
    title: "Cairn",
    category: "Open source",
    description:
      "Tiny observability primitives for teams who want useful signals before another dashboard.",
    stack: ["Go", "OpenTelemetry"],
    href: "https://github.com/",
    demo: "https://github.com/",
    className: "project-card project-card--wide",
    visual: "project-visual--slate",
  },
];

const skills = [
  { label: "TypeScript", group: "Languages", level: "Advanced", value: 94, icon: Braces },
  { label: "React / Next.js", group: "Frontend", level: "Advanced", value: 92, icon: Code2 },
  { label: "Node.js", group: "Backend", level: "Advanced", value: 89, icon: Server },
  { label: "PostgreSQL", group: "Data", level: "Advanced", value: 86, icon: Database },
  { label: "Cloud systems", group: "Infrastructure", level: "Working", value: 78, icon: Cloud },
  { label: "Product thinking", group: "Practice", level: "Advanced", value: 90, icon: Sparkles },
];

const articles = [
  {
    date: "Sep 18, 2025",
    read: "8 min read",
    title: "The quiet power of boring infrastructure",
    excerpt: "Why the best systems are the ones that leave room for the work that matters.",
    href: "https://medium.com/",
  },
  {
    date: "Aug 02, 2025",
    read: "6 min read",
    title: "Designing APIs for the second idea",
    excerpt: "A practical argument for naming, constraints, and the future you cannot predict yet.",
    href: "https://dev.to/",
  },
  {
    date: "Jun 27, 2025",
    read: "11 min read",
    title: "Open source as a listening practice",
    excerpt: "Shipping code is only half the job. The other half is noticing what people do with it.",
    href: "https://github.com/",
  },
];

const resumeText = `SOBAN RASHEED\nFull-stack developer\n\nFocus: TypeScript, React, Node.js, PostgreSQL, cloud systems\nOpen source: Maintainer of small, useful developer tools\nContact: hello@soban.dev\nGitHub: github.com/sobanrasheed`;

function LogoMark() {
  return (
    <span className="logo-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

function AppLink({ href, children, className = "" }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: "power3.out", delay: 0.15 },
      );

      gsap.utils.toArray<HTMLElement>(".scroll-reveal").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 42, opacity: 0, scale: 0.97 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      gsap.fromTo(
        ".signal-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: { trigger: "#workbench", start: "top 78%", end: "bottom 25%", scrub: true },
        },
      );

      gsap.to(".orbit-ring", { rotate: 360, duration: 28, repeat: -1, ease: "none" });
      gsap.to(".orbit-dot", { rotate: -360, duration: 18, repeat: -1, ease: "none" });

      gsap.utils.toArray<HTMLElement>(".reveal-word").forEach((word, index) => {
        gsap.fromTo(
          word,
          { opacity: 0.16 },
          {
            opacity: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: "#philosophy",
              start: `top+=${index * 26} 68%`,
              end: `top+=${index * 26 + 110} 42%`,
              scrub: true,
            },
          },
        );
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("hello@soban.dev");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div ref={root} className="site-shell">
      <div className="noise" aria-hidden="true" />
      <div className="scroll-progress" aria-hidden="true" />

      <header className="site-nav">
        <a href="#top" className="brand-lockup" aria-label="Soban Rasheed home">
          <LogoMark />
          <span>SR<span className="brand-slash">/</span>24</span>
        </a>

        <nav className={`nav-links ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#workbench" onClick={() => setMenuOpen(false)}>Stack</a>
          <a href="#writing" onClick={() => setMenuOpen(false)}>Writing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <div className="nav-actions">
          <span className="availability"><span className="availability-dot" /> Open to select work</span>
          <a className="nav-github" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <Github size={17} />
          </a>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      <main id="top" className="overflow-x-hidden">
        <section className="hero-section section-pad">
          <div className="hero-copy">
            <p className="eyebrow hero-reveal"><span className="eyebrow-mark">✳</span> Full-stack developer · Lahore / Remote</p>
            <h1 className="hero-title hero-reveal">
              Building <span className="hero-highlight">calm</span> software for a noisy world.
            </h1>
            <div className="hero-bottom hero-reveal">
              <p className="hero-intro">I’m Soban — a product-minded engineer shaping fast, durable systems from first sketch to final deploy.</p>
              <div className="hero-actions">
                <a className="button button--lime" href="#work">See selected work <ArrowDownRight size={16} /></a>
                <AppLink className="text-link" href="https://github.com/">Browse GitHub <ArrowUpRight size={16} /></AppLink>
              </div>
            </div>
          </div>
          <div className="hero-visual hero-reveal" aria-label="Abstract terminal grid artwork">
            <div className="hero-image-wrap">
              <img src={heroImage} alt="Abstract neon developer workspace" />
              <div className="hero-image-wash" />
              <div className="hero-terminal">
                <div className="terminal-top"><span className="terminal-dots"><i /><i /><i /></span><span>~/projects/quiet-systems</span><span>⌘ K</span></div>
                <div className="terminal-body">
                  <span className="terminal-prompt">$</span><span className="terminal-command"> pnpm run ship</span>
                  <span className="terminal-result">→ compiled in 1.42s</span>
                  <span className="terminal-result terminal-result--lime">→ live at soban.dev</span>
                </div>
              </div>
              <div className="hero-corner-label">/ selected signal <span>01</span></div>
            </div>
          </div>
          <div className="hero-scroll-note"><span className="scroll-line" /> Scroll to explore</div>
        </section>

        <section className="marquee-band" aria-label="Technologies">
          <div className="marquee-track">
            {["TypeScript", "React", "Node.js", "PostgreSQL", "GraphQL", "Docker", "AWS", "Open source", "TypeScript", "React", "Node.js", "PostgreSQL"].map((item, index) => (
              <span key={`${item}-${index}`}><i />{item}</span>
            ))}
          </div>
        </section>

        <section id="work" className="section-pad work-section">
          <div className="section-heading scroll-reveal">
            <div>
              <p className="eyebrow"><span className="eyebrow-mark">✳</span> Selected work</p>
              <h2>Useful things,<br /><em>made legible.</em></h2>
            </div>
            <p className="section-aside">A few recent builds across product, platform, and open source. Each one starts with a messy question and ends with a quieter answer.</p>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <article key={project.number} className={`${project.className} scroll-reveal`}>
                <div className={`project-visual ${project.visual}`}>
                  {project.visual === "project-visual--image" ? (
                    <img src={projectImage} alt="Looma interface on a dark desk" />
                  ) : (
                    <>
                      <div className="visual-grid" />
                      <div className="visual-window">
                        <div className="visual-window-bar"><span /><span /><span /></div>
                        <div className="visual-code"><i /><i /><i /><i /><i /></div>
                        <div className="visual-window-output">{project.title === "Patchbay" ? "api.map → ready" : "trace.id → 4f2a"}</div>
                      </div>
                    </>
                  )}
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-content">
                  <div className="project-meta"><span>{project.category}</span><span className="project-arrow"><ArrowUpRight size={17} /></span></div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-footer">
                    <div className="stack-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                    <div className="project-links"><AppLink href={project.demo}>Live <ExternalLink size={13} /></AppLink><AppLink href={project.href}>Repo <Github size={13} /></AppLink></div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="philosophy" className="philosophy-section section-pad">
          <div className="philosophy-inner">
            <p className="eyebrow scroll-reveal"><span className="eyebrow-mark">✳</span> A working philosophy</p>
            <p className="philosophy-statement" aria-label="Build systems that give people room to think">
              <span className="reveal-word">Build</span>{" "}<span className="reveal-word">systems</span>{" "}<span className="reveal-word">that</span>{" "}<span className="reveal-word">give</span>{" "}<span className="reveal-word">people</span>{" "}<span className="reveal-word">room</span>{" "}<span className="reveal-word">to</span>{" "}<span className="reveal-word">think.</span>
            </p>
            <div className="philosophy-foot"><span>01 / 03</span><span className="signal-line" /><span>Less noise. More signal.</span></div>
          </div>
        </section>

        <section id="workbench" className="section-pad workbench-section">
          <div className="workbench-sticky scroll-reveal">
            <p className="eyebrow"><span className="eyebrow-mark">✳</span> The workbench</p>
            <h2>A stack that<br /><em>stays curious.</em></h2>
            <p>I like technologies that disappear into the work: expressive enough for the idea, dependable enough for the next five years.</p>
            <div className="orbit-mark" aria-hidden="true"><span className="orbit-ring" /><span className="orbit-dot"><span /></span><span className="orbit-core">SR</span></div>
          </div>
          <div className="skill-matrix">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div className="skill-row scroll-reveal" key={skill.label}>
                  <div className="skill-index">0{index + 1}</div>
                  <div className="skill-icon"><Icon size={18} /></div>
                  <div className="skill-name"><strong>{skill.label}</strong><span>{skill.group}</span></div>
                  <div className="skill-meter"><span style={{ width: `${skill.value}%` }} /></div>
                  <div className="skill-level">{skill.level}</div>
                </div>
              );
            })}
            <div className="skill-note scroll-reveal"><Terminal size={16} /><span>Currently exploring:</span> event-driven systems, WebGPU, and better ways to explain architecture.</div>
          </div>
        </section>

        <section id="writing" className="section-pad writing-section">
          <div className="section-heading scroll-reveal">
            <div><p className="eyebrow"><span className="eyebrow-mark">✳</span> From the notebook</p><h2>Thinking in<br /><em>public.</em></h2></div>
            <a className="text-link" href="https://medium.com/" target="_blank" rel="noreferrer">All writing <ArrowUpRight size={16} /></a>
          </div>
          <div className="articles-list">
            {articles.map((article, index) => (
              <AppLink className="article-row scroll-reveal" href={article.href} key={article.title}>
                <div className="article-index">0{index + 1}</div>
                <div className="article-copy"><div className="article-meta"><span>{article.date}</span><span>{article.read}</span></div><h3>{article.title}</h3><p>{article.excerpt}</p></div>
                <div className="article-action"><ArrowUpRight size={20} /></div>
              </AppLink>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section section-pad">
          <div className="contact-intro scroll-reveal">
            <p className="eyebrow"><span className="eyebrow-mark">✳</span> Have a good problem?</p>
            <h2>Let’s make<br /><em>something clear.</em></h2>
            <p>Tell me what you’re building, where it’s stuck, or what you’re curious about. I’ll get back to you within a few working days.</p>
            <div className="contact-links">
              <button className="email-button" onClick={copyEmail}><Mail size={16} /> hello@soban.dev <span>{copied ? <Check size={14} /> : <Copy size={14} />}</span></button>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn <ArrowUpRight size={14} /></a>
            </div>
          </div>
          <form className="contact-form scroll-reveal" onSubmit={handleSubmit}>
            <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="Ada Lovelace" /></div>
            <div className="form-field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="ada@analytical.engine" /></div>
            <div className="form-field"><label htmlFor="message">A little context</label><textarea id="message" name="message" required rows={4} placeholder="I’m working on a tool that..." /></div>
            <button type="submit" className="button button--lime form-submit">{sent ? <>Message queued <Check size={16} /></> : <>Send a note <ArrowUpRight size={16} /></>}</button>
            <p className="form-note">No pitch deck required. Just the interesting part.</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top"><a href="#top" className="brand-lockup"><LogoMark /><span>SR<span className="brand-slash">/</span>24</span></a><a className="resume-link" href={`data:text/plain;charset=utf-8,${encodeURIComponent(resumeText)}`} download="Soban-Rasheed-Resume.txt"><Download size={15} /> Download resume <ArrowUpRight size={14} /></a></div>
        <div className="footer-bottom"><span>© 2025 Soban Rasheed</span><span>Crafted with focus + a little caffeine.</span><div className="footer-nav"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:hello@soban.dev">Email</a></div></div>
      </footer>
    </div>
  );
}

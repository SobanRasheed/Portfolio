import { useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronDown,
  Copy,
  Download,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X,
} from "lucide-react";

const portraitImage = "/manus-storage/soban-portrait-red_8dec445a.png";

const projects = [
  { title: "YumQuick", type: "React · Flutter · Food delivery", description: "A marketing website and cross-platform mobile app for a food delivery startup, from menu browsing to the order flow.", desktopImage: "/manus-storage/yumquick-desktop_f23640f7.png", mobileImage: "/manus-storage/yumquick-mobile_49578ca3.png", tone: "project-red", href: "https://github.com/SobanRasheed", demo: "https://yumquick.vercel.app/" },
  { title: "DocFlow", type: "Flutter · React · Vite · Node.js", description: "A cross-platform document conversion app with a self-hosted engine for PDF, Word, image conversion, and compression.", desktopImage: "/manus-storage/docflow-desktop_a83b9f0b.png", mobileImage: "/manus-storage/docflow-mobile_47f70ac4.png", tone: "project-gray", href: "https://github.com/SobanRasheed", demo: "https://docflowmarketing.vercel.app/" },
  { title: "Social Frontend", type: "React · Community platform · Manga", description: "An interactive entertainment platform for memberships, manga discovery, stories, events, and creator communities.", desktopImage: "/manus-storage/social-frontend-desktop_f1d47151.png", mobileImage: "/manus-storage/social-frontend-mobile_7fa4db81.png", tone: "project-black", href: "https://github.com/SobanRasheed", demo: "https://social-frontend-mocha.vercel.app/" },
];

const skills = [
  ["Frontend development", "React.js, Vite, responsive design"],
  ["Mobile app development", "Flutter, cross-platform products"],
  ["APIs and backend", "Node.js, Express.js, REST APIs"],
  ["Engineering foundations", "OOP, DSA, database design, CI/CD"],
];

const articles = [
  ["How to optimize React render performance", "Performance notes from a production app", "Sep 18, 2025"],
  ["Choosing between SQL and NoSQL for your next startup", "A practical framework for making the call", "Aug 02, 2025"],
  ["A small guide to calmer APIs", "Naming, constraints, and the second idea", "Jun 27, 2025"],
];

function ExternalLinkButton({ href, children }: { href: string; children: React.ReactNode }) {
  return <a className="editorial-link" href={href} target="_blank" rel="noreferrer">{children}<ArrowUpRight size={14} /></a>;
}

function ProjectBanner({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const isLiveWebsite = true;
  const content = <>
    <span className="project-device-stage" aria-hidden="true">
      <span className="device-laptop">
        <span className="device-laptop-screen"><span className="device-camera" /><img src={project.desktopImage} alt="" /></span>
        <span className="device-laptop-base" />
      </span>
      <span className="device-phone">
        <span className="device-phone-speaker" /><img src={project.mobileImage} alt="" />
      </span>
    </span>
    <span className="project-index">{String(index + 1).padStart(2, "0")}</span>
    <span className="project-chip">{isLiveWebsite ? <>Website <ArrowUpRight size={13} /></> : <>View case study <ArrowUpRight size={13} /></>}</span>
  </>;

  return isLiveWebsite
    ? <a className={`project-image ${project.tone} project-image-link`} href={project.demo} target="_blank" rel="noreferrer" aria-label={`Visit the ${project.title} website`}>{content}</a>
    : <div className={`project-image ${project.tone}`}>{content}</div>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openSkill, setOpenSkill] = useState(0);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  const copyEmail = async () => {
    await navigator.clipboard?.writeText("sobanrasheed1@gmail.com");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="editorial-site">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="editorial-nav">
        <a className="editorial-logo" href="#top" aria-label="Soban Rasheed home"><span>SR</span><small>FULL-STACK<br />DEVELOPER</small></a>
        <nav className={`editorial-menu ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#writing" onClick={() => setMenuOpen(false)}>Writing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-availability"><span /> Available for select work <a href="https://github.com/" target="_blank" rel="noreferrer"><Github size={15} /></a></div>
        <button className="editorial-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X size={19} /> : <Menu size={19} />}</button>
      </header>

      <main id="main-content">
        <section id="top" className="intro-section page-grid">
          <div className="intro-copy panel-cream">
            <p className="kicker">Hello, I’m</p>
            <h1>Soban<br /><span>Rasheed</span></h1>
            <p className="intro-summary">I’m a full-stack developer from Pakistan, currently studying Computer Science at COMSATS University. I build responsive web products, mobile apps, and practical tools from first idea to working deployment.</p>
            <div className="social-row">
              <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={15} /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={15} /></a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={15} /></a>
              <a href="mailto:sobanrasheed1@gmail.com" target="_blank" rel="noreferrer" aria-label="Email"><Mail size={15} /></a>
            </div>
            <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
          </div>
          <div className="portrait-panel">
            <div className="portrait-backdrop" />
            <img src={portraitImage} alt="Editorial developer workspace portrait placeholder" />
            <div className="portrait-note">Soban Rasheed<br /><span>Engineer / builder</span></div>
          </div>
        </section>

        <section id="about" className="about-section page-grid">
          <div className="services-panel panel-black">
            <p className="eyebrow-light">A little about the work</p>
            <p className="services-intro">I specialize in building end-to-end web applications, focusing on performance, security, and solid architecture.</p>
            <div className="skill-accordion">
              {skills.map(([title, detail], index) => (
                <button className={`skill-item ${openSkill === index ? "is-active" : ""}`} key={title} onClick={() => setOpenSkill(index)} aria-expanded={openSkill === index}>
                  <span><b>{title}</b>{openSkill === index && <small>{detail}</small>}</span><ChevronDown size={18} />
                </button>
              ))}
            </div>
          </div>
          <div className="about-copy panel-cream">
            <div className="about-mark">SR<span>CS</span></div>
            <p className="kicker">The short version</p>
            <h2>Good software should feel a little <em>obvious.</em></h2>
            <p>I’ve built social platforms, food-delivery experiences, document tooling, and AI infrastructure. I like working closely with founders, designers, and small product teams to get from “what if” to something people can actually use.</p>
            <a className="text-arrow" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
          </div>
        </section>

        <section id="work" className="work-section panel-cream">
          <div className="section-head"><div><p className="kicker">Selected work</p><h2>Applications built<br /><em>to solve things.</em></h2></div><p className="section-caption">A selection of applications I have built to solve specific business challenges.</p></div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="editorial-project" key={project.title}>
                <ProjectBanner project={project} index={projects.indexOf(project)} />
                <div className="project-info"><div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-actions"><ExternalLinkButton href={project.demo}>Live demo</ExternalLinkButton><ExternalLinkButton href={project.href}>Repository</ExternalLinkButton></div></div>
              </article>
            ))}
          </div>
        </section>

        <section className="availability-section page-grid">
          <div className="availability-copy panel-red"><p className="kicker">What I can help with</p><h2>Bring me a product problem, not a job description.</h2><p>For teams with a real product to ship, I can help with the interface, the architecture behind it, or the final stretch before launch.</p></div>
          <div className="rate-panel panel-cream"><p className="kicker">Ways to work together</p><div className="rate-row"><span>Product build</span><b>From $1,200</b><small>Fixed-scope sprint</small></div><div className="rate-row"><span>Technical partner</span><b>Custom rate</b><small>Ongoing collaboration</small></div><div className="rate-row"><span>Architecture review</span><b>From $400</b><small>One focused session</small></div><a className="text-arrow" href="#contact">Start a conversation <ArrowUpRight size={15} /></a></div>
        </section>

        <section id="writing" className="writing-section panel-cream">
          <div className="section-head"><div><p className="kicker">From the notebook</p><h2>Thoughts on code,<br /><em>design, and systems.</em></h2></div><a className="text-arrow" href="https://medium.com/" target="_blank" rel="noreferrer">Read all writing <ArrowUpRight size={15} /></a></div>
          <div className="article-grid">{articles.map(([title, detail, date], index) => <a className="article-card" href="https://medium.com/" target="_blank" rel="noreferrer" key={title}><div className={`article-image article-image-${index + 1}`}><span>{index === 0 ? "⌁" : index === 1 ? "<>" : "✳"}</span></div><div className="article-meta"><span>{date}</span><span>0{index + 1}</span></div><h3>{title}</h3><p>{detail}</p><span className="article-read">Read article <ArrowUpRight size={14} /></span></a>)}</div>
        </section>

        <section id="contact" className="contact-section page-grid">
          <div className="contact-copy panel-black"><p className="eyebrow-light">Have a good problem?</p><h2>Let’s make something <em>clear.</em></h2><p>Tell me what you’re building, where it’s stuck, or what you’re curious about. I’ll get back to you within a few working days.</p><button className="copy-email" onClick={copyEmail}><Mail size={15} /> sobanrasheed1@gmail.com <span>{copied ? <Check size={13} /> : <Copy size={13} />}</span></button></div>
          <form className="contact-form panel-cream" onSubmit={handleSubmit}><p className="kicker">Send a note</p><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="Ada Lovelace" /><label htmlFor="email">Email</label><input id="email" name="email" type="email" required placeholder="ada@analytical.engine" /><label htmlFor="message">A little context</label><textarea id="message" name="message" rows={4} required placeholder="I’m working on a tool that..." /><button className="form-button" type="submit">{sent ? <>Message queued <Check size={15} /></> : <>Send a note <ArrowUpRight size={15} /></>}</button></form>
        </section>
      </main>

      <footer className="editorial-footer"><a className="editorial-logo" href="#top"><span>SR</span><small>FULL-STACK<br />DEVELOPER</small></a><p>© 2025 Soban Rasheed</p><div className="footer-actions"><a className="text-arrow" href="/manus-storage/Soban_Rasheed_Resume_e90ff257.pdf" download="Soban_Rasheed_Resume.pdf"><Download size={14} /> Download resume</a><a href="mailto:sobanrasheed1@gmail.com">Email</a><a href="https://github.com/SobanRasheed" target="_blank" rel="noreferrer">GitHub</a></div></footer>
    </div>
  );
}

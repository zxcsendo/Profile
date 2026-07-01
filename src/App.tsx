import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import CursorGlow from "./components/CursorGlow";
import Hero3D from "./components/Hero3D";
import HudPanel from "./components/HudPanel";
import ProjectCarousel from "./components/ProjectCarousel";
import ProjectList from "./components/ProjectList";
import {
  CERTIFICATIONS,
  DATABASES,
  DEPLOYMENT,
  EDUCATION,
  LANGUAGES,
  PROFILE,
  PROJECTS,
  SKILL_ROWS,
  TOOLS,
} from "./data/portfolio";

const TABS = [
  { id: "home", label: "Overview", sub: "Introduction" },
  { id: "about", label: "Profile", sub: "Resume" },
  { id: "work", label: "Projects", sub: "Portfolio" },
  { id: "skills", label: "Expertise", sub: "Capabilities" },
  { id: "contact", label: "Contact", sub: "Inquiries" },
] as const;

type TabId = (typeof TABS)[number]["id"];

function useClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setTime(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const fmt = (d: Date) =>
    d.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });

  return { local: fmt(time), utc: fmt(new Date(time.getTime() + time.getTimezoneOffset() * 60000)) };
}

export default function App() {
  const [tab, setTab] = useState<TabId>("home");
  const clock = useClock();

  return (
    <div className="hud-app">
      <div className="noise-overlay" />
      <CursorGlow />
      <div className="scanlines" />

      <header className="hud-top">
        <div className="hud-top__left">
          <Stat label="Education" value="BSIT — 2027" accent />
          <Stat label="Projects" value={`${PROJECTS.length} Completed`} accent />
        </div>
        <div className="hud-top__center">JOSHUA TRAJANO SENORON — FULL-STACK DEVELOPER TERMINAL</div>
        <div className="hud-top__right">
          <Stat label="UTC" value={clock.utc} />
          <Stat label="Local" value={clock.local} />
        </div>
      </header>

      <div className="hud-body">
        <aside className="hud-left">
          <HudPanel title="Identity Module">
            <div className="profile">
              <div className="profile__avatar">
                <img alt={PROFILE.name} src={PROFILE.photo} />
              </div>
              <dl className="profile__meta">
                <div>
                  <dt>Name</dt>
                  <dd>{PROFILE.shortName}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{PROFILE.role}</dd>
                </div>
                <div>
                  <dt>Location</dt>
                  <dd>{PROFILE.location}</dd>
                </div>
              </dl>
              <button className="hire-btn" onClick={() => setTab("contact")} type="button">
                Available for OJT / Hire
              </button>
              <div className="profile__socials">
                <a aria-label="Email" href={`mailto:${PROFILE.email}`}>
                  <Mail size={16} />
                </a>
                <a aria-label="Phone" href={`tel:${PROFILE.phone}`}>
                  <Phone size={16} />
                </a>
              </div>
            </div>
          </HudPanel>

          <HudPanel title="System Status" className="hud-left__status">
            <ul className="status-list">
              <li>
                <span>Availability</span>
                <strong className="status-on">Open</strong>
              </li>
              <li>
                <span>Focus</span>
                <strong>Full-Stack & Systems</strong>
              </li>
              <li>
                <span>Status</span>
                <strong>{PROFILE.status}</strong>
              </li>
            </ul>
          </HudPanel>
        </aside>

        <main className="hud-main">
          <AnimatePresence mode="wait">
            {tab === "home" && <HomeView key="home" setTab={setTab} />}
            {tab === "about" && <AboutView key="about" />}
            {tab === "work" && <WorkView key="work" />}
            {tab === "skills" && <SkillsView key="skills" />}
            {tab === "contact" && <ContactView key="contact" />}
          </AnimatePresence>
        </main>

        <aside className="hud-right">
          <HudPanel title="Current Focus">
            <div className="focus-block">
              <p className="focus-block__label">Active Initiative</p>
              <h3>Full-Stack Systems Development</h3>
              <p className="focus-block__goal">
                Building practical business systems — e-commerce platforms, inventory tools, POS,
                and payroll solutions using modern web stacks and database-driven architecture.
              </p>
              <div className="focus-block__tags">
                <span>JavaScript</span>
                <span>MySQL</span>
                <span>React</span>
              </div>
            </div>
          </HudPanel>

          <HudPanel title="Quick Contact">
            <div className="quick-contact">
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
              <p>{PROFILE.availability}</p>
            </div>
          </HudPanel>
        </aside>
      </div>

      <nav aria-label="Portfolio navigation" className="hud-bottom">
        {TABS.map((item) => (
          <button
            key={item.id}
            className={`hud-tab ${tab === item.id ? "hud-tab--active" : ""}`}
            onClick={() => setTab(item.id)}
            type="button"
          >
            <span className="hud-tab__deco">{tab === item.id ? "×" : "+"}</span>
            <span className="hud-tab__label">{item.label}</span>
            <span className="hud-tab__sub">{item.sub}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`hud-stat ${accent ? "hud-stat--accent" : ""}`}>
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function ViewWrap({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="view"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      {children}
    </motion.div>
  );
}

function HomeView({ setTab }: { setTab: (t: TabId) => void }) {
  return (
    <ViewWrap>
      <HudPanel title="Welcome — System Online">
        <div className="home-view">
          <div className="home-view__copy">
            <p className="mono-tag">// Portfolio interface initialized</p>
            <h2>
              Full-stack developer building real systems — from e-commerce to business operations.
            </h2>
            <p>
              {PROFILE.name} is an Information Technology student and full-stack developer based in
              Valenzuela City. He builds functional web applications, desktop systems, and game
              projects with a focus on clean logic, database design, and practical user experience.
            </p>
            <div className="home-view__actions">
              <button className="action-btn" onClick={() => setTab("work")} type="button">
                View Projects
              </button>
              <button className="action-btn action-btn--ghost" onClick={() => setTab("about")} type="button">
                View Resume
              </button>
            </div>
          </div>
          <div className="home-view__scene">
            <Hero3D />
          </div>
        </div>
      </HudPanel>
    </ViewWrap>
  );
}

function AboutView() {
  return (
    <ViewWrap>
      <HudPanel title="Resume — Professional Record">
        <div className="resume-header">
          <div>
            <h2 className="resume-name">{PROFILE.name}</h2>
            <p className="resume-contact">
              {PROFILE.location} · {PROFILE.phone} · {PROFILE.email}
            </p>
            <p className="resume-availability">{PROFILE.availability}</p>
          </div>
        </div>

        <section className="resume-section">
          <h3>Education</h3>
          <div className="resume-entry">
            <strong>{EDUCATION.school}</strong>
            <span>{EDUCATION.location}</span>
            <p>{EDUCATION.degree}</p>
            <p>{EDUCATION.graduation}</p>
            <p className="resume-muted">
              Relevant Coursework: {EDUCATION.coursework.join(", ")}
            </p>
          </div>
        </section>

        <section className="resume-section">
          <h3>Certifications & Training</h3>
          <ul className="resume-bullets">
            {CERTIFICATIONS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="resume-section">
          <h3>Project Highlights</h3>
          <ul className="resume-bullets">
            {PROJECTS.map((p) => (
              <li key={p.id}>
                <strong>{p.title}</strong> ({p.published}) — {p.description}
              </li>
            ))}
          </ul>
        </section>
      </HudPanel>
    </ViewWrap>
  );
}

function WorkView() {
  return (
    <ViewWrap>
      <HudPanel title="Project Showcase — Visual Records">
        <ProjectCarousel projects={PROJECTS} />
      </HudPanel>

      <HudPanel className="view__spaced" title="All Projects — Quick Access">
        <p className="panel-note">
          Open live demos when available, or use the links below to request access or get in touch.
        </p>
        <ProjectList projects={PROJECTS} />
      </HudPanel>
    </ViewWrap>
  );
}

function SkillsView() {
  return (
    <ViewWrap>
      <HudPanel title="Technical Expertise — Proficiency Index">
        <div className="skills-view">
          {SKILL_ROWS.map((skill, i) => (
            <div className="skill-meter" key={skill.label}>
              <div className="skill-meter__head">
                <span>{skill.label}</span>
                <strong>{skill.value}%</strong>
              </div>
              <div className="skill-meter__track">
                <motion.div
                  className="skill-meter__fill"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.value}%` }}
                  transition={{ delay: 0.1 * i, duration: 0.9, ease: "easeOut" }}
                />
              </div>
            </div>
          ))}
        </div>
      </HudPanel>

      <HudPanel className="view__spaced" title="Languages">
        <div className="tool-grid">
          {LANGUAGES.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </HudPanel>

      <HudPanel className="view__spaced" title="Database">
        <div className="tool-grid">
          {DATABASES.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </HudPanel>

      <HudPanel className="view__spaced" title="Tools">
        <div className="tool-grid">
          {TOOLS.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </HudPanel>

      <HudPanel className="view__spaced" title="Deployment">
        <div className="tool-grid">
          {DEPLOYMENT.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </HudPanel>
    </ViewWrap>
  );
}

function ContactView() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const subject = form.get("subject");
    const message = form.get("message");
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
    window.location.href = `mailto:${PROFILE.email}?subject=${encodeURIComponent(String(subject))}&body=${body}`;
  };

  return (
    <ViewWrap>
      <HudPanel title="Contact Channel — Project Inquiries">
        <div className="contact-view">
          <div>
            <p className="contact-view__lead">{PROFILE.availability}</p>
            <div className="contact-view__info">
              <div>
                <span>Email</span>
                <strong>
                  <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                </strong>
              </div>
              <div>
                <span>Phone</span>
                <strong>
                  <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
                </strong>
              </div>
              <div>
                <span>Location</span>
                <strong>{PROFILE.location}</strong>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input name="name" placeholder="Full name" required />
            <input name="email" placeholder="Your email" type="email" required />
            <input name="subject" placeholder="Subject (e.g. OJT Inquiry)" required />
            <textarea name="message" placeholder="Your message..." required rows={5} />
            <button className="action-btn" type="submit">
              Send via Email <Send size={15} />
            </button>
          </form>
        </div>
      </HudPanel>
    </ViewWrap>
  );
}

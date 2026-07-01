import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Crimson Studio",
    category: "Web Design & Development",
    description: "A luxury brand website with immersive 3D elements and cinematic scroll animations.",
    gradient: "linear-gradient(135deg, #1a0000, #450a0a, #7f1d1d)",
    tags: ["React", "Three.js", "GSAP"],
  },
  {
    title: "Nova Commerce",
    category: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory and seamless checkout flow.",
    gradient: "linear-gradient(135deg, #050505, #1a0000, #b91c1c)",
    tags: ["Next.js", "Stripe", "PostgreSQL"],
  },
  {
    title: "Pulse Dashboard",
    category: "SaaS Application",
    description: "Analytics dashboard with real-time data visualization and intuitive user management.",
    gradient: "linear-gradient(135deg, #111, #2d0000, #ef4444)",
    tags: ["TypeScript", "D3.js", "Node.js"],
  },
  {
    title: "Aether Portfolio",
    category: "Creative Portfolio",
    description: "Award-winning portfolio site featuring WebGL shaders and fluid page transitions.",
    gradient: "linear-gradient(135deg, #0a0a0a, #450a0a, #dc2626)",
    tags: ["WebGL", "Framer Motion", "Vite"],
  },
];

export default function Work() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="work" ref={ref} style={{ padding: "8rem 0", background: "var(--black)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "4rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <p className="section-label">Portfolio</p>
            <h2 className="section-title">
              Selected <span className="gradient-text">Work</span>
            </h2>
          </div>
          <a href="#contact" className="btn-outline" style={{ fontSize: "0.85rem" }}>
            View All Projects
          </a>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="card-glass"
              style={{ overflow: "hidden", cursor: "pointer" }}
            >
              <div
                style={{
                  height: 220,
                  background: project.gradient,
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "2rem",
                      fontWeight: 800,
                      opacity: 0.3,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {project.title}
                  </span>
                </motion.div>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at 30% 70%, rgba(239,68,68,0.3) 0%, transparent 60%)",
                  }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                  }}
                >
                  <button
                    aria-label="View project"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                    }}
                  >
                    <ExternalLink size={16} />
                  </button>
                  <button
                    aria-label="View source"
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      background: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(10px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                    }}
                  >
                    <Github size={16} />
                  </button>
                </div>
              </div>

              <div style={{ padding: "1.5rem" }}>
                <p style={{ fontSize: "0.75rem", color: "#ef4444", fontWeight: 600, marginBottom: "0.4rem", letterSpacing: "0.05em" }}>
                  {project.category}
                </p>
                <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>
                  {project.title}
                </h3>
                <p style={{ color: "var(--white-muted)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {project.description}
                </p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.25rem 0.7rem",
                        borderRadius: 999,
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "var(--white-muted)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #work .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

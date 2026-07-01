import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  { name: "React / Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Three.js / WebGL", level: 85 },
  { name: "UI/UX Design", level: 88 },
  { name: "Node.js", level: 82 },
  { name: "Framer Motion", level: 92 },
];

const tools = [
  "Figma", "VS Code", "Git", "Blender", "Photoshop",
  "Tailwind CSS", "Vite", "Docker", "PostgreSQL", "Vercel",
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "linear-gradient(180deg, var(--black) 0%, #0a0000 100%)",
        position: "relative",
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">
            Tools & <span className="gradient-text">Technologies</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ marginBottom: "1.5rem" }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                  <span style={{ fontWeight: 500, fontSize: "0.95rem" }}>{skill.name}</span>
                  <span style={{ color: "#ef4444", fontWeight: 600, fontSize: "0.85rem" }}>{skill.level}%</span>
                </div>
                <div
                  style={{
                    height: 6,
                    borderRadius: 3,
                    background: "rgba(255,255,255,0.06)",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                    style={{
                      height: "100%",
                      borderRadius: 3,
                      background: "var(--gradient-red)",
                      boxShadow: "0 0 10px rgba(239,68,68,0.4)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
              }}
            >
              Tools I Use
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.7rem" }}>
              {tools.map((tool, i) => (
                <motion.span
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.05 }}
                  whileHover={{ scale: 1.05, borderColor: "rgba(239,68,68,0.5)" }}
                  style={{
                    padding: "0.5rem 1.2rem",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    cursor: "default",
                    transition: "border-color 0.3s",
                  }}
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div
              className="card-glass"
              style={{ marginTop: "2.5rem", padding: "2rem", textAlign: "center" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  lineHeight: 1.4,
                  marginBottom: "0.5rem",
                }}
              >
                "Design is not just what it looks like — design is how it works."
              </p>
              <p style={{ color: "var(--white-muted)", fontSize: "0.85rem" }}>— Steve Jobs</p>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .container > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}

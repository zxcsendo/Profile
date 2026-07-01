import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={ref}
      style={{
        padding: "8rem 0",
        position: "relative",
        background: "var(--black)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(239,68,68,0.4), transparent)",
        }}
      />

      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: "5rem",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: "relative" }}
          >
            <div
              className="card-glass"
              style={{
                aspectRatio: "4/5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(239,68,68,0.2) 0%, rgba(5,5,5,0.8) 60%)",
                }}
              />
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background: "var(--gradient-red)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 0 60px rgba(239,68,68,0.4)",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <User size={56} color="#fff" strokeWidth={1.5} />
              </div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: "10%",
                  border: "1px dashed rgba(239,68,68,0.2)",
                  borderRadius: "50%",
                }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card-glass"
              style={{
                position: "absolute",
                bottom: "-1.5rem",
                right: "-1.5rem",
                padding: "1.2rem 1.5rem",
              }}
            >
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.5rem" }}>
                100%
              </div>
              <div style={{ fontSize: "0.8rem", color: "var(--white-muted)" }}>Dedication</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>
              Building the <span className="gradient-text">future</span> of digital
            </h2>
            <p style={{ color: "var(--white-muted)", lineHeight: 1.8, marginBottom: "1.2rem", fontSize: "1.05rem" }}>
              I'm Joshua Trajano — a passionate creative developer based in the Philippines.
              I specialize in crafting visually stunning websites and applications that leave
              lasting impressions.
            </p>
            <p style={{ color: "var(--white-muted)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "1.05rem" }}>
              With a keen eye for design and a love for clean code, I bridge the gap between
              aesthetics and functionality. Every project is an opportunity to push boundaries
              and create something extraordinary.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {["Web Development", "UI/UX Design", "3D & Motion", "Brand Strategy"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    fontSize: "0.9rem",
                    fontWeight: 500,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "var(--gradient-red)",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container > div {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

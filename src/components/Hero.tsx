import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import Hero3D from "./Hero3D";

const words = ["Creative", "Developer", "Designer", "Visionary"];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background: "var(--gradient-hero)",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(239,68,68,0.12) 0%, transparent 60%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(127,29,29,0.15) 0%, transparent 50%)",
        }}
      />

      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "center",
          paddingTop: "6rem",
          paddingBottom: "4rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: 999,
              border: "1px solid rgba(239,68,68,0.3)",
              background: "rgba(239,68,68,0.08)",
              marginBottom: "1.5rem",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "#ef4444",
            }}
          >
            <Sparkles size={14} />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "0.5rem",
            }}
          >
            Joshua
            <br />
            <span className="gradient-text red-glow">Trajano</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              height: "2.5rem",
              overflow: "hidden",
              marginBottom: "1.5rem",
            }}
          >
            <motion.div
              animate={{ y: [0, -40, -80, -120, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {words.map((word) => (
                <p
                  key={word}
                  style={{
                    height: "2.5rem",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "1.4rem",
                    fontWeight: 300,
                    color: "var(--white-muted)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {word}
                </p>
              ))}
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.7,
              color: "var(--white-muted)",
              maxWidth: "480px",
              marginBottom: "2.5rem",
            }}
          >
            I craft immersive digital experiences that blend bold aesthetics with
            cutting-edge technology. Turning visions into stunning realities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a href="#work" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              display: "flex",
              gap: "3rem",
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {[
              { num: "50+", label: "Projects" },
              { num: "5+", label: "Years Exp." },
              { num: "30+", label: "Clients" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "2rem",
                    fontWeight: 800,
                    background: "var(--gradient-red)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: "0.8rem", color: "var(--white-muted)", marginTop: "0.2rem" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          style={{ height: "clamp(350px, 50vh, 600px)", position: "relative" }}
        >
          <div
            style={{
              position: "absolute",
              inset: "-20%",
              background: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <Hero3D />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 2 }, y: { duration: 2, repeat: Infinity } }}
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          color: "var(--white-muted)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "0.75rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
        }}
      >
        Scroll
        <ArrowDown size={16} />
      </motion.a>

      <style>{`
        @media (max-width: 900px) {
          #hero .container {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          #hero .container > div:first-child p,
          #hero .container > div:first-child > div:last-child {
            margin-inline: auto;
          }
          #hero .container > div:first-child > div:nth-child(5) {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}

import { useRef, useState, type CSSProperties, type FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "var(--black)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "80%",
          height: "60%",
          background: "radial-gradient(ellipse, rgba(239,68,68,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">
            Let's Create Something <span className="gradient-text">Amazing</span>
          </h2>
          <p style={{ color: "var(--white-muted)", marginTop: "1rem", maxWidth: 500, marginInline: "auto" }}>
            Have a project in mind? I'd love to hear about it. Let's turn your vision into reality.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem" }}>
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {[
              { icon: Mail, label: "Email", value: "hello@joshuatrajano.com" },
              { icon: Phone, label: "Phone", value: "+63 9XX XXX XXXX" },
              { icon: MapPin, label: "Location", value: "Philippines" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "1.5rem",
                  padding: "1.2rem",
                }}
                className="card-glass"
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: "rgba(239,68,68,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={20} color="#ef4444" />
                </div>
                <div>
                  <p style={{ fontSize: "0.75rem", color: "var(--white-muted)", marginBottom: "0.2rem" }}>
                    {item.label}
                  </p>
                  <p style={{ fontWeight: 500, fontSize: "0.95rem" }}>{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="card-glass"
            style={{ padding: "2.5rem" }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.4rem", color: "var(--white-muted)" }}>
                  Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Your name"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.4rem", color: "var(--white-muted)" }}>
                  Email
                </label>
                <input
                  required
                  type="email"
                  placeholder="you@email.com"
                  style={inputStyle}
                />
              </div>
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.4rem", color: "var(--white-muted)" }}>
                Subject
              </label>
              <input
                required
                type="text"
                placeholder="Project inquiry"
                style={inputStyle}
              />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label style={{ display: "block", fontSize: "0.8rem", marginBottom: "0.4rem", color: "var(--white-muted)" }}>
                Message
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                style={{ ...inputStyle, resize: "vertical" }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              {submitted ? "Message Sent!" : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "0.8rem 1rem",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: 12,
  color: "#fff",
  fontSize: "0.95rem",
  fontFamily: "inherit",
  outline: "none",
  transition: "border-color 0.3s",
};

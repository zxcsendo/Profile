import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Palette, Smartphone, Globe, Zap, Layers } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description: "High-performance websites and web apps built with modern frameworks and best practices.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces designed to captivate users and drive engagement.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Responsive designs that look and perform flawlessly across every device and screen size.",
  },
  {
    icon: Globe,
    title: "3D & Animation",
    description: "Immersive 3D experiences and smooth animations that bring your brand to life.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Lightning-fast load times and optimized code for the best user experience possible.",
  },
  {
    icon: Layers,
    title: "Brand Identity",
    description: "Cohesive visual systems that communicate your brand's unique personality and values.",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="services"
      ref={ref}
      style={{
        padding: "8rem 0",
        background: "linear-gradient(180deg, var(--black) 0%, #0f0000 50%, var(--black) 100%)",
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
          <p className="section-label">What I Do</p>
          <h2 className="section-title">
            Services & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-glass"
              style={{ padding: "2rem" }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1.2rem",
                }}
              >
                <service.icon size={24} color="#ef4444" />
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  marginBottom: "0.6rem",
                }}
              >
                {service.title}
              </h3>
              <p style={{ color: "var(--white-muted)", lineHeight: 1.7, fontSize: "0.95rem" }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

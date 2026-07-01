import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "3rem 0",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "var(--black)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
      >
        <div>
          <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", marginBottom: "0.3rem" }}>
            Joshua<span style={{ color: "#ef4444" }}>.</span>Trajano
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--white-muted)" }}>
            &copy; {new Date().getFullYear()} Joshua Trajano. All rights reserved.
          </p>
        </div>

        <div style={{ display: "flex", gap: "0.8rem" }}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--white-muted)",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#ef4444";
                e.currentTarget.style.color = "#ef4444";
                e.currentTarget.style.boxShadow = "0 0 20px rgba(239,68,68,0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.color = "var(--white-muted)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <social.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github, Mail } from "lucide-react";
import { PROFILE, projectMailto } from "../data/portfolio";

export interface ProjectSlide {
  id: string;
  title: string;
  category: string;
  published: string;
  description: string;
  gradient: string;
  liveUrl: string | null;
  githubUrl: string | null;
  tags: string[];
}

interface ProjectCarouselProps {
  projects: ProjectSlide[];
}

const RADIUS = 280;
const ROTATE_EASE = [0.33, 0, 0.2, 1] as const;

function normalizeIndex(rotation: number, count: number) {
  return ((rotation % count) + count) % count;
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [rotation, setRotation] = useState(0);
  const count = projects.length;
  const step = useMemo(() => 360 / count, [count]);
  const index = normalizeIndex(rotation, count);
  const active = projects[index];
  const canPrev = rotation > 0;

  const prev = () => {
    if (!canPrev) return;
    setRotation((r) => r - 1);
  };

  const next = () => {
    setRotation((r) => r + 1);
  };

  const goTo = (target: number) => {
    const current = normalizeIndex(rotation, count);
    if (target === current) return;

    let delta = target - current;
    if (delta < 0) delta += count;

    setRotation((r) => r + delta);
  };

  const liveHref = active.liveUrl ?? projectMailto(active.title);
  const liveLabel = active.liveUrl ? "Open Live" : "Request Demo";

  if (count === 0) {
    return <p className="carousel__empty">No projects to display.</p>;
  }

  return (
    <div className="carousel">
      <div className="carousel__meta">
        <span className="carousel__count">
          {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
        </span>
        <span className="carousel__total">{count} projects in portfolio</span>
      </div>

      <div className="carousel__stage">
        <button
          className="carousel__nav"
          disabled={!canPrev}
          onClick={prev}
          type="button"
          aria-label="Previous project"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="carousel__viewport">
          <motion.div
            className="carousel__ring"
            animate={{ rotateY: -rotation * step }}
            transition={{ duration: 0.7, ease: ROTATE_EASE }}
          >
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={`carousel__card ${i === index ? "carousel__card--active" : ""}`}
                style={{ transform: `rotateY(${i * step}deg) translateZ(${RADIUS}px)` }}
              >
                <div className="carousel__preview" style={{ background: project.gradient }}>
                  <span className="carousel__tag">{project.published}</span>
                  <h4 className="carousel__preview-title">{project.title}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <button className="carousel__nav" onClick={next} type="button" aria-label="Next project">
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="carousel__dots">
        {projects.map((project, i) => (
          <button
            key={project.id}
            aria-label={`Go to ${project.title}`}
            className={`carousel__dot ${i === index ? "carousel__dot--active" : ""}`}
            onClick={() => goTo(i)}
            type="button"
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${active.id}-${rotation}`}
          className="carousel__detail"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <span className="carousel__category">{active.category}</span>
          <h3>{active.title}</h3>
          <p>{active.description}</p>

          <div className="carousel__tags">
            {active.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="carousel__links">
            <a
              className="carousel__link carousel__link--primary"
              href={liveHref}
              rel="noopener noreferrer"
              target={active.liveUrl ? "_blank" : undefined}
            >
              <ExternalLink size={14} /> {liveLabel}
            </a>
            {active.githubUrl ? (
              <a
                className="carousel__link"
                href={active.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github size={14} /> Source Code
              </a>
            ) : (
              <a className="carousel__link" href={`mailto:${PROFILE.email}`}>
                <Mail size={14} /> Contact
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

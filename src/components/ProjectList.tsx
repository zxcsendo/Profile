import { ExternalLink, Github, Mail } from "lucide-react";
import type { ProjectSlide } from "./ProjectCarousel";
import { PROFILE, projectMailto } from "../data/portfolio";

interface ProjectListProps {
  projects: ProjectSlide[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <ul className="project-list">
      {projects.map((project) => (
        <li key={project.id} className="project-list__item">
          <div className="project-list__main">
            <span className="project-list__year">{project.published}</span>
            <div>
              <h4>{project.title}</h4>
              <p>{project.category}</p>
            </div>
          </div>
          <div className="project-list__actions">
            <a
              className="project-list__btn"
              href={project.liveUrl ?? projectMailto(project.title)}
              rel="noopener noreferrer"
              target={project.liveUrl ? "_blank" : undefined}
            >
              <ExternalLink size={13} />
              {project.liveUrl ? "Live" : "Demo"}
            </a>
            {project.githubUrl ? (
              <a
                className="project-list__btn"
                href={project.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github size={13} /> Code
              </a>
            ) : (
              <a className="project-list__btn" href={`mailto:${PROFILE.email}`}>
                <Mail size={13} /> Email
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

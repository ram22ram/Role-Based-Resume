export default function ProjectCardExact({ project }) {
  return (
    <div className="project-card reveal reveal-up" data-speed="0.05">
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: "100%",
          borderRadius: "16px",
          marginBottom: "24px",
        }}
      />

      <h3>{project.title}</h3>
      <p style={{ color: "var(--muted)", lineHeight: "1.6" }}>
        {project.description}
      </p>

      <div style={{ marginTop: "24px", display: "flex", gap: "16px" }}>
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          style={{
            color: "var(--accent)",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          GitHub →
        </a>

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "var(--accent)",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Live Demo →
          </a>
        )}
      </div>
    </div>
  );
}

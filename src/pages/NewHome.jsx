import { useEffect, useState } from "react";
import "../styles/newHome.css";
import { initNewHome } from "../scripts/newHome";
import projectsData from "../data/projectsData";
import ProjectCardExact from "../components/ProjectCardExact";
import profileImg from "../assets/Project/profile.png";

export default function NewHome() {
  /* ================= STATE ================= */
  const [role, setRole] = useState("frontend");

  /* ================= RESUME DATA ================= */
  const resumeData = {
    frontend: {
      title: "Frontend Engineer · React · UI/UX",
      summary:
        "Frontend engineer building scalable React applications with strong UI/UX focus, performance optimization, and clean component architecture.",
      skysoft: "Led frontend delivery for international clients with end-to-end ownership.",
      mantic: "Built reusable React components and optimized UI performance.",
      apo: "—",
      tcs: "—",
      projects: [
        "AI Resume Builder (UX-driven React product)",
        "Netflix Clone, Admin Dashboard, ToDo App",
      ],
      skills: ["React", "JavaScript", "HTML", "CSS", "UI/UX", "Performance", "Git"],
    },

    product: {
      title: "Product Engineer · One-Man Team",
      summary:
        "Worked like a one-man product company — owning UX, frontend development, client communication, and delivery.",
      skysoft: "UI/UX decisions, development, mentoring, and client handling.",
      mantic: "Designed scalable systems and shared design patterns.",
      apo: "Growth & outreach understanding.",
      tcs: "Operations mindset and execution.",
      projects: [
        "AI Resume Builder (end-to-end ownership)",
        "Design systems & React products",
      ],
      skills: ["Product Thinking", "UX", "Ownership", "Client Handling"],
    },

    ops: {
      title: "Operations & Growth · Tech-Enabled",
      summary:
        "Strong background in operations and growth combined with technical execution for scalable delivery.",
      skysoft: "Client coordination and delivery ownership.",
      mantic: "Technical execution and delivery.",
      apo: "Lead generation, CRM, outreach campaigns.",
      tcs: "Operations, process improvement, delivery excellence.",
      projects: [
        "Media research & outreach campaigns",
        "Process optimization workflows",
      ],
      skills: ["Operations", "Lead Generation", "CRM", "Strategy"],
    },

    hr: {
      title: "HR / People Operations · Tech-Aware",
      summary:
        "Hands-on experience mentoring teams, coordinating across departments, supporting hiring, onboarding, and people operations.",
      skysoft: "Mentored juniors, reviewed work, ensured delivery quality.",
      mantic: "Cross-functional collaboration.",
      apo: "Communication, coordination, relationship management.",
      tcs: "People management and process discipline.",
      projects: [
        "Team mentoring & onboarding",
        "Process & performance coordination",
      ],
      skills: [
        "People Operations",
        "Hiring Support",
        "Mentorship",
        "Communication",
        "Process Management",
        "HR Coordination",
      ],
    },
  };

  /* ================= PRINT / DOWNLOAD ================= */
  function printResume() {
    window.print();
  }

  function downloadResume() {
    const element = document.getElementById("resume-switch");
    const html = `
      <html>
        <head>
          <title>Ramendra Vishwakarma - Resume</title>
        </head>
        <body>${element.innerHTML}</body>
      </html>
    `;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Ramendra_Vishwakarma_Resume.html";
    a.click();
    URL.revokeObjectURL(url);
  }

  /* ================= INIT ================= */
  useEffect(() => {
    initNewHome();
  }, []);

  return (
    <>
      {/* Background & Cursor */}
      <div className="gradient-bg"></div>
      <div className="cursor"></div>
      <div className="cursor-follower"></div>

      {/* NAV */}
      <nav>
        <strong>Ramendra Vishwakarma</strong>
        <div>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero hero-split">
        <div className="hero-left">
          <h1>
            <span className="typing" data-text="Frontend"></span>
            <span className="typing highlight" data-text="Engineer"></span>
            <span className="typing" data-text="with UI/UX"></span>
            <span className="typing gradient" data-text="Product Thinking"></span>
          </h1>

          <p>
            2.4+ years building production-ready products — engineering, UI/UX,
            operations, and client delivery like a one-man company.
          </p>
        </div>

        <div className="hero-right">
          <div className="hero-image">
            <img src={profileImg} alt="Ramendra Vishwakarma" />
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <h2 className="reveal reveal-up">Selected Work</h2>
        <p className="section-intro reveal reveal-up">
          Real-world projects where design meets functionality.
        </p>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <ProjectCardExact key={index} project={project} />
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience">
        <h2 className="reveal reveal-up">Experience</h2>
        <p className="section-intro reveal reveal-up">
          Engineering, operations, growth, and leadership — delivering like a
          one-man company.
        </p>

        <div className="experience-timeline">
          <div className="timeline-item left reveal reveal-left">
            <div className="timeline-card">
              <h4>Skysoft Global</h4>
              <span className="timeline-meta">
                Software Engineer • Jun 2024 – Oct 2025 • Remote
              </span>
              <p>
                Led frontend delivery, UI/UX decisions, client communication,
                and mentoring junior developers.
              </p>
            </div>
          </div>

          <div className="timeline-item right reveal reveal-right">
            <div className="timeline-card">
              <h4>Mantic Technologies</h4>
              <span className="timeline-meta">
                Software Developer • Mar 2023 – May 2024
              </span>
              <p>
                Built scalable React apps, optimized performance, and contributed
                to shared design systems.
              </p>
            </div>
          </div>

          <div className="timeline-item left reveal reveal-left">
            <div className="timeline-card">
              <h4>APO Group</h4>
              <span className="timeline-meta">
                Lead Generation Executive • Jul 2021 – Jan 2023
              </span>
              <p>
                Managed global research, CRM workflows, and outreach campaigns.
              </p>
            </div>
          </div>

          <div className="timeline-item right reveal reveal-right">
            <div className="timeline-card">
              <h4>TCS iON (Tata Consultancy Services)</h4>
              <span className="timeline-meta">
                Operations Executive • Mar 2016 – May 2021
              </span>
              <p>
                Oversaw operations, process optimization, and delivery excellence
                across large programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section>
        <h2 className="reveal reveal-up">Core Strengths</h2>
        <p className="section-intro reveal reveal-up">
          Skills built through hands-on execution across tech, ops, and growth.
        </p>

        <div className="strengths-grid">
          <div className="strength-card reveal reveal-scale">
            <h4>Frontend Engineering</h4>
            <p>React, JavaScript, HTML, CSS — scalable UI systems.</p>
          </div>
          <div className="strength-card reveal reveal-scale">
            <h4>UI / UX Thinking</h4>
            <p>Usability, hierarchy, interaction-focused design.</p>
          </div>
          <div className="strength-card reveal reveal-scale">
            <h4>Performance</h4>
            <p>Optimized, clean, maintainable architecture.</p>
          </div>
          <div className="strength-card reveal reveal-scale">
            <h4>Ownership</h4>
            <p>End-to-end delivery and accountability.</p>
          </div>
          <div className="strength-card reveal reveal-scale">
            <h4>Operations</h4>
            <p>Process, coordination, execution.</p>
          </div>
          <div className="strength-card reveal reveal-scale">
            <h4>Growth</h4>
            <p>Lead generation, CRM, communication.</p>
          </div>
        </div>
      </section>

      {/* RESUME SWITCH */}
      <section id="resume-switch" className="resume-section">
  <h2 className="reveal reveal-up">Resume Snapshot</h2>
  <p className="section-intro reveal reveal-up">
    Same experience — tailored presentation for different roles.
  </p>

  {/* Role Tabs */}
  <div className="resume-tabs reveal reveal-up">
    {["frontend", "product", "ops", "hr"].map(r => (
      <button
        key={r}
        className={`resume-tab ${role === r ? "active" : ""}`}
        onClick={() => setRole(r)}
      >
        {r === "hr" ? "HR / People Ops" : r.toUpperCase()}
      </button>
    ))}
  </div>

  {/* Resume Card */}
  <div className="resume-layout reveal reveal-up">

    {/* LEFT */}
    <div className="resume-left">
      <h3>{resumeData[role].title}</h3>
      <p className="resume-summary">{resumeData[role].summary}</p>

      <div className="resume-block">
        <h4>Experience Highlights</h4>
        <ul>
          <li>{resumeData[role].skysoft}</li>
          <li>{resumeData[role].mantic}</li>
          <li>{resumeData[role].apo}</li>
          <li>{resumeData[role].tcs}</li>
        </ul>
      </div>
    </div>

    {/* RIGHT */}
    <div className="resume-right">

      <div className="resume-block">
        <h4>Key Projects</h4>
        <div className="resume-projects">
          {resumeData[role].projects.map((p, i) => (
            <div key={i} className="resume-pill">
              {p}
            </div>
          ))}
        </div>
      </div>

      <div className="resume-block">
        <h4>Core Skills</h4>
        <div className="resume-skills">
          {resumeData[role].skills.map((s, i) => (
            <span key={i} className="skill-chip">
              {s}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>


      {/* RESUME ACTIONS */}
      <div className="cta-section reveal reveal-up">
        <h2>Resume</h2>
        <div className="resume-action-buttons">
          <button onClick={printResume}>🖨 Print / Save as PDF</button>
          <button onClick={downloadResume}>⬇ Download Resume</button>
        </div>
      </div>

      {/* FOOTER */}
      <footer id="contact">
        <h2>Let’s build something impactful</h2>
        <p>ramendra.vishwakarma@gmail.com</p>
        <div className="socials">
          <a href="https://www.linkedin.com/in/ramendra-vishwakarma/">LinkedIn</a>
          <a href="#">GitHub</a>
        </div>
      </footer>
    </>
  );
}

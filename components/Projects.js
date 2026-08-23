import ScrollReveal from "./ScrollReveal";
export default function Projects() {
  const projects = [
    {
      number: "01",
      title: "Blazor Game App",
      description:
        "A collection of interactive browser games built with Blazor and C#. The application includes multiple games and demonstrates component-based development, application logic, and responsive user interfaces.",
      technologies: ["Blazor", "C#", ".NET", "JavaScript", "Next.js", "React"],
      github: "https://github.com/github-antoniomelendez/GameApp",
      demo: "https://github-antoniomelendez.github.io/GameApp/",
    },
    {
      number: "02",
      title: "Hangman Agile Project",
      description:
        "A collaborative software project developed using Agile and Scrum practices. I contributed as a Product Owner, Scrum Master, and Developer while helping deliver features across multiple sprints.",
      technologies: ["JavaScript", "HTML", "CSS", "Agile", "Scrum"],
      github: "https://github.com/github-antoniomelendez/Hangman-Squad-4",
      demo: "https://github-antoniomelendez.github.io/Hangman-Squad-4/",
    },
    {
      number: "03",
      title: "Teton Idaho Chamber of Commerce",
      description:
        "A responsive website for the chamber of commerce in Teton Idaho focused on presenting the state commerce through an organized, accessible, and user-friendly web experience.",
      technologies: ["HTML", "JavaScript", "CSS"],
      github: "https://github.com/github-antoniomelendez/cse270-teton",
      demo: "https://github-antoniomelendez.github.io/cse270-teton/",
    },
    {
      number: "04",
      title: "Personal Page",
      description:
        "A collaborative software development project where I worked with a team to build and improve application features while applying object-oriented programming and teamwork practices.",
      technologies: ["Python", "Git", "API's"],
      github: "https://github.com/github-antoniomelendez/wdd230",
      demo: "https://github-antoniomelendez.github.io/wdd230/",
    },
  ];

  return (
    <section id="projects" className="projects section">
      <div className="section-header">
        <p className="section-label">03 — FEATURED PROJECTS</p>
        <h2>Selected work and projects.</h2>
      </div>

      <ScrollReveal delay={100}>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.number}>
            <div className="project-top">
              <span className="project-number">{project.number}</span>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} source code`}
                >
                  GitHub ↗
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} live demo`}
                >
                  Live Demo ↗
                </a>
              </div>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">{project.description}</p>

            <div className="project-technologies">
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
}
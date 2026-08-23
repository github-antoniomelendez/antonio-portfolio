import ScrollReveal from "./ScrollReveal";
export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      number: "01",
      skills: ["C#", "JavaScript", "Python", "Java", "Rust", "Kotlin", "SQL"],
    },
    {
      title: "Web & Frameworks",
      number: "02",
      skills: [
        "React",
        "Next.js",
        ".NET",
        "Blazor",
        "HTML",
        "CSS",
      ],
    },
    {
      title: "Databases & Data",
      number: "03",
      skills: [
        "SQL",
        "Data Analysis",
        "Advanced Excel",
        "Dashboards",
        "EF Core",
      ],
    },
    {
      title: "Tools & Practices",
      number: "04",
      skills: [
        "Git",
        "GitHub",
        "Agile",
        "Scrum",
        "REST APIs",
        "Visual Studio Code",
      ],
    },
  ];

  return (
    <section id="skills" className="skills section">
      <ScrollReveal>
      <div className="section-header">
        <p className="section-label">02 — SKILLS</p>
        <h2>Technologies I use to build solutions.</h2>
      </div>
      </ScrollReveal>

      <ScrollReveal delay={100}>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-card" key={category.number}>
            <div className="skill-card-header">
              <span className="skill-number">{category.number}</span>
              <h3>{category.title}</h3>
            </div>

            <div className="skill-tags">
              {category.skills.map((skill) => (
                <span className="skill-tag" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      </ScrollReveal>
    </section>
  );
}
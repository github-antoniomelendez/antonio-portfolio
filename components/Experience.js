import ScrollReveal from "./ScrollReveal";
export default function Experience() {
  return (
    <section id="experience" className="experience section">
      <div className="section-header">
        <p className="section-label">04 — EXPERIENCE & EDUCATION</p>
        <h2>A foundation built through learning and collaboration.</h2>
      </div>

      <ScrollReveal delay={100}>
      <div className="timeline">
        <article className="timeline-item">
          <div className="timeline-date">2022 - 2026</div>

          <div className="timeline-content">
            <p className="timeline-type">EDUCATION</p>
            <h3>Bachelor's Degree in Applied Technology</h3>
            <h4>Brigham Young University–Idaho</h4>
            <h3>Associate's Degree in Applied Technology</h3>
            <h4>Brigham Young University–Idaho</h4>
            <h3>Software Development Certificate</h3>
            <h4>Brigham Young University–Idaho</h4>
            <h3>Web Development Certificate</h3>
            <h4>Brigham Young University–Idaho</h4>
            <h3>Web and Computer Programming Certificate</h3>
            <h4>Brigham Young University–Idaho</h4>
            <h3>Development of Mobile Apps Certificate</h3>
            <h4>Universidad Complutense de Madrid</h4>

            <p>
              Developed a strong foundation in software development, web
              technologies, programming, databases, cloud computing, and Agile
              project management.
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">2022 – 2026</div>

          <div className="timeline-content">
            <p className="timeline-type">PROJECT EXPERIENCE</p>
            <h3>Software Development & Agile Projects</h3>
            <h4>Academic and Collaborative Projects</h4>

            <p>
              Built web and software applications while working individually
              and collaboratively. Applied Agile and Scrum practices and
              contributed as a Product Owner, Scrum Master, and Developer.
            </p>
          </div>
        </article>

        <article className="timeline-item">
          <div className="timeline-date">2022 – 2026</div>

          <div className="timeline-content">
            <p className="timeline-type">TECHNICAL DEVELOPMENT</p>
            <h3>Software & Web Development</h3>
            <h4>Personal and Academic Projects</h4>

            <p>
              Expanded technical experience through hands-on projects using
              C#, .NET, Blazor, JavaScript, React, Next.js, Python, Java,
              Kotlin, SQL, and database technologies.
            </p>
          </div>
        </article>
      </div>
      </ScrollReveal>
    </section>
  );
}
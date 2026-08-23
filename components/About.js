import ScrollReveal from "./ScrollReveal";
export default function About() {
  return (
    <section id="about" className="about section">
      <ScrollReveal>
      <div className="section-header">
        <p className="section-label">01 — ABOUT ME</p>
        <h2>Building technology with purpose.</h2>
      </div>
      </ScrollReveal>

      <div className="about-grid">
        <ScrollReveal delay={100}>
        <div className="about-main">
          <p>
            I'm José Antonio Meléndez, a Software Developer with a
            background in Applied Technology. I enjoy turning ideas and
            challenges into practical, user-focused software solutions.
          </p>

          <p>
            My experience includes web development, software development, data
            analysis, and Agile project management. I have worked with
            technologies such as C#, .NET, JavaScript, React, Next.js, Python,
            Kotlin, and SQL.
          </p>

          <p>
            I value continuous learning, collaboration, and solving meaningful
            problems. Whether I'm building an application, analyzing data, or
            working with a team, my goal is to create solutions that are useful,
            reliable, and easy to use.
          </p>
        </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
        <div className="about-highlights">
          <div className="highlight-card">
            <span className="highlight-number">BYU-I</span>
            <p>Bachelor's Degree in Applied Technology</p>
          </div>

          <div className="highlight-card">
            <span className="highlight-number">3+ </span>
            <p>Areas of Technology & Software Development Experience</p>
          </div>

          <div className="highlight-card">
            <span className="highlight-number">Languages </span>
            <p>English, Español, Deutsch</p>
          </div>

          <div className="highlight-card">
            <span className="highlight-number">∞</span>
            <p>Commitment to Continuous Learning</p>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
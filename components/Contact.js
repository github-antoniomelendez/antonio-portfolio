import ScrollReveal from "./ScrollReveal";
export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <ScrollReveal delay={100}>
      <div className="contact-content">
        <p className="section-label">05 — CONTACT</p>

        <h2>Let's build something meaningful.</h2>

        <p className="contact-description">
          I'm always interested in connecting with people, discussing new
          opportunities, and working on meaningful technology projects.
          Feel free to reach out.
        </p>

        <a
          href="mailto:tonymelendez1@hotmail.com"
          className="contact-email"
        >
          tonymelendez1@hotmail.com ↗
        </a>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/jose-antonio-melendez/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/github-antoniomelendez"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub ↗
          </a>
          
        </div>
      </div>
      </ScrollReveal>
    </section>
  );
}
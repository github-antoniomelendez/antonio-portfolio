export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>
          Antonio
          <span> Meléndez</span>
        </h1>

        <h2>Software Developer</h2>

        <p className="hero-description">
          I build practical and user-focused software solutions. My background
          combines web development, software engineering, data analysis, and
          Agile project management.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>

          <a href="/Resume_AntonioMelendez.pdf" className="btn btn-secondary" download>
            Download Resume ↓
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card">
          <p className="card-label">Currently focused on</p>

          <div className="focus-item">
            <span>01</span>
            Software Development
          </div>

          <div className="focus-item">
            <span>02</span>
            Web Applications
          </div>

          <div className="focus-item">
            <span>03</span>
            Problem Solving
          </div>
        </div>
      </div>
    </section>
  );
}
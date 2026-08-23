export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-logo">
          Antonio<span>.</span>
        </a>

        <p>
          © {currentYear} José Antonio Meléndez.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
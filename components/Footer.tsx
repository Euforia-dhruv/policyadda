export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} Policy ADDA. Your policy, made clear.</p>
        <div className="footer-links">
          <a href="#story">Story</a>
          <a href="#how">How it works</a>
          <a href="#why">Why us</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>
    </footer>
  );
}
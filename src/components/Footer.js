import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-divider" />
      <p>&copy; {new Date().getFullYear()} Chai Culture. All rights reserved.</p>
    </footer>
  );
}

export default Footer;

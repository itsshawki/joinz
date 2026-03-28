import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer animate-fade-in">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo">
              <span>Joinz</span>
            </Link>
            <p>Building Digital Trust & Authority. We provide expert solutions for social media verification and reputation.</p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="footer-services">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/verification">Verification</Link></li>
              <li><Link to="/services/reputation">Reputation Management</Link></li>
              <li><Link to="/services/recovery">Account Recovery</Link></li>
              <li><Link to="/services/username">Username Claim</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2022 &ndash; {new Date().getFullYear()} Joinz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

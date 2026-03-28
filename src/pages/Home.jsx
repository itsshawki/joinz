import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';
import { ShieldCheck, TrendingUp, Unlock, UserCheck, Star, Clock, Lock, CheckCircle, MessageCircle, Mail, Globe, Smartphone } from 'lucide-react';
import '../styles/home.css';


const FacebookIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Home = () => {
  return (
    <div className="home-page animate-fade-in-long">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-gradient"></div>
        <div className="container hero-container relative-z">
          <div className="hero-content">
            <h1 className="animate-fade-up-1">Take Full Control of Your Digital Presence</h1>
            <p className="animate-fade-up-2">
              We help individuals and brands get verified, remove harmful content, and build a powerful online reputation — fast, private, and effective.
            </p>
            <div className="hero-cta animate-fade-up-3">
              <Link to="/services" className="btn-primary-hero">Get Started</Link>
              <Link to="/contact" className="btn-secondary-hero">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="section bg-light" style={{ marginTop: "0" }}>
        <div className="container">
          <div className="section-title reveal-on-scroll">
            <h2>Our Core Services</h2>
            <p>Comprehensive solutions for your digital identity.</p>
          </div>
          <div className="services-grid">
            {services.map((svc) => (
              <div className="service-card reveal-on-scroll" key={svc.id}>
                <div className="icon-box"><svc.icon strokeWidth={1.5} /></div>
                <h3>{svc.title}</h3>
                <p>{svc.shortDesc}</p>
                <Link to={`/services/${svc.id}`} className="service-link">
                  Learn More <span className="arrow">&rarr;</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section">
        <div className="container">
          <div className="section-title reveal-on-scroll">
            <h2>Why Choose Joinz?</h2>
            <p>We deliver results where others fail.</p>
          </div>
          <div className="features-grid features-grid-2x2">
            <div className="feature-item reveal-on-scroll">
              <Clock size={48} strokeWidth={1.5} />
              <h4>Fast Results</h4>
              <p>Streamlined processes ensuring swift resolution and delivery.</p>
            </div>
            <div className="feature-item reveal-on-scroll">
              <Star size={48} strokeWidth={1.5} />
              <h4>High Success Rate</h4>
              <p>Our established direct contacts enable an unmatched win rate.</p>
            </div>
            <div className="feature-item reveal-on-scroll">
              <ShieldCheck size={48} strokeWidth={1.5} />
              <h4>Trusted Process</h4>
              <p>Transparent communication and realistic expectations from day one.</p>
            </div>
            <div className="feature-item reveal-on-scroll">
              <Lock size={48} strokeWidth={1.5} />
              <h4>Confidential Handling</h4>
              <p>Strict NDAs and absolute privacy for all our high-profile clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section ENHANCED MINIMAL */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-minimal animate-fade-in-long reveal-on-scroll">
            <h2>Ready to Take Control of Your Digital Presence?</h2>
            <p>Start your request today and let Joinz handle everything for you.</p>

            <div className="cta-minimal-buttons">
              <Link to="/services" className="btn-primary-hero">Get Started</Link>
              <Link to="/contact" className="btn-secondary-hero">Contact Us</Link>
            </div>

            <div className="cta-contact-info">
              <a href="https://wa.me/201020366187" target="_blank" rel="noreferrer" className="contact-link">
                <MessageCircle size={20} /> WhatsApp
              </a>
              <a href="mailto:info@joinz.agency" className="contact-link">
                <Mail size={20} /> Email
              </a>
              <a href="https://www.facebook.com/Joinz.Agency" target="_blank" rel="noreferrer" className="contact-link">
                <FacebookIcon size={20} /> Facebook
              </a>
              <a href="https://www.instagram.com/joinz.agency" target="_blank" rel="noreferrer" className="contact-link">
                <InstagramIcon size={20} /> Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;



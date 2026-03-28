import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import '../styles/about_contact.css';

const FacebookIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [waVisible, setWaVisible] = useState(false);

  useEffect(() => {
    emailjs.init("qOpgbC4RGXupwAnrO");
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWaVisible(true);
        }
      },
      { threshold: 0.15 }
    );
    
    const waSection = document.getElementById('whatsapp-section');
    if (waSection) observer.observe(waSection);
    
    return () => {
      if (waSection) observer.unobserve(waSection);
    };
  }, []);

  useEffect(() => {
    if (location.state?.serviceId) {
      setFormData(prev => ({ ...prev, service: location.state.serviceId }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.send(
      "service_e5n5eds",
      "template_qrk21bn",
      {
        name: formData.name,
        email: formData.email,
        service: formData.service,
        message: formData.message
      },
      "qOpgbC4RGXupwAnrO"
    )
      .then(() => {
        return emailjs.send(
          "service_e5n5eds",
          "template_3ek0uyn",
          {
            name: formData.name,
            email: formData.email
          },
          "qOpgbC4RGXupwAnrO"
        );
      })
      .then(() => {
        setIsSubmitting(false);
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', service: '', message: '' });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error("EmailJS Error:", error);
        alert("Failed to send the request. Please try again later.");
      });
  };

  return (
    <div className="contact-page animate-fade-in-long">
      <section className="contact-header">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>Ready to upgrade your digital presence? We are here to execute.</p>
        </div>
      </section>

      <section className="section container">
        <div className="contact-wrapper">
          {/* Priority 1: Contact form (Primary focus) */}
          <div className="contact-form-container reveal-on-scroll delay-1">
            <h2 style={{marginBottom: '0.5rem'}}>Start Your Request in 30 Seconds</h2>
            <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>Our team will review your case and respond shortly.</p>
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" id="name" name="name" 
                  className="form-control" required 
                  value={formData.name} onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" id="email" name="email" 
                  className="form-control" required 
                  value={formData.email} onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="service">Service Needed</label>
                <select 
                  id="service" name="service" className="form-control" required
                  value={formData.service} onChange={handleChange}
                >
                  <option value="" disabled>Select a specific service</option>
                  <option value="verification">Social Media Verification</option>
                  <option value="recovery">Account Recovery</option>
                  <option value="reputation">Reputation Management</option>
                  <option value="username">Username Claim</option>
                  <option value="growth">Growth Services</option>
                  <option value="branding">Graphic Design</option>
                  <option value="webdev">Website Development</option>
                  <option value="pr-media">Press & Publishing Services</option>
                  <option value="other">Other / Custom Inquiry</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Case Details & URLs</label>
                <textarea 
                  id="message" name="message" className="form-control" required 
                  value={formData.message} onChange={handleChange}
                  placeholder="Please provide the relevant links (@username, articles) and context..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary-hero interactive-submit" style={{width: '100%', marginTop: '1rem'}} disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Request'}
              </button>
            </form>
          </div>

          {/* Priority 2: Email */}
          <div className="contact-card mini-card reveal-on-scroll delay-2">
            <Mail size={24} />
            <div className="mini-card-content">
              <h4>Email</h4>
              <p>General inquiries & PR</p>
              <a href="mailto:info@joinz.agency">info@joinz.agency</a>
            </div>
          </div>

          {/* Priority 3: Social media options */}
          <div className="secondary-contacts-grid reveal-on-scroll delay-3">
            <div className="contact-card mini-card">
              <FacebookIcon size={24} />
              <div className="mini-card-content">
                <h4>Facebook</h4>
                <p>Join our community</p>
                <a href="https://www.facebook.com/Joinz.Agency" target="_blank" rel="noreferrer">Joinz.Agency</a>
              </div>
            </div>
            <div className="contact-card mini-card">
              <InstagramIcon size={24} />
              <div className="mini-card-content">
                <h4>Instagram</h4>
                <p>Follow our latest updates</p>
                <a href="https://www.instagram.com/joinz.agency" target="_blank" rel="noreferrer">@joinz.agency</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Full Width Banner */}
      <section 
        id="whatsapp-section" 
        className="container reveal-on-scroll"
        style={{marginBottom: '6rem', opacity: waVisible ? 1 : 0}}
      >
        <div className="whatsapp-banner">
          <div className="whatsapp-banner-content">
            <MessageCircle size={56} color="white" strokeWidth={1.5} />
            <div className="whatsapp-banner-text">
              <h2>WhatsApp</h2>
              <p>Fastest response time. Chat with our specialists immediately.</p>
            </div>
          </div>
          <a href="https://wa.me/201020366187" target="_blank" rel="noreferrer" className="btn-primary-hero btn-white interactive-wa" style={{display: 'inline-flex', flexShrink: 0}}>
            Start Chat <ArrowRight size={18} style={{marginLeft: '8px'}} />
          </a>
        </div>
      </section>

    </div>
  );
};
export default Contact;


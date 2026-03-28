import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { services } from '../data/servicesData';
import '../styles/services.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return <Navigate to="/services" />;
  }

  return (
    <div className="service-detail animate-fade-in">
      <section className="service-detail-header">
        <div className="container">
          <h1>{service.title}</h1>
          <p className="subtitle">{service.shortDesc}</p>
        </div>
      </section>

      <div className="container">
        <div className="detail-content-grid">
          <div className="detail-main">
            <div className="box animate-slide-up delay-1">
              <h3>Service Overview</h3>
              <p>{service.description}</p>
            </div>

            <div className="box requirements-box animate-slide-up delay-2">
              <h3>{service.requirementsTitle}</h3>
              <ul className="requirements-list">
                {service.requirements.map((req, idx) => (
                  <li key={idx}>{req}</li>
                ))}
              </ul>
            </div>

            <div className="box animate-slide-up delay-3">
              <h3>Our Process</h3>
              <div className="process-steps">
                {service.process.map(step => (
                  <div className="process-step" key={step.step}>
                    <div className="step-number">{step.step}</div>
                    <div className="step-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="cta-area" style={{padding: '2rem 0'}}>
              <Link to="/contact" state={{ serviceId: service.id }} className="btn-primary" style={{width: '100%'}}>
                {service.ctaText}
              </Link>
            </div>
          </div>

          <div className="detail-sidebar">
            <div className="platforms-list">
              <h4>Supported Platforms</h4>
              <ul>
                {service.platforms.map(platform => (
                  <li className="platform-tag" key={platform}>{platform}</li>
                ))}
              </ul>
            </div>

            <div className="benefits-list">
              <h4>Key Benefits</h4>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '0.8rem'}}>
                {service.benefits.map(benefit => (
                  <li key={benefit} style={{display: 'flex', gap: '8px'}}>
                    <span style={{color: 'var(--primary-color)'}}></span> {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="contact-card" style={{background: 'var(--primary-color)', color: 'white', padding: '2rem', borderRadius: '8px'}}>
              <h4 style={{color: 'white', marginBottom: '1rem'}}>Have Questions?</h4>
              <p style={{color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem'}}>Speak directly with us about your case.</p>
              <Link to="/contact" className="btn-secondary" style={{borderColor: 'white', color: 'white', background: 'transparent'}}>Contact us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceDetail;

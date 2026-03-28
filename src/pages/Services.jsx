import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/servicesData';
import '../styles/home.css';
import '../styles/services.css';

const ctaMap = {
    'verification': 'Get Verified Now',
    'reputation': 'Fix My Reputation',
    'recovery': 'Recover My Account',
    'username': 'Claim Username',
    'growth': 'Grow My Account',
    'branding': 'Design My Brand',
    'webdev': 'Build My Website',
    'pr-media': 'Publish My Story'
};

const sortedServices = [
    'verification', 'reputation', 'recovery', 'username',
    'growth', 'branding', 'webdev', 'pr-media'
];

const Services = () => {
  const displayServices = sortedServices.map(id => services.find(s => s.id === id)).filter(Boolean);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="services-page animate-fade-in">
      <section className="services-header" style={{padding: '6rem 0 3rem 0', textAlign: 'center'}}>
        <div className="container">
          <h1 style={{fontSize: '3rem', marginBottom: '1rem', fontWeight: 800}}>Our Digital Services</h1>
          <p style={{fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto'}}>Expert solutions to establish, protect, and amplify your digital authority across all major platforms.</p>
        </div>
      </section>

      <section className="section bg-light reveal-on-scroll" style={{paddingTop: '0'}}>
        <div className="container">
          <div className="section-title reveal-on-scroll">
            <h2>Choose Your Service</h2>
            <p>Select the solution that fits your exact needs.</p>
          </div>
          
          <div className="services-decision-grid">
            {displayServices.map((svc, index) => (
              <div 
                className={`service-decision-card reveal-on-scroll ${svc.id === 'verification' ? 'popular-card' : ''}`} 
                key={svc.id}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {svc.id === 'verification' && <div className="popular-badge">Most Popular</div>}
                
                <div className="card-top-sect">
                  <div className="card-header">
                    <div className="icon-box"><svc.icon strokeWidth={1.5} /></div>
                    <h3>{svc.title}</h3>
                    <p>{svc.shortDesc}</p>
                  </div>

                  <div className="card-benefits">
                    <ul>
                      {svc.benefits && svc.benefits.slice(0, 3).map((benefit, idx) => (
                        <li key={idx}>
                          <span style={{color: 'var(--primary-color)'}}></span> {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="card-cta" style={{marginTop: '1rem'}}>
                  <Link to={`/services/${svc.id}`} className={svc.id === 'verification' ? 'btn-primary-hero' : 'btn-secondary-hero'} style={{width: '100%', display: 'block', textAlign: 'center'}}>
                    {ctaMap[svc.id] || svc.ctaText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section reveal-on-scroll" style={{textAlign: 'center'}}>
        <div className="container">
          <h2>Not sure what you need?</h2>
          <p style={{marginBottom: '2rem'}}>Speak directly with our team to find the exact right solution for your digital presence.</p>
          <Link to="/contact" className="btn-primary-hero">Contact us</Link>
        </div>
      </section>
    </div>
  );
};
export default Services;


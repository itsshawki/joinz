import React, { useState, useEffect, useRef } from 'react';
import { Shield, Zap, Target, TrendingUp, BarChart, Headset } from 'lucide-react';
import '../styles/about_contact.css';

const About = () => {
  const [count98, setCount98] = useState(0);
  const [count500, setCount500] = useState(0);
  const [hasCounted, setHasCounted] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasCounted) {
        setHasCounted(true);
        // animate 98
        let start98 = 0;
        const step98 = setInterval(() => {
          start98 += 2;
          if(start98 >= 98) {
            setCount98(98);
            clearInterval(step98);
          } else {
            setCount98(start98);
          }
        }, 30);
        
        // animate 500
        let start500 = 0;
        const step500 = setInterval(() => {
          start500 += 18;
          if(start500 >= 500) {
            setCount500(500);
            clearInterval(step500);
          } else {
            setCount500(start500);
          }
        }, 35);
      }
    }, { threshold: 0.3 });
    
    if (statsRef.current) observer.observe(statsRef.current);
    return () => {
      if(statsRef.current) observer.unobserve(statsRef.current);
    };
  }, [hasCounted]);

  return (
    <div className="about-page animate-fade-in">
      <section className="about-hero">
        <div className="container">
          <h1>Who We Are</h1>
          <p>We are the silent partners behind the worlds leading digital profiles. Joinz is a premier digital service agency specializing in secure, confidential, and guaranteed social media solutions.</p>
        </div>
      </section>

      <section className="section container">
        <div className="about-content-centered">
          <h2>Our Story & Expertise</h2>
          <p>Joinz was built on one simple principle  control.</p>
          <p>In today's digital world, your online presence defines your reputation, opportunities, and influence. We created Joinz to give individuals and brands full control over how they appear, grow, and protect themselves online.</p>
          <p>Over the years, we've developed a strong network across media platforms, legal channels, and private communication lines that allow us to deliver results beyond traditional methods.</p>
          <p>Whether it's securing verification, removing harmful content, or handling sensitive digital issues  we operate with discretion, precision, and results-driven execution.</p>
          <p>At Joinz, <strong className="highlight-text">we don't rely on automated systems or generic support forms.</strong> Every case is handled strategically, ensuring the highest success rate possible.</p>
        </div>

        <div className="stats-grid" ref={statsRef}>
          <div className="stat-box animate-slide-up delay-1">
            <TrendingUp size={36} className="stat-icon" strokeWidth={1.5} />
            <div className="stat-number">{count98}%</div>
            <div className="stat-label">Success Rate</div>
          </div>
          <div className="stat-box animate-slide-up delay-2">
            <BarChart size={36} className="stat-icon" strokeWidth={1.5} />
            <div className="stat-number">{count500}+</div>
            <div className="stat-label">Cases Handled</div>
          </div>
          <div className="stat-box animate-slide-up delay-3">
            <Headset size={36} className="stat-icon" strokeWidth={1.5} />
            <div className="stat-number">24/7</div>
            <div className="stat-label">Dedicated Support</div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-title">
            <h2>What Makes Us Different</h2>
            <p>The Joinz Advantage.</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <Zap size={48} />
              <h4>Speed Without Compromise</h4>
              <p>Direct portal access means we bypass level 1 support entirely, cutting response times from months to days.</p>
            </div>
            <div className="feature-item">
              <Shield size={48} />
              <h4>Absolute Confidentiality</h4>
              <p>We work under strict NDAs. We never boast about our high-profile clients on public forums. Your privacy is paramount.</p>
            </div>
            <div className="feature-item">
              <Target size={48} />
              <h4>Result-Driven Assurance</h4>
              <p>We pre-vet every single case. If we take your case, it means we know we can deliver it.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;

import React, { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/layout.css';

const Layout = () => {
  const location = useLocation();
  const isContactPage = location.pathname.includes('/contact');

  useEffect(() => {
    const ob = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.reveal-on-scroll').forEach(el => ob.observe(el));

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === 1) { 
              if (node.classList.contains('reveal-on-scroll')) ob.observe(node);
              const children = node.querySelectorAll('.reveal-on-scroll');
              children.forEach(el => ob.observe(el));
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      ob.disconnect();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, paddingTop: 'var(--header-height)' }}>
        <Outlet />
      </main>
      <Footer />
      
      {!isContactPage && (
        <div className="global-sticky-cta reveal-on-scroll">
          <Link to="/contact">Start Your Request</Link>
        </div>
      )}
    </div>
  );
};
export default Layout;

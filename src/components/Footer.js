import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];



  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3>Doan Minh Thong</h3>
              <p>
                Cocos Developer with 3+ years of experience in Cocos Creator. 
                Always ready for new challenges and growth opportunities in game development.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.href)}
                    className="footer-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>dmthong1810@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>0915156560</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Binh Tan, Ho Chi Minh City</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Let's Collaborate</h4>
            <div className="footer-newsletter">
              <p>Interested in my work?</p>
              <div className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Contact</button>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="copyright">
              <p>&copy; {currentYear} Cocos Developer Portfolio. All rights reserved.</p>
            </div>
            
            <div className="footer-bottom-links">
              <span>Made with ❤️ for game development community</span>
            </div>
            
            <button className="back-to-top" onClick={scrollToTop} title="Về đầu trang">
              ↑
            </button>
          </div>
        </div>
      </div>

      <div className="footer-background">
        <div className="footer-particles"></div>
      </div>
    </footer>
  );
};

export default Footer;
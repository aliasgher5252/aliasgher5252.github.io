import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import personalData from '../data/personal.json';
import './Footer.css';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { name } = personalData.personalInfo;
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return (
    <footer className="footer">
      <div className="footer-container">
        {showScrollTop && (
          <button 
            className="scroll-top-button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp size={28} />
          </button>
        )}
        <div className="footer-content">
          <p className="copyright">© {currentYear} {name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

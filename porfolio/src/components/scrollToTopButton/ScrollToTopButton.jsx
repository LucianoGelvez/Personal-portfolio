import { useState, useEffect } from 'react';
import './ScrollToTopButton.css'
import up from '../../images/icons/color-icons/up.svg'

const ScrollToTopButton = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  const checkScrollTop = () => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const projectDetailRegex = /^\/Detalle-de-Proyecto\/[1-6]$/;

    if (scrolled > height * 0.5 && !projectDetailRegex.test(location.pathname)) {
    setShowScroll(true);
  }  else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
    className="scroll-to-top"
    onClick={scrollToTop}
    style={{
      display: showScroll ? 'block' : 'none',
    }}
  >
    <img src={up} alt="up" />
    &#8679;
  </button>
  );
};

export default ScrollToTopButton;
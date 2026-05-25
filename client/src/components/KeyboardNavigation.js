import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function KeyboardNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    '/',
    '/about',
    '/skills',
    '/projects',
    '/certificates',
    '/contact',
    '/last',
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      const currentIndex = pages.indexOf(location.pathname);

      // Right Arrow → Next Page
      if (e.key === 'ArrowRight') {
        if (currentIndex < pages.length - 1) {
          navigate(pages[currentIndex + 1]);
        }
      }

      // Left Arrow → Previous Page
      if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          navigate(pages[currentIndex - 1]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [location, navigate]);

  return null;
}
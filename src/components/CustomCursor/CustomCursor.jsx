import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power3.out',
      });
    };

    const onMouseEnter = () => {
      gsap.to(cursor, {
        scale: 2.5, 
        backgroundColor: '#4caf50', 
        duration: 0.3,
      });
    };
    const onMouseLeave = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#ff5722', 
        duration: 0.3,
      });
    };

    // Create ripple effect on click (on links and buttons)


    // Attach event listeners
    document.addEventListener('mousemove', onMouseMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnter);
      el.addEventListener('mouseleave', onMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnter);
        el.removeEventListener('mouseleave', onMouseLeave);

      });
    };
  }, []);

  return (
    <div
      id="custom-cursor"
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '20px',
        height: '20px',
        backgroundColor: '#ff5722', 
        borderRadius: '50%',
        pointerEvents: 'none', 
        transform: 'translate(-50%, -50%)',
        zIndex: '9999', 
        mixBlendMode: 'difference',
      }}
    ></div>
  );
};

export default CustomCursor;

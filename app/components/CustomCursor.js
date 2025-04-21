'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', mouseMove);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    }
  };

  return (
    <>
      <motion.div
        className="cursor-dot"
        variants={variants}
        animate="default"
        style={{
          position: 'fixed',
          zIndex: 999,
          pointerEvents: 'none',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: 'rgba(138, 43, 226, 0.2)',
          backdropFilter: 'blur(8px)',
          mixBlendMode: 'difference'
        }}
      />
      <motion.div
        className="cursor-ring"
        variants={variants}
        animate="default"
        style={{
          position: 'fixed',
          zIndex: 999,
          pointerEvents: 'none',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '2px solid rgba(138, 43, 226, 0.4)',
          transform: 'translate(-8px, -8px)',
          transition: 'width 0.2s, height 0.2s',
          mixBlendMode: 'difference'
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        a, button {
          cursor: none;
        }
        
        a:hover ~ .cursor-dot,
        button:hover ~ .cursor-dot {
          transform: scale(2);
        }
        
        a:hover ~ .cursor-ring,
        button:hover ~ .cursor-ring {
          width: 64px;
          height: 64px;
        }
      `}</style>
    </>
  );
};

export default CustomCursor; 
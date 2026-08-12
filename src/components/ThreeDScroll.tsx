import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';

interface ThreeDSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  perspective?: number;
  intensity?: 'subtle' | 'medium' | 'deep';
}

/**
 * ThreeDSection wraps a major page section in a 3D scroll perspective environment.
 * As the user scrolls down, the section subtly tilts on the X-axis and scales with depth.
 */
export const ThreeDSection: React.FC<ThreeDSectionProps> = ({
  children,
  className = '',
  id,
  perspective = 1200,
  intensity = 'subtle',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const rotateXDegree = intensity === 'deep' ? 12 : intensity === 'medium' ? 8 : 5;
  const scaleStart = intensity === 'deep' ? 0.94 : intensity === 'medium' ? 0.96 : 0.98;

  // Raw scroll mappings
  const rawRotateX = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [rotateXDegree, 0, 0, -rotateXDegree * 0.6]);
  const rawScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [scaleStart, 1, 1, 0.98]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25, 0.8, 1], [0.65, 1, 1, 0.75]);
  const rawTranslateZ = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [-40, 0, 0, -20]);

  // Smooth springs for high-framerate 3D scrolling
  const rotateX = useSpring(rawRotateX, { stiffness: 90, damping: 25, mass: 0.8 });
  const scale = useSpring(rawScale, { stiffness: 90, damping: 25, mass: 0.8 });
  const opacity = useSpring(rawOpacity, { stiffness: 90, damping: 25, mass: 0.8 });
  const translateZ = useSpring(rawTranslateZ, { stiffness: 90, damping: 25, mass: 0.8 });

  return (
    <div
      ref={containerRef}
      id={id}
      style={{ perspective: `${perspective}px` }}
      className={`relative w-full ${className}`}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          z: translateZ,
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity',
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
};

interface ThreeDCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  depth?: number;
  enableMouseTilt?: boolean;
}

/**
 * ThreeDCard applies entrance 3D animation on scroll and interactive 3D mouse tilt.
 */
export const ThreeDCard: React.FC<ThreeDCardProps> = ({
  children,
  className = '',
  onClick,
  depth = 20,
  enableMouseTilt = true,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt position
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);
  const [glarePos, setGlarePos] = React.useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableMouseTilt || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = -((y - centerY) / centerY) * 7; // Max tilt 7deg
    const rY = ((x - centerX) / centerX) * 7;

    setRotateX(rX);
    setRotateY(rY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    if (!enableMouseTilt) return;
    setRotateX(0);
    setRotateY(0);
    setGlarePos((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 35, rotateX: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      animate={{
        rotateX,
        rotateY,
      }}
      style={{
        perspective: '1000px',
        transformStyle: 'preserve-3d',
      }}
      className={`relative transition-shadow duration-500 ${className}`}
    >
      <div style={{ transform: `translateZ(${depth}px)` }} className="w-full h-full">
        {children}
      </div>

      {/* Dynamic 3D Glare effect on mouse move */}
      {enableMouseTilt && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.4) 0%, rgba(197, 160, 89, 0.15) 35%, transparent 70%)`,
            opacity: glarePos.opacity,
          }}
        />
      )}
    </motion.div>
  );
};

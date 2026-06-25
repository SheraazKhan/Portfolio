import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ScrollReveal = ({ children, direction = 'up', delay = 0, duration = 0.6 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
  };

  const offset = offsets[direction] || offsets.up;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: offset.y, x: offset.x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: offset.y, x: offset.x }}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer = ({ children, staggerDelay = 0.1 }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, direction = 'up' }) => {
  const offsets = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: 30 },
  };
  const offset = offsets[direction] || offsets.up;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: offset.y, x: offset.x },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;

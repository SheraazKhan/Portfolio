import React from 'react';
import { motion } from 'framer-motion';
import {
  CoverWrapper,
  CoverFace,
  CornerOrnament,
  CoverTitle,
  CoverSubtitle,
  Emblem,
  CoverDivider,
  ClickHint,
  FloatingParticle,
} from './BookCoverStyles';

const particles = [
  { size: 3, color: '#A855F7', duration: 4, delay: 0, left: '20%', top: '70%' },
  { size: 4, color: '#06B6D4', duration: 3.5, delay: 0.8, left: '75%', top: '60%' },
  { size: 2, color: '#EC4899', duration: 5, delay: 1.5, left: '40%', top: '80%' },
  { size: 3, color: '#A855F7', duration: 4.5, delay: 2, left: '60%', top: '75%' },
  { size: 4, color: '#06B6D4', duration: 3, delay: 0.5, left: '85%', top: '50%' },
  { size: 2, color: '#EC4899', duration: 4, delay: 1, left: '30%', top: '65%' },
  { size: 3, color: '#8B5CF6', duration: 3.8, delay: 2.5, left: '50%', top: '85%' },
];

const BookCover = ({ onClick, opening }) => {
  return (
    <motion.div
      animate={opening ? { rotateY: -160, opacity: 0 } : { rotateY: 0, opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ transformOrigin: 'left center', transformStyle: 'preserve-3d' }}
    >
      <CoverWrapper onClick={!opening ? onClick : undefined}>
        <CoverFace>
          <CornerOrnament className="top-left" />
          <CornerOrnament className="top-right" />
          <CornerOrnament className="bottom-left" />
          <CornerOrnament className="bottom-right" />

          <Emblem>
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M50 5 L61 35 L95 35 L68 55 L79 90 L50 70 L21 90 L32 55 L5 35 L39 35 Z"
                stroke="url(#emblemGrad)"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M50 20 L57 40 L78 40 L61 52 L68 73 L50 61 L32 73 L39 52 L22 40 L43 40 Z"
                stroke="url(#emblemGrad)"
                strokeWidth="1"
                fill="rgba(168, 85, 247, 0.05)"
              />
              <circle cx="50" cy="50" r="12" stroke="url(#emblemGrad)" strokeWidth="1" fill="none" />
              <circle cx="50" cy="50" r="3" fill="#A855F7" opacity="0.6" />
              <defs>
                <linearGradient id="emblemGrad" x1="0" y1="0" x2="100" y2="100">
                  <stop offset="0%" stopColor="#A855F7" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
            </svg>
          </Emblem>

          <CoverDivider />
          <CoverTitle>The Developer's Grimoire</CoverTitle>
          <CoverSubtitle>Arcane Works & Digital Creations</CoverSubtitle>
          <ClickHint>Click to Open</ClickHint>

          {particles.map((p, i) => (
            <FloatingParticle
              key={i}
              size={p.size}
              color={p.color}
              duration={p.duration}
              delay={p.delay}
              style={{ left: p.left, top: p.top }}
            />
          ))}
        </CoverFace>
      </CoverWrapper>
    </motion.div>
  );
};

export default BookCover;

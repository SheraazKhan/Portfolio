import styled, { keyframes } from 'styled-components';

const glowPulse = keyframes`
  0%, 100% { opacity: 0.7; transform: scaleX(1) scaleY(1); }
  50% { opacity: 1; transform: scaleX(1.05) scaleY(1.03); }
`;

const energyRise = keyframes`
  0% {
    transform: translateY(0) scaleY(0.3) scaleX(0.9);
    opacity: 0;
  }
  15% {
    opacity: 1;
    transform: translateY(-10%) scaleY(1) scaleX(1);
  }
  50% {
    opacity: 0.9;
    transform: translateY(-30%) scaleY(1.1) scaleX(0.95);
  }
  100% {
    opacity: 0;
    transform: translateY(-80%) scaleY(0.5) scaleX(0.6);
  }
`;

const shimmer = keyframes`
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
`;

const pageFlutter = keyframes`
  0%, 100% { transform: rotateY(0deg); }
  25% { transform: rotateY(2deg); }
  75% { transform: rotateY(-2deg); }
`;

const masterReveal = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  20% {
    opacity: 1;
    transform: scale(1);
  }
  75% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.05);
  }
`;

export const FlameContainer = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 2;
  overflow: visible;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${masterReveal} 2.8s ease-out forwards;
`;

export const OpenBookBase = styled.div`
  position: relative;
  width: 420px;
  height: 300px;
  display: flex;
  perspective: 800px;

  @media ${(props) => props.theme.breakpoints.md} {
    width: 340px;
    height: 250px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 280px;
    height: 210px;
  }
`;

export const BookPageLeft = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(135deg, #1a1520 0%, #12101a 50%, #0d0b14 100%);
  border-radius: 8px 0 0 8px;
  border: 1px solid rgba(168, 85, 247, 0.15);
  border-right: none;
  position: relative;
  transform-origin: right center;
  animation: ${pageFlutter} 2s ease-in-out infinite;
  box-shadow: inset -10px 0 20px rgba(0, 0, 0, 0.3), -5px 5px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 15%;
    right: 20%;
    bottom: 15%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(168, 85, 247, 0.06) 0px,
      rgba(168, 85, 247, 0.06) 1px,
      transparent 1px,
      transparent 14px
    );
  }
`;

export const BookPageRight = styled.div`
  width: 50%;
  height: 100%;
  background: linear-gradient(225deg, #1a1520 0%, #12101a 50%, #0d0b14 100%);
  border-radius: 0 8px 8px 0;
  border: 1px solid rgba(168, 85, 247, 0.15);
  border-left: none;
  position: relative;
  transform-origin: left center;
  animation: ${pageFlutter} 2.3s ease-in-out infinite reverse;
  box-shadow: inset 10px 0 20px rgba(0, 0, 0, 0.3), 5px 5px 20px rgba(0, 0, 0, 0.4);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 15%;
    left: 20%;
    right: 15%;
    bottom: 15%;
    background: repeating-linear-gradient(
      to bottom,
      rgba(6, 182, 212, 0.06) 0px,
      rgba(6, 182, 212, 0.06) 1px,
      transparent 1px,
      transparent 14px
    );
  }
`;

export const BookSpineLine = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: linear-gradient(to bottom,
    rgba(168, 85, 247, 0.3),
    rgba(168, 85, 247, 0.5),
    rgba(168, 85, 247, 0.3)
  );
  z-index: 2;
  box-shadow: 0 0 12px rgba(168, 85, 247, 0.4);
`;

export const MagicGlow = styled.div`
  position: absolute;
  bottom: 30%;
  left: 50%;
  transform: translateX(-50%);
  width: 120%;
  height: 160%;
  pointer-events: none;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 10%;
    width: 80%;
    height: 100%;
    background: radial-gradient(
      ellipse at 50% 90%,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(168, 85, 247, 0.5) 15%,
      rgba(6, 182, 212, 0.3) 30%,
      rgba(168, 85, 247, 0.15) 50%,
      transparent 70%
    );
    filter: blur(8px);
    animation: ${glowPulse} 1.5s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 10%;
    left: 20%;
    width: 60%;
    height: 80%;
    background: radial-gradient(
      ellipse at 50% 85%,
      rgba(255, 255, 255, 0.8) 0%,
      rgba(255, 255, 255, 0.3) 10%,
      rgba(192, 132, 252, 0.4) 25%,
      transparent 55%
    );
    filter: blur(4px);
    animation: ${glowPulse} 1.2s ease-in-out infinite 0.3s;
  }
`;

export const EnergyStream = styled.div`
  position: absolute;
  bottom: 40%;
  left: 50%;
  transform: translateX(-50%);
  width: ${(props) => props.width || '40%'};
  height: ${(props) => props.height || '120%'};
  background: radial-gradient(
    ellipse at 50% 95%,
    ${(props) => props.color || 'rgba(168, 85, 247, 0.6)'} 0%,
    ${(props) => props.colorMid || 'rgba(168, 85, 247, 0.2)'} 30%,
    transparent 60%
  );
  filter: blur(${(props) => props.blur || 6}px);
  animation: ${energyRise} ${(props) => props.duration || 2}s ease-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  z-index: 4;
  pointer-events: none;
`;

export const LightRay = styled.div`
  position: absolute;
  bottom: 35%;
  left: 50%;
  width: 2px;
  height: 200%;
  transform-origin: bottom center;
  transform: translateX(-50%) rotate(${(props) => props.angle || 0}deg);
  background: linear-gradient(
    to top,
    ${(props) => props.color || 'rgba(168, 85, 247, 0.4)'} 0%,
    ${(props) => props.color || 'rgba(168, 85, 247, 0.1)'} 40%,
    transparent 70%
  );
  filter: blur(${(props) => props.blur || 3}px);
  animation: ${shimmer} ${(props) => props.speed || 1.5}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  z-index: 3;
  pointer-events: none;
`;

export const SparkParticle = styled.div`
  position: absolute;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 6px ${(props) => props.color || '#A855F7'},
              0 0 12px ${(props) => props.color || '#A855F7'};
  animation: ${energyRise} ${(props) => props.duration || 2}s ease-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  z-index: 5;
  pointer-events: none;
`;

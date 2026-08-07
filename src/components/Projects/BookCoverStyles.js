import styled, { keyframes } from 'styled-components';

const pulseGlow = keyframes`
  0%, 100% { filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.4)); }
  50% { filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.8)) drop-shadow(0 0 40px rgba(6, 182, 212, 0.3)); }
`;

const float = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.6; }
  50% { transform: translateY(-30px) scale(1.2); opacity: 1; }
  100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const CoverWrapper = styled.div`
  width: 420px;
  height: 580px;
  position: relative;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    transform: rotateY(-5deg) scale(1.02);
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 380px;
    height: 530px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 320px;
    height: 460px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 280px;
    height: 420px;
  }
`;

export const CoverFace = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 4px 16px 16px 4px;
  background: radial-gradient(ellipse at 60% 30%, #1a0a30 0%, #0a0520 40%, #050816 100%);
  box-shadow:
    0 0 0 2px rgba(168, 85, 247, 0.3),
    inset 0 0 0 8px rgba(168, 85, 247, 0.06),
    0 20px 60px rgba(0, 0, 0, 0.6),
    0 0 80px rgba(168, 85, 247, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 30px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 22px;
    height: 100%;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0%, rgba(10, 5, 32, 0.8) 40%, transparent 100%);
    border-radius: 4px 0 0 4px;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 12px;
    border: 1px solid rgba(168, 85, 247, 0.15);
    border-radius: 2px 12px 12px 2px;
    pointer-events: none;
  }
`;

export const CornerOrnament = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  pointer-events: none;

  &::before, &::after {
    content: '';
    position: absolute;
    background: linear-gradient(135deg, #A855F7, #06B6D4);
    border-radius: 1px;
  }

  &.top-left {
    top: 20px;
    left: 28px;
    &::before { width: 20px; height: 2px; top: 0; left: 0; }
    &::after { width: 2px; height: 20px; top: 0; left: 0; }
  }

  &.top-right {
    top: 20px;
    right: 16px;
    &::before { width: 20px; height: 2px; top: 0; right: 0; }
    &::after { width: 2px; height: 20px; top: 0; right: 0; }
  }

  &.bottom-left {
    bottom: 20px;
    left: 28px;
    &::before { width: 20px; height: 2px; bottom: 0; left: 0; }
    &::after { width: 2px; height: 20px; bottom: 0; left: 0; }
  }

  &.bottom-right {
    bottom: 20px;
    right: 16px;
    &::before { width: 20px; height: 2px; bottom: 0; right: 0; }
    &::after { width: 2px; height: 20px; bottom: 0; right: 0; }
  }
`;

export const CoverTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 3.2rem;
  font-weight: 800;
  letter-spacing: 2px;
  text-align: center;
  line-height: 1.2;
  background: linear-gradient(135deg, #FFFFFF 30%, rgba(168, 85, 247, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;
  position: relative;
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 2.6rem;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.2rem;
  }
`;

export const CoverSubtitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  color: rgba(248, 250, 252, 0.5);
  letter-spacing: 3px;
  text-transform: uppercase;
  text-align: center;
  margin-top: 4px;
  position: relative;
  z-index: 1;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }
`;

export const Emblem = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 1;
  animation: ${pulseGlow} 3s ease-in-out infinite;

  svg {
    width: 80px;
    height: 80px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 70px;
    height: 70px;
    margin-bottom: 16px;
    svg { width: 56px; height: 56px; }
  }
`;

export const CoverDivider = styled.div`
  width: 120px;
  height: 2px;
  background: linear-gradient(90deg, transparent, #A855F7, #06B6D4, transparent);
  margin: 16px 0;
  position: relative;
  z-index: 1;
`;

export const ClickHint = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: rgba(248, 250, 252, 0.3);
  letter-spacing: 1px;
  margin-top: 24px;
  position: relative;
  z-index: 1;
  background: linear-gradient(
    90deg,
    rgba(248, 250, 252, 0.3) 0%,
    rgba(168, 85, 247, 0.8) 50%,
    rgba(248, 250, 252, 0.3) 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shimmer} 3s linear infinite;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1rem;
  }
`;

export const FloatingParticle = styled.div`
  position: absolute;
  width: ${(props) => props.size || 4}px;
  height: ${(props) => props.size || 4}px;
  border-radius: 50%;
  background: ${(props) => props.color || '#A855F7'};
  opacity: 0;
  animation: ${float} ${(props) => props.duration || 3}s ease-in-out infinite;
  animation-delay: ${(props) => props.delay || 0}s;
  pointer-events: none;
  z-index: 0;
`;

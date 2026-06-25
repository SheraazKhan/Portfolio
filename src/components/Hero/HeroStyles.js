import styled from 'styled-components';

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  text-align: center;
  padding: 0 24px;

  &::before {
    content: '';
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 600px;
    background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.1) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
`;

export const HeroBadge = styled.span`
  display: inline-flex;
  padding: 8px 20px;
  border-radius: 50px;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  color: #A855F7;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 24px;
  font-family: ${props => props.theme.fonts.main};
`;

export const HeroTitle = styled.h1`
  font-family: ${props => props.theme.fonts.title};
  font-size: clamp(40px, 6vw, 80px);
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(135deg, #FFFFFF 30%, rgba(168, 85, 247, 0.9) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 24px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: clamp(28px, 8vw, 40px);
  }
`;

export const HeroSubtitle = styled.p`
  font-size: clamp(16px, 2vw, 22px);
  color: rgba(248, 250, 252, 0.6);
  max-width: 600px;
  line-height: 1.7;
  margin-bottom: 40px;
  font-family: ${props => props.theme.fonts.main};
  font-weight: 300;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 50px;
  background: linear-gradient(135deg, #A855F7, #06B6D4);
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-decoration: none;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(168, 85, 247, 0.4);
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 12px 24px;
    font-size: 14px;
  }
`;

export const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 50px;
  background: transparent;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  text-decoration: none;
  border: 1px solid rgba(168, 85, 247, 0.5);

  &:hover {
    background: rgba(168, 85, 247, 0.15);
    border-color: rgba(168, 85, 247, 0.8);
    transform: translateY(-2px);
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 12px 24px;
    font-size: 14px;
  }
`;


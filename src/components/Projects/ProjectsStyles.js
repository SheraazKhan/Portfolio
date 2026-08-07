import styled from 'styled-components';

export const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  perspective: 2000px;
  position: relative;
  padding: 3rem 0;

  @media ${(props) => props.theme.breakpoints.md} {
    min-height: 580px;
    padding: 2rem 0;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    min-height: 500px;
    padding: 1.5rem 0;
  }
`;

export const BookOpenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  perspective: 1500px;
`;

export const BookSpine = styled.div`
  position: absolute;
  left: -4px;
  top: 0;
  width: 8px;
  height: 100%;
  background: linear-gradient(90deg, #050816 0%, rgba(168, 85, 247, 0.15) 50%, #0a0520 100%);
  border-radius: 4px 0 0 4px;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.5);
  z-index: 3;
`;

export const PageArea = styled.div`
  position: relative;
  transform-style: preserve-3d;
`;

export const NavigationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 24px;

  @media ${(props) => props.theme.breakpoints.sm} {
    gap: 12px;
    margin-top: 16px;
  }
`;

export const NavButton = styled.button`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 10px 20px;
  background: linear-gradient(135deg, #A855F7, #06B6D4);
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${(props) => props.disabled ? 0.3 : 1};
  pointer-events: ${(props) => props.disabled ? 'none' : 'auto'};

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.2rem;
    padding: 8px 16px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -16px;
  right: -16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid rgba(168, 85, 247, 0.3);
  color: rgba(248, 250, 252, 0.7);
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 10;

  &:hover {
    background: rgba(168, 85, 247, 0.3);
    border-color: rgba(168, 85, 247, 0.6);
    color: #fff;
    transform: scale(1.1);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    top: -12px;
    right: -8px;
    width: 32px;
    height: 32px;
  }
`;

export const PageCounter = styled.span`
  font-size: 1.3rem;
  color: rgba(248, 250, 252, 0.5);
  font-family: 'Inter', sans-serif;
  letter-spacing: 1px;
  min-width: 80px;
  text-align: center;
`;

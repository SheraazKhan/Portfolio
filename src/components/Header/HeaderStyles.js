import { IoIosArrowDropdown } from 'react-icons/io';
import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  width: 90%;
  max-width: 1100px;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  align-items: center;
  padding: 12px 32px;
  background: rgba(5, 8, 22, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  transition: background 0.3s ease, box-shadow 0.3s ease;

  @media ${(props) => props.theme.breakpoints.sm} {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
    padding: 12px 16px;
    width: 94%;
    top: 12px;
  }
`;

export const Span = styled.span`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #A855F7, #06B6D4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 1 / 2;
  }
`;

export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 1 / 3;
    justify-content: space-around;
  }
`;

export const Div3 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    grid-column: 2 / 3;
    justify-content: flex-end;
  }
`;

export const NavLink = styled.a`
  font-size: 1.6rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.65);
  transition: 0.3s ease;
  position: relative;
  padding-bottom: 4px;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(135deg, #A855F7, #06B6D4);
    border-radius: 2px;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #fff;
    &::after {
      width: 100%;
    }
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size: 1.4rem;
  }
`;

export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

export const NavProductsIcon = styled(IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '.75')};
  transform: ${({ isOpen }) => (isOpen ? 'scaleY(-1)' : 'scaleY(1)')};

  &:hover {
    opacity: 1;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`;

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: rgba(168, 85, 247, 0.2);
    transform: scale(1.15);
    cursor: pointer;
  }
`;

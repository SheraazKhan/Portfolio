import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 500px;
  min-height: 620px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 4px 16px 16px 4px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.02));
    pointer-events: none;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    width: 450px;
    min-height: 570px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    width: 380px;
    min-height: 500px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 85vw;
    min-height: auto;
  }
`;

export const PageImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);

  @media ${(props) => props.theme.breakpoints.md} {
    height: 160px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    height: 140px;
  }
`;

export const PageContent = styled.div`
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 16px 20px;
  }
`;

export const PageTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  background: linear-gradient(135deg, #FFFFFF 30%, rgba(168, 85, 247, 0.8) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 4px;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2rem;
  }
`;

export const PageDivider = styled.hr`
  width: 60px;
  height: 2px;
  margin: 12px auto;
  border: 0;
  background: linear-gradient(90deg, #A855F7, #06B6D4);
  border-radius: 2px;
`;

export const PageDescription = styled.p`
  color: rgba(248, 250, 252, 0.6);
  font-size: 1.4rem;
  line-height: 22px;
  text-align: center;
  margin-bottom: 16px;
  flex: 1;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.3rem;
    line-height: 20px;
  }
`;

export const PageTagList = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const PageTag = styled.span`
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 20px;
  padding: 4px 12px;
  color: #A855F7;
  font-size: 1.2rem;
`;

export const PageLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: auto;
  padding-bottom: 4px;
`;

export const PageLink = styled.a`
  color: #fff;
  font-size: 1.3rem;
  font-weight: 600;
  padding: 8px 20px;
  background: linear-gradient(135deg, #A855F7, #06B6D4);
  border-radius: 12px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
  }
`;

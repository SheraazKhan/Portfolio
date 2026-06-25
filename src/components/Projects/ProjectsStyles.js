import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`

export const BlogCard = styled.div`
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  text-align: center;
  width: 400px;
  overflow: hidden;
  transition: transform 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 20px 60px rgba(168, 85, 247, 0.15);
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  padding: 0 24px;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  letter-spacing: 1px;
  color: #F8FAFC;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '2.4rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 60px;
  height: 2px;
  margin: 16px auto;
  border: 0;
  background: linear-gradient(90deg, #A855F7, #06B6D4);
  border-radius: 2px;
`;

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 24px;
  color: rgba(248, 250, 252, 0.6);
  font-size: 1.5rem;
  line-height: 24px;
  text-align: justify;

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 16px;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 16px;
  margin: 2rem 0;
`;

export const ExternalLinks = styled.a`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
  padding: 10px 24px;
  background: linear-gradient(135deg, #A855F7, #06B6D4);
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 1.5rem 24px;
  flex-wrap: wrap;
`

export const Tag = styled.li`
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.2);
  border-radius: 20px;
  padding: 4px 12px;
  color: #A855F7;
  font-size: 1.3rem;
`

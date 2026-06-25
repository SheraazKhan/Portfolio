import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin: 3rem 0;

  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 16px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 0;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md}{
    font-size: 18px;
    line-height: 24px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 0.02em;
    margin-bottom: 4px;
  }
`

export const ListParagraph = styled.p`
  font-size: 15px;
  line-height: 26px;
  color: rgba(248, 250, 252, 0.6);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 14px;
    line-height: 24px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 28px 24px;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 12px 40px rgba(168, 85, 247, 0.1);
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 0;
    flex-direction: column;
  }
`

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(6, 182, 212, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: #A855F7;
  font-size: 24px;
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;

  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`

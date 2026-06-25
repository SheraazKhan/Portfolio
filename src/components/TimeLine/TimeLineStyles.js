import styled from 'styled-components'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 40px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  margin-bottom: 40px;

  @media ${props => props.theme.breakpoints.md} {
    padding: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 20px;
  }
`

export const ProfileImage = styled.img`
  width: 100%;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  object-fit: cover;
  aspect-ratio: 1;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 280px;
    margin: 0 auto;
  }
`

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-size: 16px;
    line-height: 28px;
    color: rgba(248, 250, 252, 0.65);
  }

  @media ${props => props.theme.breakpoints.sm} {
    p {
      font-size: 14px;
      line-height: 24px;
    }
  }
`

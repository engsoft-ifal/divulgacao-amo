import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 3em;
  padding: 60px 0;

  @media only screen and (max-width: 500px) {
    .footer {
      flex-direction: column;
      align-items: center;
    }
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 24px;
`

export const Support = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`

export const BoxMedia = styled.div`
  filter: invert(1);
  display: flex;
  gap: 1em;
`

export const Link = styled.a`
  transition: 0.3s ease-in-out;
  transform: scale(1.05);
`

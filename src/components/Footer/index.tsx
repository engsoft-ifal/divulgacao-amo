import { Footer as _Footer, Container, Support, BoxMedia, Link } from './styles'

import ifal from '@assets/footer/ifal.png'
import fapeal from '@assets/footer/fapeal.png'
import secti from '@assets/footer/secti.png'
import pibicjr from '@assets/footer/pibicjr.png'
import cpsoftware from '@assets/footer/cpsoftware.png'

import facebook from '@assets/media/facebook.svg'
import instagram from '@assets/media/instagram.svg'
import linkedin from '@assets/media/linkedin.svg'
import twitter from '@assets/media/twitter.svg'

export function Footer() {
  return (
    <>
      <_Footer>
        <Container>
          <h3>Parceiros</h3>
          <Support>
            <img src={ifal} alt="Logo do IFAL" />
            <img src={fapeal} alt="Logo do FAPEAL" />
            <img src={secti} alt="Logo da SECTI" />
            <img src={pibicjr} alt="Logo do Pibic Júnior" />
            <img src={cpsoftware} alt="Logo da CPSoftware" />
          </Support>
        </Container>

        <Container>
          <h3>Contatos</h3>
          <BoxMedia>
            <Link
              href="https://www.facebook.com/amoifal/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={facebook} alt="Logo do Facebook" />
            </Link>
            <Link
              href="https://www.instagram.com/amo.ifal/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instagram} alt="Logo do Instagram" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/amoifal/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedin} alt="Logo do LinkedIn" />
            </Link>
            <Link
              href="https://twitter.com/amo_mapa56230"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} alt="Logo do Twitter" />
            </Link>
          </BoxMedia>
        </Container>
      </_Footer>
    </>
  )
}

import { useTranslation } from "react-multi-lang"

import PrimaryText from "@components/elements/texts/primary"
import { Wrapper, Container, Options, Block, Link } from "./styles"
import SubtitleLink from "@components/elements/links/subtitle"
import SubtitleText from "@components/elements/texts/subtitle"

const ContactUs = () => {
  const t = useTranslation()
  const mail = process.env.NEXT_PUBLIC_WEB_EMAIL

  function navigateTo(href) {
    window.location.href = href
  }

  return (
      <Wrapper>
        <Container>
          <PrimaryText text={t('banners.contactUs.title')} />

          <Options>
            <Block>
              <Link><SubtitleLink text={t('banners.contactUs.facebook')} action={() => { navigateTo(process.env.NEXT_PUBLIC_APP_FACEBOOK)}} /></Link>
              <Link><SubtitleLink text={t('banners.contactUs.youtube')} action={() => { navigateTo(process.env.NEXT_PUBLIC_APP_YOUTUBE)}} /></Link>
              <Link><SubtitleLink text={t('banners.contactUs.instagram')} action={() => { navigateTo(process.env.NEXT_PUBLIC_APP_INSTAGRAM)}} /></Link>
            </Block>
            <Block>
              <Link><SubtitleText text={t('banners.contactUs.email')} /></Link>
              <SubtitleLink text={mail} />
            </Block>
          </Options>
        </Container>
      </Wrapper>
  )
}

export default ContactUs
import { useTranslation } from "react-multi-lang"

import MockedVideo from "@components/videos/mocked"
import PrimaryText from "@components/elements/texts/primary"
import PrimaryButton from "@components/elements/buttons/primary"
import ExtendedLogo from "@components/elements/images/extendedLogo"
import { Themes } from "@interfaces/texts/PrimaryTextProps"
import { Wrapper, Container, InfoArea, VideoArea, Actions } from "./styles"

const Main = () => {
  const t = useTranslation()

  function goToApp() {
    window.location.href = process.env.NEXT_PUBLIC_APP_LINK
  }

  return (
      <Wrapper>
        <Container>
          <InfoArea>
            <ExtendedLogo />
            <PrimaryText text={t('banners.highlight.title')} theme={Themes.Light} />
            <Actions>
              <PrimaryButton text={t('banners.highlight.action')} action={goToApp} />
            </Actions>
          </InfoArea>
          <VideoArea>
            <MockedVideo src="./resume.mp4" />
          </VideoArea>
        </Container>
      </Wrapper>
  )
}

export default Main
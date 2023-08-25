import { useTranslation } from "react-multi-lang"

import PrimaryText from "@components/elements/texts/primary"
import { Wrapper, Container, Options, Block } from "./styles"
import SubtitleText from "@components/elements/texts/subtitle"

const AboutUs = () => {
  const t = useTranslation()
  const content = t('banners.about.content').split("|")

  function getContent() {
    return content.map((c, i) => {
      return  (
        <Block key={i}>
          <SubtitleText text={c} />
        </Block>
      )
    })
  }

  return (
      <Wrapper>
        <Container>
          <PrimaryText text={t('banners.about.title')} />

          <Options>
            { getContent() }
          </Options>
        </Container>
      </Wrapper>
  )
}

export default AboutUs
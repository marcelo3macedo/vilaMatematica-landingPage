import { useTranslation } from "react-multi-lang"

import { Wrapper, Container, Block, Options } from "./styles"
import PrimaryText from "@components/elements/texts/primary"
import SubtitleText from "@components/elements/texts/subtitle"

const Terms = () => {
  const t = useTranslation()
  const content = t('banners.termsAndConditions.content').split("|")

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
          <PrimaryText text={t('banners.termsAndConditions.title')} />
          
          <Options>
            { getContent() }
          </Options>
        </Container>
      </Wrapper>
  )
}

export default Terms
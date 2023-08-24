import { useTranslation } from "react-multi-lang"

import childCellphone from "@assets/images/banners/crianca-celular.png"
import PrimaryText from "@components/elements/texts/primary"
import { Wrapper, Container, InfoArea, ImageArea, Details } from "./styles"
import SubtitleText from "@components/elements/texts/subtitle"
import FeaturedImage from "@components/elements/images/featured"

const Journey = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <InfoArea>
            <PrimaryText text={t('banners.journey.title')} />
            <Details>
              <SubtitleText text={t('banners.journey.subtitle')} />
            </Details>
          </InfoArea>
          <ImageArea>
            <FeaturedImage image={childCellphone} />
          </ImageArea>
        </Container>
      </Wrapper>
  )
}

export default Journey
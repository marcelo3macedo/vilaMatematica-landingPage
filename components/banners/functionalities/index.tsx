import { useTranslation } from "react-multi-lang"

import PrimaryText from "@components/elements/texts/primary"
import ItemFunctionalities from "@components/functionalities/item"
import block1 from "@assets/images/blocks/block1.png"
import block2 from "@assets/images/blocks/block2.png"
import block3 from "@assets/images/blocks/block3.png"
import block4 from "@assets/images/blocks/block4.png"

import { Wrapper, Container, Header, Items, Footer, Details } from "./styles"
import InfoText from "@components/elements/texts/information"
import SubtitleText from "@components/elements/texts/subtitle"

const Functionalities = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <Header>
            <PrimaryText text={t('banners.functionalities.title')} />
          </Header>
          <Items>
            <ItemFunctionalities title={t('banners.functionalities.operation.title')} description={t('banners.functionalities.operation.description')} src={block1.src} />
            <ItemFunctionalities title={t('banners.functionalities.fingers.title')} description={t('banners.functionalities.fingers.description')} src={block2.src} />
            <ItemFunctionalities title={t('banners.functionalities.count.title')} description={t('banners.functionalities.count.description')} src={block3.src} />
            <ItemFunctionalities title={t('banners.functionalities.problems.title')} description={t('banners.functionalities.problems.description')} src={block4.src} />
          </Items>
          <Footer>
            <SubtitleText text={t('banners.functionalities.disclaimer.title')} />
            <Details>
              <InfoText text={t('banners.functionalities.disclaimer.description')} />
            </Details>
          </Footer>
        </Container>
      </Wrapper>
  )
}

export default Functionalities
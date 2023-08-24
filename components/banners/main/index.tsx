import { useTranslation } from "react-multi-lang"

import cellphone from "@assets/images/mockup/celular.png"
import download from "@assets/images/download.png"
import { Wrapper, Container, Details, Preview, Video, Cellphone, CellphoneImage, Title, Buttons, Button, Download } from "./styles"

const Main = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <Details>
            <Title>{t('banners.highlight.title')}</Title>
            <Buttons>
              <Button>{t('banners.highlight.action')}</Button>
            </Buttons>
          </Details>
          <Preview>
            <Video autoPlay loop src="./presentations.mp4" />
            <Cellphone className="no-select">
              <CellphoneImage src={cellphone.src} />            
            </Cellphone>
            <Download src={download.src} />
          </Preview>
        </Container>
      </Wrapper>
  )
}

export default Main
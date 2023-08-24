import cellphone from "@assets/images/mockup/celular.png"
import download from "@assets/images/download.png"
import { Wrapper, Video, Cellphone, CellphoneImage, Download } from "./styles"

const MockedVideo = ({ src }) => {
  return (
      <Wrapper>
        <Video autoPlay muted loop src={src} />
        <Cellphone className="no-select">
          <CellphoneImage src={cellphone.src} />            
        </Cellphone>
        <Download src={download.src} />
      </Wrapper>
  )
}

export default MockedVideo
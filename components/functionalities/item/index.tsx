import { Wrapper, Description, Title, PictureArea, Picture } from "./styles"
import InfoText from "@components/elements/texts/information"

const ItemFunctionalities = ({ title, description, src }) => {
  return (
      <Wrapper>
        <Title>
          <InfoText text={title}/>
        </Title>
        <Description>
          <InfoText text={description}/>
        </Description>
        <PictureArea>
          <Picture src={src} />
        </PictureArea>
      </Wrapper>
  )
}

export default ItemFunctionalities
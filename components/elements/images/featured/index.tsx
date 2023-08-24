import { Image, Wrapper } from "./styles";

const FeaturedImage = ({ image }) => {
    return (
        <Wrapper>
            <Image src={image.src} />
        </Wrapper>
    )
}

export default FeaturedImage
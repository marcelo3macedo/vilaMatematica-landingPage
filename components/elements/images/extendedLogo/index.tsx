import logo from "@assets/images/extended-logo.png";
import { Image, Wrapper } from "./styles";

const ExtendedLogo = () => {
    return (
        <Wrapper>
            <Image src={logo.src} />
        </Wrapper>
    )
}

export default ExtendedLogo
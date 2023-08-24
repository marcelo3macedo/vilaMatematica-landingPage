import { Button, Wrapper } from "./styles";

const PrimaryButton = ({ text }) => {
    return (
        <Wrapper>
            <Button>{text}</Button>
        </Wrapper>
    )
}

export default PrimaryButton
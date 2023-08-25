import { Button, Wrapper } from "./styles";

const PrimaryButton = ({ text, action }) => {
    return (
        <Wrapper onClick={action}>
            <Button>{text}</Button>
        </Wrapper>
    )
}

export default PrimaryButton
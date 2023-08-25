import { getTheme } from "helpers/ThemeHelper";
import { Content, Wrapper } from "./styles";
import { Themes } from "@interfaces/texts/PrimaryTextProps";

const InformationLink = ({ text, theme = Themes.Dark }) => {
    const color = getTheme(theme)
    return (
        <Wrapper>
            <Content color={color}>{text}</Content>
        </Wrapper>
    )
}

export default InformationLink
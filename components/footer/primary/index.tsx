import InfoText from "@components/elements/texts/information";
import { Actions, Content, Copyright, Link, Wrapper } from "./styles";
import { useTranslation } from "react-multi-lang";
import { Themes } from "@interfaces/texts/PrimaryTextProps";
import InformationLink from "@components/elements/links/information";

const PrimaryFooter = () => {
    const t = useTranslation()
    
    function navigateTo(href) {
        window.location.href = href
    }

    return (
        <Wrapper>
            <Content>
                <Actions>
                    <Link><InformationLink text={t('footer.action.about')} theme={Themes.Light} action={() => { navigateTo('/sobre') }} /></Link>
                    <Link><InformationLink text={t('footer.action.privacyPolicy')}  theme={Themes.Light} action={() => { navigateTo('/politicas-privacidade') }} /></Link>
                    <Link><InformationLink text={t('footer.action.termsOfUse')}  theme={Themes.Light} action={() => { navigateTo('/termos-de-uso') }} /></Link>
                    <Link><InformationLink text={t('footer.action.contact')}  theme={Themes.Light} action={() => { navigateTo('/contato') }} /></Link>
                </Actions>
                <Copyright>
                    <InfoText text={t('footer.copyright')} theme={Themes.Light} />
                </Copyright>
            </Content>
        </Wrapper>
    )
}

export default PrimaryFooter
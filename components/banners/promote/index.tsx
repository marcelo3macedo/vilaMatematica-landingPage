import { useTranslation } from "react-multi-lang"

import PrimaryButton from "@components/elements/buttons/primary"
import { Wrapper, Container } from "./styles"

const Promote = () => {
  const t = useTranslation()

  function goToApp() {
    window.location.href = process.env.NEXT_PUBLIC_APP_LINK
  }  

  return (
      <Wrapper>
        <Container>
          <PrimaryButton text={t('banners.promote.action')} action={goToApp} />
        </Container>
      </Wrapper>
  )
}

export default Promote
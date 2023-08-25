import { useTranslation } from "react-multi-lang"

import PrimaryButton from "@components/elements/buttons/primary"
import { Wrapper, Container } from "./styles"

const Promote = () => {
  const t = useTranslation()

  return (
      <Wrapper>
        <Container>
          <PrimaryButton text={t('banners.promote.action')} />
        </Container>
      </Wrapper>
  )
}

export default Promote
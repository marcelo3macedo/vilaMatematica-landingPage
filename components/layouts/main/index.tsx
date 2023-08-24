import { MainProps } from "@interfaces/layouts/main.interface"
import { Container, Wrapper } from "./styles"
  
const Layout = ({ children }: MainProps) => {
    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    )
}

export default Layout
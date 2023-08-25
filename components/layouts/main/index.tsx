import PrimaryFooter from "@components/footer/primary"
import { Container, Wrapper } from "./styles"
  
const Layout = ({ children }) => {
    return (
        <Wrapper>
            <Container>
                {children}
                <PrimaryFooter />
            </Container>
        </Wrapper>
    )
}

export default Layout
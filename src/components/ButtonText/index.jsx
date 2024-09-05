import { Container } from "./styles";

export function ButtonText({ title, icon: Icon }) {
    return(
        <Container type="text">
            {Icon && <Icon size={20} />}
            {title}
        </Container>
    )
}
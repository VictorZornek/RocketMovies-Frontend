import { Container } from "./styles.js";

export function Tag({ title, isPreview, ...rest }) {
    return(
        <Container $isPreview={isPreview} {...rest}>
            {title}
        </Container>
    )
}
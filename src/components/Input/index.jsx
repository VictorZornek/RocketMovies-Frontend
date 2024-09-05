import { Container } from './styles.js';

export function Input({ placeholder, icon: Icon, ...rest }) {
    return(
        <Container >
            {Icon && <Icon size={20} />}

            <input placeholder={placeholder} {...rest} />
        </Container>
    )
}
import { Container } from './styles.js';

export function Input({ placeholder, icon: Icon, disabled, ...rest }) {
    return(
        <Container >
            {Icon && <Icon size={20} />}

            <input placeholder={placeholder} disabled={disabled} {...rest} />
        </Container>
    )
}
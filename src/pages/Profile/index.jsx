import { FiArrowLeft, FiLock } from "react-icons/fi";
import { Container, Header, Form } from "./styles";

import { ButtonText } from '../../components/ButtonText';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    return(
        <Container>
            <Header>
                <ButtonText title='Voltar' icon={FiArrowLeft} />
            </Header>

            <Form>
                <Input placeholder='Senha atual' icon={FiLock} />
                <Input placeholder='Nova senha' icon={FiLock} />

                <Button title='Salvar' />
            </Form>

        </Container>
    )
}
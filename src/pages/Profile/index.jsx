import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi";
import { Container, Header, Form, Avatar } from "./styles";

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
                <Avatar>
                    <img src="https://github.com/VictorZornek.png" alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input id="avatar" type="file" />
                    </label>
                </Avatar>

                <div className='wrap-user-email'>
                    <Input value='Victor Zornek' icon={FiUser} disabled />
                    <Input value='vzornek@gmail.com' icon={FiMail} disabled />
                </div>

                <div className='wrap-password'>
                    <Input placeholder='Senha atual' icon={FiLock} />
                    <Input placeholder='Nova senha' icon={FiLock} />
                </div>


                <Button title='Salvar' />
            </Form>

        </Container>
    )
}
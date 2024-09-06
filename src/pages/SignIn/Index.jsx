import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir</p>

                <h2>Crie sua conta</h2>

                
                <Input type='text' placeholder='Nome' icon={FiUser} required />

                <Input type='email' placeholder='E-mail' icon={FiMail} required />

                <Input type='password' placeholder='Senha' icon={FiLock} required />

                <Button title='Cadastrar' />

                <ButtonText title='Voltar para o login' icon={FiArrowLeft}/>
            </Form>

            <Background />

        </Container>
    )
}
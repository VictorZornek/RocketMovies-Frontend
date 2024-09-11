import { Link } from "react-router-dom";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Container, Form, Background } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input type='text' placeholder='Nome' icon={FiUser} required />
                <Input type='email' placeholder='E-mail' icon={FiMail} required />
                <Input type='password' placeholder='Senha' icon={FiLock} required />

                <Button title='Cadastrar' />

                <Link to='/'>
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>

            <Background />

        </Container>
    )
}
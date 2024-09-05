import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { Container } from "./styles";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

export function SignIn() {
    return(
        <Container>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir</p>

            <h2>Crie sua conta</h2>

            
            <Input type='text' placeholder='Nome' icon={FiUser} required />

            <Input type='email' placeholder='E-mail' icon={FiMail} required />

            <Input type='password' placeholder='Senha' icon={FiLock} required />

            

        </Container>
    )
}
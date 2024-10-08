import { useState } from "react";
import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form, Background } from "./styles";

import { useAuth } from "../../hooks/auth";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password })
    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Faça seu login</h2>

                <Input 
                    type='email' 
                    placeholder='E-mail' 
                    icon={FiMail} 
                    required
                    onChange={e => setEmail(e.target.value)}
                />

                <Input 
                    type='password' 
                    placeholder='Senha' 
                    icon={FiLock} 
                    required 
                    onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title='Entrar' 
                    onClick={handleSignIn} 
                />

                <Link to='/register' >
                    Criar conta
                </Link>
            </Form>

            <Background />

        </Container>
    )
}
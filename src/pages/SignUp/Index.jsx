import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FiUser, FiMail, FiLock, FiArrowLeft } from "react-icons/fi";
import { Container, Form, Background } from "./styles";

import { api } from "../../services/api";

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    function handleSignUp() {

        if(!name || !email || !password) {
            return alert("Preencha todos os campos!")
        }

        api.post("/users", { name, email, password })
        .then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/")
        })
        .catch(error => {
            if(error.response) {
                alert(error.response.data.message);

            } else {
                alert("Não foi possível cadastrar");
            }
        })

    }

    return(
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>

                <h2>Crie sua conta</h2>

                <Input 
                    type='text' 
                    placeholder='Nome' 
                    icon={FiUser} 
                    required 
                    onChange={e => setName(e.target.value)}
                />

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
                    title='Cadastrar'
                    onClick={handleSignUp}
                />

                <Link to='/'>
                    <FiArrowLeft />
                    Voltar para o login
                </Link>
            </Form>

            <Background />

        </Container>
    )
}
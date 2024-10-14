import { useState } from "react";
import { FiArrowLeft, FiLock, FiUser, FiMail, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth"

import { Container, Header, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    const { user, updateProfile } = useAuth()

    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()

    async function handleUpdate() {
        const user = { 
            name,
            email,
            password: newPassword,
            old_password: oldPassword
        }

        await updateProfile({ user })
    }

    return(
        <Container>
            <Header>
                <Link to='/'>
                    <FiArrowLeft />
                    Voltar
                </Link>
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
                    <Input 
                        placeholder='Nome'
                        type='text'
                        value={name} 
                        icon={FiUser} 
                        onChange={e => setName(e.target.value)}               
                    />

                    <Input 
                        placeholder='E-mail'
                        type='email'
                        value={email} 
                        icon={FiMail} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className='wrap-password'>
                    <Input 
                        placeholder='Senha atual' 
                        type='password' 
                        icon={FiLock} 
                        onChange={e => setOldPassword(e.target.value)}
                    />

                    <Input 
                        placeholder='Nova senha' 
                        type='password' 
                        icon={FiLock} 
                        onChange={e => setNewPassword(e.target.value)}
                    />
                </div>


                <Button 
                    title='Salvar' 
                    onClick={handleUpdate}
                />
            </Form>

        </Container>
    )
}
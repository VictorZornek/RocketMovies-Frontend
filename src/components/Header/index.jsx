import { useNavigate } from "react-router-dom";
import { Container, Profile, Input } from "./styles";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

import { useAuth } from "../../hooks/auth";

export function Header() {
    const { user, signOut } = useAuth();

    const navigate = useNavigate()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    function handleSignOut(event) {
        event.preventDefault()
        navigate("/")
        signOut()
    }

    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input type="text" placeholder="Pesquisar pelo título"/>

            <Profile to='/profile'>
                <div>
                    <strong>{user.name}</strong>
                    <a onClick={handleSignOut} >sair</a>
                </div>

                <img src={avatarUrl} alt={user.name} />
            </Profile>
        </Container>
    )
}
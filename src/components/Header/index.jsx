import { Container, Profile, Input } from "./styles";

import { useAuth } from "../../hooks/auth";

export function Header() {
    const { signOut } = useAuth();

    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input type="text" placeholder="Pesquisar pelo título"/>

            <Profile to='/profile'>
                <div>
                    <strong>Victor Zornek</strong>
                    <a onClick={signOut} >sair</a>
                </div>

                <img src="https://github.com/VictorZornek.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}
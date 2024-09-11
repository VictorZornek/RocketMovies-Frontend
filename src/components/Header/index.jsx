import { Container, Profile, Input } from "./styles";

export function Header() {
    return(
        <Container>
            <h1>RocketMovies</h1>

            <Input type="text" placeholder="Pesquisar pelo título"/>

            <Profile to='/profile'>
                <div>
                    <strong>Victor Zornek</strong>
                    <a>sair</a>
                </div>

                <img src="https://github.com/VictorZornek.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}
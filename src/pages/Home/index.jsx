import { TfiPlus } from "react-icons/tfi";
import { Container } from './styles.js'

import { Header } from '../../components/Header/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { Tag } from "../../components/Tag/index.jsx";

export function Home() {
  return(
    <Container>
      <Header />

      <main>
        <div>
          <h1>Meus Filmes</h1>

          <Button title={
            <span>
              <TfiPlus /> Adicionar filme
            </span>
          } />
        </div>

      </main>
    </Container>
  )
}

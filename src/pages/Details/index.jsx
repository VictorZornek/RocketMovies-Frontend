import { TfiPlus } from "react-icons/tfi";
import { FiUser, FiLock } from 'react-icons/fi'
import { Container } from './styles.js'

import { Header } from '../../components/Header/index.jsx'
import { Button } from '../../components/Button/index.jsx'
import { ButtonText } from '../../components/ButtonText/index.jsx'

export function Details() {
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

        <ButtonText title='Voltar' icon={FiUser} />
      </main>
    </Container>
  )
}

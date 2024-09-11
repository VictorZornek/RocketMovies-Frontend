import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Form, Section, Button } from "./styles.js";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Markers } from "../../components/Markers"

export function NewMovie() {
    return(
        <Container>
            <Header />

            <Content>
                <Link to='/'>
                    <FiArrowLeft />
                    Voltar
                </Link>


                <Form >
                    <h1>Novo filme</h1>

                    <div>
                        <Input placeholder='Título' />
                        <Input placeholder='Sua nota (de 0 a 5)' />
                    </div>

                    <TextArea placeholder='Observações' />

                    <Section>
                        <span>Marcadores</span>

                        <Markers />
                    </Section>

                    <div>
                        <Button>Excluir filme</Button>
                        <Button $isSave>Salvar alterações</Button>
                    </div>

                </Form>
            </Content>
        </Container>
    )
}
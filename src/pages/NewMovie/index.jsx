import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Form, Section } from "./styles.js";

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Markers } from "../../components/Markers";

export function NewMovie() {
    return(
        <Container>
            <Header />

            <Content>
                <ButtonText title='Voltar' icon={FiArrowLeft} />


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
                </Form>
            </Content>
        </Container>
    )
}
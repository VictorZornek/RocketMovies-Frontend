import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Form, Section, Button } from "./styles.js";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Markers } from "../../components/Markers"

export function NewMovie() {
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link != deleted))
    }

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
                        
                        <div>
                            {
                                links.map((link, index) => (
                                    <Markers 
                                        key={String(index)}
                                        type='text'
                                        value={link}
                                        onClick={() => handleRemoveLink(link)}
                                    />
                                ))
                            }

                            <Markers 
                                type='text'
                                placeholder='Novo Marcador'
                                value={newLink}
                                isNew
                                onChange={e => setNewLink(e.target.value)}
                                onClick={handleAddLink}
                            />
                        </div>

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
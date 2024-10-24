import { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Form, Section, Button } from "./styles.js";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Markers } from "../../components/Markers"

export function NewMovie() {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState([])


    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag != deleted))
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
                                tags.map((tag, index) => (
                                    <Markers 
                                        key={String(index)}
                                        type='text'
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }

                            <Markers 
                                type='text'
                                placeholder='Novo Marcador'
                                value={newTag}
                                isNew
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
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
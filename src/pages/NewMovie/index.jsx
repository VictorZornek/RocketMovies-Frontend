import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import { Container, Content, Form, Section, Button } from "./styles.js";

import { api } from "../../services/api.js";

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea } from '../../components/TextArea'
import { Markers } from "../../components/Markers"

export function NewMovie() {
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState([])
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag != deleted))
    }

    async function handleNewMovieNote() {
        await api.post("/notes", {
            title: title,
            description: description,
            tags: tags
        })

        alert("Nova nota de filme criada com sucesso!")

        navigate("/")
    }

    function handleExcludeInfosNewMovieNote() {
        setTags([])
        setNewTag([])
        setTitle("")
        setDescription("")
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
                        <Input 
                            placeholder='Título' 
                            onChange={e => setTitle(e.target.value)} 
                        />

                        <Input placeholder='Sua nota (de 0 a 5)' />
                    </div>

                    <TextArea 
                        placeholder='Observações' 
                        onChange={e => setDescription(e.target.value)}
                    />

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
                        <Button onClick={handleExcludeInfosNewMovieNote}>
                            Excluir filme
                        </Button>

                        <Button $isSave onClick={handleNewMovieNote}>
                            Salvar alterações
                        </Button>
                    </div>

                </Form>
            </Content>
        </Container>
    )
}
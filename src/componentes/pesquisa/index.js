import styled from "styled-components"
import Input from '../input'
import { useState } from "react"
import {livros} from './dadosPesquisa'

const SectionContainer = styled.section`
    text-align: center;
    color: white;
    padding: 85px 0;
    height: 270px;
    width: 100%
`
const Titutlo = styled.h2`
    font-size: 36px;
    width: 100%;
`

const SubTitulo = styled.h3`
    margin-bottom: 40px;
    font-size: 16px;
    font-weight: 500px;
    width: 100%;
`

const ResultadoContainer = styled.div`
    display: flex;
    align-items: center;
    border: solid 1px white;
    margin-bottom: 2px;
    
    &:hover {
        border: solid 2px white;
        cursor: pointer;
    }
`

const NomeLivro = styled.p`
    margin-right: auto;
    width: 150px
`

const Img = styled.img`
    margin-left: auto;
    width: 100px;
`

function Pesquisa () {
    const [livrosPesquisado, setLivrosPesquisado] = useState ([])

    return (
        <SectionContainer>
            <Titutlo>Já sabe por onde começar?</Titutlo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input 
                placeholder="Escreva a sua próxima leitura"
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisado(resultadoPesquisa)
                }}
            />
            {livrosPesquisado.map(livro => (
                    <ResultadoContainer>
                        <Img src={livro.src}/>
                        <NomeLivro>{livro.nome}</NomeLivro>
                    </ResultadoContainer>
            ))}
        </SectionContainer>
    )
}

export default Pesquisa
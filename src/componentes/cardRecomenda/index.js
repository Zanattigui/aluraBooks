import styled from "styled-components"

const Card = styled.div`
    align-items: center;
    background-color: white;
    box-shadow: 1px 1px 5px gray;
    border-radius: 20px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
`

const subTitulo = styled.h4`
    
`

function CardRecomenda({titulo, subtitulo, descricao, img}) {
    return (
        <Card>
            <div>
                <h3>{titulo}</h3>
                <subTitulo>{subtitulo}</subTitulo>
                <p>{descricao}</p>
            </div>
            <div>
                <img src={img} />
                <button>Saiba mais</button>
            </div>
        </Card>
    )
}

export default CardRecomenda
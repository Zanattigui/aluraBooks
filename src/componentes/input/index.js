import styled from "styled-components";

const Input = styled.input`
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: gray;
        font-size: 15px;
    }
`

export default Input
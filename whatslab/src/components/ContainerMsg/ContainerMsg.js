import React from 'react';
import styled from 'styled-components';

const DadosInput = styled.div`
    display: flex;
    justify-content: start;
    border: 1px solid gray;
    margin: 3px;
    gap: 2px;
`
const InputNome = styled.input `
    width: 20%;
    border: 1px solid black;
`

const InputTexto = styled.input `
    width: 70%;
`

class ContainerMsg extends React.Component {
    render() {
        return (
            <DadosInput>
                <InputNome placeholder="Nome do Usuário"  />
                <InputTexto placeholder= "Digite uma mensagem..." />
                <button> Enviar </button>

            </DadosInput>
        )
    }
}

export default ContainerMsg;
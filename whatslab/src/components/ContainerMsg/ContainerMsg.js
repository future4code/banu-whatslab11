import React from 'react';
import styled from 'styled-components';


const DadosInput = styled.div`
    display: flex;
    justify-content: start;
    height: 4vh;
    margin: 3px;
    gap: 5px;
`
const InputNome = styled.input`
    width: 20%;
`

const InputTexto = styled.input`
    width: 70%;
`

const CorpoDoAplicativo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2px;
    height: 92.5vh;
    border: 1px solid gray;
    margin: 3px;
    background-image: linear-gradient(#b5ffb9, #fff);
`

const DivMensagem = styled.div`
    display: flex;
    align-items: center;
    margin: 5px;
    padding-left: 5px;
    border: 1px solid black;
    border-radius: 10px;
`;

const NomeUsuario = styled.p`
font-size: 15px;
font-weight: bold;
padding-right: 5px;
padding-bottom: 1px;
`;

const MensagemUsuario = styled.p`
font-size: small;
`;

const BotaoEnviar = styled.button`
    display: flex;
    align-items: center;
    padding: 0.5em 1em;
    text-decoration: none;
    color: #000;
    
    :hover {
        padding: 0.5em 1.15em;
        border-radius: 3px;
        border-style: none;
        background-color: green;
        color: #fff;
    }
`;

class ContainerMsg extends React.Component {

    state = {
        mensagens: [
            {
                nome: "Nome",
                mensagem: "Mensagem"
            }
        ],
        nome: "",
        mensagem: ""
    };

    alterarNome = (e) => {
        this.setState({ nome: e.target.value });

    };

    alterarMensagem = (e) => {
        this.setState({ mensagem: e.target.value });
    };

    onClickAdicionar = () => {
        this.setState({
            id: "", nome: "", mensagem: ""
        });
        const novasMensagens = [
            ...this.state.mensagens,
            { nome: this.state.nome, mensagem: this.state.mensagem }
        ]
        this.setState({ mensagens: novasMensagens })
    };

    render() {
        return (
            <div>
                <CorpoDoAplicativo>
                    {this.state.mensagens.map((item, index) => {
                        return (
                            <DivMensagem key={index} >
                                <NomeUsuario> {item.nome}: </NomeUsuario>
                                <MensagemUsuario className='nome'> {item.mensagem} </MensagemUsuario>
                            </DivMensagem>
                        )
                    })}
                </CorpoDoAplicativo>
                <DadosInput className="msg">
                    <InputNome value={this.state.nome} onChange={this.alterarNome}
                        placeholder="Nome do Usuário" />
                    <InputTexto value={this.state.mensagem} onChange={this.alterarMensagem}
                        placeholder="Digite uma mensagem..." />
                    <BotaoEnviar onClick={this.onClickAdicionar}> Enviar </BotaoEnviar>
                </DadosInput>
            </div>
        )
    }
}

export default ContainerMsg;
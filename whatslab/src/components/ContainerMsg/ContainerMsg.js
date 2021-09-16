import React from 'react';
import styled from 'styled-components';

const DadosInput = styled.div`
    display: flex;
    justify-content: start;
    border: 1px solid gray;
    margin: 3px;
    gap: 2px;
`
const InputNome = styled.input`
    width: 20%;
    border: 1px solid black;
`

const InputTexto = styled.input`
    width: 70%;
`

const CorpoDoAplicativo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2px;
    height: 93vh;
    border: 1px solid gray;
    margin: 3px;
    background-color: #F0FFF0;
`

const DivMensagem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 5px;
    padding-left: 5px;
    border: 1px solid black;
    border-radius: 10px;
`;

const NomeUsuario = styled.p`
font-weight: bold;
`;
class ContainerMsg extends React.Component {

    state = {
        mensagens: [
            {
                nome: "Hugo",
                mensagem: "Mensgame de texto"
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
                                <NomeUsuario> {item.nome} </NomeUsuario>
                                <p className='nome'> {item.mensagem} </p>
                            </DivMensagem>
                        )
                    })}
                </CorpoDoAplicativo>
                <DadosInput className="msg">
                    <InputNome value={this.state.nome} onChange={this.alterarNome}
                        placeholder="Nome do Usuário" />
                    <InputTexto value={this.state.mensagem} onChange={this.alterarMensagem}
                        placeholder="Digite uma mensagem..." />
                    <button onClick={this.onClickAdicionar}> Enviar </button>
                </DadosInput>


            </div>
        )
    }
}

export default ContainerMsg;
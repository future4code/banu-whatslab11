import React from 'react';
import styled from 'styled-components';
// import ContainerMain from './components/ContainerMain/ContainerMain'
// import ContainerMsg from './components/ContainerMsg/ContainerMsg'

const DivPai = styled.div`
  display: flex;
  justify-content: center;
`

const DivDosElementos = styled.div`
  max-width: 600px;
  height: 99vh;
  border: 1px solid black;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  
`

class App extends React.Component {

  state = {
    mensagens: [
      {
        nome: "",
        mensagem: ""
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
      <DivPai>
        <DivDosElementos>
          <div className="main">
            {this.state.mensagens.map((iten, index) => {
              return (
                <div key={index} >
                  <p className='nome'> {iten.nome} </p>
                  <p className='nome'> {iten.mensagem} </p>
                </div>
              )
            })}
          </div>
          <div className="msg">
            <div>
              <input value={this.state.nome} onChange={this.alterarNome}
                placeholder="Nome do Usuário" />
              <input value={this.state.mensagem} onChange={this.alterarMensagem}
                placeholder="Digite uma mensagem..." />
              <button onClick={this.onClickAdicionar}> Enviar </button>

            </div>
          </div>
        </DivDosElementos>
      </DivPai>
    );
  }
}

export default App;



{/* <DivDosElementos> */ }
{/* <ContainerMain className='app-whatslab' /> */ }
{/* {this.state.mensagens} */ }

{/* <ContainerMsg /> */ }
{/* </DivDosElementos> */ }

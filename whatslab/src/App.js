import styled from 'styled-components';
import ContainerPrincipal from './components/ContainerMain/ContainerMain'
import ContainerMsg from './components/ContainerMsg/ContainerMsg'

const DivPai = styled.div `
  display: flex;
  justify-content: center;
`

const DivDosElementos = styled.div `
  max-width: 600px;
  height: 99vh;
  border: 1px solid black;
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  
`

function App() {
  return (
    <DivPai>
      <DivDosElementos>
        <ContainerPrincipal className='app-whatslab' />
      
        <ContainerMsg 
          // nome = ""
          // mensagem = ""
        />      
      </DivDosElementos>
      
     </DivPai>

  );
}

export default App;

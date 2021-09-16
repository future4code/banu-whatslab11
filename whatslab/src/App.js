import React from 'react';
import styled from 'styled-components';
import ContainerMsg from './components/ContainerMsg/ContainerMsg'

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

  render() {
    return (
      <DivPai>
        <DivDosElementos>
          <ContainerMsg />
        </DivDosElementos>
      </DivPai>
    );
  }
}

export default App;
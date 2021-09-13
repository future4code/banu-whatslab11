import './App.css';
import ContainerMain from './components/ContainerMain/ContainerMain'
import ContainerMsg from './components/ContainerMsg/ContainerMsg'

function App() {
  return (
    <div className='container-app'>
      <ContainerMain className='app-whatslab' 
      
      />
      <ContainerMsg 
        nome = ""
        mensagem = ""
      />
    </div>

  );
}

export default App;

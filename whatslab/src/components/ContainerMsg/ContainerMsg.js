import React from 'react';

class ContainerMsg extends React.Component {
    render() {
        return (
            <div className="container-texto">
                <input className='nome-usuario' />
                <input className='mensagem-usuario' />
                <button> Enviar </button>

            </div>
        )
    }
}

export default ContainerMsg;
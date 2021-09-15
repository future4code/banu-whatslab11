import React from 'react'
import styled from 'styled-components';


const CorpoDoAplicativo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 2px;
    height: 93%;
    border: 1px solid gray;
    margin: 3px;
    background-color: #F0FFF0;
    
`


class ContainerPrincipal extends React.Component {
    render() {
        return (
            <CorpoDoAplicativo>
                
            </CorpoDoAplicativo>
        )
    }
}

export default ContainerPrincipal;

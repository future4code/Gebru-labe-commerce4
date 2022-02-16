import styled from 'styled-components'

export const Button = styled.button`
    width: ${props => props.width};
    height: ${props => props.height};

    background-color: ${props => props.bigCard ? '#3E00FF' : ''};
    color: ${props => props.bigCard ? '#fff' : ''};
    font-size: ${props => props.bigCard ? '10px' : ''};
    border-radius: ${props => props.bigCard ? '20px' : ''};

    border: 1px solid #000;
    cursor: pointer;
`
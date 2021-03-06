import React from 'react'
import * as Styled from './styled'

const Button = props => {
    return (
        <Styled.Button 
        onClick={props.onClick}
        width={props.width}
        height={props.height}
        bigCard={props.bigCard} >
            {props.name}
        </Styled.Button>
    )
}
 
export default Button
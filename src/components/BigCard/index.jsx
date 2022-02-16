import React from 'react'
import * as Styled from './styled'
import Button from '../Button'

const BigCard = props => {
    return (
        <Styled.BigCard>
            <Styled.Image src={props.productImg}/>
            <Styled.ProductName>{props.productName}</Styled.ProductName>
            <Styled.ProductPrice>R${props.productPrice}</Styled.ProductPrice>
            <Button
            width='90px'
            height='30px'
            name='Adicionar ao Carrinho'
            bigCard />
        </Styled.BigCard>
    )
}
 
export default BigCard
import React from 'react';
import Header from '../../components/Sections/Header';
import Footer from '../../components/Sections/Footer';
import * as Styled from '../../app/styled';
import { GlobalStyle } from '../../GlobalStyle';
import { TableCart, Value } from './style';


const Cart = () => {
  return (
    <>
     <Styled.Container>
        <GlobalStyle />
        <Header />
        <main>
            <TableCart>
                <tr>
                    <th>Produto</th>
                </tr>
                <tr>
                    <th>Qtd.</th>
                </tr>
                <tr>
                    <th>Preço</th>
                </tr>
                <tr>
                    <th><button>X</button></th>
                </tr>
            </TableCart>

            <Value>Valor Total:</Value>
        </main>
        <Footer />
      </Styled.Container>
    </>
  )
}

export default Cart; 

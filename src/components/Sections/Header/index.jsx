import React from 'react';
import Logo from '../../../img/LogoDevVoyager.png';
import Carrinho from '../../../img/shopping-cart.svg';
import { StyleGeneral, LogoStyle, LogoHeader, NavHome, ImgButton, Button } from './style';


 const Header = () => {
  return (
    <StyleGeneral>
      <LogoStyle>
        <LogoHeader src={Logo} alt="logo da Página" />
      </LogoStyle>
        
      <NavHome>Home</NavHome>
       
      <Button><ImgButton src={Carrinho} alt="Ícone Carrinho de Compras" /></Button>

    </StyleGeneral>
  )
}

export default Header;
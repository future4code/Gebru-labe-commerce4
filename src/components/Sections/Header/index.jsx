import React from 'react';
import Logo from '../../../img/LogoDevVoyager.png';
import Carrinho from '../../../img/shopping-cart.svg';
import { LogoHeader, LogoStyle, NavHome, StyleGeneral, Button } from './style';


 const Header = () => {
  return (
  <div>

    <StyleGeneral>
      <LogoStyle>
       <a rel='pagina-home' href='#'><LogoHeader src={Logo} alt="logo da Página" /></a>
      </LogoStyle>
        
       <NavHome rel='pagina-home' href='#'>Home</NavHome>
       
      <a rel='pagina-carrinho' href='#'><Button src={Carrinho} alt="Ícone Carrinho de Compras" /></a>

    </StyleGeneral>
  </div>
  )
}

export default Header;
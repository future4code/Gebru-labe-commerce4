import React from 'react';
import Logo from '../../../assets/img/LogoDevVoyager.png';
import ImagemCarrinho from '../../../assets/img/shopping-cart.svg';
import { LogoHeader, LogoStyle, NavHome, StyleGeneral, Button } from './style';
import { Link } from 'react-router-dom';



 const Header = () => {
  return (
  <div>

    <StyleGeneral>
      <LogoStyle>
       <Link to='/'><LogoHeader src={Logo} alt="logo da Página" /></Link>
      </LogoStyle>
        
       <Link to='/'><NavHome>Home</NavHome></Link>
       
       <Link to='/shoplist'><Button src={ImagemCarrinho} alt="Ícone Carrinho de Compras" /></Link>

    </StyleGeneral>
  </div>
  )
}

export default Header;
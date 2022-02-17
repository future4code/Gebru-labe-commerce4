import React from 'react';
import Header from '../../components/Sections/Header';
import Footer from '../../components/Sections/Footer';
import * as Styled from '../../app/styled';
import { GlobalStyle } from '../../GlobalStyle';
import Main from '../../components/Sections/Main'


 const Home = () => {
  return (
      <>
     <Styled.Container>
        <GlobalStyle />
        <Header />
        <Main />
        <Footer />
      </Styled.Container>
      </>
    
  )
}

export default Home;

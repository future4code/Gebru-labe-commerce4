import React from 'react';
import Header from '../components/Sections/Header';
import Main from '../components/Sections/Main'
import Footer from '../components/Sections/Footer';
import * as Styled from './styled';
import { GlobalStyle } from '../GlobalStyle';

function App() {
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

export default App;
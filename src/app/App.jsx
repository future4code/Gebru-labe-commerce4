import React from 'react';
import Header from '../components/Sections/Header';
import Main from '../components/Sections/Main'
import * as Styled from './styled'
import { GlobalStyle } from '../GlobalStyle'


function App() {
  return (
      <Styled.Container>
        <GlobalStyle />
        <Header />
        <Main />
      </Styled.Container>
  )
}

export default App;
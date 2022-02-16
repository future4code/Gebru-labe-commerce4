import React from 'react';
import Header from '../components/Sections/Header';
import * as Styled from './styled'
import { GlobalStyle } from '../GlobalStyle'


function App() {
  return (
      <Styled.Container>
        <GlobalStyle />
        <Header />
      </Styled.Container>
  )
}

export default App;
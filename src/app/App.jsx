import React from 'react';
import Home from '../pages/home';
import Cart from '../pages/cart';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/shoplist" element={<Cart/>} />
    </Routes>
    </>
  )
}

export default App;
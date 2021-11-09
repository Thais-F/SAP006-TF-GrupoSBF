import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Search from './pages/search/Search';
import Cart from './pages/cart/Cart';
import NotFound from './pages/notFound/NotFound';
import Header from './components/header/Header';
import { Footer } from './components/footer/Footer';
import EmptyCart from './components/emptyCart/EmptyCart';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/busca" element={<Search/>}/>
        <Route path="/carrinho" element={<Cart/>}/>
        <Route path="/vazio" element={<EmptyCart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;

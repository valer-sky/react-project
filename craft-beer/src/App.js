import React from 'react';
import { Routes, Route } from "react-router-dom";

import { Provider } from 'react-redux';

import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Order from './pages/Order';



function App() {
  
  

 return (
    <div className="wrapper">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
        </div>
      
    </div>
    
  );
}

export default App;

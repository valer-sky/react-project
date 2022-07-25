import { Routes, Route } from "react-router-dom";
import './scss/app.scss';

import Home from './pages/Home';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';
import Order from './pages/Order';
import FullBeer from './pages/FullBeer';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
        <Route path="" element={<Home />}/>
        <Route path="beer/:id" element={<FullBeer/>}/>
        <Route path="cart" element={<Cart/>}/>
        <Route path="order" element={<Order/>}/>
        <Route path="*" element={<NotFound />}/>
      </Route>
    </Routes>
  );
}

export default App;
import { Header } from './components/header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Products from './components/pages/products';
import About from './components/pages/about';
import User from './components/pages/user';
import Cart from './components/pages/cart';
import Registr from './components/pages/reg';
import Auth from './components/pages/auth';

function App() {

  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/account" element={<User />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/registr" element={<Registr />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

import { Header } from './components/header'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Products from './components/pages/products';
import About from './components/pages/about';

function App() {

  return (

      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import ProductDetails from './pages/productsdetails';
import Cart from './pages/cart';
import Login from './pages/login';
import Signup from './pages/signup';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

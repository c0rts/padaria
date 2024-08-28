import React from 'react';
import { Link } from 'react-router-dom';
import '.header.css';

function Header() {
  return (
    <header>
      <h1>Padaria do Pão Quente</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Produtos</Link>
        <Link to="/cart">Carrinho</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign-up</Link>
      </nav>
    </header>
  );
}

export default Header;

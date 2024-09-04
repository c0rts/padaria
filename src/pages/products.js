import React from 'react';
import { Link } from 'react-router-dom';
import './../styles/products.css';

function Products() {
  // Aqui você poderia buscar uma lista de produtos de uma API ou base de dados
  const products = [
  { id: 1, name: "Pão francês", price: 2.50},
  { id: 2, name: "Pão de forma", price: 5.00 },
  { id: 3, name: "Croissant", price: 3.00 },
  { id: 4, name: "Pão integral", price: 5.50 },
  { id: 5, name: "Baguete", price: 3.50 },
  { id: 6, name: "Pão de queijo", price: 4.00 },
  { id: 7, name: "Bolo de chocolate", price: 8.00 },
  { id: 8, name: "Bolo de cenoura com cobertura de chocolate", price: 8.50 },
  { id: 9, name: "Pão doce", price: 2.75 },
  { id: 10, name: "Bolo de laranja", price: 7.50 },
  { id: 11, name: "Pão de milho", price: 3.75 },
  { id: 12, name: "Rosquinhas caseiras", price: 3.25 },
  { id: 13, name: "Pão australiano", price: 4.50 },
  { id: 14, name: "Bolo de maçã e canela", price: 8.00 },
  { id: 15, name: "Pão de brioche", price: 4.00 }
  ];

  return (
    <div className='products-container'>
      <h2>Produtos</h2>
      <ul className='products-list'>
        {products.map(product => (
          <li key={product.id} className='product-item'>
            <Link to={`/product/${product.id}`}> <img src={products.foto}/>{product.name}</Link> - R$ {product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

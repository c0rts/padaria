import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
  // Aqui você poderia buscar uma lista de produtos de uma API ou base de dados
  const products = [
    { id: 1, name: 'Pão Francês', price: 1.50 },
    { id: 2, name: 'Croissant', price: 3.00 },
    { id: 3, name: 'Bolo de Chocolate', price: 25.00 },
  ];

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link> - R$ {product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;

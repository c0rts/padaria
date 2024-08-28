// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../pages/cartcontext'; // Certifique-se de que o caminho está correto

// Lista de produtos - você pode eventualmente mover essa lista para um arquivo separado ou buscar de uma API.
const productList = [
    { id: 1, name: 'Pão Francês', description: 'Um pão fresquinho e crocante.', price: 1.50 },
    { id: 2, name: 'Croissant', description: 'Delicioso croissant amanteigado.', price: 3.00 },
    { id: 3, name: 'Bolo de Chocolate', description: 'Bolo rico em chocolate para adoçar o seu dia.', price: 25.00 },
];

function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart(); // Obtém a função de adicionar ao carrinho do contexto

    // Converte o `id` da URL para número e busca o produto na lista
    const product = productList.find((prod) => prod.id === parseInt(id, 10));

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} foi adicionado ao carrinho!`);
    };

    if (!product) {
        return <p>Produto não encontrado.</p>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Preço: R$ {product.price.toFixed(2)}</p>
            <button onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </div>
    );
}

export default ProductDetails;
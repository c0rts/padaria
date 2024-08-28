// src/pages/ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from './cartcontext'; // Ajuste o caminho conforme necessário

function ProductDetails() {
    const { id } = useParams();
    // Em um projeto real, você faria uma busca pela API para obter os detalhes do produto
    const product = { id, name: 'Pão Francês', description: 'Um pão fresquinho e crocante.', price: 1.50 };
    const { addToCart } = useCart(); // Obtém a função de adicionar ao carrinho do contexto

    const handleAddToCart = () => {
        addToCart(product);
        alert(`${product.name} foi adicionado ao carrinho!`);
    };

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

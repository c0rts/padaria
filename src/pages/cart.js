// src/pages/Cart.js
import React from 'react';
import { useCart } from './cartcontext'; // Ajuste o caminho conforme necessário

function Cart() {
    const { cart, clearCart } = useCart(); // Inclui a função clearCart do contexto

    if (cart.length === 0) {
        return <p>Seu carrinho está vazio.</p>;
    }

    return (
        <div>
            <h2>Carrinho</h2>
            <ul>
                {cart.map((product, index) => (
                    <li key={index}>
                        {product.name} - R$ {product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <button onClick={clearCart}>Limpar Carrinho</button> {/* Botão para limpar o carrinho */}
        </div>
    );
}

export default Cart;

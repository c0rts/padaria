// src/pages/Cart.js
import React from 'react';
import { useCart } from './cartcontext';
import './../styles/cart.css';

function Cart() {
    const { cart, clearCart } = useCart();

    if (cart.length === 0) {
        return <p className='sem-carro'>Seu carrinho está vazio.</p>;
    }

    return (
        <div className='carrinho'>
            <h2 className='nome-carrinho'>Carrinho</h2>
            <ul className='lista-produto'>
                {cart.map((product, index) => (
                    <li key={index}>
                        {product.name} - R$ {product.price.toFixed(2)}
                    </li>
                ))}
            </ul>
            <button onClick={clearCart} id='carro-butao'>Limpar Carrinho</button> {/* Botão para limpar o carrinho */}
        </div>
    );
}

export default Cart;

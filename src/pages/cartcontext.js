// src/pages/cartcontext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

// Criação do contexto
const CartContext = createContext();

// Hook para acessar o contexto
export const useCart = () => useContext(CartContext);

// Provedor do contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Recupera o estado do carrinho do Local Storage quando o componente é montado
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        // Salva o estado do carrinho no Local Storage sempre que ele for atualizado
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const clearCart = () => {
        setCart([]);  // Redefine o carrinho como um array vazio
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

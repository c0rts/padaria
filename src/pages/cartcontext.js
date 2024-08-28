// src/CartContext.js
import React, { createContext, useState, useContext } from 'react';

// Criação do contexto
const CartContext = createContext();

// Hook para acessar o contexto
export const useCart = () => useContext(CartContext);

// Provedor do contexto
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};
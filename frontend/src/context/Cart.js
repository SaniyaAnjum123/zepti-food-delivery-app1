// src/context/Cart.js
import React from 'react';
import './Cart.css';
import { useCart } from './CartContext'; // Ensure the file is named CartContext.js

export default function Cart() {
    const { cart } = useCart();

    if (!Array.isArray(cart)) return null;

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="cart-container">
            <h3 className="cart-title">Add to Cart</h3>
            {cart.length > 0 ? (
                <div className="cart-content">
                    <ul className="cart-list">
                        {cart.map((item) => (
                            <li key={item.id} className="cart-item">
                                <span className="item-name">{item.name}</span>
                                <span className="item-quantity">x{item.quantity}</span>
                                <span className="item-price">₹{item.price * item.quantity}</span>
                            </li>
                        ))}
                    </ul>
                    <h4 className="cart-total">Total: ₹{total}</h4>
                </div>
            ) : (
                <p className="empty-cart-message">Your cart is empty.</p>
            )}
        </div>
    );
}

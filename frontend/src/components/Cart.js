import React from 'react';

export default function Cart({ cart = [] }) {
    if (!Array.isArray(cart)) {
        console.error("Expected cart to be an array, but got:", cart);
        return 
    }

    // Calculate total cost
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div className="mt-4">
            <h3>Shopping Cart</h3>
            {cart.length > 0 ? (
                <div>
                    <ul className="list-group">
                        {cart.map((item) => (
                            <li
                                key={item.id}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                {item.name} (x{item.quantity}) - ₹{item.price * item.quantity}
                            </li>
                        ))}
                    </ul>
                    <h4 className="mt-3">Total: ₹{total}</h4>
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

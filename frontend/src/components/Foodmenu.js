// src/components/FoodMenu.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';


const foodItems = [
    { id: 1, name: "Chicken Tikka Biryani", description: "Spreading happiness, one biryani plate at a time.", image: "/jk.jpg", price: 250 },
    { id: 2, name: "Cheese Burst Pizza", description: "Loaded with extra cheese and toppings.", image: "/pizza.jpg", price: 350 },
    { id: 3, name: "Spicy Chicken Burger", description: "Crispy chicken patty with spicy sauce.", image: "/burger.jpeg", price: 180 },
    { id: 4, name: "Pasta Alfredo", description: "Red tomato sauce pasta with mushrooms.", image: "/pasta.jpg", price: 220 },
    { id: 5, name: "Grilled Sandwich", description: "Crunchy bread with a delicious stuffing.", image: "/sandwich.jpg", price: 150 }
];

export default function FoodMenu() {
    const [quantities, setQuantities] = useState({});

    const handleQuantityChange = (id, value) => {
        setQuantities(prev => ({ ...prev, [id]: value }));
    };

    const handleAddToCart = (food) => {
        const quantity = quantities[food.id] || 1; // Default quantity is 1
        alert(`${food.name} added to cart with quantity ${quantity}!`);
    };

    return (
        <div className="container mt-5">
            <h6 className="text-center mb-4"></h6>
            <div className="row justify-content-center">
                {foodItems.map((food) => {
                    const quantity = quantities[food.id] || 1;
                    return (
                        <div key={food.id} className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center">
                            <div className="card shadow-lg" style={{ width: "18rem" }}>
                                <img className="card-img-top" src={food.image} alt={food.name} style={{ height: "150px", objectFit: "cover" }} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{food.name}</h5>
                                    <p className="card-text">{food.description}</p>
                                    <div className='d-flex justify-content-around align-items-center'>
                                        <select
                                            className='form-select w-50'
                                            value={quantity}
                                            onChange={(e) => handleQuantityChange(food.id, parseInt(e.target.value))}
                                        >
                                            {Array.from({ length: 6 }, (_, i) => (
                                                <option key={i + 1} value={i + 1}>{i + 1}</option>
                                            ))}
                                        </select>
                                        <span className="fw-bold">₹{food.price * quantity}</span>
                                    </div>
                                    <button className="btn btn-success mt-2 w-100" onClick={() => handleAddToCart(food)}>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
           
            </div>



            <div><Cart cart={Cart} /></div>
           


        </div>
    );
}

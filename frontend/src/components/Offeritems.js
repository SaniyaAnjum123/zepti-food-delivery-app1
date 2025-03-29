import React from 'react';

const offerItems = [
    { id: 1, name: "Spicy Chicken Biryani", price: 199, image: "/jk.jpg", offer: "20% OFF" },
    { id: 2, name: "Cheese Burst Pizza", price: 299, image: "/pizza.jpg", offer: "Buy 1 Get 1" },
    { id: 3, name: "Burger", price: 69, image: "/burger.jpeg", offer: "Flat ₹50 OFF" },
    { id: 4, name: "Cake", price: 99, image: "/cake.jpg", offer: "Flat ₹50 OFF" },
    { id: 5, name: "Cooldrink", price: 49, image: "/cv.jpeg", offer: "Flat ₹50 OFF" }
];

export default function OfferItems() {
    return (
        <div style={{ padding: "20px", backgroundColor: "#f8f9fa" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>🔥 Special Offers 🔥</h2>
            <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
                {offerItems.map(item => (
                    <div key={item.id} style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "10px", width: "200px", textAlign: "center", backgroundColor: "#fff", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
                        <img src={item.image} alt={item.name} style={{ width: "100%", height: "120px", objectFit: "cover", borderRadius: "10px" }} />
                        <h4 style={{ margin: "10px 0" }}>{item.name}</h4>
                        <p style={{ color: "green", fontWeight: "bold" }}>₹{item.price}</p>
                        <p style={{ color: "red", fontSize: "14px" }}>{item.offer}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

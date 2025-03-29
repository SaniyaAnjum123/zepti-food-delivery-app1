import React from 'react';

const categories = [
    { id: 1, name: "All", image: "/all.jpg" },
    { id: 2, name: "Biryani", image: "/jk.jpg" },
    { id: 3, name: "Pizza", image: "/pizza.jpg" },
    { id: 4, name: "Burgers", image: "/burger.jpeg" },
    { id: 5, name: "Pasta", image: "/pasta.jpg" },
    { id: 6, name: "Cake", image: "/cake.jpg" },
    { id: 7, name: "Chai", image: "/chai.jpg" },
    { id: 7, name: "Noodles", image: "/no.jpg" },
    { id: 7, name: "Dosa", image: "/dosa.jpg" },
    { id: 7, name: "Cooldrinks", image: "/cv.jpeg" },
    { id: 8, name: "Sandwiches", image: "/sandwich.jpg" }
];

export default function FoodCategories() {
    return (
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", padding: "20px", gap: "20px" }}>
            {categories.map((category) => (
                <div key={category.id} style={{ textAlign: "center" }}>
                    <img
                        src={category.image}
                        alt={category.name}
                        style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                            borderRadius: "50%",
                            border: "2px solid #ddd",
                        }}
                    />
                    <h5 style={{ marginTop: "8px", fontSize: "14px" }}>{category.name}</h5>
                </div>
            ))}
        </div>
    );
}

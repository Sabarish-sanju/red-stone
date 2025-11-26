import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "../App.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";

export default function Home() {
  const navigate = useNavigate();

  const collection = [
    {
      product: "Diamond Ring",
      image: image1,
      price: "₹3,200",
    },
    {
      product: "Moonstone Ring",
      image: image2,
      price: "₹2,100",
    },
    {
      product: "Hoop Bracelet",
      image: image3,
      price: "₹2,49",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="container">
        <section className="hero">
          <div className="overlay"></div>
          <div className="hero-content">
            <h1 className="title">Elegance in Every Detail</h1>
            <p className="subtitle">
              Discover handcrafted jewellery designed to shine with you.
            </p>
            <button onClick={() => navigate("/products")} className="cta">
              Shop Now
            </button>
          </div>
        </section>

        <section className="featured">
          <h2>Featured Collection</h2>
          <div className="grid">
            {collection.map((value, index) => (
              <div className="card" key={index}>
                <img src={value.image} alt={value.product} />
                <p>{value.product}</p>
                <span>price:{value.price}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="about">
          <h2>Handcrafted with Love</h2>
          <p>
            Our artisans use the finest materials to create timeless pieces that
            last a lifetime. Every piece is crafted to perfection.
          </p>
        </section>

        <footer className="footer">
          <p>© 2025 RedStone Jewellers. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

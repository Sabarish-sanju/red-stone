import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import "../App.css";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import ElectricBorder from "../components/ElectricBorder";
export default function Home() {
  const navigate = useNavigate();

  const collection = [
    { product: "Diamond Ring", image: image1, price: "₹3,200" },
    { product: "Moonstone Ring", image: image2, price: "₹2,100" },
    { product: "Hoop Bracelet", image: image3, price: "₹2,499" },
  ];

  const testimonials = [
    {
      quote:
        "Absolutely stunning jewellery! The quality exceeded my expectations.",
      name: "Ananya S.",
    },
    {
      quote:
        "Perfect gift for my anniversary. Elegant and beautifully crafted.",
      name: "Rohit K.",
    },
  ];

  return (
    <>
      <Navbar />

      <div className="container">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="overlay"></div>
          <div className="hero-content">
            <h1 className="title">Elegance Crafted to Perfection</h1>
            <p className="subtitle">
              Discover fine jewellery handcrafted by artisans using ethically
              sourced materials.
            </p>
            <button onClick={() => navigate("/products")} className="cta">
              Explore Collection
            </button>
          </div>
        </section>

        {/* TRUST HIGHLIGHTS */}
        <section className="highlights">
          <div className="highlight-box">
            <div>
              <h3>Certified Jewellery</h3>
              <p>100% authentic & hallmarked pieces</p>
            </div>
          </div>
          <div className="highlight-box">
            <h3>Free Shipping</h3>
            <p>On all orders above ₹1,999</p>
          </div>
          <div className="highlight-box">
            <h3>Easy Returns</h3>
            <p>7-day hassle-free returns</p>
          </div>
          <div className="highlight-box">
            <h3>24/7 Support</h3>
            <p>We’re here to help anytime</p>
          </div>
        </section>

        {/* FEATURED COLLECTION */}
        <section className="featured">
          <h2>Featured Collection</h2>
          <p className="section-subtitle">
            Handpicked designs loved by our customers
          </p>
          <div className="grid">
            {collection.map((item, index) => (
              <div
                className="card prd_card"
                key={index}
                onClick={() => navigate("/products")}
              >
                <img src={item.image} alt={item.product} />
                <p className="product-name">{item.product}</p>
                <span className="price">{item.price}</span>
              </div>
            ))}
          </div>
        </section>

       
        <section className="about">
          <div className="content">
            <h2>Handcrafted with Love</h2>
            <p>
              At RedStone Jewellers, every piece tells a story. Our skilled
              artisans blend traditional craftsmanship with modern design to
              create jewellery that lasts a lifetime.
            </p>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="testimonials">
          <h2>What Our Customers Say</h2>
          <div className="grid">
            {testimonials.map((test, index) => (
              <div className="testimonial-card" key={index}>
                <p>“{test.quote}”</p>
                <span>— {test.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* NEWSLETTER */}
        <section className="newsletter">
          <h2>Join Our Inner Circle</h2>
          <p>
            Be the first to know about new launches, exclusive offers, and style
            tips.
          </p>
          <button className="cta">Subscribe Now</button>
        </section>

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2025 RedStone Jewellers. All rights reserved.</p>
          <p>Privacy Policy • Terms & Conditions • Contact Us</p>
        </footer>
      </div>
    </>
  );
}

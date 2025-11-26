import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import productsData from "./product.json";
import "./Product.css";
import image1 from "../assets/image1.jpg";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const categories = [
    "All",
    ...Array.from(new Set(productsData.products.map((p) => p.category))),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? productsData.products
      : productsData.products.filter((p) => p.category === selectedCategory);

  const ProductCard = ({ product }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={index < Math.round(product.rating) ? "star filled" : "star"}
      >
        ★
      </span>
    ));

    return (
      <div
        className="product-card"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        {product.rating >= 4.8 && (
          <div className="top-rated-badge">Top Rated</div>
        )}
        <img
          src={product.images[0] || image1}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = image1;
          }}
        />
        <div className="product-info">
          <h3>{product.name}</h3>
          <p>${product.price.toFixed(2)}</p>
          <div className="product-rating">{stars}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="product-page">
        <aside className="sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map((category) => (
              <li
                key={category}
                className={category === selectedCategory ? "active" : ""}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

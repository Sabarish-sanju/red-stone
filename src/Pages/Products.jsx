import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Pages/Navbar";
import productsData from "../components/product.json";
import "../Css/Product.css";
import image1 from "../assets/image1.jpg";
import { CiFilter } from "react-icons/ci";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sidebarOpen, setSidebarOpen] = useState(false);
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
          src={product.images?.[0] || image1}
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = image1;
          }}
        />

        <div className="product-info">
          <h4>{product.name}</h4>

          <div className="product-rating">{stars}</div>

          <div className="product-price">${product.price.toFixed(2)}</div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />

     
      <button className="burger-btn" onClick={() => setSidebarOpen(true)}>
        <CiFilter />
      </button>

      <div className="product-page">
        
        <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setSidebarOpen(false)}>
            ✕
          </button>

          <h3>Categories</h3>

          <ul className="category-list">
            {categories.map((category) => (
              <li
                key={category}
                className={category === selectedCategory ? "active" : ""}
                onClick={() => {
                  setSelectedCategory(category);
                  setSidebarOpen(false);
                }}
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

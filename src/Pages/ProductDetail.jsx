import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import productsData from "../components/product.json";
import Navbar from "./Navbar";
import { ProductContext } from "../Context/ProductContext";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import "../Css/ProductDetail.css";
import { toast } from "react-toastify";

export default function ProductDetail() {
  const { productId } = useParams();
  const { addToCart } = useContext(ProductContext);
  const [product, setProduct] = useState(null);

  const defaultImages = [image1, image2, image3];

  const [mainImage, setMainImage] = useState(image1);

  useEffect(() => {
    const found = productsData.products.find(
      (p) => p.id.toString() === productId
    );
    if (found) {
      setProduct(found);
      const images =
        found.images && found.images.length ? found.images : defaultImages;
      setMainImage(images[0]);
    }
  }, [productId]);

  if (!product) {
    return <p>Product not found. Please check the URL.</p>;
  }

  const images =
    product.images && product.images.length ? product.images : defaultImages;

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < Math.round(product.rating) ? "star filled" : "star"}
    >
      ★
    </span>
  ));

  return (
    <>
      <Navbar />
      <div className="product-detail-page">
        <div className="product-detail-left">
          <div className="product-detail-image">
            <img
              src={mainImage}
              alt={product.name}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = image1;
              }}
            />
          </div>

          <div className="product-detail-thumbnails">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.name}-${idx}`}
                className={
                  img === mainImage ? "thumbnail selected" : "thumbnail"
                }
                onClick={() => setMainImage(img)}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = image1;
                }}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-info">
          <h2>{product.name}</h2>
          <p className="price">${product.price.toFixed(2)}</p>
          <div className="rating">{stars}</div>
          <p>{product.description}</p>

          <button
            className="add-to-cart-btn"
            onClick={() => {
              addToCart(product);
              toast.success("Product added to cart!", {
                autoClose: 1500,
                hideProgressBar: true,
              });
            }}
          >
            Add to Cart
          </button>

          <h4>Reviews:</h4>

          <ul className="reviews-list">
            {product.reviews.map((review, idx) => (
              <li key={idx} className="review-card">
                <div className="rev">
                  <div className="user-name">{review.user}</div>
                  <div className="review-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <span
                        key={index}
                        className={
                          index < Math.round(review.stars)
                            ? "star filled"
                            : "star"
                        }
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <div className="comment">{review.comment}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

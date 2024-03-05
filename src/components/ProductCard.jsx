import React, { useState } from 'react';

export default function ProductCard({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);
  const [productCount, setProductCount] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === product.imageUrls.length - 1 ? 0 : prevIndex + 1 
    );
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? product.imageUrls.length - 1 : prevIndex - 1
    );
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddToCartClick = () => {
    setProductCount(productCount + 1);
    alert(`You have ${productCount + 1} added to your cart`); 
  };

  return (
    <>
      <div id="image-carousel">
        <img
          src={product.imageUrls[currentImageIndex]}
          alt={product.name}
        />
        <button onClick={handlePreviousImage}>Previous</button>
        <button onClick={handleNextImage}>Next</button>
      </div>

      <h3>{product.name}</h3>
      {showDescription && <p>{product.description}</p>}
      <button onClick={handleToggleDescription}>
        {showDescription ? "Hide Description" : "Show Description"}
      </button>

      <div className="price">${product.price}</div>
      <button onClick={handleAddToCartClick}>Add to Cart</button>
      {!product.isInStock && "The product is out of stock"}
    </>
  );
}

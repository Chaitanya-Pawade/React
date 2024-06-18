import React, { useState, useEffect } from "react";

export function Product() {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: " ",
    rating: { rate: 0, count: 0, reviews: 0 },
    feature: [],
  });

  useEffect(() => {
    fetch("product.json")
      .then((response) => response.json())
      .then((product) => {
        setProduct(product);
      });
  });

  return (
    <>
      <div>
        <img src={product.image} width="30%" height="30%" />
      </div>
      <div>
        <h3>{product.title}</h3>
        <span>{product.rating.rate}</span>
        <br></br>
        <span>{product.rating.count}</span>
        <br></br>
        <span>{product.price}</span>
      </div>
      <div>
        <h3>Featurs</h3>
        
        {product.feature.map((feature) => (
          <li>{feature}</li>
        ))}
      </div>
    </>
  );
}
 
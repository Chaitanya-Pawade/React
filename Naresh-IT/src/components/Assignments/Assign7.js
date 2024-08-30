//! Fetch data from axios and dispaly on screen

import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Assign7() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      return error.message;
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>Fetching data from axios</h2>
      <ul>
        {products.map((product, ind) => {
          return (
            <li key={ind}>
              {product.id} - {product.title}
            </li>
          );
        })}
      </ul>
    </>
  );
}

import React from "react";
import { ProductsData } from "../Lists/ProductsData";
import ProductsProps  from "../Lists/ProductsProps";

export default function DisplayProducts() {
  console.log(ProductsData);
  return (
    <div className="card">
     
      <h2 className="text-capitalize">Display Products Data</h2>
      <div className="row">
        {ProductsData.map((product, ind) => {
          return <ProductsProps prod = {product} key = {ind} />
        })}
      </div>
    </div>
  );
}

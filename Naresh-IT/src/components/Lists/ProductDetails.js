import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();

  const [prodInfo, setProdInfo] = useState({});

  const fetchData = async() => {

    let prodInfo = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setProdInfo(prodInfo.data);
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  return (
    <>
      <p>this is the product details for product -{id}</p>
      <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
      <div className="card">
        <img
          style={{ height: "200px" }}
          src={prodInfo.image}
          className="card-img-top"
          alt="..."
        
        />
        
        <div className="card-body text-center">
        <div className="card-body">
          <h5 className="card-title">{prodInfo?.category}</h5>

          <p className="card-text">{prodInfo?.title}</p>

          <p className="card-text">{prodInfo?.price}</p>

          <p className="card-text">{prodInfo?.rating?.rate}</p>
          
        </div>
      </div>
      </div>
      </div>
    </>
  );
}

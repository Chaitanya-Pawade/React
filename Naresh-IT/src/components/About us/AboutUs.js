import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate();

  const goToProducts = () => {
    console.log("Do somehing...");
    navigate("/displayproducts");
  };

  return (
    <>
      <h2>This is About us component</h2>
      <a href="/displayproducts">Go to products</a>
      <br></br><br/>
      <button>
        <Link to="/displayproducts">Go to products</Link>
      </button>
      <br></br><br></br>
      <button onClick={goToProducts}>Go to products</button>
      <br/><br/>
      <button onClick={() => navigate(-1)}>Go to back</button>
      
    </>
  );
}

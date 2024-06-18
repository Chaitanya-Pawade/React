import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export default function ProductDetail() {
  const [searchParams] = useSearchParams();
  const [params, setParams] = useState({});

  useEffect(() => {
    let allParams = Object.fromEntries([...searchParams]);
    setParams(allParams);
  }, [searchParams]);

  return (
    <>
      <h3>This is query param example</h3>
      <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
        <div className="card">
          <img
            src={params.image}
            className="card-img-top"
            style={{ height: "300px" }}
            alt="...."
          />
          <div className="card-body text-center">
            <div className="card-body">
              <h5 className="card-title">{params.title}</h5>

              <p className="card-text">{params.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

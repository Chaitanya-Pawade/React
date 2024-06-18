import React from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";


export default function ProductsProps(props){


let {image,title,price,rating,id} = props.prod;   // props de-structuring

const navigate = useNavigate();
const navigateHandler = (title,price,image) => {
  navigate({
    pathname:"/productdetail",
    search : `?${createSearchParams({title,price,image})}`,
  });
}
    return (
        <div className="col-sm-3">
          <div className="card">
            <img
              style={{ height: "200px" }}
              // src={props.prod.image}
              src={image}
              className="card-img-top"
              alt="..."
              key={props.prod.id}
            />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              {/* <p className="card-text">{props.prod.title}</p> */}
              <p className="card-text">{title}</p>
              {/* <p className="card-text">{props.prod.price}</p>
               */}
                 <p className="card-text">{price}</p>
              {/* <p className="card-text">{props.prod.rating.rate}</p> */}
              <p className="card-text">{rating.rate}</p>
              <button style={{color:"black"}}>
                <Link to={`/productdetails/${id}`} >View</Link>
              </button>
              <button onClick={() => navigateHandler(title,price,image)}>View-2</button>
            </div>
          </div>
        </div>
      );
}
import React from "react";
import { Link } from "react-router-dom";
import Rating from "react-rating";

export default function Product({ product }) {
  return (
    <div className="col-md-3 m-3 card p-2 text">
      <div>
        <Link to={`product/${product.id}`}>
          <img src={product.image} className="img-fluid" />
          <h1>{product.name}</h1>

          {/* <h1> rating : {product.rating}</h1> */}

          {/* <Rating
          initialRating={product.rating}
          emptySymbol="fa fa-star-o fa-2x"   
          fullSymbol="fa fa-star fa-2x"
          readonly={true}
        /> */}
          <Rating
            style={{ color: "orange" }}
            initialRating={product.rating}
            emptySymbol="fa fa-thumbs-down fa-1x"
            fullSymbol="fa fa-thumbs-up fa-1x"
            readonly={true}
          />

          <h1> price : {product.price}</h1>
        </Link>
      </div>
    </div>
  );
}

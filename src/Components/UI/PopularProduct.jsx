import React from "react";
import ProductCard from "./ProductCard";

const PopularProduct = () => {
  return (
    <div className="row">
      {/* <div className="col-2">
        <div className="card"></div>
      </div>
      <div className="col-2">
        <div className="card"></div>
      </div> */}
      <ProductCard/>
    </div>
  );
};

export default PopularProduct;

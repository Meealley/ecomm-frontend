import React from "react";
import ProductCard from "../../Components/UI/ProductCard";

const PopularProduct = () => {
  return (
    <section className="home-wrapper-2 py-5 special-wrapper">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default PopularProduct;

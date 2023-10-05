import React from "react";
import SpecialProductCard from "../../Components/UI/SpecialProductCard";

const SpecialProduct = () => {
  return (
    <section className="home-wrapper-2 py-5 special-wrapper">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProductCard />
        </div>
      </div>
    </section>
  );
};

export default SpecialProduct;

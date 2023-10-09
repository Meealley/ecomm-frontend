import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Helmet } from "react-helmet";
import LeftCol from "./StoreSection/LeftCol";
import RightCol from "./StoreSection/RightCol";

const About = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Our Store</title>
      </Helmet>

      <BreadCrumb title="Our Store" />

      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {/* left column  */}
            <LeftCol />
            {/* right column  */}
            <RightCol/>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

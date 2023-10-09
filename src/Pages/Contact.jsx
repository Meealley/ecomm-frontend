import React from "react";
import BreadCrumb from "../Components/BreadCrumb";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>

      <BreadCrumb title="Contact" />
    </>
  );
};

export default Contact;

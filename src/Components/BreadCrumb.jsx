import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = (props) => {
  const { title } = props;

  return (
    <div className="py-4 mb-0">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className="mb-0">
              <Link to={"/"} className="text-dark">Home / {title}</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;

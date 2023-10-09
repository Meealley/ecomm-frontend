import React from "react";
import Famouscard from "../../Components/UI/Famouscard";

const FamousSection = () => {
  return (
    <section className="famous-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <Famouscard />
        </div>
      </div>
    </section>
  );
};

export default FamousSection;

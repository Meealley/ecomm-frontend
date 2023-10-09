import React from "react";
import data from "../../Pages/bannerData";

const Famouscard = () => {
  return (
    <>
      {data.map((items) => (
        <div key={items.id} className="col-3">
          <div className="famous-card position-relative">
            <img src={items.image} alt={items.title} />
            <div className="position-absolute famous-content">
              <h5 className="">{items.title}</h5>
              <h6>{items.subtitle}</h6>
              <p>{items.price}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Famouscard;

import React from "react";
import Marquee from "react-fast-marquee";
import AppleLogo from "../../assets/images/apple-logo.png"

const Marquees = () => {
  return (
    <section className="marque-wrapper py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marque-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src={AppleLogo} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={AppleLogo} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={AppleLogo} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={AppleLogo} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={AppleLogo} className="marq-img" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src={AppleLogo} className="marq-img" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquees;

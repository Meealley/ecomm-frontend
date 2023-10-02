import React from "react";
import {
  BsCarFront,
  BsGift,
  BsHeadset,
  BsPercent,
  BsCreditCard,
} from "react-icons/bs";

const HomeSections2 = () => {
  return (
    <>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-10">
                  <BsCarFront className="fs-3" />
                  <div>
                    <h6 className="mb-1">Free Shipping</h6>
                    <p className='fs-small'>Orders From ₦400,000</p>{" "}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <BsGift className="fs-3" />
                  <div>
                    <h6 className="mb-1">Gift offers</h6>
                    <p className='fs-small'>save upto 25% </p>{" "}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <BsHeadset className="fs-3" />
                  <div>
                    <h6 className="mb-1">24/7 Support</h6>
                    <p className='fs-small'>Contact us anytime</p>{" "}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <BsPercent className="fs-3" />
                  <div>
                    <h6 className="mb-1">Affordable price</h6>
                    <p className='fs-small'>Get wholesale prices</p>{" "}
                  </div>
                </div>
                <div className="d-flex align-items-center gap-10">
                  <BsCreditCard className="fs-3" />
                  <div>
                    <h6 className="mb-1">Secured Payments</h6>
                    <p className='fs-small'>100% Protected Payments</p>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSections2;

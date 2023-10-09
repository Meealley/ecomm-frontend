import React from "react";
import Banner from "../assets/images/banner.jpg";
import { Link } from "react-router-dom";
import data from "./bannerData";
import HomeSections2 from "./HomeSections/HomeSections2";
import HomeSection3 from "./HomeSections/HomeSection3";
import Marquees from "./HomeSections/Marquees";
import LatestNews from "./HomeSections/LatestNews";
import Collections from "./HomeSections/Collections";
import SpecialProduct from "./HomeSections/SpecialProduct";
import PopularProduct from "./HomeSections/PopularProducts";
import FamousSection from "./HomeSections/FamousSection";

const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative">
                <img
                  src={Banner}
                  alt="main-banner"
                  className="sized-img img-fluid rounded-3"
                />
                <div className="main-banner-content position-absolute">
                  <h4>Get your Brand new Iphones</h4>
                  <h5>IPhone 11 256GB</h5>
                  <p>From ₦190,000</p>
                  <Link className="button fs-small">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                {data.map((items) => (
                  <div key={items.id} className="small-banner position-relative">
                    <img
                      src={items.image}
                      alt="small-banner"
                      className="small-img img-fluid rounded-3"
                    />
                    <div className="small-banner-content position-absolute">
                      <h4>{items.title}</h4>
                      <h5>{items.subtitle}</h5>
                      <p>{items.price}</p>
                      {/* <Link className="button fs-small">Buy Now</Link> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeSections2/>
      <HomeSection3 />
      <Collections/>
      <FamousSection/>
      <SpecialProduct/>
      <PopularProduct/>
      <Marquees/>
      <LatestNews/>
    </>
  );
};

export default Home;

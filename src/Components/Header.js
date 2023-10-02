import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsCart } from "react-icons/bs";
// import {FaCompactDisc, FaUser} from 'react-icons/fa'
import CartImg from "../assets/images/cart.jpeg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white  mb-0">
                Free Shipping over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="+23481047654682">
                  +23481047654682
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white" to={"/"}>
                  ParkTech.
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2 "
                  placeholder="Search Product"
                  aria-label="Search Product"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link>
                    <p className="mb-0">
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link>
                    <p className="mb-0">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="">
                    <p className="mb-0 fs-6">
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center  gap-10">
                    {/* <img src={CartImg} /> */}
                    <BsCart className="fs-2"/>
                    <div className="d-flex flex-column mx-2">
                      <span className="badge badge-warning  bg-white text-dark">0</span>
                      <p className="mb-0">$500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

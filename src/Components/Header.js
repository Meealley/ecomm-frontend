import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch, BsCart, BsHeart } from "react-icons/bs";
import { BiFoodMenu } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
// import CartImg from "../assets/images/cart.jpeg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white  mb-0 fs-small">
                Free Shipping over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0 fs-small">
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
                    <p className="mb-0 fs-small">
                      Compare <br /> Product
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center  gap-10">
                    <BsHeart className="fs-2" />
                    <p className="mb-0 fs-small">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center  gap-10">
                    <FaUser className="fs-2" />
                    <p className="mb-0 fs-small">
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="d-flex align-items-center  gap-10">
                    {/* <img src={CartImg} /> */}
                    <BsCart className="fs-2" />
                    <div className="d-flex flex-column mx-2">
                      <span className="badge badge-warning  bg-white text-dark">
                        0
                      </span>
                      <p className="mb-0 rubik">₦500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30 mb-0">
                {/* Dropdown button  */}
                <div>
                  <div class="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 me-5 d-flex align-items-center "
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BiFoodMenu />
                      <span> Shop Categories</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="/">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/about"}>Our Store</NavLink>
                    <NavLink to={"/blog"}>Blogs</NavLink>
                    <NavLink to={"/contact"}> Contact</NavLink>
                  </div>
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

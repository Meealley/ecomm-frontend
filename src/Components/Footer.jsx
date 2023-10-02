import React from "react";
// import { BiSend } from "react-icons/bi";
import Newsletter from "../assets/images/message.png";
import { Link } from "react-router-dom";
import { BsInstagram, BsTwitter, BsTelegram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                {/* <BiSend className="text-white"/> */}
                <img
                  src={Newsletter}
                  alt="newsletter"
                  className="newsletter-img"
                />
                <h3 className="mb-0 text-white">Sign Up for newsletter</h3>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1 "
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white fs-5 mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-small">
                  PMB : 200136, Victoria Island <br /> Lagos, Nigeria
                </address>
                <a
                  href="tel: +2348147654682"
                  className="mt-3 d-block mb-2 fs-small"
                >
                  +2348147654682
                </a>
                <a
                  href="mailto:oyewalefavour424@gmail.com"
                  className="mt-2 d-block mb-3 fs-small"
                >
                  oyewalefavour424@gmail.com
                </a>
                {/* social expansion  */}
                <div className="social-icons d-flex align-items-center  gap-15 text-white">
                  <Link to={"/"}>
                    <BsInstagram  className="fs-4"/>
                  </Link>
                  <Link to={"/"}>
                    <BsTwitter className="fs-4" />
                  </Link>
                  <Link to={"/"}>
                    <BsTelegram  className="fs-4"/>
                  </Link>
                  <Link to={"/"}>
                    <BsLinkedin  className="fs-4"/>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white fs-5 mb-4">Information</h4>
              <div className="footer-link d-flex flex-column fs-small">
                <Link className="mb-1 py-2">Privacy Policy</Link>
                <Link className="mb-1 py-2">Refund Policy</Link>
                <Link className="mb-1 py-2">Shipping Policy</Link>
                <Link className="mb-1 py-2">Terms and Condition</Link>
                <Link className="mb-1 py-2">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white fs-5 mb-4">Account</h4>
              <div className="footer-link d-flex flex-column fs-small">
                <Link className="mb-1 py-2">About Us</Link>
                <Link className="mb-1 py-2">FAQ</Link>
                <Link className="mb-1 py-2">Contact</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white fs-5 mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column fs-small">
                <Link className="mb-1 py-2">Laptops</Link>
                <Link className="mb-1 py-2">Headphones</Link>
                <Link className="mb-1 py-2">Tablets</Link>
                <Link className="mb-1 py-2">Watch</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white fs-small">
                &copy; {new Date().getFullYear()}; Made by Mujin Park
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

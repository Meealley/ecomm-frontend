import React from "react";
import productCardData from "../../Pages/productCardData";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
// import { FaBolt } from "react-icons/fa";
import View from "../../assets/images/view.png";
import Addcart from "../../assets/images/addc.png";
import Compare from "../../assets/images/compare.png";
import Wishlist from "../../assets/images/wishlist.png";
import truncateSentence from "./truncate";
// import { render } from "react-dom";

const ProductCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      {productCardData.map((product) => (
        <div key={product.id} className="col-3">
          <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <Link>
                <img src={Wishlist} alt="wish-list" />
              </Link>
            </div>
            <div className="product-image">
              <img
                src={product.image}
                className="img-fluid"
                alt={product.title}
              />
            </div>
            <div className="product-details">
              <h6 className="brands">{product.brand}</h6>
              <h5 className="product-title">
                {truncateSentence(product.title, 23)}
              </h5>
              {/* this is the stars  */}
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={18}
                value={3.5}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />

              <p className="price">
                {product.price.toLocaleString("en-NG", {
                  style: "currency",
                  currency: "NGN",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
            {/* Action bar  */}
            <div className="action-bar position-absolute">
              <div className="d-flex flex-column gap-15">
                <Link>
                  <img src={View} alt="view" />
                </Link>
                <Link>
                  <img src={Addcart} alt="view" />
                </Link>
                <Link>
                  <img src={Compare} alt="view" />
                </Link>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ProductCard;

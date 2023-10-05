import React from "react";
import specialProductData from "../../Pages/specialProductData";
import truncateSentence from "./truncate";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProductCard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      {specialProductData.map((product) => (
        <div className="col-4 my-3">
          <div className="special-product-card">
            <div className="d-flex flex-wrap gap-5 justify-content-between special-image">
              <div>
                <img
                  src={product.image}
                  className="img-fluid"
                  alt="special-product"
                />
              </div>
              <div className="special-product-content">
                <h5>{product.brand}</h5>
                <h6>{truncateSentence(product.title, 25)}</h6>
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
                  <span>
                    {" "}
                    &nbsp; <strike>₦400</strike>
                  </span>
                </p>
                <div className="discount-till d-flex align-items-center">
                  <p className="mb-0">
                    <b>5 days</b>
                  </p>
                  <div className="d-flex gap-10 align-items-center">
                    <span className="badge rounded-circle p-2 bg-warning">
                      1
                    </span>
                    :
                    <span className="badge rounded-circle p-2 bg-warning">
                      1
                    </span>
                    :
                    <span className="badge rounded-circle p-2 bg-warning">
                      1
                    </span>
                  </div>
                </div>
                {/* this is the product count  */}
                <div className="prod-count my-3">
                  <p>Product 5 :</p>
                  <div class="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
                <Link className="button">Add to cart</Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SpecialProductCard;

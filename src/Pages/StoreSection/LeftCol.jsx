import React from "react";
import Sandisk from "../../assets/images/sandisk.webp";
import truncateSentence from "../../Components/UI/truncate";
import ReactStars from "react-rating-stars-component";

const LeftCol = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="col-3">
      <div className="filter-card mb-3">
        <h3 className="filter-title"> Shop</h3>
        <div>
          <ul className="ps-0">
            <li>Watch</li>
            <li>Tv</li>
            <li>Camera</li>
            <li>Laptop</li>
          </ul>
        </div>
      </div>
      <div className="filter-card mb-3">
        <h3 className="filter-title"> Filter by</h3>
        <div>
          <h5 className="sub-title">Availability</h5>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" name="" id="" />
            <label htmlFor="" className="form-label">
              {" "}
              In Stock(1)
            </label>
          </div>
          <div className="form-check">
            <input type="checkbox" className="form-check-input" name="" id="" />
            <label htmlFor="" className="form-label">
              {" "}
              Out of stock(0)
            </label>
          </div>
          <h5 className="sub-title">Price</h5>
          <div className="d-flex align-items-center gap-10">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="From"
              />
              <label htmlFor="floatingInput">From</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput1"
                placeholder="To"
              />
              <label htmlFor="floatingInput1">To</label>
            </div>
          </div>
          <h5 className="sub-title">Colors</h5>
          <div>
            <ul className="colors ps-0">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <h5 className="sub-title">Size</h5>
          <div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name=""
                id="color-1"
              />
              <label htmlFor="color-1" className="form-label">
                {" "}
                S (2)
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                name=""
                id="color-2"
              />
              <label htmlFor="color-2" className="form-label">
                {" "}
                M (2)
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="filter-card mb-3">
        <h3 className="filter-title"> Product tags</h3>
        <div>
          <div className="product-tags d-flex flex-wrap align-items-center gap-10">
            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
              Headphone
            </span>
            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
              Mobile
            </span>
            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
              Laptop
            </span>
            <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
              Airpod
            </span>
          </div>
        </div>
      </div>
      <div className="filter-card mb-3">
        <h3 className="filter-title"> Random Product</h3>
        <div>
          <div className="random-products d-flex">
            <div className="w-40">
              <img src={Sandisk} className="img-fluid" alt="sandisk" />
            </div>
            <div className="w-60">
              <h5>
                {truncateSentence(
                  "SanDisk Extreme SSD - 4TB - Up To 1050mb/s",
                  17
                )}
              </h5>
              {/* this is the xstar  */}
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
              <b>$100</b>
            </div>
          </div>
          <div className="random-products d-flex">
            <div className="w-40">
              <img src={Sandisk} className="img-fluid" alt="sandisk" />
            </div>
            <div className="w-60">
              <h5>
                {truncateSentence(
                  "SanDisk Extreme SSD - 4TB - Up To 1050mb/s",
                  17
                )}
              </h5>
              {/* this is the xstar  */}
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
              <b>$100</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftCol;

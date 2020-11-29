import React from "react";
import MapSamp from "../static/map.png";
import Pin from "../static/map-pin.svg";
import User from "../static/account-pic.png";
import Rating from "../static/rating.png";

const ShopReviews = (props) => {
  return (
    <div>
      <div className="reviews">
        <div className="reviews-overall">
          <p className="rating-number">(5.0)</p>
        </div>
        <div className="col-3">
          <img src={Rating} />
        </div>
        <div className="col-1">
          <p>1 rating</p>
        </div>
      </div>
      <br />
      <div className="review-item">
        <div  className="user-pic">
          <img src={User} />
        </div>
        <div className="col">
          <p className="main-comment">Amazing food!! Will order again!!</p>
          <img src={Rating} className="from-rev" />
          <p>
            They weren’t kidding when they said they were fast! order came in
            less than 60 minutes and I was able to eat party pasta with my
            family and friends. Definitely recommend this to me family and
            friends. I will buy again for more!!
          </p>
          <p className = "review-date">
            2020 - 11 - 27
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShopReviews;

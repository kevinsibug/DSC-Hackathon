import React from "react";

import PlaceHolderImage from "../static/Placeholder.png";
import ReactStars from "react-rating-stars-component";

const ListingItem = (props) => {
  const { name, address, rating, category, description } = props.details;

  const onClick = (e) => {
    console.log(e.target.getAttribute("data-shop"))
    console.log(e.target)
  }

  return (
    <div className="col-md-4 listing" data-shop = {name} onClick = {onClick}>
      <div className="card mb-4 shadow-sm" data-shop = {name}>
        <img data-shop = {name}
          src={PlaceHolderImage}
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
          aria-label="Placeholder: Thumbnail"
        ></img>
        <div className="card-body" data-shop = {name}>
          <h3 className="card-text" data-shop = {name}>{name}</h3>
          <ReactStars {...rating} />
          <p className="card-text" data-shop = {name}>{description}</p>
          <p className="card-text" data-shop = {name}>{category}</p>
          <div className="d-flex justify-content-between align-items-center" data-shop = {name}>
            {/* <small className="text-muted">9 mins</small> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;

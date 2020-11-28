import React from "react";

import PlaceHolderImage from "../static/Placeholder.png";
import ReactStars from "react-rating-stars-component";

const ListingItem = (props) => {
  const { name, address, rating, category, description } = props.details;

  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img
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
        <div className="card-body">
          <h3 className="card-text">{name}</h3>
          <ReactStars {...rating} />
          <p className="card-text">{description}</p>
          <p className="card-text">{category}</p>
          <div className="d-flex justify-content-between align-items-center">
            {/* <small className="text-muted">9 mins</small> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingItem;

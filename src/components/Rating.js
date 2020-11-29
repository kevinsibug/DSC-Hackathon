import React from "react";
import ReactStars from "react-rating-stars-component";

const Rating = (props) => {

  const {rating} = props.details;
  const styling = {
    size: 30,
    count: 5,
    color: "gray",
    activeColor: "#FFBE55",
    value: `${rating.value}`,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      console.log(`Example 2: new value is ${newValue}`);
    },
  };
  return (
    <div>
      <ReactStars {...styling}/>
    </div>
  );
};

export default Rating;

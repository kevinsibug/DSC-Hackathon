import React, { useContext } from "react";

import ListingContext from "../context/listingContext";

const Category = (props) => {
  const category = props.values.category;

  const listingContext = useContext(ListingContext);
  const { showCategory, resetCategory } = listingContext;

  const selectedCategory = listingContext.category;
  let selected;

  if (category === selectedCategory) {
    selected = "selected";
  } else {
    selected = "unselected";
  }

  const onClick = (e) => {
    if (category != listingContext.category) {
        showCategory(category);
    } else {
        resetCategory();
    }
  };
  return (
    <div className="category">
      <img
        onClick={onClick}
        data-value={category}
        src={`/images/categories/${category.split(" ")[0].toLowerCase()}.png`}
        className={`category-image ${selected}`}
      ></img>
    </div>
  );
};

export default Category;

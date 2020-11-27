import React, { useState, useContext } from "react";

import ListingContext from "../context/listingContext";
import ListingItem from "./ListingItem";

const Listing = (props) => {
  const listingContext = useContext(ListingContext);
  //   const { listings } = listingContext;
  const listings = props.listings;

  return (
    <main role="main">
      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
              {listings &&
                listings.map((value, index) => (
                  <ListingItem key={index} details={value} />
                ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Listing;

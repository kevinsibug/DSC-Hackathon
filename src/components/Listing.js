import React, { useState, useContext, useEffect } from "react";

import ListingContext from "../context/listingContext";
import ListingItem from "./ListingItem";

import { useCollectionData } from "react-firebase-hooks/firestore";

const Listing = (props) => {
  const listingContext = useContext(ListingContext);

  const { category } = listingContext;
  let { firestore, listings } = props;
  let shopsRef
  if (category) {
    shopsRef = firestore
      .collection("shops")
      .where("category", "==", `${category.toLowerCase()}`);
  } else {
    shopsRef = firestore.collection("shops");
  }

  [listings] = useCollectionData(shopsRef, { idField: "id" });
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

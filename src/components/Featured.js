import React, { useContext } from "react";

import ListingContext from "../context/listingContext";
import ListingItem from "./ListingItem";

import { useCollectionData } from "react-firebase-hooks/firestore";

const Featured = (props) => {
  const listingContext = useContext(ListingContext);
  const { category, text, location } = listingContext;

  let { firestore } = props;
  let shopsRef, listings;

  shopsRef = firestore.collection("shops").where("featured", "==", true);

  [listings] = useCollectionData(shopsRef, { idField: "id" });
  return (
    <main role="main">
      <div className="album py-5">
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

export default Featured;

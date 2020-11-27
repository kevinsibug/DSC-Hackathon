import React, { useState, useContext } from "react";

import ListingContext from "../context/listingContext";
import ListingItem from "./ListingItem";

const Listing = (props) => {
  const listingContext = useContext(ListingContext);
//   const { listings } = listingContext;
  const listings = props.listings;

  

  return (
    <main role="main">
      <section className="jumbotron text-center">
        <div className="container">
          <h1>Business Listings</h1>
          <p className="lead text-muted">
            Something short and leading about the collection below—its contents,
            the creator, etc. Make it short and sweet, but not too short so
            folks don’t simply skip over it entirely.
          </p>
          <p>
            <a href="#" className="btn btn-primary my-2">
              Main call to action
            </a>
            <a href="#" className="btn btn-secondary my-2">
              Secondary action
            </a>
          </p>
        </div>
      </section>

      <div className="album py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {listings && listings.map((value, index) => (
                <ListingItem key = {index} details={value} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Listing;

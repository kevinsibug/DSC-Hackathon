import React from "react";


import Header from "../components/Header";
import Listing from "../components/Listing";
import Categories from "../components/Categories"

const Shops = (props) => {
  const listings = props.listings;
  const firestore = props.firestore;


  return (
    <div>
      <Header />
      <Categories firestore = {firestore}/>
      <Listing listings={listings} />
    </div>
  );
};

export default Shops;

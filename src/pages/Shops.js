import React from "react";

import Listing from "../components/Listing";
import Header from "../components/Header";
const Shops = (props) => {
  const listings = props.listings;
  return (
    <div>
      <Header />
      <Listing listings={listings} />
    </div>
  );
};

export default Shops;

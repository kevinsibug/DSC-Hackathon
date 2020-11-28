import React, { useContext } from "react";

import { useCollectionData } from "react-firebase-hooks/firestore";

import ListingContext from "../context/listingContext";

import Header from "../components/Header"
const Shop = (props) => {

  return (
    <div>
      <Header />
    </div>
  );
};

export default Shop;

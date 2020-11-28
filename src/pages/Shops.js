import React from "react";


import Header from "../components/Header";
import Listing from "../components/Listing";
import Categories from "../components/Categories";
import SearchNav from "../components/SearchNav";

const Shops = (props) => {
  const listings = props.listings;
  const firestore = props.firestore;


  return (
    <div>
      <Header />
      <SearchNav />
      <Categories firestore = {firestore}/>
      <Listing firestore = {firestore} listings={listings} />
    </div>
  );
};

export default Shops;

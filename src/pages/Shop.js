import React, { useContext } from "react";

import { useCollectionData } from "react-firebase-hooks/firestore";

import ListingContext from "../context/listingContext";

import Header from "../components/Header"
const Shop = (props) => {
  const { firestore } = props;
  const listingContext = useContext(ListingContext);

  const { shop } = listingContext;

  const shopRef = firestore.collection("shops").where("name", "==", `${shop}`);

  const [shopSelected] = useCollectionData(shopRef, { idField: "id" });
  console.log(shopSelected);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Shop;

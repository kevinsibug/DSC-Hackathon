import React, { useContext } from "react";

import { useCollectionData } from "react-firebase-hooks/firestore";

import ListingContext from "../context/listingContext";

import Header from "../components/Header"
import SignIn from "../components/SignIn"
import SignOut from "../components/SignOut"

const Shop = (props) => {
  const { firestore, auth, user } = props;
  const listingContext = useContext(ListingContext);

  const { shop } = listingContext;

  const shopRef = firestore.collection("shops").where("name", "==", `${shop}`);

  const [shopSelected] = useCollectionData(shopRef, { idField: "id" });
  return (
    <div>
      <Header />
      <SignIn firestore = {firestore} auth = {auth} user = {user}/>
      <SignOut firestore = {firestore} auth = {auth} user = {user}/>
    </div>
  );
};

export default Shop;

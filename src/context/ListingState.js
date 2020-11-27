import React, { useReducer } from "react";
import axios from "axios";
import ListingContext from "./listingContext";
import ListingReducer from "./listingReducer";
import {
  SORT_LISTINGS,
  REVIEW_LISTING,
  CHAT_LISTING,
  SET_LOADING,
} from "../types";

const ListingState = (props) => {
  const initialState = {
    listings: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(ListingReducer, initialState);

  //Sorting Listings

  //Review Listing

  //Chat Listing

  //Set Loading


  return (
    <ListingContext.Provider
      value={{
        listings: state.listings,
        loading: state.loading,
      }}
    >
      {props.children}
    </ListingContext.Provider>
  );
};

export default ListingState;

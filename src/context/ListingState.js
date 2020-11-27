import React, { useReducer } from "react";
import ListingContext from "./listingContext";
import ListingReducer from "./listingReducer";
import {
  SORT_LISTINGS,
  REVIEW_LISTING,
  CHAT_LISTING,
  SET_LOADING,
} from "./types";

const ListingState = (props) => {
  const initialState = {
    listings: [
      {
        id: "1",
        name: "restaurant 1",
        address: "sample address",
        rating: { size: 30, value: 2.5, edit: false },
      },
    ],
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

import React, { useReducer } from "react";
import ListingContext from "./listingContext";
import ListingReducer from "./listingReducer";
import {
  SHOW_CATEGORY,
  REVIEW_LISTING,
  CHAT_LISTING,
  SET_LOADING,
} from "./types";

const ListingState = (props) => {
  const initialState = {
    category: "",
    loading: false,
  };
  const [state, dispatch] = useReducer(ListingReducer, initialState);

  //Show Category
  const showCategory = (category) => {
    dispatch({
      type: SHOW_CATEGORY,
      payload: category,
    });
  };

  //Review Listing

  //Chat Listing

  //Set Loading

  return (
    <ListingContext.Provider
      value={{
        category: state.category,
        loading: state.loading,
        showCategory
      }}
    >
      {props.children}
    </ListingContext.Provider>
  );
};

export default ListingState;

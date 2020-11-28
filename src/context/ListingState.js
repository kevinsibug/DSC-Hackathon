import React, { useReducer } from "react";
import ListingContext from "./listingContext";
import ListingReducer from "./listingReducer";
import {
  SHOW_CATEGORY,
  RESET_CATEGORY,
  SHOW_TEXT,
  SHOW_LOCATION,
  SET_SHOP,
  SHOW_SUBSCRIPTION,
} from "./types";

const ListingState = (props) => {
  const initialState = {
    category: "",
    text: "",
    location: "",
    loading: false,
    shop: "",
  };
  const [state, dispatch] = useReducer(ListingReducer, initialState);

  //Show Category
  const showCategory = (category) => {
    dispatch({
      type: SHOW_CATEGORY,
      payload: category,
    });
  };

  //Reset Category
  const resetCategory = () => {
    dispatch({
      type: RESET_CATEGORY,
    });
  }

  //Show Text
  const showText = (text) => {
    dispatch({
      type: SHOW_TEXT,
      payload: text,
    });
  }

  //Set Loading
  const showLocation = (text) => {
    dispatch({
      type: SHOW_LOCATION,
      payload: text,
    });
  }
  //Set Shop
  const setShop = (text) => {
    dispatch({
      type: SET_SHOP,
      payload: text,
    });
  }

  //Show Subscription
  const showSubscription = (text) => {
    dispatch({
      type: SHOW_SUBSCRIPTION,
      payload: text,
    });
  }
  return (
    <ListingContext.Provider
      value={{
        category: state.category,
        loading: state.loading,
        text: state.text,
        location: state.location,
        shop: state.shop,
        showCategory,
        resetCategory,
        showText,
        showLocation,
        setShop,
        showSubscription
      }}
    >
      {props.children}
    </ListingContext.Provider>
  );
};

export default ListingState;

import React, {useState, useContext} from "react";

import ListingContext from "../context/listingContext";
const Subscribe = () => {
  const listingContext = useContext(ListingContext);
  const {showSubscription} = listingContext

  const [text, setSubscription] = useState("");

  const onChangeSubscription = (e) => {
    setSubscription(e.target.value);


  }

  const onSubscribe = (e) => {
    e.preventDefault();
    showSubscription(text);
  }

  return (

    <div className= 'd-flex justify-content-center'>
    <form className="search form-row"  onSubmit = {onSubscribe}>
      <div className="col">
        <input onChange = {onChangeSubscription} className = "form-controlSub" placeholder="Enter your email address"></input>
      </div>

      <input className = "search-button" type="Submit" value="SUBSCRIBE"></input>
    </form>
    </div>
  );
};

export default Subscribe;

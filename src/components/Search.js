import React, {useState, useContext} from "react";

import { withRouter } from 'react-router';

import ListingContext from "../context/listingContext";
const Search = (props) => {

  const {isShops} = props; 
  let styling = ""
  if (isShops) {
    styling= "shops-search";
  } 
  const listingContext = useContext(ListingContext);
  const {showText, showLocation} = listingContext

  const [text, setText] = useState("");
  const [location, setLocation] = useState("");

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onChangeLocation = (e) => {
    setLocation(e.target.value);
  }

  const onSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    showText(text);
    showLocation(location);
    props.history.push('/shops');
  }

  return (

    <div className= 'd-flex justify-content-center'>
    <form className={`search form-row ${styling}`}  onSubmit = {onSubmit}>
      <div className="col">
        <input onChange = {onChangeText} className = "form-controlA" placeholder="    What are you looking for?"></input>
      </div>

      {/* <div className="col">
        <input onChange = {onChangeLocation} className = "form-controlB" placeholder="    Enter your Location"></input>
      </div> */}

      <input className = "search-button" type="Submit" defaultValue="SEARCH"></input>
    </form>
    </div>
  );
};

export default Search;

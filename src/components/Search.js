import React, {useState, useContext} from "react";

import ListingContext from "../context/listingContext";
const Search = () => {
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
    e.preventDefault();
    showText(text);
    showLocation(location);
  }

  return (
    <form className="search form-row"  onSubmit = {onSubmit}>
      <div className="col">
        <input onChange = {onChangeText} className = "form-control" placeholder="What are you looking for?"></input>
      </div>

      <div className="col">
        <input onChange = {onChangeLocation} className = "form-control" placeholder="Enter your Location"></input>
      </div>

      <input className = "search-button" type="Submit" defaultValue="Search"></input>
    </form>
  );
};

export default Search;

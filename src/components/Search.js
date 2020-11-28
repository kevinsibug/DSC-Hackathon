import React from "react";

const Search = () => {
  return (
    <div className= 'd-flex justify-content-center'>
    <div className="search form-row">
      <div className="col">
        <input className = "form-control" placeholder="What are you looking for?"></input>
      </div>

      <div className="col">
        <input className = "form-control" placeholder="Location"></input>
      </div>

      <input className = "search-button" type="Submit" value="SEARCH"></input>
    </div>
    </div>
  );
};

export default Search;

import React from "react";

const Search = () => {
  return (
    <div className="search form-row">
      <div class="col">
        <input className = "form-control" placeholder="What are you looking for?"></input>
      </div>

      <div class="col">
        <input className = "form-control" placeholder="Location"></input>
      </div>

      <input className = "search-button" type="Submit" value="Search"></input>
    </div>
  );
};

export default Search;

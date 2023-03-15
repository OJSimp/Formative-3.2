import "./Search.scss";

import Nav from "../components/Nav";

import { Link } from "react-router-dom";

import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = (e) => {
    e.preventDefault();

    console.log(searchValue);
  };

  const handleSearchValue = (e) => [setSearchValue(e.target.value)];

  return (
    <div className="search-page">
      <div className="search-header">
        <form action="" className="search-from" onSubmit={handleSearchInput}>
          <input
            type="text"
            className="search-input"
            placeholder="search here for"
            onChange={handleSearchValue}
          />
          <Link to={`/${searchValue}`} className="primary-button">
            Search
          </Link>
        </form>
        <div className="search-photos-grid">
          <div className="photocontainertop">
            <img
              className="topimg"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            ></img>
          </div>
          <div className="photocontainermiddle">
            <img
              className="middleimg"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            ></img>
            <img
              className="middleimg"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            ></img>
            <div className="photocontainerbottom"></div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Search;

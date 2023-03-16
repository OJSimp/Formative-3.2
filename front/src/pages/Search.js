import "./Search.scss";

import Header from "../components/Header";
import Nav from "../components/Nav";
// import Card from "../components/Card"

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
      <div className="search--header">
        <form action="" className="search--from" onSubmit={handleSearchInput}>
          <input
            type="text"
            className="search--input"
            placeholder="Search Here..."
            onChange={handleSearchValue}
          />
          <Link to={`/${searchValue}`} className="primary--button">
            Search
          </Link>
        </form>
      </div>
      <div className="search-photos_grid">
        <div className="photo-container-header">
          <img
            className="search-image"
            src="https://i.ibb.co/DMx6X6k/6841904-6841904-R1-043-20.jpg"
            alt=""
          ></img>
        </div>
        <div className="photo-container--middle">
          <img
            className="search-image"
            src="https://i.ibb.co/NmBzgTb/54220008.jpg"
            alt=""
          ></img>
          <img
            className="search-image"
            src="https://i.ibb.co/c2Y596h/54210017-copy.jpg"
            alt=""
          ></img>
        </div>
        <div className="photo-container-bottom">
          <img
            className="search-image"
            src="https://i.ibb.co/jG6L4v9/54210015-copy.jpg"
            alt=""
          ></img>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Search;

import React from "react";
import Results from "../components/Results";
import axios from "axios";
import { useState } from "react";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };
  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await axios(
        `https://api.github.com/users/${searchInput}/repos`
      );
      setRepos(result);

      /*const response = await usefetch(
        `https://api.https://github.com/users/${searchInputs}/repos`
      );
      const result = await response.json();
      setRepos(result);*/
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="search-bar" style={{ padding: "50px" }}>
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
        />
        <button className="search-button" onClick={handleClick}>
          Search
        </button>
      </div>
      <Results className="repos-list" repos={repos} />
    </>
  );
};
export default SearchBar;

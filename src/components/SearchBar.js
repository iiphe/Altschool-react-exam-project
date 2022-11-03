import React from 'react';
import { useState, useFetch } from 'react';
import Results from '../components/Results';
import {axios} from "axios"



const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');

  const [repos, setRepos] = useState([]);

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleClick = async () => {
    console.log(searchInput);

    try {
      const result = await axios( `https://api.https://github.com/users/${searchInput}/repos`);
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
  console.log(repos);

  return (
    <>
      <div style={{ padding: '20px' }}>
        <input
          type="text"
          placeholder="search"
          value={searchInput}
          onChange={handleChange}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      <Results repos={repos} />
    </>
  );
};
export default SearchBar;

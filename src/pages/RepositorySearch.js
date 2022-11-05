import React from "react";
import SearchBar from "../components/SearchBar";
import "../style.css";

export function RepositorySearch() {
  /*const [currentPage, setCurrentPage] =useState(1);
const [reposPerPage, setReposPerPage] = useState(5);
const [repos] = useState();*/

  return (
    <div>
      <nav className="navbar">
        <img
          className="logo"
          src={"https://cdn-icons-png.flaticon.com/512/25/25231.png"}
          alt="Logo"
        />
        <h1>Search Github Repository </h1>
      </nav>

      <SearchBar />
    </div>
  );
}

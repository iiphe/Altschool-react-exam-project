import React from "react";
import Pagination from "./Pagination";

const Results = (props) => {
  const { repos } = props;
  console.log("Repos is: ", repos.data);

  const listRepos =
    repos.length !== 0 ? (
      repos.data.map((item) => (
        <li key={item.id}>
          <a href={item.html_url} rel="noreferrer" target="_blank">
            {item.name}
          </a>
        </li>
      ))
    ) : (
      <li>No repos found</li>
    );

  return (
    <div>
      <li className="repo-lists">{listRepos}</li>;
      <Pagination />
    </div>
  );
};
export default Results;

import React from 'react';

const Results = (props) => {
  const { repos } = props;
  console.log('Repos is: ', repos);

  const listRepos = repos.length !== 0 ? (
    repos.data.map((item) => <li key={item.id}>{item.name}</li>)
  ) : (
    <li>No repos found</li>
  );

  return (
    <ul>
      <li>{listRepos}</li>
    </ul>
  );
};
export default Results;

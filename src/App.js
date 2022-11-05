import React from "react";
import { NotFound } from "./pages/NotFound";
import { RepositorySearch } from "./pages/RepositorySearch";
import { Home } from "./pages/Home";

import { Link, Routes, Route } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";

import "./style.css";

function ErrorFallback({ error }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function App() {
  /*const [currentPage, setCurrentPage] =useState(1);
const [reposPerPage, setReposPerPage] = useState(5);
const [repos] = useState();*/

  return (
    <div>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <nav>
          <ul>
            <Link to="/">Home</Link>

            <Link to="/repositorySearch">RepositorySearch</Link>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RepositorySearch" element={<RepositorySearch />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;

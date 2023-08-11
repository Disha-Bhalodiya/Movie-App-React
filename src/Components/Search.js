import React from "react";
import { useGlobalContext } from "./Context"; //import from context component

const Search = () => {
  const { query, setQuery, isError } = useGlobalContext(); //get data from context

  return (
    <>
      <section className="search-section">
        <h2 className="heading"> Search Your Favourite Movie </h2>{" "}
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setQuery(e.target.value)} //get data from input and change state value for search
            />{" "}
          </div>{" "}
        </form>{" "}
        <div className="card-error">
          {/* //it will show error when condition not fullfilled */}
          <p> {isError.show && isError.msg} </p>{" "}
        </div>{" "}
      </section>{" "}
    </>
  );
};

export default Search;

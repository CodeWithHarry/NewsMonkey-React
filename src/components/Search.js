import React from "react";
import { useGlobalContext } from "react";
export default function Search() {
  const [query, setQuery] = useGlobalContext();
  return (
    <>
      <div>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={query}
            onSubmit={(e)=>e.preventDefault()}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </div>
    </>
  );
}

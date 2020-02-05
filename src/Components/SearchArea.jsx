import React from "react";

const SearchArea = props => {
  const { handleSearchInput, handleSearchForBooks, handleSort } = props;
  return (
    <div className="searchArea">
      <form onSubmit={handleSearchForBooks} action="">
        <input onChange={handleSearchInput} type="text" />
        <button type="submit">Grab</button>
        <select defaultValue="sort" onChange={handleSort}>
          <option disabled value="sort">
            Sort
          </option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </form>
    </div>
  );
};

export default SearchArea;

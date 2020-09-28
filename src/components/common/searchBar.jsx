import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      className="form-control my-3"
      type="text"
      name="query"
      value={value}
      placeholder="Search"
      aria-label="Search"
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBar;

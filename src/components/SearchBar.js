import React from "react";
import SearchIcon from "../images/Search.png";

const SearchBar = ({ setSubmitted, searchTerm, setSearchTerm }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="relative w-full items-center mr-12">
      <form
        className=" flex w-4/5 mx-auto items-center"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          className=" border border-gray-700 w-4/5 px-6 py-2 text-2xl rounded-lg outline-none"
          placeholder="type to find players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>

        <button type="submit">
          <img
            className="mx-auto w-24 text-white mb-2 z-10 content-image text-2xl"
            src={SearchIcon}
            alt="search"
            onClick={handleSubmit}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

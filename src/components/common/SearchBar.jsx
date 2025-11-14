import { useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import { SEARCH_PLACEHOLDER } from "../../utils/constants";

const SearchBar = ({ onSearch, placeholder = SEARCH_PLACEHOLDER }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      onSearch(searchValue.trim());
    }
  };

  const handleClear = () => {
    setSearchValue("");
    onSearch("");
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="relative flex items-center">
        {/* Search Icon */}
        <div className="absolute left-3 sm:left-4 pointer-events-none">
          <MdSearch className="w-5 h-5 sm:w-6 sm:h-6 text-text-secondary" />
        </div>

        {/* Search Input */}
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full pl-10 sm:pl-12 pr-20 sm:pr-24 py-2.5 sm:py-3 
                     text-sm sm:text-base
                     bg-background border-2 border-gray-200 rounded-lg
                     focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20
                     placeholder:text-text-light
                     transition-all duration-200"
          aria-label="Search news"
        />

        {/* Clear Button - Only show when there's text */}
        {searchValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-14 sm:right-16 p-1 text-text-secondary 
                       hover:text-text-primary transition-colors
                       focus:outline-none focus:ring-2 focus:ring-primary/50 rounded"
            aria-label="Clear search"
          >
            <MdClose className="w-5 h-5" />
          </button>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="absolute right-2 px-3 py-1.5 sm:px-4 sm:py-2
                     bg-primary text-white text-sm sm:text-base font-medium rounded-md
                     hover:bg-primary-dark transition-colors duration-200
                     focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                     disabled:opacity-50 disabled:cursor-not-allowed
                     active:scale-95"
          disabled={!searchValue.trim()}
          aria-label="Submit search"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

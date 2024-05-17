import "./search.css";
import Image from "../../../../images/magnifying.png";
const SearchFunction = () => {
  return (
    <div className="searchContainer">
      <input
        type="text"
        id="search"
        name="search"
        placeholder="Enter your query"
        className="searchInput"
      />
      <button className="searchBtn">
        <img src={Image.src} className="magnifyingIcon"></img>
      </button>
    </div>
  );
};

export default SearchFunction;

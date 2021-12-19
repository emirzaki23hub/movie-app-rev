import React, { useState } from "react";
import {
  Button
} from "react-bootstrap";
import './styles/Search.css'


const Search = (props) => {
  const [searchValue, setSearchValue] = useState("");
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input className="input"
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
          placeholder="Search Movies..."
        />
        <Button className="btn" onClick={callSearchFunction} type="submit" > Search </Button>
      </form>
    );
}

export default Search
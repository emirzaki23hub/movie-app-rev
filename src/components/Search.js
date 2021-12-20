import React, { useState } from "react";
import { Button, Form  } from "react-bootstrap";
import "../styles/Search.css";

const Search = (props) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const resetInputField = () => {
    setSearch("");
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(search);
    resetInputField();
  };

  return (
    <Form className="search">
      <input
        className="input"
        value={search}
        onChange={handleSearch}
        type="text"
        placeholder="Search Movies..."
      />
      <Button className="btn" onClick={callSearchFunction} type="submit">
        {" "}
        Search{" "}
      </Button>
    </Form>
  );
};

export default Search;

import React from "react";
import "./styles/Header.css";
import Search from "./Search";

function Header(props) {
  const { search } = props;
  return (
    <div className="header">
      <h1>{props.text}</h1>
      <Search search={search} />
    </div>
  );
}

export default Header;

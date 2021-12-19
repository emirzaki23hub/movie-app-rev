import React from "react";
import './styles/Header.css'

function Header(props) {
  return (
    <div className="header">
     <h1>{props.text}</h1>
     {/* <Search /> */}
    </div>
  );
}

export default Header;

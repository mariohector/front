import React from "react";
import logo from "../../img/logo.png";

const Header = (props) => {
  return (
    <header>
      <div className="holder">
        <img src={logo} width="100" alt="transportes X" />
        <h1>Transportes X</h1>
      </div>
    </header>
  );
}

export default Header;
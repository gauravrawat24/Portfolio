import React from "react";
import "./header.css";
import DCV from "./DCV";
import ME from "../../assets/me.png";
import Headericons from "./Headericons";

function Header() {
  return (
    <div>
      <header>
        <div className="container header_container">
          <h4>Hello I'm</h4>
          <h1>Gaurav Rawat</h1>
          <h4 className="text-light">Full Stack Web Developer</h4>
          <DCV />
          <Headericons />

          <div className="me">
            <img src={ME} alt="me" />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;

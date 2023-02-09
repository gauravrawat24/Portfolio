import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";

function Headericons() {
  return (
    <div className="header-icons">
      <a href="https://linkedin.com" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" target="_blank">
        <BsGithub />
      </a>
    </div>
  );
}

export default Headericons;

import React from "react";
import CV from "../../assets/CV.pdf";

function DCV() {
  return (
    <div className="dcv">
      <a href={CV} className='btn'>Resume</a>
      <a href="#contact" className="btn btn-primary" >Contact Me</a>
    </div>
  );
}

export default DCV;

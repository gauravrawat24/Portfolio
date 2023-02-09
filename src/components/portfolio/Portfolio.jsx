import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";



function Portfolio() {
  return (
    <div>
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio-container">
          <article className="portfolio-item">
            <div className="portfolio-images">
              <img src={IMG1} alt="" />
            </div>
            <h3>This is a portfolio item title</h3>
            <a href="" className="btn btn-primary">
              Github
            </a>
          </article>
         
         
         
        </div>
      </section>
    </div>
  );
}

export default Portfolio;

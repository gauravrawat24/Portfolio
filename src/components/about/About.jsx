import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <div>
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about-container">
          <div className="about-me">
            <div className="about-me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>

          <div className="about-content">
            <div className="about-cards">
              <article className="about-card">
                <FaAward className="about-icon" />
                <h5>Experience</h5>
                <small>Fresher</small>
              </article>

              <article className="about-card">
                <VscFolderLibrary className="about-icon" />
                <h5>Projects</h5>
                <small>2+</small>
              </article>
            </div>

            <p>
            “I am a self-starter with strong interpersonal skills. I work efficiently both as an individual contributor as well as along with a team. I seek new challenges and try to think out-of-the-box while looking for creative solutions to a given problem.
            </p>

            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

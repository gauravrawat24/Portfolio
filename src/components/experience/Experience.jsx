import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
function Experience() {
  return (
    <div>
      <section id="experience">
        <h5>What Skill I Have</h5>
        <h2>My Experience</h2>

        <div className="container experience-container">
          <div className="experience-frontend">
            <h3>Frontend Development</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icons"/>
                <div>
                <h4>HTML</h4>
                <small className="text-light">Advance</small>
                </div>
                
              </article>
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icons"/>
                <div>
                  <h4>CSS</h4>
                  <small className="text-light">Advance</small>

                  </div>
                
              </article>
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icons"/>
                <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Advance</small>

                </div>
                
              </article>
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icons"/>
                <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Basic</small>

                </div>
                
              </article>
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icons"/>
                <div>
                <h4>REACT JS</h4>
                <small className="text-light">Advance</small>

                </div>
                
              </article>
            </div>
          </div>

          <div className="experience-backend">
            <h3>Backend Development</h3>
            <div className="experience-content">
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icons"/>
                <div>
                <h4>NODE JS</h4>
                <small className="text-light">Basic</small>

                </div>
                
              </article>
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icons"/>
                <div>
                <h4>MONGODB</h4>
                <small className="text-light">Basic</small>

                </div>
                
              </article>
              <article className="experience-details">
                <BsFillPatchCheckFill className="experience-icons"/>
                <div>
                <h4>MYSQL</h4>
                <small className="text-light">Basic</small>

                </div>
                
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Experience;

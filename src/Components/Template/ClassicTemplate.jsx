import React from "react";
import "./ClassicTemplate.css";
const ClassicTemplate = ({}) => {
  return (
    <div className="classic-template">
      <header>
        <h3>Your Name </h3>

        <p>EmailId, Mobile No., Address</p>
      </header>
      <section>
        <h3>Work Experience</h3>

        <div>
          <h3>Company Name: </h3>
          <p>Duration:</p>
        </div>
      </section>
      <section>
        <h3>Projects</h3>

        <div>
          <h3>Title: </h3>
          <p>Duration: </p>
          <p>Description:</p>
        </div>
      </section>
      <section>
        <h3>Skills:</h3>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </section>
    </div>
  );
};

export default ClassicTemplate;

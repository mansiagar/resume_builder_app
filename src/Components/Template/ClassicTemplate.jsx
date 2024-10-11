import React from "react";
import "./ClassicTemplate.css";

const ClassicTemplate = ({ formData = {} }) => {
  const {
    personalInfo = {},
    experience = [],
    education = [],
    technicalSkills = [],
    softSkills = [],
  } = formData;

  return (
    <div>
      <div className="classic-template">
        <div className="left-side">
          <header>
            <h3
              style={{
                fontSize: "30px",
                color: "white",
                padding: "10px",
                margin: "10px",
              }}
            >
              {personalInfo.name || "Your Name"}
            </h3>
          </header>
          <hr></hr>
          <div style={{ padding: "5px" }}>
            <h3 className="heading">Contact </h3>
            <ul>
              <li> {`${personalInfo.email || "Email"}`}</li>
              <li>{`${personalInfo.contact || "Phone"}`}</li>
              <li>{`${personalInfo.linkedin || "LinkedIn"}`}</li>
            </ul>
          </div>
          <hr></hr>
          <section>
            <h3 className="heading">Technical Skills</h3>
            {technicalSkills.length > 0 ? (
              <ul>
                {technicalSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p style={{ fontSize: "12px" }}>No Technical Skills Added</p>
            )}

            <h3 className="heading">Soft Skills</h3>
            {softSkills.length > 0 ? (
              <ul>
                {softSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            ) : (
              <p style={{ fontSize: "12px" }}>No Soft Skills Added</p>
            )}
          </section>
        </div>
        <div className="right-side">
          <header>
            <h3>Summary</h3>
            <p>{`${personalInfo.summary || "No summary added"}`}</p>
          </header>
          <hr></hr>
          <section>
            <h3>Work Experience</h3>
            {experience.length > 0 ? (
              experience.map((experience, index) => (
                <div key={index}>
                  <h4>
                    {experience.jobTitle || "Job Title"} -{" "}
                    {experience.companyName || "Company Name"}
                  </h4>
                  <p>{experience.duration || "Duration"}</p>
                  <p>{experience.responsibilities || "Responsibilities"}</p>
                </div>
              ))
            ) : (
              <p>No Experience Added</p>
            )}
          </section>
          <hr></hr>

          <section>
            <h3>Education</h3>
            {education.length > 0 ? (
              education.map((edu) => (
                <div key={edu.id || edu.degree}>
                  <div>
                    <h4>{edu.Mdegree || "Your Degree"}</h4>
                    <p>{edu.Muniversity || "University"}</p>
                    <p>Year of Completion: {edu.MdegreeYear || "Year"}</p>
                    <p>GPA/Percentage: {edu.MdegreeGpa || "GPA/Percentage"}</p>
                  </div>
                  <div>
                    <h4>{edu.degree || "Your Degree"}</h4>
                    <p>{edu.university || "University"}</p>
                    <p>Year of Completion: {edu.degreeYear || "Year"}</p>
                    <p>GPA/Percentage: {edu.degreeGpa || "GPA/Percentage"}</p>
                  </div>
                  <div>
                    <h4>12th Grade</h4>
                    <p>
                      School: {edu.twelfthSchool || "Your 12th Grade School"}
                    </p>
                    <p>Year of Completion: {edu.twelfthYear || "Year"}</p>
                    <p>GPA/Percentage: {edu.twelfthGpa || "GPA/Percentage"}</p>
                  </div>
                  <div>
                    <h4>10th Grade</h4>
                    <p>School: {edu.tenthSchool || "Your 10th Grade School"}</p>
                    <p>Year of Completion: {edu.tenthYear || "Year"}</p>
                    <p>GPA/Percentage: {edu.tenthGpa || "GPA/Percentage"}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No Education Added</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};

export default ClassicTemplate;

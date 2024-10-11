import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import ClassicTemplate from "../Template/ClassicTemplate";
import ModernTemplate from "../Template/ModernTemplate";
import NavBar from "../PdfDownloadNav/Navbar";

const MyResume = () => {
  const location = useLocation();
  const { selectedTemplate, formData } = location.state || {};
  const resumeRef = useRef(null); // Reference to the resume content

  const renderTemplate = () => {
    if (selectedTemplate === "ClassicTemplate") {
      return <ClassicTemplate formData={formData} />;
    } else if (selectedTemplate === "ModernTemplate") {
      return <ModernTemplate formData={formData} />;
    } else {
      return <p>No template selected.</p>;
    }
  };

  return (
    <div>
      <NavBar resumeRef={resumeRef} />
      <div className="resume-container" ref={resumeRef}>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default MyResume;

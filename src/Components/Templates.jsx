import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ClassicTemplate from "./Template/ClassicTemplate"; // Assuming this is your template component
import ModernTemplate from "./Template/ModernTemplate";
import "./Template.css";
import { Button } from "antd";
import Nav2 from "./Nav2";

const Templates = ({ setSelectedTemplate }) => {
  const [selectedTemplate, setSelectedTemplateState] = useState(""); // Local state to track the selected template
  const navigate = useNavigate();

  const handleTemplateClick = (template) => {
    setSelectedTemplateState(template); // Update local state
    setSelectedTemplate(template); // Update parent component state
  };

  const handleChooseTemplate = () => {
    navigate("/UserForm");
  };

  return (
    <div>
      <Nav2 />
      <div className="Template">
        <div className="first-template">
          <div
            className={`template-div ${
              selectedTemplate === "ClassicTemplate" ? "selected" : ""
            }`}
            onClick={() => handleTemplateClick("ClassicTemplate")} // Handle template click
            style={{
              border:
                selectedTemplate === "ClassicTemplate"
                  ? "2px solid #553CDF"
                  : "1px solid #ccc", // Highlight border
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <ClassicTemplate />
          </div>
        </div>
        {/* Second template (Modern) */}
        <div className="Second-template">
          <div
            className={`template-div ${
              selectedTemplate === "ModernTemplate" ? "selected" : ""
            }`} // Conditional class
            onClick={() => handleTemplateClick("ModernTemplate")} // Handle template click
            style={{
              border:
                selectedTemplate === "ModernTemplate"
                  ? "2px solid #553CDF"
                  : "1px solid #ccc", // Highlight border
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            <ModernTemplate />
          </div>
        </div>
      </div>
      {/* Single button to choose selected template */}
      {selectedTemplate && (
        <div className="choose-template-btn">
          <Button
            type="primary"
            size="large"
            style={{
              backgroundColor: "#553CDF",
              color: "#fff",
              borderRadius: "4px",
              transition: "0.3s",
              fontWeight: "500",
              width: "200px",
            }}
            onClick={handleChooseTemplate}
          >
            {`Choose ${selectedTemplate}`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Templates;

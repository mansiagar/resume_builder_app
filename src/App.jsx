import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import PersonalInfoForm from "./Components/UserForm/Components/PersonalInfoForm";
import ExperienceForm from "./Components/UserForm/Components/ExperienceForm";
import EducationForm from "./Components/UserForm/Components/EducationForm";
import SkillsForm from "./Components/UserForm/Components/SkillsForm";
import Home from "./Components/Home/Home";
import Templates from "./Components/Templates";
import ClassicTemplate from "./Components/Template/ClassicTemplate";
import "antd/dist/reset.css";
import "./App.css";
import UserForm from "./UserFrom";
import ModernTemplate from "./Components/Template/ModernTemplate";
import MyResume from "./Components/MyResume/MyResume";

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: {},
    experience: [],
    education: [],
    skills: [],
    certifications: [],
    projects: [],
    languages: [],
    hobbies: [],
  });

  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const steps = [
    {
      title: "Personal Info",
      content: (
        <PersonalInfoForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      ),
    },
    {
      title: "Experience",
      content: (
        <ExperienceForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      ),
    },
    {
      title: "Education",
      content: (
        <EducationForm
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      ),
    },
    {
      title: "Skills",
      content: <SkillsForm formData={formData} setFormData={setFormData} />,
    },
  ];

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Templates"
          element={<Templates setSelectedTemplate={setSelectedTemplate} />}
        />
        <Route
          path="/UserForm"
          element={
            <UserForm
              steps={steps}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              formData={formData}
              setFormData={setFormData}
              selectedTemplate={selectedTemplate}
            />
          }
        />
        <Route
          path="/render-classic-template"
          element={
            selectedTemplate === "ClassicTemplate" && (
              <ClassicTemplate formData={formData} />
            )
          }
        />
        <Route
          path="/render-modern-template"
          element={
            selectedTemplate === "ModernTemplate" && (
              <ModernTemplate formData={formData} />
            )
          }
        />
        <Route path="/My_Resume" element={<MyResume />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

// import React from "react";
// import { HashRouter, Route, Routes } from "react-router-dom";
// import Home from "./Components/Home/Home";
// import Templates from "./Components/Templates";


// const App = () => {
//   return (
//     <HashRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Templates" element={<Templates />} />
//       </Routes>
//     </HashRouter>
//   );
// };

// export default App;
import React, { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Form, Button, Steps } from 'antd';
import PersonalInfoForm from './Components/UserForm/Components/PersonalInfoForm';
import ExperienceForm from './Components/UserForm/Components/ExperienceForm';
import EducationForm from './Components/UserForm/Components/EducationForm';
import SkillsForm from './Components/UserForm/Components/SkillsForm';
import Home from './Components/Home/Home';
import Templates from './Components/Templates';
import 'antd/dist/reset.css';
import './App.css';

const { Step } = Steps;

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

  const steps = [
    { title: 'Personal Info', content: <PersonalInfoForm formData={formData} setFormData={setFormData} /> },
    { title: 'Experience', content: <ExperienceForm formData={formData} setFormData={setFormData} /> },
    { title: 'Education', content: <EducationForm formData={formData} setFormData={setFormData} /> },
    { title: 'Skills', content: <SkillsForm formData={formData} setFormData={setFormData} /> },
  ];

  const next = () => setCurrentStep(currentStep + 1);
  const prev = () => setCurrentStep(currentStep - 1);

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Templates" element={<Templates />} />
        <Route path="/UserForm" element={
          <div className="resume-builder">
            <Steps current={currentStep}>
              {steps.map((step, index) => <Step key={index} title={step.title} />)}
            </Steps>
            <div className="form-content">{steps[currentStep].content}</div>
            <div className="form-navigation">
              {currentStep < steps.length - 1 && <Button type="primary" onClick={next}>Next</Button>}
              {currentStep === steps.length - 1 && <Button type="primary">Submit</Button>}
              {currentStep > 0 && <Button onClick={prev}>Previous</Button>}
            </div>
          </div>
        } />
      </Routes>
    </HashRouter>
  );
}

export default App;

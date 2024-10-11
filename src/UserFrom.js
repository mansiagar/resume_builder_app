import React from "react";
import { Steps, Button } from "antd";
import { useNavigate } from "react-router-dom";
const { Step } = Steps;

const UserForm = ({
  steps,
  currentStep,
  setCurrentStep,
  formData,
  setFormData,
  selectedTemplate,
}) => {
  const navigate = useNavigate();

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const handleSubmit = () => {
    if (selectedTemplate) {
      navigate(`/My_Resume`, { state: { selectedTemplate, formData } });
    } else {
      alert("Please select a template before submitting.");
    }
  };

  return (
    <div className="resume-builder">
      <Steps current={currentStep}>
        {steps.map((step, index) => (
          <Step key={index} title={step.title} />
        ))}
      </Steps>
      <div className="form-content">{steps[currentStep].content}</div>
      <div className="form-navigation">
        {currentStep === steps.length - 1 && (
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        )}
        {currentStep > 0 && <Button onClick={prevStep}>Previous</Button>}
      </div>
    </div>
  );
};

export default UserForm;

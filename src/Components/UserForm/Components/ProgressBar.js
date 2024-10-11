import React from "react";
import { Progress } from "antd";

function ProgressBar({ currentStep, totalSteps }) {
  const percentComplete = (currentStep / totalSteps) * 100;

  return (
    <div className="progress-bar">
      <Progress percent={percentComplete} status="active" />
    </div>
  );
}

export default ProgressBar;

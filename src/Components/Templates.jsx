// import React from "react";
// import { Button } from "antd";
// import ClassicTemplate from "./Template/ClassicTemplate";
// import "./Template.css";
// import { useNavigate } from "react-router-dom";
// import Nav2 from "./Nav2";
// const Templates = () => {
//   const navigate = useNavigate();
//   const handleClick = () => {
//     navigate("/UserForm");
//   };
//   return (
//     <>
//       <Nav2 />
//       <div className="Template">
//         <div className="first-template">
//           <ClassicTemplate />
//         </div>
//         <div className="first-template">
//           <ClassicTemplate />
//         </div>
//       </div>
//       <Button className="btn" onClick={handleClick}>
//         Choose Template
//       </Button>
//     </>
//   );
// };

// export default Templates;

import React from "react";
import { Button } from "antd";
import ClassicTemplate from "./Template/ClassicTemplate";
import "./Template.css";
import { useNavigate } from "react-router-dom";
import Nav2 from "./Nav2";

const Templates = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/personal-info"); // Navigate to the first form step (PersonalInfoForm)
  };

  return (
    <>
      <Nav2 />
      <div className="Template">
        <div className="first-template">
          <ClassicTemplate />
        </div>
        <div className="first-template">
          <ClassicTemplate />
        </div>
      </div>
      <Button className="btn" onClick={handleClick}>
        Choose Template
      </Button>
    </>
  );
};

export default Templates;

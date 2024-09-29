import React from "react";
import { Menu } from "antd";
import { Button } from "antd";
import "./Nav.css";
import logo from "../Assets/Logo.jpg";
import ClassicTemplate from "./Template/ClassicTemplate";
import "./Template.css";
import { useNavigate } from "react-router-dom";

const Templates = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/UserForm");
  };
  return (
    <>
      <Menu mode="horizontal" className="container">
        <div className="logo">
          <Menu.Item key="logo">
            <img src={logo} alt="Resume BUilder App" className="logo-img" />
          </Menu.Item>
        </div>
        <div className="right-align">
          <Menu.Item>
            <Button className="btn">Home</Button>
          </Menu.Item>
        </div>
      </Menu>
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

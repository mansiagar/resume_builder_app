import React from "react";
import { Menu } from "antd";
import { Button } from "antd";
import "./Nav.css";
import logo from "../Assets/Engineer_StudyHub_-removebg-preview.png";

import "./Template.css";
import { useNavigate } from "react-router-dom";
const Nav2 = () => {
  const navigate = useNavigate();
  const handleclick = () => {
    navigate("/");
  };
  const handleOnclick = () => {
    navigate("/My_Resume");
  };
  return (
    <div>
      <Menu mode="horizontal" className="container">
        <div className="logo">
          <Menu.Item key="logo">
            <img
              src={logo}
              alt="Resume BUilder App"
              className="logo-img"
              style={{ width: "150px" }}
            />
          </Menu.Item>
        </div>
        <div className="right-align">
          <Menu.Item>
            <Button className="btn" onClick={handleclick}>
              Home
            </Button>
            <Button className="btn" onClick={handleOnclick}>
              My Resume
            </Button>
          </Menu.Item>
        </div>
      </Menu>
    </div>
  );
};

export default Nav2;

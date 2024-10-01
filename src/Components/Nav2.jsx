import React from "react";
import { Menu } from "antd";
import { Button } from "antd";
import "./Nav.css";
import logo from "../Assets/RESUME_LOGO.jpg";

import "./Template.css";
const Nav2 = () => {
  return (
    <div>
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
          <Menu.Item>
            <Button className="btn">My Resume</Button>
          </Menu.Item>
        </div>
      </Menu>
    </div>
  );
};

export default Nav2;

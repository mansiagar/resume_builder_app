import React from "react";
import { Menu } from "antd";
import { Button } from "antd";
import "./Nav.css";
import logo from "../Assets/RESUME_LOGO.jpg";
const Nav = () => {
  return (
    <Menu mode="horizontal" className="container">
      <div className="logo">
        <Menu.Item key="logo">
          <img src={logo} alt="Resume BUilder App" className="logo-img" />
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default Nav;

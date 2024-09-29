import React from "react";
import { Menu } from "antd";
import { Button } from "antd";
import "./Nav.css";
import logo from "../Assets/Logo.jpg";
const Nav = () => {
  return (
    <Menu mode="horizontal" className="container">
      <div className="logo">
        <Menu.Item key="logo">
          <img src={logo} alt="Resume BUilder App" className="logo-img" />
        </Menu.Item>
      </div>
      <div className="right-align">
        <Menu.Item>
          <Button className="btn">Sign Up</Button>
        </Menu.Item>
        <Menu.Item>
          <Button className="btn">Login</Button>
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default Nav;

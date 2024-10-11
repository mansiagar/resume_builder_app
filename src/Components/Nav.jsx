import React from "react";
import { Menu } from "antd";
import "./Nav.css";
import logo from "../Assets/Engineer_StudyHub_-removebg-preview.png";
const Nav = () => {
  return (
    <Menu mode="horizontal" className="container">
      <div className="logo">
        <Menu.Item key="logo">
          <img src={logo} alt="logo" style={{ width: "150px" }} />
        </Menu.Item>
      </div>
    </Menu>
  );
};

export default Nav;

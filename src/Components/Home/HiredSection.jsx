import React from "react";
import "./Home.css";

import {
  GooglePlusOutlined,
  AmazonOutlined,
  AppstoreOutlined,
  WindowsOutlined,
} from "@ant-design/icons";

function Hired() {
  return (
    <div className="highlights flex">
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <WindowsOutlined style={{ fontSize: 30, padding: "10px 0px" }} />
          <h1>Microsoft </h1>
        </div>
      </div>
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <GooglePlusOutlined style={{ fontSize: 30, padding: "10px 0px" }} />
          <h1>Google</h1>
        </div>
      </div>
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <AmazonOutlined style={{ fontSize: 30, padding: "10px 0px" }} />
          <h1>Amazon</h1>
        </div>
      </div>
      <div
        className="highlight-container flex"
        style={{ flexDirection: "column" }}
      >
        <div className="highlight-content">
          <AppstoreOutlined style={{ fontSize: 30, padding: "10px 0px" }} />

          <h1>Flipkart</h1>
        </div>
      </div>
    </div>
  );
}

export default Hired;

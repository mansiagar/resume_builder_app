import React, { useRef } from "react";
import { Menu, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import "./Navbar.css";

const NavBar = ({ resumeRef }) => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const resumeElement = resumeRef.current;

    const options = {
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(resumeElement).set(options).save();
  };

  return (
    <div className="navbar">
      <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home" onClick={() => navigate("/")}>
          Home
        </Menu.Item>
        <Menu.Item key="templates" onClick={() => navigate("/templates")}>
          Templates
        </Menu.Item>
      </Menu>

      <div className="download-button">
        <Button
          type="primary"
          icon={<DownloadOutlined />}
          onClick={handleDownload}
        >
          Download
        </Button>
      </div>
    </div>
  );
};

export default NavBar;

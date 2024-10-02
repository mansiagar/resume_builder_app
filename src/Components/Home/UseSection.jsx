import React from "react";
import { Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import Resume2 from "../../Assets/resume2.png";
const UseSection = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Templates");
  };
  return (
    <div>
      <Row
        className="slide-content"
        justify="space-between"
        align="middle"
        style={{
          backgroundColor: "#CECEF4",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          margin: 0,
        }}
      >
        <Col span={12}>
          <div className="left-section">
            <div>
              <h1 style={{ color: "#13167E", fontSize: "40px" }}>
                Use the best Resume Maker As Your Guide
              </h1>
            </div>
            <div className="buttons">
              <Button
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#553CDF",
                  color: "#fff",
                  marginRight: "10px",
                  padding: "14px 34px",
                  borderRadius: "4px",
                  transition: "0.3s",
                  fontWeight: "500",
                  width: "150px",
                  marginTop: "100px",
                }}
                onClick={handleClick}
              >
                Create CV
              </Button>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="right-section">
            <img
              src={Resume2}
              alt="Resume"
              className="student-image"
              style={{ height: "80%", maxWidth: 400 }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default UseSection;

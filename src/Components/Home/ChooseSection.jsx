import React from "react";
import { Button, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

const ChooseSection = () => {
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
              <h2
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#13167E",
                  marginRight: "20px",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                Easy Online Buider
              </h2>
            </div>
            <div>
              <h2
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#13167E",
                  marginRight: "20px",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                Create Job Winnig Resumes
              </h2>
            </div>
            <div>
              <h2
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#13167E",
                  marginRight: "20px",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                Export to any anything
              </h2>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div className="right-section">
            <h1 style={{ marginBottom: "100px" }}>Why Choose Us?</h1>
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
        </Col>
      </Row>
    </div>
  );
};

export default ChooseSection;

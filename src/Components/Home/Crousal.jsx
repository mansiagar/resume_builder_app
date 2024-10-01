import React from "react";
import { Button, Carousel, Typography, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

import Resume from "../../Assets/Resume.jpg";

const { Title, Paragraph } = Typography;

const Crousal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Templates");
  };
  return (
    <Carousel autoplay>
      {/* Slide 1 */}
      <div className="slide-container">
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
              <Title
                level={1}
                className="slide-heading"
                style={{
                  fontSize: "50px",
                  color: "#221859",
                  fontWeight: "600",
                  lineHeight: "66px",
                  marginTop: "10px",
                  position: "relative",
                  fontFamily: "Hind",
                }}
              >
                Online Resume Builder
                <br />
                with{" "}
                <span
                  style={{
                    fontSize: "50px",
                    fontWeight: "bold",
                    lineHeight: "66px",
                    background: "linear-gradient(45deg, #5B2F91, #3F7DAA)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    color: "transparent",
                    // textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
                    letterSpacing: "1px",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  Creative Templates
                </span>
              </Title>
              <Paragraph
                className="slide-title"
                style={{
                  fontSize: "18px",
                  color: "#737477",
                  width: "80%",
                  marginTop: "-19px",
                }}
              >
                The app allows users to input their personal information,
                education, work experience, and skills into customizable
                templates, ensuring their resume stands out. With real-time
                preview features, users can instantly see how their resume will
                look and make adjustments accordingly. Once the resume is ready,
                it can be downloaded in a clean, professional format, ready for
                job applications.
              </Paragraph>
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
                src={Resume}
                alt="Resume"
                className="student-image"
                style={{ height: "100%", maxWidth: 600 }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default Crousal;

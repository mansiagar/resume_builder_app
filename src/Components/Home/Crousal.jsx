import React from "react";
import { Button, Carousel, Typography, Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import Resume from "../../Assets/Resume.png";
import "./Crousal.css"; // Importing the external CSS file

const { Title, Paragraph } = Typography;

const Crousal = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Templates");
  };

  return (
    <Carousel autoplay>
      <div className="slide-container">
        <Row className="slide-content">
          <Col span={12}>
            <div className="left-section">
              <Title className="slide-heading">Online Resume Builder</Title>
              <Paragraph className="slide-title">
                The app allows users to input their personal information,
                education, work experience, and skills into customizable
                templates.
              </Paragraph>
              <div className="buttons">
                <Button
                  type="primary"
                  className="create-button"
                  onClick={handleClick}
                >
                  Create CV
                </Button>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <img src={Resume} alt="Resume" className="student-image" />
          </Col>
        </Row>
      </div>
    </Carousel>
  );
};

export default Crousal;

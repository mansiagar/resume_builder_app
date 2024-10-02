import React from "react";
import { Row, Col } from "antd";
import { Card, Space } from "antd";
import { StarOutlined } from "@ant-design/icons";

const CardBox = () => {
  return (
    <div>
      <Row
        className="slide-content"
        justify="space-between"
        align="middle"
        style={{
          backgroundColor: "#553cdf",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: 0,
        }}
      >
        <Col span={8}>
          <div>
            <Space>
              <Card
                style={{
                  width: 300,
                }}
              >
                <h3>Mansi</h3>
                <div>
                  <StarOutlined
                    style={{ fontSize: "24px", color: "#fadb14" }}
                  />
                  <StarOutlined
                    style={{ fontSize: "24px", color: "#fadb14" }}
                  />
                  <StarOutlined
                    style={{ fontSize: "24px", color: "#fadb14" }}
                  />
                </div>
                <p>
                  Very intuitive interface, and I managed to create a resume
                  quickly. However, adding an auto-save feature would make the
                  experience smoother.
                </p>
              </Card>
            </Space>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Space>
              <Card
                style={{
                  width: 300,
                }}
              >
                <h3>Mansi</h3>
                <div>
                  <StarOutlined
                    style={{ fontSize: "24px", color: "#fadb14" }}
                  />
                  <StarOutlined
                    style={{ fontSize: "24px", color: "#fadb14" }}
                  />
                  <StarOutlined
                    style={{ fontSize: "24px", color: "#fadb14" }}
                  />
                </div>
                <p>
                  Great app! The real-time preview feature is awesome. I would
                  love to see customization options like changing font styles
                  and colors.
                </p>
              </Card>
            </Space>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Space>
              <Card
                style={{
                  width: 300,
                }}
              >
                <h3>Mansi</h3>
                <div>
                  <StarOutlined
                    style={{ fontSize: "24px", color: "#fadb14" }}
                  />
                  <StarOutlined
                    style={{ fontSize: "24px", color: "#fadb14" }}
                  />
                  <StarOutlined
                    style={{ fontSize: "24px", color: "#fadb14" }}
                  />
                </div>
                <p>
                  Nice app! It was easy to create my resume, but I think more
                  customization options like adding social media links and
                  portfolio sections would be helpful.
                </p>
              </Card>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CardBox;

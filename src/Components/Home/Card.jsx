import React from "react";
import { Row, Col } from "antd";
import { Card, Space } from "antd";
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
          margin: 0,
        }}
      >
        <Col span={8}>
          <div>
            <Space direction="vertical">
              <Card
                title="Default size card"
                extra={<a href="/">More</a>}
                style={{
                  width: 200,
                }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Space direction="vertical" size={16}>
              <Card
                title="Default size card"
                extra={<a href="/">More</a>}
                style={{
                  width: 200,
                }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Space direction="vertical" size={16}>
              <Card
                title="Default size card"
                extra={<a href="/">More</a>}
                style={{
                  width: 200,
                }}
              >
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CardBox;

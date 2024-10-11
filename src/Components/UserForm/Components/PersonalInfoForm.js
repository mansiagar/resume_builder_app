import React from "react";
import { Form, Input, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

function PersonalInfoForm({ formData, setFormData, nextStep }) {
  const onFinish = (values) => {
    setFormData({ ...formData, personalInfo: values });
    nextStep();
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={formData.personalInfo}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please enter your name" }]}
      >
        <Input placeholder="Enter your name" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please enter your email" }]}
      >
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item
        label="Contact"
        name="contact"
        rules={[
          { required: true, message: "Please enter your contact number" },
        ]}
      >
        <Input placeholder="Enter your contact number" />
      </Form.Item>
      <Form.Item label="LinkedIn" name="linkedin">
        <Input placeholder="Enter your LinkedIn URL" />
      </Form.Item>
      {/* <Form.Item label="Profile Picture" name="profilePicture">
        <Upload>
          <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
        </Upload>
      </Form.Item> */}
      <Form.Item
        label="Summary"
        name="summary"
        rules={[{ required: true, message: "Please enter a summary" }]}
      >
        <Input.TextArea placeholder="Enter a brief summary about yourself" />
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        style={{
          backgroundColor: "#553CDF",
          color: "#fff",
          marginRight: "10px",

          borderRadius: "4px",
          transition: "0.3s",
          fontWeight: "500",
          width: "150px",
        }}
      >
        Save & Next{" "}
      </Button>
    </Form>
  );
}

export default PersonalInfoForm;

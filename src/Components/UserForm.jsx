import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
import { Button, DatePicker, Form, Input, Select, TreeSelect } from "antd";
const UserForm = ({ onSubmit }) => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ firstName: "", lastName: "" });
    // navigate("/Resume");
  };
  //const navigate = useNavigate();
  return (
    <Form
      onFinish={handleSubmit}
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item>
        {/* <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group> */}
      </Form.Item>
      <Form.Item label="FirstName">
        <Input onChange={handleChange} value={formData.firstName} />
      </Form.Item>
      <Form.Item label="LastName">
        <Input onChange={handleChange} value={formData.lastName} />
      </Form.Item>
      <Form.Item label="EmailId">
        <Input />
      </Form.Item>
      <Form.Item label="Mobile No.">
        <Input />
      </Form.Item>
      <Form.Item label="Select">
        <Select>
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="Female">Female</Select.Option>
          <Select.Option value="Other">Other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Country">
        <TreeSelect
          treeData={[
            {
              title: "India",
              value: "india",
              children: [
                {
                  title: "Madhay Pradhesh",
                  value: "Madhay Pradhesh",
                },
                {
                  title: "Rajshthan",
                  value: "Rajshthan",
                },
              ],
            },
          ]}
        />
      </Form.Item>

      <Form.Item label="DatePicker">
        <DatePicker />
      </Form.Item>

      <Form.Item label="Button">
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default UserForm;

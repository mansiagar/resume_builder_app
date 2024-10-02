import React from 'react';
import { Form, Input, Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function PersonalInfoForm({ formData, setFormData }) {
  const onFinish = (values) => {
    setFormData({ ...formData, personalInfo: values });
  };

  return (
    <Form layout="vertical" onFinish={onFinish} initialValues={formData.personalInfo}>
      <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
        <Input placeholder="Enter your name" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
        <Input placeholder="Enter your email" />
      </Form.Item>
      <Form.Item label="Contact" name="contact" rules={[{ required: true, message: 'Please enter your contact number' }]}>
        <Input placeholder="Enter your contact number" />
      </Form.Item>
      <Form.Item label="LinkedIn" name="linkedin">
        <Input placeholder="Enter your LinkedIn URL" />
      </Form.Item>
      <Form.Item label="Profile Picture" name="profilePicture">
        <Upload>
          <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
        </Upload>
      </Form.Item>
      <Button type="primary" htmlType="submit">Save</Button>
    </Form>
  );
}

export default PersonalInfoForm;

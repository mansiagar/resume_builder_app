import React, { useState } from 'react';
import { Form, Input, Button, Space } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

function ExperienceForm({ formData, setFormData, nextStep, prevStep }) {
  const [form] = Form.useForm();

  // Initialize experiences from formData or set to one empty experience
  const [experiences, setExperiences] = useState(formData.experiences || [{ jobTitle: '', companyName: '', duration: '', responsibilities: '' }]);

  const onFinish = (values) => {
    const updatedData = {
      ...formData,
      experiences: values.experiences,
    };
    setFormData(updatedData);
    nextStep(); // Proceed to the next step
  };

  // Handle the addition of a new experience field
  const addExperience = () => {
    setExperiences([...experiences, { jobTitle: '', companyName: '', duration: '', responsibilities: '' }]);
  };

  // Handle the removal of an experience field
  const removeExperience = (index) => {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setExperiences(updatedExperiences);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        experiences: formData.experiences || experiences,
      }}
    >
      {/* Dynamic Experience Section */}
      {experiences.map((experience, index) => (
        <Space key={index} direction="vertical" style={{ display: 'flex', marginBottom: 8 }}>
          <Form.Item
            label={`Job Title ${index + 1}`}
            name={['experiences', index, 'jobTitle']}
            rules={[{ required: true, message: 'Please enter your job title' }]}
          >
            <Input placeholder="Enter your job title" />
          </Form.Item>

          <Form.Item
            label={`Company Name ${index + 1}`}
            name={['experiences', index, 'companyName']}
            rules={[{ required: true, message: 'Please enter the company name' }]}
          >
            <Input placeholder="Enter the company name" />
          </Form.Item>

          <Form.Item
            label={`Duration ${index + 1}`}
            name={['experiences', index, 'duration']}
            rules={[{ required: true, message: 'Please enter the duration' }]}
          >
            <Input placeholder="Enter the duration (e.g., Jan 2020 - Dec 2022)" />
          </Form.Item>

          <Form.Item
            label={`Job Responsibilities ${index + 1}`}
            name={['experiences', index, 'responsibilities']}
            rules={[{ required: true, message: 'Please enter the job responsibilities' }]}
          >
            <Input.TextArea placeholder="Enter your job responsibilities" rows={4} />
          </Form.Item>

          {/* Remove Experience Button */}
          {experiences.length > 1 && (
            <Button
              type="danger"
              onClick={() => removeExperience(index)}
              icon={<MinusCircleOutlined />}
              style={{ marginBottom: '20px' }}
            >
              Remove Experience
            </Button>
          )}
        </Space>
      ))}

      {/* Add Experience Button */}
      <Form.Item>
        <Button type="dashed" onClick={addExperience} block icon={<PlusOutlined />}>
          Add Experience
        </Button>
      </Form.Item>

      <Button type="primary" htmlType="submit">Save</Button>
    </Form>
  );
}

export default ExperienceForm;

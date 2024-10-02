import React from 'react';
import { Form, Select, Button } from 'antd';

const { Option } = Select;

function SkillsForm({ formData, setFormData, nextStep, prevStep }) {
  const [form] = Form.useForm();

  const technicalSkillsOptions = [
    'JavaScript', 'React.js', 'Node.js', 'Python', 'HTML', 'CSS', 'MongoDB', 'SQL', 'Git',
    'Docker', 'Kubernetes', 'C++', 'Java', 'Angular', 'Vue.js', 'AWS', 'Azure', 'Linux',
    'Data Analysis', 'Machine Learning', 'TensorFlow', 'TypeScript', 'Go', 'GraphQL', 'SASS', 'Next.js'
  ];

  const softSkillsOptions = [
    'Communication', 'Teamwork', 'Problem Solving', 'Leadership', 'Adaptability', 'Creativity',
    'Work Ethic', 'Time Management', 'Conflict Resolution', 'Critical Thinking', 'Decision Making',
    'Emotional Intelligence', 'Negotiation', 'Collaboration', 'Empathy', 'Listening', 'Stress Management'
  ];

  const onFinish = (values) => {
    const updatedData = { 
      ...formData, 
      technicalSkills: values.technicalSkills, 
      softSkills: values.softSkills 
    };
    setFormData(updatedData);
    nextStep(); // Proceed to the next step
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} initialValues={{ 
      technicalSkills: formData.technicalSkills || [], 
      softSkills: formData.softSkills || [] 
    }}>
      
      {/* Technical Skills */}
      <Form.Item label="Technical Skills" name="technicalSkills">
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Select or type your technical skills"
          defaultValue={formData.technicalSkills || []}
        >
          {technicalSkillsOptions.map((skill) => (
            <Option key={skill} value={skill}>
              {skill}
            </Option>
          ))}
        </Select>
      </Form.Item>

      {/* Soft Skills */}
      <Form.Item label="Soft Skills" name="softSkills">
        <Select
          mode="tags"
          style={{ width: '100%' }}
          placeholder="Select or type your soft skills"
          defaultValue={formData.softSkills || []}
        >
          {softSkillsOptions.map((skill) => (
            <Option key={skill} value={skill}>
              {skill}
            </Option>
          ))}
        </Select>
      </Form.Item>
    </Form>
  );
}

export default SkillsForm;

import React from "react";
import { Form, Input, Button } from "antd";

function EducationForm({ formData, setFormData, nextStep, prevStep }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    const updatedEducation = [...(formData.education || []), values];
    setFormData({ ...formData, education: updatedEducation });
    console.log(formData); // This might log the previous state, as `setFormData` is async.
    console.log("Submitted Education Data: ", values);
    console.log("Updated Form Data: ", {
      ...formData,
      education: updatedEducation,
    });

    nextStep();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        degree: formData.degree || "",
        university: formData.university || "",
        degreeYear: formData.degreeYear || "",
        degreeGpa: formData.degreeGpa || "",
        twelfthSchool: formData.twelfthSchool || "",
        twelfthYear: formData.twelfthYear || "",
        twelfthGpa: formData.twelfthGpa || "",
        tenthSchool: formData.tenthSchool || "",
        tenthYear: formData.tenthYear || "",
        tenthGpa: formData.tenthGpa || "",
      }}
    >
      {/* Master Degree Section */}
      <Form.Item
        label="Degree"
        name="Mdegree"
        rules={[{ message: "Please enter your Mater degree" }]}
      >
        <Input placeholder="Enter your degree (e.g., M.Tech, M.Sc, etc.)" />
      </Form.Item>

      <Form.Item
        label="University"
        name="Muniversity"
        rules={[{ message: "Please enter your university" }]}
      >
        <Input placeholder="Enter your university name" />
      </Form.Item>

      <Form.Item
        label="Year of Completion"
        name="MdegreeYear"
        rules={[{ message: "Please enter the year of completion" }]}
      >
        <Input placeholder="Enter the year of completion (e.g., 2023)" />
      </Form.Item>

      <Form.Item
        label="GPA/Percentage"
        name="MdegreeGpa"
        rules={[{ message: "Please enter your GPA or percentage" }]}
      >
        <Input placeholder="Enter your GPA or percentage" />
      </Form.Item>
      {/* Bachlor Degree Section */}
      <Form.Item
        label="Degree"
        name="degree"
        rules={[
          { required: true, message: "Please enter your  Bachlor degree" },
        ]}
      >
        <Input placeholder="Enter your degree (e.g., B.Tech, B.Sc, etc.)" />
      </Form.Item>

      <Form.Item
        label="University"
        name="university"
        rules={[{ required: true, message: "Please enter your university" }]}
      >
        <Input placeholder="Enter your university name" />
      </Form.Item>

      <Form.Item
        label="Year of Completion"
        name="degreeYear"
        rules={[
          { required: true, message: "Please enter the year of completion" },
        ]}
      >
        <Input placeholder="Enter the year of completion (e.g., 2023)" />
      </Form.Item>

      <Form.Item
        label="GPA/Percentage"
        name="degreeGpa"
        rules={[
          { required: true, message: "Please enter your GPA or percentage" },
        ]}
      >
        <Input placeholder="Enter your GPA or percentage" />
      </Form.Item>

      {/* 12th Grade Section */}
      <Form.Item
        label="12th Grade School"
        name="twelfthSchool"
        rules={[
          { required: true, message: "Please enter your 12th school name" },
        ]}
      >
        <Input placeholder="Enter your 12th grade school name" />
      </Form.Item>

      <Form.Item
        label="Year of Completion (12th)"
        name="twelfthYear"
        rules={[
          { required: true, message: "Please enter the year of completion" },
        ]}
      >
        <Input placeholder="Enter the year of completion for 12th grade (e.g., 2018)" />
      </Form.Item>

      <Form.Item
        label="GPA/Percentage (12th)"
        name="twelfthGpa"
        rules={[
          {
            required: true,
            message: "Please enter your GPA or percentage for 12th grade",
          },
        ]}
      >
        <Input placeholder="Enter your GPA or percentage for 12th grade" />
      </Form.Item>

      {/* 10th Grade Section */}
      <Form.Item
        label="10th Grade School"
        name="tenthSchool"
        rules={[
          { required: true, message: "Please enter your 10th school name" },
        ]}
      >
        <Input placeholder="Enter your 10th grade school name" />
      </Form.Item>

      <Form.Item
        label="Year of Completion (10th)"
        name="tenthYear"
        rules={[
          { required: true, message: "Please enter the year of completion" },
        ]}
      >
        <Input placeholder="Enter the year of completion for 10th grade (e.g., 2016)" />
      </Form.Item>

      <Form.Item
        label="GPA/Percentage (10th)"
        name="tenthGpa"
        rules={[
          {
            required: true,
            message: "Please enter your GPA or percentage for 10th grade",
          },
        ]}
      >
        <Input placeholder="Enter your GPA or percentage for 10th grade" />
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
        Save & Next
      </Button>
    </Form>
  );
}

export default EducationForm;

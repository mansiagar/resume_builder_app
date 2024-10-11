import React from "react";
import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

function ExperienceForm({ formData, setFormData, nextStep }) {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Submitted Values:", values); // Log submitted values

    // Set the experience in formData, starting from index 0
    setFormData({ ...formData, experience: values.experience });
    nextStep();
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        experience: formData.experience || [
          { jobTitle: "", companyName: "", duration: "", responsibilities: "" },
        ],
      }}
    >
      <Form.List name="experience">
        {(fields, { add, remove }) => (
          <>
            {fields.map(({ key, name, fieldKey, ...restField }, index) => (
              <Space
                key={key}
                direction="vertical"
                style={{ display: "flex", marginBottom: 8 }}
              >
                <Form.Item
                  {...restField}
                  label={`Job Title ${index + 1}`} // Show index in label for clarity
                  name={[name, "jobTitle"]}
                  fieldKey={[fieldKey, "jobTitle"]}
                  rules={[
                    { required: true, message: "Please enter job title" },
                  ]}
                >
                  <Input placeholder="Job Title" />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="Company Name"
                  name={[name, "companyName"]}
                  fieldKey={[fieldKey, "companyName"]}
                  rules={[
                    { required: true, message: "Please enter company name" },
                  ]}
                >
                  <Input placeholder="Company Name" />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="Duration"
                  name={[name, "duration"]}
                  fieldKey={[fieldKey, "duration"]}
                  rules={[
                    { required: true, message: "Please enter the duration" },
                  ]}
                >
                  <Input placeholder="Duration (e.g., Jan 2020 - Dec 2022)" />
                </Form.Item>

                <Form.Item
                  {...restField}
                  label="Job Responsibilities"
                  name={[name, "responsibilities"]}
                  fieldKey={[fieldKey, "responsibilities"]}
                  rules={[
                    {
                      required: true,
                      message: "Please enter job responsibilities",
                    },
                  ]}
                >
                  <Input.TextArea placeholder="Job Responsibilities" rows={4} />
                </Form.Item>

                {fields.length > 1 && (
                  <Button
                    type="danger"
                    onClick={() => remove(name)}
                    icon={<MinusCircleOutlined />}
                    style={{ marginBottom: "20px" }}
                  >
                    Remove Experience
                  </Button>
                )}
              </Space>
            ))}

            <Form.Item>
              <Button
                type="dashed"
                onClick={() =>
                  add({
                    jobTitle: "",
                    companyName: "",
                    duration: "",
                    responsibilities: "",
                  })
                }
                block
                icon={<PlusOutlined />}
              >
                Add Experience
              </Button>
            </Form.Item>
          </>
        )}
      </Form.List>

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

export default ExperienceForm;

"use client";

import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { useAddDepartmentMutation } from "@/redux/api/departmentApi";

import { Button, Col, Row, message } from "antd";

const CreateDepartmentPage = () => {
  const [addDepartment] = useAddDepartmentMutation();

  const onSubmit = async (data: any) => {
    message.loading("Sending....");
    try {
      await addDepartment(data);
      message.success("Department added successfully");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "super_admin";
  return (
    <div>
      <UMbreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />

      <div
        style={{
          margin: "100px ",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h1>Create Department</h1>

        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0", width: "100%" }}>
              <FromInput name="title" label="Title" />
            </Col>
          </Row>
          <Button
            style={{ width: "150px", marginTop: "10px" }}
            type="primary"
            htmlType="submit"
          >
            add
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default CreateDepartmentPage;

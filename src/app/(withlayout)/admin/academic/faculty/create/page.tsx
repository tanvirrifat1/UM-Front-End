"use client";

import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { useAddAcademicFacultyMutation } from "@/redux/api/academic/facultyApi";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateFacultyPage = () => {
  const [addAcademicFaculty] = useAddAcademicFacultyMutation();

  const router = useRouter();
  const onSubmit = async (data: any) => {
    message.loading("Sending....");
    try {
      const res = await addAcademicFaculty(data);
      if (!!res) {
        message.success("Faculty added successfully");
      }
      console.log(res);
      // router.push("/admin/academic/faculty");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMbreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "academic-faculty", link: `/${base}/academic/faculty` },
        ]}
      />

      <div
        style={{
          margin: "100px ",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <h1>Create Faculty</h1>

        <Form persistKey="" submitHandler={onSubmit}>
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

export default CreateFacultyPage;

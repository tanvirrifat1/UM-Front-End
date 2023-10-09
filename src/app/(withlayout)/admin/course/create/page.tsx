"use client";

import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import { SelectOptions } from "@/components/Forms/FromSelectFields";
import FormMultiSelectField from "@/components/Forms/MultiSelectField";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";

import { useAddCourseMutation, useCoursesQuery } from "@/redux/api/courseApi";
import { Button, Col, Row, message } from "antd";

const CreateCoursePage = () => {
  const [addCourse] = useAddCourseMutation();

  const { data, isLoading } = useCoursesQuery({ limit: 10, page: 1 });

  const courses = data?.courses;

  const courseOptions = courses?.map((field) => {
    return {
      label: field?.title,
      value: field?.id,
    };
  });

  const onSubmit = async (data: any) => {
    data.credits = parseInt(data?.credits);

    const coursePreRequisitesOptions = data?.preRequisiteCourses?.map(
      (id: string) => {
        return {
          courseId: id,
        };
      }
    );

    data.preRequisiteCourses = coursePreRequisitesOptions;

    message.loading("Creating.....");
    try {
      const res = await addCourse(data).unwrap();
      if (res?.id) {
        message.success("Course created successfully");
      }
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
          { label: "course", link: `/${base}/course` },
        ]}
      />
      <h1>Create Course</h1>
      <Form persistKey="" submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="title" label="Title" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="code" label="Course Code" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="credits" label="Course Credits" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormMultiSelectField
                options={courseOptions as SelectOptions[]}
                name="preRequisiteCourses"
                label="Pre Requisite Courses"
              />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateCoursePage;

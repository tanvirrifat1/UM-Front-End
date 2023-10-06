"use client";

import { bloodGroupOptions, genderOptions } from "@/Constants/global";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FromInput from "@/components/Forms/FromInput";
import FormSelectField from "@/components/Forms/FromSelectFields";
import FormTextArea from "@/components/Forms/FromTextArea";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { Button, Col, Row } from "antd";
import React from "react";
import Form from "@/components/Forms/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminSchema } from "@/schemas/admin";

const CreateFacultyPage = () => {
  const departmentOptions = [
    {
      label: "HR",
      value: "hr",
    },
    {
      label: "Finance",
      value: "finance",
    },
    {
      label: "Management",
      value: "Management",
    },
  ];

  const adminOnSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const base = "super_admin";
  return (
    <>
      <UMbreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <h1>Create Faculty</h1>
      <Form submitHandler={adminOnSubmit} resolver={yupResolver(adminSchema)}>
        {/* faculty information */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Faculty information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={6} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.name.firstName"
                label="First name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.name.middleName"
                label="Middle name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.name.lastName"
                label="Last name"
                size="large"
              />
            </Col>

            <Col span={6} style={{ margin: "10px 0" }}>
              <FromInput
                type="password"
                name="password"
                label="Password"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="faculty.gender"
                label="Gender"
                options={genderOptions}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="faculty.academicFaculty"
                label="Academic Faculty"
                options={departmentOptions}
              />
            </Col>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="faculty.academicDepartment"
                label="Academic Department"
                options={departmentOptions}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <UploadImage name="file" />
            </Col>
          </Row>
        </div>
        {/* basic information  */}
        <div
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
            Basic information
          </p>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px 0" }}>
              <FromInput
                type="email"
                name="faculty.email"
                label="Email address"
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.contactNo"
                label="Contact no."
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.emergencyContactNo"
                label="Emergency contact no."
                size="large"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormDatePicker
                name="faculty.dateOfBirth"
                label="Date of birth"
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FormSelectField
                name="faculty.bloodGroup"
                label="Blood group"
                options={bloodGroupOptions}
              />
            </Col>

            <Col span={8} style={{ margin: "10px 0" }}>
              <FromInput
                name="faculty.designation"
                label="Designation"
                size="large"
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.presentAddress"
                label="Present address"
                rows={4}
              />
            </Col>

            <Col span={12} style={{ margin: "10px 0" }}>
              <FormTextArea
                name="faculty.permanentAddress"
                label="Permanent address"
                rows={4}
              />
            </Col>
          </Row>
        </div>
        <div style={{ margin: "10px", marginLeft: "15px" }}>
          <Button type="primary" style={{ width: "250px" }} htmlType="submit">
            submit
          </Button>
        </div>
      </Form>
    </>
  );
};

export default CreateFacultyPage;

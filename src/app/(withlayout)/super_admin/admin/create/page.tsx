"use client";

import { bloodGroupOptions, genderOptions } from "@/Constants/global";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FromInput from "@/components/Forms/FromInput";
import FormSelectField from "@/components/Forms/FromSelectFields";
import FormTextArea from "@/components/Forms/FromTextArea";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { adminSchema } from "@/schemas/admin";
import { IDepartment } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row } from "antd";
import React from "react";
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const CreateAdminPage = () => {
  const { data, isLoading } = useDepartmentsQuery({ limit: 100, page: 1 });

  const departments: any = data?.departments;

  const departmentOptions = departments?.map((department: any) => {
    return {
      label: department?.title,
      value: department?.id,
    };
  });

  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <UMbreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h1 style={{ fontSize: "35px", marginBottom: "10px", padding: "8px" }}>
        Create Admin
      </h1>

      <div>
        <Form submitHandler={onSubmit} resolver={yupResolver(adminSchema)}>
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
              Admin Information
            </p>
            <div>
              <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FromInput
                    type="text"
                    name="admin.name.firstName"
                    size="large"
                    label="First Name"
                    placeholder="Name"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FromInput
                    type="text"
                    name="admin.name.middleName"
                    size="large"
                    label="Middle Name"
                    placeholder="MiddleName"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FromInput
                    type="text"
                    name="admin.name.lastName"
                    size="large"
                    label="Last Name"
                    placeholder="LastName"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FromInput
                    type="password"
                    name="password"
                    size="large"
                    label="Password"
                    placeholder="Password"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormSelectField
                    size="large"
                    name="admin.gender"
                    label="Gender"
                    placeholder="gender"
                    options={genderOptions}
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <FormSelectField
                    size="large"
                    name="admin.managementDepartment"
                    label="Department"
                    placeholder="Department"
                    options={departmentOptions}
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{
                    marginBottom: "10px",
                  }}
                >
                  <UploadImage />
                </Col>
              </Row>
            </div>
          </div>
          {/* Basic Information */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p
              style={{
                fontSize: "18px",
                marginBottom: "10px",
              }}
            >
              Basic Information
            </p>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FromInput
                  type="email"
                  name="admin.email"
                  size="large"
                  label="Email address"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FromInput
                  type="text"
                  name="admin.contactNo"
                  size="large"
                  label="Contact No."
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FromInput
                  type="text"
                  name="admin.emergencyContactNo"
                  size="large"
                  label="Emergency Contact No."
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormDatePicker
                  name="admin.dateOfBirth"
                  label="Date of birth"
                  size="large"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FormSelectField
                  size="large"
                  name="admin.bloodGroup"
                  options={bloodGroupOptions}
                  label="Blood group"
                  placeholder="Select"
                />
              </Col>
              <Col
                className="gutter-row"
                span={8}
                style={{
                  marginBottom: "10px",
                }}
              >
                <FromInput
                  type="text"
                  name="admin.designation"
                  size="large"
                  label="Designation"
                />
              </Col>
              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.presentAddress"
                  label="Present address"
                  rows={4}
                />
              </Col>

              <Col span={12} style={{ margin: "10px 0" }}>
                <FormTextArea
                  name="admin.permanentAddress"
                  label="Permanent address"
                  rows={4}
                />
              </Col>
            </Row>
          </div>
          <div style={{ padding: "18px" }}>
            <Button style={{ width: "250px" }} htmlType="submit" type="primary">
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default CreateAdminPage;

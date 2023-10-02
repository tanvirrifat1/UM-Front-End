"use client";

import { departmentOptions, genderOptions } from "@/Constants/global";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import FormSelectField from "@/components/Forms/FromSelectFields";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import UploadImage from "@/components/ui/UploadImage";
import { Button, Col, Row } from "antd";
import React from "react";
const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };

const CreateAdminPage = () => {
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
        <Form submitHandler={onSubmit}>
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
          {/* Basic Information */}
          <div
            style={{
              border: "1px solid #d9d9d9",
              borderRadius: "5px",
              padding: "15px",
              marginBottom: "10px",
            }}
          >
            <p style={{ fontSize: "18px", marginBottom: "10px" }}>
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
                  label="Email"
                  placeholder="Email"
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
                  label="ContactNo"
                  placeholder="ContactNo"
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
                  label="EmergencyContactNo"
                  placeholder="EmergencyContactNo"
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
            </Row>
          </div>
          <div
            style={{
              padding: "15px ",
            }}
          >
            <Button
              style={{
                height: "40px",
                width: "250px",
              }}
              htmlType="submit"
              type="primary"
            >
              Create
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;

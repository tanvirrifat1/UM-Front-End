"use client";

import { Col, Row } from "antd";
import React from "react";
import FromInput from "../Forms/FromInput";
import FormSelectField from "../Forms/FromSelectFields";
import {
  acDepartmentOptions,
  acSemesterOptions,
  departmentOptions,
  facultyOptions,
  genderOptions,
} from "@/Constants/global";
import UploadImage from "../ui/UploadImage";

const StudentInfo = () => {
  return (
    <div style={{ marginTop: "10px" }}>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.name.firstName"
            size="large"
            label="First Name"
            placeholder="Name"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.name.middleName"
            size="large"
            label="Middle Name"
            placeholder="MiddleName"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="text"
            name="student.name.lastName"
            size="large"
            label="Last Name"
            placeholder="LastName"
          />
        </Col>
        <Col
          className="gutter-row"
          span={6}
          style={{
            marginBottom: "10px",
          }}
        >
          <FromInput
            type="password"
            name="student.password"
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
            name="student.academicDepartment"
            label="AcademicDepartment"
            placeholder="academicDepartment"
            options={acDepartmentOptions}
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
            name="student.academicFaculty"
            label="AcademicFaculty"
            placeholder="academicFaculty"
            options={facultyOptions}
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
            name="student.academicSemester"
            label="AcademicSemester"
            placeholder="academicSemester"
            options={acSemesterOptions}
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
            name="student.gender"
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
          <UploadImage />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;

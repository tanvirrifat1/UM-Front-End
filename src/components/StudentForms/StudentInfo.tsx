"use client";
import { Col, Row } from "antd";

import UploadImage from "../ui/UploadImage";

import ACDepartmentField from "../Forms/ACDepartmentField";
import ACFacultyField from "../Forms/ACFacultyField";
import FromInput from "../Forms/FromInput";
import ACSemesterField from "../Forms/ACSemesterField";
import FormSelectField from "../Forms/FromSelectFields";
import { genderOptions } from "@/Constants/global";

const StudentInfo = () => {
  return (
    <div
      style={{
        border: "1px solid #d9d9d9",
        borderRadius: "5px",
        padding: "15px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
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
          <ACDepartmentField
            name="student.academicDepartment"
            label="Academic Department"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <ACFacultyField
            name="student.academicFaculty"
            label="Academic Faculty"
          />
        </Col>
        <Col
          className="gutter-row"
          span={8}
          style={{
            marginBottom: "10px",
          }}
        >
          <ACSemesterField
            name="student.academicSemester"
            label="Academic Semester"
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
            options={genderOptions}
            label="Gender"
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
          <UploadImage name="file" />
        </Col>
      </Row>
    </div>
  );
};

export default StudentInfo;

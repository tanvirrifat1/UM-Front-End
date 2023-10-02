"use client";
import React from "react";
import FormDatePicker from "../Forms/FormDatePicker";
import { Col, Row } from "antd";
import FormSelectField from "../Forms/FromSelectFields";
import { bloodGroupOptions } from "@/Constants/global";
import FormTextArea from "../Forms/FromTextArea";
import FromInput from "../Forms/FromInput";

const BasicInfo = () => {
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
      <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
        <Col span={8} style={{ margin: "10px 0" }}>
          <FromInput
            type="email"
            name="student.email"
            label="Email address"
            size="large"
          />
        </Col>

        <Col span={8} style={{ margin: "10px 0" }}>
          <FromInput
            name="student.contactNo"
            label="Contact no."
            size="large"
          />
        </Col>

        <Col span={8} style={{ margin: "10px 0" }}>
          <FromInput
            name="student.emergencyContactNo"
            label="Emergency contact no."
            size="large"
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FormDatePicker
            name="student.dateOfBirth"
            label="Date of birth"
            size="large"
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FormSelectField
            name="student.bloodGroup"
            label="Blood group"
            options={bloodGroupOptions}
            size="large"
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FormTextArea
            name="student.presentAddress"
            label="Present address"
            rows={4}
          />
        </Col>

        <Col span={12} style={{ margin: "10px 0" }}>
          <FormTextArea
            name="student.permanentAddress"
            label="Permanent address"
            rows={4}
          />
        </Col>
      </Row>
    </div>
  );
};

export default BasicInfo;

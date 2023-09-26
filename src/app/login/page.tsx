"use client";

import { Row, Col, Button } from "antd";
import React from "react";
import img from "../../assets/loginImage/Login-amico.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import { SubmitHandler } from "react-hook-form";

type FromValues = {
  id?: string;
  password?: string;
};

const LoginPage = () => {
  const onSubmit: SubmitHandler<FromValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {}
  };

  return (
    <div>
      <Row>
        <Col sm={12} md={16} lg={16}>
          <Image src={img} alt="" width={500} />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1>First login your account</h1>
          <div>
            <Form submitHandler={onSubmit}>
              <div>
                <FromInput name="id" type="text" size="large" label="User Id" />
              </div>
              <div>
                <FromInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;

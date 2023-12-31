"use client";

import { Row, Col, Button, message } from "antd";
import React from "react";
import img from "../../assets/loginImage/Login-amico.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import { SubmitHandler } from "react-hook-form";

import { GoogleOutlined } from "@ant-design/icons";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/services/auth.service";

import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

type FromValues = {
  id?: string;
  password?: string;
};

const LoginPage = () => {
  const router = useRouter();

  const [userLogin] = useUserLoginMutation();

  const onSubmit: SubmitHandler<FromValues> = async (data: any) => {
    try {
      const res = await userLogin({ ...data }).unwrap();

      if (res?.accessToken) {
        router.push("/profile");
      }
      storeUserInfo({ accessToken: res?.accessToken });
      Swal.fire({
        title: "Login Successfully",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
    } catch (error) {
      message.error("Password is incorrect");
      console.error(error);
    }
  };

  return (
    <div>
      <Row
        justify="center"
        align="middle"
        style={{
          minHeight: "100vh",
        }}
      >
        <Col sm={12} md={16} lg={8}>
          <Image src={img} alt="" width={500} />
        </Col>
        <Col sm={12} md={8} lg={8}>
          <h1 style={{ margin: "15px 0px" }}>First login your account</h1>
          <div>
            <Form persistKey="" submitHandler={onSubmit}>
              <div
                style={{
                  margin: "15px 0px",
                  width: "70%",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <FromInput name="id" type="text" size="large" label="User Id" />
              </div>
              <div
                style={{
                  margin: "15px 0px",
                  width: "70%",
                  alignItems: "center",
                  alignContent: "center",
                }}
              >
                <FromInput
                  name="password"
                  type="password"
                  size="large"
                  label="User Password"
                />
              </div>
              <Row>
                <Button
                  style={{
                    margin: "15px 0px",
                    width: "70%",
                    alignItems: "center",
                    alignContent: "center",
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  Login
                </Button>
              </Row>
              <Button
                style={{
                  margin: "15px 0px",
                  width: "70%",

                  alignItems: "center",
                  alignContent: "center",
                }}
                type="primary"
              >
                <GoogleOutlined />
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;

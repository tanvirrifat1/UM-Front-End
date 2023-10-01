"use client";

import React from "react";
import { Layout } from "antd";
import UMbreadCrumb from "./UMbreadCrumb";
import Header from "./Header";

const { Content } = Layout;

const Contains = ({ children }: { children: React.ReactNode }) => {
  const base = "admin";

  return (
    <Content
      style={{
        minHeight: "100vh",
        color: "black",
      }}
    >
      <Header />
      <UMbreadCrumb
        items={[
          {
            label: `${base}`,
            link: `/${base}`,
          },
          {
            label: "student",
            link: `/${base}/student`,
          },
        ]}
      />
      {children}
    </Content>
  );
};

export default Contains;

"use client";

import React, { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
import { Breadcrumb, Layout, Menu, theme, MenuProps } from "antd";

import { sidebarItems } from "@/Constants/sidebarItems";
import { USER_ROLE } from "@/Constants/role";
import { getUserInfo } from "@/services/auth.service";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const { role } = getUserInfo() as any;
  // const role = USER_ROLE.STUDENT;
  console.log(role);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: ".5rem",
          padding: "10px 0px",
        }}
      >
        UMS
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default Sidebar;

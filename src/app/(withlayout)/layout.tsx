"use client";

import Contains from "@/components/ui/Contains";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout, Row, Space, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const useLoggedIn = isLoggedIn();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!useLoggedIn) {
      router.push("/login");
    }
    setLoading(true);
  }, [router, loading]);

  if (!loading) {
    return (
      <Row
        justify="center"
        align="middle"
        style={{
          height: "100vh",
        }}
      >
        <Space>
          <Spin tip="Loading" size="large"></Spin>
        </Space>
      </Row>
    );
  }

  return (
    <Layout hasSider>
      <Sidebar />
      <Contains>{children}</Contains>
    </Layout>
  );
};

export default DashBoardLayout;

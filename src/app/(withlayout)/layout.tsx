"use client";

import Contains from "@/components/ui/Contains";
import Sidebar from "@/components/ui/Sidebar";
import { Layout } from "antd";

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout hasSider>
      <Sidebar />
      <Contains>{children}</Contains>
    </Layout>
  );
};

export default DashBoardLayout;

"use client";

import Contains from "@/components/ui/Contains";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
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
      <p
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "2rem",
        }}
      >
        Loading...
      </p>
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

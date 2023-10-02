"use client";

import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageStudentPage = () => {
  const { role } = getUserInfo() as any;

  return (
    <div>
      <UMbreadCrumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>this is manage-student</h1>
      <Link href="/super_admin/manage-student/create">
        <Button style={{ background: "primary" }}>Create student</Button>
      </Link>
    </div>
  );
};

export default ManageStudentPage;

"use client";

import ActionBar from "@/components/ui/ActionBar";
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

      <ActionBar title="this is manage-student">
        <Link href="/super_admin/manage-student/create">
          <Button type="primary">Create student</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageStudentPage;

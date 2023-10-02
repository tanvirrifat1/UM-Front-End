import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const DepartMent = () => {
  return (
    <div>
      <UMbreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
        ]}
      />
      <h1>Department List</h1>
      <Link href="/super_admin/department/create">
        <Button type="primary">Create</Button>
      </Link>
    </div>
  );
};

export default DepartMent;

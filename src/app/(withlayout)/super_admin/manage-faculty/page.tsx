import ActionBar from "@/components/ui/ActionBar";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const page = () => {
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

      <h1>Faculty List</h1>
      <Link href="/super_admin/manage-faculty/create">
        <Button type="primary">Create</Button>
      </Link>
    </div>
  );
};

export default page;

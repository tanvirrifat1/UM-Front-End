import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import React from "react";

const ManageUser = () => {
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
      <h1>This page is for super admin</h1>
    </div>
  );
};

export default ManageUser;

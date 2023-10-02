import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import React from "react";

const AdminPageCreate = () => {
  return (
    <div>
      <UMbreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "admin",
            link: "/super_admin/admin",
          },
        ]}
      />
      <h1>AdminPageCreate</h1>
    </div>
  );
};

export default AdminPageCreate;

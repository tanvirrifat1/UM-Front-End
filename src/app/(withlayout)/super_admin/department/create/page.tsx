import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import React from "react";

const DepartmentCreate = () => {
  const base = "super_admin";
  return (
    <div>
      <UMbreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "department", link: `/${base}/department` },
        ]}
      />
      <h1>DepartmentCreate</h1>
    </div>
  );
};

export default DepartmentCreate;

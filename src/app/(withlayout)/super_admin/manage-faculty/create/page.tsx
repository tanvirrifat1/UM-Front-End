import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import React from "react";

const FacultyCreated = () => {
  const base = "super_admin";
  return (
    <div>
      <UMbreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-faculty", link: `/${base}/manage-faculty` },
        ]}
      />
      <h1>This is Faculty</h1>
    </div>
  );
};

export default FacultyCreated;

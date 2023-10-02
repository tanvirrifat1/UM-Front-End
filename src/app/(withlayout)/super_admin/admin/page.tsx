import UMbreadCrumb from "@/components/ui/UMbreadCrumb";

import Link from "next/link";
import { Button } from "antd";

const AdminPage = () => {
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

      <Link href="/super_admin/admin/create">
        <Button type="primary">Create Admin</Button>
      </Link>
    </div>
  );
};

export default AdminPage;

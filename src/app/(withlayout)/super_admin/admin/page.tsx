import UMbreadCrumb from "@/components/ui/UMbreadCrumb";

import Link from "next/link";
import { Button } from "antd";
import ActionBar from "@/components/ui/ActionBar";

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

      <ActionBar title="Admin list">
        <Link href="/super_admin/admin/create">
          <Button type="primary">Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default AdminPage;

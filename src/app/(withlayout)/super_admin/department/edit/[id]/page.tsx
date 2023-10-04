"use client";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import ActionBar from "@/components/ui/ActionBar";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import {
  useSingleDepartmentQuery,
  useUpdateDepartmentMutation,
} from "@/redux/api/departmentApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

type IDProps = {
  params: any;
};

const EditDepartment = ({ params }: IDProps) => {
  const { id } = params;

  const router = useRouter();

  const { data, isLoading } = useSingleDepartmentQuery(id);

  const [updateDepartment] = useUpdateDepartmentMutation();

  const onsubmit = async (values: { title: any }) => {
    message.loading("Updating...");
    try {
      await updateDepartment({ id, body: values });

      router.push(`/super_admin/department`);

      message.success("Department updated successfully");
    } catch (error: any) {
      message.error(error.message);
    }
  };

  const defaultValues = {
    title: data?.title || "",
  };

  return (
    <div style={{ margin: "10px" }}>
      <UMbreadCrumb
        items={[
          {
            label: "super_admin",
            link: "/super_admin",
          },
          {
            label: "department",
            link: "/super_admin/department",
          },
        ]}
      />

      <ActionBar title="Update Department"> </ActionBar>

      <div>
        <Form submitHandler={onsubmit} defaultValues={defaultValues}>
          <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
            <Col span={8} style={{ margin: "10px" }}>
              <FromInput name="title" label="title" />
            </Col>
          </Row>
          <Button type="primary" htmlType="submit">
            update
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default EditDepartment;

"use client";
import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { useAddBuildingMutation } from "@/redux/api/buildingApi";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateBuildPage = () => {
  const [addBuilding] = useAddBuildingMutation();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      const res = await addBuilding(data).unwrap();
      if (!!res.id) {
        message.success("Building creating....");
      }
      console.log(res);
      router.push("/admin/building");
    } catch (err: any) {
      console.error(err.message);
      message.error(err.message);
    }
  };
  const base = "admin";
  return (
    <div>
      <UMbreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "building", link: `/${base}/building` },
        ]}
      />
      <h1>Create Building</h1>
      <Form persistKey="" submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FromInput name="title" label="Title" />
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateBuildPage;

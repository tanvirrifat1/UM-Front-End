"use client";

import Form from "@/components/Forms/Form";
import FromInput from "@/components/Forms/FromInput";
import FormSelectField, {
  SelectOptions,
} from "@/components/Forms/FromSelectFields";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";

import { useBuildingsQuery } from "@/redux/api/buildingApi";
import { useAddRoomMutation } from "@/redux/api/roomApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateRoomPage = () => {
  const [addRoom] = useAddRoomMutation();
  const router = useRouter();
  const { data, isLoading } = useBuildingsQuery({
    limit: 100,
    page: 1,
  });

  if (isLoading) {
    message.success("Loading.......");
  }

  const building = data?.buildings;
  const buildingsOption = building?.map((field) => {
    return {
      label: field?.title,
      value: field?.id,
    };
  });

  const onSubmit = async (data: any) => {
    message.loading("Creating.....");
    try {
      // console.log(data);
      const res = await addRoom(data);
      if (res) {
        message.success("Loading...");
      }
      router.push("/admin/room");
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
          { label: "room", link: `/${base}/room` },
        ]}
      />
      <h1>Create Room</h1>
      <Form persistKey="" submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="roomNumber" label="Room No." />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="floor" label="Floor" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormSelectField
                size="large"
                name="buildingId"
                options={buildingsOption as SelectOptions[]}
                label="Building"
                placeholder="Select"
              />
            </div>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">
          add
        </Button>
      </Form>
    </div>
  );
};

export default CreateRoomPage;

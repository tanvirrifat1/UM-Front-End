"use client";

import ACSemesterField from "@/components/Forms/ACSemesterField";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FromInput from "@/components/Forms/FromInput";
import UMbreadCrumb from "@/components/ui/UMbreadCrumb";
import { useAddSemesterRegistrationsMutation } from "@/redux/api/semesterRegistrationApi";

import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateSemesterRegistrationPage = () => {
  const router = useRouter();
  const [addSemesterRegistrations] = useAddSemesterRegistrationsMutation();
  const onSubmit = async (data: any) => {
    data.minCredit = parseInt(data?.minCredit);
    data.maxCredit = parseInt(data?.maxCredit);

    message.loading("Creating.....");

    try {
      const res = await addSemesterRegistrations(data).unwrap();
      if (!!res?.id) {
        message.success("Semester-registration created successfully");
      }
      console.log(data);
      router.push("/admin/semester-registration");
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
          {
            label: "semester-registration",
            link: `/${base}/semester-registration`,
          },
        ]}
      />
      <h1>Create Semester Registration</h1>
      <Form persistKey="" submitHandler={onSubmit}>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <div style={{ margin: "10px 0px" }}>
              <FormDatePicker
                name="startDate"
                label="Start Date"
                size="large"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FormDatePicker name="endDate" label="End Date" size="large" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <ACSemesterField
                name="academicSemesterId"
                label="Academic Semester"
              />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="minCredit" label="Min Credit" type="number" />
            </div>
            <div style={{ margin: "10px 0px" }}>
              <FromInput name="maxCredit" label="Max Credit" type="number" />
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

export default CreateSemesterRegistrationPage;

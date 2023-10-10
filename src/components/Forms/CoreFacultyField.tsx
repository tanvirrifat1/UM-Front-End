import React from "react";
import FormSelectField from "./FromSelectFields";
import { useFacultiesQuery } from "@/redux/api/facultyApi";

type FacultyProps = {
  name: string;
  label: string;
};

const CoreFacultyField = ({ name, label }: FacultyProps) => {
  const { data } = useFacultiesQuery({ limit: 100, page: 1 });

  const dataOption = data?.map((faculty: any) => {
    return {
      label: `${faculty.firstName} ${faculty?.middleName} ${faculty?.lastName}`,
      value: faculty?.id,
    };
  });

  return (
    <>
      <FormSelectField name={name} label="Faculty" options={dataOption} />
    </>
  );
};

export default CoreFacultyField;

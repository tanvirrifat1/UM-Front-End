import React from "react";
import FormSelectField from "./FromSelectFields";
import { bloodGroupOptions } from "@/Constants/global";
import { useAcademicFacultiesQuery } from "@/redux/api/academic/facultyApi";

type ACFacultyFieldProps = {
  name: string;
  label: string;
};

type SelectOptions = {
  label: string;
  value: string;
};

const ACFacultyField = ({ name, label }: ACFacultyFieldProps) => {
  const { data, isLoading } = useAcademicFacultiesQuery({
    limit: 100,
    page: 1,
  });

  const academicFaculties = data?.academicFaculties;

  const academicFacultiesOptions = academicFaculties?.map((academic) => {
    return {
      label: academic?.title,
      value: academic?.id,
    };
  });

  const meta = data?.meta;

  return (
    <FormSelectField
      size="large"
      name={name}
      options={academicFacultiesOptions as SelectOptions[]}
      label={label}
      placeholder="Select"
    />
  );
};

export default ACFacultyField;

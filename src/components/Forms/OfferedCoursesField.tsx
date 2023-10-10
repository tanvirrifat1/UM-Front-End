import React from "react";
import FormMultiSelectField from "./MultiSelectField";
import { useCoursesQuery } from "@/redux/api/courseApi";
import { SelectOptions } from "./FromSelectFields";

type FieldProps = {
  name: string;
  label: string;
};

const OfferedCoursesField = ({ name, label }: FieldProps) => {
  const { data } = useCoursesQuery({ limit: 100, page: 1 });

  const courses = data?.courses;

  const courseOptions = courses?.map((field) => {
    return {
      label: field.title,
      value: field.id,
    };
  });

  return (
    <>
      <FormMultiSelectField
        name={name}
        label={label}
        options={courseOptions as SelectOptions[]}
      />
    </>
  );
};

export default OfferedCoursesField;

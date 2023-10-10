import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";
import FormSelectField, { SelectOptions } from "./FromSelectFields";

type ACDepartmentFieldProps = {
  name: string;
  label?: string;
};

const ACDepartmentField = ({ name, label }: ACDepartmentFieldProps) => {
  const { data, isLoading } = useAcademicDepartmentsQuery({
    limit: 100,
    page: 1,
  });

  const academicDepartments = data?.academicDepartments;

  const academicDepartmentsOptions = academicDepartments?.map((field) => {
    return {
      label: field?.title,
      value: field?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={academicDepartmentsOptions as SelectOptions[]}
    />
  );
};

export default ACDepartmentField;

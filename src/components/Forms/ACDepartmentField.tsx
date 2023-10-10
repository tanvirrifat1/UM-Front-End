import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";
import FormSelectField, { SelectOptions } from "./FromSelectFields";

type ACDepartmentFieldProps = {
  name: string;
  label?: string;
  onChange: (el: any) => void;
};

const ACDepartmentField = ({
  name,
  label,
  onChange,
}: ACDepartmentFieldProps) => {
  const { data } = useAcademicDepartmentsQuery({
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
      handleChange={(el) => onChange(el)}
    />
  );
};

export default ACDepartmentField;

import UMbreadCrumb from "@/components/ui/UMbreadCrumb";

const CreateStudentPage = () => {
  const base = "super_admin";
  return (
    <div>
      <UMbreadCrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: "manage-student", link: `/${base}/manage-student` },
        ]}
      />
      <h1>CreateStudentPage</h1>
    </div>
  );
};

export default CreateStudentPage;

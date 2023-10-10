import { useRoomsQuery } from "@/redux/api/roomApi";
import FormSelectField, { SelectOptions } from "./FromSelectFields";

type RoomsProps = {
  name: string;
  label: string;
};

const RoomsOptions = ({ name, label }: RoomsProps) => {
  const { data } = useRoomsQuery({
    limit: 100,
    page: 1,
  });

  const rooms = data?.rooms;

  const roomOptions = rooms?.map((field) => {
    return {
      label: field?.roomNumber,
      value: field?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={roomOptions as SelectOptions[]}
    />
  );
};

export default RoomsOptions;

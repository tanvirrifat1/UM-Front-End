import React from "react";
import FormSelectField, { SelectOptions } from "./FromSelectFields";
import { useBuildingsQuery } from "@/redux/api/buildingApi";

type BuildingOptionsProps = {
  name: string;
  label: string;
};

const BuildingOptions = ({ name, label }: BuildingOptionsProps) => {
  const { data } = useBuildingsQuery({ limit: 100, page: 1 });
  const buildings = data?.buildings;

  console.log(buildings);

  const buildingsOptions = buildings?.map((field) => {
    return {
      label: field?.title,
      value: field?.id,
    };
  });
  return (
    <>
      <FormSelectField
        name={name}
        options={buildingsOptions as SelectOptions[]}
        label={label}
      />
    </>
  );
};

export default BuildingOptions;

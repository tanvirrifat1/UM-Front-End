export const getErrorMessageByPropertyName = (
  obj: Record<string, any>,
  propertyPath: string
) => {
  const properties = propertyPath.split(".");

  let value = obj;

  for (let props of properties) {
    if (value[props]) {
      value = value[props];
    } else {
      return undefined;
    }
  }
  return value.message;
};

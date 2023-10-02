"use client";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { ReactElement, ReactNode } from "react";

type FromConfig = {
  defaultValues?: Record<string, any>;
};

type FromProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FromConfig;

const Form = ({ children, submitHandler, defaultValues }: FromProps) => {
  const fromConfig: FromConfig = {};
  if (!!defaultValues) fromConfig["defaultValues"] = defaultValues;
  const methods = useForm<FromProps>(fromConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;

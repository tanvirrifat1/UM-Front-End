"use client";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { ReactElement, ReactNode, useEffect } from "react";

type FromConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type FromProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
} & FromConfig;

const Form = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
}: FromProps) => {
  const fromConfig: FromConfig = {};

  if (!!defaultValues) fromConfig["defaultValues"] = defaultValues;
  if (!!resolver) fromConfig["resolver"] = resolver;

  const methods = useForm<FromProps>(fromConfig);
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset, methods]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;

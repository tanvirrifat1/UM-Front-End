"use client";

import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { getToLocalStorage, setToLocalStorage } from "@/utils/local-storeage";

type FromConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
};

type FromProps = {
  children?: ReactElement | ReactNode;
  submitHandler: SubmitHandler<any>;
  persistKey: string;
} & FromConfig;

const Form = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
  persistKey,
}: FromProps) => {
  const fromConfig: FromConfig = {};

  if (!!defaultValues) fromConfig["defaultValues"] = defaultValues;

  if (!!resolver) fromConfig["resolver"] = resolver;

  const [savedValues] = useState(
    !!getToLocalStorage(persistKey)
      ? JSON.parse(getToLocalStorage(persistKey) as string)
      : ""
  );

  const methods = useForm<FromProps>({
    ...fromConfig,
    defaultValues: savedValues,
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data);
    reset();
  };

  const watch = methods.watch();

  useEffect(() => {
    setToLocalStorage(persistKey, JSON.stringify(watch));
  }, [persistKey, watch, methods]);

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

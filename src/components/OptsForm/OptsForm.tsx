'use client';

import { Checkbox, CheckboxGroup, Input, Radio, RadioGroup } from '@nextui-org/react';
import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import type { TQuestion } from '@/types/types';

const OptsForm = (props: { item: TQuestion }): ReactElement => {
  const {
    register,
    // control,
    handleSubmit,
    // getValues,
    formState: { errors },
    // setValue,
  } = useForm<{ endpoint: string }>({
    mode: 'onChange',
    // resolver: zodResolver(RestSchema(t)),
    defaultValues: {
      endpoint: '',
    },
  });

  const submit = (): void => {
    console.log('clicked');
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col items-start gap-5">
      <Input
        type="text"
        label="test"
        {...register('endpoint')}
        className="w-full text-center"
        isInvalid={Boolean(errors.endpoint)}
        errorMessage={errors.endpoint?.message}
      />
      {props.item.type === 'radio' ? (
        <RadioGroup color="danger">
          {props.item.variants?.map((item, index) => (
            <Radio key={index} value={item}>
              {item}
            </Radio>
          ))}
        </RadioGroup>
      ) : (
        <CheckboxGroup color="danger">
          {props.item.variants?.map((item, index) => (
            <Checkbox key={index} value={item}>
              {item}
            </Checkbox>
          ))}
        </CheckboxGroup>
      )}
    </form>
  );
};

export default OptsForm;

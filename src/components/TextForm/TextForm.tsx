'use client';

import { Input, Textarea } from '@nextui-org/react';
import { type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import type { TQuestion } from '@/types/types';

const TextForm = (props: { item: TQuestion }): ReactElement => {
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
      {props.item.type === 'input' ? (
        <Input
          type="text"
          label="Введите свой ответ:"
          {...register('endpoint')}
          className="w-full text-center"
          isInvalid={Boolean(errors.endpoint)}
          errorMessage={errors.endpoint?.message}
        />
      ) : (
        <Textarea
          label="Введите свой ответ:"
          {...register('endpoint')}
          className="w-full text-center"
          isInvalid={Boolean(errors.endpoint)}
          errorMessage={errors.endpoint?.message}
        />
      )}
    </form>
  );
};

export default TextForm;

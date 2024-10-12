'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Textarea } from '@nextui-org/react';
import { useEffect, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { TEXT_CONTENT } from '@/constants/constants';
import type { TOptsForm, TQuestion } from '@/types/types';
import OptsFormSchema from '@/validation/OptsFormSchema';

const TextForm = (props: { item: TQuestion; clickHandler: () => void; opacity: string }): ReactElement => {
  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TOptsForm>({
    mode: 'onChange',
    resolver: zodResolver(OptsFormSchema()),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue('answer', e.target.value, { shouldValidate: true });
  };

  const submit = (data: TOptsForm): void => {
    console.log(data);
    props.clickHandler();
  };

  useEffect(() => {
    reset({
      answer: '',
    });
  }, [props.item, reset]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col items-start gap-5">
      {props.item.type === 'input' ? (
        <Input
          type="text"
          label="Введите свой ответ:"
          {...register('answer')}
          value={watch('answer')}
          className={`${props.opacity} transition-all`}
          onChange={handleChange}
          isInvalid={Boolean(errors.answer)}
          errorMessage={errors.answer?.message}
        />
      ) : (
        <Textarea
          label="Введите свой ответ:"
          {...register('answer')}
          value={watch('answer')}
          className={`${props.opacity} transition-all`}
          onChange={handleChange}
          isInvalid={Boolean(errors.answer)}
          errorMessage={errors.answer?.message}
        />
      )}
      <Button type="submit" color="danger" isDisabled={Boolean(errors.answer?.message)}>
        {TEXT_CONTENT.questions.answerBtn}
      </Button>
    </form>
  );
};

export default TextForm;

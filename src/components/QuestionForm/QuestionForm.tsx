'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, CheckboxGroup, Input, Radio, RadioGroup, Textarea } from '@nextui-org/react';
import { useEffect, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { TEXT_CONTENT } from '@/constants/constants';
import type { TOptsForm, TQuestion } from '@/types/types';
import QuestionFormSchema from '@/validation/QuestionFormSchema';

const QuestionForm = (props: {
  item: Required<TQuestion>;
  clickHandler: () => void;
  opacity: string;
}): ReactElement => {
  const {
    register,
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TOptsForm>({
    mode: 'onChange',
    resolver: zodResolver(QuestionFormSchema()),
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
      {props.item.variants ? (
        props.item.type === 'radio' ? (
          <RadioGroup
            color="danger"
            isInvalid={Boolean(errors.answer?.message)}
            errorMessage={errors.answer?.message}
            className={`${props.opacity} transition-all`}
          >
            {props.item.variants.map((item, index) => (
              <Radio key={index} value={item} {...register('answer')} onChange={handleChange}>
                {item}
              </Radio>
            ))}
          </RadioGroup>
        ) : (
          <CheckboxGroup
            color="danger"
            isInvalid={Boolean(errors.answer?.message)}
            errorMessage={errors.answer?.message}
            className={`${props.opacity} transition-all`}
          >
            {props.item.variants.map((item, index) => (
              <Checkbox key={index} value={item} {...register('answer')} onChange={handleChange}>
                {item}
              </Checkbox>
            ))}
          </CheckboxGroup>
        )
      ) : props.item.type === 'input' ? (
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

export default QuestionForm;

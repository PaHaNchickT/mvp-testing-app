'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, CheckboxGroup, Input, Radio, RadioGroup, Textarea } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { TEXT_CONTENT } from '@/constants/constants';
import { QUESTIONS } from '@/constants/questions';
import { endTest, setWrapperOpacity, updateCurrentQuestion } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';
import type { TOptsForm, TQuestion } from '@/types/types';
import QuestionFormSchema from '@/validation/QuestionFormSchema';

const QuestionForm = (props: {
  item: Required<TQuestion>;
  clickHandler: () => void;
  opacity: string;
}): ReactElement => {
  const [answers, setAnswers] = useState<
    { question: string; answer: string | string[]; isCorrect: boolean | string }[]
  >([]);
  const dispatch = useDispatch();
  const [selectedCheck, setSelectedCheck] = useState<string[]>([]);
  const currentQuestion = useSelector((state: RootState) => state.appState.currentQuestion);

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
    defaultValues: {
      answer: '',
    },
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue('answer', event.target.value, { shouldValidate: true });

    if (props.item.type !== 'check') return;

    !selectedCheck.includes(event.target.value)
      ? setSelectedCheck((el) => [...el, event.target.value])
      : setSelectedCheck((el) => el.filter((e) => e !== event.target.value));
  };

  const submit = (data: TOptsForm): void => {
    let isCorrect: string | boolean = TEXT_CONTENT.questions.isCorrect;

    if (props.item.type === 'radio' || props.item.type === 'check') {
      typeof props.item.correctAnswer === 'string'
        ? (isCorrect = data.answer === props.item.correctAnswer)
        : (isCorrect =
            JSON.stringify((data.answer as unknown as string[]).sort()) ===
            JSON.stringify(props.item.correctAnswer.sort()));
    }

    setSelectedCheck([]);
    reset({ answer: '' });
    setAnswers((e) => [
      ...e,
      {
        question: props.item.title,
        answer: data.answer,
        isCorrect,
      },
    ]);

    if (currentQuestion === QUESTIONS.length - 1) {
      console.log([...answers, data.answer]);

      dispatch(setWrapperOpacity('opacity-0'));
      setTimeout(() => {
        dispatch(endTest());
        dispatch(updateCurrentQuestion(0));
      }, 250);
    } else {
      props.clickHandler();
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col items-start gap-5">
      {props.item.variants ? (
        props.item.type === 'radio' ? (
          <RadioGroup
            color="danger"
            isInvalid={Boolean(errors.answer?.message)}
            errorMessage={errors.answer?.message}
            className={`${props.opacity} transition-all`}
            value={watch('answer')}
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
            value={selectedCheck}
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
          label={TEXT_CONTENT.questions.textLowLabel}
          {...register('answer')}
          value={watch('answer')}
          className={`${props.opacity} transition-all`}
          onChange={handleChange}
          isInvalid={Boolean(errors.answer)}
          errorMessage={errors.answer?.message}
        />
      ) : (
        <Textarea
          label={TEXT_CONTENT.questions.textHighLabel}
          {...register('answer')}
          value={watch('answer')}
          className={`${props.opacity} transition-all`}
          onChange={handleChange}
          isInvalid={Boolean(errors.answer)}
          errorMessage={errors.answer?.message}
        />
      )}
      <Button type="submit" color="danger" isDisabled={Boolean(errors.answer?.message)}>
        {currentQuestion === QUESTIONS.length - 1 ? TEXT_CONTENT.questions.endBtn : TEXT_CONTENT.questions.answerBtn}
      </Button>
    </form>
  );
};

export default QuestionForm;

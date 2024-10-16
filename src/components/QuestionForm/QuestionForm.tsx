'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Checkbox, CheckboxGroup, Input, Radio, RadioGroup, Textarea } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { QUESTIONS } from '@/constants/const-questions';
import { TEXT_CONTENT } from '@/constants/const-text-content';
import { useResize } from '@/hooks/useResize';
import { endTestSuccess, setWrapperOpacity } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';
import type { TOptsForm, TQuestion } from '@/types/types';
import { localStorageUtil } from '@/utils/localStorageUtil';
import QuestionFormSchema from '@/validation/QuestionFormSchema';

const QuestionForm = (props: {
  item: Required<TQuestion>;
  clickHandler: () => void;
  opacity: string;
}): ReactElement => {
  const [answers, setAnswers] = useState<
    { question: string; answer: string | string[]; isCorrect: boolean | string }[]
  >(localStorageUtil().getData('answers') ? JSON.parse(localStorageUtil().getData('answers')!) : []);
  const dispatch = useDispatch();
  const inputSize = useResize();
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

  // Function for onChange inputs event
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue('answer', event.target.value, { shouldValidate: true });

    if (props.item.type !== 'check') return;

    !selectedCheck.includes(event.target.value)
      ? setSelectedCheck((el) => [...el, event.target.value])
      : setSelectedCheck((el) => el.filter((e) => e !== event.target.value));
  };

  // Submit function
  const submit = (data: TOptsForm): void => {
    let isCorrect: string | boolean = TEXT_CONTENT.questions.isCorrect;

    // Validation correct answers
    if (props.item.type === 'radio' || props.item.type === 'check') {
      typeof props.item.correctAnswer === 'string'
        ? (isCorrect = data.answer === props.item.correctAnswer)
        : (isCorrect =
            JSON.stringify((data.answer as unknown as string[]).sort()) ===
            JSON.stringify(props.item.correctAnswer.sort()));
    }

    // LocalStorage saving
    localStorageUtil().saveData(
      'answers',
      JSON.stringify([
        ...answers,
        {
          question: props.item.question,
          answer: data.answer,
          isCorrect,
        },
      ]),
    );

    setSelectedCheck([]);
    reset({ answer: '' });
    setAnswers((e) => [
      ...e,
      {
        question: props.item.question,
        answer: data.answer,
        isCorrect,
      },
    ]);

    // End of the test
    if (currentQuestion === QUESTIONS.length - 1) {
      console.log([...answers, data.answer]);

      dispatch(setWrapperOpacity('opacity-0'));
      setTimeout(() => {
        dispatch(endTestSuccess());
      }, 250);
    } else {
      props.clickHandler();
    }
  };

  // Props for inputs
  const itemStyleProps = {
    isInvalid: Boolean(errors.answer?.message),
    errorMessage: errors.answer?.message,
    size: inputSize,
    className: 'transition-all',
  };

  const itemVariantsProps = {
    color: 'danger' as const,
    ...itemStyleProps,
    className: `${props.opacity}`,
  };

  const itemNonVariantsProps = {
    ...register('answer'),
    value: watch('answer'),
    onChange: handleChange,
    ...itemStyleProps,
    className: `${props.opacity} block sm:inline-block`,
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-col items-start gap-5">
      {props.item.variants ? (
        props.item.type === 'radio' ? (
          <RadioGroup {...itemVariantsProps} value={watch('answer')}>
            {props.item.variants.map((item, index) => (
              <Radio key={index} value={item} {...register('answer')} onChange={handleChange}>
                {item}
              </Radio>
            ))}
          </RadioGroup>
        ) : (
          <CheckboxGroup {...itemVariantsProps} value={selectedCheck}>
            {props.item.variants.map((item, index) => (
              <Checkbox key={index} value={item} {...register('answer')} onChange={handleChange}>
                {item}
              </Checkbox>
            ))}
          </CheckboxGroup>
        )
      ) : props.item.type === 'input' ? (
        <Input type="text" label={TEXT_CONTENT.questions.textLowLabel} {...itemNonVariantsProps} />
      ) : (
        <Textarea label={TEXT_CONTENT.questions.textHighLabel} {...itemNonVariantsProps} />
      )}
      <Button
        type="submit"
        color="danger"
        isDisabled={Boolean(errors.answer?.message)}
        className="self-center sm:self-start"
      >
        {currentQuestion === QUESTIONS.length - 1 ? TEXT_CONTENT.questions.endBtn : TEXT_CONTENT.questions.answerBtn}
      </Button>
    </form>
  );
};

export default QuestionForm;

/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState, type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { updateCurrentQuestion } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';
import type { TQuestion } from '@/types/types';
import { localStorageUtil } from '@/utils/localStorageUtil';

import QuestionForm from '../QuestionForm/QuestionForm';

const TestQuestion = (props: { item: TQuestion }): ReactElement => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState('opacity-100');
  const currentQuestion = useSelector((state: RootState) => state.appState.currentQuestion);

  const clickHandler = (): void => {
    setOpacity('opacity-0');
    setTimeout(() => {
      dispatch(updateCurrentQuestion(currentQuestion + 1));
      setOpacity('opacity-100');
    }, 250);
  };

  useEffect(() => {
    localStorageUtil().saveData('currentQuestion', currentQuestion.toString());
  }, [currentQuestion]);

  return (
    <>
      <div className="flex flex-col gap-5 text-sm sm:text-base">
        <p className={`text-left ${opacity} transition-all font-bold sm:text-justify`}>{props.item.title}</p>
        <QuestionForm item={props.item as Required<TQuestion>} clickHandler={clickHandler} opacity={opacity} />
      </div>
    </>
  );
};

export default TestQuestion;

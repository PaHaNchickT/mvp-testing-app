/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { QUESTIONS } from '@/constants/QUESTIONS';
import { TEXT_CONTENT } from '@/constants/TEXT_CONTENT';
import { TIMER_CONFIG } from '@/constants/TIMER_CONFIG';
import { setWrapperOpacity } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';

import TestItems from '../TestItems/TestItems';
import TestQuestion from '../TestQuestion/TestQuestion';
import Timer from '../Timer/Timer';

const TestWrapper = (): ReactElement => {
  const dispatch = useDispatch();
  const appState = useSelector((state: RootState) => state.appState);

  useEffect(() => {
    dispatch(setWrapperOpacity('opacity-100'));
  }, []);

  return (
    <section
      className={`flex flex-col items-start gap-5 min-w-[400px] max-w-[600px] ${appState.wrapperOpacity} transition-all`}
    >
      <div className="w-full flex gap-5 justify-between items-center">
        <h2 className="font-black text-2xl">{TEXT_CONTENT.questions.title}</h2>
        {TIMER_CONFIG.isTimerExists && <Timer />}
      </div>
      <div className="w-full flex justify-between gap-1">
        {QUESTIONS.map((item, index) => (
          <TestItems key={index} index={index} />
        ))}
      </div>
      <TestQuestion item={QUESTIONS[appState.currentQuestion]} />
    </section>
  );
};

export default TestWrapper;

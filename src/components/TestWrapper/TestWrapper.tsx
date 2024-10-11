'use client';

import { useEffect, useState, type ReactElement } from 'react';
import { useSelector } from 'react-redux';

import { TEXT_CONTENT } from '@/constants/constants';
import { QUESTIONS } from '@/constants/questions';
import type { RootState } from '@/redux/store';

import TestItems from '../TestItems/TestItems';
import TestQuestion from '../TestQuestion/TestQuestion';

const TestWrapper = (): ReactElement => {
  const [opacity, setOpacity] = useState('opacity-0');
  const currentQuestion = useSelector((state: RootState) => state.appState.currentQuestion);

  useEffect(() => {
    setOpacity('opacity-100');
  }, []);

  return (
    <section className={`flex flex-col items-start gap-5 min-w-[400px] max-w-[600px] ${opacity} transition-all`}>
      <div className="flex gap-5">
        <h2>{TEXT_CONTENT.questions.title}</h2>
        <p>00:00</p>
      </div>
      <div className="w-full flex justify-between gap-1">
        {QUESTIONS.map((item, index) => (
          <TestItems key={index} index={index} />
        ))}
      </div>
      <TestQuestion item={QUESTIONS[currentQuestion]} />
    </section>
  );
};

export default TestWrapper;

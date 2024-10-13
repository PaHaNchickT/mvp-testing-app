'use client';

import { useEffect, useState, type ReactElement } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '@/redux/store';

const TestItems = (props: { index: number }): ReactElement => {
  const [bgColor, setBgColor] = useState('bg-default');
  const currentQuestion = useSelector((state: RootState) => state.appState.currentQuestion);

  useEffect(() => {
    if (props.index === currentQuestion) {
      setBgColor('bg-[#f31260]');
    } else if (props.index < currentQuestion) {
      setBgColor('bg-black');
    }
  }, [currentQuestion, props.index]);

  return <div className={`w-full h-[5px] ${bgColor} transition-all`}></div>;
};

export default TestItems;

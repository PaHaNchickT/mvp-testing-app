'use client';

import { Button } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { updateCurrentQuestion } from '@/redux/fieldItemsSlice';
import type { RootState } from '@/redux/store';
import type { TQuestion } from '@/types/types';

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

  return (
    <>
      <div className={`${opacity} transition-all`}>
        <p className="text-justify">{props.item.title}</p>
        <p>{props.item.type}</p>
      </div>
      <Button color="danger" onPress={clickHandler}>
        Next
      </Button>
    </>
  );
};

export default TestQuestion;

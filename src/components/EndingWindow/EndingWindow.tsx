'use client';

import { Button } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { TEXT_CONTENT } from '@/constants/constants';
import { startTest } from '@/redux/fieldItemsSlice';

const EndingWindow = (): ReactElement => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState('opacity-100');

  const clickHandler = (): void => {
    setOpacity('opacity-0');
    setTimeout(() => dispatch(startTest()), 250);
  };

  return (
    <section className={`flex flex-col justify-center items-center gap-5 w-[400px] ${opacity} transition-all`}>
      <h2 className="font-black text-2xl">{TEXT_CONTENT.ending.title}</h2>
      <p className="text-sm text-center">{TEXT_CONTENT.ending.text}</p>
      <Button color="danger" onPress={clickHandler}>
        {TEXT_CONTENT.ending.button}
      </Button>
    </section>
  );
};

export default EndingWindow;

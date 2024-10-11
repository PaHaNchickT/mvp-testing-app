'use client';

import { Button, Divider, Image } from '@nextui-org/react';
import type { Dispatch, SetStateAction } from 'react';
import { useState, type ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/constants';

const WelcomeWindow = (props: { setIsStarted: Dispatch<SetStateAction<boolean>> }): ReactElement => {
  const [opacity, setOpacity] = useState('opacity-100');

  const clickHandler = (): void => {
    setOpacity('opacity-0');
    setTimeout(() => props.setIsStarted(true), 250);
  };

  return (
    <section className={`flex justify-center gap-5 h-[400px] ${opacity} transition-all`}>
      <Image alt="nextui logo" height="100%" radius="sm" src="./images/avengers-poster.jpg" />
      <Divider orientation="vertical" />
      <div className="w-1/3 flex flex-col gap-5 justify-center items-start">
        <h2 className="font-black text-2xl">{TEXT_CONTENT.welcome.title}</h2>
        <p className="text-sm">{TEXT_CONTENT.welcome.text}</p>
        <Button color="danger" onPress={clickHandler}>
          {TEXT_CONTENT.welcome.button}
        </Button>
      </div>
    </section>
  );
};

export default WelcomeWindow;

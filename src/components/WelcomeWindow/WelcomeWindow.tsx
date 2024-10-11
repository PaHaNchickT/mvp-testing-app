'use client';

import { Button, Divider, Image } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/constants';

const WelcomeWindow = (): ReactElement => {
  return (
    <section className="flex justify-center gap-5 h-[400px]">
      <Image alt="nextui logo" height="100%" radius="sm" src="./images/avengers-poster.jpg" />
      <Divider orientation="vertical" />
      <div className="w-1/3 flex flex-col gap-5 justify-center items-start">
        <h2 className="font-black text-2xl">{TEXT_CONTENT.welcome.title}</h2>
        <p className="text-sm">{TEXT_CONTENT.welcome.text}</p>
        <Button color="danger">{TEXT_CONTENT.welcome.button}</Button>
      </div>
    </section>
  );
};

export default WelcomeWindow;

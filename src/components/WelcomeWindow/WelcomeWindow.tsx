'use client';

import { Button, Divider, Image } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { ASSETS_PATH } from '@/constants/ASSETS_PATH';
import { TEXT_CONTENT } from '@/constants/TEXT_CONTENT';
import { startTest } from '@/redux/appStateSlice';

const WelcomeWindow = (): ReactElement => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState('opacity-0');

  const clickHandler = (): void => {
    setOpacity('opacity-0');
    setTimeout(() => dispatch(startTest()), 250);
  };

  useEffect(() => {
    setTimeout(() => setOpacity('opacity-100'), 250);
  }, []);

  return (
    <section className={`flex justify-center gap-5 h-[400px] ${opacity} transition-all`}>
      <Image alt="nextui logo" height="100%" radius="sm" src={ASSETS_PATH.mainImage} />
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

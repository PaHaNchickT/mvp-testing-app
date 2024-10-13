'use client';

import { Button, Divider, Image } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { ASSETS_PATH } from '@/constants/ASSETS_PATH';
import { TEXT_CONTENT } from '@/constants/TEXT_CONTENT';
import { startTest } from '@/redux/appStateSlice';
import { localStorageUtil } from '@/utils/localStorage';

const WelcomeWindow = (): ReactElement => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState('opacity-0');

  const clickHandler = (): void => {
    setOpacity('opacity-0');
    localStorageUtil().saveData('isTestStarted', JSON.stringify(true));
    setTimeout(() => dispatch(startTest()), 250);
  };

  useEffect(() => {
    setTimeout(() => setOpacity('opacity-100'), 250);
  }, []);

  return (
    <section className={`flex justify-center pr-5 gap-5 h-[400px] ${opacity} transition-all md:pr-0`}>
      <Image alt="nextui logo" height="100%" radius="sm" src={ASSETS_PATH.mainImage} className="hidden md:block" />
      <Divider orientation="vertical" className="hidden md:block" />
      <div className="w-full flex flex-col gap-5 justify-center items-center text-center md:text-start md:w-1/3 md:items-start">
        <h2 className="font-black text-xl w-full lg:text-2xl">{TEXT_CONTENT.welcome.title}</h2>
        <p className="text-sm w-full">{TEXT_CONTENT.welcome.text}</p>
        <Button color="danger" onPress={clickHandler}>
          {TEXT_CONTENT.welcome.button}
        </Button>
      </div>
    </section>
  );
};

export default WelcomeWindow;

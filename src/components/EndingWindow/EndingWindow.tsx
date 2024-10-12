'use client';

import { Button } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';
import { useDispatch } from 'react-redux';

import { TEXT_CONTENT } from '@/constants/TEXT_CONTENT';
import { clearTest } from '@/redux/appStateSlice';
import { localStorageUtil } from '@/utils/localStorage';

const EndingWindow = (props: { state: string }): ReactElement => {
  const dispatch = useDispatch();
  const [opacity, setOpacity] = useState('opacity-0');

  const clickHandler = (): void => {
    setOpacity('opacity-0');
    setTimeout(() => dispatch(clearTest()), 150);
  };

  useEffect(() => {
    setTimeout(() => setOpacity('opacity-100'), 150);
    localStorageUtil().clearStorage();
  }, []);

  return (
    <section className={`flex flex-col justify-center items-center gap-5 w-[400px] ${opacity} transition-all`}>
      <h2 className="font-black text-2xl">{TEXT_CONTENT.ending[props.state].title}</h2>
      <p className="text-sm text-center">{TEXT_CONTENT.ending[props.state].text}</p>
      <Button color="danger" onPress={clickHandler}>
        {TEXT_CONTENT.ending[props.state].button}
      </Button>
    </section>
  );
};

export default EndingWindow;

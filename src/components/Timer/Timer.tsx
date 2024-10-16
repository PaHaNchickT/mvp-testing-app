/* eslint-disable react-compiler/react-compiler */
/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useEffect, useState, type ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { TIMER_CONFIG } from '@/constants/const-timer-config';
import { endTestFailure, setWrapperOpacity } from '@/redux/appStateSlice';
import type { RootState } from '@/redux/store';
import { localStorageUtil } from '@/utils/localStorageUtil';

const Timer = (): ReactElement => {
  const dispatch = useDispatch();
  const [seconds, setSeconds] = useState(
    localStorageUtil().getData('seconds') ? +localStorageUtil().getData('seconds')! : TIMER_CONFIG.seconds,
  );
  const minutes = Math.floor(seconds / 60);

  const appState = useSelector((state: RootState) => state.appState);

  useEffect(() => {
    const interval = setInterval(() => setSeconds((sec) => sec - 1), 1000);

    if (!seconds) {
      clearInterval(interval);
      dispatch(setWrapperOpacity('opacity-0'));
      setTimeout(() => dispatch(endTestFailure()), 150);
    }

    return (): void => clearInterval(interval);
  }, [appState.isTestStarted, seconds]);

  useEffect(() => {
    const handleBeforeUnload = (): void => {
      localStorageUtil().saveData('seconds', seconds.toString());
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return (): void => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [seconds]);

  return (
    <p className="text-lg w-[55px] text-center sm:text-xl">{`${minutes.toString().padStart(2, '0')}:${(seconds - minutes * 60).toString().padStart(2, '0')}`}</p>
  );
};

export default Timer;

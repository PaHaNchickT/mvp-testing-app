'use client';

import { type ReactElement } from 'react';
import { useSelector } from 'react-redux';

import TestWrapper from '@/components/TestWrapper/TestWrapper';
import WelcomeWindow from '@/components/WelcomeWindow/WelcomeWindow';
import type { RootState } from '@/redux/store';

const Controller = (): ReactElement => {
  let UI = <WelcomeWindow />;
  const appState = useSelector((state: RootState) => state.appState);

  if (appState.isTestStarted) UI = <TestWrapper />;
  if (appState.isTestEnded) UI = <p>Ended</p>;

  return UI;
};

export default Controller;

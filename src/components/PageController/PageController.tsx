'use client';

import { type ReactElement } from 'react';
import { useSelector } from 'react-redux';

import TestWrapper from '@/components/TestWrapper/TestWrapper';
import WelcomeWindow from '@/components/WelcomeWindow/WelcomeWindow';
import type { RootState } from '@/redux/store';

import EndingWindow from '../EndingWindow/EndingWindow';

const PageController = (): ReactElement => {
  let UI = <WelcomeWindow />;
  const appState = useSelector((state: RootState) => state.appState);

  if (appState.isTestStarted) UI = <TestWrapper />;
  if (appState.isTestEnded) UI = <EndingWindow state={appState.isSuccess ? 'success' : 'failure'} />;

  return UI;
};

export default PageController;

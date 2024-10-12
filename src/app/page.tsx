'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';
import { Provider } from 'react-redux';

import Controller from '@/components/Controller/Controller';

import { store } from '../redux/store';

const App = (): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        <main className="flex justify-center">
          <Provider store={store}>
            <Controller />
          </Provider>
        </main>
      ) : (
        <Spinner color="danger" size="lg" />
      )}
    </>
  );
};

export default App;

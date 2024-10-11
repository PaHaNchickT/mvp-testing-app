'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';
import { Provider } from 'react-redux';

import { store } from '../redux/store';

const App = (): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.addEventListener('contextmenu', (event) => event.preventDefault());
  }, []);

  return (
    <>
      {mounted ? (
        <main className="flex justify-center">
          <Provider store={store}>
            <p>Test</p>
          </Provider>
        </main>
      ) : (
        <Spinner color="danger" size="lg" />
      )}
    </>
  );
};

export default App;

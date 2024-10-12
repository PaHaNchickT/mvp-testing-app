'use client';

import { useEffect, useState, type ReactElement } from 'react';

const Timer = (): ReactElement => {
  const [seconds, setSeconds] = useState(600); //600
  const minutes = Math.floor(seconds / 60);

  useEffect(() => {
    // if (!gameState.isGameStarted) return;

    const interval = setInterval(() => setSeconds((sec) => sec - 1), 1000);

    // if (gameState.isGameEnded || seconds === 999) clearInterval(interval);
    return (): void => clearInterval(interval);
  }, []);

  return <p>{`${minutes.toString().padStart(2, '0')}:${(seconds - minutes * 60).toString().padStart(2, '0')}`}</p>;
};

export default Timer;

'use client';

import { useEffect, useState, type ReactElement } from 'react';

const TestWrapper = (): ReactElement => {
  const [opacity, setOpacity] = useState('opacity-0');

  useEffect(() => {
    setOpacity('opacity-100');
  }, []);

  return (
    <section className={`flex justify-center gap-5 h-[400px] ${opacity} transition-all`}>
      <p>Test</p>
    </section>
  );
};

export default TestWrapper;

import { useState, useEffect } from 'react';

export const useResize = (): 'sm' | 'md' => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (event: Event): void => {
      setWidth((event.target as Window).innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return (): void => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width <= 640 ? 'sm' : 'md';
};


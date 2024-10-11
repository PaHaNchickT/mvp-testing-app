'use client';

import { type ReactElement } from 'react';

import type { TQuestion } from '@/types/types';

const TestQuestion = (props: { item: TQuestion }): ReactElement => {
  return (
    <div>
      <p className='text-justify'>{props.item.title}</p>
      <p>{props.item.type}</p>
    </div>
  );
};

export default TestQuestion;

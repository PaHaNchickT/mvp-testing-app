'use client';

import { Button } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import type { ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/const-text-content';

export default function NotFound(): ReactElement {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center text-center">
      <div className="flex flex-col z-[2] gap-5 items-center">
        <div>
          <p className="text-3xl text-center sm:text-4xl">{TEXT_CONTENT.error.notFoundTitle}</p>
          <p className="text-sm sm:text-xl">{TEXT_CONTENT.error.notFoundMsg}</p>
        </div>
        <Button onClick={() => router.push('/')} color="danger">
          {TEXT_CONTENT.error.homeBtn}
        </Button>
      </div>
    </div>
  );
}

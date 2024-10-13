'use client';

import { Button } from '@nextui-org/react';
import type { ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/const-text-content';

const Error = (): ReactElement => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center gap-4 mt-4">
        <p className="text-center text-xl sm:text-2xl">{TEXT_CONTENT.error.errorMsg}</p>
        <Button onClick={() => location.reload()} color="danger">
          {TEXT_CONTENT.error.reloadBtn}
        </Button>
      </div>
    </div>
  );
};

export default Error;

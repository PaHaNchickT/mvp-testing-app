'use client';

import { type ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/TEXT_CONTENT';

const Header = (): ReactElement => {
  return (
    <header className="h-[60px] bg-[#c0c0c0] flex justify-center items-center font-black">
      <h1 className="text-2xl sm:text-3xl">{TEXT_CONTENT.header.headerTitle}</h1>
    </header>
  );
};

export default Header;

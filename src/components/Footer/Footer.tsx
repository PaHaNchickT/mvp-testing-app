'use client';

import { Link } from '@nextui-org/react';
import type { ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/TEXT_CONTENT';

export const Footer = (): ReactElement => {
  return (
    <footer className="font-medium bg-[#c0c0c0] gap-2 flex flex-col flex-wrap justify-center items-center text-xs p-5 relative md:text-sm sm:flex-row sm:justify-between sm:flex-row">
      <p>{TEXT_CONTENT.footer.madeby}</p>
      <p className=" w-[62px]  relative left-0 sm:absolute sm:text-center sm:left-[calc((100%-62px)/2)]">2024</p>
      <Link href="https://ternopavel.ru/" underline="hover" target="_blank" size="sm">
        {TEXT_CONTENT.footer.works}
      </Link>
    </footer>
  );
};

export default Footer;

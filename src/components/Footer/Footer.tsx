'use client';

import { Link } from '@nextui-org/react';
import type { ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/const-text-content';

export const Footer = (): ReactElement => {
  return (
    <footer className="font-medium bg-[#c0c0c0] gap-2 flex flex-col flex-wrap justify-center items-center text-sm p-5 relative md:flex-row md:justify-between md:flex-row">
      <p>{TEXT_CONTENT.footer.madeby}</p>
      <p className=" relative left-0 md:absolute md:text-center md:left-[calc((100%-62px)/2)] ms:w-[62px]">2024</p>
      <Link href="https://ternopavel.ru/" underline="hover" target="_blank" size="sm">
        {TEXT_CONTENT.footer.works}
      </Link>
    </footer>
  );
};

export default Footer;

import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Comfortaa } from 'next/font/google';
import { type ReactElement } from 'react';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';

export const metadata: Metadata = {
  title: 'Testik',
  description: 'MVP platform for students testing',
};

const comfortaa = Comfortaa({ subsets: ['latin'] });

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<ReactElement> => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={comfortaa.className}>
        <div className="w-screen min-h-screen flex flex-col justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

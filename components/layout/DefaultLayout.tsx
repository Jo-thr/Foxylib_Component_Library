import { BrowserView } from '@components/foxylib/BrowserView/BrowserView';

import useTranslation from '@hooks/useTranslation';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import imageUrl from '@public/adrian-infernus-GLf7bAwCdYg-unsplash.jpg';

export interface DefaultLayoutProps {
  children: ReactNode;
}

export const LeftSide = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="relative col-span-1 flex flex-col w-full h-full">
      <BrowserView>{children}</BrowserView>
      <Image
        src={imageUrl}
        alt="Background Image"
        fill
        className="z-0 h-full bg-cover bg-center"
      />
    </div>
  );
};
export const RightSide = ({ children, className }: DefaultLayoutProps) => {
  return (
    <div
      className={`relative col-span-1 flex flex-col justify-center items-center w-full h-full p-20 ${className}`}
    >
      {children}
    </div>
  );
};

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen min-h-screen overflow-hidden w-screen">
      <div className="absolute top-0 z-10 flex w-full flex-row items-center justify-between border-b bg-white py-4 px-8 h-16">
        <Link className="flex flex-row items-center gap-4" href={'/'}>
          <h1 className="text-xl font-black italic">Foxylib</h1>
        </Link>
        <div className="flex w-max flex-row items-center justify-between gap-4 divide-x-2 divide-solid">
          <a
            target="_blank"
            href="https://github.com/Jo-thr/foxylib"
            rel="noopener noreferrer"
          >
            <Image
              src={'/github.png'}
              alt={'github'}
              width={'20'}
              height={'20'}
            />
          </a>
          {/* <SwitchLang /> */}
        </div>
      </div>
      <div className="relative w-full h-full grid grid-cols-2">{children}</div>
    </div>
  );
};

import { ReactNode } from 'react';

export interface BrowserViewProps {
  children: ReactNode;
}

export const BrowserView = ({ children }: BrowserViewProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-max w-max min-w-[30rem]">
      <div className="bg-[#F5F5F5]/50 p-3 rounded-xl w-full h-full">
        <div className="flex flex-col bg-white items-center justify-center rounded-lg overflow-hidden">
          <div className="w-full h-full flex justify-start items-center gap-2 p-4 bg-[#F5F5F5]/60">
            <div className="w-3 aspect-square bg-red-400 rounded-full"></div>
            <div className="w-3 aspect-square bg-amber-400 rounded-full"></div>
            <div className="w-3 aspect-square bg-emerald-400 rounded-full"></div>
          </div>
          <div className="w-full h-full flex justify-center items-center p-4 min-h-[12rem]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

import { ReactNode } from 'react';

export interface BrowserViewProps {
  children: ReactNode;
}

export const DarkBrowserView = ({ children }: BrowserViewProps) => {
  return (
    <div className="relative h-max w-max min-w-[30rem] max-w-3xl max-h-[30rem]">
      <div className="bg-[#433E3E]/70 p-3 rounded-xl w-full h-full ">
        <div className="relative flex flex-col bg-[#282626] text-[#F5F5F5] items-center justify-center rounded-lg overflow-scroll max-h-full">
          <div className="sticky top-0 left-0 w-full h-full flex justify-start items-center gap-2 p-4 bg-[#433E3E]/50">
            <div className="w-3 aspect-square bg-red-400 rounded-full"></div>
            <div className="w-3 aspect-square bg-amber-400 rounded-full"></div>
            <div className="w-3 aspect-square bg-emerald-400 rounded-full"></div>
          </div>
          <div className="w-full h-full flex flex-col items-center min-h-[12rem]">
            <pre className="whitespace-pre w-full h-full p-6">
              <code className={`language-tsx text-sm`}>{children}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

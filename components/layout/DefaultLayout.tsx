import { Sidebar } from "@components/foxylib/Sidebar/Sidebar";
import SwitchLang from "@components/foxylib/SwitchLang/switchLang";
import useTranslation from "@hooks/useTranslation";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const data = useTranslation().data;

  console.log(data);
  return (
    <div className="h-screen min-h-screen overflow-hidden">
      <div className="absolute top-0 z-10 flex w-full flex-row items-center justify-between border-b bg-white py-4 px-8">
        <Link className="flex flex-row items-center gap-4" href={"/"}>
          <Image src={"/fox.png"} alt={"fox"} width={"34"} height={"34"} />
          <h1 className="text-2xl font-black italic">Foxylib</h1>
        </Link>
        <div className="flex w-max flex-row items-center justify-between gap-4 divide-x-2 divide-solid">
          <a
            target="_blank"
            href="https://github.com/Jo-thr/foxylib"
            rel="noopener noreferrer"
          >
            <Image
              src={"/github.png"}
              alt={"github"}
              width={"24"}
              height={"24"}
            />
          </a>
          {/* <SwitchLang /> */}
        </div>
      </div>
      <div className="flex h-full w-full flex-row pt-16">
        <Sidebar data={data.navigation} />
        <div className="flex w-full max-w-full flex-col items-start justify-center bg-gray-50 px-40">
          {children}
        </div>
      </div>
    </div>
  );
};

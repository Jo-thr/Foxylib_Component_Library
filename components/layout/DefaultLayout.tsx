import { Sidebar } from "@components/foxylib/Sidebar/Sidebar";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import datas from "@data/datas";

export interface DefaultLayoutProps {
  children: ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="h-screen min-h-screen overflow-hidden">
      <div className="absolute top-0 z-10 flex w-full flex-row items-center justify-between border-b bg-white py-4 px-8">
        <Link className="flex flex-row items-center gap-4" href={"/"}>
          <Image src={"/fox.png"} alt={"fox"} width={"34"} height={"34"} />
          <h1 className="text-2xl font-black italic">Foxylib</h1>
        </Link>
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
      </div>
      <div className="flex h-full w-full flex-row pt-16">
        <Sidebar data={datas.navigation} />
        {children}
      </div>
    </div>
  );
};

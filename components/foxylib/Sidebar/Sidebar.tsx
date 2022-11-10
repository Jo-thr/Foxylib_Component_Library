import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import ctl from "@netlify/classnames-template-literals";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export interface SidebarProps {
  data: {
    id: number;
    name: string;
    path: string;
    current: boolean;
  }[];
}

const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "#", current: true },
  { name: "Team", icon: UsersIcon, href: "#", count: 3, current: false },
  { name: "Projects", icon: FolderIcon, href: "#", count: 4, current: false },
  { name: "Calendar", icon: CalendarIcon, href: "#", current: false },
  { name: "Documents", icon: InboxIcon, href: "#", count: 12, current: false },
  { name: "Reports", icon: ChartBarIcon, href: "#", current: false },
];

export const Sidebar = ({ data }: SidebarProps) => {
  const pathname = useRouter().pathname;

  return (
    <div className="flex min-w-[14rem] flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-4">
      <div className="mt-5 flex flex-grow flex-col">
        <nav className="flex flex-col gap-2 bg-white" aria-label="Sidebar">
          {data.map((item) => (
            <div
              key={item.name}
              className={ctl(`flex items-start border-l-4 border-transparent text-sm font-medium
                ${
                  pathname === item.path &&
                  "border-l-4 !border-primary bg-orange-100"
                }
                `)}
            >
              <Link href={item.path} className="flex w-full py-3 px-5">
                <span>{item.name}</span>
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

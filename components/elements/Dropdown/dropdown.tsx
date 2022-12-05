import {
  ArchiveBoxIcon,
  ArrowRightCircleIcon,
  ChevronDownIcon,
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  HeartIcon,
  PencilSquareIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import cn from "clsx";

export type DropdownProps = {
  heading?: boolean;
  divider?: boolean;
  icon?: boolean;
  aspect?: "basic" | "minimal";
  children: string;
};

export const Dropdown = ({
  children,
  heading = false,
  divider = false,
  icon = false,
  aspect = "basic",
}: DropdownProps) => {
  const [clicked, setClicked] = useState(false);

  const list = [
    {
      id: 1,
      icon: <PencilSquareIcon className="mr-2 h-4 w-4" />,
      name: "Edit",
      path: "#",
    },
    {
      id: 1,
      icon: <DocumentDuplicateIcon className="mr-2 h-4 w-4" />,
      name: "Duplicate",
      path: "#",
    },
    {
      id: 1,
      icon: <ArchiveBoxIcon className="mr-2 h-4 w-4" />,
      name: "Archive",
      path: "#",
    },
    {
      id: 1,
      icon: <ArrowRightCircleIcon className="mr-2 h-4 w-4" />,
      name: "Move",
      path: "#",
    },
    {
      id: 1,
      icon: <HeartIcon className="mr-2 h-4 w-4" />,
      name: "Add to favorite",
      path: "#",
    },
    {
      id: 1,
      icon: <PencilSquareIcon className="mr-2 h-4 w-4" />,
      name: "Account settings",
      path: "#",
    },
    {
      id: 1,
      icon: <PowerIcon className="mr-2 h-4 w-4" />,
      name: "Sign out",
      path: "#",
    },
  ];

  return (
    <div className="relative w-full">
      <button
        onClick={() => setClicked(!clicked)}
        className={cn(
          `relative top-0 inline-flex w-max items-center justify-center px-4 py-2 text-sm font-medium 
          ${
            aspect === "basic" &&
            "rounded-md bg-primary bg-opacity-60 text-white hover:bg-opacity-90 "
          }`
        )}
      >
        {aspect === "basic" && (
          <>
            {children}
            {clicked === false ? (
              <ChevronDownIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
            ) : (
              <ChevronDownIcon className="ml-2 h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
            )}
          </>
        )}
        {aspect === "minimal" && (
          <EllipsisVerticalIcon className="h-6 w-6 stroke-2" />
        )}
      </button>
      <div
        className={cn(
          `top-10 right-0 z-10 h-max w-60 origin-top-right rounded-xl border border-gray-50 bg-white py-3 px-2 shadow-lg transition duration-700 ease-in-out ${
            clicked === false ? "hidden" : "absolute"
          }`
        )}
      >
        <ul
          className={cn(`flex w-full flex-col gap-1 ${divider && "divide-y "}`)}
        >
          {list.map((item, index) => (
            <li key={item.id} className="cursor-pointer ">
              {index === 0 && heading && (
                <div className="flex flex-col px-2 py-3 pt-1 text-sm">
                  Signed in as
                  <span className="font-bold text-primary">
                    foxylib@contact.com
                  </span>
                </div>
              )}
              <Link
                className="flex w-full items-center rounded-md  p-2 text-sm hover:bg-primary hover:text-white"
                href={item.path}
              >
                {icon === true && <>{item.icon}</>}

                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

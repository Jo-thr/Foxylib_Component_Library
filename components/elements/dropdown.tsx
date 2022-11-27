import Image from "next/image";
import defaultPlaceholder from "@assets/images/default-placeholder.png";
import ctl from "@netlify/classnames-template-literals";
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

export type DropdownProps = {
  heading?: boolean;
  divider?: boolean;
  icon?: boolean;
  aspect?: "normal" | "minimal";
  children: string;
};

export const Dropdown = ({
  children,
  heading = false,
  divider = false,
  icon = false,
  aspect = "normal",
}: DropdownProps) => {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);

  const list = [
    {
      id: 1,
      icon: <PencilSquareIcon className="mr-2 h-4 w-4" />,
      name: "Edit",
    },
    {
      id: 1,
      icon: <DocumentDuplicateIcon className="mr-2 h-4 w-4" />,
      name: "Duplicate",
    },
    {
      id: 1,
      icon: <ArchiveBoxIcon className="mr-2 h-4 w-4" />,
      name: "Archive",
    },
    {
      id: 1,
      icon: <ArrowRightCircleIcon className="mr-2 h-4 w-4" />,
      name: "Move",
    },
    {
      id: 1,
      icon: <HeartIcon className="mr-2 h-4 w-4" />,
      name: "Add to favorite",
    },
    {
      id: 1,
      icon: <PencilSquareIcon className="mr-2 h-4 w-4" />,
      name: "Account settings",
    },
    {
      id: 1,
      icon: <PowerIcon className="mr-2 h-4 w-4" />,
      name: "Sign out",
    },
  ];

  return (
    <div className="relative w-full">
      <button
        onClick={() => setClicked(!clicked)}
        className={ctl(
          `relative top-0 inline-flex w-max items-center justify-center px-4 py-2 text-sm font-medium 
          ${
            aspect === "normal" &&
            "rounded-md bg-secondary bg-opacity-60 text-white hover:bg-opacity-90 "
          }`
        )}
      >
        {aspect === "normal" && (
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
        className={ctl(
          `top-10 right-0 h-max w-60 origin-top-right rounded-xl border border-gray-50 bg-white py-3 px-2 shadow-lg transition duration-700 ease-in-out ${
            clicked === false ? "hidden" : "absolute"
          }`
        )}
      >
        <ul
          className={ctl(
            `flex w-full flex-col gap-1 ${divider && "divide-y "}`
          )}
        >
          {list.map((item) => (
            <li key={item.id} className="cursor-pointer ">
              <div className="flex w-full items-center rounded-md  p-2 text-sm hover:bg-secondary hover:text-white">
                {icon === true && <>{item.icon}</>}

                {item.name}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import {
  ChatBubbleLeftRightIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import ctl from "@netlify/classnames-template-literals";
import cn from "clsx";
import { type } from "os";
import { useState } from "react";

export type TabsProps = {
  icon?: boolean;
  badge?: boolean;
  aspect?: "underline" | "pills" | "bar";
};

const tabs = [
  {
    name: "Home Page",
    href: "#",
    icon: <HomeIcon className="mr-2 h-4 w-4 stroke-2" />,
    current: true,
  },
  {
    name: "Blog",
    href: "#",
    icon: <ChatBubbleLeftRightIcon className="mr-2 h-4 w-4 stroke-2" />,
    badge: "21",
    current: false,
  },
  {
    name: "Shopping",
    href: "#",
    icon: <ShoppingBagIcon className="mr-2 h-4 w-4 stroke-2" />,
    badge: "107",
    current: false,
  },
  {
    name: "Cart",
    href: "#",
    icon: <ChatBubbleLeftRightIcon className="mr-2 h-4 w-4 stroke-2" />,
    badge: "3",
    current: false,
  },
  {
    name: "Account",
    href: "#",
    icon: <UserIcon className="mr-2 h-4 w-4 stroke-2" />,
    current: false,
  },
];

export const Tabs = ({
  aspect = "underline",
  icon = false,
  badge = false,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(tabs[0].name);
  return (
    <div>
      {/* TAB NAV */}
      <div className="block">
        <div
          className={cn(
            `${aspect === "underline" && "border-b border-gray-200 "}`
          )}
        >
          <nav
            className={cn(
              `-mb-px flex space-x-8  ${
                aspect === "bar" && "space-x-0 divide-x "
              } ${aspect === "pills" && "space-x-4"}`
            )}
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <>
                {aspect === "underline" && (
                  <a
                    key={tab.name}
                    href={tab.href}
                    onClick={() => setActiveTab(tab.name)}
                    className={ctl(`flex flex-row items-center whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium
                  ${
                    tab.name === activeTab
                      ? "border-primary text-primary"
                      : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }
                  `)}
                  >
                    {icon && <>{tab.icon}</>}
                    {tab.name}
                    {badge && tab.badge && (
                      <div
                        className={cn(
                          `ml-2 flex cursor-pointer items-center rounded-lg py-1 px-3 text-xs font-medium uppercase text-white
                      ${tab.name === activeTab ? "bg-primary" : "bg-gray-300"}
                      `
                        )}
                      >
                        {tab.badge}
                      </div>
                    )}
                  </a>
                )}
                {aspect === "pills" && (
                  <a
                    key={tab.name}
                    href={tab.href}
                    onClick={() => setActiveTab(tab.name)}
                    className={ctl(`flex flex-row items-center whitespace-nowrap rounded-xl px-3 py-2 text-sm font-medium
                  ${
                    tab.name === activeTab
                      ? "bg-primary  text-white"
                      : "text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  }
                  `)}
                  >
                    {icon && <>{tab.icon}</>}
                    {tab.name}
                    {badge && tab.badge && (
                      <div
                        className={cn(
                          `ml-2 flex cursor-pointer items-center rounded-lg py-1 px-3 text-xs font-medium uppercase text-white
                      ${tab.name === activeTab ? "bg-primary" : "bg-gray-300"}
                      `
                        )}
                      >
                        {tab.badge}
                      </div>
                    )}
                  </a>
                )}
                {aspect === "bar" && (
                  <a
                    key={tab.name}
                    href={tab.href}
                    onClick={() => setActiveTab(tab.name)}
                    className={ctl(`group flex flex-row items-center whitespace-nowrap border-y px-6 py-2 text-sm font-medium first:rounded-l-xl first:border-l last:rounded-r-xl last:border-r 
                  
                  ${
                    tab.name === activeTab
                      ? "border-primary bg-primary !text-white"
                      : "text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                  }
                  `)}
                  >
                    {icon && <>{tab.icon}</>}
                    {tab.name}
                    {badge && tab.badge && (
                      <div
                        className={cn(
                          `ml-2 flex cursor-pointer items-center rounded-lg py-1 px-3 text-xs font-medium uppercase text-white
                      ${
                        tab.name === activeTab
                          ? "bg-white bg-opacity-90 font-bold text-primary"
                          : "bg-gray-300 group-hover:bg-gray-400"
                      }
                      `
                        )}
                      >
                        {tab.badge}
                      </div>
                    )}
                  </a>
                )}
              </>
            ))}
          </nav>
        </div>
      </div>

      {/* TAB CONTENT */}
      {tabs.map((tab) => (
        <div
          key={tab.name}
          className={cn(
            `mt-4 rounded-lg bg-gray-100 p-4 ${
              tab.name === activeTab ? "flex" : "hidden"
            }`
          )}
        >
          Hello, this is : <b className="mx-2 text-primary">{tab.name}</b> tab
        </div>
      ))}
    </div>
  );
};

import useTranslation from "@hooks/useTranslation";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import cn from "clsx";
import React from "react";
import { DocumentCheckIcon, DocumentIcon } from "@heroicons/react/24/outline";
export interface TabProps {
  data: Array<Record<string, any>>;
  item: Record<string, any>;
}

export const TabsSection = ({ data, item }: TabProps) => {
  const Tabs = useTranslation().data.fixedContent.tabs;

  const [activeTab, setActiveTab] = useState(Tabs[0].name);
  const [clicked, setClicked] = useState(false);

  const delay = 3;
  const handleClicked = () => {
    navigator.clipboard.writeText(item.code);
    setClicked(true);
    setTimeout(() => setClicked(false), delay * 1000);
  };

  console.log(item.code);

  return (
    <div className="w-full max-w-full ">
      {data[0]?.tabs ? (
        <Tab.Group>
          <Tab.List
            className={
              "mb-2 flex w-full items-center justify-between rounded-lg"
            }
          >
            <div>
              <h4 className="font-bold">{item?.title}</h4>
            </div>
            <div className="flex flex-row items-center">
              <div className="mr-6 flex flex-row items-center overflow-hidden rounded-xl border bg-white p-1">
                {Tabs.map((tab) => (
                  <Tab
                    key={tab.id}
                    onClick={() => setActiveTab(tab.name)}
                    className={cn(
                      `flex flex-row items-center px-4 py-2 text-xs text-gray-500 outline-none ${
                        tab.name === activeTab &&
                        "rounded-lg bg-secondary !text-white "
                      }`
                    )}
                  >
                    <span className="mr-2 h-4 w-4">{tab.icon}</span>
                    {tab.name}
                  </Tab>
                ))}
              </div>
              <button
                className="flex items-center border-l px-5"
                onClick={handleClicked}
              >
                <div
                  className={cn(
                    `mr-2 text-sm transition duration-500 ease-in-out ${
                      clicked === true ? "text-secondary" : "text-gray-900"
                    } `
                  )}
                >
                  {clicked === false ? (
                    <div className="flex flex-row items-center">
                      Copy <DocumentIcon className="ml-2 h-5 w-5 stroke-2 " />
                    </div>
                  ) : (
                    <div className="flex flex-row items-center">
                      Copied{" "}
                      <DocumentCheckIcon className="ml-2 h-5 w-5 stroke-2 " />
                    </div>
                  )}
                </div>
              </button>
            </div>
          </Tab.List>
          <Tab.Panels>
            {/* PREVIEW CONTENT */}
            <Tab.Panel>
              <div className="flex max-h-[50vh] min-h-[25vh] w-full min-w-full items-center justify-center rounded-lg border bg-white p-6">
                <div>{item?.preview}</div>
              </div>
            </Tab.Panel>
            {/* CODE CONTENT */}
            <Tab.Panel>
              <div className="relative max-h-[50vh] w-full !max-w-full overflow-y-scroll  rounded-lg  bg-gray-800 p-8 text-sm text-gray-200">
                <pre className="whitespace-pre-wrap ">
                  <code className={`language-tsx`}>{item?.code}</code>
                </pre>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      ) : (
        <div className="relative max-h-[50vh] w-full !max-w-full overflow-hidden rounded-lg  bg-gray-800 p-8 text-sm text-gray-200">
          <pre className="overflow-auto whitespace-pre-wrap ">
            <code>{item?.code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

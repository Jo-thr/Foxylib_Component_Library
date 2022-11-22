import useTranslation from "@hooks/useTranslation";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import ctl from "@netlify/classnames-template-literals";
import React from "react";
import { DocumentCheckIcon } from "@heroicons/react/24/outline";

export interface TabProps {
  data: Array<Record<string, any>>;
  slug: string | string[] | undefined;
}

export const TabsSection = ({ data, slug }: TabProps) => {
  const Tabs = useTranslation().data.fixedContent.tabs;

  const [activeTab, setActiveTab] = useState(Tabs[0].name);

  const dataSelected = data?.filter((item) =>
    item.name.toLowerCase().includes(slug)
  );

  return (
    <div className="w-full max-w-full overflow-x-scroll">
      {dataSelected[0]?.tabs ? (
        <Tab.Group>
          <Tab.List className={" mb-4 flex w-full justify-end rounded-lg"}>
            <div className="flex flex-row items-center overflow-hidden rounded-xl border bg-white p-1">
              {Tabs.map((tab) => (
                <Tab
                  key={tab.id}
                  onClick={() => setActiveTab(tab.name)}
                  className={ctl(
                    `flex flex-row items-center px-6 py-2 text-sm text-gray-500 outline-none ${
                      tab.name === activeTab &&
                      "rounded-lg bg-orange-200 !text-gray-900 "
                    }`
                  )}
                >
                  <span className="mr-2 h-4 w-4">{tab.icon}</span>
                  {tab.name}
                </Tab>
              ))}
            </div>
          </Tab.List>
          <Tab.Panels className={"relative w-full !max-w-full overflow-hidden"}>
            {/* PREVIEW CONTENT */}
            <Tab.Panel>
              <div className="flex h-[50vh] w-full min-w-full items-center justify-center rounded-lg border bg-white p-6">
                <div>{dataSelected[0]?.preview}</div>
              </div>
            </Tab.Panel>
            {/* CODE CONTENT */}
            <Tab.Panel>
              <div className="relative h-[50vh] w-full !max-w-full overflow-hidden rounded-lg  bg-gray-800 px-6 py-8 text-sm text-gray-200">
                <div className="absolute top-0 -mx-6  flex w-full flex-row items-center justify-between bg-gray-800 p-6">
                  <h4 className="text-sm font-normal text-primary">
                    {dataSelected[0]?.path}
                  </h4>
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(dataSelected[0]?.code)
                    }
                  >
                    <DocumentCheckIcon className="relative h-5 w-5" />
                  </button>
                </div>

                <div className="mt-10 " />
                <pre className="overflow-auto whitespace-pre-wrap ">
                  <code>{dataSelected[0]?.code}</code>
                </pre>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      ) : (
        <div className="h-[50vh] w-full overflow-hidden rounded-lg">
          <pre className="text-white">
            <code>{dataSelected[0]?.code}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

import useTranslation from "@hooks/useTranslation";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import ctl from "@netlify/classnames-template-literals";
import elementsEN from "@data/en-EN/elements";

export interface TabProps {
  data: Array<Record<string, any>>;
  slug: string | string[] | undefined;
}

export const TabsSection = ({ data, slug }: TabProps) => {
  const Tabs = useTranslation().data.fixedContent.tabs;

  const [activeTab, setActiveTab] = useState(Tabs[0].name);

  const dataSelected = data?.filter((element) =>
    element.name.toLowerCase().includes(slug)
  );

  console.log(slug);
  console.log(dataSelected);

  return (
    <Tab.Group>
      <Tab.List className={" mb-6 flex w-full justify-end rounded-lg"}>
        <div className="flex flex-row items-center overflow-hidden rounded-xl border bg-white p-1">
          {Tabs.map((tab) => (
            <Tab
              key={tab.id}
              onClick={() => setActiveTab(tab.name)}
              className={ctl(
                `flex flex-row items-center px-6 py-3 text-gray-500 outline-none ${
                  tab.name === activeTab &&
                  "rounded-lg bg-orange-200 !text-gray-900 "
                }`
              )}
            >
              <span className="mr-2 h-5 w-5">{tab.icon}</span>
              {tab.name}
            </Tab>
          ))}
        </div>
      </Tab.List>
      <Tab.Panels className={"w-full"}>
        {/* PREVIEW CONTENT */}
        <Tab.Panel>
          <div className="flex h-[50vh] w-full items-center justify-center rounded-lg border bg-white p-6">
            {dataSelected.map((element) => (
              <div key={element.id}>{element.preview}</div>
            ))}
          </div>
        </Tab.Panel>
        {/* CODE CONTENT */}
        <Tab.Panel>
          <div className="h-[50vh] w-full overflow-hidden rounded-lg">
            {dataSelected.map((element) => (
              <pre key={element.id}>
                {element.code.map((line: any, index: any) => (
                  <code key={index}>{line}</code>
                ))}
              </pre>
            ))}
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
};

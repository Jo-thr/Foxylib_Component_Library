import {
  ChevronDownIcon,
  EyeIcon,
  EyeSlashIcon,
  MinusIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import { ReactNode, SetStateAction, useState } from "react";
import cn from "clsx";

const questions = [
  {
    id: 1,
    title: "Question n°1",
    content: "ceci est un paragraphe à afficher",
    active: false,
  },
  {
    id: 2,
    title: "Question n°2",
    content: "ceci est un paragraphe à afficher",
    active: false,
  },
  {
    id: 3,
    title: "Question n°3",
    content: "ceci est un paragraphe à afficher",
    active: false,
  },
];

export interface CollapseProps {
  iconPosition?: "left" | "right";
  icon: "chevron" | "eye" | "plus";
  group: boolean;
  title?: string;
  content?: string;
  data: Array<Record<string, any>>;
}

export const Collapse = ({
  iconPosition = "right",
  icon = "chevron",
  group,
  title,
  content,
  data = questions,
}: CollapseProps) => {
  const [selected, setSelected] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const handleClicked = (index: SetStateAction<number>) => {
    if (selected !== index) {
      setSelected(index);
    } else {
      setSelected(-1);
    }
  };

  return (
    <div className="relative grid h-auto w-[30rem] origin-center gap-3 rounded-lg bg-gray-100 p-2">
      {group ? (
        <>
          {data.map((item, index) => (
            <div key={index}>
              <div
                className={cn(
                  `relative inset-x-0 top-0 flex flex-row items-center bg-white px-4 py-3
          ${selected === index ? "rounded-t-lg" : "rounded-lg"}
          ${iconPosition === "left" ? "justify-start" : "justify-between"}`
                )}
                onClick={() => handleClicked(index)}
              >
                {iconPosition === "left" && (
                  <>
                    {icon === "chevron" && (
                      <>
                        {index === selected ? (
                          <ChevronDownIcon className="mr-3 h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
                        ) : (
                          <ChevronDownIcon className="mr-3 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                        )}
                      </>
                    )}
                    {icon === "eye" && (
                      <>
                        {index === selected ? (
                          <EyeSlashIcon className="mr-3 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                        ) : (
                          <EyeIcon className="mr-3 h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
                        )}
                      </>
                    )}
                    {icon === "plus" && (
                      <>
                        {index === selected ? (
                          <MinusIcon className="mr-3 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                        ) : (
                          <PlusIcon className="mr-3 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                        )}
                      </>
                    )}
                  </>
                )}
                {item.title}
                {iconPosition === "right" && (
                  <>
                    {icon === "chevron" && (
                      <>
                        {index === selected ? (
                          <ChevronDownIcon className="ml-2 h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
                        ) : (
                          <ChevronDownIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                        )}
                      </>
                    )}
                    {icon === "eye" && (
                      <>
                        {index === selected ? (
                          <EyeSlashIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                        ) : (
                          <EyeIcon className="ml-2 h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
                        )}
                      </>
                    )}
                    {icon === "plus" && (
                      <>
                        {index === selected ? (
                          <MinusIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                        ) : (
                          <PlusIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                        )}
                      </>
                    )}
                  </>
                )}
              </div>
              {index === selected && (
                <div className="relative rounded-b-lg border-t bg-white py-6 px-4">
                  {item.content}
                </div>
              )}
            </div>
          ))}
        </>
      ) : (
        <div>
          <div
            className={cn(
              `relative inset-x-0 top-0 flex flex-row items-center bg-white px-4 py-3
          ${clicked === true ? "rounded-t-lg" : "rounded-lg"}
          ${iconPosition === "left" ? "justify-start" : "justify-between"}`
            )}
            onClick={() => setClicked(!clicked)}
          >
            {iconPosition === "left" && (
              <>
                {icon === "chevron" && (
                  <>
                    {clicked === true ? (
                      <ChevronDownIcon className="mr-3 h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
                    ) : (
                      <ChevronDownIcon className="mr-3 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                    )}
                  </>
                )}
                {icon === "eye" && (
                  <>
                    {clicked === true ? (
                      <EyeSlashIcon className="mr-3 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                    ) : (
                      <EyeIcon className="mr-3 h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
                    )}
                  </>
                )}
                {icon === "plus" && (
                  <>
                    {clicked === true ? (
                      <MinusIcon className="mr-3 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                    ) : (
                      <PlusIcon className="mr-3 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                    )}
                  </>
                )}
              </>
            )}
            {title}
            {iconPosition === "right" && (
              <>
                {icon === "chevron" && (
                  <>
                    {clicked === true ? (
                      <ChevronDownIcon className="ml-2 h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
                    ) : (
                      <ChevronDownIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                    )}
                  </>
                )}
                {icon === "eye" && (
                  <>
                    {clicked === true ? (
                      <EyeSlashIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                    ) : (
                      <EyeIcon className="ml-2 h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
                    )}
                  </>
                )}
                {icon === "plus" && (
                  <>
                    {clicked === true ? (
                      <MinusIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                    ) : (
                      <PlusIcon className="ml-2 h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
                    )}
                  </>
                )}
              </>
            )}
          </div>
          {clicked === true && (
            <div className="relative rounded-b-lg border-t bg-white py-6 px-4">
              {content}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

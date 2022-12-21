//@ts-nocheck
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import cn from "clsx";
import { useState } from "react";
import Image from "next/image";
export interface SelectProps {
  status?: boolean;
  check?: boolean;
  avatar?: boolean;
}

const contact = [
  {
    name: "Alain",
    id: 6,
    status: true,
    image:
      "https://images.unsplash.com/photo-1669178082499-341906b2ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Emilie",
    id: 8,
    status: false,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Gaston",
    id: 1,
    status: true,
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Julie",
    id: 9,
    status: true,
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Pierre",
    id: 2,
    status: false,
    image:
      "https://images.unsplash.com/photo-1669178082499-341906b2ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Stephanie",
    id: 5,
    status: true,
    image:
      "https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    name: "Yves",
    id: 7,
    status: false,
    image:
      "https://images.unsplash.com/photo-1669178082499-341906b2ab28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8dG93SlpGc2twR2d8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=60",
  },
];

export const Select = ({ status, avatar, check }: SelectProps) => {
  const [active, setActive] = useState(contact[0].name);
  const [show, setShow] = useState(false);

  const contactSelected = contact.find((person) => person.name === active);

  return (
    <div className={"flex w-52 flex-col"}>
      <label htmlFor="contact" className="ml-2 block text-xs text-gray-700">
        Contact
      </label>
      <div
        onClick={() => setShow(!show)}
        className="mt-1 flex w-full items-center justify-between gap-6 rounded-md border border-gray-300 py-2 px-4 text-base sm:text-sm"
      >
        <div className="flex items-center gap-2">
          {status === true && (
            <div
              className={cn(
                `h-2 w-2 rounded-full ${
                  contactSelected?.status === true
                    ? "bg-emerald-400"
                    : "bg-gray-200"
                }`
              )}
            />
          )}
          {avatar === true && (
            <div className={"h-8 w-8 overflow-hidden rounded-full"}>
              <Image
                src={contactSelected?.image}
                alt="image"
                width={80}
                height={80}
              />
            </div>
          )}
          {active}
        </div>
        {show === true ? (
          <ChevronDownIcon className="h-4 w-4 rotate-180 stroke-2 transition duration-200 ease-in-out" />
        ) : (
          <ChevronDownIcon className="h-4 w-4 stroke-2 transition duration-200 ease-in-out" />
        )}
      </div>
      {show === true && (
        <div className="absolute z-10 mt-16 flex w-52 flex-col rounded-md border border-gray-300 bg-white text-sm">
          {contact.map((person) => (
            <div
              className={cn(
                `flex cursor-pointer items-center justify-between py-2 px-4 hover:bg-gray-100 ${
                  active === person.name &&
                  "cursor-default bg-emerald-100 text-emerald-600 hover:bg-emerald-100"
                }`
              )}
              key={person.id}
              onClick={() => {
                setShow(!show);
                setActive(person.name);
              }}
            >
              <div className="flex items-center gap-2">
                {status === true && (
                  <div
                    className={cn(
                      `h-2 w-2 rounded-full ${
                        person.status === true
                          ? "bg-emerald-400"
                          : "bg-gray-200"
                      }`
                    )}
                  />
                )}
                {avatar === true && (
                  <div className={"h-8 w-8 overflow-hidden rounded-full"}>
                    <Image
                      src={person.image}
                      alt="image"
                      width={80}
                      height={80}
                    />
                  </div>
                )}
                {person.name}
              </div>
              {person.name === active && check === true && (
                <CheckIcon className="h-4 w-4 stroke-2 text-emerald-600" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

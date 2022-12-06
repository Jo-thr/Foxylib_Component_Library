import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import cn from "clsx";
import { useState } from "react";
export interface ToggleProps {
  icon?: boolean;
  aspect?: "short" | "normal";
}

export const Toggle = ({ icon = false, aspect = "normal" }: ToggleProps) => {
  const [active, setActive] = useState(false);
  return (
    <div className="">
      <div
        className={cn(`relative
      ${aspect === "short" ? "h-5 w-12" : "h-7 w-12"}
      `)}
      >
        {aspect === "short" ? (
          <div
            onClick={() => setActive(!active)}
            className={cn(
              `absolute -top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border bg-white p-[0.4rem] shadow-blur transition duration-700 ease-in-out hover:cursor-pointer 
            ${active ? "-right-1" : "-left-1"}`
            )}
          >
            {icon && (
              <>
                {active ? (
                  <SunIcon className="stroke-2" />
                ) : (
                  <MoonIcon className="stroke-2" />
                )}
              </>
            )}
          </div>
        ) : (
          <div
            onClick={() => setActive(!active)}
            className={cn(
              `absolute top-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white p-[0.25rem] shadow-blur transition duration-700 ease-in-out hover:cursor-pointer 
              ${active ? "right-1" : "left-1"}`
            )}
          >
            {icon && (
              <>
                {active ? (
                  <SunIcon className="stroke-2" />
                ) : (
                  <MoonIcon className="stroke-2" />
                )}
              </>
            )}
          </div>
        )}

        <div
          className={cn(`h-full w-full rounded-full
        ${active ? "bg-amber-300" : "bg-primary "}`)}
        ></div>
      </div>
    </div>
  );
};

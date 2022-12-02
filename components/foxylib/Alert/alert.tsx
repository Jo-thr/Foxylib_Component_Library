import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import cn from "clsx";

export interface AlertProps {
  show: boolean;
}

export default function Alert({ show = false }: AlertProps) {
  console.log(show);
  const [isShow, setIsShow] = useState(show);
  console.log(isShow);
  return (
    <div
      className={cn(
        `top-24 right-10 z-50 rounded-md border border-green-400 bg-green-100 p-4
        ${show === false && "hidden"}
        ${show !== false && "absolute"}`
      )}
    >
      <div className="flex px-2">
        <div className="flex-shrink-0">
          <CheckCircleIcon
            className="h-5 w-5 text-green-400"
            aria-hidden="true"
          />
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-green-800">
            Successfully copied
          </p>
        </div>
      </div>
    </div>
  );
}

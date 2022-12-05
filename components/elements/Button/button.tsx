import { EnvelopeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import cn from "clsx";

export type ButtonProps = {
  color?: "primary" | "white";
  icon?: "left" | "right";
  aspect: "normal" | "rounded" | "circular";
  children: string;
};

export const Button = ({
  children,
  aspect = "normal",
  icon,
  color = "primary",
}: ButtonProps) => {
  return (
    <>
      <button
        type={"submit"}
        className={
          "group relative h-fit w-fit transition-transform duration-700"
        }
      >
        <div
          className={cn(
            `relative z-10 flex flex-row items-center gap-4 px-4 py-[0.6rem] text-sm font-semibold uppercase 
            ${
              color === "white"
                ? "border border-secondary bg-white text-secondary"
                : "bg-secondary text-white"
            }
            ${aspect === "rounded" && "rounded-lg"}
            ${aspect === "normal" && "rounded-none"}
            ${aspect === "circular" && "rounded-full"}`
          )}
        >
          {icon === "left" && <EnvelopeIcon className="h-5 w-5 stroke-2" />}
          {children}
          {icon === "right" && (
            <PaperAirplaneIcon className="h-5 w-5 stroke-2" />
          )}
        </div>
      </button>
    </>
  );
};

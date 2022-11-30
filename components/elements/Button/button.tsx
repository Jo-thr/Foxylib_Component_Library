import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button
        type={"submit"}
        className={
          "group relative h-fit w-fit transition-transform duration-700"
        }
      >
        <div
          className={
            " relative z-10 flex flex-row items-center border-2 border-blue-600 bg-white px-4 py-2 text-sm font-semibold uppercase text-blue-600 "
          }
        >
          {children}
        </div>
        <div
          className={
            "absolute bottom-0 right-0 h-full w-full bg-blue-600 transition-all duration-700 group-hover:-bottom-1 group-hover:-right-1"
          }
        ></div>
      </button>
    </>
  );
};

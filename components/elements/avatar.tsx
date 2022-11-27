import Image from "next/image";
import defaultPlaceholder from "@assets/images/default-placeholder.png";
import ctl from "@netlify/classnames-template-literals";

export type AvatarContent = {
  form: "circle" | "rounded" | "square";
};

export const Avatar = ({ form }: AvatarContent) => {
  return (
    <div
      className={ctl(
        `h-20 w-20 overflow-hidden 
        ${form === "circle" && "rounded-full"} 
        ${form === "square" && "rounded-none"} 
        ${form === "rounded" && "rounded-lg"}`
      )}
    >
      <Image src={defaultPlaceholder} alt="image" />
    </div>
  );
};

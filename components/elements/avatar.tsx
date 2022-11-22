import Image from "next/image";
import defaultPlaceholder from "@assets/images/default-placeholder.png";

export const Avatar = () => {
  return (
    <div className="h-20 w-20 overflow-hidden rounded-full">
      <Image src={defaultPlaceholder} alt="image" />
    </div>
  );
};

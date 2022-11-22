import { Avatar } from '@components/elements/avatar';
import { Button } from '@components/elements/button';

const elementsEN = [
    {
        id:1, 
        name : 'Avatar', 
        description : 'Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores ratione repellat ipsam nobis sint minima nostrum ?  Quos eos, veniam odio excepturi porro ex.' ,
        preview: <Avatar />,
        tabs: true,
        path: '@components/elements/avatar.tsx',
        code:`import Image from "next/image";
import defaultPlaceholder from "@assets/images/default-placeholder.png";

export const Avatar = () => {
  return (
    <div className="h-20 w-20 overflow-hidden rounded-full">
      <Image src={defaultPlaceholder} alt="Nom de l'image" />
    </div>
  );
};
        `
        
    },
    {
        id:2, 
        name : 'Button', 
        description : 'Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.',
        preview: <Button children="Ceci est un Bouton" />,
        tabs: true,
        path: '@components/elements/button.tsx',
        code: `import { ReactNode } from "react";

export const Button = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <button type={"submit"} className={"group relative h-fit w-fit transition-transform duration-700"}>
        <div className={"relative z-10 flex flex-row items-center border-2 border-blue-600 bg-white px-4 py-2 text-sm font-semibold uppercase text-blue-600"}>
           {children}
        </div>
        <div className={"absolute bottom-0 right-0 h-full w-full bg-blue-600 transition-all duration-700 group-hover:-bottom-1 group-hover:-right-1"} />
      </button>
    </>
  );
};
        `
    },
]

export default elementsEN
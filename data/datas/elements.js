import { Avatar } from '@components/elements/avatar';
import { Button } from '@components/elements/button';
import { Dropdown } from '@components/elements/dropdown';

const elementsEN = [
    {
        id:1, 
        name : 'Avatar', 
        description : 'Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores ratione repellat ipsam nobis sint minima nostrum ?  Quos eos, veniam odio excepturi porro ex.' ,
        
        tabs: true,
        codes: [
          {
            id: 1,
            preview: <Avatar form='circle' />,
            title: 'Circular avatars',
            code:`import Image from "next/image";
import defaultPlaceholder from "@assets/images/default-placeholder.png";

export const Avatar = () => {
  return (
    <div className="h-20 w-20 overflow-hidden rounded-full">
      <Image src={defaultPlaceholder} alt="Nom de l'image" />
    </div>
  );
};`
          },
          {
            id: 2,
            preview: <Avatar form='rounded' />,
            title: 'Rounded avatars',
            code:`import Image from "next/image";
import defaultPlaceholder from "@assets/images/default-placeholder.png";

export const Avatar = () => {
  return (
    <div className="h-20 w-20 overflow-hidden rounded-xl">
      <Image src={defaultPlaceholder} alt="Nom de l'image" />
    </div>
  );
};`
          },
          {
            id: 3,
            preview: <Avatar form='square' />,
            title: 'Square avatars',
            code:`import Image from "next/image";
import defaultPlaceholder from "@assets/images/default-placeholder.png";

export const Avatar = () => {
  return (
    <div className="h-20 w-20 overflow-hidden rounded-none">
      <Image src={defaultPlaceholder} alt="Nom de l'image" />
    </div>
  );
};`
          }
        ]
        
    },
    {
        id:2, 
        name : 'Button', 
        description : 'Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.',
        tabs: true,
        codes: [{
          id: 1,
          preview: <Button children="Ceci est un Bouton" />,
          title: 'Button',
          code:`import { ReactNode } from "react";

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
        `}]
    },
    {
        id:4, 
        name : 'Dropdown', 
        description : 'WIP',
        tabs: true,
        codes: [{
          id: 1,
          preview: <Dropdown children="Option" icon={true} divider={true} heading={true} aspect={"normal"} />,
          title: 'Simple dropdown',
          code:`import { ReactNode } from "react";

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
        `},{
          id: 2,
          preview: <Dropdown icon={true} divider={true} heading={true} aspect={"minimal"} />,
          title: 'Simple dropdown',
          code:`import { ReactNode } from "react";

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
        `}]
    },
]

export default elementsEN
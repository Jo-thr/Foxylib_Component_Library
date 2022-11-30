import { Avatar } from "@components/elements/Avatar/avatar";
import { Badges } from "@components/elements/Badges/badges";
import { Button } from "@components/elements/Button/button";
import { Dropdown } from "@components/elements/Dropdown/dropdown";

const elements = [
  {
    id: 1,
    name: "Avatar",
    description:
      "Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores ratione repellat ipsam nobis sint minima nostrum ?  Quos eos, veniam odio excepturi porro ex.",

    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Avatar />,
        title: "Circular avatars",
        code: <Avatar />,
      },
      {
        id: 2,
        preview: <Avatar notif={true} />,
        title: "Avatars with notification",
        code: ``,
      },
      {
        id: 3,
        preview: <Avatar group={true} />,
        title: "Avatars Group",
        code: ``,
      },
      {
        id: 4,
        preview: (
          <Avatar title={"Durant Jean"} subtitle={"Développeur Front"} />
        ),
        title: "Avatar with text",
        code: ``,
      },
    ],
  },
  {
    id: 2,
    name: "Button",
    description:
      "Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.",
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Button children="Ceci est un Bouton" />,
        title: "Button",
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
        `,
      },
    ],
  },
  {
    id: 4,
    name: "Dropdown",
    description:
      "For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    tabs: true,
    codes: [
      {
        id: 1,
        preview: (
          <Dropdown
            children="Option"
            icon={true}
            divider={true}
            heading={true}
            aspect={"basic"}
          />
        ),
        title: "Basic dropdown",
        code: (
          <Dropdown
            children="Option"
            icon={true}
            divider={true}
            heading={true}
            aspect={"basic"}
          />
        ),
      },
      {
        id: 2,
        preview: (
          <Dropdown
            icon={true}
            divider={true}
            heading={true}
            aspect={"minimal"}
            children={""}
          />
        ),
        title: "Minimal dropdown",
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
        `,
      },
    ],
  },
  {
    id: 5,
    name: "Tags",
    description:
      "For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Badges children="Badge" aspect="circular" />,
        title: "Circular badge",
        code: ``,
      },
      {
        id: 2,
        preview: <Badges children="Badge" aspect="rounded" />,
        title: "Rounded badge",
        code: ``,
      },
      {
        id: 3,
        preview: <Badges point={true} children="Badge" aspect="circular" />,
        title: "Badge with point",
        code: ``,
      },
      {
        id: 4,
        preview: <Badges close={true} children="Badge" aspect="circular" />,
        title: "Badge with close button",
        code: ``,
      },
    ],
  },
];

export default elements;

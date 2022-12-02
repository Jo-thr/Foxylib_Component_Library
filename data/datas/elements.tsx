//@ts-nocheck
import { Avatar } from "@components/elements/Avatar/avatar";
import { Badges } from "@components/elements/Badges/badges";
import { Button } from "@components/elements/Button/button";
import { Dropdown } from "@components/elements/Dropdown/dropdown";

import AvatarText from "raw-loader!@components/elements/Avatar/avatarText.txt";
import BadgesText from "raw-loader!@components/elements/Badges/badgesText.txt";
import ButtonText from "raw-loader!@components/elements/Button/buttonText.txt";
import DropdownText from "raw-loader!@components/elements/Dropdown/dropdownText.txt";

const elements = [
  {
    id: 1,
    name: "Avatar",
    description:
      "Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores ratione repellat ipsam nobis sint minima nostrum ?  Quos eos, veniam odio excepturi porro ex.",
    ctaName: "Copy the complete component to the clipboard",
    cta: AvatarText,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Avatar />,
        title: "Circular avatars",
        code: AvatarText,
      },
      {
        id: 2,
        preview: <Avatar notif={true} />,
        title: "Avatars with notification",
        // code: String(<Avatar />),
        code: AvatarText,
      },
      {
        id: 3,
        preview: <Avatar group={true} />,
        title: "Avatars Group",
        code: AvatarText,
      },
      {
        id: 4,
        preview: (
          <Avatar title={"Durant Jean"} subtitle={"Développeur Front"} />
        ),
        title: "Avatar with text",
        code: AvatarText,
      },
    ],
  },
  {
    id: 2,
    name: "Button",
    description:
      "Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.",
    ctaName: "Copy the complete component to the clipboard",
    cta: ButtonText,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Button children="Ceci est un Bouton" />,
        title: "Button",
        code: ButtonText,
      },
    ],
  },
  {
    id: 4,
    name: "Dropdown",
    description:
      "For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    ctaName: "Copy the complete component to the clipboard",
    cta: DropdownText,
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
        code: DropdownText,
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
        code: DropdownText,
      },
    ],
  },
  {
    id: 5,
    name: "Tags",
    description:
      "For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    ctaName: "Copy the complete component to the clipboard",
    cta: BadgesText,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Badges children="Badge" aspect="circular" />,
        title: "Circular badge",
        code: BadgesText,
      },
      {
        id: 2,
        preview: <Badges children="Badge" aspect="rounded" />,
        title: "Rounded badge",
        code: BadgesText,
      },
      {
        id: 3,
        preview: <Badges point={true} children="Badge" aspect="circular" />,
        title: "Badge with point",
        code: BadgesText,
      },
      {
        id: 4,
        preview: <Badges close={true} children="Badge" aspect="circular" />,
        title: "Badge with close button",
        code: BadgesText,
      },
    ],
  },
];

export default elements;

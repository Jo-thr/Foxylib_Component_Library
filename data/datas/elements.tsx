//@ts-nocheck
import { Avatar } from "@components/elements/Avatar/avatar";
import CircularAvatar from "raw-loader!@components/elements/Avatar/Text/CircularAvatar.txt";
import FullyAvatar from "raw-loader!@components/elements/Avatar/Text/FullyAvatar.txt";
import GroupAvatar from "raw-loader!@components/elements/Avatar/Text/GroupAvatar.txt";
import NotificationAvatar from "raw-loader!@components/elements/Avatar/Text/NotificationAvatar.txt";
import TextAvatar from "raw-loader!@components/elements/Avatar/Text/TextAvatar.txt";

import { Badges } from "@components/elements/Badges/badges";
import FullyBadge from "raw-loader!@components/elements/Badges/Text/FullyBadge.txt";
import CircularBadge from "raw-loader!@components/elements/Badges/Text/CircularBadge.txt";
import RoundedBadge from "raw-loader!@components/elements/Badges/Text/RoundedBadge.txt";
import PointBadge from "raw-loader!@components/elements/Badges/Text/PointBadge.txt";
import CloseBadge from "raw-loader!@components/elements/Badges/Text/CloseBadge.txt";

import { Button } from "@components/elements/Button/button";
import ButtonText from "raw-loader!@components/elements/Button/buttonText.txt";

import { Collapse } from "@components/elements/Collapse/collapse";
import FullyCollapse from "raw-loader!@components/elements/Collapse/Text/FullyCollapse.txt";

import { Dropdown } from "@components/elements/Dropdown/dropdown";
import FullyDropdown from "raw-loader!@components/elements/Dropdown/Text/FullyDropdown.txt";
import BasicDropdown from "raw-loader!@components/elements/Dropdown/Text/BasicDropdown.txt";
import IconDropdown from "raw-loader!@components/elements/Dropdown/Text/IconDropdown.txt";

const elements = [
  // AVATAR
  {
    id: 1,
    name: "Avatar",
    description:
      "Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores ratione repellat ipsam nobis sint minima nostrum ?  Quos eos, veniam odio excepturi porro ex.",
    ctaName: "Copy the complete component to the clipboard",
    cta: FullyAvatar,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Avatar />,
        title: "Circular avatars",
        code: CircularAvatar,
      },
      {
        id: 2,
        preview: <Avatar notif={true} />,
        title: "Avatars with notification",
        // code: String(<Avatar />),
        code: NotificationAvatar,
      },
      {
        id: 3,
        preview: <Avatar group={true} />,
        title: "Avatars Group",
        code: GroupAvatar,
      },
      {
        id: 4,
        preview: (
          <Avatar title={"Durant Jean"} subtitle={"Développeur Front"} />
        ),
        title: "Avatar with text",
        code: TextAvatar,
      },
    ],
  },
  // BUTTON
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
        title: "Primary Button",
        code: ButtonText,
      },
      {
        id: 2,
        preview: <Button children="Ceci est un Bouton" color="white" />,
        title: "White Button",
        code: ButtonText,
      },
      {
        id: 3,
        preview: <Button children="Ceci est un Bouton" icon="left" />,
        title: "Button with leading icon",
        code: ButtonText,
      },
      {
        id: 4,
        preview: <Button children="Ceci est un Bouton" icon="right" />,
        title: "Button with trailing icon",
        code: ButtonText,
      },
      {
        id: 5,
        preview: <Button children="Ceci est un Bouton" aspect="rounded" />,
        title: "Round Button",
        code: ButtonText,
      },
      {
        id: 6,
        preview: <Button children="+" aspect="circular" />,
        title: "Minimal Button",
        code: ButtonText,
      },
    ],
  },
  // COLLAPSE
  {
    id: 3,
    name: "Collapse",
    description:
      "Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.",
    ctaName: "Copy the complete component to the clipboard",
    cta: FullyCollapse,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: (
          <Collapse
            title="Question"
            content="Ceci est une contenu de la question"
          />
        ),
        title: "Simple Collapse",
        code: FullyCollapse,
      },
      {
        id: 2,
        preview: <Collapse group={true} />,
        title: "Multi Collapse",
        code: FullyCollapse,
      },
      {
        id: 3,
        preview: <Collapse group={true} iconPosition={"left"} icon={"plus"} />,
        title: "Collapse with left icon",
        code: FullyCollapse,
      },
      {
        id: 4,
        preview: <Collapse group={true} icon={"eye"} />,
        title: "Collapse with eye icon",
        code: FullyCollapse,
      },
      {
        id: 5,
        preview: <Collapse group={true} icon={"plus"} />,
        title: "Collapse with plus icon",
        code: FullyCollapse,
      },
    ],
  },
  // DROPDOWN
  {
    id: 4,
    name: "Dropdown",
    description:
      "For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    ctaName: "Copy the complete component to the clipboard",
    cta: FullyDropdown,
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
        code: BasicDropdown,
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
        code: IconDropdown,
      },
    ],
  },
  // TAGS
  {
    id: 5,
    name: "Tags",
    description:
      "For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    ctaName: "Copy the complete component to the clipboard",
    cta: FullyBadge,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Badges children="Badge" aspect="circular" />,
        title: "Circular badge",
        code: CircularBadge,
      },
      {
        id: 2,
        preview: <Badges children="Badge" aspect="rounded" />,
        title: "Rounded badge",
        code: RoundedBadge,
      },
      {
        id: 3,
        preview: <Badges point={true} children="Badge" aspect="circular" />,
        title: "Badge with point",
        code: PointBadge,
      },
      {
        id: 4,
        preview: <Badges close={true} children="Badge" aspect="circular" />,
        title: "Badge with close button",
        code: CloseBadge,
      },
    ],
  },
];

export default elements;

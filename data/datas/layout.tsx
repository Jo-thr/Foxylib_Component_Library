//@ts-nocheck
import { Avatar } from "@components/elements/Avatar/avatar";
import CircularAvatar from "raw-loader!@components/elements/Avatar/Text/CircularAvatar.txt";
import FullyAvatar from "raw-loader!@components/elements/Avatar/Text/FullyAvatar.txt";
import GroupAvatar from "raw-loader!@components/elements/Avatar/Text/GroupAvatar.txt";
import NotificationAvatar from "raw-loader!@components/elements/Avatar/Text/NotificationAvatar.txt";
import TextAvatar from "raw-loader!@components/elements/Avatar/Text/TextAvatar.txt";

import { Button } from "@components/elements/Button/button";
import ButtonText from "raw-loader!@components/elements/Button/buttonText.txt";

const layout = [
  // CONTAINER
  {
    id: 1,
    name: "Container",
    description:
      "Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores ratione repellat ipsam nobis sint minima nostrum ?  Quos eos, veniam odio excepturi porro ex.",
    ctaName: "Copy the complete component to the clipboard",
    preview: "",
    cta: FullyAvatar,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: "",
        title: "Container",
        code: CircularAvatar,
      },
    ],
  },
  // ROW
  {
    id: 2,
    name: "Row",
    description:
      "Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.",
    ctaName: "Copy the complete component to the clipboard",
    preview: "",
    cta: ButtonText,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: "",
        title: "Row",
        code: ButtonText,
      },
    ],
  },
];

export default layout;

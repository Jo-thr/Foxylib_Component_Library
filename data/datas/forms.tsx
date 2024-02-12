//@ts-nocheck
import Checkbox from "@components/forms/Checkbox/Checkbox";
import { Select } from "@components/forms/Select/Select";
import { Toggle } from "@components/forms/Toggle/Toggle";
import CircularAvatar from "raw-loader!@components/elements/Avatar/Text/CircularAvatar.txt";
import FullyAvatar from "raw-loader!@components/elements/Avatar/Text/FullyAvatar.txt";

import FullyBadge from "raw-loader!@components/elements/Badges/Text/FullyBadge.txt";

import ButtonText from "raw-loader!@components/elements/Button/buttonText.txt";
import FullyCollapse from "raw-loader!@components/elements/Collapse/Text/FullyCollapse.txt";
import FullyDropdown from "raw-loader!@components/elements/Dropdown/Text/FullyDropdown.txt";

const forms = [
  // CHECKBOX
  {
    id: 1,
    name: "Checkbox",
    description:
      "Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores ratione repellat ipsam nobis sint minima nostrum ?  Quos eos, veniam odio excepturi porro ex.",
    ctaName: "Copy the complete component to the clipboard",
    preview: <Checkbox />,
    cta: FullyAvatar,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Checkbox />,
        title: "Checkbox",
        code: CircularAvatar,
      },
    ],
  },
  // COMBOBOXES
  {
    id: 2,
    name: "Comboboxes",
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
        title: "Comboboxes",
        code: ButtonText,
      },
    ],
  },
  // FIELDS - INPUTS
  {
    id: 3,
    name: "Fields / Inputs",
    description:
      "Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.",
    ctaName: "Copy the complete component to the clipboard",
    preview: "",
    cta: FullyCollapse,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: "",
        title: "Fields / Inputs",
        code: ButtonText,
      },
    ],
  },
  // RATIO
  {
    id: 4,
    name: "Ratio",
    description:
      "For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    ctaName: "Copy the complete component to the clipboard",
    preview: "",
    cta: FullyDropdown,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: "",
        title: "Ratio",
        code: ButtonText,
      },
    ],
  },
  // SELECT
  {
    id: 5,
    name: "Select",
    description:
      "For this component, the check icon, status and avatar are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    ctaName: "Copy the complete component to the clipboard",
    preview: <Select check={true} status={true} avatar={true} />,
    cta: FullyBadge,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Select />,
        title: "Simple Select",
        code: ButtonText,
      },
      {
        id: 2,
        preview: <Select check={true} />,
        title: "With check icon",
        code: ButtonText,
      },
      {
        id: 3,
        preview: <Select status={true} />,
        title: "With status",
        code: ButtonText,
      },
      {
        id: 4,
        preview: <Select avatar={true} />,
        title: "With avatar",
        code: ButtonText,
      },
    ],
  },
  // TOGGLE
  {
    id: 6,
    name: "Toggle",
    description:
      "For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    ctaName: "Copy the complete component to the clipboard",
    preview: <Toggle />,
    cta: FullyBadge,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Toggle />,
        title: "Simple Toggle",
        code: ButtonText,
      },
      {
        id: 2,
        preview: <Toggle aspect={"short"} />,
        title: "Short Toggle",
        code: ButtonText,
      },
      {
        id: 3,
        preview: <Toggle aspect={"short"} icon={true} />,
        title: "Toggle with Icon",
        code: ButtonText,
      },
    ],
  },
];

export default forms;

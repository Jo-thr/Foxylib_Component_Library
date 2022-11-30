import { Avatar } from "@components/elements/Avatar/avatar";
import { Badges } from "@components/elements/Badges/badges";
import { Button } from "@components/elements/Button/button";
import { Dropdown } from "@components/elements/Dropdown/dropdown";
import { Tabs } from "@components/navigation/Tabs/tabs";

const nav = [
  {
    id: 7,
    name: "Tabs",
    description:
      "For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.",
    tabs: true,
    codes: [
      {
        id: 1,
        preview: <Tabs />,
        title: "Underline tabs",
        code: ``,
      },
      {
        id: 2,
        preview: <Tabs icon={true} />,
        title: "Tabs with icons",
        code: ``,
      },
      {
        id: 3,
        preview: <Tabs badge={true} />,
        title: "Tabs with badge",
        code: ``,
      },
      {
        id: 4,
        preview: <Tabs aspect={"pills"} icon={true} />,
        title: "Pills Tabs",
        code: ``,
      },
      {
        id: 5,
        preview: <Tabs aspect={"bar"} badge={true} />,
        title: "Bar Tabs",
        code: ``,
      },
    ],
  },
];

export default nav;

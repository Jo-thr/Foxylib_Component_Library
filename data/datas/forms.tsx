//@ts-nocheck
import CircularAvatar from 'raw-loader!@components/elements/Avatar/Text/CircularAvatar.txt'
import FullyAvatar from 'raw-loader!@components/elements/Avatar/Text/FullyAvatar.txt'

import FullyBadge from 'raw-loader!@components/elements/Badges/Text/FullyBadge.txt'

import ButtonText from 'raw-loader!@components/elements/Button/buttonText.txt'
import FullyCollapse from 'raw-loader!@components/elements/Collapse/Text/FullyCollapse.txt'
import FullyDropdown from 'raw-loader!@components/elements/Dropdown/Text/FullyDropdown.txt'

const forms = [
  // CHECKBOX
  {
    id: 1,
    name: 'Checkbox',
    description:
      'Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores ratione repellat ipsam nobis sint minima nostrum ?  Quos eos, veniam odio excepturi porro ex.',
    ctaName: 'Copy the complete component to the clipboard',
    preview: 'In progress',
    cta: FullyAvatar,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: '',
        title: 'Checkbox',
        code: CircularAvatar,
      },
    ],
  },
  // COMBOBOXES
  {
    id: 2,
    name: 'Comboboxes',
    description:
      'Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.',
    ctaName: 'Copy the complete component to the clipboard',
    preview: 'In progress',
    cta: ButtonText,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: '',
        title: 'Comboboxes',
        code: ButtonText,
      },
    ],
  },
  // FIELDS - INPUTS
  {
    id: 3,
    name: 'Fields',
    description:
      'Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.',
    ctaName: 'Copy the complete component to the clipboard',
    preview: 'In progress',
    cta: FullyCollapse,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: '',
        title: 'Fields / Inputs',
        code: ButtonText,
      },
    ],
  },
  // RATIO
  {
    id: 4,
    name: 'Ratio',
    description:
      'For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.',
    ctaName: 'Copy the complete component to the clipboard',
    preview: 'In progress',
    cta: FullyDropdown,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: '',
        title: 'Ratio',
        code: ButtonText,
      },
    ],
  },
  // SELECT
  {
    id: 5,
    name: 'Select',
    description:
      'For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.',
    ctaName: 'Copy the complete component to the clipboard',
    preview: 'In progress',
    cta: FullyBadge,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: '',
        title: 'Select',
        code: ButtonText,
      },
    ],
  },
  // TOGGLE
  {
    id: 6,
    name: 'Toggle',
    description:
      'For this component, the icons, dividers and heading fields are optional. By default, they are in false. If you want them to appear, you just have to activate them. In the examples below, they will all be activated.',
    ctaName: 'Copy the complete component to the clipboard',
    preview: 'In progress',
    cta: FullyBadge,
    tabs: true,
    codes: [
      {
        id: 1,
        preview: '',
        title: 'Toggle',
        code: ButtonText,
      },
    ],
  },
]

export default forms

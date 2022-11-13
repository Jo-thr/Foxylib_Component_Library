import defaultPlaceholder from '../../assets/images/default-placeholder.png'
import Image from "next/image";

const elementsFR = [
  {
    id:1, 
    name : 'Avatar', 
    description : 'Dignissimos earum expedita sunt, reprehenderit eveniet ut asperiores ratione repellat ipsam nobis sint minima nostrum ?  Quos eos, veniam odio excepturi porro ex.' ,
    preview: <div className="h-20 w-20 overflow-hidden rounded-full">
    <Image src={defaultPlaceholder} alt="image" />
  </div>,
    code: [
        `import Image from "next/image"`,
        `import defaultPlaceholder from '@assets/images/default-placeholder.png'`,
        ``,
        `[...]`,
        ``,
        `<div className="h-20 w-20 overflow-hidden rounded-full">`,
        `   <Image src={defaultPlaceholder} alt="image" />`,
        `</div>`
    ] 
},
{
    id:2, 
    name : 'Button', 
    description : 'Est doloribus eum voluptas corrupti temporibus accusamus nisi sequi atque cumque facere! Facere voluptas rem consequatur veritatis voluptatum dolores libero illo enim.',
    preview: <div className="px-6 py-3 !bg-primary text-white rounded-lg w-max">Button</div>,
    code: [
        `<div className="px-6 py-3 !bg-primary text-white rounded-lg w-max">`,
        `   {children}`,
        `</div>`
    ], 
},
]

export default elementsFR
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"


const fixedContentEN = {
    home: {
        introduction: {
            title : 'Introduction',
            text: <>Foxylib is an open-source library of UI components based on Tailwind CSS framework.
                    <br/>It includes all of the commonly used components that a website requires, such as buttons, dropdowns, navigation bars, modals, but also some more advanced interactive elements such as datepickers.
                    <br/>All of the elements are built using the utility classes from Tailwind CSS and Next.Js.</>,
            tailwind: 'Tailwind CSS 3.0',
            textTailwind: 'Feel free to upgrade to version 3 of Tailwind CSS as there are no breaking changes when using the components from Foxylib.'
        }
    },
    tabs: [
    { id:1,name: "Preview", icon: <EyeIcon />, current: true },
    { id:2,name: "Code", icon: <CodeBracketIcon />, current: false },]
}
export default fixedContentEN
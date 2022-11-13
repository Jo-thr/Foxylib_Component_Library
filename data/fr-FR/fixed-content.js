import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline"

const fixedContentFR = {
    home: {
        introduction: {
            title : 'Introduction',
            text: <>Foxylib est une bibliothèque open source de composants Ui basée sur le framework CSS Tailwind.
                <br/>Il comprend tous les composants couramment utilisés dont un site Web a besoin, tels que les boutons, les listes déroulantes, les barres de navigation, les modales, mais également certains éléments interactifs plus avancés tels que les sélecteurs de date.
                <br/>Tous les éléments sont construits à l'aide des classes utilitaires de Tailwind CSS et Next.Js.</>,
            tailwind: 'Tailwind CSS 3.0',
            textTailwind: 'Feel free to upgrade to version 3 of Tailwind CSS as there are no breaking changes when using the components from Foxylib.'
        }
    },
    tabs: [
    { id:1,name: "Preview", icon: <EyeIcon />, current: true },
    { id:2,name: "Code", icon: <CodeBracketIcon />, current: false },]
}

export default fixedContentFR
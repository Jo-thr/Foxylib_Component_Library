const navigation = [
    {
        id : 1,
        name: 'Get started',
        path: '/getStarted',
    },{
        id : 2,
        name: 'Elements',
        path: '/elements',
        subpages:[
            {id: 1, name: 'Avatar', path:'/elements/avatar'},
            {id: 2, name: 'Button', path:'/elements/button'},
            {id: 3, name: 'Collapse', path:'/elements/collapse'},
            {id: 4, name: 'Dropdown', path:'/elements/dropdown'},
            {id: 5, name: 'Tags / Badges', path:'/elements/tags'},
        ]
    },{
        id : 3,
        name: 'Forms',
        path: '/forms',
        subpages:[
            {id: 1, name: 'Checkbox', path:'/forms/checkbox'},
            {id: 2, name: 'Comboboxes', path:'/forms/comboboxes'},
            {id: 3, name: 'Fields / Inputs', path:'/forms/fields'},
            {id: 4, name: 'Ratio', path:'/forms/ratio'},
            {id: 5, name: 'Select', path:'/forms/select'},
            {id: 6, name: 'Toggle', path:'/forms/toggle'},
        ]
    },{
        id : 7,
        name: 'Hooks',
        path: '/hooks',
        subpages:[
            {id: 1, name: 'Translation', path:'/hooks/translation'},
        ]
    },{
        id : 4,
        name: 'Layout',
        path: '/layout',
        subpages:[
            {id: 1, name: 'Container', path:'/layout/container'},
            {id: 2, name: 'Row', path:'/layout/row'},
        ]
    },{
        id : 5,
        name: 'Navigation',
        path: '/navigation',
        subpages:[
            {id: 1, name: 'Breadcrumbs', path:'/navigation/breadcrumbs'},
            {id: 2, name: 'Navbar', path:'/navigation/navbar'},
            {id: 3, name: 'Pagination', path:'/navigation/pagination'},
            {id: 4, name: 'Search', path:'/navigation/search'},
            {id: 5, name: 'Sidebar', path:'/navigation/sidebar'},
            {id: 6, name: 'Steps', path:'/navigation/steps'},
            {id: 7, name: 'Tabs', path:'/navigation/tabs'},
        ]
    },{
        id : 6,
        name: 'Overlays',
        path: '/overlays',
        subpages:[
            {id: 1, name: 'Alert', path:'/overlays/alert'},
            {id: 2, name: 'Modal', path:'/overlays/modal'},
            {id: 3, name: 'Notification', path:'/overlays/notification'},
            {id: 4, name: 'Tooltip', path:'/overlays/tooltip'},
        ]
    },
]

export default navigation
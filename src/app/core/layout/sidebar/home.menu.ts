import { SidebarItem } from "./sidebar-item.metadata";

// prettier-ignore
export const HOME_MENU: SidebarItem[] = [
  {
    text       : 'prototype',
    icon       : 'public',
    path       : '',
    moduleName : '',
    submenu: [
      {
        text       : 'Search List',
        icon       : '',
        path       : '/prototype/list-search',
        moduleName : '',
        submenu: []
      },
      {
        text       : 'Register',
        icon       : '',
        path       : '/prototype/register',
        moduleName : '',
        submenu: []
      },
      {
        text       : 'Casino',
        icon       : 'casino',
        path       : '/prototype/list-search',
        moduleName : '',
        submenu: [

          {
            text       : 'Casino2',
            icon       : 'casino2',
            path       : '/bbb',
            moduleName : '',
            submenu: []
          },
          {
            text       : 'Casino3',
            icon       : 'casino3',
            path       : '/aaa',
            moduleName : '',
            submenu: []
          },
        ]
      },
    ]
  }
]

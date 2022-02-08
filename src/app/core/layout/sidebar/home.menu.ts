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
        icon       : 'fitness_center',
        path       : '/prototype/list-search',
        moduleName : '',
        submenu: undefined
      },
      {
        text       : 'Casino',
        icon       : 'casino',
        path       : '',
        moduleName : '',
        submenu: undefined
      },
    ]
  }
]

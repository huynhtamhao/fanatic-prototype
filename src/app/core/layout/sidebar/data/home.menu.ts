import { PROTOTYPE_PATH } from "src/app/prototype/prototype-routing.module";
import { SidebarItem } from "./sidebar-item.metadata";

// prettier-ignore
export const HOME_MENU: SidebarItem[] = [
  {
    id         : 'prototype',
    icon       : 'public',
    path       : PROTOTYPE_PATH.RegisterComponent,
    moduleName : '',
    submenu: [
      {
        id         : 'Search List',
        icon       : '',
        path       : PROTOTYPE_PATH.SearchListComponent,
        moduleName : '',
        submenu: []
      },
      {
        id         : 'Register',
        icon       : '',
        path       : PROTOTYPE_PATH.RegisterComponent,
        moduleName : '',
        submenu: []
      },
      {
        id         : 'Casino',
        icon       : 'casino',
        path       : '',
        moduleName : '',
        submenu: [

          {
            id         : 'Casino2',
            icon       : 'casino2',
            path       : '',
            moduleName : '',
            submenu: []
          },
          {
            id         : 'Casino3',
            icon       : 'casino3',
            path       : '',
            moduleName : '',
            submenu: []
          },
        ]
      },
    ]
  }
]

import { SidebarItem } from "./sidebar-item.metadata";

// prettier-ignore
export const MASTER_MENU: SidebarItem[] = [
  {
    id         : 'マスタ',
    icon       : 'class',
    path       : '',
    submenu: [
      {
        id         : '会社マスタ登録',
        icon       : 'class',
        path       : '',
        submenu: []
      },
      {
        id         : 'ユーザマスタ登録',
        icon       : 'class',
        path       : '',
        submenu: []
      },
      {
        id         : '拠点マスタ登録',
        icon       : 'class',
        path       : '',
        submenu: []
      },
      {
        id         : '組織マスタ登録',
        icon       : 'class',
        path       : '',
        submenu: []
      },
      {
        id         : '品目マスタ登録',
        icon       : 'class',
        path       : '',
        submenu: []
      },
    ]
  },
]

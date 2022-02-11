import { SidebarItem } from "./sidebar-item.metadata";

// prettier-ignore
export const HOME_MENU: SidebarItem[] = [
  {
    id         : 'prototype',
    icon       : 'public',
    path       : '',
    submenu: [
      {
        id         : 'list-search',
        icon       : '',
        path       : '/prototype/list-search',
        submenu: []
      },
      {
        id         : 'list-register',
        icon       : '',
        path       : '/prototype/list-register',
        submenu: []
      },
      {
        id         : 'register',
        icon       : '',
        path       : '/prototype/register',
        submenu: []
      },
    ]
  },
  {
    id         : '生産管理',
    icon       : 'account_balance',
    path       : '',
    submenu: [
      {
        id         : '材料入荷',
        icon       : 'account_balance_wallet',
        path       : '',
        submenu: []
      },
      {
        id         : '材料払出',
        icon       : 'add_shopping_cart',
        path       : '',
        submenu: []
      },
      {
        id         : '生産計画',
        icon       : 'alarm',
        path       : '',
        submenu: [
          {
            id         : '指図書',
            icon       : '',
            path       : '',
            submenu: [
              {
                id         : '作成',
                icon       : '',
                path       : '',
                submenu: []
              },
              {
                id         : '照会',
                icon       : '',
                path       : '',
                submenu: []
              },
            ]
          },
          {
            id         : '指図書一覧',
            icon       : '',
            path       : '',
            submenu: []
          },
          {
            id         : '製造指示書一覧',
            icon       : '',
            path       : '',
            submenu: []
          },
        ]
      },
      {
        id         : '製造実行',
        icon       : 'all_out',
        path       : '',
        submenu: []
      },
      {
        id         : '購買発注',
        icon       : 'android',
        path       : '',
        submenu: []
      },
    ]
  },
  {
    id         : '販売管理',
    icon       : 'bug_report',
    path       : '',
    submenu: [
      {
        id         : '販売管理',
        icon       : 'check_circle',
        path       : '',
        submenu: []
      },
      {
        id         : '販売管理',
        icon       : 'check_circle_outline',
        path       : '',
        submenu: []
      },
    ]
  },
]

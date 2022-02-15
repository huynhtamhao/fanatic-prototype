import { SidebarItem } from "./sidebar-item.metadata";

// prettier-ignore
export const HOME_MENU: SidebarItem[] = [
  {
    id         : 'プロトタイプ',
    icon       : 'public',
    path       : '',
    submenu: [
      {
        id         : '検索一覧画面',
        icon       : 'view_list',
        path       : '/prototype/list-search',
        submenu: []
      },
      {
        id         : '登録一覧画面',
        icon       : 'playlist_add',
        path       : '/prototype/list-register',
        submenu: []
      },
      {
        id         : '登録画面',
        icon       : 'add',
        path       : '/prototype/register',
        submenu: []
      },
      {
        id         : '修正画面',
        icon       : 'edit',
        path       : '/prototype/product/CD0001',
        submenu: []
      },
      {
        id         : '参照画面',
        icon       : 'remove_red_eye',
        path       : '/prototype/inquiry-product/CD0001',
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

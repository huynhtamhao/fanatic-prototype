export abstract class Constants {

  static readonly MESSAGE_TYPE = {
    INFO: 'info',
    CONFIRM: 'contact_support',
    ERROR: 'error',
    WARNING: 'warning',
  };

  static readonly localeJP = 'ja-JP';
  static readonly timezoneJP = 'Asia/Tokyo';

  static SCREEN_NAME = {
    ORDER_REGISTER: '受注登録',
    ORDER_UPDATE: '受注更新',
    ORDER_VIEW: '受注参照',
    ITEMS_REGISTER: '品目登録',
    LIST_SEARCH: '一覧表示',
    LIST_REGISTER: '一覧登録',
  }
}

export class DialogData {
  title: string;
  icon : string; // Material Icons
  messageKey?: string;
  param?: Record<string, unknown>;
  leftButtonText: string; // OK
  rightButtonText: string; // Cancel Button
  isHiddenButton: boolean;

  constructor() {
    this.title = '確認';
    this.leftButtonText = 'ＯＫ';
    this.rightButtonText = 'キャンセル';
    this.icon = 'contact_support'; // Material Icon
    this.isHiddenButton = false;
  }
}

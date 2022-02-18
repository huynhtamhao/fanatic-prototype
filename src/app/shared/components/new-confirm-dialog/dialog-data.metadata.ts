
export const i18nSetting = {
  defaultTitle: 'dialog.confirm.title',
  // Button
  leftDefaultButtonText: 'dialog.confirm.buttonText.leftDefault',
  rightDefaultButtonText: 'dialog.confirm.buttonText.rightDefault',
  okButtonText: 'dialog.confirm.buttonText.ok',
  cancelButtonText: 'dialog.confirm.buttonText.cancel',
  // Register
  registerTitle: 'dialog.confirm.register.title',
  registerMessage: 'dialog.confirm.register.message',
  registerMessageItem: 'dialog.confirm.register.messageItem',
  // Update
  updateTitle: 'dialog.confirm.update.title',
  updateMessage: 'dialog.confirm.update.message',
  updateMessageItem: 'dialog.confirm.update.messageItem',
  // Delete
  deleteTitle: 'dialog.confirm.delete.title',
  deleteMessage: 'dialog.confirm.delete.message',
  deleteMessageItem: 'dialog.confirm.delete.messageItem',
  // Stay On This Page
  stayOnThisPageMessage: 'dialog.confirm.stayOnThisPage.message',
}

export const defaultMatDialogConfig = {
  width: '350px',
  panelClass: ['mat-elevation-z8', 'mat-dialog-custom'],
  autoFocus: false,
  disableClose: true,
};

export class DialogData {
  title: string;
  icon : string; // Material Icons
  messageKey?: string;
  param?: Record<string, unknown>;
  leftButtonText: string; // OK
  rightButtonText: string; // Cancel Button

  constructor() {
    this.title = i18nSetting.defaultTitle;
    this.leftButtonText = i18nSetting.leftDefaultButtonText;
    this.rightButtonText = i18nSetting.rightDefaultButtonText;
    this.icon = 'contact_support'; // Material Icon
  }
}

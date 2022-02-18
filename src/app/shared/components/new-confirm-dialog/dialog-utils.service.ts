import { Injectable, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogData, i18nSetting, defaultMatDialogConfig } from './dialog-data.metadata';

class ConfirmDialogBuilder {
  private dialogData: DialogData;
  private matDialogConfig: MatDialogConfig<DialogData>;

  constructor(
    private dialogUtils: DialogUtilsService,
  ) {
    this.dialogData = new DialogData();
    this.matDialogConfig = defaultMatDialogConfig;
  }

  public setConfig(matDialogConfig: MatDialogConfig<DialogData>) {
    this.matDialogConfig = matDialogConfig;
    return this;
  }

  public setTitle(title: string) {
    this.dialogData.title = title;
    return this;
  }

  public setIcon(icon: string) {
    this.dialogData.icon = icon;
    return this;
  }

  public setMessageKey(messageKey: string) {
    this.dialogData.messageKey = messageKey;
    return this;
  }

  public setMessageParam(param: Record<string, unknown>) {
    this.dialogData.param = param;
    return this;
  }

  public setButtonText(left: string, right: string) {
    this.dialogData.leftButtonText = left;
    this.dialogData.rightButtonText = right;
    return this;
  }

  public useOKCancelButton() {
    this.dialogData.leftButtonText = i18nSetting.okButtonText;
    this.dialogData.rightButtonText = i18nSetting.cancelButtonText;
    return this;
  }

  public openDialog() {
    this.matDialogConfig.data = this.dialogData;
    return this.dialogUtils.open(this.matDialogConfig);
  }
}

@Injectable({
  providedIn: 'root',
})
export class DialogUtilsService {

  private dialogBuilder!: ConfirmDialogBuilder;
  constructor(
    private dialog: MatDialog,
    @Optional() public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {
    this.dialogBuilder = new ConfirmDialogBuilder(this);
  }

  public new() {
    return this.dialogBuilder;
  }

  public register(item?: string): ConfirmDialogBuilder {
    !!item ?
      this.build(i18nSetting.registerTitle, i18nSetting.registerMessageItem, item) :
      this.build(i18nSetting.registerTitle, i18nSetting.registerMessage)
    return this.dialogBuilder;
  }

  public update(item?: string) {
    !!item ?
      this.build(i18nSetting.updateTitle, i18nSetting.updateMessageItem, item) :
      this.build(i18nSetting.updateTitle, i18nSetting.updateMessage)
    return this.dialogBuilder;
  }

  public delete(item?: string) {
    !!item ?
      this.build(i18nSetting.deleteTitle, i18nSetting.deleteMessageItem, item) :
      this.build(i18nSetting.deleteTitle, i18nSetting.deleteMessage)
    return this.dialogBuilder;
  }

  public stayOnThisPage() {
    this.dialogBuilder.setTitle(i18nSetting.stayOnThisPageMessage);
    return this.dialogBuilder;
  }

  open(config: MatDialogConfig<DialogData>) {
    return this.dialog.open(ConfirmDialogComponent, config);
  }

  private build(title: string, message: string, item?: string): void {
    this.dialogBuilder.setTitle(title);
    this.dialogBuilder.setMessageKey(message);
    if (!!item) {
      const param = {
        'item': item
      }
      this.dialogBuilder.setMessageParam(param);
    }
  }
}

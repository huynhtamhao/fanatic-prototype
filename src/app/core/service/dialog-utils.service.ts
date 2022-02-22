import { Injectable, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { DialogData, i18nSetting, defaultMatDialogConfig } from '../../shared/components/confirm-dialog/dialog-data.metadata';

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

  constructor(
    private dialog: MatDialog,
    @Optional() public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  public new() {
    return new ConfirmDialogBuilder(this);
  }

  public register(item?: string): ConfirmDialogBuilder {
    return this.build(i18nSetting.registerTitle, !!item ? i18nSetting.registerMessageItem : i18nSetting.registerMessage, item);
  }

  public update(item?: string) {
    return this.build(i18nSetting.updateTitle, !!item ? i18nSetting.updateMessageItem : i18nSetting.updateMessage, item);

  }

  public delete(item?: string) {
    return this.build(i18nSetting.deleteTitle, !!item ? i18nSetting.deleteMessageItem : i18nSetting.deleteMessage , item);
  }

  public stayOnThisPage() {
    const dialogBuilder = new ConfirmDialogBuilder(this);
    dialogBuilder.setMessageKey(i18nSetting.stayOnThisPageMessage);
    return dialogBuilder;
  }

  open(config: MatDialogConfig<DialogData>) {
    return this.dialog.open(ConfirmDialogComponent, config);
  }

  private build(title: string, message: string, item?: string): ConfirmDialogBuilder {
    const dialogBuilder = new ConfirmDialogBuilder(this);
    dialogBuilder.setTitle(title);
    dialogBuilder.setMessageKey(message);
    if (!!item) {
      const param = {
        'item': item
      }
      dialogBuilder.setMessageParam(param);
    }
    return dialogBuilder;
  }
}

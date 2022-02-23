import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { ConfirmDialogComponent } from "./confirm-dialog.component";
import { DialogData, defaultMatDialogConfig, defaultDialogSetting } from "./dialog-data.metadata";

class Builder {
  private dialogData: DialogData;
  private matDialogConfig: MatDialogConfig<DialogData>;

  constructor(
    private confirmDialogBuilder: ConfirmDialogBuilder,
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
    this.dialogData.leftButtonText = defaultDialogSetting.okButtonText;
    this.dialogData.rightButtonText = defaultDialogSetting.cancelButtonText;
    return this;
  }

  public openDialog() {
    this.matDialogConfig.data = this.dialogData;
    return this.confirmDialogBuilder.open(this.matDialogConfig);
  }
}

export class ConfirmDialogBuilder {

  constructor(
    private dialog: MatDialog,
  ) { }

  public new() {
    return new Builder(this);
  }

  public register(item?: string): Builder {
    const message = !!item ? defaultDialogSetting.registerMessageItem : defaultDialogSetting.registerMessage
    return this.build(defaultDialogSetting.registerTitle, message, item);
  }

  public update(item?: string): Builder {
    const message = !!item ? defaultDialogSetting.updateMessageItem : defaultDialogSetting.updateMessage
    return this.build(defaultDialogSetting.updateTitle, message, item);
  }

  public delete(item?: string): Builder {
    const message = !!item ? defaultDialogSetting.deleteMessageItem : defaultDialogSetting.deleteMessage
    return this.build(defaultDialogSetting.deleteTitle, message, item);
  }

  public stayOnThisPage(): Builder {
    const dialogBuilder = new Builder(this);
    dialogBuilder.setMessageKey(defaultDialogSetting.stayOnThisPageMessage);
    return dialogBuilder;
  }

  open(config: MatDialogConfig<DialogData>) {
    return this.dialog.open(ConfirmDialogComponent, config);
  }

  private build(title: string, message: string, item?: string): Builder {
    const dialogBuilder = new Builder(this);
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

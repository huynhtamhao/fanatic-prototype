import { MatDialogConfig } from '@angular/material/dialog';
import { ConfigService } from 'src/app/core/service/config.service';
import { DialogUtilsService } from './dialog-utils.service';
import { DialogData } from './dialog-data.metadata';

export class ConfirmDialogBuilder {
  private dialogData: DialogData;
  private matDialogConfig: MatDialogConfig<DialogData>;

  constructor(
    private dialogUtils: DialogUtilsService,
    private config: ConfigService,
  ) {
    this.dialogData = new DialogData();
    this.matDialogConfig = {
      minWidth: '250px',
      maxWidth: '350px',
      panelClass: ['mat-elevation-z8', 'mat-dialog-custom'],
      autoFocus: false,
      disableClose: true,
    };
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

  public setLeftButtonText(text : string) {
    this.dialogData.leftButtonText = text;
    return this;
  }

  public setRightButtonText(text : string) {
    this.dialogData.rightButtonText = text;
    return this;
  }

  public openDialog() {
    this.matDialogConfig.data = this.dialogData;
    return this.dialogUtils.open(this.matDialogConfig);
  }
}

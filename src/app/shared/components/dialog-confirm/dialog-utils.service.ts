/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Constants } from 'src/app/core/constants/Constants';
import { DialogConfirmComponent } from './dialog-confirm.component';
import { DialogData } from './dialog-data.metadata';


@Injectable({
  providedIn: 'root'
})
export class DialogUtilsService {

  public dialogData = new DialogData();
  public dialogConfig = new MatDialogConfig<any>();

  private messageType = Constants.MESSAGE_TYPE;
  private stringMapParam = '{value}';

  constructor(
    private dialog: MatDialog,
    @Optional() public dialogRef: MatDialogRef<DialogConfirmComponent>
  ) { }

  public openDialog(dialogData: DialogData): MatDialogRef<DialogConfirmComponent> {
    return this.dialogRef = this.openDefaultDialog(dialogData);
  }

  public openDialogSuccessRegistry(): MatDialogRef<DialogConfirmComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.REGISTRY;
    this.dialogData.messageType = this.messageType.INFO;
    this.dialogData.messageContent = this.mapParamMessageContent(TITLE.REGISTRY, '{value}が完了しました。');

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  public openDialogSuccessUpdate(): MatDialogRef<DialogConfirmComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.UPDATE;
    this.dialogData.messageType = this.messageType.INFO;
    this.dialogData.messageContent = this.mapParamMessageContent(TITLE.UPDATE, '{value}が完了しました。');

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  public openDialogErrorRegistry(): MatDialogRef<DialogConfirmComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.REGISTRY;
    this.dialogData.messageType = this.messageType.ERROR;
    this.dialogData.messageContent = this.mapParamMessageContent(TITLE.REGISTRY, '{value}が失敗しました。');

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  public openDialogErrorUpdate(): MatDialogRef<DialogConfirmComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.UPDATE;
    this.dialogData.messageType = this.messageType.ERROR;
    this.dialogData.messageContent = this.mapParamMessageContent(TITLE.UPDATE, '{value}が失敗しました。');

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  public openDialogConfirmDelete(): MatDialogRef<DialogConfirmComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.DELETE;
    this.dialogData.messageType = this.messageType.CONFIRM;
    this.dialogData.messageContent = '削除してもよろしいですか。';
    this.getDefaultButtonActions(this.dialogData);

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  public openDialogConfirmChangeData(): MatDialogRef<DialogConfirmComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.CHANGE;
    this.dialogData.messageType = this.messageType.CONFIRM;
    this.dialogData.messageContent = 'データが変更されました。保存しますか？';
    this.getDefaultButtonActions(this.dialogData);

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  private openDefaultDialog(data: DialogData): MatDialogRef<DialogConfirmComponent> {
    return this.dialog.open(DialogConfirmComponent, {
      width: '350px',
      minWidth: '250px',
      maxWidth: '350px',
      panelClass: ['mat-elevation-z8', 'mat-dialog-custom'],
      autoFocus: false,
      disableClose: true,
      data,
    });
  }

  public newDialogConfig(): void {
    this.dialogConfig = new MatDialogConfig<any>();
  }

  public openDialogCustom(): MatDialogRef<DialogConfirmComponent> {
    return this.dialogRef = this.dialog.open(DialogConfirmComponent, this.dialogConfig);
  }

  public getDefaultButtonActions(dialogData: DialogData): void {
    dialogData.buttonActions.leftButton = 'はい';
    dialogData.buttonActions.rightButton = 'いいえ';
  }

  public changePosition(position: object): void {
    // { top: '10%', left: '30%' }
    this.dialogRef.updatePosition(position);
  }

  public addPanelClass(panelClass: string[]): void {
    this.dialogRef.addPanelClass(panelClass);
  }

  private mapParamMessageContent(value: string, messageContent: string): string {
    return messageContent.split(this.stringMapParam).join(value);
  }

}

export const TITLE = {
  REGISTRY: '登録',
  UPDATE: '更新',
  DELETE: '削除',
  CHANGE: '変更'
};


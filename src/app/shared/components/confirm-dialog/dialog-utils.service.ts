import { Injectable, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Constants } from '@shared/common/Constants';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogData } from './DialogData';


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
    @Optional() public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  public openDialog(dialogData: DialogData): MatDialogRef<ConfirmDialogComponent> {
    return this.dialogRef = this.openDefaultDialog(dialogData);
  }

  public openDialogSuccessRegistry(): MatDialogRef<ConfirmDialogComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.REGISTRY;
    this.dialogData.messageType = this.messageType.INFO;
    this.dialogData.messageContent = this.mapParamMessageContent(TITLE.REGISTRY, '{value}が完了しました。');

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  public openDialogSuccessUpdate(): MatDialogRef<ConfirmDialogComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.UPDATE;
    this.dialogData.messageType = this.messageType.INFO;
    this.dialogData.messageContent = this.mapParamMessageContent(TITLE.UPDATE, '{value}が完了しました。');

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  public openDialogErrorRegistry(): MatDialogRef<ConfirmDialogComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.REGISTRY;
    this.dialogData.messageType = this.messageType.ERROR;
    this.dialogData.messageContent = this.mapParamMessageContent(TITLE.REGISTRY, '{value}が失敗しました。');

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  public openDialogErrorUpdate(): MatDialogRef<ConfirmDialogComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.UPDATE;
    this.dialogData.messageType = this.messageType.ERROR;
    this.dialogData.messageContent = this.mapParamMessageContent(TITLE.UPDATE, '{value}が失敗しました。');

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  public openDialogConfirmDelete(): MatDialogRef<ConfirmDialogComponent> {
    this.dialogData = new DialogData();
    this.dialogData.title = TITLE.DELETE;
    this.dialogData.messageType = this.messageType.CONFIRM;
    this.dialogData.messageContent = '削除してもよろしいですか。';
    this.getDefaultButtonActions(this.dialogData);

    return this.dialogRef = this.openDefaultDialog(this.dialogData);
  }

  private openDefaultDialog(data: DialogData): MatDialogRef<ConfirmDialogComponent> {
    return this.dialog.open(ConfirmDialogComponent, {
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

  public openDialogCustom(): MatDialogRef<ConfirmDialogComponent> {
    return this.dialogRef = this.dialog.open(ConfirmDialogComponent, this.dialogConfig);
  }

  public getDefaultButtonActions(dialogData: DialogData): void {
    dialogData.buttonActions.leftButton = 'いいえ';
    dialogData.buttonActions.rightButton = 'はい';
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
  DELETE: '削除'
};


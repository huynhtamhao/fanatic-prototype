import { Injectable, Optional } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { ConfigService } from 'src/app/core/service/config.service';
import { ConfirmDialogBuilder } from './confirm-dialog.builder';
import { ConfirmDialogComponent } from './confirm-dialog.component';
import { DialogData } from './dialog-data.metadata';

@Injectable({
  providedIn: 'root',
})
export class DialogUtilsService {

  private dialogBuilder!: ConfirmDialogBuilder;
  constructor(
    private dialog: MatDialog,
    private config: ConfigService,
    @Optional() public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) {
    this.dialogBuilder = new ConfirmDialogBuilder(this, this.config);
  }

  public new() {
    return this.dialogBuilder;
  }

  public register(): ConfirmDialogBuilder {
    this.dialogBuilder.setTitle('登録確認');
    this.dialogBuilder.setMessageKey('Data');
    return this.dialogBuilder;
  }

  public update() {
    this.dialogBuilder.setTitle('変更確認');
    return this.dialogBuilder;
  }

  public delete() {
    this.dialogBuilder.setTitle('削除確認');
    return this.dialogBuilder;
  }

  open(config: MatDialogConfig<DialogData>) {
    return this.dialog.open(ConfirmDialogComponent, config);
  }
}

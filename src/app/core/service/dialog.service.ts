import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogBuilder } from '@shared/components/confirm-dialog/confirm-dialog.builder';

@Injectable({
  providedIn: 'root',
})
export class DialogService {

  constructor(
    private dialog: MatDialog
  ) { }

  public confirm() {
    return new ConfirmDialogBuilder(this.dialog);
  }

}

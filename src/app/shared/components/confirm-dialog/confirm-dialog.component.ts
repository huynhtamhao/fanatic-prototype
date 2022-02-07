import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-data.metadata';

@Component({
  selector: 'karios-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  getMessageContent(): string | undefined {
    if (!!this.data.messageCode) {
      // return errorMessage.find(e => e.ERROR_CODE === 'ERROR_REGISTRY')?.ERROR_MESSAGE;
    }

    return this.data.messageContent;
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-data.metadata';

@Component({
  selector: 'kairos-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void { }

  getMessageContent(): string | undefined {
    if (!!this.data.messageCode) {
      // return errorMessage.find(e => e.ERROR_CODE === 'ERROR_REGISTRY')?.ERROR_MESSAGE;
    }

    return this.data.messageContent;
  }

}

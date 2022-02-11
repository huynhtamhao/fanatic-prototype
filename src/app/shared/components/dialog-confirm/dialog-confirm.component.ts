import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from './dialog-data.metadata';

@Component({
  selector: 'kairos-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }


  getMessageContent(): string | undefined {
    if (!!this.data.messageCode) {
      // return errorMessage.find(e => e.ERROR_CODE === 'ERROR_REGISTRY')?.ERROR_MESSAGE;
    }

    return this.data.messageContent;
  }

}

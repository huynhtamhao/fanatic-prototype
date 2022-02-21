import { Component } from '@angular/core';
import { DialogUtilsService } from '@shared/components/confirm-dialog/dialog-utils.service';
import { CommonToastrService } from 'src/app/core/service/common-toastr.service';

@Component({
  selector: 'kairos-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private commonToastr: CommonToastrService,
    private confirmDialog: DialogUtilsService,
  ) { }

  showSuccess() {
    this.commonToastr.register().success().show();
    this.commonToastr.register('商品名').success().show();
  }

  showError() {
    this.commonToastr.register().failure().show();
  }

  showDialog() {
    const dialogRef = this.confirmDialog.register().openDialog();
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.commonToastr.register().success().show();
      }
    });
  }
  showDialogParam() {
    this.confirmDialog.register('商品名').openDialog();
  }
}

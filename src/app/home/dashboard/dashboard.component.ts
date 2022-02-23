import { Component } from '@angular/core';
import { DialogService } from 'src/app/core/service/dialog.service';
import { CommonToastrService } from 'src/app/core/service/common-toastr.service';

@Component({
  selector: 'kairos-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private commonToastr: CommonToastrService,
    private dialogService: DialogService,
  ) { }

  showSuccess() {
    this.commonToastr.register().success().show();
    this.commonToastr.register('商品名').success().show();
  }

  showError() {
    this.commonToastr.register().failure().show();
  }

  showDialog() {
    const dialogRef = this.dialogService.confirm().register().openDialog();
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        this.commonToastr.register().success().show();
      }
    });
  }
  showDialogParam() {
    this.dialogService.confirm().register('商品名').openDialog();
  }
}

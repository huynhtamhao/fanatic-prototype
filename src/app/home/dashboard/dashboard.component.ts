import { Component } from '@angular/core';
import { CommonToastrService } from 'src/app/core/service/common-toastr.service';

@Component({
  selector: 'kairos-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private commonToastr: CommonToastrService,
  ) {}

  showSuccess() {
    this.commonToastr.register().success().show();
  }


  showError() {
    this.commonToastr.register().failure().show();
  }
}

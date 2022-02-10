import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'kairos-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    productCd: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
    quantity: new FormControl(null, [Validators.pattern('^([0-9]+\.?[0-9]*|\.[0-9]+)$'), Validators.maxLength(6)]),
    invoiceNo: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
    storageLocation: new FormControl(null, [Validators.required, Validators.maxLength(6)]),
    inboundDeliveryStorageLocation: new FormControl(null, [Validators.maxLength(6)]),
  });

  constructor(
    private toastrService: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  onRegister() {
    // alert(this.form.controls['productCd'].value);
    this.showSubmitMessage();
  }

  showSubmitMessage() {
    // test toast
    const index = Math.floor(Math.random() * 2);
    if (index === 1) {
      this.toastrService.info(messageSubmit[index]);
    } else {
      this.toastrService.error(messageSubmit[index]);
    }
  }
  /**
   * Flex display
   */
  public setFlex(flex: number) {
    return '0 0 calc(800px * ' + flex + '/30)';
  }

}

export const messageSubmit = [
  "登録が完了しました。",
  "登録が失敗しました。"
]

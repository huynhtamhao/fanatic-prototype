/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorSummary } from 'src/app/core/layout/error-summary/error-summary.metadata';
import { ErrorUtilsService } from 'src/app/core/service/error-utils.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'kairos-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    productCd: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(6)]),
    quantity: new FormControl(null, [Validators.pattern('^([0-9]+\.?[0-9]*|\.[0-9]+)$'), Validators.maxLength(6)]),
    invoiceNo: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
    storageLocation: new FormControl(null, [Validators.required, Validators.maxLength(6)]),
    inboundDeliveryStorageLocation: new FormControl(null, [Validators.maxLength(6)]),
  });

  constructor(
    private errorUtilsService: ErrorUtilsService,
    private toastrService: ToastrService,
    private location: Location,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.location.back();
  }

  onRegister() {
    // alert(this.form.controls['productCd'].value);

    if (this.form.invalid) {
      return;
    }

    if (!this.showSubmitMessage()) {
      return;
    };
  }

  showSubmitMessage(): boolean {
    // test toast
    const index = Math.floor(Math.random() * 2);
    if (index === 0) {
      this.toastrService.success(messageSubmit[index]);
      this.errorUtilsService.clearErrorSummary();
      return true;
    } else {
      // example data
      this.errorUtilsService.setErrorSummary(errors);

      this.toastrService.error(messageSubmit[index]);
      return false;
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

export const errors: ErrorSummary[] = [
  { errorCode: 'Error 01', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 02', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 03', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 04', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 05', errorMessage: 'エラーが発生しました。' },
]

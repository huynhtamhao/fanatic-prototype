import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ErrorUtilsService } from 'src/app/core/service/error-utils.service';
import { ErrorSummary } from 'src/app/core/layout/error-summary/error-summary.metadata';
import { Product } from '../list-search/list-search.component';

@Component({
  selector: 'kairos-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public errorSystem = false;

  form: FormGroup = new FormGroup({
    productCd: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(6)]),
    quantity: new FormControl(null, [Validators.required, Validators.pattern('^([0-9]+\.?[0-9]*|\.[0-9]+)$'), Validators.maxLength(6)]),
    invoiceNo: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
    storageLocation: new FormControl(null, [Validators.required, Validators.maxLength(6)]),
    inboundDeliveryStorageLocation: new FormControl(null, [Validators.maxLength(6)]),
  });

  constructor(
    private activeRoute: ActivatedRoute,
    private errorUtilsService: ErrorUtilsService,
    private toastrService: ToastrService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getProductInfo();
  }

  onCancel() {
    this.location.back();
  }

  onUpdate() {
    if (this.form.invalid) {
      return;
    }

    if (!this.showSubmitMessage()) {
      return;
    };
  }

  showSubmitMessage(): boolean {
    // test toast
    const index = Math.floor(Math.random() * 3);
    if (index === 0) {
      this.toastrService.success(messageSubmit[index]);
      this.errorUtilsService.clearErrorSummary();
      return true;
    } else if (index === 1) {
      // example data
      this.errorUtilsService.setErrorSummary(errors);

      this.toastrService.error(messageSubmit[index]);
      return false;
    } else {
      // example data
      this.errorUtilsService.setErrorSummary(errors);

      this.toastrService.error(messageSubmit[index]);
      this.errorSystem = true;
      this.lockFormInput();
      return false;
    }
  }

  lockFormInput() {
    this.form.controls['productCd'].disable();
    this.form.controls['quantity'].disable();
    this.form.controls['invoiceNo'].disable();
    this.form.controls['storageLocation'].disable();
    this.form.controls['inboundDeliveryStorageLocation'].disable();
  }

  getProductInfo() {
    const productCd = this.activeRoute.snapshot.paramMap.get('productCd');
    const productInfo = PRODUCT_DATA.find(p => p.productCd === productCd);
    if (!!productInfo) {
      this.form.controls['productCd'].setValue(productInfo.productCd);
      this.form.controls['quantity'].setValue(productInfo.quantity);
      this.form.controls['invoiceNo'].setValue(productInfo.invoiceNo);
      this.form.controls['storageLocation'].setValue(productInfo.storageLocation);
    }
  }

}

export const messageSubmit = [
  "更新が完了しました。",
  "更新が失敗しました。",
  "システムエラーが発生しました"
]

export const errors: ErrorSummary[] = [
  { errorCode: 'Error 01', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 02', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 03', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 04', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 05', errorMessage: 'エラーが発生しました。' },
]

export const PRODUCT_DATA = [
  {productCd: 'CD0001', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10001},
  {productCd: 'CD0002', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10002},
  {productCd: 'CD0003', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10003},
  {productCd: 'CD0004', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10004},
  {productCd: 'CD0005', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10005},
  {productCd: 'CD0006', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10006},
  {productCd: 'CD0007', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10007},
];

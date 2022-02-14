import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ErrorSummary } from 'src/app/core/layout/error-summary/error-summary.metadata';
import { ErrorUtilsService } from 'src/app/core/service/error-utils.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private stringMapParam = '{value}';

  constructor(
    private errorUtilsService: ErrorUtilsService,
    private toastrService: ToastrService,
  ) { }

  getProductInfo(productCd: string) {
    return PRODUCT_DATA.find(p => p.productCd === productCd);
  }

  checkErrorMessage(process: string): number {
    // test toast
    const index = Math.floor(Math.random() * 3);
    if (index === 0) {
      this.toastrService.success(messageSubmit[index].split(this.stringMapParam).join(process));
      this.errorUtilsService.clearErrorSummary();

    } else if (index === 1) {
      this.errorUtilsService.setErrorSummary(errors);
      this.toastrService.error(messageSubmit[index].split(this.stringMapParam).join(process));

    } else {
      this.errorUtilsService.setErrorSummary(errors);
      this.toastrService.error(messageSubmit[index]);

    }

    return index;
  }

}

export const messageSubmit = [
  "{value}が完了しました。",
  "{value}が失敗しました。",
  "システムエラーが発生しました。"
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


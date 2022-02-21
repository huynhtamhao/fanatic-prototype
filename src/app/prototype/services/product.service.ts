import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorSummary } from 'src/app/core/layout/error-summary/error-summary.metadata';
import { ErrorUtilsService } from 'src/app/core/service/error-utils.service';
import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private errorUtilsService: ErrorUtilsService,
    private toastrService: ToastrService,
    private router: Router,
  ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart)
      {
        this.errorUtilsService.clearErrorSummary();
      }
    });
  }

  getProductInfo(productCd: string): Product {
    return PRODUCT_DATA.find(p => p.productCd === productCd) as Product;
  }

  showErrorSummary(result: number) {
    if (result !== 0) {
      this.errorUtilsService.setErrorSummary(errors);
      if (result === 2) {
        this.toastrService.error('システムエラーが発生しました。');
      }
    } else {
      this.errorUtilsService.clearErrorSummary();
    }
  }
}

export const errors: ErrorSummary[] = [
  { errorCode: 'Error 01', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 02', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 03', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 04', errorMessage: 'エラーが発生しました。' },
  { errorCode: 'Error 05', errorMessage: 'エラーが発生しました。' },
]

export const PRODUCT_DATA: Product[] = [
  { productCd: 'CD0001', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10001 },
  { productCd: 'CD0002', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10002 },
  { productCd: 'CD0003', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10003 },
  { productCd: 'CD0004', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10004 },
  { productCd: 'CD0005', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10005 },
  { productCd: 'CD0006', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10006 },
  { productCd: 'CD0007', invoiceNo: 'INVOICE1', storageLocation: 'VN0001', quantity: 10007 },
];


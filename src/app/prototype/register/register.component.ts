/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ProductService } from '../services/product.service';
import { CommonToastrService } from 'src/app/core/service/common-toastr.service';

@Component({
  selector: 'kairos-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public errorSystem = false;

  form: FormGroup = new FormGroup({
    productCd: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(6)]),
    quantity: new FormControl(null, [Validators.required, Validators.pattern('^([0-9]+\.?[0-9]*|\.[0-9]+)$'), Validators.maxLength(6)]),
    invoiceNo: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
    storageLocation: new FormControl(null, [Validators.required, Validators.maxLength(6)]),
    inboundDeliveryStorageLocation: new FormControl(null, [Validators.maxLength(6)]),
  });

  constructor(
    private productService: ProductService,
    private commonToastrService: CommonToastrService,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.location.back();
  }

  onRegister() {
    if (this.form.invalid) {
      return;
    }

    this.submit();
  }

  submit() {
    const result = Math.floor(Math.random() * 3);
    this.productService.showErrorSummary(result);

    if (result === 2) {
      this.errorSystem = true;
      this.lockFormInput();
    } else if (result === 1) {
      this.commonToastrService.update().failure().show();
    } else {
      this.commonToastrService.update().success().show();
    }
  }

  lockFormInput() {
    this.form.controls['productCd'].disable();
    this.form.controls['quantity'].disable();
    this.form.controls['invoiceNo'].disable();
    this.form.controls['storageLocation'].disable();
    this.form.controls['inboundDeliveryStorageLocation'].disable();
  }

}

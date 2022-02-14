import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'kairos-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public errorSystem = false;
  public product = new Product();

  form: FormGroup = new FormGroup({
    productCd: new FormControl(null, [Validators.required, Validators.maxLength(12), Validators.minLength(6)]),
    quantity: new FormControl(null, [Validators.required, Validators.pattern('^([0-9]+\.?[0-9]*|\.[0-9]+)$'), Validators.maxLength(6)]),
    invoiceNo: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
    storageLocation: new FormControl(null, [Validators.required, Validators.maxLength(6)]),
    inboundDeliveryStorageLocation: new FormControl(null, [Validators.maxLength(6)]),
  });

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const productCd = this.activatedRoute.snapshot.paramMap.get('productCd');
    if (!!productCd) {
      this.product = this.productService.getProductInfo(productCd);
      this.form.controls['productCd'].setValue(this.product.productCd);
      this.form.controls['quantity'].setValue(this.product.quantity);
      this.form.controls['invoiceNo'].setValue(this.product.invoiceNo);
      this.form.controls['storageLocation'].setValue(this.product.storageLocation);
    }

  }

  onCancel() {
    this.location.back();
  }

  onUpdate() {
    if (this.form.invalid) {
      return;
    }

    if (!this.submit()) {
      return;
    };
  }

  submit(): boolean {
    if (this.productService.checkErrorMessage('更新') === 2) {
      this.errorSystem = true;
      this.lockFormInput();
      return false;
    }

    return true;
  }

  lockFormInput() {
    this.form.controls['productCd'].disable();
    this.form.controls['quantity'].disable();
    this.form.controls['invoiceNo'].disable();
    this.form.controls['storageLocation'].disable();
    this.form.controls['inboundDeliveryStorageLocation'].disable();
  }

}

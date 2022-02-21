import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'kairos-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.scss']
})
export class InquiryComponent implements OnInit {

  public product = new Product();

  constructor(
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const productCd = this.activeRoute.snapshot.paramMap.get('productCd');
    if (productCd) {
      this.product = this.productService.getProductInfo(productCd);
    }
  }

  moveUpdate() {
    if (!!this.product) {
      this.router.navigate(['/prototype/product/', this.product.productCd]);
    }
  }

  onCancel() {
    this.location.back();
  }

}


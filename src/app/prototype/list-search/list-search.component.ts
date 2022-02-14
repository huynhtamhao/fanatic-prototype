import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
export interface Product {
  productCd: string;
  productName: string;
  description: string;
  quantity: number;
}

const PRODUCT_DATA: Product[] = [
  {productCd: 'CD0001', productName: 'productName 001', description: 'description of product 001', quantity: 10001},
  {productCd: 'CD0002', productName: 'productName 002', description: 'description of product 002', quantity: 10002},
  {productCd: 'CD0003', productName: 'productName 003', description: 'description of product 003', quantity: 10003},
  {productCd: 'CD0004', productName: 'productName 004', description: 'description of product 004', quantity: 10004},
  {productCd: 'CD0005', productName: 'productName 005', description: 'description of product 005', quantity: 10005},
  {productCd: 'CD0006', productName: 'productName 006', description: 'description of product 006', quantity: 10006},
  {productCd: 'CD0007', productName: 'productName 007', description: 'description of product 007', quantity: 10007},
];

@Component({
  selector: 'kairos-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})

export class ListSearchComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion ;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private routerLink: Router,
  ) { }
  public displayedColumns: string[] = ['productCd', 'productName', 'description', 'quantity', 'processing'];
  public quantityTotal = 0;
  public dataSource = new MatTableDataSource<Product>();
  public menuList = ['参照', '更新', 'コピー新規'];
  // form array in search condition
  public formSearch : FormGroup  = new FormGroup({
    productCd: new FormControl(''),
    productName: new FormControl(''),
  });

  ngOnInit(): void {
    var session = sessionStorage.getItem('list-search');
    if (session !== null) {
      this.formSearch.patchValue(JSON.parse(session));
      this.formSearch.updateValueAndValidity;
    }
    this.onSearch();
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(() => this.onSearch(this.paginator.pageIndex, this.paginator.pageSize));
  }

  private getQuantityTotal() {
    var sum = 0;
    this.dataSource.data.forEach(pro => sum = sum + pro.quantity);
    this.quantityTotal = sum;
  }

  public onSearch(pageNumber: number = 0, size: number = 5) {
    if (this.accordion !== undefined) {
      this.accordion.closeAll();
    } 
    this.dataSource.data = PRODUCT_DATA;
    // Save Search Condition
    sessionStorage.setItem('list-search', JSON.stringify(this.formSearch.getRawValue()));

    const code = this.formSearch.get("productCd")?.value;
    const name = this.formSearch.get("productName")?.value;

    if (!!code) {
      this.dataSource.data = this.dataSource.data.filter(pro =>pro.productCd.includes(code));
    }
    if (!!name) {
      this.dataSource.data = this.dataSource.data.filter(pro => pro.productName.includes(name));
    }
    this.paginator.length = this.dataSource.data.length;
    this.dataSource.data = this.dataSource.data.slice(size * pageNumber, size * pageNumber + size);
    this.paginator.pageIndex = pageNumber;
    this.getQuantityTotal();
  }

  public onClear(): void {
    this.formSearch.reset("");
    this.accordion.openAll();
  }

  public moveScreen(i: number, value: any = null) {
    if (this.menuList[value.itemId] === '参照') {
      this.routerLink.navigate(['/prototype/inquiry-product/', this.dataSource.data[i].productCd]);
    } else if (this.menuList[value.itemId]  === '更新') {
      this.routerLink.navigate(['/prototype/product/', this.dataSource.data[i].productCd]);
    }else if (this.menuList[value.itemId]  === 'コピー新規') {
      this.routerLink.navigate(['/prototype/register']);
      console.log("コピー新規");
    }
  }

  public goHome() {
    localStorage.clear();
    this.routerLink.navigate(['/']);
  }

  public calcFlex(ratio: number) {
    return `0 0 calc(100% * ${ratio} /30)`;
  }

}



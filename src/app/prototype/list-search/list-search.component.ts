import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NavigationStart, Router } from '@angular/router';
import { Constants } from 'src/app/core/constants/Constants';
import { ErrorUtilsService } from 'src/app/core/service/error-utils.service';
import { HeaderUtilsService } from 'src/app/core/service/header-utils.service';
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
  {productCd: 'CD0008', productName: 'productName 008', description: 'description of product 008', quantity: 10008},
  {productCd: 'CD0009', productName: 'productName 009', description: 'description of product 009', quantity: 10009},
  {productCd: 'CD0010', productName: 'productName 010', description: 'description of product 010', quantity: 10010},
  {productCd: 'CD0011', productName: 'productName 011', description: 'description of product 011', quantity: 10011},
  {productCd: 'CD0012', productName: 'productName 012', description: 'description of product 012', quantity: 10012},
  {productCd: 'CD0013', productName: 'productName 013', description: 'description of product 013', quantity: 10013},
  {productCd: 'CD0014', productName: 'productName 014', description: 'description of product 014', quantity: 10014},
  {productCd: 'CD0015', productName: 'productName 015', description: 'description of product 015', quantity: 10015},
  {productCd: 'CD0016', productName: 'productName 016', description: 'description of product 016', quantity: 10016},
];

@Component({
  selector: 'kairos-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})

export class ListSearchComponent implements OnInit, AfterViewInit{
  @ViewChild(MatAccordion) accordion!: MatAccordion ;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private routerLink: Router,
    private errorUtilsService: ErrorUtilsService,
    private headerUtils: HeaderUtilsService,
  ) {
    this.headerUtils.setTitle(Constants.SCREEN_NAME.LIST_SEARCH);
    this.routerLink.events.subscribe(event => {
      if (event instanceof NavigationStart)
      {
        this.errorUtilsService.clearErrorSummary();
      }
    });
  }
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
      this.dataSource.data = this.dataSource.data.filter(pro =>pro.productCd.toLowerCase().includes(code.toLowerCase()));
    }
    if (!!name) {
      this.dataSource.data = this.dataSource.data.filter(pro => pro.productName.toLowerCase().includes(name.toLowerCase()));
    }
    this.paginator.length = this.dataSource.data.length;
    this.dataSource.data = this.dataSource.data.slice(size * pageNumber, size * pageNumber + size);
    this.paginator.pageIndex = pageNumber;
    this.getQuantityTotal();
  }

  public onClear(): void {
    this.formSearch.reset("");
    // this.accordion.openAll();
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
    sessionStorage.clear();  
    this.routerLink.navigate(['/']);
  }

  public calcFlex(ratio: number) {
    return `0 0 calc(100% * ${ratio} /30)`;
  }

}



import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
    private formBuilder: FormBuilder,
  ) { }
  public flexGap = `calc(800px *  1/31)`;
  public displayedColumns: string[] = ['productCd', 'productName', 'description', 'quantity', 'processing'];
  public productList = this.formBuilder.array([]);
  public quantityTotal = 0;
  public dataSource = new MatTableDataSource<Product>();
  // form array in search condition
  public formSearch : FormGroup  = new FormGroup({
    productCd: new FormControl(''),
    productName: new FormControl(''),
  });

  ngOnInit(): void {
    this.dataSource.data = PRODUCT_DATA.slice(0,5);
    this.paginator.length = PRODUCT_DATA.length;
    this.getQuantityTotal();
  }

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(() => this.onSearch());
  }

  private getQuantityTotal() {
    var sum = 0;
    this.dataSource.data.forEach(pro => sum = sum + pro.quantity);
    this.quantityTotal = sum;
  }

  public onSearch() {
    this.accordion.closeAll();
    this.dataSource.data = PRODUCT_DATA;
    const code = this.formSearch.get("productCd")?.value;
    const name = this.formSearch.get("productName")?.value;
    if (!!code) {
      this.dataSource.data = this.dataSource.data.filter(pro =>pro.productCd.includes(code));

    }

    if (!!name) {
      this.dataSource.data = this.dataSource.data.filter(pro => pro.productName.includes(name));
    }
    this.paginator.length = this.dataSource.data.length;
    this.dataSource.data = this.dataSource.data.slice(this.paginator.pageSize * this.paginator.pageIndex, 
                                               this.paginator.pageSize * this.paginator.pageIndex + this.paginator.pageSize);
    this.getQuantityTotal();
  }

  public onClear(): void {
    this.formSearch.reset("");
    this.accordion.openAll();
  }

  public calcFlex(ratio: number) {
    return `0 0 calc(800px * ${ratio})`;
  }

}



import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  productCd: string;
  productName: string;
  description: string;
  quantity: number;
}

const PRODUCT_DATA: PeriodicElement[] = [
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

  constructor(
    private formBuilder: FormBuilder,
  ) { }
  public flexGap = `calc(800px *  1/31)`;
  public displayedColumns: string[] = ['productCd', 'productName', 'description', 'quantity', 'processing'];
  public productList = this.formBuilder.array([]);
  public quantityTotal = 0;
  public dataSource = [];

  // form array in search condition
  public formSearch : FormGroup  = new FormGroup({
    productCd: new FormControl(''),
    productName: new FormControl(''),
    managementNo: new FormControl(''),
    printCount: new FormControl('0')
  });

  ngOnInit(): void {
    var i = 0 ;
    while (i !== 5) {
      this.productList.push(this.formBuilder.group({
        productCd: "CD000" + i,
        productName: "product name " + i,
        description: "description of product " + i,
        quantity: 1000 + i,
      }));
      this.quantityTotal = this.quantityTotal + this.productList.at(i).get("quantity")?.value;
      i++;
    }
    
  }

  private getQuantityTotal() {
    // for ()
  }

  public onSearch() {
    this.accordion.closeAll();
  }

  public onClear(): void {
    this.formSearch.reset("");
    this.accordion.openAll();
  }

  public calcFlex(ratio: number) {
    return `0 0 calc(800px * ${ratio})`;
  }

}



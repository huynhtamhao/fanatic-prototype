import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';

export interface Factory {
  factoryId: string;
  factoryName: string;
  factoryIdentifier: string;
  storageLocation: string;
}

const FACTORY_DATA: Factory[] = [
  {factoryId: 'F01', factoryName: '東大阪PC', factoryIdentifier: 'W', storageLocation: 'WH1100'},
  {factoryId: 'F91', factoryName: '東大阪パーツ販売', factoryIdentifier: 'W', storageLocation: 'WH1370'},
];

@Component({
  selector: 'kairos-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss']
})
export class ListRegisterComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion ;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  public displayedColumns: string[] = ['factoryCd', 'factoryName', 'factoryIdentifier', 'storageLocation', 'trash'];
  public factoryList = this.formBuilder.array([]);
  public quantityTotal = 0;
  public dataSource = [];

  public formSearch : FormGroup  = new FormGroup({
    productCd: new FormControl(''),
    productName: new FormControl(''),
  });

  ngOnInit(): void {
    var i = 0 ;
    while (i !== 10) {
      this.factoryList.push(this.formBuilder.group({
        factoryCd: "F000" + i,
        factoryName: "factory name " + i,
        factoryIdentifier: "W ",
        storageLocation: "WH110" + i,
        delete: 0
      }));
      this.quantityTotal = this.quantityTotal + this.factoryList.at(i).get("quantity")?.value;
      i++;
    }
  }

  public onSearch(pageNumber: number = 0, size: number = 5) { 

  }

  public onClear(): void {
    this.formSearch.reset("");
    this.accordion.openAll();
  }

  public calcFlex(ratio: number) {
    return `0 0 calc(100% * ${ratio})`;
  }
}

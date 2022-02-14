import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface Factory {
  factoryCd: string;
  factoryName: string;
  factoryIdentifier: string;
  storageLocation: string;
  delete: number;
}

const FACTORY_DATA: Factory[] = [
  {factoryCd: 'F00', factoryName: '東大阪PC', factoryIdentifier: 'W', storageLocation: 'WH1100', delete: 0},
  {factoryCd: 'F91', factoryName: '東大阪パーツ販売', factoryIdentifier: 'W', storageLocation: 'WH1370', delete: 0},
  {factoryCd: 'F01', factoryName: '東大阪01', factoryIdentifier: 'W', storageLocation: 'WH1101', delete: 0},
  {factoryCd: 'F02', factoryName: '東大阪02', factoryIdentifier: 'W', storageLocation: 'WH1102', delete: 0},
  {factoryCd: 'F03', factoryName: '東大阪03', factoryIdentifier: 'W', storageLocation: 'WH1103', delete: 0},
  {factoryCd: 'F04', factoryName: '東大阪04', factoryIdentifier: 'W', storageLocation: 'WH1104', delete: 0},
  {factoryCd: 'F05', factoryName: '東大阪05', factoryIdentifier: 'W', storageLocation: 'WH1105', delete: 0},
  {factoryCd: 'F06', factoryName: '東大阪06', factoryIdentifier: 'W', storageLocation: 'WH1106', delete: 0},
  {factoryCd: 'F07', factoryName: '東大阪07', factoryIdentifier: 'W', storageLocation: 'WH1107', delete: 0},
  {factoryCd: 'F08', factoryName: '東大阪08', factoryIdentifier: 'W', storageLocation: 'WH1108', delete: 0},
  {factoryCd: 'F09', factoryName: '東大阪09', factoryIdentifier: 'W', storageLocation: 'WH1109', delete: 0},
  {factoryCd: 'F10', factoryName: '東大阪10', factoryIdentifier: 'W', storageLocation: 'WH1110', delete: 0},
];

@Component({
  selector: 'kairos-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss']
})
export class ListRegisterComponent implements OnInit, AfterViewInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion ;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  // @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private routerLink: Router,
  ) { }

  public displayedColumns: string[] = ['factoryCd', 'factoryName', 'factoryIdentifier', 'storageLocation', 'trash'];
  public factoryList = this.formBuilder.array([]);
  public dataList = this.formBuilder.array([]);
  public quantityTotal = 0;
  public dataSource = [];

  formSearch: FormGroup = this.formBuilder.group({
    factoryCd: new FormControl(''),
    factoryName: new FormControl(''),
    factoryList: this.factoryList,
  });

  ngAfterViewInit(): void {
    this.paginator.page.subscribe(() => this.onSearch(this.paginator.pageIndex, this.paginator.pageSize));
  }

  ngOnInit(): void {
    this.onSearch()
  }

  public onSearch(pageNumber: number = 0, size: number = 5) { 
    if (this.accordion !== undefined) {
      this.accordion.closeAll();
    }
    this.factoryList.clear();
    // Save Search Condition
    sessionStorage.setItem('list-register', JSON.stringify(this.formSearch.getRawValue()));

    const code = this.formSearch.get("factoryCd")?.value.toLowerCase();
    const name = this.formSearch.get("factoryName")?.value.toLowerCase();
    var i = 0;
    const from = size * pageNumber;
    const to = size * pageNumber + size;
    console.log('11111111111',this.factoryList.getRawValue());  
    FACTORY_DATA.forEach(pro => {
      let check = true;     
      if (!!code) {
        check = pro.factoryCd.toLowerCase().includes(code);
      }

      if (!!name && check) {
        check = pro.factoryName.toLowerCase().includes(code);
      }

      if (check) {   
        if (from <= i && i < to) {      
          this.factoryList.push(this.formBuilder.group(pro));
        }
        i++;     
      }
    });
    console.log('22222222222',this.formSearch.getRawValue());  
    this.formSearch.get('factoryList')?.updateValueAndValidity();
    // this.table.renderRows();
    this.paginator.length = i;
    this.paginator.pageIndex = pageNumber;
  }

  public onClear(): void {
    this.formSearch.patchValue({
      productCd: "",
      productName: "",
    });
    this.accordion.openAll();
  }

  public goHome() {
    localStorage.clear();
    this.routerLink.navigate(['/']);
  }

  public calcFlex(ratio: number) {
    return `0 0 calc(100% * ${ratio} / 30)`;
  }
}

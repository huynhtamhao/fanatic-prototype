import { formatNumber } from '@angular/common';
import { AfterViewInit, Component, Inject, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogUtilsService } from '@shared/components/dialog-confirm/dialog-utils.service';
import { CommonToastrService } from 'src/app/core/service/common-toastr.service';
@Component({
  selector: 'kairos-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss']
})
export class ListRegisterComponent implements OnInit, AfterViewInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion ;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private routerLink: Router,
    private dialog: DialogUtilsService,
    private toastr: CommonToastrService,
    @Inject(LOCALE_ID) public locale: string,
  ) { }

  public displayedColumns: string[] = ['factoryCd', 'factoryName', 'factoryIdentifier', 'storageLocation', 'delete'];
  public factoryList = this.formBuilder.array([]);
  public dataList = this.formBuilder.array([]);
  public quantityTotal = 0;
  public dataSource = [];
  public pageIndexPrevious = 0;
  public pageSizePrevious = 5;

  formSearch: FormGroup = this.formBuilder.group({
    factoryCd: new FormControl(''),
    factoryName: new FormControl(''),
    factoryList: this.factoryList,
  });

  ngOnInit(): void {
    var i = 0;
    while(i < 25) {
      this.dataList.push(this.formBuilder.group({
        factoryCd: "F0" + i,
        factoryName:  "東大阪0" + i,
        factoryIdentifier: 'W',
        storageLocation: 'WH11' + formatNumber(i, this.locale,'2.0-0'),
        delete: null,
      }));
      i++;
    }
    var session = sessionStorage.getItem('list-register');
    if (session !== null) {
      this.formSearch.patchValue(JSON.parse(session));
      this.formSearch.updateValueAndValidity;
    }
    this.search();
  }

  ngAfterViewInit(): void {
    console.log('pageIndex', this.paginator.pageIndex);
    console.log('pageSize', this.paginator.pageSize);
    
    this.paginator.page.subscribe(() => this.onSearch(this.paginator.pageIndex, this.paginator.pageSize));
  }

  public onSearch(pageNumber: number = 0, size: number = 5) { 

    if (this.formSearch.get('factoryList')?.dirty) {
      // confirm move
      const dialogRef = this.dialog.openDialogConfirmStayOnPage();
      dialogRef.afterClosed().subscribe(res => {
        if(!res) {
          this.search(pageNumber,size);
        } else {
          this.paginator.pageIndex = this.pageIndexPrevious;
          this.paginator.pageSize = this.pageSizePrevious;
        }
      });
    } else {
      this.search(pageNumber,size);
    }  
  }

  private search(pageNumber: number = 0, size: number = 5) {
    if (this.accordion !== undefined) {
      this.accordion.closeAll();
    }
    this.factoryList.clear();

    // Save Search Condition
    sessionStorage.setItem('list-register', JSON.stringify(this.formSearch.getRawValue()));
    // save info page
    this.pageIndexPrevious = pageNumber;
    this.pageSizePrevious = size;

    const code = this.formSearch.get("factoryCd")?.value.toLowerCase();
    const name = this.formSearch.get("factoryName")?.value.toLowerCase();
    var i = 0;
    const from = size * pageNumber;
    const to = size * pageNumber + size;

    this.dataList.getRawValue().forEach(fac => {
      let check = true;     
      if (!!code) {
        check = fac.factoryCd.toLowerCase().includes(code);
      }

      if (!!name && check) {
        check = fac.factoryName.toLowerCase().includes(code);
      }

      if (check) {   
        if (from <= i && i < to) {      
          this.factoryList.push(this.formBuilder.group({
            factoryCd: new FormControl({value: fac.factoryCd, disabled: true}, [Validators.required, Validators.maxLength(3)]),
            factoryName: new FormControl(fac.factoryName, [Validators.required, Validators.maxLength(120)]),
            factoryIdentifier: new FormControl(fac.factoryIdentifier, [Validators.required, Validators.maxLength(3)]),
            storageLocation: new FormControl(fac.storageLocation),
            delete: fac.delete,
            addRow: false,
          }));   
        }
        i++;     
      }
    });
    this.paginator.length = i;
    this.paginator.pageIndex = pageNumber;
    if (this.table !== undefined) {
      this.table.renderRows();
    }
    this.formSearch.markAsPristine();
  }

  public onClear(){
    this.formSearch.patchValue({
      factoryCd: "",
      factoryName: "",
    });
    // this.accordion.openAll();
  }

  public addRow(){
    this.factoryList.push(this.formBuilder.group({
      factoryCd: new FormControl("", [Validators.required, Validators.maxLength(3)]),
      factoryName: new FormControl("", [Validators.required, Validators.maxLength(120)]),
      factoryIdentifier: new FormControl("", [Validators.required, Validators.maxLength(3)]),
      storageLocation: new FormControl(""),
      delete: null,
      addRow: true,
    }));
    this.table.renderRows();
  }

  public removeRow(iRow: number){
    this.factoryList.removeAt(iRow);
    this.table.renderRows();
  }

  public update(){
    if (this.formSearch.get("factoryList")?.invalid) {
      return;
    }
    this.factoryList.getRawValue().forEach(fac =>{
      let i = this.dataList.getRawValue().findIndex(x => x.factoryCd === fac.factoryCd);
      if (i < 0) {
        //add
        this.dataList.push(this.formBuilder.group(fac));
      } else if (fac.delete){
        // delete
        this.dataList.removeAt(i);
      } else { 
        // update    
        this.dataList.setControl(i,this.formBuilder.group(fac));
      }
    });

    // open toast
    this.toastr.update().success().show();
    
    // research
    this.search();
  }

  public goHome() {
    sessionStorage.clear();
    this.routerLink.navigate(['/']);
  }

  public calcFlex(ratio: number) {
    return `0 0 calc(100% * ${ratio} / 30)`;
  }
}

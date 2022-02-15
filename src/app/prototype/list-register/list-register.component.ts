import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogUtilsService } from '@shared/components/dialog-confirm/dialog-utils.service';
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
  ) { }

  public displayedColumns: string[] = ['factoryCd', 'factoryName', 'factoryIdentifier', 'storageLocation', 'delete'];
  public factoryList = this.formBuilder.array([]);
  public dataList = this.formBuilder.array([]);
  public quantityTotal = 0;
  public dataSource = [];

  formSearch: FormGroup = this.formBuilder.group({
    factoryCd: new FormControl(''),
    factoryName: new FormControl(''),
    factoryList: this.factoryList,
  });

  ngOnInit(): void {
    var i = 0;
    while(i !== 10) {
      this.dataList.push(this.formBuilder.group({
        factoryCd: "F0" + i,
        factoryName: "東大阪0" + i,
        factoryIdentifier: 'W',
        storageLocation: 'WH110' + i,
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
    this.paginator.page.subscribe(() => this.onSearch(this.paginator.pageIndex, this.paginator.pageSize));
  }

  public onSearch(pageNumber: number = 0, size: number = 5) { 

    if (this.formSearch.get('factoryList')?.dirty) {
      // confirm move
      const dialogRef = this.dialog.openDialogConfirmStayOnPage();
      dialogRef.afterClosed().subscribe(res => {
        if(!res) {
          this.search(pageNumber,size);
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
            factoryCd: new FormControl({value: fac.factoryCd, disabled: true}, Validators.required),
            factoryName: new FormControl(fac.factoryName, Validators.required),
            factoryIdentifier: new FormControl(fac.factoryIdentifier, [Validators.required]),
            storageLocation: new FormControl(fac.storageLocation, [Validators.required]),
            delete: fac.delete,
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

  public onClear(): void {
    this.formSearch.patchValue({
      factoryCd: "",
      factoryName: "",
    });
    this.accordion.openAll();
  }

  public addRow(){
    this.factoryList.push(this.formBuilder.group({
      factoryCd: new FormControl("", [Validators.required]),
      factoryName: new FormControl("", [Validators.required]),
      factoryIdentifier: new FormControl("", [Validators.required]),
      storageLocation: new FormControl("", [Validators.required]),
      delete: null,
    }));
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

    // open dialog
    this.dialog.openDialogSuccessUpdate(); 
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

import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kairos-list-search',
  templateUrl: './list-search.component.html',
  styleUrls: ['./list-search.component.scss']
})
export class ListSearchComponent implements OnInit {

  constructor() { }
  public flexGap = `calc(800px *  1/31)`;

  // form array in search condition
  public formSearch : FormGroup  = new FormGroup({
    productCd: new FormControl('123'),
    productName: new FormControl(''),
    managementNo: new FormControl(''),
    printCount: new FormControl('0')
  });

  ngOnInit(): void {
  }

  public calcFlex(ratio: number) {
    return `0 0 calc(800px * ${ratio})`;
  }

}



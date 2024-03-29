import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kairos-items-detail',
  templateUrl: './items-detail.component.html',
  styleUrls: ['./items-detail.component.scss']
})
export class ItemsDetailComponent {

  form: FormGroup = new FormGroup({
    CCCCCC: new FormControl(null, [Validators.required]),
    DDDDDD: new FormControl(null, [Validators.required]),
    EEEEEE: new FormControl(null, [Validators.required]),
    FFFFFF: new FormControl(null, [Validators.required]),
    GGGGGG: new FormControl(null, [Validators.required]),
    HHHHHH: new FormControl(null, [Validators.required]),
    JJJJJJ: new FormControl(null, [Validators.required]),
    KKKKKK: new FormControl(null, [Validators.required]),
    LLLLLL: new FormControl(null, [Validators.required]),
    MMMMMM: new FormControl(null, [Validators.required]),
    NNNNNN: new FormControl(null, [Validators.required]),
    QQQQQQ: new FormControl(null, [Validators.required]),
    WWWWWW: new FormControl(null, [Validators.required]),
  });

  constructor(
    private location: Location,
  ) { }

  onCancel() {
    this.location.back();
  }

}

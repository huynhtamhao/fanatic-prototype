/* eslint-disable @typescript-eslint/unbound-method */
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'kairos-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup = new FormGroup({
    productCd: new FormControl(null, [Validators.required, Validators.maxLength(20), Validators.minLength(6)]),
    serialNo: new FormControl(null, [Validators.maxLength(20)]),
    invoiceNo: new FormControl(null, [Validators.required, Validators.maxLength(11)]),
    storageLocation: new FormControl(null, [Validators.required, Validators.maxLength(6)]),
    inboundDeliveryStorageLocation: new FormControl(null, [Validators.maxLength(6)]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Flex display
   */
   public setFlex(flex: number) {
    return '0 0 calc(800px * ' + flex + '/30)';
  }

}

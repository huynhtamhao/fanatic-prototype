import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';

const sharedModule = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgbModule,
  TranslocoModule,
]


@NgModule({
  declarations: [],
  imports: [
    sharedModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    sharedModule,
    NgxMaskModule,
  ]
})
export class SharedModule { }

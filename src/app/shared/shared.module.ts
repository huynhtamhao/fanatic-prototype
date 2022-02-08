import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsModule } from './components/components.module';

const sharedModule = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgbModule,
  TranslocoModule,
  ComponentsModule,
]


@NgModule({
  declarations: [
    ConfirmDialogComponent,
  ],
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule } from 'ngx-mask';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@ngneat/transloco';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { FlexLayoutModule } from '@angular/flex-layout';

const sharedModule = [
  CommonModule,
  FlexLayoutModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  NgbModule,
  TranslocoModule,
  MatCardModule,
  MatExpansionModule,
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

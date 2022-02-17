import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MaterialModule } from '@shared/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { ConfirmDialogComponent } from './new-confirm-dialog/confirm-dialog.component';
import { TranslocoModule } from '@ngneat/transloco';



@NgModule({
  declarations: [
    DialogConfirmComponent,
    MenuListComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MaterialModule,
    FlexLayoutModule,
    TranslocoModule,
  ],
  exports : [
    DialogConfirmComponent,
    MenuListComponent,
    ConfirmDialogComponent,
  ]
})
export class KairosCommonComponentsModule { }

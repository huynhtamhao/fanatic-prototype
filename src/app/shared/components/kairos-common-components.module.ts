import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MaterialModule } from '@shared/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { NewConfirmDialogComponent } from './new-confirm-dialog/new-confirm-dialog.component';



@NgModule({
  declarations: [
    DialogConfirmComponent,
    MenuListComponent,
    NewConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports : [
    DialogConfirmComponent,
    MenuListComponent,
    NewConfirmDialogComponent,
  ]
})
export class KairosCommonComponentsModule { }

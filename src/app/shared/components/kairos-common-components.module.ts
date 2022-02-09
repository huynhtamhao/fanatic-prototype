import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '@shared/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    MenuListComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    MaterialModule,
  ],
  exports : [
    ConfirmDialogComponent,
    MenuListComponent,
  ]
})
export class KairosCommonComponentsModule { }

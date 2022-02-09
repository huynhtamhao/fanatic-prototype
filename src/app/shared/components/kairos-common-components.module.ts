import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MaterialModule } from '@shared/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';



@NgModule({
  declarations: [
    DialogConfirmComponent,
    MenuListComponent,
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
  ]
})
export class KairosCommonComponentsModule { }

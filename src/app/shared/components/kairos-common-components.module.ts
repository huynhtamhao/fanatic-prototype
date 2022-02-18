import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListComponent } from './menu-list/menu-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DialogConfirmComponent } from './dialog-confirm/dialog-confirm.component';
import { ConfirmDialogComponent } from './new-confirm-dialog/confirm-dialog.component';
import { TranslocoModule } from '@ngneat/transloco';
import { InputTooltipTableComponent } from './input-tooltip-table/input-tooltip-table.component';
import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    DialogConfirmComponent,
    MenuListComponent,
    ConfirmDialogComponent,
    InputTooltipTableComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    SharedModule,
    FlexLayoutModule,
    TranslocoModule,
  ],
  exports : [
    DialogConfirmComponent,
    MenuListComponent,
    ConfirmDialogComponent,
    InputTooltipTableComponent,
  ]
})
export class KairosCommonComponentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorTooltipDirective } from './error-tooltip.directive';



@NgModule({
  declarations: [
    ErrorTooltipDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorTooltipDirective,
  ]
})
export class DirectivesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    PersonalRoutingModule.components,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }

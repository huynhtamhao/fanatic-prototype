import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    PersonalRoutingModule
  ]
})
export class PersonalModule { }

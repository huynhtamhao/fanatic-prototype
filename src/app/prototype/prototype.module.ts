import { NgModule } from '@angular/core';
import { PrototypeRoutingModule } from './prototype-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    SharedModule,
    PrototypeRoutingModule,
  ],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'prototype' },
  ],
})
export class PrototypeModule { }

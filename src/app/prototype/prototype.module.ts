import { NgModule } from '@angular/core';
import { PrototypeRoutingModule } from './prototype-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { KairosCommonComponentsModule } from '@shared/components/kairos-common-components.module';



@NgModule({
  declarations: [
    PrototypeRoutingModule.components,
  ],
  imports: [
    SharedModule,
    PrototypeRoutingModule,
    KairosCommonComponentsModule,
  ],
  providers: [
    { provide: TRANSLOCO_SCOPE, useValue: 'prototype' },
  ],
})
export class PrototypeModule { }

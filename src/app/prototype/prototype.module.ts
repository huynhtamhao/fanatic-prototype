import { NgModule } from '@angular/core';
import { PrototypeRoutingModule } from './prototype-routing.module';
import { SharedModule } from '@shared/shared.module';
import { TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { RegisterComponent } from './register/register.component';
import { ListSearchComponent } from './list-search/list-search.component';



@NgModule({
  declarations: [
    RegisterComponent,
    ListSearchComponent,
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './core/layout/main/main.component';

const routes: Routes = [
  {
    path        : '',
    component   : MainComponent,
    // canActivate : [AuthGuard],
    children    : [
      {
        path         : '' ,
        loadChildren : () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path         : 'prototype' ,
        loadChildren : () => import('./prototype/prototype.module').then((m) => m.PrototypeModule),
      },
      {
        path         : 'personal' ,
        loadChildren : () => import('./personal/personal.module').then((m) => m.PersonalModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,  { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

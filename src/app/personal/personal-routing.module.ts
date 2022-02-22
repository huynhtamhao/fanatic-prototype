import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { path: 'change-password', component: ChangePasswordComponent, data: { title: 'パスワード変更' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule {
  static components = [
    ChangePasswordComponent,
  ];
}

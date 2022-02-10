import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { ListRegisterComponent } from './list-register/list-register.component';

export const PROTOTYPE_PATH: any = {
  RegisterComponent: { id: '登録画面', path: '/prototype/register' },
  SearchListComponent: { id: '一覧表示画面', path: '/prototype/list-search' },
  ListRegisterComponent: { id: '一覧登録画面', path: '/prototype/list-register' },
}


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'list-search', component: ListSearchComponent},
  { path: 'list-register', component: ListRegisterComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrototypeRoutingModule {
  static components = [
    RegisterComponent,
    ListSearchComponent,
  ]
}

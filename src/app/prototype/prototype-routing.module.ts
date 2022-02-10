import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListSearchComponent } from './list-search/list-search.component';

export const PROTOTYPE_PATH: any = {
  RegisterComponent: { id: '登録画面', path: '/prototype/register' },
  SearchListComponent: { id: '一覧表示画面', path: '/prototype/list-search' },
}


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'list-search', component: ListSearchComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrototypeRoutingModule {
  static components = [
    RegisterComponent,
    ListSearchComponent
  ]
}

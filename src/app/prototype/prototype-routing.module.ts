import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { ListRegisterComponent } from './list-register/list-register.component';
import { UpdateComponent } from './update/update.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { ItemsDetailComponent } from './items-detail/items-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full'},
  { path: 'register'                  , component: RegisterComponent    , data: {title: '受注登録'} },
  { path: 'list-search'               , component: ListSearchComponent  , data: {title: '一覧表示'} },
  { path: 'list-register'             , component: ListRegisterComponent, data: {title: '一覧登録'} },
  { path: 'product/:productCd'        , component: UpdateComponent      , data: {title: '受注更新'} },
  { path: 'inquiry-product/:productCd', component: InquiryComponent     , data: {title: '受注参照'} },
  { path: 'items-detail'              , component: ItemsDetailComponent , data: {title: '品目登録'} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrototypeRoutingModule {
  static components = [
    RegisterComponent,
    ListSearchComponent,
    UpdateComponent,
    InquiryComponent,
    ItemsDetailComponent,
  ]
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { ListRegisterComponent } from './list-register/list-register.component';
import { UpdateComponent } from './update/update.component';
import { InquiryComponent } from './inquiry/inquiry.component';


const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'list-search', component: ListSearchComponent},
  { path: 'list-register', component: ListRegisterComponent},
  { path: 'product/:productCd', component: UpdateComponent },
  { path: 'inquiry-product/:productCd', component: InquiryComponent },
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
  ]
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminIndexComponent} from "./admin-index/admin-index.component";
import {CreateProductComponent} from "./products/create-product/create-product.component";
import {ShowAllProductComponent} from "./products/show-all-product/show-all-product.component";

const routes: Routes = [
  { path: '', component: AdminIndexComponent,
    children: [
      { path: 'products/create', component: CreateProductComponent },
      { path: 'products', component: ShowAllProductComponent },
      // { path: 'categories/:id', component:  }
    ]},
    { path: 'login', component: AdminIndexComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

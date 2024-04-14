import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesSectionComponent } from "./categories-section/categories-section.component";
import { ShowProductComponent } from "./show-product/show-product.component";
import { HomePageComponent } from "./home-page/home-page.component";
import {TopSelleComponent} from "./top-selle/top-selle.component";


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: HomePageComponent} ,
      { path: 'categories', component: CategoriesSectionComponent},
      { path: 'products', component: TopSelleComponent},
      { path: 'product', component: ShowProductComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForntEndRoutingModule { }

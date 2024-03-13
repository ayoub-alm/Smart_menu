import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriesSectionComponent} from "./categories-section/categories-section.component";
import { ProductCardComponent } from './product-card/product-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ShowProductComponent } from './show-product/show-product.component';
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'categories', component: CategoriesSectionComponent },
  { path: 'products', component: ProductCardComponent },
  { path: 'product', component: ShowProductComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

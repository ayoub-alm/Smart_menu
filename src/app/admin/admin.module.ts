import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {AdminIndexComponent} from "./admin-index/admin-index.component";
import { CreateProductComponent } from './products/create-product/create-product.component';
import { ShowAllProductComponent } from './products/show-all-product/show-all-product.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import { AdminLoginComponent } from './admin-login/admin-login.component';



@NgModule({
  declarations: [


    CreateProductComponent,
      ShowAllProductComponent,
      AdminLoginComponent
  ],
    imports: [
        CommonModule,
        MatIconModule,
        RouterModule,
        ReactiveFormsModule
    ],
  bootstrap: [AdminIndexComponent]
})
export class AdminModule { }

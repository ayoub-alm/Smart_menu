import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import {MatIconModule} from "@angular/material/icon";


import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';

import { ProductCardComponent } from './product-card/product-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { FooterComponent } from './footer/footer.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { PartneresComponent } from './partneres/partneres.component';
import { AdminIndexComponent } from '../admin/admin-index/admin-index.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TopSelleComponent } from './top-selle/top-selle.component';
import { BasketComponent } from './basket/basket.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
    declarations: [
        ProductCardComponent,
        NavBarComponent,
        CategoriesSectionComponent,
        HeaderSectionComponent,
        FooterComponent,
        ShowProductComponent,
        PartneresComponent,
        AdminIndexComponent,
        HomePageComponent,
        TopSelleComponent,
        BasketComponent,
        SellerLoginComponent,
        SellerRegisterComponent,
        ProductDialogComponent,

    ],
    imports: [
        RouterModule,
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatButtonModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatChipsModule,
        MatDialogModule,
    ],
    providers: [],
    exports: [
        BasketComponent
    ],
    bootstrap: [HomePageComponent]
})
export class FrontModule { }

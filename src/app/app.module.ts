import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CategoriesSectionComponent } from './categories-section/categories-section.component';
import { HeaderSectionComponent } from './header-section/header-section.component';
import { TopVenteSectionComponent } from './top-vente-section/top-vente-section.component';
import { FooterComponent } from './footer/footer.component';
import { ShowProductComponent } from './show-product/show-product.component';
import { HomePageComponent } from './home-page/home-page.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormGroup, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {MatChipsModule} from "@angular/material/chips";
import { PartneresComponent } from './partneres/partneres.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    NavBarComponent,
    CategoriesSectionComponent,
    HeaderSectionComponent,
    TopVenteSectionComponent,
    FooterComponent,
    ShowProductComponent,
    HomePageComponent,
    PartneresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule, // Import BrowserAnimationsModule if not already imported
    MatExpansionModule, // Import MatExpansionModule for mat-accordion
    ReactiveFormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

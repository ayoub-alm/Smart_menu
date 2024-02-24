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
import {HttpClient, HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ProductCardComponent,
    NavBarComponent,
    CategoriesSectionComponent,
    HeaderSectionComponent,
    TopVenteSectionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

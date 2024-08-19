import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';

// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

// Form Modules
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { BasketComponent } from './fornt-end/basket/basket.component';
import { CategoriesSectionComponent } from './fornt-end/categories-section/categories-section.component';
import { FooterComponent } from './fornt-end/footer/footer.component';
import { HeaderSectionComponent } from './fornt-end/header-section/header-section.component';
import { HomePageComponent } from './fornt-end/home-page/home-page.component';
import { NavBarComponent } from './fornt-end/nav-bar/nav-bar.component';
import { ProductDialogComponent } from './fornt-end/product-dialog/product-dialog.component';
import { ShowProductComponent } from './fornt-end/show-product/show-product.component';
import { PartneresComponent } from './fornt-end/partneres/partneres.component';
import { AppRoutingModule } from './app-routing.module';
import { KioskComponent } from './fornt-end/kiosk/kiosk.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavBarComponent,
    BasketComponent,
    ShowProductComponent,
    ProductDialogComponent,
    FooterComponent,
    CategoriesSectionComponent,
    HeaderSectionComponent,
    PartneresComponent,
    KioskComponent
  ],
  imports: [
    RouterModule,
    RouterOutlet,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
